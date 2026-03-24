import type { WidgetConfig } from "../types";

export const OBSERVED_ATTRIBUTES = [
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
  "walletconnect-project-id",
  "filled-input-background-color",
];

export function parseWidgetAttributes(el: HTMLElement): WidgetConfig {
  const attr = (name: string) => el.getAttribute(name);
  return {
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
    swapDividerVariant: (attr("swap-divider-variant") as "v1" | "v2") || "v2",
    walletConnectProjectId: attr("walletconnect-project-id") || undefined,
    filledInputBackgroundColor: attr("filled-input-background-color") || undefined,
  };
}
