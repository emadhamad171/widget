import CHEVRON_ICON_SVG_RAW from "../assets/icon-shevron.svg?raw";
import SETTING_ICON_SVG_RAW from "../assets/setting-icon.svg?raw";
import CLOSE_ICON_SVG_RAW from "../assets/close-icon.svg?raw";
import SWAP_ICON_SVG_RAW from "../assets/swap-icon.svg?raw";
import WALLET_ICON_SVG_RAW from "../assets/wallet-icon.svg?raw";
import INFO_ICON_SVG_RAW from "../assets/info-icon.svg?raw";
import EXCLAMATION_ERROR_RAW from "../assets/exclamation-mark-error.svg?raw";
import EXCLAMATION_WARNING_RAW from "../assets/exclamation-mark-warning.svg?raw";
import EXCLAMATION_SUCCESS_RAW from "../assets/exclamation-mark-success.svg?raw";
import ICON_WARNING_RAW from "../assets/icon-warning.svg?raw";
import ICON_SUCCESS_RAW from "../assets/icon-success.svg?raw";

import metamaskIconUrl from "../assets/metamask-icon.svg";
import phantomIconUrl from "../assets/phantom.avif";
import tronlinkIconUrl from "../assets/tronlink-icon.svg";

import ethereumNetworkIcon from "../assets/networks/ethereum.svg";
import tronNetworkIcon from "../assets/networks/tron.svg";
import solanaNetworkIcon from "../assets/networks/solana.avif";
import bitcoinNetworkIcon from "../assets/networks/bitcoin.svg";

import successTxDark from "../assets/success-transaction-dark.svg";
import successTxWhite from "../assets/success-transaction-white.svg";

export const SETTING_ICON_SVG = SETTING_ICON_SVG_RAW;
export const INFO_ICON_SVG = INFO_ICON_SVG_RAW;
export const WALLET_ICON_SVG = WALLET_ICON_SVG_RAW.replace(
  /<svg /,
  '<svg class="wallet-icon" ',
);
export const CLOSE_ICON_SVG = CLOSE_ICON_SVG_RAW;
export const SWAP_ICON_SVG = SWAP_ICON_SVG_RAW.replace(/<rect[^>]*\/>/g, "")
  .replace(/viewBox="0 0 52 40"/, 'viewBox="16 10 22 22"')
  .replace(/width="52" height="40"/, 'width="24" height="24"')
  .replace(/<svg /, '<svg class="swap-arrow-icon" ');
export const CHEVRON_ICON_SVG = CHEVRON_ICON_SVG_RAW.replace(
  /<svg /,
  '<svg class="chevron-icon" ',
);

export {
  EXCLAMATION_ERROR_RAW,
  EXCLAMATION_WARNING_RAW,
  EXCLAMATION_SUCCESS_RAW,
  ICON_WARNING_RAW,
  ICON_SUCCESS_RAW,
  metamaskIconUrl,
  phantomIconUrl,
  tronlinkIconUrl,
  successTxDark,
  successTxWhite,
};

export const NETWORK_ICONS: Record<string, string> = {
  ethereum: ethereumNetworkIcon,
  tron: tronNetworkIcon,
  solana: solanaNetworkIcon,
  bitcoin: bitcoinNetworkIcon,
};

export const WALLET_OPTIONS = [
  { id: "metamask", label: "MetaMask", icon: metamaskIconUrl, type: "evm" as const },
  { id: "phantom", label: "Phantom", icon: phantomIconUrl, type: "solana" as const },
  { id: "tronlink", label: "Tron Link", icon: tronlinkIconUrl, type: "tron" as const },
];
