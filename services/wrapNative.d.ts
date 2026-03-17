import { Token, WalletState } from '../types';
/** Returns wrapped token symbol for native tokens (TRX -> WTRX, ETH -> WETH) */
export declare function getWrappedTokenSymbol(nativeSymbol: string): string;
/** Returns true if token is native and needs wrapping before swap */
export declare function needsWrapping(token: Token | null): boolean;
export declare function wrapNativeToken(token: Token, wallet: WalletState, amount: string): Promise<string>;
//# sourceMappingURL=wrapNative.d.ts.map