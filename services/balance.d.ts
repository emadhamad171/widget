import { Token, WalletState } from '../types';
export declare function getPreferredNetworkForWallet(wallet: WalletState): string | null;
export declare class BalanceService {
    getBalance(token: Token, wallet: WalletState): Promise<string | null>;
    private getEVMBalance;
    private ensureTronReady;
    private getTronBalance;
    private getSolanaBalance;
}
export declare const balanceService: BalanceService;
//# sourceMappingURL=balance.d.ts.map