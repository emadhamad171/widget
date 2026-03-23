import { createAppKit } from '@reown/appkit';
type AppKitModal = ReturnType<typeof createAppKit>;
export declare function getOrCreateAppKitModal(projectId: string): AppKitModal;
export declare function connectEip155WithAppKit(projectId: string): Promise<{
    address: string;
    chainId: number | null;
}>;
export {};
//# sourceMappingURL=appkit.d.ts.map