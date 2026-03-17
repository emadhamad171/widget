import { Token } from '../types';
declare class PriceService {
    private cache;
    private cacheKey;
    private isNativeToken;
    private isStablecoin;
    getUsdRate(token: Token): Promise<number>;
    updateTokenFiatRates(tokens: (Token | null)[]): Promise<void>;
}
export declare const priceService: PriceService;
export {};
//# sourceMappingURL=prices.d.ts.map