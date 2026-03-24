import { aC as Zc, aD as Yc, aE as Qc, aF as Jc, aG as Xc, aH as eh, aI as ko, aJ as D, aK as th, aL as mt, aM as Ue, aN as Pe, aO as ks, aP as sh, aQ as ih, aR as rh, aS as Ps, aT as dr, aU as nh, aV as oh, aW as ah, aX as ps, aY as Bt, aZ as ch, a_ as Re, a$ as hh, b0 as lh, b1 as Ce, b2 as un, b3 as uh, b4 as dh, b5 as fh, b6 as dn, b7 as Qe, b8 as Je, b9 as gs, ba as Lt, bb as kr, bc as ph, bd as Fr, be as Ur, bf as Rs, bg as Dr, bh as Fo, bi as at, bj as bt, bk as Uo } from "./index-DKNltDvP.mjs";
const gh = "0.1.1";
function yh() {
  return gh;
}
class ee extends Error {
  constructor(e, s = {}) {
    const i = (() => {
      var c;
      if (s.cause instanceof ee) {
        if (s.cause.details)
          return s.cause.details;
        if (s.cause.shortMessage)
          return s.cause.shortMessage;
      }
      return s.cause && "details" in s.cause && typeof s.cause.details == "string" ? s.cause.details : (c = s.cause) != null && c.message ? s.cause.message : s.details;
    })(), r = s.cause instanceof ee && s.cause.docsPath || s.docsPath, o = `https://oxlib.sh${r ?? ""}`, a = [
      e || "An error occurred.",
      ...s.metaMessages ? ["", ...s.metaMessages] : [],
      ...i || r ? [
        "",
        i ? `Details: ${i}` : void 0,
        r ? `See: ${o}` : void 0
      ] : []
    ].filter((c) => typeof c == "string").join(`
`);
    super(a, s.cause ? { cause: s.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docs", {
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
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: `ox@${yh()}`
    }), this.cause = s.cause, this.details = i, this.docs = o, this.docsPath = r, this.shortMessage = e;
  }
  walk(e) {
    return Do(this, e);
  }
}
function Do(t, e) {
  return e != null && e(t) ? t : t && typeof t == "object" && "cause" in t && t.cause ? Do(t.cause, e) : e ? null : t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const jr = /* @__PURE__ */ BigInt(0), fr = /* @__PURE__ */ BigInt(1);
function Fs(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Mr(t) {
  if (!Fs(t))
    throw new Error("Uint8Array expected");
}
function Cs(t, e) {
  if (typeof e != "boolean")
    throw new Error(t + " boolean expected, got " + e);
}
function Ks(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function jo(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return t === "" ? jr : BigInt("0x" + t);
}
const Mo = (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function"
), mh = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Ns(t) {
  if (Mr(t), Mo)
    return t.toHex();
  let e = "";
  for (let s = 0; s < t.length; s++)
    e += mh[t[s]];
  return e;
}
const rt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function fn(t) {
  if (t >= rt._0 && t <= rt._9)
    return t - rt._0;
  if (t >= rt.A && t <= rt.F)
    return t - (rt.A - 10);
  if (t >= rt.a && t <= rt.f)
    return t - (rt.a - 10);
}
function oi(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  if (Mo)
    return Uint8Array.fromHex(t);
  const e = t.length, s = e / 2;
  if (e % 2)
    throw new Error("hex string expected, got unpadded hex of length " + e);
  const i = new Uint8Array(s);
  for (let r = 0, n = 0; r < s; r++, n += 2) {
    const o = fn(t.charCodeAt(n)), a = fn(t.charCodeAt(n + 1));
    if (o === void 0 || a === void 0) {
      const c = t[n] + t[n + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n);
    }
    i[r] = o * 16 + a;
  }
  return i;
}
function Wt(t) {
  return jo(Ns(t));
}
function Lo(t) {
  return Mr(t), jo(Ns(Uint8Array.from(t).reverse()));
}
function Us(t, e) {
  return oi(t.toString(16).padStart(e * 2, "0"));
}
function zo(t, e) {
  return Us(t, e).reverse();
}
function ke(t, e, s) {
  let i;
  if (typeof e == "string")
    try {
      i = oi(e);
    } catch (n) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + n);
    }
  else if (Fs(e))
    i = Uint8Array.from(e);
  else
    throw new Error(t + " must be hex string or Uint8Array");
  const r = i.length;
  if (typeof s == "number" && r !== s)
    throw new Error(t + " of length " + s + " expected, got " + r);
  return i;
}
function ai(...t) {
  let e = 0;
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    Mr(r), e += r.length;
  }
  const s = new Uint8Array(e);
  for (let i = 0, r = 0; i < t.length; i++) {
    const n = t[i];
    s.set(n, r), r += n.length;
  }
  return s;
}
const Bi = (t) => typeof t == "bigint" && jr <= t;
function Lr(t, e, s) {
  return Bi(t) && Bi(e) && Bi(s) && e <= t && t < s;
}
function as(t, e, s, i) {
  if (!Lr(e, s, i))
    throw new Error("expected valid " + t + ": " + s + " <= n < " + i + ", got " + e);
}
function wh(t) {
  let e;
  for (e = 0; t > jr; t >>= fr, e += 1)
    ;
  return e;
}
const vi = (t) => (fr << BigInt(t)) - fr, qi = (t) => new Uint8Array(t), pn = (t) => Uint8Array.from(t);
function bh(t, e, s) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof s != "function")
    throw new Error("hmacFn must be a function");
  let i = qi(t), r = qi(t), n = 0;
  const o = () => {
    i.fill(1), r.fill(0), n = 0;
  }, a = (...u) => s(r, i, ...u), c = (u = qi(0)) => {
    r = a(pn([0]), u), i = a(), u.length !== 0 && (r = a(pn([1]), u), i = a());
  }, h = () => {
    if (n++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let u = 0;
    const d = [];
    for (; u < e; ) {
      i = a();
      const f = i.slice();
      d.push(f), u += i.length;
    }
    return ai(...d);
  };
  return (u, d) => {
    o(), c(u);
    let f;
    for (; !(f = d(h())); )
      c();
    return o(), f;
  };
}
const vh = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || Fs(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Ei(t, e, s = {}) {
  const i = (r, n, o) => {
    const a = vh[n];
    if (typeof a != "function")
      throw new Error("invalid validator function");
    const c = t[r];
    if (!(o && c === void 0) && !a(c, t))
      throw new Error("param " + String(r) + " is invalid. Expected " + n + ", got " + c);
  };
  for (const [r, n] of Object.entries(e))
    i(r, n, !1);
  for (const [r, n] of Object.entries(s))
    i(r, n, !0);
  return t;
}
function gn(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (s, ...i) => {
    const r = e.get(s);
    if (r !== void 0)
      return r;
    const n = t(s, ...i);
    return e.set(s, n), n;
  };
}
function Eh(t, e) {
  if (bn(t) > e)
    throw new Lh({
      givenSize: bn(t),
      maxSize: e
    });
}
const nt = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function yn(t) {
  if (t >= nt.zero && t <= nt.nine)
    return t - nt.zero;
  if (t >= nt.A && t <= nt.F)
    return t - (nt.A - 10);
  if (t >= nt.a && t <= nt.f)
    return t - (nt.a - 10);
}
function Ih(t, e = {}) {
  const { dir: s, size: i = 32 } = e;
  if (i === 0)
    return t;
  if (t.length > i)
    throw new zh({
      size: t.length,
      targetSize: i,
      type: "Bytes"
    });
  const r = new Uint8Array(i);
  for (let n = 0; n < i; n++) {
    const o = s === "right";
    r[o ? n : i - n - 1] = t[o ? n : t.length - n - 1];
  }
  return r;
}
function Vo(t, e) {
  if (Nt(t) > e)
    throw new Nh({
      givenSize: Nt(t),
      maxSize: e
    });
}
function _h(t, e) {
  if (typeof e == "number" && e > 0 && e > Nt(t) - 1)
    throw new Go({
      offset: e,
      position: "start",
      size: Nt(t)
    });
}
function xh(t, e, s) {
  if (typeof e == "number" && typeof s == "number" && Nt(t) !== s - e)
    throw new Go({
      offset: s,
      position: "end",
      size: Nt(t)
    });
}
function Ko(t, e = {}) {
  const { dir: s, size: i = 32 } = e;
  if (i === 0)
    return t;
  const r = t.replace("0x", "");
  if (r.length > i * 2)
    throw new Th({
      size: Math.ceil(r.length / 2),
      targetSize: i,
      type: "Hex"
    });
  return `0x${r[s === "right" ? "padEnd" : "padStart"](i * 2, "0")}`;
}
const Sh = "#__bigint";
function zr(t, e, s) {
  return JSON.stringify(t, (i, r) => typeof r == "bigint" ? r.toString() + Sh : r, s);
}
const Ph = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Ah(t, e = {}) {
  const { strict: s = !1 } = e;
  if (!t)
    throw new mn(t);
  if (typeof t != "string")
    throw new mn(t);
  if (s && !/^0x[0-9a-fA-F]*$/.test(t))
    throw new wn(t);
  if (!t.startsWith("0x"))
    throw new wn(t);
}
function Oh(...t) {
  return `0x${t.reduce((e, s) => e + s.replace("0x", ""), "")}`;
}
function Vr(t) {
  return t instanceof Uint8Array ? ci(t) : Array.isArray(t) ? ci(new Uint8Array(t)) : t;
}
function ci(t, e = {}) {
  let s = "";
  for (let r = 0; r < t.length; r++)
    s += Ph[t[r]];
  const i = `0x${s}`;
  return typeof e.size == "number" ? (Vo(i, e.size), Ho(i, e.size)) : i;
}
function ki(t, e = {}) {
  const { signed: s, size: i } = e, r = BigInt(t);
  let n;
  i ? s ? n = (1n << BigInt(i) * 8n - 1n) - 1n : n = 2n ** (BigInt(i) * 8n) - 1n : typeof t == "number" && (n = BigInt(Number.MAX_SAFE_INTEGER));
  const o = typeof n == "bigint" && s ? -n - 1n : 0;
  if (n && r > n || r < o) {
    const h = typeof t == "bigint" ? "n" : "";
    throw new Ch({
      max: n ? `${n}${h}` : void 0,
      min: `${o}${h}`,
      signed: s,
      size: i,
      value: `${t}${h}`
    });
  }
  const c = `0x${(s && r < 0 ? (1n << BigInt(i * 8)) + BigInt(r) : r).toString(16)}`;
  return i ? $h(c, i) : c;
}
function $h(t, e) {
  return Ko(t, { dir: "left", size: e });
}
function Ho(t, e) {
  return Ko(t, { dir: "right", size: e });
}
function lt(t, e, s, i = {}) {
  const { strict: r } = i;
  _h(t, e);
  const n = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (s ?? t.length) * 2)}`;
  return r && xh(n, e, s), n;
}
function Nt(t) {
  return Math.ceil((t.length - 2) / 2);
}
function Rh(t, e = {}) {
  const { strict: s = !1 } = e;
  try {
    return Ah(t, { strict: s }), !0;
  } catch {
    return !1;
  }
}
class Ch extends ee {
  constructor({ max: e, min: s, signed: i, size: r, value: n }) {
    super(`Number \`${n}\` is not in safe${r ? ` ${r * 8}-bit` : ""}${i ? " signed" : " unsigned"} integer range ${e ? `(\`${s}\` to \`${e}\`)` : `(above \`${s}\`)`}`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.IntegerOutOfRangeError"
    });
  }
}
class mn extends ee {
  constructor(e) {
    super(`Value \`${typeof e == "object" ? zr(e) : e}\` of type \`${typeof e}\` is an invalid hex type.`, {
      metaMessages: ['Hex types must be represented as `"0x${string}"`.']
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.InvalidHexTypeError"
    });
  }
}
class wn extends ee {
  constructor(e) {
    super(`Value \`${e}\` is an invalid hex value.`, {
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
let Nh = class extends ee {
  constructor({ givenSize: e, maxSize: s }) {
    super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.SizeOverflowError"
    });
  }
};
class Go extends ee {
  constructor({ offset: e, position: s, size: i }) {
    super(`Slice ${s === "start" ? "starting" : "ending"} at offset \`${e}\` is out-of-bounds (size: \`${i}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.SliceOffsetOutOfBoundsError"
    });
  }
}
let Th = class extends ee {
  constructor({ size: e, targetSize: s, type: i }) {
    super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Hex.SizeExceedsPaddingSizeError"
    });
  }
};
const Bh = /* @__PURE__ */ new TextEncoder();
function qh(t) {
  if (!(t instanceof Uint8Array)) {
    if (!t)
      throw new Hs(t);
    if (typeof t != "object")
      throw new Hs(t);
    if (!("BYTES_PER_ELEMENT" in t))
      throw new Hs(t);
    if (t.BYTES_PER_ELEMENT !== 1 || t.constructor.name !== "Uint8Array")
      throw new Hs(t);
  }
}
function kh(t) {
  return t instanceof Uint8Array ? t : typeof t == "string" ? Uh(t) : Fh(t);
}
function Fh(t) {
  return t instanceof Uint8Array ? t : new Uint8Array(t);
}
function Uh(t, e = {}) {
  const { size: s } = e;
  let i = t;
  s && (Vo(t, s), i = Ho(t, s));
  let r = i.slice(2);
  r.length % 2 && (r = `0${r}`);
  const n = r.length / 2, o = new Uint8Array(n);
  for (let a = 0, c = 0; a < n; a++) {
    const h = yn(r.charCodeAt(c++)), l = yn(r.charCodeAt(c++));
    if (h === void 0 || l === void 0)
      throw new ee(`Invalid byte sequence ("${r[c - 2]}${r[c - 1]}" in "${r}").`);
    o[a] = h * 16 + l;
  }
  return o;
}
function Dh(t, e = {}) {
  const { size: s } = e, i = Bh.encode(t);
  return typeof s == "number" ? (Eh(i, s), jh(i, s)) : i;
}
function jh(t, e) {
  return Ih(t, { dir: "right", size: e });
}
function bn(t) {
  return t.length;
}
function Mh(t) {
  try {
    return qh(t), !0;
  } catch {
    return !1;
  }
}
class Hs extends ee {
  constructor(e) {
    super(`Value \`${typeof e == "object" ? zr(e) : e}\` of type \`${typeof e}\` is an invalid Bytes value.`, {
      metaMessages: ["Bytes values must be of type `Bytes`."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Bytes.InvalidBytesTypeError"
    });
  }
}
class Lh extends ee {
  constructor({ givenSize: e, maxSize: s }) {
    super(`Size cannot exceed \`${s}\` bytes. Given size: \`${e}\` bytes.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Bytes.SizeOverflowError"
    });
  }
}
class zh extends ee {
  constructor({ size: e, targetSize: s, type: i }) {
    super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${s}\`).`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Bytes.SizeExceedsPaddingSizeError"
    });
  }
}
function Wo(t, e = {}) {
  const { as: s = typeof t == "string" ? "Hex" : "Bytes" } = e, i = Zc(kh(t));
  return s === "Bytes" ? i : ci(i);
}
class Vh extends Map {
  constructor(e) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = e;
  }
  get(e) {
    const s = super.get(e);
    return super.has(e) && s !== void 0 && (this.delete(e), super.set(e, s)), s;
  }
  set(e, s) {
    if (super.set(e, s), this.maxSize && this.size > this.maxSize) {
      const i = this.keys().next().value;
      i && this.delete(i);
    }
    return this;
  }
}
const Kh = {
  checksum: /* @__PURE__ */ new Vh(8192)
}, Fi = Kh.checksum;
function Zo(t, e = {}) {
  const { compressed: s } = e, { prefix: i, x: r, y: n } = t;
  if (s === !1 || typeof r == "bigint" && typeof n == "bigint") {
    if (i !== 4)
      throw new vn({
        prefix: i,
        cause: new Qh()
      });
    return;
  }
  if (s === !0 || typeof r == "bigint" && typeof n > "u") {
    if (i !== 3 && i !== 2)
      throw new vn({
        prefix: i,
        cause: new Yh()
      });
    return;
  }
  throw new Zh({ publicKey: t });
}
function Hh(t) {
  const e = (() => {
    if (Rh(t))
      return Yo(t);
    if (Mh(t))
      return Gh(t);
    const { prefix: s, x: i, y: r } = t;
    return typeof i == "bigint" && typeof r == "bigint" ? { prefix: s ?? 4, x: i, y: r } : { prefix: s, x: i };
  })();
  return Zo(e), e;
}
function Gh(t) {
  return Yo(ci(t));
}
function Yo(t) {
  if (t.length !== 132 && t.length !== 130 && t.length !== 68)
    throw new Jh({ publicKey: t });
  if (t.length === 130) {
    const i = BigInt(lt(t, 0, 32)), r = BigInt(lt(t, 32, 64));
    return {
      prefix: 4,
      x: i,
      y: r
    };
  }
  if (t.length === 132) {
    const i = Number(lt(t, 0, 1)), r = BigInt(lt(t, 1, 33)), n = BigInt(lt(t, 33, 65));
    return {
      prefix: i,
      x: r,
      y: n
    };
  }
  const e = Number(lt(t, 0, 1)), s = BigInt(lt(t, 1, 33));
  return {
    prefix: e,
    x: s
  };
}
function Wh(t, e = {}) {
  Zo(t);
  const { prefix: s, x: i, y: r } = t, { includePrefix: n = !0 } = e;
  return Oh(
    n ? ki(s, { size: 1 }) : "0x",
    ki(i, { size: 32 }),
    // If the public key is not compressed, add the y coordinate.
    typeof r == "bigint" ? ki(r, { size: 32 }) : "0x"
  );
}
class Zh extends ee {
  constructor({ publicKey: e }) {
    super(`Value \`${zr(e)}\` is not a valid public key.`, {
      metaMessages: [
        "Public key must contain:",
        "- an `x` and `prefix` value (compressed)",
        "- an `x`, `y`, and `prefix` value (uncompressed)"
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "PublicKey.InvalidError"
    });
  }
}
class vn extends ee {
  constructor({ prefix: e, cause: s }) {
    super(`Prefix "${e}" is invalid.`, {
      cause: s
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "PublicKey.InvalidPrefixError"
    });
  }
}
class Yh extends ee {
  constructor() {
    super("Prefix must be 2 or 3 for compressed public keys."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "PublicKey.InvalidCompressedPrefixError"
    });
  }
}
class Qh extends ee {
  constructor() {
    super("Prefix must be 4 for uncompressed public keys."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "PublicKey.InvalidUncompressedPrefixError"
    });
  }
}
let Jh = class extends ee {
  constructor({ publicKey: e }) {
    super(`Value \`${e}\` is an invalid public key size.`, {
      metaMessages: [
        "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
        `Received ${Nt(Vr(e))} bytes.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "PublicKey.InvalidSerializedSizeError"
    });
  }
};
const Xh = /^0x[a-fA-F0-9]{40}$/;
function Qo(t, e = {}) {
  const { strict: s = !0 } = e;
  if (!Xh.test(t))
    throw new En({
      address: t,
      cause: new sl()
    });
  if (s) {
    if (t.toLowerCase() === t)
      return;
    if (Jo(t) !== t)
      throw new En({
        address: t,
        cause: new il()
      });
  }
}
function Jo(t) {
  if (Fi.has(t))
    return Fi.get(t);
  Qo(t, { strict: !1 });
  const e = t.substring(2).toLowerCase(), s = Wo(Dh(e), { as: "Bytes" }), i = e.split("");
  for (let n = 0; n < 40; n += 2)
    s[n >> 1] >> 4 >= 8 && i[n] && (i[n] = i[n].toUpperCase()), (s[n >> 1] & 15) >= 8 && i[n + 1] && (i[n + 1] = i[n + 1].toUpperCase());
  const r = `0x${i.join("")}`;
  return Fi.set(t, r), r;
}
function el(t, e = {}) {
  const { checksum: s = !1 } = e;
  return Qo(t), s ? Jo(t) : t;
}
function tl(t, e = {}) {
  const s = Wo(`0x${Wh(t).slice(4)}`).substring(26);
  return el(`0x${s}`, e);
}
class En extends ee {
  constructor({ address: e, cause: s }) {
    super(`Address "${e}" is invalid.`, {
      cause: s
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Address.InvalidAddressError"
    });
  }
}
class sl extends ee {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Address.InvalidInputError"
    });
  }
}
class il extends ee {
  constructor() {
    super("Address does not match its checksum counterpart."), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Address.InvalidChecksumError"
    });
  }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const xe = BigInt(0), ye = BigInt(1), zt = /* @__PURE__ */ BigInt(2), rl = /* @__PURE__ */ BigInt(3), Xo = /* @__PURE__ */ BigInt(4), ea = /* @__PURE__ */ BigInt(5), ta = /* @__PURE__ */ BigInt(8);
function Ee(t, e) {
  const s = t % e;
  return s >= xe ? s : e + s;
}
function Te(t, e, s) {
  let i = t;
  for (; e-- > xe; )
    i *= i, i %= s;
  return i;
}
function pr(t, e) {
  if (t === xe)
    throw new Error("invert: expected non-zero number");
  if (e <= xe)
    throw new Error("invert: expected positive modulus, got " + e);
  let s = Ee(t, e), i = e, r = xe, n = ye;
  for (; s !== xe; ) {
    const a = i / s, c = i % s, h = r - n * a;
    i = s, s = c, r = n, n = h;
  }
  if (i !== ye)
    throw new Error("invert: does not exist");
  return Ee(r, e);
}
function sa(t, e) {
  const s = (t.ORDER + ye) / Xo, i = t.pow(e, s);
  if (!t.eql(t.sqr(i), e))
    throw new Error("Cannot find square root");
  return i;
}
function nl(t, e) {
  const s = (t.ORDER - ea) / ta, i = t.mul(e, zt), r = t.pow(i, s), n = t.mul(e, r), o = t.mul(t.mul(n, zt), r), a = t.mul(n, t.sub(o, t.ONE));
  if (!t.eql(t.sqr(a), e))
    throw new Error("Cannot find square root");
  return a;
}
function ol(t) {
  if (t < BigInt(3))
    throw new Error("sqrt is not defined for small field");
  let e = t - ye, s = 0;
  for (; e % zt === xe; )
    e /= zt, s++;
  let i = zt;
  const r = Kr(t);
  for (; In(r, i) === 1; )
    if (i++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (s === 1)
    return sa;
  let n = r.pow(i, e);
  const o = (e + ye) / zt;
  return function(c, h) {
    if (c.is0(h))
      return h;
    if (In(c, h) !== 1)
      throw new Error("Cannot find square root");
    let l = s, u = c.mul(c.ONE, n), d = c.pow(h, e), f = c.pow(h, o);
    for (; !c.eql(d, c.ONE); ) {
      if (c.is0(d))
        return c.ZERO;
      let p = 1, g = c.sqr(d);
      for (; !c.eql(g, c.ONE); )
        if (p++, g = c.sqr(g), p === l)
          throw new Error("Cannot find square root");
      const m = ye << BigInt(l - p - 1), O = c.pow(u, m);
      l = p, u = c.sqr(O), d = c.mul(d, u), f = c.mul(f, O);
    }
    return f;
  };
}
function al(t) {
  return t % Xo === rl ? sa : t % ta === ea ? nl : ol(t);
}
const cl = [
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
function hl(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, s = cl.reduce((i, r) => (i[r] = "function", i), e);
  return Ei(t, s);
}
function ll(t, e, s) {
  if (s < xe)
    throw new Error("invalid exponent, negatives unsupported");
  if (s === xe)
    return t.ONE;
  if (s === ye)
    return e;
  let i = t.ONE, r = e;
  for (; s > xe; )
    s & ye && (i = t.mul(i, r)), r = t.sqr(r), s >>= ye;
  return i;
}
function ia(t, e, s = !1) {
  const i = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (i[c] = o, t.mul(o, a)), t.ONE), n = t.inv(r);
  return e.reduceRight((o, a, c) => t.is0(a) ? o : (i[c] = t.mul(o, i[c]), t.mul(o, a)), n), i;
}
function In(t, e) {
  const s = (t.ORDER - ye) / zt, i = t.pow(e, s), r = t.eql(i, t.ONE), n = t.eql(i, t.ZERO), o = t.eql(i, t.neg(t.ONE));
  if (!r && !n && !o)
    throw new Error("invalid Legendre symbol result");
  return r ? 1 : n ? 0 : -1;
}
function ra(t, e) {
  e !== void 0 && Yc(e);
  const s = e !== void 0 ? e : t.toString(2).length, i = Math.ceil(s / 8);
  return { nBitLength: s, nByteLength: i };
}
function Kr(t, e, s = !1, i = {}) {
  if (t <= xe)
    throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: r, nByteLength: n } = ra(t, e);
  if (n > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let o;
  const a = Object.freeze({
    ORDER: t,
    isLE: s,
    BITS: r,
    BYTES: n,
    MASK: vi(r),
    ZERO: xe,
    ONE: ye,
    create: (c) => Ee(c, t),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof c);
      return xe <= c && c < t;
    },
    is0: (c) => c === xe,
    isOdd: (c) => (c & ye) === ye,
    neg: (c) => Ee(-c, t),
    eql: (c, h) => c === h,
    sqr: (c) => Ee(c * c, t),
    add: (c, h) => Ee(c + h, t),
    sub: (c, h) => Ee(c - h, t),
    mul: (c, h) => Ee(c * h, t),
    pow: (c, h) => ll(a, c, h),
    div: (c, h) => Ee(c * pr(h, t), t),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, h) => c + h,
    subN: (c, h) => c - h,
    mulN: (c, h) => c * h,
    inv: (c) => pr(c, t),
    sqrt: i.sqrt || ((c) => (o || (o = al(t)), o(a, c))),
    toBytes: (c) => s ? zo(c, n) : Us(c, n),
    fromBytes: (c) => {
      if (c.length !== n)
        throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
      return s ? Lo(c) : Wt(c);
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (c) => ia(a, c),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (c, h, l) => l ? h : c
  });
  return Object.freeze(a);
}
function na(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function oa(t) {
  const e = na(t);
  return e + Math.ceil(e / 2);
}
function ul(t, e, s = !1) {
  const i = t.length, r = na(e), n = oa(e);
  if (i < 16 || i < n || i > 1024)
    throw new Error("expected " + n + "-1024 bytes of input, got " + i);
  const o = s ? Lo(t) : Wt(t), a = Ee(o, e - ye) + ye;
  return s ? zo(a, r) : Us(a, r);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _n = BigInt(0), gr = BigInt(1);
function Ui(t, e) {
  const s = e.negate();
  return t ? s : e;
}
function aa(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e)
    throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Di(t, e) {
  aa(t, e);
  const s = Math.ceil(e / t) + 1, i = 2 ** (t - 1), r = 2 ** t, n = vi(t), o = BigInt(t);
  return { windows: s, windowSize: i, mask: n, maxNumber: r, shiftBy: o };
}
function xn(t, e, s) {
  const { windowSize: i, mask: r, maxNumber: n, shiftBy: o } = s;
  let a = Number(t & r), c = t >> o;
  a > i && (a -= n, c += gr);
  const h = e * i, l = h + Math.abs(a) - 1, u = a === 0, d = a < 0, f = e % 2 !== 0;
  return { nextN: c, offset: l, isZero: u, isNeg: d, isNegF: f, offsetF: h };
}
function dl(t, e) {
  if (!Array.isArray(t))
    throw new Error("array expected");
  t.forEach((s, i) => {
    if (!(s instanceof e))
      throw new Error("invalid point at index " + i);
  });
}
function fl(t, e) {
  if (!Array.isArray(t))
    throw new Error("array of scalars expected");
  t.forEach((s, i) => {
    if (!e.isValid(s))
      throw new Error("invalid scalar at index " + i);
  });
}
const ji = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap();
function Mi(t) {
  return ca.get(t) || 1;
}
function pl(t, e) {
  return {
    constTimeNegate: Ui,
    hasPrecomputes(s) {
      return Mi(s) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(s, i, r = t.ZERO) {
      let n = s;
      for (; i > _n; )
        i & gr && (r = r.add(n)), n = n.double(), i >>= gr;
      return r;
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
    precomputeWindow(s, i) {
      const { windows: r, windowSize: n } = Di(i, e), o = [];
      let a = s, c = a;
      for (let h = 0; h < r; h++) {
        c = a, o.push(c);
        for (let l = 1; l < n; l++)
          c = c.add(a), o.push(c);
        a = c.double();
      }
      return o;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, i, r) {
      let n = t.ZERO, o = t.BASE;
      const a = Di(s, e);
      for (let c = 0; c < a.windows; c++) {
        const { nextN: h, offset: l, isZero: u, isNeg: d, isNegF: f, offsetF: p } = xn(r, c, a);
        r = h, u ? o = o.add(Ui(f, i[p])) : n = n.add(Ui(d, i[l]));
      }
      return { p: n, f: o };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(s, i, r, n = t.ZERO) {
      const o = Di(s, e);
      for (let a = 0; a < o.windows && r !== _n; a++) {
        const { nextN: c, offset: h, isZero: l, isNeg: u } = xn(r, a, o);
        if (r = c, !l) {
          const d = i[h];
          n = n.add(u ? d.negate() : d);
        }
      }
      return n;
    },
    getPrecomputes(s, i, r) {
      let n = ji.get(i);
      return n || (n = this.precomputeWindow(i, s), s !== 1 && ji.set(i, r(n))), n;
    },
    wNAFCached(s, i, r) {
      const n = Mi(s);
      return this.wNAF(n, this.getPrecomputes(n, s, r), i);
    },
    wNAFCachedUnsafe(s, i, r, n) {
      const o = Mi(s);
      return o === 1 ? this.unsafeLadder(s, i, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, s, r), i, n);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(s, i) {
      aa(i, e), ca.set(s, i), ji.delete(s);
    }
  };
}
function gl(t, e, s, i) {
  dl(s, t), fl(i, e);
  const r = s.length, n = i.length;
  if (r !== n)
    throw new Error("arrays of points and scalars must have equal length");
  const o = t.ZERO, a = wh(BigInt(r));
  let c = 1;
  a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
  const h = vi(c), l = new Array(Number(h) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
  let d = o;
  for (let f = u; f >= 0; f -= c) {
    l.fill(o);
    for (let g = 0; g < n; g++) {
      const m = i[g], O = Number(m >> BigInt(f) & h);
      l[O] = l[O].add(s[g]);
    }
    let p = o;
    for (let g = l.length - 1, m = o; g > 0; g--)
      m = m.add(l[g]), p = p.add(m);
    if (d = d.add(p), f !== 0)
      for (let g = 0; g < c; g++)
        d = d.double();
  }
  return d;
}
function ha(t) {
  return hl(t.Fp), Ei(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...ra(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Sn(t) {
  t.lowS !== void 0 && Cs("lowS", t.lowS), t.prehash !== void 0 && Cs("prehash", t.prehash);
}
function yl(t) {
  const e = ha(t);
  Ei(e, {
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
  const { endo: s, Fp: i, a: r } = e;
  if (s) {
    if (!i.eql(r, i.ZERO))
      throw new Error("invalid endo: CURVE.a must be 0");
    if (typeof s != "object" || typeof s.beta != "bigint" || typeof s.splitScalar != "function")
      throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
  }
  return Object.freeze({ ...e });
}
class ml extends Error {
  constructor(e = "") {
    super(e);
  }
}
const ut = {
  // asn.1 DER encoding utils
  Err: ml,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (t, e) => {
      const { Err: s } = ut;
      if (t < 0 || t > 256)
        throw new s("tlv.encode: wrong tag");
      if (e.length & 1)
        throw new s("tlv.encode: unpadded data");
      const i = e.length / 2, r = Ks(i);
      if (r.length / 2 & 128)
        throw new s("tlv.encode: long form length too big");
      const n = i > 127 ? Ks(r.length / 2 | 128) : "";
      return Ks(t) + n + r + e;
    },
    // v - value, l - left bytes (unparsed)
    decode(t, e) {
      const { Err: s } = ut;
      let i = 0;
      if (t < 0 || t > 256)
        throw new s("tlv.encode: wrong tag");
      if (e.length < 2 || e[i++] !== t)
        throw new s("tlv.decode: wrong tlv");
      const r = e[i++], n = !!(r & 128);
      let o = 0;
      if (!n)
        o = r;
      else {
        const c = r & 127;
        if (!c)
          throw new s("tlv.decode(long): indefinite length not supported");
        if (c > 4)
          throw new s("tlv.decode(long): byte length is too big");
        const h = e.subarray(i, i + c);
        if (h.length !== c)
          throw new s("tlv.decode: length bytes not complete");
        if (h[0] === 0)
          throw new s("tlv.decode(long): zero leftmost byte");
        for (const l of h)
          o = o << 8 | l;
        if (i += c, o < 128)
          throw new s("tlv.decode(long): not minimal encoding");
      }
      const a = e.subarray(i, i + o);
      if (a.length !== o)
        throw new s("tlv.decode: wrong value length");
      return { v: a, l: e.subarray(i + o) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(t) {
      const { Err: e } = ut;
      if (t < ft)
        throw new e("integer: negative integers are not allowed");
      let s = Ks(t);
      if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1)
        throw new e("unexpected DER parsing assertion: unpadded hex");
      return s;
    },
    decode(t) {
      const { Err: e } = ut;
      if (t[0] & 128)
        throw new e("invalid signature integer: negative");
      if (t[0] === 0 && !(t[1] & 128))
        throw new e("invalid signature integer: unnecessary leading zero");
      return Wt(t);
    }
  },
  toSig(t) {
    const { Err: e, _int: s, _tlv: i } = ut, r = ke("signature", t), { v: n, l: o } = i.decode(48, r);
    if (o.length)
      throw new e("invalid signature: left bytes after parsing");
    const { v: a, l: c } = i.decode(2, n), { v: h, l } = i.decode(2, c);
    if (l.length)
      throw new e("invalid signature: left bytes after parsing");
    return { r: s.decode(a), s: s.decode(h) };
  },
  hexFromSig(t) {
    const { _tlv: e, _int: s } = ut, i = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), n = i + r;
    return e.encode(48, n);
  }
};
function Li(t, e) {
  return Ns(Us(t, e));
}
const ft = BigInt(0), oe = BigInt(1);
BigInt(2);
const zi = BigInt(3), wl = BigInt(4);
function bl(t) {
  const e = yl(t), { Fp: s } = e, i = Kr(e.n, e.nBitLength), r = e.toBytes || ((P, _, R) => {
    const C = _.toAffine();
    return ai(Uint8Array.from([4]), s.toBytes(C.x), s.toBytes(C.y));
  }), n = e.fromBytes || ((P) => {
    const _ = P.subarray(1), R = s.fromBytes(_.subarray(0, s.BYTES)), C = s.fromBytes(_.subarray(s.BYTES, 2 * s.BYTES));
    return { x: R, y: C };
  });
  function o(P) {
    const { a: _, b: R } = e, C = s.sqr(P), q = s.mul(C, P);
    return s.add(s.add(q, s.mul(P, _)), R);
  }
  function a(P, _) {
    const R = s.sqr(_), C = o(P);
    return s.eql(R, C);
  }
  if (!a(e.Gx, e.Gy))
    throw new Error("bad curve params: generator point");
  const c = s.mul(s.pow(e.a, zi), wl), h = s.mul(s.sqr(e.b), BigInt(27));
  if (s.is0(s.add(c, h)))
    throw new Error("bad curve params: a or b");
  function l(P) {
    return Lr(P, oe, e.n);
  }
  function u(P) {
    const { allowedPrivateKeyLengths: _, nByteLength: R, wrapPrivateKey: C, n: q } = e;
    if (_ && typeof P != "bigint") {
      if (Fs(P) && (P = Ns(P)), typeof P != "string" || !_.includes(P.length))
        throw new Error("invalid private key");
      P = P.padStart(R * 2, "0");
    }
    let N;
    try {
      N = typeof P == "bigint" ? P : Wt(ke("private key", P, R));
    } catch {
      throw new Error("invalid private key, expected hex or " + R + " bytes, got " + typeof P);
    }
    return C && (N = Ee(N, q)), as("private key", N, oe, q), N;
  }
  function d(P) {
    if (!(P instanceof g))
      throw new Error("ProjectivePoint expected");
  }
  const f = gn((P, _) => {
    const { px: R, py: C, pz: q } = P;
    if (s.eql(q, s.ONE))
      return { x: R, y: C };
    const N = P.is0();
    _ == null && (_ = N ? s.ONE : s.inv(q));
    const A = s.mul(R, _), T = s.mul(C, _), F = s.mul(q, _);
    if (N)
      return { x: s.ZERO, y: s.ZERO };
    if (!s.eql(F, s.ONE))
      throw new Error("invZ was invalid");
    return { x: A, y: T };
  }), p = gn((P) => {
    if (P.is0()) {
      if (e.allowInfinityPoint && !s.is0(P.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: _, y: R } = P.toAffine();
    if (!s.isValid(_) || !s.isValid(R))
      throw new Error("bad point: x or y not FE");
    if (!a(_, R))
      throw new Error("bad point: equation left != right");
    if (!P.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class g {
    constructor(_, R, C) {
      if (_ == null || !s.isValid(_))
        throw new Error("x required");
      if (R == null || !s.isValid(R) || s.is0(R))
        throw new Error("y required");
      if (C == null || !s.isValid(C))
        throw new Error("z required");
      this.px = _, this.py = R, this.pz = C, Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(_) {
      const { x: R, y: C } = _ || {};
      if (!_ || !s.isValid(R) || !s.isValid(C))
        throw new Error("invalid affine point");
      if (_ instanceof g)
        throw new Error("projective point not allowed");
      const q = (N) => s.eql(N, s.ZERO);
      return q(R) && q(C) ? g.ZERO : new g(R, C, s.ONE);
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
    static normalizeZ(_) {
      const R = ia(s, _.map((C) => C.pz));
      return _.map((C, q) => C.toAffine(R[q])).map(g.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(_) {
      const R = g.fromAffine(n(ke("pointHex", _)));
      return R.assertValidity(), R;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(_) {
      return g.BASE.multiply(u(_));
    }
    // Multiscalar Multiplication
    static msm(_, R) {
      return gl(g, i, _, R);
    }
    // "Private method", don't use it directly
    _setWindowSize(_) {
      k.setWindowSize(this, _);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      p(this);
    }
    hasEvenY() {
      const { y: _ } = this.toAffine();
      if (s.isOdd)
        return !s.isOdd(_);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(_) {
      d(_);
      const { px: R, py: C, pz: q } = this, { px: N, py: A, pz: T } = _, F = s.eql(s.mul(R, T), s.mul(N, q)), S = s.eql(s.mul(C, T), s.mul(A, q));
      return F && S;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new g(this.px, s.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: _, b: R } = e, C = s.mul(R, zi), { px: q, py: N, pz: A } = this;
      let T = s.ZERO, F = s.ZERO, S = s.ZERO, b = s.mul(q, q), E = s.mul(N, N), y = s.mul(A, A), w = s.mul(q, N);
      return w = s.add(w, w), S = s.mul(q, A), S = s.add(S, S), T = s.mul(_, S), F = s.mul(C, y), F = s.add(T, F), T = s.sub(E, F), F = s.add(E, F), F = s.mul(T, F), T = s.mul(w, T), S = s.mul(C, S), y = s.mul(_, y), w = s.sub(b, y), w = s.mul(_, w), w = s.add(w, S), S = s.add(b, b), b = s.add(S, b), b = s.add(b, y), b = s.mul(b, w), F = s.add(F, b), y = s.mul(N, A), y = s.add(y, y), b = s.mul(y, w), T = s.sub(T, b), S = s.mul(y, E), S = s.add(S, S), S = s.add(S, S), new g(T, F, S);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(_) {
      d(_);
      const { px: R, py: C, pz: q } = this, { px: N, py: A, pz: T } = _;
      let F = s.ZERO, S = s.ZERO, b = s.ZERO;
      const E = e.a, y = s.mul(e.b, zi);
      let w = s.mul(R, N), I = s.mul(C, A), $ = s.mul(q, T), v = s.add(R, C), x = s.add(N, A);
      v = s.mul(v, x), x = s.add(w, I), v = s.sub(v, x), x = s.add(R, q);
      let B = s.add(N, T);
      return x = s.mul(x, B), B = s.add(w, $), x = s.sub(x, B), B = s.add(C, q), F = s.add(A, T), B = s.mul(B, F), F = s.add(I, $), B = s.sub(B, F), b = s.mul(E, x), F = s.mul(y, $), b = s.add(F, b), F = s.sub(I, b), b = s.add(I, b), S = s.mul(F, b), I = s.add(w, w), I = s.add(I, w), $ = s.mul(E, $), x = s.mul(y, x), I = s.add(I, $), $ = s.sub(w, $), $ = s.mul(E, $), x = s.add(x, $), w = s.mul(I, x), S = s.add(S, w), w = s.mul(B, x), F = s.mul(v, F), F = s.sub(F, w), w = s.mul(v, I), b = s.mul(B, b), b = s.add(b, w), new g(F, S, b);
    }
    subtract(_) {
      return this.add(_.negate());
    }
    is0() {
      return this.equals(g.ZERO);
    }
    wNAF(_) {
      return k.wNAFCached(this, _, g.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(_) {
      const { endo: R, n: C } = e;
      as("scalar", _, ft, C);
      const q = g.ZERO;
      if (_ === ft)
        return q;
      if (this.is0() || _ === oe)
        return this;
      if (!R || k.hasPrecomputes(this))
        return k.wNAFCachedUnsafe(this, _, g.normalizeZ);
      let { k1neg: N, k1: A, k2neg: T, k2: F } = R.splitScalar(_), S = q, b = q, E = this;
      for (; A > ft || F > ft; )
        A & oe && (S = S.add(E)), F & oe && (b = b.add(E)), E = E.double(), A >>= oe, F >>= oe;
      return N && (S = S.negate()), T && (b = b.negate()), b = new g(s.mul(b.px, R.beta), b.py, b.pz), S.add(b);
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
    multiply(_) {
      const { endo: R, n: C } = e;
      as("scalar", _, oe, C);
      let q, N;
      if (R) {
        const { k1neg: A, k1: T, k2neg: F, k2: S } = R.splitScalar(_);
        let { p: b, f: E } = this.wNAF(T), { p: y, f: w } = this.wNAF(S);
        b = k.constTimeNegate(A, b), y = k.constTimeNegate(F, y), y = new g(s.mul(y.px, R.beta), y.py, y.pz), q = b.add(y), N = E.add(w);
      } else {
        const { p: A, f: T } = this.wNAF(_);
        q = A, N = T;
      }
      return g.normalizeZ([q, N])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(_, R, C) {
      const q = g.BASE, N = (T, F) => F === ft || F === oe || !T.equals(q) ? T.multiplyUnsafe(F) : T.multiply(F), A = N(this, R).add(N(_, C));
      return A.is0() ? void 0 : A;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(_) {
      return f(this, _);
    }
    isTorsionFree() {
      const { h: _, isTorsionFree: R } = e;
      if (_ === oe)
        return !0;
      if (R)
        return R(g, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: _, clearCofactor: R } = e;
      return _ === oe ? this : R ? R(g, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(_ = !0) {
      return Cs("isCompressed", _), this.assertValidity(), r(g, this, _);
    }
    toHex(_ = !0) {
      return Cs("isCompressed", _), Ns(this.toRawBytes(_));
    }
  }
  g.BASE = new g(e.Gx, e.Gy, s.ONE), g.ZERO = new g(s.ZERO, s.ONE, s.ZERO);
  const { endo: m, nBitLength: O } = e, k = pl(g, m ? Math.ceil(O / 2) : O);
  return {
    CURVE: e,
    ProjectivePoint: g,
    normPrivateKeyToScalar: u,
    weierstrassEquation: o,
    isWithinCurveOrder: l
  };
}
function vl(t) {
  const e = ha(t);
  return Ei(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function El(t) {
  const e = vl(t), { Fp: s, n: i, nByteLength: r, nBitLength: n } = e, o = s.BYTES + 1, a = 2 * s.BYTES + 1;
  function c(y) {
    return Ee(y, i);
  }
  function h(y) {
    return pr(y, i);
  }
  const { ProjectivePoint: l, normPrivateKeyToScalar: u, weierstrassEquation: d, isWithinCurveOrder: f } = bl({
    ...e,
    toBytes(y, w, I) {
      const $ = w.toAffine(), v = s.toBytes($.x), x = ai;
      return Cs("isCompressed", I), I ? x(Uint8Array.from([w.hasEvenY() ? 2 : 3]), v) : x(Uint8Array.from([4]), v, s.toBytes($.y));
    },
    fromBytes(y) {
      const w = y.length, I = y[0], $ = y.subarray(1);
      if (w === o && (I === 2 || I === 3)) {
        const v = Wt($);
        if (!Lr(v, oe, s.ORDER))
          throw new Error("Point is not on curve");
        const x = d(v);
        let B;
        try {
          B = s.sqrt(x);
        } catch (z) {
          const L = z instanceof Error ? ": " + z.message : "";
          throw new Error("Point is not on curve" + L);
        }
        const U = (B & oe) === oe;
        return (I & 1) === 1 !== U && (B = s.neg(B)), { x: v, y: B };
      } else if (w === a && I === 4) {
        const v = s.fromBytes($.subarray(0, s.BYTES)), x = s.fromBytes($.subarray(s.BYTES, 2 * s.BYTES));
        return { x: v, y: x };
      } else {
        const v = o, x = a;
        throw new Error("invalid Point, expected length of " + v + ", or uncompressed " + x + ", got " + w);
      }
    }
  });
  function p(y) {
    const w = i >> oe;
    return y > w;
  }
  function g(y) {
    return p(y) ? c(-y) : y;
  }
  const m = (y, w, I) => Wt(y.slice(w, I));
  class O {
    constructor(w, I, $) {
      as("r", w, oe, i), as("s", I, oe, i), this.r = w, this.s = I, $ != null && (this.recovery = $), Object.freeze(this);
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(w) {
      const I = r;
      return w = ke("compactSignature", w, I * 2), new O(m(w, 0, I), m(w, I, 2 * I));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(w) {
      const { r: I, s: $ } = ut.toSig(ke("DER", w));
      return new O(I, $);
    }
    /**
     * @todo remove
     * @deprecated
     */
    assertValidity() {
    }
    addRecoveryBit(w) {
      return new O(this.r, this.s, w);
    }
    recoverPublicKey(w) {
      const { r: I, s: $, recovery: v } = this, x = q(ke("msgHash", w));
      if (v == null || ![0, 1, 2, 3].includes(v))
        throw new Error("recovery id invalid");
      const B = v === 2 || v === 3 ? I + e.n : I;
      if (B >= s.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const U = (v & 1) === 0 ? "02" : "03", V = l.fromHex(U + Li(B, s.BYTES)), z = h(B), L = c(-x * z), H = c($ * z), G = l.BASE.multiplyAndAddUnsafe(V, L, H);
      if (!G)
        throw new Error("point at infinify");
      return G.assertValidity(), G;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return p(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new O(this.r, c(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return oi(this.toDERHex());
    }
    toDERHex() {
      return ut.hexFromSig(this);
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return oi(this.toCompactHex());
    }
    toCompactHex() {
      const w = r;
      return Li(this.r, w) + Li(this.s, w);
    }
  }
  const k = {
    isValidPrivateKey(y) {
      try {
        return u(y), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const y = oa(e.n);
      return ul(e.randomBytes(y), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(y = 8, w = l.BASE) {
      return w._setWindowSize(y), w.multiply(BigInt(3)), w;
    }
  };
  function P(y, w = !0) {
    return l.fromPrivateKey(y).toRawBytes(w);
  }
  function _(y) {
    if (typeof y == "bigint")
      return !1;
    if (y instanceof l)
      return !0;
    const I = ke("key", y).length, $ = s.BYTES, v = $ + 1, x = 2 * $ + 1;
    if (!(e.allowedPrivateKeyLengths || r === v))
      return I === v || I === x;
  }
  function R(y, w, I = !0) {
    if (_(y) === !0)
      throw new Error("first arg must be private key");
    if (_(w) === !1)
      throw new Error("second arg must be public key");
    return l.fromHex(w).multiply(u(y)).toRawBytes(I);
  }
  const C = e.bits2int || function(y) {
    if (y.length > 8192)
      throw new Error("input is too large");
    const w = Wt(y), I = y.length * 8 - n;
    return I > 0 ? w >> BigInt(I) : w;
  }, q = e.bits2int_modN || function(y) {
    return c(C(y));
  }, N = vi(n);
  function A(y) {
    return as("num < 2^" + n, y, ft, N), Us(y, r);
  }
  function T(y, w, I = F) {
    if (["recovered", "canonical"].some((K) => K in I))
      throw new Error("sign() legacy options not supported");
    const { hash: $, randomBytes: v } = e;
    let { lowS: x, prehash: B, extraEntropy: U } = I;
    x == null && (x = !0), y = ke("msgHash", y), Sn(I), B && (y = ke("prehashed msgHash", $(y)));
    const V = q(y), z = u(w), L = [A(z), A(V)];
    if (U != null && U !== !1) {
      const K = U === !0 ? v(s.BYTES) : U;
      L.push(ke("extraEntropy", K));
    }
    const H = ai(...L), G = V;
    function Q(K) {
      const Y = C(K);
      if (!f(Y))
        return;
      const pe = h(Y), be = l.BASE.multiply(Y).toAffine(), ge = c(be.x);
      if (ge === ft)
        return;
      const Ne = c(pe * c(G + ge * z));
      if (Ne === ft)
        return;
      let Ft = (be.x === ge ? 0 : 2) | Number(be.y & oe), Xt = Ne;
      return x && p(Ne) && (Xt = g(Ne), Ft ^= 1), new O(ge, Xt, Ft);
    }
    return { seed: H, k2sig: Q };
  }
  const F = { lowS: e.lowS, prehash: !1 }, S = { lowS: e.lowS, prehash: !1 };
  function b(y, w, I = F) {
    const { seed: $, k2sig: v } = T(y, w, I), x = e;
    return bh(x.hash.outputLen, x.nByteLength, x.hmac)($, v);
  }
  l.BASE._setWindowSize(8);
  function E(y, w, I, $ = S) {
    var Ft;
    const v = y;
    w = ke("msgHash", w), I = ke("publicKey", I);
    const { lowS: x, prehash: B, format: U } = $;
    if (Sn($), "strict" in $)
      throw new Error("options.strict was renamed to lowS");
    if (U !== void 0 && U !== "compact" && U !== "der")
      throw new Error("format must be compact or der");
    const V = typeof v == "string" || Fs(v), z = !V && !U && typeof v == "object" && v !== null && typeof v.r == "bigint" && typeof v.s == "bigint";
    if (!V && !z)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let L, H;
    try {
      if (z && (L = new O(v.r, v.s)), V) {
        try {
          U !== "compact" && (L = O.fromDER(v));
        } catch (Xt) {
          if (!(Xt instanceof ut.Err))
            throw Xt;
        }
        !L && U !== "der" && (L = O.fromCompact(v));
      }
      H = l.fromHex(I);
    } catch {
      return !1;
    }
    if (!L || x && L.hasHighS())
      return !1;
    B && (w = e.hash(w));
    const { r: G, s: Q } = L, K = q(w), Y = h(Q), pe = c(K * Y), be = c(G * Y), ge = (Ft = l.BASE.multiplyAndAddUnsafe(H, pe, be)) == null ? void 0 : Ft.toAffine();
    return ge ? c(ge.x) === G : !1;
  }
  return {
    CURVE: e,
    getPublicKey: P,
    getSharedSecret: R,
    sign: b,
    verify: E,
    ProjectivePoint: l,
    Signature: O,
    utils: k
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Il(t) {
  return {
    hash: t,
    hmac: (e, ...s) => Jc(t, e, Xc(...s)),
    randomBytes: Qc
  };
}
function _l(t, e) {
  const s = (i) => El({ ...t, ...Il(i) });
  return { ...s(e), create: s };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const la = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Pn = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), xl = BigInt(0), Sl = BigInt(1), yr = BigInt(2), An = (t, e) => (t + e / yr) / e;
function Pl(t) {
  const e = la, s = BigInt(3), i = BigInt(6), r = BigInt(11), n = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), h = t * t * t % e, l = h * h * t % e, u = Te(l, s, e) * l % e, d = Te(u, s, e) * l % e, f = Te(d, yr, e) * h % e, p = Te(f, r, e) * f % e, g = Te(p, n, e) * p % e, m = Te(g, a, e) * g % e, O = Te(m, c, e) * m % e, k = Te(O, a, e) * g % e, P = Te(k, s, e) * l % e, _ = Te(P, o, e) * p % e, R = Te(_, i, e) * h % e, C = Te(R, yr, e);
  if (!mr.eql(mr.sqr(C), t))
    throw new Error("Cannot find square root");
  return C;
}
const mr = Kr(la, void 0, void 0, { sqrt: Pl }), Al = _l({
  a: xl,
  b: BigInt(7),
  Fp: mr,
  n: Pn,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  endo: {
    // Endomorphism, see above
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (t) => {
      const e = Pn, s = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), i = -Sl * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), n = s, o = BigInt("0x100000000000000000000000000000000"), a = An(n * t, e), c = An(-i * t, e);
      let h = Ee(t - a * s - c * r, e), l = Ee(-a * i - c * n, e);
      const u = h > o, d = l > o;
      if (u && (h = e - h), d && (l = e - l), h > o || l > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + t);
      return { k1neg: u, k1: h, k2neg: d, k2: l };
    }
  }
}, eh);
function Ol(t) {
  if (t.length !== 130 && t.length !== 132)
    throw new Rl({ signature: t });
  const e = BigInt(lt(t, 0, 32)), s = BigInt(lt(t, 32, 64)), i = (() => {
    const r = +`0x${t.slice(130)}`;
    if (!Number.isNaN(r))
      try {
        return $l(r);
      } catch {
        throw new Cl({ value: r });
      }
  })();
  return typeof i > "u" ? {
    r: e,
    s
  } : {
    r: e,
    s,
    yParity: i
  };
}
function $l(t) {
  if (t === 0 || t === 27)
    return 0;
  if (t === 1 || t === 28)
    return 1;
  if (t >= 35)
    return t % 2 === 0 ? 1 : 0;
  throw new Nl({ value: t });
}
class Rl extends ee {
  constructor({ signature: e }) {
    super(`Value \`${e}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${Nt(Vr(e))} bytes.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
}
class Cl extends ee {
  constructor({ value: e }) {
    super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.InvalidYParityError"
    });
  }
}
class Nl extends ee {
  constructor({ value: e }) {
    super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "Signature.InvalidVError"
    });
  }
}
function Tl(t) {
  return tl(Bl(t));
}
function Bl(t) {
  const { payload: e, signature: s } = t, { r: i, s: r, yParity: n } = s, a = new Al.Signature(BigInt(i), BigInt(r)).addRecoveryBit(n).recoverPublicKey(Vr(e).substring(2));
  return Hh(a);
}
const ql = ":";
function gt(t) {
  const [e, s] = t.split(ql);
  return { namespace: e, reference: s };
}
function On(t, e = []) {
  const s = [];
  return Object.keys(t).forEach((i) => {
    if (e.length && !e.includes(i)) return;
    const r = t[i];
    s.push(...r.accounts);
  }), s;
}
function ua(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const kl = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Fl = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function j(t, e) {
  const { message: s, code: i } = Fl[t];
  return { message: e ? `${s} ${e}` : s, code: i };
}
function X(t, e) {
  const { message: s, code: i } = kl[t];
  return { message: e ? `${s} ${e}` : s, code: i };
}
const Ul = "ReactNative", $e = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Dl = "js";
function hi() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function qt() {
  return !mt.getDocument() && !!mt.getNavigator() && navigator.product === Ul;
}
function jl() {
  return qt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function Ml() {
  return qt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function ys() {
  return !hi() && !!mt.getNavigator() && !!mt.getDocument();
}
function Ds() {
  return qt() ? $e.reactNative : hi() ? $e.node : ys() ? $e.browser : $e.unknown;
}
function $n() {
  var t;
  try {
    return qt() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function Ll(t, e) {
  const s = new URLSearchParams(t);
  return Object.entries(e).sort(([i], [r]) => i.localeCompare(r)).forEach(([i, r]) => {
    r != null && s.set(i, String(r));
  }), s.toString();
}
function zl(t) {
  var s, i;
  const e = da();
  try {
    return t != null && t.url && e.url && new URL(t.url).host !== new URL(e.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${e.url}. This is probably unintended and can lead to issues.`), t.url = e.url), (s = t == null ? void 0 : t.icons) != null && s.length && t.icons.length > 0 && (t.icons = t.icons.filter((r) => r !== "")), { ...e, ...t, url: (t == null ? void 0 : t.url) || e.url, name: (t == null ? void 0 : t.name) || e.name, description: (t == null ? void 0 : t.description) || e.description, icons: (i = t == null ? void 0 : t.icons) != null && i.length && t.icons.length > 0 ? t.icons : e.icons };
  } catch (r) {
    return console.warn("Error populating app metadata", r), t || e;
  }
}
function da() {
  return th.getWindowMetadata() || { name: "", description: "", url: "", icons: [""] };
}
function Vl() {
  if (Ds() === $e.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: s, Version: i } = global.Platform;
    return [s, i].join("-");
  }
  const t = ah();
  if (t === null) return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Kl() {
  var e;
  const t = Ds();
  return t === $e.browser ? [t, ((e = mt.getLocation()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function fa(t, e, s) {
  const i = Vl(), r = Kl();
  return [[t, e].join("-"), [Dl, s].join("-"), i, r].join("/");
}
function Hl({ protocol: t, version: e, relayUrl: s, sdkVersion: i, auth: r, projectId: n, useOnCloseEvent: o, bundleId: a, packageName: c }) {
  const h = s.split("?"), l = fa(t, e, i), u = { auth: r, ua: l, projectId: n, useOnCloseEvent: o, packageName: c || void 0, bundleId: a || void 0 }, d = Ll(h[1] || "", u);
  return h[0] + "?" + d;
}
function Vt(t, e) {
  return t.filter((s) => e.includes(s)).length === t.length;
}
function wr(t) {
  return Object.fromEntries(t.entries());
}
function br(t) {
  return new Map(Object.entries(t));
}
function jt(t = D.FIVE_MINUTES, e) {
  const s = D.toMiliseconds(t || D.FIVE_MINUTES);
  let i, r, n, o;
  return { resolve: (a) => {
    n && i && (clearTimeout(n), i(a), o = Promise.resolve(a));
  }, reject: (a) => {
    n && r && (clearTimeout(n), r(a));
  }, done: () => new Promise((a, c) => {
    if (o) return a(o);
    n = setTimeout(() => {
      const h = j("EXPIRED"), l = new Error(e || h.message);
      l.code = h.code, c(l);
    }, s), i = a, r = c;
  }) };
}
function et(t, e, s) {
  return new Promise(async (i, r) => {
    const n = setTimeout(() => r(new Error(s)), e);
    try {
      const o = await t;
      i(o);
    } catch (o) {
      r(o);
    }
    clearTimeout(n);
  });
}
function pa(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function Gl(t) {
  return pa("topic", t);
}
function Wl(t) {
  return pa("id", t);
}
function ga(t) {
  const [e, s] = t.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof s == "string") i.topic = s;
  else if (e === "id" && Number.isInteger(Number(s))) i.id = Number(s);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
  return i;
}
function se(t, e) {
  return D.fromMiliseconds(Date.now() + D.toMiliseconds(t));
}
function Xe(t) {
  return Date.now() >= D.toMiliseconds(t);
}
function Z(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function tt(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function Zl({ id: t, topic: e, wcDeepLink: s }) {
  var i, r;
  try {
    if (!s) return;
    const n = (i = typeof s == "string" ? JSON.parse(s) : s) == null ? void 0 : i.href;
    if (typeof n != "string") return;
    const o = Yl(n, t, e), a = Ds();
    if (a === $e.browser) {
      if (!((r = mt.getDocument()) != null && r.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      Ql(o);
    } else a === $e.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(o);
  } catch (n) {
    console.error(n);
  }
}
function Yl(t, e, s) {
  const i = `requestId=${e}&sessionTopic=${s}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let r = `${t}`;
  if (t.startsWith("https://t.me")) {
    const n = t.includes("?") ? "&startapp=" : "?startapp=";
    r = `${r}${n}${tu(i, !0)}`;
  } else r = `${r}/wc?${i}`;
  return r;
}
function Ql(t) {
  let e = "_self";
  eu() ? e = "_top" : (Xl() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function Jl(t, e) {
  let s = "";
  try {
    if (ys() && (s = localStorage.getItem(e), s)) return s;
    s = await t.getItem(e);
  } catch (i) {
    console.error(i);
  }
  return s;
}
function Rn(t, e) {
  if (!t.includes(e)) return null;
  const s = t.split(/([&,?,=])/), i = s.indexOf(e);
  return s[i + 2];
}
function Cn() {
  return typeof crypto < "u" && (crypto != null && crypto.randomUUID) ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Hr() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function Xl() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function eu() {
  try {
    return window.self !== window.top;
  } catch {
    return !1;
  }
}
function tu(t, e = !1) {
  const s = Buffer.from(t).toString("base64");
  return e ? s.replace(/[=]/g, "") : s;
}
function ya(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function su(t) {
  return new Promise((e) => setTimeout(e, t));
}
class iu {
  constructor({ limit: e }) {
    this.limit = e, this.set = /* @__PURE__ */ new Set();
  }
  add(e) {
    if (!this.set.has(e)) {
      if (this.set.size >= this.limit) {
        const s = this.set.values().next().value;
        s && this.set.delete(s);
      }
      this.set.add(e);
    }
  }
  has(e) {
    return this.set.has(e);
  }
}
const Gs = BigInt(2 ** 32 - 1), Nn = BigInt(32);
function ma(t, e = !1) {
  return e ? { h: Number(t & Gs), l: Number(t >> Nn & Gs) } : { h: Number(t >> Nn & Gs) | 0, l: Number(t & Gs) | 0 };
}
function wa(t, e = !1) {
  const s = t.length;
  let i = new Uint32Array(s), r = new Uint32Array(s);
  for (let n = 0; n < s; n++) {
    const { h: o, l: a } = ma(t[n], e);
    [i[n], r[n]] = [o, a];
  }
  return [i, r];
}
const Tn = (t, e, s) => t >>> s, Bn = (t, e, s) => t << 32 - s | e >>> s, Pt = (t, e, s) => t >>> s | e << 32 - s, At = (t, e, s) => t << 32 - s | e >>> s, _s = (t, e, s) => t << 64 - s | e >>> s - 32, xs = (t, e, s) => t >>> s - 32 | e << 64 - s, ru = (t, e) => e, nu = (t, e) => t, ou = (t, e, s) => t << s | e >>> 32 - s, au = (t, e, s) => e << s | t >>> 32 - s, cu = (t, e, s) => e << s - 32 | t >>> 64 - s, hu = (t, e, s) => t << s - 32 | e >>> 64 - s;
function Ve(t, e, s, i) {
  const r = (e >>> 0) + (i >>> 0);
  return { h: t + s + (r / 2 ** 32 | 0) | 0, l: r | 0 };
}
const Gr = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), Wr = (t, e, s, i) => e + s + i + (t / 2 ** 32 | 0) | 0, lu = (t, e, s, i) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (i >>> 0), uu = (t, e, s, i, r) => e + s + i + r + (t / 2 ** 32 | 0) | 0, du = (t, e, s, i, r) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (i >>> 0) + (r >>> 0), fu = (t, e, s, i, r, n) => e + s + i + r + n + (t / 2 ** 32 | 0) | 0, es = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ii(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function wt(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Ge(t, ...e) {
  if (!Ii(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function _i(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
  wt(t.outputLen), wt(t.blockLen);
}
function Tt(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Zr(t, e) {
  Ge(t);
  const s = e.outputLen;
  if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
}
function Ts(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function je(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function Vi(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function We(t, e) {
  return t << 32 - e | t >>> e;
}
const ba = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function va(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
const ct = ba ? (t) => t : (t) => va(t);
function pu(t) {
  for (let e = 0; e < t.length; e++) t[e] = va(t[e]);
  return t;
}
const Ot = ba ? (t) => t : pu, Ea = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", gu = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function cs(t) {
  if (Ge(t), Ea) return t.toHex();
  let e = "";
  for (let s = 0; s < t.length; s++) e += gu[t[s]];
  return e;
}
const ot = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function qn(t) {
  if (t >= ot._0 && t <= ot._9) return t - ot._0;
  if (t >= ot.A && t <= ot.F) return t - (ot.A - 10);
  if (t >= ot.a && t <= ot.f) return t - (ot.a - 10);
}
function li(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  if (Ea) return Uint8Array.fromHex(t);
  const e = t.length, s = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const i = new Uint8Array(s);
  for (let r = 0, n = 0; r < s; r++, n += 2) {
    const o = qn(t.charCodeAt(n)), a = qn(t.charCodeAt(n + 1));
    if (o === void 0 || a === void 0) {
      const c = t[n] + t[n + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n);
    }
    i[r] = o * 16 + a;
  }
  return i;
}
function Ia(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function He(t) {
  return typeof t == "string" && (t = Ia(t)), Ge(t), t;
}
function $t(...t) {
  let e = 0;
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    Ge(r), e += r.length;
  }
  const s = new Uint8Array(e);
  for (let i = 0, r = 0; i < t.length; i++) {
    const n = t[i];
    s.set(n, r), r += n.length;
  }
  return s;
}
class xi {
}
function js(t) {
  const e = (i) => t().update(He(i)).digest(), s = t();
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
}
function yu(t) {
  const e = (i, r) => t(r).update(He(i)).digest(), s = t({});
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (i) => t(i), e;
}
function Qt(t = 32) {
  if (es && typeof es.getRandomValues == "function") return es.getRandomValues(new Uint8Array(t));
  if (es && typeof es.randomBytes == "function") return Uint8Array.from(es.randomBytes(t));
  throw new Error("crypto.getRandomValues must be defined");
}
const mu = BigInt(0), ws = BigInt(1), wu = BigInt(2), bu = BigInt(7), vu = BigInt(256), Eu = BigInt(113), _a = [], xa = [], Sa = [];
for (let t = 0, e = ws, s = 1, i = 0; t < 24; t++) {
  [s, i] = [i, (2 * s + 3 * i) % 5], _a.push(2 * (5 * i + s)), xa.push((t + 1) * (t + 2) / 2 % 64);
  let r = mu;
  for (let n = 0; n < 7; n++) e = (e << ws ^ (e >> bu) * Eu) % vu, e & wu && (r ^= ws << (ws << BigInt(n)) - ws);
  Sa.push(r);
}
const Pa = wa(Sa, !0), Iu = Pa[0], _u = Pa[1], kn = (t, e, s) => s > 32 ? cu(t, e, s) : ou(t, e, s), Fn = (t, e, s) => s > 32 ? hu(t, e, s) : au(t, e, s);
function xu(t, e = 24) {
  const s = new Uint32Array(10);
  for (let i = 24 - e; i < 24; i++) {
    for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, h = s[c], l = s[c + 1], u = kn(h, l, 1) ^ s[a], d = Fn(h, l, 1) ^ s[a + 1];
      for (let f = 0; f < 50; f += 10) t[o + f] ^= u, t[o + f + 1] ^= d;
    }
    let r = t[2], n = t[3];
    for (let o = 0; o < 24; o++) {
      const a = xa[o], c = kn(r, n, a), h = Fn(r, n, a), l = _a[o];
      r = t[l], n = t[l + 1], t[l] = c, t[l + 1] = h;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) s[a] = t[o + a];
      for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
    }
    t[0] ^= Iu[i], t[1] ^= _u[i];
  }
  je(s);
}
class Yr extends xi {
  constructor(e, s, i, r = !1, n = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = e, this.suffix = s, this.outputLen = i, this.enableXOF = r, this.rounds = n, wt(i), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = Ts(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    Ot(this.state32), xu(this.state32, this.rounds), Ot(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Tt(this), e = He(e), Ge(e);
    const { blockLen: s, state: i } = this, r = e.length;
    for (let n = 0; n < r; ) {
      const o = Math.min(s - this.pos, r - n);
      for (let a = 0; a < o; a++) i[this.pos++] ^= e[n++];
      this.pos === s && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: e, suffix: s, pos: i, blockLen: r } = this;
    e[i] ^= s, (s & 128) !== 0 && i === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Tt(this, !1), Ge(e), this.finish();
    const s = this.state, { blockLen: i } = this;
    for (let r = 0, n = e.length; r < n; ) {
      this.posOut >= i && this.keccak();
      const o = Math.min(i - this.posOut, n - r);
      e.set(s.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return wt(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (Zr(e, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, je(this.state);
  }
  _cloneInto(e) {
    const { blockLen: s, suffix: i, outputLen: r, rounds: n, enableXOF: o } = this;
    return e || (e = new Yr(s, i, r, o, n)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = n, e.suffix = i, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
const Su = (t, e, s) => js(() => new Yr(e, t, s)), Pu = Su(1, 136, 256 / 8);
function Au(t, e, s, i) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, i);
  const r = BigInt(32), n = BigInt(4294967295), o = Number(s >> r & n), a = Number(s & n), c = i ? 4 : 0, h = i ? 0 : 4;
  t.setUint32(e + c, o, i), t.setUint32(e + h, a, i);
}
function Ou(t, e, s) {
  return t & e ^ ~t & s;
}
function $u(t, e, s) {
  return t & e ^ t & s ^ e & s;
}
let Aa = class extends xi {
  constructor(e, s, i, r) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = s, this.padOffset = i, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Vi(this.buffer);
  }
  update(e) {
    Tt(this), e = He(e), Ge(e);
    const { view: s, buffer: i, blockLen: r } = this, n = e.length;
    for (let o = 0; o < n; ) {
      const a = Math.min(r - this.pos, n - o);
      if (a === r) {
        const c = Vi(e);
        for (; r <= n - o; o += r) this.process(c, o);
        continue;
      }
      i.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === r && (this.process(s, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Tt(this), Zr(e, this), this.finished = !0;
    const { buffer: s, view: i, blockLen: r, isLE: n } = this;
    let { pos: o } = this;
    s[o++] = 128, je(this.buffer.subarray(o)), this.padOffset > r - o && (this.process(i, 0), o = 0);
    for (let u = o; u < r; u++) s[u] = 0;
    Au(i, r - 8, BigInt(this.length * 8), n), this.process(i, 0);
    const a = Vi(e), c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = c / 4, l = this.get();
    if (h > l.length) throw new Error("_sha2: outputLen bigger than state");
    for (let u = 0; u < h; u++) a.setUint32(4 * u, l[u], n);
  }
  digest() {
    const { buffer: e, outputLen: s } = this;
    this.digestInto(e);
    const i = e.slice(0, s);
    return this.destroy(), i;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: s, buffer: i, length: r, finished: n, destroyed: o, pos: a } = this;
    return e.destroyed = o, e.finished = n, e.length = r, e.pos = a, r % s && e.buffer.set(i), e;
  }
  clone() {
    return this._cloneInto();
  }
};
const vt = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), le = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]), ue = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]), Ru = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Et = new Uint32Array(64);
class Cu extends Aa {
  constructor(e = 32) {
    super(64, e, 8, !1), this.A = vt[0] | 0, this.B = vt[1] | 0, this.C = vt[2] | 0, this.D = vt[3] | 0, this.E = vt[4] | 0, this.F = vt[5] | 0, this.G = vt[6] | 0, this.H = vt[7] | 0;
  }
  get() {
    const { A: e, B: s, C: i, D: r, E: n, F: o, G: a, H: c } = this;
    return [e, s, i, r, n, o, a, c];
  }
  set(e, s, i, r, n, o, a, c) {
    this.A = e | 0, this.B = s | 0, this.C = i | 0, this.D = r | 0, this.E = n | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, s) {
    for (let u = 0; u < 16; u++, s += 4) Et[u] = e.getUint32(s, !1);
    for (let u = 16; u < 64; u++) {
      const d = Et[u - 15], f = Et[u - 2], p = We(d, 7) ^ We(d, 18) ^ d >>> 3, g = We(f, 17) ^ We(f, 19) ^ f >>> 10;
      Et[u] = g + Et[u - 7] + p + Et[u - 16] | 0;
    }
    let { A: i, B: r, C: n, D: o, E: a, F: c, G: h, H: l } = this;
    for (let u = 0; u < 64; u++) {
      const d = We(a, 6) ^ We(a, 11) ^ We(a, 25), f = l + d + Ou(a, c, h) + Ru[u] + Et[u] | 0, p = (We(i, 2) ^ We(i, 13) ^ We(i, 22)) + $u(i, r, n) | 0;
      l = h, h = c, c = a, a = o + f | 0, o = n, n = r, r = i, i = f + p | 0;
    }
    i = i + this.A | 0, r = r + this.B | 0, n = n + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, h = h + this.G | 0, l = l + this.H | 0, this.set(i, r, n, o, a, c, h, l);
  }
  roundClean() {
    je(Et);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), je(this.buffer);
  }
}
const Oa = wa(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))), Nu = Oa[0], Tu = Oa[1], It = new Uint32Array(80), _t = new Uint32Array(80);
class Qr extends Aa {
  constructor(e = 64) {
    super(128, e, 16, !1), this.Ah = ue[0] | 0, this.Al = ue[1] | 0, this.Bh = ue[2] | 0, this.Bl = ue[3] | 0, this.Ch = ue[4] | 0, this.Cl = ue[5] | 0, this.Dh = ue[6] | 0, this.Dl = ue[7] | 0, this.Eh = ue[8] | 0, this.El = ue[9] | 0, this.Fh = ue[10] | 0, this.Fl = ue[11] | 0, this.Gh = ue[12] | 0, this.Gl = ue[13] | 0, this.Hh = ue[14] | 0, this.Hl = ue[15] | 0;
  }
  get() {
    const { Ah: e, Al: s, Bh: i, Bl: r, Ch: n, Cl: o, Dh: a, Dl: c, Eh: h, El: l, Fh: u, Fl: d, Gh: f, Gl: p, Hh: g, Hl: m } = this;
    return [e, s, i, r, n, o, a, c, h, l, u, d, f, p, g, m];
  }
  set(e, s, i, r, n, o, a, c, h, l, u, d, f, p, g, m) {
    this.Ah = e | 0, this.Al = s | 0, this.Bh = i | 0, this.Bl = r | 0, this.Ch = n | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = h | 0, this.El = l | 0, this.Fh = u | 0, this.Fl = d | 0, this.Gh = f | 0, this.Gl = p | 0, this.Hh = g | 0, this.Hl = m | 0;
  }
  process(e, s) {
    for (let P = 0; P < 16; P++, s += 4) It[P] = e.getUint32(s), _t[P] = e.getUint32(s += 4);
    for (let P = 16; P < 80; P++) {
      const _ = It[P - 15] | 0, R = _t[P - 15] | 0, C = Pt(_, R, 1) ^ Pt(_, R, 8) ^ Tn(_, R, 7), q = At(_, R, 1) ^ At(_, R, 8) ^ Bn(_, R, 7), N = It[P - 2] | 0, A = _t[P - 2] | 0, T = Pt(N, A, 19) ^ _s(N, A, 61) ^ Tn(N, A, 6), F = At(N, A, 19) ^ xs(N, A, 61) ^ Bn(N, A, 6), S = lu(q, F, _t[P - 7], _t[P - 16]), b = uu(S, C, T, It[P - 7], It[P - 16]);
      It[P] = b | 0, _t[P] = S | 0;
    }
    let { Ah: i, Al: r, Bh: n, Bl: o, Ch: a, Cl: c, Dh: h, Dl: l, Eh: u, El: d, Fh: f, Fl: p, Gh: g, Gl: m, Hh: O, Hl: k } = this;
    for (let P = 0; P < 80; P++) {
      const _ = Pt(u, d, 14) ^ Pt(u, d, 18) ^ _s(u, d, 41), R = At(u, d, 14) ^ At(u, d, 18) ^ xs(u, d, 41), C = u & f ^ ~u & g, q = d & p ^ ~d & m, N = du(k, R, q, Tu[P], _t[P]), A = fu(N, O, _, C, Nu[P], It[P]), T = N | 0, F = Pt(i, r, 28) ^ _s(i, r, 34) ^ _s(i, r, 39), S = At(i, r, 28) ^ xs(i, r, 34) ^ xs(i, r, 39), b = i & n ^ i & a ^ n & a, E = r & o ^ r & c ^ o & c;
      O = g | 0, k = m | 0, g = f | 0, m = p | 0, f = u | 0, p = d | 0, { h: u, l: d } = Ve(h | 0, l | 0, A | 0, T | 0), h = a | 0, l = c | 0, a = n | 0, c = o | 0, n = i | 0, o = r | 0;
      const y = Gr(T, S, E);
      i = Wr(y, A, F, b), r = y | 0;
    }
    ({ h: i, l: r } = Ve(this.Ah | 0, this.Al | 0, i | 0, r | 0)), { h: n, l: o } = Ve(this.Bh | 0, this.Bl | 0, n | 0, o | 0), { h: a, l: c } = Ve(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h, l } = Ve(this.Dh | 0, this.Dl | 0, h | 0, l | 0), { h: u, l: d } = Ve(this.Eh | 0, this.El | 0, u | 0, d | 0), { h: f, l: p } = Ve(this.Fh | 0, this.Fl | 0, f | 0, p | 0), { h: g, l: m } = Ve(this.Gh | 0, this.Gl | 0, g | 0, m | 0), { h: O, l: k } = Ve(this.Hh | 0, this.Hl | 0, O | 0, k | 0), this.set(i, r, n, o, a, c, h, l, u, d, f, p, g, m, O, k);
  }
  roundClean() {
    je(It, _t);
  }
  destroy() {
    je(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class Bu extends Qr {
  constructor() {
    super(48), this.Ah = le[0] | 0, this.Al = le[1] | 0, this.Bh = le[2] | 0, this.Bl = le[3] | 0, this.Ch = le[4] | 0, this.Cl = le[5] | 0, this.Dh = le[6] | 0, this.Dl = le[7] | 0, this.Eh = le[8] | 0, this.El = le[9] | 0, this.Fh = le[10] | 0, this.Fl = le[11] | 0, this.Gh = le[12] | 0, this.Gl = le[13] | 0, this.Hh = le[14] | 0, this.Hl = le[15] | 0;
  }
}
const de = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882]);
class qu extends Qr {
  constructor() {
    super(32), this.Ah = de[0] | 0, this.Al = de[1] | 0, this.Bh = de[2] | 0, this.Bl = de[3] | 0, this.Ch = de[4] | 0, this.Cl = de[5] | 0, this.Dh = de[6] | 0, this.Dl = de[7] | 0, this.Eh = de[8] | 0, this.El = de[9] | 0, this.Fh = de[10] | 0, this.Fl = de[11] | 0, this.Gh = de[12] | 0, this.Gl = de[13] | 0, this.Hh = de[14] | 0, this.Hl = de[15] | 0;
  }
}
const Si = js(() => new Cu()), ku = js(() => new Qr()), Fu = js(() => new Bu()), Uu = js(() => new qu()), Du = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]), re = Uint32Array.from([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]), M = new Uint32Array(32);
function xt(t, e, s, i, r, n) {
  const o = r[n], a = r[n + 1];
  let c = M[2 * t], h = M[2 * t + 1], l = M[2 * e], u = M[2 * e + 1], d = M[2 * s], f = M[2 * s + 1], p = M[2 * i], g = M[2 * i + 1], m = Gr(c, l, o);
  h = Wr(m, h, u, a), c = m | 0, { Dh: g, Dl: p } = { Dh: g ^ h, Dl: p ^ c }, { Dh: g, Dl: p } = { Dh: ru(g, p), Dl: nu(g) }, { h: f, l: d } = Ve(f, d, g, p), { Bh: u, Bl: l } = { Bh: u ^ f, Bl: l ^ d }, { Bh: u, Bl: l } = { Bh: Pt(u, l, 24), Bl: At(u, l, 24) }, M[2 * t] = c, M[2 * t + 1] = h, M[2 * e] = l, M[2 * e + 1] = u, M[2 * s] = d, M[2 * s + 1] = f, M[2 * i] = p, M[2 * i + 1] = g;
}
function St(t, e, s, i, r, n) {
  const o = r[n], a = r[n + 1];
  let c = M[2 * t], h = M[2 * t + 1], l = M[2 * e], u = M[2 * e + 1], d = M[2 * s], f = M[2 * s + 1], p = M[2 * i], g = M[2 * i + 1], m = Gr(c, l, o);
  h = Wr(m, h, u, a), c = m | 0, { Dh: g, Dl: p } = { Dh: g ^ h, Dl: p ^ c }, { Dh: g, Dl: p } = { Dh: Pt(g, p, 16), Dl: At(g, p, 16) }, { h: f, l: d } = Ve(f, d, g, p), { Bh: u, Bl: l } = { Bh: u ^ f, Bl: l ^ d }, { Bh: u, Bl: l } = { Bh: _s(u, l, 63), Bl: xs(u, l, 63) }, M[2 * t] = c, M[2 * t + 1] = h, M[2 * e] = l, M[2 * e + 1] = u, M[2 * s] = d, M[2 * s + 1] = f, M[2 * i] = p, M[2 * i + 1] = g;
}
function ju(t, e = {}, s, i, r) {
  if (wt(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
  const { key: n, salt: o, personalization: a } = e;
  if (n !== void 0 && (n.length < 1 || n.length > s)) throw new Error("key length must be undefined or 1.." + s);
  if (o !== void 0 && o.length !== i) throw new Error("salt must be undefined or " + i);
  if (a !== void 0 && a.length !== r) throw new Error("personalization must be undefined or " + r);
}
class Mu extends xi {
  constructor(e, s) {
    super(), this.finished = !1, this.destroyed = !1, this.length = 0, this.pos = 0, wt(e), wt(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = Ts(this.buffer);
  }
  update(e) {
    Tt(this), e = He(e), Ge(e);
    const { blockLen: s, buffer: i, buffer32: r } = this, n = e.length, o = e.byteOffset, a = e.buffer;
    for (let c = 0; c < n; ) {
      this.pos === s && (Ot(r), this.compress(r, 0, !1), Ot(r), this.pos = 0);
      const h = Math.min(s - this.pos, n - c), l = o + c;
      if (h === s && !(l % 4) && c + h < n) {
        const u = new Uint32Array(a, l, Math.floor((n - c) / 4));
        Ot(u);
        for (let d = 0; c + s < n; d += r.length, c += s) this.length += s, this.compress(u, d, !1);
        Ot(u);
        continue;
      }
      i.set(e.subarray(c, c + h), this.pos), this.pos += h, this.length += h, c += h;
    }
    return this;
  }
  digestInto(e) {
    Tt(this), Zr(e, this);
    const { pos: s, buffer32: i } = this;
    this.finished = !0, je(this.buffer.subarray(s)), Ot(i), this.compress(i, 0, !0), Ot(i);
    const r = Ts(e);
    this.get().forEach((n, o) => r[o] = ct(n));
  }
  digest() {
    const { buffer: e, outputLen: s } = this;
    this.digestInto(e);
    const i = e.slice(0, s);
    return this.destroy(), i;
  }
  _cloneInto(e) {
    const { buffer: s, length: i, finished: r, destroyed: n, outputLen: o, pos: a } = this;
    return e || (e = new this.constructor({ dkLen: o })), e.set(...this.get()), e.buffer.set(s), e.destroyed = n, e.finished = r, e.length = i, e.pos = a, e.outputLen = o, e;
  }
  clone() {
    return this._cloneInto();
  }
}
class Lu extends Mu {
  constructor(e = {}) {
    const s = e.dkLen === void 0 ? 64 : e.dkLen;
    super(128, s), this.v0l = re[0] | 0, this.v0h = re[1] | 0, this.v1l = re[2] | 0, this.v1h = re[3] | 0, this.v2l = re[4] | 0, this.v2h = re[5] | 0, this.v3l = re[6] | 0, this.v3h = re[7] | 0, this.v4l = re[8] | 0, this.v4h = re[9] | 0, this.v5l = re[10] | 0, this.v5h = re[11] | 0, this.v6l = re[12] | 0, this.v6h = re[13] | 0, this.v7l = re[14] | 0, this.v7h = re[15] | 0, ju(s, e, 64, 16, 16);
    let { key: i, personalization: r, salt: n } = e, o = 0;
    if (i !== void 0 && (i = He(i), o = i.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, n !== void 0) {
      n = He(n);
      const a = Ts(n);
      this.v4l ^= ct(a[0]), this.v4h ^= ct(a[1]), this.v5l ^= ct(a[2]), this.v5h ^= ct(a[3]);
    }
    if (r !== void 0) {
      r = He(r);
      const a = Ts(r);
      this.v6l ^= ct(a[0]), this.v6h ^= ct(a[1]), this.v7l ^= ct(a[2]), this.v7h ^= ct(a[3]);
    }
    if (i !== void 0) {
      const a = new Uint8Array(this.blockLen);
      a.set(i), this.update(a);
    }
  }
  get() {
    let { v0l: e, v0h: s, v1l: i, v1h: r, v2l: n, v2h: o, v3l: a, v3h: c, v4l: h, v4h: l, v5l: u, v5h: d, v6l: f, v6h: p, v7l: g, v7h: m } = this;
    return [e, s, i, r, n, o, a, c, h, l, u, d, f, p, g, m];
  }
  set(e, s, i, r, n, o, a, c, h, l, u, d, f, p, g, m) {
    this.v0l = e | 0, this.v0h = s | 0, this.v1l = i | 0, this.v1h = r | 0, this.v2l = n | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = h | 0, this.v4h = l | 0, this.v5l = u | 0, this.v5h = d | 0, this.v6l = f | 0, this.v6h = p | 0, this.v7l = g | 0, this.v7h = m | 0;
  }
  compress(e, s, i) {
    this.get().forEach((c, h) => M[h] = c), M.set(re, 16);
    let { h: r, l: n } = ma(BigInt(this.length));
    M[24] = re[8] ^ n, M[25] = re[9] ^ r, i && (M[28] = ~M[28], M[29] = ~M[29]);
    let o = 0;
    const a = Du;
    for (let c = 0; c < 12; c++) xt(0, 4, 8, 12, e, s + 2 * a[o++]), St(0, 4, 8, 12, e, s + 2 * a[o++]), xt(1, 5, 9, 13, e, s + 2 * a[o++]), St(1, 5, 9, 13, e, s + 2 * a[o++]), xt(2, 6, 10, 14, e, s + 2 * a[o++]), St(2, 6, 10, 14, e, s + 2 * a[o++]), xt(3, 7, 11, 15, e, s + 2 * a[o++]), St(3, 7, 11, 15, e, s + 2 * a[o++]), xt(0, 5, 10, 15, e, s + 2 * a[o++]), St(0, 5, 10, 15, e, s + 2 * a[o++]), xt(1, 6, 11, 12, e, s + 2 * a[o++]), St(1, 6, 11, 12, e, s + 2 * a[o++]), xt(2, 7, 8, 13, e, s + 2 * a[o++]), St(2, 7, 8, 13, e, s + 2 * a[o++]), xt(3, 4, 9, 14, e, s + 2 * a[o++]), St(3, 4, 9, 14, e, s + 2 * a[o++]);
    this.v0l ^= M[0] ^ M[16], this.v0h ^= M[1] ^ M[17], this.v1l ^= M[2] ^ M[18], this.v1h ^= M[3] ^ M[19], this.v2l ^= M[4] ^ M[20], this.v2h ^= M[5] ^ M[21], this.v3l ^= M[6] ^ M[22], this.v3h ^= M[7] ^ M[23], this.v4l ^= M[8] ^ M[24], this.v4h ^= M[9] ^ M[25], this.v5l ^= M[10] ^ M[26], this.v5h ^= M[11] ^ M[27], this.v6l ^= M[12] ^ M[28], this.v6h ^= M[13] ^ M[29], this.v7l ^= M[14] ^ M[30], this.v7h ^= M[15] ^ M[31], je(M);
  }
  destroy() {
    this.destroyed = !0, je(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const zu = yu((t) => new Lu(t)), Vu = "https://rpc.walletconnect.org/v1";
function $a(t) {
  const e = `Ethereum Signed Message:
${t.length}`, s = new TextEncoder().encode(e + t);
  return "0x" + Buffer.from(Pu(s)).toString("hex");
}
async function Ku(t, e, s, i, r, n) {
  switch (s.t) {
    case "eip191":
      return await Hu(t, e, s.s);
    case "eip1271":
      return await Gu(t, e, s.s, i, r, n);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`);
  }
}
function Hu(t, e, s) {
  const i = Ol(s);
  return Tl({ payload: $a(e), signature: i }).toLowerCase() === t.toLowerCase();
}
async function Gu(t, e, s, i, r, n) {
  const o = gt(i);
  if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`);
  try {
    const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", h = s.substring(2), l = (h.length / 2).toString(16).padStart(64, "0"), u = (e.startsWith("0x") ? e : $a(e)).substring(2), d = a + u + c + l + h, f = await fetch(`${n || Vu}/?chainId=${i}&projectId=${r}`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ id: Wu(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: d }, "latest"] }) }), { result: p } = await f.json();
    return p ? p.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1;
  } catch (a) {
    return console.error("isValidEip1271Signature: ", a), !1;
  }
}
function Wu() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function Zu(t) {
  const e = atob(t), s = new Uint8Array(e.length);
  for (let o = 0; o < e.length; o++) s[o] = e.charCodeAt(o);
  const i = s[0];
  if (i === 0) throw new Error("No signatures found");
  const r = 1 + i * 64;
  if (s.length < r) throw new Error("Transaction data too short for claimed signature count");
  if (s.length < 100) throw new Error("Transaction too short");
  const n = Buffer.from(t, "base64").slice(1, 65);
  return ks.encode(n);
}
function Yu(t) {
  const e = new Uint8Array(Buffer.from(t, "base64")), s = Array.from("TransactionData::").map((n) => n.charCodeAt(0)), i = new Uint8Array(s.length + e.length);
  i.set(s), i.set(e, s.length);
  const r = zu(i, { dkLen: 32 });
  return ks.encode(r);
}
function Un(t) {
  const e = new Uint8Array(Si(Qu(t)));
  return ks.encode(e);
}
function Qu(t) {
  if (t instanceof Uint8Array) return t;
  if (Array.isArray(t)) return new Uint8Array(t);
  if (typeof t == "object" && (t != null && t.data)) return new Uint8Array(Object.values(t.data));
  if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
  throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
}
function Dn(t) {
  const e = Buffer.from(t, "base64"), s = sh(e).txn;
  if (!s) throw new Error("Invalid signed transaction: missing 'txn' field");
  const i = ih(s), r = Buffer.from("TX"), n = Buffer.concat([r, Buffer.from(i)]), o = Uu(n);
  return rh.encode(o).replace(/=+$/, "");
}
function Ki(t) {
  const e = [];
  let s = BigInt(t);
  for (; s >= 0x80n; ) e.push(Number(s & 0x7fn | 0x80n)), s >>= 7n;
  return e.push(Number(s)), Buffer.from(e);
}
function Ju(t) {
  const e = Buffer.from(t.signed.bodyBytes, "base64"), s = Buffer.from(t.signed.authInfoBytes, "base64"), i = Buffer.from(t.signature.signature, "base64"), r = [];
  r.push(Buffer.from([10])), r.push(Ki(e.length)), r.push(e), r.push(Buffer.from([18])), r.push(Ki(s.length)), r.push(s), r.push(Buffer.from([26])), r.push(Ki(i.length)), r.push(i);
  const n = Buffer.concat(r), o = Si(n);
  return Buffer.from(o).toString("hex").toUpperCase();
}
function Xu(t) {
  var s, i;
  const e = [];
  try {
    if (typeof t == "string") return e.push(t), e;
    if (typeof t != "object") return e;
    t != null && t.id && e.push(t.id);
    const r = (i = (s = t == null ? void 0 : t.capabilities) == null ? void 0 : s.caip345) == null ? void 0 : i.transactionHashes;
    r && e.push(...r);
  } catch (r) {
    console.warn("getWalletSendCallsHashes failed: ", r);
  }
  return e;
}
const Ra = "did:pkh:", ed = { eip155: "Ethereum", solana: "Solana", bip122: "Bitcoin" }, td = (t) => t ? ed[t] || t : "", Pi = (t) => t == null ? void 0 : t.split(":"), sd = (t) => {
  const e = t && Pi(t);
  if (e) return t.includes(Ra) ? e[3] : e[1];
}, id = (t) => {
  const e = t && Pi(t);
  if (e) return t.includes(Ra) ? e[2] : e[0];
}, vr = (t) => {
  const e = t && Pi(t);
  if (e) return e[2] + ":" + e[3];
}, ui = (t) => {
  const e = t && Pi(t);
  if (e) return e.pop();
};
async function jn(t) {
  const { cacao: e, projectId: s } = t, { s: i, p: r } = e, n = Ca(r, r.iss), o = ui(r.iss);
  return await Ku(o, n, i, vr(r.iss), s);
}
const Ca = (t, e) => {
  const s = id(e);
  if (!s) throw new Error("Invalid issuer: " + e);
  const i = `${t.domain} wants you to sign in with your ${td(s)} account:`, r = ui(e);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let n = t.statement || void 0;
  const o = `URI: ${t.aud || t.uri}`, a = `Version: ${t.version}`, c = `Chain ID: ${sd(e)}`, h = `Nonce: ${t.nonce}`, l = `Issued At: ${t.iat}`, u = t.exp ? `Expiration Time: ${t.exp}` : void 0, d = t.nbf ? `Not Before: ${t.nbf}` : void 0, f = t.requestId ? `Request ID: ${t.requestId}` : void 0, p = t.resources ? `Resources:${t.resources.map((m) => `
- ${m}`).join("")}` : void 0, g = si(t.resources);
  if (g) {
    const m = Bs(g);
    n = dd(n, m);
  }
  return [i, r, "", n, "", o, a, c, h, l, u, d, f, p].filter((m) => m != null).join(`
`);
};
function rd(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function nd(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function Zt(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e = Object.keys(t.att);
  if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
  e.forEach((s) => {
    const i = t.att[s];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${s}`);
    if (typeof i != "object") throw new Error(`Resource must be an object: ${s}`);
    if (!Object.keys(i).length) throw new Error(`Resource object is empty: ${s}`);
    Object.keys(i).forEach((r) => {
      const n = i[r];
      if (!Array.isArray(n)) throw new Error(`Ability limits ${r} must be an array of objects, found: ${n}`);
      if (!n.length) throw new Error(`Value of ${r} is empty array, must be an array with objects`);
      n.forEach((o) => {
        if (typeof o != "object") throw new Error(`Ability limits (${r}) must be an array of objects, found: ${o}`);
      });
    });
  });
}
function od(t, e, s, i = {}) {
  return s == null || s.sort((r, n) => r.localeCompare(n)), { att: { [t]: ad(e, s, i) } };
}
function ad(t, e, s = {}) {
  e = e == null ? void 0 : e.sort((r, n) => r.localeCompare(n));
  const i = e.map((r) => ({ [`${t}/${r}`]: [s] }));
  return Object.assign({}, ...i);
}
function Na(t) {
  return Zt(t), `urn:recap:${rd(t).replace(/=/g, "")}`;
}
function Bs(t) {
  const e = nd(t.replace("urn:recap:", ""));
  return Zt(e), e;
}
function cd(t, e, s) {
  const i = od(t, e, s);
  return Na(i);
}
function hd(t) {
  return t && t.includes("urn:recap:");
}
function ld(t, e) {
  const s = Bs(t), i = Bs(e), r = ud(s, i);
  return Na(r);
}
function ud(t, e) {
  Zt(t), Zt(e);
  const s = Object.keys(t.att).concat(Object.keys(e.att)).sort((r, n) => r.localeCompare(n)), i = { att: {} };
  return s.forEach((r) => {
    var n, o;
    Object.keys(((n = t.att) == null ? void 0 : n[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
      var c, h;
      i.att[r] = { ...i.att[r], [a]: ((c = t.att[r]) == null ? void 0 : c[a]) || ((h = e.att[r]) == null ? void 0 : h[a]) };
    });
  }), i;
}
function dd(t = "", e) {
  Zt(e);
  const s = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(s)) return t;
  const i = [];
  let r = 0;
  Object.keys(e.att).forEach((a) => {
    const c = Object.keys(e.att[a]).map((u) => ({ ability: u.split("/")[0], action: u.split("/")[1] }));
    c.sort((u, d) => u.action.localeCompare(d.action));
    const h = {};
    c.forEach((u) => {
      h[u.ability] || (h[u.ability] = []), h[u.ability].push(u.action);
    });
    const l = Object.keys(h).map((u) => (r++, `(${r}) '${u}': '${h[u].join("', '")}' for '${a}'.`));
    i.push(l.join(", ").replace(".,", "."));
  });
  const n = i.join(" "), o = `${s}${n}`;
  return `${t ? t + " " : ""}${o}`;
}
function Mn(t) {
  var i;
  const e = Bs(t);
  Zt(e);
  const s = (i = e.att) == null ? void 0 : i.eip155;
  return s ? Object.keys(s).map((r) => r.split("/")[1]) : [];
}
function Ln(t) {
  const e = Bs(t);
  Zt(e);
  const s = [];
  return Object.values(e.att).forEach((i) => {
    Object.values(i).forEach((r) => {
      var n;
      (n = r == null ? void 0 : r[0]) != null && n.chains && s.push(r[0].chains);
    });
  }), [...new Set(s.flat())];
}
function si(t) {
  if (!t) return;
  const e = t == null ? void 0 : t[t.length - 1];
  return hd(e) ? e : void 0;
}
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
function Ta(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Er(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
function Hi(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Ie(t, ...e) {
  if (!Ta(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function zn(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function fd(t, e) {
  Ie(t);
  const s = e.outputLen;
  if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
}
function Ct(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function ds(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function pd(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
const gd = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function yd(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function Ir(t) {
  if (typeof t == "string") t = yd(t);
  else if (Ta(t)) t = _r(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function md(t, e) {
  if (e == null || typeof e != "object") throw new Error("options must be defined");
  return Object.assign(t, e);
}
function wd(t, e) {
  if (t.length !== e.length) return !1;
  let s = 0;
  for (let i = 0; i < t.length; i++) s |= t[i] ^ e[i];
  return s === 0;
}
const bd = (t, e) => {
  function s(i, ...r) {
    if (Ie(i), !gd) throw new Error("Non little-endian hardware is not yet supported");
    if (t.nonceLength !== void 0) {
      const h = r[0];
      if (!h) throw new Error("nonce / iv required");
      t.varSizeNonce ? Ie(h) : Ie(h, t.nonceLength);
    }
    const n = t.tagLength;
    n && r[1] !== void 0 && Ie(r[1]);
    const o = e(i, ...r), a = (h, l) => {
      if (l !== void 0) {
        if (h !== 2) throw new Error("cipher output not supported");
        Ie(l);
      }
    };
    let c = !1;
    return { encrypt(h, l) {
      if (c) throw new Error("cannot encrypt() twice with same key + nonce");
      return c = !0, Ie(h), a(o.encrypt.length, l), o.encrypt(h, l);
    }, decrypt(h, l) {
      if (Ie(h), n && h.length < n) throw new Error("invalid ciphertext length: smaller than tagLength=" + n);
      return a(o.decrypt.length, l), o.decrypt(h, l);
    } };
  }
  return Object.assign(s, t), s;
};
function Vn(t, e, s = !0) {
  if (e === void 0) return new Uint8Array(t);
  if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
  if (s && !Ed(e)) throw new Error("invalid output, must be aligned");
  return e;
}
function Kn(t, e, s, i) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, i);
  const r = BigInt(32), n = BigInt(4294967295), o = Number(s >> r & n), a = Number(s & n);
  t.setUint32(e + 4, o, i), t.setUint32(e + 0, a, i);
}
function vd(t, e, s) {
  Er(s);
  const i = new Uint8Array(16), r = pd(i);
  return Kn(r, 0, BigInt(e), s), Kn(r, 8, BigInt(t), s), i;
}
function Ed(t) {
  return t.byteOffset % 4 === 0;
}
function _r(t) {
  return Uint8Array.from(t);
}
const Ba = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), Id = Ba("expand 16-byte k"), _d = Ba("expand 32-byte k"), xd = Ct(Id), Sd = Ct(_d);
function W(t, e) {
  return t << e | t >>> 32 - e;
}
function xr(t) {
  return t.byteOffset % 4 === 0;
}
const Ws = 64, Pd = 16, qa = 2 ** 32 - 1, Hn = new Uint32Array();
function Ad(t, e, s, i, r, n, o, a) {
  const c = r.length, h = new Uint8Array(Ws), l = Ct(h), u = xr(r) && xr(n), d = u ? Ct(r) : Hn, f = u ? Ct(n) : Hn;
  for (let p = 0; p < c; o++) {
    if (t(e, s, i, l, o, a), o >= qa) throw new Error("arx: counter overflow");
    const g = Math.min(Ws, c - p);
    if (u && g === Ws) {
      const m = p / 4;
      if (p % 4 !== 0) throw new Error("arx: invalid block position");
      for (let O = 0, k; O < Pd; O++) k = m + O, f[k] = d[k] ^ l[O];
      p += Ws;
      continue;
    }
    for (let m = 0, O; m < g; m++) O = p + m, n[O] = r[O] ^ h[m];
    p += g;
  }
}
function Od(t, e) {
  const { allowShortKeys: s, extendNonceFn: i, counterLength: r, counterRight: n, rounds: o } = md({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, e);
  if (typeof t != "function") throw new Error("core must be a function");
  return Hi(r), Hi(o), Er(n), Er(s), (a, c, h, l, u = 0) => {
    Ie(a), Ie(c), Ie(h);
    const d = h.length;
    if (l === void 0 && (l = new Uint8Array(d)), Ie(l), Hi(u), u < 0 || u >= qa) throw new Error("arx: counter overflow");
    if (l.length < d) throw new Error(`arx: output (${l.length}) is shorter than data (${d})`);
    const f = [];
    let p = a.length, g, m;
    if (p === 32) f.push(g = _r(a)), m = Sd;
    else if (p === 16 && s) g = new Uint8Array(32), g.set(a), g.set(a, 16), m = xd, f.push(g);
    else throw new Error(`arx: invalid 32-byte key, got length=${p}`);
    xr(c) || f.push(c = _r(c));
    const O = Ct(g);
    if (i) {
      if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      i(m, O, Ct(c.subarray(0, 16)), O), c = c.subarray(16);
    }
    const k = 16 - r;
    if (k !== c.length) throw new Error(`arx: nonce must be ${k} or 16 bytes`);
    if (k !== 12) {
      const _ = new Uint8Array(12);
      _.set(c, n ? 0 : 12 - c.length), c = _, f.push(c);
    }
    const P = Ct(c);
    return Ad(t, m, O, P, h, l, u, o), ds(...f), l;
  };
}
const ae = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
class $d {
  constructor(e) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, e = Ir(e), Ie(e, 32);
    const s = ae(e, 0), i = ae(e, 2), r = ae(e, 4), n = ae(e, 6), o = ae(e, 8), a = ae(e, 10), c = ae(e, 12), h = ae(e, 14);
    this.r[0] = s & 8191, this.r[1] = (s >>> 13 | i << 3) & 8191, this.r[2] = (i >>> 10 | r << 6) & 7939, this.r[3] = (r >>> 7 | n << 9) & 8191, this.r[4] = (n >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | h << 8) & 8191, this.r[9] = h >>> 5 & 127;
    for (let l = 0; l < 8; l++) this.pad[l] = ae(e, 16 + 2 * l);
  }
  process(e, s, i = !1) {
    const r = i ? 0 : 2048, { h: n, r: o } = this, a = o[0], c = o[1], h = o[2], l = o[3], u = o[4], d = o[5], f = o[6], p = o[7], g = o[8], m = o[9], O = ae(e, s + 0), k = ae(e, s + 2), P = ae(e, s + 4), _ = ae(e, s + 6), R = ae(e, s + 8), C = ae(e, s + 10), q = ae(e, s + 12), N = ae(e, s + 14);
    let A = n[0] + (O & 8191), T = n[1] + ((O >>> 13 | k << 3) & 8191), F = n[2] + ((k >>> 10 | P << 6) & 8191), S = n[3] + ((P >>> 7 | _ << 9) & 8191), b = n[4] + ((_ >>> 4 | R << 12) & 8191), E = n[5] + (R >>> 1 & 8191), y = n[6] + ((R >>> 14 | C << 2) & 8191), w = n[7] + ((C >>> 11 | q << 5) & 8191), I = n[8] + ((q >>> 8 | N << 8) & 8191), $ = n[9] + (N >>> 5 | r), v = 0, x = v + A * a + T * (5 * m) + F * (5 * g) + S * (5 * p) + b * (5 * f);
    v = x >>> 13, x &= 8191, x += E * (5 * d) + y * (5 * u) + w * (5 * l) + I * (5 * h) + $ * (5 * c), v += x >>> 13, x &= 8191;
    let B = v + A * c + T * a + F * (5 * m) + S * (5 * g) + b * (5 * p);
    v = B >>> 13, B &= 8191, B += E * (5 * f) + y * (5 * d) + w * (5 * u) + I * (5 * l) + $ * (5 * h), v += B >>> 13, B &= 8191;
    let U = v + A * h + T * c + F * a + S * (5 * m) + b * (5 * g);
    v = U >>> 13, U &= 8191, U += E * (5 * p) + y * (5 * f) + w * (5 * d) + I * (5 * u) + $ * (5 * l), v += U >>> 13, U &= 8191;
    let V = v + A * l + T * h + F * c + S * a + b * (5 * m);
    v = V >>> 13, V &= 8191, V += E * (5 * g) + y * (5 * p) + w * (5 * f) + I * (5 * d) + $ * (5 * u), v += V >>> 13, V &= 8191;
    let z = v + A * u + T * l + F * h + S * c + b * a;
    v = z >>> 13, z &= 8191, z += E * (5 * m) + y * (5 * g) + w * (5 * p) + I * (5 * f) + $ * (5 * d), v += z >>> 13, z &= 8191;
    let L = v + A * d + T * u + F * l + S * h + b * c;
    v = L >>> 13, L &= 8191, L += E * a + y * (5 * m) + w * (5 * g) + I * (5 * p) + $ * (5 * f), v += L >>> 13, L &= 8191;
    let H = v + A * f + T * d + F * u + S * l + b * h;
    v = H >>> 13, H &= 8191, H += E * c + y * a + w * (5 * m) + I * (5 * g) + $ * (5 * p), v += H >>> 13, H &= 8191;
    let G = v + A * p + T * f + F * d + S * u + b * l;
    v = G >>> 13, G &= 8191, G += E * h + y * c + w * a + I * (5 * m) + $ * (5 * g), v += G >>> 13, G &= 8191;
    let Q = v + A * g + T * p + F * f + S * d + b * u;
    v = Q >>> 13, Q &= 8191, Q += E * l + y * h + w * c + I * a + $ * (5 * m), v += Q >>> 13, Q &= 8191;
    let K = v + A * m + T * g + F * p + S * f + b * d;
    v = K >>> 13, K &= 8191, K += E * u + y * l + w * h + I * c + $ * a, v += K >>> 13, K &= 8191, v = (v << 2) + v | 0, v = v + x | 0, x = v & 8191, v = v >>> 13, B += v, n[0] = x, n[1] = B, n[2] = U, n[3] = V, n[4] = z, n[5] = L, n[6] = H, n[7] = G, n[8] = Q, n[9] = K;
  }
  finalize() {
    const { h: e, pad: s } = this, i = new Uint16Array(10);
    let r = e[1] >>> 13;
    e[1] &= 8191;
    for (let a = 2; a < 10; a++) e[a] += r, r = e[a] >>> 13, e[a] &= 8191;
    e[0] += r * 5, r = e[0] >>> 13, e[0] &= 8191, e[1] += r, r = e[1] >>> 13, e[1] &= 8191, e[2] += r, i[0] = e[0] + 5, r = i[0] >>> 13, i[0] &= 8191;
    for (let a = 1; a < 10; a++) i[a] = e[a] + r, r = i[a] >>> 13, i[a] &= 8191;
    i[9] -= 8192;
    let n = (r ^ 1) - 1;
    for (let a = 0; a < 10; a++) i[a] &= n;
    n = ~n;
    for (let a = 0; a < 10; a++) e[a] = e[a] & n | i[a];
    e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
    let o = e[0] + s[0];
    e[0] = o & 65535;
    for (let a = 1; a < 8; a++) o = (e[a] + s[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
    ds(i);
  }
  update(e) {
    zn(this), e = Ir(e), Ie(e);
    const { buffer: s, blockLen: i } = this, r = e.length;
    for (let n = 0; n < r; ) {
      const o = Math.min(i - this.pos, r - n);
      if (o === i) {
        for (; i <= r - n; n += i) this.process(e, n);
        continue;
      }
      s.set(e.subarray(n, n + o), this.pos), this.pos += o, n += o, this.pos === i && (this.process(s, 0, !1), this.pos = 0);
    }
    return this;
  }
  destroy() {
    ds(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e) {
    zn(this), fd(e, this), this.finished = !0;
    const { buffer: s, h: i } = this;
    let { pos: r } = this;
    if (r) {
      for (s[r++] = 1; r < 16; r++) s[r] = 0;
      this.process(s, 0, !0);
    }
    this.finalize();
    let n = 0;
    for (let o = 0; o < 8; o++) e[n++] = i[o] >>> 0, e[n++] = i[o] >>> 8;
    return e;
  }
  digest() {
    const { buffer: e, outputLen: s } = this;
    this.digestInto(e);
    const i = e.slice(0, s);
    return this.destroy(), i;
  }
}
function Rd(t) {
  const e = (i, r) => t(r).update(Ir(i)).digest(), s = t(new Uint8Array(32));
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (i) => t(i), e;
}
const Cd = Rd((t) => new $d(t));
function Nd(t, e, s, i, r, n = 20) {
  let o = t[0], a = t[1], c = t[2], h = t[3], l = e[0], u = e[1], d = e[2], f = e[3], p = e[4], g = e[5], m = e[6], O = e[7], k = r, P = s[0], _ = s[1], R = s[2], C = o, q = a, N = c, A = h, T = l, F = u, S = d, b = f, E = p, y = g, w = m, I = O, $ = k, v = P, x = _, B = R;
  for (let V = 0; V < n; V += 2) C = C + T | 0, $ = W($ ^ C, 16), E = E + $ | 0, T = W(T ^ E, 12), C = C + T | 0, $ = W($ ^ C, 8), E = E + $ | 0, T = W(T ^ E, 7), q = q + F | 0, v = W(v ^ q, 16), y = y + v | 0, F = W(F ^ y, 12), q = q + F | 0, v = W(v ^ q, 8), y = y + v | 0, F = W(F ^ y, 7), N = N + S | 0, x = W(x ^ N, 16), w = w + x | 0, S = W(S ^ w, 12), N = N + S | 0, x = W(x ^ N, 8), w = w + x | 0, S = W(S ^ w, 7), A = A + b | 0, B = W(B ^ A, 16), I = I + B | 0, b = W(b ^ I, 12), A = A + b | 0, B = W(B ^ A, 8), I = I + B | 0, b = W(b ^ I, 7), C = C + F | 0, B = W(B ^ C, 16), w = w + B | 0, F = W(F ^ w, 12), C = C + F | 0, B = W(B ^ C, 8), w = w + B | 0, F = W(F ^ w, 7), q = q + S | 0, $ = W($ ^ q, 16), I = I + $ | 0, S = W(S ^ I, 12), q = q + S | 0, $ = W($ ^ q, 8), I = I + $ | 0, S = W(S ^ I, 7), N = N + b | 0, v = W(v ^ N, 16), E = E + v | 0, b = W(b ^ E, 12), N = N + b | 0, v = W(v ^ N, 8), E = E + v | 0, b = W(b ^ E, 7), A = A + T | 0, x = W(x ^ A, 16), y = y + x | 0, T = W(T ^ y, 12), A = A + T | 0, x = W(x ^ A, 8), y = y + x | 0, T = W(T ^ y, 7);
  let U = 0;
  i[U++] = o + C | 0, i[U++] = a + q | 0, i[U++] = c + N | 0, i[U++] = h + A | 0, i[U++] = l + T | 0, i[U++] = u + F | 0, i[U++] = d + S | 0, i[U++] = f + b | 0, i[U++] = p + E | 0, i[U++] = g + y | 0, i[U++] = m + w | 0, i[U++] = O + I | 0, i[U++] = k + $ | 0, i[U++] = P + v | 0, i[U++] = _ + x | 0, i[U++] = R + B | 0;
}
const Td = Od(Nd, { counterRight: !1, counterLength: 4, allowShortKeys: !1 }), Bd = new Uint8Array(16), Gn = (t, e) => {
  t.update(e);
  const s = e.length % 16;
  s && t.update(Bd.subarray(s));
}, qd = new Uint8Array(32);
function Wn(t, e, s, i, r) {
  const n = t(e, s, qd), o = Cd.create(n);
  r && Gn(o, r), Gn(o, i);
  const a = vd(i.length, r ? r.length : 0, !0);
  o.update(a);
  const c = o.digest();
  return ds(n, a), c;
}
const kd = (t) => (e, s, i) => ({ encrypt(r, n) {
  const o = r.length;
  n = Vn(o + 16, n, !1), n.set(r);
  const a = n.subarray(0, -16);
  t(e, s, a, a, 1);
  const c = Wn(t, e, s, a, i);
  return n.set(c, o), ds(c), n;
}, decrypt(r, n) {
  n = Vn(r.length - 16, n, !1);
  const o = r.subarray(0, -16), a = r.subarray(-16), c = Wn(t, e, s, o, i);
  if (!wd(a, c)) throw new Error("invalid tag");
  return n.set(r.subarray(0, -16)), t(e, s, n, n, 1), ds(c), n;
} }), ka = bd({ blockSize: 64, nonceLength: 12, tagLength: 16 }, kd(Td));
let Fa = class extends xi {
  constructor(e, s) {
    super(), this.finished = !1, this.destroyed = !1, _i(e);
    const i = He(s);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const r = this.blockLen, n = new Uint8Array(r);
    n.set(i.length > r ? e.create().update(i).digest() : i);
    for (let o = 0; o < n.length; o++) n[o] ^= 54;
    this.iHash.update(n), this.oHash = e.create();
    for (let o = 0; o < n.length; o++) n[o] ^= 106;
    this.oHash.update(n), je(n);
  }
  update(e) {
    return Tt(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Tt(this), Ge(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: s, iHash: i, finished: r, destroyed: n, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = r, e.destroyed = n, e.blockLen = o, e.outputLen = a, e.oHash = s._cloneInto(e.oHash), e.iHash = i._cloneInto(e.iHash), e;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const Ai = (t, e, s) => new Fa(t, e).update(s).digest();
Ai.create = (t, e) => new Fa(t, e);
function Fd(t, e, s) {
  return _i(t), s === void 0 && (s = new Uint8Array(t.outputLen)), Ai(t, He(s), He(e));
}
const Gi = Uint8Array.from([0]), Zn = Uint8Array.of();
function Ud(t, e, s, i = 32) {
  _i(t), wt(i);
  const r = t.outputLen;
  if (i > 255 * r) throw new Error("Length should be <= 255*HashLen");
  const n = Math.ceil(i / r);
  s === void 0 && (s = Zn);
  const o = new Uint8Array(n * r), a = Ai.create(t, e), c = a._cloneInto(), h = new Uint8Array(a.outputLen);
  for (let l = 0; l < n; l++) Gi[0] = l + 1, c.update(l === 0 ? Zn : h).update(s).update(Gi).digestInto(h), o.set(h, r * l), a._cloneInto(c);
  return a.destroy(), c.destroy(), je(h, Gi), o.slice(0, i);
}
const Dd = (t, e, s, i, r) => Ud(t, Fd(t, e, s), i, r), Oi = Si;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Jr = BigInt(0), Sr = BigInt(1);
function di(t, e = "") {
  if (typeof t != "boolean") {
    const s = e && `"${e}"`;
    throw new Error(s + "expected boolean, got type=" + typeof t);
  }
  return t;
}
function Kt(t, e, s = "") {
  const i = Ii(t), r = t == null ? void 0 : t.length, n = e !== void 0;
  if (!i || n && r !== e) {
    const o = s && `"${s}" `, a = n ? ` of length ${e}` : "", c = i ? `length=${r}` : `type=${typeof t}`;
    throw new Error(o + "expected Uint8Array" + a + ", got " + c);
  }
  return t;
}
function Zs(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Ua(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? Jr : BigInt("0x" + t);
}
function $i(t) {
  return Ua(cs(t));
}
function fi(t) {
  return Ge(t), Ua(cs(Uint8Array.from(t).reverse()));
}
function Xr(t, e) {
  return li(t.toString(16).padStart(e * 2, "0"));
}
function en(t, e) {
  return Xr(t, e).reverse();
}
function fe(t, e, s) {
  let i;
  if (typeof e == "string") try {
    i = li(e);
  } catch (n) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + n);
  }
  else if (Ii(e)) i = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const r = i.length;
  if (typeof s == "number" && r !== s) throw new Error(t + " of length " + s + " expected, got " + r);
  return i;
}
const Wi = (t) => typeof t == "bigint" && Jr <= t;
function jd(t, e, s) {
  return Wi(t) && Wi(e) && Wi(s) && e <= t && t < s;
}
function Pr(t, e, s, i) {
  if (!jd(e, s, i)) throw new Error("expected valid " + t + ": " + s + " <= n < " + i + ", got " + e);
}
function Da(t) {
  let e;
  for (e = 0; t > Jr; t >>= Sr, e += 1) ;
  return e;
}
const Ms = (t) => (Sr << BigInt(t)) - Sr;
function Md(t, e, s) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
  if (typeof s != "function") throw new Error("hmacFn must be a function");
  const i = (d) => new Uint8Array(d), r = (d) => Uint8Array.of(d);
  let n = i(t), o = i(t), a = 0;
  const c = () => {
    n.fill(1), o.fill(0), a = 0;
  }, h = (...d) => s(o, n, ...d), l = (d = i(0)) => {
    o = h(r(0), d), n = h(), d.length !== 0 && (o = h(r(1), d), n = h());
  }, u = () => {
    if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let d = 0;
    const f = [];
    for (; d < e; ) {
      n = h();
      const p = n.slice();
      f.push(p), d += n.length;
    }
    return $t(...f);
  };
  return (d, f) => {
    c(), l(d);
    let p;
    for (; !(p = f(u())); ) l();
    return c(), p;
  };
}
function Ri(t, e, s = {}) {
  if (!t || typeof t != "object") throw new Error("expected valid options object");
  function i(r, n, o) {
    const a = t[r];
    if (o && a === void 0) return;
    const c = typeof a;
    if (c !== n || a === null) throw new Error(`param "${r}" is invalid: expected ${n}, got ${c}`);
  }
  Object.entries(e).forEach(([r, n]) => i(r, n, !1)), Object.entries(s).forEach(([r, n]) => i(r, n, !0));
}
function Yn(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (s, ...i) => {
    const r = e.get(s);
    if (r !== void 0) return r;
    const n = t(s, ...i);
    return e.set(s, n), n;
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Se = BigInt(0), me = BigInt(1), Ht = BigInt(2), ja = BigInt(3), Ma = BigInt(4), La = BigInt(5), Ld = BigInt(7), za = BigInt(8), zd = BigInt(9), Va = BigInt(16);
function Oe(t, e) {
  const s = t % e;
  return s >= Se ? s : e + s;
}
function ze(t, e, s) {
  let i = t;
  for (; e-- > Se; ) i *= i, i %= s;
  return i;
}
function Qn(t, e) {
  if (t === Se) throw new Error("invert: expected non-zero number");
  if (e <= Se) throw new Error("invert: expected positive modulus, got " + e);
  let s = Oe(t, e), i = e, r = Se, n = me;
  for (; s !== Se; ) {
    const o = i / s, a = i % s, c = r - n * o;
    i = s, s = a, r = n, n = c;
  }
  if (i !== me) throw new Error("invert: does not exist");
  return Oe(r, e);
}
function tn(t, e, s) {
  if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
}
function Ka(t, e) {
  const s = (t.ORDER + me) / Ma, i = t.pow(e, s);
  return tn(t, i, e), i;
}
function Vd(t, e) {
  const s = (t.ORDER - La) / za, i = t.mul(e, Ht), r = t.pow(i, s), n = t.mul(e, r), o = t.mul(t.mul(n, Ht), r), a = t.mul(n, t.sub(o, t.ONE));
  return tn(t, a, e), a;
}
function Kd(t) {
  const e = kt(t), s = Ha(t), i = s(e, e.neg(e.ONE)), r = s(e, i), n = s(e, e.neg(i)), o = (t + Ld) / Va;
  return (a, c) => {
    let h = a.pow(c, o), l = a.mul(h, i);
    const u = a.mul(h, r), d = a.mul(h, n), f = a.eql(a.sqr(l), c), p = a.eql(a.sqr(u), c);
    h = a.cmov(h, l, f), l = a.cmov(d, u, p);
    const g = a.eql(a.sqr(l), c), m = a.cmov(h, l, g);
    return tn(a, m, c), m;
  };
}
function Ha(t) {
  if (t < ja) throw new Error("sqrt is not defined for small field");
  let e = t - me, s = 0;
  for (; e % Ht === Se; ) e /= Ht, s++;
  let i = Ht;
  const r = kt(t);
  for (; Jn(r, i) === 1; ) if (i++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (s === 1) return Ka;
  let n = r.pow(i, e);
  const o = (e + me) / Ht;
  return function(a, c) {
    if (a.is0(c)) return c;
    if (Jn(a, c) !== 1) throw new Error("Cannot find square root");
    let h = s, l = a.mul(a.ONE, n), u = a.pow(c, e), d = a.pow(c, o);
    for (; !a.eql(u, a.ONE); ) {
      if (a.is0(u)) return a.ZERO;
      let f = 1, p = a.sqr(u);
      for (; !a.eql(p, a.ONE); ) if (f++, p = a.sqr(p), f === h) throw new Error("Cannot find square root");
      const g = me << BigInt(h - f - 1), m = a.pow(l, g);
      h = f, l = a.sqr(m), u = a.mul(u, l), d = a.mul(d, m);
    }
    return d;
  };
}
function Hd(t) {
  return t % Ma === ja ? Ka : t % za === La ? Vd : t % Va === zd ? Kd(t) : Ha(t);
}
const Gd = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Wd(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" }, s = Gd.reduce((i, r) => (i[r] = "function", i), e);
  return Ri(t, s), t;
}
function Zd(t, e, s) {
  if (s < Se) throw new Error("invalid exponent, negatives unsupported");
  if (s === Se) return t.ONE;
  if (s === me) return e;
  let i = t.ONE, r = e;
  for (; s > Se; ) s & me && (i = t.mul(i, r)), r = t.sqr(r), s >>= me;
  return i;
}
function Ga(t, e, s = !1) {
  const i = new Array(e.length).fill(s ? t.ZERO : void 0), r = e.reduce((o, a, c) => t.is0(a) ? o : (i[c] = o, t.mul(o, a)), t.ONE), n = t.inv(r);
  return e.reduceRight((o, a, c) => t.is0(a) ? o : (i[c] = t.mul(o, i[c]), t.mul(o, a)), n), i;
}
function Jn(t, e) {
  const s = (t.ORDER - me) / Ht, i = t.pow(e, s), r = t.eql(i, t.ONE), n = t.eql(i, t.ZERO), o = t.eql(i, t.neg(t.ONE));
  if (!r && !n && !o) throw new Error("invalid Legendre symbol result");
  return r ? 1 : n ? 0 : -1;
}
function Wa(t, e) {
  e !== void 0 && wt(e);
  const s = e !== void 0 ? e : t.toString(2).length, i = Math.ceil(s / 8);
  return { nBitLength: s, nByteLength: i };
}
function kt(t, e, s = !1, i = {}) {
  if (t <= Se) throw new Error("invalid field: expected ORDER > 0, got " + t);
  let r, n, o = !1, a;
  if (typeof e == "object" && e != null) {
    if (i.sqrt || s) throw new Error("cannot specify opts in two arguments");
    const d = e;
    d.BITS && (r = d.BITS), d.sqrt && (n = d.sqrt), typeof d.isLE == "boolean" && (s = d.isLE), typeof d.modFromBytes == "boolean" && (o = d.modFromBytes), a = d.allowedLengths;
  } else typeof e == "number" && (r = e), i.sqrt && (n = i.sqrt);
  const { nBitLength: c, nByteLength: h } = Wa(t, r);
  if (h > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let l;
  const u = Object.freeze({ ORDER: t, isLE: s, BITS: c, BYTES: h, MASK: Ms(c), ZERO: Se, ONE: me, allowedLengths: a, create: (d) => Oe(d, t), isValid: (d) => {
    if (typeof d != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof d);
    return Se <= d && d < t;
  }, is0: (d) => d === Se, isValidNot0: (d) => !u.is0(d) && u.isValid(d), isOdd: (d) => (d & me) === me, neg: (d) => Oe(-d, t), eql: (d, f) => d === f, sqr: (d) => Oe(d * d, t), add: (d, f) => Oe(d + f, t), sub: (d, f) => Oe(d - f, t), mul: (d, f) => Oe(d * f, t), pow: (d, f) => Zd(u, d, f), div: (d, f) => Oe(d * Qn(f, t), t), sqrN: (d) => d * d, addN: (d, f) => d + f, subN: (d, f) => d - f, mulN: (d, f) => d * f, inv: (d) => Qn(d, t), sqrt: n || ((d) => (l || (l = Hd(t)), l(u, d))), toBytes: (d) => s ? en(d, h) : Xr(d, h), fromBytes: (d, f = !0) => {
    if (a) {
      if (!a.includes(d.length) || d.length > h) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + d.length);
      const g = new Uint8Array(h);
      g.set(d, s ? 0 : g.length - d.length), d = g;
    }
    if (d.length !== h) throw new Error("Field.fromBytes: expected " + h + " bytes, got " + d.length);
    let p = s ? fi(d) : $i(d);
    if (o && (p = Oe(p, t)), !f && !u.isValid(p)) throw new Error("invalid field element: outside of range 0..ORDER");
    return p;
  }, invertBatch: (d) => Ga(u, d), cmov: (d, f, p) => p ? f : d });
  return Object.freeze(u);
}
function Za(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Ya(t) {
  const e = Za(t);
  return e + Math.ceil(e / 2);
}
function Yd(t, e, s = !1) {
  const i = t.length, r = Za(e), n = Ya(e);
  if (i < 16 || i < n || i > 1024) throw new Error("expected " + n + "-1024 bytes of input, got " + i);
  const o = s ? fi(t) : $i(t), a = Oe(o, e - me) + me;
  return s ? en(a, r) : Xr(a, r);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const fs = BigInt(0), Gt = BigInt(1);
function pi(t, e) {
  const s = e.negate();
  return t ? s : e;
}
function Zi(t, e) {
  const s = Ga(t.Fp, e.map((i) => i.Z));
  return e.map((i, r) => t.fromAffine(i.toAffine(s[r])));
}
function Qa(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Yi(t, e) {
  Qa(t, e);
  const s = Math.ceil(e / t) + 1, i = 2 ** (t - 1), r = 2 ** t, n = Ms(t), o = BigInt(t);
  return { windows: s, windowSize: i, mask: n, maxNumber: r, shiftBy: o };
}
function Xn(t, e, s) {
  const { windowSize: i, mask: r, maxNumber: n, shiftBy: o } = s;
  let a = Number(t & r), c = t >> o;
  a > i && (a -= n, c += Gt);
  const h = e * i, l = h + Math.abs(a) - 1, u = a === 0, d = a < 0, f = e % 2 !== 0;
  return { nextN: c, offset: l, isZero: u, isNeg: d, isNegF: f, offsetF: h };
}
function Qd(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((s, i) => {
    if (!(s instanceof e)) throw new Error("invalid point at index " + i);
  });
}
function Jd(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((s, i) => {
    if (!e.isValid(s)) throw new Error("invalid scalar at index " + i);
  });
}
const Qi = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap();
function Ji(t) {
  return Ja.get(t) || 1;
}
function eo(t) {
  if (t !== fs) throw new Error("invalid wNAF");
}
class Xd {
  constructor(e, s) {
    this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
  }
  _unsafeLadder(e, s, i = this.ZERO) {
    let r = e;
    for (; s > fs; ) s & Gt && (i = i.add(r)), r = r.double(), s >>= Gt;
    return i;
  }
  precomputeWindow(e, s) {
    const { windows: i, windowSize: r } = Yi(s, this.bits), n = [];
    let o = e, a = o;
    for (let c = 0; c < i; c++) {
      a = o, n.push(a);
      for (let h = 1; h < r; h++) a = a.add(o), n.push(a);
      o = a.double();
    }
    return n;
  }
  wNAF(e, s, i) {
    if (!this.Fn.isValid(i)) throw new Error("invalid scalar");
    let r = this.ZERO, n = this.BASE;
    const o = Yi(e, this.bits);
    for (let a = 0; a < o.windows; a++) {
      const { nextN: c, offset: h, isZero: l, isNeg: u, isNegF: d, offsetF: f } = Xn(i, a, o);
      i = c, l ? n = n.add(pi(d, s[f])) : r = r.add(pi(u, s[h]));
    }
    return eo(i), { p: r, f: n };
  }
  wNAFUnsafe(e, s, i, r = this.ZERO) {
    const n = Yi(e, this.bits);
    for (let o = 0; o < n.windows && i !== fs; o++) {
      const { nextN: a, offset: c, isZero: h, isNeg: l } = Xn(i, o, n);
      if (i = a, !h) {
        const u = s[c];
        r = r.add(l ? u.negate() : u);
      }
    }
    return eo(i), r;
  }
  getPrecomputes(e, s, i) {
    let r = Qi.get(s);
    return r || (r = this.precomputeWindow(s, e), e !== 1 && (typeof i == "function" && (r = i(r)), Qi.set(s, r))), r;
  }
  cached(e, s, i) {
    const r = Ji(e);
    return this.wNAF(r, this.getPrecomputes(r, e, i), s);
  }
  unsafe(e, s, i, r) {
    const n = Ji(e);
    return n === 1 ? this._unsafeLadder(e, s, r) : this.wNAFUnsafe(n, this.getPrecomputes(n, e, i), s, r);
  }
  createCache(e, s) {
    Qa(s, this.bits), Ja.set(e, s), Qi.delete(e);
  }
  hasCache(e) {
    return Ji(e) !== 1;
  }
}
function ef(t, e, s, i) {
  let r = e, n = t.ZERO, o = t.ZERO;
  for (; s > fs || i > fs; ) s & Gt && (n = n.add(r)), i & Gt && (o = o.add(r)), r = r.double(), s >>= Gt, i >>= Gt;
  return { p1: n, p2: o };
}
function tf(t, e, s, i) {
  Qd(s, t), Jd(i, e);
  const r = s.length, n = i.length;
  if (r !== n) throw new Error("arrays of points and scalars must have equal length");
  const o = t.ZERO, a = Da(BigInt(r));
  let c = 1;
  a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
  const h = Ms(c), l = new Array(Number(h) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
  let d = o;
  for (let f = u; f >= 0; f -= c) {
    l.fill(o);
    for (let g = 0; g < n; g++) {
      const m = i[g], O = Number(m >> BigInt(f) & h);
      l[O] = l[O].add(s[g]);
    }
    let p = o;
    for (let g = l.length - 1, m = o; g > 0; g--) m = m.add(l[g]), p = p.add(m);
    if (d = d.add(p), f !== 0) for (let g = 0; g < c; g++) d = d.double();
  }
  return d;
}
function to(t, e, s) {
  if (e) {
    if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return Wd(e), e;
  } else return kt(t, { isLE: s });
}
function sf(t, e, s = {}, i) {
  if (i === void 0 && (i = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
  for (const a of ["p", "n", "h"]) {
    const c = e[a];
    if (!(typeof c == "bigint" && c > fs)) throw new Error(`CURVE.${a} must be positive bigint`);
  }
  const r = to(e.p, s.Fp, i), n = to(e.n, s.Fn, i), o = ["Gx", "Gy", "a", "b"];
  for (const a of o) if (!r.isValid(e[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
  return e = Object.freeze(Object.assign({}, e)), { CURVE: e, Fp: r, Fn: n };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0), BigInt(1), BigInt(2), BigInt(8), Ia("HashToScalar-");
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const bs = BigInt(0), ts = BigInt(1), Ys = BigInt(2);
function rf(t) {
  return Ri(t, { adjustScalarBytes: "function", powPminus2: "function" }), Object.freeze({ ...t });
}
function nf(t) {
  const e = rf(t), { P: s, type: i, adjustScalarBytes: r, powPminus2: n, randomBytes: o } = e, a = i === "x25519";
  if (!a && i !== "x448") throw new Error("invalid type");
  const c = o || Qt, h = a ? 255 : 448, l = a ? 32 : 56, u = BigInt(a ? 9 : 5), d = BigInt(a ? 121665 : 39081), f = a ? Ys ** BigInt(254) : Ys ** BigInt(447), p = a ? BigInt(8) * Ys ** BigInt(251) - ts : BigInt(4) * Ys ** BigInt(445) - ts, g = f + p + ts, m = (S) => Oe(S, s), O = k(u);
  function k(S) {
    return en(m(S), l);
  }
  function P(S) {
    const b = fe("u coordinate", S, l);
    return a && (b[31] &= 127), m(fi(b));
  }
  function _(S) {
    return fi(r(fe("scalar", S, l)));
  }
  function R(S, b) {
    const E = N(P(b), _(S));
    if (E === bs) throw new Error("invalid private or public key received");
    return k(E);
  }
  function C(S) {
    return R(S, O);
  }
  function q(S, b, E) {
    const y = m(S * (b - E));
    return b = m(b - y), E = m(E + y), { x_2: b, x_3: E };
  }
  function N(S, b) {
    Pr("u", S, bs, s), Pr("scalar", b, f, g);
    const E = b, y = S;
    let w = ts, I = bs, $ = S, v = ts, x = bs;
    for (let U = BigInt(h - 1); U >= bs; U--) {
      const V = E >> U & ts;
      x ^= V, { x_2: w, x_3: $ } = q(x, w, $), { x_2: I, x_3: v } = q(x, I, v), x = V;
      const z = w + I, L = m(z * z), H = w - I, G = m(H * H), Q = L - G, K = $ + v, Y = $ - v, pe = m(Y * z), be = m(K * H), ge = pe + be, Ne = pe - be;
      $ = m(ge * ge), v = m(y * m(Ne * Ne)), w = m(L * G), I = m(Q * (L + m(d * Q)));
    }
    ({ x_2: w, x_3: $ } = q(x, w, $)), { x_2: I, x_3: v } = q(x, I, v);
    const B = n(I);
    return m(w * B);
  }
  const A = { secretKey: l, publicKey: l, seed: l }, T = (S = c(l)) => (Ge(S, A.seed), S);
  function F(S) {
    const b = T(S);
    return { secretKey: b, publicKey: C(b) };
  }
  return { keygen: F, getSharedSecret: (S, b) => R(S, b), getPublicKey: (S) => C(S), scalarMult: R, scalarMultBase: C, utils: { randomSecretKey: T, randomPrivateKey: T }, GuBytes: O.slice(), lengths: A };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const of = BigInt(1), so = BigInt(2), af = BigInt(3), cf = BigInt(5);
BigInt(8);
const Xa = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), hf = { p: Xa, n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"), a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"), d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"), Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"), Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658") };
function lf(t) {
  const e = BigInt(10), s = BigInt(20), i = BigInt(40), r = BigInt(80), n = Xa, o = t * t % n * t % n, a = ze(o, so, n) * o % n, c = ze(a, of, n) * t % n, h = ze(c, cf, n) * c % n, l = ze(h, e, n) * h % n, u = ze(l, s, n) * l % n, d = ze(u, i, n) * u % n, f = ze(d, r, n) * d % n, p = ze(f, r, n) * d % n, g = ze(p, e, n) * h % n;
  return { pow_p_5_8: ze(g, so, n) * t % n, b2: o };
}
function uf(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
const df = kt(hf.p, { isLE: !0 }), Ar = (() => {
  const t = df.ORDER;
  return nf({ P: t, type: "x25519", powPminus2: (e) => {
    const { pow_p_5_8: s, b2: i } = lf(e);
    return Oe(ze(s, af, t) * i, t);
  }, adjustScalarBytes: uf });
})();
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const io = (t, e) => (t + (t >= 0 ? e : -e) / ec) / e;
function ff(t, e, s) {
  const [[i, r], [n, o]] = e, a = io(o * t, s), c = io(-r * t, s);
  let h = t - a * i - c * n, l = -a * r - c * o;
  const u = h < pt, d = l < pt;
  u && (h = -h), d && (l = -l);
  const f = Ms(Math.ceil(Da(s) / 2)) + hs;
  if (h < pt || h >= f || l < pt || l >= f) throw new Error("splitScalar (endomorphism): failed, k=" + t);
  return { k1neg: u, k1: h, k2neg: d, k2: l };
}
function Or(t) {
  if (!["compact", "recovered", "der"].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
  return t;
}
function Xi(t, e) {
  const s = {};
  for (let i of Object.keys(e)) s[i] = t[i] === void 0 ? e[i] : t[i];
  return di(s.lowS, "lowS"), di(s.prehash, "prehash"), s.format !== void 0 && Or(s.format), s;
}
class pf extends Error {
  constructor(e = "") {
    super(e);
  }
}
const dt = { Err: pf, _tlv: { encode: (t, e) => {
  const { Err: s } = dt;
  if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
  if (e.length & 1) throw new s("tlv.encode: unpadded data");
  const i = e.length / 2, r = Zs(i);
  if (r.length / 2 & 128) throw new s("tlv.encode: long form length too big");
  const n = i > 127 ? Zs(r.length / 2 | 128) : "";
  return Zs(t) + n + r + e;
}, decode(t, e) {
  const { Err: s } = dt;
  let i = 0;
  if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
  if (e.length < 2 || e[i++] !== t) throw new s("tlv.decode: wrong tlv");
  const r = e[i++], n = !!(r & 128);
  let o = 0;
  if (!n) o = r;
  else {
    const c = r & 127;
    if (!c) throw new s("tlv.decode(long): indefinite length not supported");
    if (c > 4) throw new s("tlv.decode(long): byte length is too big");
    const h = e.subarray(i, i + c);
    if (h.length !== c) throw new s("tlv.decode: length bytes not complete");
    if (h[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
    for (const l of h) o = o << 8 | l;
    if (i += c, o < 128) throw new s("tlv.decode(long): not minimal encoding");
  }
  const a = e.subarray(i, i + o);
  if (a.length !== o) throw new s("tlv.decode: wrong value length");
  return { v: a, l: e.subarray(i + o) };
} }, _int: { encode(t) {
  const { Err: e } = dt;
  if (t < pt) throw new e("integer: negative integers are not allowed");
  let s = Zs(t);
  if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
  return s;
}, decode(t) {
  const { Err: e } = dt;
  if (t[0] & 128) throw new e("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
  return $i(t);
} }, toSig(t) {
  const { Err: e, _int: s, _tlv: i } = dt, r = fe("signature", t), { v: n, l: o } = i.decode(48, r);
  if (o.length) throw new e("invalid signature: left bytes after parsing");
  const { v: a, l: c } = i.decode(2, n), { v: h, l } = i.decode(2, c);
  if (l.length) throw new e("invalid signature: left bytes after parsing");
  return { r: s.decode(a), s: s.decode(h) };
}, hexFromSig(t) {
  const { _tlv: e, _int: s } = dt, i = e.encode(2, s.encode(t.r)), r = e.encode(2, s.encode(t.s)), n = i + r;
  return e.encode(48, n);
} }, pt = BigInt(0), hs = BigInt(1), ec = BigInt(2), Qs = BigInt(3), gf = BigInt(4);
function is(t, e) {
  const { BYTES: s } = t;
  let i;
  if (typeof e == "bigint") i = e;
  else {
    let r = fe("private key", e);
    try {
      i = t.fromBytes(r);
    } catch {
      throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof e}`);
    }
  }
  if (!t.isValidNot0(i)) throw new Error("invalid private key: out of range [1..N-1]");
  return i;
}
function yf(t, e = {}) {
  const s = sf("weierstrass", t, e), { Fp: i, Fn: r } = s;
  let n = s.CURVE;
  const { h: o, n: a } = n;
  Ri(e, {}, { allowInfinityPoint: "boolean", clearCofactor: "function", isTorsionFree: "function", fromBytes: "function", toBytes: "function", endo: "object", wrapPrivateKey: "boolean" });
  const { endo: c } = e;
  if (c && (!i.is0(n.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
  const h = sc(i, r);
  function l() {
    if (!i.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function u(S, b, E) {
    const { x: y, y: w } = b.toAffine(), I = i.toBytes(y);
    if (di(E, "isCompressed"), E) {
      l();
      const $ = !i.isOdd(w);
      return $t(tc($), I);
    } else return $t(Uint8Array.of(4), I, i.toBytes(w));
  }
  function d(S) {
    Kt(S, void 0, "Point");
    const { publicKey: b, publicKeyUncompressed: E } = h, y = S.length, w = S[0], I = S.subarray(1);
    if (y === b && (w === 2 || w === 3)) {
      const $ = i.fromBytes(I);
      if (!i.isValid($)) throw new Error("bad point: is not on curve, wrong x");
      const v = g($);
      let x;
      try {
        x = i.sqrt(v);
      } catch (U) {
        const V = U instanceof Error ? ": " + U.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + V);
      }
      l();
      const B = i.isOdd(x);
      return (w & 1) === 1 !== B && (x = i.neg(x)), { x: $, y: x };
    } else if (y === E && w === 4) {
      const $ = i.BYTES, v = i.fromBytes(I.subarray(0, $)), x = i.fromBytes(I.subarray($, $ * 2));
      if (!m(v, x)) throw new Error("bad point: is not on curve");
      return { x: v, y: x };
    } else throw new Error(`bad point: got length ${y}, expected compressed=${b} or uncompressed=${E}`);
  }
  const f = e.toBytes || u, p = e.fromBytes || d;
  function g(S) {
    const b = i.sqr(S), E = i.mul(b, S);
    return i.add(i.add(E, i.mul(S, n.a)), n.b);
  }
  function m(S, b) {
    const E = i.sqr(b), y = g(S);
    return i.eql(E, y);
  }
  if (!m(n.Gx, n.Gy)) throw new Error("bad curve params: generator point");
  const O = i.mul(i.pow(n.a, Qs), gf), k = i.mul(i.sqr(n.b), BigInt(27));
  if (i.is0(i.add(O, k))) throw new Error("bad curve params: a or b");
  function P(S, b, E = !1) {
    if (!i.isValid(b) || E && i.is0(b)) throw new Error(`bad point coordinate ${S}`);
    return b;
  }
  function _(S) {
    if (!(S instanceof A)) throw new Error("ProjectivePoint expected");
  }
  function R(S) {
    if (!c || !c.basises) throw new Error("no endo");
    return ff(S, c.basises, r.ORDER);
  }
  const C = Yn((S, b) => {
    const { X: E, Y: y, Z: w } = S;
    if (i.eql(w, i.ONE)) return { x: E, y };
    const I = S.is0();
    b == null && (b = I ? i.ONE : i.inv(w));
    const $ = i.mul(E, b), v = i.mul(y, b), x = i.mul(w, b);
    if (I) return { x: i.ZERO, y: i.ZERO };
    if (!i.eql(x, i.ONE)) throw new Error("invZ was invalid");
    return { x: $, y: v };
  }), q = Yn((S) => {
    if (S.is0()) {
      if (e.allowInfinityPoint && !i.is0(S.Y)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: b, y: E } = S.toAffine();
    if (!i.isValid(b) || !i.isValid(E)) throw new Error("bad point: x or y not field elements");
    if (!m(b, E)) throw new Error("bad point: equation left != right");
    if (!S.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  function N(S, b, E, y, w) {
    return E = new A(i.mul(E.X, S), E.Y, E.Z), b = pi(y, b), E = pi(w, E), b.add(E);
  }
  class A {
    constructor(b, E, y) {
      this.X = P("x", b), this.Y = P("y", E, !0), this.Z = P("z", y), Object.freeze(this);
    }
    static CURVE() {
      return n;
    }
    static fromAffine(b) {
      const { x: E, y } = b || {};
      if (!b || !i.isValid(E) || !i.isValid(y)) throw new Error("invalid affine point");
      if (b instanceof A) throw new Error("projective point not allowed");
      return i.is0(E) && i.is0(y) ? A.ZERO : new A(E, y, i.ONE);
    }
    static fromBytes(b) {
      const E = A.fromAffine(p(Kt(b, void 0, "point")));
      return E.assertValidity(), E;
    }
    static fromHex(b) {
      return A.fromBytes(fe("pointHex", b));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(b = 8, E = !0) {
      return F.createCache(this, b), E || this.multiply(Qs), this;
    }
    assertValidity() {
      q(this);
    }
    hasEvenY() {
      const { y: b } = this.toAffine();
      if (!i.isOdd) throw new Error("Field doesn't support isOdd");
      return !i.isOdd(b);
    }
    equals(b) {
      _(b);
      const { X: E, Y: y, Z: w } = this, { X: I, Y: $, Z: v } = b, x = i.eql(i.mul(E, v), i.mul(I, w)), B = i.eql(i.mul(y, v), i.mul($, w));
      return x && B;
    }
    negate() {
      return new A(this.X, i.neg(this.Y), this.Z);
    }
    double() {
      const { a: b, b: E } = n, y = i.mul(E, Qs), { X: w, Y: I, Z: $ } = this;
      let v = i.ZERO, x = i.ZERO, B = i.ZERO, U = i.mul(w, w), V = i.mul(I, I), z = i.mul($, $), L = i.mul(w, I);
      return L = i.add(L, L), B = i.mul(w, $), B = i.add(B, B), v = i.mul(b, B), x = i.mul(y, z), x = i.add(v, x), v = i.sub(V, x), x = i.add(V, x), x = i.mul(v, x), v = i.mul(L, v), B = i.mul(y, B), z = i.mul(b, z), L = i.sub(U, z), L = i.mul(b, L), L = i.add(L, B), B = i.add(U, U), U = i.add(B, U), U = i.add(U, z), U = i.mul(U, L), x = i.add(x, U), z = i.mul(I, $), z = i.add(z, z), U = i.mul(z, L), v = i.sub(v, U), B = i.mul(z, V), B = i.add(B, B), B = i.add(B, B), new A(v, x, B);
    }
    add(b) {
      _(b);
      const { X: E, Y: y, Z: w } = this, { X: I, Y: $, Z: v } = b;
      let x = i.ZERO, B = i.ZERO, U = i.ZERO;
      const V = n.a, z = i.mul(n.b, Qs);
      let L = i.mul(E, I), H = i.mul(y, $), G = i.mul(w, v), Q = i.add(E, y), K = i.add(I, $);
      Q = i.mul(Q, K), K = i.add(L, H), Q = i.sub(Q, K), K = i.add(E, w);
      let Y = i.add(I, v);
      return K = i.mul(K, Y), Y = i.add(L, G), K = i.sub(K, Y), Y = i.add(y, w), x = i.add($, v), Y = i.mul(Y, x), x = i.add(H, G), Y = i.sub(Y, x), U = i.mul(V, K), x = i.mul(z, G), U = i.add(x, U), x = i.sub(H, U), U = i.add(H, U), B = i.mul(x, U), H = i.add(L, L), H = i.add(H, L), G = i.mul(V, G), K = i.mul(z, K), H = i.add(H, G), G = i.sub(L, G), G = i.mul(V, G), K = i.add(K, G), L = i.mul(H, K), B = i.add(B, L), L = i.mul(Y, K), x = i.mul(Q, x), x = i.sub(x, L), L = i.mul(Q, H), U = i.mul(Y, U), U = i.add(U, L), new A(x, B, U);
    }
    subtract(b) {
      return this.add(b.negate());
    }
    is0() {
      return this.equals(A.ZERO);
    }
    multiply(b) {
      const { endo: E } = e;
      if (!r.isValidNot0(b)) throw new Error("invalid scalar: out of range");
      let y, w;
      const I = ($) => F.cached(this, $, (v) => Zi(A, v));
      if (E) {
        const { k1neg: $, k1: v, k2neg: x, k2: B } = R(b), { p: U, f: V } = I(v), { p: z, f: L } = I(B);
        w = V.add(L), y = N(E.beta, U, z, $, x);
      } else {
        const { p: $, f: v } = I(b);
        y = $, w = v;
      }
      return Zi(A, [y, w])[0];
    }
    multiplyUnsafe(b) {
      const { endo: E } = e, y = this;
      if (!r.isValid(b)) throw new Error("invalid scalar: out of range");
      if (b === pt || y.is0()) return A.ZERO;
      if (b === hs) return y;
      if (F.hasCache(this)) return this.multiply(b);
      if (E) {
        const { k1neg: w, k1: I, k2neg: $, k2: v } = R(b), { p1: x, p2: B } = ef(A, y, I, v);
        return N(E.beta, x, B, w, $);
      } else return F.unsafe(y, b);
    }
    multiplyAndAddUnsafe(b, E, y) {
      const w = this.multiplyUnsafe(E).add(b.multiplyUnsafe(y));
      return w.is0() ? void 0 : w;
    }
    toAffine(b) {
      return C(this, b);
    }
    isTorsionFree() {
      const { isTorsionFree: b } = e;
      return o === hs ? !0 : b ? b(A, this) : F.unsafe(this, a).is0();
    }
    clearCofactor() {
      const { clearCofactor: b } = e;
      return o === hs ? this : b ? b(A, this) : this.multiplyUnsafe(o);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    toBytes(b = !0) {
      return di(b, "isCompressed"), this.assertValidity(), f(A, this, b);
    }
    toHex(b = !0) {
      return cs(this.toBytes(b));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(b = !0) {
      return this.toBytes(b);
    }
    _setWindowSize(b) {
      this.precompute(b);
    }
    static normalizeZ(b) {
      return Zi(A, b);
    }
    static msm(b, E) {
      return tf(A, r, b, E);
    }
    static fromPrivateKey(b) {
      return A.BASE.multiply(is(r, b));
    }
  }
  A.BASE = new A(n.Gx, n.Gy, i.ONE), A.ZERO = new A(i.ZERO, i.ONE, i.ZERO), A.Fp = i, A.Fn = r;
  const T = r.BITS, F = new Xd(A, e.endo ? Math.ceil(T / 2) : T);
  return A.BASE.precompute(8), A;
}
function tc(t) {
  return Uint8Array.of(t ? 2 : 3);
}
function sc(t, e) {
  return { secretKey: e.BYTES, publicKey: 1 + t.BYTES, publicKeyUncompressed: 1 + 2 * t.BYTES, publicKeyHasPrefix: !0, signature: 2 * e.BYTES };
}
function mf(t, e = {}) {
  const { Fn: s } = t, i = e.randomBytes || Qt, r = Object.assign(sc(t.Fp, s), { seed: Ya(s.ORDER) });
  function n(d) {
    try {
      return !!is(s, d);
    } catch {
      return !1;
    }
  }
  function o(d, f) {
    const { publicKey: p, publicKeyUncompressed: g } = r;
    try {
      const m = d.length;
      return f === !0 && m !== p || f === !1 && m !== g ? !1 : !!t.fromBytes(d);
    } catch {
      return !1;
    }
  }
  function a(d = i(r.seed)) {
    return Yd(Kt(d, r.seed, "seed"), s.ORDER);
  }
  function c(d, f = !0) {
    return t.BASE.multiply(is(s, d)).toBytes(f);
  }
  function h(d) {
    const f = a(d);
    return { secretKey: f, publicKey: c(f) };
  }
  function l(d) {
    if (typeof d == "bigint") return !1;
    if (d instanceof t) return !0;
    const { secretKey: f, publicKey: p, publicKeyUncompressed: g } = r;
    if (s.allowedLengths || f === p) return;
    const m = fe("key", d).length;
    return m === p || m === g;
  }
  function u(d, f, p = !0) {
    if (l(d) === !0) throw new Error("first arg must be private key");
    if (l(f) === !1) throw new Error("second arg must be public key");
    const g = is(s, d);
    return t.fromHex(f).multiply(g).toBytes(p);
  }
  return Object.freeze({ getPublicKey: c, getSharedSecret: u, keygen: h, Point: t, utils: { isValidSecretKey: n, isValidPublicKey: o, randomSecretKey: a, isValidPrivateKey: n, randomPrivateKey: a, normPrivateKeyToScalar: (d) => is(s, d), precompute(d = 8, f = t.BASE) {
    return f.precompute(d, !1);
  } }, lengths: r });
}
function wf(t, e, s = {}) {
  _i(e), Ri(s, {}, { hmac: "function", lowS: "boolean", randomBytes: "function", bits2int: "function", bits2int_modN: "function" });
  const i = s.randomBytes || Qt, r = s.hmac || ((E, ...y) => Ai(e, E, $t(...y))), { Fp: n, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: h, getPublicKey: l, getSharedSecret: u, utils: d, lengths: f } = mf(t, s), p = { prehash: !1, lowS: typeof s.lowS == "boolean" ? s.lowS : !1, format: void 0, extraEntropy: !1 }, g = "compact";
  function m(E) {
    const y = a >> hs;
    return E > y;
  }
  function O(E, y) {
    if (!o.isValidNot0(y)) throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
    return y;
  }
  function k(E, y) {
    Or(y);
    const w = f.signature, I = y === "compact" ? w : y === "recovered" ? w + 1 : void 0;
    return Kt(E, I, `${y} signature`);
  }
  class P {
    constructor(y, w, I) {
      this.r = O("r", y), this.s = O("s", w), I != null && (this.recovery = I), Object.freeze(this);
    }
    static fromBytes(y, w = g) {
      k(y, w);
      let I;
      if (w === "der") {
        const { r: B, s: U } = dt.toSig(Kt(y));
        return new P(B, U);
      }
      w === "recovered" && (I = y[0], w = "compact", y = y.subarray(1));
      const $ = o.BYTES, v = y.subarray(0, $), x = y.subarray($, $ * 2);
      return new P(o.fromBytes(v), o.fromBytes(x), I);
    }
    static fromHex(y, w) {
      return this.fromBytes(li(y), w);
    }
    addRecoveryBit(y) {
      return new P(this.r, this.s, y);
    }
    recoverPublicKey(y) {
      const w = n.ORDER, { r: I, s: $, recovery: v } = this;
      if (v == null || ![0, 1, 2, 3].includes(v)) throw new Error("recovery id invalid");
      if (a * ec < w && v > 1) throw new Error("recovery id is ambiguous for h>1 curve");
      const x = v === 2 || v === 3 ? I + a : I;
      if (!n.isValid(x)) throw new Error("recovery id 2 or 3 invalid");
      const B = n.toBytes(x), U = t.fromBytes($t(tc((v & 1) === 0), B)), V = o.inv(x), z = R(fe("msgHash", y)), L = o.create(-z * V), H = o.create($ * V), G = t.BASE.multiplyUnsafe(L).add(U.multiplyUnsafe(H));
      if (G.is0()) throw new Error("point at infinify");
      return G.assertValidity(), G;
    }
    hasHighS() {
      return m(this.s);
    }
    toBytes(y = g) {
      if (Or(y), y === "der") return li(dt.hexFromSig(this));
      const w = o.toBytes(this.r), I = o.toBytes(this.s);
      if (y === "recovered") {
        if (this.recovery == null) throw new Error("recovery bit must be present");
        return $t(Uint8Array.of(this.recovery), w, I);
      }
      return $t(w, I);
    }
    toHex(y) {
      return cs(this.toBytes(y));
    }
    assertValidity() {
    }
    static fromCompact(y) {
      return P.fromBytes(fe("sig", y), "compact");
    }
    static fromDER(y) {
      return P.fromBytes(fe("sig", y), "der");
    }
    normalizeS() {
      return this.hasHighS() ? new P(this.r, o.neg(this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return cs(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return cs(this.toBytes("compact"));
    }
  }
  const _ = s.bits2int || function(E) {
    if (E.length > 8192) throw new Error("input is too large");
    const y = $i(E), w = E.length * 8 - c;
    return w > 0 ? y >> BigInt(w) : y;
  }, R = s.bits2int_modN || function(E) {
    return o.create(_(E));
  }, C = Ms(c);
  function q(E) {
    return Pr("num < 2^" + c, E, pt, C), o.toBytes(E);
  }
  function N(E, y) {
    return Kt(E, void 0, "message"), y ? Kt(e(E), void 0, "prehashed message") : E;
  }
  function A(E, y, w) {
    if (["recovered", "canonical"].some((H) => H in w)) throw new Error("sign() legacy options not supported");
    const { lowS: I, prehash: $, extraEntropy: v } = Xi(w, p);
    E = N(E, $);
    const x = R(E), B = is(o, y), U = [q(B), q(x)];
    if (v != null && v !== !1) {
      const H = v === !0 ? i(f.secretKey) : v;
      U.push(fe("extraEntropy", H));
    }
    const V = $t(...U), z = x;
    function L(H) {
      const G = _(H);
      if (!o.isValidNot0(G)) return;
      const Q = o.inv(G), K = t.BASE.multiply(G).toAffine(), Y = o.create(K.x);
      if (Y === pt) return;
      const pe = o.create(Q * o.create(z + Y * B));
      if (pe === pt) return;
      let be = (K.x === Y ? 0 : 2) | Number(K.y & hs), ge = pe;
      return I && m(pe) && (ge = o.neg(pe), be ^= 1), new P(Y, ge, be);
    }
    return { seed: V, k2sig: L };
  }
  function T(E, y, w = {}) {
    E = fe("message", E);
    const { seed: I, k2sig: $ } = A(E, y, w);
    return Md(e.outputLen, o.BYTES, r)(I, $);
  }
  function F(E) {
    let y;
    const w = typeof E == "string" || Ii(E), I = !w && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
    if (!w && !I) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    if (I) y = new P(E.r, E.s);
    else if (w) {
      try {
        y = P.fromBytes(fe("sig", E), "der");
      } catch ($) {
        if (!($ instanceof dt.Err)) throw $;
      }
      if (!y) try {
        y = P.fromBytes(fe("sig", E), "compact");
      } catch {
        return !1;
      }
    }
    return y || !1;
  }
  function S(E, y, w, I = {}) {
    const { lowS: $, prehash: v, format: x } = Xi(I, p);
    if (w = fe("publicKey", w), y = N(fe("message", y), v), "strict" in I) throw new Error("options.strict was renamed to lowS");
    const B = x === void 0 ? F(E) : P.fromBytes(fe("sig", E), x);
    if (B === !1) return !1;
    try {
      const U = t.fromBytes(w);
      if ($ && B.hasHighS()) return !1;
      const { r: V, s: z } = B, L = R(y), H = o.inv(z), G = o.create(L * H), Q = o.create(V * H), K = t.BASE.multiplyUnsafe(G).add(U.multiplyUnsafe(Q));
      return K.is0() ? !1 : o.create(K.x) === V;
    } catch {
      return !1;
    }
  }
  function b(E, y, w = {}) {
    const { prehash: I } = Xi(w, p);
    return y = N(y, I), P.fromBytes(E, "recovered").recoverPublicKey(y).toBytes();
  }
  return Object.freeze({ keygen: h, getPublicKey: l, getSharedSecret: u, utils: d, lengths: f, Point: t, sign: T, verify: S, recoverPublicKey: b, Signature: P, hash: e });
}
function bf(t) {
  const e = { a: t.a, b: t.b, p: t.Fp.ORDER, n: t.n, h: t.h, Gx: t.Gx, Gy: t.Gy }, s = t.Fp;
  let i = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))) : void 0;
  const r = kt(e.n, { BITS: t.nBitLength, allowedLengths: i, modFromBytes: t.wrapPrivateKey }), n = { Fp: s, Fn: r, allowInfinityPoint: t.allowInfinityPoint, endo: t.endo, isTorsionFree: t.isTorsionFree, clearCofactor: t.clearCofactor, fromBytes: t.fromBytes, toBytes: t.toBytes };
  return { CURVE: e, curveOpts: n };
}
function vf(t) {
  const { CURVE: e, curveOpts: s } = bf(t), i = { hmac: t.hmac, randomBytes: t.randomBytes, lowS: t.lowS, bits2int: t.bits2int, bits2int_modN: t.bits2int_modN };
  return { CURVE: e, curveOpts: s, hash: t.hash, ecdsaOpts: i };
}
function Ef(t, e) {
  const s = e.Point;
  return Object.assign({}, e, { ProjectivePoint: s, CURVE: Object.assign({}, t, Wa(s.Fn.ORDER, s.Fn.BITS)) });
}
function If(t) {
  const { CURVE: e, curveOpts: s, hash: i, ecdsaOpts: r } = vf(t), n = yf(e, s), o = wf(n, i, r);
  return Ef(t, o);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function $r(t, e) {
  const s = (i) => If({ ...t, hash: i });
  return { ...s(e), create: s };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ic = { p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"), n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), h: BigInt(1), a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"), b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5") }, rc = { p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"), n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"), h: BigInt(1), a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"), b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"), Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"), Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f") }, nc = { p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"), h: BigInt(1), a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"), b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"), Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"), Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650") }, _f = kt(ic.p), xf = kt(rc.p), Sf = kt(nc.p), Pf = $r({ ...ic, Fp: _f, lowS: !1 }, Si);
$r({ ...rc, Fp: xf, lowS: !1 }, Fu), $r({ ...nc, Fp: Sf, lowS: !1, allowedPrivateKeyLengths: [130, 131, 132] }, ku);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Af = Pf, oc = "base10", we = "base16", _e = "base64pad", Rt = "base64url", Ls = "utf8", ac = 0, yt = 1, zs = 2, Of = 0, ro = 1, As = 12, sn = 32;
function $f() {
  const t = Ar.utils.randomPrivateKey(), e = Ar.getPublicKey(t);
  return { privateKey: Pe(t, we), publicKey: Pe(e, we) };
}
function Rr() {
  const t = Qt(sn);
  return Pe(t, we);
}
function Rf(t, e) {
  const s = Ar.getSharedSecret(Ue(t, we), Ue(e, we)), i = Dd(Oi, s, void 0, void 0, sn);
  return Pe(i, we);
}
function ii(t) {
  const e = Oi(Ue(t, we));
  return Pe(e, we);
}
function Fe(t) {
  const e = Oi(Ue(t, Ls));
  return Pe(e, we);
}
function cc(t) {
  return Ue(`${t}`, oc);
}
function Yt(t) {
  return Number(Pe(t, oc));
}
function hc(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function lc(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), s = (4 - e.length % 4) % 4;
  return e + "=".repeat(s);
}
function Cf(t) {
  const e = cc(typeof t.type < "u" ? t.type : ac);
  if (Yt(e) === yt && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const s = typeof t.senderPublicKey < "u" ? Ue(t.senderPublicKey, we) : void 0, i = typeof t.iv < "u" ? Ue(t.iv, we) : Qt(As), r = Ue(t.symKey, we), n = ka(r, i).encrypt(Ue(t.message, Ls)), o = uc({ type: e, sealed: n, iv: i, senderPublicKey: s });
  return t.encoding === Rt ? hc(o) : o;
}
function Nf(t) {
  const e = Ue(t.symKey, we), { sealed: s, iv: i } = qs({ encoded: t.encoded, encoding: t.encoding }), r = ka(e, i).decrypt(s);
  if (r === null) throw new Error("Failed to decrypt");
  return Pe(r, Ls);
}
function Tf(t, e) {
  const s = cc(zs), i = Qt(As), r = Ue(t, Ls), n = uc({ type: s, sealed: r, iv: i });
  return e === Rt ? hc(n) : n;
}
function Bf(t, e) {
  const { sealed: s } = qs({ encoded: t, encoding: e });
  return Pe(s, Ls);
}
function uc(t) {
  if (Yt(t.type) === zs) return Pe(Ps([t.type, t.sealed]), _e);
  if (Yt(t.type) === yt) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return Pe(Ps([t.type, t.senderPublicKey, t.iv, t.sealed]), _e);
  }
  return Pe(Ps([t.type, t.iv, t.sealed]), _e);
}
function qs(t) {
  const e = (t.encoding || _e) === Rt ? lc(t.encoded) : t.encoded, s = Ue(e, _e), i = s.slice(Of, ro), r = ro;
  if (Yt(i) === yt) {
    const c = r + sn, h = c + As, l = s.slice(r, c), u = s.slice(c, h), d = s.slice(h);
    return { type: i, sealed: d, iv: u, senderPublicKey: l };
  }
  if (Yt(i) === zs) {
    const c = s.slice(r), h = Qt(As);
    return { type: i, sealed: c, iv: h };
  }
  const n = r + As, o = s.slice(r, n), a = s.slice(n);
  return { type: i, sealed: a, iv: o };
}
function qf(t, e) {
  const s = qs({ encoded: t, encoding: e == null ? void 0 : e.encoding });
  return dc({ type: Yt(s.type), senderPublicKey: typeof s.senderPublicKey < "u" ? Pe(s.senderPublicKey, we) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function dc(t) {
  const e = (t == null ? void 0 : t.type) || ac;
  if (e === yt) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function no(t) {
  return t.type === yt && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function oo(t) {
  return t.type === zs;
}
function kf(t) {
  const e = Buffer.from(t.x, "base64"), s = Buffer.from(t.y, "base64");
  return Ps([new Uint8Array([4]), e, s]);
}
function Ff(t, e) {
  const [s, i, r] = t.split("."), n = Buffer.from(lc(r), "base64");
  if (n.length !== 64) throw new Error("Invalid signature length");
  const o = n.slice(0, 32), a = n.slice(32, 64), c = `${s}.${i}`, h = Oi(c), l = kf(e);
  if (!Af.verify(Ps([o, a]), h, l)) throw new Error("Invalid signature");
  return dr(t).payload;
}
const Uf = "irn";
function gi(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Uf };
}
function rs(t) {
  const e = oh[t];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
function Df(t, e = "-") {
  const s = {}, i = "relay" + e;
  return Object.keys(t).forEach((r) => {
    if (r.startsWith(i)) {
      const n = r.replace(i, ""), o = t[r];
      s[n] = o;
    }
  }), s;
}
function ao(t) {
  if (!t.includes("wc:")) {
    const h = ya(t);
    h != null && h.includes("wc:") && (t = h);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, i = t.substring(0, e), r = t.substring(e + 1, s).split("@"), n = typeof s < "u" ? t.substring(s) : "", o = new URLSearchParams(n), a = Object.fromEntries(o.entries()), c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
  return { protocol: i, topic: jf(r[0]), version: parseInt(r[1], 10), symKey: a.symKey, relay: Df(a), methods: c, expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function jf(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function Mf(t, e = "-") {
  const s = "relay", i = {};
  return Object.keys(t).forEach((r) => {
    const n = r, o = s + e + n;
    t[n] && (i[o] = t[n]);
  }), i;
}
function co(t) {
  const e = new URLSearchParams(), s = { ...Mf(t.relay), symKey: t.symKey, ...t.expiryTimestamp && { expiryTimestamp: t.expiryTimestamp.toString() }, ...t.methods && { methods: t.methods.join(",") } };
  return Object.entries(s).sort(([i], [r]) => i.localeCompare(r)).forEach(([i, r]) => {
    r !== void 0 && e.append(i, String(r));
  }), `${t.protocol}:${t.topic}@${t.version}?${e}`;
}
function Js(t, e, s) {
  return `${t}?wc_ev=${s}&topic=${e}`;
}
function ms(t) {
  const e = [];
  return t.forEach((s) => {
    const [i, r] = s.split(":");
    e.push(`${i}:${r}`);
  }), e;
}
function fc(t) {
  const e = [];
  return Object.values(t).forEach((s) => {
    e.push(...ms(s.accounts));
  }), [...new Set(e)];
}
function Lf(t) {
  const e = [];
  return Object.values(t).forEach((s) => {
    e.push(...s.methods);
  }), [...new Set(e)];
}
function zf(t) {
  const e = [];
  return Object.values(t).forEach((s) => {
    e.push(...s.events);
  }), [...new Set(e)];
}
function Vf(t, e) {
  const s = [];
  return Object.values(t).forEach((i) => {
    ms(i.accounts).includes(e) && s.push(...i.methods);
  }), s;
}
function Kf(t, e) {
  const s = [];
  return Object.values(t).forEach((i) => {
    ms(i.accounts).includes(e) && s.push(...i.events);
  }), s;
}
function Ci(t) {
  return t.includes(":");
}
function ns(t) {
  return Ci(t) ? t.split(":")[0] : t;
}
function ho(t) {
  var s, i, r;
  const e = {};
  if (!st(t)) return e;
  for (const [n, o] of Object.entries(t)) {
    const a = Ci(n) ? [n] : o.chains, c = o.methods || [], h = o.events || [], l = ns(n);
    e[l] = { ...e[l], chains: tt(a, (s = e[l]) == null ? void 0 : s.chains), methods: tt(c, (i = e[l]) == null ? void 0 : i.methods), events: tt(h, (r = e[l]) == null ? void 0 : r.events) };
  }
  return e;
}
function Hf(t) {
  const e = {};
  return t == null || t.forEach((s) => {
    var n;
    const [i, r] = s.split(":");
    e[i] || (e[i] = { accounts: [], chains: [], events: [], methods: [] }), e[i].accounts.push(s), (n = e[i].chains) == null || n.push(`${i}:${r}`);
  }), e;
}
function lo(t, e) {
  e = e.map((i) => i.replace("did:pkh:", ""));
  const s = Hf(e);
  for (const [i, r] of Object.entries(s)) r.methods ? r.methods = tt(r.methods, t) : r.methods = t, r.events = ["chainChanged", "accountsChanged"];
  return s;
}
function Gf(t, e) {
  var o, a, c, h, l, u;
  const s = ho(t), i = ho(e), r = {}, n = Object.keys(s).concat(Object.keys(i));
  for (const d of n) r[d] = { chains: tt((o = s[d]) == null ? void 0 : o.chains, (a = i[d]) == null ? void 0 : a.chains), methods: tt((c = s[d]) == null ? void 0 : c.methods, (h = i[d]) == null ? void 0 : h.methods), events: tt((l = s[d]) == null ? void 0 : l.events, (u = i[d]) == null ? void 0 : u.events) };
  return r;
}
function De(t, e) {
  return !!Array.isArray(t);
}
function st(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function ne(t) {
  return typeof t > "u";
}
function ie(t, e) {
  return e && ne(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function rn(t, e) {
  return e && ne(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function Wf(t, e) {
  const { requiredNamespaces: s } = e, i = Object.keys(t.namespaces), r = Object.keys(s);
  let n = !0;
  return Vt(r, i) ? (i.forEach((o) => {
    const { accounts: a, methods: c, events: h } = t.namespaces[o], l = ms(a), u = s[o];
    (!Vt(ua(o, u), l) || !Vt(u.methods, c) || !Vt(u.events, h)) && (n = !1);
  }), n) : !1;
}
function yi(t) {
  return ie(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Zf(t) {
  if (ie(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const s = e[0] + ":" + e[1];
      return !!e[2] && yi(s);
    }
  }
  return !1;
}
function Yf(t) {
  function e(s) {
    try {
      return typeof new URL(s) < "u";
    } catch {
      return !1;
    }
  }
  try {
    if (ie(t, !1)) {
      if (e(t)) return !0;
      const s = ya(t);
      return e(s);
    }
  } catch {
  }
  return !1;
}
function Qf(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function Jf(t) {
  return t == null ? void 0 : t.topic;
}
function Xf(t, e) {
  let s = null;
  return ie(t == null ? void 0 : t.publicKey, !1) || (s = j("MISSING_OR_INVALID", `${e} controller public key should be a string`)), s;
}
function uo(t) {
  let e = !0;
  return De(t) ? t.length && (e = t.every((s) => ie(s, !1))) : e = !1, e;
}
function ep(t, e, s) {
  let i = null;
  return De(e) && e.length ? e.forEach((r) => {
    i || yi(r) || (i = X("UNSUPPORTED_CHAINS", `${s}, chain ${r} should be a string and conform to "namespace:chainId" format`));
  }) : yi(t) || (i = X("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function tp(t, e, s) {
  let i = null;
  return Object.entries(t).forEach(([r, n]) => {
    if (i) return;
    const o = ep(r, ua(r, n), `${e} ${s}`);
    o && (i = o);
  }), i;
}
function sp(t, e) {
  let s = null;
  return De(t) ? t.forEach((i) => {
    s || Zf(i) || (s = X("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : s = X("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s;
}
function ip(t, e) {
  let s = null;
  return Object.values(t).forEach((i) => {
    if (s) return;
    const r = sp(i == null ? void 0 : i.accounts, `${e} namespace`);
    r && (s = r);
  }), s;
}
function rp(t, e) {
  let s = null;
  return uo(t == null ? void 0 : t.methods) ? uo(t == null ? void 0 : t.events) || (s = X("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : s = X("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), s;
}
function pc(t, e) {
  let s = null;
  return Object.values(t).forEach((i) => {
    if (s) return;
    const r = rp(i, `${e}, namespace`);
    r && (s = r);
  }), s;
}
function np(t, e, s) {
  let i = null;
  if (t && st(t)) {
    const r = pc(t, e);
    r && (i = r);
    const n = tp(t, e, s);
    n && (i = n);
  } else i = j("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
  return i;
}
function er(t, e) {
  let s = null;
  if (t && st(t)) {
    const i = pc(t, e);
    i && (s = i);
    const r = ip(t, e);
    r && (s = r);
  } else s = j("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return s;
}
function gc(t) {
  return ie(t.protocol, !0);
}
function op(t, e) {
  let s = !1;
  return t ? t && De(t) && t.length && t.forEach((i) => {
    s = gc(i);
  }) : s = !0, s;
}
function ap(t) {
  return typeof t == "number";
}
function ve(t) {
  return typeof t < "u" && typeof t !== null;
}
function cp(t) {
  return !(!t || typeof t != "object" || !t.code || !rn(t.code, !1) || !t.message || !ie(t.message, !1));
}
function hp(t) {
  return !(ne(t) || !ie(t.method, !1));
}
function lp(t) {
  return !(ne(t) || ne(t.result) && ne(t.error) || !rn(t.id, !1) || !ie(t.jsonrpc, !1));
}
function up(t) {
  return !(ne(t) || !ie(t.name, !1));
}
function fo(t, e) {
  return !(!yi(e) || !fc(t).includes(e));
}
function dp(t, e, s) {
  return ie(s, !1) ? Vf(t, e).includes(s) : !1;
}
function fp(t, e, s) {
  return ie(s, !1) ? Kf(t, e).includes(s) : !1;
}
function po(t, e, s) {
  let i = null;
  const r = pp(t), n = gp(e), o = Object.keys(r), a = Object.keys(n), c = go(Object.keys(t)), h = go(Object.keys(e)), l = c.filter((u) => !h.includes(u));
  return l.length && (i = j("NON_CONFORMING_NAMESPACES", `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(e).toString()}`)), Vt(o, a) || (i = j("NON_CONFORMING_NAMESPACES", `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((u) => {
    if (!u.includes(":") || i) return;
    const d = ms(e[u].accounts);
    d.includes(u) || (i = j("NON_CONFORMING_NAMESPACES", `${s} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${d.toString()}`));
  }), o.forEach((u) => {
    i || (Vt(r[u].methods, n[u].methods) ? Vt(r[u].events, n[u].events) || (i = j("NON_CONFORMING_NAMESPACES", `${s} namespaces events don't satisfy namespace events for ${u}`)) : i = j("NON_CONFORMING_NAMESPACES", `${s} namespaces methods don't satisfy namespace methods for ${u}`));
  }), i;
}
function pp(t) {
  const e = {};
  return Object.keys(t).forEach((s) => {
    var i;
    s.includes(":") ? e[s] = t[s] : (i = t[s].chains) == null || i.forEach((r) => {
      e[r] = { methods: t[s].methods, events: t[s].events };
    });
  }), e;
}
function go(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function gp(t) {
  const e = {};
  return Object.keys(t).forEach((s) => {
    var i;
    s.includes(":") ? e[s] = t[s] : (i = ms(t[s].accounts)) == null || i.forEach((r) => {
      e[r] = { accounts: t[s].accounts.filter((n) => n.includes(`${r}:`)), methods: t[s].methods, events: t[s].events };
    });
  }), e;
}
function yp(t, e) {
  return rn(t, !1) && t <= e.max && t >= e.min;
}
function yo() {
  const t = Ds();
  return new Promise((e) => {
    switch (t) {
      case $e.browser:
        e(mp());
        break;
      case $e.reactNative:
        e(wp());
        break;
      case $e.node:
        e(bp());
        break;
      default:
        e(!0);
    }
  });
}
function mp() {
  return ys() && (navigator == null ? void 0 : navigator.onLine);
}
async function wp() {
  var t;
  return qt() && typeof global < "u" && (global != null && global.NetInfo) ? (t = await (global == null ? void 0 : global.NetInfo.fetch())) == null ? void 0 : t.isConnected : !0;
}
function bp() {
  return !0;
}
function vp(t) {
  switch (Ds()) {
    case $e.browser:
      Ep(t);
      break;
    case $e.reactNative:
      Ip(t);
      break;
  }
}
function Ep(t) {
  !qt() && ys() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Ip(t) {
  qt() && typeof global < "u" && (global != null && global.NetInfo) && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
function _p() {
  var t;
  return ys() && mt.getDocument() ? ((t = mt.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : !0;
}
const tr = {};
class vs {
  static get(e) {
    return tr[e];
  }
  static set(e, s) {
    tr[e] = s;
  }
  static delete(e) {
    delete tr[e];
  }
}
function xp(t) {
  const e = ks.decode(t);
  if (e.length < 33) throw new Error("Too short to contain a public key");
  return e.slice(1, 33);
}
function Sp({ publicKey: t, signature: e, payload: s }) {
  var f;
  const i = Cr(s.method), r = 128 | parseInt(((f = s.version) == null ? void 0 : f.toString()) || "4"), n = Op(s.address), o = s.era === "00" ? new Uint8Array([0]) : Cr(s.era);
  if (o.length !== 1 && o.length !== 2) throw new Error("Invalid era length");
  const a = parseInt(s.nonce, 16), c = new Uint8Array([a & 255, a >> 8 & 255]), h = BigInt(`0x${Ap(s.tip)}`), l = Rp(h), u = new Uint8Array([0, ...t, n, ...e, ...o, ...c, ...l, ...i]), d = $p(u.length + 1);
  return new Uint8Array([...d, r, ...u]);
}
function Pp(t) {
  const e = Cr(t), s = nh.blake2b(e, void 0, 32);
  return "0x" + Buffer.from(s).toString("hex");
}
function Cr(t) {
  return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
function Ap(t) {
  return t.startsWith("0x") ? t.slice(2) : t;
}
function Op(t) {
  const e = ks.decode(t)[0];
  return e === 42 ? 0 : e === 60 ? 2 : 1;
}
function $p(t) {
  if (t < 64) return new Uint8Array([t << 2]);
  if (t < 16384) {
    const e = t << 2 | 1;
    return new Uint8Array([e & 255, e >> 8 & 255]);
  } else if (t < 1 << 30) {
    const e = t << 2 | 2;
    return new Uint8Array([e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]);
  } else throw new Error("Compact encoding > 2^30 not supported");
}
function Rp(t) {
  if (t < 1n << 6n) return new Uint8Array([Number(t << 2n)]);
  if (t < 1n << 14n) {
    const e = t << 2n | 0x01n;
    return new Uint8Array([Number(e & 0xffn), Number(e >> 8n & 0xffn)]);
  } else if (t < 1n << 30n) {
    const e = t << 2n | 0x02n;
    return new Uint8Array([Number(e & 0xffn), Number(e >> 8n & 0xffn), Number(e >> 16n & 0xffn), Number(e >> 24n & 0xffn)]);
  } else throw new Error("BigInt compact encoding not supported > 2^30");
}
function Cp(t) {
  const e = Uint8Array.from(Buffer.from(t.signature, "hex")), s = xp(t.transaction.address), i = Sp({ publicKey: s, signature: e, payload: t.transaction }), r = Buffer.from(i).toString("hex");
  return Pp(r);
}
function nn({ logger: t, name: e }) {
  const s = typeof t == "string" ? ko({ opts: { level: t, name: e } }).logger : t;
  return s.level = typeof t == "string" ? t : t.level, s;
}
class Np extends ps {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class Tp extends ps {
  constructor(e, s) {
    super(), this.core = e, this.logger = s, this.records = /* @__PURE__ */ new Map();
  }
}
class Bp {
  constructor(e, s) {
    this.logger = e, this.core = s;
  }
}
let qp = class extends ps {
  constructor(e, s) {
    super(), this.relayer = e, this.logger = s;
  }
}, kp = class extends ps {
  constructor(e) {
    super();
  }
}, Fp = class {
  constructor(e, s, i, r) {
    this.core = e, this.logger = s, this.name = i;
  }
}, Up = class extends ps {
  constructor(e, s) {
    super(), this.relayer = e, this.logger = s;
  }
}, Dp = class extends ps {
  constructor(e, s) {
    super(), this.core = e, this.logger = s;
  }
};
class jp {
  constructor(e, s, i) {
    this.core = e, this.logger = s, this.store = i;
  }
}
let Mp = class {
  constructor(e, s) {
    this.projectId = e, this.logger = s;
  }
}, Lp = class {
  constructor(e, s, i) {
    this.core = e, this.logger = s, this.telemetryEnabled = i;
  }
}, zp = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
};
class Vp {
  constructor(e) {
    this.client = e;
  }
}
const yc = "wc", mc = 2, Nr = "core", it = `${yc}@2:${Nr}:`, Kp = { logger: "error" }, Hp = { database: ":memory:" }, Gp = "crypto", mo = "client_ed25519_seed", Wp = D.ONE_DAY, Zp = "keychain", Yp = "0.3", Qp = "messages", Jp = "0.3", Xp = D.SIX_HOURS, eg = "publisher", wc = "irn", tg = "error", bc = "wss://relay.walletconnect.org", sg = "relayer", te = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, ig = "_subscription", Be = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, rg = 0.1, Tr = "2.23.8", J = { link_mode: "link_mode", relay: "relay" }, ri = { inbound: "inbound", outbound: "outbound" }, ng = "0.3", og = "WALLETCONNECT_CLIENT_ID", wo = "WALLETCONNECT_LINK_MODE_APPS", Ae = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, ag = "subscription", cg = "0.3", hg = "pairing", lg = "0.3", Es = { wc_pairingDelete: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: D.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: D.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 0 } } }, Mt = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Me = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, ug = "history", dg = "0.3", fg = "expirer", qe = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, pg = "0.3", gg = "verify-api", yg = "https://verify.walletconnect.com", vc = "https://verify.walletconnect.org", Os = vc, mg = `${Os}/v3`, wg = [yg, vc], bg = "echo", vg = "https://echo.walletconnect.com", Ye = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, ht = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, Le = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success", session_request_response_started: "session_request_response_started", session_request_response_validation_success: "session_request_response_validation_success", session_request_response_publish_started: "session_request_response_publish_started" }, Ut = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found", session_request_response_validation_failure: "session_request_response_validation_failure", session_request_response_publish_failure: "session_request_response_publish_failure" }, Dt = { authenticated_session_approve_started: "authenticated_session_approve_started", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve" }, Is = { no_internet_connection: "no_internet_connection", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, Eg = 0.1, Ig = "event-client", _g = 86400, xg = "https://pulse.walletconnect.org/batch";
function Sg(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var s = new Uint8Array(256), i = 0; i < s.length; i++) s[i] = 255;
  for (var r = 0; r < t.length; r++) {
    var n = t.charAt(r), o = n.charCodeAt(0);
    if (s[o] !== 255) throw new TypeError(n + " is ambiguous");
    s[o] = r;
  }
  var a = t.length, c = t.charAt(0), h = Math.log(a) / Math.log(256), l = Math.log(256) / Math.log(a);
  function u(p) {
    if (p instanceof Uint8Array || (ArrayBuffer.isView(p) ? p = new Uint8Array(p.buffer, p.byteOffset, p.byteLength) : Array.isArray(p) && (p = Uint8Array.from(p))), !(p instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (p.length === 0) return "";
    for (var g = 0, m = 0, O = 0, k = p.length; O !== k && p[O] === 0; ) O++, g++;
    for (var P = (k - O) * l + 1 >>> 0, _ = new Uint8Array(P); O !== k; ) {
      for (var R = p[O], C = 0, q = P - 1; (R !== 0 || C < m) && q !== -1; q--, C++) R += 256 * _[q] >>> 0, _[q] = R % a >>> 0, R = R / a >>> 0;
      if (R !== 0) throw new Error("Non-zero carry");
      m = C, O++;
    }
    for (var N = P - m; N !== P && _[N] === 0; ) N++;
    for (var A = c.repeat(g); N < P; ++N) A += t.charAt(_[N]);
    return A;
  }
  function d(p) {
    if (typeof p != "string") throw new TypeError("Expected String");
    if (p.length === 0) return new Uint8Array();
    var g = 0;
    if (p[g] !== " ") {
      for (var m = 0, O = 0; p[g] === c; ) m++, g++;
      for (var k = (p.length - g) * h + 1 >>> 0, P = new Uint8Array(k); p[g]; ) {
        var _ = s[p.charCodeAt(g)];
        if (_ === 255) return;
        for (var R = 0, C = k - 1; (_ !== 0 || R < O) && C !== -1; C--, R++) _ += a * P[C] >>> 0, P[C] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0) throw new Error("Non-zero carry");
        O = R, g++;
      }
      if (p[g] !== " ") {
        for (var q = k - O; q !== k && P[q] === 0; ) q++;
        for (var N = new Uint8Array(m + (k - q)), A = m; q !== k; ) N[A++] = P[q++];
        return N;
      }
    }
  }
  function f(p) {
    var g = d(p);
    if (g) return g;
    throw new Error(`Non-${e} character`);
  }
  return { encode: u, decodeUnsafe: d, decode: f };
}
var Pg = Sg, Ag = Pg;
const Og = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, $g = (t) => new TextEncoder().encode(t), Rg = (t) => new TextDecoder().decode(t);
class Cg {
  constructor(e, s, i) {
    this.name = e, this.prefix = s, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Ng {
  constructor(e, s, i) {
    if (this.name = e, this.prefix = s, s.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = s.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Ec(this, e);
  }
}
class Tg {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ec(this, e);
  }
  decode(e) {
    const s = e[0], i = this.decoders[s];
    if (i) return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ec = (t, e) => new Tg({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Bg {
  constructor(e, s, i, r) {
    this.name = e, this.prefix = s, this.baseEncode = i, this.baseDecode = r, this.encoder = new Cg(e, s, i), this.decoder = new Ng(e, s, r);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ni = ({ name: t, prefix: e, encode: s, decode: i }) => new Bg(t, e, s, i), Vs = ({ prefix: t, name: e, alphabet: s }) => {
  const { encode: i, decode: r } = Ag(s, e);
  return Ni({ prefix: t, name: e, encode: i, decode: (n) => Og(r(n)) });
}, qg = (t, e, s, i) => {
  const r = {};
  for (let l = 0; l < e.length; ++l) r[e[l]] = l;
  let n = t.length;
  for (; t[n - 1] === "="; ) --n;
  const o = new Uint8Array(n * s / 8 | 0);
  let a = 0, c = 0, h = 0;
  for (let l = 0; l < n; ++l) {
    const u = r[t[l]];
    if (u === void 0) throw new SyntaxError(`Non-${i} character`);
    c = c << s | u, a += s, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
  }
  if (a >= s || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
  return o;
}, kg = (t, e, s) => {
  const i = e[e.length - 1] === "=", r = (1 << s) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > s; ) o -= s, n += e[r & a >> o];
  if (o && (n += e[r & a << s - o]), i) for (; n.length * s & 7; ) n += "=";
  return n;
}, he = ({ name: t, prefix: e, bitsPerChar: s, alphabet: i }) => Ni({ prefix: e, name: t, encode(r) {
  return kg(r, i, s);
}, decode(r) {
  return qg(r, i, s, t);
} }), Fg = Ni({ prefix: "\0", name: "identity", encode: (t) => Rg(t), decode: (t) => $g(t) });
var Ug = Object.freeze({ __proto__: null, identity: Fg });
const Dg = he({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var jg = Object.freeze({ __proto__: null, base2: Dg });
const Mg = he({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Lg = Object.freeze({ __proto__: null, base8: Mg });
const zg = Vs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Vg = Object.freeze({ __proto__: null, base10: zg });
const Kg = he({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Hg = he({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Gg = Object.freeze({ __proto__: null, base16: Kg, base16upper: Hg });
const Wg = he({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Zg = he({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Yg = he({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Qg = he({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Jg = he({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Xg = he({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), ey = he({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), ty = he({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), sy = he({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var iy = Object.freeze({ __proto__: null, base32: Wg, base32hex: Jg, base32hexpad: ey, base32hexpadupper: ty, base32hexupper: Xg, base32pad: Yg, base32padupper: Qg, base32upper: Zg, base32z: sy });
const ry = Vs({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), ny = Vs({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var oy = Object.freeze({ __proto__: null, base36: ry, base36upper: ny });
const ay = Vs({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), cy = Vs({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var hy = Object.freeze({ __proto__: null, base58btc: ay, base58flickr: cy });
const ly = he({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), uy = he({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), dy = he({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), fy = he({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var py = Object.freeze({ __proto__: null, base64: ly, base64pad: uy, base64url: dy, base64urlpad: fy });
const Ic = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), gy = Ic.reduce((t, e, s) => (t[s] = e, t), []), yy = Ic.reduce((t, e, s) => (t[e.codePointAt(0)] = s, t), []);
function my(t) {
  return t.reduce((e, s) => (e += gy[s], e), "");
}
function wy(t) {
  const e = [];
  for (const s of t) {
    const i = yy[s.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${s}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const by = Ni({ prefix: "🚀", name: "base256emoji", encode: my, decode: wy });
var vy = Object.freeze({ __proto__: null, base256emoji: by });
new TextEncoder(), new TextDecoder();
const bo = { ...Ug, ...jg, ...Lg, ...Vg, ...Gg, ...iy, ...oy, ...hy, ...py, ...vy };
function _c(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Ey(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? _c(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function xc(t, e, s, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: s }, decoder: { decode: i } };
}
const vo = xc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), sr = xc("ascii", "a", (t) => {
  let e = "a";
  for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Ey(t.length);
  for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
  return e;
}), Iy = { utf8: vo, "utf-8": vo, hex: bo.base16, latin1: sr, ascii: sr, binary: sr, ...bo };
function _y(t, e = "utf8") {
  const s = Iy[e];
  if (!s) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? _c(globalThis.Buffer.from(t, "utf-8")) : s.decoder.decode(`${s.prefix}${t}`);
}
let xy = class {
  constructor(e, s) {
    this.core = e, this.logger = s, this.keychain = /* @__PURE__ */ new Map(), this.name = Zp, this.version = Yp, this.initialized = !1, this.storagePrefix = it, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, r) => {
      this.isInitialized(), this.keychain.set(i, r), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const r = this.keychain.get(i);
      if (typeof r > "u") {
        const { message: n } = j("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(n);
      }
      return r;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = Re(s, this.name);
  }
  get context() {
    return Ce(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, wr(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? br(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}, Sy = class {
  constructor(e, s, i) {
    this.core = e, this.logger = s, this.name = Gp, this.randomSessionIdentifier = Rr(), this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (r) => (this.isInitialized(), this.keychain.has(r)), this.getClientId = async () => {
      if (this.isInitialized(), this.clientId) return this.clientId;
      const r = await this.getClientSeed(), n = un(r), o = uh(n.publicKey);
      return this.clientId = o, o;
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const r = $f();
      return this.setPrivateKey(r.publicKey, r.privateKey);
    }, this.signJWT = async (r) => {
      this.isInitialized();
      const n = await this.getClientSeed(), o = un(n), a = this.randomSessionIdentifier;
      return await dh(a, r, Wp, o);
    }, this.generateSharedKey = (r, n, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(r), c = Rf(a, n);
      return this.setSymKey(c, o);
    }, this.setSymKey = async (r, n) => {
      this.isInitialized();
      const o = n || ii(r);
      return await this.keychain.set(o, r), o;
    }, this.deleteKeyPair = async (r) => {
      this.isInitialized(), await this.keychain.del(r);
    }, this.deleteSymKey = async (r) => {
      this.isInitialized(), await this.keychain.del(r);
    }, this.encode = async (r, n, o) => {
      this.isInitialized();
      const a = dc(o), c = fh(n);
      if (oo(a)) return Tf(c, o == null ? void 0 : o.encoding);
      if (no(a)) {
        const d = a.senderPublicKey, f = a.receiverPublicKey;
        r = await this.generateSharedKey(d, f);
      }
      const h = this.getSymKey(r), { type: l, senderPublicKey: u } = a;
      return Cf({ type: l, symKey: h, message: c, senderPublicKey: u, encoding: o == null ? void 0 : o.encoding });
    }, this.decode = async (r, n, o) => {
      this.isInitialized();
      const a = qf(n, o);
      if (oo(a)) {
        const c = Bf(n, o == null ? void 0 : o.encoding);
        return dn(c);
      }
      if (no(a)) {
        const c = a.receiverPublicKey, h = a.senderPublicKey;
        r = await this.generateSharedKey(c, h);
      }
      try {
        const c = this.getSymKey(r), h = Nf({ symKey: c, encoded: n, encoding: o == null ? void 0 : o.encoding });
        return dn(h);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }, this.getPayloadType = (r, n = _e) => {
      const o = qs({ encoded: r, encoding: n });
      return Yt(o.type);
    }, this.getPayloadSenderPublicKey = (r, n = _e) => {
      const o = qs({ encoded: r, encoding: n });
      return o.senderPublicKey ? Pe(o.senderPublicKey, we) : void 0;
    }, this.core = e, this.logger = Re(s, this.name), this.keychain = i || new xy(this.core, this.logger);
  }
  get context() {
    return Ce(this.logger);
  }
  async setPrivateKey(e, s) {
    return await this.keychain.set(e, s), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(mo);
    } catch {
      e = Rr(), await this.keychain.set(mo, e);
    }
    return _y(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}, Py = class extends Bp {
  constructor(e, s) {
    super(e, s), this.logger = e, this.core = s, this.messages = /* @__PURE__ */ new Map(), this.messagesWithoutClientAck = /* @__PURE__ */ new Map(), this.name = Qp, this.version = Jp, this.initialized = !1, this.storagePrefix = it, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i);
          const r = await this.getRelayerMessagesWithoutClientAck();
          typeof r < "u" && (this.messagesWithoutClientAck = r), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, r, n) => {
      this.isInitialized();
      const o = Fe(r);
      let a = this.messages.get(i);
      if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
      if (a[o] = r, this.messages.set(i, a), n === ri.inbound) {
        const c = this.messagesWithoutClientAck.get(i) || {};
        this.messagesWithoutClientAck.set(i, { ...c, [o]: r });
      }
      return await this.persist(), o;
    }, this.get = (i) => {
      this.isInitialized();
      let r = this.messages.get(i);
      return typeof r > "u" && (r = {}), r;
    }, this.getWithoutAck = (i) => {
      this.isInitialized();
      const r = {};
      for (const n of i) {
        const o = this.messagesWithoutClientAck.get(n) || {};
        r[n] = Object.values(o);
      }
      return r;
    }, this.has = (i, r) => {
      this.isInitialized();
      const n = this.get(i), o = Fe(r);
      return typeof n[o] < "u";
    }, this.ack = async (i, r) => {
      this.isInitialized();
      const n = this.messagesWithoutClientAck.get(i);
      if (typeof n > "u") return;
      const o = Fe(r);
      delete n[o], Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(i) : this.messagesWithoutClientAck.set(i, n), await this.persist();
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), this.messagesWithoutClientAck.delete(i), await this.persist();
    }, this.logger = Re(e, this.name), this.core = s;
  }
  get context() {
    return Ce(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, wr(e));
  }
  async setRelayerMessagesWithoutClientAck(e) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, wr(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? br(e) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e < "u" ? br(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
class Ay extends qp {
  constructor(e, s) {
    super(e, s), this.relayer = e, this.logger = s, this.events = new Bt.EventEmitter(), this.name = eg, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = D.toMiliseconds(D.ONE_MINUTE), this.initialPublishTimeout = D.toMiliseconds(D.ONE_SECOND * 15), this.needsTransportRestart = !1, this.publish = async (i, r, n) => {
      var f, p, g, m, O;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: r, opts: n } });
      const o = (n == null ? void 0 : n.ttl) || Xp, a = (n == null ? void 0 : n.prompt) || !1, c = (n == null ? void 0 : n.tag) || 0, h = (n == null ? void 0 : n.id) || Lt().toString(), l = rs(gi().protocol), u = { id: h, method: (n == null ? void 0 : n.publishMethod) || l.publish, params: { topic: i, message: r, ttl: o, prompt: a, tag: c, attestation: n == null ? void 0 : n.attestation, ...n == null ? void 0 : n.tvf } }, d = `Failed to publish payload, please try again. id:${h} tag:${c}`;
      try {
        ne((f = u.params) == null ? void 0 : f.prompt) && ((p = u.params) == null || delete p.prompt), ne((g = u.params) == null ? void 0 : g.tag) && ((m = u.params) == null || delete m.tag);
        const k = new Promise(async (P) => {
          const _ = ({ id: C }) => {
            var q;
            ((q = u.id) == null ? void 0 : q.toString()) === C.toString() && (this.removeRequestFromQueue(C), this.relayer.events.removeListener(te.publish, _), P());
          };
          this.relayer.events.on(te.publish, _);
          const R = et(new Promise((C, q) => {
            this.rpcPublish(u, n).then(C).catch((N) => {
              this.logger.warn(N, N == null ? void 0 : N.message), q(N);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${h} tag:${c}`);
          try {
            await R, this.events.removeListener(te.publish, _);
          } catch (C) {
            this.queue.set(h, { request: u, opts: n, attempt: 1 }), this.logger.warn(C, C == null ? void 0 : C.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: h, topic: i, message: r, opts: n } }), await et(k, this.publishTimeout, d);
      } catch (k) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(k), (O = n == null ? void 0 : n.internal) == null ? void 0 : O.throwOnFailedPublish) throw k;
      } finally {
        this.queue.delete(h);
      }
    }, this.publishCustom = async (i) => {
      var O, k, P, _, R;
      this.logger.debug("Publishing custom payload"), this.logger.trace({ type: "method", method: "publishCustom", params: i });
      const { payload: r, opts: n = {} } = i, { attestation: o, tvf: a, publishMethod: c, prompt: h, tag: l, ttl: u = D.FIVE_MINUTES } = n, d = n.id || Lt().toString(), f = rs(gi().protocol), p = c || f.publish, g = { id: d, method: p, params: { ...r, ttl: u, prompt: h, tag: l, attestation: o, ...a } }, m = `Failed to publish custom payload, please try again. id:${d} tag:${l}`;
      try {
        ne((O = g.params) == null ? void 0 : O.prompt) && ((k = g.params) == null || delete k.prompt), ne((P = g.params) == null ? void 0 : P.tag) && ((_ = g.params) == null || delete _.tag);
        const C = new Promise(async (q) => {
          const N = ({ id: T }) => {
            var F;
            ((F = g.id) == null ? void 0 : F.toString()) === T.toString() && (this.removeRequestFromQueue(T), this.relayer.events.removeListener(te.publish, N), q());
          };
          this.relayer.events.on(te.publish, N);
          const A = et(new Promise((T, F) => {
            this.rpcPublish(g, n).then(T).catch((S) => {
              this.logger.warn(S, S == null ? void 0 : S.message), F(S);
            });
          }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${p} id:${d} tag:${l}`);
          try {
            await A, this.events.removeListener(te.publish, N);
          } catch (T) {
            this.queue.set(d, { request: g, opts: n, attempt: 1 }), this.logger.warn(T, T == null ? void 0 : T.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: d, payload: r, opts: n } }), await et(C, this.publishTimeout, m);
      } catch (C) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(C), (R = n == null ? void 0 : n.internal) == null ? void 0 : R.throwOnFailedPublish) throw C;
      } finally {
        this.queue.delete(d);
      }
    }, this.on = (i, r) => {
      this.events.on(i, r);
    }, this.once = (i, r) => {
      this.events.once(i, r);
    }, this.off = (i, r) => {
      this.events.off(i, r);
    }, this.removeListener = (i, r) => {
      this.events.removeListener(i, r);
    }, this.relayer = e, this.logger = Re(s, this.name), this.registerEventListeners();
  }
  get context() {
    return Ce(this.logger);
  }
  async rpcPublish(e, s) {
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: e });
    const i = await this.relayer.request(e);
    return this.relayer.events.emit(te.publish, { ...e, ...s }), this.logger.debug("Successfully Published Payload"), i;
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e, s) => {
      var r;
      const i = e.attempt + 1;
      this.queue.set(s, { ...e, attempt: i }), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(r = e.request.params) == null ? void 0 : r.tag}, attempt: ${i}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(gs.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(te.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(te.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Oy {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, s) => {
      const i = this.get(e);
      this.exists(e, s) || this.map.set(e, [...i, s]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, s) => this.get(e).includes(s), this.delete = (e, s) => {
      if (typeof s > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const i = this.get(e);
      if (!this.exists(e, s)) return;
      const r = i.filter((n) => n !== s);
      if (!r.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, r);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
let $y = class extends Up {
  constructor(e, s) {
    super(e, s), this.relayer = e, this.logger = s, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Oy(), this.events = new Bt.EventEmitter(), this.name = ag, this.version = cg, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.storagePrefix = it, this.subscribeTimeout = D.toMiliseconds(D.ONE_MINUTE), this.initialSubscribeTimeout = D.toMiliseconds(D.ONE_SECOND * 15), this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = !0;
    }, this.subscribe = async (i, r) => {
      var n;
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: r } });
      try {
        const o = gi(r), a = { topic: i, relay: o, transportType: r == null ? void 0 : r.transportType };
        (n = r == null ? void 0 : r.internal) != null && n.skipSubscribe || this.pending.set(i, a);
        const c = await this.rpcSubscribe(i, o, r);
        return typeof c == "string" && (this.onSubscribe(c, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: r } })), c;
      } catch (o) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o), o;
      }
    }, this.unsubscribe = async (i, r) => {
      this.isInitialized(), typeof (r == null ? void 0 : r.id) < "u" ? await this.unsubscribeById(i, r.id, r) : await this.unsubscribeByTopic(i, r);
    }, this.isSubscribed = (i) => new Promise((r) => {
      r(this.topicMap.topics.includes(i));
    }), this.isKnownTopic = (i) => new Promise((r) => {
      r(this.topicMap.topics.includes(i) || this.pending.has(i) || this.cached.some((n) => n.topic === i));
    }), this.on = (i, r) => {
      this.events.on(i, r);
    }, this.once = (i, r) => {
      this.events.once(i, r);
    }, this.off = (i, r) => {
      this.events.off(i, r);
    }, this.removeListener = (i, r) => {
      this.events.removeListener(i, r);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      await this.restore(), await this.onRestart();
    }, this.checkPending = async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const i = [];
      this.pending.forEach((r) => {
        i.push(r);
      }), await this.batchSubscribe(i);
    }, this.registerEventListeners = () => {
      this.relayer.core.heartbeat.on(gs.pulse, async () => {
        await this.checkPending();
      }), this.events.on(Ae.created, async (i) => {
        const r = Ae.created;
        this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: i }), await this.persist();
      }), this.events.on(Ae.deleted, async (i) => {
        const r = Ae.deleted;
        this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: i }), await this.persist();
      });
    }, this.relayer = e, this.logger = Re(s, this.name), this.clientId = "";
  }
  get context() {
    return Ce(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e, s) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === s;
    } catch {
    }
    return i;
  }
  reset() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, s) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (r) => await this.unsubscribeById(e, r, s)));
  }
  async unsubscribeById(e, s, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: s, opts: i } });
    try {
      const r = gi(i);
      await this.restartToComplete({ topic: e, id: s, relay: r }), await this.rpcUnsubscribe(e, s, r);
      const n = X("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, s, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: s, opts: i } });
    } catch (r) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(r), r;
    }
  }
  async rpcSubscribe(e, s, i) {
    var a, c;
    const r = await this.getSubscriptionId(e);
    if ((a = i == null ? void 0 : i.internal) != null && a.skipSubscribe) return r;
    (!i || (i == null ? void 0 : i.transportType) === J.relay) && await this.restartToComplete({ topic: e, id: e, relay: s });
    const n = { method: rs(s.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    const o = (c = i == null ? void 0 : i.internal) == null ? void 0 : c.throwOnFailedPublish;
    try {
      if ((i == null ? void 0 : i.transportType) === J.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch((u) => this.logger.warn(u));
      }, D.toMiliseconds(D.ONE_SECOND)), r;
      const h = new Promise(async (u) => {
        const d = (f) => {
          f.topic === e && (this.events.removeListener(Ae.created, d), u(f.id));
        };
        this.events.on(Ae.created, d);
        try {
          const f = await et(new Promise((p, g) => {
            this.relayer.request(n).catch((m) => {
              this.logger.warn(m, m == null ? void 0 : m.message), g(m);
            }).then(p);
          }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
          this.events.removeListener(Ae.created, d), u(f);
        } catch {
        }
      }), l = await et(h, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
      if (!l && o) throw new Error(`Subscribing to ${e} failed, please try again`);
      return l ? r : null;
    } catch (h) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(te.connection_stalled), o) throw h;
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return !0;
    const s = e[0].relay, i = { method: rs(s.protocol).batchSubscribe, params: { topics: e.map((r) => r.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await et(new Promise((r, n) => {
        this.relayer.request(i).then(r).catch((o) => {
          this.logger.warn(o), n(o);
        });
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again"), !0;
    } catch {
      return this.relayer.events.emit(te.connection_stalled), !1;
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const s = e[0].relay, i = { method: rs(s.protocol).batchFetchMessages, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    let r;
    try {
      r = await await et(new Promise((n, o) => {
        this.relayer.request(i).catch((a) => {
          this.logger.warn(a), o(a);
        }).then(n);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(te.connection_stalled);
    }
    return r;
  }
  rpcUnsubscribe(e, s, i) {
    const r = { method: rs(i.protocol).unsubscribe, params: { topic: e, id: s } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r }), this.relayer.request(r);
  }
  onSubscribe(e, s) {
    this.setSubscription(e, { ...s, id: e }), this.pending.delete(s.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((s) => {
      this.setSubscription(s.id, { ...s }), this.pending.delete(s.topic);
    });
  }
  async onUnsubscribe(e, s, i) {
    this.events.removeAllListeners(s), this.hasSubscription(s, e) && this.deleteSubscription(s, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, s) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: s }), this.addSubscription(e, s);
  }
  addSubscription(e, s) {
    this.subscriptions.set(e, { ...s }), this.topicMap.set(s.topic, e), this.events.emit(Ae.created, s);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const s = this.subscriptions.get(e);
    if (!s) {
      const { message: i } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return s;
  }
  deleteSubscription(e, s) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: s });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(Ae.deleted, { ...i, reason: s });
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Ae.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e = [...this.cached], s = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let i = 0; i < s; i++) {
        const r = e.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(r);
      }
    }
    this.events.emit(Ae.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size && !e.every((s) => {
        var i;
        return s.topic === ((i = this.subscriptions.get(s.id)) == null ? void 0 : i.topic);
      })) {
        const { message: s } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (e.length) {
      if (!await this.rpcBatchSubscribe(e)) {
        this.logger.warn(`Batch subscribe failed for ${e.length} topics, adding to pending for retry`), e.forEach((s) => {
          this.pending.set(s.topic, s);
        });
        return;
      }
      this.onBatchSubscribe(await Promise.all(e.map(async (s) => ({ ...s, id: await this.getSubscriptionId(s.topic) }))));
    }
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const s = await this.rpcBatchFetchMessages(e);
    s && s.messages && (await su(D.toMiliseconds(D.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(s.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete(e) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e) {
    return Fe(e + await this.getClientId());
  }
}, Ry = class extends kp {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Bt.EventEmitter(), this.name = sg, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1, this.heartBeatTimeout = D.toMiliseconds(D.THIRTY_SECONDS + D.FIVE_SECONDS), this.reconnectInProgress = !1, this.requestsInFlight = [], this.connectTimeout = D.toMiliseconds(D.ONE_SECOND * 15), this.stalledRestartInProgress = !1, this.stalledRestartBackoff = 0, this.stalledRestartBaseInterval = D.toMiliseconds(D.ONE_SECOND * 2), this.stalledRestartMaxInterval = D.toMiliseconds(D.THIRTY_SECONDS), this.request = async (s) => {
      var r, n;
      this.logger.debug("Publishing Request Payload");
      const i = s.id || Lt().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: i, method: s.method, topic: (r = s.params) == null ? void 0 : r.topic }, "relayer.request - publishing...");
        const o = `${i}:${((n = s.params) == null ? void 0 : n.tag) || ""}`;
        this.requestsInFlight.push(o);
        const a = await this.provider.request(s);
        return this.requestsInFlight = this.requestsInFlight.filter((c) => c !== o), a;
      } catch (o) {
        throw this.logger.debug(`Failed to Publish Request: ${i}`), o;
      }
    }, this.resetPingTimeout = () => {
      hi() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var s, i, r, n;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n = (r = (i = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : i.socket) == null ? void 0 : r.terminate) == null || n.call(r);
        } catch (o) {
          this.logger.warn(o, o == null ? void 0 : o.message);
        }
      }, this.heartBeatTimeout));
    }, this.onPayloadHandler = (s) => {
      this.onProviderPayload(s), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(te.connect);
    }, this.onDisconnectHandler = () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (s) => {
      this.logger.fatal(`Fatal socket error: ${s.message}`), this.events.emit(te.error, s), this.logger.fatal("Fatal socket error received, closing transport"), this.transportExplicitlyClosed = !0, clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0, this.reconnectInProgress = !1, this.transportClose().catch((i) => this.logger.warn(i));
    }, this.registerProviderListeners = () => {
      this.provider.on(Be.payload, this.onPayloadHandler), this.provider.on(Be.connect, this.onConnectHandler), this.provider.on(Be.disconnect, this.onDisconnectHandler), this.provider.on(Be.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = nn({ logger: e.logger ?? tg, name: this.name }), this.messages = new Py(this.logger, e.core), this.subscriber = new $y(this, this.logger), this.publisher = new Ay(this, this.logger), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || bc, jl() ? this.packageName = $n() : Ml() && (this.bundleId = $n()), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.transportOpen().catch((e) => this.logger.warn(e, e == null ? void 0 : e.message));
  }
  get context() {
    return Ce(this.logger);
  }
  get connected() {
    var e, s, i;
    return ((i = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : i.readyState) === 1 || !1;
  }
  get connecting() {
    var e, s, i;
    return ((i = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : i.readyState) === 0 || this.connectPromise !== void 0 || !1;
  }
  async publish(e, s, i) {
    this.isInitialized(), await this.publisher.publish(e, s, i), await this.recordMessageEvent({ topic: e, message: s, publishedAt: Date.now(), transportType: J.relay }, ri.outbound);
  }
  async publishCustom(e) {
    this.isInitialized(), await this.publisher.publishCustom(e);
  }
  async subscribe(e, s) {
    var a, c, h;
    this.isInitialized(), (!(s != null && s.transportType) || (s == null ? void 0 : s.transportType) === "relay") && await this.toEstablishConnection();
    const i = typeof ((a = s == null ? void 0 : s.internal) == null ? void 0 : a.throwOnFailedPublish) > "u" ? !0 : (c = s == null ? void 0 : s.internal) == null ? void 0 : c.throwOnFailedPublish;
    let r = ((h = this.subscriber.topicMap.get(e)) == null ? void 0 : h[0]) || "", n;
    const o = (l) => {
      l.topic === e && (this.subscriber.off(Ae.created, o), n());
    };
    return await Promise.all([new Promise((l) => {
      n = l, this.subscriber.on(Ae.created, o);
    }), new Promise(async (l, u) => {
      r = await this.subscriber.subscribe(e, { internal: { throwOnFailedPublish: i }, ...s }).catch((d) => {
        i && u(d);
      }) || r, l();
    })]), r;
  }
  async unsubscribe(e, s) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, s);
  }
  on(e, s) {
    this.events.on(e, s);
  }
  once(e, s) {
    this.events.once(e, s);
  }
  off(e, s) {
    this.events.off(e, s);
  }
  removeListener(e, s) {
    this.events.removeListener(e, s);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await et(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, clearTimeout(this.stalledRestartTimeout), this.stalledRestartInProgress = !1, this.stalledRestartBackoff = 0, await this.resetTransport();
  }
  async transportOpen(e) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (s, i) => {
      await this.connect(e).then(s).catch(i).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.resetTransport(), await this.transportOpen());
  }
  async resetTransport() {
    this.reconnectInProgress = !0, clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0, await this.transportDisconnect(), await this.subscriber.stop(), this.reconnectInProgress = !1;
  }
  async confirmOnlineStateOrThrow() {
    if (!await yo()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const s = e.sort((i, r) => i.publishedAt - r.publishedAt);
    this.logger.debug(`Batch of ${s.length} message events sorted`);
    for (const i of s) try {
      await this.onMessageEvent(i);
    } catch (r) {
      this.logger.warn(r, "Error while processing batch message event: " + (r == null ? void 0 : r.message));
    }
    this.logger.trace(`Batch of ${s.length} message events processed`);
  }
  async onLinkMessageEvent(e, s) {
    const { topic: i } = e;
    if (!s.sessionExists) {
      const r = se(D.FIVE_MINUTES), n = { topic: i, expiry: r, relay: { protocol: "irn" }, active: !1 };
      await this.core.pairing.pairings.set(i, n);
    }
    this.events.emit(te.message, e), await this.recordMessageEvent(e, ri.inbound);
  }
  async connect(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
    let s = 1;
    for (; s < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${s}...`), await this.createProvider(), await new Promise(async (i, r) => {
          const n = () => {
            r(new Error("Connection interrupted while trying to connect"));
          };
          this.provider.once(Be.disconnect, n), await et(new Promise((o, a) => {
            this.provider.connect().then(o).catch(a);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
            r(o);
          }).finally(() => {
            this.provider.off(Be.disconnect, n), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o, a) => {
            const c = () => {
              r(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(Be.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
              this.provider.off(Be.disconnect, c);
            });
          }), this.hasExperiencedNetworkDisruption = !1, i();
        });
      } catch (i) {
        await this.subscriber.stop();
        const r = i;
        this.logger.warn({}, r.message), this.hasExperiencedNetworkDisruption = !0;
      } finally {
        this.connectionAttemptInProgress = !1;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${s}`);
        break;
      }
      await new Promise((i) => setTimeout(i, D.toMiliseconds(s * 1))), s++;
    }
  }
  startPingTimeout() {
    var e, s, i, r, n;
    if (hi()) try {
      (s = (e = this.provider) == null ? void 0 : e.connection) != null && s.socket && ((n = (r = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : r.socket) == null || n.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o) {
      this.logger.warn(o, o == null ? void 0 : o.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new kr(new ph(Hl({ sdkVersion: Tr, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e, s) {
    const { topic: i, message: r } = e;
    await this.messages.set(i, r, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: s, message: i } = e;
    if (!i || i.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
    if (!await this.subscriber.isKnownTopic(s)) return this.logger.warn(`Ignoring message for unknown topic ${s}`), !0;
    const r = this.messages.has(s, i);
    return r && this.logger.warn(`Ignoring duplicate message: ${i}`), r;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Fr(e)) {
      if (!e.method.endsWith(ig)) return;
      const s = e.params, { topic: i, message: r, publishedAt: n, attestation: o } = s.data, a = { topic: i, message: r, publishedAt: n, transportType: J.relay, attestation: o };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace({ type: "event", event: s.id, ...a }), this.events.emit(s.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else Ur(e) && this.events.emit(te.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, ri.inbound), this.events.emit(te.message, e));
  }
  async acknowledgePayload(e) {
    const s = Rs(e.id, !0);
    await this.provider.connection.send(s);
  }
  unregisterProviderListeners() {
    this.provider.off(Be.payload, this.onPayloadHandler), this.provider.off(Be.connect, this.onConnectHandler), this.provider.off(Be.disconnect, this.onDisconnectHandler), this.provider.off(Be.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await yo();
    vp(async (s) => {
      e !== s && (e = s, s ? await this.transportOpen().catch((i) => this.logger.error(i, i == null ? void 0 : i.message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
    }), this.core.heartbeat.on(gs.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && _p()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (s) {
        this.logger.warn(s, s == null ? void 0 : s.message);
      }
    }), this.events.on(te.connection_stalled, () => {
      if (this.transportExplicitlyClosed || this.stalledRestartInProgress) return;
      this.stalledRestartInProgress = !0;
      const s = this.stalledRestartBackoff === 0 ? 0 : Math.min(Math.pow(2, this.stalledRestartBackoff - 1) * this.stalledRestartBaseInterval, this.stalledRestartMaxInterval);
      this.stalledRestartBackoff++, this.logger.warn(`Connection stalled, restarting transport${s ? ` in ${s}ms` : ""}...`), this.stalledRestartTimeout = setTimeout(async () => {
        try {
          if (this.transportExplicitlyClosed) return;
          await this.restartTransport();
        } catch (i) {
          this.logger.error(i, i == null ? void 0 : i.message);
        } finally {
          this.stalledRestartInProgress = !1;
        }
      }, s);
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(te.disconnect), this.connectionAttemptInProgress = !1, !this.reconnectInProgress && (this.reconnectInProgress = !0, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = !1;
    }, D.toMiliseconds(rg)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectPromise) {
        await this.connectPromise;
        return;
      }
      await this.connect();
    }
  }
};
function Cy(t, e) {
  return t === e || Number.isNaN(t) && Number.isNaN(e);
}
function Eo(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function Io(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const Ny = "[object RegExp]", Ty = "[object String]", By = "[object Number]", qy = "[object Boolean]", _o = "[object Arguments]", ky = "[object Symbol]", Fy = "[object Date]", Uy = "[object Map]", Dy = "[object Set]", jy = "[object Array]", My = "[object Function]", Ly = "[object ArrayBuffer]", ir = "[object Object]", zy = "[object Error]", Vy = "[object DataView]", Ky = "[object Uint8Array]", Hy = "[object Uint8ClampedArray]", Gy = "[object Uint16Array]", Wy = "[object Uint32Array]", Zy = "[object BigUint64Array]", Yy = "[object Int8Array]", Qy = "[object Int16Array]", Jy = "[object Int32Array]", Xy = "[object BigInt64Array]", em = "[object Float32Array]", tm = "[object Float64Array]";
function xo(t) {
  if (!t || typeof t != "object") return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : !1;
}
function sm(t, e, s) {
  return Ss(t, e, void 0, void 0, void 0, void 0, s);
}
function Ss(t, e, s, i, r, n, o) {
  const a = o(t, e, s, i, r, n);
  if (a !== void 0) return a;
  if (typeof t == typeof e) switch (typeof t) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return t === e;
    case "number":
      return t === e || Object.is(t, e);
    case "function":
      return t === e;
    case "object":
      return $s(t, e, n, o);
  }
  return $s(t, e, n, o);
}
function $s(t, e, s, i) {
  if (Object.is(t, e)) return !0;
  let r = Io(t), n = Io(e);
  if (r === _o && (r = ir), n === _o && (n = ir), r !== n) return !1;
  switch (r) {
    case Ty:
      return t.toString() === e.toString();
    case By: {
      const c = t.valueOf(), h = e.valueOf();
      return Cy(c, h);
    }
    case qy:
    case Fy:
    case ky:
      return Object.is(t.valueOf(), e.valueOf());
    case Ny:
      return t.source === e.source && t.flags === e.flags;
    case My:
      return t === e;
  }
  s = s ?? /* @__PURE__ */ new Map();
  const o = s.get(t), a = s.get(e);
  if (o != null && a != null) return o === e;
  s.set(t, e), s.set(e, t);
  try {
    switch (r) {
      case Uy: {
        if (t.size !== e.size) return !1;
        for (const [c, h] of t.entries()) if (!e.has(c) || !Ss(h, e.get(c), c, t, e, s, i)) return !1;
        return !0;
      }
      case Dy: {
        if (t.size !== e.size) return !1;
        const c = Array.from(t.values()), h = Array.from(e.values());
        for (let l = 0; l < c.length; l++) {
          const u = c[l], d = h.findIndex((f) => Ss(u, f, void 0, t, e, s, i));
          if (d === -1) return !1;
          h.splice(d, 1);
        }
        return !0;
      }
      case jy:
      case Ky:
      case Hy:
      case Gy:
      case Wy:
      case Zy:
      case Yy:
      case Qy:
      case Jy:
      case Xy:
      case em:
      case tm: {
        if (typeof Buffer < "u" && Buffer.isBuffer(t) !== Buffer.isBuffer(e) || t.length !== e.length) return !1;
        for (let c = 0; c < t.length; c++) if (!Ss(t[c], e[c], c, t, e, s, i)) return !1;
        return !0;
      }
      case Ly:
        return t.byteLength !== e.byteLength ? !1 : $s(new Uint8Array(t), new Uint8Array(e), s, i);
      case Vy:
        return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? !1 : $s(new Uint8Array(t), new Uint8Array(e), s, i);
      case zy:
        return t.name === e.name && t.message === e.message;
      case ir: {
        if (!($s(t.constructor, e.constructor, s, i) || xo(t) && xo(e))) return !1;
        const c = [...Object.keys(t), ...Eo(t)], h = [...Object.keys(e), ...Eo(e)];
        if (c.length !== h.length) return !1;
        for (let l = 0; l < c.length; l++) {
          const u = c[l], d = t[u];
          if (!Object.hasOwn(e, u)) return !1;
          const f = e[u];
          if (!Ss(d, f, u, t, e, s, i)) return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    s.delete(t), s.delete(e);
  }
}
function im() {
}
function rm(t, e) {
  return sm(t, e, im);
}
let Jt = class extends Fp {
  constructor(e, s, i, r = it, n = void 0) {
    super(e, s, i, r), this.core = e, this.logger = s, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = ng, this.cached = [], this.initialized = !1, this.storagePrefix = it, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !ne(o) ? this.map.set(this.getKey(o), o) : Qf(o) ? this.map.set(o.id, o) : Jf(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => rm(a[c], o[c]))) : this.values), this.update = async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const c = { ...this.getData(o), ...a };
      this.map.set(o, c), await this.persist();
    }, this.delete = async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
    }, this.logger = Re(s, this.name), this.storagePrefix = r, this.getKey = n;
  }
  get context() {
    return Ce(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const s = this.map.get(e);
    if (!s) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: r } = j("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(r), new Error(r);
      }
      const { message: i } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return s;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: s } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}, nm = class {
  constructor(e, s) {
    this.core = e, this.logger = s, this.name = hg, this.version = lg, this.events = new Dr(), this.initialized = !1, this.storagePrefix = it, this.ignoredPayloadTypes = [yt], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async (i) => {
      this.isInitialized();
      const r = Rr(), n = await this.core.crypto.setSymKey(r), o = se(D.FIVE_MINUTES), a = { protocol: wc }, c = { topic: n, expiry: o, relay: a, active: !1, methods: i == null ? void 0 : i.methods }, h = co({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: r, relay: a, expiryTimestamp: o, methods: i == null ? void 0 : i.methods });
      return this.events.emit(Mt.create, c), this.core.expirer.set(n, o), await this.pairings.set(n, c), await this.core.relayer.subscribe(n, { transportType: i == null ? void 0 : i.transportType, internal: i == null ? void 0 : i.internal }), { topic: n, uri: h };
    }, this.pair = async (i) => {
      this.isInitialized();
      const r = this.core.eventClient.createEvent({ properties: { topic: i == null ? void 0 : i.uri, trace: [Ye.pairing_started] } });
      this.isValidPair(i, r);
      const { topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: h } = ao(i.uri);
      r.props.properties.topic = n, r.addTrace(Ye.pairing_uri_validation_success), r.addTrace(Ye.pairing_uri_not_expired);
      let l;
      if (this.pairings.keys.includes(n)) {
        if (l = this.pairings.get(n), r.addTrace(Ye.existing_pairing), l.active) throw r.setError(ht.active_pairing_already_exists), new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
        r.addTrace(Ye.pairing_not_expired);
      }
      const u = c || se(D.FIVE_MINUTES), d = { topic: n, relay: a, expiry: u, active: !1, methods: h };
      this.core.expirer.set(n, u), await this.pairings.set(n, d), r.addTrace(Ye.store_new_pairing), i.activatePairing && await this.activate({ topic: n }), this.events.emit(Mt.create, d), r.addTrace(Ye.emit_inactive_pairing), this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(o, n), r.addTrace(Ye.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        r.setError(ht.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n, { relay: a });
      } catch (f) {
        throw r.setError(ht.subscribe_pairing_topic_failure), f;
      }
      return r.addTrace(Ye.subscribe_pairing_topic_success), d;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const r = se(D.FIVE_MINUTES);
      this.core.expirer.set(i, r), await this.pairings.update(i, { active: !0, expiry: r });
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: r } = i;
      if (this.pairings.keys.includes(r)) {
        const n = await this.sendRequest(r, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = jt();
        this.events.once(Z("pairing_ping", n), ({ error: h }) => {
          h ? c(h) : a();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: r }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: r });
    }, this.updateMetadata = async ({ topic: i, metadata: r }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: r });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: r } = i;
      this.pairings.keys.includes(r) && (await this.sendRequest(r, "wc_pairingDelete", X("USER_DISCONNECTED")), await this.deletePairing(r));
    }, this.formatUriFromPairing = (i) => {
      this.isInitialized();
      const { topic: r, relay: n, expiry: o, methods: a } = i, c = this.core.crypto.keychain.get(r);
      return co({ protocol: this.core.protocol, version: this.core.version, topic: r, symKey: c, relay: n, expiryTimestamp: o, methods: a });
    }, this.sendRequest = async (i, r, n) => {
      const o = Je(r, n), a = await this.core.crypto.encode(i, o), c = Es[r].req;
      return this.core.history.set(i, o), this.core.relayer.publish(i, a, c), o.id;
    }, this.sendResult = async (i, r, n) => {
      const o = Rs(i, n), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, i)).request.method, h = Es[c].res;
      await this.core.relayer.publish(r, a, h), await this.core.history.resolve(o);
    }, this.sendError = async (i, r, n) => {
      const o = Fo(i, n), a = await this.core.crypto.encode(r, o), c = (await this.core.history.get(r, i)).request.method, h = Es[c] ? Es[c].res : Es.unregistered_method.res;
      await this.core.relayer.publish(r, a, h), await this.core.history.resolve(o);
    }, this.deletePairing = async (i, r) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, X("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), r ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((r) => Xe(r.expiry));
      await Promise.all(i.map((r) => this.deletePairing(r.topic)));
    }, this.onRelayEventRequest = async (i) => {
      const { topic: r, payload: n } = i;
      switch (n.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(r, n);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(r, n);
        default:
          return await this.onUnknownRpcMethodRequest(r, n);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: r, payload: n } = i, o = (await this.core.history.get(r, n.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(r, n);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }, this.onPairingPingRequest = async (i, r) => {
      const { id: n } = r;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(n, i, !0), this.events.emit(Mt.ping, { id: n, topic: i });
      } catch (o) {
        await this.sendError(n, i, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (i, r) => {
      const { id: n } = r;
      setTimeout(() => {
        at(r) ? this.events.emit(Z("pairing_ping", n), {}) : Qe(r) && this.events.emit(Z("pairing_ping", n), { error: r.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, r) => {
      const { id: n } = r;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit(Mt.delete, { id: n, topic: i });
      } catch (o) {
        await this.sendError(n, i, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (i, r) => {
      const { id: n, method: o } = r;
      try {
        if (this.registeredMethods.includes(o)) return;
        const a = X("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(n, i, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(n, i, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(X("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i, r) => {
      var o;
      if (!ve(i)) {
        const { message: a } = j("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw r.setError(ht.malformed_pairing_uri), new Error(a);
      }
      if (!Yf(i.uri)) {
        const { message: a } = j("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw r.setError(ht.malformed_pairing_uri), new Error(a);
      }
      const n = ao(i == null ? void 0 : i.uri);
      if (!((o = n == null ? void 0 : n.relay) != null && o.protocol)) {
        const { message: a } = j("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw r.setError(ht.malformed_pairing_uri), new Error(a);
      }
      if (!(n != null && n.symKey)) {
        const { message: a } = j("MISSING_OR_INVALID", "pair() uri#symKey");
        throw r.setError(ht.malformed_pairing_uri), new Error(a);
      }
      if (n != null && n.expiryTimestamp && D.toMiliseconds(n == null ? void 0 : n.expiryTimestamp) < Date.now()) {
        r.setError(ht.pairing_expired);
        const { message: a } = j("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }, this.isValidPing = async (i) => {
      if (!ve(i)) {
        const { message: n } = j("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(n);
      }
      const { topic: r } = i;
      await this.isValidPairingTopic(r);
    }, this.isValidDisconnect = async (i) => {
      if (!ve(i)) {
        const { message: n } = j("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(n);
      }
      const { topic: r } = i;
      await this.isValidPairingTopic(r);
    }, this.isValidPairingTopic = async (i) => {
      if (!ie(i, !1)) {
        const { message: r } = j("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(r);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: r } = j("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(r);
      }
      if (Xe(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: r } = j("EXPIRED", `pairing topic: ${i}`);
        throw new Error(r);
      }
    }, this.core = e, this.logger = Re(s, this.name), this.pairings = new Jt(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ce(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(te.message, async (e) => {
      const { topic: s, message: i, transportType: r } = e;
      if (this.pairings.keys.includes(s) && r !== J.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) try {
        const n = await this.core.crypto.decode(s, i);
        Fr(n) ? (this.core.history.set(s, n), await this.onRelayEventRequest({ topic: s, payload: n })) : Ur(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: s, payload: n }), this.core.history.delete(s, n.id)), await this.core.relayer.messages.ack(s, i);
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(qe.expired, async (e) => {
      const { topic: s } = ga(e.target);
      s && this.pairings.keys.includes(s) && (await this.deletePairing(s, !0), this.events.emit(Mt.expire, { topic: s }));
    });
  }
}, om = class extends Tp {
  constructor(e, s) {
    super(e, s), this.core = e, this.logger = s, this.records = /* @__PURE__ */ new Map(), this.events = new Bt.EventEmitter(), this.name = ug, this.version = dg, this.cached = [], this.initialized = !1, this.storagePrefix = it, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, r, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: r, chainId: n }), this.records.has(r.id)) return;
      const o = { id: r.id, topic: i, request: { method: r.method, params: r.params || null }, chainId: n, expiry: se(D.THIRTY_DAYS) };
      this.records.set(o.id, o), this.persist(), this.events.emit(Me.created, o);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id)) return;
      const r = await this.getRecord(i.id);
      typeof r.response < "u" || (r.response = Qe(i) ? { error: i.error } : { result: i.result }, this.records.set(r.id, r), this.persist(), this.events.emit(Me.updated, r));
    }, this.get = async (i, r) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: r }), await this.getRecord(r)), this.delete = (i, r) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: r }), this.values.forEach((n) => {
        if (n.topic === i) {
          if (typeof r < "u" && n.id !== r) return;
          this.records.delete(n.id), this.events.emit(Me.deleted, n);
        }
      }), this.persist();
    }, this.exists = async (i, r) => (this.isInitialized(), this.records.has(r) ? (await this.getRecord(r)).topic === i : !1), this.on = (i, r) => {
      this.events.on(i, r);
    }, this.once = (i, r) => {
      this.events.once(i, r);
    }, this.off = (i, r) => {
      this.events.off(i, r);
    }, this.removeListener = (i, r) => {
      this.events.removeListener(i, r);
    }, this.logger = Re(s, this.name);
  }
  get context() {
    return Ce(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((s) => {
      if (typeof s.response < "u") return;
      const i = { topic: s.topic, request: Je(s.request.method, s.request.params, s.id), chainId: s.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const s = this.records.get(e);
    if (!s) {
      const { message: i } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return s;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Me.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: s } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Me.created, (e) => {
      const s = Me.created;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.events.on(Me.updated, (e) => {
      const s = Me.updated;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.events.on(Me.deleted, (e) => {
      const s = Me.deleted;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.core.heartbeat.on(gs.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((s) => {
        D.toMiliseconds(s.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${s.id}`), this.records.delete(s.id), this.events.emit(Me.deleted, s, !1), e = !0);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}, am = class extends Dp {
  constructor(e, s) {
    super(e, s), this.core = e, this.logger = s, this.expirations = /* @__PURE__ */ new Map(), this.events = new Bt.EventEmitter(), this.name = fg, this.version = pg, this.cached = [], this.initialized = !1, this.storagePrefix = it, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const r = this.formatTarget(i);
        return typeof this.getExpiration(r) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, r) => {
      this.isInitialized();
      const n = this.formatTarget(i), o = { target: n, expiry: r };
      this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit(qe.created, { target: n, expiration: o });
    }, this.get = (i) => {
      this.isInitialized();
      const r = this.formatTarget(i);
      return this.getExpiration(r);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const r = this.formatTarget(i), n = this.getExpiration(r);
        this.expirations.delete(r), this.events.emit(qe.deleted, { target: r, expiration: n });
      }
    }, this.on = (i, r) => {
      this.events.on(i, r);
    }, this.once = (i, r) => {
      this.events.once(i, r);
    }, this.off = (i, r) => {
      this.events.off(i, r);
    }, this.removeListener = (i, r) => {
      this.events.removeListener(i, r);
    }, this.logger = Re(s, this.name);
  }
  get context() {
    return Ce(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return Gl(e);
    if (typeof e == "number") return Wl(e);
    const { message: s } = j("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(s);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(qe.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: s } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const s = this.expirations.get(e);
    if (!s) {
      const { message: i } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(i), new Error(i);
    }
    return s;
  }
  checkExpiry(e, s) {
    const { expiry: i } = s;
    D.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, s);
  }
  expire(e, s) {
    this.expirations.delete(e), this.events.emit(qe.expired, { target: e, expiration: s });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, s) => this.checkExpiry(s, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(gs.pulse, () => this.checkExpirations()), this.events.on(qe.created, (e) => {
      const s = qe.created;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    }), this.events.on(qe.expired, (e) => {
      const s = qe.expired;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    }), this.events.on(qe.deleted, (e) => {
      const s = qe.deleted;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}, cm = class extends jp {
  constructor(e, s, i) {
    super(e, s, i), this.core = e, this.logger = s, this.store = i, this.name = gg, this.verifyUrlV3 = mg, this.storagePrefix = it, this.version = mc, this.init = async () => {
      var r;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && D.toMiliseconds((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }, this.register = async (r) => {
      if (!ys() || this.isDevEnv) return;
      const n = window.location.origin, { id: o, decryptedId: a } = r, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
      try {
        const h = mt.getDocument(), l = this.startAbortTimer(D.ONE_SECOND * 5), u = await new Promise((d, f) => {
          const p = () => {
            window.removeEventListener("message", m), h.body.removeChild(g), f("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", p);
          const g = h.createElement("iframe");
          g.src = c, g.style.display = "none", g.addEventListener("error", p, { signal: this.abortController.signal });
          const m = (O) => {
            if (O.data && typeof O.data == "string") try {
              const k = JSON.parse(O.data);
              if (k.type === "verify_attestation") {
                if (dr(k.attestation).payload.id !== o) return;
                clearInterval(l), h.body.removeChild(g), this.abortController.signal.removeEventListener("abort", p), window.removeEventListener("message", m), d(k.attestation === null ? "" : k.attestation);
              }
            } catch (k) {
              this.logger.warn(k);
            }
          };
          h.body.appendChild(g), window.addEventListener("message", m, { signal: this.abortController.signal });
        });
        return this.logger.debug(u, "jwt attestation"), u;
      } catch (h) {
        this.logger.warn(h);
      }
      return "";
    }, this.resolve = async (r) => {
      if (this.isDevEnv) return "";
      const { attestationId: n, hash: o, encryptedId: a } = r;
      if (n === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n) {
        if (dr(n).payload.id !== a) return;
        const h = await this.isValidJwtAttestation(n);
        if (h) {
          if (!h.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h;
        }
      }
      if (!o) return;
      const c = this.getVerifyUrl(r == null ? void 0 : r.verifyUrl);
      return this.fetchAttestation(o, c);
    }, this.fetchAttestation = async (r, n) => {
      this.logger.debug(`resolving attestation: ${r} from url: ${n}`);
      const o = this.startAbortTimer(D.ONE_SECOND * 5), a = await fetch(`${n}/attestation/${r}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
    }, this.getVerifyUrl = (r) => {
      let n = r || Os;
      return wg.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${Os}`), n = Os), n;
    }, this.fetchPublicKey = async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const r = this.startAbortTimer(D.FIVE_SECONDS), n = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(r), await n.json();
      } catch (r) {
        this.logger.warn(r);
      }
    }, this.persistPublicKey = async (r) => {
      this.logger.debug(r, "persisting public key to local storage"), await this.store.setItem(this.storeKey, r), this.publicKey = r;
    }, this.removePublicKey = async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }, this.isValidJwtAttestation = async (r) => {
      const n = await this.getPublicKey();
      try {
        if (n) return this.validateAttestation(r, n);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
      const o = await this.fetchAndPersistPublicKey();
      try {
        if (o) return this.validateAttestation(r, o);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
    }, this.getPublicKey = async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey(), this.fetchAndPersistPublicKey = async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n) => {
        const o = await this.fetchPublicKey();
        o && (await this.persistPublicKey(o), n(o));
      });
      const r = await this.fetchPromise;
      return this.fetchPromise = void 0, r;
    }, this.validateAttestation = (r, n) => {
      const o = Ff(r, n.publicKey), a = { hasExpired: D.toMiliseconds(o.exp) < Date.now(), payload: o };
      if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a.payload.origin, isScam: a.payload.isScam, isVerified: a.payload.isVerified };
    }, this.logger = Re(s, this.name), this.abortController = new AbortController(), this.isDevEnv = Hr(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return Ce(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), D.toMiliseconds(e));
  }
}, hm = class extends Mp {
  constructor(e, s) {
    super(e, s), this.projectId = e, this.logger = s, this.context = bg, this.registerDeviceToken = async (i) => {
      const { clientId: r, token: n, notificationType: o, enableEncrypted: a = !1 } = i, c = `${vg}/${this.projectId}/clients`;
      await fetch(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: r, type: o, token: n, always_raw: a }) });
    }, this.logger = Re(s, this.context);
  }
}, lm = class extends Lp {
  constructor(e, s, i = !0) {
    super(e, s, i), this.core = e, this.logger = s, this.context = Ig, this.storagePrefix = it, this.storageVersion = Eg, this.events = /* @__PURE__ */ new Map(), this.shouldPersist = !1, this.init = async () => {
      if (!Hr()) try {
        const r = { eventId: Cn(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: fa(this.core.relayer.protocol, this.core.relayer.version, Tr) } } };
        await this.sendEvent([r]);
      } catch (r) {
        this.logger.warn(r);
      }
    }, this.createEvent = (r) => {
      const { event: n = "ERROR", type: o = "", properties: { topic: a, trace: c } } = r, h = Cn(), l = this.core.projectId || "", u = Date.now(), d = { eventId: h, timestamp: u, props: { event: n, type: o, properties: { topic: a, trace: c } }, bundleId: l, domain: this.getAppDomain(), ...this.setMethods(h) };
      return this.telemetryEnabled && (this.events.set(h, d), this.shouldPersist = !0), d;
    }, this.getEvent = (r) => {
      const { eventId: n, topic: o } = r;
      if (n) return this.events.get(n);
      const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
      if (a) return { ...a, ...this.setMethods(a.eventId) };
    }, this.deleteEvent = (r) => {
      const { eventId: n } = r;
      this.events.delete(n), this.shouldPersist = !0;
    }, this.setEventListeners = () => {
      this.core.heartbeat.on(gs.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((r) => {
          D.fromMiliseconds(Date.now()) - D.fromMiliseconds(r.timestamp) > _g && (this.events.delete(r.eventId), this.shouldPersist = !0);
        });
      });
    }, this.setMethods = (r) => ({ addTrace: (n) => this.addTrace(r, n), setError: (n) => this.setError(r, n) }), this.addTrace = (r, n) => {
      const o = this.events.get(r);
      o && (o.props.properties.trace.push(n), this.events.set(r, o), this.shouldPersist = !0);
    }, this.setError = (r, n) => {
      const o = this.events.get(r);
      o && (o.props.type = n, o.timestamp = Date.now(), this.events.set(r, o), this.shouldPersist = !0);
    }, this.persist = async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
    }, this.restore = async () => {
      try {
        const r = await this.core.storage.getItem(this.storageKey) || [];
        if (!r.length) return;
        r.forEach((n) => {
          this.events.set(n.eventId, { ...n, ...this.setMethods(n.eventId) });
        });
      } catch (r) {
        this.logger.warn(r);
      }
    }, this.submit = async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const r = [];
      for (const [n, o] of this.events) o.props.type && r.push(o);
      if (r.length !== 0) try {
        if ((await this.sendEvent(r)).ok) for (const n of r) this.events.delete(n.eventId), this.shouldPersist = !0;
      } catch (n) {
        this.logger.warn(n);
      }
    }, this.sendEvent = async (r) => {
      const n = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${xg}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Tr}${n}`, { method: "POST", body: JSON.stringify(r) });
    }, this.getAppDomain = () => da().url, this.logger = Re(s, this.context), this.telemetryEnabled = i, i ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}, um = class Sc extends Np {
  constructor(e) {
    var o;
    super(e), this.protocol = yc, this.version = mc, this.name = Nr, this.events = new Bt.EventEmitter(), this.initialized = !1, this.on = (a, c) => this.events.on(a, c), this.once = (a, c) => this.events.once(a, c), this.off = (a, c) => this.events.off(a, c), this.removeListener = (a, c) => this.events.removeListener(a, c), this.dispatchEnvelope = ({ topic: a, message: c, sessionExists: h }) => {
      if (!a || !c) return;
      const l = { topic: a, message: c, publishedAt: Date.now(), transportType: J.link_mode };
      this.relayer.onLinkMessageEvent(l, { sessionExists: h });
    };
    const s = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
    if (s) try {
      return this.customStoragePrefix = s.customStoragePrefix, this.logger = s.logger, this.heartbeat = s.heartbeat, this.crypto = s.crypto, this.history = s.history, this.expirer = s.expirer, this.storage = s.storage, this.relayer = s.relayer, this.pairing = s.pairing, this.verify = s.verify, this.echoClient = s.echoClient, this.linkModeSupportedApps = s.linkModeSupportedApps, this.eventClient = s.eventClient, this.initialized = s.initialized, this.logChunkController = s.logChunkController, s;
    } catch (a) {
      console.warn("Failed to copy global core", a);
    }
    this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || bc, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const i = ch({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : Kp.logger, name: Nr }), { logger: r, chunkLoggerController: n } = ko({ opts: i, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = n, (o = this.logChunkController) != null && o.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a, c;
      (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = Re(r, this.name), this.heartbeat = new hh(), this.crypto = new Sy(this, this.logger, e == null ? void 0 : e.keychain), this.history = new om(this, this.logger), this.expirer = new am(this, this.logger), this.storage = e != null && e.storage ? e.storage : new lh({ ...Hp, ...e == null ? void 0 : e.storageOptions }), this.relayer = new Ry({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new nm(this, this.logger), this.verify = new cm(this, this.logger, this.storage), this.echoClient = new hm(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new lm(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e) {
    const s = new Sc(e);
    await s.initialize();
    const i = await s.crypto.getClientId();
    return await s.storage.setItem(og, i), s;
  }
  get context() {
    return Ce(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(wo, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(wo) || [], this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(e, `Core Initialization Failure at epoch ${Date.now()}`), this.logger.error(e.message), e;
    }
  }
  getGlobalCore(e = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const s = `_walletConnectCore_${e}`, i = `${s}_count`;
      return globalThis[i] = (globalThis[i] || 0) + 1, globalThis[i] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`), globalThis[s];
    } catch (s) {
      console.warn("Failed to get global WalletConnect core", s);
      return;
    }
  }
  setGlobalCore(e) {
    var s;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i = `_walletConnectCore_${((s = e.opts) == null ? void 0 : s.customStoragePrefix) || ""}`;
      globalThis[i] = e;
    } catch (i) {
      console.warn("Failed to set global WalletConnect core", i);
    }
  }
  isGlobalCoreDisabled() {
    try {
      return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
    } catch {
      return !0;
    }
  }
};
const dm = um, Pc = "wc", Ac = 2, Oc = "client", on = `${Pc}@${Ac}:${Oc}:`, rr = { name: Oc, logger: "error" }, So = "WALLETCONNECT_DEEPLINK_CHOICE", fm = "proposal", Po = "Proposal expired", pm = "session", ss = D.SEVEN_DAYS, gm = "engine", ce = { wc_sessionPropose: { req: { ttl: D.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1101 }, reject: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1120 }, autoReject: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1121 } }, wc_sessionSettle: { req: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: D.FIVE_MINUTES * 3, prompt: !0, tag: 1108 }, res: { ttl: D.FIVE_MINUTES * 3, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: D.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1114 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: D.ONE_HOUR, prompt: !0, tag: 1116 }, res: { ttl: D.ONE_HOUR, prompt: !1, tag: 1117 }, reject: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1118 }, autoReject: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1119 } } }, nr = { min: D.FIVE_MINUTES, max: D.SEVEN_DAYS }, Ze = { idle: "IDLE", active: "ACTIVE" }, ym = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" }, sui_signAndExecuteTransaction: { key: "digest" }, sui_signTransaction: { key: "" }, hedera_signAndExecuteTransaction: { key: "transactionId" }, hedera_executeTransaction: { key: "transactionId" }, near_signTransaction: { key: "" }, near_signTransactions: { key: "" }, tron_signTransaction: { key: "txID" }, xrpl_signTransaction: { key: "" }, xrpl_signTransactionFor: { key: "" }, algo_signTxn: { key: "" }, sendTransfer: { key: "txid" }, stacks_stxTransfer: { key: "txId" }, polkadot_signTransaction: { key: "" }, cosmos_signDirect: { key: "" } }, mm = "request", wm = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], bm = "wc", vm = "auth", Em = "authKeys", Im = "pairingTopics", _m = "requests", Ti = `${bm}@${1.5}:${vm}:`, ni = `${Ti}:PUB_KEY`;
class xm extends Vp {
  constructor(e) {
    super(e), this.name = gm, this.events = new Dr(), this.initialized = !1, this.requestQueue = { state: Ze.idle, queue: [] }, this.sessionRequestQueue = { state: Ze.idle, queue: [] }, this.emittedSessionRequests = new iu({ limit: 500 }), this.requestQueueDelay = D.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.relayMessageCache = [], this.pendingSessions = /* @__PURE__ */ new Map(), this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(ce) }), this.initialized = !0, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, D.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (s) => {
      var N;
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const i = { ...s, requiredNamespaces: s.requiredNamespaces || {}, optionalNamespaces: s.optionalNamespaces || {} };
      await this.isValidConnect(i), i.optionalNamespaces = Gf(i.requiredNamespaces, i.optionalNamespaces), i.requiredNamespaces = {};
      const { pairingTopic: r, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: h, authentication: l, walletPay: u } = i, d = ((N = l == null ? void 0 : l[0]) == null ? void 0 : N.ttl) || ce.wc_sessionPropose.req.ttl || D.FIVE_MINUTES;
      this.validateRequestExpiry(d);
      let f = r, p, g = !1;
      try {
        if (f) {
          const A = this.client.core.pairing.pairings.get(f);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), g = A.active;
        }
      } catch (A) {
        throw this.client.logger.error(`connect() -> pairing.get(${f}) failed`), A;
      }
      if (!f || !g) {
        const { topic: A, uri: T } = await this.client.core.pairing.create({ internal: { skipSubscribe: !0 } });
        f = A, p = T;
      }
      if (!f) {
        const { message: A } = j("NO_MATCHING_KEY", `connect() pairing topic: ${f}`);
        throw new Error(A);
      }
      const m = await this.client.core.crypto.generateKeyPair(), O = se(d), k = { requiredNamespaces: n, optionalNamespaces: o, relays: h ?? [{ protocol: wc }], proposer: { publicKey: m, metadata: this.client.metadata }, expiryTimestamp: O, pairingTopic: f, ...a && { sessionProperties: a }, ...c && { scopedProperties: c }, id: bt(), ...(l || u) && { requests: { authentication: l == null ? void 0 : l.map((A) => {
        const { domain: T, chains: F, nonce: S, uri: b, exp: E, nbf: y, type: w, statement: I, requestId: $, resources: v, signatureTypes: x } = A;
        return { domain: T, chains: F, nonce: S, type: w ?? "caip122", aud: b, version: "1", iat: (/* @__PURE__ */ new Date()).toISOString(), exp: E, nbf: y, statement: I, requestId: $, resources: v, signatureTypes: x };
      }), walletPay: u } } }, P = Z("session_connect", k.id), { reject: _, resolve: R, done: C } = jt(d, Po), q = ({ id: A }) => {
        A === k.id && (this.client.events.off("proposal_expire", q), this.pendingSessions.delete(k.id), this.events.emit(P, { error: { message: Po, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", q), this.events.once(P, ({ error: A, session: T }) => {
        this.client.events.off("proposal_expire", q), A ? _(A) : T && R(T);
      }), await this.setProposal(k.id, k), await this.sendProposeSession({ proposal: k, publishOpts: { internal: { throwOnFailedPublish: !0 }, tvf: { correlationId: k.id } } }).catch((A) => {
        throw this.deleteProposal(k.id), A;
      }), { uri: p, approval: C };
    }, this.pair = async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(s);
      } catch (i) {
        throw this.client.logger.error("pair() failed"), i;
      }
    }, this.approve = async (s) => {
      var q, N, A;
      const i = this.client.core.eventClient.createEvent({ properties: { topic: (q = s == null ? void 0 : s.id) == null ? void 0 : q.toString(), trace: [Le.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (T) {
        throw i.setError(Ut.no_internet_connection), T;
      }
      try {
        await this.isValidProposalId(s == null ? void 0 : s.id);
      } catch (T) {
        throw this.client.logger.error(`approve() -> proposal.get(${s == null ? void 0 : s.id}) failed`), i.setError(Ut.proposal_not_found), T;
      }
      try {
        await this.isValidApprove(s);
      } catch (T) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), i.setError(Ut.session_approve_namespace_validation_failure), T;
      }
      const { id: r, relayProtocol: n, namespaces: o, sessionProperties: a, scopedProperties: c, sessionConfig: h, proposalRequestsResponses: l } = s, u = this.client.proposal.get(r);
      this.client.core.eventClient.deleteEvent({ eventId: i.eventId });
      const { pairingTopic: d, proposer: f, requiredNamespaces: p, optionalNamespaces: g } = u;
      let m = (N = this.client.core.eventClient) == null ? void 0 : N.getEvent({ topic: d });
      m || (m = (A = this.client.core.eventClient) == null ? void 0 : A.createEvent({ type: Le.session_approve_started, properties: { topic: d, trace: [Le.session_approve_started, Le.session_namespaces_validation_success] } }));
      const O = await this.client.core.crypto.generateKeyPair(), k = f.publicKey, P = await this.client.core.crypto.generateSharedKey(O, k), _ = { relay: { protocol: n ?? "irn" }, namespaces: o, controller: { publicKey: O, metadata: this.client.metadata }, expiry: se(ss), ...a && { sessionProperties: a }, ...c && { scopedProperties: c }, ...h && { sessionConfig: h }, proposalRequestsResponses: l }, R = J.relay;
      m.addTrace(Le.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(P, { transportType: R, internal: { skipSubscribe: !0 } });
      } catch (T) {
        throw m.setError(Ut.subscribe_session_topic_failure), T;
      }
      m.addTrace(Le.subscribe_session_topic_success);
      const C = { ..._, topic: P, requiredNamespaces: p, optionalNamespaces: g, pairingTopic: d, acknowledged: !1, self: _.controller, peer: { publicKey: f.publicKey, metadata: f.metadata }, controller: O, transportType: J.relay, authentication: l == null ? void 0 : l.authentication, walletPayResult: l == null ? void 0 : l.walletPay };
      await this.client.session.set(P, C), m.addTrace(Le.store_session);
      try {
        await this.sendApproveSession({ sessionTopic: P, proposal: u, pairingProposalResponse: { relay: { protocol: n ?? "irn" }, responderPublicKey: O }, sessionSettleRequest: _, publishOpts: { internal: { throwOnFailedPublish: !0 }, tvf: { correlationId: r, ...this.getTVFApproveParams(C) } } }), m.addTrace(Le.session_approve_publish_success);
      } catch (T) {
        throw this.client.logger.error(T), this.client.session.delete(P, X("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(P), T;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: m.eventId }), await this.client.core.pairing.updateMetadata({ topic: d, metadata: f.metadata }), await this.deleteProposal(r), await this.client.core.pairing.activate({ topic: d }), await this.setExpiry(P, se(ss)), { topic: P, acknowledged: () => Promise.resolve(this.client.session.get(P)) };
    }, this.reject = async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(s);
      } catch (o) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), o;
      }
      const { id: i, reason: r } = s;
      let n;
      try {
        n = this.client.proposal.get(i).pairingTopic;
      } catch (o) {
        throw this.client.logger.error(`reject() -> proposal.get(${i}) failed`), o;
      }
      n && await this.sendError({ id: i, topic: n, error: r, rpcOpts: ce.wc_sessionPropose.reject }), await this.deleteProposal(i);
    }, this.update = async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(s);
      } catch (u) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), u;
      }
      const { topic: i, namespaces: r } = s, { done: n, resolve: o, reject: a } = jt(D.FIVE_MINUTES, "Session update request expired without receiving any acknowledgement"), c = bt(), h = Lt().toString(), l = this.client.session.get(i).namespaces;
      return this.events.once(Z("session_update", c), ({ error: u }) => {
        u ? a(u) : o();
      }), await this.client.session.update(i, { namespaces: r }), await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: r }, throwOnFailedPublish: !0, clientRpcId: c, relayRpcId: h }).catch((u) => {
        this.client.logger.error(u), this.client.session.update(i, { namespaces: l }), a(u);
      }), { acknowledged: n };
    }, this.extend = async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(s);
      } catch (c) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
      }
      const { topic: i } = s, r = bt(), { done: n, resolve: o, reject: a } = jt(D.FIVE_MINUTES, "Session extend request expired without receiving any acknowledgement");
      return this.events.once(Z("session_extend", r), ({ error: c }) => {
        c ? a(c) : o();
      }), await this.setExpiry(i, se(ss)), this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {}, clientRpcId: r, throwOnFailedPublish: !0 }).catch((c) => {
        a(c);
      }), { acknowledged: n };
    }, this.request = async (s) => {
      this.isInitialized();
      try {
        await this.isValidRequest(s);
      } catch (m) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), m;
      }
      const { chainId: i, request: r, topic: n, expiry: o = ce.wc_sessionRequest.req.ttl } = s, a = this.client.session.get(n);
      (a == null ? void 0 : a.transportType) === J.relay && await this.confirmOnlineStateOrThrow();
      const c = bt(), h = Lt().toString(), { done: l, resolve: u, reject: d } = jt(o, "Request expired. Please try again.");
      this.events.once(Z("session_request", c), ({ error: m, result: O }) => {
        m ? d(m) : u(O);
      });
      const f = "wc_sessionRequest", p = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
      if (p) return await this.sendRequest({ clientRpcId: c, relayRpcId: h, topic: n, method: f, params: { request: { ...r, expiryTimestamp: se(o) }, chainId: i }, expiry: o, throwOnFailedPublish: !0, appLink: p }).catch((m) => d(m)), this.client.events.emit("session_request_sent", { topic: n, request: r, chainId: i, id: c }), await l();
      const g = { request: { ...r, expiryTimestamp: se(o) }, chainId: i };
      return await Promise.all([new Promise(async (m) => {
        await this.sendRequest({ clientRpcId: c, relayRpcId: h, topic: n, method: f, params: g, expiry: o, throwOnFailedPublish: !0, tvf: this.getTVFParams(c, g) }).catch((O) => d(O)), this.client.events.emit("session_request_sent", { topic: n, request: r, chainId: i, id: c }), m();
      }), new Promise(async (m) => {
        var O;
        if (!((O = a.sessionConfig) != null && O.disableDeepLink)) {
          const k = await Jl(this.client.core.storage, So);
          await Zl({ id: c, topic: n, wcDeepLink: k });
        }
        m();
      }), l()]).then((m) => m[2]);
    }, this.respond = async (s) => {
      var h, l;
      this.isInitialized();
      const i = this.client.core.eventClient.createEvent({ properties: { topic: (s == null ? void 0 : s.topic) || ((l = (h = s == null ? void 0 : s.response) == null ? void 0 : h.id) == null ? void 0 : l.toString()), trace: [Le.session_request_response_started] } });
      try {
        await this.isValidRespond(s);
      } catch (u) {
        throw i.addTrace(u == null ? void 0 : u.message), i.setError(Ut.session_request_response_validation_failure), u;
      }
      i.addTrace(Le.session_request_response_validation_success);
      const { topic: r, response: n } = s, { id: o } = n, a = this.client.session.get(r);
      a.transportType === J.relay && await this.confirmOnlineStateOrThrow();
      const c = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
      try {
        i.addTrace(Le.session_request_response_publish_started), at(n) ? await this.sendResult({ id: o, topic: r, result: n.result, throwOnFailedPublish: !0, appLink: c }) : Qe(n) && await this.sendError({ id: o, topic: r, error: n.error, appLink: c }), this.cleanupAfterResponse(s);
      } catch (u) {
        throw i.addTrace(u == null ? void 0 : u.message), i.setError(Ut.session_request_response_publish_failure), u;
      }
    }, this.ping = async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(s);
      } catch (r) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), r;
      }
      const { topic: i } = s;
      if (this.client.session.keys.includes(i)) {
        const r = bt(), n = Lt().toString(), { done: o, resolve: a, reject: c } = jt(D.FIVE_MINUTES, "Ping request expired without receiving any acknowledgement");
        this.events.once(Z("session_ping", r), ({ error: h }) => {
          h ? c(h) : a();
        }), await Promise.all([this.sendRequest({ topic: i, method: "wc_sessionPing", params: {}, throwOnFailedPublish: !0, clientRpcId: r, relayRpcId: n }), o()]);
      } else this.client.core.pairing.pairings.keys.includes(i) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: i }));
    }, this.emit = async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(s);
      const { topic: i, event: r, chainId: n } = s, o = Lt().toString(), a = bt();
      await this.sendRequest({ topic: i, method: "wc_sessionEvent", params: { event: r, chainId: n }, throwOnFailedPublish: !0, relayRpcId: o, clientRpcId: a });
    }, this.disconnect = async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(s);
      const { topic: i } = s;
      if (this.client.session.keys.includes(i)) await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: X("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: i, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(i)) await this.client.core.pairing.disconnect({ topic: i });
      else {
        const { message: r } = j("MISMATCHED_TOPIC", `Session or pairing topic not found: ${i}`);
        throw new Error(r);
      }
    }, this.find = (s) => (this.isInitialized(), this.client.session.getAll().filter((i) => Wf(i, s))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (s, i) => {
      var $;
      this.isInitialized(), this.isValidAuthenticate(s);
      const r = i && this.client.core.linkModeSupportedApps.includes(i) && (($ = this.client.metadata.redirect) == null ? void 0 : $.linkMode), n = r ? J.link_mode : J.relay;
      n === J.relay && await this.confirmOnlineStateOrThrow();
      const { chains: o, statement: a = "", uri: c, domain: h, nonce: l, type: u, exp: d, nbf: f, methods: p = [], expiry: g } = s, m = [...s.resources || []], { topic: O, uri: k } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: n });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: O, uri: k } });
      const P = await this.client.core.crypto.generateKeyPair(), _ = ii(P);
      if (await Promise.all([this.client.auth.authKeys.set(ni, { responseTopic: _, publicKey: P }), this.client.auth.pairingTopics.set(_, { topic: _, pairingTopic: O })]), await this.client.core.relayer.subscribe(_, { transportType: n }), this.client.logger.info(`sending request to new pairing topic: ${O}`), p.length > 0) {
        const { namespace: v } = gt(o[0]);
        let x = cd(v, "request", p);
        si(m) && (x = ld(x, m.pop())), m.push(x);
      }
      const R = g && g > ce.wc_sessionAuthenticate.req.ttl ? g : ce.wc_sessionAuthenticate.req.ttl, C = { authPayload: { type: u ?? "caip122", chains: o, statement: a, aud: c, domain: h, version: "1", nonce: l, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d, nbf: f, resources: m }, requester: { publicKey: P, metadata: this.client.metadata }, expiryTimestamp: se(R) }, q = { eip155: { chains: o, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...p])], events: ["chainChanged", "accountsChanged"] } }, N = { requiredNamespaces: {}, optionalNamespaces: q, relays: [{ protocol: "irn" }], pairingTopic: O, proposer: { publicKey: P, metadata: this.client.metadata }, expiryTimestamp: se(ce.wc_sessionPropose.req.ttl), id: bt() }, { done: A, resolve: T, reject: F } = jt(R, "Request expired"), S = bt(), b = Z("session_connect", N.id), E = Z("session_request", S), y = async ({ error: v, session: x }) => {
        this.events.off(E, w), v ? F(v) : x && T({ session: x });
      }, w = async (v) => {
        var H, G, Q;
        if (await this.deletePendingAuthRequest(S, { message: "fulfilled", code: 0 }), v.error) {
          const K = X("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return v.error.code === K.code ? void 0 : (this.events.off(b, y), F(v.error.message));
        }
        await this.deleteProposal(N.id), this.events.off(b, y);
        const { cacaos: x, responder: B } = v.result, U = [], V = [];
        for (const K of x) {
          await jn({ cacao: K, projectId: this.client.core.projectId }) || (this.client.logger.error(K, "Signature verification failed"), F(X("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: Y } = K, pe = si(Y.resources), be = [vr(Y.iss)], ge = ui(Y.iss);
          if (pe) {
            const Ne = Mn(pe), Ft = Ln(pe);
            U.push(...Ne), be.push(...Ft);
          }
          for (const Ne of be) V.push(`${Ne}:${ge}`);
        }
        const z = await this.client.core.crypto.generateSharedKey(P, B.publicKey);
        let L;
        U.length > 0 && (L = { topic: z, acknowledged: !0, self: { publicKey: P, metadata: this.client.metadata }, peer: B, controller: B.publicKey, expiry: se(ss), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: O, namespaces: lo([...new Set(U)], [...new Set(V)]), transportType: n }, await this.client.core.relayer.subscribe(z, { transportType: n }), await this.client.session.set(z, L), O && await this.client.core.pairing.updateMetadata({ topic: O, metadata: B.metadata }), L = this.client.session.get(z)), (H = this.client.metadata.redirect) != null && H.linkMode && ((G = B.metadata.redirect) != null && G.linkMode) && ((Q = B.metadata.redirect) != null && Q.universal) && i && (this.client.core.addLinkModeSupportedApp(B.metadata.redirect.universal), this.client.session.update(z, { transportType: J.link_mode })), T({ auths: x, session: L });
      };
      this.events.once(b, y), this.events.once(E, w);
      let I;
      try {
        if (r) {
          const v = Je("wc_sessionAuthenticate", C, S);
          this.client.core.history.set(O, v);
          const x = await this.client.core.crypto.encode("", v, { type: zs, encoding: Rt });
          I = Js(i, O, x);
        } else await Promise.all([this.sendRequest({ topic: O, method: "wc_sessionAuthenticate", params: C, expiry: s.expiry, throwOnFailedPublish: !0, clientRpcId: S }), this.sendRequest({ topic: O, method: "wc_sessionPropose", params: N, expiry: ce.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: N.id })]);
      } catch (v) {
        throw this.events.off(b, y), this.events.off(E, w), v;
      }
      return await this.setProposal(N.id, N), await this.setAuthRequest(S, { request: { ...C, verifyContext: {} }, pairingTopic: O, transportType: n }), { uri: I ?? k, response: A };
    }, this.approveSessionAuthenticate = async (s) => {
      const { id: i, auths: r } = s, n = this.client.core.eventClient.createEvent({ properties: { topic: i.toString(), trace: [Dt.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (m) {
        throw n.setError(Is.no_internet_connection), m;
      }
      const o = this.getPendingAuthRequest(i);
      if (!o) throw n.setError(Is.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${i}`);
      const a = o.transportType || J.relay;
      a === J.relay && await this.confirmOnlineStateOrThrow();
      const c = o.requester.publicKey, h = await this.client.core.crypto.generateKeyPair(), l = ii(c), u = { type: yt, receiverPublicKey: c, senderPublicKey: h }, d = [], f = [];
      for (const m of r) {
        if (!await jn({ cacao: m, projectId: this.client.core.projectId })) {
          n.setError(Is.invalid_cacao);
          const R = X("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: i, topic: l, error: R, encodeOpts: u }), new Error(R.message);
        }
        n.addTrace(Dt.cacaos_verified);
        const { p: O } = m, k = si(O.resources), P = [vr(O.iss)], _ = ui(O.iss);
        if (k) {
          const R = Mn(k), C = Ln(k);
          d.push(...R), P.push(...C);
        }
        for (const R of P) f.push(`${R}:${_}`);
      }
      const p = await this.client.core.crypto.generateSharedKey(h, c);
      n.addTrace(Dt.create_authenticated_session_topic);
      let g;
      if ((d == null ? void 0 : d.length) > 0) {
        g = { topic: p, acknowledged: !0, self: { publicKey: h, metadata: this.client.metadata }, peer: { publicKey: c, metadata: o.requester.metadata }, controller: c, expiry: se(ss), authentication: r, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: o.pairingTopic, namespaces: lo([...new Set(d)], [...new Set(f)]), transportType: a }, n.addTrace(Dt.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(p, { transportType: a });
        } catch (m) {
          throw n.setError(Is.subscribe_authenticated_session_topic_failure), m;
        }
        n.addTrace(Dt.subscribe_authenticated_session_topic_success), await this.client.session.set(p, g), n.addTrace(Dt.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: o.pairingTopic, metadata: o.requester.metadata });
      }
      n.addTrace(Dt.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: l, id: i, result: { cacaos: r, responder: { publicKey: h, metadata: this.client.metadata } }, encodeOpts: u, throwOnFailedPublish: !0, appLink: this.getAppLinkIfEnabled(o.requester.metadata, a) });
      } catch (m) {
        throw n.setError(Is.authenticated_session_approve_publish_failure), m;
      }
      return await this.client.auth.requests.delete(i, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: o.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: n.eventId }), { session: g };
    }, this.rejectSessionAuthenticate = async (s) => {
      this.isInitialized();
      const { id: i, reason: r } = s, n = this.getPendingAuthRequest(i);
      if (!n) throw new Error(`Could not find pending auth request with id ${i}`);
      n.transportType === J.relay && await this.confirmOnlineStateOrThrow();
      const o = n.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = ii(o), h = { type: yt, receiverPublicKey: o, senderPublicKey: a };
      await this.sendError({ id: i, topic: c, error: r, encodeOpts: h, rpcOpts: ce.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(n.requester.metadata, n.transportType) }), await this.client.auth.requests.delete(i, { message: "rejected", code: 0 }), await this.deleteProposal(i);
    }, this.formatAuthMessage = (s) => {
      this.isInitialized();
      const { request: i, iss: r } = s;
      return Ca(i, r);
    }, this.processRelayMessageCache = () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const s = this.relayMessageCache.shift();
          s && await this.onRelayMessage(s);
        } catch (s) {
          this.client.logger.error(s);
        }
      }, 50);
    }, this.cleanupDuplicatePairings = async (s) => {
      if (s.pairingTopic) try {
        const i = this.client.core.pairing.pairings.get(s.pairingTopic), r = this.client.core.pairing.pairings.getAll().filter((n) => {
          var o, a;
          return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((a = n.peerMetadata) == null ? void 0 : a.url) === s.peer.metadata.url && n.topic && n.topic !== i.topic;
        });
        if (r.length === 0) return;
        this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.deleteSession = async (s) => {
      var c;
      const { topic: i, expirerHasDeleted: r = !1, emitEvent: n = !0, id: o = 0 } = s, { self: a } = this.client.session.get(i);
      await this.client.core.relayer.unsubscribe(i), await this.client.session.delete(i, X("USER_DISCONNECTED")), this.addToRecentlyDeleted(i, "session"), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i), r || this.client.core.expirer.del(i), this.client.core.storage.removeItem(So).catch((h) => this.client.logger.warn(h)), i === ((c = this.sessionRequestQueue.queue[0]) == null ? void 0 : c.topic) && (this.sessionRequestQueue.state = Ze.idle), await Promise.all(this.getPendingSessionRequests().filter((h) => h.topic === i).map((h) => this.deletePendingSessionRequest(h.id, X("USER_DISCONNECTED")))), n && this.client.events.emit("session_delete", { id: o, topic: i });
    }, this.deleteProposal = async (s, i) => {
      var r;
      if (i) try {
        const n = this.client.proposal.get(s);
        (r = this.client.core.eventClient.getEvent({ topic: n.pairingTopic })) == null || r.setError(Ut.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(s, X("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(s)]), this.addToRecentlyDeleted(s, "proposal");
    }, this.deletePendingSessionRequest = async (s, i, r = !1) => {
      await Promise.all([this.client.pendingRequest.delete(s, i), r ? Promise.resolve() : this.client.core.expirer.del(s)]), this.addToRecentlyDeleted(s, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== s), r && (this.sessionRequestQueue.state = Ze.idle, this.client.events.emit("session_request_expire", { id: s }));
    }, this.deletePendingAuthRequest = async (s, i, r = !1) => {
      await Promise.all([this.client.auth.requests.delete(s, i), r ? Promise.resolve() : this.client.core.expirer.del(s)]);
    }, this.setExpiry = async (s, i) => {
      this.client.session.keys.includes(s) && (this.client.core.expirer.set(s, i), await this.client.session.update(s, { expiry: i }));
    }, this.setProposal = async (s, i) => {
      this.client.core.expirer.set(s, se(ce.wc_sessionPropose.req.ttl)), await this.client.proposal.set(s, i);
    }, this.setAuthRequest = async (s, i) => {
      const { request: r, pairingTopic: n, transportType: o = J.relay } = i;
      this.client.core.expirer.set(s, r.expiryTimestamp), await this.client.auth.requests.set(s, { authPayload: r.authPayload, requester: r.requester, expiryTimestamp: r.expiryTimestamp, id: s, pairingTopic: n, verifyContext: r.verifyContext, transportType: o });
    }, this.setPendingSessionRequest = async (s) => {
      const { id: i, topic: r, params: n, verifyContext: o } = s, a = n.request.expiryTimestamp || se(ce.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(i, a), await this.client.pendingRequest.set(i, { id: i, topic: r, params: n, verifyContext: o });
    }, this.sendRequest = async (s) => {
      const { topic: i, method: r, params: n, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: h, appLink: l, tvf: u, publishOpts: d = {} } = s, f = Je(r, n, c);
      let p;
      const g = !!l;
      try {
        const k = g ? Rt : _e;
        p = await this.client.core.crypto.encode(i, f, { encoding: k });
      } catch (k) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`), k;
      }
      let m;
      if (wm.includes(r)) {
        const k = Fe(JSON.stringify(f)), P = Fe(p);
        m = await this.client.core.verify.register({ id: P, decryptedId: k });
      }
      const O = { ...ce[r].req, ...d };
      if (O.attestation = m, o && (O.ttl = o), a && (O.id = a), this.client.core.history.set(i, f), g) {
        const k = Js(l, i, p);
        await global.Linking.openURL(k, this.client.name);
      } else O.tvf = { ...u, correlationId: f.id }, h ? (O.internal = { ...O.internal, throwOnFailedPublish: !0 }, await this.client.core.relayer.publish(i, p, O)) : this.client.core.relayer.publish(i, p, O).catch((k) => this.client.logger.error(k));
      return f.id;
    }, this.sendProposeSession = async (s) => {
      const { proposal: i, publishOpts: r } = s, n = Je("wc_sessionPropose", i, i.id);
      this.client.core.history.set(i.pairingTopic, n);
      const o = await this.client.core.crypto.encode(i.pairingTopic, n, { encoding: _e }), a = Fe(JSON.stringify(n)), c = Fe(o), h = await this.client.core.verify.register({ id: c, decryptedId: a });
      await this.client.core.relayer.publishCustom({ payload: { pairingTopic: i.pairingTopic, sessionProposal: o }, opts: { ...r, publishMethod: "wc_proposeSession", attestation: h } });
    }, this.sendApproveSession = async (s) => {
      const { sessionTopic: i, pairingProposalResponse: r, proposal: n, sessionSettleRequest: o, publishOpts: a } = s, c = Rs(n.id, r), h = await this.client.core.crypto.encode(n.pairingTopic, c, { encoding: _e }), l = Je("wc_sessionSettle", o, a == null ? void 0 : a.id), u = await this.client.core.crypto.encode(i, l, { encoding: _e });
      this.client.core.history.set(i, l), await this.client.core.relayer.publishCustom({ payload: { sessionTopic: i, pairingTopic: n.pairingTopic, sessionProposalResponse: h, sessionSettlementRequest: u }, opts: { ...a, publishMethod: "wc_approveSession" } });
    }, this.sendResult = async (s) => {
      const { id: i, topic: r, result: n, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = s, h = Rs(i, n);
      let l;
      const u = c && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const p = u ? Rt : _e;
        l = await this.client.core.crypto.encode(r, h, { ...a || {}, encoding: p });
      } catch (p) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`), p;
      }
      let d, f;
      try {
        d = await this.client.core.history.get(r, i);
        const p = d.request;
        try {
          f = this.getTVFParams(i, p.params, n);
        } catch (g) {
          this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${g == null ? void 0 : g.message}`);
        }
      } catch (p) {
        throw this.client.logger.error(`sendResult() -> history.get(${r}, ${i}) failed`), p;
      }
      if (u) {
        const p = Js(c, r, l);
        await global.Linking.openURL(p, this.client.name);
      } else {
        const p = d.request.method, g = ce[p].res;
        g.tvf = { ...f, correlationId: i }, o ? (g.internal = { ...g.internal, throwOnFailedPublish: !0 }, await this.client.core.relayer.publish(r, l, g)) : this.client.core.relayer.publish(r, l, g).catch((m) => this.client.logger.error(m));
      }
      await this.client.core.history.resolve(h);
    }, this.sendError = async (s) => {
      const { id: i, topic: r, error: n, encodeOpts: o, rpcOpts: a, appLink: c } = s, h = Fo(i, n);
      let l;
      const u = c && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const f = u ? Rt : _e;
        l = await this.client.core.crypto.encode(r, h, { ...o || {}, encoding: f });
      } catch (f) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`), f;
      }
      let d;
      try {
        d = await this.client.core.history.get(r, i);
      } catch (f) {
        throw this.client.logger.error(`sendError() -> history.get(${r}, ${i}) failed`), f;
      }
      if (u) {
        const f = Js(c, r, l);
        await global.Linking.openURL(f, this.client.name);
      } else {
        const f = d.request.method, p = a || ce[f].res;
        this.client.core.relayer.publish(r, l, p);
      }
      await this.client.core.history.resolve(h);
    }, this.cleanup = async () => {
      const s = [], i = [];
      this.client.session.getAll().forEach((r) => {
        let n = !1;
        Xe(r.expiry) && (n = !0), this.client.core.crypto.keychain.has(r.topic) || (n = !0), n && s.push(r.topic);
      }), this.client.proposal.getAll().forEach((r) => {
        Xe(r.expiryTimestamp) && i.push(r.id);
      }), await Promise.all([...s.map((r) => this.deleteSession({ topic: r })), ...i.map((r) => this.deleteProposal(r))]);
    }, this.onProviderMessageEvent = async (s) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(s) : await this.onRelayMessage(s);
    }, this.onRelayEventRequest = async (s) => {
      this.requestQueue.queue.push(s), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Ze.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Ze.active;
        const s = this.requestQueue.queue.shift();
        if (s) try {
          await this.processRequest(s);
        } catch (i) {
          this.client.logger.warn(i);
        }
      }
      this.requestQueue.state = Ze.idle;
    }, this.processRequest = async (s) => {
      const { topic: i, payload: r, attestation: n, transportType: o, encryptedId: a } = s, c = r.method;
      if (!this.shouldIgnorePairingRequest({ topic: i, requestMethod: c })) switch (c) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: i, payload: r, attestation: n, encryptedId: a });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(i, r);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(i, r);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(i, r);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(i, r);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(i, r);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: i, payload: r, attestation: n, encryptedId: a, transportType: o });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(i, r);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: i, payload: r, attestation: n, encryptedId: a, transportType: o });
        default:
          return this.client.logger.info(`Unsupported request method ${c}`);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: i, payload: r, transportType: n } = s, o = (await this.client.core.history.get(i, r.id)).request.method;
      switch (o) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, r, n);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, r);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, r);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, r);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, r);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, r);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(i, r);
        default:
          return this.client.logger.info(`Unsupported response method ${o}`);
      }
    }, this.onRelayEventUnknownPayload = (s) => {
      const { topic: i } = s, { message: r } = j("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(r);
    }, this.shouldIgnorePairingRequest = (s) => {
      const { topic: i, requestMethod: r } = s, n = this.expectedPairingMethodMap.get(i);
      return !n || n.includes(r) ? !1 : !!(n.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (s) => {
      const { topic: i, payload: r, attestation: n, encryptedId: o } = s, { params: a, id: c } = r;
      try {
        const h = this.client.core.eventClient.getEvent({ topic: i });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), h == null || h.setError(ht.proposal_listener_not_found)), this.isValidConnect({ ...r.params });
        const l = a.expiryTimestamp || se(ce.wc_sessionPropose.req.ttl), u = { id: c, pairingTopic: i, expiryTimestamp: l, attestation: n, encryptedId: o, ...a };
        await this.setProposal(c, u);
        const d = await this.getVerifyContext({ attestationId: n, hash: Fe(JSON.stringify(r)), encryptedId: o, metadata: u.proposer.metadata });
        h == null || h.addTrace(Ye.emit_session_proposal), this.client.events.emit("session_proposal", { id: c, params: u, verifyContext: d });
      } catch (h) {
        await this.sendError({ id: c, topic: i, error: h, rpcOpts: ce.wc_sessionPropose.autoReject }), this.client.logger.error(h);
      }
    }, this.onSessionProposeResponse = async (s, i, r) => {
      const { id: n } = i;
      if (at(i)) {
        const { result: o } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: o });
        const a = this.client.proposal.get(n);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const c = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const h = o.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: h });
        const l = await this.client.core.crypto.generateSharedKey(c, h);
        this.pendingSessions.set(n, { sessionTopic: l, pairingTopic: s, proposalId: n, publicKey: c });
        const u = await this.client.core.relayer.subscribe(l, { transportType: r });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: u }), await this.client.core.pairing.activate({ topic: s });
      } else if (Qe(i)) {
        await this.deleteProposal(n);
        const o = Z("session_connect", n);
        if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
        this.events.emit(o, { error: i.error });
      }
    }, this.onSessionSettleRequest = async (s, i) => {
      const { id: r, params: n } = i;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: o, controller: a, expiry: c, namespaces: h, sessionProperties: l, scopedProperties: u, sessionConfig: d, proposalRequestsResponses: f } = i.params, p = [...this.pendingSessions.values()].find((O) => O.sessionTopic === s);
        if (!p) return this.client.logger.error(`Pending session not found for topic ${s}`);
        const g = this.client.proposal.get(p.proposalId), m = { topic: s, relay: o, expiry: c, namespaces: h, acknowledged: !0, pairingTopic: p.pairingTopic, requiredNamespaces: g.requiredNamespaces, optionalNamespaces: g.optionalNamespaces, controller: a.publicKey, self: { publicKey: p.publicKey, metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata }, ...l && { sessionProperties: l }, ...u && { scopedProperties: u }, ...d && { sessionConfig: d }, transportType: J.relay, authentication: f == null ? void 0 : f.authentication, walletPayResult: f == null ? void 0 : f.walletPay };
        await this.client.session.set(m.topic, m), await this.setExpiry(m.topic, m.expiry), await this.client.core.pairing.updateMetadata({ topic: p.pairingTopic, metadata: m.peer.metadata }), this.pendingSessions.delete(p.proposalId), this.deleteProposal(p.proposalId, !1), this.cleanupDuplicatePairings(m), await this.sendResult({ id: i.id, topic: s, throwOnFailedPublish: !0, result: !0 }), this.client.events.emit("session_connect", { session: m }), this.events.emit(Z("session_connect", p.proposalId), { session: m });
      } catch (o) {
        await this.sendError({ id: r, topic: s, error: o }), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (s, i) => {
      const { id: r } = i;
      at(i) ? (await this.client.session.update(s, { acknowledged: !0 }), this.events.emit(Z("session_approve", r), {})) : Qe(i) && (await this.client.session.delete(s, X("USER_DISCONNECTED")), this.events.emit(Z("session_approve", r), { error: i.error }));
    }, this.onSessionUpdateRequest = async (s, i) => {
      const { params: r, id: n } = i;
      try {
        const o = `${s}_session_update`, a = vs.get(o);
        if (a && this.isRequestOutOfSync(a, n)) {
          this.client.logger.warn(`Discarding out of sync request - ${n}`), this.sendError({ id: n, topic: s, error: X("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate({ topic: s, ...r });
        try {
          vs.set(o, n), await this.client.session.update(s, { namespaces: r.namespaces }), await this.sendResult({ id: n, topic: s, result: !0 });
        } catch (c) {
          throw vs.delete(o), c;
        }
        this.client.events.emit("session_update", { id: n, topic: s, params: r });
      } catch (o) {
        await this.sendError({ id: n, topic: s, error: o }), this.client.logger.error(o);
      }
    }, this.isRequestOutOfSync = (s, i) => i.toString().slice(0, -3) < s.toString().slice(0, -3), this.onSessionUpdateResponse = (s, i) => {
      const { id: r } = i, n = Z("session_update", r);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      at(i) ? this.events.emit(Z("session_update", r), {}) : Qe(i) && this.events.emit(Z("session_update", r), { error: i.error });
    }, this.onSessionExtendRequest = async (s, i) => {
      const { id: r } = i;
      try {
        this.isValidExtend({ topic: s }), await this.setExpiry(s, se(ss)), await this.sendResult({ id: r, topic: s, result: !0 }), this.client.events.emit("session_extend", { id: r, topic: s });
      } catch (n) {
        await this.sendError({ id: r, topic: s, error: n }), this.client.logger.error(n);
      }
    }, this.onSessionExtendResponse = (s, i) => {
      const { id: r } = i, n = Z("session_extend", r);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      at(i) ? this.events.emit(Z("session_extend", r), {}) : Qe(i) && this.events.emit(Z("session_extend", r), { error: i.error });
    }, this.onSessionPingRequest = async (s, i) => {
      const { id: r } = i;
      try {
        this.isValidPing({ topic: s }), await this.sendResult({ id: r, topic: s, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_ping", { id: r, topic: s });
      } catch (n) {
        await this.sendError({ id: r, topic: s, error: n }), this.client.logger.error(n);
      }
    }, this.onSessionPingResponse = (s, i) => {
      const { id: r } = i, n = Z("session_ping", r);
      setTimeout(() => {
        if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners 2176`);
        at(i) ? this.events.emit(Z("session_ping", r), {}) : Qe(i) && this.events.emit(Z("session_ping", r), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (s, i) => {
      const { id: r } = i;
      try {
        await this.isValidDisconnect({ topic: s, reason: i.params }), this.cleanupPendingSentRequestsForTopic({ topic: s, error: X("USER_DISCONNECTED") }), await this.deleteSession({ topic: s, id: r });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onSessionRequest = async (s) => {
      var l, u, d;
      const { topic: i, payload: r, attestation: n, encryptedId: o, transportType: a } = s, { id: c, params: h } = r;
      try {
        await this.isValidRequest({ topic: i, ...h });
        const f = this.client.session.get(i), p = await this.getVerifyContext({ attestationId: n, hash: Fe(JSON.stringify(Je("wc_sessionRequest", h, c))), encryptedId: o, metadata: f.peer.metadata, transportType: a }), g = { id: c, topic: i, params: h, verifyContext: p };
        await this.setPendingSessionRequest(g), a === J.link_mode && ((l = f.peer.metadata.redirect) != null && l.universal) && this.client.core.addLinkModeSupportedApp((u = f.peer.metadata.redirect) == null ? void 0 : u.universal), (d = this.client.signConfig) != null && d.disableRequestQueue ? this.emitSessionRequest(g) : (this.addSessionRequestToSessionRequestQueue(g), this.processSessionRequestQueue());
      } catch (f) {
        await this.sendError({ id: c, topic: i, error: f }), this.client.logger.error(f);
      }
    }, this.onSessionRequestResponse = (s, i) => {
      const { id: r } = i, n = Z("session_request", r);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      at(i) ? this.events.emit(Z("session_request", r), { result: i.result }) : Qe(i) && this.events.emit(Z("session_request", r), { error: i.error });
    }, this.onSessionEventRequest = async (s, i) => {
      const { id: r, params: n } = i;
      try {
        const o = `${s}_session_event_${n.event.name}`, a = vs.get(o);
        if (a && this.isRequestOutOfSync(a, r)) {
          this.client.logger.info(`Discarding out of sync request - ${r}`);
          return;
        }
        this.isValidEmit({ topic: s, ...n }), this.client.events.emit("session_event", { id: r, topic: s, params: n }), vs.set(o, r);
      } catch (o) {
        await this.sendError({ id: r, topic: s, error: o }), this.client.logger.error(o);
      }
    }, this.onSessionAuthenticateResponse = (s, i) => {
      const { id: r } = i;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: s, payload: i }), at(i) ? this.events.emit(Z("session_request", r), { result: i.result }) : Qe(i) && this.events.emit(Z("session_request", r), { error: i.error });
    }, this.onSessionAuthenticateRequest = async (s) => {
      var c;
      const { topic: i, payload: r, attestation: n, encryptedId: o, transportType: a } = s;
      try {
        const { requester: h, authPayload: l, expiryTimestamp: u } = r.params, d = await this.getVerifyContext({ attestationId: n, hash: Fe(JSON.stringify(r)), encryptedId: o, metadata: h.metadata, transportType: a }), f = { requester: h, pairingTopic: i, id: r.id, authPayload: l, verifyContext: d, expiryTimestamp: u };
        await this.setAuthRequest(r.id, { request: f, pairingTopic: i, transportType: a }), a === J.link_mode && ((c = h.metadata.redirect) != null && c.universal) && this.client.core.addLinkModeSupportedApp(h.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: i, params: r.params, id: r.id, verifyContext: d });
      } catch (h) {
        this.client.logger.error(h);
        const l = r.params.requester.publicKey, u = await this.client.core.crypto.generateKeyPair(), d = this.getAppLinkIfEnabled(r.params.requester.metadata, a), f = { type: yt, receiverPublicKey: l, senderPublicKey: u };
        await this.sendError({ id: r.id, topic: i, error: h, encodeOpts: f, rpcOpts: ce.wc_sessionAuthenticate.autoReject, appLink: d });
      }
    }, this.addSessionRequestToSessionRequestQueue = (s) => {
      this.sessionRequestQueue.queue.push(s);
    }, this.cleanupAfterResponse = (s) => {
      this.deletePendingSessionRequest(s.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Ze.idle, this.processSessionRequestQueue();
      }, D.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: s, error: i }) => {
      const r = this.client.core.history.pending;
      r.length > 0 && r.filter((n) => n.topic === s && n.request.method === "wc_sessionRequest").forEach((n) => {
        this.events.emit(Z("session_request", n.request.id), { error: i });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === Ze.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const s = this.sessionRequestQueue.queue[0];
      if (!s) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.emitSessionRequest(s);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.emitSessionRequest = (s) => {
      if (this.emittedSessionRequests.has(s.id)) {
        this.client.logger.warn({ id: s.id }, `Skipping emitting \`session_request\` event for duplicate request. id: ${s.id}`);
        return;
      }
      this.sessionRequestQueue.state = Ze.active, this.emittedSessionRequests.add(s.id), this.client.events.emit("session_request", s);
    }, this.onPairingCreated = (s) => {
      if (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods), s.active) return;
      const i = this.client.proposal.getAll().find((r) => r.pairingTopic === s.topic);
      i && this.onSessionProposeRequest({ topic: s.topic, payload: Je("wc_sessionPropose", { ...i, requiredNamespaces: i.requiredNamespaces, optionalNamespaces: i.optionalNamespaces, relays: i.relays, proposer: i.proposer, sessionProperties: i.sessionProperties, scopedProperties: i.scopedProperties }, i.id), attestation: i.attestation, encryptedId: i.encryptedId });
    }, this.isValidConnect = async (s) => {
      if (!ve(s)) {
        const { message: h } = j("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(s)}`);
        throw new Error(h);
      }
      const { pairingTopic: i, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: o, scopedProperties: a, relays: c } = s;
      if (ne(i) || await this.isValidPairingTopic(i), !op(c)) {
        const { message: h } = j("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(h);
      }
      if (r && !ne(r) && st(r) !== 0) {
        const h = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
        ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(h) : this.client.logger.warn(h), this.validateNamespaces(r, "requiredNamespaces");
      }
      if (n && !ne(n) && st(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), o && !ne(o) && this.validateSessionProps(o, "sessionProperties"), a && !ne(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const h = Object.keys(r || {}).concat(Object.keys(n || {}));
        if (!Object.keys(a).every((l) => h.includes(l.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(h)}`);
      }
    }, this.validateNamespaces = (s, i) => {
      const r = np(s, "connect()", i);
      if (r) throw new Error(r.message);
    }, this.isValidApprove = async (s) => {
      if (!ve(s)) throw new Error(j("MISSING_OR_INVALID", `approve() params: ${s}`).message);
      const { id: i, namespaces: r, relayProtocol: n, sessionProperties: o, scopedProperties: a } = s;
      this.checkRecentlyDeleted(i), await this.isValidProposalId(i);
      const c = this.client.proposal.get(i), h = er(r, "approve()");
      if (h) throw new Error(h.message);
      const l = po(c.requiredNamespaces, r, "approve()");
      if (l) throw new Error(l.message);
      if (!ie(n, !0)) {
        const { message: u } = j("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(u);
      }
      if (o && !ne(o) && this.validateSessionProps(o, "sessionProperties"), a && !ne(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const u = new Set(Object.keys(r));
        if (!Object.keys(a).every((d) => u.has(d.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`);
      }
    }, this.isValidReject = async (s) => {
      if (!ve(s)) {
        const { message: n } = j("MISSING_OR_INVALID", `reject() params: ${s}`);
        throw new Error(n);
      }
      const { id: i, reason: r } = s;
      if (this.checkRecentlyDeleted(i), await this.isValidProposalId(i), !cp(r)) {
        const { message: n } = j("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
        throw new Error(n);
      }
    }, this.isValidSessionSettleRequest = (s) => {
      if (!ve(s)) {
        const { message: h } = j("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
        throw new Error(h);
      }
      const { relay: i, controller: r, namespaces: n, expiry: o } = s;
      if (!gc(i)) {
        const { message: h } = j("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const a = Xf(r, "onSessionSettleRequest()");
      if (a) throw new Error(a.message);
      const c = er(n, "onSessionSettleRequest()");
      if (c) throw new Error(c.message);
      if (Xe(o)) {
        const { message: h } = j("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (s) => {
      if (!ve(s)) {
        const { message: c } = j("MISSING_OR_INVALID", `update() params: ${s}`);
        throw new Error(c);
      }
      const { topic: i, namespaces: r } = s;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      const n = this.client.session.get(i), o = er(r, "update()");
      if (o) throw new Error(o.message);
      const a = po(n.requiredNamespaces, r, "update()");
      if (a) throw new Error(a.message);
    }, this.isValidExtend = async (s) => {
      if (!ve(s)) {
        const { message: r } = j("MISSING_OR_INVALID", `extend() params: ${s}`);
        throw new Error(r);
      }
      const { topic: i } = s;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (s) => {
      if (!ve(s)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() params: ${s}`);
        throw new Error(c);
      }
      const { topic: i, request: r, chainId: n, expiry: o } = s;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      const { namespaces: a } = this.client.session.get(i);
      if (!fo(a, n)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(c);
      }
      if (!hp(r)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
        throw new Error(c);
      }
      if (!dp(a, n, r.method)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() method: ${r.method}`);
        throw new Error(c);
      }
      this.validateRequestExpiry(o);
    }, this.isValidRespond = async (s) => {
      var o;
      if (!ve(s)) {
        const { message: a } = j("MISSING_OR_INVALID", `respond() params: ${s}`);
        throw new Error(a);
      }
      const { topic: i, response: r } = s;
      try {
        await this.isValidSessionTopic(i);
      } catch (a) {
        throw (o = s == null ? void 0 : s.response) != null && o.id && this.cleanupAfterResponse(s), a;
      }
      if (!lp(r)) {
        const { message: a } = j("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
        throw new Error(a);
      }
      const n = this.client.pendingRequest.get(r.id);
      if (n.topic !== i) {
        const { message: a } = j("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${r.id}, expected topic: ${n.topic}, received topic: ${i}`);
        throw new Error(a);
      }
    }, this.isValidPing = async (s) => {
      if (!ve(s)) {
        const { message: r } = j("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(r);
      }
      const { topic: i } = s;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (s) => {
      if (!ve(s)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() params: ${s}`);
        throw new Error(a);
      }
      const { topic: i, event: r, chainId: n } = s;
      await this.isValidSessionTopic(i);
      const { namespaces: o } = this.client.session.get(i);
      if (!fo(o, n)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(a);
      }
      if (!up(r)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
        throw new Error(a);
      }
      if (!fp(o, n, r.name)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (s) => {
      if (!ve(s)) {
        const { message: r } = j("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(r);
      }
      const { topic: i } = s;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidAuthenticate = (s) => {
      const { chains: i, uri: r, domain: n, nonce: o } = s;
      if (!Array.isArray(i) || i.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!ie(r, !1)) throw new Error("uri is required parameter");
      if (!ie(n, !1)) throw new Error("domain is required parameter");
      if (!ie(o, !1)) throw new Error("nonce is required parameter");
      if ([...new Set(i.map((c) => gt(c).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: a } = gt(i[0]);
      if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (s) => {
      const { attestationId: i, hash: r, encryptedId: n, metadata: o, transportType: a } = s, c = { verified: { verifyUrl: o.verifyUrl || Os, validation: "UNKNOWN", origin: o.url || "" } };
      try {
        if (a === J.link_mode) {
          const l = this.getAppLinkIfEnabled(o, a);
          return c.verified.validation = l && new URL(l).origin === new URL(o.url).origin ? "VALID" : "INVALID", c;
        }
        const h = await this.client.core.verify.resolve({ attestationId: i, hash: r, encryptedId: n, verifyUrl: o.verifyUrl });
        h && (c.verified.origin = h.origin, c.verified.isScam = h.isScam, c.verified.validation = h.origin === new URL(o.url).origin ? "VALID" : "INVALID");
      } catch (h) {
        this.client.logger.warn(h);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`), c;
    }, this.validateSessionProps = (s, i) => {
      Object.values(s).forEach((r, n) => {
        if (r == null) {
          const { message: o } = j("MISSING_OR_INVALID", `${i} must contain an existing value for each key. Received: ${r} for key ${Object.keys(s)[n]}`);
          throw new Error(o);
        }
      });
    }, this.getPendingAuthRequest = (s) => {
      const i = this.client.auth.requests.get(s);
      return typeof i == "object" ? i : void 0;
    }, this.addToRecentlyDeleted = (s, i) => {
      if (this.recentlyDeletedMap.set(s, i), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let r = 0;
        const n = this.recentlyDeletedLimit / 2;
        for (const o of this.recentlyDeletedMap.keys()) {
          if (r++ >= n) break;
          this.recentlyDeletedMap.delete(o);
        }
      }
    }, this.checkRecentlyDeleted = (s) => {
      const i = this.recentlyDeletedMap.get(s);
      if (i) {
        const { message: r } = j("MISSING_OR_INVALID", `Record was recently deleted - ${i}: ${s}`);
        throw new Error(r);
      }
    }, this.isLinkModeEnabled = (s, i) => {
      var r, n, o, a, c, h, l, u, d;
      return !s || i !== J.link_mode ? !1 : ((n = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : n.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((h = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : h.universal) !== "" && ((l = s == null ? void 0 : s.redirect) == null ? void 0 : l.universal) !== void 0 && ((u = s == null ? void 0 : s.redirect) == null ? void 0 : u.universal) !== "" && ((d = s == null ? void 0 : s.redirect) == null ? void 0 : d.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(s.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }, this.getAppLinkIfEnabled = (s, i) => {
      var r;
      return this.isLinkModeEnabled(s, i) ? (r = s == null ? void 0 : s.redirect) == null ? void 0 : r.universal : void 0;
    }, this.handleLinkModeMessage = ({ url: s }) => {
      if (!s || !s.includes("wc_ev") || !s.includes("topic")) return;
      const i = Rn(s, "topic") || "", r = decodeURIComponent(Rn(s, "wc_ev") || ""), n = this.client.session.keys.includes(i);
      n && this.client.session.update(i, { transportType: J.link_mode }), this.client.core.dispatchEnvelope({ topic: i, message: r, sessionExists: n });
    }, this.registerLinkModeListeners = async () => {
      var s;
      if (Hr() || qt() && ((s = this.client.metadata.redirect) != null && s.linkMode)) {
        const i = global == null ? void 0 : global.Linking;
        if (typeof i < "u") {
          i.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const r = await i.getInitialURL();
          r && setTimeout(() => {
            this.handleLinkModeMessage({ url: r });
          }, 50);
        }
      }
    }, this.getTVFApproveParams = (s) => {
      try {
        const i = fc(s.namespaces), r = Lf(s.namespaces), n = zf(s.namespaces), o = s.sessionProperties, a = s.scopedProperties;
        return { approvedChains: i, approvedMethods: r, approvedEvents: n, sessionProperties: o, scopedProperties: a };
      } catch (i) {
        return this.client.logger.warn(i, "Error getting TVF approve params"), {};
      }
    }, this.getTVFParams = (s, i, r) => {
      var o, a, c;
      if (!((o = i.request) != null && o.method)) return {};
      const n = { correlationId: s, rpcMethods: [i.request.method], chainId: i.chainId };
      try {
        const h = this.extractTxHashesFromResult(i.request, r);
        n.txHashes = h, n.contractAddresses = this.isValidContractData(i.request.params) ? [(c = (a = i.request.params) == null ? void 0 : a[0]) == null ? void 0 : c.to] : [];
      } catch (h) {
        this.client.logger.warn(h, "Error getting TVF params");
      }
      return n;
    }, this.isValidContractData = (s) => {
      var i;
      if (!s) return !1;
      try {
        const r = (s == null ? void 0 : s.data) || ((i = s == null ? void 0 : s[0]) == null ? void 0 : i.data);
        if (!r.startsWith("0x")) return !1;
        const n = r.slice(2);
        return /^[0-9a-fA-F]*$/.test(n) ? n.length % 2 === 0 : !1;
      } catch {
      }
      return !1;
    }, this.extractTxHashesFromResult = (s, i) => {
      var r;
      try {
        if (!i) return [];
        const n = s.method, o = ym[n];
        if (n === "sui_signTransaction") return [Yu(i.transactionBytes)];
        if (n === "near_signTransaction") return [Un(i)];
        if (n === "near_signTransactions") return i.map((c) => Un(c));
        if (n === "xrpl_signTransactionFor" || n === "xrpl_signTransaction") return [(r = i.tx_json) == null ? void 0 : r.hash];
        if (n === "polkadot_signTransaction") return [Cp({ transaction: s.params.transactionPayload, signature: i.signature })];
        if (n === "algo_signTxn") return De(i) ? i.map((c) => Dn(c)) : [Dn(i)];
        if (n === "cosmos_signDirect") return [Ju(i)];
        if (n === "wallet_sendCalls") return Xu(i);
        if (typeof i == "string") return [i];
        const a = i[o.key];
        if (De(a)) return n === "solana_signAllTransactions" ? a.map((c) => Zu(c)) : a;
        if (typeof a == "string") return [a];
      } catch (n) {
        this.client.logger.warn(n, "Error extracting tx hashes from result");
      }
      return [];
    };
  }
  async processPendingMessageEvents() {
    try {
      const e = this.client.session.keys, s = this.client.core.relayer.messages.getWithoutAck(e);
      for (const [i, r] of Object.entries(s)) for (const n of r) try {
        await this.onProviderMessageEvent({ topic: i, message: n, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${i}, message: ${n}`);
      }
    } catch (e) {
      this.client.logger.warn(e, "processPendingMessageEvents failed");
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(te.message, (e) => {
      this.onProviderMessageEvent(e);
    });
  }
  async onRelayMessage(e) {
    const { topic: s, message: i, attestation: r, transportType: n } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(ni) ? this.client.auth.authKeys.get(ni) : { publicKey: void 0 };
    try {
      const a = await this.client.core.crypto.decode(s, i, { receiverPublicKey: o, encoding: n === J.link_mode ? Rt : _e });
      Fr(a) ? (this.client.core.history.set(s, a), await this.onRelayEventRequest({ topic: s, payload: a, attestation: r, transportType: n, encryptedId: Fe(i) })) : Ur(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: s, payload: a, transportType: n }), this.client.core.history.delete(s, a.id)) : (this.client.logger.error(`onRelayMessage() -> unknown payload: ${JSON.stringify(a)}`), await this.onRelayEventUnknownPayload({ topic: s, payload: a, transportType: n })), await this.client.core.relayer.messages.ack(s, i);
    } catch (a) {
      this.client.logger.error(`onRelayMessage() -> failed to process an inbound message: ${i}`), this.client.logger.error(a);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(qe.expired, async (e) => {
      const { topic: s, id: i } = ga(e.target);
      if (i && this.client.pendingRequest.keys.includes(i)) return await this.deletePendingSessionRequest(i, j("EXPIRED"), !0);
      if (i && this.client.auth.requests.keys.includes(i)) return await this.deletePendingAuthRequest(i, j("EXPIRED"), !0);
      s ? this.client.session.keys.includes(s) && (await this.deleteSession({ topic: s, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: s })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Mt.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(Mt.delete, (e) => {
      this.addToRecentlyDeleted(e.topic, "pairing");
    });
  }
  isValidPairingTopic(e) {
    if (!ie(e, !1)) {
      const { message: s } = j("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(s);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: s } = j("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (Xe(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: s } = j("EXPIRED", `pairing topic: ${e}`);
      throw new Error(s);
    }
  }
  async isValidSessionTopic(e) {
    if (!ie(e, !1)) {
      const { message: s } = j("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(s);
    }
    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
      const { message: s } = j("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (Xe(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: s } = j("EXPIRED", `session topic: ${e}`);
      throw new Error(s);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: s } = j("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(s);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
    else if (ie(e, !1)) {
      const { message: s } = j("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(s);
    } else {
      const { message: s } = j("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(s);
    }
  }
  async isValidProposalId(e) {
    if (!ap(e)) {
      const { message: s } = j("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(s);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: s } = j("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (Xe(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: s } = j("EXPIRED", `proposal id: ${e}`);
      throw new Error(s);
    }
  }
  validateRequestExpiry(e) {
    if (e && !yp(e, nr)) {
      const { message: s } = j("MISSING_OR_INVALID", `request() expiry: ${e}. Expiry must be a number (in seconds) between ${nr.min} and ${nr.max}`);
      throw new Error(s);
    }
  }
}
class Sm extends Jt {
  constructor(e, s) {
    super(e, s, fm, on), this.core = e, this.logger = s;
  }
}
class Pm extends Jt {
  constructor(e, s) {
    super(e, s, pm, on), this.core = e, this.logger = s;
  }
}
class Am extends Jt {
  constructor(e, s) {
    super(e, s, mm, on, (i) => i.id), this.core = e, this.logger = s;
  }
}
class Om extends Jt {
  constructor(e, s) {
    super(e, s, Em, Ti, () => ni), this.core = e, this.logger = s;
  }
}
class $m extends Jt {
  constructor(e, s) {
    super(e, s, Im, Ti), this.core = e, this.logger = s;
  }
}
class Rm extends Jt {
  constructor(e, s) {
    super(e, s, _m, Ti, (i) => i.id), this.core = e, this.logger = s;
  }
}
class Cm {
  constructor(e, s) {
    this.core = e, this.logger = s, this.authKeys = new Om(this.core, this.logger), this.pairingTopics = new $m(this.core, this.logger), this.requests = new Rm(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
let Nm = class $c extends zp {
  constructor(e) {
    super(e), this.protocol = Pc, this.version = Ac, this.name = rr.name, this.events = new Bt.EventEmitter(), this.on = (i, r) => this.events.on(i, r), this.once = (i, r) => this.events.once(i, r), this.off = (i, r) => this.events.off(i, r), this.removeListener = (i, r) => this.events.removeListener(i, r), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.authenticate = async (i, r) => {
      try {
        return await this.engine.authenticate(i, r);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.formatAuthMessage = (i) => {
      try {
        return this.engine.formatAuthMessage(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.approveSessionAuthenticate = async (i) => {
      try {
        return await this.engine.approveSessionAuthenticate(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.rejectSessionAuthenticate = async (i) => {
      try {
        return await this.engine.rejectSessionAuthenticate(i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }, this.name = (e == null ? void 0 : e.name) || rr.name, this.metadata = zl(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
    const s = nn({ logger: (e == null ? void 0 : e.logger) || rr.logger, name: this.name });
    this.logger = s, this.core = (e == null ? void 0 : e.core) || new dm(e), this.session = new Pm(this.core, this.logger), this.proposal = new Sm(this.core, this.logger), this.pendingRequest = new Am(this.core, this.logger), this.engine = new xm(this), this.auth = new Cm(this.core, this.logger);
  }
  static async init(e) {
    const s = new $c(e);
    return await s.initialize(), s;
  }
  get context() {
    return Ce(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
const Tm = Nm;
function Bm(t) {
  return Number.isSafeInteger(t) && t >= 0;
}
function qm(t) {
  return t != null && typeof t != "function" && Bm(t.length);
}
function km(t) {
  return t === "__proto__";
}
function an(t) {
  return t == null || typeof t != "object" && typeof t != "function";
}
function Rc(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function cn(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const Fm = "[object RegExp]", Cc = "[object String]", Nc = "[object Number]", Tc = "[object Boolean]", Bc = "[object Arguments]", Um = "[object Symbol]", Dm = "[object Date]", jm = "[object Map]", Mm = "[object Set]", Lm = "[object Array]", zm = "[object ArrayBuffer]", qc = "[object Object]", Vm = "[object DataView]", Km = "[object Uint8Array]", Hm = "[object Uint8ClampedArray]", Gm = "[object Uint16Array]", Wm = "[object Uint32Array]", Zm = "[object Int8Array]", Ym = "[object Int16Array]", Qm = "[object Int32Array]", Jm = "[object Float32Array]", Xm = "[object Float64Array]";
function hn(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ew(t, e) {
  return os(t, void 0, t, /* @__PURE__ */ new Map(), e);
}
function os(t, e, s, i = /* @__PURE__ */ new Map(), r = void 0) {
  const n = r == null ? void 0 : r(t, e, s, i);
  if (n !== void 0) return n;
  if (an(t)) return t;
  if (i.has(t)) return i.get(t);
  if (Array.isArray(t)) {
    const o = new Array(t.length);
    i.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = os(t[a], a, s, i, r);
    return Object.hasOwn(t, "index") && (o.index = t.index), Object.hasOwn(t, "input") && (o.input = t.input), o;
  }
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    const o = new RegExp(t.source, t.flags);
    return o.lastIndex = t.lastIndex, o;
  }
  if (t instanceof Map) {
    const o = /* @__PURE__ */ new Map();
    i.set(t, o);
    for (const [a, c] of t) o.set(a, os(c, a, s, i, r));
    return o;
  }
  if (t instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    i.set(t, o);
    for (const a of t) o.add(os(a, void 0, s, i, r));
    return o;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
  if (hn(t)) {
    const o = new (Object.getPrototypeOf(t)).constructor(t.length);
    i.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = os(t[a], a, s, i, r);
    return o;
  }
  if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  if (t instanceof DataView) {
    const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return i.set(t, o), Ke(o, t, s, i, r), o;
  }
  if (typeof File < "u" && t instanceof File) {
    const o = new File([t], t.name, { type: t.type });
    return i.set(t, o), Ke(o, t, s, i, r), o;
  }
  if (typeof Blob < "u" && t instanceof Blob) {
    const o = new Blob([t], { type: t.type });
    return i.set(t, o), Ke(o, t, s, i, r), o;
  }
  if (t instanceof Error) {
    const o = new t.constructor();
    return i.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, Ke(o, t, s, i, r), o;
  }
  if (t instanceof Boolean) {
    const o = new Boolean(t.valueOf());
    return i.set(t, o), Ke(o, t, s, i, r), o;
  }
  if (t instanceof Number) {
    const o = new Number(t.valueOf());
    return i.set(t, o), Ke(o, t, s, i, r), o;
  }
  if (t instanceof String) {
    const o = new String(t.valueOf());
    return i.set(t, o), Ke(o, t, s, i, r), o;
  }
  if (typeof t == "object" && tw(t)) {
    const o = Object.create(Object.getPrototypeOf(t));
    return i.set(t, o), Ke(o, t, s, i, r), o;
  }
  return t;
}
function Ke(t, e, s = t, i, r) {
  const n = [...Object.keys(e), ...Rc(e)];
  for (let o = 0; o < n.length; o++) {
    const a = n[o], c = Object.getOwnPropertyDescriptor(t, a);
    (c == null || c.writable) && (t[a] = os(e[a], a, s, i, r));
  }
}
function tw(t) {
  switch (cn(t)) {
    case Bc:
    case Lm:
    case zm:
    case Vm:
    case Tc:
    case Dm:
    case Jm:
    case Xm:
    case Zm:
    case Ym:
    case Qm:
    case jm:
    case Nc:
    case qc:
    case Fm:
    case Mm:
    case Cc:
    case Um:
    case Km:
    case Hm:
    case Gm:
    case Wm:
      return !0;
    default:
      return !1;
  }
}
function sw(t, e) {
  return ew(t, (s, i, r, n) => {
    if (typeof t == "object") {
      if (cn(t) === qc && typeof t.constructor != "function") {
        const o = {};
        return n.set(t, o), Ke(o, t, r, n), o;
      }
      switch (Object.prototype.toString.call(t)) {
        case Nc:
        case Cc:
        case Tc: {
          const o = new t.constructor(t == null ? void 0 : t.valueOf());
          return Ke(o, t), o;
        }
        case Bc: {
          const o = {};
          return Ke(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
        }
        default:
          return;
      }
    }
  });
}
function Ao(t) {
  return sw(t);
}
function Oo(t) {
  return t !== null && typeof t == "object" && cn(t) === "[object Arguments]";
}
function Br(t) {
  return typeof t == "object" && t !== null;
}
function iw(t) {
  return Br(t) && qm(t);
}
function rw() {
}
function or(t) {
  return hn(t);
}
function ar(t) {
  var s;
  if (typeof t != "object" || t == null) return !1;
  if (Object.getPrototypeOf(t) === null) return !0;
  if (Object.prototype.toString.call(t) !== "[object Object]") {
    const i = t[Symbol.toStringTag];
    return i == null || !((s = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) != null && s.writable) ? !1 : t.toString() === `[object ${i}]`;
  }
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function nw(t) {
  if (an(t)) return t;
  if (Array.isArray(t) || hn(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  const e = Object.getPrototypeOf(t);
  if (e == null) return Object.assign(Object.create(e), t);
  const s = e.constructor;
  if (t instanceof Date || t instanceof Map || t instanceof Set) return new s(t);
  if (t instanceof RegExp) {
    const i = new s(t);
    return i.lastIndex = t.lastIndex, i;
  }
  if (t instanceof DataView) return new s(t.buffer.slice(0));
  if (t instanceof Error) {
    let i;
    return t instanceof AggregateError ? i = new s(t.errors, t.message, { cause: t.cause }) : i = new s(t.message, { cause: t.cause }), i.stack = t.stack, Object.assign(i, t), i;
  }
  if (typeof File < "u" && t instanceof File) return new s([t], t.name, { type: t.type, lastModified: t.lastModified });
  if (typeof t == "object") {
    const i = Object.create(e);
    return Object.assign(i, t);
  }
  return t;
}
function ow(t, ...e) {
  const s = e.slice(0, -1), i = e[e.length - 1];
  let r = t;
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    r = qr(r, o, i, /* @__PURE__ */ new Map());
  }
  return r;
}
function qr(t, e, s, i) {
  if (an(t) && (t = Object(t)), e == null || typeof e != "object") return t;
  if (i.has(e)) return nw(i.get(e));
  if (i.set(e, t), Array.isArray(e)) {
    e = e.slice();
    for (let n = 0; n < e.length; n++) e[n] = e[n] ?? void 0;
  }
  const r = [...Object.keys(e), ...Rc(e)];
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    if (km(o)) continue;
    let a = e[o], c = t[o];
    if (Oo(a) && (a = { ...a }), Oo(c) && (c = { ...c }), typeof Buffer < "u" && Buffer.isBuffer(a) && (a = Ao(a)), Array.isArray(a)) if (Array.isArray(c)) {
      const l = [], u = Reflect.ownKeys(c);
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        l[f] = c[f];
      }
      c = l;
    } else if (iw(c)) {
      const l = [];
      for (let u = 0; u < c.length; u++) l[u] = c[u];
      c = l;
    } else c = [];
    const h = s(c, a, o, t, e, i);
    h !== void 0 ? t[o] = h : Array.isArray(a) || Br(c) && Br(a) && (ar(c) || ar(a) || or(c) || or(a)) ? t[o] = qr(c, a, s, i) : c == null && ar(a) ? t[o] = qr({}, a, s, i) : c == null && or(a) ? t[o] = Ao(a) : (c === void 0 || a !== void 0) && (t[o] = a);
  }
  return t;
}
function aw(t, ...e) {
  return ow(t, ...e, rw);
}
const $o = "error", cw = "wss://relay.walletconnect.org", hw = "wc", kc = "universal_provider", Xs = `${hw}@2:${kc}:`, Fc = "https://rpc.walletconnect.org/v1/", Uc = "generic", lw = `${Fc}bundler`, ls = "call_status", uw = 86400, ln = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
function Dc(t, e, s) {
  var r;
  const i = gt(t);
  return ((r = e.rpcMap) == null ? void 0 : r[i.reference]) || `${Fc}?chainId=${i.namespace}:${i.reference}&projectId=${s}`;
}
function dw(t) {
  return t.includes(":") ? t.split(":")[1] : t;
}
function jc(t) {
  return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function fw(t, e) {
  const s = Object.keys(e.namespaces).filter((r) => r.includes(t));
  if (!s.length) return [];
  const i = [];
  return s.forEach((r) => {
    const n = e.namespaces[r].accounts;
    i.push(...n);
  }), i;
}
function Ro(t) {
  return Object.fromEntries(Object.entries(t).filter(([e, s]) => {
    var i, r;
    return ((i = s == null ? void 0 : s.chains) == null ? void 0 : i.length) && ((r = s == null ? void 0 : s.chains) == null ? void 0 : r.length) > 0;
  }));
}
function ei(t = {}, e = {}) {
  const s = Ro(Co(t)), i = Ro(Co(e));
  return aw(s, i);
}
function Co(t) {
  var s, i, r, n, o;
  const e = {};
  if (!st(t)) return e;
  for (const [a, c] of Object.entries(t)) {
    const h = Ci(a) ? [a] : c.chains, l = c.methods || [], u = c.events || [], d = c.rpcMap || {}, f = ns(a);
    e[f] = { ...e[f], ...c, chains: tt(h, (s = e[f]) == null ? void 0 : s.chains), methods: tt(l, (i = e[f]) == null ? void 0 : i.methods), events: tt(u, (r = e[f]) == null ? void 0 : r.events) }, (st(d) || st(((n = e[f]) == null ? void 0 : n.rpcMap) || {})) && (e[f].rpcMap = { ...d, ...(o = e[f]) == null ? void 0 : o.rpcMap });
  }
  return e;
}
function No(t) {
  return t.includes(":") ? t.split(":")[2] : t;
}
function To(t) {
  const e = {};
  for (const [s, i] of Object.entries(t)) {
    const r = i.methods || [], n = i.events || [], o = i.accounts || [], a = Ci(s) ? [s] : i.chains ? i.chains : jc(i.accounts);
    e[s] = { chains: a, methods: r, events: n, accounts: o };
  }
  return e;
}
function cr(t) {
  return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
}
function pw(t) {
  try {
    const e = JSON.parse(t);
    return typeof e == "object" && e !== null && !Array.isArray(e);
  } catch {
    return !1;
  }
}
const Mc = {}, us = (t) => Mc[t], hr = (t, e) => {
  Mc[t] = e;
}, Bo = "eip155", gw = ["atomic", "flow-control", "paymasterService", "sessionKeys", "auxiliaryFunds"], yw = (t) => t && t.startsWith("0x") ? BigInt(t).toString(10) : t, lr = (t) => t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, qo = (t) => Object.keys(t).filter((e) => gw.includes(e)).reduce((e, s) => (e[s] = mw(t[s]), e), {}), mw = (t) => typeof t == "string" && pw(t) ? JSON.parse(t) : t, ww = (t, e, s) => {
  const { sessionProperties: i = {}, scopedProperties: r = {} } = t, n = {};
  if (!st(r) && !st(i)) return;
  const o = qo(i);
  for (const a of s) {
    const c = yw(a);
    if (!c) continue;
    n[lr(c)] = o;
    const h = r == null ? void 0 : r[`${Bo}:${c}`];
    if (h) {
      const l = h == null ? void 0 : h[`${Bo}:${c}:${e}`];
      n[lr(c)] = { ...n[lr(c)], ...qo(l || h) };
    }
  }
  for (const [a, c] of Object.entries(n)) Object.keys(c).length === 0 && delete n[a];
  return Object.keys(n).length > 0 ? n : void 0;
};
let ur, bw = class Lc {
  constructor(e) {
    this.storage = e;
  }
  async getItem(e) {
    return await this.storage.getItem(e);
  }
  async setItem(e, s) {
    return await this.storage.setItem(e, s);
  }
  async removeItem(e) {
    return await this.storage.removeItem(e);
  }
  static getStorage(e) {
    return ur || (ur = new Lc(e)), ur;
  }
};
async function vw(t, e) {
  const s = gt(t.result.capabilities.caip345.caip2), i = t.result.capabilities.caip345.transactionHashes, r = await Promise.allSettled(i.map((u) => Ew(s.reference, u, e))), n = r.filter((u) => u.status === "fulfilled").map((u) => u.value).filter((u) => u);
  r.filter((u) => u.status === "rejected").forEach((u) => console.warn("Failed to fetch transaction receipt:", u.reason));
  const o = !n.length || n.some((u) => !u), a = n.every((u) => (u == null ? void 0 : u.status) === "0x1"), c = n.every((u) => (u == null ? void 0 : u.status) === "0x0"), h = n.some((u) => (u == null ? void 0 : u.status) === "0x0");
  let l;
  return o ? l = 100 : a ? l = 200 : c ? l = 500 : h && (l = 600), { id: t.result.id, version: t.request.version, atomic: t.request.atomicRequired, chainId: t.request.chainId, capabilities: t.result.capabilities, receipts: n, status: l };
}
async function Ew(t, e, s) {
  return await s(parseInt(t)).request(Je("eth_getTransactionReceipt", [e]));
}
async function Iw({ sendCalls: t, storage: e }) {
  const s = await e.getItem(ls);
  await e.setItem(ls, { ...s, [t.result.id]: { request: t.request, result: t.result, expiry: se(uw) } });
}
async function _w({ resultId: t, storage: e }) {
  const s = await e.getItem(ls);
  if (s) {
    delete s[t], await e.setItem(ls, s);
    for (const i in s) Xe(s[i].expiry) && delete s[i];
    await e.setItem(ls, s);
  }
}
async function xw({ resultId: t, storage: e }) {
  var i;
  const s = (i = await e.getItem(ls)) == null ? void 0 : i[t];
  if (s && !Xe(s.expiry)) return s;
  await _w({ resultId: t, storage: e });
}
class Sw {
  constructor(e) {
    this.name = "eip155", this.namespace = e.namespace, this.events = us("events"), this.client = us("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = bw.getStorage(this.client.core.storage);
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e);
      case "wallet_sendCalls":
        return await this.sendCalls(e);
    }
    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), s);
    const i = this.chainId;
    this.chainId = parseInt(e), this.events.emit(ln.DEFAULT_CHAIN_CHANGED, { currentCaipChainId: `${this.name}:${e}`, previousCaipChainId: `${this.name}:${i}` });
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, s) {
    const i = s || Dc(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kr(new Uo(i, us("disableProviderPing")));
  }
  setHttpProvider(e, s) {
    const i = this.createHttpProvider(e, s);
    i && (this.httpProviders[e] = i);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      const i = parseInt(dw(s));
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  getHttpProvider(e) {
    const s = e || this.chainId;
    return this.httpProviders[s] || (this.httpProviders = { ...this.httpProviders, [s]: this.createHttpProvider(s) }, this.httpProviders[s]);
  }
  async handleSwitchChain(e) {
    var r, n;
    let s = e.request.params ? (r = e.request.params[0]) == null ? void 0 : r.chainId : "0x0";
    s = s.startsWith("0x") ? s : `0x${s}`;
    const i = parseInt(s, 16);
    if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: s }] }, chainId: (n = this.namespace.chains) == null ? void 0 : n[0] }), this.setDefaultChain(`${i}`);
    else throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
  async getCapabilities(e) {
    var u, d, f, p, g;
    const s = (d = (u = e.request) == null ? void 0 : u.params) == null ? void 0 : d[0], i = ((p = (f = e.request) == null ? void 0 : f.params) == null ? void 0 : p[1]) || [];
    if (!s) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const r = this.client.session.get(e.topic), n = ((g = r == null ? void 0 : r.sessionProperties) == null ? void 0 : g.capabilities) || {}, o = i.length > 0 ? i.join(",") : `0x${this.chainId.toString(16)}`, a = `${s}${o}`, c = n == null ? void 0 : n[a];
    if (c) return c;
    let h;
    try {
      h = ww(r, s, i);
    } catch (m) {
      console.warn("Failed to extract capabilities from session", m);
    }
    if (h) return h;
    const l = await this.client.request(e);
    try {
      await this.client.session.update(e.topic, { sessionProperties: { ...r.sessionProperties || {}, capabilities: { ...n || {}, [a]: l } } });
    } catch (m) {
      console.warn("Failed to update session with capabilities", m);
    }
    return l;
  }
  async getCallStatus(e) {
    var o, a, c;
    const s = this.client.session.get(e.topic), i = (o = s.sessionProperties) == null ? void 0 : o.bundler_name;
    if (i) {
      const h = this.getBundlerUrl(e.chainId, i);
      try {
        return await this.getUserOperationReceipt(h, e);
      } catch (l) {
        console.warn("Failed to fetch call status from bundler", l, h);
      }
    }
    const r = (a = s.sessionProperties) == null ? void 0 : a.bundler_url;
    if (r) try {
      return await this.getUserOperationReceipt(r, e);
    } catch (h) {
      console.warn("Failed to fetch call status from custom bundler", h, r);
    }
    const n = await xw({ resultId: (c = e.request.params) == null ? void 0 : c[0], storage: this.storage });
    if (n) try {
      return await vw(n, this.getHttpProvider.bind(this));
    } catch (h) {
      console.warn("Failed to fetch call status from stored send calls", h, n);
    }
    if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e, s) {
    var n;
    const i = new URL(e), r = await fetch(i, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Je("eth_getUserOperationReceipt", [(n = s.request.params) == null ? void 0 : n[0]])) });
    if (!r.ok) throw new Error(`Failed to fetch user operation receipt - ${r.status}`);
    return await r.json();
  }
  getBundlerUrl(e, s) {
    return `${lw}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
  }
  async sendCalls(e) {
    var c, h, l;
    const s = await this.client.request(e), i = (c = e.request.params) == null ? void 0 : c[0], r = s == null ? void 0 : s.id, n = (s == null ? void 0 : s.capabilities) || {}, o = (h = n == null ? void 0 : n.caip345) == null ? void 0 : h.caip2, a = (l = n == null ? void 0 : n.caip345) == null ? void 0 : l.transactionHashes;
    return !r || !o || !(a != null && a.length) || await Iw({ sendCalls: { request: i, result: s }, storage: this.storage }), s;
  }
}
class Pw {
  constructor(e) {
    this.name = Uc, this.namespace = e.namespace, this.events = us("events"), this.client = us("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
  }
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(e, s);
    const i = this.chainId;
    this.chainId = e, this.events.emit(ln.DEFAULT_CHAIN_CHANGED, { currentCaipChainId: `${this.name}:${e}`, previousCaipChainId: `${this.name}:${i}` });
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getNamespaceName() {
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return gt(e).namespace;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var s, i;
    const e = {};
    return (i = (s = this.namespace) == null ? void 0 : s.accounts) == null || i.forEach((r) => {
      var a, c;
      const n = gt(r), o = (c = (a = this.namespace) == null ? void 0 : a.rpcMap) == null ? void 0 : c[`${n.namespace}:${n.reference}`];
      e[n.reference] = this.createHttpProvider(r, o);
    }), e;
  }
  getHttpProvider(e) {
    const s = gt(e).reference, i = this.httpProviders[s];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, s) {
    const i = this.createHttpProvider(e, s);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, s) {
    const i = s || Dc(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kr(new Uo(i, us("disableProviderPing")));
  }
}
let Aw = class zc {
  constructor(e) {
    this.events = new Dr(), this.rpcProviders = {}, this.disableProviderPing = !1, this.providerOpts = e, this.logger = nn({ logger: e.logger ?? $o, name: this.providerOpts.name ?? kc }), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1;
  }
  static async init(e) {
    const s = new zc(e);
    return await s.initialize(), s;
  }
  async request(e, s, i) {
    const [r, n] = this.validateChain(s);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(r).request({ request: { ...e }, chainId: `${r}:${n}`, topic: this.session.topic, expiry: i });
  }
  sendAsync(e, s, i, r) {
    const n = (/* @__PURE__ */ new Date()).getTime();
    this.request(e, i, r).then((o) => s(null, Rs(n, o))).catch((o) => s(o, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: X("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.connectParams = e, this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
  }
  async authenticate(e, s) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e), await this.cleanupPendingPairings();
    const { uri: i, response: r } = await this.client.authenticate(e, s);
    i && (this.uri = i, this.events.emit("display_uri", i));
    const n = await r();
    if (this.session = n.session, this.session) {
      const o = To(this.session.namespaces);
      this.namespaces = ei(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return n;
  }
  on(e, s) {
    this.events.on(e, s);
  }
  once(e, s) {
    this.events.once(e, s);
  }
  removeListener(e, s) {
    this.events.removeListener(e, s);
  }
  off(e, s) {
    this.events.off(e, s);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    var o, a;
    const { uri: s, approval: i } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties, authentication: (o = this.connectParams) == null ? void 0 : o.authentication, walletPay: (a = this.connectParams) == null ? void 0 : a.walletPay });
    s && (this.uri = s, this.events.emit("display_uri", s));
    const r = await i();
    this.session = r;
    const n = To(r.namespaces);
    return this.namespaces = ei(this.namespaces, n), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e, s) {
    try {
      if (!this.session) return;
      const [i, r] = this.validateChain(e), n = this.getProvider(i);
      n ? n.setDefaultChain(r, s) : this.session && this.logger.warn(`Provider for namespace '${i}' not found in setDefaultChain`);
    } catch (i) {
      if (!/Please call connect/.test(i.message)) throw i;
    }
  }
  async cleanupPendingPairings(e = {}) {
    try {
      this.logger.info("Cleaning up inactive pairings...");
      const s = this.client.pairing.getAll();
      if (!De(s)) return;
      for (const i of s) e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
      this.logger.info(`Inactive pairings cleared: ${s.length}`);
    } catch (s) {
      this.logger.warn(s, "Failed to cleanup pending pairings");
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    var e, s;
    if (this.client = this.providerOpts.client || await Tm.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || $o, relayUrl: this.providerOpts.relayUrl || cw, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (i) {
      throw this.logger.error(i, "Failed to get session"), new Error(`The provided session: ${(s = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : s.topic} doesn't exist in the Sign client`);
    }
    else {
      const i = this.client.session.getAll();
      this.session = i[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e = [...new Set(Object.keys(this.session.namespaces).map((s) => ns(s)))];
    hr("client", this.client), hr("events", this.events), hr("disableProviderPing", this.disableProviderPing), e.forEach((s) => {
      if (!this.session) return;
      const i = fw(s, this.session);
      if ((i == null ? void 0 : i.length) === 0) return;
      const r = jc(i), n = { ...ei(this.namespaces, this.optionalNamespaces)[s], accounts: i, chains: r };
      switch (s) {
        case "eip155":
          this.rpcProviders[s] = new Sw({ namespace: n });
          break;
        default:
          this.rpcProviders[s] = new Pw({ namespace: n });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      var i;
      const { topic: s } = e;
      s === ((i = this.session) == null ? void 0 : i.topic) && this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      var n;
      const { params: s, topic: i } = e;
      if (i !== ((n = this.session) == null ? void 0 : n.topic)) return;
      const { event: r } = s;
      if (r.name === "accountsChanged") {
        const o = r.data;
        o && De(o) && this.events.emit("accountsChanged", o.map(No));
      } else if (r.name === "chainChanged") {
        const o = s.chainId, a = s.event.data, c = ns(o), h = cr(o) !== cr(a) ? `${c}:${cr(a)}` : o;
        this.onChainChanged({ currentCaipChainId: h });
      } else this.events.emit(r.name, r.data);
      this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: s }) => {
      var n, o;
      if (e !== ((n = this.session) == null ? void 0 : n.topic)) return;
      const { namespaces: i } = s, r = (o = this.client) == null ? void 0 : o.session.get(e);
      this.session = { ...r, namespaces: i }, this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: s });
    }), this.client.on("session_delete", async (e) => {
      var s;
      e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", { ...X("USER_DISCONNECTED"), data: e.topic }));
    }), this.on(ln.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged({ ...e, internal: !0 });
    });
  }
  getProvider(e) {
    return this.rpcProviders[e] || this.rpcProviders[Uc];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var s;
      this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: s = {}, optionalNamespaces: i = {}, sessionProperties: r, scopedProperties: n } = e;
    this.optionalNamespaces = ei(s, i), this.sessionProperties = r, this.scopedProperties = n;
  }
  validateChain(e) {
    const [s, i] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [s, i];
    if (s && !Object.keys(this.namespaces || {}).map((o) => ns(o)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
    if (s && i) return [s, i];
    const r = ns(Object.keys(this.namespaces)[0]), n = this.rpcProviders[r].getDefaultChain();
    return [r, n];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  async onChainChanged({ currentCaipChainId: e, previousCaipChainId: s, internal: i = !1 }) {
    if (!this.namespaces) return;
    const [r, n] = this.validateChain(e);
    if (n) {
      if (this.updateNamespaceChain(r, n), i) this.events.emit("chainChanged", n), this.emitAccountsChangedOnChainChange({ namespace: r, currentCaipChainId: e, previousCaipChainId: s });
      else {
        const o = this.getProvider(r);
        o ? o.setDefaultChain(n) : this.session && this.logger.warn(`Provider for namespace '${r}' not found during chain change`);
      }
      await this.persist("namespaces", this.namespaces);
    }
  }
  emitAccountsChangedOnChainChange({ namespace: e, currentCaipChainId: s, previousCaipChainId: i }) {
    var r, n;
    try {
      if (i === s) return;
      const o = (n = (r = this.session) == null ? void 0 : r.namespaces[e]) == null ? void 0 : n.accounts;
      if (!o) return;
      const a = o.filter((c) => c.includes(`${s}:`)).map(No);
      if (!De(a)) return;
      this.events.emit("accountsChanged", a);
    } catch (o) {
      this.logger.warn(o, "Failed to emit accountsChanged on chain change");
    }
  }
  updateNamespaceChain(e, s) {
    if (!this.namespaces) return;
    const i = this.namespaces[e] ? e : `${e}:${s}`, r = { chains: [], methods: [], events: [], defaultChain: s };
    this.namespaces[i] ? this.namespaces[i] && (this.namespaces[i].defaultChain = s) : this.namespaces[i] = r;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.connectParams = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({ deletePairings: !0 }), await this.cleanupStorage();
  }
  async persist(e, s) {
    var r;
    const i = ((r = this.session) == null ? void 0 : r.topic) || "";
    await this.client.core.storage.setItem(`${Xs}/${e}${i}`, s);
  }
  async getFromStore(e) {
    var i;
    const s = ((i = this.session) == null ? void 0 : i.topic) || "";
    return await this.client.core.storage.getItem(`${Xs}/${e}${s}`);
  }
  async deleteFromStore(e) {
    var i;
    const s = ((i = this.session) == null ? void 0 : i.topic) || "";
    await this.client.core.storage.removeItem(`${Xs}/${e}${s}`);
  }
  async cleanupStorage() {
    var e;
    try {
      if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
      const s = await this.client.core.storage.getKeys();
      for (const i of s) i.startsWith(Xs) && await this.client.core.storage.removeItem(i);
    } catch (s) {
      this.logger.warn(s, "Failed to cleanup storage");
    }
  }
};
const Ow = Aw, $w = "wc", Rw = "ethereum_provider", Cw = `${$w}@2:${Rw}:`, Nw = "https://rpc.walletconnect.org/v1/", mi = ["eth_sendTransaction", "personal_sign"], Vc = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"], wi = ["chainChanged", "accountsChanged"], Kc = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"], Tw = async () => {
  const { createAppKit: t } = await import("./core-DIJ1O3gp.mjs").then((e) => e.V);
  return t;
};
function bi(t) {
  return Number(t[0].split(":")[1]);
}
function ti(t) {
  return `0x${t.toString(16)}`;
}
function Bw(t) {
  const { chains: e, optionalChains: s, methods: i, optionalMethods: r, events: n, optionalEvents: o, rpcMap: a } = t;
  if (!De(e)) throw new Error("Invalid chains");
  const c = { chains: e, methods: i || mi, events: n || wi, rpcMap: { ...e.length ? { [bi(e)]: a[bi(e)] } : {} } }, h = n == null ? void 0 : n.filter((f) => !wi.includes(f)), l = i == null ? void 0 : i.filter((f) => !mi.includes(f));
  if (!s && !o && !r && !(h != null && h.length) && !(l != null && l.length)) return { required: e.length ? c : void 0 };
  const u = (h == null ? void 0 : h.length) && (l == null ? void 0 : l.length) || !s, d = { chains: [...new Set(u ? c.chains.concat(s || []) : s)], methods: [...new Set(c.methods.concat(r != null && r.length ? r : Vc))], events: [...new Set(c.events.concat(o != null && o.length ? o : Kc))], rpcMap: a };
  return { required: e.length ? c : void 0, optional: s.length ? d : void 0 };
}
let Hc = class Gc {
  constructor() {
    this.events = new Bt.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = Cw, this.on = (e, s) => (this.events.on(e, s), this), this.once = (e, s) => (this.events.once(e, s), this), this.removeListener = (e, s) => (this.events.removeListener(e, s), this), this.off = (e, s) => (this.events.off(e, s), this), this.parseAccount = (e) => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {};
  }
  static async init(e) {
    const s = new Gc();
    return await s.initialize(e), s;
  }
  async request(e, s) {
    return await this.signer.request(e, this.formatChainId(this.chainId), s);
  }
  sendAsync(e, s, i) {
    this.signer.sendAsync(e, s, this.formatChainId(this.chainId), i);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(e) {
    var r;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: s, optional: i } = Bw(this.rpc);
    try {
      const n = await new Promise(async (a, c) => {
        var l, u;
        this.rpc.showQrModal && ((l = this.modal) == null || l.open(), (u = this.modal) == null || u.subscribeState((d) => {
          !d.open && !this.signer.session && (this.signer.abortPairingAttempt(), c(new Error("Connection request reset. Please try again.")));
        }));
        const h = e != null && e.scopedProperties ? { [this.namespace]: e.scopedProperties } : void 0;
        await this.signer.connect({ namespaces: { ...s && { [this.namespace]: s } }, ...i && { optionalNamespaces: { [this.namespace]: i } }, pairingTopic: e == null ? void 0 : e.pairingTopic, scopedProperties: h }).then((d) => {
          a(d);
        }).catch((d) => {
          var f;
          (f = this.modal) == null || f.showErrorMessage("Unable to connect"), c(new Error(d.message));
        });
      });
      if (!n) return;
      const o = On(n.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: ti(this.chainId) });
    } catch (n) {
      throw this.signer.logger.error(n), n;
    } finally {
      (r = this.modal) == null || r.close();
    }
  }
  async authenticate(e, s) {
    var i;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: e == null ? void 0 : e.chains });
    try {
      const r = await new Promise(async (o, a) => {
        var c, h;
        this.rpc.showQrModal && ((c = this.modal) == null || c.open(), (h = this.modal) == null || h.subscribeState((l) => {
          !l.open && !this.signer.session && (this.signer.abortPairingAttempt(), a(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate({ ...e, chains: this.rpc.chains }, s).then((l) => {
          o(l);
        }).catch((l) => {
          var u;
          (u = this.modal) == null || u.showErrorMessage("Unable to connect"), a(new Error(l.message));
        });
      }), n = r.session;
      if (n) {
        const o = On(n.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: ti(this.chainId) });
      }
      return r;
    } catch (r) {
      throw this.signer.logger.error(r), r;
    } finally {
      (i = this.modal) == null || i.close();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: s } = e, { event: i } = s;
      i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", e);
    }), this.signer.on("accountsChanged", (e) => {
      this.accounts = this.parseAccounts(e), this.events.emit("accountsChanged", this.accounts);
    }), this.signer.on("chainChanged", (e) => {
      const s = parseInt(e);
      this.chainId = s, this.events.emit("chainChanged", ti(this.chainId)), this.persist();
    }), this.signer.on("session_update", (e) => {
      this.events.emit("session_update", e);
    }), this.signer.on("session_delete", (e) => {
      this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", { ...X("USER_DISCONNECTED"), data: e.topic, name: "USER_DISCONNECTED" });
    }), this.signer.on("display_uri", (e) => {
      this.events.emit("display_uri", e);
    });
  }
  switchEthereumChain(e) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: e.toString(16) }] });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const s = e.filter((i) => this.isCompatibleChainId(i)).map((i) => this.parseChainId(i));
    s.length && (this.chainId = s[0], this.events.emit("chainChanged", ti(this.chainId)), this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const s = this.parseChainId(e);
      this.chainId = s, this.switchEthereumChain(s);
    }
  }
  parseAccountId(e) {
    const [s, i, r] = e.split(":");
    return { chainId: `${s}:${i}`, address: r };
  }
  setAccounts(e) {
    this.accounts = e.filter((s) => this.parseChainId(this.parseAccountId(s).chainId) === this.chainId).map((s) => this.parseAccountId(s).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    const s = (e == null ? void 0 : e.chains) ?? [], i = (e == null ? void 0 : e.optionalChains) ?? [], r = s.concat(i);
    if (!r.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const n = s.length ? (e == null ? void 0 : e.methods) || mi : [], o = s.length ? (e == null ? void 0 : e.events) || wi : [], a = (e == null ? void 0 : e.optionalMethods) || [], c = (e == null ? void 0 : e.optionalEvents) || [], h = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(r, e.projectId), l = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return { chains: s == null ? void 0 : s.map((u) => this.formatChainId(u)), optionalChains: i.map((u) => this.formatChainId(u)), methods: n, events: o, optionalMethods: a, optionalEvents: c, rpcMap: h, showQrModal: !!(e != null && e.showQrModal), qrModalOptions: l, projectId: e.projectId, metadata: e.metadata };
  }
  buildRpcMap(e, s) {
    const i = {};
    return e.forEach((r) => {
      i[r] = this.getRpcUrl(r, s);
    }), i;
  }
  async initialize(e) {
    var s;
    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? bi(this.rpc.chains) : bi(this.rpc.optionalChains), this.signer = await Ow.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: e.disableProviderPing, relayUrl: e.relayUrl, storage: e.storage, storageOptions: e.storageOptions, customStoragePrefix: e.customStoragePrefix, telemetryEnabled: e.telemetryEnabled, logger: e.logger }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let i;
      try {
        const r = await Tw(), { convertWCMToAppKitOptions: n } = await Promise.resolve().then(function() {
          return Dw;
        }), o = n({ ...this.rpc.qrModalOptions, chains: [.../* @__PURE__ */ new Set([...this.rpc.chains, ...this.rpc.optionalChains])], metadata: this.rpc.metadata, projectId: this.rpc.projectId });
        if (!o.networks.length) throw new Error("No networks found for WalletConnect");
        i = r({ ...o, universalProvider: this.signer, manualWCControl: !0, enableMobileFullScreen: ((s = this.rpc.qrModalOptions) == null ? void 0 : s.enableMobileFullScreen) === !0 });
      } catch (r) {
        throw console.warn(r), new Error("To use QR modal, please install @reown/appkit package");
      }
      if (i) try {
        this.modal = i;
      } catch (r) {
        throw this.signer.logger.error(r), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: s, optionalChains: i, rpcMap: r } = e;
    s && De(s) && (this.rpc.chains = s.map((n) => this.formatChainId(n)), s.forEach((n) => {
      this.rpc.rpcMap[n] = (r == null ? void 0 : r[n]) || this.getRpcUrl(n);
    })), i && De(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i == null ? void 0 : i.map((n) => this.formatChainId(n)), i.forEach((n) => {
      this.rpc.rpcMap[n] = (r == null ? void 0 : r[n]) || this.getRpcUrl(n);
    }));
  }
  getRpcUrl(e, s) {
    var i;
    return ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) || `${Nw}?chainId=eip155:${e}&projectId=${s || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
      this.setChainIds(e ? [this.formatChainId(e)] : s == null ? void 0 : s.accounts), this.setAccounts(s == null ? void 0 : s.accounts);
    } catch (e) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(e), await this.disconnect().catch((s) => this.signer.logger.warn(s));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map((s) => this.parseAccount(s));
  }
};
const qw = Hc;
function kw(t) {
  if (t) return { "--w3m-font-family": t["--wcm-font-family"], "--w3m-accent": t["--wcm-accent-color"], "--w3m-color-mix": t["--wcm-background-color"], "--w3m-z-index": t["--wcm-z-index"] ? Number(t["--wcm-z-index"]) : void 0, "--w3m-qr-color": t["--wcm-accent-color"], "--w3m-font-size-master": t["--wcm-text-medium-regular-size"], "--w3m-border-radius-master": t["--wcm-container-border-radius"], "--w3m-color-mix-strength": 0 };
}
const Fw = (t) => {
  const [e, s] = t.split(":");
  return Wc({ id: s, caipNetworkId: t, chainNamespace: e, name: "", nativeCurrency: { name: "", symbol: "", decimals: 8 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } } });
};
function Uw(t) {
  var r, n, o, a, c, h, l;
  const e = (r = t.chains) == null ? void 0 : r.map(Fw).filter(Boolean);
  if (e.length === 0) throw new Error("At least one chain must be specified");
  const s = e.find((u) => {
    var d;
    return u.id === ((d = t.defaultChain) == null ? void 0 : d.id);
  }), i = { projectId: t.projectId, networks: e, themeMode: t.themeMode, themeVariables: kw(t.themeVariables), chainImages: t.chainImages, connectorImages: t.walletImages, defaultNetwork: s, metadata: { ...t.metadata, name: ((n = t.metadata) == null ? void 0 : n.name) || "WalletConnect", description: ((o = t.metadata) == null ? void 0 : o.description) || "Connect to WalletConnect-compatible wallets", url: ((a = t.metadata) == null ? void 0 : a.url) || "https://walletconnect.org", icons: ((c = t.metadata) == null ? void 0 : c.icons) || ["https://walletconnect.org/walletconnect-logo.png"] }, showWallets: !0, featuredWalletIds: t.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(t.explorerRecommendedWalletIds) ? t.explorerRecommendedWalletIds : [], excludeWalletIds: t.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(t.explorerExcludedWalletIds) ? t.explorerExcludedWalletIds : [], enableEIP6963: !1, enableInjected: !1, enableCoinbase: !0, enableWalletConnect: !0, features: { email: !1, socials: !1 } };
  if ((h = t.mobileWallets) != null && h.length || (l = t.desktopWallets) != null && l.length) {
    const u = [...(t.mobileWallets || []).map((p) => ({ id: p.id, name: p.name, links: p.links })), ...(t.desktopWallets || []).map((p) => ({ id: p.id, name: p.name, links: { native: p.links.native, universal: p.links.universal } }))], d = [...i.featuredWalletIds || [], ...i.excludeWalletIds || []], f = u.filter((p) => !d.includes(p.id));
    f.length && (i.customWallets = f);
  }
  return i;
}
function Wc(t) {
  return { formatters: void 0, fees: void 0, serializers: void 0, ...t };
}
var Dw = Object.freeze({ __proto__: null, convertWCMToAppKitOptions: Uw, defineChain: Wc });
const db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EthereumProvider: qw,
  OPTIONAL_EVENTS: Kc,
  OPTIONAL_METHODS: Vc,
  REQUIRED_EVENTS: wi,
  REQUIRED_METHODS: mi,
  default: Hc
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ol as f,
  db as i,
  Tl as r
};
//# sourceMappingURL=index-ClVXi7Jt.mjs.map
