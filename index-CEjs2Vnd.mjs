import { bF as b, bG as C, bH as f, bI as w, bJ as I, bK as L, bL as k, bM as O, bN as x, bO as N, bP as m, bQ as B, bR as U, bS as H, bt as q, bT as z, bU as G, bV as V, bW as _, bX as $, bY as j, bZ as W, b_ as J, b$ as K, c0 as Z, c1 as Q, c2 as X, c3 as Y, c4 as rr, c5 as ar, c6 as er, c7 as sr, c8 as or, c9 as tr, ca as nr, cb as ir, cc as cr, cd as dr, ce as ur, cf as lr, cg as Er, ch as pr, ci as br, cj as hr, ck as mr, cl as fr, cm as gr, cn as yr, co as Tr, cp as Sr, cq as vr, cr as Ar, cs as Rr, ct as Fr, cu as Cr, cv as wr, cw as Ir, cx as xr, cy as Nr, cz as Br, cA as Dr, cB as Mr, cC as Pr, cD as Lr, cE as kr, cF as Or, cG as Ur, cH as Hr, cI as qr, cJ as zr, cK as Gr, cL as Vr, cM as _r, cN as $r, cO as jr, cP as Wr, cQ as Jr, cR as Kr, cS as Zr, cT as Qr, cU as Xr, cV as Yr, cW as ra, cX as aa, cY as ea, cZ as sa, c_ as oa, c$ as ta, d0 as na, d1 as ia, d2 as ca, d3 as da, d4 as ua, d5 as la, d6 as Ea, d7 as pa, d8 as ba, d9 as ha, da as ma, db as fa, dc as ga, dd as ya, de as Ta, df as Sa, ad as va, dg as Aa, a7 as Ra, dh as Fa, di as Ca, dj as wa, dk as Ia, dl as xa, a1 as Na, dm as Ba, dn as Da, dp as Ma, dq as Pa, dr as La, ds as ka, dt as Oa, du as Ua, dv as Ha, dw as qa, dx as za, dy as Ga, dz as Va, dA as _a, dB as $a, dC as ja, dD as Wa, a6 as Ja, dE as Ka, dF as Za, dG as Qa, dH as Xa, dI as Ya, dJ as re, dK as ae, dL as ee, dM as se, dN as oe, dO as te, dP as ne, dQ as ie, dR as ce, dS as de, dT as ue, dU as le, dV as Ee, dW as pe, dX as be, dY as he, $ as me, dZ as fe, d_ as ge, d$ as ye, e0 as Te, e1 as Se, e2 as ve, e3 as Ae, e4 as Re, e5 as Fe, am as Ce, e6 as we, bo as Ie, e7 as T, e8 as S, e9 as xe, ea as Ne, bs as Be, eb as De, ec as Me, ed as Pe, ee as Le, ef as ke, eg as Oe, eh as Ue, bn as He, a4 as qe, ei as ze, a0 as Ge, ej as Ve, ek as _e, el as v, em as E, en as A, eo as $e, ep as je, eq as We, er as Je, an as Ke, es as Ze, ao as Qe, et as Xe, eu as Ye, ev as rs, ab as as, ew as es, ex as ss, a8 as os, ey as ts, ez as ns, eA as is, eB as cs, eC as ds, a3 as us, eD as ls, eE as Es, eF as ps, eG as bs, eH as hs, eI as ms, eJ as fs, eK as gs, eL as ys, eM as Ts, eN as Ss, eO as vs, eP as As, eQ as Rs, eR as R, eS as Fs, eT as Cs, eU as ws, eV as Is, eW as xs, eX as Ns, eY as Bs, eZ as Ds, a9 as Ms, e_ as Ps, e$ as Ls, f0 as ks, f1 as F, bu as Os, f2 as Us, f3 as Hs, f4 as qs, f5 as zs, f6 as Gs, f7 as Vs, f8 as _s, aa as $s, ac as js, f9 as Ws } from "./index-DKNltDvP.mjs";
class Js extends b {
  constructor({ callbackSelector: o, cause: a, data: n, extraData: c, sender: u, urls: e }) {
    var t;
    super(a.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: a,
      metaMessages: [
        ...a.metaMessages || [],
        (t = a.metaMessages) != null && t.length ? "" : [],
        "Offchain Gateway Call:",
        e && [
          "  Gateway URL(s):",
          ...e.map((d) => `    ${C(d)}`)
        ],
        `  Sender: ${u}`,
        `  Data: ${n}`,
        `  Callback selector: ${o}`,
        `  Extra data: ${c}`
      ].flat(),
      name: "OffchainLookupError"
    });
  }
}
class Ks extends b {
  constructor({ result: o, url: a }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${C(a)}`,
        `Response: ${f(o)}`
      ],
      name: "OffchainLookupResponseMalformedError"
    });
  }
}
class Zs extends b {
  constructor({ sender: o, to: a }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${a}`,
        `OffchainLookup sender address: ${o}`
      ],
      name: "OffchainLookupSenderMismatchError"
    });
  }
}
const D = "0x556f1830", g = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function M(i, { blockNumber: o, blockTag: a, data: n, to: c }) {
  const { args: u } = w({
    data: n,
    abi: [g]
  }), [e, t, d, l, s] = u, { ccipRead: r } = i, y = r && typeof (r == null ? void 0 : r.request) == "function" ? r.request : p;
  try {
    if (!I(c, e))
      throw new Zs({ sender: e, to: c });
    const h = t.includes(L) ? await k({
      data: d,
      ccipRequest: y
    }) : await y({ data: d, sender: e, urls: t }), { data: P } = await O(i, {
      blockNumber: o,
      blockTag: a,
      data: x([
        l,
        N([{ type: "bytes" }, { type: "bytes" }], [h, s])
      ]),
      to: c
    });
    return P;
  } catch (h) {
    throw new Js({
      callbackSelector: l,
      cause: h,
      data: n,
      extraData: s,
      sender: e,
      urls: t
    });
  }
}
async function p({ data: i, sender: o, urls: a }) {
  var c;
  let n = new Error("An unknown error occurred.");
  for (let u = 0; u < a.length; u++) {
    const e = a[u], t = e.includes("{data}") ? "GET" : "POST", d = t === "POST" ? { data: i, sender: o } : void 0, l = t === "POST" ? { "Content-Type": "application/json" } : {};
    try {
      const s = await fetch(e.replace("{sender}", o.toLowerCase()).replace("{data}", i), {
        body: JSON.stringify(d),
        headers: l,
        method: t
      });
      let r;
      if ((c = s.headers.get("Content-Type")) != null && c.startsWith("application/json") ? r = (await s.json()).data : r = await s.text(), !s.ok) {
        n = new m({
          body: d,
          details: r != null && r.error ? f(r.error) : s.statusText,
          headers: s.headers,
          status: s.status,
          url: e
        });
        continue;
      }
      if (!B(r)) {
        n = new Ks({
          result: r,
          url: e
        });
        continue;
      }
      return r;
    } catch (s) {
      n = new m({
        body: d,
        details: s.message,
        url: e
      });
    }
  }
  throw n;
}
const Xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ccipRequest: p,
  offchainLookup: M,
  offchainLookupAbiItem: g,
  offchainLookupSignature: D
}, Symbol.toStringTag, { value: "Module" })), Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbiConstructorNotFoundError: z,
  AbiConstructorParamsNotFoundError: G,
  AbiDecodingDataSizeTooSmallError: V,
  AbiDecodingZeroDataError: _,
  AbiEncodingArrayLengthMismatchError: $,
  AbiEncodingBytesSizeMismatchError: j,
  AbiEncodingLengthMismatchError: W,
  AbiErrorInputsNotFoundError: J,
  AbiErrorNotFoundError: K,
  AbiErrorSignatureNotFoundError: Z,
  AbiEventNotFoundError: Q,
  AbiEventSignatureEmptyTopicsError: X,
  AbiEventSignatureNotFoundError: Y,
  AbiFunctionNotFoundError: rr,
  AbiFunctionOutputsNotFoundError: ar,
  AbiFunctionSignatureNotFoundError: er,
  AccountStateConflictError: sr,
  AtomicReadyWalletRejectedUpgradeError: or,
  AtomicityNotSupportedError: tr,
  BaseError: b,
  BaseFeeScalarError: nr,
  BlockNotFoundError: ir,
  BundleFailedError: cr,
  BundleTooLargeError: dr,
  BytesSizeMismatchError: ur,
  CallExecutionError: lr,
  ChainDisconnectedError: Er,
  ChainDoesNotSupportContract: pr,
  ChainMismatchError: br,
  ChainNotFoundError: hr,
  CircularReferenceError: mr,
  ClientChainNotConfiguredError: fr,
  ContractFunctionExecutionError: gr,
  ContractFunctionRevertedError: yr,
  ContractFunctionZeroDataError: Tr,
  CounterfactualDeploymentFailedError: Sr,
  DecodeLogDataMismatch: vr,
  DecodeLogTopicsMismatch: Ar,
  DuplicateIdError: Rr,
  Eip1559FeesNotSupportedError: Fr,
  EnsAvatarInvalidNftUriError: Cr,
  EnsAvatarUnsupportedNamespaceError: wr,
  EnsAvatarUriResolutionError: Ir,
  EstimateGasExecutionError: xr,
  ExecutionRevertedError: Nr,
  FeeCapTooHighError: Br,
  FeeCapTooLowError: Dr,
  FilterTypeNotSupportedError: Mr,
  HttpRequestError: m,
  InsufficientFundsError: Pr,
  IntegerOutOfRangeError: Lr,
  InternalRpcError: kr,
  IntrinsicGasTooHighError: Or,
  IntrinsicGasTooLowError: Ur,
  InvalidAbiDecodingTypeError: Hr,
  InvalidAbiEncodingTypeError: qr,
  InvalidAbiItemError: zr,
  InvalidAbiParametersError: Gr,
  InvalidAbiTypeParameterError: Vr,
  InvalidAddressError: _r,
  InvalidArrayError: $r,
  InvalidBytesBooleanError: jr,
  InvalidDecimalNumberError: Wr,
  InvalidDefinitionTypeError: Jr,
  InvalidDomainError: Kr,
  InvalidFunctionModifierError: Zr,
  InvalidHexBooleanError: Qr,
  InvalidInputRpcError: Xr,
  InvalidModifierError: Yr,
  InvalidParameterError: ra,
  InvalidParamsRpcError: aa,
  InvalidParenthesisError: ea,
  InvalidPrimaryTypeError: sa,
  InvalidRequestRpcError: oa,
  InvalidSerializableTransactionError: ta,
  InvalidSignatureError: na,
  InvalidStructSignatureError: ia,
  InvalidStructTypeError: ca,
  JsonRpcVersionUnsupportedError: da,
  LimitExceededRpcError: ua,
  MaxFeePerGasTooLowError: la,
  MethodNotFoundRpcError: Ea,
  MethodNotSupportedRpcError: pa,
  NonceMaxValueError: ba,
  NonceTooHighError: ha,
  NonceTooLowError: ma,
  ParseRpcError: fa,
  ProviderDisconnectedError: ga,
  ProviderRpcError: ya,
  RawContractError: Ta,
  ResourceNotFoundRpcError: Sa,
  ResourceUnavailableRpcError: va,
  RpcError: Aa,
  RpcRequestError: Ra,
  SizeExceedsPaddingSizeError: Fa,
  SizeOverflowError: Ca,
  SliceOffsetOutOfBoundsError: wa,
  SolidityProtectedKeywordError: Ia,
  StateAssignmentConflictError: xa,
  SwitchChainError: Na,
  TimeoutError: Ba,
  TipAboveFeeCapError: Da,
  TransactionExecutionError: Ma,
  TransactionNotFoundError: Pa,
  TransactionReceiptNotFoundError: La,
  TransactionRejectedRpcError: ka,
  TransactionTypeNotSupportedError: Oa,
  UnauthorizedProviderError: Ua,
  UnknownBundleIdError: Ha,
  UnknownNodeError: qa,
  UnknownRpcError: za,
  UnknownSignatureError: Ga,
  UnknownTypeError: Va,
  UnsupportedChainIdError: _a,
  UnsupportedNonOptionalCapabilityError: $a,
  UnsupportedProviderMethodError: ja,
  UrlRequiredError: Wa,
  UserRejectedRequestError: Ja,
  WaitForCallsStatusTimeoutError: Ka,
  WaitForTransactionReceiptTimeoutError: Za,
  assertCurrentChain: Qa,
  assertRequest: Xa,
  blobsToCommitments: Ya,
  blobsToProofs: re,
  boolToBytes: ae,
  boolToHex: ee,
  bytesToBigInt: se,
  bytesToBool: oe,
  bytesToHex: te,
  bytesToNumber: ne,
  bytesToString: ie,
  ccipFetch: p,
  ccipRequest: p,
  checksumAddress: ce,
  commitmentToVersionedHash: de,
  commitmentsToVersionedHashes: ue,
  concat: x,
  concatBytes: le,
  concatHex: Ee,
  createClient: pe,
  createPublicClient: H,
  createTransport: be,
  createWalletClient: he,
  custom: me,
  decodeAbiParameters: fe,
  decodeErrorResult: w,
  decodeEventLog: ge,
  decodeFunctionData: ye,
  decodeFunctionResult: Te,
  defineChain: U,
  deploylessCallViaBytecodeBytecode: Se,
  deploylessCallViaFactoryBytecode: ve,
  encodeAbiParameters: N,
  encodeDeployData: Ae,
  encodeErrorResult: Re,
  encodeEventTopics: Fe,
  encodeFunctionData: Ce,
  encodeFunctionResult: we,
  erc20Abi: Ie,
  erc6492SignatureValidatorAbi: T,
  erc6492SignatureValidatorByteCode: S,
  ethAddress: xe,
  etherUnits: Ne,
  fallback: Be,
  formatBlock: De,
  formatEther: Me,
  formatGwei: Pe,
  formatLog: Le,
  formatTransaction: ke,
  formatTransactionReceipt: Oe,
  formatTransactionRequest: Ue,
  formatUnits: He,
  fromHex: qe,
  getAbiItem: ze,
  getAddress: Ge,
  getChainContractAddress: Ve,
  getContractError: _e,
  getEventSelector: v,
  getEventSignature: E,
  getFunctionSelector: A,
  getFunctionSignature: E,
  getTransactionType: $e,
  getTypesForEIP712Domain: je,
  gweiUnits: We,
  hashDomain: Je,
  hashMessage: Ke,
  hashStruct: Ze,
  hashTypedData: Qe,
  hexToBigInt: Xe,
  hexToBool: Ye,
  hexToBytes: rs,
  hexToNumber: as,
  hexToString: es,
  http: q,
  isAddress: ss,
  isAddressEqual: I,
  isHex: B,
  keccak256: os,
  labelhash: ts,
  maxUint256: ns,
  multicall3Abi: is,
  namehash: cs,
  numberToBytes: ds,
  numberToHex: us,
  offchainLookup: M,
  offchainLookupAbiItem: g,
  offchainLookupSignature: D,
  pad: ls,
  padBytes: Es,
  padHex: ps,
  parseAbi: bs,
  parseAbiItem: hs,
  parseAbiParameters: ms,
  parseEventLogs: fs,
  parseUnits: gs,
  prepareEncodeFunctionData: ys,
  presignMessagePrefix: Ts,
  publicActions: Ss,
  recoverAddress: vs,
  recoverPublicKey: As,
  rpcTransactionType: Rs,
  serializeSignature: R,
  serializeTypedData: Fs,
  sha256: Cs,
  shouldThrow: ws,
  signatureToHex: R,
  size: Is,
  slice: xs,
  sliceBytes: Ns,
  sliceHex: Bs,
  stringToBytes: Ds,
  stringToHex: Ms,
  stringify: f,
  toBlobSidecars: Ps,
  toBlobs: Ls,
  toBytes: ks,
  toEventHash: F,
  toEventSelector: v,
  toEventSignature: E,
  toFunctionHash: F,
  toFunctionSelector: A,
  toFunctionSignature: E,
  toHex: Os,
  toPrefixedMessage: Us,
  toRlp: Hs,
  transactionType: qs,
  trim: zs,
  universalSignatureValidatorAbi: T,
  universalSignatureValidatorByteCode: S,
  validateTypedData: Gs,
  walletActions: Vs,
  withCache: _s,
  withRetry: $s,
  withTimeout: js,
  zeroAddress: Ws
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xs as c,
  Ys as i
};
//# sourceMappingURL=index-CEjs2Vnd.mjs.map
