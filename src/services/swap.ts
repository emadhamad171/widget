import {
  type ApprovalType,
  type CosignApprovalToSign,
  type CreateIntentData,
  InsufficientAllowanceError,
  type Permit2ApprovalToSign,
  preparePermit2Approval,
} from "@hot-pot/hotpot-sdk-ts";
import {
  createWalletClient,
  custom,
  parseAbi,
  encodeFunctionData,
  maxUint256,
} from "viem";

import type { Quote } from "@hot-pot/hotpot-sdk-ts";

import { Token, WalletState } from "../types";
import { hotpotApiClient } from "./api";

const ERC20_ABI = parseAbi([
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
]);

export interface SwapParams {
  fromToken: Token;
  toToken: Token;
  amount: string;
  quote: Quote;
  wallet: WalletState;
  slippage: number;
  /** Address to receive swapped tokens. If empty, uses connected wallet (self-swap). */
  destinationAddress?: string;
}

export class SwapService {
  async executeSwap(params: SwapParams): Promise<string> {
    const { fromToken, toToken, quote, wallet, destinationAddress } = params;

    if (!wallet.connected || !wallet.address) {
      throw new Error("Wallet not connected");
    }

    const quoteId = quote.id;
    if (!quoteId) {
      throw new Error("Invalid quote: missing id");
    }

    const destAddrRaw = (destinationAddress || "").trim() || wallet.address;
    const [sourceAddr, destAddr, refundAddr] = await this.normalizeIntentAddresses(
      wallet,
      quote,
      wallet.address,
      destAddrRaw,
    );

    const intent = await hotpotApiClient.createIntent(
      quoteId,
      null,
      sourceAddr,
      destAddr,
      refundAddr,
    );

    const approvalType = this.getApprovalType(intent);

    if (wallet.type === "evm" && approvalType === "permit2") {
      return this.executeEVMPermit2(intent, quote, wallet, fromToken);
    }

    if (wallet.type === "tron" && approvalType === "permit2") {
      return this.executeTronPermit2(intent, quote, wallet, fromToken);
    }

    if (wallet.type === "tron" && approvalType === "cosign") {
      return this.executeTronCosign(intent, wallet);
    }

    throw new Error(
      `Unsupported wallet/approval: ${wallet.type} / ${approvalType}`
    );
  }

  private async normalizeIntentAddresses(
    wallet: WalletState,
    quote: Quote,
    userSource: string,
    userDest: string,
  ): Promise<[string, string, string]> {
    const sourceChain = quote.source_chain;
    const destChain = quote.dest_chain;

    const tronWeb = wallet.type === "tron" ? await this.getTronWeb() : null;

    const toTronHex = (addr: string): string => {
      if (!addr) return addr;
      if (addr.startsWith("41") && addr.length === 42) return addr;
      if (addr.startsWith("T") && tronWeb?.address?.toHex) {
        try {
          return tronWeb.address.toHex(addr);
        } catch {
          return addr;
        }
      }
      return addr;
    };

    const tronHexToEvm = (hex: string): string => {
      if (!hex?.startsWith("41") || hex.length !== 42) return hex;
      return "0x" + hex.slice(2).toLowerCase();
    };

    const toTronBase58 = (addr: string): string => {
      if (!addr) return addr;
      if (addr.startsWith("T")) return addr;
      if (addr.startsWith("41") && tronWeb?.address?.fromHex) {
        try {
          return tronWeb.address.fromHex(addr);
        } catch {
          return addr;
        }
      }
      return addr;
    };

    const sourceTronHex = toTronHex(userSource);
    const destTronHex = toTronHex(userDest);

    const sourceAddr =
      sourceChain === 2
        ? toTronBase58(userSource)
        : userSource.startsWith("0x")
          ? userSource
          : tronHexToEvm(sourceTronHex);
    const refundAddr = sourceAddr;
    const destAddr =
      destChain === 2
        ? toTronBase58(userDest)
        : userDest.startsWith("0x")
          ? userDest
          : tronHexToEvm(destTronHex);

    return [sourceAddr, destAddr, refundAddr];
  }

  private getApprovalType(intent: CreateIntentData): ApprovalType {
    const m = intent.approval_mechanism;
    if (m === "htlc") return "psbt";
    return m;
  }

  private async executeEVMPermit2(
    intent: CreateIntentData,
    quote: Quote,
    wallet: WalletState,
    fromToken: Token
  ): Promise<string> {
    if (typeof window === "undefined" || !window.ethereum) {
      throw new Error("Ethereum wallet not found");
    }

    const chainId = wallet.chainId ?? 1;
    const permit2Params = preparePermit2Approval(
      intent.params_to_sign as Permit2ApprovalToSign,
      quote,
      wallet.address!,
      intent.deadline_secs
    );

    const walletClient = createWalletClient({
      account: wallet.address as `0x${string}`,
      chain: { id: chainId } as any,
      transport: custom(window.ethereum),
    });

    let signature: string;
    try {
      signature = await walletClient.signTypedData({
        domain: permit2Params.domain,
        types: permit2Params.types as any,
        primaryType: "PermitWitnessTransferFrom",
        message: permit2Params.message,
      });
    } catch (err: any) {
      if (err?.code === 4001 || err?.message?.includes("rejected")) {
        throw new Error("Transaction rejected by user");
      }
      throw err;
    }

    try {
      await hotpotApiClient.addApproval(
        { type: "permit2", signed_data: signature },
        intent.intent_id
      );
    } catch (err: any) {
      if (err instanceof InsufficientAllowanceError) {
        await this.approveTokenIfNeeded(fromToken, wallet, intent, quote, chainId);
        signature = await walletClient.signTypedData({
          domain: permit2Params.domain,
          types: permit2Params.types as any,
          primaryType: "PermitWitnessTransferFrom",
          message: permit2Params.message,
        });
        await hotpotApiClient.addApproval(
          { type: "permit2", signed_data: signature },
          intent.intent_id
        );
      } else {
        throw err;
      }
    }

    return intent.intent_id;
  }

  private async approveTokenIfNeeded(
    token: Token,
    wallet: WalletState,
    intent: CreateIntentData,
    quote: Quote,
    chainId: number
  ): Promise<void> {
    if (!token.address) return;

    const params = intent.params_to_sign as Permit2ApprovalToSign;
    const spender = params.permit2_contract_address;
    const requiredAmount = BigInt(quote.source_amount_lots);

    const allowance = await this.checkAllowance(
      token.address,
      wallet.address!,
      spender,
      chainId
    );

    if (allowance >= requiredAmount) return;

    const data = encodeFunctionData({
      abi: ERC20_ABI,
      functionName: "approve",
      args: [spender as `0x${string}`, maxUint256],
    });

    const txHash = await window.ethereum!.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: wallet.address,
          to: token.address,
          data,
          value: "0x0",
        },
      ],
    });

    await this.waitForTransactionConfirmation(txHash as string, 60000);
  }

  private async waitForTransactionConfirmation(
    txHash: string,
    maxWaitMs: number = 60000
  ): Promise<void> {
    const start = Date.now();
    const pollInterval = 2000;

    while (Date.now() - start < maxWaitMs) {
      try {
        const receipt = await window.ethereum!.request({
          method: "eth_getTransactionReceipt",
          params: [txHash],
        });
        if (receipt && (receipt as any).status !== "0x0") {
          return;
        }
      } catch {
        // ignore
      }
      await new Promise((r) => setTimeout(r, pollInterval));
    }
    throw new Error("Transaction confirmation timeout");
  }

  private async checkAllowance(
    tokenAddress: string,
    owner: string,
    spender: string,
    chainId: number
  ): Promise<bigint> {
    const data = encodeFunctionData({
      abi: ERC20_ABI,
      functionName: "allowance",
      args: [owner as `0x${string}`, spender as `0x${string}`],
    });

    const result = await window.ethereum!.request({
      method: "eth_call",
      params: [
        {
          to: tokenAddress,
          data,
        },
        "latest",
      ],
    });

    return BigInt(result as string);
  }

  private async getTronWeb(): Promise<any> {
    const tronLink = (window as any).tronLink;
    if (!tronLink) return null;
    if (!tronLink.ready) {
      const res = await tronLink.request({ method: "tron_requestAccounts" });
      if (res?.code !== 200) return null;
    }
    return tronLink.tronWeb ?? (window as any).tronWeb;
  }

  private async executeTronPermit2(
    intent: CreateIntentData,
    quote: Quote,
    wallet: WalletState,
    fromToken: Token
  ): Promise<string> {
    const tronWeb = await this.getTronWeb();
    if (!tronWeb?.ready) {
      throw new Error("Tron wallet not found or not ready");
    }

    const permit2Params = preparePermit2Approval(
      intent.params_to_sign as Permit2ApprovalToSign,
      quote,
      wallet.address!,
      intent.deadline_secs
    );

    let signature: string;
    try {
      signature = await tronWeb.trx._signTypedData(
        permit2Params.domain,
        permit2Params.types,
        permit2Params.message
      );
    } catch (err: any) {
      if (err?.message?.includes("Confirmation declined") || err?.message?.includes("rejected")) {
        throw new Error("Transaction rejected by user");
      }
      throw err;
    }

    try {
      await hotpotApiClient.addApproval(
        { type: "permit2", signed_data: signature },
        intent.intent_id
      );
    } catch (err: any) {
      if (err instanceof InsufficientAllowanceError) {
        await this.approveTronTokenIfNeeded(fromToken, wallet, intent, quote);
        signature = await tronWeb.trx._signTypedData(
          permit2Params.domain,
          permit2Params.types,
          permit2Params.message
        );
        await hotpotApiClient.addApproval(
          { type: "permit2", signed_data: signature },
          intent.intent_id
        );
      } else {
        throw err;
      }
    }

    return intent.intent_id;
  }

  private readonly TRC20_ABI = [
    { constant: true, inputs: [{ name: "owner", type: "address" }, { name: "spender", type: "address" }], name: "allowance", outputs: [{ type: "uint256" }], type: "function" },
    { inputs: [{ name: "spender", type: "address" }, { name: "value", type: "uint256" }], name: "approve", outputs: [{ type: "bool" }], type: "function" },
  ];

  private async approveTronTokenIfNeeded(
    token: Token,
    wallet: WalletState,
    intent: CreateIntentData,
    quote: Quote
  ): Promise<void> {
    if (!token.address) return;

    const tronWeb = await this.getTronWeb();
    if (!tronWeb?.ready) throw new Error("Tron wallet not ready");

    const params = intent.params_to_sign as Permit2ApprovalToSign;
    const spender = params.permit2_contract_address;
    const requiredAmount = BigInt(quote.source_amount_lots);

    const contract = await tronWeb.contract(this.TRC20_ABI, token.address);
    const allowanceResult = await contract.allowance(wallet.address!, spender).call();
    const allowance = BigInt(allowanceResult.toString());

    if (allowance >= requiredAmount) return;

    const sendResult = await contract.approve(spender, maxUint256.toString()).send({
      feeLimit: 150_000_000,
      shouldPollResponse: true,
    });

    const txId = typeof sendResult === "string" ? sendResult : (sendResult as any)?.txid;
    if (!txId) throw new Error("Failed to get Tron approve tx id");
  }

  private async executeTronCosign(
    intent: CreateIntentData,
    wallet: WalletState
  ): Promise<string> {
    const tronWeb = await this.getTronWeb();
    if (!tronWeb?.ready) {
      throw new Error("Tron wallet not found or not ready");
    }

    try {
      const params = intent.params_to_sign as CosignApprovalToSign;
      const txBase64 = params.transaction;

      const signedTx = await tronWeb.trx.sign(txBase64);
      await hotpotApiClient.addApproval(
        {
          type: "cosign",
          signed_data: {
            transaction: signedTx,
            user_address: wallet.address!,
          },
        },
        intent.intent_id
      );

      return intent.intent_id;
    } catch (err: any) {
      if (err?.message?.includes("Confirmation declined")) {
        throw new Error("Transaction rejected by user");
      }
      throw err;
    }
  }
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const swapService = new SwapService();
