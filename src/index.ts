import type { Quote } from "@hot-pot/hotpot-sdk-ts";
import { IntentStatus } from "@hot-pot/hotpot-sdk-ts";
import axios from "axios";

import { networksService, type NetworkInfo } from "./services/networks";
import { generateStyles } from "./styles/theme";
import type { WidgetConfig, WalletState, Token } from "./types";
import { WalletManager } from "./services/wallet";
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
import successTxDark from "./assets/success-transaction-dark.svg";
import successTxWhite from "./assets/success-transaction-white.svg";
import CHEVRON_ICON_SVG_RAW from "./assets/icon-shevron.svg?raw";
import SETTING_ICON_SVG_RAW from "./assets/setting-icon.svg?raw";
import CLOSE_ICON_SVG_RAW from "./assets/close-icon.svg?raw";
import SWAP_ICON_SVG_RAW from "./assets/swap-icon.svg?raw";
import WALLET_ICON_SVG_RAW from "./assets/wallet-icon.svg?raw";
import INFO_ICON_SVG_RAW from "./assets/info-icon.svg?raw";
import metamaskIconUrl from "./assets/metamask-icon.svg";
import phantomIconUrl from "./assets/phantom.avif";
import tronlinkIconUrl from "./assets/tronlink-icon.svg";
import ethereumNetworkIcon from "./assets/networks/ethereum.svg";
import tronNetworkIcon from "./assets/networks/tron.svg";
import solanaNetworkIcon from "./assets/networks/solana.avif";
import bitcoinNetworkIcon from "./assets/networks/bitcoin.svg";
import EXCLAMATION_ERROR_RAW from "./assets/exclamation-mark-error.svg?raw";
import EXCLAMATION_WARNING_RAW from "./assets/exclamation-mark-warning.svg?raw";
import EXCLAMATION_SUCCESS_RAW from "./assets/exclamation-mark-success.svg?raw";
import ICON_WARNING_RAW from "./assets/icon-warning.svg?raw";
import ICON_SUCCESS_RAW from "./assets/icon-success.svg?raw";

const SETTING_ICON_SVG = SETTING_ICON_SVG_RAW;
const INFO_ICON_SVG = INFO_ICON_SVG_RAW;
const WALLET_ICON_SVG = WALLET_ICON_SVG_RAW.replace(
  /<svg /,
  '<svg class="wallet-icon" ',
);
const CLOSE_ICON_SVG = CLOSE_ICON_SVG_RAW;
const SWAP_ICON_SVG = SWAP_ICON_SVG_RAW.replace(/<rect[^>]*\/>/g, "")
  .replace(/viewBox="0 0 52 40"/, 'viewBox="16 10 22 22"')
  .replace(/width="52" height="40"/, 'width="24" height="24"')
  .replace(/<svg /, '<svg class="swap-arrow-icon" ');

const CHEVRON_ICON_SVG = CHEVRON_ICON_SVG_RAW.replace(
  /<svg /,
  '<svg class="chevron-icon" ',
);

const NETWORK_ICONS: Record<string, string> = {
  ethereum: ethereumNetworkIcon,
  tron: tronNetworkIcon,
  solana: solanaNetworkIcon,
  bitcoin: bitcoinNetworkIcon,
};

class HotpotSwapWidget extends HTMLElement {
  private _shadowRoot: ShadowRoot;
  private config: WidgetConfig = {};
  private fromAmount: string = "";
  private toAmount: string = "";
  private fromTokenData: Token | null = null;
  private toTokenData: Token | null = null;
  private slippage: number = 0.5;
  private showSettings: boolean = false;
  private showTokenSelector: boolean = false;
  private tokenSelectorMode: "from" | "to" = "from";
  private tokenSearchQuery: string = "";
  private tokenFilterNetwork: string = "all";
  private tokenList: Token[] = [];
  private networksList: NetworkInfo[] = [];
  private isTokenListLoading: boolean = false;
  private swapStatusType: "idle" | "loading" | "success" | "error" | "warning" =
    "idle";
  private swapStatusMessage: string = "";
  private swapTxHash: string | null = null;
  private intentIdForStatus: string | null = null;
  private intentStatusFromApi: IntentStatus | null = null;
  private intentStatusPollTimer: number | null = null;
  private intentStatusPollStartedAt: number = 0;
  private isSwapping: boolean = false;
  private walletManager: WalletManager;
  private walletState: WalletState;
  private isLoadingQuote: boolean = false;
  private currentQuote: Quote | null = null;
  private quoteDebounceTimer: number | null = null;
  private tokenSearchDebounceTimer: number | null = null;
  private showDestinationAddress: boolean = false;
  private destinationAddress: string = "";
  private isWidgetVisible: boolean = true;
  private showConnectWalletModal: boolean = false;
  private isConnectingWallet: boolean = false;
  private isBalanceLoading: boolean = false;
  private displayFromTokenAsWrapped: boolean = false;
  private showDestinationAddressModal: boolean = false;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this.walletManager = new WalletManager();
    this.walletState = this.walletManager.getState();

    // Subscribe to wallet state changes
    this.walletManager.subscribe(async (state) => {
      this.walletState = state;
      if (!state.connected) {
        this.destinationAddress = "";
        if (this.fromTokenData) this.fromTokenData.balance = null;
        if (this.toTokenData) this.toTokenData.balance = null;
      } else {
        this.showDestinationAddress = true;
        if (!this.destinationAddress) {
          this.destinationAddress = state.address || "";
        }
        await this.ensureTokensMatchWallet();
        await this.fetchBalances();
      }
      this.render();
      this.attachEventListeners();
    });
  }

  async connectedCallback() {
    this.parseAttributes();
    await this.initializeTokens();
    this.render();
    this.attachEventListeners();
  }

  private getNetworkIconUrl(networkName: string): string {
    if (!networkName) return "";
    const key = networkName.toLowerCase();
    if (NETWORK_ICONS[key]) return NETWORK_ICONS[key];
    const n = this.networksList.find((x) => x.name.toLowerCase() === key);
    return n?.icon_url ?? "";
  }

  private renderTokenIcon(token: Token | null): string {
    if (!token) return "";
    const icon = token.icon_url
      ? `<img src="${token.icon_url}" class="token-icon" alt="${token.symbol}" />`
      : '<span class="token-icon-placeholder"></span>';
    const networkIconUrl = this.getNetworkIconUrl(token.network);
    const networkBadge = networkIconUrl
      ? `<span class="token-network-icon-wrap"><img src="${networkIconUrl}" class="token-network-icon" alt="" /></span>`
      : "";
    return `<span class="token-icon-wrap">${icon}${networkBadge}</span>`;
  }

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
      if (!this.fromTokenData || !this.toTokenData) {
        console.warn("Failed to load default tokens, using mock data");
      }
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
      let fromBal: string | null = null;
      let toBal: string | null = null;
      if (this.fromTokenData) {
        fromBal = await balanceService.getBalance(
          this.fromTokenData,
          this.walletState,
        );
        if (isTron) await new Promise((r) => setTimeout(r, 300));
      }
      if (this.toTokenData) {
        toBal = await balanceService.getBalance(
          this.toTokenData,
          this.walletState,
        );
      }
      if (this.fromTokenData) this.fromTokenData.balance = fromBal ?? undefined;
      if (this.toTokenData) this.toTokenData.balance = toBal ?? undefined;
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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.parseAttributes();
      this.render();
    }
  }

  static get observedAttributes() {
    return [
      "theme",
      "primary-text-color",
      "secondary-text-color",
      "background-color",
      "card-background-color",
      "button-color",
      "button-text-color",
      "icons-color",
      "default-from-token",
      "default-to-token",
      "swap-warning-color",
      "swap-error-color",
      "swap-success-color",
      "swap-divider-variant",
    ];
  }

  private parseAttributes() {
    const attr = (name: string) => this.getAttribute(name);
    this.config = {
      theme: (attr("theme") as "light" | "dark" | "auto") || "dark",
      primaryTextColor: attr("primary-text-color") ?? undefined,
      secondaryTextColor: attr("secondary-text-color") ?? undefined,
      backgroundColor: attr("background-color") ?? undefined,
      cardBackgroundColor: attr("card-background-color") ?? undefined,
      swapWarningColor: attr("swap-warning-color") ?? undefined,
      swapErrorColor: attr("swap-error-color") ?? undefined,
      swapSuccessColor: attr("swap-success-color") ?? undefined,
      buttonColor: attr("button-color") ?? undefined,
      buttonTextColor: attr("button-text-color") ?? undefined,
      iconsColor: attr("icons-color") ?? undefined,
      defaultFromToken: attr("default-from-token") || "ETH",
      defaultToToken: attr("default-to-token") || "USDT",
      defaultSlippage: parseFloat(attr("default-slippage") || "0.5"),
      swapDividerVariant:
        (attr("swap-divider-variant") as "v1" | "v2") || "v2",
    };

    this.slippage = this.config.defaultSlippage ?? 0.5;
  }

  private render() {
    const styles = generateStyles(this.config);

    this._shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="widget-container widget-container--divider-${this.config.swapDividerVariant || "v2"}" style="${!this.isWidgetVisible ? "display: none;" : ""}">
        ${this.renderHeader()}
        ${this.renderSwapForm()}
        ${this.showTokenSelector ? this.renderTokenSelector() : ""}
        ${this.renderConnectWalletModal()}
      </div>
    `;
  }

  private getWalletIconByType(): string {
    const t = this.walletState.type;
    if (t === "evm") return metamaskIconUrl;
    if (t === "tron") return tronlinkIconUrl;
    if (t === "solana") return phantomIconUrl;
    return metamaskIconUrl;
  }

  private renderHeader(): string {
    return `
      <div class="widget-header">
        <h2 class="widget-title">Swap</h2>
        <div class="header-actions">
          <button class="icon-button" id="settings-btn" aria-label="Settings">${SETTING_ICON_SVG}</button>
          <button class="icon-button" id="close-widget-btn" aria-label="Close">${CLOSE_ICON_SVG}</button>
        </div>
      </div>
    `;
  }

  private formatBalance(
    b: string | null | undefined,
    isFromToken?: boolean,
  ): string {
    if (this.isBalanceLoading && this.walletState.connected) {
      const token = isFromToken ? this.fromTokenData : this.toTokenData;
      if (token && b == null) return "...";
    }
    if (!b || b === "" || b === "0" || parseFloat(b) === 0) return "0";
    const n = parseFloat(b);
    return n % 1 === 0
      ? n.toString()
      : n.toLocaleString("en-US", {
          maximumFractionDigits: 4,
          minimumFractionDigits: 0,
        });
  }

  private getSwapStatusFromQuote(): "idle" | "warning" {
    const q = this.currentQuote as { price_impact?: number } | null;
    const impact = q?.price_impact;
    if (impact != null && impact < -1) return "warning";
    return "idle";
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

  private isDarkTheme(): boolean {
    const t = this.config.theme || "dark";
    return (
      t === "dark" ||
      (t === "auto" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }

  private renderLoaderSvg(): string {
    const gradientId = "wlg-" + Math.random().toString(36).slice(2, 10);
    const isDark = this.isDarkTheme();
    const stop1 = isDark ? "#00000000" : "#FFFFFF00";
    const stop2 = isDark ? "#ffffff" : "#272727";

    return `<svg class="circular-progress-svg" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${stop1}"/>
              <stop offset="100%" stop-color="${stop2}"/>
            </linearGradient>
          </defs>
          <circle class="circular-progress-arc" cx="12" cy="12" r="10" fill="none" stroke="url(#${gradientId})" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="27 63" stroke-dashoffset="0"/>
        </svg>`;
  }

  private renderLoader(): string {
    return `<div class="swap-divider-status swap-divider-loading">
        ${this.renderLoaderSvg()}
      </div>`;
  }

  private renderSwapDividerContent(): string {
    const status = this.getEffectiveSwapStatus();
    if (status === "loading") {
      return this.renderLoader();
    }
    if (status === "error") {
      return `<div class="swap-divider-status swap-divider-error">${EXCLAMATION_ERROR_RAW}</div>`;
    }
    if (status === "warning") {
      return `<div class="swap-divider-status swap-divider-warning">${EXCLAMATION_WARNING_RAW}</div>`;
    }
    if (status === "success") {
      return `<div class="swap-divider-status swap-divider-success">${EXCLAMATION_SUCCESS_RAW}</div>`;
    }
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
      text = "Transaction failed";
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
          <span class="swap-status-toast-text">${this.escapeHtml(text)}</span>
        </div>
        ${explorerUrl ? `<a class="swap-status-toast-explorer" href="${explorerUrl}" target="_blank">View on Explorer ↗</a>` : ""}
      </div>
    `;
  }

  private renderTransactionModal(): string {
    const status = this.getEffectiveSwapStatus();
    if (
      (status === "loading" && !this.isSwapping) ||
      status === "idle" ||
      status === "warning"
    )
      return "";

    const isLoading = status === "loading";
    const isSuccess = status === "success";
    const isError = status === "error";

    const fromSymbol = this.fromTokenData?.symbol || "";
    const toSymbol = this.toTokenData?.symbol || "";
    const fromAmount = this.fromAmount || "";
    const toAmount = this.toAmount || "";

    let title = "";
    let subtitle = "";
    let buttonLabel = "";

    if (isLoading) {
      const intentStatus = this.intentStatusFromApi;
      if (!intentStatus || intentStatus === IntentStatus.Initiated) {
        title = "Submit swap";
        subtitle = "Confirm this transaction in your wallet.";
      } else if (intentStatus === IntentStatus.ApprovalAdded) {
        title = "Matching liquidity...";
      } else if (intentStatus === IntentStatus.Accepted) {
        title = "Executing your swap...";
      } else if (intentStatus === IntentStatus.UserDeposited) {
        title = "Executing your swap...";
      } else if (intentStatus === IntentStatus.RefundRequested) {
        title = "Requesting refund";
      } else if (intentStatus === IntentStatus.Refunded) {
        title = "Refund in progress...";
      } else if (intentStatus === IntentStatus.Declined) {
        title = "Your swap could not be completed.";
      } else if (intentStatus === IntentStatus.DeclinedDueToKytCheck) {
        title = "Your swap could not be completed.";
      } else if (intentStatus === IntentStatus.Fulfilled) {
        title = "Transaction confirmed";
      } else if (intentStatus === IntentStatus.Failed) {
        title = "Swap failed";
      } else {
        title = "Submitting transaction";
      }
    } else if (isSuccess) {
      title = "Transaction confirmed";
      subtitle =
        "Your swap was successfully executed. You can track it in your transaction history.";
      buttonLabel = "Back to swap";
    } else if (isError) {
      title = "Transaction failed";
      subtitle = "The transaction could not be completed.";
      buttonLabel = "Try again";
    }

    const isDarkTheme =
      this.config.theme === "dark" ||
      (this.config.theme === "auto" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    return `
      <div class="tx-modal-overlay">
        <div class="tx-modal">
          <div class="tx-modal-header">
            ${
              isLoading
                ? `<div class="tx-modal-spinner">${this.renderLoaderSvg()}</div>`
                : isSuccess
                  ? `<div class="tx-modal-icon tx-modal-icon--success"><img src="${
                      isDarkTheme ? successTxDark : successTxWhite
                    }" alt="success" /></div>`
                  : `<div class="tx-modal-icon tx-modal-icon--error">${EXCLAMATION_ERROR_RAW}</div>`
            }
          </div>
          <div class="tx-modal-body">
            <h2 class="tx-modal-title">${this.escapeHtml(title)}</h2>
            <div class="tx-modal-amount-row">
              <div class="tx-modal-token">
                ${this.renderTokenIcon(this.fromTokenData)}
                <div class="tx-modal-token-text">
                  <span class="tx-modal-amount">${this.escapeHtml(
                    fromAmount,
                  )} ${this.escapeHtml(fromSymbol)}</span>
                </div>
              </div>
              <span class="tx-modal-arrow">→</span>
              <div class="tx-modal-token">
                ${this.renderTokenIcon(this.toTokenData)}
                <div class="tx-modal-token-text">
                  <span class="tx-modal-amount">${this.escapeHtml(
                    toAmount,
                  )} ${this.escapeHtml(toSymbol)}</span>
                </div>
              </div>
            </div>
            <p class="tx-modal-subtitle">
              ${
                subtitle === "Confirm this transaction in your wallet."
                  ? `<span class="tx-modal-wallet-icon">${WALLET_ICON_SVG}</span>`
                  : ""
              }
              <span>${this.escapeHtml(subtitle)}</span>
            </p>
          </div>
          ${
            buttonLabel
              ? `<button class="tx-modal-primary-btn${
                  isError ? " tx-modal-primary-btn--error" : ""
                }" id="tx-modal-primary-btn">${this.escapeHtml(buttonLabel)}</button>`
              : ""
          }
        </div>
      </div>
    `;
  }

  private renderDestinationAddressModal(): string {
    if (!this.showDestinationAddressModal) return "";
    if (!this.walletState.connected || !this.walletState.address) return "";

    const addr = this.walletState.address;

    const formatAddr = (a: string) =>
      a.length > 16 ? `${a.slice(0, 6)}...${a.slice(-6)}` : a;

    return `
      <div class="destination-modal-overlay">
        <div class="destination-modal">
          <div class="destination-modal-list">
            <button class="destination-modal-item" data-address="${addr}">
              ${
                this.walletState.type === "evm"
                  ? `<img src="${metamaskIconUrl}" class="connect-wallet-icon" alt="MetaMask" />`
                  : this.walletState.type === "tron"
                    ? `<img src="${tronlinkIconUrl}" class="connect-wallet-icon" alt="TronLink" />`
                    : this.walletState.type === "solana"
                      ? `<img src="${phantomIconUrl}" class="connect-wallet-icon" alt="Phantom" />`
                      : ""
              }
              <span class="destination-modal-item-label">${this.escapeHtml(formatAddr(addr))}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private formatUsd(amount: number, rate: number): string {
    const usd = amount * rate;
    return usd === 0 ? "$0" : usd < 0.01 ? "~$0.00" : `$${usd.toFixed(2)}`;
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
    const fromBal = this.formatBalance(this.fromTokenData?.balance, true);
    const toBal = this.formatBalance(this.toTokenData?.balance, false);
    const fromUsd = this.formatUsd(
      parseFloat(fromBal) || 0,
      this.fromTokenData?.fiatRate ?? 0,
    );
    const toUsd = this.formatUsd(
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
                ${this.renderTokenIcon(this.fromTokenData)}
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

          <div class="swap-divider">
            ${this.renderSwapDividerContent()}
          </div>

          <div class="swap-section swap-section-bottom">
            <div class="swap-label">You receive</div>
            <div class="swap-input-row">
              <div class="swap-amount-wrapper">
                <input type="text" class="amount-input ${!this.toAmount ? "loading" : ""}" id="to-input" placeholder="0" value="${this.toAmount}" readonly />
              </div>
              <button class="token-select" id="to-token-btn">
                ${this.renderTokenIcon(this.toTokenData)}
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
            ${
              this.destinationAddress
                ? `<span class="destination-wallet-icon">${
                    this.walletState.type === "evm"
                      ? `<img src="${metamaskIconUrl}" alt="MetaMask" />`
                      : this.walletState.type === "tron"
                        ? `<img src="${tronlinkIconUrl}" alt="TronLink" />`
                        : this.walletState.type === "solana"
                          ? `<img src="${phantomIconUrl}" alt="Phantom" />`
                          : ""
                  }</span>`
                : ""
            }
            <input type="text" class="destination-address-input${this.destinationAddress ? " destination-address-input--filled" : ""}" id="destination-input"  value="${this.destinationAddress}" autocomplete="off" />
            ${
              this.destinationAddress
                ? `<button class="destination-clear-btn" id="destination-clear-btn">Clear</button>`
                : `<button class="destination-set-btn" id="destination-set-btn">Set address</button>`
            }
          </div>
          `
              : ""
          }
        </div>
        ${this.renderDestinationAddressModal()}

        ${this.renderPriceImpactWarning()}

        <button class="swap-button${this.getSwapButtonText() === "Enter Amount" ? " swap-button--enter-amount" : ""}" id="swap-btn" ${this.swapStatusType === "error" ? "" : this.isLoadingQuote || this.isSwapping || (this.walletState.connected && !(this.destinationAddress || "").trim()) ? "disabled" : ""}>
          ${this.getSwapButtonText()}
        </button>
      </div>
      ${this.renderTransactionModal()}
    `;
  }

  private renderPriceImpactWarning(): string {
    // Mock high price impact for demo
    const priceImpact = 0; // Will calculate from quote later

    if (priceImpact > 5) {
      return `
        <div class="warning-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <div>
            <strong>High Price Impact (${priceImpact.toFixed(2)}%)</strong><br/>
            You may lose value on this trade
          </div>
        </div>
      `;
    }
    return "";
  }

  private renderSlippagePanel(): string {
    if (!this.showSettings) return "";
    const presets = [0.3, 0.5, 1];
    return `
      <div class="slippage-panel">
        <label class="slippage-label">Slippage Tolerance</label>
        <div class="slippage-row">
          ${presets
            .map(
              (v) => `
            <button class="slippage-btn ${this.slippage === v ? "active" : ""}" data-value="${v}">${v}%</button>
          `,
            )
            .join("")}
          <input
            type="text"
            class="slippage-input"
            placeholder="Custom"
            value="${this.slippage} %"
          />
        </div>
      </div>
    `;
  }

  private renderTokenSelector(): string {
    const displayTokens = this.tokenList.slice(0, 50);

    const networkOptions: Array<{
      value: string;
      label: string;
      icon_url?: string;
    }> = [
      { value: "all", label: "All" },
      ...this.networksList.map((n) => {
        const key = n.name.toLowerCase();
        const icon = NETWORK_ICONS[key] ?? n.icon_url;
        return {
          value: key,
          label: n.name.charAt(0).toUpperCase() + n.name.slice(1),
          icon_url: icon,
        };
      }),
    ];

    return `
      <div class="token-selector-overlay" id="token-selector-overlay">
        <div class="token-selector-modal">
          <div class="modal-header">
            <h3 class="modal-title">Select token</h3>
            <button class="icon-button close-button" id="close-token-selector-btn" aria-label="Close">${CLOSE_ICON_SVG}</button>
          </div>
          <input
            type="text"
            class="token-search-input"
            id="token-search-input"
            placeholder="Search by token name or paste address"
            value="${this.escapeHtml(this.tokenSearchQuery)}"
            autocomplete="off"
          />
          <div class="networks-list">
            ${networkOptions
              .map(
                (n) => `
              <button class="networks-list__item ${this.tokenFilterNetwork === n.value ? "active" : ""}" data-network="${n.value}">
                ${n.value === "all" ? n.label : `<span class="networks-list__network">${n.icon_url ? `<img src="${n.icon_url}" alt="${n.label}" />` : ""}<span>${n.label}</span></span>`}
              </button>
            `,
              )
              .join("")}
          </div>
          <div class="token-selector-list">
            ${this.isTokenListLoading ? '<div class="token-list-loading">Loading...</div>' : ""}
            ${displayTokens
              .map(
                (t) => `
              <button class="token-list-item" data-token-symbol="${this.escapeHtml(t.symbol)}" data-token-network="${this.escapeHtml(t.network)}">
                ${this.renderTokenIcon(t)}
                <div class="token-list-item-info">
                  <span class="token-symbol">${this.escapeHtml(t.symbol)}</span>
                  <span class="token-network">${this.escapeHtml(t.network)}</span>
                </div>
              </button>
            `,
              )
              .join("")}
            ${!this.isTokenListLoading && displayTokens.length === 0 ? '<div class="token-list-empty">No tokens found</div>' : ""}
          </div>
        </div>
      </div>
    `;
  }

  private escapeHtml(s: string): string {
    const div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  private readonly WALLET_OPTIONS = [
    {
      id: "metamask",
      label: "MetaMask",
      icon: metamaskIconUrl,
      type: "evm" as const,
    },
    {
      id: "phantom",
      label: "Phantom",
      icon: phantomIconUrl,
      type: "solana" as const,
    },
    {
      id: "tronlink",
      label: "Tron Link",
      icon: tronlinkIconUrl,
      type: "tron" as const,
    },
  ];

  private renderConnectWalletModal(): string {
    if (!this.showConnectWalletModal) return "";
    if (this.isConnectingWallet) {
      return `
      <div class="connect-wallet-overlay" id="connect-wallet-overlay">
        <div class="connect-wallet-modal connect-wallet-modal--loading">
          <div class="connect-wallet-loading-spinner">${this.renderLoaderSvg()}</div>
          <h2 class="connect-wallet-loading-title">Connect your wallet</h2>
          <p class="connect-wallet-loading-subtitle">Complete the connection request in your wallet.</p>
        </div>
      </div>
    `;
    }
    return `
      <div class="connect-wallet-overlay" id="connect-wallet-overlay">
        <div class="connect-wallet-modal">
          <div class="connect-wallet-header">
            <h2 class="connect-wallet-title">Connect wallet</h2>
            <button class="icon-button" id="close-connect-wallet-btn" aria-label="Close">${CLOSE_ICON_SVG}</button>
          </div>
          <div class="connect-wallet-list">
            ${this.WALLET_OPTIONS.map(
              (w) => `
              <button class="connect-wallet-item" data-wallet-type="${w.type}" ${this.isConnectingWallet ? "disabled" : ""}>
                <img class="connect-wallet-icon" src="${w.icon}" alt="${w.label}" />
                <span>${w.label}</span>
              </button>
            `,
            ).join("")}
          </div>
          ${this.isConnectingWallet ? '<div class="connect-wallet-loading">Connecting...</div>' : ""}
        </div>
      </div>
    `;
  }

  private attachEventListeners() {
    // Settings button
    const settingsBtn = this._shadowRoot.getElementById("settings-btn");
    settingsBtn?.addEventListener("click", () => {
      this.showSettings = !this.showSettings;
      this.render();
      this.attachEventListeners();
    });

    // Connect wallet modal
    const closeConnectWalletBtn = this._shadowRoot.getElementById(
      "close-connect-wallet-btn",
    );
    closeConnectWalletBtn?.addEventListener("click", () => {
      this.showConnectWalletModal = false;
      this.isConnectingWallet = false;
      this.render();
      this.attachEventListeners();
    });

    const connectWalletOverlay = this._shadowRoot.getElementById(
      "connect-wallet-overlay",
    );
    connectWalletOverlay?.addEventListener("click", (e) => {
      if (e.target === connectWalletOverlay) {
        this.showConnectWalletModal = false;
        this.isConnectingWallet = false;
        this.render();
        this.attachEventListeners();
      }
    });

    const connectWalletItems = this._shadowRoot.querySelectorAll(
      ".connect-wallet-item",
    );
    connectWalletItems.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const type = target.dataset.walletType as "evm" | "tron" | "solana";
        if (!type || this.isConnectingWallet) return;
        this.isConnectingWallet = true;
        this.render();
        this.attachEventListeners();
        try {
          await this.walletManager.connect(type);
          this.showConnectWalletModal = false;
          if (this.config.onWalletConnect) {
            this.config.onWalletConnect(this.walletState.address || "");
          }
        } catch (err) {
          console.error("Wallet connect failed:", err);
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
            );
          }
        } finally {
          this.isConnectingWallet = false;
          this.render();
          this.attachEventListeners();
        }
      });
    });

    // Close widget button
    const closeWidgetBtn = this._shadowRoot.getElementById("close-widget-btn");
    closeWidgetBtn?.addEventListener("click", () => {
      this.isWidgetVisible = false;
      this.render();
      this.dispatchEvent(new CustomEvent("widget-close", { bubbles: true }));
    });

    // Slippage panel
    const slippageBtns = this._shadowRoot.querySelectorAll(".slippage-btn");
    slippageBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.target as HTMLButtonElement;
        this.slippage = parseFloat(target.dataset.value || "0.5");
        this.render();
        this.attachEventListeners();
      });
    });

    const slippageInput = this._shadowRoot.querySelector(
      ".slippage-input",
    ) as HTMLInputElement;
    slippageInput?.addEventListener("input", (e) => {
      const val = (e.target as HTMLInputElement).value.replace(/%/g, "").trim();
      const num = parseFloat(val);
      if (!isNaN(num) && num >= 0 && num <= 50) {
        this.slippage = num;
      }
    });

    // Reverse button
    const reverseBtn = this._shadowRoot.getElementById("reverse-btn");
    reverseBtn?.addEventListener("click", () => {
      [this.fromTokenData, this.toTokenData] = [
        this.toTokenData,
        this.fromTokenData,
      ];
      [this.fromAmount, this.toAmount] = [this.toAmount, this.fromAmount];
      this.fetchBalances();
      if (this.fromAmount) {
        this.fetchQuoteDebounced();
      } else {
        this.render();
        this.attachEventListeners();
      }
    });

    // Amount input
    const fromInput = this._shadowRoot.getElementById(
      "from-input",
    ) as HTMLInputElement;
    fromInput?.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      this.fromAmount = target.value;
      if (this.swapStatusType === "error") {
        this.clearSwapStatus();
      }
      this.fetchQuoteDebounced();
    });

    // Token selector buttons
    const fromTokenBtn = this._shadowRoot.getElementById("from-token-btn");
    fromTokenBtn?.addEventListener("click", () => {
      this.tokenSelectorMode = "from";
      this.openTokenSelector();
    });

    const toTokenBtn = this._shadowRoot.getElementById("to-token-btn");
    toTokenBtn?.addEventListener("click", () => {
      this.tokenSelectorMode = "to";
      this.openTokenSelector();
    });

    // Destination address toggle
    const destinationToggle =
      this._shadowRoot.getElementById("destination-toggle");
    destinationToggle?.addEventListener("click", () => {
      this.showDestinationAddress = !this.showDestinationAddress;
      this.render();
      this.attachEventListeners();
    });

    const destinationInput = this._shadowRoot.getElementById(
      "destination-input",
    ) as HTMLInputElement;
    destinationInput?.addEventListener("input", (e) => {
      this.destinationAddress = (e.target as HTMLInputElement).value;
      const swapBtn = this._shadowRoot.getElementById(
        "swap-btn",
      ) as HTMLButtonElement;
      if (swapBtn) {
        const dest = (this.destinationAddress || "").trim();
        swapBtn.disabled =
          this.isLoadingQuote ||
          this.isSwapping ||
          (this.walletState.connected && !dest);
        swapBtn.textContent = this.getSwapButtonText();
      }
    });

    // Close token selector
    const closeTokenSelectorBtn = this._shadowRoot.getElementById(
      "close-token-selector-btn",
    );
    closeTokenSelectorBtn?.addEventListener("click", () => {
      this.closeTokenSelector();
    });

    const tokenSelectorOverlay = this._shadowRoot.getElementById(
      "token-selector-overlay",
    );
    tokenSelectorOverlay?.addEventListener("click", (e) => {
      if (e.target === tokenSelectorOverlay) {
        this.closeTokenSelector();
      }
    });

    // Token search (debounced 500ms; restore focus after render to avoid loss)
    const tokenSearchInput = this._shadowRoot.getElementById(
      "token-search-input",
    ) as HTMLInputElement;
    tokenSearchInput?.addEventListener("input", (e) => {
      const q = (e.target as HTMLInputElement).value;
      this.tokenSearchQuery = q;

      if (this.tokenSearchDebounceTimer) {
        clearTimeout(this.tokenSearchDebounceTimer);
      }
      this.tokenSearchDebounceTimer = window.setTimeout(async () => {
        this.tokenSearchDebounceTimer = null;
        await this.loadTokenList(q);
        this.render();
        this.attachEventListeners();
        const input = this._shadowRoot.getElementById(
          "token-search-input",
        ) as HTMLInputElement;
        input?.focus();
      }, 1000);
    });

    // Network filter chips
    const networkChips = this._shadowRoot.querySelectorAll(
      ".networks-list__item[data-network]",
    );
    networkChips.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const network = (btn as HTMLElement).dataset.network;
        if (!network) return;
        this.tokenFilterNetwork = network;
        await this.loadTokenList(this.tokenSearchQuery, network);
        this.render();
        this.attachEventListeners();
      });
    });

    // Token list items
    const tokenItems = this._shadowRoot.querySelectorAll(".token-list-item");
    tokenItems.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLElement;
        const symbol = target.dataset.tokenSymbol;
        const network = target.dataset.tokenNetwork;
        const token = this.tokenList.find(
          (t) => t.symbol === symbol && t.network === network,
        );
        if (token) {
          this.selectToken(token);
        }
        this.closeTokenSelector();
      });
    });

    // Swap button
    const swapBtn = this._shadowRoot.getElementById("swap-btn");
    swapBtn?.addEventListener("click", () => {
      if (!this.walletState.connected) {
        this.showConnectWalletModal = true;
        this.render();
        this.attachEventListeners();
      } else {
        this.handleSwap();
      }
    });

    // Destination address buttons
    const setAddrBtn = this._shadowRoot.getElementById("destination-set-btn");
    setAddrBtn?.addEventListener("click", () => {
      if (!this.walletState.connected) {
        this.showConnectWalletModal = true;
      } else {
        this.showDestinationAddressModal = !this.showDestinationAddressModal;
      }
      this.render();
      this.attachEventListeners();
    });

    const clearAddrBtn = this._shadowRoot.getElementById(
      "destination-clear-btn",
    );
    clearAddrBtn?.addEventListener("click", () => {
      this.destinationAddress = "";
      this.render();
      this.attachEventListeners();
    });

    const destItems = this._shadowRoot.querySelectorAll(
      ".destination-modal-item",
    );
    destItems.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const addr = target.dataset.address || "";
        this.destinationAddress = addr;
        this.showDestinationAddressModal = false;
        this.render();
        this.attachEventListeners();
      });
    });

    // Transaction modal primary button
    const txModalPrimaryBtn = this._shadowRoot.getElementById(
      "tx-modal-primary-btn",
    );
    txModalPrimaryBtn?.addEventListener("click", () => {
      this.clearSwapStatus();
      this.render();
      this.attachEventListeners();
    });
  }

  private getSwapButtonText(): string {
    if (this.swapStatusType === "error") {
      return "Swap";
    }
    if (this.isSwapping) {
      return "Swapping...";
    }

    if (this.isLoadingQuote) {
      return "Loading...";
    }

    if (!this.walletState.connected) {
      return "Connect Wallet";
    }

    if (!(this.destinationAddress || "").trim()) {
      return "Enter destination address";
    }

    if (!this.fromAmount || parseFloat(this.fromAmount) === 0) {
      return "Enter Amount";
    }

    return "Swap";
  }

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
    } catch (error) {
      console.error("Failed to load tokens:", error);
      this.tokenList = [];
    } finally {
      this.isTokenListLoading = false;
    }
  }

  private selectToken(token: Token) {
    const otherToken =
      this.tokenSelectorMode === "from" ? this.toTokenData : this.fromTokenData;

    if (
      otherToken &&
      token.symbol === otherToken.symbol &&
      token.network === otherToken.network
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

    if (this.fromTokenData && this.toTokenData && this.fromAmount) {
      this.fetchQuoteDebounced();
    } else {
      this.render();
      this.attachEventListeners();
    }
  }

  private fetchQuoteDebounced() {
    if (this.quoteDebounceTimer) {
      clearTimeout(this.quoteDebounceTimer);
    }

    this.quoteDebounceTimer = window.setTimeout(async () => {
      this.quoteDebounceTimer = null;
      this.isLoadingQuote = true;
      this.toAmount = "";
      this.render();
      this.attachEventListeners();
      await this.fetchQuote();
    }, 200);
  }

  private async fetchQuote() {
    if (!this.fromTokenData || !this.toTokenData || !this.fromAmount) {
      this.isLoadingQuote = false;
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
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      this.toAmount = "0";
    } finally {
      this.isLoadingQuote = false;
      this.render();
      this.attachEventListeners();
    }
  }

  private async handleSwap() {
    // Validate inputs
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

      if (!freshQuote) {
        throw new Error("Could not get a fresh quote. Please try again.");
      }

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

      if (this.config.onSwapSuccess) {
        this.config.onSwapSuccess(intentId);
      }
    } catch (error: any) {
      console.error("Swap failed:", error);
      const errorMessage = this.getErrorMessage(error);
      this.showSwapStatusModal("error", `Swap failed: ${errorMessage}`);

      // Call error callback if provided
      if (this.config.onSwapError) {
        this.config.onSwapError(error);
      }
    } finally {
      
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

  private showSwapStatusModal(
    type: "loading" | "success" | "error",
    message: string,
  ) {
    this.swapStatusType = type;
    this.swapStatusMessage = message.replace(/^[⏳✅❌]\s*/, "");

    this.render();
    this.attachEventListeners();
  }

  private clearSwapStatus() {
    this.swapStatusType = "idle";
    this.swapStatusMessage = "";
    this.swapTxHash = null;
    this.intentIdForStatus = null;
    this.intentStatusFromApi = null;
    this.displayFromTokenAsWrapped = false;
    this.isSwapping = false;
    this.stopIntentStatusPolling();
  }

  private stopIntentStatusPolling() {
    if (this.intentStatusPollTimer != null) {
      clearInterval(this.intentStatusPollTimer);
      this.intentStatusPollTimer = null;
    }
  }

  private readonly INTENT_STATUS_SUCCESS = new Set<IntentStatus>([
    IntentStatus.Fulfilled,
    IntentStatus.Refunded,
  ]);

  private readonly INTENT_STATUS_FAILED = new Set<IntentStatus>([
    IntentStatus.Declined,
    IntentStatus.DeclinedDueToKytCheck,
    IntentStatus.Expired,
    IntentStatus.Failed,
  ]);

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

  private getExplorerUrl(txHash: string): string {
    const isEvmTx = txHash.startsWith("0x") && txHash.length === 66;
    const isTronTx = txHash.length === 64 && /^[a-fA-F0-9]+$/.test(txHash);

    if (!isEvmTx && !isTronTx) {
      return "";
    }

    if (this.walletState.type === "evm" && isEvmTx) {
      const chainId = this.walletState.chainId;
      // Ethereum mainnet
      if (chainId === 1) return `https://etherscan.io/tx/${txHash}`;
      // BSC
      if (chainId === 56) return `https://bscscan.com/tx/${txHash}`;
      // Polygon
      if (chainId === 137) return `https://polygonscan.com/tx/${txHash}`;
      // Default to etherscan
      return `https://etherscan.io/tx/${txHash}`;
    } else if (this.walletState.type === "tron" && isTronTx) {
      return `https://tronscan.org/#/transaction/${txHash}`;
    }
    return "";
  }
}

// Register the custom element
customElements.define("hotpot-swap-widget", HotpotSwapWidget);

// Export for programmatic usage
export { HotpotSwapWidget };
export type { WidgetConfig };
