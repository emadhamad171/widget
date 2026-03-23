import { n as m, r as c, l as f, m as d } from "./index-BC7prOFq.mjs";
import { n as u } from "./class-map--KwldplG.mjs";
import { o as b } from "./if-defined-f-LTTPfk.mjs";
import { c as h } from "./index-BhuV22A9.mjs";
import "./index-CQnR7ZcC.mjs";
const v = m`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
var o = function(l, r, i, s) {
  var a = arguments.length, e = a < 3 ? r : s === null ? s = Object.getOwnPropertyDescriptor(r, i) : s, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") e = Reflect.decorate(l, r, i, s);
  else for (var p = l.length - 1; p >= 0; p--) (n = l[p]) && (e = (a < 3 ? n(e) : a > 3 ? n(r, i, e) : n(r, i)) || e);
  return a > 3 && e && Object.defineProperty(r, i, e), e;
};
let t = class extends f {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  render() {
    return d`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${b(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `;
  }
  templateError() {
    return this.errorMessage ? d`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>` : null;
  }
};
t.styles = [c, v];
o([
  u()
], t.prototype, "errorMessage", void 0);
o([
  u({ type: Boolean })
], t.prototype, "disabled", void 0);
o([
  u()
], t.prototype, "value", void 0);
o([
  u()
], t.prototype, "tabIdx", void 0);
t = o([
  h("wui-email-input")
], t);
//# sourceMappingURL=index-CNbDWFYp.mjs.map
