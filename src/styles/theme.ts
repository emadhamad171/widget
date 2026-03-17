import { WidgetConfig } from "../types";

export const generateStyles = (config: WidgetConfig): string => {
  const {
    theme = "dark",
    backgroundColor: configBg,
    cardBackgroundColor: configCardBg,
    primaryTextColor: configPrimaryText,
    secondaryTextColor: configSecondaryText,
    buttonColor: configButtonColor,
    buttonTextColor: configButtonText,
    iconsColor: configIconsColor,
  } = config;

  const isDark =
    theme === "dark" ||
    (theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const light = {
    backgroundColor: "#FEFEFF",
    cardBackgroundColor: "#FDFDFE",
    overlayBackgroundColor: "#1111114D",
    primaryTextColor: "#272727",
    secondaryTextColor: "rgba(39, 39, 39, 0.5)",
    buttonColor: "#8B5CF6",
    buttonTextColor: "#F6F7FB",
    shadow: "0 0 10px 0 #E6E8F0",
    iconsColor: "rgba(39, 39, 39, 0.5)",
    filledInputBackgroundColor: "#F3EEFE",
    iconBorder: "#E9EAF2",
    swapWarningColor: "#FAEAEC",
    swapErrorColor: "#FEE2E2",
    swapSuccessColor: "#DCFCE7",
    modalSuccessColor: "#F3EEFE",
    modalErrorColor: "#E23A4B1A",
  };

  const dark = {
    backgroundColor: "#181818",
    overlayBackgroundColor: "#1111114D",
    cardBackgroundColor: "#1F1F1F",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "rgba(255, 255, 255, 0.6)",
    buttonColor: "#C0F42F",
    buttonTextColor: "#111111",
    shadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
    iconsColor: "rgba(255, 255, 255, 0.6)",
    filledInputBackgroundColor: "#1F1F1F",
    iconBorder: "#373a40",
    swapWarningColor: "#FAEAEC",
    swapErrorColor: "#FEE2E2",
    swapSuccessColor: "#DCFCE7",
    modalSuccessColor: "#C0F42F1A",
    modalErrorColor: "#E23A4B1A",
  };

  const base = isDark ? dark : light;
  const c = {
    ...base,
    ...(configBg != null && { backgroundColor: configBg }),
    ...(configCardBg != null && { cardBackgroundColor: configCardBg }),
    ...(configPrimaryText != null && { primaryTextColor: configPrimaryText }),
    ...(configSecondaryText != null && {
      secondaryTextColor: configSecondaryText,
    }),
    ...(configButtonColor != null && { buttonColor: configButtonColor }),
    ...(configButtonText != null && { buttonTextColor: configButtonText }),
    ...(configIconsColor != null && { iconsColor: configIconsColor }),
  };

  return `
    @font-face {
      font-family: 'Geist';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url(https://cdn.jsdelivr.net/fontsource/fonts/geist@latest/latin-400-normal.woff2) format('woff2');
    }
    @font-face {
      font-family: 'Geist';
      font-style: normal;
      font-display: swap;
      font-weight: 600;
      src: url(https://cdn.jsdelivr.net/fontsource/fonts/geist@latest/latin-600-normal.woff2) format('woff2');
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :host {
      all: initial;
      display: block;
      font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .widget-container {
      position: relative;
      overflow: hidden;
      background: ${c.backgroundColor};
      border-radius: 20px;
      padding: 16px;
      width: 100%;
      max-width: 420px;
      min-width: 320px;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      color: ${c.primaryTextColor};
    }

    .widget-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .widget-title {
      color: ${c.primaryTextColor};
      text-align: center;
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      line-height: 160%;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .header-address {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      background: ${c.cardBackgroundColor};
      color: ${c.primaryTextColor};
    }

    .header-wallet-icon {
      width: 20px;
      height: 20px;
      border-radius: 6px;
    }

    .icon-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      color: ${c.primaryTextColor};
    }

    .icon-button:hover {
      opacity: 0.8;
    }

    .icon-button svg {
      width: 24px;
      height: 24px;
    }

    .icon-button svg path {
      fill: currentColor !important;
    }

    .swap-form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      width: 100%;
    }

    .swap-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      align-self: stretch;
      border-radius: 16px;
      overflow: visible;
      box-shadow: ${c.shadow};
    }

    .swap-card-inner {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    .swap-section {
      display: flex;
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      align-self: stretch;
      background: ${c.cardBackgroundColor};
    }

    .swap-section-top {
      position: relative;
      border-radius: 16px 16px 0 0;
      border-bottom: 2px solid ${c.iconBorder};
    }

    .swap-section-bottom {
      border-radius: 0 0 16px 16px;
    }

    .swap-card-with-toast .swap-section-bottom {
      border-radius: 0;
    }

    .swap-label {
      color: ${c.secondaryTextColor};
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: inherit;
      font-size: 12px;
      font-weight: 400;
      line-height: 160%;
    }

    .swap-input-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      width: 100%;
    }

    .swap-amount-wrapper {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }

    .amount-input {
      flex: 1;
      background: transparent;
      border: none;
      font-size: 24px;
      font-weight: 600;
      font-style: normal;
      line-height: 120%;
      font-family: inherit;
      color: ${c.primaryTextColor};
      outline: none;
      width: 100%;
    }


    .amount-input::placeholder {
      color: ${c.secondaryTextColor};
    }

    .token-select {
      display: flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      border: none;
      border-radius: 12px;
      padding: 8px 12px;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
      font-family: inherit;
    }

    .token-icon-wrap {
      position: relative;
      display: inline-flex;
      flex-shrink: 0;
    }

    .token-icon {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }

    .token-network-icon-wrap {
      position: absolute;
      right: -2px;
      bottom: -2px;
      width: 12px;
      height: 12px;
      border-radius: 4px;
      border: 2px solid ${c.cardBackgroundColor};
      overflow: hidden;
      background: ${c.cardBackgroundColor};
      flex-shrink: 0;
      box-sizing: content-box;
    }

    .token-network-icon-wrap .token-network-icon {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .token-symbol {
      font-size: 16px;
      font-weight: 600;
      color: ${c.primaryTextColor};
    }

    .chevron-icon {
      width: 24px;
      height: 24px;
      color: ${c.iconsColor};
      transform: rotate(90deg);
    }

    .chevron-icon path {
      fill: currentColor !important;
    }

    .balance-row {
      display: flex;
      height: 24px;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      align-self: stretch;
      font-size: 12px;
      color: ${c.secondaryTextColor};
    }

    .balance-fiat {
      order: 0;
    }

    .balance-token {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .balance-token .wallet-icon {
      color: ${c.iconsColor};
    }

    .balance-token svg path {
      fill: currentColor !important;
    }

    .balance-token svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
    }

    .swap-divider {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      pointer-events: none;
    }

    .swap-divider .swap-reverse-button {
      pointer-events: auto;
    }

    .swap-divider-status {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      padding: 6px 12px;
      border-radius: 12px;
      line-height: 0;
      border: 2px solid ${c.iconBorder};
    }

    .widget-container--divider-v1 .swap-divider-status {
      padding: 6px;
      border-radius: 50%;
    }

    .swap-divider-status svg,
    .swap-divider-status .circular-progress-svg {
      display: block;
    }

    .swap-divider-loading {
      background: ${c.cardBackgroundColor};
      border: 2px solid ${c.iconBorder};
    }

    .swap-divider-loading .circular-progress-svg {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      flex-shrink: 0;
      display: block;
    }

    .swap-divider-loading .circular-progress-svg .circular-progress-arc {
      transform-origin: center;
      animation: circular-progress-spin 0.8s linear infinite;
    }

    @keyframes circular-progress-spin {
      to { transform: rotate(360deg); }
    }

    .swap-divider-error {
      background: ${c.swapErrorColor};
    }

    .swap-divider-error svg {
      width: 24px;
      height: 24px;
    }

    .swap-divider-warning {
      background: ${c.swapWarningColor};
      border-color: ${c.iconBorder};
    }

    .swap-divider-warning svg {
      width: 24px;
      height: 24px;
    }

    .swap-divider-success {
      background: ${c.swapSuccessColor};
      border-color: ${c.iconBorder}; 
    }

    .swap-divider-success svg {
      width: 24px;
      height: 24px;
    }

    .swap-status-toast {
      display: flex;
      padding: 16px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;
      align-self: stretch;
      background: ${c.cardBackgroundColor};
      border-radius: 0 0 12px 12px;
      border-top: 2px solid ${c.iconBorder};
    }

    .swap-status-toast-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .swap-status-toast-icon {
      display: flex;
      flex-shrink: 0;
    }

    .swap-status-toast-icon svg {
      width: 16px;
      height: 16px;
    }

    .swap-status-toast-text {
      color: ${c.primaryTextColor};
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: inherit;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%;
    }

    .swap-status-toast-explorer {
      color: ${c.buttonColor};
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
    }

    .swap-status-toast-explorer:hover {
      text-decoration: underline;
    }

    .swap-reverse-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 12px;
      gap: 10px;
      border-radius: 12px;
      border: 2px solid ${c.iconBorder};
      background: ${c.cardBackgroundColor};
      color: ${c.primaryTextColor};
      cursor: pointer;
      transition: all 0.2s;
    }

    .swap-reverse-button svg {
      width: 24px !important;
      height: 24px !important;
      min-width: 24px;
      min-height: 24px;
      flex-shrink: 0;
    }

    .swap-reverse-button svg path {
      fill: currentColor !important;
    }

    .swap-button {
      width: 100%;
      background: ${c.buttonColor};
      border: none;
      border-radius: 12px;
      padding: 16px;
      font-size: 16px;
      font-weight: 600;
      color: ${c.buttonTextColor};
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }

    .swap-button:hover:not(:disabled) {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .swap-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .swap-button--enter-amount {
      opacity: 1;
      background: ${isDark ? "#1F1F1F" : "#2727274D"};
      color: ${isDark ? "#FFFFFF80" : "#F6F7FB"};
      pointer-events: none;
    }

    .destination-address-block {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }

    .destination-address-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px 0;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      color: ${c.primaryTextColor};
      text-align: left;
    }

    .destination-address-header:hover {
      opacity: 0.9;
    }

    .destination-label {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .destination-label svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: ${c.iconsColor};
    }

    .destination-label svg path {
      fill: currentColor !important;
    }

    .destination-info-wrap {
      position: relative;
      display: inline-flex;
      align-items: center;
    }

    .destination-info-wrap:hover .destination-info-tooltip {
      opacity: 1;
      visibility: visible;
    }

    .destination-info-tooltip {
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, -8px);
      padding: 8px 12px;
      background: ${c.cardBackgroundColor};
      color: ${c.primaryTextColor};
      font-size: 12px;
      font-weight: 400;
      line-height: 1.4;
      border-radius: 8px;
      max-width: 220px;
      min-width: 200px;
      white-space: normal;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.15s, visibility 0.15s;
      z-index: 10;
    }

    .destination-chevron {
      display: flex;
      align-items: center;
      color: ${c.iconsColor};
      transition: transform 0.2s;
    }

    .destination-chevron svg {
      width: 24px;
      height: 24px;
    }

    .destination-chevron svg path {
      fill: currentColor !important;
    }

    .destination-chevron.expanded {
      transform: rotate(90deg);
    }

    .destination-address-input-wrap {
      width: 100%;
      position: relative;
    }

    .destination-address-input {
      width: 100%;
      padding: 15px 80px 15px 44px;
      border-radius: 12px;
      border: 1px solid ${c.iconBorder};
      background: ${c.cardBackgroundColor};
      font-family: inherit;
      font-size: 14px;
      color: ${c.primaryTextColor};
      outline: none;
    }

    .destination-address-input--filled {
      background: ${c.filledInputBackgroundColor};
    }

    .destination-wallet-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      overflow: hidden;
    }

    .destination-wallet-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .destination-set-btn,
    .destination-clear-btn {
      font-family: Geist;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%;
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      border: none;
      background: none;
      font-family: inherit;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 999px;
    }

    .destination-set-btn {
      color: ${c.buttonColor};
    }

    .destination-clear-btn {
      color: ${c.buttonColor};
    }

    .slippage-panel {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin-top: -2px;
      padding: 12px 16px;
      border-radius: 0 0 12px 12px;
      background: ${c.cardBackgroundColor};
      border: 2px solid ${c.iconBorder};
      border-top: none;
      box-shadow: ${c.shadow};
      z-index: 10;
    }

    .destination-modal-overlay {
      width: 100%;
      margin-top: -16px;
    }

    .destination-modal {
      background: ${c.cardBackgroundColor};
      border-radius: 16px;
      padding: 8px;
      width: 100%;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25);
    }


    .destination-modal-title {
      font-size: 14px;
      font-weight: 500;
      color: ${c.primaryTextColor};
    }

    .destination-modal-list {
      display: flex;
      flex-direction: column;
    }

    .destination-modal-item {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 12px;
      border: 0;
      background: ${c.cardBackgroundColor};
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      color: ${c.primaryTextColor};
    }

    .destination-modal-item:not(:last-child) {
      margin-bottom: 8px;
    }

    .destination-modal-item:hover {
      background: ${c.backgroundColor};
    }

    .destination-modal-item-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .slippage-label {
      display: block;
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 600;
      color: ${c.primaryTextColor};
    }

    .slippage-row {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .slippage-btn {
      flex: 0 0 auto;
      min-width: 44px;
      padding: 6px 8px;
      border-radius: 10px;
      border: 1px solid ${c.iconBorder};
      background: rgba(139, 92, 246, 0.1);
      color: ${c.iconsColor};
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .slippage-btn:hover {
      background: rgba(139, 92, 246, 0.15);
      color: ${c.primaryTextColor};
    }

    .slippage-btn.active {
      border-color: ${c.buttonColor};
      background: rgba(139, 92, 246, 0.25);
      color: ${c.buttonColor};
    }

    .slippage-input {
      flex: 1;
      min-width: 0;
      padding: 8px 12px;
      border-radius: 10px;
      border: 2px solid ${c.iconBorder};
      background: ${c.backgroundColor};
      color: ${c.primaryTextColor};
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      outline: none;
    }

    .slippage-input:focus {
      border-color: ${c.buttonColor};
    }

    .warning-box {
      background: rgba(253, 126, 20, 0.15);
      border: 1px solid #fd7e14;
      border-radius: 8px;
      padding: 12px;
      display: flex;
      gap: 8px;
      font-size: 14px;
      color: #fd7e14;
    }

    .widget-footer {
      text-align: center;
      font-size: 12px;
      color: ${c.secondaryTextColor};
    }

    .powered-by {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .hotpot-link {
      color: ${c.buttonColor};
      text-decoration: none;
      font-weight: 600;
    }

    .hotpot-link:hover {
      text-decoration: underline;
    }

    .loading {
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .tx-modal-overlay {
      position: absolute;
      inset: 0;
      background: ${base.overlayBackgroundColor};
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1002;
      pointer-events: auto;
    }

    .tx-modal {
      pointer-events: auto;
      background: ${c.backgroundColor};
      border-radius: 24px;
      box-shadow: 0 20px 80px rgba(15, 23, 42, 0.25);
      padding: 40px;
      top: 58px;
      left: 35px;
      right: 35px;

      position: absolute;
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    .tx-modal-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }

    .tx-modal-spinner {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      padding: 16px;
      box-sizing: border-box;
      background: ${isDark ? "#282828" : "#F7F7F8"};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tx-modal-spinner .circular-progress-svg {
      width: 32px;
      height: 32px;
    }

    .tx-modal-spinner .circular-progress-arc {
      transform-origin: center;
      animation: circular-progress-spin 0.8s linear infinite;
    }

    .tx-modal-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }

    .tx-modal-icon--success {
      background: ${c.modalSuccessColor};
    }

    .tx-modal-icon--error {
      background: ${c.modalErrorColor};
    }

    .tx-modal-icon--error svg {
      width: 32px;
      height: 32px;
    }

    .tx-modal-title {
      font-size: 14px;
      font-weight: 400;
      color: ${c.primaryTextColor};
      margin: 0;
      line-height: 160%;
    }

    .tx-modal-subtitle {
      font-size: 12px;
      color: ${c.secondaryTextColor};
      margin: 0;
      line-height: 160%;
      margin-top: 16px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .tx-modal-amount-row {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      font-size: 13px;
      font-weight: 600;
      color: ${c.primaryTextColor};
      gap: 8px;
    }

    .tx-modal-wallet-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .tx-modal-wallet-icon svg {
      width: 16px;
      height: 16px;
    }

    .tx-modal-token {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .tx-modal-token-text {
      display: flex;
      flex-direction: column;
    }

    .tx-modal-arrow {
      opacity: 0.7;
    }

    .tx-modal-primary-btn {
      margin-top: 24px;
      width: 100%;
      border: none;
      border-radius: 16px;
      padding: 12px 16px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      background: ${c.buttonColor};
      color: ${c.buttonTextColor};
    }

    .tx-modal-primary-btn--error {
      background: #E23A4B;
      color: #ffffff;
    }

    .connect-wallet-overlay {
      position: absolute;
      inset: 0;
      background: ${base.overlayBackgroundColor};
      display: flex;
      align-items: stretch;
      justify-content: center;
      z-index: 1001;
    }

    .connect-wallet-modal {
      background: ${c.backgroundColor};
      border-radius: 24px;
      padding: 24px;
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      overflow-y: auto;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    .connect-wallet-modal--loading {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 260px;
      gap: 16px;
    }

    .connect-wallet-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .connect-wallet-title {
      font-size: 18px;
      font-weight: 600;
      color: ${c.primaryTextColor};
    }

    .connect-wallet-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .connect-wallet-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 12px;
      border: 2px solid ${c.iconBorder};
      background: ${c.cardBackgroundColor};
      color: ${c.primaryTextColor};
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      text-align: left;
    }

    .connect-wallet-item:hover:not(:disabled) {
      border-color: ${c.buttonColor};
      background: rgba(139, 92, 246, 0.08);
    }

    .connect-wallet-item:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .connect-wallet-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }

    .connect-wallet-loading {
      margin-top: 12px;
      font-size: 14px;
      color: ${c.secondaryTextColor};
      text-align: center;
    }

    .connect-wallet-loading-spinner {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      padding: 16px;
      box-sizing: border-box;
      background: ${isDark ? "#282828" : "#F7F7F8"};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .connect-wallet-loading-spinner .circular-progress-svg {
      width: 32px;
      height: 32px;
    }

    .connect-wallet-loading-spinner .circular-progress-arc {
      transform-origin: center;
      animation: circular-progress-spin 0.8s linear infinite;
    }

    .connect-wallet-loading-title {
      font-size: 18px;
      font-weight: 600;
      color: ${c.primaryTextColor};
    }

    .connect-wallet-loading-subtitle {
      font-size: 14px;
      color: ${c.secondaryTextColor};
    }

    @keyframes connect-wallet-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .modal-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    .modal-content {
      background: ${c.backgroundColor};
      border-radius: 20px;
      padding: 24px;
      width: calc(100% - 32px);
      max-width: calc(100% - 32px);
      max-height: calc(100% - 32px);
      overflow-y: auto;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .modal-title {
      font-size: 18px;
      font-weight: 600;
      color: ${c.primaryTextColor};
    }

    .close-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      color: ${c.primaryTextColor};
    }

    .close-button:hover {
      opacity: 0.8;
    }

    .token-selector-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .token-selector-modal {
      background: ${c.backgroundColor};
      border-radius: 20px;
      padding: 20px;
      width: calc(100% - 32px);
      max-width: calc(100% - 32px);
      max-height: calc(100% - 32px);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .token-search-input {
      width: 100%;
      padding: 12px 16px;
      margin-bottom: 12px;
      border: 1px solid ${c.iconBorder};
      border-radius: 12px;
      background: ${c.cardBackgroundColor};
      color: ${c.primaryTextColor};
      font-size: 14px;
      outline: none;
    }

    .token-search-input::placeholder {
      color: ${c.secondaryTextColor};
    }

    .token-search-input:focus {
      border-color: ${c.buttonColor};
    }

    .networks-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }

    .networks-list__item {
      height: 40px;
      padding: 8px 10.5px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 12px;
      line-height: 1.5;
      background: ${c.cardBackgroundColor};
      border: 2px solid ${c.iconBorder};
      color: ${c.secondaryTextColor};
      cursor: pointer;
      transition: all 0.2s;
    }

    .networks-list__item:hover {
      color: ${c.primaryTextColor};
      border-color: ${c.buttonColor};
    }

    .networks-list__item.active {
      color: ${c.buttonTextColor};
      background: ${c.buttonColor};
      border-color: ${c.buttonColor};
    }

    .networks-list__network {
      display: flex;
      align-items: center;
      gap: 8px;
      text-transform: capitalize;
    }

    .networks-list__network img {
      width: 20px;
      height: 20px;
    }

    .token-selector-list {
      overflow-y: auto;
      max-height: 300px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .token-list-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: ${c.primaryTextColor};
      cursor: pointer;
      text-align: left;
      transition: background 0.2s;
      font-family: inherit;
    }

    .token-list-item:hover {
      background: rgba(139, 92, 246, 0.08);
    }

    .token-list-item-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .token-list-item .token-network {
      font-size: 12px;
      color: ${c.secondaryTextColor};
    }

    .token-icon-placeholder {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${c.iconBorder};
    }

    .token-list-loading,
    .token-list-empty {
      padding: 24px;
      text-align: center;
      color: ${c.secondaryTextColor};
      font-size: 14px;
    }

    .settings-panel .icon-button,
    .settings-panel .slippage-btn,
    .settings-panel .slippage-input {
      border-radius: 12px;
      border: 2px solid ${c.iconBorder};
      background: ${c.cardBackgroundColor};
    }
  `;
};
