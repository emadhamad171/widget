import { Quote } from '@hot-pot/hotpot-sdk-ts';
import { Token } from '../types';
export type SwapQuote = Quote;
export declare class QuoteService {
    getQuote(fromToken: Token, toToken: Token, amount: string, slippage?: number): Promise<SwapQuote | null>;
    private getMockQuote;
    calculateOutputAmount(quote: SwapQuote): string;
}
export declare const quoteService: QuoteService;
//# sourceMappingURL=quote.d.ts.map