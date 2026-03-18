import { createPublicClient, custom, formatUnits, getAddress } from "viem";
import type { Token, WalletState } from "../types";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
// Network names from API can vary: "Ethereum", "Ethereum Mainnet", "BSC", "BNB Chain", etc.
const EVM_CHAIN_TO_NETWORK: Record<number, string[]> = {
  1: ["ethereum", "eth", "ethereum mainnet", "mainnet"],
  56: ["bsc", "binance", "binance smart chain", "bnb chain", "bnb"],
  137: ["polygon", "matic"],
  42161: ["arbitrum"],
  10: ["optimism"],
};

const ERC20_ABI = [
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

function tokenNetworkMatchesWallet(
  token: Token,
  wallet: WalletState
): boolean {
  const tokenNet = (token.network || "").toLowerCase();
  if (!wallet.connected || !wallet.address) return false;

  if (wallet.type === "evm") {
    const chainId = wallet.chainId ?? 1;
    const variants = EVM_CHAIN_TO_NETWORK[chainId] ?? ["ethereum", "eth", "mainnet"];
    return variants.some((v) => tokenNet === v || tokenNet.startsWith(v + " "));
  }
  if (wallet.type === "tron") return tokenNet === "tron";
  if (wallet.type === "solana") return tokenNet === "solana";
  return false;
}

const NATIVE_ETH_PLACEHOLDERS = [
  "0x0000000000000000000000000000000000000000",
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  "0x",
  "native",
  "",
];

function isEVMNative(token: Token): boolean {
  if (!token.address) return true;
  const s = (token.symbol || "").toUpperCase();
  if (s === "ETH") {
    const addr = (token.address || "").toLowerCase();
    return NATIVE_ETH_PLACEHOLDERS.some((p) => addr === p || !addr.trim());
  }
  const addr = token.address.toLowerCase();
  return addr === ZERO_ADDRESS || addr === "0x";
}

function isTronNative(token: Token): boolean {
  const s = (token.symbol || "").toUpperCase();
  return s === "TRX" || !token.address;
}

function isSolanaNative(token: Token): boolean {
  const s = (token.symbol || "").toUpperCase();
  return s === "SOL";
}

export function getPreferredNetworkForWallet(wallet: WalletState): string | null {
  if (!wallet.connected) return null;
  if (wallet.type === "tron") return "tron";
  if (wallet.type === "solana") return "solana";
  if (wallet.type === "evm") {
    const chainId = wallet.chainId ?? 1;
    const variants = EVM_CHAIN_TO_NETWORK[chainId];
    return variants?.[0] ?? "ethereum";
  }
  return null;
}

export class BalanceService {
  async getBalance(token: Token, wallet: WalletState): Promise<string | null> {
    if (!tokenNetworkMatchesWallet(token, wallet)) {
      console.log("[HotPot] getBalance: network mismatch", { symbol: token.symbol, tokenNetwork: token.network, walletType: wallet.type, chainId: wallet.chainId });
      return null;
    }

    if (wallet.type === "evm") return this.getEVMBalance(token, wallet);
    if (wallet.type === "tron") return this.getTronBalance(token, wallet);
    if (wallet.type === "solana") return this.getSolanaBalance(token, wallet);
    return null;
  }

  private async getEVMBalance(
    token: Token,
    wallet: WalletState
  ): Promise<string | null> {
    if (typeof window === "undefined" || !window.ethereum || !wallet.address)
      return null;

    try {
      const eth = window.ethereum as any;
      const decimals = token.decimals ?? 18;

      if (isEVMNative(token)) {
        const hex = (await eth.request({
          method: "eth_getBalance",
          params: [wallet.address, "latest"],
        })) as string;
        const wei = BigInt(hex);
        return formatUnits(wei, decimals);
      }

      const addr = token.address!;
      const client = createPublicClient({
        chain: { id: wallet.chainId ?? 1 } as any,
        transport: custom(eth),
      });

      let decimalsToUse = token.decimals ?? 18;
      try {
        const tokenDecimals = await client.readContract({
          address: getAddress(addr) as `0x${string}`,
          abi: ERC20_ABI,
          functionName: "decimals",
        });
        decimalsToUse = Number(tokenDecimals);
      } catch {
        /* use token.decimals or 18 */
      }

      const raw = await client.readContract({
        address: getAddress(addr) as `0x${string}`,
        abi: ERC20_ABI,
        functionName: "balanceOf",
        args: [wallet.address as `0x${string}`],
      });

      return formatUnits(raw as bigint, decimalsToUse);
    } catch (err) {
      console.warn("[HotPot] getEVMBalance failed", { symbol: token.symbol, address: token.address?.slice(0, 12) + "...", error: err });
      return null;
    }
  }

  private async ensureTronReady(): Promise<any> {
    const tronLink = (window as any).tronLink;
    if (!tronLink) return null;
    if (!tronLink.ready) {
      try {
        const res = await tronLink.request({ method: "tron_requestAccounts" });
        if (res?.code !== 200) return null;
      } catch {
        return null;
      }
    }
    return tronLink.tronWeb ?? (window as any).tronWeb;
  }

  private async getTronBalance(
    token: Token,
    wallet: WalletState
  ): Promise<string | null> {
    const tronWeb = await this.ensureTronReady();
    if (!tronWeb?.ready || !wallet.address) return null;

    try {
      if (isTronNative(token)) {
        const sun = await tronWeb.trx.getBalance(wallet.address);
        const trx = Number(sun) / 1e6;
        return String(trx);
      }

      const contract = await tronWeb.contract().at(token.address!);
      const raw = await contract.balanceOf(wallet.address).call();
      const decimals = token.decimals ?? 6;
      const value = Number(raw.toString()) / Math.pow(10, decimals);
      return String(value);
    } catch {
      return null;
    }
  }

  private async getSolanaBalance(
    token: Token,
    wallet: WalletState
  ): Promise<string | null> {
    if (!wallet.address) return null;

    const RPC = "https://api.mainnet-beta.solana.com";

    try {
      if (isSolanaNative(token)) {
        const res = await fetch(RPC, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "getBalance",
            params: [wallet.address],
          }),
        });
        const json = await res.json();
        const lamports = Number(json?.result?.value ?? 0);
        return String(lamports / 1e9);
      }

      const res = await fetch(RPC, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getTokenAccountsByOwner",
          params: [
            wallet.address,
            { mint: token.address },
            { encoding: "jsonParsed" },
          ],
        }),
      });
      const json = await res.json();
      const accounts = json?.result?.value ?? [];
      if (!accounts.length) return "0";
      const info = accounts[0]?.account?.data?.parsed?.info;
      const uiAmount = info?.tokenAmount?.uiAmount ?? 0;
      return String(uiAmount);
    } catch {
      return null;
    }
  }
}

export const balanceService = new BalanceService();
