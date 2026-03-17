export interface NetworkInfo {
    id: number;
    name: string;
    type: string;
    supports_optimized_swap: boolean;
    icon_url: string;
    supports_custom_tokens: boolean;
}
export declare class NetworksService {
    private networksCache;
    private cacheTimestamp;
    private readonly CACHE_DURATION;
    getNetworks(): Promise<NetworkInfo[]>;
    getNetworkIdByName(networks: NetworkInfo[], networkName: string): number | null;
    getDecimalsForNetwork(networkName: string): number;
}
export declare const networksService: NetworksService;
//# sourceMappingURL=networks.d.ts.map