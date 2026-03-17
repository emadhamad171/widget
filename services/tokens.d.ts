import { Token } from '../types';
export declare class TokenService {
    private tokensCache;
    private cacheTimestamp;
    private readonly CACHE_DURATION;
    private mapApiTokenToModel;
    getTokens(): Promise<Token[]>;
    searchTokens(query: string, networkFilter?: string): Promise<Token[]>;
    getTokenBySymbol(symbol: string, network?: string, preferredNetwork?: string): Promise<Token | null>;
    getTokenByAddress(address: string, network?: string): Promise<Token | null>;
    private getMockTokens;
    clearCache(): void;
}
export declare const tokenService: TokenService;
//# sourceMappingURL=tokens.d.ts.map