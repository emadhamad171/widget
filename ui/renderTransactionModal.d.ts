import { IntentStatus } from '@hot-pot/hotpot-sdk-ts';
import { Token } from '../types';
import { NetworkInfo } from '../services/networks';
interface TxModalParams {
    status: "idle" | "loading" | "success" | "error" | "warning";
    isSwapping: boolean;
    intentStatusFromApi: IntentStatus | null;
    IntentStatus: typeof import('@hot-pot/hotpot-sdk-ts').IntentStatus;
    isWalletConnectError: boolean;
    swapStatusMessage: string;
    fromTokenData: Token | null;
    toTokenData: Token | null;
    fromAmount: string;
    toAmount: string;
    isDark: boolean;
    networksList: NetworkInfo[];
}
export declare function renderTransactionModal(params: TxModalParams): string;
export {};
//# sourceMappingURL=renderTransactionModal.d.ts.map