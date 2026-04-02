import type { Token, WalletState } from "../types";
import type { NetworkInfo } from "../services/networks";
import { NETWORK_ICONS, metamaskIconUrl, phantomIconUrl, tronlinkIconUrl } from "./icons";

export function escapeHtml(s: string): string {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

export function formatBalance(
  b: string | null | undefined,
  isBalanceLoading: boolean,
  isConnected: boolean,
  hasToken: boolean,
): string {
  if (isBalanceLoading && isConnected) {
    if (hasToken && b == null) return "...";
  }
  if (!b || b === "" || b === "0" || parseFloat(b) === 0) return "0";
  const n = parseFloat(b);
  return n % 1 === 0
    ? n.toString()
    : n.toLocaleString("en-US", { maximumFractionDigits: 4, minimumFractionDigits: 0 });
}

export function formatUsd(amount: number, rate: number): string {
  const usd = amount * rate;
  return usd === 0 ? "$0" : usd < 0.01 ? "~$0.00" : `$${usd.toFixed(2)}`;
}

export function getNetworkIconUrl(
  networkName: string,
  networksList: NetworkInfo[],
): string {
  if (!networkName) return "";
  const key = networkName.toLowerCase();
  if (NETWORK_ICONS[key]) return NETWORK_ICONS[key];
  const n = networksList.find((x) => x.name.toLowerCase() === key);
  return n?.icon_url ?? "";
}

export function renderTokenIcon(
  token: Token | null,
  networksList: NetworkInfo[],
): string {
  const placeholder = '<span class="token-icon-placeholder" aria-hidden="true"></span>';
  if (!token) {
    return `<span class="token-icon-wrap">${placeholder}</span>`;
  }
  const icon = token.icon_url
    ? `<img src="${token.icon_url}" class="token-icon" alt="${token.symbol}" />`
    : placeholder;
  const networkIconUrl = getNetworkIconUrl(token.network, networksList);
  const networkBadge = networkIconUrl
    ? `<span class="token-network-icon-wrap"><img src="${networkIconUrl}" class="token-network-icon" alt="" /></span>`
    : "";
  return `<span class="token-icon-wrap">${icon}${networkBadge}</span>`;
}

export function getWalletIconByType(walletState: WalletState): string {
  const t = walletState.type;
  if (t === "evm") return metamaskIconUrl;
  if (t === "tron") return tronlinkIconUrl;
  if (t === "solana") return phantomIconUrl;
  return metamaskIconUrl;
}

export function renderLoaderSvg(isDark: boolean): string {
  const gradientId = "wlg-" + Math.random().toString(36).slice(2, 10);
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

export function isDarkTheme(theme?: string): boolean {
  const t = theme || "dark";
  return t === "dark" || (t === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

export function getWalletIconForType(type: string | null): string {
  if (type === "evm") return `<img src="${metamaskIconUrl}" class="connect-wallet-icon" alt="MetaMask" />`;
  if (type === "tron") return `<img src="${tronlinkIconUrl}" class="connect-wallet-icon" alt="TronLink" />`;
  if (type === "solana") return `<img src="${phantomIconUrl}" class="connect-wallet-icon" alt="Phantom" />`;
  return "";
}

export function getWalletIconSmall(type: string | null): string {
  if (type === "evm") return `<img src="${metamaskIconUrl}" alt="MetaMask" />`;
  if (type === "tron") return `<img src="${tronlinkIconUrl}" alt="TronLink" />`;
  if (type === "solana") return `<img src="${phantomIconUrl}" alt="Phantom" />`;
  return "";
}
