import { encodeFunctionData, parseUnits, toHex } from "viem";
import type { Token, WalletState } from "../types";

const WRAPPED_SYMBOLS: Record<string, string> = {
  TRX: "WTRX",
  ETH: "WETH",
};

/** Returns wrapped token symbol for native tokens (TRX -> WTRX, ETH -> WETH) */
export function getWrappedTokenSymbol(nativeSymbol: string): string {
  return WRAPPED_SYMBOLS[nativeSymbol?.toUpperCase()] ?? nativeSymbol;
}

/** Returns true if token is native and needs wrapping before swap */
export function needsWrapping(token: Token | null): boolean {
  if (!token) return false;
  const net = (token.network || "").toLowerCase();
  if (net !== "ethereum" && net !== "tron" && !net.includes("eth")) return false;
  const wrapped = token.wrapped_token_address?.trim();
  if (!wrapped) return false;
  const addr = (token.address || "").trim();
  if (!addr || addr === "0x" || addr === "0x0000000000000000000000000000000000000000") return true;
  const addrL = addr.toLowerCase();
  const wL = wrapped.trim().toLowerCase();
  return addrL !== wL;
}

export async function wrapNativeToken(
  token: Token,
  wallet: WalletState,
  amount: string
): Promise<string> {
  const wrappedAddr = token.wrapped_token_address?.trim();
  if (!wrappedAddr) {
    throw new Error(`Wrapped token address not available for ${token.symbol}`);
  }
  if (!wallet.address) {
    throw new Error("Wallet not connected");
  }
  const net = (token.network || "").toLowerCase();
  const decimals = token.decimals ?? (net === "tron" ? 6 : 18);

  if (net === "tron") {
    return wrapTron(wrappedAddr, amount, wallet.address, decimals);
  }
  return wrapEthereum(wrappedAddr, amount, wallet.address, decimals);
}

async function wrapEthereum(
  wrappedAddr: string,
  amount: string,
  userAddr: string,
  decimals: number
): Promise<string> {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("Ethereum wallet not found");
  }
  if (!wrappedAddr.startsWith("0x") || !userAddr.startsWith("0x")) {
    throw new Error("Invalid Ethereum address format");
  }

  const amountWei = parseUnits(amount.replace(/,/g, ""), decimals);
  const depositAbi = [
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ] as const;

  const data = encodeFunctionData({
    abi: depositAbi,
    functionName: "deposit",
  });

  const txHash = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: userAddr,
        to: wrappedAddr,
        data,
        value: toHex(amountWei),
      },
    ],
  });

  await waitForEvmConfirmation(txHash as string);
  return txHash as string;
}

async function wrapTron(
  wrappedAddr: string,
  amount: string,
  userAddr: string,
  decimals: number
): Promise<string> {
  const tronWeb = await getTronWeb();
  if (!tronWeb?.ready) {
    throw new Error("TronLink not connected");
  }

  const amountClean = amount.replace(/,/g, "").trim();
  const amountSun = parseUnits(amountClean, decimals);

  const result = await tronWeb.transactionBuilder.triggerSmartContract(
    wrappedAddr,
    "deposit()",
    {
      feeLimit: 100_000_000,
      callValue: amountSun.toString(),
    },
    [],
    userAddr
  );

  if (!result?.transaction) {
    throw new Error("Failed to build wrap transaction");
  }

  const signedTx = await tronWeb.trx.sign(result.transaction);
  const broadcastResult = await tronWeb.trx.sendRawTransaction(signedTx);

  const txId =
    typeof broadcastResult === "string"
      ? broadcastResult
      : (broadcastResult as { txid?: string })?.txid;

  if (!txId) {
    throw new Error("Failed to obtain Tron transaction id");
  }

  const res = broadcastResult as { result?: boolean; code?: string; message?: string };
  if (res?.result === false) {
    throw new Error(
      `Broadcast failed: ${res?.code || ""} ${res?.message || ""}`.trim()
    );
  }

  await waitForTronConfirmation(txId, tronWeb);
  return txId;
}

async function getTronWeb(): Promise<any> {
  const tronLink = (window as any).tronLink;
  if (!tronLink) return null;
  if (!tronLink.ready) {
    const res = await tronLink.request({ method: "tron_requestAccounts" });
    if (res?.code !== 200) return null;
  }
  return tronLink.tronWeb ?? (window as any).tronWeb;
}

async function waitForEvmConfirmation(
  txHash: string,
  maxWaitMs = 120_000,
  pollMs = 3000
): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    try {
      const receipt = await window.ethereum!.request({
        method: "eth_getTransactionReceipt",
        params: [txHash],
      });
      if (receipt && (receipt as any).status !== "0x0") return;
      if (receipt && (receipt as any).status === "0x0") {
        throw new Error("Transaction failed");
      }
    } catch (e: any) {
      if (e?.message?.includes("Transaction failed")) throw e;
    }
    await new Promise((r) => setTimeout(r, pollMs));
  }
  throw new Error(`Confirmation timeout after ${maxWaitMs / 1000}s`);
}

async function waitForTronConfirmation(
  txId: string,
  tronWeb: any,
  maxWaitMs = 120_000,
  pollMs = 1000
): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    try {
      const info = await tronWeb.trx.getTransactionInfo(txId);
      if (info?.receipt?.result === "SUCCESS") return;
      if (info?.receipt?.result === "FAILED" || info?.receipt?.result === "REVERT") {
        throw new Error("Transaction failed");
      }
    } catch (e: any) {
      if (e?.message?.includes("Transaction failed")) throw e;
    }
    await new Promise((r) => setTimeout(r, pollMs));
  }
  throw new Error(`Confirmation timeout after ${maxWaitMs / 1000}s`);
}
