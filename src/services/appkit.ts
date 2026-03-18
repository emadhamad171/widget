import { createAppKit } from '@reown/appkit';
import { mainnet } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

type AppKitModal = ReturnType<typeof createAppKit>;

let modalSingleton: AppKitModal | null = null;
let modalProjectId: string | null = null;

export function getOrCreateAppKitModal(projectId: string): AppKitModal {
  if (modalSingleton && modalProjectId === projectId) return modalSingleton;

  // Re-create if projectId changed (rare, but safer for embedded widgets).
  modalProjectId = projectId;

  const wagmiAdapter = new WagmiAdapter({
    networks: [mainnet],
    projectId,
  });

  modalSingleton = createAppKit({
    adapters: [wagmiAdapter],
    networks: [mainnet],
    projectId,
    metadata:
      typeof window !== 'undefined'
        ? {
            name: 'HotPot Swap Widget',
            description: 'HotPot cross-chain swap widget',
            url: window.location.origin,
            icons: [],
          }
        : undefined,
    enableNetworkSwitch: false,
    features: {
      analytics: false,
      socials: false,
      email: false,
      allWallets: true,
    },
  });

  return modalSingleton;
}

export async function connectEip155WithAppKit(projectId: string): Promise<{
  address: string;
  chainId: number | null;
}> {
  const modal = getOrCreateAppKitModal(projectId);
  const m: any = modal as any;

  // Open the same Connect view as rfq-web, scoped to EVM.
  modal.open({ view: 'Connect', namespace: 'eip155' });

  // AppKit core exposes getAddress/getIsConnected/getChainId. Some builds have
  // subscribeProvider but types differ; we use a safe polling approach.
  return await new Promise((resolve, reject) => {
    const startedAt = Date.now();
    const maxMs = 90_000;
    const interval = window.setInterval(() => {
      try {
        const err = m.getError?.();
        if (err) {
          window.clearInterval(interval);
          reject(new Error(String(err)));
          return;
        }

        const isConnected = m.getIsConnected?.() ?? false;
        const address = (m.getAddress?.() as string | undefined) || '';

        if (isConnected && address) {
          const chainId = (m.getChainId?.() as number | undefined) ?? null;
          window.clearInterval(interval);
          resolve({ address, chainId });
          return;
        }

        if (Date.now() - startedAt > maxMs) {
          window.clearInterval(interval);
          reject(new Error('Connection timed out'));
        }
      } catch (e) {
        window.clearInterval(interval);
        reject(e instanceof Error ? e : new Error(String(e)));
      }
    }, 350);
  });
}

