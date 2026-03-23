export interface WidgetConfig {
    theme?: "light" | "dark" | "auto";
    primaryTextColor?: string;
    secondaryTextColor?: string;
    backgroundColor?: string;
    cardBackgroundColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    iconsColor?: string;
    swapWarningColor?: string;
    swapErrorColor?: string;
    swapSuccessColor?: string;
    defaultFromToken?: string;
    defaultToToken?: string;
    defaultSlippage?: number;
    swapDividerVariant?: "v1" | "v2";
    walletConnectProjectId?: string;
    onSwapSuccess?: (txHash: string) => void;
    onSwapError?: (error: Error) => void;
    onWalletConnect?: (address: string) => void;
}
export type Network = "ethereum" | "bitcoin" | "tron" | "solana" | string;
export interface Token {
    address?: string;
    symbol: string;
    name: string;
    decimals: number;
    icon_url: string;
    network: Network;
    fiatRate: number;
    balance?: string | null;
    wrapped_token_address?: string;
}
export interface SwapQuote {
    src_amount_lots: number;
    max_dest_amount_lots: number;
    dest_amount_decimals: number;
    price_impact?: number;
    estimated_gas?: string;
}
export type WalletType = "evm" | "tron" | "solana";
export interface WalletState {
    connected: boolean;
    address: string | null;
    chainId: number | null;
    type: WalletType | null;
}
//# sourceMappingURL=index.d.ts.map