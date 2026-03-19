import { SETTING_ICON_SVG, CLOSE_ICON_SVG } from "./icons";

export function renderHeader(): string {
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
