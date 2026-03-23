import { Token, WalletState } from '../types';
import { NetworkInfo } from '../services/networks';
export declare function escapeHtml(s: string): string;
export declare function formatBalance(b: string | null | undefined, isBalanceLoading: boolean, isConnected: boolean, hasToken: boolean): string;
export declare function formatUsd(amount: number, rate: number): string;
export declare function getNetworkIconUrl(networkName: string, networksList: NetworkInfo[]): string;
export declare function renderTokenIcon(token: Token | null, networksList: NetworkInfo[]): string;
export declare function getWalletIconByType(walletState: WalletState): string;
export declare function renderLoaderSvg(isDark: boolean): string;
export declare function isDarkTheme(theme?: string): boolean;
export declare function getWalletIconForType(type: string | null): string;
export declare function getWalletIconSmall(type: string | null): string;
//# sourceMappingURL=helpers.d.ts.map