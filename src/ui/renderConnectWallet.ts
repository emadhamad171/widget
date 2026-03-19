import { CLOSE_ICON_SVG, WALLET_OPTIONS } from "./icons";
import { renderLoaderSvg } from "./helpers";

export function renderConnectWalletModal(
  show: boolean,
  isConnecting: boolean,
  isDark: boolean,
): string {
  if (!show) return "";

  if (isConnecting) {
    return `
      <div class="connect-wallet-overlay" id="connect-wallet-overlay">
        <div class="connect-wallet-modal connect-wallet-modal--loading">
          <div class="connect-wallet-loading-spinner">${renderLoaderSvg(isDark)}</div>
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
          ${WALLET_OPTIONS.map(
            (w) => `
            <button class="connect-wallet-item" data-wallet-type="${w.type}">
              <img class="connect-wallet-icon" src="${w.icon}" alt="${w.label}" />
              <span>${w.label}</span>
            </button>
          `,
          ).join("")}
        </div>
      </div>
    </div>
  `;
}
