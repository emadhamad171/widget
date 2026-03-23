import { WalletType, WalletState } from '../types';
export declare const WALLET_REDIRECT_ERROR_CODE = "WALLET_REDIRECT";
export declare function isWalletRedirectError(error: unknown): boolean;
export declare class WalletManager {
    private walletConnectProjectId?;
    private state;
    private listeners;
    constructor();
    setWalletConnectProjectId(projectId?: string): void;
    private detectInjectedWallets;
    private handlePhantomDisconnect;
    private checkExistingConnection;
    connectEVM(): Promise<string>;
    connectPhantom(): Promise<string>;
    connectTron(): Promise<string>;
    connect(type?: WalletType): Promise<string>;
    disconnect(): void;
    getState(): WalletState;
    isConnected(): boolean;
    getAddress(): string | null;
    subscribe(callback: (state: WalletState) => void): () => boolean;
    private notifyListeners;
    private handleAccountsChanged;
    private handleChainChanged;
    private handleDisconnect;
}
//# sourceMappingURL=wallet.d.ts.map