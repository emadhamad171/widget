import { Token } from "../types";
import { hotpotApiClient } from "./api";
import { networksService, type NetworkInfo } from "./networks";

interface ApiToken {
  network_id: number;
  name: string;
  contract_address: string;
  symbol: string;
  icon_url: string;
  wrapped_token_address?: string | null;
}

export class TokenService {
  private tokensCache: Token[] | null = null;
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000;

  private mapApiTokenToModel(apiToken: ApiToken, networks: NetworkInfo[]): Token {
    const network = networks.find((n) => n.id === apiToken.network_id);
    const networkName = network?.name?.toLowerCase() ?? "ethereum";
    const decimals = networksService.getDecimalsForNetwork(networkName);

    return {
      address: apiToken.contract_address || undefined,
      symbol: apiToken.symbol,
      name: apiToken.name,
      decimals,
      icon_url: apiToken.icon_url || "",
      network: networkName,
      fiatRate: 0,
      wrapped_token_address: apiToken.wrapped_token_address || undefined,
    };
  }

  async getTokens(): Promise<Token[]> {
    const now = Date.now();
    if (this.tokensCache && now - this.cacheTimestamp < this.CACHE_DURATION) {
      return this.tokensCache;
    }

    try {
      const [networks, response] = await Promise.all([
        networksService.getNetworks(),
        hotpotApiClient.listTokens(100, 0),
      ]);

      const tokens: Token[] = (response.data as ApiToken[]).map((t) =>
        this.mapApiTokenToModel(t, networks)
      );

      this.tokensCache = tokens;
      this.cacheTimestamp = now;
      return tokens;
    } catch (error) {
      console.error("Failed to fetch tokens:", error);
      return this.getMockTokens();
    }
  }

  async searchTokens(
    query: string,
    networkFilter?: string
  ): Promise<Token[]> {
    const allTokens = await this.getTokens();

    let filtered = allTokens;

    if (networkFilter && networkFilter !== "all") {
      const networkLower = networkFilter.toLowerCase();
      filtered = filtered.filter(
        (t) => t.network?.toLowerCase() === networkLower
      );
    }

    if (!query.trim()) {
      return filtered.slice(0, 50);
    }

    const lowerQuery = query.toLowerCase();
    return filtered.filter(
      (token) =>
        token.symbol.toLowerCase().includes(lowerQuery) ||
        token.name.toLowerCase().includes(lowerQuery) ||
        token.address?.toLowerCase().includes(lowerQuery)
    );
  }

  async getTokenBySymbol(
    symbol: string,
    network?: string,
    preferredNetwork?: string
  ): Promise<Token | null> {
    const allTokens = await this.getTokens();
    const matches = allTokens.filter(
      (token) =>
        token.symbol.toLowerCase() === symbol.toLowerCase() &&
        (!network || token.network?.toLowerCase() === network.toLowerCase())
    );
    if (matches.length === 0) return null;
    if (preferredNetwork) {
      const preferred = matches.find(
        (t) => t.network?.toLowerCase() === preferredNetwork.toLowerCase()
      );
      return preferred ?? matches[0];
    }
    return matches[0];
  }

  async getTokenByAddress(
    address: string,
    network?: string
  ): Promise<Token | null> {
    const allTokens = await this.getTokens();
    const addr = address?.toLowerCase();

    return (
      allTokens.find(
        (token) =>
          token.address?.toLowerCase() === addr &&
          (!network || token.network === network)
      ) ?? null
    );
  }

  private getMockTokens(): Token[] {
    return [
      {
        symbol: "ETH",
        name: "Ethereum",
        decimals: 18,
        icon_url:
          "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
        network: "ethereum",
        fiatRate: 3000,
        address: "0x0000000000000000000000000000000000000000",
        wrapped_token_address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      {
        symbol: "USDT",
        name: "Tether USD",
        decimals: 6,
        icon_url:
          "https://assets.coingecko.com/coins/images/325/small/Tether.png",
        network: "ethereum",
        fiatRate: 1,
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      },
      {
        symbol: "USDC",
        name: "USD Coin",
        decimals: 6,
        icon_url:
          "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png",
        network: "ethereum",
        fiatRate: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      },
      {
        symbol: "BTC",
        name: "Bitcoin",
        decimals: 8,
        icon_url:
          "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
        network: "bitcoin",
        fiatRate: 65000,
      },
      {
        symbol: "SOL",
        name: "Solana",
        decimals: 9,
        icon_url:
          "https://assets.coingecko.com/coins/images/4128/small/solana.png",
        network: "solana",
        fiatRate: 150,
        address: "So11111111111111111111111111111111111111112",
      },
      {
        symbol: "TRX",
        name: "TRON",
        decimals: 6,
        icon_url:
          "https://assets.coingecko.com/coins/images/1094/small/tron-logo.png",
        network: "tron",
        fiatRate: 0.15,
        wrapped_token_address: "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR",
      },
    ];
  }

  clearCache() {
    this.tokensCache = null;
    this.cacheTimestamp = 0;
  }
}

export const tokenService = new TokenService();
