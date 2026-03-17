import type { Token } from "../types";

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";
const PRICE_CACHE_MS = 2 * 60 * 1000;

const PLATFORM_MAP: Record<string, string> = {
  ethereum: "ethereum",
  eth: "ethereum",
  "ethereum mainnet": "ethereum",
  mainnet: "ethereum",
  bsc: "binance-smart-chain",
  binance: "binance-smart-chain",
  "bnb chain": "binance-smart-chain",
  polygon: "polygon-pos",
  matic: "polygon-pos",
  arbitrum: "arbitrum-one",
  optimism: "optimistic-ethereum",
  solana: "solana",
  tron: "tron",
};

const NATIVE_COIN_IDS: Record<string, string> = {
  ethereum: "ethereum",
  eth: "ethereum",
  bsc: "binancecoin",
  polygon: "matic-network",
  arbitrum: "ethereum",
  optimism: "ethereum",
  solana: "solana",
  tron: "tron",
};

const NATIVE_SYMBOLS: Record<string, string> = {
  ETH: "ethereum",
  BNB: "binancecoin",
  MATIC: "matic-network",
  SOL: "solana",
  TRX: "tron",
};

class PriceService {
  private cache = new Map<string, { rate: number; ts: number }>();

  private cacheKey(token: Token): string {
    const net = (token.network || "").toLowerCase();
    const addr = token.address?.toLowerCase() || "native";
    return `${net}:${addr}`;
  }

  private isNativeToken(token: Token): boolean {
    if (!token.address || token.address === "0x" || token.address === "0x0000000000000000000000000000000000000000") return true;
    const s = (token.symbol || "").toUpperCase();
    return ["ETH", "BNB", "MATIC", "SOL", "TRX"].includes(s);
  }

  private isStablecoin(token: Token): boolean {
    const s = (token.symbol || "").toUpperCase();
    return ["USDT", "USDC", "USDC.E", "DAI", "BUSD", "TUSD", "FRAX"].includes(s);
  }

  async getUsdRate(token: Token): Promise<number> {
    if (this.isStablecoin(token)) return 1;
    const key = this.cacheKey(token);
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.ts < PRICE_CACHE_MS) return cached.rate;

    try {
      let rate = 0;
      const net = (token.network || "ethereum").toLowerCase().split(/[\s-]/)[0];
      const platform = PLATFORM_MAP[net] || "ethereum";

      if (this.isNativeToken(token)) {
        const coinId = NATIVE_SYMBOLS[(token.symbol || "").toUpperCase()] ?? NATIVE_COIN_IDS[platform] ?? "ethereum";
        const url = `${COINGECKO_BASE}/simple/price?ids=${coinId}&vs_currencies=usd`;
        const res = await fetch(url);
        const json = await res.json();
        rate = Number(json?.[coinId]?.usd ?? 0);
      } else if (token.address) {
        const addr = token.address.toLowerCase();
        const url = `${COINGECKO_BASE}/simple/token_price/${platform}?contract_addresses=${addr}&vs_currencies=usd`;
        const res = await fetch(url);
        const json = await res.json();
        rate = Number(json?.[addr]?.usd ?? 0);
      }

      if (rate > 0) this.cache.set(key, { rate, ts: Date.now() });
      return rate;
    } catch {
      return 0;
    }
  }

  async updateTokenFiatRates(tokens: (Token | null)[]): Promise<void> {
    await Promise.all(
      tokens
        .filter((t): t is Token => t != null && (t.fiatRate == null || t.fiatRate === 0))
        .map(async (t) => {
          const rate = await this.getUsdRate(t);
          if (rate > 0) t.fiatRate = rate;
        })
    );
  }
}

export const priceService = new PriceService();
