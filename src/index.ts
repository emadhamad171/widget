import type { Quote } from "@hot-pot/hotpot-sdk-ts";
import { IntentStatus } from "@hot-pot/hotpot-sdk-ts";
import axios from "axios";

import { networksService, type NetworkInfo } from "./services/networks";
import { generateStyles } from "./styles/theme";
import type { WidgetConfig, WalletState, Token } from "./types";
import { WalletManager, isWalletRedirectError } from "./services/wallet";
import { tokenService } from "./services/tokens";
import {
  balanceService,
  getPreferredNetworkForWallet,
} from "./services/balance";
import { priceService } from "./services/prices";
import {
  needsWrapping,
  wrapNativeToken,
  getWrappedTokenSymbol,
} from "./services/wrapNative";
import { hotpotApiClient } from "./services/api";
import { quoteService } from "./services/quote";
import { swapService } from "./services/swap";
import {
  OBSERVED_ATTRIBUTES,
  parseWidgetAttributes,
} from "./config/widgetConfig";
import { renderHeader } from "./ui/renderHeader";
import { renderConnectWalletModal } from "./ui/renderConnectWallet";
import { renderTokenSelector } from "./ui/renderTokenSelector";
import { renderTransactionModal } from "./ui/renderTransactionModal";
import {
  CHEVRON_ICON_SVG,
  SWAP_ICON_SVG,
  WALLET_ICON_SVG,
  INFO_ICON_SVG,
  EXCLAMATION_ERROR_RAW,
  EXCLAMATION_WARNING_RAW,
  EXCLAMATION_SUCCESS_RAW,
  ICON_WARNING_RAW,
  ICON_SUCCESS_RAW,
  metamaskIconUrl,
  phantomIconUrl,
  tronlinkIconUrl,
} from "./ui/icons";
import {
  escapeHtml,
  formatBalance,
  formatUsd,
  renderTokenIcon,
  renderLoaderSvg,
  isDarkTheme,
  getWalletIconSmall,
} from "./ui/helpers";

const CONNECT_WALLET_TIMEOUT_MS = 15_000;

class HotpotSwapWidget extends HTMLElement {
  private _shadowRoot: ShadowRoot;
  private config: WidgetConfig = {};

  // Token / quote state
  private fromAmount = "";
  private toAmount = "";
  private fromTokenData: Token | null = null;
  private toTokenData: Token | null = null;
  private slippage = 0.5;
  private currentQuote: Quote | null = null;
  private quoteDebounceTimer: number | null = null;

  // UI flags
  private showSettings = false;
  private showTokenSelector = false;
  private tokenSelectorMode: "from" | "to" = "from";
  private tokenSearchQuery = "";
  private tokenFilterNetwork = "all";
  private tokenList: Token[] = [];
  private networksList: NetworkInfo[] = [];
  private isTokenListLoading = false;
  private tokenSearchDebounceTimer: number | null = null;
  private isWidgetVisible = true;
  private showDestinationAddress = false;
  private destinationAddress = "";
  private showConnectWalletModal = false;
  private isConnectingWallet = false;
  private connectWalletTimeoutId: number | null = null;
  private isBalanceLoading = false;
  private displayFromTokenAsWrapped = false;
  private showDestinationAddressModal = false;

  // Swap status
  private swapStatusType: "idle" | "loading" | "success" | "error" | "warning" =
    "idle";
  private swapStatusMessage = "";
  private isWalletConnectError = false;
  private swapTxHash: string | null = null;
  private intentIdForStatus: string | null = null;
  private intentStatusFromApi: IntentStatus | null = null;
  private intentStatusPollTimer: number | null = null;
  private intentStatusPollStartedAt = 0;
  private isSwapping = false;

  // Wallet
  private walletManager: WalletManager;
  private walletState: WalletState;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this.walletManager = new WalletManager();
    this.walletState = this.walletManager.getState();

    this.walletManager.subscribe(async (state) => {
      this.walletState = state;
      if (!state.connected) {
        this.destinationAddress = "";
        if (this.fromTokenData) this.fromTokenData.balance = null;
        if (this.toTokenData) this.toTokenData.balance = null;
      } else {
        this.showDestinationAddress = true;
        if (!this.destinationAddress)
          this.destinationAddress = state.address || "";
        await this.ensureTokensMatchWallet();
        await this.fetchBalances();
      }
      this.render();
      this.attachEventListeners();
    });
  }

  // ── Lifecycle ──────────────────────────────────────────────

  async connectedCallback() {
    this.parseAttributes();
    await this.initializeTokens();
    this.render();
    this.attachEventListeners();
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.parseAttributes();
      this.render();
    }
  }

  static get observedAttributes() {
    return OBSERVED_ATTRIBUTES;
  }

  private parseAttributes() {
    this.config = parseWidgetAttributes(this);
    this.slippage = this.config.defaultSlippage ?? 0.5;
    if (this.config.walletConnectProjectId) {
      this.walletManager.setWalletConnectProjectId(
        this.config.walletConnectProjectId,
      );
    }
  }

  // ── Initialization ─────────────────────────────────────────

  private async initializeTokens() {
    try {
      const [networks, fromToken, toToken] = await Promise.all([
        networksService.getNetworks(),
        tokenService.getTokenBySymbol(this.config.defaultFromToken || "ETH"),
        tokenService.getTokenBySymbol(this.config.defaultToToken || "USDT"),
      ]);
      this.networksList = networks;
      this.fromTokenData = fromToken ?? null;
      this.toTokenData = toToken ?? null;
      await this.ensureTokensMatchWallet();
      await this.fetchBalances();
    } catch (error) {
      console.error("Error initializing tokens:", error);
    }
  }

  private async ensureTokensMatchWallet() {
    const preferred = getPreferredNetworkForWallet(this.walletState);
    if (!preferred) return;
    if (
      this.fromTokenData &&
      this.fromTokenData.network?.toLowerCase() !== preferred.toLowerCase()
    ) {
      const alt = await tokenService.getTokenBySymbol(
        this.fromTokenData.symbol,
        undefined,
        preferred,
      );
      if (alt) this.fromTokenData = alt;
    }
    if (
      this.toTokenData &&
      this.toTokenData.network?.toLowerCase() !== preferred.toLowerCase()
    ) {
      const alt = await tokenService.getTokenBySymbol(
        this.toTokenData.symbol,
        undefined,
        preferred,
      );
      if (alt) this.toTokenData = alt;
    }
  }

  private async fetchBalances() {
    if (!this.walletState.connected || !this.walletState.address) return;
    if (!this.fromTokenData && !this.toTokenData) return;
    this.isBalanceLoading = true;
    this.render();
    this.attachEventListeners();
    try {
      const isTron = this.walletState.type === "tron";
      if (this.fromTokenData) {
        this.fromTokenData.balance =
          (await balanceService.getBalance(
            this.fromTokenData,
            this.walletState,
          )) ?? undefined;
        if (isTron) await new Promise((r) => setTimeout(r, 300));
      }
      if (this.toTokenData) {
        this.toTokenData.balance =
          (await balanceService.getBalance(
            this.toTokenData,
            this.walletState,
          )) ?? undefined;
      }
      await priceService.updateTokenFiatRates([
        this.fromTokenData,
        this.toTokenData,
      ]);
    } catch (e) {
      console.error("Failed to fetch balances:", e);
    } finally {
      this.isBalanceLoading = false;
      this.render();
      this.attachEventListeners();
    }
  }

  // ── Render ─────────────────────────────────────────────────

  private render() {
    const styles = generateStyles(this.config);
    const dark = isDarkTheme(this.config.theme);
    this._shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="widget-container widget-container--divider-${this.config.swapDividerVariant || "v2"}" style="${!this.isWidgetVisible ? "display: none;" : ""}">
        ${renderHeader()}
        ${this.renderSwapForm()}
        ${this.showTokenSelector ? renderTokenSelector(this.tokenList, this.networksList, this.tokenFilterNetwork, this.tokenSearchQuery, this.isTokenListLoading) : ""}
        ${renderConnectWalletModal(this.showConnectWalletModal, this.isConnectingWallet, dark)}
      </div>
    `;
  }

  // ── Status helpers ─────────────────────────────────────────

  private getSwapStatusFromQuote(): "idle" | "warning" {
    const q = this.currentQuote as { price_impact?: number } | null;
    return q?.price_impact != null && q.price_impact < -1 ? "warning" : "idle";
  }

  private getEffectiveSwapStatus():
    | "idle"
    | "loading"
    | "success"
    | "error"
    | "warning" {
    if (this.intentStatusFromApi != null) {
      const mapped = this.mapIntentStatusToSwapStatus(this.intentStatusFromApi);
      if (mapped) return mapped;
    }
    if (this.swapStatusType !== "idle") return this.swapStatusType;
    if (this.isLoadingQuote || this.isSwapping) return "loading";
    return this.getSwapStatusFromQuote();
  }

  private mapIntentStatusToSwapStatus(
    s: IntentStatus,
  ): "loading" | "success" | "error" | null {
    if (s === IntentStatus.Fulfilled || s === IntentStatus.Refunded)
      return "success";
    if (
      s === IntentStatus.Declined ||
      s === IntentStatus.DeclinedDueToKytCheck ||
      s === IntentStatus.Expired ||
      s === IntentStatus.Failed
    )
      return "error";
    return "loading";
  }

  private isLoadingQuote = false;

  private restoreFromInputFocus(snapshot: {
    shouldRestore: boolean;
    selectionStart: number | null;
    selectionEnd: number | null;
  }) {
    if (!snapshot.shouldRestore) return;
    const input = this._shadowRoot.getElementById(
      "from-input",
    ) as HTMLInputElement | null;
    if (!input) return;
    input.focus();
    if (snapshot.selectionStart != null && snapshot.selectionEnd != null) {
      input.setSelectionRange(snapshot.selectionStart, snapshot.selectionEnd);
    }
  }

  private sanitizeAmountInput(value: string): string {
    const cleaned = value.replace(/[^0-9.]/g, "");
    const firstDotIndex = cleaned.indexOf(".");
    if (firstDotIndex === -1) return cleaned;
    return (
      cleaned.slice(0, firstDotIndex + 1) +
      cleaned.slice(firstDotIndex + 1).replace(/\./g, "")
    );
  }

  // ── Swap divider / toast / form ────────────────────────────

  private renderSwapDividerContent(): string {
    const status = this.getEffectiveSwapStatus();
    if (status === "loading")
      return `<div class="swap-divider-status swap-divider-loading">${renderLoaderSvg(isDarkTheme(this.config.theme))}</div>`;
    if (status === "error")
      return `<div class="swap-divider-status swap-divider-error">${EXCLAMATION_ERROR_RAW}</div>`;
    if (status === "warning")
      return `<div class="swap-divider-status swap-divider-warning">${EXCLAMATION_WARNING_RAW}</div>`;
    if (status === "success")
      return `<div class="swap-divider-status swap-divider-success">${EXCLAMATION_SUCCESS_RAW}</div>`;
    return `<button class="swap-reverse-button" id="reverse-btn" aria-label="Swap direction">${SWAP_ICON_SVG}</button>`;
  }

  private renderSwapStatusToast(): string {
    const status = this.getEffectiveSwapStatus();
    const priceImpact = (this.currentQuote as { price_impact?: number } | null)
      ?.price_impact;
    if (
      status === "idle" ||
      (!this.isSwapping && this.fromAmount.trim() === "")
    )
      return "";
    let text = "";
    let iconSvg = "";
    if (status === "loading") {
      text = this.swapStatusMessage || "Processing...";
    } else if (status === "success") {
      text = "Transaction successful";
      iconSvg = ICON_SUCCESS_RAW;
    } else if (status === "error") {
      text = this.isWalletConnectError
        ? this.swapStatusMessage || "Connection failed"
        : "Transaction failed";
      iconSvg = EXCLAMATION_ERROR_RAW;
    } else if (status === "warning" && priceImpact != null) {
      text = `Token price is below the market ${priceImpact}%`;
      iconSvg = ICON_WARNING_RAW;
    }
    const explorerUrl = this.swapTxHash
      ? this.getExplorerUrl(this.swapTxHash)
      : null;
    return `
      <div class="swap-status-toast swap-status-toast-${status}">
        <div class="swap-status-toast-row">
          ${iconSvg ? `<span class="swap-status-toast-icon">${iconSvg}</span>` : ""}
          <span class="swap-status-toast-text">${escapeHtml(text)}</span>
        </div>
        ${explorerUrl ? `<a class="swap-status-toast-explorer" href="${explorerUrl}" target="_blank">View on Explorer ↗</a>` : ""}
      </div>
    `;
  }

  private getDisplayFromSymbol(): string {
    if (
      this.displayFromTokenAsWrapped &&
      this.fromTokenData &&
      needsWrapping(this.fromTokenData)
    ) {
      return getWrappedTokenSymbol(this.fromTokenData.symbol);
    }
    return this.fromTokenData?.symbol || "Select";
  }

  private renderSwapForm(): string {
    const fromSymbol = this.getDisplayFromSymbol();
    const fromBal = formatBalance(
      this.fromTokenData?.balance,
      this.isBalanceLoading,
      this.walletState.connected,
      !!this.fromTokenData,
    );
    const toBal = formatBalance(
      this.toTokenData?.balance,
      this.isBalanceLoading,
      this.walletState.connected,
      !!this.toTokenData,
    );
    const fromUsd = formatUsd(
      parseFloat(fromBal) || 0,
      this.fromTokenData?.fiatRate ?? 0,
    );
    const toUsd = formatUsd(
      parseFloat(toBal) || 0,
      this.toTokenData?.fiatRate ?? 0,
    );

    return `
      <div class="swap-form">
        <div class="swap-card ${this.getEffectiveSwapStatus() !== "idle" ? "swap-card-with-toast" : ""}">
          <div class="swap-card-inner">
          <div class="swap-section swap-section-top">
            <div class="swap-label">You pay</div>
            <div class="swap-input-row">
              <div class="swap-amount-wrapper">
                <input type="text" class="amount-input" id="from-input" placeholder="0" value="${this.fromAmount}" inputmode="decimal" autocomplete="off" />
              </div>
              <button class="token-select" id="from-token-btn">
                ${renderTokenIcon(this.fromTokenData, this.networksList)}
                <span class="token-symbol">${fromSymbol}</span>
                ${CHEVRON_ICON_SVG}
              </button>
            </div>
            <div class="balance-row">
              <span class="balance-fiat">${fromUsd}</span>
              <span class="balance-token">${WALLET_ICON_SVG}<span>${fromBal} ${fromSymbol}</span></span>
            </div>
            ${this.renderSlippagePanel()}
          </div>
          <div class="swap-divider">${this.renderSwapDividerContent()}</div>
          <div class="swap-section swap-section-bottom">
            <div class="swap-label">You receive</div>
            <div class="swap-input-row">
              <div class="swap-amount-wrapper">
                <input type="text" class="amount-input ${!this.toAmount ? "loading" : ""}" id="to-input" placeholder="0" value="${this.toAmount}" readonly />
              </div>
              <button class="token-select" id="to-token-btn">
                ${renderTokenIcon(this.toTokenData, this.networksList)}
                <span class="token-symbol">${this.toTokenData?.symbol || "Select"}</span>
                ${CHEVRON_ICON_SVG}
              </button>
            </div>
            <div class="balance-row">
              <span class="balance-fiat">${toUsd}</span>
              <span class="balance-token">${WALLET_ICON_SVG}<span>${toBal} ${this.toTokenData?.symbol || ""}</span></span>
            </div>
          </div>
          </div>
          ${this.renderSwapStatusToast()}
        </div>
        <div class="destination-address-block">
          <button class="destination-address-header" id="destination-toggle" type="button">
            <span class="destination-label">Destination address<span class="destination-info-wrap">${INFO_ICON_SVG}<span class="destination-info-tooltip">Enter the address where you want to receive swapped tokens</span></span></span>
            <span class="destination-chevron ${this.showDestinationAddress ? "expanded" : ""}">${CHEVRON_ICON_SVG}</span>
          </button>
          ${
            this.showDestinationAddress
              ? `
          <div class="destination-address-input-wrap">
            ${this.destinationAddress ? `<span class="destination-wallet-icon">${getWalletIconSmall(this.walletState.type)}</span>` : ""}
            <input type="text" class="destination-address-input${this.destinationAddress ? " destination-address-input--filled" : ""}" id="destination-input" value="${this.destinationAddress}" autocomplete="off" />
            ${this.destinationAddress ? `<button class="destination-clear-btn" id="destination-clear-btn">Clear</button>` : `<button class="destination-set-btn" id="destination-set-btn">Set address</button>`}
          </div>
          `
              : ""
          }
        </div>
        ${this.renderDestinationAddressModal()}
        <button class="swap-button${this.getSwapButtonText() === "Enter Amount" ? " swap-button--enter-amount" : ""}" id="swap-btn" ${this.swapStatusType === "error" ? "" : this.isLoadingQuote || this.isSwapping || (this.walletState.connected && !(this.destinationAddress || "").trim()) ? "disabled" : ""}>
          ${this.getSwapButtonText()}
        </button>
      </div>
      ${renderTransactionModal({
        status: this.getEffectiveSwapStatus(),
        isSwapping: this.isSwapping,
        intentStatusFromApi: this.intentStatusFromApi,
        IntentStatus,
        isWalletConnectError: this.isWalletConnectError,
        swapStatusMessage: this.swapStatusMessage,
        fromTokenData: this.fromTokenData,
        toTokenData: this.toTokenData,
        fromAmount: this.fromAmount,
        toAmount: this.toAmount,
        isDark: isDarkTheme(this.config.theme),
        networksList: this.networksList,
      })}
    `;
  }

  private renderSlippagePanel(): string {
    if (!this.showSettings) return "";
    const presets = [0.3, 0.5, 1];
    return `
      <div class="slippage-panel">
        <label class="slippage-label">Slippage Tolerance</label>
        <div class="slippage-row">
          ${presets.map((v) => `<button class="slippage-btn ${this.slippage === v ? "active" : ""}" data-value="${v}">${v}%</button>`).join("")}
          <input type="text" class="slippage-input" placeholder="Custom" value="${this.slippage} %" />
        </div>
      </div>
    `;
  }

  private renderDestinationAddressModal(): string {
    if (!this.showDestinationAddressModal) return "";
    if (!this.walletState.connected || !this.walletState.address) return "";
    const addr = this.walletState.address;
    const fmt = (a: string) =>
      a.length > 16 ? `${a.slice(0, 6)}...${a.slice(-6)}` : a;
    return `
      <div class="destination-modal-overlay">
        <div class="destination-modal">
          <div class="destination-modal-list">
            <button class="destination-modal-item" data-address="${addr}">
              ${this.walletState.type === "evm" ? `<img src="${metamaskIconUrl}" class="connect-wallet-icon" alt="MetaMask" />` : this.walletState.type === "tron" ? `<img src="${tronlinkIconUrl}" class="connect-wallet-icon" alt="TronLink" />` : this.walletState.type === "solana" ? `<img src="${phantomIconUrl}" class="connect-wallet-icon" alt="Phantom" />` : ""}
              <span class="destination-modal-item-label">${escapeHtml(fmt(addr))}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private getSwapButtonText(): string {
    if (this.swapStatusType === "error") return "Swap";
    if (this.isSwapping) return "Swapping...";
    if (this.isLoadingQuote) return "Loading...";
    if (!this.walletState.connected) return "Connect Wallet";
    if (!(this.destinationAddress || "").trim())
      return "Enter destination address";
    if (!this.fromAmount || parseFloat(this.fromAmount) === 0)
      return "Enter Amount";
    return "Swap";
  }

  // ── Event listeners ────────────────────────────────────────

  private attachEventListeners() {
    const $ = (id: string) => this._shadowRoot.getElementById(id);

    // Settings
    $("settings-btn")?.addEventListener("click", () => {
      this.showSettings = !this.showSettings;
      this.render();
      this.attachEventListeners();
    });

    // Close widget
    $("close-widget-btn")?.addEventListener("click", () => {
      this.isWidgetVisible = false;
      this.render();
      this.dispatchEvent(new CustomEvent("widget-close", { bubbles: true }));
    });

    // Connect wallet modal close / overlay
    $("close-connect-wallet-btn")?.addEventListener("click", () =>
      this.closeConnectWalletModal(),
    );
    $("connect-wallet-overlay")?.addEventListener("click", (e) => {
      if (e.target === $("connect-wallet-overlay"))
        this.closeConnectWalletModal();
    });

    // Connect wallet items
    this._shadowRoot.querySelectorAll(".connect-wallet-item").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const type = (e.currentTarget as HTMLButtonElement).dataset
          .walletType as "evm" | "tron" | "solana";
        if (!type || this.isConnectingWallet) return;
        this.isConnectingWallet = true;
        this.startConnectWalletTimeout();
        this.render();
        this.attachEventListeners();
        try {
          await this.walletManager.connect(type);
          this.clearConnectWalletTimeout();
          this.showConnectWalletModal = false;
          this.config.onWalletConnect?.(this.walletState.address || "");
        } catch (err) {
          this.clearConnectWalletTimeout();
          console.error("Wallet connect failed:", err);

          if (isWalletRedirectError(err)) {
            this.showConnectWalletModal = false;
            return;
          }

          const msg =
            err instanceof Error
              ? err.message || ""
              : typeof err === "string"
                ? err
                : "";
          const lower = msg.toLowerCase();
          const isUserRejected =
            (err as any)?.code === 4001 ||
            lower.includes("rejected") ||
            lower.includes("user cancelled") ||
            lower.includes("user canceled") ||
            lower.includes("user denied");
          if (!isUserRejected) {
            this.showSwapStatusModal(
              "error",
              msg || "Failed to connect wallet",
              { isWalletConnect: true },
            );
          }
        } finally {
          this.isConnectingWallet = false;
          this.render();
          this.attachEventListeners();
        }
      });
    });

    // Slippage
    this._shadowRoot.querySelectorAll(".slippage-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.slippage = parseFloat(
          (e.target as HTMLButtonElement).dataset.value || "0.5",
        );
        this.render();
        this.attachEventListeners();
      });
    });
    (
      this._shadowRoot.querySelector(".slippage-input") as HTMLInputElement
    )?.addEventListener("input", (e) => {
      const num = parseFloat(
        (e.target as HTMLInputElement).value.replace(/%/g, "").trim(),
      );
      if (!isNaN(num) && num >= 0 && num <= 50) this.slippage = num;
    });

    // Reverse
    $("reverse-btn")?.addEventListener("click", () => {
      [this.fromTokenData, this.toTokenData] = [
        this.toTokenData,
        this.fromTokenData,
      ];
      [this.fromAmount, this.toAmount] = [this.toAmount, this.fromAmount];
      this.fetchBalances();
      if (this.fromAmount) this.fetchQuoteDebounced();
      else {
        this.render();
        this.attachEventListeners();
      }
    });

    // Amount input
    ($("from-input") as HTMLInputElement)?.addEventListener("input", (e) => {
      const input = e.target as HTMLInputElement;
      const sanitized = this.sanitizeAmountInput(input.value);
      if (input.value !== sanitized) {
        const cursor = input.selectionStart ?? sanitized.length;
        const delta = input.value.length - sanitized.length;
        input.value = sanitized;
        const nextPos = Math.max(0, cursor - delta);
        input.setSelectionRange(nextPos, nextPos);
      }
      this.fromAmount = sanitized;
      if (this.swapStatusType === "error") this.clearSwapStatus();
      this.fetchQuoteDebounced();
    });

    // Token selector buttons
    $("from-token-btn")?.addEventListener("click", () => {
      this.tokenSelectorMode = "from";
      this.openTokenSelector();
    });
    $("to-token-btn")?.addEventListener("click", () => {
      this.tokenSelectorMode = "to";
      this.openTokenSelector();
    });

    // Destination address
    $("destination-toggle")?.addEventListener("click", () => {
      this.showDestinationAddress = !this.showDestinationAddress;
      this.render();
      this.attachEventListeners();
    });
    ($("destination-input") as HTMLInputElement)?.addEventListener(
      "input",
      (e) => {
        this.destinationAddress = (e.target as HTMLInputElement).value;
        const swapBtn = $("swap-btn") as HTMLButtonElement;
        if (swapBtn) {
          swapBtn.disabled =
            this.isLoadingQuote ||
            this.isSwapping ||
            (this.walletState.connected &&
              !(this.destinationAddress || "").trim());
          swapBtn.textContent = this.getSwapButtonText();
        }
      },
    );
    $("destination-set-btn")?.addEventListener("click", () => {
      if (!this.walletState.connected) this.showConnectWalletModal = true;
      else this.showDestinationAddressModal = !this.showDestinationAddressModal;
      this.render();
      this.attachEventListeners();
    });
    $("destination-clear-btn")?.addEventListener("click", () => {
      this.destinationAddress = "";
      this.render();
      this.attachEventListeners();
    });
    this._shadowRoot
      .querySelectorAll(".destination-modal-item")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          this.destinationAddress =
            (e.currentTarget as HTMLButtonElement).dataset.address || "";
          this.showDestinationAddressModal = false;
          this.render();
          this.attachEventListeners();
        });
      });

    // Token selector
    $("close-token-selector-btn")?.addEventListener("click", () =>
      this.closeTokenSelector(),
    );
    $("token-selector-overlay")?.addEventListener("click", (e) => {
      if (e.target === $("token-selector-overlay")) this.closeTokenSelector();
    });
    ($("token-search-input") as HTMLInputElement)?.addEventListener(
      "input",
      (e) => {
        const q = (e.target as HTMLInputElement).value;
        this.tokenSearchQuery = q;
        if (this.tokenSearchDebounceTimer)
          clearTimeout(this.tokenSearchDebounceTimer);
        this.tokenSearchDebounceTimer = window.setTimeout(async () => {
          this.tokenSearchDebounceTimer = null;
          await this.loadTokenList(q);
          this.render();
          this.attachEventListeners();
          (
            this._shadowRoot.getElementById(
              "token-search-input",
            ) as HTMLInputElement
          )?.focus();
        }, 1000);
      },
    );
    this._shadowRoot
      .querySelectorAll(".networks-list__item[data-network]")
      .forEach((btn) => {
        btn.addEventListener("click", async () => {
          const network = (btn as HTMLElement).dataset.network;
          if (!network) return;
          this.tokenFilterNetwork = network;
          await this.loadTokenList(this.tokenSearchQuery, network);
          this.render();
          this.attachEventListeners();
        });
      });
    this._shadowRoot.querySelectorAll(".token-list-item").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLElement;
        const token = this.tokenList.find(
          (t) =>
            t.symbol === target.dataset.tokenSymbol &&
            t.network === target.dataset.tokenNetwork,
        );
        if (token) this.selectToken(token);
        this.closeTokenSelector();
      });
    });

    // Swap button
    $("swap-btn")?.addEventListener("click", () => {
      if (!this.walletState.connected) {
        this.showConnectWalletModal = true;
        this.render();
        this.attachEventListeners();
      } else this.handleSwap();
    });

    // Transaction modal primary button
    $("tx-modal-primary-btn")?.addEventListener("click", () => {
      const wasWalletConnectError = this.isWalletConnectError;
      this.clearSwapStatus();
      if (wasWalletConnectError) this.showConnectWalletModal = true;
      this.render();
      this.attachEventListeners();
    });
  }

  // ── Connect wallet timeout (auto-close after 10s) ─────────

  private startConnectWalletTimeout() {
    this.clearConnectWalletTimeout();
    this.connectWalletTimeoutId = window.setTimeout(() => {
      if (this.isConnectingWallet) {
        this.closeConnectWalletModal();
      }
    }, CONNECT_WALLET_TIMEOUT_MS);
  }

  private clearConnectWalletTimeout() {
    if (this.connectWalletTimeoutId != null) {
      clearTimeout(this.connectWalletTimeoutId);
      this.connectWalletTimeoutId = null;
    }
  }

  private closeConnectWalletModal() {
    this.clearConnectWalletTimeout();
    this.showConnectWalletModal = false;
    this.isConnectingWallet = false;
    this.render();
    this.attachEventListeners();
  }

  // ── Token selector ─────────────────────────────────────────

  private async openTokenSelector() {
    this.showTokenSelector = true;
    this.tokenSearchQuery = "";
    this.tokenFilterNetwork = "all";
    const [networks, tokens] = await Promise.all([
      networksService.getNetworks(),
      tokenService.searchTokens("", "all"),
    ]);
    this.networksList = networks;
    this.tokenList = tokens;
    this.isTokenListLoading = false;
    this.render();
    this.attachEventListeners();
  }

  private closeTokenSelector() {
    this.showTokenSelector = false;
    this.tokenSearchQuery = "";
    this.tokenFilterNetwork = "all";
    this.tokenList = [];
    this.render();
    this.attachEventListeners();
  }

  private async loadTokenList(query: string, network?: string) {
    this.isTokenListLoading = true;
    try {
      this.tokenList = await tokenService.searchTokens(
        query,
        network ?? this.tokenFilterNetwork,
      );
    } catch {
      this.tokenList = [];
    } finally {
      this.isTokenListLoading = false;
    }
  }

  private selectToken(token: Token) {
    const other =
      this.tokenSelectorMode === "from" ? this.toTokenData : this.fromTokenData;
    if (
      other &&
      token.symbol === other.symbol &&
      token.network === other.network
    ) {
      [this.fromTokenData, this.toTokenData] = [
        this.toTokenData,
        this.fromTokenData,
      ];
    } else if (this.tokenSelectorMode === "from") {
      this.fromTokenData = token;
    } else {
      this.toTokenData = token;
    }
    this.fromAmount = "";
    this.toAmount = "";
    this.currentQuote = null;
    this.fetchBalances();
    if (this.fromTokenData && this.toTokenData && this.fromAmount)
      this.fetchQuoteDebounced();
    else {
      this.render();
      this.attachEventListeners();
    }
  }

  // ── Quote ──────────────────────────────────────────────────

  private fetchQuoteDebounced() {
    if (this.quoteDebounceTimer) clearTimeout(this.quoteDebounceTimer);

    const amount = parseFloat(this.fromAmount);
    if (!this.fromAmount || Number.isNaN(amount) || amount <= 0) {
      this.isLoadingQuote = false;
      this.currentQuote = null;
      this.toAmount = this.fromAmount.trim() === "0" ? "0" : "";
      const focusSnapshot = {
        shouldRestore:
          (this._shadowRoot.activeElement as HTMLElement | null)?.id ===
          "from-input",
        selectionStart:
          (this._shadowRoot.activeElement as HTMLInputElement | null)
            ?.selectionStart ?? null,
        selectionEnd:
          (this._shadowRoot.activeElement as HTMLInputElement | null)
            ?.selectionEnd ?? null,
      };
      this.render();
      this.attachEventListeners();
      this.restoreFromInputFocus(focusSnapshot);
      return;
    }

    this.quoteDebounceTimer = window.setTimeout(async () => {
      this.quoteDebounceTimer = null;
      const active = this._shadowRoot.activeElement as HTMLInputElement | null;
      const focusSnapshot = {
        shouldRestore: active?.id === "from-input",
        selectionStart: active?.selectionStart ?? null,
        selectionEnd: active?.selectionEnd ?? null,
      };
      this.isLoadingQuote = true;
      this.toAmount = "";
      this.render();
      this.attachEventListeners();
      this.restoreFromInputFocus(focusSnapshot);
      await this.fetchQuote();
      this.restoreFromInputFocus(focusSnapshot);
    }, 1000);
  }

  private async fetchQuote() {
    if (!this.fromTokenData || !this.toTokenData || !this.fromAmount) {
      this.isLoadingQuote = false;
      this.render();
      this.attachEventListeners();
      return;
    }
    try {
      this.isLoadingQuote = true;
      const quote = await quoteService.getQuote(
        this.fromTokenData,
        this.toTokenData,
        this.fromAmount,
        this.slippage,
      );
      if (quote) {
        this.currentQuote = quote;
        this.toAmount = quoteService.calculateOutputAmount(quote);
      }
    } catch {
      this.toAmount = "0";
    } finally {
      const focusSnapshot = {
        shouldRestore:
          (this._shadowRoot.activeElement as HTMLElement | null)?.id ===
          "from-input",
        selectionStart:
          (this._shadowRoot.activeElement as HTMLInputElement | null)
            ?.selectionStart ?? null,
        selectionEnd:
          (this._shadowRoot.activeElement as HTMLInputElement | null)
            ?.selectionEnd ?? null,
      };
      this.isLoadingQuote = false;
      this.render();
      this.attachEventListeners();
      this.restoreFromInputFocus(focusSnapshot);
    }
  }

  // ── Swap ───────────────────────────────────────────────────

  private async handleSwap() {
    if (!this.fromTokenData || !this.toTokenData || !this.currentQuote) {
      this.showSwapStatusModal(
        "error",
        "Please enter an amount and get a quote first",
      );
      return;
    }
    if (!this.fromAmount || parseFloat(this.fromAmount) === 0) {
      this.showSwapStatusModal("error", "Please enter a valid amount");
      return;
    }
    const dest = (this.destinationAddress || "").trim();
    if (!dest) {
      this.showSwapStatusModal("error", "Please enter destination address");
      return;
    }

    try {
      this.isSwapping = true;
      this.showSwapStatusModal("loading", "Refreshing quote...");
      const freshQuote = await quoteService.getQuote(
        this.fromTokenData,
        this.toTokenData,
        this.fromAmount,
        this.slippage,
      );
      if (!freshQuote)
        throw new Error("Could not get a fresh quote. Please try again.");

      let effectiveFromToken = this.fromTokenData;
      let quoteToUse = freshQuote;

      if (needsWrapping(this.fromTokenData)) {
        this.displayFromTokenAsWrapped = true;
        this.showSwapStatusModal("loading", "Wrapping native token...");
        await wrapNativeToken(
          this.fromTokenData,
          this.walletState,
          this.fromAmount,
        );
        this.render();
        this.attachEventListeners();
        effectiveFromToken = {
          ...this.fromTokenData,
          address: this.fromTokenData.wrapped_token_address!,
          symbol: getWrappedTokenSymbol(this.fromTokenData.symbol),
          name: `Wrapped ${this.fromTokenData.symbol}`,
        };
        this.showSwapStatusModal("loading", "Refreshing quote...");
        const quoteAfterWrap = await quoteService.getQuote(
          effectiveFromToken,
          this.toTokenData,
          this.fromAmount,
          this.slippage,
        );
        if (quoteAfterWrap) {
          quoteToUse = quoteAfterWrap;
          this.currentQuote = quoteAfterWrap;
          this.toAmount = quoteService.calculateOutputAmount(quoteAfterWrap);
        }
      } else {
        this.currentQuote = freshQuote;
        this.toAmount = quoteService.calculateOutputAmount(freshQuote);
      }

      this.showSwapStatusModal("loading", "Preparing swap...");
      const intentId = await swapService.executeSwap({
        fromToken: effectiveFromToken,
        toToken: this.toTokenData,
        amount: this.fromAmount,
        quote: quoteToUse,
        wallet: this.walletState,
        slippage: this.slippage,
        destinationAddress: this.destinationAddress,
      });
      this.swapTxHash = intentId;
      this.showSwapStatusModal("loading", "Processing swap...");
      this.startIntentStatusPolling(intentId);
      this.config.onSwapSuccess?.(intentId);
    } catch (error: any) {
      console.error("Swap failed:", error);
      this.showSwapStatusModal(
        "error",
        `Swap failed: ${this.getErrorMessage(error)}`,
      );
      this.config.onSwapError?.(error);
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const data = error.response.data as Record<string, unknown>;
        if (typeof data.message === "string") return data.message;
        if (typeof data.detail === "string") return data.detail;
        if (Array.isArray(data.detail)) {
          const msg = (data.detail as Array<{ msg?: string }>)
            .map((d) => d.msg)
            .filter(Boolean)
            .join("; ");
          if (msg) return msg;
        }
      }
      return error.message;
    }
    return "Unknown error occurred";
  }

  // ── Swap status modal helpers ──────────────────────────────

  private showSwapStatusModal(
    type: "loading" | "success" | "error",
    message: string,
    options?: { isWalletConnect?: boolean },
  ) {
    this.swapStatusType = type;
    this.swapStatusMessage = message.replace(/^[⏳✅❌]\s*/, "");
    this.isWalletConnectError = options?.isWalletConnect ?? false;
    this.render();
    this.attachEventListeners();
  }

  private clearSwapStatus() {
    this.swapStatusType = "idle";
    this.swapStatusMessage = "";
    this.isWalletConnectError = false;
    this.swapTxHash = null;
    this.intentIdForStatus = null;
    this.intentStatusFromApi = null;
    this.displayFromTokenAsWrapped = false;
    this.isSwapping = false;
    this.stopIntentStatusPolling();
  }

  // ── Intent status polling ──────────────────────────────────

  private readonly INTENT_STATUS_SUCCESS = new Set([
    IntentStatus.Fulfilled,
    IntentStatus.Refunded,
  ]);
  private readonly INTENT_STATUS_FAILED = new Set([
    IntentStatus.Declined,
    IntentStatus.DeclinedDueToKytCheck,
    IntentStatus.Expired,
    IntentStatus.Failed,
  ]);

  private stopIntentStatusPolling() {
    if (this.intentStatusPollTimer != null) {
      clearInterval(this.intentStatusPollTimer);
      this.intentStatusPollTimer = null;
    }
  }

  private startIntentStatusPolling(intentId: string) {
    this.intentIdForStatus = intentId;
    this.intentStatusFromApi = null;
    this.intentStatusPollStartedAt = Date.now();
    const poll = async () => {
      if (!this.intentIdForStatus) return;
      if (Date.now() - this.intentStatusPollStartedAt > 5 * 60 * 1000) {
        this.stopIntentStatusPolling();
        return;
      }
      try {
        const status = await hotpotApiClient.getIntentStatus(
          this.intentIdForStatus,
        );
        this.intentStatusFromApi = status;
        if (this.INTENT_STATUS_SUCCESS.has(status)) {
          this.swapStatusType = "success";
          this.swapStatusMessage = "Transaction successful";
          this.stopIntentStatusPolling();
          this.fetchBalances();
        } else if (this.INTENT_STATUS_FAILED.has(status)) {
          this.swapStatusType = "error";
          this.swapStatusMessage = "Transaction failed";
          this.stopIntentStatusPolling();
        }
        this.render();
        this.attachEventListeners();
      } catch (e) {
        console.error("Intent status poll failed:", e);
      }
    };
    poll();
    this.intentStatusPollTimer = window.setInterval(poll, 3000);
  }

  // ── Explorer URL ───────────────────────────────────────────

  private getExplorerUrl(txHash: string): string {
    const isEvmTx = txHash.startsWith("0x") && txHash.length === 66;
    const isTronTx = txHash.length === 64 && /^[a-fA-F0-9]+$/.test(txHash);
    if (!isEvmTx && !isTronTx) return "";
    if (this.walletState.type === "evm" && isEvmTx) {
      const c = this.walletState.chainId;
      if (c === 1) return `https://etherscan.io/tx/${txHash}`;
      if (c === 56) return `https://bscscan.com/tx/${txHash}`;
      if (c === 137) return `https://polygonscan.com/tx/${txHash}`;
      return `https://etherscan.io/tx/${txHash}`;
    } else if (this.walletState.type === "tron" && isTronTx) {
      return `https://tronscan.org/#/transaction/${txHash}`;
    }
    return "";
  }
}

customElements.define("hotpot-swap-widget", HotpotSwapWidget);
export { HotpotSwapWidget };
export type { WidgetConfig };
