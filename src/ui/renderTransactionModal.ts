import type { IntentStatus } from "@hot-pot/hotpot-sdk-ts";
import type { Token } from "../types";
import type { NetworkInfo } from "../services/networks";
import {
  EXCLAMATION_ERROR_RAW,
  WALLET_ICON_SVG,
  successTxDark,
  successTxWhite,
} from "./icons";
import { escapeHtml, renderLoaderSvg, renderTokenIcon } from "./helpers";

interface TxModalParams {
  status: "idle" | "loading" | "success" | "error" | "warning";
  isSwapping: boolean;
  intentStatusFromApi: IntentStatus | null;
  IntentStatus: typeof import("@hot-pot/hotpot-sdk-ts").IntentStatus;
  isWalletConnectError: boolean;
  swapStatusMessage: string;
  fromTokenData: Token | null;
  toTokenData: Token | null;
  fromAmount: string;
  toAmount: string;
  isDark: boolean;
  networksList: NetworkInfo[];
}

export function renderTransactionModal(params: TxModalParams): string {
  const {
    status,
    isSwapping,
    intentStatusFromApi,
    IntentStatus: IS,
    isWalletConnectError,
    swapStatusMessage,
    fromTokenData,
    toTokenData,
    fromAmount,
    toAmount,
    isDark,
    networksList,
  } = params;

  if ((status === "loading" && !isSwapping) || status === "idle" || status === "warning")
    return "";

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const fromSymbol = fromTokenData?.symbol || "";
  const toSymbol = toTokenData?.symbol || "";

  let title = "";
  let subtitle = "";
  let buttonLabel = "";

  if (isLoading) {
    const s = intentStatusFromApi;
    if (!s || s === IS.Initiated) {
      title = "Submit swap";
      subtitle = "Confirm this transaction in your wallet.";
    } else if (s === IS.ApprovalAdded) {
      title = "Matching liquidity...";
    } else if (s === IS.Accepted || s === IS.UserDeposited) {
      title = "Executing your swap...";
    } else if (s === IS.RefundRequested) {
      title = "Requesting refund";
    } else if (s === IS.Refunded) {
      title = "Refund in progress...";
    } else if (s === IS.Declined || s === IS.DeclinedDueToKytCheck) {
      title = "Your swap could not be completed.";
    } else if (s === IS.Fulfilled) {
      title = "Transaction confirmed";
    } else if (s === IS.Failed) {
      title = "Swap failed";
    } else {
      title = "Submitting transaction";
    }
  } else if (isSuccess) {
    title = "Transaction confirmed";
    subtitle = "Your swap was successfully executed. You can track it in your transaction history.";
    buttonLabel = "Back to swap";
  } else if (isError) {
    if (isWalletConnectError) {
      title = "Connection failed";
      subtitle =
        swapStatusMessage ||
        "Could not connect to your wallet. Try opening this page in your wallet's in-app browser (e.g. MetaMask) or ensure the wallet extension is installed.";
      buttonLabel = "Try again";
    } else {
      title = "Transaction failed";
      subtitle = "The transaction could not be completed.";
      buttonLabel = "Try again";
    }
  }

  return `
    <div class="tx-modal-overlay">
      <div class="tx-modal">
        <div class="tx-modal-header">
          ${
            isLoading
              ? `<div class="tx-modal-spinner">${renderLoaderSvg(isDark)}</div>`
              : isSuccess
                ? `<div class="tx-modal-icon tx-modal-icon--success"><img src="${isDark ? successTxDark : successTxWhite}" alt="success" /></div>`
                : `<div class="tx-modal-icon tx-modal-icon--error">${EXCLAMATION_ERROR_RAW}</div>`
          }
        </div>
        <div class="tx-modal-body">
          <h2 class="tx-modal-title">${escapeHtml(title)}</h2>
          ${
            !isWalletConnectError
              ? `<div class="tx-modal-amount-row">
            <div class="tx-modal-token">
              ${renderTokenIcon(fromTokenData, networksList)}
              <div class="tx-modal-token-text">
                <span class="tx-modal-amount">${escapeHtml(fromAmount)} ${escapeHtml(fromSymbol)}</span>
              </div>
            </div>
            <span class="tx-modal-arrow">→</span>
            <div class="tx-modal-token">
              ${renderTokenIcon(toTokenData, networksList)}
              <div class="tx-modal-token-text">
                <span class="tx-modal-amount">${escapeHtml(toAmount)} ${escapeHtml(toSymbol)}</span>
              </div>
            </div>
          </div>`
              : ""
          }
          <p class="tx-modal-subtitle">
            ${subtitle === "Confirm this transaction in your wallet." ? `<span class="tx-modal-wallet-icon">${WALLET_ICON_SVG}</span>` : ""}
            <span>${escapeHtml(subtitle)}</span>
          </p>
        </div>
        ${
          buttonLabel
            ? `<button class="tx-modal-primary-btn${isError ? " tx-modal-primary-btn--error" : ""}" id="tx-modal-primary-btn">${escapeHtml(buttonLabel)}</button>`
            : ""
        }
      </div>
    </div>
  `;
}
