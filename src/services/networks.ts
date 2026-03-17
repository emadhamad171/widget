import { hotpotApiClient } from "./api";

export interface NetworkInfo {
  id: number;
  name: string;
  type: string;
  supports_optimized_swap: boolean;
  icon_url: string;
  supports_custom_tokens: boolean;
}

const DEFAULT_DECIMALS: Record<string, number> = {
  ethereum: 18,
  tron: 6,
  solana: 9,
  bitcoin: 8,
};

export class NetworksService {
  private networksCache: NetworkInfo[] | null = null;
  private cacheTimestamp = 0;
  private readonly CACHE_DURATION = 10 * 60 * 1000;

  async getNetworks(): Promise<NetworkInfo[]> {
    const now = Date.now();
    if (this.networksCache && now - this.cacheTimestamp < this.CACHE_DURATION) {
      return this.networksCache;
    }

    try {
      const data = await hotpotApiClient.listNetworks();
      this.networksCache = data as NetworkInfo[];
      this.cacheTimestamp = now;
      return this.networksCache;
    } catch (error) {
      console.error("Failed to fetch networks:", error);
      return [];
    }
  }

  getNetworkIdByName(networks: NetworkInfo[], networkName: string): number | null {
    const network = networks.find(
      (n) => n.name.toLowerCase() === networkName.toLowerCase()
    );
    return network?.id ?? null;
  }

  getDecimalsForNetwork(networkName: string): number {
    const key = networkName.toLowerCase();
    return DEFAULT_DECIMALS[key] ?? 18;
  }
}

export const networksService = new NetworksService();
