import { WalletType, WalletState } from '../types';

export class WalletManager {
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

  private detectInjectedWallets() {
    // Check for injected Ethereum provider (MetaMask, etc)
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on?.('accountsChanged', this.handleAccountsChanged.bind(this));
      window.ethereum.on?.('chainChanged', this.handleChainChanged.bind(this));
      window.ethereum.on?.('disconnect', this.handleDisconnect.bind(this));
    }

    // Check for Tron provider
    if (typeof window !== 'undefined' && (window as any).tronWeb) {
      // Tron wallet detection
    }

    // Check for Phantom (Solana)
    if (typeof window !== 'undefined' && (window as any).phantom?.solana) {
      const provider = (window as any).phantom.solana;
      provider.on?.('connect', () => this.checkExistingConnection());
      provider.on?.('disconnect', () => this.handlePhantomDisconnect?.());
      provider.on?.('accountChanged', (pubKey: { toString: () => string } | null) => {
        if (!pubKey) this.handlePhantomDisconnect?.();
      });
    }
  }

  private handlePhantomDisconnect = () => {
    if (this.state.type === 'solana') {
      this.disconnect();
    }
  }

  private async checkExistingConnection() {
    // Check if EVM wallet is already connected
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts', // This doesn't trigger popup, just checks
        });

        if (accounts && accounts.length > 0) {
          const chainId = await window.ethereum.request({
            method: 'eth_chainId',
          });

          this.state = {
            connected: true,
            address: accounts[0],
            chainId: parseInt(chainId, 16),
            type: 'evm',
          };

          this.notifyListeners();
          console.log('✅ Auto-detected connected EVM wallet:', accounts[0]);
        }
      } catch (error) {
        console.log('No EVM wallet connected');
      }
    }

    // Check if Tron wallet is already connected
    if (typeof window !== 'undefined' && (window as any).tronWeb) {
      const tronWeb = (window as any).tronWeb;
      const address = tronWeb.defaultAddress?.base58;

      if (address) {
        this.state = {
          connected: true,
          address,
          chainId: null,
          type: 'tron',
        };

        this.notifyListeners();
        console.log('✅ Auto-detected connected Tron wallet:', address);
        return;
      }
    }

    // Check for Phantom (Solana) already connected
    if (typeof window !== 'undefined' && (window as any).phantom?.solana) {
      const provider = (window as any).phantom.solana;
      if (provider.isConnected && provider.publicKey) {
        const address = provider.publicKey.toString();
        this.state = {
          connected: true,
          address,
          chainId: null,
          type: 'solana',
        };
        this.notifyListeners();
        console.log('✅ Auto-detected connected Phantom wallet:', address);
      }
    }
  }

  async connectEVM(): Promise<string> {
    if (!window.ethereum) {
      throw new Error('No Ethereum wallet found. Please install MetaMask.');
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      });

      this.state = {
        connected: true,
        address: accounts[0],
        chainId: parseInt(chainId, 16),
        type: 'evm',
      };

      this.notifyListeners();
      return accounts[0];
    } catch (error) {
      console.error('Failed to connect EVM wallet:', error);
      throw error;
    }
  }

  async connectPhantom(): Promise<string> {
    const provider = (window as any).phantom?.solana;

    if (!provider?.isPhantom) {
      throw new Error('Phantom wallet not found. Please install Phantom.');
    }

    try {
      const resp = await provider.connect();
      const address = resp.publicKey.toString();

      this.state = {
        connected: true,
        address,
        chainId: null,
        type: 'solana',
      };

      this.notifyListeners();
      return address;
    } catch (error) {
      console.error('Failed to connect Phantom:', error);
      throw error;
    }
  }

  async connectTron(): Promise<string> {
    const tronLink = (window as any).tronLink;

    if (!tronLink) {
      throw new Error('No Tron wallet found. Please install TronLink.');
    }

    try {
      let tronWeb = tronLink.tronWeb;
      if (!tronLink.ready) {
        const res = await tronLink.request({ method: 'tron_requestAccounts' });
        if (res.code !== 200) {
          throw new Error('User rejected TronLink connection');
        }
        tronWeb = tronLink.tronWeb;
      }
      const address = tronWeb.defaultAddress?.base58;
      if (!address) {
        throw new Error('Failed to get Tron address');
      }
      this.state = {
        connected: true,
        address,
        chainId: null,
        type: 'tron',
      };
      this.notifyListeners();
      return address;
    } catch (error) {
      console.error('Failed to connect Tron wallet:', error);
      throw error;
    }
  }

  async connect(type?: WalletType): Promise<string> {
    if (type === 'evm') {
      return this.connectEVM();
    }
    if (type === 'tron') {
      return this.connectTron();
    }
    if (type === 'solana') {
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
    throw new Error('No wallet found');
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
    this.listeners.forEach(listener => listener(this.getState()));
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

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: any;
  }
}
