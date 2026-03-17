import { Quote } from '@hot-pot/hotpot-sdk-ts';
import { Token, WalletState } from '../types';
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
export declare class SwapService {
    executeSwap(params: SwapParams): Promise<string>;
    private normalizeIntentAddresses;
    private getApprovalType;
    private executeEVMPermit2;
    private approveTokenIfNeeded;
    private waitForTransactionConfirmation;
    private checkAllowance;
    private getTronWeb;
    private executeTronPermit2;
    private readonly TRC20_ABI;
    private approveTronTokenIfNeeded;
    private executeTronCosign;
}
declare global {
    interface Window {
        ethereum?: any;
    }
}
export declare const swapService: SwapService;
//# sourceMappingURL=swap.d.ts.map