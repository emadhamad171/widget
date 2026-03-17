var N0 = Object.defineProperty;
var L0 = (e, t, n) => t in e ? N0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Er = (e, t, n) => L0(e, typeof t != "symbol" ? t + "" : t, n);
function yc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: R0 } = Object.prototype, { getPrototypeOf: ti } = Object, { iterator: ts, toStringTag: xc } = Symbol, ns = /* @__PURE__ */ ((e) => (t) => {
  const n = R0.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), De = (e) => (e = e.toLowerCase(), (t) => ns(t) === e), rs = (e) => (t) => typeof t === e, { isArray: bn } = Array, on = rs("undefined");
function or(e) {
  return e !== null && !on(e) && e.constructor !== null && !on(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vc = De("ArrayBuffer");
function F0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vc(e.buffer), t;
}
const O0 = rs("string"), ye = rs("function"), Ac = rs("number"), ir = (e) => e !== null && typeof e == "object", _0 = (e) => e === !0 || e === !1, Nr = (e) => {
  if (ns(e) !== "object")
    return !1;
  const t = ti(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(xc in e) && !(ts in e);
}, M0 = (e) => {
  if (!ir(e) || or(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, D0 = De("Date"), z0 = De("File"), U0 = (e) => !!(e && typeof e.uri < "u"), j0 = (e) => e && typeof e.getParts < "u", q0 = De("Blob"), H0 = De("FileList"), G0 = (e) => ir(e) && ye(e.pipe);
function V0() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Xi = V0(), Yi = typeof Xi.FormData < "u" ? Xi.FormData : void 0, W0 = (e) => {
  let t;
  return e && (Yi && e instanceof Yi || ye(e.append) && ((t = ns(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, Z0 = De("URLSearchParams"), [K0, Q0, X0, Y0] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(De), J0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ar(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), bn(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (or(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function Ec(e, t) {
  if (or(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Tt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Cc = (e) => !on(e) && e !== Tt;
function lo() {
  const { caseless: e, skipUndefined: t } = Cc(this) && this || {}, n = {}, r = (s, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const i = e && Ec(n, o) || o;
    Nr(n[i]) && Nr(s) ? n[i] = lo(n[i], s) : Nr(s) ? n[i] = lo({}, s) : bn(s) ? n[i] = s.slice() : (!t || !on(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && ar(arguments[s], r);
  return n;
}
const ed = (e, t, n, { allOwnKeys: r } = {}) => (ar(
  t,
  (s, o) => {
    n && ye(s) ? Object.defineProperty(e, o, {
      value: yc(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), td = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nd = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, rd = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && ti(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, sd = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, od = (e) => {
  if (!e) return null;
  if (bn(e)) return e;
  let t = e.length;
  if (!Ac(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, id = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ti(Uint8Array)), ad = (e, t) => {
  const r = (e && e[ts]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, cd = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ud = De("HTMLFormElement"), ld = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), Ji = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), dd = De("RegExp"), Tc = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ar(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, fd = (e) => {
  Tc(e, (t, n) => {
    if (ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ye(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, hd = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return bn(e) ? r(e) : r(String(e).split(t)), n;
}, pd = () => {
}, md = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function bd(e) {
  return !!(e && ye(e.append) && e[xc] === "FormData" && e[ts]);
}
const gd = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (ir(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (or(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = bn(r) ? [] : {};
        return ar(r, (i, a) => {
          const c = n(i, s + 1);
          !on(c) && (o[a] = c);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, wd = De("AsyncFunction"), yd = (e) => e && (ir(e) || ye(e)) && ye(e.then) && ye(e.catch), Sc = ((e, t) => e ? setImmediate : t ? ((n, r) => (Tt.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === Tt && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Tt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ye(Tt.postMessage)), xd = typeof queueMicrotask < "u" ? queueMicrotask.bind(Tt) : typeof process < "u" && process.nextTick || Sc, vd = (e) => e != null && ye(e[ts]), C = {
  isArray: bn,
  isArrayBuffer: vc,
  isBuffer: or,
  isFormData: W0,
  isArrayBufferView: F0,
  isString: O0,
  isNumber: Ac,
  isBoolean: _0,
  isObject: ir,
  isPlainObject: Nr,
  isEmptyObject: M0,
  isReadableStream: K0,
  isRequest: Q0,
  isResponse: X0,
  isHeaders: Y0,
  isUndefined: on,
  isDate: D0,
  isFile: z0,
  isReactNativeBlob: U0,
  isReactNative: j0,
  isBlob: q0,
  isRegExp: dd,
  isFunction: ye,
  isStream: G0,
  isURLSearchParams: Z0,
  isTypedArray: id,
  isFileList: H0,
  forEach: ar,
  merge: lo,
  extend: ed,
  trim: J0,
  stripBOM: td,
  inherits: nd,
  toFlatObject: rd,
  kindOf: ns,
  kindOfTest: De,
  endsWith: sd,
  toArray: od,
  forEachEntry: ad,
  matchAll: cd,
  isHTMLForm: ud,
  hasOwnProperty: Ji,
  hasOwnProp: Ji,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Tc,
  freezeMethods: fd,
  toObjectSet: hd,
  toCamelCase: ld,
  noop: pd,
  toFiniteNumber: md,
  findKey: Ec,
  global: Tt,
  isContextDefined: Cc,
  isSpecCompliantForm: bd,
  toJSONObject: gd,
  isAsyncFn: wd,
  isThenable: yd,
  setImmediate: Sc,
  asap: xd,
  isIterable: vd
};
let G = class kc extends Error {
  static from(t, n, r, s, o, i) {
    const a = new kc(t.message, n || t.code, r, s, o);
    return a.cause = t, a.name = t.name, t.status != null && a.status == null && (a.status = t.status), i && Object.assign(a, i), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, s, o) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
G.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
G.ERR_BAD_OPTION = "ERR_BAD_OPTION";
G.ECONNABORTED = "ECONNABORTED";
G.ETIMEDOUT = "ETIMEDOUT";
G.ERR_NETWORK = "ERR_NETWORK";
G.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
G.ERR_DEPRECATED = "ERR_DEPRECATED";
G.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
G.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
G.ERR_CANCELED = "ERR_CANCELED";
G.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
G.ERR_INVALID_URL = "ERR_INVALID_URL";
const Ad = null;
function fo(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Pc(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ns(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Pc(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ed(e) {
  return C.isArray(e) && !e.some(fo);
}
const Cd = C.toFlatObject(C, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ss(e, t, n) {
  if (!C.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = C.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(m, b) {
      return !C.isUndefined(b[m]);
    }
  );
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(t);
  if (!C.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (C.isDate(p))
      return p.toISOString();
    if (C.isBoolean(p))
      return p.toString();
    if (!c && C.isBlob(p))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(p) || C.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, m, b) {
    let y = p;
    if (C.isReactNative(t) && C.isReactNativeBlob(p))
      return t.append(Ns(b, m, o), u(p)), !1;
    if (p && !b && typeof p == "object") {
      if (C.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (C.isArray(p) && Ed(p) || (C.isFileList(p) || C.endsWith(m, "[]")) && (y = C.toArray(p)))
        return m = Pc(m), y.forEach(function(g, w) {
          !(C.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ns([m], w, o) : i === null ? m : m + "[]",
            u(g)
          );
        }), !1;
    }
    return fo(p) ? !0 : (t.append(Ns(b, m, o), u(p)), !1);
  }
  const d = [], f = Object.assign(Cd, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: fo
  });
  function h(p, m) {
    if (!C.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(p), C.forEach(p, function(y, x) {
        (!(C.isUndefined(y) || y === null) && s.call(t, y, C.isString(x) ? x.trim() : x, m, f)) === !0 && h(y, m ? m.concat(x) : [x]);
      }), d.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function ea(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ni(e, t) {
  this._pairs = [], e && ss(e, this, t);
}
const $c = ni.prototype;
$c.append = function(t, n) {
  this._pairs.push([t, n]);
};
$c.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ea);
  } : ea;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Td(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Bc(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Td, s = C.isFunction(n) ? {
    serialize: n
  } : n, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = C.isURLSearchParams(t) ? t.toString() : new ni(t, s).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class ta {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    C.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ri = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Sd = typeof URLSearchParams < "u" ? URLSearchParams : ni, kd = typeof FormData < "u" ? FormData : null, Pd = typeof Blob < "u" ? Blob : null, $d = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sd,
    FormData: kd,
    Blob: Pd
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, si = typeof window < "u" && typeof document < "u", ho = typeof navigator == "object" && navigator || void 0, Bd = si && (!ho || ["ReactNative", "NativeScript", "NS"].indexOf(ho.product) < 0), Id = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Nd = si && window.location.href || "http://localhost", Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: si,
  hasStandardBrowserEnv: Bd,
  hasStandardBrowserWebWorkerEnv: Id,
  navigator: ho,
  origin: Nd
}, Symbol.toStringTag, { value: "Module" })), ce = {
  ...Ld,
  ...$d
};
function Rd(e, t) {
  return ss(e, new ce.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return ce.isNode && C.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Fd(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Od(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ic(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = o >= n.length;
    return i = !i && C.isArray(s) ? s.length : i, c ? (C.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !C.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && C.isArray(s[i]) && (s[i] = Od(s[i])), !a);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return C.forEachEntry(e, (r, s) => {
      t(Fd(r), s, n, 0);
    }), n;
  }
  return null;
}
function _d(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const cr = {
  transitional: ri,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = C.isObject(t);
      if (o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
        return s ? JSON.stringify(Ic(t)) : t;
      if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t) || C.isReadableStream(t))
        return t;
      if (C.isArrayBufferView(t))
        return t.buffer;
      if (C.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Rd(t, this.formSerializer).toString();
        if ((a = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return ss(
            a ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), _d(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || cr.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
      if (C.isResponse(t) || C.isReadableStream(t))
        return t;
      if (t && C.isString(t) && (r && !this.responseType || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError" ? G.from(a, G.ERR_BAD_RESPONSE, this, null, this.response) : a;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ce.classes.FormData,
    Blob: ce.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  cr.headers[e] = {};
});
const Md = C.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Dd = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Md[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, na = Symbol("internals");
function Pn(e) {
  return e && String(e).trim().toLowerCase();
}
function Lr(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Lr) : String(e);
}
function zd(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ud = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ls(e, t, n, r, s) {
  if (C.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!C.isString(t)) {
    if (C.isString(r))
      return t.indexOf(r) !== -1;
    if (C.isRegExp(r))
      return r.test(t);
  }
}
function jd(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function qd(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let xe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, c, u) {
      const l = Pn(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = C.findKey(s, l);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || c] = Lr(a));
    }
    const i = (a, c) => C.forEach(a, (u, l) => o(u, l, c));
    if (C.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (C.isString(t) && (t = t.trim()) && !Ud(t))
      i(Dd(t), n);
    else if (C.isObject(t) && C.isIterable(t)) {
      let a = {}, c, u;
      for (const l of t) {
        if (!C.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = l[0]] = (c = a[u]) ? C.isArray(c) ? [...c, l[1]] : [c, l[1]] : l[1];
      }
      i(a, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Pn(t), t) {
      const r = C.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return zd(s);
        if (C.isFunction(n))
          return n.call(this, s, r);
        if (C.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Pn(t), t) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ls(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Pn(i), i) {
        const a = C.findKey(r, i);
        a && (!n || Ls(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return C.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ls(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return C.forEach(this, (s, o) => {
      const i = C.findKey(r, o);
      if (i) {
        n[i] = Lr(s), delete n[o];
        return;
      }
      const a = t ? jd(o) : String(o).trim();
      a !== o && delete n[o], n[a] = Lr(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && C.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[na] = this[na] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = Pn(i);
      r[a] || (qd(s, i), r[a] = !0);
    }
    return C.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
xe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
C.reduceDescriptors(xe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
C.freezeMethods(xe);
function Rs(e, t) {
  const n = this || cr, r = t || n, s = xe.from(r.headers);
  let o = r.data;
  return C.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Nc(e) {
  return !!(e && e.__CANCEL__);
}
let ur = class extends G {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", G.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Lc(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(
    new G(
      "Request failed with status code " + n.status,
      [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function Hd(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Gd(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = c, r[s] = u;
    let d = o, f = 0;
    for (; d !== s; )
      f += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const h = l && u - l;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function Vd(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - n;
    d >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const Mr = (e, t, n = 3) => {
  let r = 0;
  const s = Gd(50, 250);
  return Vd((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, c = i - r, u = s(c), l = i <= a;
    r = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && a && l ? (a - i) / u : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, ra = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, sa = (e) => (...t) => C.asap(() => e(...t)), Wd = ce.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ce.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ce.origin),
  ce.navigator && /(msie|trident)/i.test(ce.navigator.userAgent)
) : () => !0, Zd = ce.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      C.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), C.isString(r) && a.push(`path=${r}`), C.isString(s) && a.push(`domain=${s}`), o === !0 && a.push("secure"), C.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Kd(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qd(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Rc(e, t, n) {
  let r = !Kd(t);
  return e && (r || n == !1) ? Qd(e, t) : t;
}
const oa = (e) => e instanceof xe ? { ...e } : e;
function Rt(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, d, f) {
    return C.isPlainObject(u) && C.isPlainObject(l) ? C.merge.call({ caseless: f }, u, l) : C.isPlainObject(l) ? C.merge({}, l) : C.isArray(l) ? l.slice() : l;
  }
  function s(u, l, d, f) {
    if (C.isUndefined(l)) {
      if (!C.isUndefined(u))
        return r(void 0, u, d, f);
    } else return r(u, l, d, f);
  }
  function o(u, l) {
    if (!C.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (C.isUndefined(l)) {
      if (!C.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function a(u, l, d) {
    if (d in t)
      return r(u, l);
    if (d in e)
      return r(void 0, u);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, l, d) => s(oa(u), oa(l), d, !0)
  };
  return C.forEach(Object.keys({ ...e, ...t }), function(l) {
    if (l === "__proto__" || l === "constructor" || l === "prototype") return;
    const d = C.hasOwnProp(c, l) ? c[l] : s, f = d(e[l], t[l], l);
    C.isUndefined(f) && d !== a || (n[l] = f);
  }), n;
}
const Fc = (e) => {
  const t = Rt({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  if (t.headers = i = xe.from(i), t.url = Bc(
    Rc(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), a && i.set(
    "Authorization",
    "Basic " + btoa(
      (a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")
    )
  ), C.isFormData(n)) {
    if (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (C.isFunction(n.getHeaders)) {
      const c = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([l, d]) => {
        u.includes(l.toLowerCase()) && i.set(l, d);
      });
    }
  }
  if (ce.hasStandardBrowserEnv && (r && C.isFunction(r) && (r = r(t)), r || r !== !1 && Wd(t.url))) {
    const c = s && o && Zd.read(o);
    c && i.set(s, c);
  }
  return t;
}, Xd = typeof XMLHttpRequest < "u", Yd = Xd && function(e) {
  return new Promise(function(n, r) {
    const s = Fc(e);
    let o = s.data;
    const i = xe.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = s, l, d, f, h, p;
    function m() {
      h && h(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let b = new XMLHttpRequest();
    b.open(s.method.toUpperCase(), s.url, !0), b.timeout = s.timeout;
    function y() {
      if (!b)
        return;
      const g = xe.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), T = {
        data: !a || a === "text" || a === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: g,
        config: e,
        request: b
      };
      Lc(
        function(E) {
          n(E), m();
        },
        function(E) {
          r(E), m();
        },
        T
      ), b = null;
    }
    "onloadend" in b ? b.onloadend = y : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, b.onabort = function() {
      b && (r(new G("Request aborted", G.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function(w) {
      const T = w && w.message ? w.message : "Network Error", k = new G(T, G.ERR_NETWORK, e, b);
      k.event = w || null, r(k), b = null;
    }, b.ontimeout = function() {
      let w = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const T = s.transitional || ri;
      s.timeoutErrorMessage && (w = s.timeoutErrorMessage), r(
        new G(
          w,
          T.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
          e,
          b
        )
      ), b = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in b && C.forEach(i.toJSON(), function(w, T) {
      b.setRequestHeader(T, w);
    }), C.isUndefined(s.withCredentials) || (b.withCredentials = !!s.withCredentials), a && a !== "json" && (b.responseType = s.responseType), u && ([f, p] = Mr(u, !0), b.addEventListener("progress", f)), c && b.upload && ([d, h] = Mr(c), b.upload.addEventListener("progress", d), b.upload.addEventListener("loadend", h)), (s.cancelToken || s.signal) && (l = (g) => {
      b && (r(!g || g.type ? new ur(null, e, b) : g), b.abort(), b = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const x = Hd(s.url);
    if (x && ce.protocols.indexOf(x) === -1) {
      r(
        new G(
          "Unsupported protocol " + x + ":",
          G.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    b.send(o || null);
  });
}, Jd = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, a();
        const l = u instanceof Error ? u : this.reason;
        r.abort(
          l instanceof G ? l : new ur(l instanceof Error ? l.message : l)
        );
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new G(`timeout of ${t}ms exceeded`, G.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => C.asap(a), c;
  }
}, ef = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, tf = async function* (e, t) {
  for await (const n of nf(e))
    yield* ef(n, t);
}, nf = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, ia = (e, t, n, r) => {
  const s = tf(e, t);
  let o = 0, i, a = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream(
    {
      async pull(c) {
        try {
          const { done: u, value: l } = await s.next();
          if (u) {
            a(), c.close();
            return;
          }
          let d = l.byteLength;
          if (n) {
            let f = o += d;
            n(f);
          }
          c.enqueue(new Uint8Array(l));
        } catch (u) {
          throw a(u), u;
        }
      },
      cancel(c) {
        return a(c), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, aa = 64 * 1024, { isFunction: Cr } = C, rf = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(C.global), { ReadableStream: ca, TextEncoder: ua } = C.global, la = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, sf = (e) => {
  e = C.merge.call(
    {
      skipUndefined: !0
    },
    rf,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, s = t ? Cr(t) : typeof fetch == "function", o = Cr(n), i = Cr(r);
  if (!s)
    return !1;
  const a = s && Cr(ca), c = s && (typeof ua == "function" ? /* @__PURE__ */ ((p) => (m) => p.encode(m))(new ua()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), u = o && a && la(() => {
    let p = !1;
    const m = new n(ce.origin, {
      body: new ca(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !m;
  }), l = i && a && la(() => C.isReadableStream(new r("").body)), d = {
    stream: l && ((p) => p.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !d[p] && (d[p] = (m, b) => {
      let y = m && m[p];
      if (y)
        return y.call(m);
      throw new G(
        `Response type '${p}' is not supported`,
        G.ERR_NOT_SUPPORT,
        b
      );
    });
  });
  const f = async (p) => {
    if (p == null)
      return 0;
    if (C.isBlob(p))
      return p.size;
    if (C.isSpecCompliantForm(p))
      return (await new n(ce.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(p) || C.isArrayBuffer(p))
      return p.byteLength;
    if (C.isURLSearchParams(p) && (p = p + ""), C.isString(p))
      return (await c(p)).byteLength;
  }, h = async (p, m) => {
    const b = C.toFiniteNumber(p.getContentLength());
    return b ?? f(m);
  };
  return async (p) => {
    let {
      url: m,
      method: b,
      data: y,
      signal: x,
      cancelToken: g,
      timeout: w,
      onDownloadProgress: T,
      onUploadProgress: k,
      responseType: E,
      headers: A,
      withCredentials: P = "same-origin",
      fetchOptions: F
    } = Fc(p), $ = t || fetch;
    E = E ? (E + "").toLowerCase() : "text";
    let L = Jd(
      [x, g && g.toAbortSignal()],
      w
    ), R = null;
    const D = L && L.unsubscribe && (() => {
      L.unsubscribe();
    });
    let v;
    try {
      if (k && u && b !== "get" && b !== "head" && (v = await h(A, y)) !== 0) {
        let H = new n(m, {
          method: "POST",
          body: y,
          duplex: "half"
        }), Z;
        if (C.isFormData(y) && (Z = H.headers.get("content-type")) && A.setContentType(Z), H.body) {
          const [J, Q] = ra(
            v,
            Mr(sa(k))
          );
          y = ia(H.body, aa, J, Q);
        }
      }
      C.isString(P) || (P = P ? "include" : "omit");
      const S = o && "credentials" in n.prototype, O = {
        ...F,
        signal: L,
        method: b.toUpperCase(),
        headers: A.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: S ? P : void 0
      };
      R = o && new n(m, O);
      let B = await (o ? $(R, F) : $(m, O));
      const _ = l && (E === "stream" || E === "response");
      if (l && (T || _ && D)) {
        const H = {};
        ["status", "statusText", "headers"].forEach((te) => {
          H[te] = B[te];
        });
        const Z = C.toFiniteNumber(B.headers.get("content-length")), [J, Q] = T && ra(
          Z,
          Mr(sa(T), !0)
        ) || [];
        B = new r(
          ia(B.body, aa, J, () => {
            Q && Q(), D && D();
          }),
          H
        );
      }
      E = E || "text";
      let z = await d[C.findKey(d, E) || "text"](
        B,
        p
      );
      return !_ && D && D(), await new Promise((H, Z) => {
        Lc(H, Z, {
          data: z,
          headers: xe.from(B.headers),
          status: B.status,
          statusText: B.statusText,
          config: p,
          request: R
        });
      });
    } catch (S) {
      throw D && D(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
        new G(
          "Network Error",
          G.ERR_NETWORK,
          p,
          R,
          S && S.response
        ),
        {
          cause: S.cause || S
        }
      ) : G.from(S, S && S.code, p, R, S && S.response);
    }
  };
}, of = /* @__PURE__ */ new Map(), Oc = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [r, s, n];
  let i = o.length, a = i, c, u, l = of;
  for (; a--; )
    c = o[a], u = l.get(c), u === void 0 && l.set(c, u = a ? /* @__PURE__ */ new Map() : sf(t)), l = u;
  return u;
};
Oc();
const oi = {
  http: Ad,
  xhr: Yd,
  fetch: {
    get: Oc
  }
};
C.forEach(oi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const da = (e) => `- ${e}`, af = (e) => C.isFunction(e) || e === null || e === !1;
function cf(e, t) {
  e = C.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (s = r, !af(r) && (s = oi[(a = String(r)).toLowerCase()], s === void 0))
      throw new G(`Unknown adapter '${a}'`);
    if (s && (C.isFunction(s) || (s = s.get(t))))
      break;
    o[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(da).join(`
`) : " " + da(i[0]) : "as no adapter specified";
    throw new G(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const _c = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: cf,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: oi
};
function Fs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ur(null, e);
}
function fa(e) {
  return Fs(e), e.headers = xe.from(e.headers), e.data = Rs.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), _c.getAdapter(e.adapter || cr.adapter, e)(e).then(
    function(r) {
      return Fs(e), r.data = Rs.call(e, e.transformResponse, r), r.headers = xe.from(r.headers), r;
    },
    function(r) {
      return Nc(r) || (Fs(e), r && r.response && (r.response.data = Rs.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = xe.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const Mc = "1.13.6", os = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  os[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ha = {};
os.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Mc + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new G(
        s(i, " has been removed" + (n ? " in " + n : "")),
        G.ERR_DEPRECATED
      );
    return n && !ha[i] && (ha[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
os.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function uf(e, t, n) {
  if (typeof e != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], c = a === void 0 || i(a, o, e);
      if (c !== !0)
        throw new G(
          "option " + o + " must be " + c,
          G.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
  }
}
const Rr = {
  assertOptions: uf,
  validators: os
}, Pe = Rr.validators;
let Pt = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new ta(),
      response: new ta()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Rt(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Rr.assertOptions(
      r,
      {
        silentJSONParsing: Pe.transitional(Pe.boolean),
        forcedJSONParsing: Pe.transitional(Pe.boolean),
        clarifyTimeoutError: Pe.transitional(Pe.boolean),
        legacyInterceptorReqResOrdering: Pe.transitional(Pe.boolean)
      },
      !1
    ), s != null && (C.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Rr.assertOptions(
      s,
      {
        encode: Pe.function,
        serialize: Pe.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Rr.assertOptions(
      n,
      {
        baseUrl: Pe.spelling("baseURL"),
        withXsrfToken: Pe.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && C.merge(o.common, o[n.method]);
    o && C.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (p) => {
      delete o[p];
    }), n.headers = xe.concat(i, o);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      c = c && m.synchronous;
      const b = n.transitional || ri;
      b && b.legacyInterceptorReqResOrdering ? a.unshift(m.fulfilled, m.rejected) : a.push(m.fulfilled, m.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let l, d = 0, f;
    if (!c) {
      const p = [fa.bind(this), void 0];
      for (p.unshift(...a), p.push(...u), f = p.length, l = Promise.resolve(n); d < f; )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    f = a.length;
    let h = n;
    for (; d < f; ) {
      const p = a[d++], m = a[d++];
      try {
        h = p(h);
      } catch (b) {
        m.call(this, b);
        break;
      }
    }
    try {
      l = fa.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = u.length; d < f; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = Rt(this.defaults, t);
    const n = Rc(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Bc(n, t.params, t.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(t) {
  Pt.prototype[t] = function(n, r) {
    return this.request(
      Rt(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
C.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(
        Rt(a || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: i
        })
      );
    };
  }
  Pt.prototype[t] = n(), Pt.prototype[t + "Form"] = n(!0);
});
let lf = class Dc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new ur(o, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Dc(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function df(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ff(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const po = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(po).forEach(([e, t]) => {
  po[t] = e;
});
function zc(e) {
  const t = new Pt(e), n = yc(Pt.prototype.request, t);
  return C.extend(n, Pt.prototype, t, { allOwnKeys: !0 }), C.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return zc(Rt(e, s));
  }, n;
}
const ee = zc(cr);
ee.Axios = Pt;
ee.CanceledError = ur;
ee.CancelToken = lf;
ee.isCancel = Nc;
ee.VERSION = Mc;
ee.toFormData = ss;
ee.AxiosError = G;
ee.Cancel = ee.CanceledError;
ee.all = function(t) {
  return Promise.all(t);
};
ee.spread = df;
ee.isAxiosError = ff;
ee.mergeConfig = Rt;
ee.AxiosHeaders = xe;
ee.formToJSON = (e) => Ic(C.isHTMLForm(e) ? new FormData(e) : e);
ee.getAdapter = _c.getAdapter;
ee.HttpStatusCode = po;
ee.default = ee;
const {
  Axios: T5,
  AxiosError: S5,
  CanceledError: k5,
  isCancel: P5,
  CancelToken: $5,
  VERSION: B5,
  all: I5,
  Cancel: N5,
  isAxiosError: L5,
  spread: R5,
  toFormData: F5,
  AxiosHeaders: O5,
  HttpStatusCode: _5,
  formToJSON: M5,
  getAdapter: D5,
  mergeConfig: z5
} = ee;
class pa extends Error {
  constructor(n) {
    super(n.message);
    Er(this, "code");
    Er(this, "entity");
    this.name = "InsufficientAllowanceError", this.code = n.code, this.entity = n.entity;
  }
}
class hf extends Error {
  constructor() {
    super("Missing required query parameters"), this.name = "MissingRequiredQueryParamsError";
  }
}
class pf {
  constructor(t, n, r, s) {
    Er(this, "client");
    this.client = r || ee.create({
      baseURL: t,
      headers: {
        "x-api-key": n
      },
      ...s
    });
  }
  /**
   * Fetches the best quote for a swap based on the given parameters
   * @param sourceChain The source chain ID
   * @param sourceToken The source token address
   * @param destChain The destination chain ID
   * @param destToken The destination token address
   * @param amount The amount to swap
   * @param slippageBps The slippage in basis points
   * @param swapType The type of swap
   * @param retailUserId Optional retail user ID
   * @param depositType The type of deposit to perform (escrowed/direct)
   * @returns A promise that resolves to the Quote object
   */
  async getQuote(t, n, r, s, o, i, a, c = null, u) {
    return (await this.client.post("/v1/quotes/best", {
      source_chain: t,
      source_token: n,
      dest_chain: r,
      dest_token: s,
      amount: o,
      slippage_bps: i.toString(),
      swap_type: a,
      retail_user_id: c,
      deposit_type: u
    })).data;
  }
  /**
   * Creates a new swap intent with the provided details
   * @param quoteId The quote ID to use for the intent
   * @param userSourcePublicKey The user's source public key
   * @param userSourceAddress The user's source address
   * @param userDestinationAddress The user's destination address
   * @param refundAddress The refund address
   * @returns A promise that resolves to the CreateIntentData object
   */
  async createIntent(t, n, r, s, o) {
    return (await this.client.post("/v1/intents", {
      quote_id: t,
      user_source_public_key: n,
      user_source_address: r,
      user_destination_address: s,
      refund_address: o
    })).data;
  }
  /**
   * Adds an approval signature for a specific intent
   * @param signedData The signed approval data
   * @param intentId The intent ID to add the approval to
   */
  async addApproval(t, n) {
    await this.client.post(`/v1/intents/${n}/approvals`, t);
  }
  /**
   * Retrieves details of a specific intent
   * @param intentId The intent ID to retrieve
   * @returns A promise that resolves to the PublicSwapWithAdditionalInfo object
   */
  async getIntent(t) {
    return (await this.client.get(`/v1/intents/${t}`)).data;
  }
  /**
   * Gets the current status of a specific intent
   * @param intentId The intent ID to check
   * @returns A promise that resolves to the IntentStatus
   */
  async getIntentStatus(t) {
    return (await this.client.get(`/v1/intents/${t}/status`)).data.status;
  }
  /**
   * Lists the swap history for a retail user or wallet address
   * @param walletAddressOrRetailId The wallet address or retail ID
   * @param limit The maximum number of results to return (default: 20)
   * @param offset The offset for pagination (default: 0)
   * @param active Whether to show only active swaps (default: false)
   * @returns A promise that resolves to a paginated response of PublicSwapWithAdditionalInfo objects
   */
  async listRetailUserHistory(t, n, r = 20, s = 0, o = !1) {
    if (t.length <= 0 && !n)
      throw new hf();
    let i = "/v1/swaps/history", a;
    return t.length > 0 ? a = "?wallet=" + t.join("&wallet=") : a = "", i += a, n && (a !== "" ? i += `&retail_id=${n}` : i += `?retail_id=${n}`), (await this.client.get(`${i}&limit=${r}&offset=${s}&active=${o}`)).data;
  }
  /**
   * Retrieves swap details by intent ID
   * @param intentId The intent ID to retrieve swap details for
   * @returns A promise that resolves to the PublicSwapWithAdditionalInfo object
   */
  async getSwapByIntentId(t) {
    return (await this.client.get(`/v1/swaps/intents/${t}`)).data;
  }
  /**
   * Lists available networks, optionally filtered by token
   * @param token Optional token to filter networks by
   * @returns A promise that resolves to an array of Network objects
   */
  async listNetworks(t) {
    const n = t ? `/v1/networks?token=${t}` : "/v1/networks";
    return (await this.client.get(n)).data;
  }
  /**
   * Lists available tokens with pagination and optional filtering
   * @param limit The maximum number of results to return (default: 20)
   * @param offset The offset for pagination (default: 0)
   * @param q Optional search query
   * @param networkId Optional network ID to filter by
   * @returns A promise that resolves to a paginated response of Token objects
   */
  async listTokens(t = 20, n = 0, r, s) {
    let o = `/v1/tokens?limit=${t}&offset=${n}`;
    return r && (o += `&q=${r}`), s && (o += `&network_id=${s}`), (await this.client.get(o)).data;
  }
}
const mf = "1.2.3";
let Ee = class mo extends Error {
  constructor(t, n = {}) {
    var i;
    const r = n.cause instanceof mo ? n.cause.details : (i = n.cause) != null && i.message ? n.cause.message : n.details, s = n.cause instanceof mo && n.cause.docsPath || n.docsPath, o = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [`Docs: https://abitype.dev${s}`] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: abitype@${mf}`
    ].join(`
`);
    super(o), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiTypeError"
    }), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t;
  }
};
function at(e, t) {
  const n = e.exec(t);
  return n == null ? void 0 : n.groups;
}
const Uc = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, jc = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, qc = /^\(.+?\).*?$/, ma = /^tuple(?<array>(\[(\d*)\])*)$/;
function bo(e) {
  let t = e.type;
  if (ma.test(e.type) && "components" in e) {
    t = "(";
    const n = e.components.length;
    for (let s = 0; s < n; s++) {
      const o = e.components[s];
      t += bo(o), s < n - 1 && (t += ", ");
    }
    const r = at(ma, e.type);
    return t += `)${(r == null ? void 0 : r.array) || ""}`, bo({
      ...e,
      type: t
    });
  }
  return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t;
}
function Qt(e) {
  let t = "";
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const s = e[r];
    t += bo(s), r !== n - 1 && (t += ", ");
  }
  return t;
}
function Dr(e) {
  var t;
  return e.type === "function" ? `function ${e.name}(${Qt(e.inputs)})${e.stateMutability && e.stateMutability !== "nonpayable" ? ` ${e.stateMutability}` : ""}${(t = e.outputs) != null && t.length ? ` returns (${Qt(e.outputs)})` : ""}` : e.type === "event" ? `event ${e.name}(${Qt(e.inputs)})` : e.type === "error" ? `error ${e.name}(${Qt(e.inputs)})` : e.type === "constructor" ? `constructor(${Qt(e.inputs)})${e.stateMutability === "payable" ? " payable" : ""}` : e.type === "fallback" ? `fallback() external${e.stateMutability === "payable" ? " payable" : ""}` : "receive() external payable";
}
const Hc = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function bf(e) {
  return Hc.test(e);
}
function gf(e) {
  return at(Hc, e);
}
const Gc = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function wf(e) {
  return Gc.test(e);
}
function yf(e) {
  return at(Gc, e);
}
const Vc = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function xf(e) {
  return Vc.test(e);
}
function vf(e) {
  return at(Vc, e);
}
const Wc = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function is(e) {
  return Wc.test(e);
}
function Af(e) {
  return at(Wc, e);
}
const Zc = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function Ef(e) {
  return Zc.test(e);
}
function Cf(e) {
  return at(Zc, e);
}
const Kc = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function Tf(e) {
  return Kc.test(e);
}
function Sf(e) {
  return at(Kc, e);
}
const kf = /^receive\(\) external payable$/;
function Pf(e) {
  return kf.test(e);
}
const ba = /* @__PURE__ */ new Set([
  "memory",
  "indexed",
  "storage",
  "calldata"
]), $f = /* @__PURE__ */ new Set(["indexed"]), go = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
class Bf extends Ee {
  constructor({ signature: t }) {
    super("Failed to parse ABI item.", {
      details: `parseAbiItem(${JSON.stringify(t, null, 2)})`,
      docsPath: "/api/human#parseabiitem-1"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiItemError"
    });
  }
}
class If extends Ee {
  constructor({ type: t }) {
    super("Unknown type.", {
      metaMessages: [
        `Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownTypeError"
    });
  }
}
class Nf extends Ee {
  constructor({ type: t }) {
    super("Unknown type.", {
      metaMessages: [`Type "${t}" is not a valid ABI type.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSolidityTypeError"
    });
  }
}
class Lf extends Ee {
  constructor({ params: t }) {
    super("Failed to parse ABI parameters.", {
      details: `parseAbiParameters(${JSON.stringify(t, null, 2)})`,
      docsPath: "/api/human#parseabiparameters-1"
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiParametersError"
    });
  }
}
class Rf extends Ee {
  constructor({ param: t }) {
    super("Invalid ABI parameter.", {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParameterError"
    });
  }
}
class Ff extends Ee {
  constructor({ param: t, name: n }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SolidityProtectedKeywordError"
    });
  }
}
class Of extends Ee {
  constructor({ param: t, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidModifierError"
    });
  }
}
class _f extends Ee {
  constructor({ param: t, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`,
        `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidFunctionModifierError"
    });
  }
}
class Mf extends Ee {
  constructor({ abiParameter: t }) {
    super("Invalid ABI parameter.", {
      details: JSON.stringify(t, null, 2),
      metaMessages: ["ABI parameter type is invalid."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiTypeParameterError"
    });
  }
}
class gn extends Ee {
  constructor({ signature: t, type: n }) {
    super(`Invalid ${n} signature.`, {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSignatureError"
    });
  }
}
class Df extends Ee {
  constructor({ signature: t }) {
    super("Unknown signature.", {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSignatureError"
    });
  }
}
class zf extends Ee {
  constructor({ signature: t }) {
    super("Invalid struct signature.", {
      details: t,
      metaMessages: ["No properties exist."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStructSignatureError"
    });
  }
}
class Uf extends Ee {
  constructor({ type: t }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${t}" is a circular reference.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CircularReferenceError"
    });
  }
}
class jf extends Ee {
  constructor({ current: t, depth: n }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${t.trim()}" has too many ${n > 0 ? "opening" : "closing"} parentheses.`
      ],
      details: `Depth "${n}"`
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParenthesisError"
    });
  }
}
function qf(e, t, n) {
  let r = "";
  if (n)
    for (const s of Object.entries(n)) {
      if (!s)
        continue;
      let o = "";
      for (const i of s[1])
        o += `[${i.type}${i.name ? `:${i.name}` : ""}]`;
      r += `(${s[0]}{${o}})`;
    }
  return t ? `${t}:${e}${r}` : `${e}${r}`;
}
const Os = /* @__PURE__ */ new Map([
  // Unnamed
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  // Named
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  // Indexed
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 }
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ]
]);
function wo(e, t = {}) {
  if (xf(e))
    return Hf(e, t);
  if (wf(e))
    return Gf(e, t);
  if (bf(e))
    return Vf(e, t);
  if (Ef(e))
    return Wf(e, t);
  if (Tf(e))
    return Zf(e);
  if (Pf(e))
    return {
      type: "receive",
      stateMutability: "payable"
    };
  throw new Df({ signature: e });
}
function Hf(e, t = {}) {
  const n = vf(e);
  if (!n)
    throw new gn({ signature: e, type: "function" });
  const r = Te(n.parameters), s = [], o = r.length;
  for (let a = 0; a < o; a++)
    s.push(st(r[a], {
      modifiers: go,
      structs: t,
      type: "function"
    }));
  const i = [];
  if (n.returns) {
    const a = Te(n.returns), c = a.length;
    for (let u = 0; u < c; u++)
      i.push(st(a[u], {
        modifiers: go,
        structs: t,
        type: "function"
      }));
  }
  return {
    name: n.name,
    type: "function",
    stateMutability: n.stateMutability ?? "nonpayable",
    inputs: s,
    outputs: i
  };
}
function Gf(e, t = {}) {
  const n = yf(e);
  if (!n)
    throw new gn({ signature: e, type: "event" });
  const r = Te(n.parameters), s = [], o = r.length;
  for (let i = 0; i < o; i++)
    s.push(st(r[i], {
      modifiers: $f,
      structs: t,
      type: "event"
    }));
  return { name: n.name, type: "event", inputs: s };
}
function Vf(e, t = {}) {
  const n = gf(e);
  if (!n)
    throw new gn({ signature: e, type: "error" });
  const r = Te(n.parameters), s = [], o = r.length;
  for (let i = 0; i < o; i++)
    s.push(st(r[i], { structs: t, type: "error" }));
  return { name: n.name, type: "error", inputs: s };
}
function Wf(e, t = {}) {
  const n = Cf(e);
  if (!n)
    throw new gn({ signature: e, type: "constructor" });
  const r = Te(n.parameters), s = [], o = r.length;
  for (let i = 0; i < o; i++)
    s.push(st(r[i], { structs: t, type: "constructor" }));
  return {
    type: "constructor",
    stateMutability: n.stateMutability ?? "nonpayable",
    inputs: s
  };
}
function Zf(e) {
  const t = Sf(e);
  if (!t)
    throw new gn({ signature: e, type: "fallback" });
  return {
    type: "fallback",
    stateMutability: t.stateMutability ?? "nonpayable"
  };
}
const Kf = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, Qf = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, Xf = /^u?int$/;
function st(e, t) {
  var d, f;
  const n = qf(e, t == null ? void 0 : t.type, t == null ? void 0 : t.structs);
  if (Os.has(n))
    return Os.get(n);
  const r = qc.test(e), s = at(r ? Qf : Kf, e);
  if (!s)
    throw new Rf({ param: e });
  if (s.name && Jf(s.name))
    throw new Ff({ param: e, name: s.name });
  const o = s.name ? { name: s.name } : {}, i = s.modifier === "indexed" ? { indexed: !0 } : {}, a = (t == null ? void 0 : t.structs) ?? {};
  let c, u = {};
  if (r) {
    c = "tuple";
    const h = Te(s.type), p = [], m = h.length;
    for (let b = 0; b < m; b++)
      p.push(st(h[b], { structs: a }));
    u = { components: p };
  } else if (s.type in a)
    c = "tuple", u = { components: a[s.type] };
  else if (Xf.test(s.type))
    c = `${s.type}256`;
  else if (s.type === "address payable")
    c = "address";
  else if (c = s.type, (t == null ? void 0 : t.type) !== "struct" && !Qc(c))
    throw new Nf({ type: c });
  if (s.modifier) {
    if (!((f = (d = t == null ? void 0 : t.modifiers) == null ? void 0 : d.has) != null && f.call(d, s.modifier)))
      throw new Of({
        param: e,
        type: t == null ? void 0 : t.type,
        modifier: s.modifier
      });
    if (go.has(s.modifier) && !e1(c, !!s.array))
      throw new _f({
        param: e,
        type: t == null ? void 0 : t.type,
        modifier: s.modifier
      });
  }
  const l = {
    type: `${c}${s.array ?? ""}`,
    ...o,
    ...i,
    ...u
  };
  return Os.set(n, l), l;
}
function Te(e, t = [], n = "", r = 0) {
  const s = e.trim().length;
  for (let o = 0; o < s; o++) {
    const i = e[o], a = e.slice(o + 1);
    switch (i) {
      case ",":
        return r === 0 ? Te(a, [...t, n.trim()]) : Te(a, t, `${n}${i}`, r);
      case "(":
        return Te(a, t, `${n}${i}`, r + 1);
      case ")":
        return Te(a, t, `${n}${i}`, r - 1);
      default:
        return Te(a, t, `${n}${i}`, r);
    }
  }
  if (n === "")
    return t;
  if (r !== 0)
    throw new jf({ current: n, depth: r });
  return t.push(n.trim()), t;
}
function Qc(e) {
  return e === "address" || e === "bool" || e === "function" || e === "string" || Uc.test(e) || jc.test(e);
}
const Yf = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function Jf(e) {
  return e === "address" || e === "bool" || e === "function" || e === "string" || e === "tuple" || Uc.test(e) || jc.test(e) || Yf.test(e);
}
function e1(e, t) {
  return t || e === "bytes" || e === "string" || e === "tuple";
}
function ii(e) {
  const t = {}, n = e.length;
  for (let i = 0; i < n; i++) {
    const a = e[i];
    if (!is(a))
      continue;
    const c = Af(a);
    if (!c)
      throw new gn({ signature: a, type: "struct" });
    const u = c.properties.split(";"), l = [], d = u.length;
    for (let f = 0; f < d; f++) {
      const p = u[f].trim();
      if (!p)
        continue;
      const m = st(p, {
        type: "struct"
      });
      l.push(m);
    }
    if (!l.length)
      throw new zf({ signature: a });
    t[c.name] = l;
  }
  const r = {}, s = Object.entries(t), o = s.length;
  for (let i = 0; i < o; i++) {
    const [a, c] = s[i];
    r[a] = Xc(c, t);
  }
  return r;
}
const t1 = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function Xc(e = [], t = {}, n = /* @__PURE__ */ new Set()) {
  const r = [], s = e.length;
  for (let o = 0; o < s; o++) {
    const i = e[o];
    if (qc.test(i.type))
      r.push(i);
    else {
      const c = at(t1, i.type);
      if (!(c != null && c.type))
        throw new Mf({ abiParameter: i });
      const { array: u, type: l } = c;
      if (l in t) {
        if (n.has(l))
          throw new Uf({ type: l });
        r.push({
          ...i,
          type: `tuple${u ?? ""}`,
          components: Xc(t[l], t, /* @__PURE__ */ new Set([...n, l]))
        });
      } else if (Qc(l))
        r.push(i);
      else
        throw new If({ type: l });
    }
  }
  return r;
}
function ai(e) {
  const t = ii(e), n = [], r = e.length;
  for (let s = 0; s < r; s++) {
    const o = e[s];
    is(o) || n.push(wo(o, t));
  }
  return n;
}
function ga(e) {
  let t;
  if (typeof e == "string")
    t = wo(e);
  else {
    const n = ii(e), r = e.length;
    for (let s = 0; s < r; s++) {
      const o = e[s];
      if (!is(o)) {
        t = wo(o, n);
        break;
      }
    }
  }
  if (!t)
    throw new Bf({ signature: e });
  return t;
}
function wa(e) {
  const t = [];
  if (typeof e == "string") {
    const n = Te(e), r = n.length;
    for (let s = 0; s < r; s++)
      t.push(st(n[s], { modifiers: ba }));
  } else {
    const n = ii(e), r = e.length;
    for (let s = 0; s < r; s++) {
      const o = e[s];
      if (is(o))
        continue;
      const i = Te(o), a = i.length;
      for (let c = 0; c < a; c++)
        t.push(st(i[c], { modifiers: ba, structs: n }));
    }
  }
  if (t.length === 0)
    throw new Lf({ params: e });
  return t;
}
function M(e, t, n) {
  const r = e[t.name];
  if (typeof r == "function")
    return r;
  const s = e[n];
  return typeof s == "function" ? s : (o) => t(e, o);
}
function Re(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new m1(e.type);
  return `${e.name}(${as(e.inputs, { includeName: t })})`;
}
function as(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => n1(n, { includeName: t })).join(t ? ", " : ",") : "";
}
function n1(e, { includeName: t }) {
  return e.type.startsWith("tuple") ? `(${as(e.components, { includeName: t })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "");
}
function Ve(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x");
}
function ne(e) {
  return Ve(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
const Yc = "2.45.1";
let $n = {
  getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) => t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
  version: `viem@${Yc}`
}, I = class yo extends Error {
  constructor(t, n = {}) {
    var a;
    const r = (() => {
      var c;
      return n.cause instanceof yo ? n.cause.details : (c = n.cause) != null && c.message ? n.cause.message : n.details;
    })(), s = n.cause instanceof yo && n.cause.docsPath || n.docsPath, o = (a = $n.getDocsUrl) == null ? void 0 : a.call($n, { ...n, docsPath: s }), i = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...o ? [`Docs: ${o}`] : [],
      ...r ? [`Details: ${r}`] : [],
      ...$n.version ? [`Version: ${$n.version}`] : []
    ].join(`
`);
    super(i, n.cause ? { cause: n.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseError"
    }), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.name = n.name ?? this.name, this.shortMessage = t, this.version = Yc;
  }
  walk(t) {
    return Jc(this, t);
  }
};
function Jc(e, t) {
  return t != null && t(e) ? e : e && typeof e == "object" && "cause" in e && e.cause !== void 0 ? Jc(e.cause, t) : t ? null : e;
}
class r1 extends I {
  constructor({ docsPath: t }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: t,
      name: "AbiConstructorNotFoundError"
    });
  }
}
class ya extends I {
  constructor({ docsPath: t }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: t,
      name: "AbiConstructorParamsNotFoundError"
    });
  }
}
class eu extends I {
  constructor({ data: t, params: n, size: r }) {
    super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${as(n, { includeName: !0 })})`,
        `Data:   ${t} (${r} bytes)`
      ],
      name: "AbiDecodingDataSizeTooSmallError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t, this.params = n, this.size = r;
  }
}
class lr extends I {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.', {
      name: "AbiDecodingZeroDataError"
    });
  }
}
class s1 extends I {
  constructor({ expectedLength: t, givenLength: n, type: r }) {
    super([
      `ABI encoding array length mismatch for type ${r}.`,
      `Expected length: ${t}`,
      `Given length: ${n}`
    ].join(`
`), { name: "AbiEncodingArrayLengthMismatchError" });
  }
}
class o1 extends I {
  constructor({ expectedSize: t, value: n }) {
    super(`Size of bytes "${n}" (bytes${ne(n)}) does not match expected size (bytes${t}).`, { name: "AbiEncodingBytesSizeMismatchError" });
  }
}
class i1 extends I {
  constructor({ expectedLength: t, givenLength: n }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${t}`,
      `Given length (values): ${n}`
    ].join(`
`), { name: "AbiEncodingLengthMismatchError" });
  }
}
class a1 extends I {
  constructor(t, { docsPath: n }) {
    super([
      `Arguments (\`args\`) were provided to "${t}", but "${t}" on the ABI does not contain any parameters (\`inputs\`).`,
      "Cannot encode error result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the inputs exist on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorInputsNotFoundError"
    });
  }
}
class xa extends I {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Error ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorNotFoundError"
    });
  }
}
class tu extends I {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded error signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = t;
  }
}
class c1 extends I {
  constructor({ docsPath: t }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: t,
      name: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class u1 extends I {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded event signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://4byte.sourcify.dev/?q=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventSignatureNotFoundError"
    });
  }
}
class va extends I {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventNotFoundError"
    });
  }
}
class an extends I {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionNotFoundError"
    });
  }
}
class nu extends I {
  constructor(t, { docsPath: n }) {
    super([
      `Function "${t}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class l1 extends I {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded function signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it.",
      `You can look up the signature here: https://4byte.sourcify.dev/?q=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionSignatureNotFoundError"
    });
  }
}
class d1 extends I {
  constructor(t, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${t.type}\` in \`${Re(t.abiItem)}\`, and`,
        `\`${n.type}\` in \`${Re(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ],
      name: "AbiItemAmbiguityError"
    });
  }
}
let f1 = class extends I {
  constructor({ expectedSize: t, givenSize: n }) {
    super(`Expected bytes${t}, got bytes${n}.`, {
      name: "BytesSizeMismatchError"
    });
  }
};
class zr extends I {
  constructor({ abiItem: t, data: n, params: r, size: s }) {
    super([
      `Data size of ${s} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${as(r, { includeName: !0 })})`,
        `Data:   ${n} (${s} bytes)`
      ],
      name: "DecodeLogDataMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t, this.data = n, this.params = r, this.size = s;
  }
}
class ci extends I {
  constructor({ abiItem: t, param: n }) {
    super([
      `Expected a topic for indexed event parameter${n.name ? ` "${n.name}"` : ""} on event "${Re(t, { includeName: !0 })}".`
    ].join(`
`), { name: "DecodeLogTopicsMismatch" }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t;
  }
}
class h1 extends I {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiEncodingType" });
  }
}
class p1 extends I {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiDecodingType" });
  }
}
let ru = class extends I {
  constructor(t) {
    super([`Value "${t}" is not a valid array.`].join(`
`), {
      name: "InvalidArrayError"
    });
  }
};
class m1 extends I {
  constructor(t) {
    super([
      `"${t}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`), { name: "InvalidDefinitionTypeError" });
  }
}
class b1 extends I {
  constructor(t) {
    super(`Filter type "${t}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
}
let su = class extends I {
  constructor({ offset: t, position: n, size: r }) {
    super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${r}).`, { name: "SliceOffsetOutOfBoundsError" });
  }
}, ou = class extends I {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`, { name: "SizeExceedsPaddingSizeError" });
  }
};
class Aa extends I {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`, { name: "InvalidBytesLengthError" });
  }
}
function wn(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == "string" ? pt(e, { dir: t, size: n }) : g1(e, { dir: t, size: n });
}
function pt(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  const r = e.replace("0x", "");
  if (r.length > n * 2)
    throw new ou({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "hex"
    });
  return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function g1(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  if (e.length > n)
    throw new ou({
      size: e.length,
      targetSize: n,
      type: "bytes"
    });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = t === "right";
    r[o ? s : n - s - 1] = e[o ? s : e.length - s - 1];
  }
  return r;
}
let ui = class extends I {
  constructor({ max: t, min: n, signed: r, size: s, value: o }) {
    super(`Number "${o}" is not in safe ${s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`, { name: "IntegerOutOfRangeError" });
  }
}, w1 = class extends I {
  constructor(t) {
    super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
      name: "InvalidBytesBooleanError"
    });
  }
};
class y1 extends I {
  constructor(t) {
    super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: "InvalidHexBooleanError" });
  }
}
let x1 = class extends I {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, { name: "SizeOverflowError" });
  }
};
function mt(e, { dir: t = "left" } = {}) {
  let n = typeof e == "string" ? e.replace("0x", "") : e, r = 0;
  for (let s = 0; s < n.length - 1 && n[t === "left" ? s : n.length - s - 1].toString() === "0"; s++)
    r++;
  return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`), `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n;
}
function ze(e, { size: t }) {
  if (ne(e) > t)
    throw new x1({
      givenSize: ne(e),
      maxSize: t
    });
}
function ue(e, t = {}) {
  const { signed: n } = t;
  t.size && ze(e, { size: t.size });
  const r = BigInt(e);
  if (!n)
    return r;
  const s = (e.length - 2) / 2, o = (1n << BigInt(s) * 8n - 1n) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function v1(e, t = {}) {
  let n = e;
  if (t.size && (ze(n, { size: t.size }), n = mt(n)), mt(n) === "0x00")
    return !1;
  if (mt(n) === "0x01")
    return !0;
  throw new y1(n);
}
function Fe(e, t = {}) {
  const n = ue(e, t), r = Number(n);
  if (!Number.isSafeInteger(r))
    throw new ui({
      max: `${Number.MAX_SAFE_INTEGER}`,
      min: `${Number.MIN_SAFE_INTEGER}`,
      signed: t.signed,
      size: t.size,
      value: `${n}n`
    });
  return r;
}
const A1 = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function We(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? U(e, t) : typeof e == "string" ? cn(e, t) : typeof e == "boolean" ? iu(e, t) : se(e, t);
}
function iu(e, t = {}) {
  const n = `0x${Number(e)}`;
  return typeof t.size == "number" ? (ze(n, { size: t.size }), wn(n, { size: t.size })) : n;
}
function se(e, t = {}) {
  let n = "";
  for (let s = 0; s < e.length; s++)
    n += A1[e[s]];
  const r = `0x${n}`;
  return typeof t.size == "number" ? (ze(r, { size: t.size }), wn(r, { dir: "right", size: t.size })) : r;
}
function U(e, t = {}) {
  const { signed: n, size: r } = t, s = BigInt(e);
  let o;
  r ? n ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if (o && s > o || s < i) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new ui({
      max: o ? `${o}${c}` : void 0,
      min: `${i}${c}`,
      signed: n,
      size: r,
      value: `${e}${c}`
    });
  }
  const a = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(16)}`;
  return r ? wn(a, { size: r }) : a;
}
const E1 = /* @__PURE__ */ new TextEncoder();
function cn(e, t = {}) {
  const n = E1.encode(e);
  return se(n, t);
}
const C1 = /* @__PURE__ */ new TextEncoder();
function yn(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? S1(e, t) : typeof e == "boolean" ? T1(e, t) : Ve(e) ? Ze(e, t) : $t(e, t);
}
function T1(e, t = {}) {
  const n = new Uint8Array(1);
  return n[0] = Number(e), typeof t.size == "number" ? (ze(n, { size: t.size }), wn(n, { size: t.size })) : n;
}
const Qe = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Ea(e) {
  if (e >= Qe.zero && e <= Qe.nine)
    return e - Qe.zero;
  if (e >= Qe.A && e <= Qe.F)
    return e - (Qe.A - 10);
  if (e >= Qe.a && e <= Qe.f)
    return e - (Qe.a - 10);
}
function Ze(e, t = {}) {
  let n = e;
  t.size && (ze(n, { size: t.size }), n = wn(n, { dir: "right", size: t.size }));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2, o = new Uint8Array(s);
  for (let i = 0, a = 0; i < s; i++) {
    const c = Ea(r.charCodeAt(a++)), u = Ea(r.charCodeAt(a++));
    if (c === void 0 || u === void 0)
      throw new I(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
    o[i] = c * 16 + u;
  }
  return o;
}
function S1(e, t) {
  const n = U(e, t);
  return Ze(n);
}
function $t(e, t = {}) {
  const n = C1.encode(e);
  return typeof t.size == "number" ? (ze(n, { size: t.size }), wn(n, { dir: "right", size: t.size })) : n;
}
const Tr = /* @__PURE__ */ BigInt(2 ** 32 - 1), Ca = /* @__PURE__ */ BigInt(32);
function k1(e, t = !1) {
  return t ? { h: Number(e & Tr), l: Number(e >> Ca & Tr) } : { h: Number(e >> Ca & Tr) | 0, l: Number(e & Tr) | 0 };
}
function P1(e, t = !1) {
  const n = e.length;
  let r = new Uint32Array(n), s = new Uint32Array(n);
  for (let o = 0; o < n; o++) {
    const { h: i, l: a } = k1(e[o], t);
    [r[o], s[o]] = [i, a];
  }
  return [r, s];
}
const $1 = (e, t, n) => e << n | t >>> 32 - n, B1 = (e, t, n) => t << n | e >>> 32 - n, I1 = (e, t, n) => t << n - 32 | e >>> 64 - n, N1 = (e, t, n) => e << n - 32 | t >>> 64 - n, Vt = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function L1(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function Ln(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error("positive integer expected, got " + e);
}
function Ft(e, ...t) {
  if (!L1(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function R1(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  Ln(e.outputLen), Ln(e.blockLen);
}
function un(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function au(e, t) {
  Ft(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function F1(e) {
  return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
}
function ln(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function _s(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Ue(e, t) {
  return e << 32 - t | e >>> t;
}
const O1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function _1(e) {
  return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
}
function M1(e) {
  for (let t = 0; t < e.length; t++)
    e[t] = _1(e[t]);
  return e;
}
const Ta = O1 ? (e) => e : M1;
function D1(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function cs(e) {
  return typeof e == "string" && (e = D1(e)), Ft(e), e;
}
function z1(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    Ft(s), t += s.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, s = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
class li {
}
function cu(e) {
  const t = (r) => e().update(cs(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function U1(e = 32) {
  if (Vt && typeof Vt.getRandomValues == "function")
    return Vt.getRandomValues(new Uint8Array(e));
  if (Vt && typeof Vt.randomBytes == "function")
    return Uint8Array.from(Vt.randomBytes(e));
  throw new Error("crypto.getRandomValues must be defined");
}
const j1 = BigInt(0), Bn = BigInt(1), q1 = BigInt(2), H1 = BigInt(7), G1 = BigInt(256), V1 = BigInt(113), uu = [], lu = [], du = [];
for (let e = 0, t = Bn, n = 1, r = 0; e < 24; e++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], uu.push(2 * (5 * r + n)), lu.push((e + 1) * (e + 2) / 2 % 64);
  let s = j1;
  for (let o = 0; o < 7; o++)
    t = (t << Bn ^ (t >> H1) * V1) % G1, t & q1 && (s ^= Bn << (Bn << /* @__PURE__ */ BigInt(o)) - Bn);
  du.push(s);
}
const fu = P1(du, !0), W1 = fu[0], Z1 = fu[1], Sa = (e, t, n) => n > 32 ? I1(e, t, n) : $1(e, t, n), ka = (e, t, n) => n > 32 ? N1(e, t, n) : B1(e, t, n);
function K1(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let i = 0; i < 10; i++)
      n[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const a = (i + 8) % 10, c = (i + 2) % 10, u = n[c], l = n[c + 1], d = Sa(u, l, 1) ^ n[a], f = ka(u, l, 1) ^ n[a + 1];
      for (let h = 0; h < 50; h += 10)
        e[i + h] ^= d, e[i + h + 1] ^= f;
    }
    let s = e[2], o = e[3];
    for (let i = 0; i < 24; i++) {
      const a = lu[i], c = Sa(s, o, a), u = ka(s, o, a), l = uu[i];
      s = e[l], o = e[l + 1], e[l] = c, e[l + 1] = u;
    }
    for (let i = 0; i < 50; i += 10) {
      for (let a = 0; a < 10; a++)
        n[a] = e[i + a];
      for (let a = 0; a < 10; a++)
        e[i + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    e[0] ^= W1[r], e[1] ^= Z1[r];
  }
  ln(n);
}
class di extends li {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, r, s = !1, o = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = s, this.rounds = o, Ln(r), !(0 < t && t < 200))
      throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = F1(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    Ta(this.state32), K1(this.state32, this.rounds), Ta(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    un(this), t = cs(t), Ft(t);
    const { blockLen: n, state: r } = this, s = t.length;
    for (let o = 0; o < s; ) {
      const i = Math.min(n - this.pos, s - o);
      for (let a = 0; a < i; a++)
        r[this.pos++] ^= t[o++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: s } = this;
    t[r] ^= n, (n & 128) !== 0 && r === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    un(this, !1), Ft(t), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let s = 0, o = t.length; s < o; ) {
      this.posOut >= r && this.keccak();
      const i = Math.min(r - this.posOut, o - s);
      t.set(n.subarray(this.posOut, this.posOut + i), s), this.posOut += i, s += i;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Ln(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (au(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, ln(this.state);
  }
  _cloneInto(t) {
    const { blockLen: n, suffix: r, outputLen: s, rounds: o, enableXOF: i } = this;
    return t || (t = new di(n, r, s, i, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = r, t.outputLen = s, t.enableXOF = i, t.destroyed = this.destroyed, t;
  }
}
const Q1 = (e, t, n) => cu(() => new di(t, e, n)), hu = Q1(1, 136, 256 / 8);
function ie(e, t) {
  const n = t || "hex", r = hu(Ve(e, { strict: !1 }) ? yn(e) : e);
  return n === "bytes" ? r : We(r);
}
const X1 = (e) => ie(yn(e));
function Y1(e) {
  return X1(e);
}
function J1(e) {
  let t = !0, n = "", r = 0, s = "", o = !1;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (["(", ")", ","].includes(a) && (t = !0), a === "(" && r++, a === ")" && r--, !!t) {
      if (r === 0) {
        if (a === " " && ["event", "function", ""].includes(s))
          s = "";
        else if (s += a, a === ")") {
          o = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        e[i - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
        continue;
      }
      s += a, n += a;
    }
  }
  if (!o)
    throw new I("Unable to normalize signature.");
  return s;
}
const eh = (e) => {
  const t = typeof e == "string" ? e : Dr(e);
  return J1(t);
};
function pu(e) {
  return Y1(eh(e));
}
const us = pu;
let bt = class extends I {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart."
      ],
      name: "InvalidAddressError"
    });
  }
}, xn = class extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = t;
  }
  get(t) {
    const n = super.get(t);
    return super.has(t) && n !== void 0 && (this.delete(t), super.set(t, n)), n;
  }
  set(t, n) {
    if (super.set(t, n), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
};
const Ms = /* @__PURE__ */ new xn(8192);
function dr(e, t) {
  if (Ms.has(`${e}.${t}`))
    return Ms.get(`${e}.${t}`);
  const n = e.substring(2).toLowerCase(), r = ie($t(n), "bytes"), s = n.split("");
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && s[i] && (s[i] = s[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && s[i + 1] && (s[i + 1] = s[i + 1].toUpperCase());
  const o = `0x${s.join("")}`;
  return Ms.set(`${e}.${t}`, o), o;
}
function Rn(e, t) {
  if (!Ie(e, { strict: !1 }))
    throw new bt({ address: e });
  return dr(e, t);
}
const th = /^0x[a-fA-F0-9]{40}$/, Ds = /* @__PURE__ */ new xn(8192);
function Ie(e, t) {
  const { strict: n = !0 } = t ?? {}, r = `${e}.${n}`;
  if (Ds.has(r))
    return Ds.get(r);
  const s = th.test(e) ? e.toLowerCase() === e ? !0 : n ? dr(e) === e : !0 : !1;
  return Ds.set(r, s), s;
}
function le(e) {
  return typeof e[0] == "string" ? vn(e) : nh(e);
}
function nh(e) {
  let t = 0;
  for (const s of e)
    t += s.length;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e)
    n.set(s, r), r += s.length;
  return n;
}
function vn(e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
function dn(e, t, n, { strict: r } = {}) {
  return Ve(e, { strict: !1 }) ? xo(e, t, n, {
    strict: r
  }) : gu(e, t, n, {
    strict: r
  });
}
function mu(e, t) {
  if (typeof t == "number" && t > 0 && t > ne(e) - 1)
    throw new su({
      offset: t,
      position: "start",
      size: ne(e)
    });
}
function bu(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && ne(e) !== n - t)
    throw new su({
      offset: n,
      position: "end",
      size: ne(e)
    });
}
function gu(e, t, n, { strict: r } = {}) {
  mu(e, t);
  const s = e.slice(t, n);
  return r && bu(s, t, n), s;
}
function xo(e, t, n, { strict: r } = {}) {
  mu(e, t);
  const s = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return r && bu(s, t, n), s;
}
const rh = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, wu = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function Ut(e, t) {
  if (e.length !== t.length)
    throw new i1({
      expectedLength: e.length,
      givenLength: t.length
    });
  const n = sh({
    params: e,
    values: t
  }), r = hi(n);
  return r.length === 0 ? "0x" : r;
}
function sh({ params: e, values: t }) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    n.push(fi({ param: e[r], value: t[r] }));
  return n;
}
function fi({ param: e, value: t }) {
  const n = pi(e.type);
  if (n) {
    const [r, s] = n;
    return ih(t, { length: r, param: { ...e, type: s } });
  }
  if (e.type === "tuple")
    return dh(t, {
      param: e
    });
  if (e.type === "address")
    return oh(t);
  if (e.type === "bool")
    return ch(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    const r = e.type.startsWith("int"), [, , s = "256"] = wu.exec(e.type) ?? [];
    return uh(t, {
      signed: r,
      size: Number(s)
    });
  }
  if (e.type.startsWith("bytes"))
    return ah(t, { param: e });
  if (e.type === "string")
    return lh(t);
  throw new h1(e.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function hi(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? t += 32 : t += ne(a);
  }
  const n = [], r = [];
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? (n.push(U(t + s, { size: 32 })), r.push(a), s += ne(a)) : n.push(a);
  }
  return le([...n, ...r]);
}
function oh(e) {
  if (!Ie(e))
    throw new bt({ address: e });
  return { dynamic: !1, encoded: pt(e.toLowerCase()) };
}
function ih(e, { length: t, param: n }) {
  const r = t === null;
  if (!Array.isArray(e))
    throw new ru(e);
  if (!r && e.length !== t)
    throw new s1({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`
    });
  let s = !1;
  const o = [];
  for (let i = 0; i < e.length; i++) {
    const a = fi({ param: n, value: e[i] });
    a.dynamic && (s = !0), o.push(a);
  }
  if (r || s) {
    const i = hi(o);
    if (r) {
      const a = U(o.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: o.length > 0 ? le([a, i]) : a
      };
    }
    if (s)
      return { dynamic: !0, encoded: i };
  }
  return {
    dynamic: !1,
    encoded: le(o.map(({ encoded: i }) => i))
  };
}
function ah(e, { param: t }) {
  const [, n] = t.type.split("bytes"), r = ne(e);
  if (!n) {
    let s = e;
    return r % 32 !== 0 && (s = pt(s, {
      dir: "right",
      size: Math.ceil((e.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: le([pt(U(r, { size: 32 })), s])
    };
  }
  if (r !== Number.parseInt(n, 10))
    throw new o1({
      expectedSize: Number.parseInt(n, 10),
      value: e
    });
  return { dynamic: !1, encoded: pt(e, { dir: "right" }) };
}
function ch(e) {
  if (typeof e != "boolean")
    throw new I(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: pt(iu(e)) };
}
function uh(e, { signed: t, size: n = 256 }) {
  if (typeof n == "number") {
    const r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n, s = t ? -r - 1n : 0n;
    if (e > r || e < s)
      throw new ui({
        max: r.toString(),
        min: s.toString(),
        signed: t,
        size: n / 8,
        value: e.toString()
      });
  }
  return {
    dynamic: !1,
    encoded: U(e, {
      size: 32,
      signed: t
    })
  };
}
function lh(e) {
  const t = cn(e), n = Math.ceil(ne(t) / 32), r = [];
  for (let s = 0; s < n; s++)
    r.push(pt(dn(t, s * 32, (s + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: le([
      pt(U(ne(t), { size: 32 })),
      ...r
    ])
  };
}
function dh(e, { param: t }) {
  let n = !1;
  const r = [];
  for (let s = 0; s < t.components.length; s++) {
    const o = t.components[s], i = Array.isArray(e) ? s : o.name, a = fi({
      param: o,
      value: e[i]
    });
    r.push(a), a.dynamic && (n = !0);
  }
  return {
    dynamic: n,
    encoded: n ? hi(r) : le(r.map(({ encoded: s }) => s))
  };
}
function pi(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? (
    // Return `null` if the array is dynamic.
    [t[2] ? Number(t[2]) : null, t[1]]
  ) : void 0;
}
const fr = (e) => dn(pu(e), 0, 4);
function jt(e) {
  const { abi: t, args: n = [], name: r } = e, s = Ve(r, { strict: !1 }), o = t.filter((a) => s ? a.type === "function" ? fr(a) === r : a.type === "event" ? us(a) === r : !1 : "name" in a && a.name === r);
  if (o.length === 0)
    return;
  if (o.length === 1)
    return o[0];
  let i;
  for (const a of o) {
    if (!("inputs" in a))
      continue;
    if (!n || n.length === 0) {
      if (!a.inputs || a.inputs.length === 0)
        return a;
      continue;
    }
    if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length)
      continue;
    if (n.every((u, l) => {
      const d = "inputs" in a && a.inputs[l];
      return d ? vo(u, d) : !1;
    })) {
      if (i && "inputs" in i && i.inputs) {
        const u = yu(a.inputs, i.inputs, n);
        if (u)
          throw new d1({
            abiItem: a,
            type: u[0]
          }, {
            abiItem: i,
            type: u[1]
          });
      }
      i = a;
    }
  }
  return i || o[0];
}
function vo(e, t) {
  const n = typeof e, r = t.type;
  switch (r) {
    case "address":
      return Ie(e, { strict: !1 });
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in t ? Object.values(t.components).every((s, o) => n === "object" && vo(Object.values(e)[o], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every((s) => vo(s, {
        ...t,
        // Pop off `[]` or `[M]` from end of type
        type: r.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function yu(e, t, n) {
  for (const r in e) {
    const s = e[r], o = t[r];
    if (s.type === "tuple" && o.type === "tuple" && "components" in s && "components" in o)
      return yu(s.components, o.components, n[r]);
    const i = [s.type, o.type];
    if (i.includes("address") && i.includes("bytes20") ? !0 : i.includes("address") && i.includes("string") ? Ie(n[r], { strict: !1 }) : i.includes("address") && i.includes("bytes") ? Ie(n[r], { strict: !1 }) : !1)
      return i;
  }
}
const Pa = "/docs/contract/encodeEventTopics";
function hr(e) {
  var c;
  const { abi: t, eventName: n, args: r } = e;
  let s = t[0];
  if (n) {
    const u = jt({ abi: t, name: n });
    if (!u)
      throw new va(n, { docsPath: Pa });
    s = u;
  }
  if (s.type !== "event")
    throw new va(void 0, { docsPath: Pa });
  const o = Re(s), i = us(o);
  let a = [];
  if (r && "inputs" in s) {
    const u = (c = s.inputs) == null ? void 0 : c.filter((d) => "indexed" in d && d.indexed), l = Array.isArray(r) ? r : Object.values(r).length > 0 ? (u == null ? void 0 : u.map((d) => r[d.name])) ?? [] : [];
    l.length > 0 && (a = (u == null ? void 0 : u.map((d, f) => Array.isArray(l[f]) ? l[f].map((h, p) => $a({ param: d, value: l[f][p] })) : typeof l[f] < "u" && l[f] !== null ? $a({ param: d, value: l[f] }) : null)) ?? []);
  }
  return [i, ...a];
}
function $a({ param: e, value: t }) {
  if (e.type === "string" || e.type === "bytes")
    return ie(yn(t));
  if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new b1(e.type);
  return Ut([e], [t]);
}
function ls(e, { method: t }) {
  var r, s;
  const n = {};
  return e.transport.type === "fallback" && ((s = (r = e.transport).onResponse) == null || s.call(r, ({ method: o, response: i, status: a, transport: c }) => {
    a === "success" && t === o && (n[i] = c.request);
  })), ((o) => n[o] || e.request);
}
async function xu(e, t) {
  const { address: n, abi: r, args: s, eventName: o, fromBlock: i, strict: a, toBlock: c } = t, u = ls(e, {
    method: "eth_newFilter"
  }), l = o ? hr({
    abi: r,
    args: s,
    eventName: o
  }) : void 0, d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: n,
        fromBlock: typeof i == "bigint" ? U(i) : i,
        toBlock: typeof c == "bigint" ? U(c) : c,
        topics: l
      }
    ]
  });
  return {
    abi: r,
    args: s,
    eventName: o,
    id: d,
    request: u(d),
    strict: !!a,
    type: "event"
  };
}
function Y(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
const Ba = "/docs/contract/encodeFunctionData";
function fh(e) {
  const { abi: t, args: n, functionName: r } = e;
  let s = t[0];
  if (r) {
    const o = jt({
      abi: t,
      args: n,
      name: r
    });
    if (!o)
      throw new an(r, { docsPath: Ba });
    s = o;
  }
  if (s.type !== "function")
    throw new an(void 0, { docsPath: Ba });
  return {
    abi: [s],
    functionName: fr(Re(s))
  };
}
function de(e) {
  const { args: t } = e, { abi: n, functionName: r } = (() => {
    var a;
    return e.abi.length === 1 && ((a = e.functionName) != null && a.startsWith("0x")) ? e : fh(e);
  })(), s = n[0], o = r, i = "inputs" in s && s.inputs ? Ut(s.inputs, t ?? []) : void 0;
  return vn([o, i ?? "0x"]);
}
const hh = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, vu = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, ph = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
let Ia = class extends I {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`, {
      name: "NegativeOffsetError"
    });
  }
}, Au = class extends I {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`, { name: "PositionOutOfBoundsError" });
  }
}, mh = class extends I {
  constructor({ count: t, limit: n }) {
    super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`, { name: "RecursiveReadLimitExceededError" });
  }
};
const bh = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new mh({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Au({
        length: this.bytes.length,
        position: e
      });
  },
  decrementPosition(e) {
    if (e < 0)
      throw new Ia({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), this.position = t;
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0)
      throw new Ia({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), this.position = t;
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
  },
  inspectUint8(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2);
  },
  inspectUint32(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length;
  },
  pushUint8(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2;
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3;
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4;
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    const n = this.inspectBytes(e);
    return this.position += t ?? e, n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint8();
    return this.position += 1, e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint16();
    return this.position += 2, e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint24();
    return this.position += 3, e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint32();
    return this.position += 4, e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    const t = this.position;
    return this.assertPosition(e), this.position = e, () => this.position = t;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
  }
};
function mi(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(bh);
  return n.bytes = e, n.dataView = new DataView(e.buffer ?? e, e.byteOffset, e.byteLength), n.positionReadCount = /* @__PURE__ */ new Map(), n.recursiveReadLimit = t, n;
}
function gh(e, t = {}) {
  typeof t.size < "u" && ze(e, { size: t.size });
  const n = se(e, t);
  return ue(n, t);
}
function wh(e, t = {}) {
  let n = e;
  if (typeof t.size < "u" && (ze(n, { size: t.size }), n = mt(n)), n.length > 1 || n[0] > 1)
    throw new w1(n);
  return !!n[0];
}
function nt(e, t = {}) {
  typeof t.size < "u" && ze(e, { size: t.size });
  const n = se(e, t);
  return Fe(n, t);
}
function yh(e, t = {}) {
  let n = e;
  return typeof t.size < "u" && (ze(n, { size: t.size }), n = mt(n, { dir: "right" })), new TextDecoder().decode(n);
}
function pr(e, t) {
  const n = typeof t == "string" ? Ze(t) : t, r = mi(n);
  if (ne(n) === 0 && e.length > 0)
    throw new lr();
  if (ne(t) && ne(t) < 32)
    throw new eu({
      data: typeof t == "string" ? t : se(t),
      params: e,
      size: ne(t)
    });
  let s = 0;
  const o = [];
  for (let i = 0; i < e.length; ++i) {
    const a = e[i];
    r.setPosition(s);
    const [c, u] = tn(r, a, {
      staticPosition: 0
    });
    s += u, o.push(c);
  }
  return o;
}
function tn(e, t, { staticPosition: n }) {
  const r = pi(t.type);
  if (r) {
    const [s, o] = r;
    return vh(e, { ...t, type: o }, { length: s, staticPosition: n });
  }
  if (t.type === "tuple")
    return Th(e, t, { staticPosition: n });
  if (t.type === "address")
    return xh(e);
  if (t.type === "bool")
    return Ah(e);
  if (t.type.startsWith("bytes"))
    return Eh(e, t, { staticPosition: n });
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return Ch(e, t);
  if (t.type === "string")
    return Sh(e, { staticPosition: n });
  throw new p1(t.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
const Na = 32, Ao = 32;
function xh(e) {
  const t = e.readBytes(32);
  return [dr(se(gu(t, -20))), 32];
}
function vh(e, t, { length: n, staticPosition: r }) {
  if (!n) {
    const i = nt(e.readBytes(Ao)), a = r + i, c = a + Na;
    e.setPosition(a);
    const u = nt(e.readBytes(Na)), l = Fn(t);
    let d = 0;
    const f = [];
    for (let h = 0; h < u; ++h) {
      e.setPosition(c + (l ? h * 32 : d));
      const [p, m] = tn(e, t, {
        staticPosition: c
      });
      d += m, f.push(p);
    }
    return e.setPosition(r + 32), [f, 32];
  }
  if (Fn(t)) {
    const i = nt(e.readBytes(Ao)), a = r + i, c = [];
    for (let u = 0; u < n; ++u) {
      e.setPosition(a + u * 32);
      const [l] = tn(e, t, {
        staticPosition: a
      });
      c.push(l);
    }
    return e.setPosition(r + 32), [c, 32];
  }
  let s = 0;
  const o = [];
  for (let i = 0; i < n; ++i) {
    const [a, c] = tn(e, t, {
      staticPosition: r + s
    });
    s += c, o.push(a);
  }
  return [o, s];
}
function Ah(e) {
  return [wh(e.readBytes(32), { size: 32 }), 32];
}
function Eh(e, t, { staticPosition: n }) {
  const [r, s] = t.type.split("bytes");
  if (!s) {
    const i = nt(e.readBytes(32));
    e.setPosition(n + i);
    const a = nt(e.readBytes(32));
    if (a === 0)
      return e.setPosition(n + 32), ["0x", 32];
    const c = e.readBytes(a);
    return e.setPosition(n + 32), [se(c), 32];
  }
  return [se(e.readBytes(Number.parseInt(s, 10), 32)), 32];
}
function Ch(e, t) {
  const n = t.type.startsWith("int"), r = Number.parseInt(t.type.split("int")[1] || "256", 10), s = e.readBytes(32);
  return [
    r > 48 ? gh(s, { signed: n }) : nt(s, { signed: n }),
    32
  ];
}
function Th(e, t, { staticPosition: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: i }) => !i), s = r ? [] : {};
  let o = 0;
  if (Fn(t)) {
    const i = nt(e.readBytes(Ao)), a = n + i;
    for (let c = 0; c < t.components.length; ++c) {
      const u = t.components[c];
      e.setPosition(a + o);
      const [l, d] = tn(e, u, {
        staticPosition: a
      });
      o += d, s[r ? c : u == null ? void 0 : u.name] = l;
    }
    return e.setPosition(n + 32), [s, 32];
  }
  for (let i = 0; i < t.components.length; ++i) {
    const a = t.components[i], [c, u] = tn(e, a, {
      staticPosition: n
    });
    s[r ? i : a == null ? void 0 : a.name] = c, o += u;
  }
  return [s, o];
}
function Sh(e, { staticPosition: t }) {
  const n = nt(e.readBytes(32)), r = t + n;
  e.setPosition(r);
  const s = nt(e.readBytes(32));
  if (s === 0)
    return e.setPosition(t + 32), ["", 32];
  const o = e.readBytes(s, 32), i = yh(mt(o));
  return e.setPosition(t + 32), [i, 32];
}
function Fn(e) {
  var r;
  const { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]"))
    return !0;
  if (t === "tuple")
    return (r = e.components) == null ? void 0 : r.some(Fn);
  const n = pi(e.type);
  return !!(n && Fn({ ...e, type: n[1] }));
}
function kh(e) {
  const { abi: t, data: n } = e, r = dn(n, 0, 4);
  if (r === "0x")
    throw new lr();
  const o = [...t || [], vu, ph].find((i) => i.type === "error" && r === fr(Re(i)));
  if (!o)
    throw new tu(r, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: o,
    args: "inputs" in o && o.inputs && o.inputs.length > 0 ? pr(o.inputs, dn(n, 4)) : void 0,
    errorName: o.name
  };
}
const be = (e, t, n) => JSON.stringify(e, (r, s) => typeof s == "bigint" ? s.toString() : s, n);
function Eu({ abiItem: e, args: t, includeFunctionName: n = !0, includeName: r = !1 }) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${n ? e.name : ""}(${e.inputs.map((s, o) => `${r && s.name ? `${s.name}: ` : ""}${typeof t[o] == "object" ? be(t[o]) : t[o]}`).join(", ")})`;
}
const Ph = {
  gwei: 9,
  wei: 18
}, $h = {
  ether: -9,
  wei: 9
};
function Ur(e, t) {
  let n = e.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), n = n.padStart(t, "0");
  let [s, o] = [
    n.slice(0, n.length - t),
    n.slice(n.length - t)
  ];
  return o = o.replace(/(0+)$/, ""), `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`;
}
function bi(e, t = "wei") {
  return Ur(e, Ph[t]);
}
function ve(e, t = "wei") {
  return Ur(e, $h[t]);
}
class Bh extends I {
  constructor({ address: t }) {
    super(`State for account "${t}" is set multiple times.`, {
      name: "AccountStateConflictError"
    });
  }
}
class Ih extends I {
  constructor() {
    super("state and stateDiff are set on the same account.", {
      name: "StateAssignmentConflictError"
    });
  }
}
function La(e) {
  return e.reduce((t, { slot: n, value: r }) => `${t}        ${n}: ${r}
`, "");
}
function Nh(e) {
  return e.reduce((t, { address: n, ...r }) => {
    let s = `${t}    ${n}:
`;
    return r.nonce && (s += `      nonce: ${r.nonce}
`), r.balance && (s += `      balance: ${r.balance}
`), r.code && (s += `      code: ${r.code}
`), r.state && (s += `      state:
`, s += La(r.state)), r.stateDiff && (s += `      stateDiff:
`, s += La(r.stateDiff)), s;
  }, `  State Override:
`).slice(0, -1);
}
function mr(e) {
  const t = Object.entries(e).map(([r, s]) => s === void 0 || s === !1 ? null : [r, s]).filter(Boolean), n = t.reduce((r, [s]) => Math.max(r, s.length), 0);
  return t.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class Lh extends I {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        mr(t),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
        "- an EIP-7702 Transaction with `authorizationList`, or",
        "- a Legacy Transaction with `gasPrice`"
      ],
      name: "InvalidSerializableTransactionError"
    });
  }
}
class Rh extends I {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: l, to: d, value: f }) {
    var p;
    const h = mr({
      chain: s && `${s == null ? void 0 : s.name} (id: ${s == null ? void 0 : s.id})`,
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof f < "u" && `${bi(f)} ${((p = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : p.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${ve(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${ve(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${ve(u)} gwei`,
      nonce: l
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Request Arguments:",
        h
      ].filter(Boolean),
      name: "TransactionExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class Cu extends I {
  constructor({ blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o }) {
    let i = "Transaction";
    r && o !== void 0 && (i = `Transaction at block time "${r}" at index "${o}"`), t && o !== void 0 && (i = `Transaction at block hash "${t}" at index "${o}"`), n && o !== void 0 && (i = `Transaction at block number "${n}" at index "${o}"`), s && (i = `Transaction with hash "${s}"`), super(`${i} could not be found.`, {
      name: "TransactionNotFoundError"
    });
  }
}
class Tu extends I {
  constructor({ hash: t }) {
    super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`, {
      name: "TransactionReceiptNotFoundError"
    });
  }
}
class Su extends I {
  constructor({ receipt: t }) {
    super(`Transaction with hash "${t.transactionHash}" reverted.`, {
      metaMessages: [
        'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
        " ",
        "You can attempt to extract the revert reason by:",
        "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
        "- using the `call` Action with raw `data`"
      ],
      name: "TransactionReceiptRevertedError"
    }), Object.defineProperty(this, "receipt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.receipt = t;
  }
}
class Fh extends I {
  constructor({ hash: t }) {
    super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`, { name: "WaitForTransactionReceiptTimeoutError" });
  }
}
const Oh = (e) => e, ku = (e) => e;
class Pu extends I {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: l, to: d, value: f, stateOverride: h }) {
    var b;
    const p = n ? Y(n) : void 0;
    let m = mr({
      from: p == null ? void 0 : p.address,
      to: d,
      value: typeof f < "u" && `${bi(f)} ${((b = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : b.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${ve(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${ve(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${ve(u)} gwei`,
      nonce: l
    });
    h && (m += `
${Nh(h)}`), super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Raw Call Arguments:",
        m
      ].filter(Boolean),
      name: "CallExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class $u extends I {
  constructor(t, { abi: n, args: r, contractAddress: s, docsPath: o, functionName: i, sender: a }) {
    const c = jt({ abi: n, args: r, name: i }), u = c ? Eu({
      abiItem: c,
      args: r,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, l = c ? Re(c, { includeName: !0 }) : void 0, d = mr({
      address: s && Oh(s),
      function: l,
      args: u && u !== "()" && `${[...Array((i == null ? void 0 : i.length) ?? 0).keys()].map(() => " ").join("")}${u}`,
      sender: a
    });
    super(t.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
      cause: t,
      docsPath: o,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        d && "Contract Call:",
        d
      ].filter(Boolean),
      name: "ContractFunctionExecutionError"
    }), Object.defineProperty(this, "abi", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "contractAddress", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "formattedArgs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "functionName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "sender", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abi = n, this.args = r, this.cause = t, this.contractAddress = s, this.functionName = i, this.sender = a;
  }
}
class Eo extends I {
  constructor({ abi: t, data: n, functionName: r, message: s }) {
    let o, i, a, c;
    if (n && n !== "0x")
      try {
        i = kh({ abi: t, data: n });
        const { abiItem: l, errorName: d, args: f } = i;
        if (d === "Error")
          c = f[0];
        else if (d === "Panic") {
          const [h] = f;
          c = hh[h];
        } else {
          const h = l ? Re(l, { includeName: !0 }) : void 0, p = l && f ? Eu({
            abiItem: l,
            args: f,
            includeFunctionName: !1,
            includeName: !1
          }) : void 0;
          a = [
            h ? `Error: ${h}` : "",
            p && p !== "()" ? `       ${[...Array((d == null ? void 0 : d.length) ?? 0).keys()].map(() => " ").join("")}${p}` : ""
          ];
        }
      } catch (l) {
        o = l;
      }
    else s && (c = s);
    let u;
    o instanceof tu && (u = o.signature, a = [
      `Unable to decode signature "${u}" as it was not found on the provided ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${u}.`
    ]), super(c && c !== "execution reverted" || u ? [
      `The contract function "${r}" reverted with the following ${u ? "signature" : "reason"}:`,
      c || u
    ].join(`
`) : `The contract function "${r}" reverted.`, {
      cause: o,
      metaMessages: a,
      name: "ContractFunctionRevertedError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "raw", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "reason", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = i, this.raw = n, this.reason = c, this.signature = u;
  }
}
class _h extends I {
  constructor({ functionName: t }) {
    super(`The contract function "${t}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${t}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ],
      name: "ContractFunctionZeroDataError"
    });
  }
}
class Mh extends I {
  constructor({ factory: t }) {
    super(`Deployment for counterfactual contract call failed${t ? ` for factory "${t}".` : ""}`, {
      metaMessages: [
        "Please ensure:",
        "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
        "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."
      ],
      name: "CounterfactualDeploymentFailedError"
    });
  }
}
class ds extends I {
  constructor({ data: t, message: n }) {
    super(n || "", { name: "RawContractError" }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t;
  }
}
class Bu extends I {
  constructor({ body: t, cause: n, details: r, headers: s, status: o, url: i }) {
    super("HTTP request failed.", {
      cause: n,
      details: r,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${ku(i)}`,
        t && `Request body: ${be(t)}`
      ].filter(Boolean),
      name: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = t, this.headers = s, this.status = o, this.url = i;
  }
}
class Iu extends I {
  constructor({ body: t, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${ku(r)}`, `Request body: ${be(t)}`],
      name: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = n.code, this.data = n.data, this.url = r;
  }
}
const Dh = -1;
class Ce extends I {
  constructor(t, { code: n, docsPath: r, metaMessages: s, name: o, shortMessage: i }) {
    super(i, {
      cause: t,
      docsPath: r,
      metaMessages: s || (t == null ? void 0 : t.metaMessages),
      name: o || "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = o || t.name, this.code = t instanceof Iu ? t.code : n ?? Dh;
  }
}
class ke extends Ce {
  constructor(t, n) {
    super(t, n), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = n.data;
  }
}
class On extends Ce {
  constructor(t) {
    super(t, {
      code: On.code,
      name: "ParseRpcError",
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    });
  }
}
Object.defineProperty(On, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class _n extends Ce {
  constructor(t) {
    super(t, {
      code: _n.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object."
    });
  }
}
Object.defineProperty(_n, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class Mn extends Ce {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: Mn.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${n ? ` "${n}"` : ""} does not exist / is not available.`
    });
  }
}
Object.defineProperty(Mn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class Dn extends Ce {
  constructor(t) {
    super(t, {
      code: Dn.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(Dn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class Ot extends Ce {
  constructor(t) {
    super(t, {
      code: Ot.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received."
    });
  }
}
Object.defineProperty(Ot, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class gt extends Ce {
  constructor(t) {
    super(t, {
      code: gt.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(gt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class zn extends Ce {
  constructor(t) {
    super(t, {
      code: zn.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(zn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class Un extends Ce {
  constructor(t) {
    super(t, {
      code: Un.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available."
    });
  }
}
Object.defineProperty(Un, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class jn extends Ce {
  constructor(t) {
    super(t, {
      code: jn.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed."
    });
  }
}
Object.defineProperty(jn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class St extends Ce {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: St.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${n ? ` "${n}"` : ""} is not supported.`
    });
  }
}
Object.defineProperty(St, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class fn extends Ce {
  constructor(t) {
    super(t, {
      code: fn.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit."
    });
  }
}
Object.defineProperty(fn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class qn extends Ce {
  constructor(t) {
    super(t, {
      code: qn.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported."
    });
  }
}
Object.defineProperty(qn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class nn extends ke {
  constructor(t) {
    super(t, {
      code: nn.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request."
    });
  }
}
Object.defineProperty(nn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class Hn extends ke {
  constructor(t) {
    super(t, {
      code: Hn.code,
      name: "UnauthorizedProviderError",
      shortMessage: "The requested method and/or account has not been authorized by the user."
    });
  }
}
Object.defineProperty(Hn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class Gn extends ke {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: Gn.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${n ? ` " ${n}"` : ""}.`
    });
  }
}
Object.defineProperty(Gn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class Vn extends ke {
  constructor(t) {
    super(t, {
      code: Vn.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains."
    });
  }
}
Object.defineProperty(Vn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class Wn extends ke {
  constructor(t) {
    super(t, {
      code: Wn.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain."
    });
  }
}
Object.defineProperty(Wn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class Zn extends ke {
  constructor(t) {
    super(t, {
      code: Zn.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain."
    });
  }
}
Object.defineProperty(Zn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class hn extends ke {
  constructor(t) {
    super(t, {
      code: hn.code,
      name: "UnsupportedNonOptionalCapabilityError",
      shortMessage: "This Wallet does not support a capability that was not marked as optional."
    });
  }
}
Object.defineProperty(hn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5700
});
class Kn extends ke {
  constructor(t) {
    super(t, {
      code: Kn.code,
      name: "UnsupportedChainIdError",
      shortMessage: "This Wallet does not support the requested chain ID."
    });
  }
}
Object.defineProperty(Kn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5710
});
class Qn extends ke {
  constructor(t) {
    super(t, {
      code: Qn.code,
      name: "DuplicateIdError",
      shortMessage: "There is already a bundle submitted with this ID."
    });
  }
}
Object.defineProperty(Qn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5720
});
class Xn extends ke {
  constructor(t) {
    super(t, {
      code: Xn.code,
      name: "UnknownBundleIdError",
      shortMessage: "This bundle id is unknown / has not been submitted"
    });
  }
}
Object.defineProperty(Xn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5730
});
class Yn extends ke {
  constructor(t) {
    super(t, {
      code: Yn.code,
      name: "BundleTooLargeError",
      shortMessage: "The call bundle is too large for the Wallet to process."
    });
  }
}
Object.defineProperty(Yn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5740
});
class Jn extends ke {
  constructor(t) {
    super(t, {
      code: Jn.code,
      name: "AtomicReadyWalletRejectedUpgradeError",
      shortMessage: "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."
    });
  }
}
Object.defineProperty(Jn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5750
});
class pn extends ke {
  constructor(t) {
    super(t, {
      code: pn.code,
      name: "AtomicityNotSupportedError",
      shortMessage: "The wallet does not support atomic execution but the request requires it."
    });
  }
}
Object.defineProperty(pn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5760
});
class zh extends Ce {
  constructor(t) {
    super(t, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred."
    });
  }
}
const Uh = 3;
function _t(e, { abi: t, address: n, args: r, docsPath: s, functionName: o, sender: i }) {
  const a = e instanceof ds ? e : e instanceof I ? e.walk((p) => "data" in p) || e.walk() : {}, { code: c, data: u, details: l, message: d, shortMessage: f } = a, h = e instanceof lr ? new _h({ functionName: o }) : [Uh, Ot.code].includes(c) && (u || l || d || f) || c === gt.code && l === "execution reverted" && u ? new Eo({
    abi: t,
    data: typeof u == "object" ? u.data : u,
    functionName: o,
    message: a instanceof Iu ? l : f ?? d
  }) : e;
  return new $u(h, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: s,
    functionName: o,
    sender: i
  });
}
function jh(e) {
  const t = ie(`0x${e.substring(4)}`).substring(26);
  return dr(`0x${t}`);
}
async function qh({ hash: e, signature: t }) {
  const n = Ve(e) ? e : We(e), { secp256k1: r } = await Promise.resolve().then(() => Qg);
  return `0x${(() => {
    if (typeof t == "object" && "r" in t && "s" in t) {
      const { r: u, s: l, v: d, yParity: f } = t, h = Number(f ?? d), p = Ra(h);
      return new r.Signature(ue(u), ue(l)).addRecoveryBit(p);
    }
    const i = Ve(t) ? t : We(t);
    if (ne(i) !== 65)
      throw new Error("invalid signature length");
    const a = Fe(`0x${i.slice(130)}`), c = Ra(a);
    return r.Signature.fromCompact(i.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(n.substring(2)).toHex(!1)}`;
}
function Ra(e) {
  if (e === 0 || e === 1)
    return e;
  if (e === 27)
    return 0;
  if (e === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function Nu({ hash: e, signature: t }) {
  return jh(await qh({ hash: e, signature: t }));
}
function Hh(e, t = "hex") {
  const n = Lu(e), r = mi(new Uint8Array(n.length));
  return n.encode(r), t === "hex" ? se(r.bytes) : r.bytes;
}
function Lu(e) {
  return Array.isArray(e) ? Gh(e.map((t) => Lu(t))) : Vh(e);
}
function Gh(e) {
  const t = e.reduce((s, o) => s + o.length, 0), n = Ru(t);
  return {
    length: t <= 55 ? 1 + t : 1 + n + t,
    encode(s) {
      t <= 55 ? s.pushByte(192 + t) : (s.pushByte(247 + n), n === 1 ? s.pushUint8(t) : n === 2 ? s.pushUint16(t) : n === 3 ? s.pushUint24(t) : s.pushUint32(t));
      for (const { encode: o } of e)
        o(s);
    }
  };
}
function Vh(e) {
  const t = typeof e == "string" ? Ze(e) : e, n = Ru(t.length);
  return {
    length: t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length,
    encode(s) {
      t.length === 1 && t[0] < 128 ? s.pushBytes(t) : t.length <= 55 ? (s.pushByte(128 + t.length), s.pushBytes(t)) : (s.pushByte(183 + n), n === 1 ? s.pushUint8(t.length) : n === 2 ? s.pushUint16(t.length) : n === 3 ? s.pushUint24(t.length) : s.pushUint32(t.length), s.pushBytes(t));
    }
  };
}
function Ru(e) {
  if (e < 2 ** 8)
    return 1;
  if (e < 2 ** 16)
    return 2;
  if (e < 2 ** 24)
    return 3;
  if (e < 2 ** 32)
    return 4;
  throw new I("Length is too large.");
}
function Wh(e) {
  const { chainId: t, nonce: n, to: r } = e, s = e.contractAddress ?? e.address, o = ie(vn([
    "0x05",
    Hh([
      t ? U(t) : "0x",
      s,
      n ? U(n) : "0x"
    ])
  ]));
  return r === "bytes" ? Ze(o) : o;
}
async function fs(e) {
  const { authorization: t, signature: n } = e;
  return Nu({
    hash: Wh(t),
    signature: n ?? t
  });
}
class Zh extends I {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: l, to: d, value: f }) {
    var p;
    const h = mr({
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof f < "u" && `${bi(f)} ${((p = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : p.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${ve(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${ve(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${ve(u)} gwei`,
      nonce: l
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        h
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class Xt extends I {
  constructor({ cause: t, message: n } = {}) {
    var s;
    const r = (s = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : s.replace("execution reverted", "");
    super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
      cause: t,
      name: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(Xt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(Xt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted|gas required exceeds allowance/
});
class jr extends I {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${ve(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: t,
      name: "FeeCapTooHighError"
    });
  }
}
Object.defineProperty(jr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class Co extends I {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${ve(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: t,
      name: "FeeCapTooLowError"
    });
  }
}
Object.defineProperty(Co, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class To extends I {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, { cause: t, name: "NonceTooHighError" });
  }
}
Object.defineProperty(To, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class So extends I {
  constructor({ cause: t, nonce: n } = {}) {
    super([
      `Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: t, name: "NonceTooLowError" });
  }
}
Object.defineProperty(So, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class ko extends I {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, { cause: t, name: "NonceMaxValueError" });
  }
}
Object.defineProperty(ko, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class Po extends I {
  constructor({ cause: t } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: t,
      metaMessages: [
        "This error could arise when the account does not have enough funds to:",
        " - pay for the total gas fee,",
        " - pay for the value to send.",
        " ",
        "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
        " - `gas` is the amount of gas needed for transaction to execute,",
        " - `gas fee` is the gas fee,",
        " - `value` is the amount of ether to send to the recipient."
      ],
      name: "InsufficientFundsError"
    });
  }
}
Object.defineProperty(Po, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/
});
class $o extends I {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: t,
      name: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty($o, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class Bo extends I {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
      cause: t,
      name: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty(Bo, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class Io extends I {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t,
      name: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(Io, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class qr extends I {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${ve(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${ve(r)} gwei` : ""}).`
    ].join(`
`), {
      cause: t,
      name: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(qr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class br extends I {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t == null ? void 0 : t.shortMessage}`, {
      cause: t,
      name: "UnknownNodeError"
    });
  }
}
function hs(e, t) {
  const n = (e.details || "").toLowerCase(), r = e instanceof I ? e.walk((s) => (s == null ? void 0 : s.code) === Xt.code) : e;
  return r instanceof I ? new Xt({
    cause: e,
    message: r.details
  }) : Xt.nodeMessage.test(n) ? new Xt({
    cause: e,
    message: e.details
  }) : jr.nodeMessage.test(n) ? new jr({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : Co.nodeMessage.test(n) ? new Co({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : To.nodeMessage.test(n) ? new To({ cause: e, nonce: t == null ? void 0 : t.nonce }) : So.nodeMessage.test(n) ? new So({ cause: e, nonce: t == null ? void 0 : t.nonce }) : ko.nodeMessage.test(n) ? new ko({ cause: e, nonce: t == null ? void 0 : t.nonce }) : Po.nodeMessage.test(n) ? new Po({ cause: e }) : $o.nodeMessage.test(n) ? new $o({ cause: e, gas: t == null ? void 0 : t.gas }) : Bo.nodeMessage.test(n) ? new Bo({ cause: e, gas: t == null ? void 0 : t.gas }) : Io.nodeMessage.test(n) ? new Io({ cause: e }) : qr.nodeMessage.test(n) ? new qr({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
    maxPriorityFeePerGas: t == null ? void 0 : t.maxPriorityFeePerGas
  }) : new br({
    cause: e
  });
}
function Kh(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = hs(e, n);
    return s instanceof br ? e : s;
  })();
  return new Zh(r, {
    docsPath: t,
    ...n
  });
}
function An(e, { format: t }) {
  if (!t)
    return {};
  const n = {};
  function r(o) {
    const i = Object.keys(o);
    for (const a of i)
      a in e && (n[a] = e[a]), o[a] && typeof o[a] == "object" && !Array.isArray(o[a]) && r(o[a]);
  }
  const s = t(e || {});
  return r(s), n;
}
const Qh = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
function yt(e, t) {
  const n = {};
  return typeof e.authorizationList < "u" && (n.authorizationList = Xh(e.authorizationList)), typeof e.accessList < "u" && (n.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (n.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? n.blobs = e.blobs.map((r) => se(r)) : n.blobs = e.blobs), typeof e.data < "u" && (n.data = e.data), e.account && (n.from = e.account.address), typeof e.from < "u" && (n.from = e.from), typeof e.gas < "u" && (n.gas = U(e.gas)), typeof e.gasPrice < "u" && (n.gasPrice = U(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (n.maxFeePerBlobGas = U(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (n.maxFeePerGas = U(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (n.maxPriorityFeePerGas = U(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (n.nonce = U(e.nonce)), typeof e.to < "u" && (n.to = e.to), typeof e.type < "u" && (n.type = Qh[e.type]), typeof e.value < "u" && (n.value = U(e.value)), n;
}
function Xh(e) {
  return e.map((t) => ({
    address: t.address,
    r: t.r ? U(BigInt(t.r)) : t.r,
    s: t.s ? U(BigInt(t.s)) : t.s,
    chainId: U(t.chainId),
    nonce: U(t.nonce),
    ...typeof t.yParity < "u" ? { yParity: U(t.yParity) } : {},
    ...typeof t.v < "u" && typeof t.yParity > "u" ? { v: U(t.v) } : {}
  }));
}
function Fa(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new Aa({
          size: n.length,
          targetSize: 66,
          type: "hex"
        });
      if (r.length !== 66)
        throw new Aa({
          size: r.length,
          targetSize: 66,
          type: "hex"
        });
      return t[n] = r, t;
    }, {});
}
function Yh(e) {
  const { balance: t, nonce: n, state: r, stateDiff: s, code: o } = e, i = {};
  if (o !== void 0 && (i.code = o), t !== void 0 && (i.balance = U(t)), n !== void 0 && (i.nonce = U(n)), r !== void 0 && (i.state = Fa(r)), s !== void 0) {
    if (i.state)
      throw new Ih();
    i.stateDiff = Fa(s);
  }
  return i;
}
function gi(e) {
  if (!e)
    return;
  const t = {};
  for (const { address: n, ...r } of e) {
    if (!Ie(n, { strict: !1 }))
      throw new bt({ address: n });
    if (t[n])
      throw new Bh({ address: n });
    t[n] = Yh(r);
  }
  return t;
}
const No = 2n ** 256n - 1n;
function ct(e) {
  const { account: t, maxFeePerGas: n, maxPriorityFeePerGas: r, to: s } = e, o = t ? Y(t) : void 0;
  if (o && !Ie(o.address))
    throw new bt({ address: o.address });
  if (s && !Ie(s))
    throw new bt({ address: s });
  if (n && n > No)
    throw new jr({ maxFeePerGas: n });
  if (r && n && r > n)
    throw new qr({ maxFeePerGas: n, maxPriorityFeePerGas: r });
}
class Fu extends I {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
}
class wi extends I {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
}
class Jh extends I {
  constructor({ maxPriorityFeePerGas: t }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${ve(t)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
}
class Ou extends I {
  constructor({ blockHash: t, blockNumber: n }) {
    let r = "Block";
    t && (r = `Block at hash "${t}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`, { name: "BlockNotFoundError" });
  }
}
const _u = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function yi(e, t) {
  const n = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? Fe(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
    nonce: e.nonce ? Fe(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? _u[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0
  };
  return e.authorizationList && (n.authorizationList = ep(e.authorizationList)), n.yParity = (() => {
    if (e.yParity)
      return Number(e.yParity);
    if (typeof n.v == "bigint") {
      if (n.v === 0n || n.v === 27n)
        return 0;
      if (n.v === 1n || n.v === 28n)
        return 1;
      if (n.v >= 35n)
        return n.v % 2n === 0n ? 1 : 0;
    }
  })(), n.type === "legacy" && (delete n.accessList, delete n.maxFeePerBlobGas, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.yParity), n.type === "eip2930" && (delete n.maxFeePerBlobGas, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas), n.type === "eip1559" && delete n.maxFeePerBlobGas, n;
}
function ep(e) {
  return e.map((t) => ({
    address: t.address,
    chainId: Number(t.chainId),
    nonce: Number(t.nonce),
    r: t.r,
    s: t.s,
    yParity: Number(t.yParity)
  }));
}
function Mu(e, t) {
  const n = (e.transactions ?? []).map((r) => typeof r == "string" ? r : yi(r));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: n,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
  };
}
async function Ne(e, { blockHash: t, blockNumber: n, blockTag: r = e.experimental_blockTag ?? "latest", includeTransactions: s } = {}) {
  var u, l, d;
  const o = s ?? !1, i = n !== void 0 ? U(n) : void 0;
  let a = null;
  if (t ? a = await e.request({
    method: "eth_getBlockByHash",
    params: [t, o]
  }, { dedupe: !0 }) : a = await e.request({
    method: "eth_getBlockByNumber",
    params: [i || r, o]
  }, { dedupe: !!i }), !a)
    throw new Ou({ blockHash: t, blockNumber: n });
  return (((d = (l = (u = e.chain) == null ? void 0 : u.formatters) == null ? void 0 : l.block) == null ? void 0 : d.format) || Mu)(a, "getBlock");
}
async function xi(e) {
  const t = await e.request({
    method: "eth_gasPrice"
  });
  return BigInt(t);
}
async function tp(e, t) {
  return Du(e, t);
}
async function Du(e, t) {
  var o, i;
  const { block: n, chain: r = e.chain, request: s } = t || {};
  try {
    const a = ((o = r == null ? void 0 : r.fees) == null ? void 0 : o.maxPriorityFeePerGas) ?? ((i = r == null ? void 0 : r.fees) == null ? void 0 : i.defaultPriorityFee);
    if (typeof a == "function") {
      const u = n || await M(e, Ne, "getBlock")({}), l = await a({
        block: u,
        client: e,
        request: s
      });
      if (l === null)
        throw new Error();
      return l;
    }
    if (typeof a < "u")
      return a;
    const c = await e.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return ue(c);
  } catch {
    const [a, c] = await Promise.all([
      n ? Promise.resolve(n) : M(e, Ne, "getBlock")({}),
      M(e, xi, "getGasPrice")({})
    ]);
    if (typeof a.baseFeePerGas != "bigint")
      throw new wi();
    const u = c - a.baseFeePerGas;
    return u < 0n ? 0n : u;
  }
}
async function np(e, t) {
  return Lo(e, t);
}
async function Lo(e, t) {
  var f, h;
  const { block: n, chain: r = e.chain, request: s, type: o = "eip1559" } = t || {}, i = await (async () => {
    var p, m;
    return typeof ((p = r == null ? void 0 : r.fees) == null ? void 0 : p.baseFeeMultiplier) == "function" ? r.fees.baseFeeMultiplier({
      block: n,
      client: e,
      request: s
    }) : ((m = r == null ? void 0 : r.fees) == null ? void 0 : m.baseFeeMultiplier) ?? 1.2;
  })();
  if (i < 1)
    throw new Fu();
  const c = 10 ** (((f = i.toString().split(".")[1]) == null ? void 0 : f.length) ?? 0), u = (p) => p * BigInt(Math.ceil(i * c)) / BigInt(c), l = n || await M(e, Ne, "getBlock")({});
  if (typeof ((h = r == null ? void 0 : r.fees) == null ? void 0 : h.estimateFeesPerGas) == "function") {
    const p = await r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: u,
      request: s,
      type: o
    });
    if (p !== null)
      return p;
  }
  if (o === "eip1559") {
    if (typeof l.baseFeePerGas != "bigint")
      throw new wi();
    const p = typeof (s == null ? void 0 : s.maxPriorityFeePerGas) == "bigint" ? s.maxPriorityFeePerGas : await Du(e, {
      block: l,
      chain: r,
      request: s
    }), m = u(l.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? m + p,
      maxPriorityFeePerGas: p
    };
  }
  return {
    gasPrice: (s == null ? void 0 : s.gasPrice) ?? u(await M(e, xi, "getGasPrice")({}))
  };
}
async function vi(e, { address: t, blockTag: n = "latest", blockNumber: r }) {
  const s = await e.request({
    method: "eth_getTransactionCount",
    params: [
      t,
      typeof r == "bigint" ? U(r) : n
    ]
  }, {
    dedupe: !!r
  });
  return Fe(s);
}
function zu(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map((o) => Ze(o)) : e.blobs, s = [];
  for (const o of r)
    s.push(Uint8Array.from(t.blobToKzgCommitment(o)));
  return n === "bytes" ? s : s.map((o) => se(o));
}
function Uu(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map((i) => Ze(i)) : e.blobs, s = typeof e.commitments[0] == "string" ? e.commitments.map((i) => Ze(i)) : e.commitments, o = [];
  for (let i = 0; i < r.length; i++) {
    const a = r[i], c = s[i];
    o.push(Uint8Array.from(t.computeBlobKzgProof(a, c)));
  }
  return n === "bytes" ? o : o.map((i) => se(i));
}
function rp(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const s = BigInt(32), o = BigInt(4294967295), i = Number(n >> s & o), a = Number(n & o), c = r ? 4 : 0, u = r ? 0 : 4;
  e.setUint32(t + c, i, r), e.setUint32(t + u, a, r);
}
function sp(e, t, n) {
  return e & t ^ ~e & n;
}
function op(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class ip extends li {
  constructor(t, n, r, s) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = s, this.buffer = new Uint8Array(t), this.view = _s(this.buffer);
  }
  update(t) {
    un(this), t = cs(t), Ft(t);
    const { view: n, buffer: r, blockLen: s } = this, o = t.length;
    for (let i = 0; i < o; ) {
      const a = Math.min(s - this.pos, o - i);
      if (a === s) {
        const c = _s(t);
        for (; s <= o - i; i += s)
          this.process(c, i);
        continue;
      }
      r.set(t.subarray(i, i + a), this.pos), this.pos += a, i += a, this.pos === s && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    un(this), au(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: s, isLE: o } = this;
    let { pos: i } = this;
    n[i++] = 128, ln(this.buffer.subarray(i)), this.padOffset > s - i && (this.process(r, 0), i = 0);
    for (let d = i; d < s; d++)
      n[d] = 0;
    rp(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const a = _s(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, l = this.get();
    if (u > l.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < u; d++)
      a.setUint32(4 * d, l[d], o);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: s, finished: o, destroyed: i, pos: a } = this;
    return t.destroyed = i, t.finished = o, t.length = s, t.pos = a, s % n && t.buffer.set(r), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const lt = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ap = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), dt = /* @__PURE__ */ new Uint32Array(64);
class cp extends ip {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = lt[0] | 0, this.B = lt[1] | 0, this.C = lt[2] | 0, this.D = lt[3] | 0, this.E = lt[4] | 0, this.F = lt[5] | 0, this.G = lt[6] | 0, this.H = lt[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: s, E: o, F: i, G: a, H: c } = this;
    return [t, n, r, s, o, i, a, c];
  }
  // prettier-ignore
  set(t, n, r, s, o, i, a, c) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = s | 0, this.E = o | 0, this.F = i | 0, this.G = a | 0, this.H = c | 0;
  }
  process(t, n) {
    for (let d = 0; d < 16; d++, n += 4)
      dt[d] = t.getUint32(n, !1);
    for (let d = 16; d < 64; d++) {
      const f = dt[d - 15], h = dt[d - 2], p = Ue(f, 7) ^ Ue(f, 18) ^ f >>> 3, m = Ue(h, 17) ^ Ue(h, 19) ^ h >>> 10;
      dt[d] = m + dt[d - 7] + p + dt[d - 16] | 0;
    }
    let { A: r, B: s, C: o, D: i, E: a, F: c, G: u, H: l } = this;
    for (let d = 0; d < 64; d++) {
      const f = Ue(a, 6) ^ Ue(a, 11) ^ Ue(a, 25), h = l + f + sp(a, c, u) + ap[d] + dt[d] | 0, m = (Ue(r, 2) ^ Ue(r, 13) ^ Ue(r, 22)) + op(r, s, o) | 0;
      l = u, u = c, c = a, a = i + h | 0, i = o, o = s, s = r, r = h + m | 0;
    }
    r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, l = l + this.H | 0, this.set(r, s, o, i, a, c, u, l);
  }
  roundClean() {
    ln(dt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), ln(this.buffer);
  }
}
const ju = /* @__PURE__ */ cu(() => new cp()), up = ju;
function lp(e, t) {
  return up(Ve(e, { strict: !1 }) ? yn(e) : e);
}
function dp(e) {
  const { commitment: t, version: n = 1 } = e, r = e.to ?? (typeof t == "string" ? "hex" : "bytes"), s = lp(t);
  return s.set([n], 0), r === "bytes" ? s : se(s);
}
function fp(e) {
  const { commitments: t, version: n } = e, r = e.to, s = [];
  for (const o of t)
    s.push(dp({
      commitment: o,
      to: r,
      version: n
    }));
  return s;
}
const Oa = 6, qu = 32, Ai = 4096, Hu = qu * Ai, _a = Hu * Oa - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * Ai * Oa;
class hp extends I {
  constructor({ maxSize: t, size: n }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
}
class pp extends I {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}
function mp(e) {
  const t = typeof e.data == "string" ? Ze(e.data) : e.data, n = ne(t);
  if (!n)
    throw new pp();
  if (n > _a)
    throw new hp({
      maxSize: _a,
      size: n
    });
  const r = [];
  let s = !0, o = 0;
  for (; s; ) {
    const i = mi(new Uint8Array(Hu));
    let a = 0;
    for (; a < Ai; ) {
      const c = t.slice(o, o + (qu - 1));
      if (i.pushByte(0), i.pushBytes(c), c.length < 31) {
        i.pushByte(128), s = !1;
        break;
      }
      a++, o += 31;
    }
    r.push(i);
  }
  return r.map((i) => se(i.bytes));
}
function bp(e) {
  const { data: t, kzg: n, to: r } = e, s = e.blobs ?? mp({ data: t }), o = e.commitments ?? zu({ blobs: s, kzg: n, to: r }), i = e.proofs ?? Uu({ blobs: s, commitments: o, kzg: n, to: r }), a = [];
  for (let c = 0; c < s.length; c++)
    a.push({
      blob: s[c],
      commitment: o[c],
      proof: i[c]
    });
  return a;
}
function gp(e) {
  if (e.type)
    return e.type;
  if (typeof e.authorizationList < "u")
    return "eip7702";
  if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u")
    return "eip4844";
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new Lh({ transaction: e });
}
function ps(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = hs(e, n);
    return s instanceof br ? e : s;
  })();
  return new Rh(r, {
    docsPath: t,
    ...n
  });
}
async function xt(e) {
  const t = await e.request({
    method: "eth_chainId"
  }, { dedupe: !0 });
  return Fe(t);
}
async function Ei(e, t) {
  var A, P, F, $, L;
  const { account: n = e.account, accessList: r, authorizationList: s, chain: o = e.chain, blobVersionedHashes: i, blobs: a, data: c, gas: u, gasPrice: l, maxFeePerBlobGas: d, maxFeePerGas: f, maxPriorityFeePerGas: h, nonce: p, nonceManager: m, to: b, type: y, value: x, ...g } = t, w = await (async () => {
    if (!n || !m || typeof p < "u")
      return p;
    const R = Y(n), D = o ? o.id : await M(e, xt, "getChainId")({});
    return await m.consume({
      address: R.address,
      chainId: D,
      client: e
    });
  })();
  ct(t);
  const T = (P = (A = o == null ? void 0 : o.formatters) == null ? void 0 : A.transactionRequest) == null ? void 0 : P.format, E = (T || yt)({
    // Pick out extra data that might exist on the chain's transaction request type.
    ...An(g, { format: T }),
    account: n ? Y(n) : void 0,
    accessList: r,
    authorizationList: s,
    blobs: a,
    blobVersionedHashes: i,
    data: c,
    gas: u,
    gasPrice: l,
    maxFeePerBlobGas: d,
    maxFeePerGas: f,
    maxPriorityFeePerGas: h,
    nonce: w,
    to: b,
    type: y,
    value: x
  }, "fillTransaction");
  try {
    const R = await e.request({
      method: "eth_fillTransaction",
      params: [E]
    }), v = ((($ = (F = o == null ? void 0 : o.formatters) == null ? void 0 : F.transaction) == null ? void 0 : $.format) || yi)(R.tx);
    delete v.blockHash, delete v.blockNumber, delete v.r, delete v.s, delete v.transactionIndex, delete v.v, delete v.yParity, v.data = v.input, v.gas && (v.gas = t.gas ?? v.gas), v.gasPrice && (v.gasPrice = t.gasPrice ?? v.gasPrice), v.maxFeePerBlobGas && (v.maxFeePerBlobGas = t.maxFeePerBlobGas ?? v.maxFeePerBlobGas), v.maxFeePerGas && (v.maxFeePerGas = t.maxFeePerGas ?? v.maxFeePerGas), v.maxPriorityFeePerGas && (v.maxPriorityFeePerGas = t.maxPriorityFeePerGas ?? v.maxPriorityFeePerGas), v.nonce && (v.nonce = t.nonce ?? v.nonce);
    const S = await (async () => {
      var z, H;
      if (typeof ((z = o == null ? void 0 : o.fees) == null ? void 0 : z.baseFeeMultiplier) == "function") {
        const Z = await M(e, Ne, "getBlock")({});
        return o.fees.baseFeeMultiplier({
          block: Z,
          client: e,
          request: t
        });
      }
      return ((H = o == null ? void 0 : o.fees) == null ? void 0 : H.baseFeeMultiplier) ?? 1.2;
    })();
    if (S < 1)
      throw new Fu();
    const B = 10 ** (((L = S.toString().split(".")[1]) == null ? void 0 : L.length) ?? 0), _ = (z) => z * BigInt(Math.ceil(S * B)) / BigInt(B);
    return v.maxFeePerGas && !t.maxFeePerGas && (v.maxFeePerGas = _(v.maxFeePerGas)), v.gasPrice && !t.gasPrice && (v.gasPrice = _(v.gasPrice)), {
      raw: R.raw,
      transaction: {
        from: E.from,
        ...v
      }
    };
  } catch (R) {
    throw ps(R, {
      ...t,
      chain: e.chain
    });
  }
}
const Ci = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
], Ma = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new xn(128);
async function gr(e, t) {
  var w, T, k;
  let n = t;
  n.account ?? (n.account = e.account), n.parameters ?? (n.parameters = Ci);
  const { account: r, chain: s = e.chain, nonceManager: o, parameters: i } = n, a = (() => {
    if (typeof (s == null ? void 0 : s.prepareTransactionRequest) == "function")
      return {
        fn: s.prepareTransactionRequest,
        runAt: ["beforeFillTransaction"]
      };
    if (Array.isArray(s == null ? void 0 : s.prepareTransactionRequest))
      return {
        fn: s.prepareTransactionRequest[0],
        runAt: s.prepareTransactionRequest[1].runAt
      };
  })();
  let c;
  async function u() {
    return c || (typeof n.chainId < "u" ? n.chainId : s ? s.id : (c = await M(e, xt, "getChainId")({}), c));
  }
  const l = r && Y(r);
  let d = n.nonce;
  if (i.includes("nonce") && typeof d > "u" && l && o) {
    const E = await u();
    d = await o.consume({
      address: l.address,
      chainId: E,
      client: e
    });
  }
  a != null && a.fn && ((w = a.runAt) != null && w.includes("beforeFillTransaction")) && (n = await a.fn({ ...n, chain: s }, {
    phase: "beforeFillTransaction"
  }), d ?? (d = n.nonce));
  const h = ((i.includes("blobVersionedHashes") || i.includes("sidecars")) && n.kzg && n.blobs || zs.get(e.uid) === !1 || !["fees", "gas"].some((A) => i.includes(A)) ? !1 : !!(i.includes("chainId") && typeof n.chainId != "number" || i.includes("nonce") && typeof d != "number" || i.includes("fees") && typeof n.gasPrice != "bigint" && (typeof n.maxFeePerGas != "bigint" || typeof n.maxPriorityFeePerGas != "bigint") || i.includes("gas") && typeof n.gas != "bigint")) ? await M(e, Ei, "fillTransaction")({ ...n, nonce: d }).then((E) => {
    const { chainId: A, from: P, gas: F, gasPrice: $, nonce: L, maxFeePerBlobGas: R, maxFeePerGas: D, maxPriorityFeePerGas: v, type: S, ...O } = E.transaction;
    return zs.set(e.uid, !0), {
      ...n,
      ...P ? { from: P } : {},
      ...S ? { type: S } : {},
      ...typeof A < "u" ? { chainId: A } : {},
      ...typeof F < "u" ? { gas: F } : {},
      ...typeof $ < "u" ? { gasPrice: $ } : {},
      ...typeof L < "u" ? { nonce: L } : {},
      ...typeof R < "u" ? { maxFeePerBlobGas: R } : {},
      ...typeof D < "u" ? { maxFeePerGas: D } : {},
      ...typeof v < "u" ? { maxPriorityFeePerGas: v } : {},
      ..."nonceKey" in O && typeof O.nonceKey < "u" ? { nonceKey: O.nonceKey } : {}
    };
  }).catch((E) => {
    var F;
    const A = E;
    return A.name !== "TransactionExecutionError" || ((F = A.walk) == null ? void 0 : F.call(A, ($) => {
      const L = $;
      return L.name === "MethodNotFoundRpcError" || L.name === "MethodNotSupportedRpcError";
    })) && zs.set(e.uid, !1), n;
  }) : n;
  d ?? (d = h.nonce), n = {
    ...h,
    ...l ? { from: l == null ? void 0 : l.address } : {},
    ...d ? { nonce: d } : {}
  };
  const { blobs: p, gas: m, kzg: b, type: y } = n;
  a != null && a.fn && ((T = a.runAt) != null && T.includes("beforeFillParameters")) && (n = await a.fn({ ...n, chain: s }, {
    phase: "beforeFillParameters"
  }));
  let x;
  async function g() {
    return x || (x = await M(e, Ne, "getBlock")({ blockTag: "latest" }), x);
  }
  if (i.includes("nonce") && typeof d > "u" && l && !o && (n.nonce = await M(e, vi, "getTransactionCount")({
    address: l.address,
    blockTag: "pending"
  })), (i.includes("blobVersionedHashes") || i.includes("sidecars")) && p && b) {
    const E = zu({ blobs: p, kzg: b });
    if (i.includes("blobVersionedHashes")) {
      const A = fp({
        commitments: E,
        to: "hex"
      });
      n.blobVersionedHashes = A;
    }
    if (i.includes("sidecars")) {
      const A = Uu({ blobs: p, commitments: E, kzg: b }), P = bp({
        blobs: p,
        commitments: E,
        proofs: A,
        to: "hex"
      });
      n.sidecars = P;
    }
  }
  if (i.includes("chainId") && (n.chainId = await u()), (i.includes("fees") || i.includes("type")) && typeof y > "u")
    try {
      n.type = gp(n);
    } catch {
      let E = Ma.get(e.uid);
      if (typeof E > "u") {
        const A = await g();
        E = typeof (A == null ? void 0 : A.baseFeePerGas) == "bigint", Ma.set(e.uid, E);
      }
      n.type = E ? "eip1559" : "legacy";
    }
  if (i.includes("fees"))
    if (n.type !== "legacy" && n.type !== "eip2930") {
      if (typeof n.maxFeePerGas > "u" || typeof n.maxPriorityFeePerGas > "u") {
        const E = await g(), { maxFeePerGas: A, maxPriorityFeePerGas: P } = await Lo(e, {
          block: E,
          chain: s,
          request: n
        });
        if (typeof n.maxPriorityFeePerGas > "u" && n.maxFeePerGas && n.maxFeePerGas < P)
          throw new Jh({
            maxPriorityFeePerGas: P
          });
        n.maxPriorityFeePerGas = P, n.maxFeePerGas = A;
      }
    } else {
      if (typeof n.maxFeePerGas < "u" || typeof n.maxPriorityFeePerGas < "u")
        throw new wi();
      if (typeof n.gasPrice > "u") {
        const E = await g(), { gasPrice: A } = await Lo(e, {
          block: E,
          chain: s,
          request: n,
          type: "legacy"
        });
        n.gasPrice = A;
      }
    }
  return i.includes("gas") && typeof m > "u" && (n.gas = await M(e, Ti, "estimateGas")({
    ...n,
    account: l,
    prepare: (l == null ? void 0 : l.type) === "local" ? [] : ["blobVersionedHashes"]
  })), a != null && a.fn && ((k = a.runAt) != null && k.includes("afterFillParameters")) && (n = await a.fn({ ...n, chain: s }, {
    phase: "afterFillParameters"
  })), ct(n), delete n.parameters, n;
}
async function Ti(e, t) {
  var i, a, c;
  const { account: n = e.account, prepare: r = !0 } = t, s = n ? Y(n) : void 0, o = (() => {
    if (Array.isArray(r))
      return r;
    if ((s == null ? void 0 : s.type) !== "local")
      return ["blobVersionedHashes"];
  })();
  try {
    const u = await (async () => {
      if (t.to)
        return t.to;
      if (t.authorizationList && t.authorizationList.length > 0)
        return await fs({
          authorization: t.authorizationList[0]
        }).catch(() => {
          throw new I("`to` is required. Could not infer from `authorizationList`");
        });
    })(), { accessList: l, authorizationList: d, blobs: f, blobVersionedHashes: h, blockNumber: p, blockTag: m, data: b, gas: y, gasPrice: x, maxFeePerBlobGas: g, maxFeePerGas: w, maxPriorityFeePerGas: T, nonce: k, value: E, stateOverride: A, ...P } = r ? await gr(e, {
      ...t,
      parameters: o,
      to: u
    }) : t;
    if (y && t.gas !== y)
      return y;
    const $ = (typeof p == "bigint" ? U(p) : void 0) || m, L = gi(A);
    ct(t);
    const R = (c = (a = (i = e.chain) == null ? void 0 : i.formatters) == null ? void 0 : a.transactionRequest) == null ? void 0 : c.format, v = (R || yt)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...An(P, { format: R }),
      account: s,
      accessList: l,
      authorizationList: d,
      blobs: f,
      blobVersionedHashes: h,
      data: b,
      gasPrice: x,
      maxFeePerBlobGas: g,
      maxFeePerGas: w,
      maxPriorityFeePerGas: T,
      nonce: k,
      to: u,
      value: E
    }, "estimateGas");
    return BigInt(await e.request({
      method: "eth_estimateGas",
      params: L ? [
        v,
        $ ?? e.experimental_blockTag ?? "latest",
        L
      ] : $ ? [v, $] : [v]
    }));
  } catch (u) {
    throw Kh(u, {
      ...t,
      account: s,
      chain: e.chain
    });
  }
}
async function wp(e, t) {
  var u;
  const { abi: n, address: r, args: s, functionName: o, dataSuffix: i = typeof e.dataSuffix == "string" ? e.dataSuffix : (u = e.dataSuffix) == null ? void 0 : u.value, ...a } = t, c = de({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    return await M(e, Ti, "estimateGas")({
      data: `${c}${i ? i.replace("0x", "") : ""}`,
      to: r,
      ...a
    });
  } catch (l) {
    const d = a.account ? Y(a.account) : void 0;
    throw _t(l, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: o,
      sender: d == null ? void 0 : d.address
    });
  }
}
function wr(e, t) {
  if (!Ie(e, { strict: !1 }))
    throw new bt({ address: e });
  if (!Ie(t, { strict: !1 }))
    throw new bt({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
const Da = "/docs/contract/decodeEventLog";
function Hr(e) {
  const { abi: t, data: n, strict: r, topics: s } = e, o = r ?? !0, [i, ...a] = s;
  if (!i)
    throw new c1({ docsPath: Da });
  const c = t.find((y) => y.type === "event" && i === us(Re(y)));
  if (!(c && "name" in c) || c.type !== "event")
    throw new u1(i, { docsPath: Da });
  const { name: u, inputs: l } = c, d = l == null ? void 0 : l.some((y) => !("name" in y && y.name)), f = d ? [] : {}, h = l.map((y, x) => [y, x]).filter(([y]) => "indexed" in y && y.indexed), p = [];
  for (let y = 0; y < h.length; y++) {
    const [x, g] = h[y], w = a[y];
    if (!w) {
      if (o)
        throw new ci({
          abiItem: c,
          param: x
        });
      p.push([x, g]);
      continue;
    }
    f[d ? g : x.name || g] = yp({
      param: x,
      value: w
    });
  }
  const m = l.filter((y) => !("indexed" in y && y.indexed)), b = o ? m : [...p.map(([y]) => y), ...m];
  if (b.length > 0) {
    if (n && n !== "0x")
      try {
        const y = pr(b, n);
        if (y) {
          let x = 0;
          if (!o)
            for (const [g, w] of p)
              f[d ? w : g.name || w] = y[x++];
          if (d)
            for (let g = 0; g < l.length; g++)
              f[g] === void 0 && x < y.length && (f[g] = y[x++]);
          else
            for (let g = 0; g < m.length; g++)
              f[m[g].name] = y[x++];
        }
      } catch (y) {
        if (o)
          throw y instanceof eu || y instanceof Au ? new zr({
            abiItem: c,
            data: n,
            params: b,
            size: ne(n)
          }) : y;
      }
    else if (o)
      throw new zr({
        abiItem: c,
        data: "0x",
        params: b,
        size: 0
      });
  }
  return {
    eventName: u,
    args: Object.values(f).length > 0 ? f : void 0
  };
}
function yp({ param: e, value: t }) {
  return e.type === "string" || e.type === "bytes" || e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : (pr([e], t) || [])[0];
}
function Si(e) {
  const { abi: t, args: n, logs: r, strict: s = !0 } = e, o = (() => {
    if (e.eventName)
      return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
  })(), i = t.filter((a) => a.type === "event").map((a) => ({
    abi: a,
    selector: us(a)
  }));
  return r.map((a) => {
    var d;
    const c = i.filter((f) => a.topics[0] === f.selector);
    if (c.length === 0)
      return null;
    let u, l;
    for (const f of c)
      try {
        u = Hr({
          ...a,
          abi: [f.abi],
          strict: !0
        }), l = f;
        break;
      } catch {
      }
    if (!u && !s) {
      l = c[0];
      try {
        u = Hr({
          data: a.data,
          topics: a.topics,
          abi: [l.abi],
          strict: !1
        });
      } catch {
        const f = (d = l.abi.inputs) == null ? void 0 : d.some((h) => !("name" in h && h.name));
        return {
          ...a,
          args: f ? [] : {},
          eventName: l.abi.name
        };
      }
    }
    return !u || !l || o && !o.includes(u.eventName) || !xp({
      args: u.args,
      inputs: l.abi.inputs,
      matchArgs: n
    }) ? null : { ...u, ...a };
  }).filter(Boolean);
}
function xp(e) {
  const { args: t, inputs: n, matchArgs: r } = e;
  if (!r)
    return !0;
  if (!t)
    return !1;
  function s(o, i, a) {
    try {
      return o.type === "address" ? wr(i, a) : o.type === "string" || o.type === "bytes" ? ie(yn(i)) === a : i === a;
    } catch {
      return !1;
    }
  }
  return Array.isArray(t) && Array.isArray(r) ? r.every((o, i) => {
    if (o == null)
      return !0;
    const a = n[i];
    return a ? (Array.isArray(o) ? o : [o]).some((u) => s(a, u, t[i])) : !1;
  }) : typeof t == "object" && !Array.isArray(t) && typeof r == "object" && !Array.isArray(r) ? Object.entries(r).every(([o, i]) => {
    if (i == null)
      return !0;
    const a = n.find((u) => u.name === o);
    return a ? (Array.isArray(i) ? i : [i]).some((u) => s(a, u, t[o])) : !1;
  }) : !1;
}
function ot(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    blockTimestamp: e.blockTimestamp ? BigInt(e.blockTimestamp) : e.blockTimestamp === null ? null : void 0,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...n ? { args: t, eventName: n } : {}
  };
}
async function ki(e, { address: t, blockHash: n, fromBlock: r, toBlock: s, event: o, events: i, args: a, strict: c } = {}) {
  const u = c ?? !1, l = i ?? (o ? [o] : void 0);
  let d = [];
  l && (d = [l.flatMap((m) => hr({
    abi: [m],
    eventName: m.name,
    args: i ? void 0 : a
  }))], o && (d = d[0]));
  let f;
  n ? f = await e.request({
    method: "eth_getLogs",
    params: [{ address: t, topics: d, blockHash: n }]
  }) : f = await e.request({
    method: "eth_getLogs",
    params: [
      {
        address: t,
        topics: d,
        fromBlock: typeof r == "bigint" ? U(r) : r,
        toBlock: typeof s == "bigint" ? U(s) : s
      }
    ]
  });
  const h = f.map((p) => ot(p));
  return l ? Si({
    abi: l,
    args: a,
    logs: h,
    strict: u
  }) : h;
}
async function Gu(e, t) {
  const { abi: n, address: r, args: s, blockHash: o, eventName: i, fromBlock: a, toBlock: c, strict: u } = t, l = i ? jt({ abi: n, name: i }) : void 0, d = l ? void 0 : n.filter((f) => f.type === "event");
  return M(e, ki, "getLogs")({
    address: r,
    args: s,
    blockHash: o,
    event: l,
    events: d,
    fromBlock: a,
    toBlock: c,
    strict: u
  });
}
const Us = "/docs/contract/decodeFunctionResult";
function qt(e) {
  const { abi: t, args: n, functionName: r, data: s } = e;
  let o = t[0];
  if (r) {
    const a = jt({ abi: t, args: n, name: r });
    if (!a)
      throw new an(r, { docsPath: Us });
    o = a;
  }
  if (o.type !== "function")
    throw new an(void 0, { docsPath: Us });
  if (!o.outputs)
    throw new nu(o.name, { docsPath: Us });
  const i = pr(o.outputs, s);
  if (i && i.length > 1)
    return i;
  if (i && i.length === 1)
    return i[0];
}
const vp = "0.1.1";
function Ap() {
  return vp;
}
class V extends Error {
  static setStaticOptions(t) {
    V.prototype.docsOrigin = t.docsOrigin, V.prototype.showVersion = t.showVersion, V.prototype.version = t.version;
  }
  constructor(t, n = {}) {
    const r = (() => {
      var l;
      if (n.cause instanceof V) {
        if (n.cause.details)
          return n.cause.details;
        if (n.cause.shortMessage)
          return n.cause.shortMessage;
      }
      return n.cause && "details" in n.cause && typeof n.cause.details == "string" ? n.cause.details : (l = n.cause) != null && l.message ? n.cause.message : n.details;
    })(), s = n.cause instanceof V && n.cause.docsPath || n.docsPath, o = n.docsOrigin ?? V.prototype.docsOrigin, i = `${o}${s ?? ""}`, a = !!(n.version ?? V.prototype.showVersion), c = n.version ?? V.prototype.version, u = [
      t || "An error occurred.",
      ...n.metaMessages ? ["", ...n.metaMessages] : [],
      ...r || s || a ? [
        "",
        r ? `Details: ${r}` : void 0,
        s ? `See: ${i}` : void 0,
        a ? `Version: ${c}` : void 0
      ] : []
    ].filter((l) => typeof l == "string").join(`
`);
    super(u, n.cause ? { cause: n.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsOrigin", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "showVersion", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseError"
    }), this.cause = n.cause, this.details = r, this.docs = i, this.docsOrigin = o, this.docsPath = s, this.shortMessage = t, this.showVersion = a, this.version = c;
  }
  walk(t) {
    return Vu(this, t);
  }
}
Object.defineProperty(V, "defaultStaticOptions", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    docsOrigin: "https://oxlib.sh",
    showVersion: !1,
    version: `ox@${Ap()}`
  }
});
V.setStaticOptions(V.defaultStaticOptions);
function Vu(e, t) {
  return t != null && t(e) ? e : e && typeof e == "object" && "cause" in e && e.cause ? Vu(e.cause, t) : t ? null : e;
}
function yr(e, t) {
  if (Yt(e) > t)
    throw new Dp({
      givenSize: Yt(e),
      maxSize: t
    });
}
const Xe = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function za(e) {
  if (e >= Xe.zero && e <= Xe.nine)
    return e - Xe.zero;
  if (e >= Xe.A && e <= Xe.F)
    return e - (Xe.A - 10);
  if (e >= Xe.a && e <= Xe.f)
    return e - (Xe.a - 10);
}
function Ep(e, t = {}) {
  const { dir: n, size: r = 32 } = t;
  if (r === 0)
    return e;
  if (e.length > r)
    throw new zp({
      size: e.length,
      targetSize: r,
      type: "Bytes"
    });
  const s = new Uint8Array(r);
  for (let o = 0; o < r; o++) {
    const i = n === "right";
    s[i ? o : r - o - 1] = e[i ? o : e.length - o - 1];
  }
  return s;
}
function Wu(e, t = {}) {
  const { dir: n = "left" } = t;
  let r = e, s = 0;
  for (let o = 0; o < r.length - 1 && r[n === "left" ? o : r.length - o - 1].toString() === "0"; o++)
    s++;
  return r = n === "left" ? r.slice(s) : r.slice(0, r.length - s), r;
}
function ms(e, t) {
  if (Se(e) > t)
    throw new Vp({
      givenSize: Se(e),
      maxSize: t
    });
}
function Cp(e, t) {
  if (typeof t == "number" && t > 0 && t > Se(e) - 1)
    throw new nl({
      offset: t,
      position: "start",
      size: Se(e)
    });
}
function Tp(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && Se(e) !== n - t)
    throw new nl({
      offset: n,
      position: "end",
      size: Se(e)
    });
}
function Zu(e, t = {}) {
  const { dir: n, size: r = 32 } = t;
  if (r === 0)
    return e;
  const s = e.replace("0x", "");
  if (s.length > r * 2)
    throw new Wp({
      size: Math.ceil(s.length / 2),
      targetSize: r,
      type: "Hex"
    });
  return `0x${s[n === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
const Sp = "#__bigint";
function Ku(e, t, n) {
  return JSON.stringify(e, (r, s) => typeof s == "bigint" ? s.toString() + Sp : s, n);
}
const kp = /* @__PURE__ */ new TextDecoder(), Pp = /* @__PURE__ */ new TextEncoder();
function $p(e) {
  return e instanceof Uint8Array ? e : typeof e == "string" ? Qu(e) : Bp(e);
}
function Bp(e) {
  return e instanceof Uint8Array ? e : new Uint8Array(e);
}
function Qu(e, t = {}) {
  const { size: n } = t;
  let r = e;
  n && (ms(e, n), r = Dt(e, n));
  let s = r.slice(2);
  s.length % 2 && (s = `0${s}`);
  const o = s.length / 2, i = new Uint8Array(o);
  for (let a = 0, c = 0; a < o; a++) {
    const u = za(s.charCodeAt(c++)), l = za(s.charCodeAt(c++));
    if (u === void 0 || l === void 0)
      throw new V(`Invalid byte sequence ("${s[c - 2]}${s[c - 1]}" in "${s}").`);
    i[a] = u << 4 | l;
  }
  return i;
}
function Ip(e, t = {}) {
  const { size: n } = t, r = Pp.encode(e);
  return typeof n == "number" ? (yr(r, n), Np(r, n)) : r;
}
function Np(e, t) {
  return Ep(e, { dir: "right", size: t });
}
function Yt(e) {
  return e.length;
}
function Lp(e, t, n, r = {}) {
  const { strict: s } = r;
  return e.slice(t, n);
}
function Rp(e, t = {}) {
  const { size: n } = t;
  typeof n < "u" && yr(e, n);
  const r = _e(e, t);
  return Ju(r, t);
}
function Fp(e, t = {}) {
  const { size: n } = t;
  let r = e;
  if (typeof n < "u" && (yr(r, n), r = Xu(r)), r.length > 1 || r[0] > 1)
    throw new Mp(r);
  return !!r[0];
}
function rt(e, t = {}) {
  const { size: n } = t;
  typeof n < "u" && yr(e, n);
  const r = _e(e, t);
  return el(r, t);
}
function Op(e, t = {}) {
  const { size: n } = t;
  let r = e;
  return typeof n < "u" && (yr(r, n), r = _p(r)), kp.decode(r);
}
function Xu(e) {
  return Wu(e, { dir: "left" });
}
function _p(e) {
  return Wu(e, { dir: "right" });
}
class Mp extends V {
  constructor(t) {
    super(`Bytes value \`${t}\` is not a valid boolean.`, {
      metaMessages: [
        "The bytes array must contain a single byte of either a `0` or `1` value."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Bytes.InvalidBytesBooleanError"
    });
  }
}
let Dp = class extends V {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed \`${n}\` bytes. Given size: \`${t}\` bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Bytes.SizeOverflowError"
    });
  }
}, zp = class extends V {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${t}\`) exceeds padding size (\`${n}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
};
const Up = /* @__PURE__ */ new TextEncoder(), jp = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function qp(e, t = {}) {
  const { strict: n = !1 } = t;
  if (!e)
    throw new Ua(e);
  if (typeof e != "string")
    throw new Ua(e);
  if (n && !/^0x[0-9a-fA-F]*$/.test(e))
    throw new ja(e);
  if (!e.startsWith("0x"))
    throw new ja(e);
}
function Oe(...e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
function Hp(e) {
  return e instanceof Uint8Array ? _e(e) : Array.isArray(e) ? _e(new Uint8Array(e)) : e;
}
function Yu(e, t = {}) {
  const n = `0x${Number(e)}`;
  return typeof t.size == "number" ? (ms(n, t.size), Mt(n, t.size)) : n;
}
function _e(e, t = {}) {
  let n = "";
  for (let s = 0; s < e.length; s++)
    n += jp[e[s]];
  const r = `0x${n}`;
  return typeof t.size == "number" ? (ms(r, t.size), Dt(r, t.size)) : r;
}
function pe(e, t = {}) {
  const { signed: n, size: r } = t, s = BigInt(e);
  let o;
  r ? n ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if (o && s > o || s < i) {
    const u = typeof e == "bigint" ? "n" : "";
    throw new tl({
      max: o ? `${o}${u}` : void 0,
      min: `${i}${u}`,
      signed: n,
      size: r,
      value: `${e}${u}`
    });
  }
  const c = `0x${(n && s < 0 ? BigInt.asUintN(r * 8, BigInt(s)) : s).toString(16)}`;
  return r ? Mt(c, r) : c;
}
function Pi(e, t = {}) {
  return _e(Up.encode(e), t);
}
function Mt(e, t) {
  return Zu(e, { dir: "left", size: t });
}
function Dt(e, t) {
  return Zu(e, { dir: "right", size: t });
}
function Ge(e, t, n, r = {}) {
  const { strict: s } = r;
  Cp(e, t);
  const o = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return s && Tp(o, t, n), o;
}
function Se(e) {
  return Math.ceil((e.length - 2) / 2);
}
function Ju(e, t = {}) {
  const { signed: n } = t;
  t.size && ms(e, t.size);
  const r = BigInt(e);
  if (!n)
    return r;
  const s = (e.length - 2) / 2, o = (1n << BigInt(s) * 8n) - 1n, i = o >> 1n;
  return r <= i ? r : r - o - 1n;
}
function el(e, t = {}) {
  const { signed: n, size: r } = t;
  return Number(!n && !r ? e : Ju(e, t));
}
function Gp(e, t = {}) {
  const { strict: n = !1 } = t;
  try {
    return qp(e, { strict: n }), !0;
  } catch {
    return !1;
  }
}
class tl extends V {
  constructor({ max: t, min: n, signed: r, size: s, value: o }) {
    super(`Number \`${o}\` is not in safe${s ? ` ${s * 8}-bit` : ""}${r ? " signed" : " unsigned"} integer range ${t ? `(\`${n}\` to \`${t}\`)` : `(above \`${n}\`)`}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
}
class Ua extends V {
  constructor(t) {
    super(`Value \`${typeof t == "object" ? Ku(t) : t}\` of type \`${typeof t}\` is an invalid hex type.`, {
      metaMessages: ['Hex types must be represented as `"0x${string}"`.']
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.InvalidHexTypeError"
    });
  }
}
class ja extends V {
  constructor(t) {
    super(`Value \`${t}\` is an invalid hex value.`, {
      metaMessages: [
        'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.InvalidHexValueError"
    });
  }
}
class Vp extends V {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed \`${n}\` bytes. Given size: \`${t}\` bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.SizeOverflowError"
    });
  }
}
class nl extends V {
  constructor({ offset: t, position: n, size: r }) {
    super(`Slice ${n === "start" ? "starting" : "ending"} at offset \`${t}\` is out-of-bounds (size: \`${r}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.SliceOffsetOutOfBoundsError"
    });
  }
}
class Wp extends V {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${t}\`) exceeds padding size (\`${n}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
}
function Zp(e) {
  return {
    address: e.address,
    amount: pe(e.amount),
    index: pe(e.index),
    validatorIndex: pe(e.validatorIndex)
  };
}
function rl(e) {
  return {
    ...typeof e.baseFeePerGas == "bigint" && {
      baseFeePerGas: pe(e.baseFeePerGas)
    },
    ...typeof e.blobBaseFee == "bigint" && {
      blobBaseFee: pe(e.blobBaseFee)
    },
    ...typeof e.feeRecipient == "string" && {
      feeRecipient: e.feeRecipient
    },
    ...typeof e.gasLimit == "bigint" && {
      gasLimit: pe(e.gasLimit)
    },
    ...typeof e.number == "bigint" && {
      number: pe(e.number)
    },
    ...typeof e.prevRandao == "bigint" && {
      prevRandao: pe(e.prevRandao)
    },
    ...typeof e.time == "bigint" && {
      time: pe(e.time)
    },
    ...e.withdrawals && {
      withdrawals: e.withdrawals.map(Zp)
    }
  };
}
const Gr = [
  {
    inputs: [
      {
        components: [
          {
            name: "target",
            type: "address"
          },
          {
            name: "allowFailure",
            type: "bool"
          },
          {
            name: "callData",
            type: "bytes"
          }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            name: "success",
            type: "bool"
          },
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], Ro = [
  {
    name: "query",
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        type: "tuple[]",
        name: "queries",
        components: [
          {
            type: "address",
            name: "sender"
          },
          {
            type: "string[]",
            name: "urls"
          },
          {
            type: "bytes",
            name: "data"
          }
        ]
      }
    ],
    outputs: [
      {
        type: "bool[]",
        name: "failures"
      },
      {
        type: "bytes[]",
        name: "responses"
      }
    ]
  },
  {
    name: "HttpError",
    type: "error",
    inputs: [
      {
        type: "uint16",
        name: "status"
      },
      {
        type: "string",
        name: "message"
      }
    ]
  }
], sl = [
  {
    inputs: [
      {
        name: "dns",
        type: "bytes"
      }
    ],
    name: "DNSDecodingFailed",
    type: "error"
  },
  {
    inputs: [
      {
        name: "ens",
        type: "string"
      }
    ],
    name: "DNSEncodingFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "EmptyAddress",
    type: "error"
  },
  {
    inputs: [
      {
        name: "status",
        type: "uint16"
      },
      {
        name: "message",
        type: "string"
      }
    ],
    name: "HttpError",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidBatchGatewayResponse",
    type: "error"
  },
  {
    inputs: [
      {
        name: "errorData",
        type: "bytes"
      }
    ],
    name: "ResolverError",
    type: "error"
  },
  {
    inputs: [
      {
        name: "name",
        type: "bytes"
      },
      {
        name: "resolver",
        type: "address"
      }
    ],
    name: "ResolverNotContract",
    type: "error"
  },
  {
    inputs: [
      {
        name: "name",
        type: "bytes"
      }
    ],
    name: "ResolverNotFound",
    type: "error"
  },
  {
    inputs: [
      {
        name: "primary",
        type: "string"
      },
      {
        name: "primaryAddress",
        type: "bytes"
      }
    ],
    name: "ReverseAddressMismatch",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4"
      }
    ],
    name: "UnsupportedResolverProfile",
    type: "error"
  }
], ol = [
  ...sl,
  {
    name: "resolveWithGateways",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" },
      { name: "gateways", type: "string[]" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  }
], Kp = [
  ...sl,
  {
    name: "reverseWithGateways",
    type: "function",
    stateMutability: "view",
    inputs: [
      { type: "bytes", name: "reverseName" },
      { type: "uint256", name: "coinType" },
      { type: "string[]", name: "gateways" }
    ],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolver" },
      { type: "address", name: "reverseResolver" }
    ]
  }
], qa = [
  {
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "key", type: "string" }
    ],
    outputs: [{ name: "", type: "string" }]
  }
], Ha = [
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "name", type: "bytes32" }],
    outputs: [{ name: "", type: "address" }]
  },
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "coinType", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bytes" }]
  }
], il = [
  {
    name: "isValidSignature",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "hash", type: "bytes32" },
      { name: "signature", type: "bytes" }
    ],
    outputs: [{ name: "", type: "bytes4" }]
  }
], Ga = [
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "isValidSig"
  }
], Qp = "0x82ad56cb", al = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe", Xp = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe", Yp = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572", $i = "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033";
class Fo extends I {
  constructor({ blockNumber: t, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...t && r.blockCreated && r.blockCreated > t ? [
          `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`
        ] : [
          `- The chain does not have the contract "${r.name}" configured.`
        ]
      ],
      name: "ChainDoesNotSupportContract"
    });
  }
}
class Jp extends I {
  constructor({ chain: t, currentChainId: n }) {
    super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`, {
      metaMessages: [
        `Current Chain ID:  ${n}`,
        `Expected Chain ID: ${t.id} – ${t.name}`
      ],
      name: "ChainMismatchError"
    });
  }
}
class em extends I {
  constructor() {
    super([
      "No chain was provided to the request.",
      "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
    ].join(`
`), {
      name: "ChainNotFoundError"
    });
  }
}
class cl extends I {
  constructor() {
    super("No chain was provided to the Client.", {
      name: "ClientChainNotConfiguredError"
    });
  }
}
const js = "/docs/contract/encodeDeployData";
function bs(e) {
  const { abi: t, args: n, bytecode: r } = e;
  if (!n || n.length === 0)
    return r;
  const s = t.find((i) => "type" in i && i.type === "constructor");
  if (!s)
    throw new r1({ docsPath: js });
  if (!("inputs" in s))
    throw new ya({ docsPath: js });
  if (!s.inputs || s.inputs.length === 0)
    throw new ya({ docsPath: js });
  const o = Ut(s.inputs, n);
  return vn([r, o]);
}
function En({ blockNumber: e, chain: t, contract: n }) {
  var s;
  const r = (s = t == null ? void 0 : t.contracts) == null ? void 0 : s[n];
  if (!r)
    throw new Fo({
      chain: t,
      contract: { name: n }
    });
  if (e && r.blockCreated && r.blockCreated > e)
    throw new Fo({
      blockNumber: e,
      chain: t,
      contract: {
        name: n,
        blockCreated: r.blockCreated
      }
    });
  return r.address;
}
function ul(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = hs(e, n);
    return s instanceof br ? e : s;
  })();
  return new Pu(r, {
    docsPath: t,
    ...n
  });
}
function Bi() {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, s) => {
    e = r, t = s;
  }), resolve: e, reject: t };
}
const qs = /* @__PURE__ */ new Map();
function tm({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: s }) {
  const o = async () => {
    const l = c();
    i();
    const d = l.map(({ args: f }) => f);
    d.length !== 0 && e(d).then((f) => {
      s && Array.isArray(f) && f.sort(s);
      for (let h = 0; h < l.length; h++) {
        const { resolve: p } = l[h];
        p == null || p([f[h], f]);
      }
    }).catch((f) => {
      for (let h = 0; h < l.length; h++) {
        const { reject: p } = l[h];
        p == null || p(f);
      }
    });
  }, i = () => qs.delete(t), a = () => c().map(({ args: l }) => l), c = () => qs.get(t) || [], u = (l) => qs.set(t, [...c(), l]);
  return {
    flush: i,
    async schedule(l) {
      const { promise: d, resolve: f, reject: h } = Bi();
      return (n == null ? void 0 : n([...a(), l])) && o(), c().length > 0 ? (u({ args: l, resolve: f, reject: h }), d) : (u({ args: l, resolve: f, reject: h }), setTimeout(o, r), d);
    }
  };
}
async function gs(e, t) {
  var R, D, v, S;
  const { account: n = e.account, authorizationList: r, batch: s = !!((R = e.batch) != null && R.multicall), blockNumber: o, blockTag: i = e.experimental_blockTag ?? "latest", accessList: a, blobs: c, blockOverrides: u, code: l, data: d, factory: f, factoryData: h, gas: p, gasPrice: m, maxFeePerBlobGas: b, maxFeePerGas: y, maxPriorityFeePerGas: x, nonce: g, to: w, value: T, stateOverride: k, ...E } = t, A = n ? Y(n) : void 0;
  if (l && (f || h))
    throw new I("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
  if (l && w)
    throw new I("Cannot provide both `code` & `to` as parameters.");
  const P = l && d, F = f && h && w && d, $ = P || F, L = P ? ll({
    code: l,
    data: d
  }) : F ? sm({
    data: d,
    factory: f,
    factoryData: h,
    to: w
  }) : d;
  try {
    ct(t);
    const B = (typeof o == "bigint" ? U(o) : void 0) || i, _ = u ? rl(u) : void 0, z = gi(k), H = (S = (v = (D = e.chain) == null ? void 0 : D.formatters) == null ? void 0 : v.transactionRequest) == null ? void 0 : S.format, J = (H || yt)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...An(E, { format: H }),
      accessList: a,
      account: A,
      authorizationList: r,
      blobs: c,
      data: L,
      gas: p,
      gasPrice: m,
      maxFeePerBlobGas: b,
      maxFeePerGas: y,
      maxPriorityFeePerGas: x,
      nonce: g,
      to: $ ? void 0 : w,
      value: T
    }, "call");
    if (s && nm({ request: J }) && !z && !_)
      try {
        return await rm(e, {
          ...J,
          blockNumber: o,
          blockTag: i
        });
      } catch (he) {
        if (!(he instanceof cl) && !(he instanceof Fo))
          throw he;
      }
    const Q = (() => {
      const he = [
        J,
        B
      ];
      return z && _ ? [...he, z, _] : z ? [...he, z] : _ ? [...he, {}, _] : he;
    })(), te = await e.request({
      method: "eth_call",
      params: Q
    });
    return te === "0x" ? { data: void 0 } : { data: te };
  } catch (O) {
    const B = om(O), { offchainLookup: _, offchainLookupSignature: z } = await import("./ccip-CFIu7yRL.mjs");
    if (e.ccipRead !== !1 && (B == null ? void 0 : B.slice(0, 10)) === z && w)
      return { data: await _(e, { data: B, to: w }) };
    throw $ && (B == null ? void 0 : B.slice(0, 10)) === "0x101bb98d" ? new Mh({ factory: f }) : ul(O, {
      ...t,
      account: A,
      chain: e.chain
    });
  }
}
function nm({ request: e }) {
  const { data: t, to: n, ...r } = e;
  return !(!t || t.startsWith(Qp) || !n || Object.values(r).filter((s) => typeof s < "u").length > 0);
}
async function rm(e, t) {
  var m;
  const { batchSize: n = 1024, deployless: r = !1, wait: s = 0 } = typeof ((m = e.batch) == null ? void 0 : m.multicall) == "object" ? e.batch.multicall : {}, { blockNumber: o, blockTag: i = e.experimental_blockTag ?? "latest", data: a, to: c } = t, u = (() => {
    if (r)
      return null;
    if (t.multicallAddress)
      return t.multicallAddress;
    if (e.chain)
      return En({
        blockNumber: o,
        chain: e.chain,
        contract: "multicall3"
      });
    throw new cl();
  })(), d = (typeof o == "bigint" ? U(o) : void 0) || i, { schedule: f } = tm({
    id: `${e.uid}.${d}`,
    wait: s,
    shouldSplitBatch(b) {
      return b.reduce((x, { data: g }) => x + (g.length - 2), 0) > n * 2;
    },
    fn: async (b) => {
      const y = b.map((w) => ({
        allowFailure: !0,
        callData: w.data,
        target: w.to
      })), x = de({
        abi: Gr,
        args: [y],
        functionName: "aggregate3"
      }), g = await e.request({
        method: "eth_call",
        params: [
          {
            ...u === null ? {
              data: ll({
                code: $i,
                data: x
              })
            } : { to: u, data: x }
          },
          d
        ]
      });
      return qt({
        abi: Gr,
        args: [y],
        functionName: "aggregate3",
        data: g || "0x"
      });
    }
  }), [{ returnData: h, success: p }] = await f({ data: a, to: c });
  if (!p)
    throw new ds({ data: h });
  return h === "0x" ? { data: void 0 } : { data: h };
}
function ll(e) {
  const { code: t, data: n } = e;
  return bs({
    abi: ai(["constructor(bytes, bytes)"]),
    bytecode: al,
    args: [t, n]
  });
}
function sm(e) {
  const { data: t, factory: n, factoryData: r, to: s } = e;
  return bs({
    abi: ai(["constructor(address, bytes, address, bytes)"]),
    bytecode: Xp,
    args: [s, t, n, r]
  });
}
function om(e) {
  var n;
  if (!(e instanceof I))
    return;
  const t = e.walk();
  return typeof (t == null ? void 0 : t.data) == "object" ? (n = t.data) == null ? void 0 : n.data : t.data;
}
async function Me(e, t) {
  const { abi: n, address: r, args: s, functionName: o, ...i } = t, a = de({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    const { data: c } = await M(e, gs, "call")({
      ...i,
      data: a,
      to: r
    });
    return qt({
      abi: n,
      args: s,
      functionName: o,
      data: c || "0x"
    });
  } catch (c) {
    throw _t(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/readContract",
      functionName: o
    });
  }
}
async function im(e, t) {
  var l;
  const { abi: n, address: r, args: s, functionName: o, dataSuffix: i = typeof e.dataSuffix == "string" ? e.dataSuffix : (l = e.dataSuffix) == null ? void 0 : l.value, ...a } = t, c = a.account ? Y(a.account) : e.account, u = de({ abi: n, args: s, functionName: o });
  try {
    const { data: d } = await M(e, gs, "call")({
      batch: !1,
      data: `${u}${i ? i.replace("0x", "") : ""}`,
      to: r,
      ...a,
      account: c
    }), f = qt({
      abi: n,
      args: s,
      functionName: o,
      data: d || "0x"
    }), h = n.filter((p) => "name" in p && p.name === t.functionName);
    return {
      result: f,
      request: {
        abi: h,
        address: r,
        args: s,
        dataSuffix: i,
        functionName: o,
        ...a,
        account: c
      }
    };
  } catch (d) {
    throw _t(d, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/simulateContract",
      functionName: o,
      sender: c == null ? void 0 : c.address
    });
  }
}
const Hs = /* @__PURE__ */ new Map(), Va = /* @__PURE__ */ new Map();
let am = 0;
function it(e, t, n) {
  const r = ++am, s = () => Hs.get(e) || [], o = () => {
    const l = s();
    Hs.set(e, l.filter((d) => d.id !== r));
  }, i = () => {
    const l = s();
    if (!l.some((f) => f.id === r))
      return;
    const d = Va.get(e);
    if (l.length === 1 && d) {
      const f = d();
      f instanceof Promise && f.catch(() => {
      });
    }
    o();
  }, a = s();
  if (Hs.set(e, [
    ...a,
    { id: r, fns: t }
  ]), a && a.length > 0)
    return i;
  const c = {};
  for (const l in t)
    c[l] = ((...d) => {
      var h, p;
      const f = s();
      if (f.length !== 0)
        for (const m of f)
          (p = (h = m.fns)[l]) == null || p.call(h, ...d);
    });
  const u = n(c);
  return typeof u == "function" && Va.set(e, u), i;
}
async function Oo(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Cn(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let s = !0;
  const o = () => s = !1;
  return (async () => {
    let a;
    t && (a = await e({ unpoll: o }));
    const c = await (n == null ? void 0 : n(a)) ?? r;
    await Oo(c);
    const u = async () => {
      s && (await e({ unpoll: o }), await Oo(r), u());
    };
    u();
  })(), o;
}
const cm = /* @__PURE__ */ new Map(), um = /* @__PURE__ */ new Map();
function lm(e) {
  const t = (s, o) => ({
    clear: () => o.delete(s),
    get: () => o.get(s),
    set: (i) => o.set(s, i)
  }), n = t(e, cm), r = t(e, um);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r
  };
}
async function dm(e, { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }) {
  const r = lm(t), s = r.response.get();
  if (s && n > 0 && Date.now() - s.created.getTime() < n)
    return s.data;
  let o = r.promise.get();
  o || (o = e(), r.promise.set(o));
  try {
    const i = await o;
    return r.response.set({ created: /* @__PURE__ */ new Date(), data: i }), i;
  } finally {
    r.promise.clear();
  }
}
const fm = (e) => `blockNumber.${e}`;
async function xr(e, { cacheTime: t = e.cacheTime } = {}) {
  const n = await dm(() => e.request({
    method: "eth_blockNumber"
  }), { cacheKey: fm(e.uid), cacheTime: t });
  return BigInt(n);
}
async function ws(e, { filter: t }) {
  const n = "strict" in t && t.strict, r = await t.request({
    method: "eth_getFilterChanges",
    params: [t.id]
  });
  if (typeof r[0] == "string")
    return r;
  const s = r.map((o) => ot(o));
  return !("abi" in t) || !t.abi ? s : Si({
    abi: t.abi,
    logs: s,
    strict: n
  });
}
async function ys(e, { filter: t }) {
  return t.request({
    method: "eth_uninstallFilter",
    params: [t.id]
  });
}
function hm(e, t) {
  const { abi: n, address: r, args: s, batch: o = !0, eventName: i, fromBlock: a, onError: c, onLogs: u, poll: l, pollingInterval: d = e.pollingInterval, strict: f } = t;
  return (typeof l < "u" ? l : typeof a == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "ipc" || e.transport.type === "fallback" && (e.transport.transports[0].config.type === "webSocket" || e.transport.transports[0].config.type === "ipc"))) ? (() => {
    const b = f ?? !1, y = be([
      "watchContractEvent",
      r,
      s,
      o,
      e.uid,
      i,
      d,
      b,
      a
    ]);
    return it(y, { onLogs: u, onError: c }, (x) => {
      let g;
      a !== void 0 && (g = a - 1n);
      let w, T = !1;
      const k = Cn(async () => {
        var E;
        if (!T) {
          try {
            w = await M(e, xu, "createContractEventFilter")({
              abi: n,
              address: r,
              args: s,
              eventName: i,
              strict: b,
              fromBlock: a
            });
          } catch {
          }
          T = !0;
          return;
        }
        try {
          let A;
          if (w)
            A = await M(e, ws, "getFilterChanges")({ filter: w });
          else {
            const P = await M(e, xr, "getBlockNumber")({});
            g && g < P ? A = await M(e, Gu, "getContractEvents")({
              abi: n,
              address: r,
              args: s,
              eventName: i,
              fromBlock: g + 1n,
              toBlock: P,
              strict: b
            }) : A = [], g = P;
          }
          if (A.length === 0)
            return;
          if (o)
            x.onLogs(A);
          else
            for (const P of A)
              x.onLogs([P]);
        } catch (A) {
          w && A instanceof gt && (T = !1), (E = x.onError) == null || E.call(x, A);
        }
      }, {
        emitOnBegin: !0,
        interval: d
      });
      return async () => {
        w && await M(e, ys, "uninstallFilter")({ filter: w }), k();
      };
    });
  })() : (() => {
    const b = f ?? !1, y = be([
      "watchContractEvent",
      r,
      s,
      o,
      e.uid,
      i,
      d,
      b
    ]);
    let x = !0, g = () => x = !1;
    return it(y, { onLogs: u, onError: c }, (w) => ((async () => {
      try {
        const T = (() => {
          if (e.transport.type === "fallback") {
            const A = e.transport.transports.find((P) => P.config.type === "webSocket" || P.config.type === "ipc");
            return A ? A.value : e.transport;
          }
          return e.transport;
        })(), k = i ? hr({
          abi: n,
          eventName: i,
          args: s
        }) : [], { unsubscribe: E } = await T.subscribe({
          params: ["logs", { address: r, topics: k }],
          onData(A) {
            var F;
            if (!x)
              return;
            const P = A.result;
            try {
              const { eventName: $, args: L } = Hr({
                abi: n,
                data: P.data,
                topics: P.topics,
                strict: f
              }), R = ot(P, {
                args: L,
                eventName: $
              });
              w.onLogs([R]);
            } catch ($) {
              let L, R;
              if ($ instanceof zr || $ instanceof ci) {
                if (f)
                  return;
                L = $.abiItem.name, R = (F = $.abiItem.inputs) == null ? void 0 : F.some((v) => !("name" in v && v.name));
              }
              const D = ot(P, {
                args: R ? [] : {},
                eventName: L
              });
              w.onLogs([D]);
            }
          },
          onError(A) {
            var P;
            (P = w.onError) == null || P.call(w, A);
          }
        });
        g = E, x || g();
      } catch (T) {
        c == null || c(T);
      }
    })(), () => g()));
  })();
}
class vt extends I {
  constructor({ docsPath: t } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
    ].join(`
`), {
      docsPath: t,
      docsSlug: "account",
      name: "AccountNotFoundError"
    });
  }
}
class Bt extends I {
  constructor({ docsPath: t, metaMessages: n, type: r }) {
    super(`Account type "${r}" is not supported.`, {
      docsPath: t,
      metaMessages: n,
      name: "AccountTypeNotSupportedError"
    });
  }
}
function Ii({ chain: e, currentChainId: t }) {
  if (!e)
    throw new em();
  if (t !== e.id)
    throw new Jp({ chain: e, currentChainId: t });
}
async function Ni(e, { serializedTransaction: t }) {
  return e.request({
    method: "eth_sendRawTransaction",
    params: [t]
  }, { retryCount: 0 });
}
const Gs = new xn(128);
async function xs(e, t) {
  var w, T, k, E, A;
  const { account: n = e.account, assertChainId: r = !0, chain: s = e.chain, accessList: o, authorizationList: i, blobs: a, data: c, dataSuffix: u = typeof e.dataSuffix == "string" ? e.dataSuffix : (w = e.dataSuffix) == null ? void 0 : w.value, gas: l, gasPrice: d, maxFeePerBlobGas: f, maxFeePerGas: h, maxPriorityFeePerGas: p, nonce: m, type: b, value: y, ...x } = t;
  if (typeof n > "u")
    throw new vt({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const g = n ? Y(n) : null;
  try {
    ct(t);
    const P = await (async () => {
      if (t.to)
        return t.to;
      if (t.to !== null && i && i.length > 0)
        return await fs({
          authorization: i[0]
        }).catch(() => {
          throw new I("`to` is required. Could not infer from `authorizationList`.");
        });
    })();
    if ((g == null ? void 0 : g.type) === "json-rpc" || g === null) {
      let F;
      s !== null && (F = await M(e, xt, "getChainId")({}), r && Ii({
        currentChainId: F,
        chain: s
      }));
      const $ = (E = (k = (T = e.chain) == null ? void 0 : T.formatters) == null ? void 0 : k.transactionRequest) == null ? void 0 : E.format, R = ($ || yt)({
        // Pick out extra data that might exist on the chain's transaction request type.
        ...An(x, { format: $ }),
        accessList: o,
        account: g,
        authorizationList: i,
        blobs: a,
        chainId: F,
        data: c && le([c, u ?? "0x"]),
        gas: l,
        gasPrice: d,
        maxFeePerBlobGas: f,
        maxFeePerGas: h,
        maxPriorityFeePerGas: p,
        nonce: m,
        to: P,
        type: b,
        value: y
      }, "sendTransaction"), D = Gs.get(e.uid), v = D ? "wallet_sendTransaction" : "eth_sendTransaction";
      try {
        return await e.request({
          method: v,
          params: [R]
        }, { retryCount: 0 });
      } catch (S) {
        if (D === !1)
          throw S;
        const O = S;
        if (O.name === "InvalidInputRpcError" || O.name === "InvalidParamsRpcError" || O.name === "MethodNotFoundRpcError" || O.name === "MethodNotSupportedRpcError")
          return await e.request({
            method: "wallet_sendTransaction",
            params: [R]
          }, { retryCount: 0 }).then((B) => (Gs.set(e.uid, !0), B)).catch((B) => {
            const _ = B;
            throw _.name === "MethodNotFoundRpcError" || _.name === "MethodNotSupportedRpcError" ? (Gs.set(e.uid, !1), O) : _;
          });
        throw O;
      }
    }
    if ((g == null ? void 0 : g.type) === "local") {
      const F = await M(e, gr, "prepareTransactionRequest")({
        account: g,
        accessList: o,
        authorizationList: i,
        blobs: a,
        chain: s,
        data: c && le([c, u ?? "0x"]),
        gas: l,
        gasPrice: d,
        maxFeePerBlobGas: f,
        maxFeePerGas: h,
        maxPriorityFeePerGas: p,
        nonce: m,
        nonceManager: g.nonceManager,
        parameters: [...Ci, "sidecars"],
        type: b,
        value: y,
        ...x,
        to: P
      }), $ = (A = s == null ? void 0 : s.serializers) == null ? void 0 : A.transaction, L = await g.signTransaction(F, {
        serializer: $
      });
      return await M(e, Ni, "sendRawTransaction")({
        serializedTransaction: L
      });
    }
    throw (g == null ? void 0 : g.type) === "smart" ? new Bt({
      metaMessages: [
        "Consider using the `sendUserOperation` Action instead."
      ],
      docsPath: "/docs/actions/bundler/sendUserOperation",
      type: "smart"
    }) : new Bt({
      docsPath: "/docs/actions/wallet/sendTransaction",
      type: g == null ? void 0 : g.type
    });
  } catch (P) {
    throw P instanceof Bt ? P : ps(P, {
      ...t,
      account: g,
      chain: t.chain || void 0
    });
  }
}
async function er(e, t) {
  return er.internal(e, xs, "sendTransaction", t);
}
(function(e) {
  async function t(n, r, s, o) {
    const { abi: i, account: a = n.account, address: c, args: u, functionName: l, ...d } = o;
    if (typeof a > "u")
      throw new vt({
        docsPath: "/docs/contract/writeContract"
      });
    const f = a ? Y(a) : null, h = de({
      abi: i,
      args: u,
      functionName: l
    });
    try {
      return await M(n, r, s)({
        data: h,
        to: c,
        account: f,
        ...d
      });
    } catch (p) {
      throw _t(p, {
        abi: i,
        address: c,
        args: u,
        docsPath: "/docs/contract/writeContract",
        functionName: l,
        sender: f == null ? void 0 : f.address
      });
    }
  }
  e.internal = t;
})(er || (er = {}));
class pm extends I {
  constructor(t) {
    super(`Call bundle failed with status: ${t.statusCode}`, {
      name: "BundleFailedError"
    }), Object.defineProperty(this, "result", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.result = t;
  }
}
function Vr(e, { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}) {
  return new Promise((s, o) => {
    const i = async ({ count: a = 0 } = {}) => {
      const c = async ({ error: u }) => {
        const l = typeof t == "function" ? t({ count: a, error: u }) : t;
        l && await Oo(l), i({ count: a + 1 });
      };
      try {
        const u = await e();
        s(u);
      } catch (u) {
        if (a < n && await r({ count: a, error: u }))
          return c({ error: u });
        o(u);
      }
    };
    i();
  });
}
const dl = {
  "0x0": "reverted",
  "0x1": "success"
};
function fl(e, t) {
  const n = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((r) => ot(r)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Fe(e.transactionIndex) : null,
    status: e.status ? dl[e.status] : null,
    type: e.type ? _u[e.type] || e.type : null
  };
  return e.blobGasPrice && (n.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (n.blobGasUsed = BigInt(e.blobGasUsed)), n;
}
const hl = "0x5792579257925792579257925792579257925792579257925792579257925792", pl = U(0, {
  size: 32
});
async function ml(e, t) {
  var f;
  const { account: n = e.account, chain: r = e.chain, experimental_fallback: s, experimental_fallbackDelay: o = 32, forceAtomic: i = !1, id: a, version: c = "2.0.0" } = t, u = n ? Y(n) : null;
  let l = t.capabilities;
  e.dataSuffix && !((f = t.capabilities) != null && f.dataSuffix) && (typeof e.dataSuffix == "string" ? l = {
    ...t.capabilities,
    dataSuffix: { value: e.dataSuffix, optional: !0 }
  } : l = {
    ...t.capabilities,
    dataSuffix: {
      value: e.dataSuffix.value,
      ...e.dataSuffix.required ? {} : { optional: !0 }
    }
  });
  const d = t.calls.map((h) => {
    const p = h, m = p.abi ? de({
      abi: p.abi,
      functionName: p.functionName,
      args: p.args
    }) : p.data;
    return {
      data: p.dataSuffix && m ? le([m, p.dataSuffix]) : m,
      to: p.to,
      value: p.value ? U(p.value) : void 0
    };
  });
  try {
    const h = await e.request({
      method: "wallet_sendCalls",
      params: [
        {
          atomicRequired: i,
          calls: d,
          capabilities: l,
          chainId: U(r.id),
          from: u == null ? void 0 : u.address,
          id: a,
          version: c
        }
      ]
    }, { retryCount: 0 });
    return typeof h == "string" ? { id: h } : h;
  } catch (h) {
    const p = h;
    if (s && (p.name === "MethodNotFoundRpcError" || p.name === "MethodNotSupportedRpcError" || p.name === "UnknownRpcError" || p.details.toLowerCase().includes("does not exist / is not available") || p.details.toLowerCase().includes("missing or invalid. request()") || p.details.toLowerCase().includes("did not match any variant of untagged enum") || p.details.toLowerCase().includes("account upgraded to unsupported contract") || p.details.toLowerCase().includes("eip-7702 not supported") || p.details.toLowerCase().includes("unsupported wc_ method") || // magic.link
    p.details.toLowerCase().includes("feature toggled misconfigured") || // Trust Wallet
    p.details.toLowerCase().includes("jsonrpcengine: response has no error or result for request"))) {
      if (l && Object.values(l).some((g) => !g.optional)) {
        const g = "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
        throw new hn(new I(g, {
          details: g
        }));
      }
      if (i && d.length > 1) {
        const x = "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
        throw new pn(new I(x, {
          details: x
        }));
      }
      const m = [];
      for (const x of d) {
        const g = xs(e, {
          account: u,
          chain: r,
          data: x.data,
          to: x.to,
          value: x.value ? ue(x.value) : void 0
        });
        m.push(g), o > 0 && await new Promise((w) => setTimeout(w, o));
      }
      const b = await Promise.allSettled(m);
      if (b.every((x) => x.status === "rejected"))
        throw b[0].reason;
      const y = b.map((x) => x.status === "fulfilled" ? x.value : pl);
      return {
        id: le([
          ...y,
          U(r.id, { size: 32 }),
          hl
        ])
      };
    }
    throw ps(h, {
      ...t,
      account: u,
      chain: t.chain
    });
  }
}
async function bl(e, t) {
  async function n(l) {
    if (l.endsWith(hl.slice(2))) {
      const f = mt(xo(l, -64, -32)), h = xo(l, 0, -64).slice(2).match(/.{1,64}/g), p = await Promise.all(h.map((b) => pl.slice(2) !== b ? e.request({
        method: "eth_getTransactionReceipt",
        params: [`0x${b}`]
      }, { dedupe: !0 }) : void 0)), m = p.some((b) => b === null) ? 100 : p.every((b) => (b == null ? void 0 : b.status) === "0x1") ? 200 : p.every((b) => (b == null ? void 0 : b.status) === "0x0") ? 500 : 600;
      return {
        atomic: !1,
        chainId: Fe(f),
        receipts: p.filter(Boolean),
        status: m,
        version: "2.0.0"
      };
    }
    return e.request({
      method: "wallet_getCallsStatus",
      params: [l]
    });
  }
  const { atomic: r = !1, chainId: s, receipts: o, version: i = "2.0.0", ...a } = await n(t.id), [c, u] = (() => {
    const l = a.status;
    return l >= 100 && l < 200 ? ["pending", l] : l >= 200 && l < 300 ? ["success", l] : l >= 300 && l < 700 ? ["failure", l] : l === "CONFIRMED" ? ["success", 200] : l === "PENDING" ? ["pending", 100] : [void 0, l];
  })();
  return {
    ...a,
    atomic: r,
    // @ts-expect-error: for backwards compatibility
    chainId: s ? Fe(s) : void 0,
    receipts: (o == null ? void 0 : o.map((l) => ({
      ...l,
      blockNumber: ue(l.blockNumber),
      gasUsed: ue(l.gasUsed),
      status: dl[l.status]
    }))) ?? [],
    statusCode: u,
    status: c,
    version: i
  };
}
async function gl(e, t) {
  const {
    id: n,
    pollingInterval: r = e.pollingInterval,
    status: s = ({ statusCode: m }) => m === 200 || m >= 300,
    retryCount: o = 4,
    retryDelay: i = ({ count: m }) => ~~(1 << m) * 200,
    // exponential backoff
    timeout: a = 6e4,
    throwOnFailure: c = !1
  } = t, u = be(["waitForCallsStatus", e.uid, n]), { promise: l, resolve: d, reject: f } = Bi();
  let h;
  const p = it(u, { resolve: d, reject: f }, (m) => {
    const b = Cn(async () => {
      const y = (x) => {
        clearTimeout(h), b(), x(), p();
      };
      try {
        const x = await Vr(async () => {
          const g = await M(e, bl, "getCallsStatus")({ id: n });
          if (c && g.status === "failure")
            throw new pm(g);
          return g;
        }, {
          retryCount: o,
          delay: i
        });
        if (!s(x))
          return;
        y(() => m.resolve(x));
      } catch (x) {
        y(() => m.reject(x));
      }
    }, {
      interval: r,
      emitOnBegin: !0
    });
    return b;
  });
  return h = a ? setTimeout(() => {
    p(), clearTimeout(h), f(new mm({ id: n }));
  }, a) : void 0, await l;
}
class mm extends I {
  constructor({ id: t }) {
    super(`Timed out while waiting for call bundle with id "${t}" to be confirmed.`, { name: "WaitForCallsStatusTimeoutError" });
  }
}
const _o = 256;
let Sr = _o, kr;
function wl(e = 11) {
  if (!kr || Sr + e > _o * 2) {
    kr = "", Sr = 0;
    for (let t = 0; t < _o; t++)
      kr += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return kr.substring(Sr, Sr++ + e);
}
function yl(e) {
  const { batch: t, chain: n, ccipRead: r, dataSuffix: s, key: o = "base", name: i = "Base Client", type: a = "base" } = e, c = e.experimental_blockTag ?? (typeof (n == null ? void 0 : n.experimental_preconfirmationTime) == "number" ? "pending" : void 0), u = (n == null ? void 0 : n.blockTime) ?? 12e3, l = Math.min(Math.max(Math.floor(u / 2), 500), 4e3), d = e.pollingInterval ?? l, f = e.cacheTime ?? d, h = e.account ? Y(e.account) : void 0, { config: p, request: m, value: b } = e.transport({
    account: h,
    chain: n,
    pollingInterval: d
  }), y = { ...p, ...b }, x = {
    account: h,
    batch: t,
    cacheTime: f,
    ccipRead: r,
    chain: n,
    dataSuffix: s,
    key: o,
    name: i,
    pollingInterval: d,
    request: m,
    transport: y,
    type: a,
    uid: wl(),
    ...c ? { experimental_blockTag: c } : {}
  };
  function g(w) {
    return (T) => {
      const k = T(w);
      for (const A in x)
        delete k[A];
      const E = { ...w, ...k };
      return Object.assign(E, { extend: g(E) });
    };
  }
  return Object.assign(x, { extend: g(x) });
}
function Li(e) {
  var n, r, s, o, i, a;
  if (!(e instanceof I))
    return !1;
  const t = e.walk((c) => c instanceof Eo);
  return t instanceof Eo ? ((n = t.data) == null ? void 0 : n.errorName) === "HttpError" || ((r = t.data) == null ? void 0 : r.errorName) === "ResolverError" || ((s = t.data) == null ? void 0 : s.errorName) === "ResolverNotContract" || ((o = t.data) == null ? void 0 : o.errorName) === "ResolverNotFound" || ((i = t.data) == null ? void 0 : i.errorName) === "ReverseAddressMismatch" || ((a = t.data) == null ? void 0 : a.errorName) === "UnsupportedResolverProfile" : !1;
}
function bm(e) {
  const { abi: t, data: n } = e, r = dn(n, 0, 4), s = t.find((o) => o.type === "function" && r === fr(Re(o)));
  if (!s)
    throw new l1(r, {
      docsPath: "/docs/contract/decodeFunctionData"
    });
  return {
    functionName: s.name,
    args: "inputs" in s && s.inputs && s.inputs.length > 0 ? pr(s.inputs, dn(n, 4)) : void 0
  };
}
const Vs = "/docs/contract/encodeErrorResult";
function Wa(e) {
  const { abi: t, errorName: n, args: r } = e;
  let s = t[0];
  if (n) {
    const c = jt({ abi: t, args: r, name: n });
    if (!c)
      throw new xa(n, { docsPath: Vs });
    s = c;
  }
  if (s.type !== "error")
    throw new xa(void 0, { docsPath: Vs });
  const o = Re(s), i = fr(o);
  let a = "0x";
  if (r && r.length > 0) {
    if (!s.inputs)
      throw new a1(s.name, { docsPath: Vs });
    a = Ut(s.inputs, r);
  }
  return vn([i, a]);
}
const Ws = "/docs/contract/encodeFunctionResult";
function gm(e) {
  const { abi: t, functionName: n, result: r } = e;
  let s = t[0];
  if (n) {
    const i = jt({ abi: t, name: n });
    if (!i)
      throw new an(n, { docsPath: Ws });
    s = i;
  }
  if (s.type !== "function")
    throw new an(void 0, { docsPath: Ws });
  if (!s.outputs)
    throw new nu(s.name, { docsPath: Ws });
  const o = (() => {
    if (s.outputs.length === 0)
      return [];
    if (s.outputs.length === 1)
      return [r];
    if (Array.isArray(r))
      return r;
    throw new ru(r);
  })();
  return Ut(s.outputs, o);
}
const vs = "x-batch-gateway:true";
async function wm(e) {
  const { data: t, ccipRequest: n } = e, { args: [r] } = bm({ abi: Ro, data: t }), s = [], o = [];
  return await Promise.all(r.map(async (i, a) => {
    try {
      o[a] = i.urls.includes(vs) ? await wm({ data: i.data, ccipRequest: n }) : await n(i), s[a] = !1;
    } catch (c) {
      s[a] = !0, o[a] = ym(c);
    }
  })), gm({
    abi: Ro,
    functionName: "query",
    result: [s, o]
  });
}
function ym(e) {
  return e.name === "HttpRequestError" && e.status ? Wa({
    abi: Ro,
    errorName: "HttpError",
    args: [e.status, e.shortMessage]
  }) : Wa({
    abi: [vu],
    errorName: "Error",
    args: ["shortMessage" in e ? e.shortMessage : e.message]
  });
}
function xl(e) {
  if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65)
    return null;
  const t = `0x${e.slice(1, 65)}`;
  return Ve(t) ? t : null;
}
function Mo(e) {
  let t = new Uint8Array(32).fill(0);
  if (!e)
    return se(t);
  const n = e.split(".");
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = xl(n[r]), o = s ? yn(s) : ie($t(n[r]), "bytes");
    t = ie(le([t, o]), "bytes");
  }
  return se(t);
}
function xm(e) {
  return `[${e.slice(2)}]`;
}
function vm(e) {
  const t = new Uint8Array(32).fill(0);
  return e ? xl(e) || ie($t(e)) : se(t);
}
function Ri(e) {
  const t = e.replace(/^\.|\.$/gm, "");
  if (t.length === 0)
    return new Uint8Array(1);
  const n = new Uint8Array($t(t).byteLength + 2);
  let r = 0;
  const s = t.split(".");
  for (let o = 0; o < s.length; o++) {
    let i = $t(s[o]);
    i.byteLength > 255 && (i = $t(xm(vm(s[o])))), n[r] = i.length, n.set(i, r + 1), r += i.length + 1;
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
}
async function Am(e, t) {
  const { blockNumber: n, blockTag: r, coinType: s, name: o, gatewayUrls: i, strict: a } = t, { chain: c } = e, u = (() => {
    if (t.universalResolverAddress)
      return t.universalResolverAddress;
    if (!c)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return En({
      blockNumber: n,
      chain: c,
      contract: "ensUniversalResolver"
    });
  })(), l = c == null ? void 0 : c.ensTlds;
  if (l && !l.some((f) => o.endsWith(f)))
    return null;
  const d = s != null ? [Mo(o), BigInt(s)] : [Mo(o)];
  try {
    const f = de({
      abi: Ha,
      functionName: "addr",
      args: d
    }), h = {
      address: u,
      abi: ol,
      functionName: "resolveWithGateways",
      args: [
        We(Ri(o)),
        f,
        i ?? [vs]
      ],
      blockNumber: n,
      blockTag: r
    }, m = await M(e, Me, "readContract")(h);
    if (m[0] === "0x")
      return null;
    const b = qt({
      abi: Ha,
      args: d,
      functionName: "addr",
      data: m[0]
    });
    return b === "0x" || mt(b) === "0x00" ? null : b;
  } catch (f) {
    if (a)
      throw f;
    if (Li(f))
      return null;
    throw f;
  }
}
class Em extends I {
  constructor({ data: t }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(t)}`
      ],
      name: "EnsAvatarInvalidMetadataError"
    });
  }
}
class In extends I {
  constructor({ reason: t }) {
    super(`ENS NFT avatar URI is invalid. ${t}`, {
      name: "EnsAvatarInvalidNftUriError"
    });
  }
}
class Fi extends I {
  constructor({ uri: t }) {
    super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
  }
}
class Cm extends I {
  constructor({ namespace: t }) {
    super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
  }
}
const Tm = /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, Sm = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, km = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, Pm = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function $m(e) {
  try {
    const t = await fetch(e, { method: "HEAD" });
    if (t.status === 200) {
      const n = t.headers.get("content-type");
      return n == null ? void 0 : n.startsWith("image/");
    }
    return !1;
  } catch (t) {
    return typeof t == "object" && typeof t.response < "u" || !Object.hasOwn(globalThis, "Image") ? !1 : new Promise((n) => {
      const r = new Image();
      r.onload = () => {
        n(!0);
      }, r.onerror = () => {
        n(!1);
      }, r.src = e;
    });
  }
}
function Za(e, t) {
  return e ? e.endsWith("/") ? e.slice(0, -1) : e : t;
}
function vl({ uri: e, gatewayUrls: t }) {
  const n = km.test(e);
  if (n)
    return { uri: e, isOnChain: !0, isEncoded: n };
  const r = Za(t == null ? void 0 : t.ipfs, "https://ipfs.io"), s = Za(t == null ? void 0 : t.arweave, "https://arweave.net"), o = e.match(Tm), { protocol: i, subpath: a, target: c, subtarget: u = "" } = (o == null ? void 0 : o.groups) || {}, l = i === "ipns:/" || a === "ipns/", d = i === "ipfs:/" || a === "ipfs/" || Sm.test(e);
  if (e.startsWith("http") && !l && !d) {
    let h = e;
    return t != null && t.arweave && (h = e.replace(/https:\/\/arweave.net/g, t == null ? void 0 : t.arweave)), { uri: h, isOnChain: !1, isEncoded: !1 };
  }
  if ((l || d) && c)
    return {
      uri: `${r}/${l ? "ipns" : "ipfs"}/${c}${u}`,
      isOnChain: !1,
      isEncoded: !1
    };
  if (i === "ar:/" && c)
    return {
      uri: `${s}/${c}${u || ""}`,
      isOnChain: !1,
      isEncoded: !1
    };
  let f = e.replace(Pm, "");
  if (f.startsWith("<svg") && (f = `data:image/svg+xml;base64,${btoa(f)}`), f.startsWith("data:") || f.startsWith("{"))
    return {
      uri: f,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new Fi({ uri: e });
}
function Al(e) {
  if (typeof e != "object" || !("image" in e) && !("image_url" in e) && !("image_data" in e))
    throw new Em({ data: e });
  return e.image || e.image_url || e.image_data;
}
async function Bm({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((s) => s.json());
    return await Oi({
      gatewayUrls: e,
      uri: Al(n)
    });
  } catch {
    throw new Fi({ uri: t });
  }
}
async function Oi({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = vl({ uri: t, gatewayUrls: e });
  if (r || await $m(n))
    return n;
  throw new Fi({ uri: t });
}
function Im(e) {
  let t = e;
  t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
  const [n, r, s] = t.split("/"), [o, i] = n.split(":"), [a, c] = r.split(":");
  if (!o || o.toLowerCase() !== "eip155")
    throw new In({ reason: "Only EIP-155 supported" });
  if (!i)
    throw new In({ reason: "Chain ID not found" });
  if (!c)
    throw new In({
      reason: "Contract address not found"
    });
  if (!s)
    throw new In({ reason: "Token ID not found" });
  if (!a)
    throw new In({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(i, 10),
    namespace: a.toLowerCase(),
    contractAddress: c,
    tokenID: s
  };
}
async function Nm(e, { nft: t }) {
  if (t.namespace === "erc721")
    return Me(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(t.tokenID)]
    });
  if (t.namespace === "erc1155")
    return Me(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(t.tokenID)]
    });
  throw new Cm({ namespace: t.namespace });
}
async function Lm(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n) ? Rm(e, { gatewayUrls: t, record: n }) : Oi({ uri: n, gatewayUrls: t });
}
async function Rm(e, { gatewayUrls: t, record: n }) {
  const r = Im(n), s = await Nm(e, { nft: r }), { uri: o, isOnChain: i, isEncoded: a } = vl({ uri: s, gatewayUrls: t });
  if (i && (o.includes("data:application/json;base64,") || o.startsWith("{"))) {
    const u = a ? (
      // if it is encoded, decode it
      atob(o.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      o
    ), l = JSON.parse(u);
    return Oi({ uri: Al(l), gatewayUrls: t });
  }
  let c = r.tokenID;
  return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), Bm({
    gatewayUrls: t,
    uri: o.replace(/(?:0x)?{id}/, c)
  });
}
async function El(e, t) {
  const { blockNumber: n, blockTag: r, key: s, name: o, gatewayUrls: i, strict: a } = t, { chain: c } = e, u = (() => {
    if (t.universalResolverAddress)
      return t.universalResolverAddress;
    if (!c)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return En({
      blockNumber: n,
      chain: c,
      contract: "ensUniversalResolver"
    });
  })(), l = c == null ? void 0 : c.ensTlds;
  if (l && !l.some((d) => o.endsWith(d)))
    return null;
  try {
    const d = {
      address: u,
      abi: ol,
      args: [
        We(Ri(o)),
        de({
          abi: qa,
          functionName: "text",
          args: [Mo(o), s]
        }),
        i ?? [vs]
      ],
      functionName: "resolveWithGateways",
      blockNumber: n,
      blockTag: r
    }, h = await M(e, Me, "readContract")(d);
    if (h[0] === "0x")
      return null;
    const p = qt({
      abi: qa,
      functionName: "text",
      data: h[0]
    });
    return p === "" ? null : p;
  } catch (d) {
    if (a)
      throw d;
    if (Li(d))
      return null;
    throw d;
  }
}
async function Fm(e, { blockNumber: t, blockTag: n, assetGatewayUrls: r, name: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  const c = await M(e, El, "getEnsText")({
    blockNumber: t,
    blockTag: n,
    key: "avatar",
    name: s,
    universalResolverAddress: a,
    gatewayUrls: o,
    strict: i
  });
  if (!c)
    return null;
  try {
    return await Lm(e, {
      record: c,
      gatewayUrls: r
    });
  } catch {
    return null;
  }
}
async function Om(e, t) {
  const { address: n, blockNumber: r, blockTag: s, coinType: o = 60n, gatewayUrls: i, strict: a } = t, { chain: c } = e, u = (() => {
    if (t.universalResolverAddress)
      return t.universalResolverAddress;
    if (!c)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return En({
      blockNumber: r,
      chain: c,
      contract: "ensUniversalResolver"
    });
  })();
  try {
    const l = {
      address: u,
      abi: Kp,
      args: [n, o, i ?? [vs]],
      functionName: "reverseWithGateways",
      blockNumber: r,
      blockTag: s
    }, d = M(e, Me, "readContract"), [f] = await d(l);
    return f || null;
  } catch (l) {
    if (a)
      throw l;
    if (Li(l))
      return null;
    throw l;
  }
}
async function _m(e, t) {
  const { blockNumber: n, blockTag: r, name: s } = t, { chain: o } = e, i = (() => {
    if (t.universalResolverAddress)
      return t.universalResolverAddress;
    if (!o)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return En({
      blockNumber: n,
      chain: o,
      contract: "ensUniversalResolver"
    });
  })(), a = o == null ? void 0 : o.ensTlds;
  if (a && !a.some((u) => s.endsWith(u)))
    throw new Error(`${s} is not a valid ENS TLD (${a == null ? void 0 : a.join(", ")}) for chain "${o.name}" (id: ${o.id}).`);
  const [c] = await M(e, Me, "readContract")({
    address: i,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [
          { type: "address" },
          { type: "bytes32" },
          { type: "uint256" }
        ],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [We(Ri(s))],
    blockNumber: n,
    blockTag: r
  });
  return c;
}
async function Cl(e, t) {
  var b, y, x;
  const { account: n = e.account, blockNumber: r, blockTag: s = "latest", blobs: o, data: i, gas: a, gasPrice: c, maxFeePerBlobGas: u, maxFeePerGas: l, maxPriorityFeePerGas: d, to: f, value: h, ...p } = t, m = n ? Y(n) : void 0;
  try {
    ct(t);
    const w = (typeof r == "bigint" ? U(r) : void 0) || s, T = (x = (y = (b = e.chain) == null ? void 0 : b.formatters) == null ? void 0 : y.transactionRequest) == null ? void 0 : x.format, E = (T || yt)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...An(p, { format: T }),
      account: m,
      blobs: o,
      data: i,
      gas: a,
      gasPrice: c,
      maxFeePerBlobGas: u,
      maxFeePerGas: l,
      maxPriorityFeePerGas: d,
      to: f,
      value: h
    }, "createAccessList"), A = await e.request({
      method: "eth_createAccessList",
      params: [E, w]
    });
    return {
      accessList: A.accessList,
      gasUsed: BigInt(A.gasUsed)
    };
  } catch (g) {
    throw ul(g, {
      ...t,
      account: m,
      chain: e.chain
    });
  }
}
async function Mm(e) {
  const t = ls(e, {
    method: "eth_newBlockFilter"
  }), n = await e.request({
    method: "eth_newBlockFilter"
  });
  return { id: n, request: t(n), type: "block" };
}
async function Tl(e, { address: t, args: n, event: r, events: s, fromBlock: o, strict: i, toBlock: a } = {}) {
  const c = s ?? (r ? [r] : void 0), u = ls(e, {
    method: "eth_newFilter"
  });
  let l = [];
  c && (l = [c.flatMap((h) => hr({
    abi: [h],
    eventName: h.name,
    args: n
  }))], r && (l = l[0]));
  const d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: t,
        fromBlock: typeof o == "bigint" ? U(o) : o,
        toBlock: typeof a == "bigint" ? U(a) : a,
        ...l.length ? { topics: l } : {}
      }
    ]
  });
  return {
    abi: c,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: o,
    id: d,
    request: u(d),
    strict: !!i,
    toBlock: a,
    type: "event"
  };
}
async function Sl(e) {
  const t = ls(e, {
    method: "eth_newPendingTransactionFilter"
  }), n = await e.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: n, request: t(n), type: "transaction" };
}
async function Dm(e, { address: t, blockNumber: n, blockTag: r = e.experimental_blockTag ?? "latest" }) {
  const s = typeof n == "bigint" ? U(n) : void 0, o = await e.request({
    method: "eth_getBalance",
    params: [t, s || r]
  });
  return BigInt(o);
}
async function zm(e) {
  const t = await e.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(t);
}
async function Um(e, { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}) {
  const s = n !== void 0 ? U(n) : void 0;
  let o;
  return t ? o = await e.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [t]
  }, { dedupe: !0 }) : o = await e.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [s || r]
  }, { dedupe: !!s }), Fe(o);
}
async function Do(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n !== void 0 ? U(n) : void 0, o = await e.request({
    method: "eth_getCode",
    params: [t, s || r]
  }, { dedupe: !!s });
  if (o !== "0x")
    return o;
}
class jm extends I {
  constructor({ address: t }) {
    super(`No EIP-712 domain found on contract "${t}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${t}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
}
async function qm(e, t) {
  const { address: n, factory: r, factoryData: s } = t;
  try {
    const [o, i, a, c, u, l, d] = await M(e, Me, "readContract")({
      abi: Hm,
      address: n,
      functionName: "eip712Domain",
      factory: r,
      factoryData: s
    });
    return {
      domain: {
        name: i,
        version: a,
        chainId: Number(c),
        verifyingContract: u,
        salt: l
      },
      extensions: d,
      fields: o
    };
  } catch (o) {
    const i = o;
    throw i.name === "ContractFunctionExecutionError" && i.cause.name === "ContractFunctionZeroDataError" ? new jm({ address: n }) : i;
  }
}
const Hm = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  }
];
function Gm(e) {
  var t;
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward: (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r)))
  };
}
async function Vm(e, { blockCount: t, blockNumber: n, blockTag: r = "latest", rewardPercentiles: s }) {
  const o = typeof n == "bigint" ? U(n) : void 0, i = await e.request({
    method: "eth_feeHistory",
    params: [
      U(t),
      o || r,
      s
    ]
  }, { dedupe: !!o });
  return Gm(i);
}
async function Wm(e, { filter: t }) {
  const n = t.strict ?? !1, s = (await t.request({
    method: "eth_getFilterLogs",
    params: [t.id]
  })).map((o) => ot(o));
  return t.abi ? Si({
    abi: t.abi,
    logs: s,
    strict: n
  }) : s;
}
async function Zm({ address: e, authorization: t, signature: n }) {
  return wr(Rn(e), await fs({
    authorization: t,
    signature: n
  }));
}
const Pr = /* @__PURE__ */ new xn(8192);
function Km(e, { enabled: t = !0, id: n }) {
  if (!t || !n)
    return e();
  if (Pr.get(n))
    return Pr.get(n);
  const r = e().finally(() => Pr.delete(n));
  return Pr.set(n, r), r;
}
function Qm(e, t = {}) {
  return async (n, r = {}) => {
    var d;
    const { dedupe: s = !1, methods: o, retryDelay: i = 150, retryCount: a = 3, uid: c } = {
      ...t,
      ...r
    }, { method: u } = n;
    if ((d = o == null ? void 0 : o.exclude) != null && d.includes(u))
      throw new St(new Error("method not supported"), {
        method: u
      });
    if (o != null && o.include && !o.include.includes(u))
      throw new St(new Error("method not supported"), {
        method: u
      });
    const l = s ? cn(`${c}.${be(n)}`) : void 0;
    return Km(() => Vr(async () => {
      try {
        return await e(n);
      } catch (f) {
        const h = f;
        switch (h.code) {
          // -32700
          case On.code:
            throw new On(h);
          // -32600
          case _n.code:
            throw new _n(h);
          // -32601
          case Mn.code:
            throw new Mn(h, { method: n.method });
          // -32602
          case Dn.code:
            throw new Dn(h);
          // -32603
          case Ot.code:
            throw new Ot(h);
          // -32000
          case gt.code:
            throw new gt(h);
          // -32001
          case zn.code:
            throw new zn(h);
          // -32002
          case Un.code:
            throw new Un(h);
          // -32003
          case jn.code:
            throw new jn(h);
          // -32004
          case St.code:
            throw new St(h, {
              method: n.method
            });
          // -32005
          case fn.code:
            throw new fn(h);
          // -32006
          case qn.code:
            throw new qn(h);
          // 4001
          case nn.code:
            throw new nn(h);
          // 4100
          case Hn.code:
            throw new Hn(h);
          // 4200
          case Gn.code:
            throw new Gn(h);
          // 4900
          case Vn.code:
            throw new Vn(h);
          // 4901
          case Wn.code:
            throw new Wn(h);
          // 4902
          case Zn.code:
            throw new Zn(h);
          // 5700
          case hn.code:
            throw new hn(h);
          // 5710
          case Kn.code:
            throw new Kn(h);
          // 5720
          case Qn.code:
            throw new Qn(h);
          // 5730
          case Xn.code:
            throw new Xn(h);
          // 5740
          case Yn.code:
            throw new Yn(h);
          // 5750
          case Jn.code:
            throw new Jn(h);
          // 5760
          case pn.code:
            throw new pn(h);
          // CAIP-25: User Rejected Error
          // https://docs.walletconnect.com/2.0/specs/clients/sign/error-codes#rejected-caip-25
          case 5e3:
            throw new nn(h);
          default:
            throw f instanceof I ? f : new zh(h);
        }
      }
    }, {
      delay: ({ count: f, error: h }) => {
        var p;
        if (h && h instanceof Bu) {
          const m = (p = h == null ? void 0 : h.headers) == null ? void 0 : p.get("Retry-After");
          if (m != null && m.match(/\d/))
            return Number.parseInt(m, 10) * 1e3;
        }
        return ~~(1 << f) * i;
      },
      retryCount: a,
      shouldRetry: ({ error: f }) => Xm(f)
    }), { enabled: s, id: l });
  };
}
function Xm(e) {
  return "code" in e && typeof e.code == "number" ? e.code === -1 || e.code === fn.code || e.code === Ot.code : e instanceof Bu && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0;
}
const Ym = `Ethereum Signed Message:
`;
function Jm(e) {
  const t = typeof e == "string" ? cn(e) : typeof e.raw == "string" ? e.raw : se(e.raw), n = cn(`${Ym}${ne(t)}`);
  return le([n, t]);
}
function kl(e, t) {
  return ie(Jm(e), t);
}
class eb extends I {
  constructor({ domain: t }) {
    super(`Invalid domain "${be(t)}".`, {
      metaMessages: ["Must be a valid EIP-712 domain."]
    });
  }
}
class tb extends I {
  constructor({ primaryType: t, types: n }) {
    super(`Invalid primary type \`${t}\` must be one of \`${JSON.stringify(Object.keys(n))}\`.`, {
      docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
  }
}
class nb extends I {
  constructor({ type: t }) {
    super(`Struct type "${t}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
}
function rb(e) {
  const { domain: t, message: n, primaryType: r, types: s } = e, o = (c, u) => {
    const l = { ...u };
    for (const d of c) {
      const { name: f, type: h } = d;
      h === "address" && (l[f] = l[f].toLowerCase());
    }
    return l;
  }, i = s.EIP712Domain ? t ? o(s.EIP712Domain, t) : {} : {}, a = (() => {
    if (r !== "EIP712Domain")
      return o(s[r], n);
  })();
  return be({ domain: i, message: a, primaryType: r, types: s });
}
function Pl(e) {
  const { domain: t, message: n, primaryType: r, types: s } = e, o = (i, a) => {
    for (const c of i) {
      const { name: u, type: l } = c, d = a[u], f = l.match(wu);
      if (f && (typeof d == "number" || typeof d == "bigint")) {
        const [m, b, y] = f;
        U(d, {
          signed: b === "int",
          size: Number.parseInt(y, 10) / 8
        });
      }
      if (l === "address" && typeof d == "string" && !Ie(d))
        throw new bt({ address: d });
      const h = l.match(rh);
      if (h) {
        const [m, b] = h;
        if (b && ne(d) !== Number.parseInt(b, 10))
          throw new f1({
            expectedSize: Number.parseInt(b, 10),
            givenSize: ne(d)
          });
      }
      const p = s[l];
      p && (sb(l), o(p, d));
    }
  };
  if (s.EIP712Domain && t) {
    if (typeof t != "object")
      throw new eb({ domain: t });
    o(s.EIP712Domain, t);
  }
  if (r !== "EIP712Domain")
    if (s[r])
      o(s[r], n);
    else
      throw new tb({ primaryType: r, types: s });
}
function $l({ domain: e }) {
  return [
    typeof (e == null ? void 0 : e.name) == "string" && { name: "name", type: "string" },
    (e == null ? void 0 : e.version) && { name: "version", type: "string" },
    (typeof (e == null ? void 0 : e.chainId) == "number" || typeof (e == null ? void 0 : e.chainId) == "bigint") && {
      name: "chainId",
      type: "uint256"
    },
    (e == null ? void 0 : e.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (e == null ? void 0 : e.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function sb(e) {
  if (e === "address" || e === "bool" || e === "string" || e.startsWith("bytes") || e.startsWith("uint") || e.startsWith("int"))
    throw new nb({ type: e });
}
function ob(e) {
  const { domain: t = {}, message: n, primaryType: r } = e, s = {
    EIP712Domain: $l({ domain: t }),
    ...e.types
  };
  Pl({
    domain: t,
    message: n,
    primaryType: r,
    types: s
  });
  const o = ["0x1901"];
  return t && o.push(ib({
    domain: t,
    types: s
  })), r !== "EIP712Domain" && o.push(Bl({
    data: n,
    primaryType: r,
    types: s
  })), ie(le(o));
}
function ib({ domain: e, types: t }) {
  return Bl({
    data: e,
    primaryType: "EIP712Domain",
    types: t
  });
}
function Bl({ data: e, primaryType: t, types: n }) {
  const r = Il({
    data: e,
    primaryType: t,
    types: n
  });
  return ie(r);
}
function Il({ data: e, primaryType: t, types: n }) {
  const r = [{ type: "bytes32" }], s = [ab({ primaryType: t, types: n })];
  for (const o of n[t]) {
    const [i, a] = Ll({
      types: n,
      name: o.name,
      type: o.type,
      value: e[o.name]
    });
    r.push(i), s.push(a);
  }
  return Ut(r, s);
}
function ab({ primaryType: e, types: t }) {
  const n = We(cb({ primaryType: e, types: t }));
  return ie(n);
}
function cb({ primaryType: e, types: t }) {
  let n = "";
  const r = Nl({ primaryType: e, types: t });
  r.delete(e);
  const s = [e, ...Array.from(r).sort()];
  for (const o of s)
    n += `${o}(${t[o].map(({ name: i, type: a }) => `${a} ${i}`).join(",")})`;
  return n;
}
function Nl({ primaryType: e, types: t }, n = /* @__PURE__ */ new Set()) {
  const r = e.match(/^\w*/u), s = r == null ? void 0 : r[0];
  if (n.has(s) || t[s] === void 0)
    return n;
  n.add(s);
  for (const o of t[s])
    Nl({ primaryType: o.type, types: t }, n);
  return n;
}
function Ll({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [
      { type: "bytes32" },
      ie(Il({ data: r, primaryType: n, types: e }))
    ];
  if (n === "bytes")
    return [{ type: "bytes32" }, ie(r)];
  if (n === "string")
    return [{ type: "bytes32" }, ie(We(r))];
  if (n.lastIndexOf("]") === n.length - 1) {
    const s = n.slice(0, n.lastIndexOf("[")), o = r.map((i) => Ll({
      name: t,
      type: s,
      types: e,
      value: i
    }));
    return [
      { type: "bytes32" },
      ie(Ut(o.map(([i]) => i), o.map(([, i]) => i)))
    ];
  }
  return [{ type: n }, r];
}
class ub extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = t;
  }
  get(t) {
    const n = super.get(t);
    return super.has(t) && n !== void 0 && (this.delete(t), super.set(t, n)), n;
  }
  set(t, n) {
    if (super.set(t, n), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
const lb = {
  checksum: /* @__PURE__ */ new ub(8192)
}, Zs = lb.checksum;
function Rl(e, t = {}) {
  const { as: n = typeof e == "string" ? "Hex" : "Bytes" } = t, r = hu($p(e));
  return n === "Bytes" ? r : _e(r);
}
const db = /^0x[a-fA-F0-9]{40}$/;
function As(e, t = {}) {
  const { strict: n = !0 } = t;
  if (!db.test(e))
    throw new Ka({
      address: e,
      cause: new fb()
    });
  if (n) {
    if (e.toLowerCase() === e)
      return;
    if (Fl(e) !== e)
      throw new Ka({
        address: e,
        cause: new hb()
      });
  }
}
function Fl(e) {
  if (Zs.has(e))
    return Zs.get(e);
  As(e, { strict: !1 });
  const t = e.substring(2).toLowerCase(), n = Rl(Ip(t), { as: "Bytes" }), r = t.split("");
  for (let o = 0; o < 40; o += 2)
    n[o >> 1] >> 4 >= 8 && r[o] && (r[o] = r[o].toUpperCase()), (n[o >> 1] & 15) >= 8 && r[o + 1] && (r[o + 1] = r[o + 1].toUpperCase());
  const s = `0x${r.join("")}`;
  return Zs.set(e, s), s;
}
function zo(e, t = {}) {
  const { strict: n = !0 } = t ?? {};
  try {
    return As(e, { strict: n }), !0;
  } catch {
    return !1;
  }
}
class Ka extends V {
  constructor({ address: t, cause: n }) {
    super(`Address "${t}" is invalid.`, {
      cause: n
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Address.InvalidAddressError"
    });
  }
}
class fb extends V {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Address.InvalidInputError"
    });
  }
}
class hb extends V {
  constructor() {
    super("Address does not match its checksum counterpart."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Address.InvalidChecksumError"
    });
  }
}
const pb = /^(.*)\[([0-9]*)\]$/, mb = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Ol = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, Qa = 2n ** 256n - 1n;
function rn(e, t, n) {
  const { checksumAddress: r, staticPosition: s } = n, o = Di(t.type);
  if (o) {
    const [i, a] = o;
    return gb(e, { ...t, type: a }, { checksumAddress: r, length: i, staticPosition: s });
  }
  if (t.type === "tuple")
    return vb(e, t, {
      checksumAddress: r,
      staticPosition: s
    });
  if (t.type === "address")
    return bb(e, { checksum: r });
  if (t.type === "bool")
    return wb(e);
  if (t.type.startsWith("bytes"))
    return yb(e, t, { staticPosition: s });
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return xb(e, t);
  if (t.type === "string")
    return Ab(e, { staticPosition: s });
  throw new Ui(t.type);
}
const Xa = 32, Uo = 32;
function bb(e, t = {}) {
  const { checksum: n = !1 } = t, r = e.readBytes(32);
  return [((o) => n ? Fl(o) : o)(_e(Lp(r, -20))), 32];
}
function gb(e, t, n) {
  const { checksumAddress: r, length: s, staticPosition: o } = n;
  if (!s) {
    const c = rt(e.readBytes(Uo)), u = o + c, l = u + Xa;
    e.setPosition(u);
    const d = rt(e.readBytes(Xa)), f = tr(t);
    let h = 0;
    const p = [];
    for (let m = 0; m < d; ++m) {
      e.setPosition(l + (f ? m * 32 : h));
      const [b, y] = rn(e, t, {
        checksumAddress: r,
        staticPosition: l
      });
      h += y, p.push(b);
    }
    return e.setPosition(o + 32), [p, 32];
  }
  if (tr(t)) {
    const c = rt(e.readBytes(Uo)), u = o + c, l = [];
    for (let d = 0; d < s; ++d) {
      e.setPosition(u + d * 32);
      const [f] = rn(e, t, {
        checksumAddress: r,
        staticPosition: u
      });
      l.push(f);
    }
    return e.setPosition(o + 32), [l, 32];
  }
  let i = 0;
  const a = [];
  for (let c = 0; c < s; ++c) {
    const [u, l] = rn(e, t, {
      checksumAddress: r,
      staticPosition: o + i
    });
    i += l, a.push(u);
  }
  return [a, i];
}
function wb(e) {
  return [Fp(e.readBytes(32), { size: 32 }), 32];
}
function yb(e, t, { staticPosition: n }) {
  const [r, s] = t.type.split("bytes");
  if (!s) {
    const i = rt(e.readBytes(32));
    e.setPosition(n + i);
    const a = rt(e.readBytes(32));
    if (a === 0)
      return e.setPosition(n + 32), ["0x", 32];
    const c = e.readBytes(a);
    return e.setPosition(n + 32), [_e(c), 32];
  }
  return [_e(e.readBytes(Number.parseInt(s, 10), 32)), 32];
}
function xb(e, t) {
  const n = t.type.startsWith("int"), r = Number.parseInt(t.type.split("int")[1] || "256", 10), s = e.readBytes(32);
  return [
    r > 48 ? Rp(s, { signed: n }) : rt(s, { signed: n }),
    32
  ];
}
function vb(e, t, n) {
  const { checksumAddress: r, staticPosition: s } = n, o = t.components.length === 0 || t.components.some(({ name: c }) => !c), i = o ? [] : {};
  let a = 0;
  if (tr(t)) {
    const c = rt(e.readBytes(Uo)), u = s + c;
    for (let l = 0; l < t.components.length; ++l) {
      const d = t.components[l];
      e.setPosition(u + a);
      const [f, h] = rn(e, d, {
        checksumAddress: r,
        staticPosition: u
      });
      a += h, i[o ? l : d == null ? void 0 : d.name] = f;
    }
    return e.setPosition(s + 32), [i, 32];
  }
  for (let c = 0; c < t.components.length; ++c) {
    const u = t.components[c], [l, d] = rn(e, u, {
      checksumAddress: r,
      staticPosition: s
    });
    i[o ? c : u == null ? void 0 : u.name] = l, a += d;
  }
  return [i, a];
}
function Ab(e, { staticPosition: t }) {
  const n = rt(e.readBytes(32)), r = t + n;
  e.setPosition(r);
  const s = rt(e.readBytes(32));
  if (s === 0)
    return e.setPosition(t + 32), ["", 32];
  const o = e.readBytes(s, 32), i = Op(Xu(o));
  return e.setPosition(t + 32), [i, 32];
}
function Eb({ checksumAddress: e, parameters: t, values: n }) {
  const r = [];
  for (let s = 0; s < t.length; s++)
    r.push(_i({
      checksumAddress: e,
      parameter: t[s],
      value: n[s]
    }));
  return r;
}
function _i({ checksumAddress: e = !1, parameter: t, value: n }) {
  const r = t, s = Di(r.type);
  if (s) {
    const [o, i] = s;
    return Tb(n, {
      checksumAddress: e,
      length: o,
      parameter: {
        ...r,
        type: i
      }
    });
  }
  if (r.type === "tuple")
    return Bb(n, {
      checksumAddress: e,
      parameter: r
    });
  if (r.type === "address")
    return Cb(n, {
      checksum: e
    });
  if (r.type === "bool")
    return kb(n);
  if (r.type.startsWith("uint") || r.type.startsWith("int")) {
    const o = r.type.startsWith("int"), [, , i = "256"] = Ol.exec(r.type) ?? [];
    return Pb(n, {
      signed: o,
      size: Number(i)
    });
  }
  if (r.type.startsWith("bytes"))
    return Sb(n, { type: r.type });
  if (r.type === "string")
    return $b(n);
  throw new Ui(r.type);
}
function Mi(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? t += 32 : t += Se(a);
  }
  const n = [], r = [];
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? (n.push(pe(t + s, { size: 32 })), r.push(a), s += Se(a)) : n.push(a);
  }
  return Oe(...n, ...r);
}
function Cb(e, t) {
  const { checksum: n = !1 } = t;
  return As(e, { strict: n }), {
    dynamic: !1,
    encoded: Mt(e.toLowerCase())
  };
}
function Tb(e, t) {
  const { checksumAddress: n, length: r, parameter: s } = t, o = r === null;
  if (!Array.isArray(e))
    throw new Db(e);
  if (!o && e.length !== r)
    throw new Mb({
      expectedLength: r,
      givenLength: e.length,
      type: `${s.type}[${r}]`
    });
  let i = !1;
  const a = [];
  for (let c = 0; c < e.length; c++) {
    const u = _i({
      checksumAddress: n,
      parameter: s,
      value: e[c]
    });
    u.dynamic && (i = !0), a.push(u);
  }
  if (o || i) {
    const c = Mi(a);
    if (o) {
      const u = pe(a.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: a.length > 0 ? Oe(u, c) : u
      };
    }
    if (i)
      return { dynamic: !0, encoded: c };
  }
  return {
    dynamic: !1,
    encoded: Oe(...a.map(({ encoded: c }) => c))
  };
}
function Sb(e, { type: t }) {
  const [, n] = t.split("bytes"), r = Se(e);
  if (!n) {
    let s = e;
    return r % 32 !== 0 && (s = Dt(s, Math.ceil((e.length - 2) / 2 / 32) * 32)), {
      dynamic: !0,
      encoded: Oe(Mt(pe(r, { size: 32 })), s)
    };
  }
  if (r !== Number.parseInt(n, 10))
    throw new Ml({
      expectedSize: Number.parseInt(n, 10),
      value: e
    });
  return { dynamic: !1, encoded: Dt(e) };
}
function kb(e) {
  if (typeof e != "boolean")
    throw new V(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: Mt(Yu(e)) };
}
function Pb(e, { signed: t, size: n }) {
  if (typeof n == "number") {
    const r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n, s = t ? -r - 1n : 0n;
    if (e > r || e < s)
      throw new tl({
        max: r.toString(),
        min: s.toString(),
        signed: t,
        size: n / 8,
        value: e.toString()
      });
  }
  return {
    dynamic: !1,
    encoded: pe(e, {
      size: 32,
      signed: t
    })
  };
}
function $b(e) {
  const t = Pi(e), n = Math.ceil(Se(t) / 32), r = [];
  for (let s = 0; s < n; s++)
    r.push(Dt(Ge(t, s * 32, (s + 1) * 32)));
  return {
    dynamic: !0,
    encoded: Oe(Dt(pe(Se(t), { size: 32 })), ...r)
  };
}
function Bb(e, t) {
  const { checksumAddress: n, parameter: r } = t;
  let s = !1;
  const o = [];
  for (let i = 0; i < r.components.length; i++) {
    const a = r.components[i], c = Array.isArray(e) ? i : a.name, u = _i({
      checksumAddress: n,
      parameter: a,
      value: e[c]
    });
    o.push(u), u.dynamic && (s = !0);
  }
  return {
    dynamic: s,
    encoded: s ? Mi(o) : Oe(...o.map(({ encoded: i }) => i))
  };
}
function Di(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? (
    // Return `null` if the array is dynamic.
    [t[2] ? Number(t[2]) : null, t[1]]
  ) : void 0;
}
function tr(e) {
  var r;
  const { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]"))
    return !0;
  if (t === "tuple")
    return (r = e.components) == null ? void 0 : r.some(tr);
  const n = Di(e.type);
  return !!(n && tr({
    ...e,
    type: n[1]
  }));
}
const Ib = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new Rb({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new Lb({
        length: this.bytes.length,
        position: e
      });
  },
  decrementPosition(e) {
    if (e < 0)
      throw new Ya({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), this.position = t;
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0)
      throw new Ya({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), this.position = t;
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
  },
  inspectUint8(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2);
  },
  inspectUint32(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length;
  },
  pushUint8(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2;
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3;
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4;
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    const n = this.inspectBytes(e);
    return this.position += t ?? e, n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint8();
    return this.position += 1, e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint16();
    return this.position += 2, e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint24();
    return this.position += 3, e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint32();
    return this.position += 4, e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    const t = this.position;
    return this.assertPosition(e), this.position = e, () => this.position = t;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
  }
};
function Nb(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(Ib);
  return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = /* @__PURE__ */ new Map(), n.recursiveReadLimit = t, n;
}
class Ya extends V {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Cursor.NegativeOffsetError"
    });
  }
}
class Lb extends V {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Cursor.PositionOutOfBoundsError"
    });
  }
}
class Rb extends V {
  constructor({ count: t, limit: n }) {
    super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Cursor.RecursiveReadLimitExceededError"
    });
  }
}
function Fb(e, t, n = {}) {
  const { as: r = "Array", checksumAddress: s = !1 } = n, o = typeof t == "string" ? Qu(t) : t, i = Nb(o);
  if (Yt(o) === 0 && e.length > 0)
    throw new _b();
  if (Yt(o) && Yt(o) < 32)
    throw new Ob({
      data: typeof t == "string" ? t : _e(t),
      parameters: e,
      size: Yt(o)
    });
  let a = 0;
  const c = r === "Array" ? [] : {};
  for (let u = 0; u < e.length; ++u) {
    const l = e[u];
    i.setPosition(a);
    const [d, f] = rn(i, l, {
      checksumAddress: s,
      staticPosition: 0
    });
    a += f, r === "Array" ? c.push(d) : c[l.name ?? u] = d;
  }
  return c;
}
function zi(e, t, n) {
  const { checksumAddress: r = !1 } = {};
  if (e.length !== t.length)
    throw new Dl({
      expectedLength: e.length,
      givenLength: t.length
    });
  const s = Eb({
    checksumAddress: r,
    parameters: e,
    values: t
  }), o = Mi(s);
  return o.length === 0 ? "0x" : o;
}
function jo(e, t) {
  if (e.length !== t.length)
    throw new Dl({
      expectedLength: e.length,
      givenLength: t.length
    });
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r], o = t[r];
    n.push(jo.encode(s, o));
  }
  return Oe(...n);
}
(function(e) {
  function t(n, r, s = !1) {
    if (n === "address") {
      const c = r;
      return As(c), Mt(c.toLowerCase(), s ? 32 : 0);
    }
    if (n === "string")
      return Pi(r);
    if (n === "bytes")
      return r;
    if (n === "bool")
      return Mt(Yu(r), s ? 32 : 1);
    const o = n.match(Ol);
    if (o) {
      const [c, u, l = "256"] = o, d = Number.parseInt(l, 10) / 8;
      return pe(r, {
        size: s ? 32 : d,
        signed: u === "int"
      });
    }
    const i = n.match(mb);
    if (i) {
      const [c, u] = i;
      if (Number.parseInt(u, 10) !== (r.length - 2) / 2)
        throw new Ml({
          expectedSize: Number.parseInt(u, 10),
          value: r
        });
      return Dt(r, s ? 32 : 0);
    }
    const a = n.match(pb);
    if (a && Array.isArray(r)) {
      const [c, u] = a, l = [];
      for (let d = 0; d < r.length; d++)
        l.push(t(u, r[d], !0));
      return l.length === 0 ? "0x" : Oe(...l);
    }
    throw new Ui(n);
  }
  e.encode = t;
})(jo || (jo = {}));
function _l(e) {
  return Array.isArray(e) && typeof e[0] == "string" || typeof e == "string" ? wa(e) : e;
}
class Ob extends V {
  constructor({ data: t, parameters: n, size: r }) {
    super(`Data size of ${r} bytes is too small for given parameters.`, {
      metaMessages: [
        `Params: (${Qt(n)})`,
        `Data:   ${t} (${r} bytes)`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiParameters.DataSizeTooSmallError"
    });
  }
}
class _b extends V {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiParameters.ZeroDataError"
    });
  }
}
class Mb extends V {
  constructor({ expectedLength: t, givenLength: n, type: r }) {
    super(`Array length mismatch for type \`${r}\`. Expected: \`${t}\`. Given: \`${n}\`.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiParameters.ArrayLengthMismatchError"
    });
  }
}
class Ml extends V {
  constructor({ expectedSize: t, value: n }) {
    super(`Size of bytes "${n}" (bytes${Se(n)}) does not match expected size (bytes${t}).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiParameters.BytesSizeMismatchError"
    });
  }
}
class Dl extends V {
  constructor({ expectedLength: t, givenLength: n }) {
    super([
      "ABI encoding parameters/values length mismatch.",
      `Expected length (parameters): ${t}`,
      `Given length (values): ${n}`
    ].join(`
`)), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiParameters.LengthMismatchError"
    });
  }
}
class Db extends V {
  constructor(t) {
    super(`Value \`${t}\` is not a valid array.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiParameters.InvalidArrayError"
    });
  }
}
class Ui extends V {
  constructor(t) {
    super(`Type \`${t}\` is not a valid ABI Type.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiParameters.InvalidTypeError"
    });
  }
}
class zl extends li {
  constructor(t, n) {
    super(), this.finished = !1, this.destroyed = !1, R1(t);
    const r = cs(n);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, o = new Uint8Array(s);
    o.set(r.length > s ? t.create().update(r).digest() : r);
    for (let i = 0; i < o.length; i++)
      o[i] ^= 54;
    this.iHash.update(o), this.oHash = t.create();
    for (let i = 0; i < o.length; i++)
      o[i] ^= 106;
    this.oHash.update(o), ln(o);
  }
  update(t) {
    return un(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    un(this), Ft(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: s, destroyed: o, blockLen: i, outputLen: a } = this;
    return t = t, t.finished = s, t.destroyed = o, t.blockLen = i, t.outputLen = a, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Ul = (e, t, n) => new zl(e, t).update(n).digest();
Ul.create = (e, t) => new zl(e, t);
function jl(e, t = {}) {
  const { recovered: n } = t;
  if (typeof e.r > "u")
    throw new Ks({ signature: e });
  if (typeof e.s > "u")
    throw new Ks({ signature: e });
  if (n && typeof e.yParity > "u")
    throw new Ks({ signature: e });
  if (e.r < 0n || e.r > Qa)
    throw new Vb({ value: e.r });
  if (e.s < 0n || e.s > Qa)
    throw new Wb({ value: e.s });
  if (typeof e.yParity == "number" && e.yParity !== 0 && e.yParity !== 1)
    throw new qi({ value: e.yParity });
}
function zb(e) {
  return ql(_e(e));
}
function ql(e) {
  if (e.length !== 130 && e.length !== 132)
    throw new Gb({ signature: e });
  const t = BigInt(Ge(e, 0, 32)), n = BigInt(Ge(e, 32, 64)), r = (() => {
    const s = +`0x${e.slice(130)}`;
    if (!Number.isNaN(s))
      try {
        return ji(s);
      } catch {
        throw new qi({ value: s });
      }
  })();
  return typeof r > "u" ? {
    r: t,
    s: n
  } : {
    r: t,
    s: n,
    yParity: r
  };
}
function Ub(e) {
  if (!(typeof e.r > "u") && !(typeof e.s > "u"))
    return jb(e);
}
function jb(e) {
  const t = typeof e == "string" ? ql(e) : e instanceof Uint8Array ? zb(e) : typeof e.r == "string" ? Hb(e) : e.v ? qb(e) : {
    r: e.r,
    s: e.s,
    ...typeof e.yParity < "u" ? { yParity: e.yParity } : {}
  };
  return jl(t), t;
}
function qb(e) {
  return {
    r: e.r,
    s: e.s,
    yParity: ji(e.v)
  };
}
function Hb(e) {
  const t = (() => {
    const n = e.v ? Number(e.v) : void 0;
    let r = e.yParity ? Number(e.yParity) : void 0;
    if (typeof n == "number" && typeof r != "number" && (r = ji(n)), typeof r != "number")
      throw new qi({ value: e.yParity });
    return r;
  })();
  return {
    r: BigInt(e.r),
    s: BigInt(e.s),
    yParity: t
  };
}
function ji(e) {
  if (e === 0 || e === 27)
    return 0;
  if (e === 1 || e === 28)
    return 1;
  if (e >= 35)
    return e % 2 === 0 ? 1 : 0;
  throw new Zb({ value: e });
}
class Gb extends V {
  constructor({ signature: t }) {
    super(`Value \`${t}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${Se(Hp(t))} bytes.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
}
class Ks extends V {
  constructor({ signature: t }) {
    super(`Signature \`${Ku(t)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.MissingPropertiesError"
    });
  }
}
class Vb extends V {
  constructor({ value: t }) {
    super(`Value \`${t}\` is an invalid r value. r must be a positive integer less than 2^256.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.InvalidRError"
    });
  }
}
class Wb extends V {
  constructor({ value: t }) {
    super(`Value \`${t}\` is an invalid s value. s must be a positive integer less than 2^256.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.InvalidSError"
    });
  }
}
class qi extends V {
  constructor({ value: t }) {
    super(`Value \`${t}\` is an invalid y-parity value. Y-parity must be 0 or 1.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.InvalidYParityError"
    });
  }
}
class Zb extends V {
  constructor({ value: t }) {
    super(`Value \`${t}\` is an invalid v value. v must be 27, 28 or >=35.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.InvalidVError"
    });
  }
}
function Kb(e, t = {}) {
  return typeof e.chainId == "string" ? Qb(e) : { ...e, ...t.signature };
}
function Qb(e) {
  const { address: t, chainId: n, nonce: r } = e, s = Ub(e);
  return {
    address: t,
    chainId: Number(n),
    nonce: BigInt(r),
    ...s
  };
}
const Xb = "0x8010801080108010801080108010801080108010801080108010801080108010", Yb = _l("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");
function Hl(e) {
  if (typeof e == "string") {
    if (Ge(e, -32) !== Xb)
      throw new tg(e);
  } else
    jl(e.authorization);
}
function Jb(e) {
  Hl(e);
  const t = el(Ge(e, -64, -32)), n = Ge(e, -t - 64, -64), r = Ge(e, 0, -t - 64), [s, o, i] = Fb(Yb, n);
  return {
    authorization: Kb({
      address: s.delegation,
      chainId: Number(s.chainId),
      nonce: s.nonce,
      yParity: s.yParity,
      r: s.r,
      s: s.s
    }),
    signature: r,
    ...i && i !== "0x" ? { data: i, to: o } : {}
  };
}
function eg(e) {
  try {
    return Hl(e), !0;
  } catch {
    return !1;
  }
}
let tg = class extends V {
  constructor(t) {
    super(`Value \`${t}\` is an invalid ERC-8010 wrapped signature.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SignatureErc8010.InvalidWrappedSignatureError"
    });
  }
};
class ng extends I {
  constructor({ value: t }) {
    super(`Number \`${t}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError"
    });
  }
}
function Gl(e, t) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))
    throw new ng({ value: e });
  let [n, r = "0"] = e.split(".");
  const s = n.startsWith("-");
  if (s && (n = n.slice(1)), r = r.replace(/(0+)$/, ""), t === 0)
    Math.round(+`.${r}`) === 1 && (n = `${BigInt(n) + 1n}`), r = "";
  else if (r.length > t) {
    const [o, i, a] = [
      r.slice(0, t - 1),
      r.slice(t - 1, t),
      r.slice(t)
    ], c = Math.round(+`${i}.${a}`);
    c > 9 ? r = `${BigInt(o) + BigInt(1)}0`.padStart(o.length + 1, "0") : r = `${o}${c}`, r.length > t && (r = r.slice(1), n = `${BigInt(n) + 1n}`), r = r.slice(0, t);
  } else
    r = r.padEnd(t, "0");
  return BigInt(`${s ? "-" : ""}${n}${r}`);
}
function rg(e) {
  return e.map((t) => ({
    ...t,
    value: BigInt(t.value)
  }));
}
function sg(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? Fe(e.nonce) : void 0,
    storageProof: e.storageProof ? rg(e.storageProof) : void 0
  };
}
async function og(e, { address: t, blockNumber: n, blockTag: r, storageKeys: s }) {
  const o = r ?? "latest", i = n !== void 0 ? U(n) : void 0, a = await e.request({
    method: "eth_getProof",
    params: [t, s, i || o]
  });
  return sg(a);
}
async function ig(e, { address: t, blockNumber: n, blockTag: r = "latest", slot: s }) {
  const o = n !== void 0 ? U(n) : void 0;
  return await e.request({
    method: "eth_getStorageAt",
    params: [t, s, o || r]
  });
}
async function Hi(e, { blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o, sender: i, nonce: a }) {
  var f, h, p;
  const c = r || "latest", u = n !== void 0 ? U(n) : void 0;
  let l = null;
  if (s ? l = await e.request({
    method: "eth_getTransactionByHash",
    params: [s]
  }, { dedupe: !0 }) : t ? l = await e.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [t, U(o)]
  }, { dedupe: !0 }) : typeof o == "number" ? l = await e.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [u || c, U(o)]
  }, { dedupe: !!u }) : i && typeof a == "number" && (l = await e.request({
    method: "eth_getTransactionBySenderAndNonce",
    params: [i, U(a)]
  }, { dedupe: !0 })), !l)
    throw new Cu({
      blockHash: t,
      blockNumber: n,
      blockTag: c,
      hash: s,
      index: o
    });
  return (((p = (h = (f = e.chain) == null ? void 0 : f.formatters) == null ? void 0 : h.transaction) == null ? void 0 : p.format) || yi)(l, "getTransaction");
}
async function ag(e, { hash: t, transactionReceipt: n }) {
  const [r, s] = await Promise.all([
    M(e, xr, "getBlockNumber")({}),
    t ? M(e, Hi, "getTransaction")({ hash: t }) : void 0
  ]), o = (n == null ? void 0 : n.blockNumber) || (s == null ? void 0 : s.blockNumber);
  return o ? r - o + 1n : 0n;
}
async function Fr(e, { hash: t }) {
  var s, o, i;
  const n = await e.request({
    method: "eth_getTransactionReceipt",
    params: [t]
  }, { dedupe: !0 });
  if (!n)
    throw new Tu({ hash: t });
  return (((i = (o = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionReceipt) == null ? void 0 : i.format) || fl)(n, "getTransactionReceipt");
}
async function cg(e, t) {
  var x;
  const { account: n, authorizationList: r, allowFailure: s = !0, blockNumber: o, blockOverrides: i, blockTag: a, stateOverride: c } = t, u = t.contracts, { batchSize: l = t.batchSize ?? 1024, deployless: d = t.deployless ?? !1 } = typeof ((x = e.batch) == null ? void 0 : x.multicall) == "object" ? e.batch.multicall : {}, f = (() => {
    if (t.multicallAddress)
      return t.multicallAddress;
    if (d)
      return null;
    if (e.chain)
      return En({
        blockNumber: o,
        chain: e.chain,
        contract: "multicall3"
      });
    throw new Error("client chain not configured. multicallAddress is required.");
  })(), h = [[]];
  let p = 0, m = 0;
  for (let g = 0; g < u.length; g++) {
    const { abi: w, address: T, args: k, functionName: E } = u[g];
    try {
      const A = de({ abi: w, args: k, functionName: E });
      m += (A.length - 2) / 2, // Check if batching is enabled.
      l > 0 && // Check if the current size of the batch exceeds the size limit.
      m > l && // Check if the current chunk is not already empty.
      h[p].length > 0 && (p++, m = (A.length - 2) / 2, h[p] = []), h[p] = [
        ...h[p],
        {
          allowFailure: !0,
          callData: A,
          target: T
        }
      ];
    } catch (A) {
      const P = _t(A, {
        abi: w,
        address: T,
        args: k,
        docsPath: "/docs/contract/multicall",
        functionName: E,
        sender: n
      });
      if (!s)
        throw P;
      h[p] = [
        ...h[p],
        {
          allowFailure: !0,
          callData: "0x",
          target: T
        }
      ];
    }
  }
  const b = await Promise.allSettled(h.map((g) => M(e, Me, "readContract")({
    ...f === null ? { code: $i } : { address: f },
    abi: Gr,
    account: n,
    args: [g],
    authorizationList: r,
    blockNumber: o,
    blockOverrides: i,
    blockTag: a,
    functionName: "aggregate3",
    stateOverride: c
  }))), y = [];
  for (let g = 0; g < b.length; g++) {
    const w = b[g];
    if (w.status === "rejected") {
      if (!s)
        throw w.reason;
      for (let k = 0; k < h[g].length; k++)
        y.push({
          status: "failure",
          error: w.reason,
          result: void 0
        });
      continue;
    }
    const T = w.value;
    for (let k = 0; k < T.length; k++) {
      const { returnData: E, success: A } = T[k], { callData: P } = h[g][k], { abi: F, address: $, functionName: L, args: R } = u[y.length];
      try {
        if (P === "0x")
          throw new lr();
        if (!A)
          throw new ds({ data: E });
        const D = qt({
          abi: F,
          args: R,
          data: E,
          functionName: L
        });
        y.push(s ? { result: D, status: "success" } : D);
      } catch (D) {
        const v = _t(D, {
          abi: F,
          address: $,
          args: R,
          docsPath: "/docs/contract/multicall",
          functionName: L
        });
        if (!s)
          throw v;
        y.push({ error: v, result: void 0, status: "failure" });
      }
    }
  }
  if (y.length !== u.length)
    throw new I("multicall results mismatch");
  return y;
}
async function qo(e, t) {
  const { blockNumber: n, blockTag: r = e.experimental_blockTag ?? "latest", blocks: s, returnFullTransactions: o, traceTransfers: i, validation: a } = t;
  try {
    const c = [];
    for (const f of s) {
      const h = f.blockOverrides ? rl(f.blockOverrides) : void 0, p = f.calls.map((b) => {
        const y = b, x = y.account ? Y(y.account) : void 0, g = y.abi ? de(y) : y.data, w = {
          ...y,
          account: x,
          data: y.dataSuffix ? le([g || "0x", y.dataSuffix]) : g,
          from: y.from ?? (x == null ? void 0 : x.address)
        };
        return ct(w), yt(w);
      }), m = f.stateOverrides ? gi(f.stateOverrides) : void 0;
      c.push({
        blockOverrides: h,
        calls: p,
        stateOverrides: m
      });
    }
    const l = (typeof n == "bigint" ? U(n) : void 0) || r;
    return (await e.request({
      method: "eth_simulateV1",
      params: [
        { blockStateCalls: c, returnFullTransactions: o, traceTransfers: i, validation: a },
        l
      ]
    })).map((f, h) => ({
      ...Mu(f),
      calls: f.calls.map((p, m) => {
        var F, $;
        const { abi: b, args: y, functionName: x, to: g } = s[h].calls[m], w = ((F = p.error) == null ? void 0 : F.data) ?? p.returnData, T = BigInt(p.gasUsed), k = ($ = p.logs) == null ? void 0 : $.map((L) => ot(L)), E = p.status === "0x1" ? "success" : "failure", A = b && E === "success" && w !== "0x" ? qt({
          abi: b,
          data: w,
          functionName: x
        }) : null, P = (() => {
          if (E === "success")
            return;
          let L;
          if (w === "0x" ? L = new lr() : w && (L = new ds({ data: w })), !!L)
            return _t(L, {
              abi: b ?? [],
              address: g ?? "0x",
              args: y,
              functionName: x ?? "<unknown>"
            });
        })();
        return {
          data: w,
          gasUsed: T,
          logs: k,
          status: E,
          ...E === "success" ? {
            result: A
          } : {
            error: P
          }
        };
      })
    }));
  } catch (c) {
    const u = c, l = hs(u, {});
    throw l instanceof br ? u : l;
  }
}
function Ho(e) {
  let t = !0, n = "", r = 0, s = "", o = !1;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (["(", ")", ","].includes(a) && (t = !0), a === "(" && r++, a === ")" && r--, !!t) {
      if (r === 0) {
        if (a === " " && ["event", "function", "error", ""].includes(s))
          s = "";
        else if (s += a, a === ")") {
          o = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        e[i - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
        continue;
      }
      s += a, n += a;
    }
  }
  if (!o)
    throw new V("Unable to normalize signature.");
  return s;
}
function Go(e, t) {
  const n = typeof e, r = t.type;
  switch (r) {
    case "address":
      return zo(e, { strict: !1 });
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in t ? Object.values(t.components).every((s, o) => Go(Object.values(e)[o], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every((s) => Go(s, {
        ...t,
        // Pop off `[]` or `[M]` from end of type
        type: r.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function Vl(e, t, n) {
  for (const r in e) {
    const s = e[r], o = t[r];
    if (s.type === "tuple" && o.type === "tuple" && "components" in s && "components" in o)
      return Vl(s.components, o.components, n[r]);
    const i = [s.type, o.type];
    if (i.includes("address") && i.includes("bytes20") ? !0 : i.includes("address") && i.includes("string") ? zo(n[r], {
      strict: !1
    }) : i.includes("address") && i.includes("bytes") ? zo(n[r], {
      strict: !1
    }) : !1)
      return i;
  }
}
function Wl(e, t = {}) {
  const { prepare: n = !0 } = t, r = Array.isArray(e) || typeof e == "string" ? ga(e) : e;
  return {
    ...r,
    ...n ? { hash: Jt(r) } : {}
  };
}
function Es(e, t, n) {
  const { args: r = [], prepare: s = !0 } = n ?? {}, o = Gp(t, { strict: !1 }), i = e.filter((u) => o ? u.type === "function" || u.type === "error" ? Zl(u) === Ge(t, 0, 4) : u.type === "event" ? Jt(u) === t : !1 : "name" in u && u.name === t);
  if (i.length === 0)
    throw new Wr({ name: t });
  if (i.length === 1)
    return {
      ...i[0],
      ...s ? { hash: Jt(i[0]) } : {}
    };
  let a;
  for (const u of i) {
    if (!("inputs" in u))
      continue;
    if (!r || r.length === 0) {
      if (!u.inputs || u.inputs.length === 0)
        return {
          ...u,
          ...s ? { hash: Jt(u) } : {}
        };
      continue;
    }
    if (!u.inputs || u.inputs.length === 0 || u.inputs.length !== r.length)
      continue;
    if (r.every((d, f) => {
      const h = "inputs" in u && u.inputs[f];
      return h ? Go(d, h) : !1;
    })) {
      if (a && "inputs" in a && a.inputs) {
        const d = Vl(u.inputs, a.inputs, r);
        if (d)
          throw new lg({
            abiItem: u,
            type: d[0]
          }, {
            abiItem: a,
            type: d[1]
          });
      }
      a = u;
    }
  }
  const c = (() => {
    if (a)
      return a;
    const [u, ...l] = i;
    return { ...u, overloads: l };
  })();
  if (!c)
    throw new Wr({ name: t });
  return {
    ...c,
    ...s ? { hash: Jt(c) } : {}
  };
}
function Zl(...e) {
  const t = (() => {
    if (Array.isArray(e[0])) {
      const [n, r] = e;
      return Es(n, r);
    }
    return e[0];
  })();
  return Ge(Jt(t), 0, 4);
}
function ug(...e) {
  const t = (() => {
    if (Array.isArray(e[0])) {
      const [r, s] = e;
      return Es(r, s);
    }
    return e[0];
  })(), n = typeof t == "string" ? t : Dr(t);
  return Ho(n);
}
function Jt(...e) {
  const t = (() => {
    if (Array.isArray(e[0])) {
      const [n, r] = e;
      return Es(n, r);
    }
    return e[0];
  })();
  return typeof t != "string" && "hash" in t && t.hash ? t.hash : Rl(Pi(ug(t)));
}
class lg extends V {
  constructor(t, n) {
    super("Found ambiguous types in overloaded ABI Items.", {
      metaMessages: [
        // TODO: abitype to add support for signature-formatted ABI items.
        `\`${t.type}\` in \`${Ho(Dr(t.abiItem))}\`, and`,
        `\`${n.type}\` in \`${Ho(Dr(n.abiItem))}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiItem.AmbiguityError"
    });
  }
}
class Wr extends V {
  constructor({ name: t, data: n, type: r = "item" }) {
    const s = t ? ` with name "${t}"` : n ? ` with data "${n}"` : "";
    super(`ABI ${r}${s} not found.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiItem.NotFoundError"
    });
  }
}
function dg(...e) {
  var o;
  const [t, n] = (() => {
    if (Array.isArray(e[0])) {
      const [i, a] = e;
      return [hg(i), a];
    }
    return e;
  })(), { bytecode: r, args: s } = n;
  return Oe(r, (o = t.inputs) != null && o.length && (s != null && s.length) ? zi(t.inputs, s) : "0x");
}
function fg(e) {
  return Wl(e);
}
function hg(e) {
  const t = e.find((n) => n.type === "constructor");
  if (!t)
    throw new Wr({ name: "constructor" });
  return t;
}
function pg(...e) {
  const [t, n = []] = (() => {
    if (Array.isArray(e[0])) {
      const [u, l, d] = e;
      return [Ja(u, l, { args: d }), d];
    }
    const [a, c] = e;
    return [a, c];
  })(), { overloads: r } = t, s = r ? Ja([t, ...r], t.name, {
    args: n
  }) : t, o = mg(s), i = n.length > 0 ? zi(s.inputs, n) : void 0;
  return i ? Oe(o, i) : o;
}
function Wt(e, t = {}) {
  return Wl(e, t);
}
function Ja(e, t, n) {
  const r = Es(e, t, n);
  if (r.type !== "function")
    throw new Wr({ name: t, type: "function" });
  return r;
}
function mg(e) {
  return Zl(e);
}
const bg = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", je = "0x0000000000000000000000000000000000000000", gg = "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033";
async function wg(e, t) {
  const { blockNumber: n, blockTag: r, calls: s, stateOverrides: o, traceAssetChanges: i, traceTransfers: a, validation: c } = t, u = t.account ? Y(t.account) : void 0;
  if (i && !u)
    throw new I("`account` is required when `traceAssetChanges` is true");
  const l = u ? dg(fg("constructor(bytes, bytes)"), {
    bytecode: al,
    args: [
      gg,
      pg(Wt("function getBalance(address)"), [u.address])
    ]
  }) : void 0, d = i ? await Promise.all(t.calls.map(async (B) => {
    if (!B.data && !B.abi)
      return;
    const { accessList: _ } = await Cl(e, {
      account: u.address,
      ...B,
      data: B.abi ? de(B) : B.data
    });
    return _.map(({ address: z, storageKeys: H }) => H.length > 0 ? z : null);
  })).then((B) => B.flat().filter(Boolean)) : [], f = await qo(e, {
    blockNumber: n,
    blockTag: r,
    blocks: [
      ...i ? [
        // ETH pre balances
        {
          calls: [{ data: l }],
          stateOverrides: o
        },
        // Asset pre balances
        {
          calls: d.map((B, _) => ({
            abi: [
              Wt("function balanceOf(address) returns (uint256)")
            ],
            functionName: "balanceOf",
            args: [u.address],
            to: B,
            from: je,
            nonce: _
          })),
          stateOverrides: [
            {
              address: je,
              nonce: 0
            }
          ]
        }
      ] : [],
      {
        calls: [...s, {}].map((B) => ({
          ...B,
          from: u == null ? void 0 : u.address
        })),
        stateOverrides: o
      },
      ...i ? [
        // ETH post balances
        {
          calls: [{ data: l }]
        },
        // Asset post balances
        {
          calls: d.map((B, _) => ({
            abi: [
              Wt("function balanceOf(address) returns (uint256)")
            ],
            functionName: "balanceOf",
            args: [u.address],
            to: B,
            from: je,
            nonce: _
          })),
          stateOverrides: [
            {
              address: je,
              nonce: 0
            }
          ]
        },
        // Decimals
        {
          calls: d.map((B, _) => ({
            to: B,
            abi: [
              Wt("function decimals() returns (uint256)")
            ],
            functionName: "decimals",
            from: je,
            nonce: _
          })),
          stateOverrides: [
            {
              address: je,
              nonce: 0
            }
          ]
        },
        // Token URI
        {
          calls: d.map((B, _) => ({
            to: B,
            abi: [
              Wt("function tokenURI(uint256) returns (string)")
            ],
            functionName: "tokenURI",
            args: [0n],
            from: je,
            nonce: _
          })),
          stateOverrides: [
            {
              address: je,
              nonce: 0
            }
          ]
        },
        // Symbols
        {
          calls: d.map((B, _) => ({
            to: B,
            abi: [Wt("function symbol() returns (string)")],
            functionName: "symbol",
            from: je,
            nonce: _
          })),
          stateOverrides: [
            {
              address: je,
              nonce: 0
            }
          ]
        }
      ] : []
    ],
    traceTransfers: a,
    validation: c
  }), h = i ? f[2] : f[0], [p, m, , b, y, x, g, w] = i ? f : [], { calls: T, ...k } = h, E = T.slice(0, -1) ?? [], A = (p == null ? void 0 : p.calls) ?? [], P = (m == null ? void 0 : m.calls) ?? [], F = [...A, ...P].map((B) => B.status === "success" ? ue(B.data) : null), $ = (b == null ? void 0 : b.calls) ?? [], L = (y == null ? void 0 : y.calls) ?? [], R = [...$, ...L].map((B) => B.status === "success" ? ue(B.data) : null), D = ((x == null ? void 0 : x.calls) ?? []).map((B) => B.status === "success" ? B.result : null), v = ((w == null ? void 0 : w.calls) ?? []).map((B) => B.status === "success" ? B.result : null), S = ((g == null ? void 0 : g.calls) ?? []).map((B) => B.status === "success" ? B.result : null), O = [];
  for (const [B, _] of R.entries()) {
    const z = F[B];
    if (typeof _ != "bigint" || typeof z != "bigint")
      continue;
    const H = D[B - 1], Z = v[B - 1], J = S[B - 1], Q = B === 0 ? {
      address: bg,
      decimals: 18,
      symbol: "ETH"
    } : {
      address: d[B - 1],
      decimals: J || H ? Number(H ?? 1) : void 0,
      symbol: Z ?? void 0
    };
    O.some((te) => te.token.address === Q.address) || O.push({
      token: Q,
      value: {
        pre: z,
        post: _,
        diff: _ - z
      }
    });
  }
  return {
    assetChanges: O,
    block: k,
    results: E
  };
}
const Kl = "0x6492649264926492649264926492649264926492649264926492649264926492";
function yg(e) {
  if (Ge(e, -32) !== Kl)
    throw new Ag(e);
}
function xg(e) {
  const { data: t, signature: n, to: r } = e;
  return Oe(zi(_l("address, bytes, bytes"), [
    r,
    t,
    n
  ]), Kl);
}
function vg(e) {
  try {
    return yg(e), !0;
  } catch {
    return !1;
  }
}
class Ag extends V {
  constructor(t) {
    super(`Value \`${t}\` is an invalid ERC-6492 wrapped signature.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SignatureErc6492.InvalidWrappedSignatureError"
    });
  }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Gi = /* @__PURE__ */ BigInt(0), Vo = /* @__PURE__ */ BigInt(1);
function vr(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function Vi(e) {
  if (!vr(e))
    throw new Error("Uint8Array expected");
}
function nr(e, t) {
  if (typeof t != "boolean")
    throw new Error(e + " boolean expected, got " + t);
}
function $r(e) {
  const t = e.toString(16);
  return t.length & 1 ? "0" + t : t;
}
function Ql(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return e === "" ? Gi : BigInt("0x" + e);
}
const Xl = (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function"
), Eg = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function rr(e) {
  if (Vi(e), Xl)
    return e.toHex();
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += Eg[e[n]];
  return t;
}
const Ye = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function ec(e) {
  if (e >= Ye._0 && e <= Ye._9)
    return e - Ye._0;
  if (e >= Ye.A && e <= Ye.F)
    return e - (Ye.A - 10);
  if (e >= Ye.a && e <= Ye.f)
    return e - (Ye.a - 10);
}
function Zr(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  if (Xl)
    return Uint8Array.fromHex(e);
  const t = e.length, n = t / 2;
  if (t % 2)
    throw new Error("hex string expected, got unpadded hex of length " + t);
  const r = new Uint8Array(n);
  for (let s = 0, o = 0; s < n; s++, o += 2) {
    const i = ec(e.charCodeAt(o)), a = ec(e.charCodeAt(o + 1));
    if (i === void 0 || a === void 0) {
      const c = e[o] + e[o + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + o);
    }
    r[s] = i * 16 + a;
  }
  return r;
}
function It(e) {
  return Ql(rr(e));
}
function Yl(e) {
  return Vi(e), Ql(rr(Uint8Array.from(e).reverse()));
}
function Ar(e, t) {
  return Zr(e.toString(16).padStart(t * 2, "0"));
}
function Jl(e, t) {
  return Ar(e, t).reverse();
}
function Be(e, t, n) {
  let r;
  if (typeof t == "string")
    try {
      r = Zr(t);
    } catch (o) {
      throw new Error(e + " must be hex string or Uint8Array, cause: " + o);
    }
  else if (vr(t))
    r = Uint8Array.from(t);
  else
    throw new Error(e + " must be hex string or Uint8Array");
  const s = r.length;
  if (typeof n == "number" && s !== n)
    throw new Error(e + " of length " + n + " expected, got " + s);
  return r;
}
function Kr(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    Vi(s), t += s.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, s = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
const Qs = (e) => typeof e == "bigint" && Gi <= e;
function Wi(e, t, n) {
  return Qs(e) && Qs(t) && Qs(n) && t <= e && e < n;
}
function sn(e, t, n, r) {
  if (!Wi(t, n, r))
    throw new Error("expected valid " + e + ": " + n + " <= n < " + r + ", got " + t);
}
function Cg(e) {
  let t;
  for (t = 0; e > Gi; e >>= Vo, t += 1)
    ;
  return t;
}
const Cs = (e) => (Vo << BigInt(e)) - Vo, Xs = (e) => new Uint8Array(e), tc = (e) => Uint8Array.from(e);
function Tg(e, t, n) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = Xs(e), s = Xs(e), o = 0;
  const i = () => {
    r.fill(1), s.fill(0), o = 0;
  }, a = (...d) => n(s, r, ...d), c = (d = Xs(0)) => {
    s = a(tc([0]), d), r = a(), d.length !== 0 && (s = a(tc([1]), d), r = a());
  }, u = () => {
    if (o++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const f = [];
    for (; d < t; ) {
      r = a();
      const h = r.slice();
      f.push(h), d += r.length;
    }
    return Kr(...f);
  };
  return (d, f) => {
    i(), c(d);
    let h;
    for (; !(h = f(u())); )
      c();
    return i(), h;
  };
}
const Sg = {
  bigint: (e) => typeof e == "bigint",
  function: (e) => typeof e == "function",
  boolean: (e) => typeof e == "boolean",
  string: (e) => typeof e == "string",
  stringOrUint8Array: (e) => typeof e == "string" || vr(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function Ts(e, t, n = {}) {
  const r = (s, o, i) => {
    const a = Sg[o];
    if (typeof a != "function")
      throw new Error("invalid validator function");
    const c = e[s];
    if (!(i && c === void 0) && !a(c, e))
      throw new Error("param " + String(s) + " is invalid. Expected " + o + ", got " + c);
  };
  for (const [s, o] of Object.entries(t))
    r(s, o, !1);
  for (const [s, o] of Object.entries(n))
    r(s, o, !0);
  return e;
}
function nc(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, ...r) => {
    const s = t.get(n);
    if (s !== void 0)
      return s;
    const o = e(n, ...r);
    return t.set(n, o), o;
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const we = BigInt(0), me = BigInt(1), kt = /* @__PURE__ */ BigInt(2), kg = /* @__PURE__ */ BigInt(3), e0 = /* @__PURE__ */ BigInt(4), t0 = /* @__PURE__ */ BigInt(5), n0 = /* @__PURE__ */ BigInt(8);
function ge(e, t) {
  const n = e % t;
  return n >= we ? n : t + n;
}
function $e(e, t, n) {
  let r = e;
  for (; t-- > we; )
    r *= r, r %= n;
  return r;
}
function Wo(e, t) {
  if (e === we)
    throw new Error("invert: expected non-zero number");
  if (t <= we)
    throw new Error("invert: expected positive modulus, got " + t);
  let n = ge(e, t), r = t, s = we, o = me;
  for (; n !== we; ) {
    const a = r / n, c = r % n, u = s - o * a;
    r = n, n = c, s = o, o = u;
  }
  if (r !== me)
    throw new Error("invert: does not exist");
  return ge(s, t);
}
function r0(e, t) {
  const n = (e.ORDER + me) / e0, r = e.pow(t, n);
  if (!e.eql(e.sqr(r), t))
    throw new Error("Cannot find square root");
  return r;
}
function Pg(e, t) {
  const n = (e.ORDER - t0) / n0, r = e.mul(t, kt), s = e.pow(r, n), o = e.mul(t, s), i = e.mul(e.mul(o, kt), s), a = e.mul(o, e.sub(i, e.ONE));
  if (!e.eql(e.sqr(a), t))
    throw new Error("Cannot find square root");
  return a;
}
function $g(e) {
  if (e < BigInt(3))
    throw new Error("sqrt is not defined for small field");
  let t = e - me, n = 0;
  for (; t % kt === we; )
    t /= kt, n++;
  let r = kt;
  const s = Zi(e);
  for (; rc(s, r) === 1; )
    if (r++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (n === 1)
    return r0;
  let o = s.pow(r, t);
  const i = (t + me) / kt;
  return function(c, u) {
    if (c.is0(u))
      return u;
    if (rc(c, u) !== 1)
      throw new Error("Cannot find square root");
    let l = n, d = c.mul(c.ONE, o), f = c.pow(u, t), h = c.pow(u, i);
    for (; !c.eql(f, c.ONE); ) {
      if (c.is0(f))
        return c.ZERO;
      let p = 1, m = c.sqr(f);
      for (; !c.eql(m, c.ONE); )
        if (p++, m = c.sqr(m), p === l)
          throw new Error("Cannot find square root");
      const b = me << BigInt(l - p - 1), y = c.pow(d, b);
      l = p, d = c.sqr(y), f = c.mul(f, d), h = c.mul(h, y);
    }
    return h;
  };
}
function Bg(e) {
  return e % e0 === kg ? r0 : e % n0 === t0 ? Pg : $g(e);
}
const Ig = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Ng(e) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = Ig.reduce((r, s) => (r[s] = "function", r), t);
  return Ts(e, n);
}
function Lg(e, t, n) {
  if (n < we)
    throw new Error("invalid exponent, negatives unsupported");
  if (n === we)
    return e.ONE;
  if (n === me)
    return t;
  let r = e.ONE, s = t;
  for (; n > we; )
    n & me && (r = e.mul(r, s)), s = e.sqr(s), n >>= me;
  return r;
}
function s0(e, t, n = !1) {
  const r = new Array(t.length).fill(n ? e.ZERO : void 0), s = t.reduce((i, a, c) => e.is0(a) ? i : (r[c] = i, e.mul(i, a)), e.ONE), o = e.inv(s);
  return t.reduceRight((i, a, c) => e.is0(a) ? i : (r[c] = e.mul(i, r[c]), e.mul(i, a)), o), r;
}
function rc(e, t) {
  const n = (e.ORDER - me) / kt, r = e.pow(t, n), s = e.eql(r, e.ONE), o = e.eql(r, e.ZERO), i = e.eql(r, e.neg(e.ONE));
  if (!s && !o && !i)
    throw new Error("invalid Legendre symbol result");
  return s ? 1 : o ? 0 : -1;
}
function o0(e, t) {
  t !== void 0 && Ln(t);
  const n = t !== void 0 ? t : e.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Zi(e, t, n = !1, r = {}) {
  if (e <= we)
    throw new Error("invalid field: expected ORDER > 0, got " + e);
  const { nBitLength: s, nByteLength: o } = o0(e, t);
  if (o > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let i;
  const a = Object.freeze({
    ORDER: e,
    isLE: n,
    BITS: s,
    BYTES: o,
    MASK: Cs(s),
    ZERO: we,
    ONE: me,
    create: (c) => ge(c, e),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof c);
      return we <= c && c < e;
    },
    is0: (c) => c === we,
    isOdd: (c) => (c & me) === me,
    neg: (c) => ge(-c, e),
    eql: (c, u) => c === u,
    sqr: (c) => ge(c * c, e),
    add: (c, u) => ge(c + u, e),
    sub: (c, u) => ge(c - u, e),
    mul: (c, u) => ge(c * u, e),
    pow: (c, u) => Lg(a, c, u),
    div: (c, u) => ge(c * Wo(u, e), e),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => Wo(c, e),
    sqrt: r.sqrt || ((c) => (i || (i = Bg(e)), i(a, c))),
    toBytes: (c) => n ? Jl(c, o) : Ar(c, o),
    fromBytes: (c) => {
      if (c.length !== o)
        throw new Error("Field.fromBytes: expected " + o + " bytes, got " + c.length);
      return n ? Yl(c) : It(c);
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (c) => s0(a, c),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (c, u, l) => l ? u : c
  });
  return Object.freeze(a);
}
function i0(e) {
  if (typeof e != "bigint")
    throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function a0(e) {
  const t = i0(e);
  return t + Math.ceil(t / 2);
}
function Rg(e, t, n = !1) {
  const r = e.length, s = i0(t), o = a0(t);
  if (r < 16 || r < o || r > 1024)
    throw new Error("expected " + o + "-1024 bytes of input, got " + r);
  const i = n ? Yl(e) : It(e), a = ge(i, t - me) + me;
  return n ? Jl(a, s) : Ar(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const sc = BigInt(0), Zo = BigInt(1);
function Ys(e, t) {
  const n = t.negate();
  return e ? n : t;
}
function c0(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > t)
    throw new Error("invalid window size, expected [1.." + t + "], got W=" + e);
}
function Js(e, t) {
  c0(e, t);
  const n = Math.ceil(t / e) + 1, r = 2 ** (e - 1), s = 2 ** e, o = Cs(e), i = BigInt(e);
  return { windows: n, windowSize: r, mask: o, maxNumber: s, shiftBy: i };
}
function oc(e, t, n) {
  const { windowSize: r, mask: s, maxNumber: o, shiftBy: i } = n;
  let a = Number(e & s), c = e >> i;
  a > r && (a -= o, c += Zo);
  const u = t * r, l = u + Math.abs(a) - 1, d = a === 0, f = a < 0, h = t % 2 !== 0;
  return { nextN: c, offset: l, isZero: d, isNeg: f, isNegF: h, offsetF: u };
}
function Fg(e, t) {
  if (!Array.isArray(e))
    throw new Error("array expected");
  e.forEach((n, r) => {
    if (!(n instanceof t))
      throw new Error("invalid point at index " + r);
  });
}
function Og(e, t) {
  if (!Array.isArray(e))
    throw new Error("array of scalars expected");
  e.forEach((n, r) => {
    if (!t.isValid(n))
      throw new Error("invalid scalar at index " + r);
  });
}
const eo = /* @__PURE__ */ new WeakMap(), u0 = /* @__PURE__ */ new WeakMap();
function to(e) {
  return u0.get(e) || 1;
}
function _g(e, t) {
  return {
    constTimeNegate: Ys,
    hasPrecomputes(n) {
      return to(n) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(n, r, s = e.ZERO) {
      let o = n;
      for (; r > sc; )
        r & Zo && (s = s.add(o)), o = o.double(), r >>= Zo;
      return s;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param elm Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(n, r) {
      const { windows: s, windowSize: o } = Js(r, t), i = [];
      let a = n, c = a;
      for (let u = 0; u < s; u++) {
        c = a, i.push(c);
        for (let l = 1; l < o; l++)
          c = c.add(a), i.push(c);
        a = c.double();
      }
      return i;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(n, r, s) {
      let o = e.ZERO, i = e.BASE;
      const a = Js(n, t);
      for (let c = 0; c < a.windows; c++) {
        const { nextN: u, offset: l, isZero: d, isNeg: f, isNegF: h, offsetF: p } = oc(s, c, a);
        s = u, d ? i = i.add(Ys(h, r[p])) : o = o.add(Ys(f, r[l]));
      }
      return { p: o, f: i };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(n, r, s, o = e.ZERO) {
      const i = Js(n, t);
      for (let a = 0; a < i.windows && s !== sc; a++) {
        const { nextN: c, offset: u, isZero: l, isNeg: d } = oc(s, a, i);
        if (s = c, !l) {
          const f = r[u];
          o = o.add(d ? f.negate() : f);
        }
      }
      return o;
    },
    getPrecomputes(n, r, s) {
      let o = eo.get(r);
      return o || (o = this.precomputeWindow(r, n), n !== 1 && eo.set(r, s(o))), o;
    },
    wNAFCached(n, r, s) {
      const o = to(n);
      return this.wNAF(o, this.getPrecomputes(o, n, s), r);
    },
    wNAFCachedUnsafe(n, r, s, o) {
      const i = to(n);
      return i === 1 ? this.unsafeLadder(n, r, o) : this.wNAFUnsafe(i, this.getPrecomputes(i, n, s), r, o);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(n, r) {
      c0(r, t), u0.set(n, r), eo.delete(n);
    }
  };
}
function Mg(e, t, n, r) {
  Fg(n, e), Og(r, t);
  const s = n.length, o = r.length;
  if (s !== o)
    throw new Error("arrays of points and scalars must have equal length");
  const i = e.ZERO, a = Cg(BigInt(s));
  let c = 1;
  a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
  const u = Cs(c), l = new Array(Number(u) + 1).fill(i), d = Math.floor((t.BITS - 1) / c) * c;
  let f = i;
  for (let h = d; h >= 0; h -= c) {
    l.fill(i);
    for (let m = 0; m < o; m++) {
      const b = r[m], y = Number(b >> BigInt(h) & u);
      l[y] = l[y].add(n[m]);
    }
    let p = i;
    for (let m = l.length - 1, b = i; m > 0; m--)
      b = b.add(l[m]), p = p.add(b);
    if (f = f.add(p), h !== 0)
      for (let m = 0; m < c; m++)
        f = f.double();
  }
  return f;
}
function l0(e) {
  return Ng(e.Fp), Ts(e, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...o0(e.n, e.nBitLength),
    ...e,
    p: e.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ic(e) {
  e.lowS !== void 0 && nr("lowS", e.lowS), e.prehash !== void 0 && nr("prehash", e.prehash);
}
function Dg(e) {
  const t = l0(e);
  Ts(t, {
    a: "field",
    b: "field"
  }, {
    allowInfinityPoint: "boolean",
    allowedPrivateKeyLengths: "array",
    clearCofactor: "function",
    fromBytes: "function",
    isTorsionFree: "function",
    toBytes: "function",
    wrapPrivateKey: "boolean"
  });
  const { endo: n, Fp: r, a: s } = t;
  if (n) {
    if (!r.eql(s, r.ZERO))
      throw new Error("invalid endo: CURVE.a must be 0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
  }
  return Object.freeze({ ...t });
}
class zg extends Error {
  constructor(t = "") {
    super(t);
  }
}
const Je = {
  // asn.1 DER encoding utils
  Err: zg,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (e, t) => {
      const { Err: n } = Je;
      if (e < 0 || e > 256)
        throw new n("tlv.encode: wrong tag");
      if (t.length & 1)
        throw new n("tlv.encode: unpadded data");
      const r = t.length / 2, s = $r(r);
      if (s.length / 2 & 128)
        throw new n("tlv.encode: long form length too big");
      const o = r > 127 ? $r(s.length / 2 | 128) : "";
      return $r(e) + o + s + t;
    },
    // v - value, l - left bytes (unparsed)
    decode(e, t) {
      const { Err: n } = Je;
      let r = 0;
      if (e < 0 || e > 256)
        throw new n("tlv.encode: wrong tag");
      if (t.length < 2 || t[r++] !== e)
        throw new n("tlv.decode: wrong tlv");
      const s = t[r++], o = !!(s & 128);
      let i = 0;
      if (!o)
        i = s;
      else {
        const c = s & 127;
        if (!c)
          throw new n("tlv.decode(long): indefinite length not supported");
        if (c > 4)
          throw new n("tlv.decode(long): byte length is too big");
        const u = t.subarray(r, r + c);
        if (u.length !== c)
          throw new n("tlv.decode: length bytes not complete");
        if (u[0] === 0)
          throw new n("tlv.decode(long): zero leftmost byte");
        for (const l of u)
          i = i << 8 | l;
        if (r += c, i < 128)
          throw new n("tlv.decode(long): not minimal encoding");
      }
      const a = t.subarray(r, r + i);
      if (a.length !== i)
        throw new n("tlv.decode: wrong value length");
      return { v: a, l: t.subarray(r + i) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(e) {
      const { Err: t } = Je;
      if (e < et)
        throw new t("integer: negative integers are not allowed");
      let n = $r(e);
      if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1)
        throw new t("unexpected DER parsing assertion: unpadded hex");
      return n;
    },
    decode(e) {
      const { Err: t } = Je;
      if (e[0] & 128)
        throw new t("invalid signature integer: negative");
      if (e[0] === 0 && !(e[1] & 128))
        throw new t("invalid signature integer: unnecessary leading zero");
      return It(e);
    }
  },
  toSig(e) {
    const { Err: t, _int: n, _tlv: r } = Je, s = Be("signature", e), { v: o, l: i } = r.decode(48, s);
    if (i.length)
      throw new t("invalid signature: left bytes after parsing");
    const { v: a, l: c } = r.decode(2, o), { v: u, l } = r.decode(2, c);
    if (l.length)
      throw new t("invalid signature: left bytes after parsing");
    return { r: n.decode(a), s: n.decode(u) };
  },
  hexFromSig(e) {
    const { _tlv: t, _int: n } = Je, r = t.encode(2, n.encode(e.r)), s = t.encode(2, n.encode(e.s)), o = r + s;
    return t.encode(48, o);
  }
};
function no(e, t) {
  return rr(Ar(e, t));
}
const et = BigInt(0), oe = BigInt(1);
BigInt(2);
const ro = BigInt(3), Ug = BigInt(4);
function jg(e) {
  const t = Dg(e), { Fp: n } = t, r = Zi(t.n, t.nBitLength), s = t.toBytes || ((g, w, T) => {
    const k = w.toAffine();
    return Kr(Uint8Array.from([4]), n.toBytes(k.x), n.toBytes(k.y));
  }), o = t.fromBytes || ((g) => {
    const w = g.subarray(1), T = n.fromBytes(w.subarray(0, n.BYTES)), k = n.fromBytes(w.subarray(n.BYTES, 2 * n.BYTES));
    return { x: T, y: k };
  });
  function i(g) {
    const { a: w, b: T } = t, k = n.sqr(g), E = n.mul(k, g);
    return n.add(n.add(E, n.mul(g, w)), T);
  }
  function a(g, w) {
    const T = n.sqr(w), k = i(g);
    return n.eql(T, k);
  }
  if (!a(t.Gx, t.Gy))
    throw new Error("bad curve params: generator point");
  const c = n.mul(n.pow(t.a, ro), Ug), u = n.mul(n.sqr(t.b), BigInt(27));
  if (n.is0(n.add(c, u)))
    throw new Error("bad curve params: a or b");
  function l(g) {
    return Wi(g, oe, t.n);
  }
  function d(g) {
    const { allowedPrivateKeyLengths: w, nByteLength: T, wrapPrivateKey: k, n: E } = t;
    if (w && typeof g != "bigint") {
      if (vr(g) && (g = rr(g)), typeof g != "string" || !w.includes(g.length))
        throw new Error("invalid private key");
      g = g.padStart(T * 2, "0");
    }
    let A;
    try {
      A = typeof g == "bigint" ? g : It(Be("private key", g, T));
    } catch {
      throw new Error("invalid private key, expected hex or " + T + " bytes, got " + typeof g);
    }
    return k && (A = ge(A, E)), sn("private key", A, oe, E), A;
  }
  function f(g) {
    if (!(g instanceof m))
      throw new Error("ProjectivePoint expected");
  }
  const h = nc((g, w) => {
    const { px: T, py: k, pz: E } = g;
    if (n.eql(E, n.ONE))
      return { x: T, y: k };
    const A = g.is0();
    w == null && (w = A ? n.ONE : n.inv(E));
    const P = n.mul(T, w), F = n.mul(k, w), $ = n.mul(E, w);
    if (A)
      return { x: n.ZERO, y: n.ZERO };
    if (!n.eql($, n.ONE))
      throw new Error("invZ was invalid");
    return { x: P, y: F };
  }), p = nc((g) => {
    if (g.is0()) {
      if (t.allowInfinityPoint && !n.is0(g.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: w, y: T } = g.toAffine();
    if (!n.isValid(w) || !n.isValid(T))
      throw new Error("bad point: x or y not FE");
    if (!a(w, T))
      throw new Error("bad point: equation left != right");
    if (!g.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class m {
    constructor(w, T, k) {
      if (w == null || !n.isValid(w))
        throw new Error("x required");
      if (T == null || !n.isValid(T) || n.is0(T))
        throw new Error("y required");
      if (k == null || !n.isValid(k))
        throw new Error("z required");
      this.px = w, this.py = T, this.pz = k, Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(w) {
      const { x: T, y: k } = w || {};
      if (!w || !n.isValid(T) || !n.isValid(k))
        throw new Error("invalid affine point");
      if (w instanceof m)
        throw new Error("projective point not allowed");
      const E = (A) => n.eql(A, n.ZERO);
      return E(T) && E(k) ? m.ZERO : new m(T, k, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(w) {
      const T = s0(n, w.map((k) => k.pz));
      return w.map((k, E) => k.toAffine(T[E])).map(m.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(w) {
      const T = m.fromAffine(o(Be("pointHex", w)));
      return T.assertValidity(), T;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(w) {
      return m.BASE.multiply(d(w));
    }
    // Multiscalar Multiplication
    static msm(w, T) {
      return Mg(m, r, w, T);
    }
    // "Private method", don't use it directly
    _setWindowSize(w) {
      x.setWindowSize(this, w);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      p(this);
    }
    hasEvenY() {
      const { y: w } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(w);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(w) {
      f(w);
      const { px: T, py: k, pz: E } = this, { px: A, py: P, pz: F } = w, $ = n.eql(n.mul(T, F), n.mul(A, E)), L = n.eql(n.mul(k, F), n.mul(P, E));
      return $ && L;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new m(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: w, b: T } = t, k = n.mul(T, ro), { px: E, py: A, pz: P } = this;
      let F = n.ZERO, $ = n.ZERO, L = n.ZERO, R = n.mul(E, E), D = n.mul(A, A), v = n.mul(P, P), S = n.mul(E, A);
      return S = n.add(S, S), L = n.mul(E, P), L = n.add(L, L), F = n.mul(w, L), $ = n.mul(k, v), $ = n.add(F, $), F = n.sub(D, $), $ = n.add(D, $), $ = n.mul(F, $), F = n.mul(S, F), L = n.mul(k, L), v = n.mul(w, v), S = n.sub(R, v), S = n.mul(w, S), S = n.add(S, L), L = n.add(R, R), R = n.add(L, R), R = n.add(R, v), R = n.mul(R, S), $ = n.add($, R), v = n.mul(A, P), v = n.add(v, v), R = n.mul(v, S), F = n.sub(F, R), L = n.mul(v, D), L = n.add(L, L), L = n.add(L, L), new m(F, $, L);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(w) {
      f(w);
      const { px: T, py: k, pz: E } = this, { px: A, py: P, pz: F } = w;
      let $ = n.ZERO, L = n.ZERO, R = n.ZERO;
      const D = t.a, v = n.mul(t.b, ro);
      let S = n.mul(T, A), O = n.mul(k, P), B = n.mul(E, F), _ = n.add(T, k), z = n.add(A, P);
      _ = n.mul(_, z), z = n.add(S, O), _ = n.sub(_, z), z = n.add(T, E);
      let H = n.add(A, F);
      return z = n.mul(z, H), H = n.add(S, B), z = n.sub(z, H), H = n.add(k, E), $ = n.add(P, F), H = n.mul(H, $), $ = n.add(O, B), H = n.sub(H, $), R = n.mul(D, z), $ = n.mul(v, B), R = n.add($, R), $ = n.sub(O, R), R = n.add(O, R), L = n.mul($, R), O = n.add(S, S), O = n.add(O, S), B = n.mul(D, B), z = n.mul(v, z), O = n.add(O, B), B = n.sub(S, B), B = n.mul(D, B), z = n.add(z, B), S = n.mul(O, z), L = n.add(L, S), S = n.mul(H, z), $ = n.mul(_, $), $ = n.sub($, S), S = n.mul(_, O), R = n.mul(H, R), R = n.add(R, S), new m($, L, R);
    }
    subtract(w) {
      return this.add(w.negate());
    }
    is0() {
      return this.equals(m.ZERO);
    }
    wNAF(w) {
      return x.wNAFCached(this, w, m.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(w) {
      const { endo: T, n: k } = t;
      sn("scalar", w, et, k);
      const E = m.ZERO;
      if (w === et)
        return E;
      if (this.is0() || w === oe)
        return this;
      if (!T || x.hasPrecomputes(this))
        return x.wNAFCachedUnsafe(this, w, m.normalizeZ);
      let { k1neg: A, k1: P, k2neg: F, k2: $ } = T.splitScalar(w), L = E, R = E, D = this;
      for (; P > et || $ > et; )
        P & oe && (L = L.add(D)), $ & oe && (R = R.add(D)), D = D.double(), P >>= oe, $ >>= oe;
      return A && (L = L.negate()), F && (R = R.negate()), R = new m(n.mul(R.px, T.beta), R.py, R.pz), L.add(R);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(w) {
      const { endo: T, n: k } = t;
      sn("scalar", w, oe, k);
      let E, A;
      if (T) {
        const { k1neg: P, k1: F, k2neg: $, k2: L } = T.splitScalar(w);
        let { p: R, f: D } = this.wNAF(F), { p: v, f: S } = this.wNAF(L);
        R = x.constTimeNegate(P, R), v = x.constTimeNegate($, v), v = new m(n.mul(v.px, T.beta), v.py, v.pz), E = R.add(v), A = D.add(S);
      } else {
        const { p: P, f: F } = this.wNAF(w);
        E = P, A = F;
      }
      return m.normalizeZ([E, A])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(w, T, k) {
      const E = m.BASE, A = (F, $) => $ === et || $ === oe || !F.equals(E) ? F.multiplyUnsafe($) : F.multiply($), P = A(this, T).add(A(w, k));
      return P.is0() ? void 0 : P;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(w) {
      return h(this, w);
    }
    isTorsionFree() {
      const { h: w, isTorsionFree: T } = t;
      if (w === oe)
        return !0;
      if (T)
        return T(m, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: w, clearCofactor: T } = t;
      return w === oe ? this : T ? T(m, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(w = !0) {
      return nr("isCompressed", w), this.assertValidity(), s(m, this, w);
    }
    toHex(w = !0) {
      return nr("isCompressed", w), rr(this.toRawBytes(w));
    }
  }
  m.BASE = new m(t.Gx, t.Gy, n.ONE), m.ZERO = new m(n.ZERO, n.ONE, n.ZERO);
  const { endo: b, nBitLength: y } = t, x = _g(m, b ? Math.ceil(y / 2) : y);
  return {
    CURVE: t,
    ProjectivePoint: m,
    normPrivateKeyToScalar: d,
    weierstrassEquation: i,
    isWithinCurveOrder: l
  };
}
function qg(e) {
  const t = l0(e);
  return Ts(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function Hg(e) {
  const t = qg(e), { Fp: n, n: r, nByteLength: s, nBitLength: o } = t, i = n.BYTES + 1, a = 2 * n.BYTES + 1;
  function c(v) {
    return ge(v, r);
  }
  function u(v) {
    return Wo(v, r);
  }
  const { ProjectivePoint: l, normPrivateKeyToScalar: d, weierstrassEquation: f, isWithinCurveOrder: h } = jg({
    ...t,
    toBytes(v, S, O) {
      const B = S.toAffine(), _ = n.toBytes(B.x), z = Kr;
      return nr("isCompressed", O), O ? z(Uint8Array.from([S.hasEvenY() ? 2 : 3]), _) : z(Uint8Array.from([4]), _, n.toBytes(B.y));
    },
    fromBytes(v) {
      const S = v.length, O = v[0], B = v.subarray(1);
      if (S === i && (O === 2 || O === 3)) {
        const _ = It(B);
        if (!Wi(_, oe, n.ORDER))
          throw new Error("Point is not on curve");
        const z = f(_);
        let H;
        try {
          H = n.sqrt(z);
        } catch (Q) {
          const te = Q instanceof Error ? ": " + Q.message : "";
          throw new Error("Point is not on curve" + te);
        }
        const Z = (H & oe) === oe;
        return (O & 1) === 1 !== Z && (H = n.neg(H)), { x: _, y: H };
      } else if (S === a && O === 4) {
        const _ = n.fromBytes(B.subarray(0, n.BYTES)), z = n.fromBytes(B.subarray(n.BYTES, 2 * n.BYTES));
        return { x: _, y: z };
      } else {
        const _ = i, z = a;
        throw new Error("invalid Point, expected length of " + _ + ", or uncompressed " + z + ", got " + S);
      }
    }
  });
  function p(v) {
    const S = r >> oe;
    return v > S;
  }
  function m(v) {
    return p(v) ? c(-v) : v;
  }
  const b = (v, S, O) => It(v.slice(S, O));
  class y {
    constructor(S, O, B) {
      sn("r", S, oe, r), sn("s", O, oe, r), this.r = S, this.s = O, B != null && (this.recovery = B), Object.freeze(this);
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(S) {
      const O = s;
      return S = Be("compactSignature", S, O * 2), new y(b(S, 0, O), b(S, O, 2 * O));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(S) {
      const { r: O, s: B } = Je.toSig(Be("DER", S));
      return new y(O, B);
    }
    /**
     * @todo remove
     * @deprecated
     */
    assertValidity() {
    }
    addRecoveryBit(S) {
      return new y(this.r, this.s, S);
    }
    recoverPublicKey(S) {
      const { r: O, s: B, recovery: _ } = this, z = E(Be("msgHash", S));
      if (_ == null || ![0, 1, 2, 3].includes(_))
        throw new Error("recovery id invalid");
      const H = _ === 2 || _ === 3 ? O + t.n : O;
      if (H >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const Z = (_ & 1) === 0 ? "02" : "03", J = l.fromHex(Z + no(H, n.BYTES)), Q = u(H), te = c(-z * Q), he = c(B * Q), ut = l.BASE.multiplyAndAddUnsafe(J, te, he);
      if (!ut)
        throw new Error("point at infinify");
      return ut.assertValidity(), ut;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return p(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new y(this.r, c(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Zr(this.toDERHex());
    }
    toDERHex() {
      return Je.hexFromSig(this);
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Zr(this.toCompactHex());
    }
    toCompactHex() {
      const S = s;
      return no(this.r, S) + no(this.s, S);
    }
  }
  const x = {
    isValidPrivateKey(v) {
      try {
        return d(v), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: d,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const v = a0(t.n);
      return Rg(t.randomBytes(v), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(v = 8, S = l.BASE) {
      return S._setWindowSize(v), S.multiply(BigInt(3)), S;
    }
  };
  function g(v, S = !0) {
    return l.fromPrivateKey(v).toRawBytes(S);
  }
  function w(v) {
    if (typeof v == "bigint")
      return !1;
    if (v instanceof l)
      return !0;
    const O = Be("key", v).length, B = n.BYTES, _ = B + 1, z = 2 * B + 1;
    if (!(t.allowedPrivateKeyLengths || s === _))
      return O === _ || O === z;
  }
  function T(v, S, O = !0) {
    if (w(v) === !0)
      throw new Error("first arg must be private key");
    if (w(S) === !1)
      throw new Error("second arg must be public key");
    return l.fromHex(S).multiply(d(v)).toRawBytes(O);
  }
  const k = t.bits2int || function(v) {
    if (v.length > 8192)
      throw new Error("input is too large");
    const S = It(v), O = v.length * 8 - o;
    return O > 0 ? S >> BigInt(O) : S;
  }, E = t.bits2int_modN || function(v) {
    return c(k(v));
  }, A = Cs(o);
  function P(v) {
    return sn("num < 2^" + o, v, et, A), Ar(v, s);
  }
  function F(v, S, O = $) {
    if (["recovered", "canonical"].some((Et) => Et in O))
      throw new Error("sign() legacy options not supported");
    const { hash: B, randomBytes: _ } = t;
    let { lowS: z, prehash: H, extraEntropy: Z } = O;
    z == null && (z = !0), v = Be("msgHash", v), ic(O), H && (v = Be("prehashed msgHash", B(v)));
    const J = E(v), Q = d(S), te = [P(Q), P(J)];
    if (Z != null && Z !== !1) {
      const Et = Z === !0 ? _(n.BYTES) : Z;
      te.push(Be("extraEntropy", Et));
    }
    const he = Kr(...te), ut = J;
    function Bs(Et) {
      const Ht = k(Et);
      if (!h(Ht))
        return;
      const Is = u(Ht), Tn = l.BASE.multiply(Ht).toAffine(), Ct = c(Tn.x);
      if (Ct === et)
        return;
      const Sn = c(Is * c(ut + Ct * Q));
      if (Sn === et)
        return;
      let kn = (Tn.x === Ct ? 0 : 2) | Number(Tn.y & oe), Gt = Sn;
      return z && p(Sn) && (Gt = m(Sn), kn ^= 1), new y(Ct, Gt, kn);
    }
    return { seed: he, k2sig: Bs };
  }
  const $ = { lowS: t.lowS, prehash: !1 }, L = { lowS: t.lowS, prehash: !1 };
  function R(v, S, O = $) {
    const { seed: B, k2sig: _ } = F(v, S, O), z = t;
    return Tg(z.hash.outputLen, z.nByteLength, z.hmac)(B, _);
  }
  l.BASE._setWindowSize(8);
  function D(v, S, O, B = L) {
    var kn;
    const _ = v;
    S = Be("msgHash", S), O = Be("publicKey", O);
    const { lowS: z, prehash: H, format: Z } = B;
    if (ic(B), "strict" in B)
      throw new Error("options.strict was renamed to lowS");
    if (Z !== void 0 && Z !== "compact" && Z !== "der")
      throw new Error("format must be compact or der");
    const J = typeof _ == "string" || vr(_), Q = !J && !Z && typeof _ == "object" && _ !== null && typeof _.r == "bigint" && typeof _.s == "bigint";
    if (!J && !Q)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let te, he;
    try {
      if (Q && (te = new y(_.r, _.s)), J) {
        try {
          Z !== "compact" && (te = y.fromDER(_));
        } catch (Gt) {
          if (!(Gt instanceof Je.Err))
            throw Gt;
        }
        !te && Z !== "der" && (te = y.fromCompact(_));
      }
      he = l.fromHex(O);
    } catch {
      return !1;
    }
    if (!te || z && te.hasHighS())
      return !1;
    H && (S = t.hash(S));
    const { r: ut, s: Bs } = te, Et = E(S), Ht = u(Bs), Is = c(Et * Ht), Tn = c(ut * Ht), Ct = (kn = l.BASE.multiplyAndAddUnsafe(he, Is, Tn)) == null ? void 0 : kn.toAffine();
    return Ct ? c(Ct.x) === ut : !1;
  }
  return {
    CURVE: t,
    getPublicKey: g,
    getSharedSecret: T,
    sign: R,
    verify: D,
    ProjectivePoint: l,
    Signature: y,
    utils: x
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Gg(e) {
  return {
    hash: e,
    hmac: (t, ...n) => Ul(e, t, z1(...n)),
    randomBytes: U1
  };
}
function Vg(e, t) {
  const n = (r) => Hg({ ...e, ...Gg(r) });
  return { ...n(t), create: n };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const d0 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), ac = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Wg = BigInt(0), Zg = BigInt(1), Ko = BigInt(2), cc = (e, t) => (e + t / Ko) / t;
function Kg(e) {
  const t = d0, n = BigInt(3), r = BigInt(6), s = BigInt(11), o = BigInt(22), i = BigInt(23), a = BigInt(44), c = BigInt(88), u = e * e * e % t, l = u * u * e % t, d = $e(l, n, t) * l % t, f = $e(d, n, t) * l % t, h = $e(f, Ko, t) * u % t, p = $e(h, s, t) * h % t, m = $e(p, o, t) * p % t, b = $e(m, a, t) * m % t, y = $e(b, c, t) * b % t, x = $e(y, a, t) * m % t, g = $e(x, n, t) * l % t, w = $e(g, i, t) * p % t, T = $e(w, r, t) * u % t, k = $e(T, Ko, t);
  if (!Qo.eql(Qo.sqr(k), e))
    throw new Error("Cannot find square root");
  return k;
}
const Qo = Zi(d0, void 0, void 0, { sqrt: Kg }), f0 = Vg({
  a: Wg,
  b: BigInt(7),
  Fp: Qo,
  n: ac,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  endo: {
    // Endomorphism, see above
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (e) => {
      const t = ac, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -Zg * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), o = n, i = BigInt("0x100000000000000000000000000000000"), a = cc(o * e, t), c = cc(-r * e, t);
      let u = ge(e - a * n - c * s, t), l = ge(-a * r - c * o, t);
      const d = u > i, f = l > i;
      if (d && (u = t - u), f && (l = t - l), u > i || l > i)
        throw new Error("splitScalar: Endomorphism failed, k=" + e);
      return { k1neg: d, k1: u, k2neg: f, k2: l };
    }
  }
}, ju), Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  secp256k1: f0
}, Symbol.toStringTag, { value: "Module" }));
function Xg({ r: e, s: t, to: n = "hex", v: r, yParity: s }) {
  const o = (() => {
    if (s === 0 || s === 1)
      return s;
    if (r && (r === 27n || r === 28n || r >= 35n))
      return r % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })(), i = `0x${new f0.Signature(ue(e), ue(t)).toCompactHex()}${o === 0 ? "1b" : "1c"}`;
  return n === "hex" ? i : Ze(i);
}
async function Ss(e, t) {
  var c, u, l, d;
  const { address: n, chain: r = e.chain, hash: s, erc6492VerifierAddress: o = t.universalSignatureVerifierAddress ?? ((u = (c = r == null ? void 0 : r.contracts) == null ? void 0 : c.erc6492Verifier) == null ? void 0 : u.address), multicallAddress: i = t.multicallAddress ?? ((d = (l = r == null ? void 0 : r.contracts) == null ? void 0 : l.multicall3) == null ? void 0 : d.address) } = t;
  if (r != null && r.verifyHash)
    return await r.verifyHash(e, t);
  const a = (() => {
    const f = t.signature;
    return Ve(f) ? f : typeof f == "object" && "r" in f && "s" in f ? Xg(f) : se(f);
  })();
  try {
    return eg(a) ? await Yg(e, {
      ...t,
      multicallAddress: i,
      signature: a
    }) : await Jg(e, {
      ...t,
      verifierAddress: o,
      signature: a
    });
  } catch (f) {
    try {
      if (wr(Rn(n), await Nu({ hash: s, signature: a })))
        return !0;
    } catch {
    }
    if (f instanceof zt)
      return !1;
    throw f;
  }
}
async function Yg(e, t) {
  var b;
  const { address: n, blockNumber: r, blockTag: s, hash: o, multicallAddress: i } = t, { authorization: a, data: c, signature: u, to: l } = Jb(t.signature);
  if (await Do(e, {
    address: n,
    blockNumber: r,
    blockTag: s
  }) === vn(["0xef0100", a.address]))
    return await e6(e, {
      address: n,
      blockNumber: r,
      blockTag: s,
      hash: o,
      signature: u
    });
  const f = {
    address: a.address,
    chainId: Number(a.chainId),
    nonce: Number(a.nonce),
    r: U(a.r, { size: 32 }),
    s: U(a.s, { size: 32 }),
    yParity: a.yParity
  };
  if (!await Zm({
    address: n,
    authorization: f
  }))
    throw new zt();
  const p = await M(e, Me, "readContract")({
    ...i ? { address: i } : { code: $i },
    authorizationList: [f],
    abi: Gr,
    blockNumber: r,
    blockTag: "pending",
    functionName: "aggregate3",
    args: [
      [
        ...c ? [
          {
            allowFailure: !0,
            target: l ?? n,
            callData: c
          }
        ] : [],
        {
          allowFailure: !0,
          target: n,
          callData: de({
            abi: il,
            functionName: "isValidSignature",
            args: [o, u]
          })
        }
      ]
    ]
  }), m = (b = p[p.length - 1]) == null ? void 0 : b.returnData;
  if (m != null && m.startsWith("0x1626ba7e"))
    return !0;
  throw new zt();
}
async function Jg(e, t) {
  const { address: n, factory: r, factoryData: s, hash: o, signature: i, verifierAddress: a, ...c } = t, u = await (async () => !r && !s || vg(i) ? i : xg({
    data: s,
    signature: i,
    to: r
  }))(), l = a ? {
    to: a,
    data: de({
      abi: Ga,
      functionName: "isValidSig",
      args: [n, o, u]
    }),
    ...c
  } : {
    data: bs({
      abi: Ga,
      args: [n, o, u],
      bytecode: Yp
    }),
    ...c
  }, { data: d } = await M(e, gs, "call")(l).catch((f) => {
    throw f instanceof Pu ? new zt() : f;
  });
  if (v1(d ?? "0x0"))
    return !0;
  throw new zt();
}
async function e6(e, t) {
  const { address: n, blockNumber: r, blockTag: s, hash: o, signature: i } = t;
  if ((await M(e, Me, "readContract")({
    address: n,
    abi: il,
    args: [o, i],
    blockNumber: r,
    blockTag: s,
    functionName: "isValidSignature"
  }).catch((c) => {
    throw c instanceof $u ? new zt() : c;
  })).startsWith("0x1626ba7e"))
    return !0;
  throw new zt();
}
class zt extends Error {
}
async function t6(e, { address: t, message: n, factory: r, factoryData: s, signature: o, ...i }) {
  const a = kl(n);
  return M(e, Ss, "verifyHash")({
    address: t,
    factory: r,
    factoryData: s,
    hash: a,
    signature: o,
    ...i
  });
}
async function n6(e, t) {
  const { address: n, factory: r, factoryData: s, signature: o, message: i, primaryType: a, types: c, domain: u, ...l } = t, d = ob({ message: i, primaryType: a, types: c, domain: u });
  return M(e, Ss, "verifyHash")({
    address: n,
    factory: r,
    factoryData: s,
    hash: d,
    signature: o,
    ...l
  });
}
function h0(e, { emitOnBegin: t = !1, emitMissed: n = !1, onBlockNumber: r, onError: s, poll: o, pollingInterval: i = e.pollingInterval }) {
  const a = typeof o < "u" ? o : !(e.transport.type === "webSocket" || e.transport.type === "ipc" || e.transport.type === "fallback" && (e.transport.transports[0].config.type === "webSocket" || e.transport.transports[0].config.type === "ipc"));
  let c;
  return a ? (() => {
    const d = be([
      "watchBlockNumber",
      e.uid,
      t,
      n,
      i
    ]);
    return it(d, { onBlockNumber: r, onError: s }, (f) => Cn(async () => {
      var h;
      try {
        const p = await M(e, xr, "getBlockNumber")({ cacheTime: 0 });
        if (c !== void 0) {
          if (p === c)
            return;
          if (p - c > 1 && n)
            for (let m = c + 1n; m < p; m++)
              f.onBlockNumber(m, c), c = m;
        }
        (c === void 0 || p > c) && (f.onBlockNumber(p, c), c = p);
      } catch (p) {
        (h = f.onError) == null || h.call(f, p);
      }
    }, {
      emitOnBegin: t,
      interval: i
    }));
  })() : (() => {
    const d = be([
      "watchBlockNumber",
      e.uid,
      t,
      n
    ]);
    return it(d, { onBlockNumber: r, onError: s }, (f) => {
      let h = !0, p = () => h = !1;
      return (async () => {
        try {
          const m = (() => {
            if (e.transport.type === "fallback") {
              const y = e.transport.transports.find((x) => x.config.type === "webSocket" || x.config.type === "ipc");
              return y ? y.value : e.transport;
            }
            return e.transport;
          })(), { unsubscribe: b } = await m.subscribe({
            params: ["newHeads"],
            onData(y) {
              var g;
              if (!h)
                return;
              const x = ue((g = y.result) == null ? void 0 : g.number);
              f.onBlockNumber(x, c), c = x;
            },
            onError(y) {
              var x;
              (x = f.onError) == null || x.call(f, y);
            }
          });
          p = b, h || p();
        } catch (m) {
          s == null || s(m);
        }
      })(), () => p();
    });
  })();
}
async function p0(e, t) {
  const {
    checkReplacement: n = !0,
    confirmations: r = 1,
    hash: s,
    onReplaced: o,
    retryCount: i = 6,
    retryDelay: a = ({ count: T }) => ~~(1 << T) * 200,
    // exponential backoff
    timeout: c = 18e4
  } = t, u = be(["waitForTransactionReceipt", e.uid, s]), l = (() => {
    var T;
    return t.pollingInterval ? t.pollingInterval : (T = e.chain) != null && T.experimental_preconfirmationTime ? e.chain.experimental_preconfirmationTime : e.pollingInterval;
  })();
  let d, f, h, p = !1, m, b;
  const { promise: y, resolve: x, reject: g } = Bi(), w = c ? setTimeout(() => {
    b == null || b(), m == null || m(), g(new Fh({ hash: s }));
  }, c) : void 0;
  return m = it(u, { onReplaced: o, resolve: x, reject: g }, async (T) => {
    if (h = await M(e, Fr, "getTransactionReceipt")({ hash: s }).catch(() => {
    }), h && r <= 1) {
      clearTimeout(w), T.resolve(h), m == null || m();
      return;
    }
    b = M(e, h0, "watchBlockNumber")({
      emitMissed: !0,
      emitOnBegin: !0,
      poll: !0,
      pollingInterval: l,
      async onBlockNumber(k) {
        const E = (P) => {
          clearTimeout(w), b == null || b(), P(), m == null || m();
        };
        let A = k;
        if (!p)
          try {
            if (h) {
              if (r > 1 && (!h.blockNumber || A - h.blockNumber + 1n < r))
                return;
              E(() => T.resolve(h));
              return;
            }
            if (n && !d && (p = !0, await Vr(async () => {
              d = await M(e, Hi, "getTransaction")({ hash: s }), d.blockNumber && (A = d.blockNumber);
            }, {
              delay: a,
              retryCount: i
            }), p = !1), h = await M(e, Fr, "getTransactionReceipt")({ hash: s }), r > 1 && (!h.blockNumber || A - h.blockNumber + 1n < r))
              return;
            E(() => T.resolve(h));
          } catch (P) {
            if (P instanceof Cu || P instanceof Tu) {
              if (!d) {
                p = !1;
                return;
              }
              try {
                f = d, p = !0;
                const F = await Vr(() => M(e, Ne, "getBlock")({
                  blockNumber: A,
                  includeTransactions: !0
                }), {
                  delay: a,
                  retryCount: i,
                  shouldRetry: ({ error: R }) => R instanceof Ou
                });
                p = !1;
                const $ = F.transactions.find(({ from: R, nonce: D }) => R === f.from && D === f.nonce);
                if (!$ || (h = await M(e, Fr, "getTransactionReceipt")({
                  hash: $.hash
                }), r > 1 && (!h.blockNumber || A - h.blockNumber + 1n < r)))
                  return;
                let L = "replaced";
                $.to === f.to && $.value === f.value && $.input === f.input ? L = "repriced" : $.from === $.to && $.value === 0n && (L = "cancelled"), E(() => {
                  var R;
                  (R = T.onReplaced) == null || R.call(T, {
                    reason: L,
                    replacedTransaction: f,
                    transaction: $,
                    transactionReceipt: h
                  }), T.resolve(h);
                });
              } catch (F) {
                E(() => T.reject(F));
              }
            } else
              E(() => T.reject(P));
          }
      }
    });
  }), y;
}
function r6(e, { blockTag: t = e.experimental_blockTag ?? "latest", emitMissed: n = !1, emitOnBegin: r = !1, onBlock: s, onError: o, includeTransactions: i, poll: a, pollingInterval: c = e.pollingInterval }) {
  const u = typeof a < "u" ? a : !(e.transport.type === "webSocket" || e.transport.type === "ipc" || e.transport.type === "fallback" && (e.transport.transports[0].config.type === "webSocket" || e.transport.transports[0].config.type === "ipc")), l = i ?? !1;
  let d;
  return u ? (() => {
    const p = be([
      "watchBlocks",
      e.uid,
      t,
      n,
      r,
      l,
      c
    ]);
    return it(p, { onBlock: s, onError: o }, (m) => Cn(async () => {
      var b;
      try {
        const y = await M(e, Ne, "getBlock")({
          blockTag: t,
          includeTransactions: l
        });
        if (y.number !== null && (d == null ? void 0 : d.number) != null) {
          if (y.number === d.number)
            return;
          if (y.number - d.number > 1 && n)
            for (let x = (d == null ? void 0 : d.number) + 1n; x < y.number; x++) {
              const g = await M(e, Ne, "getBlock")({
                blockNumber: x,
                includeTransactions: l
              });
              m.onBlock(g, d), d = g;
            }
        }
        // If no previous block exists, emit.
        ((d == null ? void 0 : d.number) == null || // If the block tag is "pending" with no block number, emit.
        t === "pending" && (y == null ? void 0 : y.number) == null || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        y.number !== null && y.number > d.number) && (m.onBlock(y, d), d = y);
      } catch (y) {
        (b = m.onError) == null || b.call(m, y);
      }
    }, {
      emitOnBegin: r,
      interval: c
    }));
  })() : (() => {
    let p = !0, m = !0, b = () => p = !1;
    return (async () => {
      try {
        r && M(e, Ne, "getBlock")({
          blockTag: t,
          includeTransactions: l
        }).then((g) => {
          p && m && (s(g, void 0), m = !1);
        }).catch(o);
        const y = (() => {
          if (e.transport.type === "fallback") {
            const g = e.transport.transports.find((w) => w.config.type === "webSocket" || w.config.type === "ipc");
            return g ? g.value : e.transport;
          }
          return e.transport;
        })(), { unsubscribe: x } = await y.subscribe({
          params: ["newHeads"],
          async onData(g) {
            var T;
            if (!p)
              return;
            const w = await M(e, Ne, "getBlock")({
              blockNumber: (T = g.result) == null ? void 0 : T.number,
              includeTransactions: l
            }).catch(() => {
            });
            p && (s(w, d), m = !1, d = w);
          },
          onError(g) {
            o == null || o(g);
          }
        });
        b = x, p || b();
      } catch (y) {
        o == null || o(y);
      }
    })(), () => b();
  })();
}
function s6(e, { address: t, args: n, batch: r = !0, event: s, events: o, fromBlock: i, onError: a, onLogs: c, poll: u, pollingInterval: l = e.pollingInterval, strict: d }) {
  const f = typeof u < "u" ? u : typeof i == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "ipc" || e.transport.type === "fallback" && (e.transport.transports[0].config.type === "webSocket" || e.transport.transports[0].config.type === "ipc")), h = d ?? !1;
  return f ? (() => {
    const b = be([
      "watchEvent",
      t,
      n,
      r,
      e.uid,
      s,
      l,
      i
    ]);
    return it(b, { onLogs: c, onError: a }, (y) => {
      let x;
      i !== void 0 && (x = i - 1n);
      let g, w = !1;
      const T = Cn(async () => {
        var k;
        if (!w) {
          try {
            g = await M(e, Tl, "createEventFilter")({
              address: t,
              args: n,
              event: s,
              events: o,
              strict: h,
              fromBlock: i
            });
          } catch {
          }
          w = !0;
          return;
        }
        try {
          let E;
          if (g)
            E = await M(e, ws, "getFilterChanges")({ filter: g });
          else {
            const A = await M(e, xr, "getBlockNumber")({});
            x && x !== A ? E = await M(e, ki, "getLogs")({
              address: t,
              args: n,
              event: s,
              events: o,
              fromBlock: x + 1n,
              toBlock: A
            }) : E = [], x = A;
          }
          if (E.length === 0)
            return;
          if (r)
            y.onLogs(E);
          else
            for (const A of E)
              y.onLogs([A]);
        } catch (E) {
          g && E instanceof gt && (w = !1), (k = y.onError) == null || k.call(y, E);
        }
      }, {
        emitOnBegin: !0,
        interval: l
      });
      return async () => {
        g && await M(e, ys, "uninstallFilter")({ filter: g }), T();
      };
    });
  })() : (() => {
    let b = !0, y = () => b = !1;
    return (async () => {
      try {
        const x = (() => {
          if (e.transport.type === "fallback") {
            const k = e.transport.transports.find((E) => E.config.type === "webSocket" || E.config.type === "ipc");
            return k ? k.value : e.transport;
          }
          return e.transport;
        })(), g = o ?? (s ? [s] : void 0);
        let w = [];
        g && (w = [g.flatMap((E) => hr({
          abi: [E],
          eventName: E.name,
          args: n
        }))], s && (w = w[0]));
        const { unsubscribe: T } = await x.subscribe({
          params: ["logs", { address: t, topics: w }],
          onData(k) {
            var A;
            if (!b)
              return;
            const E = k.result;
            try {
              const { eventName: P, args: F } = Hr({
                abi: g ?? [],
                data: E.data,
                topics: E.topics,
                strict: h
              }), $ = ot(E, { args: F, eventName: P });
              c([$]);
            } catch (P) {
              let F, $;
              if (P instanceof zr || P instanceof ci) {
                if (d)
                  return;
                F = P.abiItem.name, $ = (A = P.abiItem.inputs) == null ? void 0 : A.some((R) => !("name" in R && R.name));
              }
              const L = ot(E, {
                args: $ ? [] : {},
                eventName: F
              });
              c([L]);
            }
          },
          onError(k) {
            a == null || a(k);
          }
        });
        y = T, b || y();
      } catch (x) {
        a == null || a(x);
      }
    })(), () => y();
  })();
}
function o6(e, { batch: t = !0, onError: n, onTransactions: r, poll: s, pollingInterval: o = e.pollingInterval }) {
  return (typeof s < "u" ? s : e.transport.type !== "webSocket" && e.transport.type !== "ipc") ? (() => {
    const u = be([
      "watchPendingTransactions",
      e.uid,
      t,
      o
    ]);
    return it(u, { onTransactions: r, onError: n }, (l) => {
      let d;
      const f = Cn(async () => {
        var h;
        try {
          if (!d)
            try {
              d = await M(e, Sl, "createPendingTransactionFilter")({});
              return;
            } catch (m) {
              throw f(), m;
            }
          const p = await M(e, ws, "getFilterChanges")({ filter: d });
          if (p.length === 0)
            return;
          if (t)
            l.onTransactions(p);
          else
            for (const m of p)
              l.onTransactions([m]);
        } catch (p) {
          (h = l.onError) == null || h.call(l, p);
        }
      }, {
        emitOnBegin: !0,
        interval: o
      });
      return async () => {
        d && await M(e, ys, "uninstallFilter")({ filter: d }), f();
      };
    });
  })() : (() => {
    let u = !0, l = () => u = !1;
    return (async () => {
      try {
        const { unsubscribe: d } = await e.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(f) {
            if (!u)
              return;
            const h = f.result;
            r([h]);
          },
          onError(f) {
            n == null || n(f);
          }
        });
        l = d, u || l();
      } catch (d) {
        n == null || n(d);
      }
    })(), () => l();
  })();
}
function i6(e) {
  var d, f, h;
  const { scheme: t, statement: n, ...r } = ((d = e.match(a6)) == null ? void 0 : d.groups) ?? {}, { chainId: s, expirationTime: o, issuedAt: i, notBefore: a, requestId: c, ...u } = ((f = e.match(c6)) == null ? void 0 : f.groups) ?? {}, l = (h = e.split("Resources:")[1]) == null ? void 0 : h.split(`
- `).slice(1);
  return {
    ...r,
    ...u,
    ...s ? { chainId: Number(s) } : {},
    ...o ? { expirationTime: new Date(o) } : {},
    ...i ? { issuedAt: new Date(i) } : {},
    ...a ? { notBefore: new Date(a) } : {},
    ...c ? { requestId: c } : {},
    ...l ? { resources: l } : {},
    ...t ? { scheme: t } : {},
    ...n ? { statement: n } : {}
  };
}
const a6 = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, c6 = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function u6(e) {
  const { address: t, domain: n, message: r, nonce: s, scheme: o, time: i = /* @__PURE__ */ new Date() } = e;
  if (n && r.domain !== n || s && r.nonce !== s || o && r.scheme !== o || r.expirationTime && i >= r.expirationTime || r.notBefore && i < r.notBefore)
    return !1;
  try {
    if (!r.address || !Ie(r.address, { strict: !1 }) || t && !wr(r.address, t))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
async function l6(e, t) {
  const { address: n, domain: r, message: s, nonce: o, scheme: i, signature: a, time: c = /* @__PURE__ */ new Date(), ...u } = t, l = i6(s);
  if (!l.address || !u6({
    address: n,
    domain: r,
    message: l,
    nonce: o,
    scheme: i,
    time: c
  }))
    return !1;
  const f = kl(s);
  return Ss(e, {
    address: l.address,
    hash: f,
    signature: a,
    ...u
  });
}
async function Ki(e, { serializedTransaction: t, throwOnReceiptRevert: n, timeout: r }) {
  var a, c, u;
  const s = await e.request({
    method: "eth_sendRawTransactionSync",
    params: r ? [t, U(r)] : [t]
  }, { retryCount: 0 }), i = (((u = (c = (a = e.chain) == null ? void 0 : a.formatters) == null ? void 0 : c.transactionReceipt) == null ? void 0 : u.format) || fl)(s);
  if (i.status === "reverted" && n)
    throw new Su({ receipt: i });
  return i;
}
function d6(e) {
  return {
    call: (t) => gs(e, t),
    createAccessList: (t) => Cl(e, t),
    createBlockFilter: () => Mm(e),
    createContractEventFilter: (t) => xu(e, t),
    createEventFilter: (t) => Tl(e, t),
    createPendingTransactionFilter: () => Sl(e),
    estimateContractGas: (t) => wp(e, t),
    estimateGas: (t) => Ti(e, t),
    getBalance: (t) => Dm(e, t),
    getBlobBaseFee: () => zm(e),
    getBlock: (t) => Ne(e, t),
    getBlockNumber: (t) => xr(e, t),
    getBlockTransactionCount: (t) => Um(e, t),
    getBytecode: (t) => Do(e, t),
    getChainId: () => xt(e),
    getCode: (t) => Do(e, t),
    getContractEvents: (t) => Gu(e, t),
    getEip712Domain: (t) => qm(e, t),
    getEnsAddress: (t) => Am(e, t),
    getEnsAvatar: (t) => Fm(e, t),
    getEnsName: (t) => Om(e, t),
    getEnsResolver: (t) => _m(e, t),
    getEnsText: (t) => El(e, t),
    getFeeHistory: (t) => Vm(e, t),
    estimateFeesPerGas: (t) => np(e, t),
    getFilterChanges: (t) => ws(e, t),
    getFilterLogs: (t) => Wm(e, t),
    getGasPrice: () => xi(e),
    getLogs: (t) => ki(e, t),
    getProof: (t) => og(e, t),
    estimateMaxPriorityFeePerGas: (t) => tp(e, t),
    fillTransaction: (t) => Ei(e, t),
    getStorageAt: (t) => ig(e, t),
    getTransaction: (t) => Hi(e, t),
    getTransactionConfirmations: (t) => ag(e, t),
    getTransactionCount: (t) => vi(e, t),
    getTransactionReceipt: (t) => Fr(e, t),
    multicall: (t) => cg(e, t),
    prepareTransactionRequest: (t) => gr(e, t),
    readContract: (t) => Me(e, t),
    sendRawTransaction: (t) => Ni(e, t),
    sendRawTransactionSync: (t) => Ki(e, t),
    simulate: (t) => qo(e, t),
    simulateBlocks: (t) => qo(e, t),
    simulateCalls: (t) => wg(e, t),
    simulateContract: (t) => im(e, t),
    verifyHash: (t) => Ss(e, t),
    verifyMessage: (t) => t6(e, t),
    verifySiweMessage: (t) => l6(e, t),
    verifyTypedData: (t) => n6(e, t),
    uninstallFilter: (t) => ys(e, t),
    waitForTransactionReceipt: (t) => p0(e, t),
    watchBlocks: (t) => r6(e, t),
    watchBlockNumber: (t) => h0(e, t),
    watchContractEvent: (t) => hm(e, t),
    watchEvent: (t) => s6(e, t),
    watchPendingTransactions: (t) => o6(e, t)
  };
}
function f6(e) {
  const { key: t = "public", name: n = "Public Client" } = e;
  return yl({
    ...e,
    key: t,
    name: n,
    type: "publicClient"
  }).extend(d6);
}
async function h6(e, { chain: t }) {
  const { id: n, name: r, nativeCurrency: s, rpcUrls: o, blockExplorers: i } = t;
  await e.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: U(n),
        chainName: r,
        nativeCurrency: s,
        rpcUrls: o.default.http,
        blockExplorerUrls: i ? Object.values(i).map(({ url: a }) => a) : void 0
      }
    ]
  }, { dedupe: !0, retryCount: 0 });
}
function p6(e, t) {
  const { abi: n, args: r, bytecode: s, ...o } = t, i = bs({ abi: n, args: r, bytecode: s });
  return xs(e, {
    ...o,
    ...o.authorizationList ? { to: null } : {},
    data: i
  });
}
async function m6(e) {
  var n;
  return ((n = e.account) == null ? void 0 : n.type) === "local" ? [e.account.address] : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map((r) => dr(r));
}
async function b6(e, t = {}) {
  const { account: n = e.account, chainId: r } = t, s = n ? Y(n) : void 0, o = r ? [s == null ? void 0 : s.address, [U(r)]] : [s == null ? void 0 : s.address], i = await e.request({
    method: "wallet_getCapabilities",
    params: o
  }), a = {};
  for (const [c, u] of Object.entries(i)) {
    a[Number(c)] = {};
    for (let [l, d] of Object.entries(u))
      l === "addSubAccount" && (l = "unstable_addSubAccount"), a[Number(c)][l] = d;
  }
  return typeof r == "number" ? a[r] : a;
}
async function g6(e) {
  return await e.request({ method: "wallet_getPermissions" }, { dedupe: !0 });
}
async function m0(e, t) {
  var c;
  const { account: n = e.account, chainId: r, nonce: s } = t;
  if (!n)
    throw new vt({
      docsPath: "/docs/eip7702/prepareAuthorization"
    });
  const o = Y(n), i = (() => {
    if (t.executor)
      return t.executor === "self" ? t.executor : Y(t.executor);
  })(), a = {
    address: t.contractAddress ?? t.address,
    chainId: r,
    nonce: s
  };
  return typeof a.chainId > "u" && (a.chainId = ((c = e.chain) == null ? void 0 : c.id) ?? await M(e, xt, "getChainId")({})), typeof a.nonce > "u" && (a.nonce = await M(e, vi, "getTransactionCount")({
    address: o.address,
    blockTag: "pending"
  }), (i === "self" || i != null && i.address && wr(i.address, o.address)) && (a.nonce += 1)), a;
}
async function w6(e) {
  return (await e.request({ method: "eth_requestAccounts" }, { dedupe: !0, retryCount: 0 })).map((n) => Rn(n));
}
async function y6(e, t) {
  return e.request({
    method: "wallet_requestPermissions",
    params: [t]
  }, { retryCount: 0 });
}
async function x6(e, t) {
  const { chain: n = e.chain } = t, r = t.timeout ?? Math.max(((n == null ? void 0 : n.blockTime) ?? 0) * 3, 5e3), s = await ml(e, t);
  return await gl(e, {
    ...t,
    id: s.id,
    timeout: r
  });
}
const so = new xn(128);
async function b0(e, t) {
  var E, A, P, F, $;
  const { account: n = e.account, assertChainId: r = !0, chain: s = e.chain, accessList: o, authorizationList: i, blobs: a, data: c, dataSuffix: u = typeof e.dataSuffix == "string" ? e.dataSuffix : (E = e.dataSuffix) == null ? void 0 : E.value, gas: l, gasPrice: d, maxFeePerBlobGas: f, maxFeePerGas: h, maxPriorityFeePerGas: p, nonce: m, pollingInterval: b, throwOnReceiptRevert: y, type: x, value: g, ...w } = t, T = t.timeout ?? Math.max(((s == null ? void 0 : s.blockTime) ?? 0) * 3, 5e3);
  if (typeof n > "u")
    throw new vt({
      docsPath: "/docs/actions/wallet/sendTransactionSync"
    });
  const k = n ? Y(n) : null;
  try {
    ct(t);
    const L = await (async () => {
      if (t.to)
        return t.to;
      if (t.to !== null && i && i.length > 0)
        return await fs({
          authorization: i[0]
        }).catch(() => {
          throw new I("`to` is required. Could not infer from `authorizationList`.");
        });
    })();
    if ((k == null ? void 0 : k.type) === "json-rpc" || k === null) {
      let R;
      s !== null && (R = await M(e, xt, "getChainId")({}), r && Ii({
        currentChainId: R,
        chain: s
      }));
      const D = (F = (P = (A = e.chain) == null ? void 0 : A.formatters) == null ? void 0 : P.transactionRequest) == null ? void 0 : F.format, S = (D || yt)({
        // Pick out extra data that might exist on the chain's transaction request type.
        ...An(w, { format: D }),
        accessList: o,
        account: k,
        authorizationList: i,
        blobs: a,
        chainId: R,
        data: c && le([c, u ?? "0x"]),
        gas: l,
        gasPrice: d,
        maxFeePerBlobGas: f,
        maxFeePerGas: h,
        maxPriorityFeePerGas: p,
        nonce: m,
        to: L,
        type: x,
        value: g
      }, "sendTransaction"), O = so.get(e.uid), B = O ? "wallet_sendTransaction" : "eth_sendTransaction", _ = await (async () => {
        try {
          return await e.request({
            method: B,
            params: [S]
          }, { retryCount: 0 });
        } catch (H) {
          if (O === !1)
            throw H;
          const Z = H;
          if (Z.name === "InvalidInputRpcError" || Z.name === "InvalidParamsRpcError" || Z.name === "MethodNotFoundRpcError" || Z.name === "MethodNotSupportedRpcError")
            return await e.request({
              method: "wallet_sendTransaction",
              params: [S]
            }, { retryCount: 0 }).then((J) => (so.set(e.uid, !0), J)).catch((J) => {
              const Q = J;
              throw Q.name === "MethodNotFoundRpcError" || Q.name === "MethodNotSupportedRpcError" ? (so.set(e.uid, !1), Z) : Q;
            });
          throw Z;
        }
      })(), z = await M(e, p0, "waitForTransactionReceipt")({
        checkReplacement: !1,
        hash: _,
        pollingInterval: b,
        timeout: T
      });
      if (y && z.status === "reverted")
        throw new Su({ receipt: z });
      return z;
    }
    if ((k == null ? void 0 : k.type) === "local") {
      const R = await M(e, gr, "prepareTransactionRequest")({
        account: k,
        accessList: o,
        authorizationList: i,
        blobs: a,
        chain: s,
        data: c && le([c, u ?? "0x"]),
        gas: l,
        gasPrice: d,
        maxFeePerBlobGas: f,
        maxFeePerGas: h,
        maxPriorityFeePerGas: p,
        nonce: m,
        nonceManager: k.nonceManager,
        parameters: [...Ci, "sidecars"],
        type: x,
        value: g,
        ...w,
        to: L
      }), D = ($ = s == null ? void 0 : s.serializers) == null ? void 0 : $.transaction, v = await k.signTransaction(R, {
        serializer: D
      });
      return await M(e, Ki, "sendRawTransactionSync")({
        serializedTransaction: v,
        throwOnReceiptRevert: y,
        timeout: t.timeout
      });
    }
    throw (k == null ? void 0 : k.type) === "smart" ? new Bt({
      metaMessages: [
        "Consider using the `sendUserOperation` Action instead."
      ],
      docsPath: "/docs/actions/bundler/sendUserOperation",
      type: "smart"
    }) : new Bt({
      docsPath: "/docs/actions/wallet/sendTransactionSync",
      type: k == null ? void 0 : k.type
    });
  } catch (L) {
    throw L instanceof Bt ? L : ps(L, {
      ...t,
      account: k,
      chain: t.chain || void 0
    });
  }
}
async function v6(e, t) {
  const { id: n } = t;
  await e.request({
    method: "wallet_showCallsStatus",
    params: [n]
  });
}
async function A6(e, t) {
  const { account: n = e.account } = t;
  if (!n)
    throw new vt({
      docsPath: "/docs/eip7702/signAuthorization"
    });
  const r = Y(n);
  if (!r.signAuthorization)
    throw new Bt({
      docsPath: "/docs/eip7702/signAuthorization",
      metaMessages: [
        "The `signAuthorization` Action does not support JSON-RPC Accounts."
      ],
      type: r.type
    });
  const s = await m0(e, t);
  return r.signAuthorization(s);
}
async function E6(e, { account: t = e.account, message: n }) {
  if (!t)
    throw new vt({
      docsPath: "/docs/actions/wallet/signMessage"
    });
  const r = Y(t);
  if (r.signMessage)
    return r.signMessage({ message: n });
  const s = typeof n == "string" ? cn(n) : n.raw instanceof Uint8Array ? We(n.raw) : n.raw;
  return e.request({
    method: "personal_sign",
    params: [s, r.address]
  }, { retryCount: 0 });
}
async function C6(e, t) {
  var u, l, d, f;
  const { account: n = e.account, chain: r = e.chain, ...s } = t;
  if (!n)
    throw new vt({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const o = Y(n);
  ct({
    account: o,
    ...t
  });
  const i = await M(e, xt, "getChainId")({});
  r !== null && Ii({
    currentChainId: i,
    chain: r
  });
  const a = (r == null ? void 0 : r.formatters) || ((u = e.chain) == null ? void 0 : u.formatters), c = ((l = a == null ? void 0 : a.transactionRequest) == null ? void 0 : l.format) || yt;
  return o.signTransaction ? o.signTransaction({
    ...s,
    chainId: i
  }, { serializer: (f = (d = e.chain) == null ? void 0 : d.serializers) == null ? void 0 : f.transaction }) : await e.request({
    method: "eth_signTransaction",
    params: [
      {
        ...c({
          ...s,
          account: o
        }, "signTransaction"),
        chainId: U(i),
        from: o.address
      }
    ]
  }, { retryCount: 0 });
}
async function T6(e, t) {
  const { account: n = e.account, domain: r, message: s, primaryType: o } = t;
  if (!n)
    throw new vt({
      docsPath: "/docs/actions/wallet/signTypedData"
    });
  const i = Y(n), a = {
    EIP712Domain: $l({ domain: r }),
    ...t.types
  };
  if (Pl({ domain: r, message: s, primaryType: o, types: a }), i.signTypedData)
    return i.signTypedData({ domain: r, message: s, primaryType: o, types: a });
  const c = rb({ domain: r, message: s, primaryType: o, types: a });
  return e.request({
    method: "eth_signTypedData_v4",
    params: [i.address, c]
  }, { retryCount: 0 });
}
async function S6(e, { id: t }) {
  await e.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: U(t)
      }
    ]
  }, { retryCount: 0 });
}
async function k6(e, t) {
  return await e.request({
    method: "wallet_watchAsset",
    params: t
  }, { retryCount: 0 });
}
async function P6(e, t) {
  return er.internal(e, b0, "sendTransactionSync", t);
}
function $6(e) {
  return {
    addChain: (t) => h6(e, t),
    deployContract: (t) => p6(e, t),
    fillTransaction: (t) => Ei(e, t),
    getAddresses: () => m6(e),
    getCallsStatus: (t) => bl(e, t),
    getCapabilities: (t) => b6(e, t),
    getChainId: () => xt(e),
    getPermissions: () => g6(e),
    prepareAuthorization: (t) => m0(e, t),
    prepareTransactionRequest: (t) => gr(e, t),
    requestAddresses: () => w6(e),
    requestPermissions: (t) => y6(e, t),
    sendCalls: (t) => ml(e, t),
    sendCallsSync: (t) => x6(e, t),
    sendRawTransaction: (t) => Ni(e, t),
    sendRawTransactionSync: (t) => Ki(e, t),
    sendTransaction: (t) => xs(e, t),
    sendTransactionSync: (t) => b0(e, t),
    showCallsStatus: (t) => v6(e, t),
    signAuthorization: (t) => A6(e, t),
    signMessage: (t) => E6(e, t),
    signTransaction: (t) => C6(e, t),
    signTypedData: (t) => T6(e, t),
    switchChain: (t) => S6(e, t),
    waitForCallsStatus: (t) => gl(e, t),
    watchAsset: (t) => k6(e, t),
    writeContract: (t) => er(e, t),
    writeContractSync: (t) => P6(e, t)
  };
}
function B6(e) {
  const { key: t = "wallet", name: n = "Wallet Client", transport: r } = e;
  return yl({
    ...e,
    key: t,
    name: n,
    transport: r,
    type: "walletClient"
  }).extend($6);
}
function I6({ key: e, methods: t, name: n, request: r, retryCount: s = 3, retryDelay: o = 150, timeout: i, type: a }, c) {
  const u = wl();
  return {
    config: {
      key: e,
      methods: t,
      name: n,
      request: r,
      retryCount: s,
      retryDelay: o,
      timeout: i,
      type: a
    },
    request: Qm(r, { methods: t, retryCount: s, retryDelay: o, uid: u }),
    value: c
  };
}
function g0(e, t = {}) {
  const { key: n = "custom", methods: r, name: s = "Custom Provider", retryDelay: o } = t;
  return ({ retryCount: i }) => I6({
    key: n,
    methods: r,
    name: s,
    request: e.request.bind(e),
    retryCount: t.retryCount ?? i,
    retryDelay: o,
    type: "custom"
  });
}
var Qr;
(function(e) {
  e.Standard = "standard", e.Optimized = "optimized";
})(Qr || (Qr = {}));
var X;
(function(e) {
  e.Initiated = "Initiated", e.ApprovalAdded = "ApprovalAdded", e.Accepted = "Accepted", e.Declined = "Declined", e.DeclinedDueToKytCheck = "DeclinedDueToKytCheck", e.UserDeposited = "UserDeposited", e.KycRequested = "KycRequested", e.Fulfilled = "Fulfilled", e.Expired = "Expired", e.RefundRequested = "RefundRequested", e.Refunded = "Refunded", e.Failed = "Failed";
})(X || (X = {}));
var uc;
(function(e) {
  e.EVM = "EVM", e.TRON = "TRON", e.BITCOIN = "BITCOIN", e.SOLANA = "SOLANA";
})(uc || (uc = {}));
const lc = (e, t, n, r) => {
  const s = e.additional_data, o = {
    name: s.domain.name,
    // TODO: uncomment once domain on the smart contracts is fixed
    // version: permit2Data.domain.version ?? undefined,
    chainId: s.domain.chainId,
    verifyingContract: s.domain.verifyingContract
  }, i = {
    ...s.witness,
    ...s.witness.minAmountOut ? {
      minAmountOut: ue(s.witness.minAmountOut).toString()
    } : {},
    ...s.witness.maxAmountOut ? {
      maxAmountOut: ue(s.witness.maxAmountOut).toString()
    } : {},
    ...s.witness.deadline ? { deadline: ue(s.witness.deadline).toString() } : {}
  }, a = {
    permitted: {
      token: t.source_token,
      amount: t.source_amount_lots
    },
    spender: e.escrow_contract_address,
    nonce: e.nonce,
    deadline: r,
    witness: i
  };
  return {
    domain: o,
    types: s.types,
    primaryType: "PermitWitnessTransferFrom",
    message: a,
    account: n
  };
}, w0 = () => "https://api.hotpot.tech/affiliate", y0 = () => "5PA84e6qCT2f9zZ5f8iQicYNCrkgofgUcSdRwK4Nt7S7MH5p9bybjLsbB7PnKcQoDWWMDtfmwYN8osNHtUYcyqyN", N6 = ee.create({
  baseURL: w0(),
  headers: {
    "x-api-key": y0()
  }
}), qe = new pf(
  w0(),
  y0(),
  N6
), L6 = {
  ethereum: 18,
  tron: 6,
  solana: 9,
  bitcoin: 8
};
class R6 {
  constructor() {
    this.networksCache = null, this.cacheTimestamp = 0, this.CACHE_DURATION = 600 * 1e3;
  }
  async getNetworks() {
    const t = Date.now();
    if (this.networksCache && t - this.cacheTimestamp < this.CACHE_DURATION)
      return this.networksCache;
    try {
      const n = await qe.listNetworks();
      return this.networksCache = n, this.cacheTimestamp = t, this.networksCache;
    } catch (n) {
      return console.error("Failed to fetch networks:", n), [];
    }
  }
  getNetworkIdByName(t, n) {
    const r = t.find(
      (s) => s.name.toLowerCase() === n.toLowerCase()
    );
    return (r == null ? void 0 : r.id) ?? null;
  }
  getDecimalsForNetwork(t) {
    const n = t.toLowerCase();
    return L6[n] ?? 18;
  }
}
const Nt = new R6(), F6 = (e) => {
  const {
    theme: t = "dark",
    backgroundColor: n,
    cardBackgroundColor: r,
    primaryTextColor: s,
    secondaryTextColor: o,
    buttonColor: i,
    buttonTextColor: a,
    iconsColor: c
  } = e, u = t === "dark" || t === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches, f = u ? {
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
    modalErrorColor: "#E23A4B1A"
  } : {
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
    modalErrorColor: "#E23A4B1A"
  }, h = {
    ...f,
    ...n != null && { backgroundColor: n },
    ...r != null && { cardBackgroundColor: r },
    ...s != null && { primaryTextColor: s },
    ...o != null && {
      secondaryTextColor: o
    },
    ...i != null && { buttonColor: i },
    ...a != null && { buttonTextColor: a },
    ...c != null && { iconsColor: c }
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
      background: ${h.backgroundColor};
      border-radius: 20px;
      padding: 16px;
      width: 100%;
      max-width: 420px;
      min-width: 320px;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      color: ${h.primaryTextColor};
    }

    .widget-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .widget-title {
      color: ${h.primaryTextColor};
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
      background: ${h.cardBackgroundColor};
      color: ${h.primaryTextColor};
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
      color: ${h.primaryTextColor};
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
      box-shadow: ${h.shadow};
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
      background: ${h.cardBackgroundColor};
    }

    .swap-section-top {
      position: relative;
      border-radius: 16px 16px 0 0;
      border-bottom: 2px solid ${h.iconBorder};
    }

    .swap-section-bottom {
      border-radius: 0 0 16px 16px;
    }

    .swap-card-with-toast .swap-section-bottom {
      border-radius: 0;
    }

    .swap-label {
      color: ${h.secondaryTextColor};
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
      color: ${h.primaryTextColor};
      outline: none;
      width: 100%;
    }


    .amount-input::placeholder {
      color: ${h.secondaryTextColor};
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
      border: 2px solid ${h.cardBackgroundColor};
      overflow: hidden;
      background: ${h.cardBackgroundColor};
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
      color: ${h.primaryTextColor};
    }

    .chevron-icon {
      width: 24px;
      height: 24px;
      color: ${h.iconsColor};
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
      color: ${h.secondaryTextColor};
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
      color: ${h.iconsColor};
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
      border: 2px solid ${h.iconBorder};
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
      background: ${h.cardBackgroundColor};
      border: 2px solid ${h.iconBorder};
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
      background: ${h.swapErrorColor};
    }

    .swap-divider-error svg {
      width: 24px;
      height: 24px;
    }

    .swap-divider-warning {
      background: ${h.swapWarningColor};
      border-color: ${h.iconBorder};
    }

    .swap-divider-warning svg {
      width: 24px;
      height: 24px;
    }

    .swap-divider-success {
      background: ${h.swapSuccessColor};
      border-color: ${h.iconBorder}; 
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
      background: ${h.cardBackgroundColor};
      border-radius: 0 0 12px 12px;
      border-top: 2px solid ${h.iconBorder};
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
      color: ${h.primaryTextColor};
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: inherit;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%;
    }

    .swap-status-toast-explorer {
      color: ${h.buttonColor};
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
      border: 2px solid ${h.iconBorder};
      background: ${h.cardBackgroundColor};
      color: ${h.primaryTextColor};
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
      background: ${h.buttonColor};
      border: none;
      border-radius: 12px;
      padding: 16px;
      font-size: 16px;
      font-weight: 600;
      color: ${h.buttonTextColor};
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
      background: ${u ? "#1F1F1F" : "#2727274D"};
      color: ${u ? "#FFFFFF80" : "#F6F7FB"};
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
      color: ${h.primaryTextColor};
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
      color: ${h.iconsColor};
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
      background: ${h.cardBackgroundColor};
      color: ${h.primaryTextColor};
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
      color: ${h.iconsColor};
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
      border: 1px solid ${h.iconBorder};
      background: ${h.cardBackgroundColor};
      font-family: inherit;
      font-size: 14px;
      color: ${h.primaryTextColor};
      outline: none;
    }

    .destination-address-input--filled {
      background: ${h.filledInputBackgroundColor};
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
      color: ${h.buttonColor};
    }

    .destination-clear-btn {
      color: ${h.buttonColor};
    }

    .slippage-panel {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin-top: -2px;
      padding: 12px 16px;
      border-radius: 0 0 12px 12px;
      background: ${h.cardBackgroundColor};
      border: 2px solid ${h.iconBorder};
      border-top: none;
      box-shadow: ${h.shadow};
      z-index: 10;
    }

    .destination-modal-overlay {
      width: 100%;
      margin-top: -16px;
    }

    .destination-modal {
      background: ${h.cardBackgroundColor};
      border-radius: 16px;
      padding: 8px;
      width: 100%;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25);
    }


    .destination-modal-title {
      font-size: 14px;
      font-weight: 500;
      color: ${h.primaryTextColor};
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
      background: ${h.cardBackgroundColor};
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      color: ${h.primaryTextColor};
    }

    .destination-modal-item:not(:last-child) {
      margin-bottom: 8px;
    }

    .destination-modal-item:hover {
      background: ${h.backgroundColor};
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
      color: ${h.primaryTextColor};
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
      border: 1px solid ${h.iconBorder};
      background: rgba(139, 92, 246, 0.1);
      color: ${h.iconsColor};
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .slippage-btn:hover {
      background: rgba(139, 92, 246, 0.15);
      color: ${h.primaryTextColor};
    }

    .slippage-btn.active {
      border-color: ${h.buttonColor};
      background: rgba(139, 92, 246, 0.25);
      color: ${h.buttonColor};
    }

    .slippage-input {
      flex: 1;
      min-width: 0;
      padding: 8px 12px;
      border-radius: 10px;
      border: 2px solid ${h.iconBorder};
      background: ${h.backgroundColor};
      color: ${h.primaryTextColor};
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      outline: none;
    }

    .slippage-input:focus {
      border-color: ${h.buttonColor};
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
      color: ${h.secondaryTextColor};
    }

    .powered-by {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .hotpot-link {
      color: ${h.buttonColor};
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
      background: ${f.overlayBackgroundColor};
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1002;
      pointer-events: auto;
    }

    .tx-modal {
      pointer-events: auto;
      background: ${h.backgroundColor};
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
      background: ${u ? "#282828" : "#F7F7F8"};
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
      background: ${h.modalSuccessColor};
    }

    .tx-modal-icon--error {
      background: ${h.modalErrorColor};
    }

    .tx-modal-icon--error svg {
      width: 32px;
      height: 32px;
    }

    .tx-modal-title {
      font-size: 14px;
      font-weight: 400;
      color: ${h.primaryTextColor};
      margin: 0;
      line-height: 160%;
    }

    .tx-modal-subtitle {
      font-size: 12px;
      color: ${h.secondaryTextColor};
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
      color: ${h.primaryTextColor};
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
      background: ${h.buttonColor};
      color: ${h.buttonTextColor};
    }

    .tx-modal-primary-btn--error {
      background: #E23A4B;
      color: #ffffff;
    }

    .connect-wallet-overlay {
      position: absolute;
      inset: 0;
      background: ${f.overlayBackgroundColor};
      display: flex;
      align-items: stretch;
      justify-content: center;
      z-index: 1001;
    }

    .connect-wallet-modal {
      background: ${h.backgroundColor};
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
      color: ${h.primaryTextColor};
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
      border: 2px solid ${h.iconBorder};
      background: ${h.cardBackgroundColor};
      color: ${h.primaryTextColor};
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      text-align: left;
    }

    .connect-wallet-item:hover:not(:disabled) {
      border-color: ${h.buttonColor};
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
      color: ${h.secondaryTextColor};
      text-align: center;
    }

    .connect-wallet-loading-spinner {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      padding: 16px;
      box-sizing: border-box;
      background: ${u ? "#282828" : "#F7F7F8"};
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
      color: ${h.primaryTextColor};
    }

    .connect-wallet-loading-subtitle {
      font-size: 14px;
      color: ${h.secondaryTextColor};
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
      background: ${h.backgroundColor};
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
      color: ${h.primaryTextColor};
    }

    .close-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      color: ${h.primaryTextColor};
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
      background: ${h.backgroundColor};
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
      border: 1px solid ${h.iconBorder};
      border-radius: 12px;
      background: ${h.cardBackgroundColor};
      color: ${h.primaryTextColor};
      font-size: 14px;
      outline: none;
    }

    .token-search-input::placeholder {
      color: ${h.secondaryTextColor};
    }

    .token-search-input:focus {
      border-color: ${h.buttonColor};
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
      background: ${h.cardBackgroundColor};
      border: 2px solid ${h.iconBorder};
      color: ${h.secondaryTextColor};
      cursor: pointer;
      transition: all 0.2s;
    }

    .networks-list__item:hover {
      color: ${h.primaryTextColor};
      border-color: ${h.buttonColor};
    }

    .networks-list__item.active {
      color: ${h.buttonTextColor};
      background: ${h.buttonColor};
      border-color: ${h.buttonColor};
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
      color: ${h.primaryTextColor};
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
      color: ${h.secondaryTextColor};
    }

    .token-icon-placeholder {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${h.iconBorder};
    }

    .token-list-loading,
    .token-list-empty {
      padding: 24px;
      text-align: center;
      color: ${h.secondaryTextColor};
      font-size: 14px;
    }

    .settings-panel .icon-button,
    .settings-panel .slippage-btn,
    .settings-panel .slippage-input {
      border-radius: 12px;
      border: 2px solid ${h.iconBorder};
      background: ${h.cardBackgroundColor};
    }
  `;
};
class O6 {
  constructor() {
    this.state = {
      connected: !1,
      address: null,
      chainId: null,
      type: null
    }, this.listeners = /* @__PURE__ */ new Set(), this.handlePhantomDisconnect = () => {
      this.state.type === "solana" && this.disconnect();
    }, this.detectInjectedWallets(), this.checkExistingConnection();
  }
  detectInjectedWallets() {
    var t, n, r, s, o, i, a, c, u, l;
    if (typeof window < "u" && window.ethereum && ((n = (t = window.ethereum).on) == null || n.call(t, "accountsChanged", this.handleAccountsChanged.bind(this)), (s = (r = window.ethereum).on) == null || s.call(r, "chainChanged", this.handleChainChanged.bind(this)), (i = (o = window.ethereum).on) == null || i.call(o, "disconnect", this.handleDisconnect.bind(this))), typeof window < "u" && ((a = window.phantom) != null && a.solana)) {
      const d = window.phantom.solana;
      (c = d.on) == null || c.call(d, "connect", () => this.checkExistingConnection()), (u = d.on) == null || u.call(d, "disconnect", () => {
        var f;
        return (f = this.handlePhantomDisconnect) == null ? void 0 : f.call(this);
      }), (l = d.on) == null || l.call(d, "accountChanged", (f) => {
        var h;
        f || (h = this.handlePhantomDisconnect) == null || h.call(this);
      });
    }
  }
  async checkExistingConnection() {
    var t, n;
    if (typeof window < "u" && window.ethereum)
      try {
        const r = await window.ethereum.request({
          method: "eth_accounts"
          // This doesn't trigger popup, just checks
        });
        if (r && r.length > 0) {
          const s = await window.ethereum.request({
            method: "eth_chainId"
          });
          this.state = {
            connected: !0,
            address: r[0],
            chainId: parseInt(s, 16),
            type: "evm"
          }, this.notifyListeners(), console.log("✅ Auto-detected connected EVM wallet:", r[0]);
        }
      } catch {
        console.log("No EVM wallet connected");
      }
    if (typeof window < "u" && window.tronWeb) {
      const s = (t = window.tronWeb.defaultAddress) == null ? void 0 : t.base58;
      if (s) {
        this.state = {
          connected: !0,
          address: s,
          chainId: null,
          type: "tron"
        }, this.notifyListeners(), console.log("✅ Auto-detected connected Tron wallet:", s);
        return;
      }
    }
    if (typeof window < "u" && ((n = window.phantom) != null && n.solana)) {
      const r = window.phantom.solana;
      if (r.isConnected && r.publicKey) {
        const s = r.publicKey.toString();
        this.state = {
          connected: !0,
          address: s,
          chainId: null,
          type: "solana"
        }, this.notifyListeners(), console.log("✅ Auto-detected connected Phantom wallet:", s);
      }
    }
  }
  async connectEVM() {
    if (!window.ethereum)
      throw new Error("No Ethereum wallet found. Please install MetaMask.");
    try {
      const t = await window.ethereum.request({
        method: "eth_requestAccounts"
      }), n = await window.ethereum.request({
        method: "eth_chainId"
      });
      return this.state = {
        connected: !0,
        address: t[0],
        chainId: parseInt(n, 16),
        type: "evm"
      }, this.notifyListeners(), t[0];
    } catch (t) {
      throw console.error("Failed to connect EVM wallet:", t), t;
    }
  }
  async connectPhantom() {
    var n;
    const t = (n = window.phantom) == null ? void 0 : n.solana;
    if (!(t != null && t.isPhantom))
      throw new Error("Phantom wallet not found. Please install Phantom.");
    try {
      const s = (await t.connect()).publicKey.toString();
      return this.state = {
        connected: !0,
        address: s,
        chainId: null,
        type: "solana"
      }, this.notifyListeners(), s;
    } catch (r) {
      throw console.error("Failed to connect Phantom:", r), r;
    }
  }
  async connectTron() {
    var n;
    const t = window.tronLink;
    if (!t)
      throw new Error("No Tron wallet found. Please install TronLink.");
    try {
      let r = t.tronWeb;
      if (!t.ready) {
        if ((await t.request({ method: "tron_requestAccounts" })).code !== 200)
          throw new Error("User rejected TronLink connection");
        r = t.tronWeb;
      }
      const s = (n = r.defaultAddress) == null ? void 0 : n.base58;
      if (!s)
        throw new Error("Failed to get Tron address");
      return this.state = {
        connected: !0,
        address: s,
        chainId: null,
        type: "tron"
      }, this.notifyListeners(), s;
    } catch (r) {
      throw console.error("Failed to connect Tron wallet:", r), r;
    }
  }
  async connect(t) {
    var n;
    if (t === "evm")
      return this.connectEVM();
    if (t === "tron")
      return this.connectTron();
    if (t === "solana")
      return this.connectPhantom();
    if (window.ethereum)
      return this.connectEVM();
    if (window.tronWeb)
      return this.connectTron();
    if ((n = window.phantom) != null && n.solana)
      return this.connectPhantom();
    throw new Error("No wallet found");
  }
  disconnect() {
    this.state = {
      connected: !1,
      address: null,
      chainId: null,
      type: null
    }, this.notifyListeners();
  }
  getState() {
    return { ...this.state };
  }
  isConnected() {
    return this.state.connected;
  }
  getAddress() {
    return this.state.address;
  }
  subscribe(t) {
    return this.listeners.add(t), () => this.listeners.delete(t);
  }
  notifyListeners() {
    this.listeners.forEach((t) => t(this.getState()));
  }
  handleAccountsChanged(t) {
    t.length === 0 ? this.disconnect() : (this.state.address = t[0], this.notifyListeners());
  }
  handleChainChanged(t) {
    this.state.chainId = parseInt(t, 16), this.notifyListeners();
  }
  handleDisconnect() {
    this.disconnect();
  }
}
class _6 {
  constructor() {
    this.tokensCache = null, this.cacheTimestamp = 0, this.CACHE_DURATION = 300 * 1e3;
  }
  mapApiTokenToModel(t, n) {
    var i;
    const r = n.find((a) => a.id === t.network_id), s = ((i = r == null ? void 0 : r.name) == null ? void 0 : i.toLowerCase()) ?? "ethereum", o = Nt.getDecimalsForNetwork(s);
    return {
      address: t.contract_address || void 0,
      symbol: t.symbol,
      name: t.name,
      decimals: o,
      icon_url: t.icon_url || "",
      network: s,
      fiatRate: 0,
      wrapped_token_address: t.wrapped_token_address || void 0
    };
  }
  async getTokens() {
    const t = Date.now();
    if (this.tokensCache && t - this.cacheTimestamp < this.CACHE_DURATION)
      return this.tokensCache;
    try {
      const [n, r] = await Promise.all([
        Nt.getNetworks(),
        qe.listTokens(100, 0)
      ]), s = r.data.map(
        (o) => this.mapApiTokenToModel(o, n)
      );
      return this.tokensCache = s, this.cacheTimestamp = t, s;
    } catch (n) {
      return console.error("Failed to fetch tokens:", n), this.getMockTokens();
    }
  }
  async searchTokens(t, n) {
    let s = await this.getTokens();
    if (n && n !== "all") {
      const i = n.toLowerCase();
      s = s.filter(
        (a) => {
          var c;
          return ((c = a.network) == null ? void 0 : c.toLowerCase()) === i;
        }
      );
    }
    if (!t.trim())
      return s.slice(0, 50);
    const o = t.toLowerCase();
    return s.filter(
      (i) => {
        var a;
        return i.symbol.toLowerCase().includes(o) || i.name.toLowerCase().includes(o) || ((a = i.address) == null ? void 0 : a.toLowerCase().includes(o));
      }
    );
  }
  async getTokenBySymbol(t, n, r) {
    const o = (await this.getTokens()).filter(
      (i) => {
        var a;
        return i.symbol.toLowerCase() === t.toLowerCase() && (!n || ((a = i.network) == null ? void 0 : a.toLowerCase()) === n.toLowerCase());
      }
    );
    return o.length === 0 ? null : r ? o.find(
      (a) => {
        var c;
        return ((c = a.network) == null ? void 0 : c.toLowerCase()) === r.toLowerCase();
      }
    ) ?? o[0] : o[0];
  }
  async getTokenByAddress(t, n) {
    const r = await this.getTokens(), s = t == null ? void 0 : t.toLowerCase();
    return r.find(
      (o) => {
        var i;
        return ((i = o.address) == null ? void 0 : i.toLowerCase()) === s && (!n || o.network === n);
      }
    ) ?? null;
  }
  getMockTokens() {
    return [
      {
        symbol: "ETH",
        name: "Ethereum",
        decimals: 18,
        icon_url: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
        network: "ethereum",
        fiatRate: 3e3,
        address: "0x0000000000000000000000000000000000000000",
        wrapped_token_address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      },
      {
        symbol: "USDT",
        name: "Tether USD",
        decimals: 6,
        icon_url: "https://assets.coingecko.com/coins/images/325/small/Tether.png",
        network: "ethereum",
        fiatRate: 1,
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
      },
      {
        symbol: "USDC",
        name: "USD Coin",
        decimals: 6,
        icon_url: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png",
        network: "ethereum",
        fiatRate: 1,
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      {
        symbol: "BTC",
        name: "Bitcoin",
        decimals: 8,
        icon_url: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
        network: "bitcoin",
        fiatRate: 65e3
      },
      {
        symbol: "SOL",
        name: "Solana",
        decimals: 9,
        icon_url: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
        network: "solana",
        fiatRate: 150,
        address: "So11111111111111111111111111111111111111112"
      },
      {
        symbol: "TRX",
        name: "TRON",
        decimals: 6,
        icon_url: "https://assets.coingecko.com/coins/images/1094/small/tron-logo.png",
        network: "tron",
        fiatRate: 0.15,
        wrapped_token_address: "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR"
      }
    ];
  }
  clearCache() {
    this.tokensCache = null, this.cacheTimestamp = 0;
  }
}
const Zt = new _6(), M6 = "0x0000000000000000000000000000000000000000", x0 = {
  1: ["ethereum", "eth", "ethereum mainnet", "mainnet"],
  56: ["bsc", "binance", "binance smart chain", "bnb chain", "bnb"],
  137: ["polygon", "matic"],
  42161: ["arbitrum"],
  10: ["optimism"]
}, dc = [
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  }
];
function D6(e, t) {
  const n = (e.network || "").toLowerCase();
  if (!t.connected || !t.address) return !1;
  if (t.type === "evm") {
    const r = t.chainId ?? 1;
    return (x0[r] ?? ["ethereum", "eth", "mainnet"]).some((o) => n === o || n.startsWith(o + " "));
  }
  return t.type === "tron" ? n === "tron" : t.type === "solana" ? n === "solana" : !1;
}
const z6 = [
  "0x0000000000000000000000000000000000000000",
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  "0x",
  "native",
  ""
];
function U6(e) {
  if (!e.address) return !0;
  if ((e.symbol || "").toUpperCase() === "ETH") {
    const r = (e.address || "").toLowerCase();
    return z6.some((s) => r === s || !r.trim());
  }
  const n = e.address.toLowerCase();
  return n === M6 || n === "0x";
}
function j6(e) {
  return (e.symbol || "").toUpperCase() === "TRX" || !e.address;
}
function q6(e) {
  return (e.symbol || "").toUpperCase() === "SOL";
}
function H6(e) {
  if (!e.connected) return null;
  if (e.type === "tron") return "tron";
  if (e.type === "solana") return "solana";
  if (e.type === "evm") {
    const t = e.chainId ?? 1, n = x0[t];
    return (n == null ? void 0 : n[0]) ?? "ethereum";
  }
  return null;
}
class G6 {
  async getBalance(t, n) {
    return D6(t, n) ? n.type === "evm" ? this.getEVMBalance(t, n) : n.type === "tron" ? this.getTronBalance(t, n) : n.type === "solana" ? this.getSolanaBalance(t, n) : null : (console.log("[HotPot] getBalance: network mismatch", { symbol: t.symbol, tokenNetwork: t.network, walletType: n.type, chainId: n.chainId }), null);
  }
  async getEVMBalance(t, n) {
    var r;
    if (typeof window > "u" || !window.ethereum || !n.address)
      return null;
    try {
      const s = t.decimals ?? 18;
      if (U6(t)) {
        const u = await window.ethereum.request({
          method: "eth_getBalance",
          params: [n.address, "latest"]
        }), l = BigInt(u);
        return Ur(l, s);
      }
      const o = t.address, i = f6({
        chain: { id: n.chainId ?? 1 },
        transport: g0(window.ethereum)
      });
      let a = t.decimals ?? 18;
      try {
        const u = await i.readContract({
          address: Rn(o),
          abi: dc,
          functionName: "decimals"
        });
        a = Number(u);
      } catch {
      }
      const c = await i.readContract({
        address: Rn(o),
        abi: dc,
        functionName: "balanceOf",
        args: [n.address]
      });
      return Ur(c, a);
    } catch (s) {
      return console.warn("[HotPot] getEVMBalance failed", { symbol: t.symbol, address: ((r = t.address) == null ? void 0 : r.slice(0, 12)) + "...", error: s }), null;
    }
  }
  async ensureTronReady() {
    const t = window.tronLink;
    if (!t) return null;
    if (!t.ready)
      try {
        const n = await t.request({ method: "tron_requestAccounts" });
        if ((n == null ? void 0 : n.code) !== 200) return null;
      } catch {
        return null;
      }
    return t.tronWeb ?? window.tronWeb;
  }
  async getTronBalance(t, n) {
    const r = await this.ensureTronReady();
    if (!(r != null && r.ready) || !n.address) return null;
    try {
      if (j6(t)) {
        const c = await r.trx.getBalance(n.address), u = Number(c) / 1e6;
        return String(u);
      }
      const o = await (await r.contract().at(t.address)).balanceOf(n.address).call(), i = t.decimals ?? 6, a = Number(o.toString()) / Math.pow(10, i);
      return String(a);
    } catch {
      return null;
    }
  }
  async getSolanaBalance(t, n) {
    var s, o, i, a, c, u, l;
    if (!n.address) return null;
    const r = "https://api.mainnet-beta.solana.com";
    try {
      if (q6(t)) {
        const y = await (await fetch(r, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "getBalance",
            params: [n.address]
          })
        })).json(), x = Number(((s = y == null ? void 0 : y.result) == null ? void 0 : s.value) ?? 0);
        return String(x / 1e9);
      }
      const f = await (await fetch(r, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getTokenAccountsByOwner",
          params: [
            n.address,
            { mint: t.address },
            { encoding: "jsonParsed" }
          ]
        })
      })).json(), h = ((o = f == null ? void 0 : f.result) == null ? void 0 : o.value) ?? [];
      if (!h.length) return "0";
      const p = (u = (c = (a = (i = h[0]) == null ? void 0 : i.account) == null ? void 0 : a.data) == null ? void 0 : c.parsed) == null ? void 0 : u.info, m = ((l = p == null ? void 0 : p.tokenAmount) == null ? void 0 : l.uiAmount) ?? 0;
      return String(m);
    } catch {
      return null;
    }
  }
}
const fc = new G6(), hc = "https://api.coingecko.com/api/v3", V6 = 120 * 1e3, W6 = {
  ethereum: "ethereum",
  eth: "ethereum",
  "ethereum mainnet": "ethereum",
  mainnet: "ethereum",
  bsc: "binance-smart-chain",
  binance: "binance-smart-chain",
  "bnb chain": "binance-smart-chain",
  polygon: "polygon-pos",
  matic: "polygon-pos",
  arbitrum: "arbitrum-one",
  optimism: "optimistic-ethereum",
  solana: "solana",
  tron: "tron"
}, Z6 = {
  ethereum: "ethereum",
  eth: "ethereum",
  bsc: "binancecoin",
  polygon: "matic-network",
  arbitrum: "ethereum",
  optimism: "ethereum",
  solana: "solana",
  tron: "tron"
}, K6 = {
  ETH: "ethereum",
  BNB: "binancecoin",
  MATIC: "matic-network",
  SOL: "solana",
  TRX: "tron"
};
class Q6 {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  cacheKey(t) {
    var s;
    const n = (t.network || "").toLowerCase(), r = ((s = t.address) == null ? void 0 : s.toLowerCase()) || "native";
    return `${n}:${r}`;
  }
  isNativeToken(t) {
    if (!t.address || t.address === "0x" || t.address === "0x0000000000000000000000000000000000000000") return !0;
    const n = (t.symbol || "").toUpperCase();
    return ["ETH", "BNB", "MATIC", "SOL", "TRX"].includes(n);
  }
  isStablecoin(t) {
    const n = (t.symbol || "").toUpperCase();
    return ["USDT", "USDC", "USDC.E", "DAI", "BUSD", "TUSD", "FRAX"].includes(n);
  }
  async getUsdRate(t) {
    var s, o;
    if (this.isStablecoin(t)) return 1;
    const n = this.cacheKey(t), r = this.cache.get(n);
    if (r && Date.now() - r.ts < V6) return r.rate;
    try {
      let i = 0;
      const a = (t.network || "ethereum").toLowerCase().split(/[\s-]/)[0], c = W6[a] || "ethereum";
      if (this.isNativeToken(t)) {
        const u = K6[(t.symbol || "").toUpperCase()] ?? Z6[c] ?? "ethereum", l = `${hc}/simple/price?ids=${u}&vs_currencies=usd`, f = await (await fetch(l)).json();
        i = Number(((s = f == null ? void 0 : f[u]) == null ? void 0 : s.usd) ?? 0);
      } else if (t.address) {
        const u = t.address.toLowerCase(), l = `${hc}/simple/token_price/${c}?contract_addresses=${u}&vs_currencies=usd`, f = await (await fetch(l)).json();
        i = Number(((o = f == null ? void 0 : f[u]) == null ? void 0 : o.usd) ?? 0);
      }
      return i > 0 && this.cache.set(n, { rate: i, ts: Date.now() }), i;
    } catch {
      return 0;
    }
  }
  async updateTokenFiatRates(t) {
    await Promise.all(
      t.filter((n) => n != null && (n.fiatRate == null || n.fiatRate === 0)).map(async (n) => {
        const r = await this.getUsdRate(n);
        r > 0 && (n.fiatRate = r);
      })
    );
  }
}
const X6 = new Q6(), Y6 = {
  TRX: "WTRX",
  ETH: "WETH"
};
function pc(e) {
  return Y6[e == null ? void 0 : e.toUpperCase()] ?? e;
}
function Xr(e) {
  var i;
  if (!e) return !1;
  const t = (e.network || "").toLowerCase();
  if (t !== "ethereum" && t !== "tron" && !t.includes("eth")) return !1;
  const n = (i = e.wrapped_token_address) == null ? void 0 : i.trim();
  if (!n) return !1;
  const r = (e.address || "").trim();
  if (!r || r === "0x" || r === "0x0000000000000000000000000000000000000000") return !0;
  const s = r.toLowerCase(), o = n.trim().toLowerCase();
  return s !== o;
}
async function J6(e, t, n) {
  var i;
  const r = (i = e.wrapped_token_address) == null ? void 0 : i.trim();
  if (!r)
    throw new Error(`Wrapped token address not available for ${e.symbol}`);
  if (!t.address)
    throw new Error("Wallet not connected");
  const s = (e.network || "").toLowerCase(), o = e.decimals ?? (s === "tron" ? 6 : 18);
  return s === "tron" ? t2(r, n, t.address, o) : e2(r, n, t.address, o);
}
async function e2(e, t, n, r) {
  if (typeof window > "u" || !window.ethereum)
    throw new Error("Ethereum wallet not found");
  if (!e.startsWith("0x") || !n.startsWith("0x"))
    throw new Error("Invalid Ethereum address format");
  const s = Gl(t.replace(/,/g, ""), r), i = de({
    abi: [
      {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      }
    ],
    functionName: "deposit"
  }), a = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: n,
        to: e,
        data: i,
        value: We(s)
      }
    ]
  });
  return await r2(a), a;
}
async function t2(e, t, n, r) {
  const s = await n2();
  if (!(s != null && s.ready))
    throw new Error("TronLink not connected");
  const o = t.replace(/,/g, "").trim(), i = Gl(o, r), a = await s.transactionBuilder.triggerSmartContract(
    e,
    "deposit()",
    {
      feeLimit: 1e8,
      callValue: i.toString()
    },
    [],
    n
  );
  if (!(a != null && a.transaction))
    throw new Error("Failed to build wrap transaction");
  const c = await s.trx.sign(a.transaction), u = await s.trx.sendRawTransaction(c), l = typeof u == "string" ? u : u == null ? void 0 : u.txid;
  if (!l)
    throw new Error("Failed to obtain Tron transaction id");
  const d = u;
  if ((d == null ? void 0 : d.result) === !1)
    throw new Error(
      `Broadcast failed: ${(d == null ? void 0 : d.code) || ""} ${(d == null ? void 0 : d.message) || ""}`.trim()
    );
  return await s2(l, s), l;
}
async function n2() {
  const e = window.tronLink;
  if (!e) return null;
  if (!e.ready) {
    const t = await e.request({ method: "tron_requestAccounts" });
    if ((t == null ? void 0 : t.code) !== 200) return null;
  }
  return e.tronWeb ?? window.tronWeb;
}
async function r2(e, t = 12e4, n = 3e3) {
  var s;
  const r = Date.now();
  for (; Date.now() - r < t; ) {
    try {
      const o = await window.ethereum.request({
        method: "eth_getTransactionReceipt",
        params: [e]
      });
      if (o && o.status !== "0x0") return;
      if (o && o.status === "0x0")
        throw new Error("Transaction failed");
    } catch (o) {
      if ((s = o == null ? void 0 : o.message) != null && s.includes("Transaction failed")) throw o;
    }
    await new Promise((o) => setTimeout(o, n));
  }
  throw new Error(`Confirmation timeout after ${t / 1e3}s`);
}
async function s2(e, t, n = 12e4, r = 1e3) {
  var o, i, a, c;
  const s = Date.now();
  for (; Date.now() - s < n; ) {
    try {
      const u = await t.trx.getTransactionInfo(e);
      if (((o = u == null ? void 0 : u.receipt) == null ? void 0 : o.result) === "SUCCESS") return;
      if (((i = u == null ? void 0 : u.receipt) == null ? void 0 : i.result) === "FAILED" || ((a = u == null ? void 0 : u.receipt) == null ? void 0 : a.result) === "REVERT")
        throw new Error("Transaction failed");
    } catch (u) {
      if ((c = u == null ? void 0 : u.message) != null && c.includes("Transaction failed")) throw u;
    }
    await new Promise((u) => setTimeout(u, r));
  }
  throw new Error(`Confirmation timeout after ${n / 1e3}s`);
}
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var en = 9e15, At = 1e9, Xo = "0123456789abcdef", Yr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Jr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Yo = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -en,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: en,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, v0, tt, W = !0, ks = "[DecimalError] ", wt = ks + "Invalid argument: ", A0 = ks + "Precision limit exceeded", E0 = ks + "crypto unavailable", C0 = "[object Decimal]", fe = Math.floor, re = Math.pow, o2 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, i2 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, a2 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, T0 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Le = 1e7, q = 7, c2 = 9007199254740991, u2 = Yr.length - 1, Jo = Jr.length - 1, N = { toStringTag: C0 };
N.absoluteValue = N.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), j(e);
};
N.ceil = function() {
  return j(new this.constructor(this), this.e + 1, 2);
};
N.clampedTo = N.clamp = function(e, t) {
  var n, r = this, s = r.constructor;
  if (e = new s(e), t = new s(t), !e.s || !t.s) return new s(NaN);
  if (e.gt(t)) throw Error(wt + t);
  return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new s(r);
};
N.comparedTo = N.cmp = function(e) {
  var t, n, r, s, o = this, i = o.d, a = (e = new o.constructor(e)).d, c = o.s, u = e.s;
  if (!i || !a)
    return !c || !u ? NaN : c !== u ? c : i === a ? 0 : !i ^ c < 0 ? 1 : -1;
  if (!i[0] || !a[0]) return i[0] ? c : a[0] ? -u : 0;
  if (c !== u) return c;
  if (o.e !== e.e) return o.e > e.e ^ c < 0 ? 1 : -1;
  for (r = i.length, s = a.length, t = 0, n = r < s ? r : s; t < n; ++t)
    if (i[t] !== a[t]) return i[t] > a[t] ^ c < 0 ? 1 : -1;
  return r === s ? 0 : r > s ^ c < 0 ? 1 : -1;
};
N.cosine = N.cos = function() {
  var e, t, n = this, r = n.constructor;
  return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + q, r.rounding = 1, n = l2(r, B0(r, n)), r.precision = e, r.rounding = t, j(tt == 2 || tt == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
};
N.cubeRoot = N.cbrt = function() {
  var e, t, n, r, s, o, i, a, c, u, l = this, d = l.constructor;
  if (!l.isFinite() || l.isZero()) return new d(l);
  for (W = !1, o = l.s * re(l.s * l, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = ae(l.d), e = l.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = re(n, 1 / 3), e = fe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = l.s) : r = new d(o.toString()), i = (e = d.precision) + 3; ; )
    if (a = r, c = a.times(a).times(a), u = c.plus(l), r = K(u.plus(l).times(a), u.plus(c), i + 2, 1), ae(a.d).slice(0, i) === (n = ae(r.d)).slice(0, i))
      if (n = n.slice(i - 3, i + 1), n == "9999" || !s && n == "4999") {
        if (!s && (j(a, e + 1, 0), a.times(a).times(a).eq(l))) {
          r = a;
          break;
        }
        i += 4, s = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (j(r, e + 1, 1), t = !r.times(r).times(r).eq(l));
        break;
      }
  return W = !0, j(r, e, d.rounding, t);
};
N.decimalPlaces = N.dp = function() {
  var e, t = this.d, n = NaN;
  if (t) {
    if (e = t.length - 1, n = (e - fe(this.e / q)) * q, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
    n < 0 && (n = 0);
  }
  return n;
};
N.dividedBy = N.div = function(e) {
  return K(this, new this.constructor(e));
};
N.dividedToIntegerBy = N.divToInt = function(e) {
  var t = this, n = t.constructor;
  return j(K(t, new n(e), 0, 1, 1), n.precision, n.rounding);
};
N.equals = N.eq = function(e) {
  return this.cmp(e) === 0;
};
N.floor = function() {
  return j(new this.constructor(this), this.e + 1, 3);
};
N.greaterThan = N.gt = function(e) {
  return this.cmp(e) > 0;
};
N.greaterThanOrEqualTo = N.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
N.hyperbolicCosine = N.cosh = function() {
  var e, t, n, r, s, o = this, i = o.constructor, a = new i(1);
  if (!o.isFinite()) return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  n = i.precision, r = i.rounding, i.precision = n + Math.max(o.e, o.sd()) + 4, i.rounding = 1, s = o.d.length, s < 32 ? (e = Math.ceil(s / 3), t = (1 / $s(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = mn(i, 1, o.times(t), new i(1), !0);
  for (var c, u = e, l = new i(8); u--; )
    c = o.times(o), o = a.minus(c.times(l.minus(c.times(l))));
  return j(o, i.precision = n, i.rounding = r, !0);
};
N.hyperbolicSine = N.sinh = function() {
  var e, t, n, r, s = this, o = s.constructor;
  if (!s.isFinite() || s.isZero()) return new o(s);
  if (t = o.precision, n = o.rounding, o.precision = t + Math.max(s.e, s.sd()) + 4, o.rounding = 1, r = s.d.length, r < 3)
    s = mn(o, 2, s, s, !0);
  else {
    e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, s = s.times(1 / $s(5, e)), s = mn(o, 2, s, s, !0);
    for (var i, a = new o(5), c = new o(16), u = new o(20); e--; )
      i = s.times(s), s = s.times(a.plus(i.times(c.times(i).plus(u))));
  }
  return o.precision = t, o.rounding = n, j(s, t, n, !0);
};
N.hyperbolicTangent = N.tanh = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, K(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
};
N.inverseCosine = N.acos = function() {
  var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, s = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? He(t, r, s) : new t(0) : new t(NaN) : e.isZero() ? He(t, r + 4, s).times(0.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = s, e.times(2));
};
N.inverseHyperbolicCosine = N.acosh = function() {
  var e, t, n = this, r = n.constructor;
  return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, W = !1, n = n.times(n).minus(1).sqrt().plus(n), W = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
};
N.inverseHyperbolicSine = N.asinh = function() {
  var e, t, n = this, r = n.constructor;
  return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, W = !1, n = n.times(n).plus(1).sqrt().plus(n), W = !0, r.precision = e, r.rounding = t, n.ln());
};
N.inverseHyperbolicTangent = N.atanh = function() {
  var e, t, n, r, s = this, o = s.constructor;
  return s.isFinite() ? s.e >= 0 ? new o(s.abs().eq(1) ? s.s / 0 : s.isZero() ? s : NaN) : (e = o.precision, t = o.rounding, r = s.sd(), Math.max(r, e) < 2 * -s.e - 1 ? j(new o(s), e, t, !0) : (o.precision = n = r - s.e, s = K(s.plus(1), new o(1).minus(s), n + e, 1), o.precision = e + 4, o.rounding = 1, s = s.ln(), o.precision = e, o.rounding = t, s.times(0.5))) : new o(NaN);
};
N.inverseSine = N.asin = function() {
  var e, t, n, r, s = this, o = s.constructor;
  return s.isZero() ? new o(s) : (t = s.abs().cmp(1), n = o.precision, r = o.rounding, t !== -1 ? t === 0 ? (e = He(o, n + 4, r).times(0.5), e.s = s.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, s = s.div(new o(1).minus(s.times(s)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = r, s.times(2)));
};
N.inverseTangent = N.atan = function() {
  var e, t, n, r, s, o, i, a, c, u = this, l = u.constructor, d = l.precision, f = l.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new l(u);
    if (u.abs().eq(1) && d + 4 <= Jo)
      return i = He(l, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s) return new l(NaN);
    if (d + 4 <= Jo)
      return i = He(l, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (l.precision = a = d + 10, l.rounding = 1, n = Math.min(28, a / q + 2 | 0), e = n; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (W = !1, t = Math.ceil(a / q), r = 1, c = u.times(u), i = new l(u), s = u; e !== -1; )
    if (s = s.times(c), o = i.minus(s.div(r += 2)), s = s.times(c), i = o.plus(s.div(r += 2)), i.d[t] !== void 0) for (e = t; i.d[e] === o.d[e] && e--; ) ;
  return n && (i = i.times(2 << n - 1)), W = !0, j(i, l.precision = d, l.rounding = f, !0);
};
N.isFinite = function() {
  return !!this.d;
};
N.isInteger = N.isInt = function() {
  return !!this.d && fe(this.e / q) > this.d.length - 2;
};
N.isNaN = function() {
  return !this.s;
};
N.isNegative = N.isNeg = function() {
  return this.s < 0;
};
N.isPositive = N.isPos = function() {
  return this.s > 0;
};
N.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
N.lessThan = N.lt = function(e) {
  return this.cmp(e) < 0;
};
N.lessThanOrEqualTo = N.lte = function(e) {
  return this.cmp(e) < 1;
};
N.logarithm = N.log = function(e) {
  var t, n, r, s, o, i, a, c, u = this, l = u.constructor, d = l.precision, f = l.rounding, h = 5;
  if (e == null)
    e = new l(10), t = !0;
  else {
    if (e = new l(e), n = e.d, e.s < 0 || !n || !n[0] || e.eq(1)) return new l(NaN);
    t = e.eq(10);
  }
  if (n = u.d, u.s < 0 || !n || !n[0] || u.eq(1))
    return new l(n && !n[0] ? -1 / 0 : u.s != 1 ? NaN : n ? 0 : 1 / 0);
  if (t)
    if (n.length > 1)
      o = !0;
    else {
      for (s = n[0]; s % 10 === 0; ) s /= 10;
      o = s !== 1;
    }
  if (W = !1, a = d + h, i = ht(u, a), r = t ? es(l, a + 10) : ht(e, a), c = K(i, r, a, 1), sr(c.d, s = d, f))
    do
      if (a += 10, i = ht(u, a), r = t ? es(l, a + 10) : ht(e, a), c = K(i, r, a, 1), !o) {
        +ae(c.d).slice(s + 1, s + 15) + 1 == 1e14 && (c = j(c, d + 1, 0));
        break;
      }
    while (sr(c.d, s += 10, f));
  return W = !0, j(c, d, f);
};
N.minus = N.sub = function(e) {
  var t, n, r, s, o, i, a, c, u, l, d, f, h = this, p = h.constructor;
  if (e = new p(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new p(NaN) : h.d ? e.s = -e.s : e = new p(e.d || h.s !== e.s ? h : NaN), e;
  if (h.s != e.s)
    return e.s = -e.s, h.plus(e);
  if (u = h.d, f = e.d, a = p.precision, c = p.rounding, !u[0] || !f[0]) {
    if (f[0]) e.s = -e.s;
    else if (u[0]) e = new p(h);
    else return new p(c === 3 ? -0 : 0);
    return W ? j(e, a, c) : e;
  }
  if (n = fe(e.e / q), l = fe(h.e / q), u = u.slice(), o = l - n, o) {
    for (d = o < 0, d ? (t = u, o = -o, i = f.length) : (t = f, n = l, i = u.length), r = Math.max(Math.ceil(a / q), i) + 2, o > r && (o = r, t.length = 1), t.reverse(), r = o; r--; ) t.push(0);
    t.reverse();
  } else {
    for (r = u.length, i = f.length, d = r < i, d && (i = r), r = 0; r < i; r++)
      if (u[r] != f[r]) {
        d = u[r] < f[r];
        break;
      }
    o = 0;
  }
  for (d && (t = u, u = f, f = t, e.s = -e.s), i = u.length, r = f.length - i; r > 0; --r) u[i++] = 0;
  for (r = f.length; r > o; ) {
    if (u[--r] < f[r]) {
      for (s = r; s && u[--s] === 0; ) u[s] = Le - 1;
      --u[s], u[r] += Le;
    }
    u[r] -= f[r];
  }
  for (; u[--i] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (e.d = u, e.e = Ps(u, n), W ? j(e, a, c) : e) : new p(c === 3 ? -0 : 0);
};
N.modulo = N.mod = function(e) {
  var t, n = this, r = n.constructor;
  return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? j(new r(n), r.precision, r.rounding) : (W = !1, r.modulo == 9 ? (t = K(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = K(n, e, 0, r.modulo, 1), t = t.times(e), W = !0, n.minus(t));
};
N.naturalExponential = N.exp = function() {
  return ei(this);
};
N.naturalLogarithm = N.ln = function() {
  return ht(this);
};
N.negated = N.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, j(e);
};
N.plus = N.add = function(e) {
  var t, n, r, s, o, i, a, c, u, l, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, l = e.d, a = f.precision, c = f.rounding, !u[0] || !l[0])
    return l[0] || (e = new f(d)), W ? j(e, a, c) : e;
  if (o = fe(d.e / q), r = fe(e.e / q), u = u.slice(), s = o - r, s) {
    for (s < 0 ? (n = u, s = -s, i = l.length) : (n = l, r = o, i = u.length), o = Math.ceil(a / q), i = o > i ? o + 1 : i + 1, s > i && (s = i, n.length = 1), n.reverse(); s--; ) n.push(0);
    n.reverse();
  }
  for (i = u.length, s = l.length, i - s < 0 && (s = i, n = l, l = u, u = n), t = 0; s; )
    t = (u[--s] = u[s] + l[s] + t) / Le | 0, u[s] %= Le;
  for (t && (u.unshift(t), ++r), i = u.length; u[--i] == 0; ) u.pop();
  return e.d = u, e.e = Ps(u, r), W ? j(e, a, c) : e;
};
N.precision = N.sd = function(e) {
  var t, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(wt + e);
  return n.d ? (t = S0(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
};
N.round = function() {
  var e = this, t = e.constructor;
  return j(new t(e), e.e + 1, t.rounding);
};
N.sine = N.sin = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + q, r.rounding = 1, n = f2(r, B0(r, n)), r.precision = e, r.rounding = t, j(tt > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
N.squareRoot = N.sqrt = function() {
  var e, t, n, r, s, o, i = this, a = i.d, c = i.e, u = i.s, l = i.constructor;
  if (u !== 1 || !a || !a[0])
    return new l(!u || u < 0 && (!a || a[0]) ? NaN : a ? i : 1 / 0);
  for (W = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (t = ae(a), (t.length + c) % 2 == 0 && (t += "0"), u = Math.sqrt(t), c = fe((c + 1) / 2) - (c < 0 || c % 2), u == 1 / 0 ? t = "5e" + c : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new l(t)) : r = new l(u.toString()), n = (c = l.precision) + 3; ; )
    if (o = r, r = o.plus(K(i, o, n + 2, 1)).times(0.5), ae(o.d).slice(0, n) === (t = ae(r.d)).slice(0, n))
      if (t = t.slice(n - 3, n + 1), t == "9999" || !s && t == "4999") {
        if (!s && (j(o, c + 1, 0), o.times(o).eq(i))) {
          r = o;
          break;
        }
        n += 4, s = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (j(r, c + 1, 1), e = !r.times(r).eq(i));
        break;
      }
  return W = !0, j(r, c, l.rounding, e);
};
N.tangent = N.tan = function() {
  var e, t, n = this, r = n.constructor;
  return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = K(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, j(tt == 2 || tt == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
};
N.times = N.mul = function(e) {
  var t, n, r, s, o, i, a, c, u, l = this, d = l.constructor, f = l.d, h = (e = new d(e)).d;
  if (e.s *= l.s, !f || !f[0] || !h || !h[0])
    return new d(!e.s || f && !f[0] && !h || h && !h[0] && !f ? NaN : !f || !h ? e.s / 0 : e.s * 0);
  for (n = fe(l.e / q) + fe(e.e / q), c = f.length, u = h.length, c < u && (o = f, f = h, h = o, i = c, c = u, u = i), o = [], i = c + u, r = i; r--; ) o.push(0);
  for (r = u; --r >= 0; ) {
    for (t = 0, s = c + r; s > r; )
      a = o[s] + h[r] * f[s - r - 1] + t, o[s--] = a % Le | 0, t = a / Le | 0;
    o[s] = (o[s] + t) % Le | 0;
  }
  for (; !o[--i]; ) o.pop();
  return t ? ++n : o.shift(), e.d = o, e.e = Ps(o, n), W ? j(e, d.precision, d.rounding) : e;
};
N.toBinary = function(e, t) {
  return Qi(this, 2, e, t);
};
N.toDecimalPlaces = N.toDP = function(e, t) {
  var n = this, r = n.constructor;
  return n = new r(n), e === void 0 ? n : (Ae(e, 0, At), t === void 0 ? t = r.rounding : Ae(t, 0, 8), j(n, e + n.e + 1, t));
};
N.toExponential = function(e, t) {
  var n, r = this, s = r.constructor;
  return e === void 0 ? n = Ke(r, !0) : (Ae(e, 0, At), t === void 0 ? t = s.rounding : Ae(t, 0, 8), r = j(new s(r), e + 1, t), n = Ke(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
N.toFixed = function(e, t) {
  var n, r, s = this, o = s.constructor;
  return e === void 0 ? n = Ke(s) : (Ae(e, 0, At), t === void 0 ? t = o.rounding : Ae(t, 0, 8), r = j(new o(s), e + s.e + 1, t), n = Ke(r, !1, e + r.e + 1)), s.isNeg() && !s.isZero() ? "-" + n : n;
};
N.toFraction = function(e) {
  var t, n, r, s, o, i, a, c, u, l, d, f, h = this, p = h.d, m = h.constructor;
  if (!p) return new m(h);
  if (u = n = new m(1), r = c = new m(0), t = new m(r), o = t.e = S0(p) - h.e - 1, i = o % q, t.d[0] = re(10, i < 0 ? q + i : i), e == null)
    e = o > 0 ? t : u;
  else {
    if (a = new m(e), !a.isInt() || a.lt(u)) throw Error(wt + a);
    e = a.gt(t) ? o > 0 ? t : u : a;
  }
  for (W = !1, a = new m(ae(p)), l = m.precision, m.precision = o = p.length * q * 2; d = K(a, t, 0, 1, 1), s = n.plus(d.times(r)), s.cmp(e) != 1; )
    n = r, r = s, s = u, u = c.plus(d.times(s)), c = s, s = t, t = a.minus(d.times(s)), a = s;
  return s = K(e.minus(n), r, 0, 1, 1), c = c.plus(s.times(u)), n = n.plus(s.times(r)), c.s = u.s = h.s, f = K(u, r, o, 1).minus(h).abs().cmp(K(c, n, o, 1).minus(h).abs()) < 1 ? [u, r] : [c, n], m.precision = l, W = !0, f;
};
N.toHexadecimal = N.toHex = function(e, t) {
  return Qi(this, 16, e, t);
};
N.toNearest = function(e, t) {
  var n = this, r = n.constructor;
  if (n = new r(n), e == null) {
    if (!n.d) return n;
    e = new r(1), t = r.rounding;
  } else {
    if (e = new r(e), t === void 0 ? t = r.rounding : Ae(t, 0, 8), !n.d) return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? (W = !1, n = K(n, e, 0, t, 1).times(e), W = !0, j(n)) : (e.s = n.s, n = e), n;
};
N.toNumber = function() {
  return +this;
};
N.toOctal = function(e, t) {
  return Qi(this, 8, e, t);
};
N.toPower = N.pow = function(e) {
  var t, n, r, s, o, i, a = this, c = a.constructor, u = +(e = new c(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new c(re(+a, u));
  if (a = new c(a), a.eq(1)) return a;
  if (r = c.precision, o = c.rounding, e.eq(1)) return j(a, r, o);
  if (t = fe(e.e / q), t >= e.d.length - 1 && (n = u < 0 ? -u : u) <= c2)
    return s = k0(c, a, n, r), e.s < 0 ? new c(1).div(s) : j(s, r, o);
  if (i = a.s, i < 0) {
    if (t < e.d.length - 1) return new c(NaN);
    if ((e.d[t] & 1) == 0 && (i = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = i, a;
  }
  return n = re(+a, u), t = n == 0 || !isFinite(n) ? fe(u * (Math.log("0." + ae(a.d)) / Math.LN10 + a.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? i / 0 : 0) : (W = !1, c.rounding = a.s = 1, n = Math.min(12, (t + "").length), s = ei(e.times(ht(a, r + n)), r), s.d && (s = j(s, r + 5, 1), sr(s.d, r, o) && (t = r + 10, s = j(ei(e.times(ht(a, t + n)), t), t + 5, 1), +ae(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = j(s, r + 1, 0)))), s.s = i, W = !0, c.rounding = o, j(s, r, o));
};
N.toPrecision = function(e, t) {
  var n, r = this, s = r.constructor;
  return e === void 0 ? n = Ke(r, r.e <= s.toExpNeg || r.e >= s.toExpPos) : (Ae(e, 1, At), t === void 0 ? t = s.rounding : Ae(t, 0, 8), r = j(new s(r), e, t), n = Ke(r, e <= r.e || r.e <= s.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
};
N.toSignificantDigits = N.toSD = function(e, t) {
  var n = this, r = n.constructor;
  return e === void 0 ? (e = r.precision, t = r.rounding) : (Ae(e, 1, At), t === void 0 ? t = r.rounding : Ae(t, 0, 8)), j(new r(n), e, t);
};
N.toString = function() {
  var e = this, t = e.constructor, n = Ke(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
N.truncated = N.trunc = function() {
  return j(new this.constructor(this), this.e + 1, 1);
};
N.valueOf = N.toJSON = function() {
  var e = this, t = e.constructor, n = Ke(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function ae(e) {
  var t, n, r, s = e.length - 1, o = "", i = e[0];
  if (s > 0) {
    for (o += i, t = 1; t < s; t++)
      r = e[t] + "", n = q - r.length, n && (o += ft(n)), o += r;
    i = e[t], r = i + "", n = q - r.length, n && (o += ft(n));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; ) i /= 10;
  return o + i;
}
function Ae(e, t, n) {
  if (e !== ~~e || e < t || e > n)
    throw Error(wt + e);
}
function sr(e, t, n, r) {
  var s, o, i, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return --t < 0 ? (t += q, s = 0) : (s = Math.ceil((t + 1) / q), t %= q), o = re(10, q - t), a = e[s] % o | 0, r == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), i = n < 4 && a == 99999 || n > 3 && a == 49999 || a == 5e4 || a == 0) : i = (n < 4 && a + 1 == o || n > 3 && a + 1 == o / 2) && (e[s + 1] / o / 100 | 0) == re(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[s + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), i = (r || n < 4) && a == 9999 || !r && n > 3 && a == 4999) : i = ((r || n < 4) && a + 1 == o || !r && n > 3 && a + 1 == o / 2) && (e[s + 1] / o / 1e3 | 0) == re(10, t - 3) - 1, i;
}
function Or(e, t, n) {
  for (var r, s = [0], o, i = 0, a = e.length; i < a; ) {
    for (o = s.length; o--; ) s[o] *= t;
    for (s[0] += Xo.indexOf(e.charAt(i++)), r = 0; r < s.length; r++)
      s[r] > n - 1 && (s[r + 1] === void 0 && (s[r + 1] = 0), s[r + 1] += s[r] / n | 0, s[r] %= n);
  }
  return s.reverse();
}
function l2(e, t) {
  var n, r, s;
  if (t.isZero()) return t;
  r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), s = (1 / $s(4, n)).toString()) : (n = 16, s = "2.3283064365386962890625e-10"), e.precision += n, t = mn(e, 1, t.times(s), new e(1));
  for (var o = n; o--; ) {
    var i = t.times(t);
    t = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= n, t;
}
var K = /* @__PURE__ */ (function() {
  function e(r, s, o) {
    var i, a = 0, c = r.length;
    for (r = r.slice(); c--; )
      i = r[c] * s + a, r[c] = i % o | 0, a = i / o | 0;
    return a && r.unshift(a), r;
  }
  function t(r, s, o, i) {
    var a, c;
    if (o != i)
      c = o > i ? 1 : -1;
    else
      for (a = c = 0; a < o; a++)
        if (r[a] != s[a]) {
          c = r[a] > s[a] ? 1 : -1;
          break;
        }
    return c;
  }
  function n(r, s, o, i) {
    for (var a = 0; o--; )
      r[o] -= a, a = r[o] < s[o] ? 1 : 0, r[o] = a * i + r[o] - s[o];
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function(r, s, o, i, a, c) {
    var u, l, d, f, h, p, m, b, y, x, g, w, T, k, E, A, P, F, $, L, R = r.constructor, D = r.s == s.s ? 1 : -1, v = r.d, S = s.d;
    if (!v || !v[0] || !S || !S[0])
      return new R(
        // Return NaN if either NaN, or both Infinity or 0.
        !r.s || !s.s || (v ? S && v[0] == S[0] : !S) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          v && v[0] == 0 || !S ? D * 0 : D / 0
        )
      );
    for (c ? (h = 1, l = r.e - s.e) : (c = Le, h = q, l = fe(r.e / h) - fe(s.e / h)), $ = S.length, P = v.length, y = new R(D), x = y.d = [], d = 0; S[d] == (v[d] || 0); d++) ;
    if (S[d] > (v[d] || 0) && l--, o == null ? (k = o = R.precision, i = R.rounding) : a ? k = o + (r.e - s.e) + 1 : k = o, k < 0)
      x.push(1), p = !0;
    else {
      if (k = k / h + 2 | 0, d = 0, $ == 1) {
        for (f = 0, S = S[0], k++; (d < P || f) && k--; d++)
          E = f * c + (v[d] || 0), x[d] = E / S | 0, f = E % S | 0;
        p = f || d < P;
      } else {
        for (f = c / (S[0] + 1) | 0, f > 1 && (S = e(S, f, c), v = e(v, f, c), $ = S.length, P = v.length), A = $, g = v.slice(0, $), w = g.length; w < $; ) g[w++] = 0;
        L = S.slice(), L.unshift(0), F = S[0], S[1] >= c / 2 && ++F;
        do
          f = 0, u = t(S, g, $, w), u < 0 ? (T = g[0], $ != w && (T = T * c + (g[1] || 0)), f = T / F | 0, f > 1 ? (f >= c && (f = c - 1), m = e(S, f, c), b = m.length, w = g.length, u = t(m, g, b, w), u == 1 && (f--, n(m, $ < b ? L : S, b, c))) : (f == 0 && (u = f = 1), m = S.slice()), b = m.length, b < w && m.unshift(0), n(g, m, w, c), u == -1 && (w = g.length, u = t(S, g, $, w), u < 1 && (f++, n(g, $ < w ? L : S, w, c))), w = g.length) : u === 0 && (f++, g = [0]), x[d++] = f, u && g[0] ? g[w++] = v[A] || 0 : (g = [v[A]], w = 1);
        while ((A++ < P || g[0] !== void 0) && k--);
        p = g[0] !== void 0;
      }
      x[0] || x.shift();
    }
    if (h == 1)
      y.e = l, v0 = p;
    else {
      for (d = 1, f = x[0]; f >= 10; f /= 10) d++;
      y.e = d + l * h - 1, j(y, a ? o + y.e + 1 : o, i, p);
    }
    return y;
  };
})();
function j(e, t, n, r) {
  var s, o, i, a, c, u, l, d, f, h = e.constructor;
  e: if (t != null) {
    if (d = e.d, !d) return e;
    for (s = 1, a = d[0]; a >= 10; a /= 10) s++;
    if (o = t - s, o < 0)
      o += q, i = t, l = d[f = 0], c = l / re(10, s - i - 1) % 10 | 0;
    else if (f = Math.ceil((o + 1) / q), a = d.length, f >= a)
      if (r) {
        for (; a++ <= f; ) d.push(0);
        l = c = 0, s = 1, o %= q, i = o - q + 1;
      } else
        break e;
    else {
      for (l = a = d[f], s = 1; a >= 10; a /= 10) s++;
      o %= q, i = o - q + s, c = i < 0 ? 0 : l / re(10, s - i - 1) % 10 | 0;
    }
    if (r = r || t < 0 || d[f + 1] !== void 0 || (i < 0 ? l : l % re(10, s - i - 1)), u = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (o > 0 ? i > 0 ? l / re(10, s - i) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0])
      return d.length = 0, u ? (t -= e.e + 1, d[0] = re(10, (q - t % q) % q), e.e = -t || 0) : d[0] = e.e = 0, e;
    if (o == 0 ? (d.length = f, a = 1, f--) : (d.length = f + 1, a = re(10, q - o), d[f] = i > 0 ? (l / re(10, s - i) % re(10, i) | 0) * a : 0), u)
      for (; ; )
        if (f == 0) {
          for (o = 1, i = d[0]; i >= 10; i /= 10) o++;
          for (i = d[0] += a, a = 1; i >= 10; i /= 10) a++;
          o != a && (e.e++, d[0] == Le && (d[0] = 1));
          break;
        } else {
          if (d[f] += a, d[f] != Le) break;
          d[f--] = 0, a = 1;
        }
    for (o = d.length; d[--o] === 0; ) d.pop();
  }
  return W && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e.d = [0])), e;
}
function Ke(e, t, n) {
  if (!e.isFinite()) return $0(e);
  var r, s = e.e, o = ae(e.d), i = o.length;
  return t ? (n && (r = n - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ft(r) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : s < 0 ? (o = "0." + ft(-s - 1) + o, n && (r = n - i) > 0 && (o += ft(r))) : s >= i ? (o += ft(s + 1 - i), n && (r = n - s - 1) > 0 && (o = o + "." + ft(r))) : ((r = s + 1) < i && (o = o.slice(0, r) + "." + o.slice(r)), n && (r = n - i) > 0 && (s + 1 === i && (o += "."), o += ft(r))), o;
}
function Ps(e, t) {
  var n = e[0];
  for (t *= q; n >= 10; n /= 10) t++;
  return t;
}
function es(e, t, n) {
  if (t > u2)
    throw W = !0, n && (e.precision = n), Error(A0);
  return j(new e(Yr), t, 1, !0);
}
function He(e, t, n) {
  if (t > Jo) throw Error(A0);
  return j(new e(Jr), t, n, !0);
}
function S0(e) {
  var t = e.length - 1, n = t * q + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) n--;
    for (t = e[0]; t >= 10; t /= 10) n++;
  }
  return n;
}
function ft(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function k0(e, t, n, r) {
  var s, o = new e(1), i = Math.ceil(r / q + 4);
  for (W = !1; ; ) {
    if (n % 2 && (o = o.times(t), bc(o.d, i) && (s = !0)), n = fe(n / 2), n === 0) {
      n = o.d.length - 1, s && o.d[n] === 0 && ++o.d[n];
      break;
    }
    t = t.times(t), bc(t.d, i);
  }
  return W = !0, o;
}
function mc(e) {
  return e.d[e.d.length - 1] & 1;
}
function P0(e, t, n) {
  for (var r, s, o = new e(t[0]), i = 0; ++i < t.length; ) {
    if (s = new e(t[i]), !s.s) {
      o = s;
      break;
    }
    r = o.cmp(s), (r === n || r === 0 && o.s === n) && (o = s);
  }
  return o;
}
function ei(e, t) {
  var n, r, s, o, i, a, c, u = 0, l = 0, d = 0, f = e.constructor, h = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (t == null ? (W = !1, c = p) : c = t, a = new f(0.03125); e.e > -2; )
    e = e.times(a), d += 5;
  for (r = Math.log(re(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = o = i = new f(1), f.precision = c; ; ) {
    if (o = j(o.times(e), c, 1), n = n.times(++l), a = i.plus(K(o, n, c, 1)), ae(a.d).slice(0, c) === ae(i.d).slice(0, c)) {
      for (s = d; s--; ) i = j(i.times(i), c, 1);
      if (t == null)
        if (u < 3 && sr(i.d, c - r, h, u))
          f.precision = c += 10, n = o = a = new f(1), l = 0, u++;
        else
          return j(i, f.precision = p, h, W = !0);
      else
        return f.precision = p, i;
    }
    i = a;
  }
}
function ht(e, t) {
  var n, r, s, o, i, a, c, u, l, d, f, h = 1, p = 10, m = e, b = m.d, y = m.constructor, x = y.rounding, g = y.precision;
  if (m.s < 0 || !b || !b[0] || !m.e && b[0] == 1 && b.length == 1)
    return new y(b && !b[0] ? -1 / 0 : m.s != 1 ? NaN : b ? 0 : m);
  if (t == null ? (W = !1, l = g) : l = t, y.precision = l += p, n = ae(b), r = n.charAt(0), Math.abs(o = m.e) < 15e14) {
    for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3; )
      m = m.times(e), n = ae(m.d), r = n.charAt(0), h++;
    o = m.e, r > 1 ? (m = new y("0." + n), o++) : m = new y(r + "." + n.slice(1));
  } else
    return u = es(y, l + 2, g).times(o + ""), m = ht(new y(r + "." + n.slice(1)), l - p).plus(u), y.precision = g, t == null ? j(m, g, x, W = !0) : m;
  for (d = m, c = i = m = K(m.minus(1), m.plus(1), l, 1), f = j(m.times(m), l, 1), s = 3; ; ) {
    if (i = j(i.times(f), l, 1), u = c.plus(K(i, new y(s), l, 1)), ae(u.d).slice(0, l) === ae(c.d).slice(0, l))
      if (c = c.times(2), o !== 0 && (c = c.plus(es(y, l + 2, g).times(o + ""))), c = K(c, new y(h), l, 1), t == null)
        if (sr(c.d, l - p, x, a))
          y.precision = l += p, u = i = m = K(d.minus(1), d.plus(1), l, 1), f = j(m.times(m), l, 1), s = a = 1;
        else
          return j(c, y.precision = g, x, W = !0);
      else
        return y.precision = g, c;
    c = u, s += 2;
  }
}
function $0(e) {
  return String(e.s * e.s / 0);
}
function _r(e, t) {
  var n, r, s;
  for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++) ;
  for (s = t.length; t.charCodeAt(s - 1) === 48; --s) ;
  if (t = t.slice(r, s), t) {
    if (s -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % q, n < 0 && (r += q), r < s) {
      for (r && e.d.push(+t.slice(0, r)), s -= q; r < s; ) e.d.push(+t.slice(r, r += q));
      t = t.slice(r), r = q - t.length;
    } else
      r -= s;
    for (; r--; ) t += "0";
    e.d.push(+t), W && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function d2(e, t) {
  var n, r, s, o, i, a, c, u, l;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), T0.test(t)) return _r(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (i2.test(t))
    n = 16, t = t.toLowerCase();
  else if (o2.test(t))
    n = 2;
  else if (a2.test(t))
    n = 8;
  else
    throw Error(wt + t);
  for (o = t.search(/p/i), o > 0 ? (c = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), i = o >= 0, r = e.constructor, i && (t = t.replace(".", ""), a = t.length, o = a - o, s = k0(r, new r(n), o, o * 2)), u = Or(t, n, Le), l = u.length - 1, o = l; u[o] === 0; --o) u.pop();
  return o < 0 ? new r(e.s * 0) : (e.e = Ps(u, l), e.d = u, W = !1, i && (e = K(e, s, a * 4)), c && (e = e.times(Math.abs(c) < 54 ? re(2, c) : Lt.pow(2, c))), W = !0, e);
}
function f2(e, t) {
  var n, r = t.d.length;
  if (r < 3)
    return t.isZero() ? t : mn(e, 2, t, t);
  n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / $s(5, n)), t = mn(e, 2, t, t);
  for (var s, o = new e(5), i = new e(16), a = new e(20); n--; )
    s = t.times(t), t = t.times(o.plus(s.times(i.times(s).minus(a))));
  return t;
}
function mn(e, t, n, r, s) {
  var o, i, a, c, u = e.precision, l = Math.ceil(u / q);
  for (W = !1, c = n.times(n), a = new e(r); ; ) {
    if (i = K(a.times(c), new e(t++ * t++), u, 1), a = s ? r.plus(i) : r.minus(i), r = K(i.times(c), new e(t++ * t++), u, 1), i = a.plus(r), i.d[l] !== void 0) {
      for (o = l; i.d[o] === a.d[o] && o--; ) ;
      if (o == -1) break;
    }
    o = a, a = r, r = i, i = o;
  }
  return W = !0, i.d.length = l + 1, i;
}
function $s(e, t) {
  for (var n = e; --t; ) n *= e;
  return n;
}
function B0(e, t) {
  var n, r = t.s < 0, s = He(e, e.precision, 1), o = s.times(0.5);
  if (t = t.abs(), t.lte(o))
    return tt = r ? 4 : 1, t;
  if (n = t.divToInt(s), n.isZero())
    tt = r ? 3 : 2;
  else {
    if (t = t.minus(n.times(s)), t.lte(o))
      return tt = mc(n) ? r ? 2 : 3 : r ? 4 : 1, t;
    tt = mc(n) ? r ? 1 : 4 : r ? 3 : 2;
  }
  return t.minus(s).abs();
}
function Qi(e, t, n, r) {
  var s, o, i, a, c, u, l, d, f, h = e.constructor, p = n !== void 0;
  if (p ? (Ae(n, 1, At), r === void 0 ? r = h.rounding : Ae(r, 0, 8)) : (n = h.precision, r = h.rounding), !e.isFinite())
    l = $0(e);
  else {
    for (l = Ke(e), i = l.indexOf("."), p ? (s = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : s = t, i >= 0 && (l = l.replace(".", ""), f = new h(1), f.e = l.length - i, f.d = Or(Ke(f), 10, s), f.e = f.d.length), d = Or(l, 10, s), o = c = d.length; d[--c] == 0; ) d.pop();
    if (!d[0])
      l = p ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new h(e), e.d = d, e.e = o, e = K(e, f, n, r, 0, s), d = e.d, o = e.e, u = v0), i = d[n], a = s / 2, u = u || d[n + 1] !== void 0, u = r < 4 ? (i !== void 0 || u) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : i > a || i === a && (r === 4 || u || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, u)
        for (; ++d[--n] > s - 1; )
          d[n] = 0, n || (++o, d.unshift(1));
      for (c = d.length; !d[c - 1]; --c) ;
      for (i = 0, l = ""; i < c; i++) l += Xo.charAt(d[i]);
      if (p) {
        if (c > 1)
          if (t == 16 || t == 8) {
            for (i = t == 16 ? 4 : 3, --c; c % i; c++) l += "0";
            for (d = Or(l, s, t), c = d.length; !d[c - 1]; --c) ;
            for (i = 1, l = "1."; i < c; i++) l += Xo.charAt(d[i]);
          } else
            l = l.charAt(0) + "." + l.slice(1);
        l = l + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) l = "0" + l;
        l = "0." + l;
      } else if (++o > c) for (o -= c; o--; ) l += "0";
      else o < c && (l = l.slice(0, o) + "." + l.slice(o));
    }
    l = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + l;
  }
  return e.s < 0 ? "-" + l : l;
}
function bc(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function h2(e) {
  return new this(e).abs();
}
function p2(e) {
  return new this(e).acos();
}
function m2(e) {
  return new this(e).acosh();
}
function b2(e, t) {
  return new this(e).plus(t);
}
function g2(e) {
  return new this(e).asin();
}
function w2(e) {
  return new this(e).asinh();
}
function y2(e) {
  return new this(e).atan();
}
function x2(e) {
  return new this(e).atanh();
}
function v2(e, t) {
  e = new this(e), t = new this(t);
  var n, r = this.precision, s = this.rounding, o = r + 4;
  return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = He(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? He(this, r, s) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = He(this, o, 1).times(0.5), n.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(K(e, t, o, 1)), t = He(this, o, 1), this.precision = r, this.rounding = s, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(K(e, t, o, 1)), n;
}
function A2(e) {
  return new this(e).cbrt();
}
function E2(e) {
  return j(e = new this(e), e.e + 1, 2);
}
function C2(e, t, n) {
  return new this(e).clamp(t, n);
}
function T2(e) {
  if (!e || typeof e != "object") throw Error(ks + "Object expected");
  var t, n, r, s = e.defaults === !0, o = [
    "precision",
    1,
    At,
    "rounding",
    0,
    8,
    "toExpNeg",
    -en,
    0,
    "toExpPos",
    0,
    en,
    "maxE",
    0,
    en,
    "minE",
    -en,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < o.length; t += 3)
    if (n = o[t], s && (this[n] = Yo[n]), (r = e[n]) !== void 0)
      if (fe(r) === r && r >= o[t + 1] && r <= o[t + 2]) this[n] = r;
      else throw Error(wt + n + ": " + r);
  if (n = "crypto", s && (this[n] = Yo[n]), (r = e[n]) !== void 0)
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(E0);
      else
        this[n] = !1;
    else
      throw Error(wt + n + ": " + r);
  return this;
}
function S2(e) {
  return new this(e).cos();
}
function k2(e) {
  return new this(e).cosh();
}
function I0(e) {
  var t, n, r;
  function s(o) {
    var i, a, c, u = this;
    if (!(u instanceof s)) return new s(o);
    if (u.constructor = s, gc(o)) {
      u.s = o.s, W ? !o.d || o.e > s.maxE ? (u.e = NaN, u.d = null) : o.e < s.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (c = typeof o, c === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (i = 0, a = o; a >= 10; a /= 10) i++;
        W ? i > s.maxE ? (u.e = NaN, u.d = null) : i < s.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      }
      if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return _r(u, o.toString());
    }
    if (c === "string")
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), T0.test(o) ? _r(u, o) : d2(u, o);
    if (c === "bigint")
      return o < 0 ? (o = -o, u.s = -1) : u.s = 1, _r(u, o.toString());
    throw Error(wt + o);
  }
  if (s.prototype = N, s.ROUND_UP = 0, s.ROUND_DOWN = 1, s.ROUND_CEIL = 2, s.ROUND_FLOOR = 3, s.ROUND_HALF_UP = 4, s.ROUND_HALF_DOWN = 5, s.ROUND_HALF_EVEN = 6, s.ROUND_HALF_CEIL = 7, s.ROUND_HALF_FLOOR = 8, s.EUCLID = 9, s.config = s.set = T2, s.clone = I0, s.isDecimal = gc, s.abs = h2, s.acos = p2, s.acosh = m2, s.add = b2, s.asin = g2, s.asinh = w2, s.atan = y2, s.atanh = x2, s.atan2 = v2, s.cbrt = A2, s.ceil = E2, s.clamp = C2, s.cos = S2, s.cosh = k2, s.div = P2, s.exp = $2, s.floor = B2, s.hypot = I2, s.ln = N2, s.log = L2, s.log10 = F2, s.log2 = R2, s.max = O2, s.min = _2, s.mod = M2, s.mul = D2, s.pow = z2, s.random = U2, s.round = j2, s.sign = q2, s.sin = H2, s.sinh = G2, s.sqrt = V2, s.sub = W2, s.sum = Z2, s.tan = K2, s.tanh = Q2, s.trunc = X2, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < r.length; ) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
  return s.config(e), s;
}
function P2(e, t) {
  return new this(e).div(t);
}
function $2(e) {
  return new this(e).exp();
}
function B2(e) {
  return j(e = new this(e), e.e + 1, 3);
}
function I2() {
  var e, t, n = new this(0);
  for (W = !1, e = 0; e < arguments.length; )
    if (t = new this(arguments[e++]), t.d)
      n.d && (n = n.plus(t.times(t)));
    else {
      if (t.s)
        return W = !0, new this(1 / 0);
      n = t;
    }
  return W = !0, n.sqrt();
}
function gc(e) {
  return e instanceof Lt || e && e.toStringTag === C0 || !1;
}
function N2(e) {
  return new this(e).ln();
}
function L2(e, t) {
  return new this(e).log(t);
}
function R2(e) {
  return new this(e).log(2);
}
function F2(e) {
  return new this(e).log(10);
}
function O2() {
  return P0(this, arguments, -1);
}
function _2() {
  return P0(this, arguments, 1);
}
function M2(e, t) {
  return new this(e).mod(t);
}
function D2(e, t) {
  return new this(e).mul(t);
}
function z2(e, t) {
  return new this(e).pow(t);
}
function U2(e) {
  var t, n, r, s, o = 0, i = new this(1), a = [];
  if (e === void 0 ? e = this.precision : Ae(e, 1, At), r = Math.ceil(e / q), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(r)); o < r; )
        s = t[o], s >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = s % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(r *= 4); o < r; )
        s = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), s >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(s % 1e7), o += 4);
      o = r / 4;
    } else
      throw Error(E0);
  else for (; o < r; ) a[o++] = Math.random() * 1e7 | 0;
  for (r = a[--o], e %= q, r && e && (s = re(10, q - e), a[o] = (r / s | 0) * s); a[o] === 0; o--) a.pop();
  if (o < 0)
    n = 0, a = [0];
  else {
    for (n = -1; a[0] === 0; n -= q) a.shift();
    for (r = 1, s = a[0]; s >= 10; s /= 10) r++;
    r < q && (n -= q - r);
  }
  return i.e = n, i.d = a, i;
}
function j2(e) {
  return j(e = new this(e), e.e + 1, this.rounding);
}
function q2(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function H2(e) {
  return new this(e).sin();
}
function G2(e) {
  return new this(e).sinh();
}
function V2(e) {
  return new this(e).sqrt();
}
function W2(e, t) {
  return new this(e).sub(t);
}
function Z2() {
  var e = 0, t = arguments, n = new this(t[e]);
  for (W = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
  return W = !0, j(n, this.precision, this.rounding);
}
function K2(e) {
  return new this(e).tan();
}
function Q2(e) {
  return new this(e).tanh();
}
function X2(e) {
  return j(e = new this(e), e.e + 1, 1);
}
N[Symbol.for("nodejs.util.inspect.custom")] = N.toString;
N[Symbol.toStringTag] = "Decimal";
var Lt = N.constructor = I0(Yo);
Yr = new Lt(Yr);
Jr = new Lt(Jr);
class Y2 {
  async getQuote(t, n, r, s = 0.5) {
    if (!r || parseFloat(r) <= 0)
      return null;
    const o = Xr(t) && t.wrapped_token_address ? t.wrapped_token_address : t.address;
    if (!o || !n.address)
      return this.getMockQuote(t, n, r);
    try {
      const i = await Nt.getNetworks(), a = Nt.getNetworkIdByName(
        i,
        t.network
      ), c = Nt.getNetworkIdByName(
        i,
        n.network
      );
      if (!a || !c)
        return console.warn("Could not resolve network IDs, using mock quote"), this.getMockQuote(t, n, r);
      const u = parseFloat(r), l = BigInt(Math.round(s * 100));
      return await qe.getQuote(
        a,
        o,
        c,
        n.address,
        u,
        l,
        Qr.Standard,
        null,
        "escrowed"
      );
    } catch (i) {
      return console.error("Failed to fetch quote:", i), this.getMockQuote(t, n, r);
    }
  }
  getMockQuote(t, n, r) {
    const i = parseFloat(r) * (t.fiatRate || 1) / (n.fiatRate || 1) * 0.997, a = new Lt(r), c = new Lt(i), u = a.times(Math.pow(10, t.decimals)).toFixed(0), l = c.times(Math.pow(10, n.decimals)).toFixed(0);
    return {
      id: "mock-quote-id",
      resolver_id: "",
      source_chain: 0,
      source_token: Xr(t) && t.wrapped_token_address ? t.wrapped_token_address : t.address || "",
      dest_chain: 0,
      dest_token: n.address || "",
      intermediate_token: null,
      intermediate_token_amount_min: null,
      intermediate_token_amount_max: null,
      intermediate_token_decimals: null,
      source_amount_lots: u,
      source_amount_decimals: t.decimals,
      min_dest_amount_lots: l,
      max_dest_amount_lots: l,
      dest_amount_decimals: n.decimals,
      slippage_bps: "50",
      expiry: Math.floor(Date.now() / 1e3) + 30,
      swap_type: Qr.Standard,
      deposit_type: "escrowed"
    };
  }
  calculateOutputAmount(t) {
    return new Lt(t.max_dest_amount_lots).dividedBy(
      Math.pow(10, t.dest_amount_decimals)
    ).toFixed(6);
  }
}
const Kt = new Y2(), wc = ai([
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)"
]);
class J2 {
  constructor() {
    this.TRC20_ABI = [
      { constant: !0, inputs: [{ name: "owner", type: "address" }, { name: "spender", type: "address" }], name: "allowance", outputs: [{ type: "uint256" }], type: "function" },
      { inputs: [{ name: "spender", type: "address" }, { name: "value", type: "uint256" }], name: "approve", outputs: [{ type: "bool" }], type: "function" }
    ];
  }
  async executeSwap(t) {
    const { fromToken: n, toToken: r, quote: s, wallet: o, destinationAddress: i } = t;
    if (!o.connected || !o.address)
      throw new Error("Wallet not connected");
    const a = s.id;
    if (!a)
      throw new Error("Invalid quote: missing id");
    const c = (i || "").trim() || o.address, [u, l, d] = await this.normalizeIntentAddresses(
      o,
      s,
      o.address,
      c
    ), f = await qe.createIntent(
      a,
      null,
      u,
      l,
      d
    ), h = this.getApprovalType(f);
    if (o.type === "evm" && h === "permit2")
      return this.executeEVMPermit2(f, s, o, n);
    if (o.type === "tron" && h === "permit2")
      return this.executeTronPermit2(f, s, o, n);
    if (o.type === "tron" && h === "cosign")
      return this.executeTronCosign(f, o);
    throw new Error(
      `Unsupported wallet/approval: ${o.type} / ${h}`
    );
  }
  async normalizeIntentAddresses(t, n, r, s) {
    const o = n.source_chain, i = n.dest_chain, a = t.type === "tron" ? await this.getTronWeb() : null, c = (b) => {
      var y;
      if (!b || b.startsWith("41") && b.length === 42) return b;
      if (b.startsWith("T") && ((y = a == null ? void 0 : a.address) != null && y.toHex))
        try {
          return a.address.toHex(b);
        } catch {
          return b;
        }
      return b;
    }, u = (b) => !(b != null && b.startsWith("41")) || b.length !== 42 ? b : "0x" + b.slice(2).toLowerCase(), l = (b) => {
      var y;
      if (!b || b.startsWith("T")) return b;
      if (b.startsWith("41") && ((y = a == null ? void 0 : a.address) != null && y.fromHex))
        try {
          return a.address.fromHex(b);
        } catch {
          return b;
        }
      return b;
    }, d = c(r), f = c(s), h = o === 2 ? l(r) : r.startsWith("0x") ? r : u(d), p = h, m = i === 2 ? l(s) : s.startsWith("0x") ? s : u(f);
    return [h, m, p];
  }
  getApprovalType(t) {
    const n = t.approval_mechanism;
    return n === "htlc" ? "psbt" : n;
  }
  async executeEVMPermit2(t, n, r, s) {
    var u;
    if (typeof window > "u" || !window.ethereum)
      throw new Error("Ethereum wallet not found");
    const o = r.chainId ?? 1, i = lc(
      t.params_to_sign,
      n,
      r.address,
      t.deadline_secs
    ), a = B6({
      account: r.address,
      chain: { id: o },
      transport: g0(window.ethereum)
    });
    let c;
    try {
      c = await a.signTypedData({
        domain: i.domain,
        types: i.types,
        primaryType: "PermitWitnessTransferFrom",
        message: i.message
      });
    } catch (l) {
      throw (l == null ? void 0 : l.code) === 4001 || (u = l == null ? void 0 : l.message) != null && u.includes("rejected") ? new Error("Transaction rejected by user") : l;
    }
    try {
      await qe.addApproval(
        { type: "permit2", signed_data: c },
        t.intent_id
      );
    } catch (l) {
      if (l instanceof pa)
        await this.approveTokenIfNeeded(s, r, t, n, o), c = await a.signTypedData({
          domain: i.domain,
          types: i.types,
          primaryType: "PermitWitnessTransferFrom",
          message: i.message
        }), await qe.addApproval(
          { type: "permit2", signed_data: c },
          t.intent_id
        );
      else
        throw l;
    }
    return t.intent_id;
  }
  async approveTokenIfNeeded(t, n, r, s, o) {
    if (!t.address) return;
    const a = r.params_to_sign.permit2_contract_address, c = BigInt(s.source_amount_lots);
    if (await this.checkAllowance(
      t.address,
      n.address,
      a,
      o
    ) >= c) return;
    const l = de({
      abi: wc,
      functionName: "approve",
      args: [a, No]
    }), d = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: n.address,
          to: t.address,
          data: l,
          value: "0x0"
        }
      ]
    });
    await this.waitForTransactionConfirmation(d, 6e4);
  }
  async waitForTransactionConfirmation(t, n = 6e4) {
    const r = Date.now(), s = 2e3;
    for (; Date.now() - r < n; ) {
      try {
        const o = await window.ethereum.request({
          method: "eth_getTransactionReceipt",
          params: [t]
        });
        if (o && o.status !== "0x0")
          return;
      } catch {
      }
      await new Promise((o) => setTimeout(o, s));
    }
    throw new Error("Transaction confirmation timeout");
  }
  async checkAllowance(t, n, r, s) {
    const o = de({
      abi: wc,
      functionName: "allowance",
      args: [n, r]
    }), i = await window.ethereum.request({
      method: "eth_call",
      params: [
        {
          to: t,
          data: o
        },
        "latest"
      ]
    });
    return BigInt(i);
  }
  async getTronWeb() {
    const t = window.tronLink;
    if (!t) return null;
    if (!t.ready) {
      const n = await t.request({ method: "tron_requestAccounts" });
      if ((n == null ? void 0 : n.code) !== 200) return null;
    }
    return t.tronWeb ?? window.tronWeb;
  }
  async executeTronPermit2(t, n, r, s) {
    var c, u;
    const o = await this.getTronWeb();
    if (!(o != null && o.ready))
      throw new Error("Tron wallet not found or not ready");
    const i = lc(
      t.params_to_sign,
      n,
      r.address,
      t.deadline_secs
    );
    let a;
    try {
      a = await o.trx._signTypedData(
        i.domain,
        i.types,
        i.message
      );
    } catch (l) {
      throw (c = l == null ? void 0 : l.message) != null && c.includes("Confirmation declined") || (u = l == null ? void 0 : l.message) != null && u.includes("rejected") ? new Error("Transaction rejected by user") : l;
    }
    try {
      await qe.addApproval(
        { type: "permit2", signed_data: a },
        t.intent_id
      );
    } catch (l) {
      if (l instanceof pa)
        await this.approveTronTokenIfNeeded(s, r, t, n), a = await o.trx._signTypedData(
          i.domain,
          i.types,
          i.message
        ), await qe.addApproval(
          { type: "permit2", signed_data: a },
          t.intent_id
        );
      else
        throw l;
    }
    return t.intent_id;
  }
  async approveTronTokenIfNeeded(t, n, r, s) {
    if (!t.address) return;
    const o = await this.getTronWeb();
    if (!(o != null && o.ready)) throw new Error("Tron wallet not ready");
    const a = r.params_to_sign.permit2_contract_address, c = BigInt(s.source_amount_lots), u = await o.contract(this.TRC20_ABI, t.address), l = await u.allowance(n.address, a).call();
    if (BigInt(l.toString()) >= c) return;
    const f = await u.approve(a, No.toString()).send({
      feeLimit: 15e7,
      shouldPollResponse: !0
    });
    if (!(typeof f == "string" ? f : f == null ? void 0 : f.txid)) throw new Error("Failed to get Tron approve tx id");
  }
  async executeTronCosign(t, n) {
    var s;
    const r = await this.getTronWeb();
    if (!(r != null && r.ready))
      throw new Error("Tron wallet not found or not ready");
    try {
      const i = t.params_to_sign.transaction, a = await r.trx.sign(i);
      return await qe.addApproval(
        {
          type: "cosign",
          signed_data: {
            transaction: a,
            user_address: n.address
          }
        },
        t.intent_id
      ), t.intent_id;
    } catch (o) {
      throw (s = o == null ? void 0 : o.message) != null && s.includes("Confirmation declined") ? new Error("Transaction rejected by user") : o;
    }
  }
}
const e5 = new J2(), t5 = "data:image/svg+xml,%3csvg%20width='29'%20height='20'%20viewBox='0%200%2029%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%209L11%2018L27%202'%20stroke='%23C0F42F'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", n5 = "data:image/svg+xml,%3csvg%20width='29'%20height='20'%20viewBox='0%200%2029%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%209L11%2018L27%202'%20stroke='%238B5CF6'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", r5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071C5.90237 14.3166 5.90237 13.6834 6.29289 13.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L17.7071 13.2929C18.0976 13.6834 18.0976 14.3166 17.7071 14.7071C17.3166 15.0976 16.6834 15.0976 16.2929 14.7071L12 10.4142L7.70711 14.7071Z" fill="#272727" fill-opacity="0.3"/>
</svg>
`, s5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.46588C10.0481 8.46588 8.46576 10.0482 8.46576 12.0001C8.46576 13.952 10.0481 15.5344 12 15.5344C13.9519 15.5344 15.5342 13.952 15.5342 12.0001C15.5342 10.0482 13.9519 8.46588 12 8.46588ZM10.2329 12.0001C10.2329 11.0242 11.024 10.233 12 10.233C12.976 10.233 13.7671 11.0242 13.7671 12.0001C13.7671 12.9761 12.976 13.7672 12 13.7672C11.024 13.7672 10.2329 12.9761 10.2329 12.0001Z" fill="#272727" fill-opacity="0.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9812 4.06357C12.9268 2.87725 11.0732 2.87725 10.0188 4.06357L8.63695 5.61827C8.51041 5.76064 8.34125 5.8583 8.15468 5.8967L6.11736 6.31606C4.56276 6.63606 3.63597 8.24131 4.13614 9.74763L4.79163 11.7217C4.85166 11.9024 4.85166 12.0978 4.79163 12.2786L4.13614 14.2526C3.63597 15.7589 4.56276 17.3642 6.11736 17.6842L8.15468 18.1035C8.34125 18.1419 8.51041 18.2396 8.63695 18.382L10.0188 19.9367C11.0732 21.123 12.9268 21.123 13.9812 19.9367L15.3631 18.382C15.4896 18.2396 15.6588 18.1419 15.8453 18.1035L17.8826 17.6842C19.4372 17.3642 20.364 15.7589 19.8639 14.2526L19.2084 12.2786C19.1483 12.0978 19.1483 11.9024 19.2084 11.7217L19.8639 9.74763C20.364 8.2413 19.4372 6.63606 17.8826 6.31606L15.8453 5.8967C15.6588 5.8583 15.4896 5.76064 15.363 5.61826L13.9812 4.06357ZM11.3396 5.23753C11.6911 4.84209 12.3089 4.84209 12.6604 5.23753L14.0422 6.79222C14.4219 7.21933 14.9293 7.51233 15.489 7.62754L17.5264 8.04689C18.0446 8.15356 18.3535 8.68864 18.1868 9.19075L17.5313 11.1648C17.3512 11.7071 17.3512 12.2931 17.5313 12.8354L18.1868 14.8095C18.3535 15.3116 18.0446 15.8467 17.5264 15.9533L15.489 16.3727C14.9293 16.4879 14.4219 16.7809 14.0422 17.208L12.6604 18.7627C12.3089 19.1581 11.6911 19.1581 11.3396 18.7627L9.95776 17.208C9.57814 16.7809 9.07065 16.4879 8.51095 16.3727L6.47363 15.9533C5.95543 15.8467 5.6465 15.3116 5.81322 14.8095L6.46871 12.8354C6.64879 12.2931 6.64879 11.7071 6.46871 11.1648L5.81323 9.19075C5.6465 8.68864 5.95543 8.15356 6.47363 8.0469L8.51095 7.62754C9.07065 7.51233 9.57814 7.21933 9.95776 6.79222L11.3396 5.23753Z" fill="#272727" fill-opacity="0.5"/>
</svg>
`, o5 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.70696 5.70696C5.31643 6.09748 5.31643 6.73065 5.70696 7.12117L10.6567 12.0709L5.70697 17.0207C5.31645 17.4112 5.31645 18.0444 5.70697 18.4349C6.0975 18.8254 6.73066 18.8254 7.12118 18.4349L12.0709 13.4851L17.0207 18.4349C17.4112 18.8254 18.0444 18.8254 18.4349 18.4349C18.8254 18.0444 18.8254 17.4112 18.4349 17.0207L13.4851 12.0709L18.4349 7.12117C18.8254 6.73065 18.8254 6.09748 18.4349 5.70696C18.0444 5.31643 17.4112 5.31643 17.0207 5.70696L12.0709 10.6567L7.12117 5.70696C6.73064 5.31643 6.09748 5.31643 5.70696 5.70696Z" fill="#272727" fill-opacity="0.5"/>
</svg>
`, i5 = `<svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="50" height="38" rx="13" fill="#FEFEFF"/>
<rect x="1" y="1" width="50" height="38" rx="13" stroke="#E9EAF2" stroke-width="2"/>
<path d="M27 13C27 12.4477 26.5523 12 26 12C25.4477 12 25 12.4477 25 13V24.5858L20.7071 20.2929C20.3166 19.9024 19.6834 19.9024 19.2929 20.2929C18.9024 20.6834 18.9024 21.3166 19.2929 21.7071L25.2929 27.7071C25.6834 28.0976 26.3166 28.0976 26.7071 27.7071L32.7071 21.7071C33.0976 21.3166 33.0976 20.6834 32.7071 20.2929C32.3166 19.9024 31.6834 19.9024 31.2929 20.2929L27 24.5858V13Z" fill="#272727" fill-opacity="0.7"/>
</svg>
`, a5 = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8C10.3682 8 10.6667 8.29848 10.6667 8.66667C10.6667 9.03486 10.3682 9.33333 10 9.33333H8.66667C8.29848 9.33333 8 9.03486 8 8.66667C8 8.29848 8.29848 8 8.66667 8H10Z" fill="#272727" fill-opacity="0.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66667 0C10.5076 0 12 1.49238 12 3.33333V4.66667C12.8096 5.27481 13.3333 6.24284 13.3333 7.33333V10C13.3333 11.8409 11.8409 13.3333 10 13.3333H3.33333C1.54981 13.3333 0.0936858 11.9326 0.00455729 10.1712L0 10V2.66667C0 1.19391 1.19391 0 2.66667 0H8.66667ZM1.33333 10L1.33594 10.1029C1.38948 11.1596 2.26326 12 3.33333 12H10C11.1046 12 12 11.1046 12 10V7.33333C12 6.22876 11.1046 5.33333 10 5.33333H2.66667C2.18071 5.33333 1.72569 5.20236 1.33333 4.97526V10ZM2.66667 1.33333C1.93029 1.33333 1.33333 1.93029 1.33333 2.66667C1.33333 3.40305 1.93029 4 2.66667 4H10C10.2283 4 10.4513 4.02269 10.6667 4.06641V3.33333C10.6667 2.22876 9.77124 1.33333 8.66667 1.33333H2.66667Z" fill="#272727" fill-opacity="0.5"/>
</svg>
`, c5 = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0007 1.33398C13.4734 1.33398 14.6673 2.52789 14.6673 4.00065V12.0007C14.6673 13.4734 13.4734 14.6673 12.0007 14.6673H4.00065C2.52789 14.6673 1.33398 13.4734 1.33398 12.0007V4.00065C1.33398 2.52789 2.52789 1.33398 4.00065 1.33398H12.0007ZM8.00065 7.33398C7.63246 7.33398 7.33398 7.63246 7.33398 8.00065V10.6673C7.33398 11.0355 7.63246 11.334 8.00065 11.334C8.36884 11.334 8.66732 11.0355 8.66732 10.6673V8.00065C8.66732 7.63246 8.36884 7.33398 8.00065 7.33398ZM8.00065 4.66732C7.63246 4.66732 7.33398 4.96579 7.33398 5.33398C7.33398 5.70217 7.63246 6.00065 8.00065 6.00065C8.36884 6.00065 8.66732 5.70217 8.66732 5.33398C8.66732 4.96579 8.36884 4.66732 8.00065 4.66732Z" fill="#C2C3C6"/>
</svg>
`, Nn = "data:image/svg+xml,%3csvg%20width='28'%20height='27'%20viewBox='0%200%2028%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2252_4539)'%3e%3cpath%20d='M25.6099%2025.5152L19.7068%2023.7575L15.2553%2026.4186L12.1494%2026.4172L7.69516%2023.7575L1.79486%2025.5152L0%2019.4562L1.79486%2012.7317L0%207.04639L1.79486%200L11.0145%205.50833H16.39L25.6099%200L27.4047%207.04639L25.6099%2012.7317L27.4047%2019.4562L25.6099%2025.5152Z'%20fill='%23FF5C16'/%3e%3cpath%20d='M1.79688%200L11.0167%205.5122L10.6501%209.29519L1.79688%200ZM7.69737%2019.4588L11.754%2022.549L7.69737%2023.7575V19.4588ZM11.4298%2014.3498L10.6501%209.29771L5.65946%2012.7333L5.65675%2012.7319V12.7344L5.67224%2016.2707L7.69601%2014.35L11.4298%2014.3498ZM25.6107%200L16.3909%205.5122L16.7563%209.29519L25.6107%200ZM19.7104%2019.4588L15.6536%2022.549L19.7104%2023.7575V19.4588ZM21.7495%2012.7342V12.7317L21.7483%2012.7331L16.7576%209.29771L15.978%2014.3498H19.7102L21.7353%2016.2703L21.7495%2012.7342Z'%20fill='%23FF5C16'/%3e%3cpath%20d='M7.69516%2023.7567L1.79486%2025.5144L0%2019.458H7.69516V23.7567ZM11.4276%2014.3477L12.5547%2021.6514L10.9926%2017.5903L5.66887%2016.2696L7.6938%2014.3479H11.4276V14.3477ZM19.7094%2023.7567L25.6099%2025.5144L27.4047%2019.458H19.7094V23.7567ZM15.9771%2014.3477L14.85%2021.6514L16.4119%2017.5903L21.7358%2016.2696L19.7096%2014.3479H15.9771V14.3477Z'%20fill='%23E34807'/%3e%3cpath%20d='M0%2019.4557L1.79486%2012.7312H5.65454L5.66868%2016.2686L10.9928%2017.5894L12.5547%2021.6503L11.7518%2022.5446L7.69516%2019.4544H0V19.4557ZM27.4047%2019.4557L25.6099%2012.7312H21.75L21.7358%2016.2686L16.4121%2017.5894L14.85%2021.6503L15.6527%2022.5446L19.7096%2019.4544H27.4047V19.4557ZM16.39%205.50781H11.0145L10.6495%209.29081L12.5549%2021.6464H14.85L16.7566%209.29081L16.39%205.50781Z'%20fill='%23FF8D5D'/%3e%3cpath%20d='M1.79486%200L0%207.04639L1.79486%2012.7317H5.65454L10.6479%209.29519L1.79486%200ZM10.3121%2015.8154H8.56354L7.6115%2016.7487L10.994%2017.5872L10.3121%2015.8142V15.8154ZM25.6099%200L27.4047%207.04639L25.6099%2012.7317H21.75L16.7568%209.29519L25.6099%200ZM17.0951%2015.8154H18.8462L19.7983%2016.7498L16.4119%2017.5899L17.0951%2015.814V15.8154ZM15.254%2024.0083L15.6529%2022.5477L14.85%2021.6533H12.5532L11.7504%2022.5477L12.1492%2024.0083'%20fill='%23661800'/%3e%3cpath%20d='M15.253%2024.0078V26.4195H12.1484V24.0078H15.253Z'%20fill='%23C0C4CD'/%3e%3cpath%20d='M7.69727%2023.7553L12.1527%2026.419V24.0073L11.7537%2022.5469L7.69727%2023.7553ZM19.7103%2023.7553L15.2547%2026.419V24.0073L15.6537%2022.5469L19.7103%2023.7553Z'%20fill='%23E7EBF6'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2252_4539'%3e%3crect%20width='27.5'%20height='26.5317'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Br = "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAC1wACAAAAAARrAAEAAAAAAAABeQAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgQAMAAAAABRpc3BlAAAAAAAAAMAAAADAAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAEWG1kYXQSAAoKGB3v79ggIaDQgDLGBUSAAKKKKFDbR+JrSVZ+6aUIKhRv/gCqHv0edjwpxGy6oQb45ph6W6lJ14ZxUtcj4agsexj1XAJ4XAmDVfNENJrB8NFAB3hzNNgbPfDbgeHbcYADENc0yO1cl7Mrm6veoNurm45LHXnrdC0qQZVjD6lY2IGltWcIxLi1BHDOE895e0W88YdILWojpKJNW/2y20zyhlp1nQ2Fidf0fC/0OaSUrBcUpBntYLz7sVQWjgWwS81qxqgzu7LN0E0pWZn6Cnak5n5JmP1G4AjpGKUpor/FB2PreXzt9AkR8TwVi9QHcWfMt66xaNRQg66qiyQ1R+f9ARia9He7tx//f4SXqOrU9kUzeKQr9eq0SewphfuQEVcBNM5aVn1Nwg/r7GIfdKhzbAKewjSxNkuXZutV3s5r9E85c1wL968RqNpT3Sqtv6MlD9qXCyv3gBgZURe9R/4iC3HomIawU6Ome3HENStkxbk//gI9JLDaQOzi/7r4sGEktlzO3P1Y8JQI9b7whf2etm06bhODR666K7S1tCGCVsML65KEYHoUjnJJc8NzLMSauLHMJwsafH+UGNdiXIrIwp+lAHpZwpaEBv6HB3nYGRf6lfrYii7Fz8xVEfzWDUY9plxYHxUau4uC2RqFd8zhQr3fqu8+DrEvt5Y9HumQT7sZl1BCq+8J2jC/PwWk3D7oC6Il4wu3FH/HXgu7+pKlnUhUWtO5UWCVbFNNwNPHPZtRiZUCv2SJ9TBUgf+uA7bYuYboAeMw3hjljw/rDJfnW652kx5IJbkZB6SnD8ZYgpPejy29WzqDUPOig1y5tjtbg9gjvJYUxNgxE+bjBQodHTBC///9aynMbzFuBJ358R6CD2wFh2IcbArSzV9MwtETaTOZYiRkiYAdgf+8O69/qpePTWb1Qryh0C/RjRPLk8XXqhl855HUczWw0AakbfP7CKDAEgAKBhgd7+/YVDLsAhIACihQ3Su2IWPUxbTRERIhAb+MaRJuty9c5akdzTrOEPToe0Yn+eTmF9L6Avo+HO04dTQ7sVeKdDfd41+jAWBH+mCdZ6Sl0mmYQB+H2fpfjO43ZCMgTXjAK3FkSdOg7O4b/TXAwqoWcoZrzE000U0TobT5L4efYGHKYtVEPF/mQgBiYP/chqmHKjmvgOQ6Gv521zSxyclrrLFsxBPyXQjVH1zVnbFw/nILxpHwyO07o4vjJA14IM5/MAapQ//WQS3xIO1LkbGZ3NUyEcDTpNPtBdP4Ow17+c9hF9mE1F74fzlKCgnu7uBWcbIGYHxr894Im8ZMgedsz7o+jr2KKyAtC4I6aT/vW4TmmEG6/z6PxGV7kuUriMap/9hhc+8QxsTrmMQfdU+Q87NlrY30vgpDRUKEjQik5EHoORemvmgqaPIf/gAg9qz95MKZXJwJEjPlvlCEMsMk0L7r4vXFSW+yXWIqbNjw1o7xskQ=", Ir = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='6'%20fill='%23EC0927'/%3e%3cpath%20d='M16.4095%206.72359L4.5%204.5L10.7667%2020.5L19.5%209.70584L16.4095%206.72359ZM16.2174%207.7044L18.0395%209.46064L13.0556%2010.3765L16.2174%207.7044ZM11.9742%2010.1921L6.7218%205.77317L15.3064%207.37537L11.9742%2010.1921ZM11.6003%2010.9748L10.744%2018.157L6.12581%206.36836L11.6003%2010.9748ZM12.3925%2011.3552L17.9103%2010.3419L11.5817%2018.1653L12.3925%2011.3552Z'%20fill='white'/%3e%3c/svg%3e", u5 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='6'%20fill='%23DCDCDC'/%3e%3cpath%20opacity='0.8'%20d='M12.0137%2015.7942V19.7504L17.0276%2012.9375L12.0137%2015.7942Z'%20fill='%231D1D25'/%3e%3cpath%20opacity='0.5'%20d='M12.0113%2019.7504V15.7936L7%2012.9375L12.0113%2019.7504Z'%20fill='%231D1D25'/%3e%3cpath%20opacity='0.8'%20d='M12.0137%204V9.82239L17.0243%2012.0214L12.0137%204Z'%20fill='%231D1D25'/%3e%3cpath%20opacity='0.5'%20d='M12.0113%204L7%2012.0214L12.0113%209.82239V4Z'%20fill='%231D1D25'/%3e%3cpath%20d='M12.0137%2014.8793L17.0243%2012.0219L12.0137%209.82422V14.8793Z'%20fill='%231D1D25'/%3e%3cpath%20opacity='0.8'%20d='M7%2012.0219L12.0113%2014.8793V9.82422L7%2012.0219Z'%20fill='%231D1D25'/%3e%3c/svg%3e", l5 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='6'%20fill='%23EC0927'/%3e%3cpath%20d='M16.4095%206.72359L4.5%204.5L10.7667%2020.5L19.5%209.70584L16.4095%206.72359ZM16.2174%207.7044L18.0395%209.46064L13.0556%2010.3765L16.2174%207.7044ZM11.9742%2010.1921L6.7218%205.77317L15.3064%207.37537L11.9742%2010.1921ZM11.6003%2010.9748L10.744%2018.157L6.12581%206.36836L11.6003%2010.9748ZM12.3925%2011.3552L17.9103%2010.3419L11.5817%2018.1653L12.3925%2011.3552Z'%20fill='white'/%3e%3c/svg%3e", d5 = "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAXBtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAANGlsb2MAAAAAREAAAgABAAAAAAGUAAEAAAAAAAAA1QACAAAAAAJpAAEAAAAAAAAAawAAADhpaW5mAAAAAAACAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAFWluZmUCAAAAAAIAAGF2MDEAAAAAr2lwcnAAAACKaXBjbwAAAAxhdjFDgQAMAAAAABRpc3BlAAAAAAAAACAAAAAgAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAcAAAAAA5waXhpAAAAAAEIAAAAOGF1eEMAAAAAdXJuOm1wZWc6bXBlZ0I6Y2ljcDpzeXN0ZW1zOmF1eGlsaWFyeTphbHBoYQAAAAAdaXBtYQAAAAAAAAACAAEDgQIDAAIEhAIFhgAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAABSG1kYXQSAAoJGBE/9ggIaDQgMsUBGAAKKKKFAM+mtrL9kpv2qKbUu5F/9OiRZn5g2k9AXlwb8V7Trp9nfSkJJKFqItDbppe5I9r8c//ySXXXBW8os72koqtXGFC/+96frXe19XQ/9N6VzRo2CXQSUuBxn0/MXSEOzls5aWzs72x2HWDNzYmMnCEksI4c6RUuPQu+YISLS430msPRhsClIqiPmO1GabFrIwwPEw0tdwuTKeORQMGDkQHdz5O9xVKXlNhVKUl+YQohHlhP75trRF/NtJ8Jz4NVqqESAAoFGBE/9hUyYBgAKKFA0VBkmeFyfv04bqcSpxDEE5yRqBNt34WYCNRvsSOTtFTD1IfR9ha3fipAuf0c7O5fmwOm6QVCiHh5tiPwkQ9vpb5GV6/dgUllVNKMmdfylFEqtlh9UaND1M+uug==", f5 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='6'%20fill='%23F7931A'/%3e%3cpath%20d='M17.9686%2010.4323C18.2183%208.75108%2016.9475%207.8473%2015.2099%207.24438L15.7736%204.96696L14.3973%204.62147L13.8486%206.83888C13.4868%206.74807%2013.1152%206.66239%2012.7459%206.5775L13.2986%204.34548L11.9232%204L11.3591%206.27663C11.0596%206.20793%2010.7657%206.14002%2010.4803%206.06855L10.4819%206.06145L8.58391%205.58409L8.21781%207.06473C8.21781%207.06473%209.23891%207.30045%209.21735%207.31506C9.77474%207.45522%209.87548%207.82676%209.85863%208.12131L9.21657%2010.7158C9.25498%2010.7257%209.30476%2010.7399%209.35964%2010.762C9.31378%2010.7505%209.26478%2010.7379%209.21421%2010.7257L8.31423%2014.3601C8.24603%2014.5307%208.07317%2014.7866%207.68354%2014.6894C7.69726%2014.7096%206.68322%2014.4379%206.68322%2014.4379L6%2016.0248L7.79094%2016.4745C8.12413%2016.5586%208.45064%2016.6466%208.77206%2016.7296L8.20252%2019.033L9.57719%2019.3785L10.1412%2017.0995C10.5168%2017.2022%2010.8813%2017.2969%2011.238%2017.3862L10.6759%2019.6545L12.0521%2020L12.6217%2017.7009C14.9684%2018.1482%2016.7331%2017.9678%2017.4759%2015.8297C18.0745%2014.1082%2017.4461%2013.1152%2016.2114%2012.4677C17.1106%2012.2588%2017.7879%2011.663%2017.9686%2010.4323ZM14.8242%2014.8738C14.3989%2016.5953%2011.5214%2015.6647%2010.5885%2015.4313L11.3442%2012.3796C12.2771%2012.6142%2015.2687%2013.0785%2014.8242%2014.8738ZM15.2499%2010.4074C14.8618%2011.9733%2012.4668%2011.1778%2011.6899%2010.9827L12.3751%208.21489C13.152%208.40994%2015.654%208.77398%2015.2499%2010.4074Z'%20fill='white'/%3e%3c/svg%3e", oo = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3.375C9 6.18677 9 7.76322 9 10.575" stroke="#E23A4B" stroke-width="2" stroke-linecap="round"/>
<circle cx="9" cy="14" r="1" fill="#E23A4B"/>
</svg>
`, h5 = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3.375C9 6.18677 9 7.76322 9 10.575" stroke="#E5AE15" stroke-width="2" stroke-linecap="round"/>
<circle cx="9" cy="14" r="1" fill="#E5AE15"/>
</svg>
`, p5 = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6L8.33847 12.588C7.92032 13.0745 7.71125 13.3178 7.46259 13.407C7.24434 13.4853 7.00566 13.4853 6.78741 13.407C6.53875 13.3178 6.32968 13.0745 5.91153 12.588L4 10.3636" stroke="#84CD45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, m5 = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25854 2.41421C7.02418 1.05987 8.97536 1.05982 9.74096 2.41421L14.9799 11.6831C15.7334 13.0163 14.7698 14.6675 13.2384 14.6675H2.76049C1.22918 14.6673 0.266076 13.0163 1.0196 11.6831L6.25854 2.41421ZM7.99747 10.6675C7.62928 10.6675 7.3308 10.9659 7.3308 11.3341C7.33088 11.7023 7.62933 12.0008 7.99747 12.0008C8.36556 12.0008 8.66405 11.7022 8.66413 11.3341C8.66413 10.966 8.36561 10.6675 7.99747 10.6675ZM7.99747 5.33414C7.62928 5.33414 7.3308 5.63261 7.3308 6.0008V8.66747C7.33088 9.03559 7.62933 9.33414 7.99747 9.33414C8.36556 9.33408 8.66405 9.03556 8.66413 8.66747V6.0008C8.66413 5.63265 8.36561 5.33419 7.99747 5.33414Z" fill="#E5AE15"/>
</svg>
`, b5 = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6L8.33847 12.588C7.92032 13.0745 7.71125 13.3178 7.46259 13.407C7.24434 13.4853 7.00566 13.4853 6.78741 13.407C6.53875 13.3178 6.32968 13.0745 5.91153 12.588L4 10.3636" stroke="#84CD45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, g5 = s5, w5 = c5, io = a5.replace(
  /<svg /,
  '<svg class="wallet-icon" '
), ao = o5, y5 = i5.replace(/<rect[^>]*\/>/g, "").replace(/viewBox="0 0 52 40"/, 'viewBox="16 10 22 22"').replace(/width="52" height="40"/, 'width="24" height="24"').replace(/<svg /, '<svg class="swap-arrow-icon" '), co = r5.replace(
  /<svg /,
  '<svg class="chevron-icon" '
), uo = {
  ethereum: u5,
  tron: l5,
  solana: d5,
  bitcoin: f5
};
class x5 extends HTMLElement {
  constructor() {
    super(), this.config = {}, this.fromAmount = "", this.toAmount = "", this.fromTokenData = null, this.toTokenData = null, this.slippage = 0.5, this.showSettings = !1, this.showTokenSelector = !1, this.tokenSelectorMode = "from", this.tokenSearchQuery = "", this.tokenFilterNetwork = "all", this.tokenList = [], this.networksList = [], this.isTokenListLoading = !1, this.swapStatusType = "idle", this.swapStatusMessage = "", this.isWalletConnectError = !1, this.swapTxHash = null, this.intentIdForStatus = null, this.intentStatusFromApi = null, this.intentStatusPollTimer = null, this.intentStatusPollStartedAt = 0, this.isSwapping = !1, this.isLoadingQuote = !1, this.currentQuote = null, this.quoteDebounceTimer = null, this.tokenSearchDebounceTimer = null, this.showDestinationAddress = !1, this.destinationAddress = "", this.isWidgetVisible = !0, this.showConnectWalletModal = !1, this.isConnectingWallet = !1, this.isBalanceLoading = !1, this.displayFromTokenAsWrapped = !1, this.showDestinationAddressModal = !1, this.WALLET_OPTIONS = [
      {
        id: "metamask",
        label: "MetaMask",
        icon: Nn,
        type: "evm"
      },
      {
        id: "phantom",
        label: "Phantom",
        icon: Br,
        type: "solana"
      },
      {
        id: "tronlink",
        label: "Tron Link",
        icon: Ir,
        type: "tron"
      }
    ], this.INTENT_STATUS_SUCCESS = /* @__PURE__ */ new Set([
      X.Fulfilled,
      X.Refunded
    ]), this.INTENT_STATUS_FAILED = /* @__PURE__ */ new Set([
      X.Declined,
      X.DeclinedDueToKytCheck,
      X.Expired,
      X.Failed
    ]), this._shadowRoot = this.attachShadow({ mode: "open" }), this.walletManager = new O6(), this.walletState = this.walletManager.getState(), this.walletManager.subscribe(async (t) => {
      this.walletState = t, t.connected ? (this.showDestinationAddress = !0, this.destinationAddress || (this.destinationAddress = t.address || ""), await this.ensureTokensMatchWallet(), await this.fetchBalances()) : (this.destinationAddress = "", this.fromTokenData && (this.fromTokenData.balance = null), this.toTokenData && (this.toTokenData.balance = null)), this.render(), this.attachEventListeners();
    });
  }
  async connectedCallback() {
    this.parseAttributes(), await this.initializeTokens(), this.render(), this.attachEventListeners();
  }
  getNetworkIconUrl(t) {
    if (!t) return "";
    const n = t.toLowerCase();
    if (uo[n]) return uo[n];
    const r = this.networksList.find((s) => s.name.toLowerCase() === n);
    return (r == null ? void 0 : r.icon_url) ?? "";
  }
  renderTokenIcon(t) {
    if (!t) return "";
    const n = t.icon_url ? `<img src="${t.icon_url}" class="token-icon" alt="${t.symbol}" />` : '<span class="token-icon-placeholder"></span>', r = this.getNetworkIconUrl(t.network), s = r ? `<span class="token-network-icon-wrap"><img src="${r}" class="token-network-icon" alt="" /></span>` : "";
    return `<span class="token-icon-wrap">${n}${s}</span>`;
  }
  async initializeTokens() {
    try {
      const [t, n, r] = await Promise.all([
        Nt.getNetworks(),
        Zt.getTokenBySymbol(this.config.defaultFromToken || "ETH"),
        Zt.getTokenBySymbol(this.config.defaultToToken || "USDT")
      ]);
      this.networksList = t, this.fromTokenData = n ?? null, this.toTokenData = r ?? null, (!this.fromTokenData || !this.toTokenData) && console.warn("Failed to load default tokens, using mock data"), await this.ensureTokensMatchWallet(), await this.fetchBalances();
    } catch (t) {
      console.error("Error initializing tokens:", t);
    }
  }
  async ensureTokensMatchWallet() {
    var n, r;
    const t = H6(this.walletState);
    if (t) {
      if (this.fromTokenData && ((n = this.fromTokenData.network) == null ? void 0 : n.toLowerCase()) !== t.toLowerCase()) {
        const s = await Zt.getTokenBySymbol(
          this.fromTokenData.symbol,
          void 0,
          t
        );
        s && (this.fromTokenData = s);
      }
      if (this.toTokenData && ((r = this.toTokenData.network) == null ? void 0 : r.toLowerCase()) !== t.toLowerCase()) {
        const s = await Zt.getTokenBySymbol(
          this.toTokenData.symbol,
          void 0,
          t
        );
        s && (this.toTokenData = s);
      }
    }
  }
  async fetchBalances() {
    if (!(!this.walletState.connected || !this.walletState.address) && !(!this.fromTokenData && !this.toTokenData)) {
      this.isBalanceLoading = !0, this.render(), this.attachEventListeners();
      try {
        const t = this.walletState.type === "tron";
        let n = null, r = null;
        this.fromTokenData && (n = await fc.getBalance(
          this.fromTokenData,
          this.walletState
        ), t && await new Promise((s) => setTimeout(s, 300))), this.toTokenData && (r = await fc.getBalance(
          this.toTokenData,
          this.walletState
        )), this.fromTokenData && (this.fromTokenData.balance = n ?? void 0), this.toTokenData && (this.toTokenData.balance = r ?? void 0), await X6.updateTokenFiatRates([
          this.fromTokenData,
          this.toTokenData
        ]);
      } catch (t) {
        console.error("Failed to fetch balances:", t);
      } finally {
        this.isBalanceLoading = !1, this.render(), this.attachEventListeners();
      }
    }
  }
  attributeChangedCallback(t, n, r) {
    n !== r && (this.parseAttributes(), this.render());
  }
  static get observedAttributes() {
    return [
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
      "swap-divider-variant"
    ];
  }
  parseAttributes() {
    const t = (n) => this.getAttribute(n);
    this.config = {
      theme: t("theme") || "dark",
      primaryTextColor: t("primary-text-color") ?? void 0,
      secondaryTextColor: t("secondary-text-color") ?? void 0,
      backgroundColor: t("background-color") ?? void 0,
      cardBackgroundColor: t("card-background-color") ?? void 0,
      swapWarningColor: t("swap-warning-color") ?? void 0,
      swapErrorColor: t("swap-error-color") ?? void 0,
      swapSuccessColor: t("swap-success-color") ?? void 0,
      buttonColor: t("button-color") ?? void 0,
      buttonTextColor: t("button-text-color") ?? void 0,
      iconsColor: t("icons-color") ?? void 0,
      defaultFromToken: t("default-from-token") || "ETH",
      defaultToToken: t("default-to-token") || "USDT",
      defaultSlippage: parseFloat(t("default-slippage") || "0.5"),
      swapDividerVariant: t("swap-divider-variant") || "v2"
    }, this.slippage = this.config.defaultSlippage ?? 0.5;
  }
  render() {
    const t = F6(this.config);
    this._shadowRoot.innerHTML = `
      <style>${t}</style>
      <div class="widget-container widget-container--divider-${this.config.swapDividerVariant || "v2"}" style="${this.isWidgetVisible ? "" : "display: none;"}">
        ${this.renderHeader()}
        ${this.renderSwapForm()}
        ${this.showTokenSelector ? this.renderTokenSelector() : ""}
        ${this.renderConnectWalletModal()}
      </div>
    `;
  }
  getWalletIconByType() {
    const t = this.walletState.type;
    return t === "evm" ? Nn : t === "tron" ? Ir : t === "solana" ? Br : Nn;
  }
  renderHeader() {
    return `
      <div class="widget-header">
        <h2 class="widget-title">Swap</h2>
        <div class="header-actions">
          <button class="icon-button" id="settings-btn" aria-label="Settings">${g5}</button>
          <button class="icon-button" id="close-widget-btn" aria-label="Close">${ao}</button>
        </div>
      </div>
    `;
  }
  formatBalance(t, n) {
    if (this.isBalanceLoading && this.walletState.connected && (n ? this.fromTokenData : this.toTokenData) && t == null)
      return "...";
    if (!t || t === "" || t === "0" || parseFloat(t) === 0) return "0";
    const r = parseFloat(t);
    return r % 1 === 0 ? r.toString() : r.toLocaleString("en-US", {
      maximumFractionDigits: 4,
      minimumFractionDigits: 0
    });
  }
  getSwapStatusFromQuote() {
    const t = this.currentQuote, n = t == null ? void 0 : t.price_impact;
    return n != null && n < -1 ? "warning" : "idle";
  }
  getEffectiveSwapStatus() {
    if (this.intentStatusFromApi != null) {
      const t = this.mapIntentStatusToSwapStatus(this.intentStatusFromApi);
      if (t) return t;
    }
    return this.swapStatusType !== "idle" ? this.swapStatusType : this.isLoadingQuote || this.isSwapping ? "loading" : this.getSwapStatusFromQuote();
  }
  mapIntentStatusToSwapStatus(t) {
    return t === X.Fulfilled || t === X.Refunded ? "success" : t === X.Declined || t === X.DeclinedDueToKytCheck || t === X.Expired || t === X.Failed ? "error" : "loading";
  }
  isDarkTheme() {
    const t = this.config.theme || "dark";
    return t === "dark" || t === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  renderLoaderSvg() {
    const t = "wlg-" + Math.random().toString(36).slice(2, 10), n = this.isDarkTheme();
    return `<svg class="circular-progress-svg" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="${t}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${n ? "#00000000" : "#FFFFFF00"}"/>
              <stop offset="100%" stop-color="${n ? "#ffffff" : "#272727"}"/>
            </linearGradient>
          </defs>
          <circle class="circular-progress-arc" cx="12" cy="12" r="10" fill="none" stroke="url(#${t})" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="27 63" stroke-dashoffset="0"/>
        </svg>`;
  }
  renderLoader() {
    return `<div class="swap-divider-status swap-divider-loading">
        ${this.renderLoaderSvg()}
      </div>`;
  }
  renderSwapDividerContent() {
    const t = this.getEffectiveSwapStatus();
    return t === "loading" ? this.renderLoader() : t === "error" ? `<div class="swap-divider-status swap-divider-error">${oo}</div>` : t === "warning" ? `<div class="swap-divider-status swap-divider-warning">${h5}</div>` : t === "success" ? `<div class="swap-divider-status swap-divider-success">${p5}</div>` : `<button class="swap-reverse-button" id="reverse-btn" aria-label="Swap direction">${y5}</button>`;
  }
  renderSwapStatusToast() {
    var i;
    const t = this.getEffectiveSwapStatus(), n = (i = this.currentQuote) == null ? void 0 : i.price_impact;
    if (t === "idle" || !this.isSwapping && this.fromAmount.trim() === "")
      return "";
    let r = "", s = "";
    t === "loading" ? r = this.swapStatusMessage || "Processing..." : t === "success" ? (r = "Transaction successful", s = b5) : t === "error" ? (r = this.isWalletConnectError ? this.swapStatusMessage || "Connection failed" : "Transaction failed", s = oo) : t === "warning" && n != null && (r = `Token price is below the market ${n}%`, s = m5);
    const o = this.swapTxHash ? this.getExplorerUrl(this.swapTxHash) : null;
    return `
      <div class="swap-status-toast swap-status-toast-${t}">
        <div class="swap-status-toast-row">
          ${s ? `<span class="swap-status-toast-icon">${s}</span>` : ""}
          <span class="swap-status-toast-text">${this.escapeHtml(r)}</span>
        </div>
        ${o ? `<a class="swap-status-toast-explorer" href="${o}" target="_blank">View on Explorer ↗</a>` : ""}
      </div>
    `;
  }
  renderTransactionModal() {
    var h, p;
    const t = this.getEffectiveSwapStatus();
    if (t === "loading" && !this.isSwapping || t === "idle" || t === "warning")
      return "";
    const n = t === "loading", r = t === "success", s = t === "error", o = ((h = this.fromTokenData) == null ? void 0 : h.symbol) || "", i = ((p = this.toTokenData) == null ? void 0 : p.symbol) || "", a = this.fromAmount || "", c = this.toAmount || "";
    let u = "", l = "", d = "";
    if (n) {
      const m = this.intentStatusFromApi;
      !m || m === X.Initiated ? (u = "Submit swap", l = "Confirm this transaction in your wallet.") : m === X.ApprovalAdded ? u = "Matching liquidity..." : m === X.Accepted || m === X.UserDeposited ? u = "Executing your swap..." : m === X.RefundRequested ? u = "Requesting refund" : m === X.Refunded ? u = "Refund in progress..." : m === X.Declined || m === X.DeclinedDueToKytCheck ? u = "Your swap could not be completed." : m === X.Fulfilled ? u = "Transaction confirmed" : m === X.Failed ? u = "Swap failed" : u = "Submitting transaction";
    } else r ? (u = "Transaction confirmed", l = "Your swap was successfully executed. You can track it in your transaction history.", d = "Back to swap") : s && (this.isWalletConnectError ? (u = "Connection failed", l = this.swapStatusMessage || "Could not connect to your wallet. Try opening this page in your wallet's in-app browser (e.g. MetaMask) or ensure the wallet extension is installed.", d = "Try again") : (u = "Transaction failed", l = "The transaction could not be completed.", d = "Try again"));
    const f = this.config.theme === "dark" || this.config.theme === "auto" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return `
      <div class="tx-modal-overlay">
        <div class="tx-modal">
          <div class="tx-modal-header">
            ${n ? `<div class="tx-modal-spinner">${this.renderLoaderSvg()}</div>` : r ? `<div class="tx-modal-icon tx-modal-icon--success"><img src="${f ? t5 : n5}" alt="success" /></div>` : `<div class="tx-modal-icon tx-modal-icon--error">${oo}</div>`}
          </div>
          <div class="tx-modal-body">
            <h2 class="tx-modal-title">${this.escapeHtml(u)}</h2>
            ${this.isWalletConnectError ? "" : `<div class="tx-modal-amount-row">
              <div class="tx-modal-token">
                ${this.renderTokenIcon(this.fromTokenData)}
                <div class="tx-modal-token-text">
                  <span class="tx-modal-amount">${this.escapeHtml(
      a
    )} ${this.escapeHtml(o)}</span>
                </div>
              </div>
              <span class="tx-modal-arrow">→</span>
              <div class="tx-modal-token">
                ${this.renderTokenIcon(this.toTokenData)}
                <div class="tx-modal-token-text">
                  <span class="tx-modal-amount">${this.escapeHtml(
      c
    )} ${this.escapeHtml(i)}</span>
                </div>
              </div>
            </div>`}
            <p class="tx-modal-subtitle">
              ${l === "Confirm this transaction in your wallet." ? `<span class="tx-modal-wallet-icon">${io}</span>` : ""}
              <span>${this.escapeHtml(l)}</span>
            </p>
          </div>
          ${d ? `<button class="tx-modal-primary-btn${s ? " tx-modal-primary-btn--error" : ""}" id="tx-modal-primary-btn">${this.escapeHtml(d)}</button>` : ""}
        </div>
      </div>
    `;
  }
  renderDestinationAddressModal() {
    if (!this.showDestinationAddressModal || !this.walletState.connected || !this.walletState.address) return "";
    const t = this.walletState.address, n = (r) => r.length > 16 ? `${r.slice(0, 6)}...${r.slice(-6)}` : r;
    return `
      <div class="destination-modal-overlay">
        <div class="destination-modal">
          <div class="destination-modal-list">
            <button class="destination-modal-item" data-address="${t}">
              ${this.walletState.type === "evm" ? `<img src="${Nn}" class="connect-wallet-icon" alt="MetaMask" />` : this.walletState.type === "tron" ? `<img src="${Ir}" class="connect-wallet-icon" alt="TronLink" />` : this.walletState.type === "solana" ? `<img src="${Br}" class="connect-wallet-icon" alt="Phantom" />` : ""}
              <span class="destination-modal-item-label">${this.escapeHtml(n(t))}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  formatUsd(t, n) {
    const r = t * n;
    return r === 0 ? "$0" : r < 0.01 ? "~$0.00" : `$${r.toFixed(2)}`;
  }
  getDisplayFromSymbol() {
    var t;
    return this.displayFromTokenAsWrapped && this.fromTokenData && Xr(this.fromTokenData) ? pc(this.fromTokenData.symbol) : ((t = this.fromTokenData) == null ? void 0 : t.symbol) || "Select";
  }
  renderSwapForm() {
    var i, a, c, u, l, d;
    const t = this.getDisplayFromSymbol(), n = this.formatBalance((i = this.fromTokenData) == null ? void 0 : i.balance, !0), r = this.formatBalance((a = this.toTokenData) == null ? void 0 : a.balance, !1), s = this.formatUsd(
      parseFloat(n) || 0,
      ((c = this.fromTokenData) == null ? void 0 : c.fiatRate) ?? 0
    ), o = this.formatUsd(
      parseFloat(r) || 0,
      ((u = this.toTokenData) == null ? void 0 : u.fiatRate) ?? 0
    );
    return `
      <div class="swap-form">
        <div class="swap-card ${this.getEffectiveSwapStatus() !== "idle" ? "swap-card-with-toast" : ""}">
          <div class="swap-card-inner">
          <div class="swap-section swap-section-top">
            <div class="swap-label">You pay</div>
            <div class="swap-input-row">
              <div class="swap-amount-wrapper">
                <input type="text" class="amount-input" id="from-input" placeholder="0" value="${this.fromAmount}" inputmode="decimal" autocomplete="off" />
              </div>
              <button class="token-select" id="from-token-btn">
                ${this.renderTokenIcon(this.fromTokenData)}
                <span class="token-symbol">${t}</span>
                ${co}
              </button>
            </div>
            <div class="balance-row">
              <span class="balance-fiat">${s}</span>
              <span class="balance-token">${io}<span>${n} ${t}</span></span>
            </div>
            ${this.renderSlippagePanel()}
          </div>

          <div class="swap-divider">
            ${this.renderSwapDividerContent()}
          </div>

          <div class="swap-section swap-section-bottom">
            <div class="swap-label">You receive</div>
            <div class="swap-input-row">
              <div class="swap-amount-wrapper">
                <input type="text" class="amount-input ${this.toAmount ? "" : "loading"}" id="to-input" placeholder="0" value="${this.toAmount}" readonly />
              </div>
              <button class="token-select" id="to-token-btn">
                ${this.renderTokenIcon(this.toTokenData)}
                <span class="token-symbol">${((l = this.toTokenData) == null ? void 0 : l.symbol) || "Select"}</span>
                ${co}
              </button>
            </div>
            <div class="balance-row">
              <span class="balance-fiat">${o}</span>
              <span class="balance-token">${io}<span>${r} ${((d = this.toTokenData) == null ? void 0 : d.symbol) || ""}</span></span>
            </div>
          </div>
          </div>
          ${this.renderSwapStatusToast()}
        </div>

        <div class="destination-address-block">
          <button class="destination-address-header" id="destination-toggle" type="button">
            <span class="destination-label">Destination address<span class="destination-info-wrap">${w5}<span class="destination-info-tooltip">Enter the address where you want to receive swapped tokens</span></span></span>
            <span class="destination-chevron ${this.showDestinationAddress ? "expanded" : ""}">${co}</span>
          </button>
          ${this.showDestinationAddress ? `
          <div class="destination-address-input-wrap">
            ${this.destinationAddress ? `<span class="destination-wallet-icon">${this.walletState.type === "evm" ? `<img src="${Nn}" alt="MetaMask" />` : this.walletState.type === "tron" ? `<img src="${Ir}" alt="TronLink" />` : this.walletState.type === "solana" ? `<img src="${Br}" alt="Phantom" />` : ""}</span>` : ""}
            <input type="text" class="destination-address-input${this.destinationAddress ? " destination-address-input--filled" : ""}" id="destination-input"  value="${this.destinationAddress}" autocomplete="off" />
            ${this.destinationAddress ? '<button class="destination-clear-btn" id="destination-clear-btn">Clear</button>' : '<button class="destination-set-btn" id="destination-set-btn">Set address</button>'}
          </div>
          ` : ""}
        </div>
        ${this.renderDestinationAddressModal()}

        ${this.renderPriceImpactWarning()}

        <button class="swap-button${this.getSwapButtonText() === "Enter Amount" ? " swap-button--enter-amount" : ""}" id="swap-btn" ${this.swapStatusType === "error" ? "" : this.isLoadingQuote || this.isSwapping || this.walletState.connected && !(this.destinationAddress || "").trim() ? "disabled" : ""}>
          ${this.getSwapButtonText()}
        </button>
      </div>
      ${this.renderTransactionModal()}
    `;
  }
  renderPriceImpactWarning() {
    return "";
  }
  renderSlippagePanel() {
    return this.showSettings ? `
      <div class="slippage-panel">
        <label class="slippage-label">Slippage Tolerance</label>
        <div class="slippage-row">
          ${[0.3, 0.5, 1].map(
      (n) => `
            <button class="slippage-btn ${this.slippage === n ? "active" : ""}" data-value="${n}">${n}%</button>
          `
    ).join("")}
          <input
            type="text"
            class="slippage-input"
            placeholder="Custom"
            value="${this.slippage} %"
          />
        </div>
      </div>
    ` : "";
  }
  renderTokenSelector() {
    const t = this.tokenList.slice(0, 50), n = [
      { value: "all", label: "All" },
      ...this.networksList.map((r) => {
        const s = r.name.toLowerCase(), o = uo[s] ?? r.icon_url;
        return {
          value: s,
          label: r.name.charAt(0).toUpperCase() + r.name.slice(1),
          icon_url: o
        };
      })
    ];
    return `
      <div class="token-selector-overlay" id="token-selector-overlay">
        <div class="token-selector-modal">
          <div class="modal-header">
            <h3 class="modal-title">Select token</h3>
            <button class="icon-button close-button" id="close-token-selector-btn" aria-label="Close">${ao}</button>
          </div>
          <input
            type="text"
            class="token-search-input"
            id="token-search-input"
            placeholder="Search by token name or paste address"
            value="${this.escapeHtml(this.tokenSearchQuery)}"
            autocomplete="off"
          />
          <div class="networks-list">
            ${n.map(
      (r) => `
              <button class="networks-list__item ${this.tokenFilterNetwork === r.value ? "active" : ""}" data-network="${r.value}">
                ${r.value === "all" ? r.label : `<span class="networks-list__network">${r.icon_url ? `<img src="${r.icon_url}" alt="${r.label}" />` : ""}<span>${r.label}</span></span>`}
              </button>
            `
    ).join("")}
          </div>
          <div class="token-selector-list">
            ${this.isTokenListLoading ? '<div class="token-list-loading">Loading...</div>' : ""}
            ${t.map(
      (r) => `
              <button class="token-list-item" data-token-symbol="${this.escapeHtml(r.symbol)}" data-token-network="${this.escapeHtml(r.network)}">
                ${this.renderTokenIcon(r)}
                <div class="token-list-item-info">
                  <span class="token-symbol">${this.escapeHtml(r.symbol)}</span>
                  <span class="token-network">${this.escapeHtml(r.network)}</span>
                </div>
              </button>
            `
    ).join("")}
            ${!this.isTokenListLoading && t.length === 0 ? '<div class="token-list-empty">No tokens found</div>' : ""}
          </div>
        </div>
      </div>
    `;
  }
  escapeHtml(t) {
    const n = document.createElement("div");
    return n.textContent = t, n.innerHTML;
  }
  renderConnectWalletModal() {
    return this.showConnectWalletModal ? this.isConnectingWallet ? `
      <div class="connect-wallet-overlay" id="connect-wallet-overlay">
        <div class="connect-wallet-modal connect-wallet-modal--loading">
          <div class="connect-wallet-loading-spinner">${this.renderLoaderSvg()}</div>
          <h2 class="connect-wallet-loading-title">Connect your wallet</h2>
          <p class="connect-wallet-loading-subtitle">Complete the connection request in your wallet.</p>
        </div>
      </div>
    ` : `
      <div class="connect-wallet-overlay" id="connect-wallet-overlay">
        <div class="connect-wallet-modal">
          <div class="connect-wallet-header">
            <h2 class="connect-wallet-title">Connect wallet</h2>
            <button class="icon-button" id="close-connect-wallet-btn" aria-label="Close">${ao}</button>
          </div>
          <div class="connect-wallet-list">
            ${this.WALLET_OPTIONS.map(
      (t) => `
              <button class="connect-wallet-item" data-wallet-type="${t.type}" ${this.isConnectingWallet ? "disabled" : ""}>
                <img class="connect-wallet-icon" src="${t.icon}" alt="${t.label}" />
                <span>${t.label}</span>
              </button>
            `
    ).join("")}
          </div>
          ${this.isConnectingWallet ? '<div class="connect-wallet-loading">Connecting...</div>' : ""}
        </div>
      </div>
    ` : "";
  }
  attachEventListeners() {
    const t = this._shadowRoot.getElementById("settings-btn");
    t == null || t.addEventListener("click", () => {
      this.showSettings = !this.showSettings, this.render(), this.attachEventListeners();
    });
    const n = this._shadowRoot.getElementById(
      "close-connect-wallet-btn"
    );
    n == null || n.addEventListener("click", () => {
      this.showConnectWalletModal = !1, this.isConnectingWallet = !1, this.render(), this.attachEventListeners();
    });
    const r = this._shadowRoot.getElementById(
      "connect-wallet-overlay"
    );
    r == null || r.addEventListener("click", (A) => {
      A.target === r && (this.showConnectWalletModal = !1, this.isConnectingWallet = !1, this.render(), this.attachEventListeners());
    }), this._shadowRoot.querySelectorAll(
      ".connect-wallet-item"
    ).forEach((A) => {
      A.addEventListener("click", async (P) => {
        const $ = P.currentTarget.dataset.walletType;
        if (!(!$ || this.isConnectingWallet)) {
          this.isConnectingWallet = !0, this.render(), this.attachEventListeners();
          try {
            await this.walletManager.connect($), this.showConnectWalletModal = !1, this.config.onWalletConnect && this.config.onWalletConnect(this.walletState.address || "");
          } catch (L) {
            console.error("Wallet connect failed:", L);
            const R = L instanceof Error ? L.message || "" : typeof L == "string" ? L : "", D = R.toLowerCase();
            (L == null ? void 0 : L.code) === 4001 || D.includes("rejected") || D.includes("user cancelled") || D.includes("user canceled") || D.includes("user denied") || this.showSwapStatusModal(
              "error",
              R || "Failed to connect wallet",
              { isWalletConnect: !0 }
            );
          } finally {
            this.isConnectingWallet = !1, this.render(), this.attachEventListeners();
          }
        }
      });
    });
    const o = this._shadowRoot.getElementById("close-widget-btn");
    o == null || o.addEventListener("click", () => {
      this.isWidgetVisible = !1, this.render(), this.dispatchEvent(new CustomEvent("widget-close", { bubbles: !0 }));
    }), this._shadowRoot.querySelectorAll(".slippage-btn").forEach((A) => {
      A.addEventListener("click", (P) => {
        const F = P.target;
        this.slippage = parseFloat(F.dataset.value || "0.5"), this.render(), this.attachEventListeners();
      });
    });
    const a = this._shadowRoot.querySelector(
      ".slippage-input"
    );
    a == null || a.addEventListener("input", (A) => {
      const P = A.target.value.replace(/%/g, "").trim(), F = parseFloat(P);
      !isNaN(F) && F >= 0 && F <= 50 && (this.slippage = F);
    });
    const c = this._shadowRoot.getElementById("reverse-btn");
    c == null || c.addEventListener("click", () => {
      [this.fromTokenData, this.toTokenData] = [
        this.toTokenData,
        this.fromTokenData
      ], [this.fromAmount, this.toAmount] = [this.toAmount, this.fromAmount], this.fetchBalances(), this.fromAmount ? this.fetchQuoteDebounced() : (this.render(), this.attachEventListeners());
    });
    const u = this._shadowRoot.getElementById(
      "from-input"
    );
    u == null || u.addEventListener("input", (A) => {
      const P = A.target;
      this.fromAmount = P.value, this.swapStatusType === "error" && this.clearSwapStatus(), this.fetchQuoteDebounced();
    });
    const l = this._shadowRoot.getElementById("from-token-btn");
    l == null || l.addEventListener("click", () => {
      this.tokenSelectorMode = "from", this.openTokenSelector();
    });
    const d = this._shadowRoot.getElementById("to-token-btn");
    d == null || d.addEventListener("click", () => {
      this.tokenSelectorMode = "to", this.openTokenSelector();
    });
    const f = this._shadowRoot.getElementById("destination-toggle");
    f == null || f.addEventListener("click", () => {
      this.showDestinationAddress = !this.showDestinationAddress, this.render(), this.attachEventListeners();
    });
    const h = this._shadowRoot.getElementById(
      "destination-input"
    );
    h == null || h.addEventListener("input", (A) => {
      this.destinationAddress = A.target.value;
      const P = this._shadowRoot.getElementById(
        "swap-btn"
      );
      if (P) {
        const F = (this.destinationAddress || "").trim();
        P.disabled = this.isLoadingQuote || this.isSwapping || this.walletState.connected && !F, P.textContent = this.getSwapButtonText();
      }
    });
    const p = this._shadowRoot.getElementById(
      "close-token-selector-btn"
    );
    p == null || p.addEventListener("click", () => {
      this.closeTokenSelector();
    });
    const m = this._shadowRoot.getElementById(
      "token-selector-overlay"
    );
    m == null || m.addEventListener("click", (A) => {
      A.target === m && this.closeTokenSelector();
    });
    const b = this._shadowRoot.getElementById(
      "token-search-input"
    );
    b == null || b.addEventListener("input", (A) => {
      const P = A.target.value;
      this.tokenSearchQuery = P, this.tokenSearchDebounceTimer && clearTimeout(this.tokenSearchDebounceTimer), this.tokenSearchDebounceTimer = window.setTimeout(async () => {
        this.tokenSearchDebounceTimer = null, await this.loadTokenList(P), this.render(), this.attachEventListeners();
        const F = this._shadowRoot.getElementById(
          "token-search-input"
        );
        F == null || F.focus();
      }, 1e3);
    }), this._shadowRoot.querySelectorAll(
      ".networks-list__item[data-network]"
    ).forEach((A) => {
      A.addEventListener("click", async () => {
        const P = A.dataset.network;
        P && (this.tokenFilterNetwork = P, await this.loadTokenList(this.tokenSearchQuery, P), this.render(), this.attachEventListeners());
      });
    }), this._shadowRoot.querySelectorAll(".token-list-item").forEach((A) => {
      A.addEventListener("click", (P) => {
        const F = P.currentTarget, $ = F.dataset.tokenSymbol, L = F.dataset.tokenNetwork, R = this.tokenList.find(
          (D) => D.symbol === $ && D.network === L
        );
        R && this.selectToken(R), this.closeTokenSelector();
      });
    });
    const g = this._shadowRoot.getElementById("swap-btn");
    g == null || g.addEventListener("click", () => {
      this.walletState.connected ? this.handleSwap() : (this.showConnectWalletModal = !0, this.render(), this.attachEventListeners());
    });
    const w = this._shadowRoot.getElementById("destination-set-btn");
    w == null || w.addEventListener("click", () => {
      this.walletState.connected ? this.showDestinationAddressModal = !this.showDestinationAddressModal : this.showConnectWalletModal = !0, this.render(), this.attachEventListeners();
    });
    const T = this._shadowRoot.getElementById(
      "destination-clear-btn"
    );
    T == null || T.addEventListener("click", () => {
      this.destinationAddress = "", this.render(), this.attachEventListeners();
    }), this._shadowRoot.querySelectorAll(
      ".destination-modal-item"
    ).forEach((A) => {
      A.addEventListener("click", (P) => {
        const $ = P.currentTarget.dataset.address || "";
        this.destinationAddress = $, this.showDestinationAddressModal = !1, this.render(), this.attachEventListeners();
      });
    });
    const E = this._shadowRoot.getElementById(
      "tx-modal-primary-btn"
    );
    E == null || E.addEventListener("click", () => {
      const A = this.isWalletConnectError;
      this.clearSwapStatus(), A && (this.showConnectWalletModal = !0), this.render(), this.attachEventListeners();
    });
  }
  getSwapButtonText() {
    return this.swapStatusType === "error" ? "Swap" : this.isSwapping ? "Swapping..." : this.isLoadingQuote ? "Loading..." : this.walletState.connected ? (this.destinationAddress || "").trim() ? !this.fromAmount || parseFloat(this.fromAmount) === 0 ? "Enter Amount" : "Swap" : "Enter destination address" : "Connect Wallet";
  }
  async openTokenSelector() {
    this.showTokenSelector = !0, this.tokenSearchQuery = "", this.tokenFilterNetwork = "all";
    const [t, n] = await Promise.all([
      Nt.getNetworks(),
      Zt.searchTokens("", "all")
    ]);
    this.networksList = t, this.tokenList = n, this.isTokenListLoading = !1, this.render(), this.attachEventListeners();
  }
  closeTokenSelector() {
    this.showTokenSelector = !1, this.tokenSearchQuery = "", this.tokenFilterNetwork = "all", this.tokenList = [], this.render(), this.attachEventListeners();
  }
  async loadTokenList(t, n) {
    this.isTokenListLoading = !0;
    try {
      this.tokenList = await Zt.searchTokens(
        t,
        n ?? this.tokenFilterNetwork
      );
    } catch (r) {
      console.error("Failed to load tokens:", r), this.tokenList = [];
    } finally {
      this.isTokenListLoading = !1;
    }
  }
  selectToken(t) {
    const n = this.tokenSelectorMode === "from" ? this.toTokenData : this.fromTokenData;
    n && t.symbol === n.symbol && t.network === n.network ? [this.fromTokenData, this.toTokenData] = [
      this.toTokenData,
      this.fromTokenData
    ] : this.tokenSelectorMode === "from" ? this.fromTokenData = t : this.toTokenData = t, this.fromAmount = "", this.toAmount = "", this.currentQuote = null, this.fetchBalances(), this.fromTokenData && this.toTokenData && this.fromAmount ? this.fetchQuoteDebounced() : (this.render(), this.attachEventListeners());
  }
  fetchQuoteDebounced() {
    this.quoteDebounceTimer && clearTimeout(this.quoteDebounceTimer), this.quoteDebounceTimer = window.setTimeout(async () => {
      this.quoteDebounceTimer = null, this.isLoadingQuote = !0, this.toAmount = "", this.render(), this.attachEventListeners(), await this.fetchQuote();
    }, 200);
  }
  async fetchQuote() {
    if (!this.fromTokenData || !this.toTokenData || !this.fromAmount) {
      this.isLoadingQuote = !1;
      return;
    }
    try {
      this.isLoadingQuote = !0;
      const t = await Kt.getQuote(
        this.fromTokenData,
        this.toTokenData,
        this.fromAmount,
        this.slippage
      );
      t && (this.currentQuote = t, this.toAmount = Kt.calculateOutputAmount(t));
    } catch (t) {
      console.error("Failed to fetch quote:", t), this.toAmount = "0";
    } finally {
      this.isLoadingQuote = !1, this.render(), this.attachEventListeners();
    }
  }
  async handleSwap() {
    if (!this.fromTokenData || !this.toTokenData || !this.currentQuote) {
      this.showSwapStatusModal(
        "error",
        "Please enter an amount and get a quote first"
      );
      return;
    }
    if (!this.fromAmount || parseFloat(this.fromAmount) === 0) {
      this.showSwapStatusModal("error", "Please enter a valid amount");
      return;
    }
    if (!(this.destinationAddress || "").trim()) {
      this.showSwapStatusModal("error", "Please enter destination address");
      return;
    }
    try {
      this.isSwapping = !0, this.showSwapStatusModal("loading", "Refreshing quote...");
      const n = await Kt.getQuote(
        this.fromTokenData,
        this.toTokenData,
        this.fromAmount,
        this.slippage
      );
      if (!n)
        throw new Error("Could not get a fresh quote. Please try again.");
      let r = this.fromTokenData, s = n;
      if (Xr(this.fromTokenData)) {
        this.displayFromTokenAsWrapped = !0, this.showSwapStatusModal("loading", "Wrapping native token..."), await J6(
          this.fromTokenData,
          this.walletState,
          this.fromAmount
        ), this.render(), this.attachEventListeners(), r = {
          ...this.fromTokenData,
          address: this.fromTokenData.wrapped_token_address,
          symbol: pc(this.fromTokenData.symbol),
          name: `Wrapped ${this.fromTokenData.symbol}`
        }, this.showSwapStatusModal("loading", "Refreshing quote...");
        const i = await Kt.getQuote(
          r,
          this.toTokenData,
          this.fromAmount,
          this.slippage
        );
        i && (s = i, this.currentQuote = i, this.toAmount = Kt.calculateOutputAmount(i));
      } else
        this.currentQuote = n, this.toAmount = Kt.calculateOutputAmount(n);
      this.showSwapStatusModal("loading", "Preparing swap...");
      const o = await e5.executeSwap({
        fromToken: r,
        toToken: this.toTokenData,
        amount: this.fromAmount,
        quote: s,
        wallet: this.walletState,
        slippage: this.slippage,
        destinationAddress: this.destinationAddress
      });
      this.swapTxHash = o, this.showSwapStatusModal("loading", "Processing swap..."), this.startIntentStatusPolling(o), this.config.onSwapSuccess && this.config.onSwapSuccess(o);
    } catch (n) {
      console.error("Swap failed:", n);
      const r = this.getErrorMessage(n);
      this.showSwapStatusModal("error", `Swap failed: ${r}`), this.config.onSwapError && this.config.onSwapError(n);
    } finally {
    }
  }
  getErrorMessage(t) {
    var n;
    if (t instanceof Error) {
      if (ee.isAxiosError(t) && ((n = t.response) != null && n.data)) {
        const r = t.response.data;
        if (typeof r.message == "string") return r.message;
        if (typeof r.detail == "string") return r.detail;
        if (Array.isArray(r.detail)) {
          const s = r.detail.map((o) => o.msg).filter(Boolean).join("; ");
          if (s) return s;
        }
      }
      return t.message;
    }
    return "Unknown error occurred";
  }
  showSwapStatusModal(t, n, r) {
    this.swapStatusType = t, this.swapStatusMessage = n.replace(/^[⏳✅❌]\s*/, ""), this.isWalletConnectError = (r == null ? void 0 : r.isWalletConnect) ?? !1, this.render(), this.attachEventListeners();
  }
  clearSwapStatus() {
    this.swapStatusType = "idle", this.swapStatusMessage = "", this.isWalletConnectError = !1, this.swapTxHash = null, this.intentIdForStatus = null, this.intentStatusFromApi = null, this.displayFromTokenAsWrapped = !1, this.isSwapping = !1, this.stopIntentStatusPolling();
  }
  stopIntentStatusPolling() {
    this.intentStatusPollTimer != null && (clearInterval(this.intentStatusPollTimer), this.intentStatusPollTimer = null);
  }
  startIntentStatusPolling(t) {
    this.intentIdForStatus = t, this.intentStatusFromApi = null, this.intentStatusPollStartedAt = Date.now();
    const n = async () => {
      if (this.intentIdForStatus) {
        if (Date.now() - this.intentStatusPollStartedAt > 300 * 1e3) {
          this.stopIntentStatusPolling();
          return;
        }
        try {
          const r = await qe.getIntentStatus(
            this.intentIdForStatus
          );
          this.intentStatusFromApi = r, this.INTENT_STATUS_SUCCESS.has(r) ? (this.swapStatusType = "success", this.swapStatusMessage = "Transaction successful", this.stopIntentStatusPolling(), this.fetchBalances()) : this.INTENT_STATUS_FAILED.has(r) && (this.swapStatusType = "error", this.swapStatusMessage = "Transaction failed", this.stopIntentStatusPolling()), this.render(), this.attachEventListeners();
        } catch (r) {
          console.error("Intent status poll failed:", r);
        }
      }
    };
    n(), this.intentStatusPollTimer = window.setInterval(n, 3e3);
  }
  getExplorerUrl(t) {
    const n = t.startsWith("0x") && t.length === 66, r = t.length === 64 && /^[a-fA-F0-9]+$/.test(t);
    if (!n && !r)
      return "";
    if (this.walletState.type === "evm" && n) {
      const s = this.walletState.chainId;
      return s === 1 ? `https://etherscan.io/tx/${t}` : s === 56 ? `https://bscscan.com/tx/${t}` : s === 137 ? `https://polygonscan.com/tx/${t}` : `https://etherscan.io/tx/${t}`;
    } else if (this.walletState.type === "tron" && r)
      return `https://tronscan.org/#/transaction/${t}`;
    return "";
  }
}
customElements.define("hotpot-swap-widget", x5);
export {
  I as B,
  Bu as H,
  wm as a,
  le as b,
  gs as c,
  kh as d,
  Ut as e,
  Ve as f,
  ku as g,
  x5 as h,
  wr as i,
  vs as l,
  be as s
};
//# sourceMappingURL=index-C3pND3kz.mjs.map
