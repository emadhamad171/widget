import { Z as G, _ as L, $ as F, a0 as A, a1 as O, a2 as b, a3 as C, a4 as Y, a5 as V, a6 as j, a7 as k, a8 as B, a9 as J, aa as U, ab as H, ac as Q, ad as m, ae as S } from "./index-DHmMKAfZ.mjs";
import { af as st } from "./index-DHmMKAfZ.mjs";
function K(w, { body: I, onError: d, onResponse: g }) {
  return w.request({
    body: I,
    onError: d,
    onResponse: g
  }), w;
}
async function X(w, { body: I, timeout: d = 1e4 }) {
  return w.requestAsync({
    body: I,
    timeout: d
  });
}
const x = {
  /**
   * @deprecated use `getHttpRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getHttpRpcClient } from 'viem/utils'
   *
   * -rpc.http(url, params)
   * +const httpClient = getHttpRpcClient(url)
   * +httpClient.request(params)
   * ```
   */
  http(w, I) {
    return G(w).request(I);
  },
  /**
   * @deprecated use `getWebSocketRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getWebSocketRpcClient } from 'viem/utils'
   *
   * -rpc.webSocket(url, params)
   * +const webSocketClient = getWebSocketRpcClient(url)
   * +webSocketClient.request(params)
   * ```
   */
  webSocket: K,
  /**
   * @deprecated use `getWebSocketRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getWebSocketRpcClient } from 'viem/utils'
   *
   * -const response = await rpc.webSocketAsync(url, params)
   * +const webSocketClient = getWebSocketRpcClient(url)
   * +const response = await webSocketClient.requestAsync(params)
   * ```
   */
  webSocketAsync: X
};
E.type = "mock";
function E(w) {
  const I = /* @__PURE__ */ new Map(), d = w.features ?? { defaultConnected: !1 };
  let g = d.defaultConnected, y;
  return L((u) => ({
    id: "mock",
    name: "Mock Connector",
    type: E.type,
    async setup() {
      y = u.chains[0].id;
    },
    async connect({ chainId: t, withCapabilities: i } = {}) {
      if (d.connectError)
        throw typeof d.connectError == "boolean" ? new j(new Error("Failed to connect.")) : d.connectError;
      const o = await (await this.getProvider()).request({
        method: "eth_requestAccounts"
      });
      let n = await this.getChainId();
      return t && n !== t && (n = (await this.switchChain({ chainId: t })).id), g = !0, {
        accounts: i ? o.map((s) => ({
          address: A(s),
          capabilities: { foo: { bar: s } }
        })) : o.map((s) => A(s)),
        chainId: n
      };
    },
    async disconnect() {
      g = !1;
    },
    async getAccounts() {
      if (!g)
        throw new V();
      return (await (await this.getProvider()).request({ method: "eth_accounts" })).map((r) => A(r));
    },
    async getChainId() {
      const i = await (await this.getProvider()).request({ method: "eth_chainId" });
      return Y(i, "number");
    },
    async isAuthorized() {
      return !d.reconnect || !g ? !1 : !!(await this.getAccounts()).length;
    },
    async switchChain({ chainId: t }) {
      const i = await this.getProvider(), r = u.chains.find((o) => o.id === t);
      if (!r)
        throw new O(new b());
      return await i.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: C(t) }]
      }), r;
    },
    onAccountsChanged(t) {
      t.length === 0 ? this.onDisconnect() : u.emitter.emit("change", {
        accounts: t.map((i) => A(i))
      });
    },
    onChainChanged(t) {
      const i = Number(t);
      u.emitter.emit("change", { chainId: i });
    },
    async onDisconnect(t) {
      u.emitter.emit("disconnect"), g = !1;
    },
    async getProvider({ chainId: t } = {}) {
      const r = (u.chains.find((n) => n.id === t) ?? u.chains[0]).rpcUrls.default.http[0];
      return F({ request: async ({ method: n, params: s }) => {
        if (n === "eth_chainId")
          return C(y);
        if (n === "eth_accounts" || n === "eth_requestAccounts")
          return w.accounts;
        if (n === "eth_signTypedData_v4" && d.signTypedDataError)
          throw typeof d.signTypedDataError == "boolean" ? new j(new Error("Failed to sign typed data.")) : d.signTypedDataError;
        if (n === "wallet_switchEthereumChain") {
          if (d.switchChainError)
            throw typeof d.switchChainError == "boolean" ? new j(new Error("Failed to switch chain.")) : d.switchChainError;
          y = Y(s[0].chainId, "number"), this.onChainChanged(y.toString());
          return;
        }
        if (n === "wallet_watchAsset") {
          if (d.watchAssetError)
            throw typeof d.watchAssetError == "boolean" ? new j(new Error("Failed to switch chain.")) : d.watchAssetError;
          return g;
        }
        if (n === "wallet_getCapabilities")
          return {
            "0x2105": {
              paymasterService: {
                supported: s[0] === "0x95132632579b073D12a6673e18Ab05777a6B86f8"
              },
              sessionKeys: {
                supported: !0
              }
            },
            "0x14A34": {
              paymasterService: {
                supported: s[0] === "0x95132632579b073D12a6673e18Ab05777a6B86f8"
              }
            }
          };
        if (n === "wallet_sendCalls") {
          const h = [], l = s[0].calls, a = s[0].from;
          for (const D of l) {
            const { result: p, error: N } = await x.http(r, {
              body: {
                method: "eth_sendTransaction",
                params: [
                  {
                    ...D,
                    ...typeof a < "u" ? { from: a } : {}
                  }
                ]
              }
            });
            if (N)
              throw new k({
                body: { method: n, params: s },
                error: N,
                url: r
              });
            h.push(p);
          }
          const f = B(J(JSON.stringify(l)));
          return I.set(f, h), { id: f };
        }
        if (n === "wallet_getCallsStatus") {
          const h = I.get(s[0]);
          if (!h)
            return {
              atomic: !1,
              chainId: "0x1",
              id: s[0],
              status: 100,
              receipts: [],
              version: "2.0.0"
            };
          const a = (await Promise.all(h.map(async (f) => {
            const { result: D, error: p } = await x.http(r, {
              body: {
                method: "eth_getTransactionReceipt",
                params: [f],
                id: 0
              }
            });
            if (p)
              throw new k({
                body: { method: n, params: s },
                error: p,
                url: r
              });
            return D ? {
              blockHash: D.blockHash,
              blockNumber: D.blockNumber,
              gasUsed: D.gasUsed,
              logs: D.logs,
              status: D.status,
              transactionHash: D.transactionHash
            } : null;
          }))).filter((f) => f !== null);
          return a.length === 0 ? {
            atomic: !1,
            chainId: "0x1",
            id: s[0],
            status: 100,
            receipts: [],
            version: "2.0.0"
          } : {
            atomic: !1,
            chainId: "0x1",
            id: s[0],
            status: 200,
            receipts: a,
            version: "2.0.0"
          };
        }
        if (n === "wallet_showCallsStatus")
          return;
        if (n === "personal_sign") {
          if (d.signMessageError)
            throw typeof d.signMessageError == "boolean" ? new j(new Error("Failed to sign message.")) : d.signMessageError;
          n = "eth_sign", s = [s[1], s[0]];
        }
        const e = { method: n, params: s }, { error: c, result: M } = await x.http(r, { body: e });
        if (c)
          throw new k({ body: e, error: c, url: r });
        return M;
      } })({ retryCount: 0 });
    }
  }));
}
function _(w) {
  var u, t, i;
  const { chain: I } = w, d = I.rpcUrls.default.http[0];
  if (!w.transports)
    return [d];
  const g = (t = (u = w.transports) == null ? void 0 : u[I.id]) == null ? void 0 : t.call(u, { chain: I });
  return (((i = g == null ? void 0 : g.value) == null ? void 0 : i.transports) || [g]).map(({ value: r }) => (r == null ? void 0 : r.url) || d);
}
function $(w = {}) {
  let I, d, g, y;
  return L((u) => ({
    id: "baseAccount",
    name: "Base Account",
    rdns: "app.base.account",
    type: "baseAccount",
    async connect({ chainId: t, withCapabilities: i, ...r } = {}) {
      var o;
      try {
        const n = await this.getProvider(), s = t ?? ((o = u.chains[0]) == null ? void 0 : o.id);
        if (!s)
          throw new b();
        let { accounts: e, currentChainId: c } = await (async () => {
          if (r.isReconnecting)
            return {
              accounts: (await n.request({
                method: "eth_accounts",
                params: []
              })).map((a) => ({ address: A(a) })),
              currentChainId: await this.getChainId()
            };
          const M = await n.request({
            method: "wallet_connect",
            params: [
              {
                capabilities: "capabilities" in r && r.capabilities ? r.capabilities : {},
                chainIds: [
                  C(s),
                  ...u.chains.filter((a) => a.id !== s).map((a) => C(a.id))
                ]
              }
            ]
          });
          return {
            accounts: (await n.request({
              method: "eth_accounts"
            })).map((a) => M.accounts.find((f) => f.address === a) ?? { address: a }).map((a) => ({
              address: A(a.address),
              capabilities: a.capabilities ?? {}
            })),
            currentChainId: Number(M.chainIds[0])
          };
        })();
        if (d || (d = this.onAccountsChanged.bind(this), n.on("accountsChanged", d)), g || (g = this.onChainChanged.bind(this), n.on("chainChanged", g)), y || (y = this.onDisconnect.bind(this), n.on("disconnect", y)), t && c !== t) {
          const M = await this.switchChain({ chainId: t }).catch((h) => {
            if (h.code === j.code)
              throw h;
            return { id: c };
          });
          c = (M == null ? void 0 : M.id) ?? c;
        }
        return {
          // TODO(v3): Make `withCapabilities: true` default behavior
          accounts: i ? e : e.map((M) => M.address),
          chainId: c
        };
      } catch (n) {
        throw /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(n.message) ? new j(n) : n;
      }
    },
    async disconnect() {
      const t = await this.getProvider();
      d && (t.removeListener("accountsChanged", d), d = void 0), g && (t.removeListener("chainChanged", g), g = void 0), y && (t.removeListener("disconnect", y), y = void 0), t.disconnect();
    },
    async getAccounts() {
      return (await (await this.getProvider()).request({
        method: "eth_accounts"
      })).map((i) => A(i));
    },
    async getChainId() {
      const i = await (await this.getProvider()).request({
        method: "eth_chainId"
      });
      return Number(i);
    },
    async getProvider() {
      if (!I) {
        const t = (() => {
          var o;
          return typeof w.preference == "string" ? { options: w.preference } : {
            ...w.preference,
            options: ((o = w.preference) == null ? void 0 : o.options) ?? "all"
          };
        })(), { createBaseAccountSDK: i } = await (() => {
          try {
            return import("./connectors-CWtDSj7T.mjs");
          } catch {
            throw new Error('dependency "@base-org/account" not found');
          }
        })();
        I = i({
          ...w,
          appChainIds: u.chains.map((o) => o.id),
          preference: t
        }).getProvider();
      }
      return I;
    },
    async isAuthorized() {
      try {
        return !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: t, chainId: i }) {
      var n, s, e, c;
      const r = u.chains.find((M) => M.id === i);
      if (!r)
        throw new O(new b());
      const o = await this.getProvider();
      try {
        return await o.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: C(r.id) }]
        }), r;
      } catch (M) {
        if (M.code === 4902)
          try {
            let h;
            t != null && t.blockExplorerUrls ? h = t.blockExplorerUrls : h = (n = r.blockExplorers) != null && n.default.url ? [(s = r.blockExplorers) == null ? void 0 : s.default.url] : [];
            let l;
            (e = t == null ? void 0 : t.rpcUrls) != null && e.length ? l = t.rpcUrls : l = [((c = r.rpcUrls.default) == null ? void 0 : c.http[0]) ?? ""];
            const a = {
              blockExplorerUrls: h,
              chainId: C(i),
              chainName: (t == null ? void 0 : t.chainName) ?? r.name,
              iconUrls: t == null ? void 0 : t.iconUrls,
              nativeCurrency: (t == null ? void 0 : t.nativeCurrency) ?? r.nativeCurrency,
              rpcUrls: l
            };
            return await o.request({
              method: "wallet_addEthereumChain",
              params: [a]
            }), r;
          } catch (h) {
            throw new j(h);
          }
        throw new O(M);
      }
    },
    onAccountsChanged(t) {
      t.length === 0 ? this.onDisconnect() : u.emitter.emit("change", {
        accounts: t.map((i) => A(i))
      });
    },
    onChainChanged(t) {
      const i = Number(t);
      u.emitter.emit("change", { chainId: i });
    },
    async onDisconnect(t) {
      u.emitter.emit("disconnect");
      const i = await this.getProvider();
      d && (i.removeListener("accountsChanged", d), d = void 0), g && (i.removeListener("chainChanged", g), g = void 0), y && (i.removeListener("disconnect", y), y = void 0);
    }
  }));
}
q.type = "coinbaseWallet";
function q(w = {}) {
  let I, d, g, y;
  return L((u) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    rdns: "com.coinbase.wallet",
    type: q.type,
    async connect({ chainId: t, withCapabilities: i, ...r } = {}) {
      try {
        const o = await this.getProvider(), n = (await o.request({
          method: "eth_requestAccounts",
          params: "instantOnboarding" in r && r.instantOnboarding ? [{ onboarding: "instant" }] : []
        })).map((e) => A(e));
        d || (d = this.onAccountsChanged.bind(this), o.on("accountsChanged", d)), g || (g = this.onChainChanged.bind(this), o.on("chainChanged", g)), y || (y = this.onDisconnect.bind(this), o.on("disconnect", y));
        let s = await this.getChainId();
        if (t && s !== t) {
          const e = await this.switchChain({ chainId: t }).catch((c) => {
            if (c.code === j.code)
              throw c;
            return { id: s };
          });
          s = (e == null ? void 0 : e.id) ?? s;
        }
        return {
          accounts: i ? n.map((e) => ({ address: e, capabilities: {} })) : n,
          chainId: s
        };
      } catch (o) {
        throw /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(o.message) ? new j(o) : o;
      }
    },
    async disconnect() {
      var i;
      const t = await this.getProvider();
      d && (t.removeListener("accountsChanged", d), d = void 0), g && (t.removeListener("chainChanged", g), g = void 0), y && (t.removeListener("disconnect", y), y = void 0), t.disconnect(), (i = t.close) == null || i.call(t);
    },
    async getAccounts() {
      return (await (await this.getProvider()).request({
        method: "eth_accounts"
      })).map((i) => A(i));
    },
    async getChainId() {
      const i = await (await this.getProvider()).request({
        method: "eth_chainId"
      });
      return Number(i);
    },
    async getProvider() {
      if (!I) {
        const { createCoinbaseWalletSDK: t } = await (() => {
          try {
            return import("./connectors-Ch0n9Sw2.mjs");
          } catch {
            throw new Error('dependency "@coinbase/wallet-sdk" not found');
          }
        })();
        I = t({
          ...w,
          appChainIds: u.chains.map((r) => r.id),
          preference: {
            options: "all",
            ...w.preference ?? {}
          }
        }).getProvider();
      }
      return I;
    },
    async isAuthorized() {
      try {
        return !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: t, chainId: i }) {
      var n, s, e, c;
      const r = u.chains.find((M) => M.id === i);
      if (!r)
        throw new O(new b());
      const o = await this.getProvider();
      try {
        return await o.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: C(r.id) }]
        }), r;
      } catch (M) {
        if (M.code === 4902)
          try {
            let h;
            t != null && t.blockExplorerUrls ? h = t.blockExplorerUrls : h = (n = r.blockExplorers) != null && n.default.url ? [(s = r.blockExplorers) == null ? void 0 : s.default.url] : [];
            let l;
            (e = t == null ? void 0 : t.rpcUrls) != null && e.length ? l = t.rpcUrls : l = [((c = r.rpcUrls.default) == null ? void 0 : c.http[0]) ?? ""];
            const a = {
              blockExplorerUrls: h,
              chainId: C(i),
              chainName: (t == null ? void 0 : t.chainName) ?? r.name,
              iconUrls: t == null ? void 0 : t.iconUrls,
              nativeCurrency: (t == null ? void 0 : t.nativeCurrency) ?? r.nativeCurrency,
              rpcUrls: l
            };
            return await o.request({
              method: "wallet_addEthereumChain",
              params: [a]
            }), r;
          } catch (h) {
            throw new j(h);
          }
        throw new O(M);
      }
    },
    onAccountsChanged(t) {
      t.length === 0 ? this.onDisconnect() : u.emitter.emit("change", {
        accounts: t.map((i) => A(i))
      });
    },
    onChainChanged(t) {
      const i = Number(t);
      u.emitter.emit("change", { chainId: i });
    },
    async onDisconnect(t) {
      u.emitter.emit("disconnect");
      const i = await this.getProvider();
      d && (i.removeListener("accountsChanged", d), d = void 0), g && (i.removeListener("chainChanged", g), g = void 0), y && (i.removeListener("disconnect", y), y = void 0);
    }
  }));
}
R.type = "metaMask";
function R(w = {}) {
  let I, d, g, y, u, t, i, r;
  return L((o) => ({
    id: "metaMaskSDK",
    name: "MetaMask",
    rdns: ["io.metamask", "io.metamask.mobile"],
    type: R.type,
    async setup() {
      const n = await this.getProvider();
      n != null && n.on && (t || (t = this.onConnect.bind(this), n.on("connect", t)), y || (y = this.onAccountsChanged.bind(this), n.on("accountsChanged", y)));
    },
    async connect({ chainId: n, isReconnecting: s, withCapabilities: e } = {}) {
      const c = await this.getProvider();
      i || (i = this.onDisplayUri, c.on("display_uri", i));
      let M = [];
      s && (M = await this.getAccounts().catch(() => []));
      try {
        let h, l;
        M != null && M.length || (w.connectAndSign || w.connectWith ? (w.connectAndSign ? h = await I.connectAndSign({
          msg: w.connectAndSign
        }) : w.connectWith && (l = await I.connectWith({
          method: w.connectWith.method,
          params: w.connectWith.params
        })), M = await this.getAccounts()) : M = (await I.connect()).map((D) => A(D)));
        let a = await this.getChainId();
        if (n && a !== n) {
          const f = await this.switchChain({ chainId: n }).catch((D) => {
            if (D.code === j.code)
              throw D;
            return { id: a };
          });
          a = (f == null ? void 0 : f.id) ?? a;
        }
        return i && (c.removeListener("display_uri", i), i = void 0), h ? c.emit("connectAndSign", {
          accounts: M,
          chainId: a,
          signResponse: h
        }) : l && c.emit("connectWith", {
          accounts: M,
          chainId: a,
          connectWithResponse: l
        }), t && (c.removeListener("connect", t), t = void 0), y || (y = this.onAccountsChanged.bind(this), c.on("accountsChanged", y)), u || (u = this.onChainChanged.bind(this), c.on("chainChanged", u)), r || (r = this.onDisconnect.bind(this), c.on("disconnect", r)), {
          // TODO(v3): Make `withCapabilities: true` default behavior
          accounts: e ? M.map((f) => ({ address: f, capabilities: {} })) : M,
          chainId: a
        };
      } catch (h) {
        const l = h;
        throw l.code === j.code ? new j(l) : l.code === m.code ? new m(l) : l;
      }
    },
    async disconnect() {
      const n = await this.getProvider();
      u && (n.removeListener("chainChanged", u), u = void 0), r && (n.removeListener("disconnect", r), r = void 0), t || (t = this.onConnect.bind(this), n.on("connect", t)), await I.terminate();
    },
    async getAccounts() {
      return (await (await this.getProvider()).request({
        method: "eth_accounts"
      })).map((e) => A(e));
    },
    async getChainId() {
      const n = await this.getProvider(), s = n.getChainId() || await (n == null ? void 0 : n.request({ method: "eth_chainId" }));
      return Number(s);
    },
    async getProvider() {
      async function n() {
        var h, l, a, f, D;
        const s = await (async () => {
          const { default: p } = await (() => {
            try {
              return import("./connectors-ChXvI7jw.mjs");
            } catch {
              throw new Error('dependency "@metamask/sdk" not found');
            }
          })();
          return typeof p != "function" && typeof p.default == "function" ? p.default : p;
        })(), e = {};
        for (const p of o.chains)
          e[C(p.id)] = (h = _({
            chain: p,
            transports: o.transports
          })) == null ? void 0 : h[0];
        I = new s({
          // Workaround cast since MetaMask SDK does not support `'exactOptionalPropertyTypes'`
          ...w,
          _source: "wagmi",
          forceDeleteProvider: !1,
          forceInjectProvider: !1,
          injectProvider: !1,
          readonlyRPCMap: e,
          dappMetadata: {
            ...w.dappMetadata,
            // Test if name and url are set AND not empty
            name: (l = w.dappMetadata) != null && l.name ? (a = w.dappMetadata) == null ? void 0 : a.name : "wagmi",
            url: (f = w.dappMetadata) != null && f.url ? (D = w.dappMetadata) == null ? void 0 : D.url : typeof window < "u" ? window.location.origin : "https://wagmi.sh"
          },
          useDeeplink: !0
        });
        const c = await I.init(), M = c != null && c.activeProvider ? c.activeProvider : I.getProvider();
        if (!M)
          throw new S();
        return M;
      }
      return d || (g || (g = n()), d = await g), d;
    },
    async isAuthorized() {
      try {
        return !!(await U(() => Q(() => this.getAccounts(), { timeout: 200 }), {
          delay: 201,
          retryCount: 3
        })).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: n, chainId: s }) {
      var l, a;
      const e = await this.getProvider(), c = o.chains.find((f) => f.id === s);
      if (!c)
        throw new O(new b());
      try {
        return await e.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: C(s) }]
        }), await M(), await h(s), c;
      } catch (f) {
        const D = f;
        if (D.code === j.code)
          throw new j(D);
        if (D.code === 4902 || // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        ((a = (l = D == null ? void 0 : D.data) == null ? void 0 : l.originalError) == null ? void 0 : a.code) === 4902)
          try {
            return await e.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  blockExplorerUrls: (() => {
                    const { default: p, ...N } = c.blockExplorers ?? {};
                    if (n != null && n.blockExplorerUrls)
                      return n.blockExplorerUrls;
                    if (p)
                      return [
                        p.url,
                        ...Object.values(N).map((z) => z.url)
                      ];
                  })(),
                  chainId: C(s),
                  chainName: (n == null ? void 0 : n.chainName) ?? c.name,
                  iconUrls: n == null ? void 0 : n.iconUrls,
                  nativeCurrency: (n == null ? void 0 : n.nativeCurrency) ?? c.nativeCurrency,
                  rpcUrls: (() => {
                    var p, N;
                    return (p = n == null ? void 0 : n.rpcUrls) != null && p.length ? n.rpcUrls : [((N = c.rpcUrls.default) == null ? void 0 : N.http[0]) ?? ""];
                  })()
                }
              ]
            }), await M(), await h(s), c;
          } catch (p) {
            const N = p;
            throw N.code === j.code ? new j(N) : new O(N);
          }
        throw new O(D);
      }
      async function M() {
        await U(async () => {
          const f = H(
            // `'eth_chainId'` is cached by the MetaMask SDK side to avoid unnecessary deeplinks
            await e.request({ method: "eth_chainId" })
          );
          if (f !== s)
            throw new Error("User rejected switch after adding network.");
          return f;
        }, {
          delay: 50,
          retryCount: 20
          // android device encryption is slower
        });
      }
      async function h(f) {
        await new Promise((D) => {
          const p = ((N) => {
            "chainId" in N && N.chainId === f && (o.emitter.off("change", p), D());
          });
          o.emitter.on("change", p), o.emitter.emit("change", { chainId: f });
        });
      }
    },
    async onAccountsChanged(n) {
      if (n.length === 0)
        if (I.isExtensionActive())
          this.onDisconnect();
        else
          return;
      else if (o.emitter.listenerCount("connect")) {
        const s = (await this.getChainId()).toString();
        this.onConnect({ chainId: s });
      } else
        o.emitter.emit("change", {
          accounts: n.map((s) => A(s))
        });
    },
    onChainChanged(n) {
      const s = Number(n);
      o.emitter.emit("change", { chainId: s });
    },
    async onConnect(n) {
      const s = await this.getAccounts();
      if (s.length === 0)
        return;
      const e = Number(n.chainId);
      o.emitter.emit("connect", { accounts: s, chainId: e });
      const c = await this.getProvider();
      t && (c.removeListener("connect", t), t = void 0), y || (y = this.onAccountsChanged.bind(this), c.on("accountsChanged", y)), u || (u = this.onChainChanged.bind(this), c.on("chainChanged", u)), r || (r = this.onDisconnect.bind(this), c.on("disconnect", r));
    },
    async onDisconnect(n) {
      const s = await this.getProvider();
      n && n.code === 1013 && s && (await this.getAccounts()).length || (o.emitter.emit("disconnect"), u && (s.removeListener("chainChanged", u), u = void 0), r && (s.removeListener("disconnect", r), r = void 0), t || (t = this.onConnect.bind(this), s.on("connect", t)));
    },
    onDisplayUri(n) {
      o.emitter.emit("message", { type: "display_uri", data: n });
    }
  }));
}
function tt(w = {}) {
  return L((I) => {
    const d = I.chains ?? w.chains ?? [], g = I.transports ? I.transports : w.transports;
    let y, u, t, i, r;
    return {
      async connect({ chainId: o = d[0].id, ...n } = {}) {
        const s = "isReconnecting" in n && n.isReconnecting || !1, e = "withCapabilities" in n && n.withCapabilities || !1;
        let c = [], M;
        if (s && ([c, M] = await Promise.all([
          this.getAccounts().catch(() => []),
          this.getChainId().catch(() => {
          })
        ]), o && M !== o)) {
          const l = await this.switchChain({ chainId: o }).catch((a) => {
            if (a.code === j.code)
              throw a;
            return { id: M };
          });
          M = (l == null ? void 0 : l.id) ?? M;
        }
        const h = await this.getProvider();
        try {
          if (!(c != null && c.length) && !s) {
            const { RpcSchema: l } = await (() => {
              try {
                return import("./connectors-CswXcz9R.mjs");
              } catch {
                throw new Error('dependency "porto" not found');
              }
            })(), { z: a } = await (() => {
              try {
                return import("./connectors-CtLbGftY.mjs");
              } catch {
                throw new Error('dependency "porto/internal" not found');
              }
            })(), f = await h.request({
              method: "wallet_connect",
              params: [
                {
                  ..."capabilities" in n ? {
                    capabilities: a.encode(l.wallet_connect.Capabilities, n.capabilities ?? {})
                  } : {},
                  chainIds: [
                    C(o),
                    ...d.filter((D) => D.id !== o).map((D) => C(D.id))
                  ]
                }
              ]
            });
            c = f.accounts, M = Number(f.chainIds[0]);
          }
          if (!M)
            throw new b();
          return i && (h.removeListener("connect", i), i = void 0), u || (u = this.onAccountsChanged.bind(this), h.on("accountsChanged", u)), t || (t = this.onChainChanged.bind(this), h.on("chainChanged", t)), r || (r = this.onDisconnect.bind(this), h.on("disconnect", r)), {
            accounts: c.map((l) => typeof l == "object" ? e ? l : l.address : e ? { address: l, capabilities: {} } : l),
            chainId: M
          };
        } catch (l) {
          const a = l;
          throw a.code === j.code ? new j(a) : a;
        }
      },
      async disconnect() {
        const o = await this.getProvider();
        t && (o.removeListener("chainChanged", t), t = void 0), r && (o.removeListener("disconnect", r), r = void 0), i || (i = this.onConnect.bind(this), o.on("connect", i)), await o.request({ method: "wallet_disconnect" });
      },
      async getAccounts() {
        return (await (await this.getProvider()).request({
          method: "eth_accounts"
        })).map((s) => A(s));
      },
      async getChainId() {
        const n = await (await this.getProvider()).request({
          method: "eth_chainId"
        });
        return Number(n);
      },
      async getPortoInstance() {
        return y ?? (y = (async () => {
          const { Porto: o } = await (() => {
            try {
              return import("./connectors-CswXcz9R.mjs");
            } catch {
              throw new Error('dependency "porto" not found');
            }
          })();
          return o.create({
            ...w,
            announceProvider: !1,
            // @ts-ignore
            chains: d,
            // @ts-ignore
            transports: g
          });
        })()), await y;
      },
      async getProvider() {
        return (await this.getPortoInstance()).provider;
      },
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIyIiBoZWlnaHQ9IjQyMiIgdmlld0JveD0iMCAwIDQyMiA0MjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MjIiIGhlaWdodD0iNDIyIiBmaWxsPSJibGFjayIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMV8xNSkiPgo8cGF0aCBkPSJNODEgMjg2LjM2NkM4MSAyODAuODkzIDg1LjQ1MDUgMjc2LjQ1NSA5MC45NDA0IDI3Ni40NTVIMzI5LjUxMUMzMzUuMDAxIDI3Ni40NTUgMzM5LjQ1MiAyODAuODkzIDMzOS40NTIgMjg2LjM2NlYzMDYuMTg4QzMzOS40NTIgMzExLjY2MiAzMzUuMDAxIDMxNi4wOTkgMzI5LjUxMSAzMTYuMDk5SDkwLjk0MDRDODUuNDUwNSAzMTYuMDk5IDgxIDMxMS42NjIgODEgMzA2LjE4OFYyODYuMzY2WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTAuOTQwNCAyMzQuODI4Qzg1LjQ1MDUgMjM0LjgyOCA4MSAyMzkuMjY2IDgxIDI0NC43MzlWMjcxLjUzMUM4My44NDMyIDI2OS42MzMgODcuMjYyMiAyNjguNTI2IDkwLjk0MDQgMjY4LjUyNkgzMjkuNTExQzMzMy4xODggMjY4LjUyNiAzMzYuNjA4IDI2OS42MzMgMzM5LjQ1MiAyNzEuNTMxVjI0NC43MzlDMzM5LjQ1MiAyMzkuMjY2IDMzNS4wMDEgMjM0LjgyOCAzMjkuNTExIDIzNC44MjhIOTAuOTQwNFpNMzM5LjQ1MiAyODYuMzY2QzMzOS40NTIgMjgwLjg5MyAzMzUuMDAxIDI3Ni40NTUgMzI5LjUxMSAyNzYuNDU1SDkwLjk0MDRDODUuNDUwNSAyNzYuNDU1IDgxIDI4MC44OTMgODEgMjg2LjM2NlYzMDYuMTlDODEgMzExLjY2NCA4NS40NTA1IDMxNi4xMDEgOTAuOTQwNCAzMTYuMTAxSDMyOS41MTFDMzM1LjAwMSAzMTYuMTAxIDMzOS40NTIgMzExLjY2NCAzMzkuNDUyIDMwNi4xOVYyODYuMzY2WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTAuOTQwNCAxOTMuMjAxQzg1LjQ1MDUgMTkzLjIwMSA4MSAxOTcuNjM4IDgxIDIwMy4xMTJWMjI5LjkwM0M4My44NDMyIDIyOC4wMDYgODcuMjYyMiAyMjYuODk5IDkwLjk0MDQgMjI2Ljg5OUgzMjkuNTExQzMzMy4xODggMjI2Ljg5OSAzMzYuNjA4IDIyOC4wMDYgMzM5LjQ1MiAyMjkuOTAzVjIwMy4xMTJDMzM5LjQ1MiAxOTcuNjM4IDMzNS4wMDEgMTkzLjIwMSAzMjkuNTExIDE5My4yMDFIOTAuOTQwNFpNMzM5LjQ1MiAyNDQuNzM5QzMzOS40NTIgMjM5LjI2NSAzMzUuMDAxIDIzNC44MjggMzI5LjUxMSAyMzQuODI4SDkwLjk0MDRDODUuNDUwNSAyMzQuODI4IDgxIDIzOS4yNjUgODEgMjQ0LjczOVYyNzEuNTNDODEuMjE3NSAyNzEuMzg1IDgxLjQzODMgMjcxLjI0NSA4MS42NjI0IDI3MS4xMDlDODMuODMyNSAyNjkuNzk0IDg2LjMwNTQgMjY4LjkyNyA4OC45NTIzIDI2OC42MzVDODkuNjA1MSAyNjguNTYzIDkwLjI2ODQgMjY4LjUyNiA5MC45NDA0IDI2OC41MjZIMzI5LjUxMUMzMzAuMTgzIDI2OC41MjYgMzMwLjg0NiAyNjguNTYzIDMzMS40OTggMjY4LjYzNUMzMzQuNDE5IDI2OC45NTcgMzM3LjEyOCAyNjkuOTggMzM5LjQ1MiAyNzEuNTNWMjQ0LjczOVpNMzM5LjQ1MiAyODYuMzY2QzMzOS40NTIgMjgxLjAyMSAzMzUuMjA2IDI3Ni42NjMgMzI5Ljg5MyAyNzYuNDYyQzMyOS43NjcgMjc2LjQ1NyAzMjkuNjQgMjc2LjQ1NSAzMjkuNTExIDI3Ni40NTVIOTAuOTQwNEM4NS40NTA1IDI3Ni40NTUgODEgMjgwLjg5MyA4MSAyODYuMzY2VjMwNi4xODhDODEgMzExLjY2MiA4NS40NTA1IDMxNi4xMDEgOTAuOTQwNCAzMTYuMTAxSDMyOS41MTFDMzM1LjAwMSAzMTYuMTAxIDMzOS40NTIgMzExLjY2MiAzMzkuNDUyIDMwNi4xODhWMjg2LjM2NloiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTguMDE0NiAxMDRDODguNjE3NyAxMDQgODEgMTExLjU5NSA4MSAxMjAuOTY1VjE4OC4yNzZDODMuODQzMiAxODYuMzc5IDg3LjI2MjIgMTg1LjI3MiA5MC45NDA0IDE4NS4yNzJIMzI5LjUxMUMzMzMuMTg4IDE4NS4yNzIgMzM2LjYwOCAxODYuMzc5IDMzOS40NTIgMTg4LjI3NlYxMjAuOTY1QzMzOS40NTIgMTExLjU5NSAzMzEuODMzIDEwNCAzMjIuNDM3IDEwNEg5OC4wMTQ2Wk0zMzkuNDUyIDIwMy4xMTJDMzM5LjQ1MiAxOTcuNjM4IDMzNS4wMDEgMTkzLjIwMSAzMjkuNTExIDE5My4yMDFIOTAuOTQwNEM4NS40NTA1IDE5My4yMDEgODEgMTk3LjYzOCA4MSAyMDMuMTEyVjIyOS45MDNDODEuMjE3NSAyMjkuNzU4IDgxLjQzODMgMjI5LjYxOCA4MS42NjI0IDIyOS40ODJDODMuODMyNSAyMjguMTY3IDg2LjMwNTQgMjI3LjMgODguOTUyMyAyMjcuMDA4Qzg5LjYwNTEgMjI2LjkzNiA5MC4yNjg0IDIyNi44OTkgOTAuOTQwNCAyMjYuODk5SDMyOS41MTFDMzMwLjE4MyAyMjYuODk5IDMzMC44NDYgMjI2LjkzNiAzMzEuNDk4IDIyNy4wMDhDMzM0LjQxOSAyMjcuMzMgMzM3LjEyOCAyMjguMzUyIDMzOS40NTIgMjI5LjkwM1YyMDMuMTEyWk0zMzkuNDUyIDI0NC43MzlDMzM5LjQ1MiAyMzkuMzkzIDMzNS4yMDYgMjM1LjAzNiAzMjkuODkzIDIzNC44MzVDMzI5Ljc2NyAyMzQuODMgMzI5LjY0IDIzNC44MjggMzI5LjUxMSAyMzQuODI4SDkwLjk0MDRDODUuNDUwNSAyMzQuODI4IDgxIDIzOS4yNjUgODEgMjQ0LjczOVYyNzEuNTNMODEuMDcwNyAyNzEuNDgzQzgxLjI2NTMgMjcxLjM1NSA4MS40NjI1IDI3MS4yMyA4MS42NjI0IDI3MS4xMDlDODEuOTA4MyAyNzAuOTYgODIuMTU4MSAyNzAuODE3IDgyLjQxMTcgMjcwLjY3OUM4NC4zOTUzIDI2OS42MDUgODYuNjA1NCAyNjguODk0IDg4Ljk1MjMgMjY4LjYzNUM4OS4wMDUyIDI2OC42MjkgODkuMDU4IDI2OC42MjQgODkuMTExIDI2OC42MThDODkuNzEyNSAyNjguNTU3IDkwLjMyMjggMjY4LjUyNiA5MC45NDA0IDI2OC41MjZIMzI5LjUxMUMzMjkuNzM4IDI2OC41MjYgMzI5Ljk2NSAyNjguNTMgMzMwLjE5MiAyNjguNTM5QzMzMC42MzEgMjY4LjU1NSAzMzEuMDY3IDI2OC41ODcgMzMxLjQ5OCAyNjguNjM1QzMzNC40MTkgMjY4Ljk1NyAzMzcuMTI4IDI2OS45OCAzMzkuNDUyIDI3MS41M1YyNDQuNzM5Wk0zMzkuNDUyIDI4Ni4zNjZDMzM5LjQ1MiAyODEuMDIxIDMzNS4yMDYgMjc2LjY2MyAzMjkuODkzIDI3Ni40NjJMMzI5Ljg2NSAyNzYuNDYxQzMyOS43NDggMjc2LjQ1NyAzMjkuNjI5IDI3Ni40NTUgMzI5LjUxMSAyNzYuNDU1SDkwLjk0MDRDODUuNDUwNSAyNzYuNDU1IDgxIDI4MC44OTMgODEgMjg2LjM2NlYzMDYuMTg4QzgxIDMxMS42NjIgODUuNDUwNSAzMTYuMTAxIDkwLjk0MDQgMzE2LjEwMUgzMjkuNTExQzMzNS4wMDEgMzE2LjEwMSAzMzkuNDUyIDMxMS42NjIgMzM5LjQ1MiAzMDYuMTg4VjI4Ni4zNjZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjY5Ljg2OCAxMzEuNzUyQzI2OS44NjggMTI2LjI3OCAyNzQuMzE4IDEyMS44NCAyNzkuODA4IDEyMS44NEgzMTEuNjE4QzMxNy4xMDggMTIxLjg0IDMyMS41NTggMTI2LjI3OCAzMjEuNTU4IDEzMS43NTJWMTYxLjQ4NUMzMjEuNTU4IDE2Ni45NTkgMzE3LjEwOCAxNzEuMzk2IDMxMS42MTggMTcxLjM5NkgyNzkuODA4QzI3NC4zMTggMTcxLjM5NiAyNjkuODY4IDE2Ni45NTkgMjY5Ljg2OCAxNjEuNDg1VjEzMS43NTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMTUiPgo8cmVjdCB3aWR0aD0iMjU5IiBoZWlnaHQ9IjIxMyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxIDEwNCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
      id: "xyz.ithaca.porto",
      async isAuthorized() {
        try {
          return !!(await U(() => this.getAccounts())).length;
        } catch {
          return !1;
        }
      },
      name: "Porto",
      async onAccountsChanged(o) {
        I.emitter.emit("change", {
          accounts: o.map((n) => A(n))
        });
      },
      onChainChanged(o) {
        const n = Number(o);
        I.emitter.emit("change", { chainId: n });
      },
      async onConnect(o) {
        const n = await this.getAccounts();
        if (n.length === 0)
          return;
        const s = Number(o.chainId);
        I.emitter.emit("connect", { accounts: n, chainId: s });
        const e = await this.getProvider();
        e && (i && (e.removeListener("connect", i), i = void 0), u || (u = this.onAccountsChanged.bind(this), e.on("accountsChanged", u)), t || (t = this.onChainChanged.bind(this), e.on("chainChanged", t)), r || (r = this.onDisconnect.bind(this), e.on("disconnect", r)));
      },
      async onDisconnect(o) {
        const n = await this.getProvider();
        I.emitter.emit("disconnect"), n && (t && (n.removeListener("chainChanged", t), t = void 0), r && (n.removeListener("disconnect", r), r = void 0), i || (i = this.onConnect.bind(this), n.on("connect", i)));
      },
      async setup() {
        if (!i) {
          const o = await this.getProvider();
          i = this.onConnect.bind(this), o.on("connect", i);
        }
      },
      async switchChain({ chainId: o }) {
        const n = d.find((e) => e.id === o);
        if (!n)
          throw new O(new b());
        return await (await this.getProvider()).request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: C(o) }]
        }), n;
      },
      type: "injected"
    };
  });
}
Z.type = "safe";
function Z(w = {}) {
  const { shimDisconnect: I = !1 } = w;
  let d, g;
  return L((y) => ({
    id: "safe",
    name: "Safe",
    type: Z.type,
    async connect({ withCapabilities: u } = {}) {
      var o;
      const t = await this.getProvider();
      if (!t)
        throw new S();
      const i = await this.getAccounts(), r = await this.getChainId();
      return g || (g = this.onDisconnect.bind(this), t.on("disconnect", g)), I && await ((o = y.storage) == null ? void 0 : o.removeItem("safe.disconnected")), {
        // TODO(v3): Make `withCapabilities: true` default behavior
        accounts: u ? i.map((n) => ({ address: n, capabilities: {} })) : i,
        chainId: r
      };
    },
    async disconnect() {
      var t;
      const u = await this.getProvider();
      if (!u)
        throw new S();
      g && (u.removeListener("disconnect", g), g = void 0), I && await ((t = y.storage) == null ? void 0 : t.setItem("safe.disconnected", !0));
    },
    async getAccounts() {
      const u = await this.getProvider();
      if (!u)
        throw new S();
      return (await u.request({ method: "eth_accounts" })).map(A);
    },
    async getProvider() {
      if (typeof window < "u" && (window == null ? void 0 : window.parent) !== window) {
        if (!d) {
          const { default: t } = await (() => {
            try {
              return import("./index-QDN5PNgK.mjs");
            } catch {
              throw new Error('dependency "@safe-global/safe-apps-sdk" not found');
            }
          })(), i = new t(w), r = await Q(() => i.safe.getInfo(), {
            timeout: w.unstable_getInfoTimeout ?? 10
          });
          if (!r)
            throw new Error("Could not load Safe information");
          const o = await (async () => {
            const n = await (() => {
              try {
                return import("./index-ZfWKGYA0.mjs").then((s) => s.i);
              } catch {
                throw new Error('dependency "@safe-global/safe-apps-provider" not found');
              }
            })();
            return typeof n.SafeAppProvider != "function" && typeof n.default.SafeAppProvider == "function" ? n.default.SafeAppProvider : n.SafeAppProvider;
          })();
          d = new o(r, i);
        }
        return d;
      }
    },
    async getChainId() {
      const u = await this.getProvider();
      if (!u)
        throw new S();
      return Number(u.chainId);
    },
    async isAuthorized() {
      var u;
      try {
        return I && // If shim exists in storage, connector is disconnected
        await ((u = y.storage) == null ? void 0 : u.getItem("safe.disconnected")) ? !1 : !!(await this.getAccounts()).length;
      } catch {
        return !1;
      }
    },
    onAccountsChanged() {
    },
    onChainChanged() {
    },
    onDisconnect() {
      y.emitter.emit("disconnect");
    }
  }));
}
const nt = "7.2.1";
W.type = "walletConnect";
function W(w) {
  const I = w.isNewChainsStale ?? !0;
  let d, g;
  const y = "eip155";
  let u, t, i, r, o, n;
  return L((s) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: W.type,
    async setup() {
      const e = await this.getProvider().catch(() => null);
      e && (i || (i = this.onConnect.bind(this), e.on("connect", i)), o || (o = this.onSessionDelete.bind(this), e.on("session_delete", o)));
    },
    async connect({ chainId: e, withCapabilities: c, ...M } = {}) {
      var h, l;
      try {
        const a = await this.getProvider();
        if (!a)
          throw new S();
        r || (r = this.onDisplayUri, a.on("display_uri", r));
        let f = e;
        if (!f) {
          const z = await ((h = s.storage) == null ? void 0 : h.getItem("state")) ?? {};
          s.chains.some((T) => T.id === z.chainId) ? f = z.chainId : f = (l = s.chains[0]) == null ? void 0 : l.id;
        }
        if (!f)
          throw new Error("No chains found on connector.");
        const D = await this.isChainsStale();
        if (a.session && D && await a.disconnect(), !a.session || D) {
          const z = s.chains.filter((v) => v.id !== f).map((v) => v.id);
          await a.connect({
            optionalChains: [f, ...z],
            ..."pairingTopic" in M ? { pairingTopic: M.pairingTopic } : {}
          }), this.setRequestedChainsIds(s.chains.map((v) => v.id));
        }
        const p = (await a.enable()).map((z) => A(z));
        let N = await this.getChainId();
        if (e && N !== e) {
          const z = await this.switchChain({ chainId: e }).catch((v) => {
            var T;
            if (v.code === j.code && ((T = v.cause) == null ? void 0 : T.message) !== "Missing or invalid. request() method: wallet_addEthereumChain")
              throw v;
            return { id: N };
          });
          N = (z == null ? void 0 : z.id) ?? N;
        }
        return r && (a.removeListener("display_uri", r), r = void 0), i && (a.removeListener("connect", i), i = void 0), u || (u = this.onAccountsChanged.bind(this), a.on("accountsChanged", u)), t || (t = this.onChainChanged.bind(this), a.on("chainChanged", t)), n || (n = this.onDisconnect.bind(this), a.on("disconnect", n)), o || (o = this.onSessionDelete.bind(this), a.on("session_delete", o)), {
          accounts: c ? p.map((z) => ({ address: z, capabilities: {} })) : p,
          chainId: N
        };
      } catch (a) {
        throw /(user rejected|connection request reset)/i.test(a == null ? void 0 : a.message) ? new j(a) : a;
      }
    },
    async disconnect() {
      const e = await this.getProvider();
      try {
        await (e == null ? void 0 : e.disconnect());
      } catch (c) {
        if (!/No matching key/i.test(c.message))
          throw c;
      } finally {
        t && (e == null || e.removeListener("chainChanged", t), t = void 0), n && (e == null || e.removeListener("disconnect", n), n = void 0), i || (i = this.onConnect.bind(this), e == null || e.on("connect", i)), u && (e == null || e.removeListener("accountsChanged", u), u = void 0), o && (e == null || e.removeListener("session_delete", o), o = void 0), this.setRequestedChainsIds([]);
      }
    },
    async getAccounts() {
      return (await this.getProvider()).accounts.map((c) => A(c));
    },
    async getProvider({ chainId: e } = {}) {
      var M;
      async function c() {
        const h = s.chains.map((a) => a.id);
        if (!h.length)
          return;
        const { EthereumProvider: l } = await (() => {
          try {
            return import("./index-DToo8PnE.mjs").then((a) => a.i);
          } catch {
            throw new Error('dependency "@walletconnect/ethereum-provider" not found');
          }
        })();
        return await l.init({
          ...w,
          disableProviderPing: !0,
          optionalChains: h,
          projectId: w.projectId,
          rpcMap: Object.fromEntries(s.chains.map((a) => {
            const [f] = _({
              chain: a,
              transports: s.transports
            });
            return [a.id, f];
          })),
          showQrModal: w.showQrModal ?? !0
        });
      }
      return d || (g || (g = c()), d = await g, d == null || d.events.setMaxListeners(Number.POSITIVE_INFINITY)), e && await ((M = this.switchChain) == null ? void 0 : M.call(this, { chainId: e })), d;
    },
    async getChainId() {
      return (await this.getProvider()).chainId;
    },
    async isAuthorized() {
      try {
        const [e, c] = await Promise.all([
          this.getAccounts(),
          this.getProvider()
        ]);
        return e.length ? await this.isChainsStale() && c.session ? (await c.disconnect().catch(() => {
        }), !1) : !0 : !1;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: e, chainId: c }) {
      var l, a, f;
      const M = await this.getProvider();
      if (!M)
        throw new S();
      const h = s.chains.find((D) => D.id === c);
      if (!h)
        throw new O(new b());
      try {
        await Promise.all([
          new Promise((p) => {
            const N = ({ chainId: z }) => {
              z === c && (s.emitter.off("change", N), p());
            };
            s.emitter.on("change", N);
          }),
          M.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: C(c) }]
          })
        ]);
        const D = await this.getRequestedChainsIds();
        return this.setRequestedChainsIds([...D, c]), h;
      } catch (D) {
        const p = D;
        if (/(user rejected)/i.test(p.message))
          throw new j(p);
        try {
          let N;
          e != null && e.blockExplorerUrls ? N = e.blockExplorerUrls : N = (l = h.blockExplorers) != null && l.default.url ? [(a = h.blockExplorers) == null ? void 0 : a.default.url] : [];
          let z;
          (f = e == null ? void 0 : e.rpcUrls) != null && f.length ? z = e.rpcUrls : z = [...h.rpcUrls.default.http];
          const v = {
            blockExplorerUrls: N,
            chainId: C(c),
            chainName: (e == null ? void 0 : e.chainName) ?? h.name,
            iconUrls: e == null ? void 0 : e.iconUrls,
            nativeCurrency: (e == null ? void 0 : e.nativeCurrency) ?? h.nativeCurrency,
            rpcUrls: z
          };
          await M.request({
            method: "wallet_addEthereumChain",
            params: [v]
          });
          const T = await this.getRequestedChainsIds();
          return this.setRequestedChainsIds([...T, c]), h;
        } catch (N) {
          throw new j(N);
        }
      }
    },
    onAccountsChanged(e) {
      e.length === 0 ? this.onDisconnect() : s.emitter.emit("change", {
        accounts: e.map((c) => A(c))
      });
    },
    onChainChanged(e) {
      const c = Number(e);
      s.emitter.emit("change", { chainId: c });
    },
    async onConnect(e) {
      const c = Number(e.chainId), M = await this.getAccounts();
      s.emitter.emit("connect", { accounts: M, chainId: c });
    },
    async onDisconnect(e) {
      this.setRequestedChainsIds([]), s.emitter.emit("disconnect");
      const c = await this.getProvider();
      u && (c.removeListener("accountsChanged", u), u = void 0), t && (c.removeListener("chainChanged", t), t = void 0), n && (c.removeListener("disconnect", n), n = void 0), o && (c.removeListener("session_delete", o), o = void 0), i || (i = this.onConnect.bind(this), c.on("connect", i));
    },
    onDisplayUri(e) {
      s.emitter.emit("message", { type: "display_uri", data: e });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      var c, M, h;
      return d ? ((h = (M = (c = d.session) == null ? void 0 : c.namespaces[y]) == null ? void 0 : M.accounts) == null ? void 0 : h.map((l) => Number.parseInt(l.split(":")[1] || "", 10))) ?? [] : [];
    },
    async getRequestedChainsIds() {
      var e;
      return await ((e = s.storage) == null ? void 0 : e.getItem(this.requestedChainsStorageKey)) ?? [];
    },
    /**
     * Checks if the target chains match the chains that were
     * initially requested by the connector for the WalletConnect session.
     * If there is a mismatch, this means that the chains on the connector
     * are considered stale, and need to be revalidated at a later point (via
     * connection).
     *
     * There may be a scenario where a dapp adds a chain to the
     * connector later on, however, this chain will not have been approved or rejected
     * by the wallet. In this case, the chain is considered stale.
     */
    async isChainsStale() {
      if (!I)
        return !1;
      const e = s.chains.map((h) => h.id), c = this.getNamespaceChainsIds();
      if (c.length && !c.some((h) => e.includes(h)))
        return !1;
      const M = await this.getRequestedChainsIds();
      return !e.every((h) => M.includes(h));
    },
    async setRequestedChainsIds(e) {
      var c;
      await ((c = s.storage) == null ? void 0 : c.setItem(this.requestedChainsStorageKey, e));
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    }
  }));
}
export {
  $ as baseAccount,
  q as coinbaseWallet,
  st as injected,
  R as metaMask,
  E as mock,
  tt as porto,
  Z as safe,
  nt as version,
  W as walletConnect
};
//# sourceMappingURL=index-BB4l5daI.mjs.map
