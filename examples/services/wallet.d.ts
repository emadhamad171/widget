import { WalletType, WalletState } from '../types';
export declare class WalletManager {
    private state;
    private listeners;
    constructor();
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
declare global {
    interface Window {
        ethereum?: any;
    }
}
//# sourceMappingURL=wallet.d.ts.map