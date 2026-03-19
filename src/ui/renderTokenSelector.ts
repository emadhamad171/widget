import type { Token } from "../types";
import type { NetworkInfo } from "../services/networks";
import { CLOSE_ICON_SVG, NETWORK_ICONS } from "./icons";
import { escapeHtml, renderTokenIcon } from "./helpers";

export function renderTokenSelector(
  tokenList: Token[],
  networksList: NetworkInfo[],
  tokenFilterNetwork: string,
  tokenSearchQuery: string,
  isTokenListLoading: boolean,
): string {
  const displayTokens = tokenList.slice(0, 50);

  const networkOptions: Array<{ value: string; label: string; icon_url?: string }> = [
    { value: "all", label: "All" },
    ...networksList.map((n) => {
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
          value="${escapeHtml(tokenSearchQuery)}"
          autocomplete="off"
        />
        <div class="networks-list">
          ${networkOptions
            .map(
              (n) => `
            <button class="networks-list__item ${tokenFilterNetwork === n.value ? "active" : ""}" data-network="${n.value}">
              ${n.value === "all" ? n.label : `<span class="networks-list__network">${n.icon_url ? `<img src="${n.icon_url}" alt="${n.label}" />` : ""}<span>${n.label}</span></span>`}
            </button>
          `,
            )
            .join("")}
        </div>
        <div class="token-selector-list">
          ${isTokenListLoading ? '<div class="token-list-loading">Loading...</div>' : ""}
          ${displayTokens
            .map(
              (t) => `
            <button class="token-list-item" data-token-symbol="${escapeHtml(t.symbol)}" data-token-network="${escapeHtml(t.network)}">
              ${renderTokenIcon(t, networksList)}
              <div class="token-list-item-info">
                <span class="token-symbol">${escapeHtml(t.symbol)}</span>
                <span class="token-network">${escapeHtml(t.network)}</span>
              </div>
            </button>
          `,
            )
            .join("")}
          ${!isTokenListLoading && displayTokens.length === 0 ? '<div class="token-list-empty">No tokens found</div>' : ""}
        </div>
      </div>
    </div>
  `;
}
