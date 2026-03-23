import { WalletType, WalletState } from "../types";
import { connectEip155WithAppKit } from "./appkit";

export const WALLET_REDIRECT_ERROR_CODE = "WALLET_REDIRECT";

function createWalletRedirectError(message: string): Error {
  const error = new Error(message) as Error & { code?: string };
  error.name = "WalletRedirectError";
  error.code = WALLET_REDIRECT_ERROR_CODE;
  return error;
}

export function isWalletRedirectError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    (error as { code?: string }).code === WALLET_REDIRECT_ERROR_CODE
  );
}

function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

export class WalletManager {
  private walletConnectProjectId?: string;

  private state: WalletState = {
    connected: false,
    address: null,
    chainId: null,
    type: null,
  };

  private listeners: Set<(state: WalletState) => void> = new Set();

  constructor() {
    this.detectInjectedWallets();
    this.checkExistingConnection();
  }

  public setWalletConnectProjectId(projectId?: string) {
    this.walletConnectProjectId = projectId;
  }

  private detectInjectedWallets() {
    // Check for injected Ethereum provider (MetaMask, etc)
    if (typeof window !== "undefined" && window.ethereum) {
      const eth = window.ethereum as any;
      eth.on?.("accountsChanged", this.handleAccountsChanged.bind(this));
      eth.on?.("chainChanged", this.handleChainChanged.bind(this));
      eth.on?.("disconnect", this.handleDisconnect.bind(this));
    }

    // Check for Tron provider
    if (typeof window !== "undefined" && (window as any).tronWeb) {
      // Tron wallet detection
    }

    // Check for Phantom (Solana)
    if (typeof window !== "undefined" && (window as any).phantom?.solana) {
      const provider = (window as any).phantom.solana;
      provider.on?.("connect", () => this.checkExistingConnection());
      provider.on?.("disconnect", () => this.handlePhantomDisconnect?.());
      provider.on?.(
        "accountChanged",
        (pubKey: { toString: () => string } | null) => {
          if (!pubKey) this.handlePhantomDisconnect?.();
        },
      );
    }
  }

  private handlePhantomDisconnect = () => {
    if (this.state.type === "solana") {
      this.disconnect();
    }
  };

  private async checkExistingConnection() {
    // Check if EVM wallet is already connected
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const eth = window.ethereum as any;
        const accounts = await eth.request({
          method: "eth_accounts", // This doesn't trigger popup, just checks
        });

        if (accounts && accounts.length > 0) {
          const chainId = await eth.request({
            method: "eth_chainId",
          });

          this.state = {
            connected: true,
            address: accounts[0],
            chainId: parseInt(chainId, 16),
            type: "evm",
          };

          this.notifyListeners();
          console.log("✅ Auto-detected connected EVM wallet:", accounts[0]);
        }
      } catch (error) {
        console.log("No EVM wallet connected");
      }
    }

    // Check if Tron wallet is already connected
    if (typeof window !== "undefined" && (window as any).tronWeb) {
      const tronWeb = (window as any).tronWeb;
      const address = tronWeb.defaultAddress?.base58;

      if (address) {
        this.state = {
          connected: true,
          address,
          chainId: null,
          type: "tron",
        };

        this.notifyListeners();
        console.log("✅ Auto-detected connected Tron wallet:", address);
        return;
      }
    }

    // Check for Phantom (Solana) already connected
    if (typeof window !== "undefined" && (window as any).phantom?.solana) {
      const provider = (window as any).phantom.solana;
      if (provider.isConnected && provider.publicKey) {
        const address = provider.publicKey.toString();
        this.state = {
          connected: true,
          address,
          chainId: null,
          type: "solana",
        };
        this.notifyListeners();
        console.log("✅ Auto-detected connected Phantom wallet:", address);
      }
    }
  }

  async connectEVM(): Promise<string> {
    // 1) Try injected provider first (desktop, or mobile dapp browsers)
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const eth = window.ethereum as any;
        const accounts = await eth.request({
          method: "eth_requestAccounts",
        });

        const chainId = await eth.request({
          method: "eth_chainId",
        });

        this.state = {
          connected: true,
          address: accounts[0],
          chainId: parseInt(chainId, 16),
          type: "evm",
        };

        this.notifyListeners();
        return accounts[0];
      } catch (error) {
        console.error("Failed to connect injected EVM wallet:", error);
        throw error;
      }
    }

    // 2) Fallback: AppKit (WalletConnect UX like rfq-web)
    if (!this.walletConnectProjectId) {
      if (isMobileDevice() && typeof window !== "undefined") {
        const dappUrl = window.location.href.replace(/^https?:\/\//, "");
        const deeplink = `https://metamask.app.link/dapp/${dappUrl}`;
        window.location.href = deeplink;
        throw createWalletRedirectError(
          "MetaMask is opening this page in its in-app browser...",
        );
      }

      throw new Error(
        "No Ethereum wallet found. Please install MetaMask or configure WalletConnect project id.",
      );
    }

    try {
      const { address, chainId } = await connectEip155WithAppKit(
        this.walletConnectProjectId,
      );

      this.state = {
        connected: true,
        address,
        chainId,
        type: "evm",
      };

      this.notifyListeners();
      return address;
    } catch (error) {
      console.error("Failed to connect via AppKit:", error);
      throw error;
    }
  }

  async connectPhantom(): Promise<string> {
    const provider = (window as any).phantom?.solana;

    // No injected Phantom provider – on mobile пробуем открыть dapp в Phantom браузере
    if (!provider?.isPhantom) {
      if (isMobileDevice() && typeof window !== "undefined") {
        const currentUrl = window.location.href;
        const ref = window.location.origin;

        // Официальный deeplink в Phantom dApp browser:
        // https://phantom.app/ul/browse/<url>?ref=<ref>
        const deeplink = `https://phantom.app/ul/browse/${encodeURIComponent(
          currentUrl,
        )}?ref=${encodeURIComponent(ref)}`;

        // Перенаправляем пользователя в Phantom; дальнейшее подключение произойдёт уже внутри кошелька
        window.location.href = deeplink;

        throw createWalletRedirectError(
          "Phantom wallet not detected. Opening this page in Phantom browser...",
        );
      }

      throw new Error("Phantom wallet not found. Please install Phantom.");
    }

    try {
      const resp = await provider.connect();
      const address = resp.publicKey.toString();

      this.state = {
        connected: true,
        address,
        chainId: null,
        type: "solana",
      };

      this.notifyListeners();
      return address;
    } catch (error) {
      console.error("Failed to connect Phantom:", error);
      throw error;
    }
  }

  async connectTron(): Promise<string> {
    const tronLink = (window as any).tronLink;

    if (!tronLink) {
      // На мобильных подсказываем, что нужно открыть страницу в браузере TronLink
      if (isMobileDevice() && typeof window !== "undefined") {
        throw new Error(
          "Tron wallet not detected. Please open this page inside the TronLink mobile wallet browser or install TronLink.",
        );
      }

      throw new Error("No Tron wallet found. Please install TronLink.");
    }

    try {
      let tronWeb = tronLink.tronWeb;
      if (!tronLink.ready) {
        const res = await tronLink.request({ method: "tron_requestAccounts" });
        if (res.code !== 200) {
          throw new Error("User rejected TronLink connection");
        }
        tronWeb = tronLink.tronWeb;
      }
      const address = tronWeb.defaultAddress?.base58;
      if (!address) {
        throw new Error("Failed to get Tron address");
      }
      this.state = {
        connected: true,
        address,
        chainId: null,
        type: "tron",
      };
      this.notifyListeners();
      return address;
    } catch (error) {
      console.error("Failed to connect Tron wallet:", error);
      throw error;
    }
  }

  async connect(type?: WalletType): Promise<string> {
    if (type === "evm") {
      return this.connectEVM();
    }
    if (type === "tron") {
      return this.connectTron();
    }
    if (type === "solana") {
      return this.connectPhantom();
    }

    // Auto-detect if no type specified
    if (window.ethereum) {
      return this.connectEVM();
    }
    if ((window as any).tronWeb) {
      return this.connectTron();
    }
    if ((window as any).phantom?.solana) {
      return this.connectPhantom();
    }
    throw new Error("No wallet found");
  }

  disconnect() {
    this.state = {
      connected: false,
      address: null,
      chainId: null,
      type: null,
    };
    this.notifyListeners();
  }

  getState(): WalletState {
    return { ...this.state };
  }

  isConnected(): boolean {
    return this.state.connected;
  }

  getAddress(): string | null {
    return this.state.address;
  }

  subscribe(callback: (state: WalletState) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.getState()));
  }

  private handleAccountsChanged(accounts: string[]) {
    if (accounts.length === 0) {
      this.disconnect();
    } else {
      this.state.address = accounts[0];
      this.notifyListeners();
    }
  }

  private handleChainChanged(chainId: string) {
    this.state.chainId = parseInt(chainId, 16);
    this.notifyListeners();
  }

  private handleDisconnect() {
    this.disconnect();
  }
}

// Window typings are declared in src/types/global.d.ts
