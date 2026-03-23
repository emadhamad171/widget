import { bl as Jt, bm as gi, s as Ye, p as Pe, i as st, G as mi, bn as _l, bo as Ti, bp as Ru, aX as Wn, aI as Yo, aK as Uu, aM as $t, aN as gt, aJ as B, aL as Ss, aV as Du, aW as $u, aS as ci, aT as oo, bq as qn, aR as Lu, aU as Bu, aY as mn, aZ as Tl, a_ as St, a$ as Fu, b0 as Mu, b1 as _t, b8 as ns, b9 as jn, bb as Jo, bc as Wu, bd as Xo, be as Zo, bf as yi, bg as Qo, b2 as Aa, b3 as qu, b4 as ju, b5 as Hu, b6 as Ia, ba as an, bh as Ol, bi as ps, b7 as ts, bj as Os, bk as kl, n as Ms, br as ss, bs as Na, bt as Oi, bu as Sa } from "./index-CmqJ8p7x.mjs";
import { f as Ku, r as Vu } from "./index-BFTSsruq.mjs";
const xl = {
  isLowerCaseMatch(t, e) {
    return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
  }
}, C = {
  WC_NAME_SUFFIX: ".reown.id",
  WC_NAME_SUFFIX_LEGACY: ".wcn.id",
  BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
  PULSE_API_URL: "https://pulse.walletconnect.org",
  W3M_API_URL: "https://api.web3modal.org",
  CONNECTOR_ID: {
    WALLET_CONNECT: "walletConnect",
    INJECTED: "injected",
    WALLET_STANDARD: "announced",
    COINBASE: "coinbaseWallet",
    COINBASE_SDK: "coinbaseWalletSDK",
    BASE_ACCOUNT: "baseAccount",
    SAFE: "safe",
    LEDGER: "ledger",
    OKX: "okx",
    EIP6963: "eip6963",
    AUTH: "AUTH"
  },
  CONNECTOR_NAMES: {
    AUTH: "Auth"
  },
  AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
  LIMITS: {
    PENDING_TRANSACTIONS: 99
  },
  CHAIN: {
    EVM: "eip155",
    SOLANA: "solana",
    POLKADOT: "polkadot",
    BITCOIN: "bip122",
    TON: "ton"
  },
  CHAIN_NAME_MAP: {
    eip155: "EVM Networks",
    solana: "Solana",
    polkadot: "Polkadot",
    bip122: "Bitcoin",
    cosmos: "Cosmos",
    sui: "Sui",
    stacks: "Stacks",
    ton: "TON"
  },
  ADAPTER_TYPES: {
    BITCOIN: "bitcoin",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5",
    TON: "ton"
  },
  USDT_CONTRACT_ADDRESSES: [
    "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
    "0x919C1c267BC06a7039e03fcc2eF738525769109c",
    "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
    "0x55d398326f99059fF775485246999027B3197955",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
  ],
  SOLANA_SPL_TOKEN_ADDRESSES: {
    SOL: "So11111111111111111111111111111111111111112"
  },
  NATIVE_IMAGE_IDS_BY_NAMESPACE: {
    eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    solana: "3e8119e5-2a6f-4818-c50c-1937011d5900",
    bip122: "0b4838db-0161-4ffe-022d-532bf03dba00"
  },
  TOKEN_SYMBOLS_BY_ADDRESS: {
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "USDC",
    "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": "USDC",
    "0x0b2c639c533813f4aa9d7837caf62653d097ff85": "USDC",
    "0xaf88d065e77c8cc2239327c5edb3a432268e5831": "USDC",
    "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": "USDC",
    "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": "USDC",
    EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: "USDC",
    "0xdac17f958d2ee523a2206206994597c13d831ec7": "USDT",
    "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": "USDT",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "USDT",
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": "USDT",
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: "USDT"
  },
  HTTP_STATUS_CODES: {
    SERVER_ERROR: 500,
    TOO_MANY_REQUESTS: 429,
    SERVICE_UNAVAILABLE: 503,
    FORBIDDEN: 403
  },
  UNSUPPORTED_NETWORK_NAME: "Unknown Network",
  SECURE_SITE_SDK_ORIGIN: (typeof process < "u" && typeof process.env < "u" ? process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
  REMOTE_FEATURES_ALERTS: {
    MULTI_WALLET_NOT_ENABLED: {
      DEFAULT: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."
      },
      CONNECTIONS_HOOK: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."
      },
      CONNECTION_HOOK: {
        displayMessage: "Multi-Wallet Not Enabled",
        debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."
      }
    },
    HEADLESS_NOT_ENABLED: {
      DEFAULT: {
        displayMessage: "",
        debugMessage: "Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."
      }
    }
  },
  IS_DEVELOPMENT: typeof process < "u" && process.env.NODE_ENV === "development",
  DEFAULT_ALLOWED_ANCESTORS: [
    "http://localhost:*",
    "https://localhost:*",
    "http://127.0.0.1:*",
    "https://127.0.0.1:*",
    "https://*.pages.dev",
    "https://*.vercel.app",
    "https://*.ngrok-free.app",
    "https://secure-mobile.walletconnect.com",
    "https://secure-mobile.walletconnect.org"
  ],
  METMASK_CONNECTOR_NAME: "MetaMask",
  TRUST_CONNECTOR_NAME: "Trust Wallet",
  SOLFLARE_CONNECTOR_NAME: "Solflare",
  PHANTOM_CONNECTOR_NAME: "Phantom",
  COIN98_CONNECTOR_NAME: "Coin98",
  MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
  BACKPACK_CONNECTOR_NAME: "Backpack",
  BITGET_CONNECTOR_NAME: "Bitget Wallet",
  FRONTIER_CONNECTOR_NAME: "Frontier",
  XVERSE_CONNECTOR_NAME: "Xverse Wallet",
  LEATHER_CONNECTOR_NAME: "Leather",
  OKX_CONNECTOR_NAME: "OKX Wallet",
  BINANCE_CONNECTOR_NAME: "Binance Wallet",
  EIP155: "eip155",
  ADD_CHAIN_METHOD: "wallet_addEthereumChain",
  EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
  EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
  CONNECTOR_RDNS_MAP: {
    coinbaseWallet: "com.coinbase.wallet",
    coinbaseWalletSDK: "com.coinbase.wallet"
  },
  CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
  CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
  CONNECTOR_TYPE_INJECTED: "INJECTED",
  CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
  CONNECTOR_TYPE_AUTH: "AUTH",
  CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
  CONNECTOR_TYPE_W3M_AUTH: "AUTH"
}, Pl = {
  caipNetworkIdToNumber(t) {
    return t ? Number(t.split(":")[1]) : void 0;
  },
  parseEvmChainId(t) {
    return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t;
  },
  getNetworksByNamespace(t, e) {
    return (t == null ? void 0 : t.filter((s) => s.chainNamespace === e)) || [];
  },
  getFirstNetworkByNamespace(t, e) {
    return this.getNetworksByNamespace(t, e)[0];
  },
  getNetworkNameByCaipNetworkId(t, e) {
    var i;
    if (!e)
      return;
    const s = t.find((r) => r.caipNetworkId === e);
    if (s)
      return s.name;
    const [n] = e.split(":");
    return ((i = C.CHAIN_NAME_MAP) == null ? void 0 : i[n]) || void 0;
  }
}, Rl = [
  "eip155",
  "solana",
  "polkadot",
  "bip122",
  "cosmos",
  "sui",
  "stacks"
], Ul = {
  bigNumber(t, e = {
    safe: !1
  }) {
    try {
      return t ? new Jt(t) : new Jt(0);
    } catch (s) {
      if (e.safe)
        return new Jt(0);
      throw s;
    }
  },
  formatNumber(t, e) {
    const { decimals: s, round: n = 8, safe: i = !0 } = e;
    return Ul.bigNumber(t, { safe: i }).div(new Jt(10).pow(s)).round(n);
  },
  multiply(t, e) {
    if (t === void 0 || e === void 0)
      return new Jt(0);
    const s = new Jt(t), n = new Jt(e);
    return s.times(n);
  },
  toFixed(t, e = 2) {
    return t === void 0 || t === "" ? new Jt(0).toFixed(e) : new Jt(t).toFixed(e);
  },
  formatNumberToLocalString(t, e = 2) {
    return t === void 0 || t === "" ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", {
      maximumFractionDigits: e,
      minimumFractionDigits: e,
      roundingMode: "floor"
    }) : parseFloat(t).toLocaleString("en-US", {
      maximumFractionDigits: e,
      minimumFractionDigits: e,
      roundingMode: "floor"
    });
  },
  parseLocalStringToNumber(t) {
    if (t === void 0 || t === "")
      return 0;
    const e = t.replace(/,/gu, "");
    return new Jt(e).toNumber();
  }
}, zu = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
], Gu = [
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: [{ type: "bool" }]
  }
], Yu = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
], Ju = {
  getERC20Abi: (t) => C.USDT_CONTRACT_ADDRESSES.includes(t) ? Yu : zu,
  getSwapAbi: () => Gu
}, En = {
  ConnectorExplorerIds: {
    [C.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [C.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [C.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [C.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    [C.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
    [C.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
    [C.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    [C.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    [C.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    [C.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
    [C.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
    [C.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
    [C.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
    [C.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
    [C.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
    [C.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
    [C.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
    [C.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
    [C.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
  }
}, Ge = {
  validateCaipAddress(t) {
    var e;
    if (((e = t.split(":")) == null ? void 0 : e.length) !== 3)
      throw new Error("Invalid CAIP Address");
    return t;
  },
  parseCaipAddress(t) {
    const e = t.split(":");
    if (e.length !== 3)
      throw new Error(`Invalid CAIP-10 address: ${t}`);
    const [s, n, i] = e;
    if (!s || !n || !i)
      throw new Error(`Invalid CAIP-10 address: ${t}`);
    return {
      chainNamespace: s,
      chainId: n,
      address: i
    };
  },
  parseCaipNetworkId(t) {
    const e = t.split(":");
    if (e.length !== 2)
      throw new Error(`Invalid CAIP-2 network id: ${t}`);
    const [s, n] = e;
    if (!s || !n)
      throw new Error(`Invalid CAIP-2 network id: ${t}`);
    return {
      chainNamespace: s,
      chainId: n
    };
  }
}, Es = {
  RPC_ERROR_CODE: {
    USER_REJECTED_REQUEST: 4001,
    USER_REJECTED_METHODS: 5002,
    USER_REJECTED: 5e3,
    SEND_TRANSACTION_ERROR: 5001
  },
  PROVIDER_RPC_ERROR_NAME: {
    PROVIDER_RPC: "ProviderRpcError",
    USER_REJECTED_REQUEST: "UserRejectedRequestError",
    SEND_TRANSACTION_ERROR: "SendTransactionError"
  },
  isRpcProviderError(t) {
    try {
      if (typeof t == "object" && t !== null) {
        const e = t, s = typeof e.message == "string", n = typeof e.code == "number";
        return s && n;
      }
      return !1;
    } catch {
      return !1;
    }
  },
  isUserRejectedMessage(t) {
    return t.toLowerCase().includes("user rejected") || t.toLowerCase().includes("user cancelled") || t.toLowerCase().includes("user canceled");
  },
  isUserRejectedRequestError(t) {
    if (Es.isRpcProviderError(t)) {
      const e = t.code === Es.RPC_ERROR_CODE.USER_REJECTED_REQUEST, s = t.code === Es.RPC_ERROR_CODE.USER_REJECTED_METHODS;
      return e || s || Es.isUserRejectedMessage(t.message);
    }
    return t instanceof Error ? Es.isUserRejectedMessage(t.message) : !1;
  }
};
class Xu extends Error {
  constructor(e, s) {
    super(s.message, { cause: e }), this.name = Es.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC, this.code = s.code;
  }
}
class Dl extends Xu {
  constructor(e) {
    super(e, {
      code: Es.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
      message: "User rejected the request"
    }), this.name = Es.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
  }
}
const X = {
  WALLET_ID: "@appkit/wallet_id",
  WALLET_NAME: "@appkit/wallet_name",
  SOLANA_WALLET: "@appkit/solana_wallet",
  SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
  ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
  CONNECTED_SOCIAL: "@appkit/connected_social",
  CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
  RECENT_WALLETS: "@appkit/recent_wallets",
  RECENT_WALLET: "@appkit/recent_wallet",
  DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  ACTIVE_NAMESPACE: "@appkit/active_namespace",
  CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
  CONNECTION_STATUS: "@appkit/connection_status",
  SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
  SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
  TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
  NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
  PORTFOLIO_CACHE: "@appkit/portfolio_cache",
  ENS_CACHE: "@appkit/ens_cache",
  IDENTITY_CACHE: "@appkit/identity_cache",
  PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
  CONNECTIONS: "@appkit/connections",
  DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
  HISTORY_TRANSACTIONS_CACHE: "@appkit/history_transactions_cache",
  TOKEN_PRICE_CACHE: "@appkit/token_price_cache",
  RECENT_EMAILS: "@appkit/recent_emails",
  LATEST_APPKIT_VERSION: "@appkit/latest_version",
  TON_WALLETS_CACHE: "@appkit/ton_wallets_cache"
};
function Sr(t) {
  if (!t)
    throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
  return `@appkit/${t}:connected_connector_id`;
}
const G = {
  setItem(t, e) {
    ii() && e !== void 0 && localStorage.setItem(t, e);
  },
  getItem(t) {
    if (ii())
      return localStorage.getItem(t) || void 0;
  },
  removeItem(t) {
    ii() && localStorage.removeItem(t);
  },
  clear() {
    ii() && localStorage.clear();
  }
};
function ii() {
  return typeof window < "u" && typeof localStorage < "u";
}
function Zi(t, e) {
  const s = (t == null ? void 0 : t["--apkt-accent"]) ?? (t == null ? void 0 : t["--w3m-accent"]);
  return e === "light" ? {
    "--w3m-accent": s || "hsla(231, 100%, 70%, 1)",
    "--w3m-background": "#fff"
  } : {
    "--w3m-accent": s || "hsla(230, 100%, 67%, 1)",
    "--w3m-background": "#202020"
  };
}
const _r = (
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  (typeof process < "u" && typeof process.env < "u" ? process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org"
), $l = [
  {
    label: "Meld.io",
    name: "meld",
    feeRange: "1-2%",
    url: "https://meldcrypto.com",
    supportedChains: ["eip155", "solana"]
  }
], Zu = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU", le = {
  FOUR_MINUTES_MS: 24e4,
  TEN_SEC_MS: 1e4,
  FIVE_SEC_MS: 5e3,
  THREE_SEC_MS: 3e3,
  ONE_SEC_MS: 1e3,
  SECURE_SITE: _r,
  SECURE_SITE_DASHBOARD: `${_r}/dashboard`,
  SECURE_SITE_FAVICON: `${_r}/images/favicon.png`,
  SOLANA_NATIVE_TOKEN_ADDRESS: "So11111111111111111111111111111111111111111",
  RESTRICTED_TIMEZONES: [
    "ASIA/SHANGHAI",
    "ASIA/URUMQI",
    "ASIA/CHONGQING",
    "ASIA/HARBIN",
    "ASIA/KASHGAR",
    "ASIA/MACAU",
    "ASIA/HONG_KONG",
    "ASIA/MACAO",
    "ASIA/BEIJING",
    "ASIA/HARBIN"
  ],
  SWAP_SUGGESTED_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP"
  ],
  SWAP_POPULAR_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP",
    "METAL",
    "DAI",
    "CHAMP",
    "WOLF",
    "SALE",
    "BAL",
    "BUSD",
    "MUST",
    "BTCpx",
    "ROUTE",
    "HEX",
    "WELT",
    "amDAI",
    "VSQ",
    "VISION",
    "AURUM",
    "pSP",
    "SNX",
    "VC",
    "LINK",
    "CHP",
    "amUSDT",
    "SPHERE",
    "FOX",
    "GIDDY",
    "GFC",
    "OMEN",
    "OX_OLD",
    "DE",
    "WNT"
  ],
  SUGGESTED_TOKENS_BY_CHAIN: {
    // Arbitrum One
    "eip155:42161": ["USD₮0"]
  },
  BALANCE_SUPPORTED_CHAINS: [
    C.CHAIN.EVM,
    C.CHAIN.SOLANA
  ],
  SEND_PARAMS_SUPPORTED_CHAINS: [C.CHAIN.EVM],
  SWAP_SUPPORTED_NETWORKS: [
    // Ethereum'
    "eip155:1",
    // Arbitrum One'
    "eip155:42161",
    // Optimism'
    "eip155:10",
    // ZKSync Era'
    "eip155:324",
    // Base'
    "eip155:8453",
    // BNB Smart Chain'
    "eip155:56",
    // Polygon'
    "eip155:137",
    // Gnosis'
    "eip155:100",
    // Avalanche'
    "eip155:43114",
    // Fantom'
    "eip155:250",
    // Klaytn'
    "eip155:8217",
    // Aurora
    "eip155:1313161554"
  ],
  NAMES_SUPPORTED_CHAIN_NAMESPACES: [C.CHAIN.EVM],
  ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
    C.CHAIN.EVM,
    C.CHAIN.SOLANA
  ],
  PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
    C.CHAIN.EVM,
    C.CHAIN.SOLANA
  ],
  ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
    C.CHAIN.EVM,
    C.CHAIN.TON
  ],
  NATIVE_TOKEN_ADDRESS: {
    eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    solana: "So11111111111111111111111111111111111111111",
    polkadot: "0x",
    bip122: "0x",
    cosmos: "0x",
    sui: "0x",
    stacks: "0x",
    ton: "0x"
  },
  CONVERT_SLIPPAGE_TOLERANCE: 1,
  CONNECT_LABELS: {
    MOBILE: "Open and continue in the wallet app",
    WEB: "Open and continue in the wallet app"
  },
  SEND_SUPPORTED_NAMESPACES: [
    C.CHAIN.EVM,
    C.CHAIN.SOLANA
  ],
  DEFAULT_REMOTE_FEATURES: {
    swaps: ["1inch"],
    onramp: ["meld"],
    email: !0,
    socials: [
      "google",
      "x",
      "discord",
      "farcaster",
      "github",
      "apple",
      "facebook"
    ],
    activity: !0,
    reownBranding: !0,
    multiWallet: !1,
    emailCapture: !1,
    payWithExchange: !1,
    payments: !1,
    reownAuthentication: !1,
    headless: !1
  },
  DEFAULT_REMOTE_FEATURES_DISABLED: {
    email: !1,
    socials: !1,
    swaps: !1,
    onramp: !1,
    activity: !1,
    reownBranding: !1,
    emailCapture: !1,
    reownAuthentication: !1,
    headless: !1
  },
  DEFAULT_FEATURES: {
    receive: !0,
    send: !0,
    emailShowWallets: !0,
    connectorTypeOrder: [
      "walletConnect",
      "recent",
      "injected",
      "featured",
      "custom",
      "external",
      "recommended"
    ],
    analytics: !0,
    allWallets: !0,
    legalCheckbox: !1,
    smartSessions: !1,
    collapseWallets: !1,
    walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
    connectMethodsOrder: void 0,
    pay: !1,
    reownAuthentication: !1,
    headless: !1
  },
  DEFAULT_SOCIALS: [
    "google",
    "x",
    "farcaster",
    "discord",
    "apple",
    "github",
    "facebook"
  ],
  DEFAULT_ACCOUNT_TYPES: {
    bip122: "payment",
    eip155: "smartAccount",
    polkadot: "eoa",
    solana: "eoa",
    ton: "eoa"
  },
  ADAPTER_TYPES: {
    UNIVERSAL: "universal",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5",
    BITCOIN: "bitcoin"
  },
  SIWX_DEFAULTS: {
    signOutOnDisconnect: !0
  },
  MANDATORY_WALLET_IDS_ON_MOBILE: [
    En.ConnectorExplorerIds[C.CONNECTOR_ID.COINBASE],
    En.ConnectorExplorerIds[C.CONNECTOR_ID.COINBASE_SDK],
    En.ConnectorExplorerIds[C.CONNECTOR_ID.BASE_ACCOUNT],
    En.ConnectorExplorerIds[C.SOLFLARE_CONNECTOR_NAME],
    En.ConnectorExplorerIds[C.PHANTOM_CONNECTOR_NAME],
    En.ConnectorExplorerIds[C.BINANCE_CONNECTOR_NAME]
  ],
  DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"]
}, k = {
  // Cache expiry in milliseconds
  cacheExpiry: {
    portfolio: 3e4,
    nativeBalance: 3e4,
    ens: 3e5,
    identity: 3e5,
    transactionsHistory: 15e3,
    tokenPrice: 15e3,
    // 7 Days
    latestAppKitVersion: 6048e5,
    // 1 Day
    tonWallets: 864e5
  },
  isCacheExpired(t, e) {
    return Date.now() - t > e;
  },
  getActiveNetworkProps() {
    const t = k.getActiveNamespace(), e = k.getActiveCaipNetworkId(), s = e ? e.split(":")[1] : void 0, n = s ? isNaN(Number(s)) ? s : Number(s) : void 0;
    return {
      namespace: t,
      caipNetworkId: e,
      chainId: n
    };
  },
  setWalletConnectDeepLink({ name: t, href: e }) {
    try {
      G.setItem(X.DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      const t = G.getItem(X.DEEPLINK_CHOICE);
      if (t)
        return JSON.parse(t);
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
  },
  deleteWalletConnectDeepLink() {
    try {
      G.removeItem(X.DEEPLINK_CHOICE);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setActiveNamespace(t) {
    try {
      G.setItem(X.ACTIVE_NAMESPACE, t);
    } catch {
      console.info("Unable to set active namespace");
    }
  },
  setActiveCaipNetworkId(t) {
    try {
      G.setItem(X.ACTIVE_CAIP_NETWORK_ID, t), k.setActiveNamespace(t.split(":")[0]);
    } catch {
      console.info("Unable to set active caip network id");
    }
  },
  getActiveCaipNetworkId() {
    try {
      return G.getItem(X.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to get active caip network id");
      return;
    }
  },
  deleteActiveCaipNetworkId() {
    try {
      G.removeItem(X.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to delete active caip network id");
    }
  },
  deleteConnectedConnectorId(t) {
    try {
      const e = Sr(t);
      G.removeItem(e);
    } catch {
      console.info("Unable to delete connected connector id");
    }
  },
  setAppKitRecent(t) {
    try {
      const e = k.getRecentWallets();
      e.find((n) => n.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), G.setItem(X.RECENT_WALLETS, JSON.stringify(e)), G.setItem(X.RECENT_WALLET, JSON.stringify(t)));
    } catch {
      console.info("Unable to set AppKit recent");
    }
  },
  getRecentWallets() {
    try {
      const t = G.getItem(X.RECENT_WALLETS);
      return t ? JSON.parse(t) : [];
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return [];
  },
  getRecentWallet() {
    try {
      const t = G.getItem(X.RECENT_WALLET);
      return t ? JSON.parse(t) : null;
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return null;
  },
  deleteRecentWallet() {
    try {
      G.removeItem(X.RECENT_WALLET);
    } catch {
      console.info("Unable to delete AppKit recent");
    }
  },
  setConnectedConnectorId(t, e) {
    try {
      const s = Sr(t);
      G.setItem(s, e);
    } catch {
      console.info("Unable to set Connected Connector Id");
    }
  },
  getActiveNamespace() {
    try {
      return G.getItem(X.ACTIVE_NAMESPACE);
    } catch {
      console.info("Unable to get active namespace");
    }
  },
  getConnectedConnectorId(t) {
    if (t)
      try {
        const e = Sr(t);
        return G.getItem(e);
      } catch {
        console.info("Unable to get connected connector id in namespace", t);
      }
  },
  setConnectedSocialProvider(t) {
    try {
      G.setItem(X.CONNECTED_SOCIAL, t);
    } catch {
      console.info("Unable to set connected social provider");
    }
  },
  getConnectedSocialProvider() {
    try {
      return G.getItem(X.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to get connected social provider");
    }
  },
  deleteConnectedSocialProvider() {
    try {
      G.removeItem(X.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to delete connected social provider");
    }
  },
  getConnectedSocialUsername() {
    try {
      return G.getItem(X.CONNECTED_SOCIAL_USERNAME);
    } catch {
      console.info("Unable to get connected social username");
    }
  },
  getStoredActiveCaipNetworkId() {
    var s;
    const t = G.getItem(X.ACTIVE_CAIP_NETWORK_ID);
    return (s = t == null ? void 0 : t.split(":")) == null ? void 0 : s[1];
  },
  setConnectionStatus(t) {
    try {
      G.setItem(X.CONNECTION_STATUS, t);
    } catch {
      console.info("Unable to set connection status");
    }
  },
  getConnectionStatus() {
    try {
      return G.getItem(X.CONNECTION_STATUS);
    } catch {
      return;
    }
  },
  getConnectedNamespaces() {
    try {
      const t = G.getItem(X.CONNECTED_NAMESPACES);
      return t != null && t.length ? t.split(",") : [];
    } catch {
      return [];
    }
  },
  setConnectedNamespaces(t) {
    try {
      const e = Array.from(new Set(t));
      G.setItem(X.CONNECTED_NAMESPACES, e.join(","));
    } catch {
      console.info("Unable to set namespaces in storage");
    }
  },
  addConnectedNamespace(t) {
    try {
      const e = k.getConnectedNamespaces();
      e.includes(t) || (e.push(t), k.setConnectedNamespaces(e));
    } catch {
      console.info("Unable to add connected namespace");
    }
  },
  removeConnectedNamespace(t) {
    try {
      const e = k.getConnectedNamespaces(), s = e.indexOf(t);
      s > -1 && (e.splice(s, 1), k.setConnectedNamespaces(e));
    } catch {
      console.info("Unable to remove connected namespace");
    }
  },
  getTelegramSocialProvider() {
    try {
      return G.getItem(X.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      return console.info("Unable to get telegram social provider"), null;
    }
  },
  setTelegramSocialProvider(t) {
    try {
      G.setItem(X.TELEGRAM_SOCIAL_PROVIDER, t);
    } catch {
      console.info("Unable to set telegram social provider");
    }
  },
  removeTelegramSocialProvider() {
    try {
      G.removeItem(X.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to remove telegram social provider");
    }
  },
  getBalanceCache() {
    let t = {};
    try {
      const e = G.getItem(X.PORTFOLIO_CACHE);
      t = e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return t;
  },
  removeAddressFromBalanceCache(t) {
    try {
      const e = k.getBalanceCache();
      G.setItem(X.PORTFOLIO_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", t);
    }
  },
  getBalanceCacheForCaipAddress(t) {
    try {
      const s = k.getBalanceCache()[t];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.portfolio))
        return s.balance;
      k.removeAddressFromBalanceCache(t);
    } catch {
      console.info("Unable to get balance cache for address", t);
    }
  },
  updateBalanceCache(t) {
    try {
      const e = k.getBalanceCache();
      e[t.caipAddress] = t, G.setItem(X.PORTFOLIO_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update balance cache", t);
    }
  },
  getNativeBalanceCache() {
    let t = {};
    try {
      const e = G.getItem(X.NATIVE_BALANCE_CACHE);
      t = e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return t;
  },
  removeAddressFromNativeBalanceCache(t) {
    try {
      const e = k.getBalanceCache();
      G.setItem(X.NATIVE_BALANCE_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", t);
    }
  },
  getNativeBalanceCacheForCaipAddress(t) {
    try {
      const s = k.getNativeBalanceCache()[t];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.nativeBalance))
        return s;
      console.info("Discarding cache for address", t), k.removeAddressFromBalanceCache(t);
    } catch {
      console.info("Unable to get balance cache for address", t);
    }
  },
  updateNativeBalanceCache(t) {
    try {
      const e = k.getNativeBalanceCache();
      e[t.caipAddress] = t, G.setItem(X.NATIVE_BALANCE_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update balance cache", t);
    }
  },
  getEnsCache() {
    let t = {};
    try {
      const e = G.getItem(X.ENS_CACHE);
      t = e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get ens name cache");
    }
    return t;
  },
  getEnsFromCacheForAddress(t) {
    try {
      const s = k.getEnsCache()[t];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.ens))
        return s.ens;
      k.removeEnsFromCache(t);
    } catch {
      console.info("Unable to get ens name from cache", t);
    }
  },
  updateEnsCache(t) {
    try {
      const e = k.getEnsCache();
      e[t.address] = t, G.setItem(X.ENS_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update ens name cache", t);
    }
  },
  removeEnsFromCache(t) {
    try {
      const e = k.getEnsCache();
      G.setItem(X.ENS_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
    } catch {
      console.info("Unable to remove ens name from cache", t);
    }
  },
  getIdentityCache() {
    let t = {};
    try {
      const e = G.getItem(X.IDENTITY_CACHE);
      t = e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get identity cache");
    }
    return t;
  },
  getIdentityFromCacheForAddress(t) {
    try {
      const s = k.getIdentityCache()[t];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.identity))
        return s.identity;
      k.removeIdentityFromCache(t);
    } catch {
      console.info("Unable to get identity from cache", t);
    }
  },
  updateIdentityCache(t) {
    try {
      const e = k.getIdentityCache();
      e[t.address] = {
        identity: t.identity,
        timestamp: t.timestamp
      }, G.setItem(X.IDENTITY_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update identity cache", t);
    }
  },
  removeIdentityFromCache(t) {
    try {
      const e = k.getIdentityCache();
      G.setItem(X.IDENTITY_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
    } catch {
      console.info("Unable to remove identity from cache", t);
    }
  },
  getTonWalletsCache() {
    try {
      const t = G.getItem(X.TON_WALLETS_CACHE), e = t ? JSON.parse(t) : void 0;
      if (e && !this.isCacheExpired(e.timestamp, this.cacheExpiry.tonWallets))
        return e;
      k.removeTonWalletsCache();
    } catch {
      console.info("Unable to get ton wallets cache");
    }
  },
  updateTonWalletsCache(t) {
    try {
      const e = k.getTonWalletsCache() || { timestamp: 0, wallets: [] };
      e.timestamp = (/* @__PURE__ */ new Date()).getTime(), e.wallets = t, G.setItem(X.TON_WALLETS_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update ton wallets cache", t);
    }
  },
  removeTonWalletsCache() {
    try {
      G.removeItem(X.TON_WALLETS_CACHE);
    } catch {
      console.info("Unable to remove ton wallets cache");
    }
  },
  clearAddressCache() {
    try {
      G.removeItem(X.PORTFOLIO_CACHE), G.removeItem(X.NATIVE_BALANCE_CACHE), G.removeItem(X.ENS_CACHE), G.removeItem(X.IDENTITY_CACHE), G.removeItem(X.HISTORY_TRANSACTIONS_CACHE);
    } catch {
      console.info("Unable to clear address cache");
    }
  },
  setPreferredAccountTypes(t) {
    try {
      G.setItem(X.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t));
    } catch {
      console.info("Unable to set preferred account types", t);
    }
  },
  getPreferredAccountTypes() {
    try {
      const t = G.getItem(X.PREFERRED_ACCOUNT_TYPES);
      return t ? JSON.parse(t) : {};
    } catch {
      console.info("Unable to get preferred account types");
    }
    return {};
  },
  setConnections(t, e) {
    try {
      const s = k.getConnections(), n = s[e] ?? [], i = /* @__PURE__ */ new Map();
      for (const o of n)
        i.set(o.connectorId, { ...o });
      for (const o of t) {
        const a = i.get(o.connectorId), c = o.connectorId === C.CONNECTOR_ID.AUTH;
        if (a && !c) {
          const l = new Set(a.accounts.map((u) => u.address.toLowerCase())), d = o.accounts.filter((u) => !l.has(u.address.toLowerCase()));
          a.accounts.push(...d);
        } else
          i.set(o.connectorId, { ...o });
      }
      const r = {
        ...s,
        [e]: Array.from(i.values())
      };
      G.setItem(X.CONNECTIONS, JSON.stringify(r));
    } catch (s) {
      console.error("Unable to sync connections to storage", s);
    }
  },
  getConnections() {
    try {
      const t = G.getItem(X.CONNECTIONS);
      return t ? JSON.parse(t) : {};
    } catch (t) {
      return console.error("Unable to get connections from storage", t), {};
    }
  },
  deleteAddressFromConnection({ connectorId: t, address: e, namespace: s }) {
    try {
      const n = k.getConnections(), i = n[s] ?? [], r = new Map(i.map((a) => [a.connectorId, a])), o = r.get(t);
      o && (o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase()).length === 0 ? r.delete(t) : r.set(t, {
        ...o,
        accounts: o.accounts.filter((c) => c.address.toLowerCase() !== e.toLowerCase())
      })), G.setItem(X.CONNECTIONS, JSON.stringify({
        ...n,
        [s]: Array.from(r.values())
      }));
    } catch {
      console.error(`Unable to remove address "${e}" from connector "${t}" in namespace "${s}"`);
    }
  },
  getDisconnectedConnectorIds() {
    try {
      const t = G.getItem(X.DISCONNECTED_CONNECTOR_IDS);
      return t ? JSON.parse(t) : {};
    } catch {
      console.info("Unable to get disconnected connector ids");
    }
    return {};
  },
  addDisconnectedConnectorId(t, e) {
    try {
      const s = k.getDisconnectedConnectorIds(), n = s[e] ?? [];
      n.push(t), G.setItem(X.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
        ...s,
        [e]: Array.from(new Set(n))
      }));
    } catch {
      console.error(`Unable to set disconnected connector id "${t}" for namespace "${e}"`);
    }
  },
  removeDisconnectedConnectorId(t, e) {
    try {
      const s = k.getDisconnectedConnectorIds();
      let n = s[e] ?? [];
      n = n.filter((i) => i.toLowerCase() !== t.toLowerCase()), G.setItem(X.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
        ...s,
        [e]: Array.from(new Set(n))
      }));
    } catch {
      console.error(`Unable to remove disconnected connector id "${t}" for namespace "${e}"`);
    }
  },
  isConnectorDisconnected(t, e) {
    try {
      return (k.getDisconnectedConnectorIds()[e] ?? []).some((i) => i.toLowerCase() === t.toLowerCase());
    } catch {
      console.info(`Unable to get disconnected connector id "${t}" for namespace "${e}"`);
    }
    return !1;
  },
  getTransactionsCache() {
    try {
      const t = G.getItem(X.HISTORY_TRANSACTIONS_CACHE);
      return t ? JSON.parse(t) : {};
    } catch {
      console.info("Unable to get transactions cache");
    }
    return {};
  },
  getTransactionsCacheForAddress({ address: t, chainId: e = "" }) {
    var s;
    try {
      const i = (s = k.getTransactionsCache()[t]) == null ? void 0 : s[e];
      if (i && !this.isCacheExpired(i.timestamp, this.cacheExpiry.transactionsHistory))
        return i.transactions;
      k.removeTransactionsCache({ address: t, chainId: e });
    } catch {
      console.info("Unable to get transactions cache");
    }
  },
  updateTransactionsCache({ address: t, chainId: e = "", timestamp: s, transactions: n }) {
    try {
      const i = k.getTransactionsCache();
      i[t] = {
        ...i[t],
        [e]: {
          timestamp: s,
          transactions: n
        }
      }, G.setItem(X.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(i));
    } catch {
      console.info("Unable to update transactions cache", {
        address: t,
        chainId: e,
        timestamp: s,
        transactions: n
      });
    }
  },
  removeTransactionsCache({ address: t, chainId: e }) {
    try {
      const s = k.getTransactionsCache(), n = (s == null ? void 0 : s[t]) || {}, { [e]: i, ...r } = n;
      G.setItem(X.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
        ...s,
        [t]: r
      }));
    } catch {
      console.info("Unable to remove transactions cache", { address: t, chainId: e });
    }
  },
  getTokenPriceCache() {
    try {
      const t = G.getItem(X.TOKEN_PRICE_CACHE);
      return t ? JSON.parse(t) : {};
    } catch {
      console.info("Unable to get token price cache");
    }
    return {};
  },
  getTokenPriceCacheForAddresses(t) {
    try {
      const s = k.getTokenPriceCache()[t.join(",")];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.tokenPrice))
        return s.tokenPrice;
      k.removeTokenPriceCache(t);
    } catch {
      console.info("Unable to get token price cache for addresses", t);
    }
  },
  updateTokenPriceCache(t) {
    try {
      const e = k.getTokenPriceCache();
      e[t.addresses.join(",")] = {
        timestamp: t.timestamp,
        tokenPrice: t.tokenPrice
      }, G.setItem(X.TOKEN_PRICE_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update token price cache", t);
    }
  },
  removeTokenPriceCache(t) {
    try {
      const e = k.getTokenPriceCache();
      G.setItem(X.TOKEN_PRICE_CACHE, JSON.stringify({ ...e, [t.join(",")]: void 0 }));
    } catch {
      console.info("Unable to remove token price cache", t);
    }
  },
  /* ----- AppKit Latest Version ------------------------- */
  getLatestAppKitVersion() {
    try {
      const t = this.getLatestAppKitVersionCache(), e = t == null ? void 0 : t.version;
      return e && !this.isCacheExpired(t.timestamp, this.cacheExpiry.latestAppKitVersion) ? e : void 0;
    } catch {
      console.info("Unable to get latest AppKit version");
    }
  },
  getLatestAppKitVersionCache() {
    try {
      const t = G.getItem(X.LATEST_APPKIT_VERSION);
      return t ? JSON.parse(t) : {};
    } catch {
      console.info("Unable to get latest AppKit version cache");
    }
    return {};
  },
  updateLatestAppKitVersion(t) {
    try {
      const e = k.getLatestAppKitVersionCache();
      e.timestamp = t.timestamp, e.version = t.version, G.setItem(X.LATEST_APPKIT_VERSION, JSON.stringify(e));
    } catch {
      console.info("Unable to update latest AppKit version on local storage", t);
    }
  }
}, W = {
  getWindow() {
    if (!(typeof window > "u"))
      return window;
  },
  isMobile() {
    var t;
    return this.isClient() ? !!(window != null && window.matchMedia && typeof window.matchMedia == "function" && ((t = window.matchMedia("(pointer:coarse)")) != null && t.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
  },
  checkCaipNetwork(t, e = "") {
    return t == null ? void 0 : t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase());
  },
  isAndroid() {
    if (!this.isMobile())
      return !1;
    const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return W.isMobile() && t.includes("android");
  },
  isIos() {
    if (!this.isMobile())
      return !1;
    const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return t.includes("iphone") || t.includes("ipad");
  },
  isSafari() {
    return this.isClient() ? (window == null ? void 0 : window.navigator.userAgent.toLowerCase()).includes("safari") : !1;
  },
  isClient() {
    return typeof window < "u";
  },
  isPairingExpired(t) {
    return t ? t - Date.now() <= le.TEN_SEC_MS : !0;
  },
  isAllowedRetry(t, e = le.ONE_SEC_MS) {
    return Date.now() - t >= e;
  },
  copyToClopboard(t) {
    navigator.clipboard.writeText(t);
  },
  isIframe() {
    try {
      return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top);
    } catch {
      return !1;
    }
  },
  isSafeApp() {
    var t, e;
    if (W.isClient() && window.self !== window.top)
      try {
        const s = (e = (t = window == null ? void 0 : window.location) == null ? void 0 : t.ancestorOrigins) == null ? void 0 : e[0], n = "https://app.safe.global";
        if (s) {
          const i = new URL(s), r = new URL(n);
          return i.hostname === r.hostname;
        }
      } catch {
        return !1;
      }
    return !1;
  },
  getPairingExpiry() {
    return Date.now() + le.FOUR_MINUTES_MS;
  },
  getNetworkId(t) {
    return t == null ? void 0 : t.split(":")[1];
  },
  getPlainAddress(t) {
    return t == null ? void 0 : t.split(":")[2];
  },
  async wait(t) {
    return new Promise((e) => {
      setTimeout(e, t);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debounce(t, e = 500) {
    let s;
    return (...n) => {
      function i() {
        t(...n);
      }
      s && clearTimeout(s), s = setTimeout(i, e);
    };
  },
  isHttpUrl(t) {
    return t.startsWith("http://") || t.startsWith("https://");
  },
  formatNativeUrl(t, e, s = null) {
    if (W.isHttpUrl(t))
      return this.formatUniversalUrl(t, e);
    let n = t, i = s;
    n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), i && !(i != null && i.endsWith("/")) && (i = `${i}/`), this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
    const r = encodeURIComponent(e);
    return {
      redirect: `${n}wc?uri=${r}`,
      redirectUniversalLink: i ? `${i}wc?uri=${r}` : void 0,
      href: n
    };
  },
  formatUniversalUrl(t, e) {
    if (!W.isHttpUrl(t))
      return this.formatNativeUrl(t, e);
    let s = t;
    s.endsWith("/") || (s = `${s}/`);
    const n = encodeURIComponent(e);
    return {
      redirect: `${s}wc?uri=${n}`,
      href: s
    };
  },
  getOpenTargetForPlatform(t) {
    return t === "popupWindow" ? t : this.isTelegram() ? k.getTelegramSocialProvider() ? "_top" : "_blank" : t;
  },
  openHref(t, e, s) {
    window == null || window.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener");
  },
  returnOpenHref(t, e, s) {
    return window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener");
  },
  isTelegram() {
    return typeof window < "u" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (!!window.TelegramWebviewProxy || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!window.Telegram || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!window.TelegramWebviewProxyProto);
  },
  isPWA() {
    var s, n;
    if (typeof window > "u")
      return !1;
    const t = window != null && window.matchMedia && typeof window.matchMedia == "function" ? (s = window.matchMedia("(display-mode: standalone)")) == null ? void 0 : s.matches : !1, e = (n = window == null ? void 0 : window.navigator) == null ? void 0 : n.standalone;
    return !!(t || e);
  },
  async preloadImage(t) {
    const e = new Promise((s, n) => {
      const i = new Image();
      i.onload = s, i.onerror = n, i.crossOrigin = "anonymous", i.src = t;
    });
    return Promise.race([e, W.wait(2e3)]);
  },
  parseBalance(t, e) {
    let s = "0.000";
    if (typeof t == "string") {
      const c = Number(t);
      if (!isNaN(c)) {
        const l = (Math.floor(c * 1e3) / 1e3).toFixed(3);
        l && (s = l);
      }
    }
    const [n, i] = s.split("."), r = n || "0", o = i || "000";
    return {
      formattedText: `${r}.${o}${e ? ` ${e}` : ""}`,
      value: r,
      decimals: o,
      symbol: e
    };
  },
  getApiUrl() {
    return C.W3M_API_URL;
  },
  getBlockchainApiUrl() {
    return C.BLOCKCHAIN_API_RPC_URL;
  },
  getAnalyticsUrl() {
    return C.PULSE_API_URL;
  },
  getUUID() {
    return crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseError(t) {
    var e, s;
    return typeof t == "string" ? t : typeof ((s = (e = t == null ? void 0 : t.issues) == null ? void 0 : e[0]) == null ? void 0 : s.message) == "string" ? t.issues[0].message : t instanceof Error ? t.message : "Unknown error";
  },
  sortRequestedNetworks(t, e = []) {
    const s = {};
    return e && t && (t.forEach((n, i) => {
      s[n] = i;
    }), e.sort((n, i) => {
      const r = s[n.id], o = s[i.id];
      return r !== void 0 && o !== void 0 ? r - o : r !== void 0 ? -1 : o !== void 0 ? 1 : 0;
    })), e;
  },
  calculateBalance(t) {
    let e = 0;
    for (const s of t)
      e += s.value ?? 0;
    return e;
  },
  formatTokenBalance(t) {
    const e = t.toFixed(2), [s, n] = e.split(".");
    return { dollars: s, pennies: n };
  },
  isAddress(t, e = "eip155") {
    switch (e) {
      case "eip155":
        if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t)) {
          if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t) || /^(?:0x)?[0-9A-F]{40}$/iu.test(t))
            return !0;
        } else return !1;
        return !1;
      case "solana":
        return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);
      case "bip122": {
        const s = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(t), n = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(t), i = /^bc1[a-z0-9]{39,87}$/u.test(t), r = /^bc1p[a-z0-9]{58}$/u.test(t);
        return s || n || i || r;
      }
      default:
        return !1;
    }
  },
  uniqueBy(t, e) {
    const s = /* @__PURE__ */ new Set();
    return t.filter((n) => {
      const i = n[e];
      return s.has(i) ? !1 : (s.add(i), !0);
    });
  },
  generateSdkVersion(t, e, s) {
    const i = t.length === 0 ? le.ADAPTER_TYPES.UNIVERSAL : t.map((r) => r.adapterType).join(",");
    return `${e}-${i}-${s}`;
  },
  // eslint-disable-next-line max-params
  createAccount(t, e, s, n, i) {
    return {
      namespace: t,
      address: e,
      type: s,
      publicKey: n,
      path: i
    };
  },
  isCaipAddress(t) {
    if (typeof t != "string")
      return !1;
    const e = t.split(":"), s = e[0];
    return e.filter(Boolean).length === 3 && s in C.CHAIN_NAME_MAP;
  },
  getAccount(t) {
    return t ? typeof t == "string" ? {
      address: t,
      chainId: void 0
    } : {
      address: t.address,
      chainId: t.chainId
    } : {
      address: void 0,
      chainId: void 0
    };
  },
  isMac() {
    const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return t.includes("macintosh") && !t.includes("safari");
  },
  formatTelegramSocialLoginUrl(t) {
    const e = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`, s = "state=";
    if (new URL(t).host === "auth.magic.link") {
      const i = "provider_authorization_url=", r = t.substring(t.indexOf(i) + i.length), o = this.injectIntoUrl(decodeURIComponent(r), s, e);
      return t.replace(r, encodeURIComponent(o));
    }
    return this.injectIntoUrl(t, s, e);
  },
  injectIntoUrl(t, e, s) {
    const n = t.indexOf(e);
    if (n === -1)
      throw new Error(`${e} parameter not found in the URL: ${t}`);
    const i = t.indexOf("&", n), r = e.length, o = i !== -1 ? i : t.length, a = t.substring(0, n + r), c = t.substring(n + r, o), l = t.substring(i), d = c + s;
    return a + d + l;
  },
  isNumber(t) {
    return typeof t != "number" && typeof t != "string" ? !1 : !isNaN(Number(t));
  }
}, Qu = "https://secure.walletconnect.org/sdk";
typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL;
typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL;
typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION;
const Vi = {
  STORAGE_KEY: "@appkit-wallet/",
  SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
}, Cs = {
  SAFE_RPC_METHODS: [
    "eth_accounts",
    "eth_blockNumber",
    "eth_call",
    "eth_chainId",
    "eth_estimateGas",
    "eth_feeHistory",
    "eth_gasPrice",
    "eth_getAccount",
    "eth_getBalance",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getCode",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getProof",
    "eth_getStorageAt",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_maxPriorityFeePerGas",
    "eth_newBlockFilter",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_sendRawTransaction",
    "eth_syncing",
    "eth_uninstallFilter",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "eth_getUserOperationReceipt",
    "eth_estimateUserOperationGas",
    "eth_getUserOperationByHash",
    "eth_supportedEntryPoints",
    "wallet_getAssets"
  ],
  NOT_SAFE_RPC_METHODS: [
    "personal_sign",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "solana_signMessage",
    "solana_signTransaction",
    "solana_signAllTransactions",
    "solana_signAndSendTransaction",
    "wallet_sendCalls",
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    "eth_sendUserOperation"
  ],
  GET_CHAIN_ID: "eth_chainId",
  RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
  RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
  ACCOUNT_TYPES: {
    EOA: "eoa",
    SMART_ACCOUNT: "smartAccount"
  }
}, eh = {
  set(t, e) {
    Tr.isClient && localStorage.setItem(`${Vi.STORAGE_KEY}${t}`, e);
  },
  get(t) {
    return Tr.isClient ? localStorage.getItem(`${Vi.STORAGE_KEY}${t}`) : null;
  },
  delete(t, e) {
    Tr.isClient && (e ? localStorage.removeItem(t) : localStorage.removeItem(`${Vi.STORAGE_KEY}${t}`));
  }
}, Tr = {
  isClient: typeof window < "u"
};
async function Vn(...t) {
  const e = await fetch(...t);
  if (!e.ok)
    throw new Error(`HTTP status code: ${e.status}`, {
      cause: e
    });
  return e;
}
class Ci {
  constructor({ baseUrl: e, clientId: s }) {
    this.baseUrl = e, this.clientId = s;
  }
  async get({ headers: e, signal: s, cache: n, ...i }) {
    const r = this.createUrl(i);
    return (await Vn(r, { method: "GET", headers: e, signal: s, cache: n })).json();
  }
  async getBlob({ headers: e, signal: s, ...n }) {
    const i = this.createUrl(n);
    return (await Vn(i, { method: "GET", headers: e, signal: s })).blob();
  }
  async post({ body: e, headers: s, signal: n, ...i }) {
    const r = this.createUrl(i);
    return (await Vn(r, {
      method: "POST",
      headers: s,
      body: e ? JSON.stringify(e) : void 0,
      signal: n
    })).json();
  }
  async put({ body: e, headers: s, signal: n, ...i }) {
    const r = this.createUrl(i);
    return (await Vn(r, {
      method: "PUT",
      headers: s,
      body: e ? JSON.stringify(e) : void 0,
      signal: n
    })).json();
  }
  async delete({ body: e, headers: s, signal: n, ...i }) {
    const r = this.createUrl(i);
    return (await Vn(r, {
      method: "DELETE",
      headers: s,
      body: e ? JSON.stringify(e) : void 0,
      signal: n
    })).json();
  }
  createUrl({ path: e, params: s }) {
    const n = new URL(e, this.baseUrl);
    return s && Object.entries(s).forEach(([i, r]) => {
      r && n.searchParams.append(i, r);
    }), this.clientId && n.searchParams.append("clientId", this.clientId), n;
  }
  sendBeacon({ body: e, ...s }) {
    const n = this.createUrl(s);
    return navigator.sendBeacon(n.toString(), e ? JSON.stringify(e) : void 0);
  }
}
const ao = {
  getFeatureValue(t, e) {
    const s = e == null ? void 0 : e[t];
    return s === void 0 ? le.DEFAULT_FEATURES[t] : s;
  },
  filterSocialsByPlatform(t) {
    if (!t || !t.length)
      return t;
    let e = t;
    return W.isTelegram() && (W.isIos() && (e = e.filter((s) => s !== "google")), W.isMac() && (e = e.filter((s) => s !== "x")), W.isAndroid() && (e = e.filter((s) => !["facebook", "x"].includes(s)))), W.isMobile() && (e = e.filter((s) => s !== "facebook")), e;
  },
  isSocialsEnabled() {
    var t, e, s, n;
    return Array.isArray((t = A.state.features) == null ? void 0 : t.socials) && ((e = A.state.features) == null ? void 0 : e.socials.length) > 0 || Array.isArray((s = A.state.remoteFeatures) == null ? void 0 : s.socials) && ((n = A.state.remoteFeatures) == null ? void 0 : n.socials.length) > 0;
  },
  isEmailEnabled() {
    var t, e;
    return !!((t = A.state.features) != null && t.email || (e = A.state.remoteFeatures) != null && e.email);
  }
}, Z = Pe({
  features: le.DEFAULT_FEATURES,
  projectId: "",
  sdkType: "appkit",
  sdkVersion: "html-wagmi-undefined",
  defaultAccountTypes: le.DEFAULT_ACCOUNT_TYPES,
  enableNetworkSwitch: !0,
  experimental_preferUniversalLinks: !1,
  remoteFeatures: {},
  enableMobileFullScreen: !1,
  coinbasePreference: "all"
}), A = {
  state: Z,
  subscribeKey(t, e) {
    return Ye(Z, t, e);
  },
  setOptions(t) {
    Object.assign(Z, t);
  },
  setRemoteFeatures(t) {
    var s, n;
    if (!t)
      return;
    const e = { ...Z.remoteFeatures, ...t };
    Z.remoteFeatures = e, (s = Z.remoteFeatures) != null && s.socials && (Z.remoteFeatures.socials = ao.filterSocialsByPlatform(Z.remoteFeatures.socials)), (n = Z.features) != null && n.pay && (Z.remoteFeatures.email = !1, Z.remoteFeatures.socials = !1);
  },
  setFeatures(t) {
    var s;
    if (!t)
      return;
    Z.features || (Z.features = le.DEFAULT_FEATURES);
    const e = { ...Z.features, ...t };
    Z.features = e, (s = Z.features) != null && s.pay && Z.remoteFeatures && (Z.remoteFeatures.email = !1, Z.remoteFeatures.socials = !1);
  },
  setProjectId(t) {
    Z.projectId = t;
  },
  setCustomRpcUrls(t) {
    Z.customRpcUrls = t;
  },
  setAllWallets(t) {
    Z.allWallets = t;
  },
  setIncludeWalletIds(t) {
    Z.includeWalletIds = t;
  },
  setExcludeWalletIds(t) {
    Z.excludeWalletIds = t;
  },
  setFeaturedWalletIds(t) {
    Z.featuredWalletIds = t;
  },
  setTokens(t) {
    Z.tokens = t;
  },
  setTermsConditionsUrl(t) {
    Z.termsConditionsUrl = t;
  },
  setPrivacyPolicyUrl(t) {
    Z.privacyPolicyUrl = t;
  },
  setCustomWallets(t) {
    Z.customWallets = t;
  },
  setIsSiweEnabled(t) {
    Z.isSiweEnabled = t;
  },
  setIsUniversalProvider(t) {
    Z.isUniversalProvider = t;
  },
  setSdkVersion(t) {
    Z.sdkVersion = t;
  },
  setMetadata(t) {
    Z.metadata = t;
  },
  setDisableAppend(t) {
    Z.disableAppend = t;
  },
  setEIP6963Enabled(t) {
    Z.enableEIP6963 = t;
  },
  setDebug(t) {
    Z.debug = t;
  },
  setEnableWalletGuide(t) {
    Z.enableWalletGuide = t;
  },
  setEnableAuthLogger(t) {
    Z.enableAuthLogger = t;
  },
  setEnableWallets(t) {
    Z.enableWallets = t;
  },
  setPreferUniversalLinks(t) {
    Z.experimental_preferUniversalLinks = t;
  },
  setSIWX(t) {
    if (t)
      for (const [e, s] of Object.entries(le.SIWX_DEFAULTS))
        t[e] ?? (t[e] = s);
    Z.siwx = t;
  },
  setConnectMethodsOrder(t) {
    Z.features = {
      ...Z.features,
      connectMethodsOrder: t
    };
  },
  setWalletFeaturesOrder(t) {
    Z.features = {
      ...Z.features,
      walletFeaturesOrder: t
    };
  },
  setSocialsOrder(t) {
    Z.remoteFeatures = {
      ...Z.remoteFeatures,
      socials: t
    };
  },
  setCollapseWallets(t) {
    Z.features = {
      ...Z.features,
      collapseWallets: t
    };
  },
  setEnableEmbedded(t) {
    Z.enableEmbedded = t;
  },
  setAllowUnsupportedChain(t) {
    Z.allowUnsupportedChain = t;
  },
  setManualWCControl(t) {
    Z.manualWCControl = t;
  },
  setEnableNetworkSwitch(t) {
    Z.enableNetworkSwitch = t;
  },
  setEnableMobileFullScreen(t) {
    Z.enableMobileFullScreen = W.isMobile() && t;
  },
  setEnableReconnect(t) {
    Z.enableReconnect = t;
  },
  setCoinbasePreference(t) {
    Z.coinbasePreference = t;
  },
  setDefaultAccountTypes(t = {}) {
    Object.entries(t).forEach(([e, s]) => {
      s && (Z.defaultAccountTypes[e] = s);
    });
  },
  setUniversalProviderConfigOverride(t) {
    Z.universalProviderConfigOverride = t;
  },
  getUniversalProviderConfigOverride() {
    return Z.universalProviderConfigOverride;
  },
  getSnapshot() {
    return gi(Z);
  }
}, tn = Object.freeze({
  message: "",
  variant: "success",
  svg: void 0,
  open: !1,
  autoClose: !0
}), Fe = Pe({
  ...tn
}), th = {
  state: Fe,
  subscribeKey(t, e) {
    return Ye(Fe, t, e);
  },
  showLoading(t, e = {}) {
    this._showMessage({ message: t, variant: "loading", ...e });
  },
  showSuccess(t) {
    this._showMessage({ message: t, variant: "success" });
  },
  showSvg(t, e) {
    this._showMessage({ message: t, svg: e });
  },
  showError(t) {
    const e = W.parseError(t);
    this._showMessage({ message: e, variant: "error" });
  },
  hide() {
    Fe.message = tn.message, Fe.variant = tn.variant, Fe.svg = tn.svg, Fe.open = tn.open, Fe.autoClose = tn.autoClose;
  },
  _showMessage({ message: t, svg: e, variant: s = "success", autoClose: n = tn.autoClose }) {
    Fe.open ? (Fe.open = !1, setTimeout(() => {
      Fe.message = t, Fe.variant = s, Fe.svg = e, Fe.open = !0, Fe.autoClose = n;
    }, 150)) : (Fe.message = t, Fe.variant = s, Fe.svg = e, Fe.open = !0, Fe.autoClose = n);
  }
}, rs = th, sh = {
  purchaseCurrencies: [
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "USD Coin",
      symbol: "USDC",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    },
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "Ether",
      symbol: "ETH",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    }
  ],
  paymentCurrencies: [
    {
      id: "USD",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    },
    {
      id: "EUR",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    }
  ]
}, Ll = W.getBlockchainApiUrl(), nt = Pe({
  clientId: null,
  api: new Ci({ baseUrl: Ll, clientId: null }),
  supportedChains: { http: [], ws: [] }
}), te = {
  state: nt,
  async get(t) {
    const { st: e, sv: s } = te.getSdkProperties(), n = A.state.projectId, i = {
      ...t.params || {},
      st: e,
      sv: s,
      projectId: n
    };
    return nt.api.get({
      ...t,
      params: i
    });
  },
  getSdkProperties() {
    const { sdkType: t, sdkVersion: e } = A.state;
    return {
      st: t || "unknown",
      sv: e || "unknown"
    };
  },
  async isNetworkSupported(t) {
    if (!t)
      return !1;
    try {
      nt.supportedChains.http.length || await te.getSupportedNetworks();
    } catch {
      return !1;
    }
    return nt.supportedChains.http.includes(t);
  },
  async getSupportedNetworks() {
    try {
      const t = await te.get({
        path: "v1/supported-chains"
      });
      return nt.supportedChains = t, t;
    } catch {
      return nt.supportedChains;
    }
  },
  async fetchIdentity({ address: t }) {
    const e = k.getIdentityFromCacheForAddress(t);
    if (e)
      return e;
    const s = await te.get({
      path: `/v1/identity/${t}`,
      params: {
        sender: f.state.activeCaipAddress ? W.getPlainAddress(f.state.activeCaipAddress) : void 0
      }
    });
    return k.updateIdentityCache({
      address: t,
      identity: s,
      timestamp: Date.now()
    }), s;
  },
  async fetchTransactions({ account: t, cursor: e, signal: s, cache: n, chainId: i }) {
    var c;
    if (!await te.isNetworkSupported((c = f.state.activeCaipNetwork) == null ? void 0 : c.caipNetworkId))
      return { data: [], next: void 0 };
    const o = k.getTransactionsCacheForAddress({
      address: t,
      chainId: i
    });
    if (o)
      return o;
    const a = await te.get({
      path: `/v1/account/${t}/history`,
      params: {
        cursor: e,
        chainId: i
      },
      signal: s,
      cache: n
    });
    return k.updateTransactionsCache({
      address: t,
      chainId: i,
      timestamp: Date.now(),
      transactions: a
    }), a;
  },
  async fetchSwapQuote({ amount: t, userAddress: e, from: s, to: n, gasPrice: i }) {
    var o;
    return await te.isNetworkSupported((o = f.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId) ? te.get({
      path: "/v1/convert/quotes",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        amount: t,
        userAddress: e,
        from: s,
        to: n,
        gasPrice: i
      }
    }) : { quotes: [] };
  },
  async fetchSwapTokens({ chainId: t }) {
    var s;
    return await te.isNetworkSupported((s = f.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? te.get({
      path: "/v1/convert/tokens",
      params: { chainId: t }
    }) : { tokens: [] };
  },
  async getAddressBalance({ caipNetworkId: t, address: e }) {
    return nt.api.post({
      path: `/v1?chainId=${t}&projectId=${A.state.projectId}`,
      body: {
        id: "1",
        jsonrpc: "2.0",
        method: "getAddressBalance",
        params: { address: e }
      }
    }).then((s) => s.result);
  },
  async fetchTokenPrice({ addresses: t, caipNetworkId: e = ((s) => (s = f.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId)() }) {
    if (!await te.isNetworkSupported(e))
      return { fungibles: [] };
    const i = k.getTokenPriceCacheForAddresses(t);
    if (i)
      return i;
    const r = await nt.api.post({
      path: "/v1/fungible/price",
      body: {
        currency: "usd",
        addresses: t,
        projectId: A.state.projectId
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
    return k.updateTokenPriceCache({
      addresses: t,
      timestamp: Date.now(),
      tokenPrice: r
    }), r;
  },
  async fetchSwapAllowance({ tokenAddress: t, userAddress: e }) {
    var n;
    return await te.isNetworkSupported((n = f.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) ? te.get({
      path: "/v1/convert/allowance",
      params: {
        tokenAddress: t,
        userAddress: e
      },
      headers: {
        "Content-Type": "application/json"
      }
    }) : { allowance: "0" };
  },
  async fetchGasPrice({ chainId: t }) {
    var i;
    const { st: e, sv: s } = te.getSdkProperties();
    if (!await te.isNetworkSupported((i = f.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId))
      throw new Error("Network not supported for Gas Price");
    return te.get({
      path: "/v1/convert/gas-price",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        chainId: t,
        st: e,
        sv: s
      }
    });
  },
  async generateSwapCalldata({ amount: t, from: e, to: s, userAddress: n, disableEstimate: i }) {
    var o;
    if (!await te.isNetworkSupported((o = f.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId))
      throw new Error("Network not supported for Swaps");
    return nt.api.post({
      path: "/v1/convert/build-transaction",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        amount: t,
        eip155: {
          slippage: le.CONVERT_SLIPPAGE_TOLERANCE
        },
        projectId: A.state.projectId,
        from: e,
        to: s,
        userAddress: n,
        disableEstimate: i
      }
    });
  },
  async generateApproveCalldata({ from: t, to: e, userAddress: s }) {
    var o;
    const { st: n, sv: i } = te.getSdkProperties();
    if (!await te.isNetworkSupported((o = f.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId))
      throw new Error("Network not supported for Swaps");
    return te.get({
      path: "/v1/convert/build-approve",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        userAddress: s,
        from: t,
        to: e,
        st: n,
        sv: i
      }
    });
  },
  async getBalance(t, e, s) {
    var l;
    const { st: n, sv: i } = te.getSdkProperties();
    if (!await te.isNetworkSupported((l = f.state.activeCaipNetwork) == null ? void 0 : l.caipNetworkId))
      return rs.showError("Token Balance Unavailable"), { balances: [] };
    const o = `${e}:${t}`, a = k.getBalanceCacheForCaipAddress(o);
    if (a)
      return a;
    const c = await te.get({
      path: `/v1/account/${t}/balance`,
      params: {
        currency: "usd",
        chainId: e,
        forceUpdate: s,
        st: n,
        sv: i
      }
    });
    return k.updateBalanceCache({
      caipAddress: o,
      balance: c,
      timestamp: Date.now()
    }), c;
  },
  async lookupEnsName(t) {
    var s;
    return await te.isNetworkSupported((s = f.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? te.get({
      path: `/v1/profile/account/${t}`,
      params: { apiVersion: "2" }
    }) : { addresses: {}, attributes: [] };
  },
  async reverseLookupEnsName({ address: t }) {
    var n, i;
    if (!await te.isNetworkSupported((n = f.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId))
      return [];
    const s = (i = f.getAccountData()) == null ? void 0 : i.address;
    return te.get({
      path: `/v1/profile/reverse/${t}`,
      params: {
        sender: s,
        apiVersion: "2"
      }
    });
  },
  async getEnsNameSuggestions(t) {
    var s;
    return await te.isNetworkSupported((s = f.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? te.get({
      path: `/v1/profile/suggestions/${t}`,
      params: { zone: "reown.id" }
    }) : { suggestions: [] };
  },
  async registerEnsName({ coinType: t, address: e, message: s, signature: n }) {
    var r;
    return await te.isNetworkSupported((r = f.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId) ? nt.api.post({
      path: "/v1/profile/account",
      body: { coin_type: t, address: e, message: s, signature: n },
      headers: {
        "Content-Type": "application/json"
      }
    }) : { success: !1 };
  },
  async generateOnRampURL({ destinationWallets: t, partnerUserId: e, defaultNetwork: s, purchaseAmount: n, paymentAmount: i }) {
    var a;
    return await te.isNetworkSupported((a = f.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId) ? (await nt.api.post({
      path: "/v1/generators/onrampurl",
      params: {
        projectId: A.state.projectId
      },
      body: {
        destinationWallets: t,
        defaultNetwork: s,
        partnerUserId: e,
        defaultExperience: "buy",
        presetCryptoAmount: n,
        presetFiatAmount: i
      }
    })).url : "";
  },
  async getOnrampOptions() {
    var e;
    if (!await te.isNetworkSupported((e = f.state.activeCaipNetwork) == null ? void 0 : e.caipNetworkId))
      return { paymentCurrencies: [], purchaseCurrencies: [] };
    try {
      return await te.get({
        path: "/v1/onramp/options"
      });
    } catch {
      return sh;
    }
  },
  async getOnrampQuote({ purchaseCurrency: t, paymentCurrency: e, amount: s, network: n }) {
    var i;
    try {
      return await te.isNetworkSupported((i = f.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId) ? await nt.api.post({
        path: "/v1/onramp/quote",
        params: {
          projectId: A.state.projectId
        },
        body: {
          purchaseCurrency: t,
          paymentCurrency: e,
          amount: s,
          network: n
        }
      }) : null;
    } catch {
      return {
        networkFee: { amount: s, currency: e.id },
        paymentSubtotal: { amount: s, currency: e.id },
        paymentTotal: { amount: s, currency: e.id },
        purchaseAmount: { amount: s, currency: e.id },
        quoteId: "mocked-quote-id"
      };
    }
  },
  async getSmartSessions(t) {
    var s;
    return await te.isNetworkSupported((s = f.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? te.get({
      path: `/v1/sessions/${t}`
    }) : [];
  },
  async revokeSmartSession(t, e, s) {
    var i;
    return await te.isNetworkSupported((i = f.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId) ? nt.api.post({
      path: `/v1/sessions/${t}/revoke`,
      params: {
        projectId: A.state.projectId
      },
      body: {
        pci: e,
        signature: s
      }
    }) : { success: !1 };
  },
  setClientId(t) {
    nt.clientId = t, nt.api = new Ci({ baseUrl: Ll, clientId: t });
  }
}, nh = Object.freeze({
  enabled: !0,
  events: []
}), ih = new Ci({ baseUrl: W.getAnalyticsUrl(), clientId: null }), rh = 5, oh = 60 * 1e3, ks = Pe({
  ...nh
}), ah = {
  state: ks,
  subscribeKey(t, e) {
    return Ye(ks, t, e);
  },
  async sendError(t, e) {
    if (!ks.enabled)
      return;
    const s = Date.now();
    if (ks.events.filter((r) => {
      const o = new Date(r.properties.timestamp || "").getTime();
      return s - o < oh;
    }).length >= rh)
      return;
    const i = {
      type: "error",
      event: e,
      properties: {
        errorType: t.name,
        errorMessage: t.message,
        stackTrace: t.stack,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    ks.events.push(i);
    try {
      if (typeof window > "u")
        return;
      const { projectId: r, sdkType: o, sdkVersion: a } = A.state;
      await ih.post({
        path: "/e",
        params: {
          projectId: r,
          st: o,
          sv: a || "html-wagmi-4.2.2"
        },
        body: {
          eventId: W.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          props: {
            type: "error",
            event: e,
            errorType: t.name,
            errorMessage: t.message,
            stackTrace: t.stack
          }
        }
      });
    } catch {
    }
  },
  enable() {
    ks.enabled = !0;
  },
  disable() {
    ks.enabled = !1;
  },
  clearEvents() {
    ks.events = [];
  }
};
class pn extends Error {
  constructor(e, s, n) {
    super(e), this.originalName = "AppKitError", this.name = "AppKitError", this.category = s, this.originalError = n, n && n instanceof Error && (this.originalName = n.name), Object.setPrototypeOf(this, pn.prototype);
    let i = !1;
    if (n instanceof Error && typeof n.stack == "string" && n.stack) {
      const r = n.stack, o = r.indexOf(`
`);
      if (o > -1) {
        const a = r.substring(o + 1);
        this.stack = `${this.name}: ${this.message}
${a}`, i = !0;
      }
    }
    i || (Error.captureStackTrace ? Error.captureStackTrace(this, pn) : this.stack || (this.stack = `${this.name}: ${this.message}`));
  }
}
function _a(t, e) {
  let s = "";
  try {
    t instanceof Error ? s = t.message : typeof t == "string" ? s = t : typeof t == "object" && t !== null ? Object.keys(t).length === 0 ? s = "Unknown error" : s = (t == null ? void 0 : t.message) || JSON.stringify(t) : s = String(t);
  } catch (i) {
    s = "Unknown error", console.error("Error parsing error message", i);
  }
  const n = t instanceof pn ? t : new pn(s, e, t);
  throw ah.sendError(n, n.category), n;
}
function Ft(t, e = "INTERNAL_SDK_ERROR") {
  const s = {};
  return Object.keys(t).forEach((n) => {
    const i = t[n];
    if (typeof i == "function") {
      let r = i;
      i.constructor.name === "AsyncFunction" ? r = async (...o) => {
        try {
          return await i(...o);
        } catch (a) {
          return _a(a, e);
        }
      } : r = (...o) => {
        try {
          return i(...o);
        } catch (a) {
          return _a(a, e);
        }
      }, s[n] = r;
    } else
      s[n] = i;
  }), s;
}
const mt = Pe({
  walletImages: {},
  networkImages: {},
  chainImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
}), ch = {
  state: mt,
  subscribeNetworkImages(t) {
    return st(mt.networkImages, () => t(mt.networkImages));
  },
  subscribeKey(t, e) {
    return Ye(mt, t, e);
  },
  subscribe(t) {
    return st(mt, () => t(mt));
  },
  setWalletImage(t, e) {
    mt.walletImages[t] = e;
  },
  setNetworkImage(t, e) {
    mt.networkImages[t] = e;
  },
  setChainImage(t, e) {
    mt.chainImages[t] = e;
  },
  setConnectorImage(t, e) {
    mt.connectorImages = { ...mt.connectorImages, [t]: e };
  },
  setTokenImage(t, e) {
    mt.tokenImages[t] = e;
  },
  setCurrencyImage(t, e) {
    mt.currencyImages[t] = e;
  }
}, Dt = Ft(ch), Ta = {
  // Ethereum
  eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
  // Solana
  solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
  // Polkadot
  polkadot: "",
  // Bitcoin
  bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
  // Cosmos
  cosmos: "",
  // Sui
  sui: "",
  // Stacks
  stacks: "",
  // TON
  ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
}, Cn = Pe({
  networkImagePromises: {},
  tokenImagePromises: {}
}), Qi = {
  async fetchWalletImage(t) {
    if (t)
      return await V._fetchWalletImage(t), this.getWalletImageById(t);
  },
  async fetchNetworkImage(t) {
    if (!t)
      return;
    const e = this.getNetworkImageById(t);
    return e || (Cn.networkImagePromises[t] || (Cn.networkImagePromises[t] = V._fetchNetworkImage(t)), await Cn.networkImagePromises[t], this.getNetworkImageById(t));
  },
  /**
   * Fetches the token image for the given image ID.
   * @param imageId - The image id of the token.
   * @returns The token image.
   */
  async fetchTokenImage(t) {
    if (t)
      return Cn.tokenImagePromises[t] || (Cn.tokenImagePromises[t] = V._fetchTokenImage(t)), await Cn.tokenImagePromises[t], this.getTokenImage(t);
  },
  getWalletImageById(t) {
    if (t)
      return Dt.state.walletImages[t];
  },
  getWalletImage(t) {
    if (t != null && t.image_url)
      return t == null ? void 0 : t.image_url;
    if (t != null && t.image_id)
      return Dt.state.walletImages[t.image_id];
  },
  getNetworkImage(t) {
    var e, s, n;
    if ((e = t == null ? void 0 : t.assets) != null && e.imageUrl)
      return (s = t == null ? void 0 : t.assets) == null ? void 0 : s.imageUrl;
    if ((n = t == null ? void 0 : t.assets) != null && n.imageId)
      return Dt.state.networkImages[t.assets.imageId];
  },
  getNetworkImageById(t) {
    if (t)
      return Dt.state.networkImages[t];
  },
  getConnectorImage(t) {
    var e;
    if (t != null && t.imageUrl)
      return t.imageUrl;
    if ((e = t == null ? void 0 : t.info) != null && e.icon)
      return t.info.icon;
    if (t != null && t.imageId)
      return Dt.state.connectorImages[t.imageId];
  },
  getChainImage(t) {
    return Dt.state.networkImages[Ta[t]];
  },
  getTokenImage(t) {
    if (t)
      return Dt.state.tokenImages[t];
  },
  /**
   * Get the explorer wallet's image URL for the given image ID.
   * @param imageId - The image id of the wallet.
   * @returns The image URL for the wallet.
   */
  getWalletImageUrl(t) {
    if (!t)
      return "";
    const { projectId: e, sdkType: s, sdkVersion: n } = A.state, i = new URL(`${C.W3M_API_URL}/getWalletImage/${t}`);
    return i.searchParams.set("projectId", e), i.searchParams.set("st", s), i.searchParams.set("sv", n), i.toString();
  },
  /**
   * Get the public asset's image URL with the given image ID.
   * @param imageId - The image id of the asset.
   * @returns The image URL for the asset.
   */
  getAssetImageUrl(t) {
    if (!t)
      return "";
    const { projectId: e, sdkType: s, sdkVersion: n } = A.state, i = new URL(`${C.W3M_API_URL}/public/getAssetImage/${t}`);
    return i.searchParams.set("projectId", e), i.searchParams.set("st", s), i.searchParams.set("sv", n), i.toString();
  },
  /**
   * Get the image URL for the given chain namespace.
   * @param chainNamespace - The chain namespace to get the image URL for.
   * @returns The image URL for the chain namespace.
   */
  getChainNamespaceImageUrl(t) {
    return this.getAssetImageUrl(Ta[t]);
  },
  /**
   * Get the image id for the given token and namespace.
   * @param token - The token address or 'native' to get the image id for.
   * @param namespace - The namespace to get the image id for.
   * @returns The image URL for the token.
   */
  async getImageByToken(t, e) {
    if (t === "native") {
      const n = C.NATIVE_IMAGE_IDS_BY_NAMESPACE[e] ?? null;
      return n ? Qi.fetchNetworkImage(n) : void 0;
    }
    const [, s] = Object.entries(C.TOKEN_SYMBOLS_BY_ADDRESS).find(([n]) => n.toLowerCase() === t.toLowerCase()) ?? [];
    if (s)
      return Qi.fetchTokenImage(s);
  }
}, Pt = {
  PHANTOM: {
    id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
    url: "https://phantom.app"
  },
  SOLFLARE: {
    id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    url: "https://solflare.com"
  },
  COINBASE: {
    id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    url: "https://go.cb-w.com"
  },
  /*
   * Got details from their npm package:
   * https://www.npmjs.com/package/@binance/w3w-utils?activeTab=code
   * https://developers.binance.com/docs/binance-w3w/evm-compatible-provider#getdeeplink
   */
  BINANCE: {
    id: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",
    appId: "yFK5FCqYprrXDiVFbhyRx7",
    deeplink: "bnc://app.binance.com/mp/app",
    url: "https://app.binance.com/en/download"
  }
}, lh = {
  /**
   * Handles mobile wallet redirection for wallets that have Universal Links and doesn't support WalletConnect Deep Links.
   *
   * @param {string} id - The id of the wallet.
   * @param {ChainNamespace} namespace - The namespace of the chain.
   */
  handleMobileDeeplinkRedirect(t, e) {
    const s = window.location.href, n = encodeURIComponent(s);
    if (t === Pt.PHANTOM.id && !("phantom" in window)) {
      const i = s.startsWith("https") ? "https" : "http", r = s.split("/")[2], o = encodeURIComponent(`${i}://${r}`);
      window.location.href = `${Pt.PHANTOM.url}/ul/browse/${n}?ref=${o}`;
    }
    if (t === Pt.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${Pt.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`), e === C.CHAIN.SOLANA && t === Pt.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${Pt.COINBASE.url}/dapp?cb_url=${n}`), e === C.CHAIN.BITCOIN && t === Pt.BINANCE.id && !("binancew3w" in window)) {
      const i = f.state.activeCaipNetwork, r = window.btoa("/pages/browser/index"), o = window.btoa(`url=${n}&defaultChainId=${(i == null ? void 0 : i.id) ?? 1}`), a = new URL(Pt.BINANCE.deeplink);
      a.searchParams.set("appId", Pt.BINANCE.appId), a.searchParams.set("startPagePath", r), a.searchParams.set("startPageQuery", o);
      const c = new URL(Pt.BINANCE.url);
      c.searchParams.set("_dp", window.btoa(a.toString())), window.location.href = c.toString();
    }
  }
}, dh = W.getAnalyticsUrl(), uh = new Ci({ baseUrl: dh, clientId: null }), hh = ["MODAL_CREATED"], ph = 45, Oa = 1e3 * 10, Re = Pe({
  timestamp: Date.now(),
  lastFlush: Date.now(),
  reportedErrors: {},
  data: {
    type: "track",
    event: "MODAL_CREATED"
  },
  pendingEvents: [],
  subscribedToVisibilityChange: !1,
  walletImpressions: []
}), oe = {
  state: Re,
  subscribe(t) {
    return st(Re, () => t(Re));
  },
  getSdkProperties() {
    const { projectId: t, sdkType: e, sdkVersion: s } = A.state;
    return {
      projectId: t,
      st: e,
      sv: s || "html-wagmi-4.2.2"
    };
  },
  shouldFlushEvents() {
    const t = JSON.stringify(Re.pendingEvents).length / 1024 > ph, e = Re.lastFlush + Oa < Date.now();
    return t || e;
  },
  _setPendingEvent(t) {
    var e, s;
    try {
      let n = (e = f.getAccountData()) == null ? void 0 : e.address;
      if ("address" in t.data && t.data.address && (n = t.data.address), hh.includes(t.data.event) || typeof window > "u")
        return;
      const i = (s = f.getActiveCaipNetwork()) == null ? void 0 : s.caipNetworkId;
      this.state.pendingEvents.push({
        eventId: W.getUUID(),
        url: window.location.href,
        domain: window.location.hostname,
        timestamp: t.timestamp,
        props: {
          ...t.data,
          address: n,
          properties: {
            ..."properties" in t.data ? t.data.properties : {},
            caipNetworkId: i
          }
        }
      }), Re.reportedErrors.FORBIDDEN = !1, oe.shouldFlushEvents() && oe._submitPendingEvents();
    } catch (n) {
      console.warn("_setPendingEvent", n);
    }
  },
  sendEvent(t) {
    var s;
    Re.timestamp = Date.now(), Re.data = t;
    const e = [
      "INITIALIZE",
      "CONNECT_SUCCESS",
      "SOCIAL_LOGIN_SUCCESS"
    ];
    ((s = A.state.features) != null && s.analytics || e.includes(t.event)) && oe._setPendingEvent(Re), this.subscribeToFlushTriggers();
  },
  /**
   * Adds a wallet impression item to the aggregated list. These are flushed as a single
   * WALLET_IMPRESSION_V2 batch in _submitPendingEvents.
   */
  sendWalletImpressionEvent(t) {
    Re.walletImpressions.push(t);
  },
  _transformPendingEventsForBatch(t) {
    try {
      return t.filter((e) => e.props.event !== "WALLET_IMPRESSION_V2");
    } catch {
      return t;
    }
  },
  _submitPendingEvents() {
    if (Re.lastFlush = Date.now(), !(Re.pendingEvents.length === 0 && Re.walletImpressions.length === 0))
      try {
        const t = oe._transformPendingEventsForBatch(Re.pendingEvents);
        Re.walletImpressions.length && t.push({
          eventId: W.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: Date.now(),
          props: {
            type: "track",
            event: "WALLET_IMPRESSION_V2",
            items: [...Re.walletImpressions]
          }
        }), uh.sendBeacon({
          path: "/batch",
          params: oe.getSdkProperties(),
          body: t
        }), Re.reportedErrors.FORBIDDEN = !1, Re.pendingEvents = [], Re.walletImpressions = [];
      } catch {
        Re.reportedErrors.FORBIDDEN = !0;
      }
  },
  subscribeToFlushTriggers() {
    var t, e, s;
    Re.subscribedToVisibilityChange || typeof document > "u" || (Re.subscribedToVisibilityChange = !0, (t = document == null ? void 0 : document.addEventListener) == null || t.call(document, "visibilitychange", () => {
      document.visibilityState === "hidden" && oe._submitPendingEvents();
    }), (e = document == null ? void 0 : document.addEventListener) == null || e.call(document, "freeze", () => {
      oe._submitPendingEvents();
    }), (s = window == null ? void 0 : window.addEventListener) == null || s.call(window, "pagehide", () => {
      oe._submitPendingEvents();
    }), setInterval(() => {
      oe._submitPendingEvents();
    }, Oa));
  }
}, fh = W.getApiUrl(), it = new Ci({
  baseUrl: fh,
  clientId: null
}), gh = 40, ka = 4, mh = 20, ie = Pe({
  promises: {},
  page: 1,
  count: 0,
  featured: [],
  allFeatured: [],
  recommended: [],
  allRecommended: [],
  wallets: [],
  filteredWallets: [],
  search: [],
  isAnalyticsEnabled: !1,
  excludedWallets: [],
  isFetchingRecommendedWallets: !1,
  explorerWallets: [],
  explorerFilteredWallets: [],
  plan: {
    tier: "none",
    hasExceededUsageLimit: !1,
    limits: {
      isAboveRpcLimit: !1,
      isAboveMauLimit: !1
    }
  }
}), V = {
  state: ie,
  subscribeKey(t, e) {
    return Ye(ie, t, e);
  },
  _getSdkProperties() {
    const { projectId: t, sdkType: e, sdkVersion: s } = A.state;
    return {
      projectId: t,
      st: e || "appkit",
      sv: s || "html-wagmi-4.2.2"
    };
  },
  _filterOutExtensions(t) {
    return A.state.isUniversalProvider ? t.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t;
  },
  async _fetchWalletImage(t) {
    const e = `${it.baseUrl}/getWalletImage/${t}`, s = await it.getBlob({ path: e, params: V._getSdkProperties() });
    Dt.setWalletImage(t, URL.createObjectURL(s));
  },
  async _fetchNetworkImage(t) {
    const e = `${it.baseUrl}/public/getAssetImage/${t}`, s = await it.getBlob({ path: e, params: V._getSdkProperties() });
    Dt.setNetworkImage(t, URL.createObjectURL(s));
  },
  async _fetchConnectorImage(t) {
    const e = `${it.baseUrl}/public/getAssetImage/${t}`, s = await it.getBlob({ path: e, params: V._getSdkProperties() });
    Dt.setConnectorImage(t, URL.createObjectURL(s));
  },
  async _fetchCurrencyImage(t) {
    const e = `${it.baseUrl}/public/getCurrencyImage/${t}`, s = await it.getBlob({ path: e, params: V._getSdkProperties() });
    Dt.setCurrencyImage(t, URL.createObjectURL(s));
  },
  async _fetchTokenImage(t) {
    const e = `${it.baseUrl}/public/getTokenImage/${t}`, s = await it.getBlob({ path: e, params: V._getSdkProperties() });
    Dt.setTokenImage(t, URL.createObjectURL(s));
  },
  _filterWalletsByPlatform(t) {
    const e = t.length, s = W.isMobile() ? t == null ? void 0 : t.filter((i) => i.mobile_link || i.webapp_link ? !0 : Object.values(Pt).map((o) => o.id).includes(i.id)) : t, n = e - s.length;
    return { filteredWallets: s, mobileFilteredOutWalletsLength: n };
  },
  async fetchProjectConfig() {
    return (await it.get({
      path: "/appkit/v1/config",
      params: V._getSdkProperties()
    })).features;
  },
  async fetchUsage() {
    try {
      const t = await it.get({
        path: "/appkit/v1/project-limits",
        params: V._getSdkProperties()
      }), { tier: e, isAboveMauLimit: s, isAboveRpcLimit: n } = t.planLimits, i = e === "starter", r = s || n;
      V.state.plan = {
        tier: e,
        hasExceededUsageLimit: i && r,
        limits: {
          isAboveRpcLimit: n,
          isAboveMauLimit: s
        }
      };
    } catch (t) {
      console.warn("Failed to fetch usage", t);
    }
  },
  async fetchAllowedOrigins() {
    try {
      const { allowedOrigins: t } = await it.get({
        path: "/projects/v1/origins",
        params: V._getSdkProperties()
      });
      return t;
    } catch (t) {
      if (t instanceof Error && t.cause instanceof Response) {
        const e = t.cause.status;
        if (e === C.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)
          throw new Error("RATE_LIMITED", { cause: t });
        if (e >= C.HTTP_STATUS_CODES.SERVER_ERROR && e < 600)
          throw new Error("SERVER_ERROR", { cause: t });
        return [];
      }
      return [];
    }
  },
  async fetchNetworkImages() {
    const t = f.getAllRequestedCaipNetworks(), e = t == null ? void 0 : t.map(({ assets: s }) => s == null ? void 0 : s.imageId).filter(Boolean).filter((s) => !Qi.getNetworkImageById(s));
    e && await Promise.allSettled(e.map((s) => V._fetchNetworkImage(s)));
  },
  async fetchConnectorImages() {
    const { connectors: t } = R.state, e = t.map(({ imageId: s }) => s).filter(Boolean);
    await Promise.allSettled(e.map((s) => V._fetchConnectorImage(s)));
  },
  async fetchCurrencyImages(t = []) {
    await Promise.allSettled(t.map((e) => V._fetchCurrencyImage(e)));
  },
  async fetchTokenImages(t = []) {
    await Promise.allSettled(t.map((e) => V._fetchTokenImage(e)));
  },
  async fetchWallets(t) {
    var o;
    const e = t.exclude ?? [];
    V._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(Pt).map((a) => a.id));
    const n = await it.get({
      path: "/getWallets",
      params: {
        ...V._getSdkProperties(),
        ...t,
        page: String(t.page),
        entries: String(t.entries),
        include: (o = t.include) == null ? void 0 : o.join(","),
        exclude: e.join(",")
      }
    }), { filteredWallets: i, mobileFilteredOutWalletsLength: r } = V._filterWalletsByPlatform(n == null ? void 0 : n.data);
    return {
      data: i || [],
      // Keep original count for display on main page
      count: n == null ? void 0 : n.count,
      mobileFilteredOutWalletsLength: r
    };
  },
  async prefetchWalletRanks() {
    const t = R.state.connectors;
    if (!(t != null && t.length))
      return;
    const e = {
      page: 1,
      entries: 20,
      badge: "certified"
    };
    if (e.names = t.map((i) => i.name).join(","), f.state.activeChain === C.CHAIN.EVM) {
      const i = [
        ...t.flatMap((r) => {
          var o;
          return ((o = r.connectors) == null ? void 0 : o.map((a) => {
            var c;
            return (c = a.info) == null ? void 0 : c.rdns;
          })) || [];
        }),
        ...t.map((r) => {
          var o;
          return (o = r.info) == null ? void 0 : o.rdns;
        })
      ].filter((r) => typeof r == "string" && r.length > 0);
      i.length && (e.rdns = i.join(","));
    }
    const { data: s } = await V.fetchWallets(e);
    ie.explorerWallets = s, R.extendConnectorsWithExplorerWallets(s);
    const n = f.getRequestedCaipNetworkIds().join(",");
    ie.explorerFilteredWallets = s.filter((i) => {
      var r;
      return (r = i.chains) == null ? void 0 : r.some((o) => n.includes(o));
    });
  },
  async fetchFeaturedWallets() {
    const { featuredWalletIds: t } = A.state;
    if (t != null && t.length) {
      const e = {
        ...V._getSdkProperties(),
        page: 1,
        entries: (t == null ? void 0 : t.length) ?? ka,
        include: t
      }, { data: s } = await V.fetchWallets(e), n = [...s].sort((r, o) => t.indexOf(r.id) - t.indexOf(o.id)), i = n.map((r) => r.image_id).filter(Boolean);
      await Promise.allSettled(i.map((r) => V._fetchWalletImage(r))), ie.featured = n, ie.allFeatured = n;
    }
  },
  async fetchRecommendedWallets() {
    try {
      ie.isFetchingRecommendedWallets = !0;
      const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: s } = A.state, n = [...e ?? [], ...s ?? []].filter(Boolean), i = f.getRequestedCaipNetworkIds().join(","), r = {
        page: 1,
        entries: ka,
        include: t,
        exclude: n,
        chains: i
      }, { data: o, count: a } = await V.fetchWallets(r), c = k.getRecentWallets(), l = o.map((u) => u.image_id).filter(Boolean), d = c.map((u) => u.image_id).filter(Boolean);
      await Promise.allSettled([...l, ...d].map((u) => V._fetchWalletImage(u))), ie.recommended = o, ie.allRecommended = o, ie.count = a ?? 0;
    } catch {
    } finally {
      ie.isFetchingRecommendedWallets = !1;
    }
  },
  async fetchWalletsByPage({ page: t }) {
    const { includeWalletIds: e, excludeWalletIds: s, featuredWalletIds: n } = A.state, i = f.getRequestedCaipNetworkIds().join(","), r = [
      ...ie.recommended.map(({ id: u }) => u),
      ...s ?? [],
      ...n ?? []
    ].filter(Boolean), o = {
      page: t,
      entries: gh,
      include: e,
      exclude: r,
      chains: i
    }, { data: a, count: c, mobileFilteredOutWalletsLength: l } = await V.fetchWallets(o);
    ie.mobileFilteredOutWalletsLength = l + (ie.mobileFilteredOutWalletsLength ?? 0);
    const d = a.slice(0, mh).map((u) => u.image_id).filter(Boolean);
    await Promise.allSettled(d.map((u) => V._fetchWalletImage(u))), ie.wallets = W.uniqueBy([...ie.wallets, ...V._filterOutExtensions(a)], "id").filter((u) => {
      var h;
      return (h = u.chains) == null ? void 0 : h.some((p) => i.includes(p));
    }), ie.count = c > ie.count ? c : ie.count, ie.page = t;
  },
  async initializeExcludedWallets({ ids: t }) {
    const e = {
      page: 1,
      entries: t.length,
      include: t
    }, { data: s } = await V.fetchWallets(e);
    s && s.forEach((n) => {
      ie.excludedWallets.push({ rdns: n.rdns, name: n.name });
    });
  },
  async searchWallet({ search: t, badge: e }) {
    const { includeWalletIds: s, excludeWalletIds: n } = A.state, i = f.getRequestedCaipNetworkIds().join(",");
    ie.search = [];
    const r = {
      page: 1,
      entries: 100,
      search: t == null ? void 0 : t.trim(),
      badge_type: e,
      include: s,
      exclude: n,
      chains: i
    }, { data: o } = await V.fetchWallets(r);
    oe.sendEvent({
      type: "track",
      event: "SEARCH_WALLET",
      properties: { badge: e ?? "", search: t ?? "" }
    });
    const a = o.map((c) => c.image_id).filter(Boolean);
    await Promise.allSettled([
      ...a.map((c) => V._fetchWalletImage(c)),
      W.wait(300)
    ]), ie.search = V._filterOutExtensions(o);
  },
  initPromise(t, e) {
    const s = ie.promises[t];
    return s || (ie.promises[t] = e());
  },
  prefetch({ fetchConnectorImages: t = !0, fetchFeaturedWallets: e = !0, fetchRecommendedWallets: s = !0, fetchNetworkImages: n = !0, fetchWalletRanks: i = !0 } = {}) {
    const r = [
      t && V.initPromise("connectorImages", V.fetchConnectorImages),
      e && V.initPromise("featuredWallets", V.fetchFeaturedWallets),
      s && V.initPromise("recommendedWallets", V.fetchRecommendedWallets),
      n && V.initPromise("networkImages", V.fetchNetworkImages),
      i && V.initPromise("walletRanks", V.prefetchWalletRanks)
    ].filter(Boolean);
    return Promise.allSettled(r);
  },
  prefetchAnalyticsConfig() {
    var t;
    (t = A.state.features) != null && t.analytics && V.fetchAnalyticsConfig();
  },
  async fetchAnalyticsConfig() {
    try {
      const { isAnalyticsEnabled: t } = await it.get({
        path: "/getAnalyticsConfig",
        params: V._getSdkProperties()
      });
      A.setFeatures({ analytics: t });
    } catch {
      A.setFeatures({ analytics: !1 });
    }
  },
  filterByNamespaces(t) {
    if (!(t != null && t.length)) {
      ie.featured = ie.allFeatured, ie.recommended = ie.allRecommended;
      return;
    }
    const e = f.getRequestedCaipNetworkIds().join(",");
    ie.featured = ie.allFeatured.filter((s) => {
      var n;
      return (n = s.chains) == null ? void 0 : n.some((i) => e.includes(i));
    }), ie.recommended = ie.allRecommended.filter((s) => {
      var n;
      return (n = s.chains) == null ? void 0 : n.some((i) => e.includes(i));
    }), ie.filteredWallets = ie.wallets.filter((s) => {
      var n;
      return (n = s.chains) == null ? void 0 : n.some((i) => e.includes(i));
    });
  },
  clearFilterByNamespaces() {
    ie.filteredWallets = [];
  },
  setFilterByNamespace(t) {
    if (!t) {
      ie.featured = ie.allFeatured, ie.recommended = ie.allRecommended;
      return;
    }
    const e = f.getRequestedCaipNetworkIds().join(",");
    ie.featured = ie.allFeatured.filter((s) => {
      var n;
      return (n = s.chains) == null ? void 0 : n.some((i) => e.includes(i));
    }), ie.recommended = ie.allRecommended.filter((s) => {
      var n;
      return (n = s.chains) == null ? void 0 : n.some((i) => e.includes(i));
    }), ie.filteredWallets = ie.wallets.filter((s) => {
      var n;
      return (n = s.chains) == null ? void 0 : n.some((i) => e.includes(i));
    });
  }
}, js = {
  filterOutDuplicatesByRDNS(t) {
    const e = A.state.enableEIP6963 ? R.state.connectors : [], s = k.getRecentWallets(), n = e.map((a) => {
      var c;
      return (c = a.info) == null ? void 0 : c.rdns;
    }).filter(Boolean), i = s.map((a) => a.rdns).filter(Boolean), r = n.concat(i);
    if (r.includes("io.metamask.mobile") && W.isMobile()) {
      const a = r.indexOf("io.metamask.mobile");
      r[a] = "io.metamask";
    }
    return t.filter((a) => !(a != null && a.rdns && r.includes(String(a.rdns)) || !(a != null && a.rdns) && e.some((l) => l.name === a.name)));
  },
  filterOutDuplicatesByIds(t) {
    const e = R.state.connectors.filter((a) => a.type === "ANNOUNCED" || a.type === "INJECTED" || a.type === "MULTI_CHAIN"), s = k.getRecentWallets(), n = e.map((a) => {
      var c;
      return a.explorerId || ((c = a.explorerWallet) == null ? void 0 : c.id) || a.id;
    }), i = s.map((a) => a.id), r = n.concat(i);
    return t.filter((a) => !r.includes(a == null ? void 0 : a.id));
  },
  filterOutDuplicateWallets(t) {
    const e = this.filterOutDuplicatesByRDNS(t);
    return this.filterOutDuplicatesByIds(e);
  },
  /**
   * Marks wallets as installed based on available connectors and sorts them
   * according to both installation status and featuredWalletIds order.
   *
   * @param wallets - Array of wallets to process
   * @returns Array of wallets marked as installed and sorted by priority
   */
  markWalletsAsInstalled(t) {
    const { connectors: e } = R.state, { featuredWalletIds: s } = A.state, n = e.filter((o) => o.type === "ANNOUNCED").reduce((o, a) => {
      var c;
      return (c = a.info) != null && c.rdns && (o[a.info.rdns] = !0), o;
    }, {});
    return t.map((o) => ({
      ...o,
      installed: !!o.rdns && !!n[o.rdns ?? ""]
    })).sort((o, a) => {
      const c = Number(a.installed) - Number(o.installed);
      if (c !== 0)
        return c;
      if (s != null && s.length) {
        const l = s.indexOf(o.id), d = s.indexOf(a.id);
        if (l !== -1 && d !== -1)
          return l - d;
        if (l !== -1)
          return -1;
        if (d !== -1)
          return 1;
      }
      return 0;
    });
  },
  getConnectOrderMethod(t, e) {
    var c;
    const s = (t == null ? void 0 : t.connectMethodsOrder) || ((c = A.state.features) == null ? void 0 : c.connectMethodsOrder), n = e || R.state.connectors;
    if (s)
      return s;
    const { injected: i, announced: r } = rt.getConnectorsByType(n, V.state.recommended, V.state.featured), o = i.filter(rt.showConnector), a = r.filter(rt.showConnector);
    return o.length || a.length ? ["wallet", "email", "social"] : le.DEFAULT_CONNECT_METHOD_ORDER;
  },
  isExcluded(t) {
    const e = !!t.rdns && V.state.excludedWallets.some((n) => n.rdns === t.rdns), s = !!t.name && V.state.excludedWallets.some((n) => xl.isLowerCaseMatch(n.name, t.name));
    return e || s;
  },
  markWalletsWithDisplayIndex(t) {
    return t.map((e, s) => ({ ...e, display_index: s }));
  },
  /**
   * Filters wallets based on WalletConnect support and platform requirements.
   *
   * On mobile only wallets with WalletConnect support and some mandatory wallets are shown.
   * On desktop with Appkit Core only wallets with WalletConnect support are shown.
   * On desktop with Appkit all wallets are shown.
   *
   * @param wallets - Array of wallets to filter
   * @returns Filtered array of wallets based on WalletConnect support and platform
   */
  filterWalletsByWcSupport(t) {
    return D.state.wcBasic ? t.filter((e) => e.supports_wc) : W.isMobile() ? t.filter((e) => e.supports_wc || le.MANDATORY_WALLET_IDS_ON_MOBILE.includes(e.id)) : t;
  },
  getWalletConnectWallets(t) {
    var r;
    const e = [...V.state.featured, ...V.state.recommended];
    ((r = V.state.filteredWallets) == null ? void 0 : r.length) > 0 ? e.push(...V.state.filteredWallets) : e.push(...t);
    const s = W.uniqueBy(e, "id"), n = js.markWalletsAsInstalled(s), i = js.filterWalletsByWcSupport(n);
    return js.markWalletsWithDisplayIndex(i);
  }
}, rt = {
  getConnectorsByType(t, e, s) {
    const { customWallets: n } = A.state, i = k.getRecentWallets(), r = js.filterOutDuplicateWallets(e), o = js.filterOutDuplicateWallets(s), a = t.filter((u) => u.type === "MULTI_CHAIN"), c = t.filter((u) => u.type === "ANNOUNCED"), l = t.filter((u) => u.type === "INJECTED"), d = t.filter((u) => u.type === "EXTERNAL");
    return {
      custom: n,
      recent: i,
      external: d,
      multiChain: a,
      announced: c,
      injected: l,
      recommended: r,
      featured: o
    };
  },
  showConnector(t) {
    var i;
    const e = (i = t.info) == null ? void 0 : i.rdns, s = !!e && V.state.excludedWallets.some((r) => !!r.rdns && r.rdns === e), n = !!t.name && V.state.excludedWallets.some((r) => xl.isLowerCaseMatch(r.name, t.name));
    return !(t.type === "INJECTED" && (t.name === "Browser Wallet" && (!W.isMobile() || W.isMobile() && !e && !D.checkInstalled()) || s || n) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (s || n));
  },
  /**
   * Returns true if the user is connected to a WalletConnect connector in the any of the available namespaces.
   * @returns boolean
   */
  getIsConnectedWithWC() {
    return Array.from(f.state.chains.values()).some((s) => R.getConnectorId(s.namespace) === C.CONNECTOR_ID.WALLET_CONNECT);
  },
  /**
   * Returns the connector positions in the order of the user's preference.
   * @returns ConnectorTypeOrder[]
   */
  getConnectorTypeOrder({ recommended: t, featured: e, custom: s, recent: n, announced: i, injected: r, multiChain: o, external: a, overriddenConnectors: c = ((l) => (l = A.state.features) == null ? void 0 : l.connectorTypeOrder)() ?? [] }) {
    const u = [
      { type: "walletConnect", isEnabled: !0 },
      { type: "recent", isEnabled: n.length > 0 },
      { type: "injected", isEnabled: [...r, ...i, ...o].length > 0 },
      { type: "featured", isEnabled: e.length > 0 },
      { type: "custom", isEnabled: s && s.length > 0 },
      { type: "external", isEnabled: a.length > 0 },
      { type: "recommended", isEnabled: t.length > 0 }
    ].filter((m) => m.isEnabled), h = new Set(u.map((m) => m.type)), p = c.filter((m) => h.has(m)).map((m) => ({ type: m, isEnabled: !0 })), g = u.filter(({ type: m }) => !p.some(({ type: I }) => I === m));
    return Array.from(new Set([...p, ...g].map(({ type: m }) => m)));
  },
  sortConnectorsByExplorerWallet(t) {
    return [...t].sort((e, s) => e.explorerWallet && s.explorerWallet ? (e.explorerWallet.order ?? 0) - (s.explorerWallet.order ?? 0) : e.explorerWallet ? -1 : s.explorerWallet ? 1 : 0);
  },
  /**
   * Returns the priority of a connector. Base Account has highest priority, followed by Coinbase then the rest.
   *
   * This is needed because Base Account and Coinbase share the same explorer wallet ID.
   * Without prioritization, selecting Base Account could incorrectly trigger the Coinbase Wallet extension.
   *
   * @param connector - The connector to get the priority of.
   * @returns The priority of the connector.
   */
  getPriority(t) {
    return t.id === C.CONNECTOR_ID.BASE_ACCOUNT ? 0 : t.id === C.CONNECTOR_ID.COINBASE || t.id === C.CONNECTOR_ID.COINBASE_SDK ? 1 : 2;
  },
  /**
   * Sorts connectors by priority.
   * @param connectors - The connectors to sort.
   * @returns Sorted connectors.
   */
  sortConnectorsByPriority(t) {
    return [...t].sort((e, s) => rt.getPriority(e) - rt.getPriority(s));
  },
  getAuthName({ email: t, socialUsername: e, socialProvider: s }) {
    return e ? s && s === "discord" && e.endsWith("0") ? e.slice(0, -1) : e : t.length > 30 ? `${t.slice(0, -3)}...` : t;
  },
  async fetchProviderData(t) {
    var e, s;
    try {
      if (t.name === "Browser Wallet" && !W.isMobile())
        return { accounts: [], chainId: void 0 };
      if (t.id === C.CONNECTOR_ID.AUTH)
        return { accounts: [], chainId: void 0 };
      const [n, i] = await Promise.all([
        (e = t.provider) == null ? void 0 : e.request({ method: "eth_accounts" }),
        (s = t.provider) == null ? void 0 : s.request({ method: "eth_chainId" }).then((r) => Number(r))
      ]);
      return { accounts: n, chainId: i };
    } catch (n) {
      return console.warn(`Failed to fetch provider data for ${t.name}`, n), { accounts: [], chainId: void 0 };
    }
  },
  /**
   * Filter out duplicate custom wallets by RDNS
   * @param wallets
   */
  getFilteredCustomWallets(t) {
    const e = k.getRecentWallets(), s = R.state.connectors.map((o) => {
      var a;
      return (a = o.info) == null ? void 0 : a.rdns;
    }).filter(Boolean), n = e.map((o) => o.rdns).filter(Boolean), i = s.concat(n);
    if (i.includes("io.metamask.mobile") && W.isMobile()) {
      const o = i.indexOf("io.metamask.mobile");
      i[o] = "io.metamask";
    }
    return t.filter((o) => !i.includes(String(o == null ? void 0 : o.rdns)));
  },
  hasWalletConnector(t) {
    return R.state.connectors.some((e) => e.id === t.id || e.name === t.name);
  },
  isWalletCompatibleWithCurrentChain(t) {
    const e = f.state.activeChain;
    return e && t.chains ? t.chains.some((s) => {
      const n = s.split(":")[0];
      return e === n;
    }) : !0;
  },
  getFilteredRecentWallets() {
    return k.getRecentWallets().filter((s) => !js.isExcluded(s)).filter((s) => !this.hasWalletConnector(s)).filter((s) => this.isWalletCompatibleWithCurrentChain(s));
  },
  getCappedRecommendedWallets(t) {
    const { connectors: e } = R.state, { customWallets: s, featuredWalletIds: n } = A.state, i = e.find((N) => N.id === "walletConnect"), r = e.filter((N) => N.type === "INJECTED" || N.type === "ANNOUNCED" || N.type === "MULTI_CHAIN");
    if (!i && !r.length && !(s != null && s.length))
      return [];
    const o = ao.isEmailEnabled(), a = ao.isSocialsEnabled(), c = r.filter((N) => N.name !== "Browser Wallet" && N.name !== "WalletConnect"), l = (n == null ? void 0 : n.length) || 0, d = (s == null ? void 0 : s.length) || 0, u = c.length || 0, h = o ? 1 : 0, p = a ? 1 : 0, g = l + d + u + h + p, y = Math.max(0, 4 - g);
    return y <= 0 ? [] : js.filterOutDuplicateWallets(t).slice(0, y);
  },
  processConnectorsByType(t, e = !0) {
    const s = rt.sortConnectorsByExplorerWallet([...t]);
    return e ? s.filter(rt.showConnector) : s;
  },
  connectorList() {
    const t = rt.getConnectorsByType(R.state.connectors, V.state.recommended, V.state.featured), e = this.processConnectorsByType(t.announced.filter((p) => p.id !== "walletConnect")), s = this.processConnectorsByType(t.injected), n = this.processConnectorsByType(t.multiChain.filter((p) => p.name !== "WalletConnect"), !1), i = t.custom, r = t.recent, o = this.processConnectorsByType(t.external.filter((p) => p.id !== C.CONNECTOR_ID.COINBASE_SDK && p.id !== C.CONNECTOR_ID.BASE_ACCOUNT)), a = t.recommended, c = t.featured, l = rt.getConnectorTypeOrder({
      custom: i,
      recent: r,
      announced: e,
      injected: s,
      multiChain: n,
      recommended: a,
      featured: c,
      external: o
    }), d = R.state.connectors.find((p) => p.id === "walletConnect"), u = W.isMobile(), h = [];
    for (const p of l)
      switch (p) {
        case "walletConnect": {
          !u && d && h.push({ kind: "connector", subtype: "walletConnect", connector: d });
          break;
        }
        case "recent": {
          rt.getFilteredRecentWallets().forEach((m) => h.push({ kind: "wallet", subtype: "recent", wallet: m }));
          break;
        }
        case "injected": {
          n.forEach((g) => h.push({ kind: "connector", subtype: "multiChain", connector: g })), e.forEach((g) => h.push({ kind: "connector", subtype: "announced", connector: g })), s.forEach((g) => h.push({ kind: "connector", subtype: "injected", connector: g }));
          break;
        }
        case "featured": {
          c.forEach((g) => h.push({ kind: "wallet", subtype: "featured", wallet: g }));
          break;
        }
        case "custom": {
          rt.getFilteredCustomWallets(i ?? []).forEach((m) => h.push({ kind: "wallet", subtype: "custom", wallet: m }));
          break;
        }
        case "external": {
          o.forEach((g) => h.push({ kind: "connector", subtype: "external", connector: g }));
          break;
        }
        case "recommended": {
          rt.getCappedRecommendedWallets(a).forEach((m) => h.push({ kind: "wallet", subtype: "recommended", wallet: m }));
          break;
        }
        default:
          console.warn(`Unknown connector type: ${p}`);
      }
    return h;
  },
  hasInjectedConnectors() {
    return R.state.connectors.filter((t) => (t.type === "INJECTED" || t.type === "ANNOUNCED" || t.type === "MULTI_CHAIN") && t.name !== "Browser Wallet" && t.name !== "WalletConnect").length;
  }
}, yh = [
  "ConnectingExternal",
  "ConnectingMultiChain",
  "ConnectingSocial",
  "ConnectingFarcaster"
], Ae = Pe({
  view: "Connect",
  history: ["Connect"],
  transactionStack: []
}), wh = {
  state: Ae,
  subscribeKey(t, e) {
    return Ye(Ae, t, e);
  },
  pushTransactionStack(t) {
    Ae.transactionStack.push(t);
  },
  popTransactionStack(t) {
    const e = Ae.transactionStack.pop();
    if (!e)
      return;
    const { onSuccess: s, onError: n, onCancel: i } = e;
    switch (t) {
      case "success":
        s == null || s();
        break;
      case "error":
        n == null || n(), ee.goBack();
        break;
      case "cancel":
        i == null || i(), ee.goBack();
        break;
    }
  },
  push(t, e) {
    let s = t, n = e;
    V.state.plan.hasExceededUsageLimit && yh.includes(t) && (s = "UsageExceeded", n = void 0), s !== Ae.view && (Ae.view = s, Ae.history.push(s), Ae.data = n);
  },
  reset(t, e) {
    Ae.view = t, Ae.history = [t], Ae.data = e;
  },
  replace(t, e) {
    Ae.history.at(-1) === t || (Ae.view = t, Ae.history[Ae.history.length - 1] = t, Ae.data = e);
  },
  goBack() {
    var n, i;
    const t = f.state.activeCaipAddress, e = ee.state.view === "ConnectingFarcaster", s = !t && e;
    if (Ae.history.length > 1) {
      Ae.history.pop();
      const [r] = Ae.history.slice(-1);
      r && (t && r === "Connect" ? Ae.view = "Account" : Ae.view = r);
    } else
      de.close();
    (n = Ae.data) != null && n.wallet && (Ae.data.wallet = void 0), (i = Ae.data) != null && i.redirectView && (Ae.data.redirectView = void 0), setTimeout(() => {
      var r, o, a;
      if (s) {
        f.setAccountProp("farcasterUrl", void 0, f.state.activeChain);
        const c = R.getAuthConnector();
        (r = c == null ? void 0 : c.provider) == null || r.reload();
        const l = gi(A.state);
        (a = (o = c == null ? void 0 : c.provider) == null ? void 0 : o.syncDappData) == null || a.call(o, {
          metadata: l.metadata,
          sdkVersion: l.sdkVersion,
          projectId: l.projectId,
          sdkType: l.sdkType
        });
      }
    }, 100);
  },
  goBackToIndex(t) {
    if (Ae.history.length > 1) {
      Ae.history = Ae.history.slice(0, t + 1);
      const [e] = Ae.history.slice(-1);
      e && (Ae.view = e);
    }
  },
  goBackOrCloseModal() {
    ee.state.history.length > 1 ? ee.goBack() : de.close();
  }
}, ee = Ft(wh), us = Pe({
  themeMode: "dark",
  themeVariables: {},
  w3mThemeVariables: void 0
}), co = {
  state: us,
  subscribe(t) {
    return st(us, () => t(us));
  },
  setThemeMode(t) {
    us.themeMode = t;
    try {
      const e = R.getAuthConnector();
      if (e) {
        const s = co.getSnapshot().themeVariables;
        e.provider.syncTheme({
          themeMode: t,
          themeVariables: s,
          w3mThemeVariables: Zi(s, t)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  setThemeVariables(t) {
    us.themeVariables = { ...us.themeVariables, ...t };
    try {
      const e = R.getAuthConnector();
      if (e) {
        const s = co.getSnapshot().themeVariables;
        e.provider.syncTheme({
          themeVariables: s,
          w3mThemeVariables: Zi(us.themeVariables, us.themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  getSnapshot() {
    return gi(us);
  }
}, Ct = Ft(co), Bl = Object.fromEntries(Rl.map((t) => [t, void 0])), bh = Object.fromEntries(Rl.map((t) => [t, !0])), ye = Pe({
  allConnectors: [],
  connectors: [],
  activeConnector: void 0,
  filterByNamespace: void 0,
  activeConnectorIds: Bl,
  filterByNamespaceMap: bh
}), Eh = {
  state: ye,
  subscribe(t) {
    return st(ye, () => {
      t(ye);
    });
  },
  subscribeKey(t, e) {
    return Ye(ye, t, e);
  },
  initialize(t) {
    t.forEach((e) => {
      const s = k.getConnectedConnectorId(e);
      s && R.setConnectorId(s, e);
    });
  },
  setActiveConnector(t) {
    t && (ye.activeConnector = mi(t));
  },
  setConnectors(t) {
    t.filter((i) => !ye.allConnectors.some((r) => r.id === i.id && R.getConnectorName(r.name) === R.getConnectorName(i.name) && r.chain === i.chain)).forEach((i) => {
      i.type !== "MULTI_CHAIN" && ye.allConnectors.push(mi(i));
    });
    const s = R.getEnabledNamespaces(), n = R.getEnabledConnectors(s);
    ye.connectors = R.mergeMultiChainConnectors(n);
  },
  filterByNamespaces(t) {
    Object.keys(ye.filterByNamespaceMap).forEach((e) => {
      ye.filterByNamespaceMap[e] = !1;
    }), t.forEach((e) => {
      ye.filterByNamespaceMap[e] = !0;
    }), R.updateConnectorsForEnabledNamespaces();
  },
  filterByNamespace(t, e) {
    ye.filterByNamespaceMap[t] = e, R.updateConnectorsForEnabledNamespaces();
  },
  updateConnectorsForEnabledNamespaces() {
    const t = R.getEnabledNamespaces(), e = R.getEnabledConnectors(t), s = R.areAllNamespacesEnabled();
    ye.connectors = R.mergeMultiChainConnectors(e), s ? V.clearFilterByNamespaces() : V.filterByNamespaces(t);
  },
  getEnabledNamespaces() {
    return Object.entries(ye.filterByNamespaceMap).filter(([t, e]) => e).map(([t]) => t);
  },
  getEnabledConnectors(t) {
    return ye.allConnectors.filter((e) => t.includes(e.chain));
  },
  areAllNamespacesEnabled() {
    return Object.values(ye.filterByNamespaceMap).every((t) => t);
  },
  mergeMultiChainConnectors(t) {
    const e = R.generateConnectorMapByName(t), s = [];
    return e.forEach((n) => {
      const i = n[0], r = (i == null ? void 0 : i.id) === C.CONNECTOR_ID.AUTH;
      n.length > 1 && i ? s.push({
        name: i.name,
        imageUrl: i.imageUrl,
        imageId: i.imageId,
        connectors: [...n],
        type: r ? "AUTH" : "MULTI_CHAIN",
        // These values are just placeholders, we don't use them in multi-chain connector select screen
        chain: "eip155",
        id: (i == null ? void 0 : i.id) || ""
      }) : i && s.push(i);
    }), s;
  },
  generateConnectorMapByName(t) {
    const e = /* @__PURE__ */ new Map();
    return t.forEach((s) => {
      const { name: n } = s, i = R.getConnectorName(n);
      if (!i)
        return;
      const r = e.get(i) || [];
      r.find((a) => a.chain === s.chain) || r.push(s), e.set(i, r);
    }), e;
  },
  getConnectorName(t) {
    return t && ({
      "Trust Wallet": "Trust"
    }[t] || t);
  },
  getUniqueConnectorsByName(t) {
    const e = [];
    return t.forEach((s) => {
      e.find((n) => n.chain === s.chain) || e.push(s);
    }), e;
  },
  addConnector(t) {
    var e, s, n;
    if (t.id === C.CONNECTOR_ID.AUTH) {
      const i = t, r = gi(A.state), o = Ct.getSnapshot().themeMode, a = Ct.getSnapshot().themeVariables;
      (s = (e = i == null ? void 0 : i.provider) == null ? void 0 : e.syncDappData) == null || s.call(e, {
        metadata: r.metadata,
        sdkVersion: r.sdkVersion,
        projectId: r.projectId,
        sdkType: r.sdkType
      }), (n = i == null ? void 0 : i.provider) == null || n.syncTheme({
        themeMode: o,
        themeVariables: a,
        w3mThemeVariables: Zi(a, o)
      }), R.setConnectors([t]);
    } else
      R.setConnectors([t]);
  },
  getAuthConnector(t) {
    var n;
    const e = t || f.state.activeChain, s = ye.connectors.find((i) => i.id === C.CONNECTOR_ID.AUTH);
    if (s)
      return (n = s == null ? void 0 : s.connectors) != null && n.length ? s.connectors.find((r) => r.chain === e) : s;
  },
  getAnnouncedConnectorRdns() {
    return ye.connectors.filter((t) => t.type === "ANNOUNCED").map((t) => {
      var e;
      return (e = t.info) == null ? void 0 : e.rdns;
    });
  },
  getConnectorById(t) {
    return rt.sortConnectorsByPriority(ye.allConnectors).find((s) => s.id === t);
  },
  getConnector({ id: t, namespace: e }) {
    const s = e || f.state.activeChain, n = ye.allConnectors.filter((o) => o.chain === s);
    return rt.sortConnectorsByPriority(n).find((o) => o.id === t || o.explorerId === t);
  },
  syncIfAuthConnector(t) {
    var r, o;
    if (t.id !== "AUTH")
      return;
    const e = t, s = gi(A.state), n = Ct.getSnapshot().themeMode, i = Ct.getSnapshot().themeVariables;
    (o = (r = e == null ? void 0 : e.provider) == null ? void 0 : r.syncDappData) == null || o.call(r, {
      metadata: s.metadata,
      sdkVersion: s.sdkVersion,
      sdkType: s.sdkType,
      projectId: s.projectId
    }), e.provider.syncTheme({
      themeMode: n,
      themeVariables: i,
      w3mThemeVariables: Zi(i, n)
    });
  },
  /**
   * Returns the connectors filtered by namespace.
   * @param namespace - The namespace to filter the connectors by.
   * @returns ConnectorWithProviders[].
   */
  getConnectorsByNamespace(t) {
    const e = ye.allConnectors.filter((s) => s.chain === t);
    return R.mergeMultiChainConnectors(e);
  },
  canSwitchToSmartAccount(t) {
    return f.checkIfSmartAccountEnabled() && Lt(t) === Cs.ACCOUNT_TYPES.EOA;
  },
  selectWalletConnector(t) {
    var i;
    const e = (i = ee.state.data) == null ? void 0 : i.redirectView, s = f.state.activeChain, n = s ? R.getConnector({ id: t.id, namespace: s }) : void 0;
    lh.handleMobileDeeplinkRedirect((n == null ? void 0 : n.explorerId) || t.id, f.state.activeChain), n ? ee.push("ConnectingExternal", { connector: n, wallet: t, redirectView: e }) : ee.push("ConnectingWalletConnect", { wallet: t, redirectView: e });
  },
  /**
   * Returns the connectors. If a namespace is provided, the connectors are filtered by namespace.
   * @param namespace - The namespace to filter the connectors by. If not provided, all connectors are returned.
   * @returns ConnectorWithProviders[].
   */
  getConnectors(t) {
    return t ? R.getConnectorsByNamespace(t) : R.mergeMultiChainConnectors(ye.allConnectors);
  },
  /**
   * Sets the filter by namespace and updates the connectors.
   * @param namespace - The namespace to filter the connectors by.
   */
  setFilterByNamespace(t) {
    ye.filterByNamespace = t, ye.connectors = R.getConnectors(t), V.setFilterByNamespace(t);
  },
  setConnectorId(t, e) {
    t && (ye.activeConnectorIds = {
      ...ye.activeConnectorIds,
      [e]: t
    }, k.setConnectedConnectorId(e, t));
  },
  removeConnectorId(t) {
    ye.activeConnectorIds = {
      ...ye.activeConnectorIds,
      [t]: void 0
    }, k.deleteConnectedConnectorId(t);
  },
  getConnectorId(t) {
    if (t)
      return ye.activeConnectorIds[t];
  },
  isConnected(t) {
    return t ? !!ye.activeConnectorIds[t] : Object.values(ye.activeConnectorIds).some((e) => !!e);
  },
  resetConnectorIds() {
    ye.activeConnectorIds = { ...Bl };
  },
  extendConnectorsWithExplorerWallets(t) {
    ye.allConnectors.forEach((n) => {
      const i = t.find((r) => {
        var o;
        return r.id === n.id || r.rdns && r.rdns === ((o = n.info) == null ? void 0 : o.rdns);
      });
      i && (n.explorerWallet = i);
    });
    const e = R.getEnabledNamespaces(), s = R.getEnabledConnectors(e);
    ye.connectors = R.mergeMultiChainConnectors(s);
  },
  /**
   * Opens the connect modal and waits until the user connects their wallet.
   * @param params - Connection parameters.
   * @returns Promise resolving to the connected wallet's CAIP address.
   */
  async connect(t = {}) {
    const { namespace: e } = t;
    return R.setFilterByNamespace(e), ee.push("Connect", {
      addWalletForNamespace: e
    }), new Promise((s, n) => {
      if (e) {
        const i = f.subscribeChainProp("accountState", (o) => {
          o != null && o.caipAddress && (s({ caipAddress: o == null ? void 0 : o.caipAddress }), i());
        }, e), r = de.subscribeKey("open", (o) => {
          o || (n(new Error("Modal closed")), r());
        });
      } else {
        const i = f.subscribeKey("activeCaipAddress", (o) => {
          o && (s({ caipAddress: o }), i());
        }), r = de.subscribeKey("open", (o) => {
          o || (n(new Error("Modal closed")), r());
        });
      }
    });
  }
}, R = Ft(Eh), Ch = 1e3, zn = {
  checkNamespaceConnectorId(t, e) {
    return R.getConnectorId(t) === e;
  },
  isSocialProvider(t) {
    return le.DEFAULT_REMOTE_FEATURES.socials.includes(t);
  },
  connectWalletConnect({ walletConnect: t, connector: e, closeModalOnConnect: s = !0, redirectViewOnModalClose: n = "Connect", onOpen: i, onConnect: r }) {
    return new Promise((o, a) => {
      if (t && R.setActiveConnector(e), i == null || i(W.isMobile() && t), n) {
        const l = de.subscribeKey("open", (d) => {
          d || (ee.state.view !== n && ee.replace(n), l(), a(new Error("Modal closed")));
        });
      }
      const c = f.subscribeKey("activeCaipAddress", (l) => {
        l && (r == null || r(), s && de.close(), c(), o(Ge.parseCaipAddress(l)));
      });
    });
  },
  connectExternal(t) {
    return new Promise((e, s) => {
      const n = f.subscribeKey("activeCaipAddress", (i) => {
        i && (de.close(), n(), e(Ge.parseCaipAddress(i)));
      });
      D.connectExternal(t, t.chain).catch(() => {
        n(), s(new Error("Connection rejected"));
      });
    });
  },
  connectSocial({ social: t, namespace: e, closeModalOnConnect: s = !0, onOpenFarcaster: n, onConnect: i }) {
    let r, o = !1, a = null;
    const c = e || f.state.activeChain, l = f.subscribeKey("activeCaipAddress", (d) => {
      d && (s && de.close(), l());
    });
    return new Promise((d, u) => {
      async function h(g) {
        var m;
        if ((m = g.data) != null && m.resultUri)
          if (g.origin === C.SECURE_SITE_SDK_ORIGIN) {
            window.removeEventListener("message", h, !1);
            try {
              const y = R.getAuthConnector(c);
              if (y && !o) {
                r && r.close(), o = !0;
                const I = g.data.resultUri;
                oe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                  properties: { provider: t }
                }), k.setConnectedSocialProvider(t), await D.connectExternal({
                  id: y.id,
                  type: y.type,
                  socialUri: I
                }, y.chain);
                const N = f.state.activeCaipAddress;
                if (!N) {
                  u(new Error("Failed to connect"));
                  return;
                }
                d(Ge.parseCaipAddress(N)), oe.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: { provider: t }
                });
              }
            } catch (y) {
              oe.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_ERROR",
                properties: { provider: t, message: W.parseError(y) }
              }), u(new Error("Failed to connect"));
            }
          } else
            oe.sendEvent({
              type: "track",
              event: "SOCIAL_LOGIN_ERROR",
              properties: { provider: t, message: "Untrusted Origin" }
            });
      }
      async function p() {
        if (oe.sendEvent({
          type: "track",
          event: "SOCIAL_LOGIN_STARTED",
          properties: { provider: t }
        }), t === "farcaster") {
          n == null || n();
          const g = de.subscribeKey("open", (y) => {
            !y && t === "farcaster" && (u(new Error("Popup closed")), i == null || i(), g());
          }), m = R.getAuthConnector();
          if (m) {
            const y = f.getAccountData(c);
            if (!(y != null && y.farcasterUrl))
              try {
                const { url: I } = await m.provider.getFarcasterUri();
                f.setAccountProp("farcasterUrl", I, c);
              } catch {
                u(new Error("Failed to connect to farcaster"));
              }
          }
        } else {
          const g = R.getAuthConnector();
          a = W.returnOpenHref(`${C.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
          try {
            if (g) {
              const { uri: m } = await g.provider.getSocialRedirectUri({
                provider: t
              });
              if (a && m) {
                a.location.href = m, r = a;
                const y = setInterval(() => {
                  r != null && r.closed && !o && (u(new Error("Popup closed")), clearInterval(y));
                }, 1e3);
                window.addEventListener("message", h, !1);
              } else
                a == null || a.close(), u(new Error("Failed to initiate social connection"));
            }
          } catch {
            u(new Error("Failed to initiate social connection")), a == null || a.close();
          }
        }
      }
      p();
    });
  },
  connectEmail({ closeModalOnConnect: t = !0, redirectViewOnModalClose: e = "Connect", onOpen: s, onConnect: n }) {
    return new Promise((i, r) => {
      if (s == null || s(), e) {
        const a = de.subscribeKey("open", (c) => {
          c || (ee.state.view !== e && ee.replace(e), a(), r(new Error("Modal closed")));
        });
      }
      const o = f.subscribeKey("activeCaipAddress", (a) => {
        a && (n == null || n(), t && de.close(), o(), i(Ge.parseCaipAddress(a)));
      });
    });
  },
  async updateEmail() {
    const t = k.getConnectedConnectorId(f.state.activeChain), e = R.getAuthConnector();
    if (!e)
      throw new Error("No auth connector found");
    if (t !== C.CONNECTOR_ID.AUTH)
      throw new Error("Not connected to email or social");
    const s = e.provider.getEmail() ?? "";
    return await de.open({
      view: "UpdateEmailWallet",
      data: {
        email: s,
        redirectView: void 0
      }
    }), new Promise((n, i) => {
      const r = setInterval(() => {
        const a = e.provider.getEmail() ?? "";
        a !== s && (de.close(), clearInterval(r), o(), n({ email: a }));
      }, Ch), o = de.subscribeKey("open", (a) => {
        a || (ee.state.view !== "Connect" && ee.push("Connect"), clearInterval(r), o(), i(new Error("Modal closed")));
      });
    });
  },
  canSwitchToSmartAccount(t) {
    return f.checkIfSmartAccountEnabled() && Lt(t) === Cs.ACCOUNT_TYPES.EOA;
  }
};
function Fl() {
  var n, i;
  const t = ((n = f.state.activeCaipNetwork) == null ? void 0 : n.chainNamespace) || "eip155", e = ((i = f.state.activeCaipNetwork) == null ? void 0 : i.id) || 1, s = le.NATIVE_TOKEN_ADDRESS[t];
  return `${t}:${e}:${s}`;
}
function yv(t) {
  return le.NATIVE_TOKEN_ADDRESS[t];
}
function Lt(t) {
  var s;
  return (s = f.getAccountData(t)) == null ? void 0 : s.preferredAccountType;
}
function ki(t) {
  return f.state.activeCaipNetwork;
}
const er = {
  getConnectionStatus(t, e) {
    const s = R.state.activeConnectorIds[e], n = D.getConnections(e);
    return !!s && t.connectorId === s ? "connected" : n.some((o) => o.connectorId.toLowerCase() === t.connectorId.toLowerCase()) ? "active" : "disconnected";
  },
  excludeConnectorAddressFromConnections({ connections: t, connectorId: e, addresses: s }) {
    return t.map((n) => {
      if ((e ? n.connectorId.toLowerCase() === e.toLowerCase() : !1) && s) {
        const r = n.accounts.filter((o) => !s.some((c) => c.toLowerCase() === o.address.toLowerCase()));
        return { ...n, accounts: r };
      }
      return n;
    });
  },
  excludeExistingConnections(t, e) {
    const s = new Set(t);
    return e.filter((n) => !s.has(n.connectorId));
  },
  getConnectionsByConnectorId(t, e) {
    return t.filter((s) => s.connectorId.toLowerCase() === e.toLowerCase());
  },
  getConnectionsData(t) {
    var a;
    const e = !!((a = A.state.remoteFeatures) != null && a.multiWallet), s = R.state.activeConnectorIds[t], n = D.getConnections(t), r = (D.state.recentConnections.get(t) ?? []).filter((c) => R.getConnectorById(c.connectorId)), o = er.excludeExistingConnections([...n.map((c) => c.connectorId), ...s ? [s] : []], r);
    return e ? {
      connections: n,
      recentConnections: o
    } : {
      connections: n.filter((c) => c.connectorId.toLowerCase() === (s == null ? void 0 : s.toLowerCase())),
      recentConnections: []
    };
  },
  onConnectMobile(t) {
    const e = D.state.wcUri;
    if (t != null && t.mobile_link && e)
      try {
        D.setWcError(!1);
        const { mobile_link: s, link_mode: n, name: i } = t, { redirect: r, redirectUniversalLink: o, href: a } = W.formatNativeUrl(s, e, n), c = r, l = o, d = W.isIframe() ? "_top" : "_self";
        D.setWcLinking({ name: i, href: a }), D.setRecentWallet(t), A.state.experimental_preferUniversalLinks && l ? W.openHref(l, d) : W.openHref(c, d);
      } catch (s) {
        oe.sendEvent({
          type: "track",
          event: "CONNECT_PROXY_ERROR",
          properties: {
            message: s instanceof Error ? s.message : "Error parsing the deep link",
            uri: e,
            mobile_link: t.mobile_link,
            name: t.name
          }
        }), D.setWcError(!0);
      }
  }
}, vn = Pe({
  loading: !1,
  open: !1,
  selectedNetworkId: void 0,
  activeChain: void 0,
  initialized: !1,
  connectingWallet: void 0
}), zt = {
  state: vn,
  subscribe(t) {
    return st(vn, () => t(vn));
  },
  subscribeOpen(t) {
    return Ye(vn, "open", t);
  },
  set(t) {
    Object.assign(vn, { ...vn, ...t });
  }
}, ke = Pe({
  transactions: [],
  transactionsByYear: {},
  lastNetworkInView: void 0,
  loading: !1,
  empty: !1,
  next: void 0
}), vh = {
  state: ke,
  subscribe(t) {
    return st(ke, () => t(ke));
  },
  setLastNetworkInView(t) {
    ke.lastNetworkInView = t;
  },
  async fetchTransactions(t) {
    var e;
    if (!t)
      throw new Error("Transactions can't be fetched without an accountAddress");
    ke.loading = !0;
    try {
      const s = await te.fetchTransactions({
        account: t,
        cursor: ke.next,
        chainId: (e = f.state.activeCaipNetwork) == null ? void 0 : e.caipNetworkId
      }), n = zi.filterSpamTransactions(s.data), i = zi.filterByConnectedChain(n), r = [...ke.transactions, ...i];
      ke.loading = !1, ke.transactions = r, ke.transactionsByYear = zi.groupTransactionsByYearAndMonth(ke.transactionsByYear, i), ke.empty = r.length === 0, ke.next = s.next ? s.next : void 0;
    } catch {
      const n = f.state.activeChain;
      oe.sendEvent({
        type: "track",
        event: "ERROR_FETCH_TRANSACTIONS",
        properties: {
          address: t,
          projectId: A.state.projectId,
          cursor: ke.next,
          isSmartAccount: Lt(n) === Cs.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      }), rs.showError("Failed to fetch transactions"), ke.loading = !1, ke.empty = !0, ke.next = void 0;
    }
  },
  groupTransactionsByYearAndMonth(t = {}, e = []) {
    const s = t;
    return e.forEach((n) => {
      const i = new Date(n.metadata.minedAt).getFullYear(), r = new Date(n.metadata.minedAt).getMonth(), o = s[i] ?? {}, c = (o[r] ?? []).filter((l) => l.id !== n.id);
      s[i] = {
        ...o,
        [r]: [...c, n].sort((l, d) => new Date(d.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
      };
    }), s;
  },
  filterSpamTransactions(t) {
    return t.filter((e) => {
      var n;
      return !((n = e.transfers) == null ? void 0 : n.every((i) => {
        var r;
        return ((r = i.nft_info) == null ? void 0 : r.flags.is_spam) === !0;
      }));
    });
  },
  filterByConnectedChain(t) {
    var n;
    const e = (n = f.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId;
    return t.filter((i) => i.metadata.chain === e);
  },
  clearCursor() {
    ke.next = void 0;
  },
  resetTransactions() {
    ke.transactions = [], ke.transactionsByYear = {}, ke.lastNetworkInView = void 0, ke.loading = !1, ke.empty = !1, ke.next = void 0;
  }
}, zi = Ft(vh, "API_ERROR"), ce = Pe({
  connections: /* @__PURE__ */ new Map(),
  recentConnections: /* @__PURE__ */ new Map(),
  isSwitchingConnection: !1,
  wcError: !1,
  wcFetchingUri: !1,
  buffering: !1,
  status: "disconnected"
});
let Js;
const Ah = {
  state: ce,
  subscribe(t) {
    return st(ce, () => t(ce));
  },
  subscribeKey(t, e) {
    return Ye(ce, t, e);
  },
  _getClient() {
    return ce._client;
  },
  setClient(t) {
    ce._client = mi(t);
  },
  initialize(t) {
    const e = t.filter((s) => !!s.namespace).map((s) => s.namespace);
    D.syncStorageConnections(e);
  },
  syncStorageConnections(t) {
    const e = k.getConnections(), s = t ?? Array.from(f.state.chains.keys());
    for (const n of s) {
      const i = e[n] ?? [], r = new Map(ce.recentConnections);
      r.set(n, i), ce.recentConnections = r;
    }
  },
  getConnections(t) {
    return t ? ce.connections.get(t) ?? [] : [];
  },
  hasAnyConnection(t) {
    const e = D.state.connections;
    return Array.from(e.values()).flatMap((s) => s).some(({ connectorId: s }) => s === t);
  },
  async connectWalletConnect({ cache: t = "auto" } = {}) {
    var s, n, i, r;
    ce.wcFetchingUri = !0;
    const e = W.isTelegram() || W.isSafari() && W.isIos();
    if (t === "always" || t === "auto" && e) {
      if (Js) {
        await Js, Js = void 0;
        return;
      }
      if (!W.isPairingExpired(ce == null ? void 0 : ce.wcPairingExpiry)) {
        const o = ce.wcUri;
        ce.wcUri = o;
        return;
      }
      Js = (n = (s = D._getClient()) == null ? void 0 : s.connectWalletConnect) == null ? void 0 : n.call(s).catch(() => {
      }), D.state.status = "connecting", await Js, Js = void 0, ce.wcPairingExpiry = void 0, D.state.status = "connected";
    } else
      await ((r = (i = D._getClient()) == null ? void 0 : i.connectWalletConnect) == null ? void 0 : r.call(i));
  },
  async connectExternal(t, e, s = !0) {
    var o, a, c;
    const n = await ((a = (o = D._getClient()) == null ? void 0 : o.connectExternal) == null ? void 0 : a.call(o, t));
    s && f.setActiveNamespace(e);
    const i = R.state.allConnectors.find((l) => l.id === (t == null ? void 0 : t.id)), r = t.type === "AUTH" ? "email" : "browser";
    return oe.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: r,
        name: (i == null ? void 0 : i.name) || "Unknown",
        view: ee.state.view,
        walletRank: (c = i == null ? void 0 : i.explorerWallet) == null ? void 0 : c.order
      }
    }), n;
  },
  async reconnectExternal(t) {
    var s, n;
    await ((n = (s = D._getClient()) == null ? void 0 : s.reconnectExternal) == null ? void 0 : n.call(s, t));
    const e = t.chain || f.state.activeChain;
    e && R.setConnectorId(t.id, e);
  },
  async setPreferredAccountType(t, e) {
    var n;
    if (!e)
      return;
    de.setLoading(!0, f.state.activeChain);
    const s = R.getAuthConnector();
    s && (f.setAccountProp("preferredAccountType", t, e), await s.provider.setPreferredAccount(t), k.setPreferredAccountTypes(Object.entries(f.state.chains).reduce((i, [r, o]) => {
      const a = r, c = Lt(a);
      return c !== void 0 && (i[a] = c), i;
    }, {})), await D.reconnectExternal(s), de.setLoading(!1, f.state.activeChain), oe.sendEvent({
      type: "track",
      event: "SET_PREFERRED_ACCOUNT_TYPE",
      properties: {
        accountType: t,
        network: ((n = f.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) || ""
      }
    }));
  },
  async signMessage(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.signMessage(t);
  },
  parseUnits(t, e) {
    var s;
    return (s = D._getClient()) == null ? void 0 : s.parseUnits(t, e);
  },
  formatUnits(t, e) {
    var s;
    return (s = D._getClient()) == null ? void 0 : s.formatUnits(t, e);
  },
  updateBalance(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.updateBalance(t);
  },
  async sendTransaction(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.sendTransaction(t);
  },
  async getCapabilities(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.getCapabilities(t);
  },
  async grantPermissions(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.grantPermissions(t);
  },
  async walletGetAssets(t) {
    var e;
    return ((e = D._getClient()) == null ? void 0 : e.walletGetAssets(t)) ?? {};
  },
  async estimateGas(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.estimateGas(t);
  },
  async writeContract(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.writeContract(t);
  },
  async writeSolanaTransaction(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.writeSolanaTransaction(t);
  },
  async getEnsAddress(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.getEnsAddress(t);
  },
  async getEnsAvatar(t) {
    var e;
    return (e = D._getClient()) == null ? void 0 : e.getEnsAvatar(t);
  },
  checkInstalled(t) {
    var e, s;
    return ((s = (e = D._getClient()) == null ? void 0 : e.checkInstalled) == null ? void 0 : s.call(e, t)) || !1;
  },
  resetWcConnection() {
    ce.wcUri = void 0, ce.wcPairingExpiry = void 0, ce.wcLinking = void 0, ce.recentWallet = void 0, ce.wcFetchingUri = !1, ce.status = "disconnected", zi.resetTransactions(), k.deleteWalletConnectDeepLink(), k.deleteRecentWallet(), zt.set({ connectingWallet: void 0 });
  },
  resetUri() {
    ce.wcUri = void 0, ce.wcPairingExpiry = void 0, Js = void 0, ce.wcFetchingUri = !1, zt.set({ connectingWallet: void 0 });
  },
  finalizeWcConnection(t) {
    var n, i;
    const { wcLinking: e, recentWallet: s } = D.state;
    e && k.setWalletConnectDeepLink(e), s && k.setAppKitRecent(s), t && oe.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      address: t,
      properties: {
        method: e ? "mobile" : "qrcode",
        name: ((i = (n = ee.state.data) == null ? void 0 : n.wallet) == null ? void 0 : i.name) || "Unknown",
        view: ee.state.view,
        walletRank: s == null ? void 0 : s.order
      }
    });
  },
  setWcBasic(t) {
    ce.wcBasic = t;
  },
  setUri(t) {
    ce.wcUri = t, ce.wcFetchingUri = !1, ce.wcPairingExpiry = W.getPairingExpiry();
  },
  setWcLinking(t) {
    ce.wcLinking = t;
  },
  setWcError(t) {
    ce.wcError = t, ce.wcFetchingUri = !1, ce.buffering = !1;
  },
  setRecentWallet(t) {
    ce.recentWallet = t;
  },
  setBuffering(t) {
    ce.buffering = t;
  },
  setStatus(t) {
    ce.status = t;
  },
  setIsSwitchingConnection(t) {
    ce.isSwitchingConnection = t;
  },
  async disconnect({ id: t, namespace: e, initialDisconnect: s } = {}) {
    var n;
    try {
      await ((n = D._getClient()) == null ? void 0 : n.disconnect({
        id: t,
        chainNamespace: e,
        initialDisconnect: s
      }));
    } catch (i) {
      throw new pn("Failed to disconnect", "INTERNAL_SDK_ERROR", i);
    }
  },
  async disconnectConnector({ id: t, namespace: e }) {
    var s;
    try {
      await ((s = D._getClient()) == null ? void 0 : s.disconnectConnector({ id: t, namespace: e }));
    } catch (n) {
      throw new pn("Failed to disconnect connector", "INTERNAL_SDK_ERROR", n);
    }
  },
  setConnections(t, e) {
    const s = new Map(ce.connections);
    s.set(e, t), ce.connections = s;
  },
  async handleAuthAccountSwitch({ address: t, namespace: e }) {
    var r, o;
    const s = f.getAccountData(e), n = (o = (r = s == null ? void 0 : s.user) == null ? void 0 : r.accounts) == null ? void 0 : o.find((a) => a.type === "smartAccount"), i = n && n.address.toLowerCase() === t.toLowerCase() && zn.canSwitchToSmartAccount(e) ? "smartAccount" : "eoa";
    await D.setPreferredAccountType(i, e);
  },
  async handleActiveConnection({ connection: t, namespace: e, address: s }) {
    const n = R.getConnectorById(t.connectorId), i = t.connectorId === C.CONNECTOR_ID.AUTH;
    if (!n)
      throw new Error(`No connector found for connection: ${t.connectorId}`);
    if (i)
      s && await D.handleAuthAccountSwitch({ address: s, namespace: e });
    else {
      const r = await D.connectExternal({
        id: n.id,
        type: n.type,
        provider: n.provider,
        address: s,
        chain: e
      }, e);
      return r == null ? void 0 : r.address;
    }
    return s;
  },
  async handleDisconnectedConnection({ connection: t, namespace: e, address: s, closeModalOnConnect: n }) {
    var l, d;
    const i = R.getConnectorById(t.connectorId), r = (d = (l = t.auth) == null ? void 0 : l.name) == null ? void 0 : d.toLowerCase(), o = t.connectorId === C.CONNECTOR_ID.AUTH, a = t.connectorId === C.CONNECTOR_ID.WALLET_CONNECT;
    if (!i)
      throw new Error(`No connector found for connection: ${t.connectorId}`);
    let c;
    if (o)
      if (r && zn.isSocialProvider(r)) {
        const { address: u } = await zn.connectSocial({
          social: r,
          closeModalOnConnect: n,
          onOpenFarcaster() {
            de.open({ view: "ConnectingFarcaster" });
          },
          onConnect() {
            ee.replace("ProfileWallets");
          }
        });
        c = u;
      } else {
        const { address: u } = await zn.connectEmail({
          closeModalOnConnect: n,
          onOpen() {
            de.open({ view: "EmailLogin" });
          },
          onConnect() {
            ee.replace("ProfileWallets");
          }
        });
        c = u;
      }
    else if (a) {
      const { address: u } = await zn.connectWalletConnect({
        walletConnect: !0,
        connector: i,
        closeModalOnConnect: n,
        onOpen(h) {
          const p = h ? "AllWallets" : "ConnectingWalletConnect";
          de.state.open ? ee.push(p) : de.open({ view: p });
        },
        onConnect() {
          ee.replace("ProfileWallets");
        }
      });
      c = u;
    } else {
      const u = await D.connectExternal({
        id: i.id,
        type: i.type,
        provider: i.provider,
        chain: e
      }, e);
      u && (c = u.address);
    }
    return o && s && await D.handleAuthAccountSwitch({ address: s, namespace: e }), c;
  },
  async switchConnection({ connection: t, address: e, namespace: s, closeModalOnConnect: n, onChange: i }) {
    var c;
    let r;
    const o = (c = f.getAccountData(s)) == null ? void 0 : c.caipAddress;
    if (o) {
      const { address: l } = Ge.parseCaipAddress(o);
      r = l;
    }
    const a = er.getConnectionStatus(t, s);
    switch (a) {
      case "connected":
      case "active": {
        const l = await D.handleActiveConnection({
          connection: t,
          namespace: s,
          address: e
        });
        if (r && l) {
          const d = l.toLowerCase() !== r.toLowerCase();
          i == null || i({
            address: l,
            namespace: s,
            hasSwitchedAccount: d,
            hasSwitchedWallet: a === "active"
          });
        }
        break;
      }
      case "disconnected": {
        const l = await D.handleDisconnectedConnection({
          connection: t,
          namespace: s,
          address: e,
          closeModalOnConnect: n
        });
        l && (i == null || i({
          address: l,
          namespace: s,
          hasSwitchedAccount: !0,
          hasSwitchedWallet: !0
        }));
        break;
      }
      default:
        throw new Error(`Invalid connection status: ${a}`);
    }
  }
}, D = Ft(Ah), Or = {
  /**
   * Creates a Balance object from an ERC7811 Asset object
   * @param asset - Asset object to convert
   * @param chainId - Chain ID in CAIP-2 format
   * @returns Balance object
   */
  createBalance(t, e) {
    const s = {
      name: t.metadata.name || "",
      symbol: t.metadata.symbol || "",
      decimals: t.metadata.decimals || 0,
      value: t.metadata.value || 0,
      price: t.metadata.price || 0,
      iconUrl: t.metadata.iconUrl || ""
    };
    return {
      name: s.name,
      symbol: s.symbol,
      chainId: e,
      address: t.address === "native" ? void 0 : this.convertAddressToCAIP10Address(t.address, e),
      value: s.value,
      price: s.price,
      quantity: {
        decimals: s.decimals.toString(),
        numeric: this.convertHexToBalance({
          hex: t.balance,
          decimals: s.decimals
        })
      },
      iconUrl: s.iconUrl
    };
  },
  /**
   * Converts a hex string to a Balance object
   * @param hex - Hex string to convert
   * @param decimals - Number of decimals to use
   * @returns Balance object
   */
  convertHexToBalance({ hex: t, decimals: e }) {
    return _l(BigInt(t), e);
  },
  /**
   * Converts an address to a CAIP-10 address
   * @param address - Address to convert
   * @param chainId - Chain ID in CAIP-2 format
   * @returns CAIP-10 address
   */
  convertAddressToCAIP10Address(t, e) {
    return `${e}:${t}`;
  },
  /**
   *  Creates a CAIP-2 Chain ID from a chain ID and namespace
   * @param chainId  - Chain ID in hex format
   * @param namespace  - Chain namespace
   * @returns
   */
  createCAIP2ChainId(t, e) {
    return `${e}:${parseInt(t, 16)}`;
  },
  /**
   * Gets the chain ID in hex format from a CAIP-2 Chain ID
   * @param caip2ChainId - CAIP-2 Chain ID
   * @returns Chain ID in hex format
   */
  getChainIdHexFromCAIP2ChainId(t) {
    const e = t.split(":");
    if (e.length < 2 || !e[1])
      return "0x0";
    const s = e[1], n = parseInt(s, 10);
    return isNaN(n) ? "0x0" : `0x${n.toString(16)}`;
  },
  /**
   * Checks if a response is a valid WalletGetAssetsResponse
   * @param response - The response to check
   * @returns True if the response is a valid WalletGetAssetsResponse, false otherwise
   */
  isWalletGetAssetsResponse(t) {
    return typeof t != "object" || t === null ? !1 : Object.values(t).every((e) => Array.isArray(e) && e.every((s) => this.isValidAsset(s)));
  },
  /**
   * Checks if an asset object is valid.
   * @param asset - The asset object to check.
   * @returns True if the asset is valid, false otherwise.
   */
  isValidAsset(t) {
    return typeof t == "object" && t !== null && typeof t.address == "string" && typeof t.balance == "string" && (t.type === "ERC20" || t.type === "NATIVE") && typeof t.metadata == "object" && t.metadata !== null && typeof t.metadata.name == "string" && typeof t.metadata.symbol == "string" && typeof t.metadata.decimals == "number" && typeof t.metadata.price == "number" && typeof t.metadata.iconUrl == "string";
  }
};
let kr;
async function xa() {
  if (!kr) {
    const { createPublicClient: t, http: e, defineChain: s } = await import("./index-CpaYhRLB.mjs").then((n) => n.i);
    kr = {
      createPublicClient: t,
      http: e,
      defineChain: s
    };
  }
  return kr;
}
const lo = {
  getBlockchainApiRpcUrl(t, e) {
    const s = new URL("https://rpc.walletconnect.org/v1/");
    return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
  },
  async getViemChain(t) {
    const { defineChain: e } = await xa(), { chainId: s } = Ge.parseCaipNetworkId(t.caipNetworkId);
    return e({ ...t, id: Number(s) });
  },
  async createViemPublicClient(t) {
    const { createPublicClient: e, http: s } = await xa(), n = A.state.projectId, i = await lo.getViemChain(t);
    if (!i)
      throw new Error(`Chain ${t.caipNetworkId} not found in viem/chains`);
    return e({
      chain: i,
      transport: s(lo.getBlockchainApiRpcUrl(t.caipNetworkId, n))
    });
  }
}, ea = {
  /**
   * Get the balances of the user's tokens. If user connected with Auth provider or and on the EIP155 network,
   * it'll use the `wallet_getAssets` and `wallet_getCapabilities` calls to fetch the balance rather than Blockchain API
   * @param forceUpdate - If true, the balances will be fetched from the server
   * @returns The balances of the user's tokens
   */
  async getMyTokensWithBalance(t = {
    forceUpdate: void 0,
    caipNetwork: f.state.activeCaipNetwork,
    address: ((e) => (e = f.getAccountData()) == null ? void 0 : e.address)()
  }) {
    const { forceUpdate: s, caipNetwork: n, address: i } = t, r = R.getConnectorId("eip155") === C.CONNECTOR_ID.AUTH;
    if (!i)
      return [];
    const o = n ? `${n.caipNetworkId}:${i}` : i, a = k.getBalanceCacheForCaipAddress(o);
    if (a)
      return a.balances;
    if (n && n.chainNamespace === C.CHAIN.EVM && r) {
      const l = await this.getEIP155Balances(i, n);
      if (l)
        return this.filterLowQualityTokens(l);
    }
    const c = await te.getBalance(i, n == null ? void 0 : n.caipNetworkId, s);
    return this.filterLowQualityTokens(c.balances);
  },
  /**
   * Get the balances of the user's tokens on the EIP155 network using native `wallet_getAssets` and `wallet_getCapabilities` calls
   * @param address - The address of the user
   * @param caipNetwork - The CAIP network
   * @returns The balances of the user's tokens on the EIP155 network
   */
  async getEIP155Balances(t, e) {
    var s, n;
    try {
      const i = Or.getChainIdHexFromCAIP2ChainId(e.caipNetworkId), r = await D.getCapabilities(t);
      if (!((n = (s = r == null ? void 0 : r[i]) == null ? void 0 : s.assetDiscovery) != null && n.supported))
        return null;
      const o = await D.walletGetAssets({
        account: t,
        chainFilter: [i]
      });
      if (!Or.isWalletGetAssetsResponse(o))
        return null;
      const c = (o[i] || []).map((l) => Or.createBalance(l, e.caipNetworkId));
      return k.updateBalanceCache({
        caipAddress: `${e.caipNetworkId}:${t}`,
        balance: { balances: c },
        timestamp: Date.now()
      }), c;
    } catch {
      return null;
    }
  },
  /**
   * The 1Inch API includes many low-quality tokens in the balance response,
   * which appear inconsistently. This filter prevents them from being displayed.
   */
  filterLowQualityTokens(t) {
    return t.filter((e) => e.quantity.decimals !== "0");
  },
  async fetchERC20Balance({ caipAddress: t, assetAddress: e, caipNetwork: s }) {
    const n = await lo.createViemPublicClient(s), { address: i } = Ge.parseCaipAddress(t), [{ result: r }, { result: o }, { result: a }, { result: c }] = await n.multicall({
      contracts: [
        {
          address: e,
          functionName: "name",
          args: [],
          abi: Ti
        },
        {
          address: e,
          functionName: "symbol",
          args: [],
          abi: Ti
        },
        {
          address: e,
          functionName: "balanceOf",
          args: [i],
          abi: Ti
        },
        {
          address: e,
          functionName: "decimals",
          args: [],
          abi: Ti
        }
      ]
    });
    return {
      name: r,
      symbol: o,
      decimals: c,
      balance: a && c ? _l(a, c) : "0"
    };
  }
}, xr = {
  adapters: {}
}, Ml = {
  state: xr,
  initialize(t) {
    xr.adapters = { ...t };
  },
  get(t) {
    return xr.adapters[t];
  }
}, tr = {
  eip155: void 0,
  solana: void 0,
  polkadot: void 0,
  bip122: void 0,
  cosmos: void 0,
  sui: void 0,
  stacks: void 0,
  ton: void 0
}, ct = Pe({
  providers: { ...tr },
  providerIds: { ...tr }
}), Te = {
  state: ct,
  subscribeKey(t, e) {
    return Ye(ct, t, e);
  },
  subscribe(t) {
    return st(ct, () => {
      t(ct);
    });
  },
  subscribeProviders(t) {
    return st(ct.providers, () => t(ct.providers));
  },
  setProvider(t, e) {
    t && e && (ct.providers[t] = mi(e));
  },
  getProvider(t) {
    if (t)
      return ct.providers[t];
  },
  setProviderId(t, e) {
    e && (ct.providerIds[t] = e);
  },
  getProviderId(t) {
    if (t)
      return ct.providerIds[t];
  },
  reset() {
    ct.providers = { ...tr }, ct.providerIds = { ...tr };
  },
  resetChain(t) {
    ct.providers[t] = void 0, ct.providerIds[t] = void 0;
  }
}, Ih = {
  async getTokenList(t) {
    var n;
    const e = await te.fetchSwapTokens({
      chainId: t
    });
    return ((n = e == null ? void 0 : e.tokens) == null ? void 0 : n.map((i) => ({
      ...i,
      eip2612: !1,
      quantity: {
        decimals: "0",
        numeric: "0"
      },
      price: 0,
      value: 0
    }))) || [];
  },
  async fetchGasPrice() {
    var e;
    const t = f.state.activeCaipNetwork;
    if (!t)
      return null;
    try {
      switch (t.chainNamespace) {
        case "solana":
          const s = (e = await (D == null ? void 0 : D.estimateGas({ chainNamespace: "solana" }))) == null ? void 0 : e.toString();
          return {
            standard: s,
            fast: s,
            instant: s
          };
        case "eip155":
        default:
          return await te.fetchGasPrice({
            chainId: t.caipNetworkId
          });
      }
    } catch {
      return null;
    }
  },
  async fetchSwapAllowance({ tokenAddress: t, userAddress: e, sourceTokenAmount: s, sourceTokenDecimals: n }) {
    const i = await te.fetchSwapAllowance({
      tokenAddress: t,
      userAddress: e
    });
    if (i != null && i.allowance && s && n) {
      const r = D.parseUnits(s, n) || 0;
      return BigInt(i.allowance) >= r;
    }
    return !1;
  },
  async getMyTokensWithBalance(t) {
    var s;
    const e = await ea.getMyTokensWithBalance({
      forceUpdate: t,
      caipNetwork: f.state.activeCaipNetwork,
      address: (s = f.getAccountData()) == null ? void 0 : s.address
    });
    return f.setAccountProp("tokenBalance", e, f.state.activeChain), this.mapBalancesToSwapTokens(e);
  },
  /**
   * Maps the balances from Blockchain API to SwapTokenWithBalance array
   * @param balances
   * @returns SwapTokenWithBalance[]
   */
  mapBalancesToSwapTokens(t) {
    return (t == null ? void 0 : t.map((e) => ({
      ...e,
      address: e != null && e.address ? e.address : Fl(),
      decimals: parseInt(e.quantity.decimals, 10),
      logoUri: e.iconUrl,
      eip2612: !1
    }))) || [];
  },
  async handleSwapError(t) {
    var e, s;
    try {
      const n = t == null ? void 0 : t.cause;
      if (!(n != null && n.json))
        return;
      const i = await n.json(), r = (s = (e = i == null ? void 0 : i.reasons) == null ? void 0 : e[0]) == null ? void 0 : s.description;
      return r != null && r.includes("insufficient liquidity") ? "Insufficient liquidity" : void 0;
    } catch {
      return;
    }
  }
}, we = Pe({
  tokenBalances: [],
  loading: !1
}), Nh = {
  state: we,
  subscribe(t) {
    return st(we, () => t(we));
  },
  subscribeKey(t, e) {
    return Ye(we, t, e);
  },
  setToken(t) {
    t && (we.token = mi(t));
  },
  setTokenAmount(t) {
    we.sendTokenAmount = t;
  },
  setReceiverAddress(t) {
    we.receiverAddress = t;
  },
  setReceiverProfileImageUrl(t) {
    we.receiverProfileImageUrl = t;
  },
  setReceiverProfileName(t) {
    we.receiverProfileName = t;
  },
  setNetworkBalanceInUsd(t) {
    we.networkBalanceInUSD = t;
  },
  setLoading(t) {
    we.loading = t;
  },
  getSdkEventProperties(t) {
    var e, s;
    return {
      message: W.parseError(t),
      isSmartAccount: Lt(f.state.activeChain) === Cs.ACCOUNT_TYPES.SMART_ACCOUNT,
      token: ((e = we.token) == null ? void 0 : e.symbol) || "",
      amount: we.sendTokenAmount ?? 0,
      network: ((s = f.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) || ""
    };
  },
  async sendToken() {
    var t;
    try {
      switch (ae.setLoading(!0), (t = f.state.activeCaipNetwork) == null ? void 0 : t.chainNamespace) {
        case "eip155":
          await ae.sendEvmToken();
          return;
        case "solana":
          await ae.sendSolanaToken();
          return;
        default:
          throw new Error("Unsupported chain");
      }
    } catch (e) {
      throw Es.isUserRejectedRequestError(e) ? new Dl(e) : e;
    } finally {
      ae.setLoading(!1);
    }
  },
  async sendEvmToken() {
    var s, n, i;
    const t = f.state.activeChain;
    if (!t)
      throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
    const e = Lt(t);
    if (!ae.state.sendTokenAmount || !ae.state.receiverAddress)
      throw new Error("An amount and receiver address are required");
    if (!ae.state.token)
      throw new Error("A token is required");
    if ((s = ae.state.token) != null && s.address) {
      oe.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: e === Cs.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ae.state.token.address,
          amount: ae.state.sendTokenAmount,
          network: ((n = f.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) || ""
        }
      });
      const { hash: r } = await ae.sendERC20Token({
        receiverAddress: ae.state.receiverAddress,
        tokenAddress: ae.state.token.address,
        sendTokenAmount: ae.state.sendTokenAmount,
        decimals: ae.state.token.quantity.decimals
      });
      r && (we.hash = r);
    } else {
      oe.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: e === Cs.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ae.state.token.symbol || "",
          amount: ae.state.sendTokenAmount,
          network: ((i = f.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId) || ""
        }
      });
      const { hash: r } = await ae.sendNativeToken({
        receiverAddress: ae.state.receiverAddress,
        sendTokenAmount: ae.state.sendTokenAmount,
        decimals: ae.state.token.quantity.decimals
      });
      r && (we.hash = r);
    }
  },
  async fetchTokenBalance(t) {
    var o, a, c;
    we.loading = !0;
    const e = f.state.activeChain, s = (o = f.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId, n = (a = f.state.activeCaipNetwork) == null ? void 0 : a.chainNamespace, i = ((c = f.getAccountData(e)) == null ? void 0 : c.caipAddress) ?? f.state.activeCaipAddress, r = i ? W.getPlainAddress(i) : void 0;
    if (we.lastRetry && !W.isAllowedRetry(we.lastRetry, 30 * le.ONE_SEC_MS))
      return we.loading = !1, [];
    try {
      if (r && s && n) {
        const l = await ea.getMyTokensWithBalance();
        return we.tokenBalances = l, we.lastRetry = void 0, l;
      }
    } catch (l) {
      we.lastRetry = Date.now(), t == null || t(l), rs.showError("Token Balance Unavailable");
    } finally {
      we.loading = !1;
    }
    return [];
  },
  fetchNetworkBalance() {
    if (we.tokenBalances.length === 0)
      return;
    const t = Ih.mapBalancesToSwapTokens(we.tokenBalances);
    if (!t)
      return;
    const e = t.find((s) => s.address === Fl());
    e && (we.networkBalanceInUSD = e ? Ul.multiply(e.quantity.numeric, e.price).toString() : "0");
  },
  async sendNativeToken(t) {
    var o, a, c, l;
    ee.pushTransactionStack({});
    const e = t.receiverAddress, s = (o = f.getAccountData()) == null ? void 0 : o.address, n = D.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), r = await D.sendTransaction({
      chainNamespace: C.CHAIN.EVM,
      to: e,
      address: s,
      data: "0x",
      value: n ?? BigInt(0)
    });
    return oe.sendEvent({
      type: "track",
      event: "SEND_SUCCESS",
      properties: {
        isSmartAccount: Lt("eip155") === Cs.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((a = ae.state.token) == null ? void 0 : a.symbol) || "",
        amount: t.sendTokenAmount,
        network: ((c = f.state.activeCaipNetwork) == null ? void 0 : c.caipNetworkId) || "",
        hash: r || ""
      }
    }), (l = D._getClient()) == null || l.updateBalance("eip155"), ae.resetSend(), { hash: r };
  },
  async sendERC20Token(t) {
    var n, i, r;
    ee.pushTransactionStack({
      onSuccess() {
        ee.replace("Account");
      }
    });
    const e = D.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals)), s = (n = f.getAccountData()) == null ? void 0 : n.address;
    if (s && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
      const o = W.getPlainAddress(t.tokenAddress);
      if (!o)
        throw new Error("SendController:sendERC20Token - tokenAddress is required");
      const a = await D.writeContract({
        fromAddress: s,
        tokenAddress: o,
        args: [t.receiverAddress, e ?? BigInt(0)],
        method: "transfer",
        abi: Ju.getERC20Abi(o),
        chainNamespace: C.CHAIN.EVM
      });
      return oe.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: Lt("eip155") === Cs.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((i = ae.state.token) == null ? void 0 : i.symbol) || "",
          amount: t.sendTokenAmount,
          network: ((r = f.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId) || "",
          hash: a || ""
        }
      }), ae.resetSend(), { hash: a };
    }
    return { hash: void 0 };
  },
  async sendSolanaToken() {
    var s, n, i;
    if (!ae.state.sendTokenAmount || !ae.state.receiverAddress)
      throw new Error("An amount and receiver address are required");
    ee.pushTransactionStack({
      onSuccess() {
        ee.replace("Account");
      }
    });
    let t;
    ae.state.token && ae.state.token.address !== le.SOLANA_NATIVE_TOKEN_ADDRESS && (W.isCaipAddress(ae.state.token.address) ? t = W.getPlainAddress(ae.state.token.address) : t = ae.state.token.address);
    const e = await D.sendTransaction({
      chainNamespace: "solana",
      tokenMint: t,
      to: ae.state.receiverAddress,
      value: ae.state.sendTokenAmount
    });
    e && (we.hash = e), (s = D._getClient()) == null || s.updateBalance("solana"), oe.sendEvent({
      type: "track",
      event: "SEND_SUCCESS",
      properties: {
        isSmartAccount: !1,
        token: ((n = ae.state.token) == null ? void 0 : n.symbol) || "",
        amount: ae.state.sendTokenAmount,
        network: ((i = f.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId) || "",
        hash: e || ""
      }
    }), ae.resetSend();
  },
  resetSend() {
    we.token = void 0, we.sendTokenAmount = void 0, we.receiverAddress = void 0, we.receiverProfileImageUrl = void 0, we.receiverProfileName = void 0, we.loading = !1, we.tokenBalances = [];
  }
}, ae = Ft(Nh), Pr = {
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: !1,
  addressLabels: /* @__PURE__ */ new Map(),
  user: void 0,
  preferredAccountType: void 0
}, xi = {
  caipNetwork: void 0,
  supportsAllNetworks: !0,
  smartAccountEnabledNetworks: []
}, M = Pe({
  chains: Ru(),
  activeCaipAddress: void 0,
  activeChain: void 0,
  activeCaipNetwork: void 0,
  noAdapters: !1,
  universalAdapter: {
    connectionControllerClient: void 0
  },
  isSwitchingNamespace: !1
}), Wl = {
  state: M,
  subscribe(t) {
    return st(M, () => {
      t(M);
    });
  },
  subscribeKey(t, e) {
    return Ye(M, t, e);
  },
  subscribeAccountStateProp(t, e, s) {
    var i;
    const n = s || M.activeChain;
    return n ? Ye(((i = M.chains.get(n)) == null ? void 0 : i.accountState) || {}, t, e) : () => {
    };
  },
  subscribeChainProp(t, e, s) {
    let n;
    return st(M.chains, () => {
      var r;
      const i = s || M.activeChain;
      if (i) {
        const o = (r = M.chains.get(i)) == null ? void 0 : r[t];
        n !== o && (n = o, e(o));
      }
    });
  },
  initialize(t, e, s) {
    const { chainId: n, namespace: i } = k.getActiveNetworkProps(), r = e == null ? void 0 : e.find((d) => d.id.toString() === (n == null ? void 0 : n.toString())), a = t.find((d) => (d == null ? void 0 : d.namespace) === i) || (t == null ? void 0 : t[0]), c = t.map((d) => d.namespace).filter((d) => d !== void 0), l = A.state.enableEmbedded ? /* @__PURE__ */ new Set([...c]) : /* @__PURE__ */ new Set([...(e == null ? void 0 : e.map((d) => d.chainNamespace)) ?? []]);
    ((t == null ? void 0 : t.length) === 0 || !a) && (M.noAdapters = !0), M.noAdapters || (M.activeChain = a == null ? void 0 : a.namespace, M.activeCaipNetwork = r, f.setChainNetworkData(a == null ? void 0 : a.namespace, {
      caipNetwork: r
    }), M.activeChain && zt.set({ activeChain: a == null ? void 0 : a.namespace })), l.forEach((d) => {
      const u = e == null ? void 0 : e.filter((g) => g.chainNamespace === d), h = k.getPreferredAccountTypes() || {}, p = { ...A.state.defaultAccountTypes, ...h };
      f.state.chains.set(d, {
        namespace: d,
        networkState: Pe({ ...xi, caipNetwork: u == null ? void 0 : u[0] }),
        accountState: Pe({
          ...Pr,
          preferredAccountType: p[d]
        }),
        caipNetworks: u ?? [],
        ...s
      }), f.setRequestedCaipNetworks(u ?? [], d);
    });
  },
  removeAdapter(t) {
    var e, s;
    if (M.activeChain === t) {
      const n = Array.from(M.chains.entries()).find(([i]) => i !== t);
      if (n) {
        const i = (s = (e = n[1]) == null ? void 0 : e.caipNetworks) == null ? void 0 : s[0];
        i && f.setActiveCaipNetwork(i);
      }
    }
    M.chains.delete(t);
  },
  addAdapter(t, { connectionControllerClient: e }, s) {
    if (!t.namespace)
      throw new Error("ChainController:addAdapter - adapter must have a namespace");
    M.chains.set(t.namespace, {
      namespace: t.namespace,
      networkState: { ...xi, caipNetwork: s[0] },
      accountState: { ...Pr },
      caipNetworks: s,
      connectionControllerClient: e
    }), f.setRequestedCaipNetworks((s == null ? void 0 : s.filter((n) => n.chainNamespace === t.namespace)) ?? [], t.namespace);
  },
  addNetwork(t) {
    var s;
    const e = M.chains.get(t.chainNamespace);
    if (e) {
      const n = [...e.caipNetworks || []];
      (s = e.caipNetworks) != null && s.find((i) => i.id === t.id) || n.push(t), M.chains.set(t.chainNamespace, { ...e, caipNetworks: n }), f.setRequestedCaipNetworks(n, t.chainNamespace), R.filterByNamespace(t.chainNamespace, !0);
    }
  },
  removeNetwork(t, e) {
    var n, i, r;
    const s = M.chains.get(t);
    if (s) {
      const o = ((n = M.activeCaipNetwork) == null ? void 0 : n.id) === e, a = [
        ...((i = s.caipNetworks) == null ? void 0 : i.filter((c) => c.id !== e)) || []
      ];
      o && ((r = s == null ? void 0 : s.caipNetworks) != null && r[0]) && f.setActiveCaipNetwork(s.caipNetworks[0]), M.chains.set(t, { ...s, caipNetworks: a }), f.setRequestedCaipNetworks(a || [], t), a.length === 0 && R.filterByNamespace(t, !1);
    }
  },
  setAdapterNetworkState(t, e) {
    const s = M.chains.get(t);
    s && (s.networkState = {
      ...s.networkState || xi,
      ...e
    }, M.chains.set(t, s));
  },
  setChainAccountData(t, e, s = !0) {
    if (!t)
      throw new Error("Chain is required to update chain account data");
    const n = M.chains.get(t);
    if (n) {
      const i = {
        ...n.accountState || Pr,
        ...e
      };
      M.chains.set(t, { ...n, accountState: i }), (M.chains.size === 1 || M.activeChain === t) && e.caipAddress && (M.activeCaipAddress = e.caipAddress);
    }
  },
  setChainNetworkData(t, e) {
    if (!t)
      return;
    const s = M.chains.get(t);
    if (s) {
      const n = { ...s.networkState || xi, ...e };
      M.chains.set(t, { ...s, networkState: n });
    }
  },
  // eslint-disable-next-line max-params
  setAccountProp(t, e, s, n = !0) {
    f.setChainAccountData(s, { [t]: e }, n);
  },
  setActiveNamespace(t) {
    var n, i;
    M.activeChain = t;
    const e = t ? M.chains.get(t) : void 0, s = (n = e == null ? void 0 : e.networkState) == null ? void 0 : n.caipNetwork;
    s != null && s.id && t && (M.activeCaipAddress = (i = e == null ? void 0 : e.accountState) == null ? void 0 : i.caipAddress, M.activeCaipNetwork = s, f.setChainNetworkData(t, { caipNetwork: s }), k.setActiveCaipNetworkId(s == null ? void 0 : s.caipNetworkId), zt.set({
      activeChain: t,
      selectedNetworkId: s == null ? void 0 : s.caipNetworkId
    }));
  },
  setActiveCaipNetwork(t) {
    var r, o;
    if (!t)
      return;
    const e = M.activeChain === t.chainNamespace;
    e || f.setIsSwitchingNamespace(!0);
    const s = M.chains.get(t.chainNamespace);
    M.activeChain = t.chainNamespace, M.activeCaipNetwork = t, f.setChainNetworkData(t.chainNamespace, { caipNetwork: t });
    let n = (r = s == null ? void 0 : s.accountState) == null ? void 0 : r.address;
    if (n)
      M.activeCaipAddress = `${t.chainNamespace}:${t.id}:${n}`;
    else if (e && M.activeCaipAddress) {
      const { address: a } = Ge.parseCaipAddress(M.activeCaipAddress);
      n = a, M.activeCaipAddress = `${t.caipNetworkId}:${n}`;
    } else
      M.activeCaipAddress = void 0;
    f.setChainAccountData(t.chainNamespace, {
      address: n,
      caipAddress: M.activeCaipAddress
    }), ae.resetSend(), zt.set({
      activeChain: M.activeChain,
      selectedNetworkId: (o = M.activeCaipNetwork) == null ? void 0 : o.caipNetworkId
    }), k.setActiveCaipNetworkId(t.caipNetworkId), !f.checkIfSupportedNetwork(t.chainNamespace) && A.state.enableNetworkSwitch && !A.state.allowUnsupportedChain && !D.state.wcBasic && f.showUnsupportedChainUI();
  },
  addCaipNetwork(t) {
    var s;
    if (!t)
      return;
    const e = M.chains.get(t.chainNamespace);
    e && ((s = e == null ? void 0 : e.caipNetworks) == null || s.push(t));
  },
  async switchActiveNamespace(t) {
    var i;
    if (!t)
      return;
    const e = t !== f.state.activeChain, s = (i = f.getNetworkData(t)) == null ? void 0 : i.caipNetwork, n = f.getCaipNetworkByNamespace(t, s == null ? void 0 : s.id);
    e && n && await f.switchActiveNetwork(n);
  },
  async switchActiveNetwork(t, { throwOnFailure: e = !1 } = {}) {
    var o;
    const s = f.state.activeChain;
    if (!s)
      throw new Error("ChainController:switchActiveNetwork - namespace is required");
    const n = Te.getProviderId(M.activeChain) === "AUTH", i = (o = f.getAccountData(s)) == null ? void 0 : o.address, r = C.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t.chainNamespace);
    try {
      if (i && t.chainNamespace === s || n && r) {
        const a = Ml.get(t.chainNamespace);
        if (!a)
          throw new Error("Adapter not found");
        await a.switchNetwork({ caipNetwork: t });
      }
      f.setActiveCaipNetwork(t);
    } catch (a) {
      if (e)
        throw a;
    }
    oe.sendEvent({
      type: "track",
      event: "SWITCH_NETWORK",
      properties: { network: t.caipNetworkId }
    });
  },
  getConnectionControllerClient(t) {
    const e = t || M.activeChain;
    if (!e)
      throw new Error("Chain is required to get connection controller client");
    const s = M.chains.get(e);
    if (!(s != null && s.connectionControllerClient))
      throw new Error("ConnectionController client not set");
    return s.connectionControllerClient;
  },
  getNetworkProp(t, e) {
    var n;
    const s = (n = M.chains.get(e)) == null ? void 0 : n.networkState;
    if (s)
      return s[t];
  },
  getRequestedCaipNetworks(t) {
    const e = M.chains.get(t), { approvedCaipNetworkIds: s = [], requestedCaipNetworks: n = [] } = (e == null ? void 0 : e.networkState) || {};
    return W.sortRequestedNetworks(s, n).filter((o) => o == null ? void 0 : o.id);
  },
  getAllRequestedCaipNetworks() {
    const t = [];
    return M.chains.forEach((e) => {
      if (!e.namespace)
        throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
      const s = f.getRequestedCaipNetworks(e.namespace);
      t.push(...s);
    }), t;
  },
  setRequestedCaipNetworks(t, e) {
    f.setAdapterNetworkState(e, { requestedCaipNetworks: t });
    const n = f.getAllRequestedCaipNetworks().map((r) => r.chainNamespace), i = Array.from(new Set(n));
    R.filterByNamespaces(i);
  },
  getAllApprovedCaipNetworkIds() {
    const t = [];
    return M.chains.forEach((e) => {
      if (!e.namespace)
        throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
      const s = f.getApprovedCaipNetworkIds(e.namespace);
      t.push(...s);
    }), t;
  },
  getActiveCaipNetwork(t) {
    var e, s;
    return t ? (s = (e = M.chains.get(t)) == null ? void 0 : e.networkState) == null ? void 0 : s.caipNetwork : M.activeCaipNetwork;
  },
  getActiveCaipAddress() {
    return M.activeCaipAddress;
  },
  getApprovedCaipNetworkIds(t) {
    var n;
    const e = M.chains.get(t);
    return ((n = e == null ? void 0 : e.networkState) == null ? void 0 : n.approvedCaipNetworkIds) || [];
  },
  setApprovedCaipNetworksData(t, e) {
    f.setAdapterNetworkState(t, e);
  },
  checkIfSupportedNetwork(t, e) {
    var i;
    const s = e || ((i = M.activeCaipNetwork) == null ? void 0 : i.caipNetworkId), n = f.getRequestedCaipNetworks(t);
    return n.length ? n == null ? void 0 : n.some((r) => r.caipNetworkId === s) : !0;
  },
  checkIfSupportedChainId(t) {
    if (!M.activeChain)
      return !0;
    const e = f.getRequestedCaipNetworks(M.activeChain);
    return e == null ? void 0 : e.some((s) => s.id === t);
  },
  checkIfSmartAccountEnabled() {
    var n, i;
    const t = Pl.caipNetworkIdToNumber((n = M.activeCaipNetwork) == null ? void 0 : n.caipNetworkId);
    if (!M.activeChain || !t)
      return !1;
    const s = ((i = eh.get(Vi.SMART_ACCOUNT_ENABLED_NETWORKS)) == null ? void 0 : i.split(",")) || [];
    return !!(s != null && s.includes(t.toString()));
  },
  showUnsupportedChainUI() {
    de.open({ view: "UnsupportedChain" });
  },
  checkIfNamesSupported() {
    const t = M.activeCaipNetwork;
    return !!(t != null && t.chainNamespace && le.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace));
  },
  resetNetwork(t) {
    f.setAdapterNetworkState(t, {
      approvedCaipNetworkIds: void 0,
      supportsAllNetworks: !0
    });
  },
  resetAccount(t) {
    var i, r;
    const e = t;
    if (!e)
      throw new Error("Chain is required to set account prop");
    const s = (r = (i = f.state.chains.get(e)) == null ? void 0 : i.accountState) == null ? void 0 : r.preferredAccountType, n = A.state.defaultAccountTypes[e];
    M.activeCaipAddress = void 0, f.setChainAccountData(e, {
      smartAccountDeployed: !1,
      currentTab: 0,
      caipAddress: void 0,
      address: void 0,
      balance: void 0,
      balanceSymbol: void 0,
      profileName: void 0,
      profileImage: void 0,
      addressExplorerUrl: void 0,
      tokenBalance: [],
      connectedWalletInfo: void 0,
      preferredAccountType: n || s,
      socialProvider: void 0,
      socialWindow: void 0,
      farcasterUrl: void 0,
      user: void 0,
      status: "disconnected"
    }), R.removeConnectorId(e);
  },
  setIsSwitchingNamespace(t) {
    M.isSwitchingNamespace = t;
  },
  getFirstCaipNetworkSupportsAuthConnector() {
    var s, n;
    const t = [];
    let e;
    if (M.chains.forEach((i) => {
      C.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((r) => r === i.namespace) && i.namespace && t.push(i.namespace);
    }), t.length > 0) {
      const i = t[0];
      return e = i ? (n = (s = M.chains.get(i)) == null ? void 0 : s.caipNetworks) == null ? void 0 : n[0] : void 0, e;
    }
  },
  getAccountData(t) {
    var s;
    const e = t || M.activeChain;
    if (e)
      return (s = f.state.chains.get(e)) == null ? void 0 : s.accountState;
  },
  getNetworkData(t) {
    var s;
    const e = t || M.activeChain;
    if (e)
      return (s = f.state.chains.get(e)) == null ? void 0 : s.networkState;
  },
  getCaipNetworkByNamespace(t, e) {
    var i, r, o;
    if (!t)
      return;
    const s = f.state.chains.get(t), n = (i = s == null ? void 0 : s.caipNetworks) == null ? void 0 : i.find((a) => a.id.toString() === (e == null ? void 0 : e.toString()));
    return n || ((r = s == null ? void 0 : s.networkState) == null ? void 0 : r.caipNetwork) || ((o = s == null ? void 0 : s.caipNetworks) == null ? void 0 : o[0]);
  },
  /**
   * Get the requested CaipNetwork IDs for a given namespace. If namespace is not provided, all requested CaipNetwork IDs will be returned
   * @param namespace - The namespace to get the requested CaipNetwork IDs for
   * @returns The requested CaipNetwork IDs
   */
  getRequestedCaipNetworkIds() {
    const t = R.state.filterByNamespace;
    return (t ? [M.chains.get(t)] : Array.from(M.chains.values())).flatMap((s) => (s == null ? void 0 : s.caipNetworks) || []).map((s) => s.caipNetworkId);
  },
  getCaipNetworks(t) {
    return t ? f.getRequestedCaipNetworks(t) : f.getAllRequestedCaipNetworks();
  },
  getCaipNetworkById(t, e) {
    return Wl.getCaipNetworks(e).find((s) => s.id.toString() === t.toString() || s.caipNetworkId.toString() === t.toString());
  },
  setLastConnectedSIWECaipNetwork(t) {
    M.lastConnectedSIWECaipNetwork = t;
  },
  getLastConnectedSIWECaipNetwork() {
    return M.lastConnectedSIWECaipNetwork;
  },
  async fetchTokenBalance(t) {
    var o, a;
    const e = f.getAccountData();
    if (!e)
      return [];
    const s = (o = f.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId, n = (a = f.state.activeCaipNetwork) == null ? void 0 : a.chainNamespace, i = f.state.activeCaipAddress, r = i ? W.getPlainAddress(i) : void 0;
    if (f.setAccountProp("balanceLoading", !0, n), e.lastRetry && !W.isAllowedRetry(e.lastRetry, 30 * le.ONE_SEC_MS))
      return f.setAccountProp("balanceLoading", !1, n), [];
    try {
      if (r && s && n) {
        const c = await ea.getMyTokensWithBalance();
        return f.setAccountProp("tokenBalance", c, n), f.setAccountProp("lastRetry", void 0, n), f.setAccountProp("balanceLoading", !1, n), c;
      }
    } catch (c) {
      f.setAccountProp("lastRetry", Date.now(), n), t == null || t(c), rs.showError("Token Balance Unavailable");
    } finally {
      f.setAccountProp("balanceLoading", !1, n);
    }
    return [];
  },
  isCaipNetworkDisabled(t) {
    var c;
    const e = t.chainNamespace, s = !!((c = f.getAccountData(e)) != null && c.caipAddress), n = f.getAllApprovedCaipNetworkIds(), i = f.getNetworkProp("supportsAllNetworks", e) !== !1, r = R.getConnectorId(e), o = R.getAuthConnector(), a = r === C.CONNECTOR_ID.AUTH && o;
    return !s || i || a ? !1 : !(n != null && n.includes(t.caipNetworkId));
  }
}, f = Ft(Wl), Sh = {
  /**
   * Function to handle the network switch.
   * This function has variety of conditions to handle the network switch depending on the connectors or namespace's connection states.
   * @param args.network - The network to switch to.
   * @param args.shouldConfirmSwitch - Whether to confirm the switch. If true, the user will be asked to confirm the switch if necessary.
   * @returns void
   */
  onSwitchNetwork({ network: t, ignoreSwitchConfirmation: e = !1 }) {
    var h, p;
    const s = f.state.activeCaipNetwork, n = f.state.activeChain, i = ee.state.data;
    if (t.id === (s == null ? void 0 : s.id))
      return;
    const o = !!((h = f.getAccountData(n)) != null && h.address), a = !!((p = f.getAccountData(t.chainNamespace)) != null && p.address), c = t.chainNamespace !== n, d = R.getConnectorId(n) === C.CONNECTOR_ID.AUTH, u = C.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((g) => g === t.chainNamespace);
    e || d && u ? ee.push("SwitchNetwork", { ...i, network: t }) : /** * If user switching to a different namespace and next namespace is not connected, we need to show switch active chain view for confirmation first. */ o && c && !a ? ee.push("SwitchActiveChain", {
      switchToChain: t.chainNamespace,
      navigateTo: "Connect",
      navigateWithReplace: !0,
      network: t
    }) : ee.push("SwitchNetwork", { ...i, network: t });
  }
}, lt = Pe({
  loading: !1,
  loadingNamespaceMap: /* @__PURE__ */ new Map(),
  open: !1,
  shake: !1,
  namespace: void 0
}), _h = {
  state: lt,
  subscribe(t) {
    return st(lt, () => t(lt));
  },
  subscribeKey(t, e) {
    return Ye(lt, t, e);
  },
  async open(t) {
    var o, a;
    const e = t == null ? void 0 : t.namespace, s = f.state.activeChain, n = e && e !== s, i = (o = f.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : o.caipAddress, r = f.state.noAdapters;
    if (D.state.wcBasic ? V.prefetch({
      fetchNetworkImages: !1,
      fetchConnectorImages: !1,
      fetchWalletRanks: !1
    }) : await V.prefetch(), R.setFilterByNamespace(t == null ? void 0 : t.namespace), de.setLoading(!0, e), e && n) {
      const c = ((a = f.getNetworkData(e)) == null ? void 0 : a.caipNetwork) || f.getRequestedCaipNetworks(e)[0];
      c && (r ? (await f.switchActiveNetwork(c), ee.push("ConnectingWalletConnectBasic")) : Sh.onSwitchNetwork({ network: c, ignoreSwitchConfirmation: !0 }));
    } else A.state.manualWCControl || r && !i ? W.isMobile() ? ee.reset("AllWallets") : ee.reset("ConnectingWalletConnectBasic") : t != null && t.view ? ee.reset(t.view, t.data) : i ? ee.reset("Account") : ee.reset("Connect");
    lt.open = !0, zt.set({ open: !0 }), oe.sendEvent({
      type: "track",
      event: "MODAL_OPEN",
      properties: { connected: !!i }
    });
  },
  close() {
    const t = A.state.enableEmbedded, e = !!f.state.activeCaipAddress;
    lt.open && oe.sendEvent({
      type: "track",
      event: "MODAL_CLOSE",
      properties: { connected: e }
    }), lt.open = !1, ee.reset("Connect"), de.clearLoading(), t ? e ? ee.replace("Account") : ee.push("Connect") : zt.set({ open: !1 }), D.resetUri();
  },
  setLoading(t, e) {
    e && lt.loadingNamespaceMap.set(e, t), lt.loading = t, zt.set({ loading: t });
  },
  clearLoading() {
    lt.loadingNamespaceMap.clear(), lt.loading = !1, zt.set({ loading: !1 });
  },
  shake() {
    lt.shake || (lt.shake = !0, setTimeout(() => {
      lt.shake = !1;
    }, 500));
  }
}, de = Ft(_h), li = {
  id: "2b92315d-eab7-5bef-84fa-089a131333f5",
  name: "USD Coin",
  symbol: "USDC",
  networks: [
    {
      name: "ethereum-mainnet",
      display_name: "Ethereum",
      chain_id: "1",
      contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "polygon-mainnet",
      display_name: "Polygon",
      chain_id: "137",
      contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }
  ]
}, uo = {
  id: "USD",
  payment_method_limits: [
    {
      id: "card",
      min: "10.00",
      max: "7500.00"
    },
    {
      id: "ach_bank_account",
      min: "10.00",
      max: "25000.00"
    }
  ]
}, Th = {
  providers: $l,
  selectedProvider: null,
  error: null,
  purchaseCurrency: li,
  paymentCurrency: uo,
  purchaseCurrencies: [li],
  paymentCurrencies: [],
  quotesLoading: !1
}, be = Pe(Th), Oh = {
  state: be,
  subscribe(t) {
    return st(be, () => t(be));
  },
  subscribeKey(t, e) {
    return Ye(be, t, e);
  },
  setSelectedProvider(t) {
    var e, s;
    if (t && t.name === "meld") {
      const n = f.state.activeChain, i = n === C.CHAIN.SOLANA ? "SOL" : "USDC", r = n ? ((s = (e = f.state.chains.get(n)) == null ? void 0 : e.accountState) == null ? void 0 : s.address) ?? "" : "", o = new URL(t.url);
      o.searchParams.append("publicKey", Zu), o.searchParams.append("destinationCurrencyCode", i), o.searchParams.append("walletAddress", r), o.searchParams.append("externalCustomerId", A.state.projectId), be.selectedProvider = { ...t, url: o.toString() };
    } else
      be.selectedProvider = t;
  },
  setOnrampProviders(t) {
    if (Array.isArray(t) && t.every((e) => typeof e == "string")) {
      const e = t, s = $l.filter((n) => e.includes(n.name));
      be.providers = s;
    } else
      be.providers = [];
  },
  setPurchaseCurrency(t) {
    be.purchaseCurrency = t;
  },
  setPaymentCurrency(t) {
    be.paymentCurrency = t;
  },
  setPurchaseAmount(t) {
    ho.state.purchaseAmount = t;
  },
  setPaymentAmount(t) {
    ho.state.paymentAmount = t;
  },
  async getAvailableCurrencies() {
    const t = await te.getOnrampOptions();
    be.purchaseCurrencies = t.purchaseCurrencies, be.paymentCurrencies = t.paymentCurrencies, be.paymentCurrency = t.paymentCurrencies[0] || uo, be.purchaseCurrency = t.purchaseCurrencies[0] || li, await V.fetchCurrencyImages(t.paymentCurrencies.map((e) => e.id)), await V.fetchTokenImages(t.purchaseCurrencies.map((e) => e.symbol));
  },
  async getQuote() {
    var t, e;
    be.quotesLoading = !0;
    try {
      const s = await te.getOnrampQuote({
        purchaseCurrency: be.purchaseCurrency,
        paymentCurrency: be.paymentCurrency,
        amount: ((t = be.paymentAmount) == null ? void 0 : t.toString()) || "0",
        network: (e = be.purchaseCurrency) == null ? void 0 : e.symbol
      });
      return be.quotesLoading = !1, be.purchaseAmount = Number(s == null ? void 0 : s.purchaseAmount.amount), s;
    } catch (s) {
      return be.error = s.message, be.quotesLoading = !1, null;
    } finally {
      be.quotesLoading = !1;
    }
  },
  resetState() {
    be.selectedProvider = null, be.error = null, be.purchaseCurrency = li, be.paymentCurrency = uo, be.purchaseCurrencies = [li], be.paymentCurrencies = [], be.paymentAmount = void 0, be.purchaseAmount = void 0, be.quotesLoading = !1;
  }
}, ho = Ft(Oh), Pa = 2147483648, kh = {
  convertEVMChainIdToCoinType(t) {
    if (t >= Pa)
      throw new Error("Invalid chainId");
    return (Pa | t) >>> 0;
  }
}, Tt = Pe({
  suggestions: [],
  loading: !1
}), xh = {
  state: Tt,
  subscribe(t) {
    return st(Tt, () => t(Tt));
  },
  subscribeKey(t, e) {
    return Ye(Tt, t, e);
  },
  async resolveName(t) {
    var e, s;
    try {
      return await te.lookupEnsName(t);
    } catch (n) {
      const i = n;
      throw new Error(((s = (e = i == null ? void 0 : i.reasons) == null ? void 0 : e[0]) == null ? void 0 : s.description) || "Error resolving name");
    }
  },
  async isNameRegistered(t) {
    try {
      return await te.lookupEnsName(t), !0;
    } catch {
      return !1;
    }
  },
  async getSuggestions(t) {
    try {
      Tt.loading = !0, Tt.suggestions = [];
      const e = await te.getEnsNameSuggestions(t);
      return Tt.suggestions = e.suggestions || [], Tt.suggestions;
    } catch (e) {
      const s = di.parseEnsApiError(e, "Error fetching name suggestions");
      throw new Error(s);
    } finally {
      Tt.loading = !1;
    }
  },
  async getNamesForAddress(t) {
    try {
      if (!f.state.activeCaipNetwork)
        return [];
      const s = k.getEnsFromCacheForAddress(t);
      if (s)
        return s;
      const n = await te.reverseLookupEnsName({ address: t });
      return k.updateEnsCache({
        address: t,
        ens: n,
        timestamp: Date.now()
      }), n;
    } catch (e) {
      const s = di.parseEnsApiError(e, "Error fetching names for address");
      throw new Error(s);
    }
  },
  async registerName(t) {
    var i;
    const e = f.state.activeCaipNetwork, s = (i = f.getAccountData(e == null ? void 0 : e.chainNamespace)) == null ? void 0 : i.address, n = R.getAuthConnector();
    if (!e)
      throw new Error("Network not found");
    if (!s || !n)
      throw new Error("Address or auth connector not found");
    Tt.loading = !0;
    try {
      const r = JSON.stringify({
        name: t,
        attributes: {},
        // Unix timestamp
        timestamp: Math.floor(Date.now() / 1e3)
      });
      ee.pushTransactionStack({
        onCancel() {
          ee.replace("RegisterAccountName");
        }
      });
      const o = await D.signMessage(r);
      Tt.loading = !1;
      const a = e.id;
      if (!a)
        throw new Error("Network not found");
      const c = kh.convertEVMChainIdToCoinType(Number(a));
      await te.registerEnsName({
        coinType: c,
        address: s,
        signature: o,
        message: r
      }), f.setAccountProp("profileName", t, e.chainNamespace), k.updateEnsCache({
        address: s,
        ens: [
          {
            name: t,
            registered_at: (/* @__PURE__ */ new Date()).toISOString(),
            updated_at: void 0,
            addresses: {},
            attributes: []
          }
        ],
        timestamp: Date.now()
      }), ee.replace("RegisterAccountNameSuccess");
    } catch (r) {
      const o = di.parseEnsApiError(r, `Error registering name ${t}`);
      throw ee.replace("RegisterAccountName"), new Error(o);
    } finally {
      Tt.loading = !1;
    }
  },
  validateName(t) {
    return /^[a-zA-Z0-9-]{4,}$/u.test(t);
  },
  parseEnsApiError(t, e) {
    var n, i;
    const s = t;
    return ((i = (n = s == null ? void 0 : s.reasons) == null ? void 0 : n[0]) == null ? void 0 : i.description) || e;
  }
}, di = Ft(xh);
function po(t) {
  try {
    return new URL(t);
  } catch {
    return null;
  }
}
function Ph(t) {
  const e = t.split("/"), s = e.length > 0 && e[0] !== void 0 ? e[0] : "", n = s.lastIndexOf(":");
  return n === -1 ? { host: s } : {
    host: s.slice(0, n),
    port: s.slice(n + 1)
  };
}
function Rh(t) {
  const e = t.indexOf("://");
  if (e === -1)
    return null;
  const s = t.slice(0, e), n = e + 3;
  let i = t.indexOf("/", n);
  i === -1 && (i = t.length);
  const r = t.slice(n, i), o = r.lastIndexOf(":");
  return o === -1 ? { scheme: s, host: r } : { scheme: s, host: r.slice(0, o), port: r.slice(o + 1) };
}
function Uh(t, e) {
  if (e.includes("://")) {
    const o = po(e);
    return o ? o.origin === t : !1;
  }
  const { host: s, port: n } = Ph(e), i = t.indexOf("://");
  if (i !== -1) {
    const o = i + 3;
    let a = t.indexOf("/", o);
    a === -1 && (a = t.length);
    const c = t.slice(o, a);
    if (n !== void 0)
      return `${s}:${n}` === c;
    const l = c.split(":")[0];
    return s === l;
  }
  const r = po(t);
  return r ? n !== void 0 ? s === r.hostname && n === (r.port || void 0) : s === r.hostname : !1;
}
function Dh(t, e, s) {
  let n = s, i;
  const r = n.indexOf("://");
  r !== -1 && (i = n.slice(0, r), n = n.slice(r + 3));
  const o = n.indexOf("/");
  o !== -1 && (n = n.slice(0, o));
  let a = n, c;
  const l = a.lastIndexOf(":");
  l !== -1 && (c = a.slice(l + 1), a = a.slice(0, l));
  const d = a.split(".");
  for (const m of d)
    if (m.includes("*") && m !== "*")
      return !1;
  const u = t.protocol.replace(/:$/u, "");
  if (i && i !== u || c !== void 0 && c !== "*" && c !== t.port)
    return !1;
  const h = Rh(e), g = (h ? h.host : t.hostname).split(".");
  if (d.length !== g.length)
    return !1;
  for (let m = d.length - 1; m >= 0; m -= 1) {
    const y = d[m], I = g[m];
    if (y !== "*" && y !== I)
      return !1;
  }
  return !0;
}
const $h = {
  ton: ["ton_sendMessage", "ton_signData"],
  solana: [
    "solana_signMessage",
    "solana_signTransaction",
    "solana_requestAccounts",
    "solana_getAccounts",
    "solana_signAllTransactions",
    "solana_signAndSendTransaction"
  ],
  eip155: [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    // EIP-5792
    "wallet_getCallsStatus",
    "wallet_showCallsStatus",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    // EIP-7715
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    //EIP-7811
    "wallet_getAssets"
  ],
  bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"]
}, Hs = {
  RPC_ERROR_CODE: {
    USER_REJECTED: 5e3,
    USER_REJECTED_METHODS: 5002
  },
  /**
   * Retrieves the array of supported methods for a given chain namespace.
   * @param chainNamespace - The chain namespace.
   * @returns An array of method strings.
   */
  getMethodsByChainNamespace(t) {
    return $h[t] || [];
  },
  /**
   * Creates a default WalletConnect namespace configuration for the given chain namespace.
   * @param chainNamespace - The chain namespace.
   * @returns The default Namespace object.
   */
  createDefaultNamespace(t) {
    return {
      methods: this.getMethodsByChainNamespace(t),
      events: ["accountsChanged", "chainChanged"],
      chains: [],
      rpcMap: {}
    };
  },
  /**
   * Applies overrides to the base WalletConnect NamespaceConfig.
   * @param baseNamespaces - The base namespace configuration.
   * @param overrides - Optional overrides for methods, chains, events, rpcMap.
   * @returns The resulting NamespaceConfig with overrides applied.
   */
  applyNamespaceOverrides(t, e) {
    if (!e)
      return { ...t };
    const s = { ...t }, n = /* @__PURE__ */ new Set();
    if (e.methods && Object.keys(e.methods).forEach((i) => n.add(i)), e.chains && Object.keys(e.chains).forEach((i) => n.add(i)), e.events && Object.keys(e.events).forEach((i) => n.add(i)), e.rpcMap && Object.keys(e.rpcMap).forEach((i) => {
      const [r] = i.split(":");
      r && n.add(r);
    }), n.forEach((i) => {
      s[i] || (s[i] = this.createDefaultNamespace(i));
    }), e.methods && Object.entries(e.methods).forEach(([i, r]) => {
      s[i] && (s[i].methods = r);
    }), e.chains && Object.entries(e.chains).forEach(([i, r]) => {
      s[i] && (s[i].chains = r);
    }), e.events && Object.entries(e.events).forEach(([i, r]) => {
      s[i] && (s[i].events = r);
    }), e.rpcMap) {
      const i = /* @__PURE__ */ new Set();
      Object.entries(e.rpcMap).forEach(([r, o]) => {
        const [a, c] = r.split(":");
        !a || !c || !s[a] || (s[a].rpcMap || (s[a].rpcMap = {}), i.has(a) || (s[a].rpcMap = {}, i.add(a)), s[a].rpcMap[c] = o);
      });
    }
    return s;
  },
  /**
   * Creates WalletConnect namespaces based on CAIP network definitions,
   * optionally applying custom overrides.
   * @param caipNetworks - Array of CaipNetwork definitions.
   * @param configOverride - Optional overrides for namespaces.
   * @returns The resulting NamespaceConfig.
   */
  createNamespaces(t, e) {
    const s = t.reduce((n, i) => {
      const { id: r, chainNamespace: o, rpcUrls: a } = i, c = a.default.http[0];
      n[o] || (n[o] = this.createDefaultNamespace(o));
      const l = `${o}:${r}`, d = n[o];
      switch (d.chains.push(l), l) {
        case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
          d.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
          break;
        case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
          d.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
          break;
      }
      return d != null && d.rpcMap && c && (d.rpcMap[r] = c), n;
    }, {});
    return this.applyNamespaceOverrides(s, e);
  },
  /**
   * Resolves a Reown/ENS name to its first matching address across configured networks.
   * @param name - The ENS or Reown name to resolve.
   * @returns The resolved address as a string, or false if not found.
   */
  resolveReownName: async (t) => {
    var n;
    const e = await di.resolveName(t);
    return ((n = (e != null && e.addresses ? Object.values(e.addresses) : [])[0]) == null ? void 0 : n.address) || !1;
  },
  /**
   * Extracts all CAIP network IDs used in given WalletConnect namespaces.
   * @param namespaces - WalletConnect Namespaces object.
   * @returns Array of CAIP network IDs (chainNamespace:chainId).
   */
  getChainsFromNamespaces(t = {}) {
    return Object.values(t).flatMap((e) => {
      const s = e.chains || [], n = e.accounts.map((i) => {
        const [r, o] = i.split(":");
        return `${r}:${o}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...s, ...n]));
    });
  },
  /**
   * Type guard to check if an object is a WalletConnect session event data.
   * @param data - The data to check.
   * @returns True if data matches SessionEventData structure.
   */
  isSessionEventData(t) {
    return typeof t == "object" && t !== null && "id" in t && "topic" in t && "params" in t && typeof t.params == "object" && t.params !== null && "chainId" in t.params && "event" in t.params && typeof t.params.event == "object" && t.params.event !== null;
  },
  /**
   * Detects if an error object represents a user-rejected WalletConnect request.
   * @param error - The error object to check.
   * @returns True if user rejected request, otherwise false.
   */
  isUserRejectedRequestError(t) {
    try {
      if (typeof t == "object" && t !== null) {
        const e = t, s = typeof e.code == "number", n = s && e.code === Hs.RPC_ERROR_CODE.USER_REJECTED_METHODS, i = s && e.code === Hs.RPC_ERROR_CODE.USER_REJECTED;
        return n || i;
      }
      return !1;
    } catch {
      return !1;
    }
  },
  /**
   * Checks if a current origin is allowed by configured allowed and default origin patterns.
   * Localhost and 127.0.0.1 are always allowed.
   * @param currentOrigin - The current web origin.
   * @param allowedPatterns - Patterns from project configuration.
   * @param defaultAllowedOrigins - Built-in or default allowed patterns.
   * @returns True if the origin is allowed, false otherwise.
   */
  isOriginAllowed(t, e, s) {
    const n = [...e, ...s];
    if (e.length === 0)
      return !0;
    const i = po(t);
    if (!i)
      return n.some((r) => !r.includes("*") && r === t);
    if (i.hostname === "localhost" || i.hostname === "127.0.0.1")
      return !0;
    for (const r of n)
      if (r.includes("*")) {
        if (Dh(i, t, r))
          return !0;
      } else if (Uh(t, r))
        return !0;
    return !1;
  },
  /**
   * Attaches event listeners to a UniversalProvider instance for WalletConnect events.
   * @param params - The listener parameters including handlers for connect, disconnect, etc.
   */
  listenWcProvider({ universalProvider: t, namespace: e, onConnect: s, onDisconnect: n, onAccountsChanged: i, onChainChanged: r, onDisplayUri: o }) {
    s && t.on("connect", () => {
      const a = Hs.getWalletConnectAccounts(t, e);
      s(a);
    }), n && t.on("disconnect", () => {
      n();
    }), i && t.on("accountsChanged", (a) => {
      var c, l, d, u, h;
      try {
        const p = ((d = (l = (c = t.session) == null ? void 0 : c.namespaces) == null ? void 0 : l[e]) == null ? void 0 : d.accounts) || [], g = (h = (u = t.rpcProviders) == null ? void 0 : u[e]) == null ? void 0 : h.getDefaultChain(), m = a.map((y) => {
          const I = p.find((F) => F.includes(`${e}:${g}:${y}`));
          if (!I)
            return;
          const { chainId: N, chainNamespace: _ } = Ge.parseCaipAddress(I);
          return {
            address: y,
            chainId: N,
            chainNamespace: _
          };
        }).filter((y) => y !== void 0);
        m.length > 0 && i(m);
      } catch (p) {
        console.warn("Failed to parse accounts for namespace on accountsChanged event", e, a, p);
      }
    }), r && t.on("chainChanged", (a) => {
      r(a);
    }), o && t.on("display_uri", (a) => {
      o(a);
    });
  },
  /**
   * Retrieves and parses the unique set of accounts for a given WalletConnect namespace.
   * @param universalProvider - The UniversalProvider instance.
   * @param namespace - The chain namespace to extract accounts for.
   * @returns Array of parsed CaipAddress objects.
   */
  getWalletConnectAccounts(t, e) {
    var i, r, o, a;
    const s = /* @__PURE__ */ new Set(), n = (a = (o = (r = (i = t == null ? void 0 : t.session) == null ? void 0 : i.namespaces) == null ? void 0 : r[e]) == null ? void 0 : o.accounts) == null ? void 0 : a.map((c) => Ge.parseCaipAddress(c)).filter(({ address: c }) => s.has(c.toLowerCase()) ? !1 : (s.add(c.toLowerCase()), !0));
    return n && n.length > 0 ? n : [];
  }
}, Lh = [
  C.CONNECTOR_ID.AUTH,
  C.CONNECTOR_ID.WALLET_CONNECT
];
class Bh {
  /**
   * Creates an instance of AdapterBlueprint.
   * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
   */
  constructor(e) {
    this.availableConnectors = [], this.availableConnections = [], this.providerHandlers = {}, this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (s) => f.getCaipNetworks(s), this.getConnectorId = (s) => R.getConnectorId(s), e && this.construct(e);
  }
  /**
   * Initializes the adapter with the given parameters.
   * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
   */
  construct(e) {
    this.projectId = e.projectId, this.namespace = e.namespace, this.adapterType = e.adapterType;
  }
  /**
   * Gets the available connectors.
   * @returns {Connector[]} An array of available connectors
   */
  get connectors() {
    return this.availableConnectors;
  }
  /**
   * Gets the available connections.
   * @returns {Connection[]} An array of available connections
   */
  get connections() {
    return this.availableConnections;
  }
  /**
   * Gets the supported networks.
   * @returns {CaipNetwork[]} An array of supported networks
   */
  get networks() {
    return this.getCaipNetworks(this.namespace);
  }
  /**
   * Handles the auth connected event.
   * @param {W3mFrameTypes.Responses['FrameGetUserResponse']} user - The user response
   */
  onAuthConnected({ accounts: e, chainId: s }) {
    const n = this.getCaipNetworks().filter((i) => i.chainNamespace === this.namespace).find((i) => i.id.toString() === (s == null ? void 0 : s.toString()));
    e && n && this.addConnection({
      connectorId: C.CONNECTOR_ID.AUTH,
      accounts: e,
      caipNetwork: n
    });
  }
  /**
   * Sets the auth provider.
   * @param {W3mFrameProvider} authProvider - The auth provider instance
   */
  setAuthProvider(e) {
    e.onConnect(this.onAuthConnected.bind(this)), e.onSocialConnected(this.onAuthConnected.bind(this)), this.addConnector({
      id: C.CONNECTOR_ID.AUTH,
      type: "AUTH",
      name: C.CONNECTOR_NAMES.AUTH,
      provider: e,
      imageId: void 0,
      chain: this.namespace,
      chains: []
    });
  }
  /**
   * Adds one or more connectors to the available connectors list.
   * @param {...Connector} connectors - The connectors to add
   */
  addConnector(...e) {
    const s = /* @__PURE__ */ new Set();
    this.availableConnectors = [...e, ...this.availableConnectors].filter((n) => s.has(n.id) ? !1 : (s.add(n.id), !0)), this.emit("connectors", this.availableConnectors);
  }
  /**
   * Adds connections to the available connections list
   * @param {...Connection} connections - The connections to add
   */
  addConnection(...e) {
    const s = /* @__PURE__ */ new Set();
    this.availableConnections = [...e, ...this.availableConnections].filter((n) => s.has(n.connectorId.toLowerCase()) ? !1 : (s.add(n.connectorId.toLowerCase()), !0)), this.emit("connections", this.availableConnections);
  }
  /**
   * Deletes a connection from the available connections list
   * @param {string} connectorId - The connector ID of the connection to delete
   */
  deleteConnection(e) {
    this.availableConnections = this.availableConnections.filter((s) => s.connectorId.toLowerCase() !== e.toLowerCase()), this.emit("connections", this.availableConnections);
  }
  /**
   * Clears all connections from the available connections list
   * @param {boolean} emit - Whether to emit the connections event
   */
  clearConnections(e = !1) {
    this.availableConnections = [], e && this.emit("connections", this.availableConnections);
  }
  setStatus(e, s) {
    f.setAccountProp("status", e, s);
  }
  /**
   * Adds an event listener for a specific event.
   * @template T
   * @param {T} eventName - The name of the event
   * @param {EventCallback<T>} callback - The callback function to be called when the event is emitted
   */
  on(e, s) {
    var n;
    this.eventListeners.has(e) || this.eventListeners.set(e, /* @__PURE__ */ new Set()), (n = this.eventListeners.get(e)) == null || n.add(s);
  }
  /**
   * Removes an event listener for a specific event.
   * @template T
   * @param {T} eventName - The name of the event
   * @param {EventCallback<T>} callback - The callback function to be removed
   */
  off(e, s) {
    const n = this.eventListeners.get(e);
    n && n.delete(s);
  }
  /**
   * Removes all event listeners.
   */
  removeAllEventListeners() {
    this.eventListeners.forEach((e) => {
      e.clear();
    });
  }
  /**
   * Emits an event with the given name and optional data.
   * @template T
   * @param {T} eventName - The name of the event to emit
   * @param {EventData[T]} [data] - The optional data to be passed to the event listeners
   */
  emit(e, s) {
    const n = this.eventListeners.get(e);
    n && n.forEach((i) => i(s));
  }
  /**
   * Connects to WalletConnect.
   * @param {number | string} [_chainId] - Optional chain ID to connect to
   */
  async connectWalletConnect(e) {
    try {
      return { clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId };
    } catch (s) {
      throw Hs.isUserRejectedRequestError(s) ? new Dl(s) : s;
    }
  }
  /**
   * Switches the network.
   * @param {AdapterBlueprint.SwitchNetworkParams} params - Network switching parameters
   */
  async switchNetwork(e) {
    var r;
    const { caipNetwork: s } = e, n = Te.getProviderId(s.chainNamespace), i = Te.getProvider(s.chainNamespace);
    if (!i)
      throw new Error("Provider not found");
    if (n === "WALLET_CONNECT") {
      i.setDefaultChain(s.caipNetworkId);
      return;
    }
    if (n === "AUTH") {
      const o = (r = R.getAuthConnector()) == null ? void 0 : r.provider;
      if (!o)
        throw new Error("Auth provider not found");
      const a = Lt(s.chainNamespace);
      await o.switchNetwork({ chainId: s.caipNetworkId });
      const c = await o.getUser({
        chainId: s.caipNetworkId,
        preferredAccountType: a
      });
      this.emit("switchNetwork", c);
    }
  }
  getWalletConnectConnector() {
    const e = this.connectors.find((s) => s.id === "walletConnect");
    if (!e)
      throw new Error("WalletConnectConnector not found");
    return e;
  }
  /**
   * Handles connect event for a specific connector.
   * @param {string[]} accounts - The accounts that changed
   * @param {string} connectorId - The ID of the connector
   */
  onConnect(e, s) {
    if (e.length > 0) {
      const { address: n, chainId: i } = W.getAccount(e[0]), r = this.getCaipNetworks().filter((a) => a.chainNamespace === this.namespace).find((a) => a.id.toString() === (i == null ? void 0 : i.toString())), o = this.connectors.find((a) => a.id === s);
      n && (this.emit("accountChanged", {
        address: n,
        chainId: i,
        connector: o
      }), this.addConnection({
        connectorId: s,
        accounts: e.map((a) => {
          const { address: c } = W.getAccount(a);
          return { address: c };
        }),
        caipNetwork: r
      }));
    }
  }
  /**
   * Handles accounts changed event for a specific connector.
   * @param {string[]} accounts - The accounts that changed
   * @param {string} connectorId - The ID of the connector
   */
  onAccountsChanged(e, s, n = !0) {
    var i, r;
    if (e.length > 0) {
      const { address: o } = W.getAccount(e[0]), a = this.getConnection({
        connectorId: s,
        connections: this.connections,
        connectors: this.connectors
      });
      o && ((i = this.getConnectorId(C.CHAIN.EVM)) == null ? void 0 : i.toLowerCase()) === s.toLowerCase() && this.emit("accountChanged", {
        address: o,
        chainId: (r = a == null ? void 0 : a.caipNetwork) == null ? void 0 : r.id,
        connector: a == null ? void 0 : a.connector
      }), this.addConnection({
        connectorId: s,
        accounts: e.map((c) => {
          const { address: l } = W.getAccount(c);
          return { address: l };
        }),
        caipNetwork: a == null ? void 0 : a.caipNetwork
      });
    } else n && this.onDisconnect(s);
  }
  /**
   * Handles disconnect event for a specific connector.
   * @param {string} connectorId - The ID of the connector
   */
  onDisconnect(e) {
    var s;
    this.removeProviderListeners(e), this.deleteConnection(e), ((s = this.getConnectorId(C.CHAIN.EVM)) == null ? void 0 : s.toLowerCase()) === e.toLowerCase() && this.emitFirstAvailableConnection(), this.connections.length === 0 && this.emit("disconnect");
  }
  /**
   * Handles chain changed event for a specific connector.
   * @param {string} chainId - The ID of the chain that changed
   * @param {string} connectorId - The ID of the connector
   */
  onChainChanged(e, s) {
    var o;
    const n = typeof e == "string" && e.startsWith("0x") ? parseInt(e, 16).toString() : e.toString(), i = this.getConnection({
      connectorId: s,
      connections: this.connections,
      connectors: this.connectors
    }), r = this.getCaipNetworks().filter((a) => a.chainNamespace === this.namespace).find((a) => a.id.toString() === n);
    i && this.addConnection({
      connectorId: s,
      accounts: i.accounts,
      caipNetwork: r
    }), ((o = this.getConnectorId(C.CHAIN.EVM)) == null ? void 0 : o.toLowerCase()) === s.toLowerCase() && this.emit("switchNetwork", { chainId: n });
  }
  /**
   * Listens to provider events for a specific connector.
   * @param {string} connectorId - The ID of the connector
   * @param {Provider | CombinedProvider} provider - The provider to listen to
   */
  listenProviderEvents(e, s) {
    if (Lh.includes(e))
      return;
    const n = (o) => this.onAccountsChanged(o, e), i = (o) => this.onChainChanged(o, e), r = () => this.onDisconnect(e);
    this.providerHandlers[e] || (s.on("disconnect", r), s.on("accountsChanged", n), s.on("chainChanged", i), this.providerHandlers[e] = {
      provider: s,
      disconnect: r,
      accountsChanged: n,
      chainChanged: i
    });
  }
  /**
   * Removes provider listeners for a specific connector.
   * @param {string} connectorId - The ID of the connector
   */
  removeProviderListeners(e) {
    if (this.providerHandlers[e]) {
      const { provider: s, disconnect: n, accountsChanged: i, chainChanged: r } = this.providerHandlers[e];
      s.removeListener("disconnect", n), s.removeListener("accountsChanged", i), s.removeListener("chainChanged", r), this.providerHandlers[e] = null;
    }
  }
  /**
   * Emits the first available connection.
   */
  emitFirstAvailableConnection() {
    var s;
    const e = this.getConnection({
      connections: this.connections,
      connectors: this.connectors
    });
    if (e) {
      const [n] = e.accounts;
      this.emit("accountChanged", {
        address: n == null ? void 0 : n.address,
        chainId: (s = e.caipNetwork) == null ? void 0 : s.id,
        connector: e.connector
      });
    }
  }
  /**
   * Gets a connection based on provided parameters.
   * If connectorId is provided, returns connection for that specific connector.
   * Otherwise, returns the first available valid connection.
   *
   * @param params - Connection parameters
   * @param params.address - Optional address to filter by
   * @param params.connectorId - Optional connector ID to filter by
   * @param params.connections - List of available connections
   * @param params.connectors - List of available connectors
   * @returns Connection or null if none found
   */
  getConnection({ address: e, connectorId: s, connections: n, connectors: i }) {
    if (s) {
      const o = n.find((l) => l.connectorId.toLowerCase() === s.toLowerCase());
      if (!o)
        return null;
      const a = i.find((l) => l.id.toLowerCase() === o.connectorId.toLowerCase()), c = e ? o.accounts.find((l) => l.address.toLowerCase() === e.toLowerCase()) : o.accounts[0];
      return { ...o, account: c, connector: a };
    }
    const r = n.find((o) => o.accounts.length > 0 && i.some((a) => a.id.toLowerCase() === o.connectorId.toLowerCase()));
    if (r) {
      const [o] = r.accounts, a = i.find((c) => c.id.toLowerCase() === r.connectorId.toLowerCase());
      return {
        ...r,
        account: o,
        connector: a
      };
    }
    return null;
  }
}
let Xs = null;
const Vt = {
  getSIWX() {
    return A.state.siwx;
  },
  async initializeIfEnabled(t = f.getActiveCaipAddress()) {
    var r, o, a;
    const e = A.state.siwx;
    if (!(e && t))
      return;
    const [s, n, i] = t.split(":");
    if (f.checkIfSupportedNetwork(s, `${s}:${n}`))
      try {
        if ((r = A.state.remoteFeatures) != null && r.emailCapture) {
          const l = (o = f.getAccountData(s)) == null ? void 0 : o.user;
          await de.open({
            view: "DataCapture",
            data: {
              email: (l == null ? void 0 : l.email) ?? void 0
            }
          });
          return;
        }
        if (Xs && await Xs, (await e.getSessions(`${s}:${n}`, i)).length)
          return;
        await de.open({
          view: "SIWXSignMessage"
        });
      } catch (c) {
        console.error("SIWXUtil:initializeIfEnabled", c), oe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties(c)
        }), await ((a = D._getClient()) == null ? void 0 : a.disconnect().catch(console.error)), ee.reset("Connect"), rs.showError("A problem occurred while trying initialize authentication");
      }
  },
  async isAuthenticated(t = f.getActiveCaipAddress()) {
    if (!A.state.siwx || !t)
      return !0;
    const { chainNamespace: s, chainId: n, address: i } = Ge.parseCaipAddress(t), r = `${s}:${n}`;
    return (await Vt.getSessions({
      address: i,
      caipNetworkId: r
    })).length > 0;
  },
  async requestSignMessage() {
    const t = A.state.siwx, e = W.getPlainAddress(f.getActiveCaipAddress()), s = ki();
    if (!t)
      throw new Error("SIWX is not enabled");
    if (!e)
      throw new Error("No ActiveCaipAddress found");
    if (!s)
      throw new Error("No ActiveCaipNetwork or client found");
    try {
      const n = await t.createMessage({
        chainId: s.caipNetworkId,
        accountAddress: e
      }), i = n.toString();
      let r = "";
      t.signMessage ? r = await t.signMessage({
        message: i,
        chainId: s.caipNetworkId,
        accountAddress: e
      }) : (R.getConnectorId(s.chainNamespace) === C.CONNECTOR_ID.AUTH && ee.pushTransactionStack({}), r = await D.signMessage(i) || ""), await t.addSession({
        data: n,
        message: i,
        signature: r
      }), f.setLastConnectedSIWECaipNetwork(s), de.close(), oe.sendEvent({
        type: "track",
        event: "SIWX_AUTH_SUCCESS",
        properties: this.getSIWXEventProperties()
      });
    } catch (n) {
      (!de.state.open || ee.state.view === "ApproveTransaction") && await de.open({
        view: "SIWXSignMessage"
      }), rs.showError("Error signing message"), oe.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: this.getSIWXEventProperties(n)
      }), console.error("SWIXUtil:requestSignMessage", n);
    }
  },
  async cancelSignMessage() {
    var t;
    try {
      const e = this.getSIWX();
      if ((t = e == null ? void 0 : e.getRequired) == null ? void 0 : t.call(e)) {
        const n = f.getLastConnectedSIWECaipNetwork();
        if (n) {
          const i = await (e == null ? void 0 : e.getSessions(n == null ? void 0 : n.caipNetworkId, W.getPlainAddress(f.getActiveCaipAddress()) || ""));
          i && i.length > 0 ? await f.switchActiveNetwork(n) : await D.disconnect();
        } else
          await D.disconnect();
      } else
        de.close();
      de.close(), oe.sendEvent({
        event: "CLICK_CANCEL_SIWX",
        type: "track",
        properties: this.getSIWXEventProperties()
      });
    } catch (e) {
      console.error("SIWXUtil:cancelSignMessage", e);
    }
  },
  async getAllSessions() {
    const t = this.getSIWX(), e = f.getAllRequestedCaipNetworks(), s = [];
    return await Promise.all(e.map(async (n) => {
      const i = await (t == null ? void 0 : t.getSessions(n.caipNetworkId, W.getPlainAddress(f.getActiveCaipAddress()) || ""));
      i && s.push(...i);
    })), s;
  },
  async getSessions(t) {
    const e = A.state.siwx;
    let s = t == null ? void 0 : t.address;
    if (!s) {
      const i = f.getActiveCaipAddress();
      s = W.getPlainAddress(i);
    }
    let n = t == null ? void 0 : t.caipNetworkId;
    if (!n) {
      const i = f.getActiveCaipNetwork();
      n = i == null ? void 0 : i.caipNetworkId;
    }
    return e && s && n ? e.getSessions(n, s) : [];
  },
  async isSIWXCloseDisabled() {
    var e;
    const t = this.getSIWX();
    if (t) {
      const s = ee.state.view === "ApproveTransaction", n = ee.state.view === "SIWXSignMessage";
      if (s || n)
        return ((e = t.getRequired) == null ? void 0 : e.call(t)) && (await this.getSessions()).length === 0;
    }
    return !1;
  },
  async authConnectorAuthenticate({ authConnector: t, chainId: e, socialUri: s, preferredAccountType: n, chainNamespace: i }) {
    var u;
    const r = Vt.getSIWX(), o = ki();
    if (!r || !i.includes(C.CHAIN.EVM) || // Request to input email and sign message when email capture is enabled
    (u = A.state.remoteFeatures) != null && u.emailCapture) {
      const h = await t.connect({
        chainId: e,
        socialUri: s,
        preferredAccountType: n
      });
      return {
        address: h.address,
        chainId: h.chainId,
        accounts: h.accounts
      };
    }
    const a = `${i}:${e}`, c = await r.createMessage({
      chainId: a,
      accountAddress: "<<AccountAddress>>"
    }), l = {
      accountAddress: c.accountAddress,
      chainId: c.chainId,
      domain: c.domain,
      uri: c.uri,
      version: c.version,
      nonce: c.nonce,
      notBefore: c.notBefore,
      statement: c.statement,
      resources: c.resources,
      requestId: c.requestId,
      issuedAt: c.issuedAt,
      expirationTime: c.expirationTime,
      serializedMessage: c.toString()
    }, d = await t.connect({
      chainId: e,
      socialUri: s,
      siwxMessage: l,
      preferredAccountType: n
    });
    return l.accountAddress = d.address, l.serializedMessage = d.message || "", d.signature && d.message && await Vt.addEmbeddedWalletSession(l, d.message, d.signature), f.setLastConnectedSIWECaipNetwork(o), {
      address: d.address,
      chainId: d.chainId,
      accounts: d.accounts
    };
  },
  async addEmbeddedWalletSession(t, e, s) {
    if (Xs)
      return Xs;
    const n = Vt.getSIWX();
    return n ? (Xs = n.addSession({
      data: t,
      message: e,
      signature: s
    }).finally(() => {
      Xs = null;
    }), Xs) : Promise.resolve();
  },
  async universalProviderAuthenticate({ universalProvider: t, chains: e, methods: s }) {
    var l, d, u;
    const n = Vt.getSIWX(), i = ki(), r = new Set(e.map((h) => h.split(":")[0]));
    if (!n || r.size !== 1 || !r.has("eip155"))
      return !1;
    const o = await n.createMessage({
      chainId: ((l = ki()) == null ? void 0 : l.caipNetworkId) || "",
      accountAddress: ""
    }), a = await t.authenticate({
      nonce: o.nonce,
      domain: o.domain,
      uri: o.uri,
      exp: o.expirationTime,
      iat: o.issuedAt,
      nbf: o.notBefore,
      requestId: o.requestId,
      version: o.version,
      resources: o.resources,
      statement: o.statement,
      chainId: o.chainId,
      methods: s,
      // The first chainId is what is used for universal provider to build the message
      chains: [o.chainId, ...e.filter((h) => h !== o.chainId)]
    });
    rs.showLoading("Authenticating...", { autoClose: !1 });
    const c = {
      ...a.session.peer.metadata,
      name: a.session.peer.metadata.name,
      icon: (d = a.session.peer.metadata.icons) == null ? void 0 : d[0],
      type: "WALLET_CONNECT"
    };
    if (f.setAccountProp("connectedWalletInfo", c, Array.from(r)[0]), (u = a == null ? void 0 : a.auths) != null && u.length) {
      const h = a.auths.map((p) => {
        const g = t.client.formatAuthMessage({
          request: p.p,
          iss: p.p.iss
        });
        return {
          data: {
            ...p.p,
            accountAddress: p.p.iss.split(":").slice(-1).join(""),
            chainId: p.p.iss.split(":").slice(2, 4).join(":"),
            uri: p.p.aud ?? "",
            version: p.p.version || o.version,
            expirationTime: p.p.exp,
            issuedAt: p.p.iat,
            notBefore: p.p.nbf
          },
          message: g,
          signature: p.s.s,
          cacao: p
        };
      });
      try {
        await n.setSessions(h), i && f.setLastConnectedSIWECaipNetwork(i), oe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: Vt.getSIWXEventProperties()
        });
      } catch (p) {
        throw console.error("SIWX:universalProviderAuth - failed to set sessions", p), oe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: Vt.getSIWXEventProperties(p)
        }), await t.disconnect().catch(console.error), p;
      } finally {
        rs.hide();
      }
    }
    return !0;
  },
  getSIWXEventProperties(t) {
    var s;
    const e = f.state.activeChain;
    if (!e)
      throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
    return {
      network: ((s = f.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) || "",
      isSmartAccount: Lt(e) === Cs.ACCOUNT_TYPES.SMART_ACCOUNT,
      message: t ? W.parseError(t) : void 0
    };
  },
  async clearSessions() {
    const t = this.getSIWX();
    t && await t.setSessions([]);
  }
};
class Fh {
  constructor({ provider: e, namespace: s }) {
    this.id = C.CONNECTOR_ID.WALLET_CONNECT, this.name = "WalletConnect", this.type = "WALLET_CONNECT", this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", this.getCaipNetworks = f.getCaipNetworks.bind(f), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = s;
  }
  get chains() {
    return this.getCaipNetworks();
  }
  async connectWalletConnect() {
    if (!await this.authenticate()) {
      const s = this.getCaipNetworks(), n = A.state.universalProviderConfigOverride, i = Hs.createNamespaces(s, n);
      await this.provider.connect({ optionalNamespaces: i });
    }
    return {
      clientId: await this.provider.client.core.crypto.getClientId(),
      session: this.provider.session
    };
  }
  async disconnect() {
    await this.provider.disconnect();
  }
  async authenticate() {
    const e = this.chains.map((s) => s.caipNetworkId);
    return Vt.universalProviderAuthenticate({
      universalProvider: this.provider,
      chains: e,
      methods: Mh
    });
  }
}
const Mh = [
  "eth_accounts",
  "eth_requestAccounts",
  "eth_sendRawTransaction",
  "eth_sign",
  "eth_signTransaction",
  "eth_signTypedData",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "eth_sendTransaction",
  "personal_sign",
  "wallet_switchEthereumChain",
  "wallet_addEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode",
  // EIP-5792
  "wallet_getCallsStatus",
  "wallet_sendCalls",
  "wallet_getCapabilities",
  // EIP-7715
  "wallet_grantPermissions",
  "wallet_revokePermissions",
  //EIP-7811
  "wallet_getAssets"
], Wt = Pe({
  message: "",
  variant: "info",
  open: !1
}), Wh = {
  state: Wt,
  subscribeKey(t, e) {
    return Ye(Wt, t, e);
  },
  open(t, e) {
    const { debug: s } = A.state, { code: n, displayMessage: i, debugMessage: r } = t;
    if (i && s && (Wt.message = i, Wt.variant = e, Wt.open = !0), r) {
      if (!C.IS_DEVELOPMENT)
        return;
      const o = typeof r == "function" ? r() : r, a = n ? { code: n } : void 0;
      e === "error" ? console.error(o, a) : e === "warning" ? console.warn(o, a) : console.info(o, a);
    }
  },
  warn(t, e, s) {
    Wt.open = !0, Wt.message = t, Wt.variant = "warning", e && console.warn(e, s);
  },
  close() {
    Wt.open = !1, Wt.message = "", Wt.variant = "info";
  }
}, bt = Ft(Wh), qh = {
  asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
}, jh = {
  asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
};
var Hh = Object.defineProperty, Kh = (t, e, s) => e in t ? Hh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ra = (t, e, s) => Kh(t, typeof e != "symbol" ? e + "" : e, s);
class Vh extends Wn {
  constructor(e) {
    super(), this.opts = e, Ra(this, "protocol", "wc"), Ra(this, "version", 2);
  }
}
var zh = Object.defineProperty, Gh = (t, e, s) => e in t ? zh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Yh = (t, e, s) => Gh(t, e + "", s);
class Jh extends Wn {
  constructor(e, s) {
    super(), this.core = e, this.logger = s, Yh(this, "records", /* @__PURE__ */ new Map());
  }
}
let Xh = class {
  constructor(e, s) {
    this.logger = e, this.core = s;
  }
}, Zh = class extends Wn {
  constructor(e, s) {
    super(), this.relayer = e, this.logger = s;
  }
}, Qh = class extends Wn {
  constructor(e) {
    super();
  }
}, ep = class {
  constructor(e, s, n, i) {
    this.core = e, this.logger = s, this.name = n;
  }
}, tp = class extends Wn {
  constructor(e, s) {
    super(), this.relayer = e, this.logger = s;
  }
}, sp = class extends Wn {
  constructor(e, s) {
    super(), this.core = e, this.logger = s;
  }
}, np = class {
  constructor(e, s, n) {
    this.core = e, this.logger = s, this.store = n;
  }
};
class ip {
  constructor(e, s) {
    this.projectId = e, this.logger = s;
  }
}
let rp = class {
  constructor(e, s, n) {
    this.core = e, this.logger = s, this.telemetryEnabled = n;
  }
};
var op = Object.defineProperty, ap = (t, e, s) => e in t ? op(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ua = (t, e, s) => ap(t, typeof e != "symbol" ? e + "" : e, s);
let cp = class {
  constructor(e) {
    this.opts = e, Ua(this, "protocol", "wc"), Ua(this, "version", 2);
  }
}, lp = class {
  constructor(e) {
    this.client = e;
  }
};
function dp(t) {
  const e = t.length;
  let s = 0, n = 0;
  for (; n < e; ) {
    let i = t.charCodeAt(n++);
    if ((i & 4294967168) === 0) {
      s++;
      continue;
    } else if ((i & 4294965248) === 0)
      s += 2;
    else {
      if (i >= 55296 && i <= 56319 && n < e) {
        const r = t.charCodeAt(n);
        (r & 64512) === 56320 && (++n, i = ((i & 1023) << 10) + (r & 1023) + 65536);
      }
      (i & 4294901760) === 0 ? s += 3 : s += 4;
    }
  }
  return s;
}
function up(t, e, s) {
  const n = t.length;
  let i = s, r = 0;
  for (; r < n; ) {
    let o = t.charCodeAt(r++);
    if ((o & 4294967168) === 0) {
      e[i++] = o;
      continue;
    } else if ((o & 4294965248) === 0)
      e[i++] = o >> 6 & 31 | 192;
    else {
      if (o >= 55296 && o <= 56319 && r < n) {
        const a = t.charCodeAt(r);
        (a & 64512) === 56320 && (++r, o = ((o & 1023) << 10) + (a & 1023) + 65536);
      }
      (o & 4294901760) === 0 ? (e[i++] = o >> 12 & 15 | 224, e[i++] = o >> 6 & 63 | 128) : (e[i++] = o >> 18 & 7 | 240, e[i++] = o >> 12 & 63 | 128, e[i++] = o >> 6 & 63 | 128);
    }
    e[i++] = o & 63 | 128;
  }
}
const hp = new TextEncoder(), pp = 50;
function fp(t, e, s) {
  hp.encodeInto(t, e.subarray(s));
}
function gp(t, e, s) {
  t.length > pp ? fp(t, e, s) : up(t, e, s);
}
const mp = 4096;
function ql(t, e, s) {
  let n = e;
  const i = n + s, r = [];
  let o = "";
  for (; n < i; ) {
    const a = t[n++];
    if ((a & 128) === 0)
      r.push(a);
    else if ((a & 224) === 192) {
      const c = t[n++] & 63;
      r.push((a & 31) << 6 | c);
    } else if ((a & 240) === 224) {
      const c = t[n++] & 63, l = t[n++] & 63;
      r.push((a & 31) << 12 | c << 6 | l);
    } else if ((a & 248) === 240) {
      const c = t[n++] & 63, l = t[n++] & 63, d = t[n++] & 63;
      let u = (a & 7) << 18 | c << 12 | l << 6 | d;
      u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), r.push(u);
    } else
      r.push(a);
    r.length >= mp && (o += String.fromCharCode(...r), r.length = 0);
  }
  return r.length > 0 && (o += String.fromCharCode(...r)), o;
}
const yp = new TextDecoder(), wp = 200;
function bp(t, e, s) {
  const n = t.subarray(e, e + s);
  return yp.decode(n);
}
function Ep(t, e, s) {
  return s > wp ? bp(t, e, s) : ql(t, e, s);
}
class Pi {
  constructor(e, s) {
    this.type = e, this.data = s;
  }
}
class vt extends Error {
  constructor(e) {
    super(e);
    const s = Object.create(vt.prototype);
    Object.setPrototypeOf(this, s), Object.defineProperty(this, "name", {
      configurable: !0,
      enumerable: !1,
      value: vt.name
    });
  }
}
const Gn = 4294967295;
function Cp(t, e, s) {
  const n = s / 4294967296, i = s;
  t.setUint32(e, n), t.setUint32(e + 4, i);
}
function jl(t, e, s) {
  const n = Math.floor(s / 4294967296), i = s;
  t.setUint32(e, n), t.setUint32(e + 4, i);
}
function Hl(t, e) {
  const s = t.getInt32(e), n = t.getUint32(e + 4);
  return s * 4294967296 + n;
}
function vp(t, e) {
  const s = t.getUint32(e), n = t.getUint32(e + 4);
  return s * 4294967296 + n;
}
const Ap = -1, Ip = 4294967296 - 1, Np = 17179869184 - 1;
function Sp({ sec: t, nsec: e }) {
  if (t >= 0 && e >= 0 && t <= Np)
    if (e === 0 && t <= Ip) {
      const s = new Uint8Array(4);
      return new DataView(s.buffer).setUint32(0, t), s;
    } else {
      const s = t / 4294967296, n = t & 4294967295, i = new Uint8Array(8), r = new DataView(i.buffer);
      return r.setUint32(0, e << 2 | s & 3), r.setUint32(4, n), i;
    }
  else {
    const s = new Uint8Array(12), n = new DataView(s.buffer);
    return n.setUint32(0, e), jl(n, 4, t), s;
  }
}
function _p(t) {
  const e = t.getTime(), s = Math.floor(e / 1e3), n = (e - s * 1e3) * 1e6, i = Math.floor(n / 1e9);
  return {
    sec: s + i,
    nsec: n - i * 1e9
  };
}
function Tp(t) {
  if (t instanceof Date) {
    const e = _p(t);
    return Sp(e);
  } else
    return null;
}
function Op(t) {
  const e = new DataView(t.buffer, t.byteOffset, t.byteLength);
  switch (t.byteLength) {
    case 4:
      return { sec: e.getUint32(0), nsec: 0 };
    case 8: {
      const s = e.getUint32(0), n = e.getUint32(4), i = (s & 3) * 4294967296 + n, r = s >>> 2;
      return { sec: i, nsec: r };
    }
    case 12: {
      const s = Hl(e, 4), n = e.getUint32(0);
      return { sec: s, nsec: n };
    }
    default:
      throw new vt(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${t.length}`);
  }
}
function kp(t) {
  const e = Op(t);
  return new Date(e.sec * 1e3 + e.nsec / 1e6);
}
const xp = {
  type: Ap,
  encode: Tp,
  decode: kp
};
class sr {
  constructor() {
    this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(xp);
  }
  register({ type: e, encode: s, decode: n }) {
    if (e >= 0)
      this.encoders[e] = s, this.decoders[e] = n;
    else {
      const i = -1 - e;
      this.builtInEncoders[i] = s, this.builtInDecoders[i] = n;
    }
  }
  tryToEncode(e, s) {
    for (let n = 0; n < this.builtInEncoders.length; n++) {
      const i = this.builtInEncoders[n];
      if (i != null) {
        const r = i(e, s);
        if (r != null) {
          const o = -1 - n;
          return new Pi(o, r);
        }
      }
    }
    for (let n = 0; n < this.encoders.length; n++) {
      const i = this.encoders[n];
      if (i != null) {
        const r = i(e, s);
        if (r != null) {
          const o = n;
          return new Pi(o, r);
        }
      }
    }
    return e instanceof Pi ? e : null;
  }
  decode(e, s, n) {
    const i = s < 0 ? this.builtInDecoders[-1 - s] : this.decoders[s];
    return i ? i(e, s, n) : new Pi(s, e);
  }
}
sr.defaultCodec = new sr();
function Pp(t) {
  return t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer;
}
function fo(t) {
  return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Pp(t) ? new Uint8Array(t) : Uint8Array.from(t);
}
const Rp = 100, Up = 2048;
class ta {
  constructor(e) {
    this.entered = !1, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? sr.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? !1, this.maxDepth = (e == null ? void 0 : e.maxDepth) ?? Rp, this.initialBufferSize = (e == null ? void 0 : e.initialBufferSize) ?? Up, this.sortKeys = (e == null ? void 0 : e.sortKeys) ?? !1, this.forceFloat32 = (e == null ? void 0 : e.forceFloat32) ?? !1, this.ignoreUndefined = (e == null ? void 0 : e.ignoreUndefined) ?? !1, this.forceIntegerToFloat = (e == null ? void 0 : e.forceIntegerToFloat) ?? !1, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
  }
  clone() {
    return new ta({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      maxDepth: this.maxDepth,
      initialBufferSize: this.initialBufferSize,
      sortKeys: this.sortKeys,
      forceFloat32: this.forceFloat32,
      ignoreUndefined: this.ignoreUndefined,
      forceIntegerToFloat: this.forceIntegerToFloat
    });
  }
  reinitializeState() {
    this.pos = 0;
  }
  /**
   * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
   *
   * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
   */
  encodeSharedRef(e) {
    if (this.entered)
      return this.clone().encodeSharedRef(e);
    try {
      return this.entered = !0, this.reinitializeState(), this.doEncode(e, 1), this.bytes.subarray(0, this.pos);
    } finally {
      this.entered = !1;
    }
  }
  /**
   * @returns Encodes the object and returns a copy of the encoder's internal buffer.
   */
  encode(e) {
    if (this.entered)
      return this.clone().encode(e);
    try {
      return this.entered = !0, this.reinitializeState(), this.doEncode(e, 1), this.bytes.slice(0, this.pos);
    } finally {
      this.entered = !1;
    }
  }
  doEncode(e, s) {
    if (s > this.maxDepth)
      throw new Error(`Too deep objects in depth ${s}`);
    e == null ? this.encodeNil() : typeof e == "boolean" ? this.encodeBoolean(e) : typeof e == "number" ? this.forceIntegerToFloat ? this.encodeNumberAsFloat(e) : this.encodeNumber(e) : typeof e == "string" ? this.encodeString(e) : this.useBigInt64 && typeof e == "bigint" ? this.encodeBigInt64(e) : this.encodeObject(e, s);
  }
  ensureBufferSizeToWrite(e) {
    const s = this.pos + e;
    this.view.byteLength < s && this.resizeBuffer(s * 2);
  }
  resizeBuffer(e) {
    const s = new ArrayBuffer(e), n = new Uint8Array(s), i = new DataView(s);
    n.set(this.bytes), this.view = i, this.bytes = n;
  }
  encodeNil() {
    this.writeU8(192);
  }
  encodeBoolean(e) {
    e === !1 ? this.writeU8(194) : this.writeU8(195);
  }
  encodeNumber(e) {
    !this.forceIntegerToFloat && Number.isSafeInteger(e) ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : this.useBigInt64 ? this.encodeNumberAsFloat(e) : (this.writeU8(207), this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208), this.writeI8(e)) : e >= -32768 ? (this.writeU8(209), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210), this.writeI32(e)) : this.useBigInt64 ? this.encodeNumberAsFloat(e) : (this.writeU8(211), this.writeI64(e)) : this.encodeNumberAsFloat(e);
  }
  encodeNumberAsFloat(e) {
    this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e));
  }
  encodeBigInt64(e) {
    e >= BigInt(0) ? (this.writeU8(207), this.writeBigUint64(e)) : (this.writeU8(211), this.writeBigInt64(e));
  }
  writeStringHeader(e) {
    if (e < 32)
      this.writeU8(160 + e);
    else if (e < 256)
      this.writeU8(217), this.writeU8(e);
    else if (e < 65536)
      this.writeU8(218), this.writeU16(e);
    else if (e < 4294967296)
      this.writeU8(219), this.writeU32(e);
    else
      throw new Error(`Too long string: ${e} bytes in UTF-8`);
  }
  encodeString(e) {
    const n = dp(e);
    this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), gp(e, this.bytes, this.pos), this.pos += n;
  }
  encodeObject(e, s) {
    const n = this.extensionCodec.tryToEncode(e, this.context);
    if (n != null)
      this.encodeExtension(n);
    else if (Array.isArray(e))
      this.encodeArray(e, s);
    else if (ArrayBuffer.isView(e))
      this.encodeBinary(e);
    else if (typeof e == "object")
      this.encodeMap(e, s);
    else
      throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
  }
  encodeBinary(e) {
    const s = e.byteLength;
    if (s < 256)
      this.writeU8(196), this.writeU8(s);
    else if (s < 65536)
      this.writeU8(197), this.writeU16(s);
    else if (s < 4294967296)
      this.writeU8(198), this.writeU32(s);
    else
      throw new Error(`Too large binary: ${s}`);
    const n = fo(e);
    this.writeU8a(n);
  }
  encodeArray(e, s) {
    const n = e.length;
    if (n < 16)
      this.writeU8(144 + n);
    else if (n < 65536)
      this.writeU8(220), this.writeU16(n);
    else if (n < 4294967296)
      this.writeU8(221), this.writeU32(n);
    else
      throw new Error(`Too large array: ${n}`);
    for (const i of e)
      this.doEncode(i, s + 1);
  }
  countWithoutUndefined(e, s) {
    let n = 0;
    for (const i of s)
      e[i] !== void 0 && n++;
    return n;
  }
  encodeMap(e, s) {
    const n = Object.keys(e);
    this.sortKeys && n.sort();
    const i = this.ignoreUndefined ? this.countWithoutUndefined(e, n) : n.length;
    if (i < 16)
      this.writeU8(128 + i);
    else if (i < 65536)
      this.writeU8(222), this.writeU16(i);
    else if (i < 4294967296)
      this.writeU8(223), this.writeU32(i);
    else
      throw new Error(`Too large map object: ${i}`);
    for (const r of n) {
      const o = e[r];
      this.ignoreUndefined && o === void 0 || (this.encodeString(r), this.doEncode(o, s + 1));
    }
  }
  encodeExtension(e) {
    if (typeof e.data == "function") {
      const n = e.data(this.pos + 6), i = n.length;
      if (i >= 4294967296)
        throw new Error(`Too large extension object: ${i}`);
      this.writeU8(201), this.writeU32(i), this.writeI8(e.type), this.writeU8a(n);
      return;
    }
    const s = e.data.length;
    if (s === 1)
      this.writeU8(212);
    else if (s === 2)
      this.writeU8(213);
    else if (s === 4)
      this.writeU8(214);
    else if (s === 8)
      this.writeU8(215);
    else if (s === 16)
      this.writeU8(216);
    else if (s < 256)
      this.writeU8(199), this.writeU8(s);
    else if (s < 65536)
      this.writeU8(200), this.writeU16(s);
    else if (s < 4294967296)
      this.writeU8(201), this.writeU32(s);
    else
      throw new Error(`Too large extension object: ${s}`);
    this.writeI8(e.type), this.writeU8a(e.data);
  }
  writeU8(e) {
    this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++;
  }
  writeU8a(e) {
    const s = e.length;
    this.ensureBufferSizeToWrite(s), this.bytes.set(e, this.pos), this.pos += s;
  }
  writeI8(e) {
    this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
  }
  writeU16(e) {
    this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2;
  }
  writeI16(e) {
    this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2;
  }
  writeU32(e) {
    this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4;
  }
  writeI32(e) {
    this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4;
  }
  writeF32(e) {
    this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4;
  }
  writeF64(e) {
    this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8;
  }
  writeU64(e) {
    this.ensureBufferSizeToWrite(8), Cp(this.view, this.pos, e), this.pos += 8;
  }
  writeI64(e) {
    this.ensureBufferSizeToWrite(8), jl(this.view, this.pos, e), this.pos += 8;
  }
  writeBigUint64(e) {
    this.ensureBufferSizeToWrite(8), this.view.setBigUint64(this.pos, e), this.pos += 8;
  }
  writeBigInt64(e) {
    this.ensureBufferSizeToWrite(8), this.view.setBigInt64(this.pos, e), this.pos += 8;
  }
}
function Dp(t, e) {
  return new ta(e).encodeSharedRef(t);
}
function Rr(t) {
  return `${t < 0 ? "-" : ""}0x${Math.abs(t).toString(16).padStart(2, "0")}`;
}
const $p = 16, Lp = 16;
class Bp {
  constructor(e = $p, s = Lp) {
    this.hit = 0, this.miss = 0, this.maxKeyLength = e, this.maxLengthPerKey = s, this.caches = [];
    for (let n = 0; n < this.maxKeyLength; n++)
      this.caches.push([]);
  }
  canBeCached(e) {
    return e > 0 && e <= this.maxKeyLength;
  }
  find(e, s, n) {
    const i = this.caches[n - 1];
    e: for (const r of i) {
      const o = r.bytes;
      for (let a = 0; a < n; a++)
        if (o[a] !== e[s + a])
          continue e;
      return r.str;
    }
    return null;
  }
  store(e, s) {
    const n = this.caches[e.length - 1], i = { bytes: e, str: s };
    n.length >= this.maxLengthPerKey ? n[Math.random() * n.length | 0] = i : n.push(i);
  }
  decode(e, s, n) {
    const i = this.find(e, s, n);
    if (i != null)
      return this.hit++, i;
    this.miss++;
    const r = ql(e, s, n), o = Uint8Array.prototype.slice.call(e, s, s + n);
    return this.store(o, r), r;
  }
}
const go = "array", ui = "map_key", Kl = "map_value", Fp = (t) => {
  if (typeof t == "string" || typeof t == "number")
    return t;
  throw new vt("The type of key must be string or number but " + typeof t);
};
class Mp {
  constructor() {
    this.stack = [], this.stackHeadPosition = -1;
  }
  get length() {
    return this.stackHeadPosition + 1;
  }
  top() {
    return this.stack[this.stackHeadPosition];
  }
  pushArrayState(e) {
    const s = this.getUninitializedStateFromPool();
    s.type = go, s.position = 0, s.size = e, s.array = new Array(e);
  }
  pushMapState(e) {
    const s = this.getUninitializedStateFromPool();
    s.type = ui, s.readCount = 0, s.size = e, s.map = {};
  }
  getUninitializedStateFromPool() {
    if (this.stackHeadPosition++, this.stackHeadPosition === this.stack.length) {
      const e = {
        type: void 0,
        size: 0,
        array: void 0,
        position: 0,
        readCount: 0,
        map: void 0,
        key: null
      };
      this.stack.push(e);
    }
    return this.stack[this.stackHeadPosition];
  }
  release(e) {
    if (this.stack[this.stackHeadPosition] !== e)
      throw new Error("Invalid stack state. Released state is not on top of the stack.");
    if (e.type === go) {
      const n = e;
      n.size = 0, n.array = void 0, n.position = 0, n.type = void 0;
    }
    if (e.type === ui || e.type === Kl) {
      const n = e;
      n.size = 0, n.map = void 0, n.readCount = 0, n.type = void 0;
    }
    this.stackHeadPosition--;
  }
  reset() {
    this.stack.length = 0, this.stackHeadPosition = -1;
  }
}
const Yn = -1, sa = new DataView(new ArrayBuffer(0)), Wp = new Uint8Array(sa.buffer);
try {
  sa.getInt8(0);
} catch (t) {
  if (!(t instanceof RangeError))
    throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
}
const Da = new RangeError("Insufficient data"), qp = new Bp();
class na {
  constructor(e) {
    this.totalPos = 0, this.pos = 0, this.view = sa, this.bytes = Wp, this.headByte = Yn, this.stack = new Mp(), this.entered = !1, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? sr.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? !1, this.rawStrings = (e == null ? void 0 : e.rawStrings) ?? !1, this.maxStrLength = (e == null ? void 0 : e.maxStrLength) ?? Gn, this.maxBinLength = (e == null ? void 0 : e.maxBinLength) ?? Gn, this.maxArrayLength = (e == null ? void 0 : e.maxArrayLength) ?? Gn, this.maxMapLength = (e == null ? void 0 : e.maxMapLength) ?? Gn, this.maxExtLength = (e == null ? void 0 : e.maxExtLength) ?? Gn, this.keyDecoder = (e == null ? void 0 : e.keyDecoder) !== void 0 ? e.keyDecoder : qp, this.mapKeyConverter = (e == null ? void 0 : e.mapKeyConverter) ?? Fp;
  }
  clone() {
    return new na({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      rawStrings: this.rawStrings,
      maxStrLength: this.maxStrLength,
      maxBinLength: this.maxBinLength,
      maxArrayLength: this.maxArrayLength,
      maxMapLength: this.maxMapLength,
      maxExtLength: this.maxExtLength,
      keyDecoder: this.keyDecoder
    });
  }
  reinitializeState() {
    this.totalPos = 0, this.headByte = Yn, this.stack.reset();
  }
  setBuffer(e) {
    const s = fo(e);
    this.bytes = s, this.view = new DataView(s.buffer, s.byteOffset, s.byteLength), this.pos = 0;
  }
  appendBuffer(e) {
    if (this.headByte === Yn && !this.hasRemaining(1))
      this.setBuffer(e);
    else {
      const s = this.bytes.subarray(this.pos), n = fo(e), i = new Uint8Array(s.length + n.length);
      i.set(s), i.set(n, s.length), this.setBuffer(i);
    }
  }
  hasRemaining(e) {
    return this.view.byteLength - this.pos >= e;
  }
  createExtraByteError(e) {
    const { view: s, pos: n } = this;
    return new RangeError(`Extra ${s.byteLength - n} of ${s.byteLength} byte(s) found at buffer[${e}]`);
  }
  /**
   * @throws {@link DecodeError}
   * @throws {@link RangeError}
   */
  decode(e) {
    if (this.entered)
      return this.clone().decode(e);
    try {
      this.entered = !0, this.reinitializeState(), this.setBuffer(e);
      const s = this.doDecodeSync();
      if (this.hasRemaining(1))
        throw this.createExtraByteError(this.pos);
      return s;
    } finally {
      this.entered = !1;
    }
  }
  *decodeMulti(e) {
    if (this.entered) {
      yield* this.clone().decodeMulti(e);
      return;
    }
    try {
      for (this.entered = !0, this.reinitializeState(), this.setBuffer(e); this.hasRemaining(1); )
        yield this.doDecodeSync();
    } finally {
      this.entered = !1;
    }
  }
  async decodeAsync(e) {
    if (this.entered)
      return this.clone().decodeAsync(e);
    try {
      this.entered = !0;
      let s = !1, n;
      for await (const a of e) {
        if (s)
          throw this.entered = !1, this.createExtraByteError(this.totalPos);
        this.appendBuffer(a);
        try {
          n = this.doDecodeSync(), s = !0;
        } catch (c) {
          if (!(c instanceof RangeError))
            throw c;
        }
        this.totalPos += this.pos;
      }
      if (s) {
        if (this.hasRemaining(1))
          throw this.createExtraByteError(this.totalPos);
        return n;
      }
      const { headByte: i, pos: r, totalPos: o } = this;
      throw new RangeError(`Insufficient data in parsing ${Rr(i)} at ${o} (${r} in the current buffer)`);
    } finally {
      this.entered = !1;
    }
  }
  decodeArrayStream(e) {
    return this.decodeMultiAsync(e, !0);
  }
  decodeStream(e) {
    return this.decodeMultiAsync(e, !1);
  }
  async *decodeMultiAsync(e, s) {
    if (this.entered) {
      yield* this.clone().decodeMultiAsync(e, s);
      return;
    }
    try {
      this.entered = !0;
      let n = s, i = -1;
      for await (const r of e) {
        if (s && i === 0)
          throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(r), n && (i = this.readArraySize(), n = !1, this.complete());
        try {
          for (; yield this.doDecodeSync(), --i !== 0; )
            ;
        } catch (o) {
          if (!(o instanceof RangeError))
            throw o;
        }
        this.totalPos += this.pos;
      }
    } finally {
      this.entered = !1;
    }
  }
  doDecodeSync() {
    e: for (; ; ) {
      const e = this.readHeadByte();
      let s;
      if (e >= 224)
        s = e - 256;
      else if (e < 192)
        if (e < 128)
          s = e;
        else if (e < 144) {
          const i = e - 128;
          if (i !== 0) {
            this.pushMapState(i), this.complete();
            continue e;
          } else
            s = {};
        } else if (e < 160) {
          const i = e - 144;
          if (i !== 0) {
            this.pushArrayState(i), this.complete();
            continue e;
          } else
            s = [];
        } else {
          const i = e - 160;
          s = this.decodeString(i, 0);
        }
      else if (e === 192)
        s = null;
      else if (e === 194)
        s = !1;
      else if (e === 195)
        s = !0;
      else if (e === 202)
        s = this.readF32();
      else if (e === 203)
        s = this.readF64();
      else if (e === 204)
        s = this.readU8();
      else if (e === 205)
        s = this.readU16();
      else if (e === 206)
        s = this.readU32();
      else if (e === 207)
        this.useBigInt64 ? s = this.readU64AsBigInt() : s = this.readU64();
      else if (e === 208)
        s = this.readI8();
      else if (e === 209)
        s = this.readI16();
      else if (e === 210)
        s = this.readI32();
      else if (e === 211)
        this.useBigInt64 ? s = this.readI64AsBigInt() : s = this.readI64();
      else if (e === 217) {
        const i = this.lookU8();
        s = this.decodeString(i, 1);
      } else if (e === 218) {
        const i = this.lookU16();
        s = this.decodeString(i, 2);
      } else if (e === 219) {
        const i = this.lookU32();
        s = this.decodeString(i, 4);
      } else if (e === 220) {
        const i = this.readU16();
        if (i !== 0) {
          this.pushArrayState(i), this.complete();
          continue e;
        } else
          s = [];
      } else if (e === 221) {
        const i = this.readU32();
        if (i !== 0) {
          this.pushArrayState(i), this.complete();
          continue e;
        } else
          s = [];
      } else if (e === 222) {
        const i = this.readU16();
        if (i !== 0) {
          this.pushMapState(i), this.complete();
          continue e;
        } else
          s = {};
      } else if (e === 223) {
        const i = this.readU32();
        if (i !== 0) {
          this.pushMapState(i), this.complete();
          continue e;
        } else
          s = {};
      } else if (e === 196) {
        const i = this.lookU8();
        s = this.decodeBinary(i, 1);
      } else if (e === 197) {
        const i = this.lookU16();
        s = this.decodeBinary(i, 2);
      } else if (e === 198) {
        const i = this.lookU32();
        s = this.decodeBinary(i, 4);
      } else if (e === 212)
        s = this.decodeExtension(1, 0);
      else if (e === 213)
        s = this.decodeExtension(2, 0);
      else if (e === 214)
        s = this.decodeExtension(4, 0);
      else if (e === 215)
        s = this.decodeExtension(8, 0);
      else if (e === 216)
        s = this.decodeExtension(16, 0);
      else if (e === 199) {
        const i = this.lookU8();
        s = this.decodeExtension(i, 1);
      } else if (e === 200) {
        const i = this.lookU16();
        s = this.decodeExtension(i, 2);
      } else if (e === 201) {
        const i = this.lookU32();
        s = this.decodeExtension(i, 4);
      } else
        throw new vt(`Unrecognized type byte: ${Rr(e)}`);
      this.complete();
      const n = this.stack;
      for (; n.length > 0; ) {
        const i = n.top();
        if (i.type === go)
          if (i.array[i.position] = s, i.position++, i.position === i.size)
            s = i.array, n.release(i);
          else
            continue e;
        else if (i.type === ui) {
          if (s === "__proto__")
            throw new vt("The key __proto__ is not allowed");
          i.key = this.mapKeyConverter(s), i.type = Kl;
          continue e;
        } else if (i.map[i.key] = s, i.readCount++, i.readCount === i.size)
          s = i.map, n.release(i);
        else {
          i.key = null, i.type = ui;
          continue e;
        }
      }
      return s;
    }
  }
  readHeadByte() {
    return this.headByte === Yn && (this.headByte = this.readU8()), this.headByte;
  }
  complete() {
    this.headByte = Yn;
  }
  readArraySize() {
    const e = this.readHeadByte();
    switch (e) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default: {
        if (e < 160)
          return e - 144;
        throw new vt(`Unrecognized array type byte: ${Rr(e)}`);
      }
    }
  }
  pushMapState(e) {
    if (e > this.maxMapLength)
      throw new vt(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
    this.stack.pushMapState(e);
  }
  pushArrayState(e) {
    if (e > this.maxArrayLength)
      throw new vt(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
    this.stack.pushArrayState(e);
  }
  decodeString(e, s) {
    return !this.rawStrings || this.stateIsMapKey() ? this.decodeUtf8String(e, s) : this.decodeBinary(e, s);
  }
  /**
   * @throws {@link RangeError}
   */
  decodeUtf8String(e, s) {
    var r;
    if (e > this.maxStrLength)
      throw new vt(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
    if (this.bytes.byteLength < this.pos + s + e)
      throw Da;
    const n = this.pos + s;
    let i;
    return this.stateIsMapKey() && ((r = this.keyDecoder) != null && r.canBeCached(e)) ? i = this.keyDecoder.decode(this.bytes, n, e) : i = Ep(this.bytes, n, e), this.pos += s + e, i;
  }
  stateIsMapKey() {
    return this.stack.length > 0 ? this.stack.top().type === ui : !1;
  }
  /**
   * @throws {@link RangeError}
   */
  decodeBinary(e, s) {
    if (e > this.maxBinLength)
      throw new vt(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
    if (!this.hasRemaining(e + s))
      throw Da;
    const n = this.pos + s, i = this.bytes.subarray(n, n + e);
    return this.pos += s + e, i;
  }
  decodeExtension(e, s) {
    if (e > this.maxExtLength)
      throw new vt(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
    const n = this.view.getInt8(this.pos + s), i = this.decodeBinary(
      e,
      s + 1
      /* extType */
    );
    return this.extensionCodec.decode(i, n, this.context);
  }
  lookU8() {
    return this.view.getUint8(this.pos);
  }
  lookU16() {
    return this.view.getUint16(this.pos);
  }
  lookU32() {
    return this.view.getUint32(this.pos);
  }
  readU8() {
    const e = this.view.getUint8(this.pos);
    return this.pos++, e;
  }
  readI8() {
    const e = this.view.getInt8(this.pos);
    return this.pos++, e;
  }
  readU16() {
    const e = this.view.getUint16(this.pos);
    return this.pos += 2, e;
  }
  readI16() {
    const e = this.view.getInt16(this.pos);
    return this.pos += 2, e;
  }
  readU32() {
    const e = this.view.getUint32(this.pos);
    return this.pos += 4, e;
  }
  readI32() {
    const e = this.view.getInt32(this.pos);
    return this.pos += 4, e;
  }
  readU64() {
    const e = vp(this.view, this.pos);
    return this.pos += 8, e;
  }
  readI64() {
    const e = Hl(this.view, this.pos);
    return this.pos += 8, e;
  }
  readU64AsBigInt() {
    const e = this.view.getBigUint64(this.pos);
    return this.pos += 8, e;
  }
  readI64AsBigInt() {
    const e = this.view.getBigInt64(this.pos);
    return this.pos += 8, e;
  }
  readF32() {
    const e = this.view.getFloat32(this.pos);
    return this.pos += 4, e;
  }
  readF64() {
    const e = this.view.getFloat64(this.pos);
    return this.pos += 8, e;
  }
}
function jp(t, e) {
  return new na(e).decode(t);
}
const Hp = ":";
function As(t) {
  const [e, s] = t.split(Hp);
  return { namespace: e, reference: s };
}
function Vl(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
var Kp = Object.defineProperty, Vp = Object.defineProperties, zp = Object.getOwnPropertyDescriptors, $a = Object.getOwnPropertySymbols, Gp = Object.prototype.hasOwnProperty, Yp = Object.prototype.propertyIsEnumerable, mo = (t, e, s) => e in t ? Kp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, La = (t, e) => {
  for (var s in e || (e = {})) Gp.call(e, s) && mo(t, s, e[s]);
  if ($a) for (var s of $a(e)) Yp.call(e, s) && mo(t, s, e[s]);
  return t;
}, Jp = (t, e) => Vp(t, zp(e)), Ba = (t, e, s) => mo(t, typeof e != "symbol" ? e + "" : e, s);
const Xp = "ReactNative", Nt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Zp = "js";
function nr() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function zs() {
  return !Ss.getDocument() && !!Ss.getNavigator() && navigator.product === Xp;
}
function Qp() {
  return zs() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function ef() {
  return zs() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Hn() {
  return !nr() && !!Ss.getNavigator() && !!Ss.getDocument();
}
function vi() {
  return zs() ? Nt.reactNative : nr() ? Nt.node : Hn() ? Nt.browser : Nt.unknown;
}
function Fa() {
  var t;
  try {
    return zs() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function tf(t, e) {
  const s = new URLSearchParams(t);
  return Object.entries(e).sort(([n], [i]) => n.localeCompare(i)).forEach(([n, i]) => {
    i != null && s.set(n, String(i));
  }), s.toString();
}
function sf(t) {
  var e, s;
  const n = zl();
  try {
    return t != null && t.url && n.url && new URL(t.url).host !== new URL(n.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${n.url}. This is probably unintended and can lead to issues.`), t.url = n.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((i) => i !== "")), Jp(La(La({}, n), t), { url: (t == null ? void 0 : t.url) || n.url, name: (t == null ? void 0 : t.name) || n.name, description: (t == null ? void 0 : t.description) || n.description, icons: (s = t == null ? void 0 : t.icons) != null && s.length && t.icons.length > 0 ? t.icons : n.icons });
  } catch (i) {
    return console.warn("Error populating app metadata", i), t || n;
  }
}
function zl() {
  return Uu.getWindowMetadata() || { name: "", description: "", url: "", icons: [""] };
}
function nf() {
  if (vi() === Nt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: s, Version: n } = global.Platform;
    return [s, n].join("-");
  }
  const t = $u();
  if (t === null) return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function rf() {
  var t;
  const e = vi();
  return e === Nt.browser ? [e, ((t = Ss.getLocation()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Gl(t, e, s) {
  const n = nf(), i = rf();
  return [[t, e].join("-"), [Zp, s].join("-"), n, i].join("/");
}
function of({ protocol: t, version: e, relayUrl: s, sdkVersion: n, auth: i, projectId: r, useOnCloseEvent: o, bundleId: a, packageName: c }) {
  const l = s.split("?"), d = Gl(t, e, n), u = { auth: i, ua: d, projectId: r, useOnCloseEvent: o, packageName: c || void 0, bundleId: a || void 0 }, h = tf(l[1] || "", u);
  return l[0] + "?" + h;
}
function cn(t, e) {
  return t.filter((s) => e.includes(s)).length === t.length;
}
function yo(t) {
  return Object.fromEntries(t.entries());
}
function wo(t) {
  return new Map(Object.entries(t));
}
function sn(t = B.FIVE_MINUTES, e) {
  const s = B.toMiliseconds(t || B.FIVE_MINUTES);
  let n, i, r, o;
  return { resolve: (a) => {
    r && n && (clearTimeout(r), n(a), o = Promise.resolve(a));
  }, reject: (a) => {
    r && i && (clearTimeout(r), i(a));
  }, done: () => new Promise((a, c) => {
    if (o) return a(o);
    r = setTimeout(() => {
      const l = new Error(e);
      o = Promise.reject(l), c(l);
    }, s), n = a, i = c;
  }) };
}
function os(t, e, s) {
  return new Promise(async (n, i) => {
    const r = setTimeout(() => i(new Error(s)), e);
    try {
      const o = await t;
      n(o);
    } catch (o) {
      i(o);
    }
    clearTimeout(r);
  });
}
function Yl(t, e) {
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
function af(t) {
  return Yl("topic", t);
}
function cf(t) {
  return Yl("id", t);
}
function Jl(t) {
  const [e, s] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof s == "string") n.topic = s;
  else if (e === "id" && Number.isInteger(Number(s))) n.id = Number(s);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
  return n;
}
function $e(t, e) {
  return B.fromMiliseconds(Date.now() + B.toMiliseconds(t));
}
function is(t) {
  return Date.now() >= B.toMiliseconds(t);
}
function Ie(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function cs(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function lf({ id: t, topic: e, wcDeepLink: s }) {
  var n;
  try {
    if (!s) return;
    const i = typeof s == "string" ? JSON.parse(s) : s, r = i == null ? void 0 : i.href;
    if (typeof r != "string") return;
    const o = df(r, t, e), a = vi();
    if (a === Nt.browser) {
      if (!((n = Ss.getDocument()) != null && n.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      uf(o);
    } else a === Nt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(o);
  } catch (i) {
    console.error(i);
  }
}
function df(t, e, s) {
  const n = `requestId=${e}&sessionTopic=${s}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let i = `${t}`;
  if (t.startsWith("https://t.me")) {
    const r = t.includes("?") ? "&startapp=" : "?startapp=";
    i = `${i}${r}${gf(n, !0)}`;
  } else i = `${i}/wc?${n}`;
  return i;
}
function uf(t) {
  let e = "_self";
  ff() ? e = "_top" : (pf() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function hf(t, e) {
  let s = "";
  try {
    if (Hn() && (s = localStorage.getItem(e), s)) return s;
    s = await t.getItem(e);
  } catch (n) {
    console.error(n);
  }
  return s;
}
function Ma(t, e) {
  if (!t.includes(e)) return null;
  const s = t.split(/([&,?,=])/), n = s.indexOf(e);
  return s[n + 2];
}
function Wa() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function ia() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function pf() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function ff() {
  try {
    return window.self !== window.top;
  } catch {
    return !1;
  }
}
function gf(t, e = !1) {
  const s = Buffer.from(t).toString("base64");
  return e ? s.replace(/[=]/g, "") : s;
}
function Xl(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function mf(t) {
  return new Promise((e) => setTimeout(e, t));
}
let yf = class {
  constructor({ limit: e }) {
    Ba(this, "limit"), Ba(this, "set"), this.limit = e, this.set = /* @__PURE__ */ new Set();
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
};
const Ri = BigInt(2 ** 32 - 1), qa = BigInt(32);
function Zl(t, e = !1) {
  return e ? { h: Number(t & Ri), l: Number(t >> qa & Ri) } : { h: Number(t >> qa & Ri) | 0, l: Number(t & Ri) | 0 };
}
function Ql(t, e = !1) {
  const s = t.length;
  let n = new Uint32Array(s), i = new Uint32Array(s);
  for (let r = 0; r < s; r++) {
    const { h: o, l: a } = Zl(t[r], e);
    [n[r], i[r]] = [o, a];
  }
  return [n, i];
}
const ja = (t, e, s) => t >>> s, Ha = (t, e, s) => t << 32 - s | e >>> s, Ls = (t, e, s) => t >>> s | e << 32 - s, Bs = (t, e, s) => t << 32 - s | e >>> s, ri = (t, e, s) => t << 64 - s | e >>> s - 32, oi = (t, e, s) => t >>> s - 32 | e << 64 - s, wf = (t, e) => e, bf = (t, e) => t, Ef = (t, e, s) => t << s | e >>> 32 - s, Cf = (t, e, s) => e << s | t >>> 32 - s, vf = (t, e, s) => e << s - 32 | t >>> 64 - s, Af = (t, e, s) => t << s - 32 | e >>> 64 - s;
function Kt(t, e, s, n) {
  const i = (e >>> 0) + (n >>> 0);
  return { h: t + s + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const ra = (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0), oa = (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0, If = (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0), Nf = (t, e, s, n, i) => e + s + n + i + (t / 2 ** 32 | 0) | 0, Sf = (t, e, s, n, i) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (i >>> 0), _f = (t, e, s, n, i, r) => e + s + n + i + r + (t / 2 ** 32 | 0) | 0, An = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function fr(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function _s(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Yt(t, ...e) {
  if (!fr(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function gr(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
  _s(t.outputLen), _s(t.blockLen);
}
function Vs(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function aa(t, e) {
  Yt(t);
  const s = e.outputLen;
  if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
}
function wi(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Bt(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function Ur(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function Xt(t, e) {
  return t << 32 - e | t >>> e;
}
const ed = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function td(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
const fs = ed ? (t) => t : (t) => td(t);
function Tf(t) {
  for (let e = 0; e < t.length; e++) t[e] = td(t[e]);
  return t;
}
const Fs = ed ? (t) => t : Tf, sd = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Of = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Un(t) {
  if (Yt(t), sd) return t.toHex();
  let e = "";
  for (let s = 0; s < t.length; s++) e += Of[t[s]];
  return e;
}
const hs = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Ka(t) {
  if (t >= hs._0 && t <= hs._9) return t - hs._0;
  if (t >= hs.A && t <= hs.F) return t - (hs.A - 10);
  if (t >= hs.a && t <= hs.f) return t - (hs.a - 10);
}
function ir(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  if (sd) return Uint8Array.fromHex(t);
  const e = t.length, s = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(s);
  for (let i = 0, r = 0; i < s; i++, r += 2) {
    const o = Ka(t.charCodeAt(r)), a = Ka(t.charCodeAt(r + 1));
    if (o === void 0 || a === void 0) {
      const c = t[r] + t[r + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + r);
    }
    n[i] = o * 16 + a;
  }
  return n;
}
function nd(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function Gt(t) {
  return typeof t == "string" && (t = nd(t)), Yt(t), t;
}
function Ws(...t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    Yt(i), e += i.length;
  }
  const s = new Uint8Array(e);
  for (let n = 0, i = 0; n < t.length; n++) {
    const r = t[n];
    s.set(r, i), i += r.length;
  }
  return s;
}
let mr = class {
};
function Ai(t) {
  const e = (n) => t().update(Gt(n)).digest(), s = t();
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
}
function kf(t) {
  const e = (n, i) => t(i).update(Gt(n)).digest(), s = t({});
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
}
function yn(t = 32) {
  if (An && typeof An.getRandomValues == "function") return An.getRandomValues(new Uint8Array(t));
  if (An && typeof An.randomBytes == "function") return Uint8Array.from(An.randomBytes(t));
  throw new Error("crypto.getRandomValues must be defined");
}
const xf = BigInt(0), Jn = BigInt(1), Pf = BigInt(2), Rf = BigInt(7), Uf = BigInt(256), Df = BigInt(113), id = [], rd = [], od = [];
for (let t = 0, e = Jn, s = 1, n = 0; t < 24; t++) {
  [s, n] = [n, (2 * s + 3 * n) % 5], id.push(2 * (5 * n + s)), rd.push((t + 1) * (t + 2) / 2 % 64);
  let i = xf;
  for (let r = 0; r < 7; r++) e = (e << Jn ^ (e >> Rf) * Df) % Uf, e & Pf && (i ^= Jn << (Jn << BigInt(r)) - Jn);
  od.push(i);
}
const ad = Ql(od, !0), $f = ad[0], Lf = ad[1], Va = (t, e, s) => s > 32 ? vf(t, e, s) : Ef(t, e, s), za = (t, e, s) => s > 32 ? Af(t, e, s) : Cf(t, e, s);
function Bf(t, e = 24) {
  const s = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], d = s[c + 1], u = Va(l, d, 1) ^ s[a], h = za(l, d, 1) ^ s[a + 1];
      for (let p = 0; p < 50; p += 10) t[o + p] ^= u, t[o + p + 1] ^= h;
    }
    let i = t[2], r = t[3];
    for (let o = 0; o < 24; o++) {
      const a = rd[o], c = Va(i, r, a), l = za(i, r, a), d = id[o];
      i = t[d], r = t[d + 1], t[d] = c, t[d + 1] = l;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) s[a] = t[o + a];
      for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
    }
    t[0] ^= $f[n], t[1] ^= Lf[n];
  }
  Bt(s);
}
let Ff = class cd extends mr {
  constructor(e, s, n, i = !1, r = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = i, this.rounds = r, _s(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = wi(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    Fs(this.state32), Bf(this.state32, this.rounds), Fs(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Vs(this), e = Gt(e), Yt(e);
    const { blockLen: s, state: n } = this, i = e.length;
    for (let r = 0; r < i; ) {
      const o = Math.min(s - this.pos, i - r);
      for (let a = 0; a < o; a++) n[this.pos++] ^= e[r++];
      this.pos === s && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: e, suffix: s, pos: n, blockLen: i } = this;
    e[n] ^= s, (s & 128) !== 0 && n === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Vs(this, !1), Yt(e), this.finish();
    const s = this.state, { blockLen: n } = this;
    for (let i = 0, r = e.length; i < r; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, r - i);
      e.set(s.subarray(this.posOut, this.posOut + o), i), this.posOut += o, i += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return _s(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (aa(e, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, Bt(this.state);
  }
  _cloneInto(e) {
    const { blockLen: s, suffix: n, outputLen: i, rounds: r, enableXOF: o } = this;
    return e || (e = new cd(s, n, i, o, r)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = r, e.suffix = n, e.outputLen = i, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
};
const Mf = (t, e, s) => Ai(() => new Ff(e, t, s)), Wf = Mf(1, 136, 256 / 8);
function qf(t, e, s, n) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
  const i = BigInt(32), r = BigInt(4294967295), o = Number(s >> i & r), a = Number(s & r), c = n ? 4 : 0, l = n ? 0 : 4;
  t.setUint32(e + c, o, n), t.setUint32(e + l, a, n);
}
function jf(t, e, s) {
  return t & e ^ ~t & s;
}
function Hf(t, e, s) {
  return t & e ^ t & s ^ e & s;
}
let ld = class extends mr {
  constructor(e, s, n, i) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = s, this.padOffset = n, this.isLE = i, this.buffer = new Uint8Array(e), this.view = Ur(this.buffer);
  }
  update(e) {
    Vs(this), e = Gt(e), Yt(e);
    const { view: s, buffer: n, blockLen: i } = this, r = e.length;
    for (let o = 0; o < r; ) {
      const a = Math.min(i - this.pos, r - o);
      if (a === i) {
        const c = Ur(e);
        for (; i <= r - o; o += i) this.process(c, o);
        continue;
      }
      n.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === i && (this.process(s, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Vs(this), aa(e, this), this.finished = !0;
    const { buffer: s, view: n, blockLen: i, isLE: r } = this;
    let { pos: o } = this;
    s[o++] = 128, Bt(this.buffer.subarray(o)), this.padOffset > i - o && (this.process(n, 0), o = 0);
    for (let u = o; u < i; u++) s[u] = 0;
    qf(n, i - 8, BigInt(this.length * 8), r), this.process(n, 0);
    const a = Ur(e), c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = c / 4, d = this.get();
    if (l > d.length) throw new Error("_sha2: outputLen bigger than state");
    for (let u = 0; u < l; u++) a.setUint32(4 * u, d[u], r);
  }
  digest() {
    const { buffer: e, outputLen: s } = this;
    this.digestInto(e);
    const n = e.slice(0, s);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: s, buffer: n, length: i, finished: r, destroyed: o, pos: a } = this;
    return e.destroyed = o, e.finished = r, e.length = i, e.pos = a, i % s && e.buffer.set(n), e;
  }
  clone() {
    return this._cloneInto();
  }
};
const xs = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), Xe = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]), Ze = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]), Kf = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Ps = new Uint32Array(64);
class Vf extends ld {
  constructor(e = 32) {
    super(64, e, 8, !1), this.A = xs[0] | 0, this.B = xs[1] | 0, this.C = xs[2] | 0, this.D = xs[3] | 0, this.E = xs[4] | 0, this.F = xs[5] | 0, this.G = xs[6] | 0, this.H = xs[7] | 0;
  }
  get() {
    const { A: e, B: s, C: n, D: i, E: r, F: o, G: a, H: c } = this;
    return [e, s, n, i, r, o, a, c];
  }
  set(e, s, n, i, r, o, a, c) {
    this.A = e | 0, this.B = s | 0, this.C = n | 0, this.D = i | 0, this.E = r | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, s) {
    for (let u = 0; u < 16; u++, s += 4) Ps[u] = e.getUint32(s, !1);
    for (let u = 16; u < 64; u++) {
      const h = Ps[u - 15], p = Ps[u - 2], g = Xt(h, 7) ^ Xt(h, 18) ^ h >>> 3, m = Xt(p, 17) ^ Xt(p, 19) ^ p >>> 10;
      Ps[u] = m + Ps[u - 7] + g + Ps[u - 16] | 0;
    }
    let { A: n, B: i, C: r, D: o, E: a, F: c, G: l, H: d } = this;
    for (let u = 0; u < 64; u++) {
      const h = Xt(a, 6) ^ Xt(a, 11) ^ Xt(a, 25), p = d + h + jf(a, c, l) + Kf[u] + Ps[u] | 0, g = (Xt(n, 2) ^ Xt(n, 13) ^ Xt(n, 22)) + Hf(n, i, r) | 0;
      d = l, l = c, c = a, a = o + p | 0, o = r, r = i, i = n, n = p + g | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, r = r + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, d = d + this.H | 0, this.set(n, i, r, o, a, c, l, d);
  }
  roundClean() {
    Bt(Ps);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), Bt(this.buffer);
  }
}
const dd = Ql(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))), zf = dd[0], Gf = dd[1], Rs = new Uint32Array(80), Us = new Uint32Array(80);
let ca = class extends ld {
  constructor(e = 64) {
    super(128, e, 16, !1), this.Ah = Ze[0] | 0, this.Al = Ze[1] | 0, this.Bh = Ze[2] | 0, this.Bl = Ze[3] | 0, this.Ch = Ze[4] | 0, this.Cl = Ze[5] | 0, this.Dh = Ze[6] | 0, this.Dl = Ze[7] | 0, this.Eh = Ze[8] | 0, this.El = Ze[9] | 0, this.Fh = Ze[10] | 0, this.Fl = Ze[11] | 0, this.Gh = Ze[12] | 0, this.Gl = Ze[13] | 0, this.Hh = Ze[14] | 0, this.Hl = Ze[15] | 0;
  }
  get() {
    const { Ah: e, Al: s, Bh: n, Bl: i, Ch: r, Cl: o, Dh: a, Dl: c, Eh: l, El: d, Fh: u, Fl: h, Gh: p, Gl: g, Hh: m, Hl: y } = this;
    return [e, s, n, i, r, o, a, c, l, d, u, h, p, g, m, y];
  }
  set(e, s, n, i, r, o, a, c, l, d, u, h, p, g, m, y) {
    this.Ah = e | 0, this.Al = s | 0, this.Bh = n | 0, this.Bl = i | 0, this.Ch = r | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = d | 0, this.Fh = u | 0, this.Fl = h | 0, this.Gh = p | 0, this.Gl = g | 0, this.Hh = m | 0, this.Hl = y | 0;
  }
  process(e, s) {
    for (let _ = 0; _ < 16; _++, s += 4) Rs[_] = e.getUint32(s), Us[_] = e.getUint32(s += 4);
    for (let _ = 16; _ < 80; _++) {
      const F = Rs[_ - 15] | 0, Y = Us[_ - 15] | 0, H = Ls(F, Y, 1) ^ Ls(F, Y, 8) ^ ja(F, Y, 7), Q = Bs(F, Y, 1) ^ Bs(F, Y, 8) ^ Ha(F, Y, 7), J = Rs[_ - 2] | 0, T = Us[_ - 2] | 0, z = Ls(J, T, 19) ^ ri(J, T, 61) ^ ja(J, T, 6), se = Bs(J, T, 19) ^ oi(J, T, 61) ^ Ha(J, T, 6), x = If(Q, se, Us[_ - 7], Us[_ - 16]), w = Nf(x, H, z, Rs[_ - 7], Rs[_ - 16]);
      Rs[_] = w | 0, Us[_] = x | 0;
    }
    let { Ah: n, Al: i, Bh: r, Bl: o, Ch: a, Cl: c, Dh: l, Dl: d, Eh: u, El: h, Fh: p, Fl: g, Gh: m, Gl: y, Hh: I, Hl: N } = this;
    for (let _ = 0; _ < 80; _++) {
      const F = Ls(u, h, 14) ^ Ls(u, h, 18) ^ ri(u, h, 41), Y = Bs(u, h, 14) ^ Bs(u, h, 18) ^ oi(u, h, 41), H = u & p ^ ~u & m, Q = h & g ^ ~h & y, J = Sf(N, Y, Q, Gf[_], Us[_]), T = _f(J, I, F, H, zf[_], Rs[_]), z = J | 0, se = Ls(n, i, 28) ^ ri(n, i, 34) ^ ri(n, i, 39), x = Bs(n, i, 28) ^ oi(n, i, 34) ^ oi(n, i, 39), w = n & r ^ n & a ^ r & a, b = i & o ^ i & c ^ o & c;
      I = m | 0, N = y | 0, m = p | 0, y = g | 0, p = u | 0, g = h | 0, { h: u, l: h } = Kt(l | 0, d | 0, T | 0, z | 0), l = a | 0, d = c | 0, a = r | 0, c = o | 0, r = n | 0, o = i | 0;
      const E = ra(z, x, b);
      n = oa(E, T, se, w), i = E | 0;
    }
    ({ h: n, l: i } = Kt(this.Ah | 0, this.Al | 0, n | 0, i | 0)), { h: r, l: o } = Kt(this.Bh | 0, this.Bl | 0, r | 0, o | 0), { h: a, l: c } = Kt(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: d } = Kt(this.Dh | 0, this.Dl | 0, l | 0, d | 0), { h: u, l: h } = Kt(this.Eh | 0, this.El | 0, u | 0, h | 0), { h: p, l: g } = Kt(this.Fh | 0, this.Fl | 0, p | 0, g | 0), { h: m, l: y } = Kt(this.Gh | 0, this.Gl | 0, m | 0, y | 0), { h: I, l: N } = Kt(this.Hh | 0, this.Hl | 0, I | 0, N | 0), this.set(n, i, r, o, a, c, l, d, u, h, p, g, m, y, I, N);
  }
  roundClean() {
    Bt(Rs, Us);
  }
  destroy() {
    Bt(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
class Yf extends ca {
  constructor() {
    super(48), this.Ah = Xe[0] | 0, this.Al = Xe[1] | 0, this.Bh = Xe[2] | 0, this.Bl = Xe[3] | 0, this.Ch = Xe[4] | 0, this.Cl = Xe[5] | 0, this.Dh = Xe[6] | 0, this.Dl = Xe[7] | 0, this.Eh = Xe[8] | 0, this.El = Xe[9] | 0, this.Fh = Xe[10] | 0, this.Fl = Xe[11] | 0, this.Gh = Xe[12] | 0, this.Gl = Xe[13] | 0, this.Hh = Xe[14] | 0, this.Hl = Xe[15] | 0;
  }
}
const Qe = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882]);
class Jf extends ca {
  constructor() {
    super(32), this.Ah = Qe[0] | 0, this.Al = Qe[1] | 0, this.Bh = Qe[2] | 0, this.Bl = Qe[3] | 0, this.Ch = Qe[4] | 0, this.Cl = Qe[5] | 0, this.Dh = Qe[6] | 0, this.Dl = Qe[7] | 0, this.Eh = Qe[8] | 0, this.El = Qe[9] | 0, this.Fh = Qe[10] | 0, this.Fl = Qe[11] | 0, this.Gh = Qe[12] | 0, this.Gl = Qe[13] | 0, this.Hh = Qe[14] | 0, this.Hl = Qe[15] | 0;
  }
}
const yr = Ai(() => new Vf()), Xf = Ai(() => new ca()), Zf = Ai(() => new Yf()), Qf = Ai(() => new Jf()), eg = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]), Me = Uint32Array.from([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]), q = new Uint32Array(32);
function Ds(t, e, s, n, i, r) {
  const o = i[r], a = i[r + 1];
  let c = q[2 * t], l = q[2 * t + 1], d = q[2 * e], u = q[2 * e + 1], h = q[2 * s], p = q[2 * s + 1], g = q[2 * n], m = q[2 * n + 1], y = ra(c, d, o);
  l = oa(y, l, u, a), c = y | 0, { Dh: m, Dl: g } = { Dh: m ^ l, Dl: g ^ c }, { Dh: m, Dl: g } = { Dh: wf(m, g), Dl: bf(m) }, { h: p, l: h } = Kt(p, h, m, g), { Bh: u, Bl: d } = { Bh: u ^ p, Bl: d ^ h }, { Bh: u, Bl: d } = { Bh: Ls(u, d, 24), Bl: Bs(u, d, 24) }, q[2 * t] = c, q[2 * t + 1] = l, q[2 * e] = d, q[2 * e + 1] = u, q[2 * s] = h, q[2 * s + 1] = p, q[2 * n] = g, q[2 * n + 1] = m;
}
function $s(t, e, s, n, i, r) {
  const o = i[r], a = i[r + 1];
  let c = q[2 * t], l = q[2 * t + 1], d = q[2 * e], u = q[2 * e + 1], h = q[2 * s], p = q[2 * s + 1], g = q[2 * n], m = q[2 * n + 1], y = ra(c, d, o);
  l = oa(y, l, u, a), c = y | 0, { Dh: m, Dl: g } = { Dh: m ^ l, Dl: g ^ c }, { Dh: m, Dl: g } = { Dh: Ls(m, g, 16), Dl: Bs(m, g, 16) }, { h: p, l: h } = Kt(p, h, m, g), { Bh: u, Bl: d } = { Bh: u ^ p, Bl: d ^ h }, { Bh: u, Bl: d } = { Bh: ri(u, d, 63), Bl: oi(u, d, 63) }, q[2 * t] = c, q[2 * t + 1] = l, q[2 * e] = d, q[2 * e + 1] = u, q[2 * s] = h, q[2 * s + 1] = p, q[2 * n] = g, q[2 * n + 1] = m;
}
function tg(t, e = {}, s, n, i) {
  if (_s(s), t < 0 || t > s) throw new Error("outputLen bigger than keyLen");
  const { key: r, salt: o, personalization: a } = e;
  if (r !== void 0 && (r.length < 1 || r.length > s)) throw new Error("key length must be undefined or 1.." + s);
  if (o !== void 0 && o.length !== n) throw new Error("salt must be undefined or " + n);
  if (a !== void 0 && a.length !== i) throw new Error("personalization must be undefined or " + i);
}
class sg extends mr {
  constructor(e, s) {
    super(), this.finished = !1, this.destroyed = !1, this.length = 0, this.pos = 0, _s(e), _s(s), this.blockLen = e, this.outputLen = s, this.buffer = new Uint8Array(e), this.buffer32 = wi(this.buffer);
  }
  update(e) {
    Vs(this), e = Gt(e), Yt(e);
    const { blockLen: s, buffer: n, buffer32: i } = this, r = e.length, o = e.byteOffset, a = e.buffer;
    for (let c = 0; c < r; ) {
      this.pos === s && (Fs(i), this.compress(i, 0, !1), Fs(i), this.pos = 0);
      const l = Math.min(s - this.pos, r - c), d = o + c;
      if (l === s && !(d % 4) && c + l < r) {
        const u = new Uint32Array(a, d, Math.floor((r - c) / 4));
        Fs(u);
        for (let h = 0; c + s < r; h += i.length, c += s) this.length += s, this.compress(u, h, !1);
        Fs(u);
        continue;
      }
      n.set(e.subarray(c, c + l), this.pos), this.pos += l, this.length += l, c += l;
    }
    return this;
  }
  digestInto(e) {
    Vs(this), aa(e, this);
    const { pos: s, buffer32: n } = this;
    this.finished = !0, Bt(this.buffer.subarray(s)), Fs(n), this.compress(n, 0, !0), Fs(n);
    const i = wi(e);
    this.get().forEach((r, o) => i[o] = fs(r));
  }
  digest() {
    const { buffer: e, outputLen: s } = this;
    this.digestInto(e);
    const n = e.slice(0, s);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    const { buffer: s, length: n, finished: i, destroyed: r, outputLen: o, pos: a } = this;
    return e || (e = new this.constructor({ dkLen: o })), e.set(...this.get()), e.buffer.set(s), e.destroyed = r, e.finished = i, e.length = n, e.pos = a, e.outputLen = o, e;
  }
  clone() {
    return this._cloneInto();
  }
}
class ng extends sg {
  constructor(e = {}) {
    const s = e.dkLen === void 0 ? 64 : e.dkLen;
    super(128, s), this.v0l = Me[0] | 0, this.v0h = Me[1] | 0, this.v1l = Me[2] | 0, this.v1h = Me[3] | 0, this.v2l = Me[4] | 0, this.v2h = Me[5] | 0, this.v3l = Me[6] | 0, this.v3h = Me[7] | 0, this.v4l = Me[8] | 0, this.v4h = Me[9] | 0, this.v5l = Me[10] | 0, this.v5h = Me[11] | 0, this.v6l = Me[12] | 0, this.v6h = Me[13] | 0, this.v7l = Me[14] | 0, this.v7h = Me[15] | 0, tg(s, e, 64, 16, 16);
    let { key: n, personalization: i, salt: r } = e, o = 0;
    if (n !== void 0 && (n = Gt(n), o = n.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, r !== void 0) {
      r = Gt(r);
      const a = wi(r);
      this.v4l ^= fs(a[0]), this.v4h ^= fs(a[1]), this.v5l ^= fs(a[2]), this.v5h ^= fs(a[3]);
    }
    if (i !== void 0) {
      i = Gt(i);
      const a = wi(i);
      this.v6l ^= fs(a[0]), this.v6h ^= fs(a[1]), this.v7l ^= fs(a[2]), this.v7h ^= fs(a[3]);
    }
    if (n !== void 0) {
      const a = new Uint8Array(this.blockLen);
      a.set(n), this.update(a);
    }
  }
  get() {
    let { v0l: e, v0h: s, v1l: n, v1h: i, v2l: r, v2h: o, v3l: a, v3h: c, v4l: l, v4h: d, v5l: u, v5h: h, v6l: p, v6h: g, v7l: m, v7h: y } = this;
    return [e, s, n, i, r, o, a, c, l, d, u, h, p, g, m, y];
  }
  set(e, s, n, i, r, o, a, c, l, d, u, h, p, g, m, y) {
    this.v0l = e | 0, this.v0h = s | 0, this.v1l = n | 0, this.v1h = i | 0, this.v2l = r | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = l | 0, this.v4h = d | 0, this.v5l = u | 0, this.v5h = h | 0, this.v6l = p | 0, this.v6h = g | 0, this.v7l = m | 0, this.v7h = y | 0;
  }
  compress(e, s, n) {
    this.get().forEach((c, l) => q[l] = c), q.set(Me, 16);
    let { h: i, l: r } = Zl(BigInt(this.length));
    q[24] = Me[8] ^ r, q[25] = Me[9] ^ i, n && (q[28] = ~q[28], q[29] = ~q[29]);
    let o = 0;
    const a = eg;
    for (let c = 0; c < 12; c++) Ds(0, 4, 8, 12, e, s + 2 * a[o++]), $s(0, 4, 8, 12, e, s + 2 * a[o++]), Ds(1, 5, 9, 13, e, s + 2 * a[o++]), $s(1, 5, 9, 13, e, s + 2 * a[o++]), Ds(2, 6, 10, 14, e, s + 2 * a[o++]), $s(2, 6, 10, 14, e, s + 2 * a[o++]), Ds(3, 7, 11, 15, e, s + 2 * a[o++]), $s(3, 7, 11, 15, e, s + 2 * a[o++]), Ds(0, 5, 10, 15, e, s + 2 * a[o++]), $s(0, 5, 10, 15, e, s + 2 * a[o++]), Ds(1, 6, 11, 12, e, s + 2 * a[o++]), $s(1, 6, 11, 12, e, s + 2 * a[o++]), Ds(2, 7, 8, 13, e, s + 2 * a[o++]), $s(2, 7, 8, 13, e, s + 2 * a[o++]), Ds(3, 4, 9, 14, e, s + 2 * a[o++]), $s(3, 4, 9, 14, e, s + 2 * a[o++]);
    this.v0l ^= q[0] ^ q[16], this.v0h ^= q[1] ^ q[17], this.v1l ^= q[2] ^ q[18], this.v1h ^= q[3] ^ q[19], this.v2l ^= q[4] ^ q[20], this.v2h ^= q[5] ^ q[21], this.v3l ^= q[6] ^ q[22], this.v3h ^= q[7] ^ q[23], this.v4l ^= q[8] ^ q[24], this.v4h ^= q[9] ^ q[25], this.v5l ^= q[10] ^ q[26], this.v5h ^= q[11] ^ q[27], this.v6l ^= q[12] ^ q[28], this.v6h ^= q[13] ^ q[29], this.v7l ^= q[14] ^ q[30], this.v7h ^= q[15] ^ q[31], Bt(q);
  }
  destroy() {
    this.destroyed = !0, Bt(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const ig = kf((t) => new ng(t)), rg = "https://rpc.walletconnect.org/v1";
function ud(t) {
  const e = `Ethereum Signed Message:
${t.length}`, s = new TextEncoder().encode(e + t);
  return "0x" + Buffer.from(Wf(s)).toString("hex");
}
async function og(t, e, s, n, i, r) {
  switch (s.t) {
    case "eip191":
      return await ag(t, e, s.s);
    case "eip1271":
      return await cg(t, e, s.s, n, i, r);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`);
  }
}
function ag(t, e, s) {
  const n = Ku(s);
  return Vu({ payload: ud(e), signature: n }).toLowerCase() === t.toLowerCase();
}
async function cg(t, e, s, n, i, r) {
  const o = As(n);
  if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${n}`);
  try {
    const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", l = s.substring(2), d = (l.length / 2).toString(16).padStart(64, "0"), u = (e.startsWith("0x") ? e : ud(e)).substring(2), h = a + u + c + d + l, p = await fetch(`${r || rg}/?chainId=${n}&projectId=${i}`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ id: lg(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: h }, "latest"] }) }), { result: g } = await p.json();
    return g ? g.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1;
  } catch (a) {
    return console.error("isValidEip1271Signature: ", a), !1;
  }
}
function lg() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function dg(t) {
  const e = atob(t), s = new Uint8Array(e.length);
  for (let o = 0; o < e.length; o++) s[o] = e.charCodeAt(o);
  const n = s[0];
  if (n === 0) throw new Error("No signatures found");
  const i = 1 + n * 64;
  if (s.length < i) throw new Error("Transaction data too short for claimed signature count");
  if (s.length < 100) throw new Error("Transaction too short");
  const r = Buffer.from(t, "base64").slice(1, 65);
  return qn.encode(r);
}
function ug(t) {
  const e = new Uint8Array(Buffer.from(t, "base64")), s = Array.from("TransactionData::").map((r) => r.charCodeAt(0)), n = new Uint8Array(s.length + e.length);
  n.set(s), n.set(e, s.length);
  const i = ig(n, { dkLen: 32 });
  return qn.encode(i);
}
function Ga(t) {
  const e = new Uint8Array(yr(hg(t)));
  return qn.encode(e);
}
function hg(t) {
  if (t instanceof Uint8Array) return t;
  if (Array.isArray(t)) return new Uint8Array(t);
  if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
  if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
  throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
}
function Ya(t) {
  const e = Buffer.from(t, "base64"), s = jp(e).txn;
  if (!s) throw new Error("Invalid signed transaction: missing 'txn' field");
  const n = Dp(s), i = Buffer.from("TX"), r = Buffer.concat([i, Buffer.from(n)]), o = Qf(r);
  return Lu.encode(o).replace(/=+$/, "");
}
function Dr(t) {
  const e = [];
  let s = BigInt(t);
  for (; s >= BigInt(128); ) e.push(Number(s & BigInt(127) | BigInt(128))), s >>= BigInt(7);
  return e.push(Number(s)), Buffer.from(e);
}
function pg(t) {
  const e = Buffer.from(t.signed.bodyBytes, "base64"), s = Buffer.from(t.signed.authInfoBytes, "base64"), n = Buffer.from(t.signature.signature, "base64"), i = [];
  i.push(Buffer.from([10])), i.push(Dr(e.length)), i.push(e), i.push(Buffer.from([18])), i.push(Dr(s.length)), i.push(s), i.push(Buffer.from([26])), i.push(Dr(n.length)), i.push(n);
  const r = Buffer.concat(i), o = yr(r);
  return Buffer.from(o).toString("hex").toUpperCase();
}
function fg(t) {
  var e, s;
  const n = [];
  try {
    if (typeof t == "string") return n.push(t), n;
    if (typeof t != "object") return n;
    t != null && t.id && n.push(t.id);
    const i = (s = (e = t == null ? void 0 : t.capabilities) == null ? void 0 : e.caip345) == null ? void 0 : s.transactionHashes;
    i && n.push(...i);
  } catch (i) {
    console.warn("getWalletSendCallsHashes failed: ", i);
  }
  return n;
}
var gg = Object.defineProperty, mg = Object.defineProperties, yg = Object.getOwnPropertyDescriptors, Ja = Object.getOwnPropertySymbols, wg = Object.prototype.hasOwnProperty, bg = Object.prototype.propertyIsEnumerable, Xa = (t, e, s) => e in t ? gg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Eg = (t, e) => {
  for (var s in e || (e = {})) wg.call(e, s) && Xa(t, s, e[s]);
  if (Ja) for (var s of Ja(e)) bg.call(e, s) && Xa(t, s, e[s]);
  return t;
}, Cg = (t, e) => mg(t, yg(e));
const hd = "did:pkh:", vg = { eip155: "Ethereum", solana: "Solana", bip122: "Bitcoin" }, Ag = (t) => t ? vg[t] || t : "", wr = (t) => t == null ? void 0 : t.split(":"), Ig = (t) => {
  const e = t && wr(t);
  if (e) return t.includes(hd) ? e[3] : e[1];
}, Ng = (t) => {
  const e = t && wr(t);
  if (e) return t.includes(hd) ? e[2] : e[0];
}, bo = (t) => {
  const e = t && wr(t);
  if (e) return e[2] + ":" + e[3];
}, rr = (t) => {
  const e = t && wr(t);
  if (e) return e.pop();
};
async function Za(t) {
  const { cacao: e, projectId: s } = t, { s: n, p: i } = e, r = pd(i, i.iss), o = rr(i.iss);
  return await og(o, r, n, bo(i.iss), s);
}
const pd = (t, e) => {
  const s = Ng(e);
  if (!s) throw new Error("Invalid issuer: " + e);
  const n = `${t.domain} wants you to sign in with your ${Ag(s)} account:`, i = rr(e);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let r = t.statement || void 0;
  const o = `URI: ${t.aud || t.uri}`, a = `Version: ${t.version}`, c = `Chain ID: ${Ig(e)}`, l = `Nonce: ${t.nonce}`, d = `Issued At: ${t.iat}`, u = t.exp ? `Expiration Time: ${t.exp}` : void 0, h = t.nbf ? `Not Before: ${t.nbf}` : void 0, p = t.requestId ? `Request ID: ${t.requestId}` : void 0, g = t.resources ? `Resources:${t.resources.map((y) => `
- ${y}`).join("")}` : void 0, m = Gi(t.resources);
  if (m) {
    const y = bi(m);
    r = Ug(r, y);
  }
  return [n, i, "", r, "", o, a, c, l, d, u, h, p, g].filter((y) => y != null).join(`
`);
};
function Sg(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function _g(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function fn(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e = Object.keys(t.att);
  if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
  e.forEach((s) => {
    const n = t.att[s];
    if (Array.isArray(n)) throw new Error(`Resource must be an object: ${s}`);
    if (typeof n != "object") throw new Error(`Resource must be an object: ${s}`);
    if (!Object.keys(n).length) throw new Error(`Resource object is empty: ${s}`);
    Object.keys(n).forEach((i) => {
      const r = n[i];
      if (!Array.isArray(r)) throw new Error(`Ability limits ${i} must be an array of objects, found: ${r}`);
      if (!r.length) throw new Error(`Value of ${i} is empty array, must be an array with objects`);
      r.forEach((o) => {
        if (typeof o != "object") throw new Error(`Ability limits (${i}) must be an array of objects, found: ${o}`);
      });
    });
  });
}
function Tg(t, e, s, n = {}) {
  return s == null || s.sort((i, r) => i.localeCompare(r)), { att: { [t]: Og(e, s, n) } };
}
function Og(t, e, s = {}) {
  e = e == null ? void 0 : e.sort((i, r) => i.localeCompare(r));
  const n = e.map((i) => ({ [`${t}/${i}`]: [s] }));
  return Object.assign({}, ...n);
}
function fd(t) {
  return fn(t), `urn:recap:${Sg(t).replace(/=/g, "")}`;
}
function bi(t) {
  const e = _g(t.replace("urn:recap:", ""));
  return fn(e), e;
}
function kg(t, e, s) {
  const n = Tg(t, e, s);
  return fd(n);
}
function xg(t) {
  return t && t.includes("urn:recap:");
}
function Pg(t, e) {
  const s = bi(t), n = bi(e), i = Rg(s, n);
  return fd(i);
}
function Rg(t, e) {
  fn(t), fn(e);
  const s = Object.keys(t.att).concat(Object.keys(e.att)).sort((i, r) => i.localeCompare(r)), n = { att: {} };
  return s.forEach((i) => {
    var r, o;
    Object.keys(((r = t.att) == null ? void 0 : r[i]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[i]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
      var c, l;
      n.att[i] = Cg(Eg({}, n.att[i]), { [a]: ((c = t.att[i]) == null ? void 0 : c[a]) || ((l = e.att[i]) == null ? void 0 : l[a]) });
    });
  }), n;
}
function Ug(t = "", e) {
  fn(e);
  const s = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(s)) return t;
  const n = [];
  let i = 0;
  Object.keys(e.att).forEach((a) => {
    const c = Object.keys(e.att[a]).map((u) => ({ ability: u.split("/")[0], action: u.split("/")[1] }));
    c.sort((u, h) => u.action.localeCompare(h.action));
    const l = {};
    c.forEach((u) => {
      l[u.ability] || (l[u.ability] = []), l[u.ability].push(u.action);
    });
    const d = Object.keys(l).map((u) => (i++, `(${i}) '${u}': '${l[u].join("', '")}' for '${a}'.`));
    n.push(d.join(", ").replace(".,", "."));
  });
  const r = n.join(" "), o = `${s}${r}`;
  return `${t ? t + " " : ""}${o}`;
}
function Qa(t) {
  var e;
  const s = bi(t);
  fn(s);
  const n = (e = s.att) == null ? void 0 : e.eip155;
  return n ? Object.keys(n).map((i) => i.split("/")[1]) : [];
}
function ec(t) {
  const e = bi(t);
  fn(e);
  const s = [];
  return Object.values(e.att).forEach((n) => {
    Object.values(n).forEach((i) => {
      var r;
      (r = i == null ? void 0 : i[0]) != null && r.chains && s.push(i[0].chains);
    });
  }), [...new Set(s.flat())];
}
function Gi(t) {
  if (!t) return;
  const e = t == null ? void 0 : t[t.length - 1];
  return xg(e) ? e : void 0;
}
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
function gd(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Eo(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
function $r(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function ht(t, ...e) {
  if (!gd(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function tc(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Dg(t, e) {
  ht(t);
  const s = e.outputLen;
  if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
}
function Ks(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Fn(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function $g(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
const Lg = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Bg(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function Co(t) {
  if (typeof t == "string") t = Bg(t);
  else if (gd(t)) t = vo(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function Fg(t, e) {
  if (e == null || typeof e != "object") throw new Error("options must be defined");
  return Object.assign(t, e);
}
function Mg(t, e) {
  if (t.length !== e.length) return !1;
  let s = 0;
  for (let n = 0; n < t.length; n++) s |= t[n] ^ e[n];
  return s === 0;
}
const Wg = (t, e) => {
  function s(n, ...i) {
    if (ht(n), !Lg) throw new Error("Non little-endian hardware is not yet supported");
    if (t.nonceLength !== void 0) {
      const l = i[0];
      if (!l) throw new Error("nonce / iv required");
      t.varSizeNonce ? ht(l) : ht(l, t.nonceLength);
    }
    const r = t.tagLength;
    r && i[1] !== void 0 && ht(i[1]);
    const o = e(n, ...i), a = (l, d) => {
      if (d !== void 0) {
        if (l !== 2) throw new Error("cipher output not supported");
        ht(d);
      }
    };
    let c = !1;
    return { encrypt(l, d) {
      if (c) throw new Error("cannot encrypt() twice with same key + nonce");
      return c = !0, ht(l), a(o.encrypt.length, d), o.encrypt(l, d);
    }, decrypt(l, d) {
      if (ht(l), r && l.length < r) throw new Error("invalid ciphertext length: smaller than tagLength=" + r);
      return a(o.decrypt.length, d), o.decrypt(l, d);
    } };
  }
  return Object.assign(s, t), s;
};
function sc(t, e, s = !0) {
  if (e === void 0) return new Uint8Array(t);
  if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
  if (s && !jg(e)) throw new Error("invalid output, must be aligned");
  return e;
}
function nc(t, e, s, n) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, n);
  const i = BigInt(32), r = BigInt(4294967295), o = Number(s >> i & r), a = Number(s & r);
  t.setUint32(e + 4, o, n), t.setUint32(e + 0, a, n);
}
function qg(t, e, s) {
  Eo(s);
  const n = new Uint8Array(16), i = $g(n);
  return nc(i, 0, BigInt(e), s), nc(i, 8, BigInt(t), s), n;
}
function jg(t) {
  return t.byteOffset % 4 === 0;
}
function vo(t) {
  return Uint8Array.from(t);
}
const md = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), Hg = md("expand 16-byte k"), Kg = md("expand 32-byte k"), Vg = Ks(Hg), zg = Ks(Kg);
function Ee(t, e) {
  return t << e | t >>> 32 - e;
}
function Ao(t) {
  return t.byteOffset % 4 === 0;
}
const Ui = 64, Gg = 16, yd = 2 ** 32 - 1, ic = new Uint32Array();
function Yg(t, e, s, n, i, r, o, a) {
  const c = i.length, l = new Uint8Array(Ui), d = Ks(l), u = Ao(i) && Ao(r), h = u ? Ks(i) : ic, p = u ? Ks(r) : ic;
  for (let g = 0; g < c; o++) {
    if (t(e, s, n, d, o, a), o >= yd) throw new Error("arx: counter overflow");
    const m = Math.min(Ui, c - g);
    if (u && m === Ui) {
      const y = g / 4;
      if (g % 4 !== 0) throw new Error("arx: invalid block position");
      for (let I = 0, N; I < Gg; I++) N = y + I, p[N] = h[N] ^ d[I];
      g += Ui;
      continue;
    }
    for (let y = 0, I; y < m; y++) I = g + y, r[I] = i[I] ^ l[y];
    g += m;
  }
}
function Jg(t, e) {
  const { allowShortKeys: s, extendNonceFn: n, counterLength: i, counterRight: r, rounds: o } = Fg({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, e);
  if (typeof t != "function") throw new Error("core must be a function");
  return $r(i), $r(o), Eo(r), Eo(s), (a, c, l, d, u = 0) => {
    ht(a), ht(c), ht(l);
    const h = l.length;
    if (d === void 0 && (d = new Uint8Array(h)), ht(d), $r(u), u < 0 || u >= yd) throw new Error("arx: counter overflow");
    if (d.length < h) throw new Error(`arx: output (${d.length}) is shorter than data (${h})`);
    const p = [];
    let g = a.length, m, y;
    if (g === 32) p.push(m = vo(a)), y = zg;
    else if (g === 16 && s) m = new Uint8Array(32), m.set(a), m.set(a, 16), y = Vg, p.push(m);
    else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
    Ao(c) || p.push(c = vo(c));
    const I = Ks(m);
    if (n) {
      if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      n(y, I, Ks(c.subarray(0, 16)), I), c = c.subarray(16);
    }
    const N = 16 - i;
    if (N !== c.length) throw new Error(`arx: nonce must be ${N} or 16 bytes`);
    if (N !== 12) {
      const F = new Uint8Array(12);
      F.set(c, r ? 0 : 12 - c.length), c = F, p.push(c);
    }
    const _ = Ks(c);
    return Yg(t, y, I, _, l, d, u, o), Fn(...p), d;
  };
}
const He = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
class Xg {
  constructor(e) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, e = Co(e), ht(e, 32);
    const s = He(e, 0), n = He(e, 2), i = He(e, 4), r = He(e, 6), o = He(e, 8), a = He(e, 10), c = He(e, 12), l = He(e, 14);
    this.r[0] = s & 8191, this.r[1] = (s >>> 13 | n << 3) & 8191, this.r[2] = (n >>> 10 | i << 6) & 7939, this.r[3] = (i >>> 7 | r << 9) & 8191, this.r[4] = (r >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
    for (let d = 0; d < 8; d++) this.pad[d] = He(e, 16 + 2 * d);
  }
  process(e, s, n = !1) {
    const i = n ? 0 : 2048, { h: r, r: o } = this, a = o[0], c = o[1], l = o[2], d = o[3], u = o[4], h = o[5], p = o[6], g = o[7], m = o[8], y = o[9], I = He(e, s + 0), N = He(e, s + 2), _ = He(e, s + 4), F = He(e, s + 6), Y = He(e, s + 8), H = He(e, s + 10), Q = He(e, s + 12), J = He(e, s + 14);
    let T = r[0] + (I & 8191), z = r[1] + ((I >>> 13 | N << 3) & 8191), se = r[2] + ((N >>> 10 | _ << 6) & 8191), x = r[3] + ((_ >>> 7 | F << 9) & 8191), w = r[4] + ((F >>> 4 | Y << 12) & 8191), b = r[5] + (Y >>> 1 & 8191), E = r[6] + ((Y >>> 14 | H << 2) & 8191), S = r[7] + ((H >>> 11 | Q << 5) & 8191), U = r[8] + ((Q >>> 8 | J << 8) & 8191), $ = r[9] + (J >>> 5 | i), v = 0, P = v + T * a + z * (5 * y) + se * (5 * m) + x * (5 * g) + w * (5 * p);
    v = P >>> 13, P &= 8191, P += b * (5 * h) + E * (5 * u) + S * (5 * d) + U * (5 * l) + $ * (5 * c), v += P >>> 13, P &= 8191;
    let K = v + T * c + z * a + se * (5 * y) + x * (5 * m) + w * (5 * g);
    v = K >>> 13, K &= 8191, K += b * (5 * p) + E * (5 * h) + S * (5 * u) + U * (5 * d) + $ * (5 * l), v += K >>> 13, K &= 8191;
    let j = v + T * l + z * c + se * a + x * (5 * y) + w * (5 * m);
    v = j >>> 13, j &= 8191, j += b * (5 * g) + E * (5 * p) + S * (5 * h) + U * (5 * u) + $ * (5 * d), v += j >>> 13, j &= 8191;
    let fe = v + T * d + z * l + se * c + x * a + w * (5 * y);
    v = fe >>> 13, fe &= 8191, fe += b * (5 * m) + E * (5 * g) + S * (5 * p) + U * (5 * h) + $ * (5 * u), v += fe >>> 13, fe &= 8191;
    let re = v + T * u + z * d + se * l + x * c + w * a;
    v = re >>> 13, re &= 8191, re += b * (5 * y) + E * (5 * m) + S * (5 * g) + U * (5 * p) + $ * (5 * h), v += re >>> 13, re &= 8191;
    let ne = v + T * h + z * u + se * d + x * l + w * c;
    v = ne >>> 13, ne &= 8191, ne += b * a + E * (5 * y) + S * (5 * m) + U * (5 * g) + $ * (5 * p), v += ne >>> 13, ne &= 8191;
    let pe = v + T * p + z * h + se * u + x * d + w * l;
    v = pe >>> 13, pe &= 8191, pe += b * c + E * a + S * (5 * y) + U * (5 * m) + $ * (5 * g), v += pe >>> 13, pe &= 8191;
    let ue = v + T * g + z * p + se * h + x * u + w * d;
    v = ue >>> 13, ue &= 8191, ue += b * l + E * c + S * a + U * (5 * y) + $ * (5 * m), v += ue >>> 13, ue &= 8191;
    let _e = v + T * m + z * g + se * p + x * h + w * u;
    v = _e >>> 13, _e &= 8191, _e += b * d + E * l + S * c + U * a + $ * (5 * y), v += _e >>> 13, _e &= 8191;
    let he = v + T * y + z * m + se * g + x * p + w * h;
    v = he >>> 13, he &= 8191, he += b * u + E * d + S * l + U * c + $ * a, v += he >>> 13, he &= 8191, v = (v << 2) + v | 0, v = v + P | 0, P = v & 8191, v = v >>> 13, K += v, r[0] = P, r[1] = K, r[2] = j, r[3] = fe, r[4] = re, r[5] = ne, r[6] = pe, r[7] = ue, r[8] = _e, r[9] = he;
  }
  finalize() {
    const { h: e, pad: s } = this, n = new Uint16Array(10);
    let i = e[1] >>> 13;
    e[1] &= 8191;
    for (let a = 2; a < 10; a++) e[a] += i, i = e[a] >>> 13, e[a] &= 8191;
    e[0] += i * 5, i = e[0] >>> 13, e[0] &= 8191, e[1] += i, i = e[1] >>> 13, e[1] &= 8191, e[2] += i, n[0] = e[0] + 5, i = n[0] >>> 13, n[0] &= 8191;
    for (let a = 1; a < 10; a++) n[a] = e[a] + i, i = n[a] >>> 13, n[a] &= 8191;
    n[9] -= 8192;
    let r = (i ^ 1) - 1;
    for (let a = 0; a < 10; a++) n[a] &= r;
    r = ~r;
    for (let a = 0; a < 10; a++) e[a] = e[a] & r | n[a];
    e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
    let o = e[0] + s[0];
    e[0] = o & 65535;
    for (let a = 1; a < 8; a++) o = (e[a] + s[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
    Fn(n);
  }
  update(e) {
    tc(this), e = Co(e), ht(e);
    const { buffer: s, blockLen: n } = this, i = e.length;
    for (let r = 0; r < i; ) {
      const o = Math.min(n - this.pos, i - r);
      if (o === n) {
        for (; n <= i - r; r += n) this.process(e, r);
        continue;
      }
      s.set(e.subarray(r, r + o), this.pos), this.pos += o, r += o, this.pos === n && (this.process(s, 0, !1), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Fn(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e) {
    tc(this), Dg(e, this), this.finished = !0;
    const { buffer: s, h: n } = this;
    let { pos: i } = this;
    if (i) {
      for (s[i++] = 1; i < 16; i++) s[i] = 0;
      this.process(s, 0, !0);
    }
    this.finalize();
    let r = 0;
    for (let o = 0; o < 8; o++) e[r++] = n[o] >>> 0, e[r++] = n[o] >>> 8;
    return e;
  }
  digest() {
    const { buffer: e, outputLen: s } = this;
    this.digestInto(e);
    const n = e.slice(0, s);
    return this.destroy(), n;
  }
}
function Zg(t) {
  const e = (n, i) => t(i).update(Co(n)).digest(), s = t(new Uint8Array(32));
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (n) => t(n), e;
}
const Qg = Zg((t) => new Xg(t));
function em(t, e, s, n, i, r = 20) {
  let o = t[0], a = t[1], c = t[2], l = t[3], d = e[0], u = e[1], h = e[2], p = e[3], g = e[4], m = e[5], y = e[6], I = e[7], N = i, _ = s[0], F = s[1], Y = s[2], H = o, Q = a, J = c, T = l, z = d, se = u, x = h, w = p, b = g, E = m, S = y, U = I, $ = N, v = _, P = F, K = Y;
  for (let fe = 0; fe < r; fe += 2) H = H + z | 0, $ = Ee($ ^ H, 16), b = b + $ | 0, z = Ee(z ^ b, 12), H = H + z | 0, $ = Ee($ ^ H, 8), b = b + $ | 0, z = Ee(z ^ b, 7), Q = Q + se | 0, v = Ee(v ^ Q, 16), E = E + v | 0, se = Ee(se ^ E, 12), Q = Q + se | 0, v = Ee(v ^ Q, 8), E = E + v | 0, se = Ee(se ^ E, 7), J = J + x | 0, P = Ee(P ^ J, 16), S = S + P | 0, x = Ee(x ^ S, 12), J = J + x | 0, P = Ee(P ^ J, 8), S = S + P | 0, x = Ee(x ^ S, 7), T = T + w | 0, K = Ee(K ^ T, 16), U = U + K | 0, w = Ee(w ^ U, 12), T = T + w | 0, K = Ee(K ^ T, 8), U = U + K | 0, w = Ee(w ^ U, 7), H = H + se | 0, K = Ee(K ^ H, 16), S = S + K | 0, se = Ee(se ^ S, 12), H = H + se | 0, K = Ee(K ^ H, 8), S = S + K | 0, se = Ee(se ^ S, 7), Q = Q + x | 0, $ = Ee($ ^ Q, 16), U = U + $ | 0, x = Ee(x ^ U, 12), Q = Q + x | 0, $ = Ee($ ^ Q, 8), U = U + $ | 0, x = Ee(x ^ U, 7), J = J + w | 0, v = Ee(v ^ J, 16), b = b + v | 0, w = Ee(w ^ b, 12), J = J + w | 0, v = Ee(v ^ J, 8), b = b + v | 0, w = Ee(w ^ b, 7), T = T + z | 0, P = Ee(P ^ T, 16), E = E + P | 0, z = Ee(z ^ E, 12), T = T + z | 0, P = Ee(P ^ T, 8), E = E + P | 0, z = Ee(z ^ E, 7);
  let j = 0;
  n[j++] = o + H | 0, n[j++] = a + Q | 0, n[j++] = c + J | 0, n[j++] = l + T | 0, n[j++] = d + z | 0, n[j++] = u + se | 0, n[j++] = h + x | 0, n[j++] = p + w | 0, n[j++] = g + b | 0, n[j++] = m + E | 0, n[j++] = y + S | 0, n[j++] = I + U | 0, n[j++] = N + $ | 0, n[j++] = _ + v | 0, n[j++] = F + P | 0, n[j++] = Y + K | 0;
}
const tm = Jg(em, { counterRight: !1, counterLength: 4, allowShortKeys: !1 }), sm = new Uint8Array(16), rc = (t, e) => {
  t.update(e);
  const s = e.length % 16;
  s && t.update(sm.subarray(s));
}, nm = new Uint8Array(32);
function oc(t, e, s, n, i) {
  const r = t(e, s, nm), o = Qg.create(r);
  i && rc(o, i), rc(o, n);
  const a = qg(n.length, i ? i.length : 0, !0);
  o.update(a);
  const c = o.digest();
  return Fn(r, a), c;
}
const im = (t) => (e, s, n) => ({ encrypt(i, r) {
  const o = i.length;
  r = sc(o + 16, r, !1), r.set(i);
  const a = r.subarray(0, -16);
  t(e, s, a, a, 1);
  const c = oc(t, e, s, a, n);
  return r.set(c, o), Fn(c), r;
}, decrypt(i, r) {
  r = sc(i.length - 16, r, !1);
  const o = i.subarray(0, -16), a = i.subarray(-16), c = oc(t, e, s, o, n);
  if (!Mg(a, c)) throw new Error("invalid tag");
  return r.set(i.subarray(0, -16)), t(e, s, r, r, 1), Fn(c), r;
} }), wd = Wg({ blockSize: 64, nonceLength: 12, tagLength: 16 }, im(tm));
let bd = class extends mr {
  constructor(e, s) {
    super(), this.finished = !1, this.destroyed = !1, gr(e);
    const n = Gt(s);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, r = new Uint8Array(i);
    r.set(n.length > i ? e.create().update(n).digest() : n);
    for (let o = 0; o < r.length; o++) r[o] ^= 54;
    this.iHash.update(r), this.oHash = e.create();
    for (let o = 0; o < r.length; o++) r[o] ^= 106;
    this.oHash.update(r), Bt(r);
  }
  update(e) {
    return Vs(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Vs(this), Yt(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: s, iHash: n, finished: i, destroyed: r, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = i, e.destroyed = r, e.blockLen = o, e.outputLen = a, e.oHash = s._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const br = (t, e, s) => new bd(t, e).update(s).digest();
br.create = (t, e) => new bd(t, e);
function rm(t, e, s) {
  return gr(t), s === void 0 && (s = new Uint8Array(t.outputLen)), br(t, Gt(s), Gt(e));
}
const Lr = Uint8Array.from([0]), ac = Uint8Array.of();
function om(t, e, s, n = 32) {
  gr(t), _s(n);
  const i = t.outputLen;
  if (n > 255 * i) throw new Error("Length should be <= 255*HashLen");
  const r = Math.ceil(n / i);
  s === void 0 && (s = ac);
  const o = new Uint8Array(r * i), a = br.create(t, e), c = a._cloneInto(), l = new Uint8Array(a.outputLen);
  for (let d = 0; d < r; d++) Lr[0] = d + 1, c.update(d === 0 ? ac : l).update(s).update(Lr).digestInto(l), o.set(l, i * d), a._cloneInto(c);
  return a.destroy(), c.destroy(), Bt(l, Lr), o.slice(0, n);
}
const am = (t, e, s, n, i) => om(t, rm(t, e, s), n, i), Er = yr, la = BigInt(0), Io = BigInt(1);
function or(t, e = "") {
  if (typeof t != "boolean") {
    const s = e && `"${e}"`;
    throw new Error(s + "expected boolean, got type=" + typeof t);
  }
  return t;
}
function ln(t, e, s = "") {
  const n = fr(t), i = t == null ? void 0 : t.length, r = e !== void 0;
  if (!n || r && i !== e) {
    const o = s && `"${s}" `, a = r ? ` of length ${e}` : "", c = n ? `length=${i}` : `type=${typeof t}`;
    throw new Error(o + "expected Uint8Array" + a + ", got " + c);
  }
  return t;
}
function Di(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Ed(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? la : BigInt("0x" + t);
}
function Cr(t) {
  return Ed(Un(t));
}
function ar(t) {
  return Yt(t), Ed(Un(Uint8Array.from(t).reverse()));
}
function da(t, e) {
  return ir(t.toString(16).padStart(e * 2, "0"));
}
function ua(t, e) {
  return da(t, e).reverse();
}
function tt(t, e, s) {
  let n;
  if (typeof e == "string") try {
    n = ir(e);
  } catch (r) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + r);
  }
  else if (fr(e)) n = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const i = n.length;
  if (typeof s == "number" && i !== s) throw new Error(t + " of length " + s + " expected, got " + i);
  return n;
}
const Br = (t) => typeof t == "bigint" && la <= t;
function cm(t, e, s) {
  return Br(t) && Br(e) && Br(s) && e <= t && t < s;
}
function No(t, e, s, n) {
  if (!cm(e, s, n)) throw new Error("expected valid " + t + ": " + s + " <= n < " + n + ", got " + e);
}
function Cd(t) {
  let e;
  for (e = 0; t > la; t >>= Io, e += 1) ;
  return e;
}
const Ii = (t) => (Io << BigInt(t)) - Io;
function lm(t, e, s) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
  if (typeof s != "function") throw new Error("hmacFn must be a function");
  const n = (h) => new Uint8Array(h), i = (h) => Uint8Array.of(h);
  let r = n(t), o = n(t), a = 0;
  const c = () => {
    r.fill(1), o.fill(0), a = 0;
  }, l = (...h) => s(o, r, ...h), d = (h = n(0)) => {
    o = l(i(0), h), r = l(), h.length !== 0 && (o = l(i(1), h), r = l());
  }, u = () => {
    if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let h = 0;
    const p = [];
    for (; h < e; ) {
      r = l();
      const g = r.slice();
      p.push(g), h += r.length;
    }
    return Ws(...p);
  };
  return (h, p) => {
    c(), d(h);
    let g;
    for (; !(g = p(u())); ) d();
    return c(), g;
  };
}
function vr(t, e, s = {}) {
  if (!t || typeof t != "object") throw new Error("expected valid options object");
  function n(i, r, o) {
    const a = t[i];
    if (o && a === void 0) return;
    const c = typeof a;
    if (c !== r || a === null) throw new Error(`param "${i}" is invalid: expected ${r}, got ${c}`);
  }
  Object.entries(e).forEach(([i, r]) => n(i, r, !1)), Object.entries(s).forEach(([i, r]) => n(i, r, !0));
}
function cc(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (s, ...n) => {
    const i = e.get(s);
    if (i !== void 0) return i;
    const r = t(s, ...n);
    return e.set(s, r), r;
  };
}
const ft = BigInt(0), ot = BigInt(1), dn = BigInt(2), vd = BigInt(3), Ad = BigInt(4), Id = BigInt(5), dm = BigInt(7), Nd = BigInt(8), um = BigInt(9), Sd = BigInt(16);
function At(t, e) {
  const s = t % e;
  return s >= ft ? s : e + s;
}
function Ht(t, e, s) {
  let n = t;
  for (; e-- > ft; ) n *= n, n %= s;
  return n;
}
function lc(t, e) {
  if (t === ft) throw new Error("invert: expected non-zero number");
  if (e <= ft) throw new Error("invert: expected positive modulus, got " + e);
  let s = At(t, e), n = e, i = ft, r = ot;
  for (; s !== ft; ) {
    const o = n / s, a = n % s, c = i - r * o;
    n = s, s = a, i = r, r = c;
  }
  if (n !== ot) throw new Error("invert: does not exist");
  return At(i, e);
}
function ha(t, e, s) {
  if (!t.eql(t.sqr(e), s)) throw new Error("Cannot find square root");
}
function _d(t, e) {
  const s = (t.ORDER + ot) / Ad, n = t.pow(e, s);
  return ha(t, n, e), n;
}
function hm(t, e) {
  const s = (t.ORDER - Id) / Nd, n = t.mul(e, dn), i = t.pow(n, s), r = t.mul(e, i), o = t.mul(t.mul(r, dn), i), a = t.mul(r, t.sub(o, t.ONE));
  return ha(t, a, e), a;
}
function pm(t) {
  const e = Gs(t), s = Td(t), n = s(e, e.neg(e.ONE)), i = s(e, n), r = s(e, e.neg(n)), o = (t + dm) / Sd;
  return (a, c) => {
    let l = a.pow(c, o), d = a.mul(l, n);
    const u = a.mul(l, i), h = a.mul(l, r), p = a.eql(a.sqr(d), c), g = a.eql(a.sqr(u), c);
    l = a.cmov(l, d, p), d = a.cmov(h, u, g);
    const m = a.eql(a.sqr(d), c), y = a.cmov(l, d, m);
    return ha(a, y, c), y;
  };
}
function Td(t) {
  if (t < vd) throw new Error("sqrt is not defined for small field");
  let e = t - ot, s = 0;
  for (; e % dn === ft; ) e /= dn, s++;
  let n = dn;
  const i = Gs(t);
  for (; dc(i, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (s === 1) return _d;
  let r = i.pow(n, e);
  const o = (e + ot) / dn;
  return function(a, c) {
    if (a.is0(c)) return c;
    if (dc(a, c) !== 1) throw new Error("Cannot find square root");
    let l = s, d = a.mul(a.ONE, r), u = a.pow(c, e), h = a.pow(c, o);
    for (; !a.eql(u, a.ONE); ) {
      if (a.is0(u)) return a.ZERO;
      let p = 1, g = a.sqr(u);
      for (; !a.eql(g, a.ONE); ) if (p++, g = a.sqr(g), p === l) throw new Error("Cannot find square root");
      const m = ot << BigInt(l - p - 1), y = a.pow(d, m);
      l = p, d = a.sqr(y), u = a.mul(u, d), h = a.mul(h, y);
    }
    return h;
  };
}
function fm(t) {
  return t % Ad === vd ? _d : t % Nd === Id ? hm : t % Sd === um ? pm(t) : Td(t);
}
const gm = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function mm(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" }, s = gm.reduce((n, i) => (n[i] = "function", n), e);
  return vr(t, s), t;
}
function ym(t, e, s) {
  if (s < ft) throw new Error("invalid exponent, negatives unsupported");
  if (s === ft) return t.ONE;
  if (s === ot) return e;
  let n = t.ONE, i = e;
  for (; s > ft; ) s & ot && (n = t.mul(n, i)), i = t.sqr(i), s >>= ot;
  return n;
}
function Od(t, e, s = !1) {
  const n = new Array(e.length).fill(s ? t.ZERO : void 0), i = e.reduce((o, a, c) => t.is0(a) ? o : (n[c] = o, t.mul(o, a)), t.ONE), r = t.inv(i);
  return e.reduceRight((o, a, c) => t.is0(a) ? o : (n[c] = t.mul(o, n[c]), t.mul(o, a)), r), n;
}
function dc(t, e) {
  const s = (t.ORDER - ot) / dn, n = t.pow(e, s), i = t.eql(n, t.ONE), r = t.eql(n, t.ZERO), o = t.eql(n, t.neg(t.ONE));
  if (!i && !r && !o) throw new Error("invalid Legendre symbol result");
  return i ? 1 : r ? 0 : -1;
}
function kd(t, e) {
  e !== void 0 && _s(e);
  const s = e !== void 0 ? e : t.toString(2).length, n = Math.ceil(s / 8);
  return { nBitLength: s, nByteLength: n };
}
function Gs(t, e, s = !1, n = {}) {
  if (t <= ft) throw new Error("invalid field: expected ORDER > 0, got " + t);
  let i, r, o = !1, a;
  if (typeof e == "object" && e != null) {
    if (n.sqrt || s) throw new Error("cannot specify opts in two arguments");
    const h = e;
    h.BITS && (i = h.BITS), h.sqrt && (r = h.sqrt), typeof h.isLE == "boolean" && (s = h.isLE), typeof h.modFromBytes == "boolean" && (o = h.modFromBytes), a = h.allowedLengths;
  } else typeof e == "number" && (i = e), n.sqrt && (r = n.sqrt);
  const { nBitLength: c, nByteLength: l } = kd(t, i);
  if (l > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let d;
  const u = Object.freeze({ ORDER: t, isLE: s, BITS: c, BYTES: l, MASK: Ii(c), ZERO: ft, ONE: ot, allowedLengths: a, create: (h) => At(h, t), isValid: (h) => {
    if (typeof h != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof h);
    return ft <= h && h < t;
  }, is0: (h) => h === ft, isValidNot0: (h) => !u.is0(h) && u.isValid(h), isOdd: (h) => (h & ot) === ot, neg: (h) => At(-h, t), eql: (h, p) => h === p, sqr: (h) => At(h * h, t), add: (h, p) => At(h + p, t), sub: (h, p) => At(h - p, t), mul: (h, p) => At(h * p, t), pow: (h, p) => ym(u, h, p), div: (h, p) => At(h * lc(p, t), t), sqrN: (h) => h * h, addN: (h, p) => h + p, subN: (h, p) => h - p, mulN: (h, p) => h * p, inv: (h) => lc(h, t), sqrt: r || ((h) => (d || (d = fm(t)), d(u, h))), toBytes: (h) => s ? ua(h, l) : da(h, l), fromBytes: (h, p = !0) => {
    if (a) {
      if (!a.includes(h.length) || h.length > l) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + h.length);
      const m = new Uint8Array(l);
      m.set(h, s ? 0 : m.length - h.length), h = m;
    }
    if (h.length !== l) throw new Error("Field.fromBytes: expected " + l + " bytes, got " + h.length);
    let g = s ? ar(h) : Cr(h);
    if (o && (g = At(g, t)), !p && !u.isValid(g)) throw new Error("invalid field element: outside of range 0..ORDER");
    return g;
  }, invertBatch: (h) => Od(u, h), cmov: (h, p, g) => g ? p : h });
  return Object.freeze(u);
}
function xd(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Pd(t) {
  const e = xd(t);
  return e + Math.ceil(e / 2);
}
function wm(t, e, s = !1) {
  const n = t.length, i = xd(e), r = Pd(e);
  if (n < 16 || n < r || n > 1024) throw new Error("expected " + r + "-1024 bytes of input, got " + n);
  const o = s ? ar(t) : Cr(t), a = At(o, e - ot) + ot;
  return s ? ua(a, i) : da(a, i);
}
const Mn = BigInt(0), un = BigInt(1);
function cr(t, e) {
  const s = e.negate();
  return t ? s : e;
}
function Fr(t, e) {
  const s = Od(t.Fp, e.map((n) => n.Z));
  return e.map((n, i) => t.fromAffine(n.toAffine(s[i])));
}
function Rd(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Mr(t, e) {
  Rd(t, e);
  const s = Math.ceil(e / t) + 1, n = 2 ** (t - 1), i = 2 ** t, r = Ii(t), o = BigInt(t);
  return { windows: s, windowSize: n, mask: r, maxNumber: i, shiftBy: o };
}
function uc(t, e, s) {
  const { windowSize: n, mask: i, maxNumber: r, shiftBy: o } = s;
  let a = Number(t & i), c = t >> o;
  a > n && (a -= r, c += un);
  const l = e * n, d = l + Math.abs(a) - 1, u = a === 0, h = a < 0, p = e % 2 !== 0;
  return { nextN: c, offset: d, isZero: u, isNeg: h, isNegF: p, offsetF: l };
}
function bm(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((s, n) => {
    if (!(s instanceof e)) throw new Error("invalid point at index " + n);
  });
}
function Em(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((s, n) => {
    if (!e.isValid(s)) throw new Error("invalid scalar at index " + n);
  });
}
const Wr = /* @__PURE__ */ new WeakMap(), Ud = /* @__PURE__ */ new WeakMap();
function qr(t) {
  return Ud.get(t) || 1;
}
function hc(t) {
  if (t !== Mn) throw new Error("invalid wNAF");
}
class Cm {
  constructor(e, s) {
    this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = s;
  }
  _unsafeLadder(e, s, n = this.ZERO) {
    let i = e;
    for (; s > Mn; ) s & un && (n = n.add(i)), i = i.double(), s >>= un;
    return n;
  }
  precomputeWindow(e, s) {
    const { windows: n, windowSize: i } = Mr(s, this.bits), r = [];
    let o = e, a = o;
    for (let c = 0; c < n; c++) {
      a = o, r.push(a);
      for (let l = 1; l < i; l++) a = a.add(o), r.push(a);
      o = a.double();
    }
    return r;
  }
  wNAF(e, s, n) {
    if (!this.Fn.isValid(n)) throw new Error("invalid scalar");
    let i = this.ZERO, r = this.BASE;
    const o = Mr(e, this.bits);
    for (let a = 0; a < o.windows; a++) {
      const { nextN: c, offset: l, isZero: d, isNeg: u, isNegF: h, offsetF: p } = uc(n, a, o);
      n = c, d ? r = r.add(cr(h, s[p])) : i = i.add(cr(u, s[l]));
    }
    return hc(n), { p: i, f: r };
  }
  wNAFUnsafe(e, s, n, i = this.ZERO) {
    const r = Mr(e, this.bits);
    for (let o = 0; o < r.windows && n !== Mn; o++) {
      const { nextN: a, offset: c, isZero: l, isNeg: d } = uc(n, o, r);
      if (n = a, !l) {
        const u = s[c];
        i = i.add(d ? u.negate() : u);
      }
    }
    return hc(n), i;
  }
  getPrecomputes(e, s, n) {
    let i = Wr.get(s);
    return i || (i = this.precomputeWindow(s, e), e !== 1 && (typeof n == "function" && (i = n(i)), Wr.set(s, i))), i;
  }
  cached(e, s, n) {
    const i = qr(e);
    return this.wNAF(i, this.getPrecomputes(i, e, n), s);
  }
  unsafe(e, s, n, i) {
    const r = qr(e);
    return r === 1 ? this._unsafeLadder(e, s, i) : this.wNAFUnsafe(r, this.getPrecomputes(r, e, n), s, i);
  }
  createCache(e, s) {
    Rd(s, this.bits), Ud.set(e, s), Wr.delete(e);
  }
  hasCache(e) {
    return qr(e) !== 1;
  }
}
function vm(t, e, s, n) {
  let i = e, r = t.ZERO, o = t.ZERO;
  for (; s > Mn || n > Mn; ) s & un && (r = r.add(i)), n & un && (o = o.add(i)), i = i.double(), s >>= un, n >>= un;
  return { p1: r, p2: o };
}
function Am(t, e, s, n) {
  bm(s, t), Em(n, e);
  const i = s.length, r = n.length;
  if (i !== r) throw new Error("arrays of points and scalars must have equal length");
  const o = t.ZERO, a = Cd(BigInt(i));
  let c = 1;
  a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
  const l = Ii(c), d = new Array(Number(l) + 1).fill(o), u = Math.floor((e.BITS - 1) / c) * c;
  let h = o;
  for (let p = u; p >= 0; p -= c) {
    d.fill(o);
    for (let m = 0; m < r; m++) {
      const y = n[m], I = Number(y >> BigInt(p) & l);
      d[I] = d[I].add(s[m]);
    }
    let g = o;
    for (let m = d.length - 1, y = o; m > 0; m--) y = y.add(d[m]), g = g.add(y);
    if (h = h.add(g), p !== 0) for (let m = 0; m < c; m++) h = h.double();
  }
  return h;
}
function pc(t, e, s) {
  if (e) {
    if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return mm(e), e;
  } else return Gs(t, { isLE: s });
}
function Im(t, e, s = {}, n) {
  if (n === void 0 && (n = t === "edwards"), !e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
  for (const a of ["p", "n", "h"]) {
    const c = e[a];
    if (!(typeof c == "bigint" && c > Mn)) throw new Error(`CURVE.${a} must be positive bigint`);
  }
  const i = pc(e.p, s.Fp, n), r = pc(e.n, s.Fn, n), o = ["Gx", "Gy", "a", "b"];
  for (const a of o) if (!i.isValid(e[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
  return e = Object.freeze(Object.assign({}, e)), { CURVE: e, Fp: i, Fn: r };
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8), nd("HashToScalar-");
const Xn = BigInt(0), In = BigInt(1), $i = BigInt(2);
function Nm(t) {
  return vr(t, { adjustScalarBytes: "function", powPminus2: "function" }), Object.freeze({ ...t });
}
function Sm(t) {
  const e = Nm(t), { P: s, type: n, adjustScalarBytes: i, powPminus2: r, randomBytes: o } = e, a = n === "x25519";
  if (!a && n !== "x448") throw new Error("invalid type");
  const c = o || yn, l = a ? 255 : 448, d = a ? 32 : 56, u = BigInt(a ? 9 : 5), h = BigInt(a ? 121665 : 39081), p = a ? $i ** BigInt(254) : $i ** BigInt(447), g = a ? BigInt(8) * $i ** BigInt(251) - In : BigInt(4) * $i ** BigInt(445) - In, m = p + g + In, y = (x) => At(x, s), I = N(u);
  function N(x) {
    return ua(y(x), d);
  }
  function _(x) {
    const w = tt("u coordinate", x, d);
    return a && (w[31] &= 127), y(ar(w));
  }
  function F(x) {
    return ar(i(tt("scalar", x, d)));
  }
  function Y(x, w) {
    const b = J(_(w), F(x));
    if (b === Xn) throw new Error("invalid private or public key received");
    return N(b);
  }
  function H(x) {
    return Y(x, I);
  }
  function Q(x, w, b) {
    const E = y(x * (w - b));
    return w = y(w - E), b = y(b + E), { x_2: w, x_3: b };
  }
  function J(x, w) {
    No("u", x, Xn, s), No("scalar", w, p, m);
    const b = w, E = x;
    let S = In, U = Xn, $ = x, v = In, P = Xn;
    for (let j = BigInt(l - 1); j >= Xn; j--) {
      const fe = b >> j & In;
      P ^= fe, { x_2: S, x_3: $ } = Q(P, S, $), { x_2: U, x_3: v } = Q(P, U, v), P = fe;
      const re = S + U, ne = y(re * re), pe = S - U, ue = y(pe * pe), _e = ne - ue, he = $ + v, Ue = $ - v, Mt = y(Ue * re), Ts = y(he * pe), Ys = Mt + Ts, bn = Mt - Ts;
      $ = y(Ys * Ys), v = y(E * y(bn * bn)), S = y(ne * ue), U = y(_e * (ne + y(h * _e)));
    }
    ({ x_2: S, x_3: $ } = Q(P, S, $)), { x_2: U, x_3: v } = Q(P, U, v);
    const K = r(U);
    return y(S * K);
  }
  const T = { secretKey: d, publicKey: d, seed: d }, z = (x = c(d)) => (Yt(x, T.seed), x);
  function se(x) {
    const w = z(x);
    return { secretKey: w, publicKey: H(w) };
  }
  return { keygen: se, getSharedSecret: (x, w) => Y(x, w), getPublicKey: (x) => H(x), scalarMult: Y, scalarMultBase: H, utils: { randomSecretKey: z, randomPrivateKey: z }, GuBytes: I.slice(), lengths: T };
}
const _m = BigInt(1), fc = BigInt(2), Tm = BigInt(3), Om = BigInt(5);
BigInt(8);
const Dd = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), km = { p: Dd, n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"), a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"), d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"), Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"), Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658") };
function xm(t) {
  const e = BigInt(10), s = BigInt(20), n = BigInt(40), i = BigInt(80), r = Dd, o = t * t % r * t % r, a = Ht(o, fc, r) * o % r, c = Ht(a, _m, r) * t % r, l = Ht(c, Om, r) * c % r, d = Ht(l, e, r) * l % r, u = Ht(d, s, r) * d % r, h = Ht(u, n, r) * u % r, p = Ht(h, i, r) * h % r, g = Ht(p, i, r) * h % r, m = Ht(g, e, r) * l % r;
  return { pow_p_5_8: Ht(m, fc, r) * t % r, b2: o };
}
function Pm(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
const Rm = Gs(km.p, { isLE: !0 }), So = (() => {
  const t = Rm.ORDER;
  return Sm({ P: t, type: "x25519", powPminus2: (e) => {
    const { pow_p_5_8: s, b2: n } = xm(e);
    return At(Ht(s, Tm, t) * n, t);
  }, adjustScalarBytes: Pm });
})(), gc = (t, e) => (t + (t >= 0 ? e : -e) / $d) / e;
function Um(t, e, s) {
  const [[n, i], [r, o]] = e, a = gc(o * t, s), c = gc(-i * t, s);
  let l = t - a * n - c * r, d = -a * i - c * o;
  const u = l < vs, h = d < vs;
  u && (l = -l), h && (d = -d);
  const p = Ii(Math.ceil(Cd(s) / 2)) + Dn;
  if (l < vs || l >= p || d < vs || d >= p) throw new Error("splitScalar (endomorphism): failed, k=" + t);
  return { k1neg: u, k1: l, k2neg: h, k2: d };
}
function _o(t) {
  if (!["compact", "recovered", "der"].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
  return t;
}
function jr(t, e) {
  const s = {};
  for (let n of Object.keys(e)) s[n] = t[n] === void 0 ? e[n] : t[n];
  return or(s.lowS, "lowS"), or(s.prehash, "prehash"), s.format !== void 0 && _o(s.format), s;
}
class Dm extends Error {
  constructor(e = "") {
    super(e);
  }
}
const bs = { Err: Dm, _tlv: { encode: (t, e) => {
  const { Err: s } = bs;
  if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
  if (e.length & 1) throw new s("tlv.encode: unpadded data");
  const n = e.length / 2, i = Di(n);
  if (i.length / 2 & 128) throw new s("tlv.encode: long form length too big");
  const r = n > 127 ? Di(i.length / 2 | 128) : "";
  return Di(t) + r + i + e;
}, decode(t, e) {
  const { Err: s } = bs;
  let n = 0;
  if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
  if (e.length < 2 || e[n++] !== t) throw new s("tlv.decode: wrong tlv");
  const i = e[n++], r = !!(i & 128);
  let o = 0;
  if (!r) o = i;
  else {
    const c = i & 127;
    if (!c) throw new s("tlv.decode(long): indefinite length not supported");
    if (c > 4) throw new s("tlv.decode(long): byte length is too big");
    const l = e.subarray(n, n + c);
    if (l.length !== c) throw new s("tlv.decode: length bytes not complete");
    if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
    for (const d of l) o = o << 8 | d;
    if (n += c, o < 128) throw new s("tlv.decode(long): not minimal encoding");
  }
  const a = e.subarray(n, n + o);
  if (a.length !== o) throw new s("tlv.decode: wrong value length");
  return { v: a, l: e.subarray(n + o) };
} }, _int: { encode(t) {
  const { Err: e } = bs;
  if (t < vs) throw new e("integer: negative integers are not allowed");
  let s = Di(t);
  if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
  return s;
}, decode(t) {
  const { Err: e } = bs;
  if (t[0] & 128) throw new e("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
  return Cr(t);
} }, toSig(t) {
  const { Err: e, _int: s, _tlv: n } = bs, i = tt("signature", t), { v: r, l: o } = n.decode(48, i);
  if (o.length) throw new e("invalid signature: left bytes after parsing");
  const { v: a, l: c } = n.decode(2, r), { v: l, l: d } = n.decode(2, c);
  if (d.length) throw new e("invalid signature: left bytes after parsing");
  return { r: s.decode(a), s: s.decode(l) };
}, hexFromSig(t) {
  const { _tlv: e, _int: s } = bs, n = e.encode(2, s.encode(t.r)), i = e.encode(2, s.encode(t.s)), r = n + i;
  return e.encode(48, r);
} }, vs = BigInt(0), Dn = BigInt(1), $d = BigInt(2), Li = BigInt(3), $m = BigInt(4);
function kn(t, e) {
  const { BYTES: s } = t;
  let n;
  if (typeof e == "bigint") n = e;
  else {
    let i = tt("private key", e);
    try {
      n = t.fromBytes(i);
    } catch {
      throw new Error(`invalid private key: expected ui8a of size ${s}, got ${typeof e}`);
    }
  }
  if (!t.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
  return n;
}
function Lm(t, e = {}) {
  const s = Im("weierstrass", t, e), { Fp: n, Fn: i } = s;
  let r = s.CURVE;
  const { h: o, n: a } = r;
  vr(e, {}, { allowInfinityPoint: "boolean", clearCofactor: "function", isTorsionFree: "function", fromBytes: "function", toBytes: "function", endo: "object", wrapPrivateKey: "boolean" });
  const { endo: c } = e;
  if (c && (!n.is0(r.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
  const l = Bd(n, i);
  function d() {
    if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function u(x, w, b) {
    const { x: E, y: S } = w.toAffine(), U = n.toBytes(E);
    if (or(b, "isCompressed"), b) {
      d();
      const $ = !n.isOdd(S);
      return Ws(Ld($), U);
    } else return Ws(Uint8Array.of(4), U, n.toBytes(S));
  }
  function h(x) {
    ln(x, void 0, "Point");
    const { publicKey: w, publicKeyUncompressed: b } = l, E = x.length, S = x[0], U = x.subarray(1);
    if (E === w && (S === 2 || S === 3)) {
      const $ = n.fromBytes(U);
      if (!n.isValid($)) throw new Error("bad point: is not on curve, wrong x");
      const v = m($);
      let P;
      try {
        P = n.sqrt(v);
      } catch (j) {
        const fe = j instanceof Error ? ": " + j.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + fe);
      }
      d();
      const K = n.isOdd(P);
      return (S & 1) === 1 !== K && (P = n.neg(P)), { x: $, y: P };
    } else if (E === b && S === 4) {
      const $ = n.BYTES, v = n.fromBytes(U.subarray(0, $)), P = n.fromBytes(U.subarray($, $ * 2));
      if (!y(v, P)) throw new Error("bad point: is not on curve");
      return { x: v, y: P };
    } else throw new Error(`bad point: got length ${E}, expected compressed=${w} or uncompressed=${b}`);
  }
  const p = e.toBytes || u, g = e.fromBytes || h;
  function m(x) {
    const w = n.sqr(x), b = n.mul(w, x);
    return n.add(n.add(b, n.mul(x, r.a)), r.b);
  }
  function y(x, w) {
    const b = n.sqr(w), E = m(x);
    return n.eql(b, E);
  }
  if (!y(r.Gx, r.Gy)) throw new Error("bad curve params: generator point");
  const I = n.mul(n.pow(r.a, Li), $m), N = n.mul(n.sqr(r.b), BigInt(27));
  if (n.is0(n.add(I, N))) throw new Error("bad curve params: a or b");
  function _(x, w, b = !1) {
    if (!n.isValid(w) || b && n.is0(w)) throw new Error(`bad point coordinate ${x}`);
    return w;
  }
  function F(x) {
    if (!(x instanceof T)) throw new Error("ProjectivePoint expected");
  }
  function Y(x) {
    if (!c || !c.basises) throw new Error("no endo");
    return Um(x, c.basises, i.ORDER);
  }
  const H = cc((x, w) => {
    const { X: b, Y: E, Z: S } = x;
    if (n.eql(S, n.ONE)) return { x: b, y: E };
    const U = x.is0();
    w == null && (w = U ? n.ONE : n.inv(S));
    const $ = n.mul(b, w), v = n.mul(E, w), P = n.mul(S, w);
    if (U) return { x: n.ZERO, y: n.ZERO };
    if (!n.eql(P, n.ONE)) throw new Error("invZ was invalid");
    return { x: $, y: v };
  }), Q = cc((x) => {
    if (x.is0()) {
      if (e.allowInfinityPoint && !n.is0(x.Y)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: w, y: b } = x.toAffine();
    if (!n.isValid(w) || !n.isValid(b)) throw new Error("bad point: x or y not field elements");
    if (!y(w, b)) throw new Error("bad point: equation left != right");
    if (!x.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  function J(x, w, b, E, S) {
    return b = new T(n.mul(b.X, x), b.Y, b.Z), w = cr(E, w), b = cr(S, b), w.add(b);
  }
  class T {
    constructor(w, b, E) {
      this.X = _("x", w), this.Y = _("y", b, !0), this.Z = _("z", E), Object.freeze(this);
    }
    static CURVE() {
      return r;
    }
    static fromAffine(w) {
      const { x: b, y: E } = w || {};
      if (!w || !n.isValid(b) || !n.isValid(E)) throw new Error("invalid affine point");
      if (w instanceof T) throw new Error("projective point not allowed");
      return n.is0(b) && n.is0(E) ? T.ZERO : new T(b, E, n.ONE);
    }
    static fromBytes(w) {
      const b = T.fromAffine(g(ln(w, void 0, "point")));
      return b.assertValidity(), b;
    }
    static fromHex(w) {
      return T.fromBytes(tt("pointHex", w));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(w = 8, b = !0) {
      return se.createCache(this, w), b || this.multiply(Li), this;
    }
    assertValidity() {
      Q(this);
    }
    hasEvenY() {
      const { y: w } = this.toAffine();
      if (!n.isOdd) throw new Error("Field doesn't support isOdd");
      return !n.isOdd(w);
    }
    equals(w) {
      F(w);
      const { X: b, Y: E, Z: S } = this, { X: U, Y: $, Z: v } = w, P = n.eql(n.mul(b, v), n.mul(U, S)), K = n.eql(n.mul(E, v), n.mul($, S));
      return P && K;
    }
    negate() {
      return new T(this.X, n.neg(this.Y), this.Z);
    }
    double() {
      const { a: w, b } = r, E = n.mul(b, Li), { X: S, Y: U, Z: $ } = this;
      let v = n.ZERO, P = n.ZERO, K = n.ZERO, j = n.mul(S, S), fe = n.mul(U, U), re = n.mul($, $), ne = n.mul(S, U);
      return ne = n.add(ne, ne), K = n.mul(S, $), K = n.add(K, K), v = n.mul(w, K), P = n.mul(E, re), P = n.add(v, P), v = n.sub(fe, P), P = n.add(fe, P), P = n.mul(v, P), v = n.mul(ne, v), K = n.mul(E, K), re = n.mul(w, re), ne = n.sub(j, re), ne = n.mul(w, ne), ne = n.add(ne, K), K = n.add(j, j), j = n.add(K, j), j = n.add(j, re), j = n.mul(j, ne), P = n.add(P, j), re = n.mul(U, $), re = n.add(re, re), j = n.mul(re, ne), v = n.sub(v, j), K = n.mul(re, fe), K = n.add(K, K), K = n.add(K, K), new T(v, P, K);
    }
    add(w) {
      F(w);
      const { X: b, Y: E, Z: S } = this, { X: U, Y: $, Z: v } = w;
      let P = n.ZERO, K = n.ZERO, j = n.ZERO;
      const fe = r.a, re = n.mul(r.b, Li);
      let ne = n.mul(b, U), pe = n.mul(E, $), ue = n.mul(S, v), _e = n.add(b, E), he = n.add(U, $);
      _e = n.mul(_e, he), he = n.add(ne, pe), _e = n.sub(_e, he), he = n.add(b, S);
      let Ue = n.add(U, v);
      return he = n.mul(he, Ue), Ue = n.add(ne, ue), he = n.sub(he, Ue), Ue = n.add(E, S), P = n.add($, v), Ue = n.mul(Ue, P), P = n.add(pe, ue), Ue = n.sub(Ue, P), j = n.mul(fe, he), P = n.mul(re, ue), j = n.add(P, j), P = n.sub(pe, j), j = n.add(pe, j), K = n.mul(P, j), pe = n.add(ne, ne), pe = n.add(pe, ne), ue = n.mul(fe, ue), he = n.mul(re, he), pe = n.add(pe, ue), ue = n.sub(ne, ue), ue = n.mul(fe, ue), he = n.add(he, ue), ne = n.mul(pe, he), K = n.add(K, ne), ne = n.mul(Ue, he), P = n.mul(_e, P), P = n.sub(P, ne), ne = n.mul(_e, pe), j = n.mul(Ue, j), j = n.add(j, ne), new T(P, K, j);
    }
    subtract(w) {
      return this.add(w.negate());
    }
    is0() {
      return this.equals(T.ZERO);
    }
    multiply(w) {
      const { endo: b } = e;
      if (!i.isValidNot0(w)) throw new Error("invalid scalar: out of range");
      let E, S;
      const U = ($) => se.cached(this, $, (v) => Fr(T, v));
      if (b) {
        const { k1neg: $, k1: v, k2neg: P, k2: K } = Y(w), { p: j, f: fe } = U(v), { p: re, f: ne } = U(K);
        S = fe.add(ne), E = J(b.beta, j, re, $, P);
      } else {
        const { p: $, f: v } = U(w);
        E = $, S = v;
      }
      return Fr(T, [E, S])[0];
    }
    multiplyUnsafe(w) {
      const { endo: b } = e, E = this;
      if (!i.isValid(w)) throw new Error("invalid scalar: out of range");
      if (w === vs || E.is0()) return T.ZERO;
      if (w === Dn) return E;
      if (se.hasCache(this)) return this.multiply(w);
      if (b) {
        const { k1neg: S, k1: U, k2neg: $, k2: v } = Y(w), { p1: P, p2: K } = vm(T, E, U, v);
        return J(b.beta, P, K, S, $);
      } else return se.unsafe(E, w);
    }
    multiplyAndAddUnsafe(w, b, E) {
      const S = this.multiplyUnsafe(b).add(w.multiplyUnsafe(E));
      return S.is0() ? void 0 : S;
    }
    toAffine(w) {
      return H(this, w);
    }
    isTorsionFree() {
      const { isTorsionFree: w } = e;
      return o === Dn ? !0 : w ? w(T, this) : se.unsafe(this, a).is0();
    }
    clearCofactor() {
      const { clearCofactor: w } = e;
      return o === Dn ? this : w ? w(T, this) : this.multiplyUnsafe(o);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    toBytes(w = !0) {
      return or(w, "isCompressed"), this.assertValidity(), p(T, this, w);
    }
    toHex(w = !0) {
      return Un(this.toBytes(w));
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
    toRawBytes(w = !0) {
      return this.toBytes(w);
    }
    _setWindowSize(w) {
      this.precompute(w);
    }
    static normalizeZ(w) {
      return Fr(T, w);
    }
    static msm(w, b) {
      return Am(T, i, w, b);
    }
    static fromPrivateKey(w) {
      return T.BASE.multiply(kn(i, w));
    }
  }
  T.BASE = new T(r.Gx, r.Gy, n.ONE), T.ZERO = new T(n.ZERO, n.ONE, n.ZERO), T.Fp = n, T.Fn = i;
  const z = i.BITS, se = new Cm(T, e.endo ? Math.ceil(z / 2) : z);
  return T.BASE.precompute(8), T;
}
function Ld(t) {
  return Uint8Array.of(t ? 2 : 3);
}
function Bd(t, e) {
  return { secretKey: e.BYTES, publicKey: 1 + t.BYTES, publicKeyUncompressed: 1 + 2 * t.BYTES, publicKeyHasPrefix: !0, signature: 2 * e.BYTES };
}
function Bm(t, e = {}) {
  const { Fn: s } = t, n = e.randomBytes || yn, i = Object.assign(Bd(t.Fp, s), { seed: Pd(s.ORDER) });
  function r(h) {
    try {
      return !!kn(s, h);
    } catch {
      return !1;
    }
  }
  function o(h, p) {
    const { publicKey: g, publicKeyUncompressed: m } = i;
    try {
      const y = h.length;
      return p === !0 && y !== g || p === !1 && y !== m ? !1 : !!t.fromBytes(h);
    } catch {
      return !1;
    }
  }
  function a(h = n(i.seed)) {
    return wm(ln(h, i.seed, "seed"), s.ORDER);
  }
  function c(h, p = !0) {
    return t.BASE.multiply(kn(s, h)).toBytes(p);
  }
  function l(h) {
    const p = a(h);
    return { secretKey: p, publicKey: c(p) };
  }
  function d(h) {
    if (typeof h == "bigint") return !1;
    if (h instanceof t) return !0;
    const { secretKey: p, publicKey: g, publicKeyUncompressed: m } = i;
    if (s.allowedLengths || p === g) return;
    const y = tt("key", h).length;
    return y === g || y === m;
  }
  function u(h, p, g = !0) {
    if (d(h) === !0) throw new Error("first arg must be private key");
    if (d(p) === !1) throw new Error("second arg must be public key");
    const m = kn(s, h);
    return t.fromHex(p).multiply(m).toBytes(g);
  }
  return Object.freeze({ getPublicKey: c, getSharedSecret: u, keygen: l, Point: t, utils: { isValidSecretKey: r, isValidPublicKey: o, randomSecretKey: a, isValidPrivateKey: r, randomPrivateKey: a, normPrivateKeyToScalar: (h) => kn(s, h), precompute(h = 8, p = t.BASE) {
    return p.precompute(h, !1);
  } }, lengths: i });
}
function Fm(t, e, s = {}) {
  gr(e), vr(s, {}, { hmac: "function", lowS: "boolean", randomBytes: "function", bits2int: "function", bits2int_modN: "function" });
  const n = s.randomBytes || yn, i = s.hmac || ((b, ...E) => br(e, b, Ws(...E))), { Fp: r, Fn: o } = t, { ORDER: a, BITS: c } = o, { keygen: l, getPublicKey: d, getSharedSecret: u, utils: h, lengths: p } = Bm(t, s), g = { prehash: !1, lowS: typeof s.lowS == "boolean" ? s.lowS : !1, format: void 0, extraEntropy: !1 }, m = "compact";
  function y(b) {
    const E = a >> Dn;
    return b > E;
  }
  function I(b, E) {
    if (!o.isValidNot0(E)) throw new Error(`invalid signature ${b}: out of range 1..Point.Fn.ORDER`);
    return E;
  }
  function N(b, E) {
    _o(E);
    const S = p.signature, U = E === "compact" ? S : E === "recovered" ? S + 1 : void 0;
    return ln(b, U, `${E} signature`);
  }
  class _ {
    constructor(E, S, U) {
      this.r = I("r", E), this.s = I("s", S), U != null && (this.recovery = U), Object.freeze(this);
    }
    static fromBytes(E, S = m) {
      N(E, S);
      let U;
      if (S === "der") {
        const { r: K, s: j } = bs.toSig(ln(E));
        return new _(K, j);
      }
      S === "recovered" && (U = E[0], S = "compact", E = E.subarray(1));
      const $ = o.BYTES, v = E.subarray(0, $), P = E.subarray($, $ * 2);
      return new _(o.fromBytes(v), o.fromBytes(P), U);
    }
    static fromHex(E, S) {
      return this.fromBytes(ir(E), S);
    }
    addRecoveryBit(E) {
      return new _(this.r, this.s, E);
    }
    recoverPublicKey(E) {
      const S = r.ORDER, { r: U, s: $, recovery: v } = this;
      if (v == null || ![0, 1, 2, 3].includes(v)) throw new Error("recovery id invalid");
      if (a * $d < S && v > 1) throw new Error("recovery id is ambiguous for h>1 curve");
      const P = v === 2 || v === 3 ? U + a : U;
      if (!r.isValid(P)) throw new Error("recovery id 2 or 3 invalid");
      const K = r.toBytes(P), j = t.fromBytes(Ws(Ld((v & 1) === 0), K)), fe = o.inv(P), re = Y(tt("msgHash", E)), ne = o.create(-re * fe), pe = o.create($ * fe), ue = t.BASE.multiplyUnsafe(ne).add(j.multiplyUnsafe(pe));
      if (ue.is0()) throw new Error("point at infinify");
      return ue.assertValidity(), ue;
    }
    hasHighS() {
      return y(this.s);
    }
    toBytes(E = m) {
      if (_o(E), E === "der") return ir(bs.hexFromSig(this));
      const S = o.toBytes(this.r), U = o.toBytes(this.s);
      if (E === "recovered") {
        if (this.recovery == null) throw new Error("recovery bit must be present");
        return Ws(Uint8Array.of(this.recovery), S, U);
      }
      return Ws(S, U);
    }
    toHex(E) {
      return Un(this.toBytes(E));
    }
    assertValidity() {
    }
    static fromCompact(E) {
      return _.fromBytes(tt("sig", E), "compact");
    }
    static fromDER(E) {
      return _.fromBytes(tt("sig", E), "der");
    }
    normalizeS() {
      return this.hasHighS() ? new _(this.r, o.neg(this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return Un(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return Un(this.toBytes("compact"));
    }
  }
  const F = s.bits2int || function(b) {
    if (b.length > 8192) throw new Error("input is too large");
    const E = Cr(b), S = b.length * 8 - c;
    return S > 0 ? E >> BigInt(S) : E;
  }, Y = s.bits2int_modN || function(b) {
    return o.create(F(b));
  }, H = Ii(c);
  function Q(b) {
    return No("num < 2^" + c, b, vs, H), o.toBytes(b);
  }
  function J(b, E) {
    return ln(b, void 0, "message"), E ? ln(e(b), void 0, "prehashed message") : b;
  }
  function T(b, E, S) {
    if (["recovered", "canonical"].some((pe) => pe in S)) throw new Error("sign() legacy options not supported");
    const { lowS: U, prehash: $, extraEntropy: v } = jr(S, g);
    b = J(b, $);
    const P = Y(b), K = kn(o, E), j = [Q(K), Q(P)];
    if (v != null && v !== !1) {
      const pe = v === !0 ? n(p.secretKey) : v;
      j.push(tt("extraEntropy", pe));
    }
    const fe = Ws(...j), re = P;
    function ne(pe) {
      const ue = F(pe);
      if (!o.isValidNot0(ue)) return;
      const _e = o.inv(ue), he = t.BASE.multiply(ue).toAffine(), Ue = o.create(he.x);
      if (Ue === vs) return;
      const Mt = o.create(_e * o.create(re + Ue * K));
      if (Mt === vs) return;
      let Ts = (he.x === Ue ? 0 : 2) | Number(he.y & Dn), Ys = Mt;
      return U && y(Mt) && (Ys = o.neg(Mt), Ts ^= 1), new _(Ue, Ys, Ts);
    }
    return { seed: fe, k2sig: ne };
  }
  function z(b, E, S = {}) {
    b = tt("message", b);
    const { seed: U, k2sig: $ } = T(b, E, S);
    return lm(e.outputLen, o.BYTES, i)(U, $);
  }
  function se(b) {
    let E;
    const S = typeof b == "string" || fr(b), U = !S && b !== null && typeof b == "object" && typeof b.r == "bigint" && typeof b.s == "bigint";
    if (!S && !U) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    if (U) E = new _(b.r, b.s);
    else if (S) {
      try {
        E = _.fromBytes(tt("sig", b), "der");
      } catch ($) {
        if (!($ instanceof bs.Err)) throw $;
      }
      if (!E) try {
        E = _.fromBytes(tt("sig", b), "compact");
      } catch {
        return !1;
      }
    }
    return E || !1;
  }
  function x(b, E, S, U = {}) {
    const { lowS: $, prehash: v, format: P } = jr(U, g);
    if (S = tt("publicKey", S), E = J(tt("message", E), v), "strict" in U) throw new Error("options.strict was renamed to lowS");
    const K = P === void 0 ? se(b) : _.fromBytes(tt("sig", b), P);
    if (K === !1) return !1;
    try {
      const j = t.fromBytes(S);
      if ($ && K.hasHighS()) return !1;
      const { r: fe, s: re } = K, ne = Y(E), pe = o.inv(re), ue = o.create(ne * pe), _e = o.create(fe * pe), he = t.BASE.multiplyUnsafe(ue).add(j.multiplyUnsafe(_e));
      return he.is0() ? !1 : o.create(he.x) === fe;
    } catch {
      return !1;
    }
  }
  function w(b, E, S = {}) {
    const { prehash: U } = jr(S, g);
    return E = J(E, U), _.fromBytes(b, "recovered").recoverPublicKey(E).toBytes();
  }
  return Object.freeze({ keygen: l, getPublicKey: d, getSharedSecret: u, utils: h, lengths: p, Point: t, sign: z, verify: x, recoverPublicKey: w, Signature: _, hash: e });
}
function Mm(t) {
  const e = { a: t.a, b: t.b, p: t.Fp.ORDER, n: t.n, h: t.h, Gx: t.Gx, Gy: t.Gy }, s = t.Fp;
  let n = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((o) => Math.ceil(o / 2)))) : void 0;
  const i = Gs(e.n, { BITS: t.nBitLength, allowedLengths: n, modFromBytes: t.wrapPrivateKey }), r = { Fp: s, Fn: i, allowInfinityPoint: t.allowInfinityPoint, endo: t.endo, isTorsionFree: t.isTorsionFree, clearCofactor: t.clearCofactor, fromBytes: t.fromBytes, toBytes: t.toBytes };
  return { CURVE: e, curveOpts: r };
}
function Wm(t) {
  const { CURVE: e, curveOpts: s } = Mm(t), n = { hmac: t.hmac, randomBytes: t.randomBytes, lowS: t.lowS, bits2int: t.bits2int, bits2int_modN: t.bits2int_modN };
  return { CURVE: e, curveOpts: s, hash: t.hash, ecdsaOpts: n };
}
function qm(t, e) {
  const s = e.Point;
  return Object.assign({}, e, { ProjectivePoint: s, CURVE: Object.assign({}, t, kd(s.Fn.ORDER, s.Fn.BITS)) });
}
function jm(t) {
  const { CURVE: e, curveOpts: s, hash: n, ecdsaOpts: i } = Wm(t), r = Lm(e, s), o = Fm(r, n, i);
  return qm(t, o);
}
function To(t, e) {
  const s = (n) => jm({ ...t, hash: n });
  return { ...s(e), create: s };
}
const Fd = { p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"), n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), h: BigInt(1), a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"), b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5") }, Md = { p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"), n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"), h: BigInt(1), a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"), b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"), Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"), Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f") }, Wd = { p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"), h: BigInt(1), a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"), b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"), Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"), Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650") }, Hm = Gs(Fd.p), Km = Gs(Md.p), Vm = Gs(Wd.p), zm = To({ ...Fd, Fp: Hm, lowS: !1 }, yr);
To({ ...Md, Fp: Km, lowS: !1 }, Zf), To({ ...Wd, Fp: Vm, lowS: !1, allowedPrivateKeyLengths: [130, 131, 132] }, Xf);
const Gm = zm, qd = "base10", at = "base16", pt = "base64pad", qs = "base64url", Ni = "utf8", jd = 0, Is = 1, Si = 2, Ym = 0, mc = 1, hi = 12, pa = 32;
function Jm() {
  const t = So.utils.randomPrivateKey(), e = So.getPublicKey(t);
  return { privateKey: gt(t, at), publicKey: gt(e, at) };
}
function Oo() {
  const t = yn(pa);
  return gt(t, at);
}
function Xm(t, e) {
  const s = So.getSharedSecret($t(t, at), $t(e, at)), n = am(Er, s, void 0, void 0, pa);
  return gt(n, at);
}
function Yi(t) {
  const e = Er($t(t, at));
  return gt(e, at);
}
function Ut(t) {
  const e = Er($t(t, Ni));
  return gt(e, at);
}
function Hd(t) {
  return $t(`${t}`, qd);
}
function gn(t) {
  return Number(gt(t, qd));
}
function Kd(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Vd(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), s = (4 - e.length % 4) % 4;
  return e + "=".repeat(s);
}
function Zm(t) {
  const e = Hd(typeof t.type < "u" ? t.type : jd);
  if (gn(e) === Is && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const s = typeof t.senderPublicKey < "u" ? $t(t.senderPublicKey, at) : void 0, n = typeof t.iv < "u" ? $t(t.iv, at) : yn(hi), i = $t(t.symKey, at), r = wd(i, n).encrypt($t(t.message, Ni)), o = zd({ type: e, sealed: r, iv: n, senderPublicKey: s });
  return t.encoding === qs ? Kd(o) : o;
}
function Qm(t) {
  const e = $t(t.symKey, at), { sealed: s, iv: n } = Ei({ encoded: t.encoded, encoding: t.encoding }), i = wd(e, n).decrypt(s);
  if (i === null) throw new Error("Failed to decrypt");
  return gt(i, Ni);
}
function ey(t, e) {
  const s = Hd(Si), n = yn(hi), i = $t(t, Ni), r = zd({ type: s, sealed: i, iv: n });
  return e === qs ? Kd(r) : r;
}
function ty(t, e) {
  const { sealed: s } = Ei({ encoded: t, encoding: e });
  return gt(s, Ni);
}
function zd(t) {
  if (gn(t.type) === Si) return gt(ci([t.type, t.sealed]), pt);
  if (gn(t.type) === Is) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return gt(ci([t.type, t.senderPublicKey, t.iv, t.sealed]), pt);
  }
  return gt(ci([t.type, t.iv, t.sealed]), pt);
}
function Ei(t) {
  const e = (t.encoding || pt) === qs ? Vd(t.encoded) : t.encoded, s = $t(e, pt), n = s.slice(Ym, mc), i = mc;
  if (gn(n) === Is) {
    const c = i + pa, l = c + hi, d = s.slice(i, c), u = s.slice(c, l), h = s.slice(l);
    return { type: n, sealed: h, iv: u, senderPublicKey: d };
  }
  if (gn(n) === Si) {
    const c = s.slice(i), l = yn(hi);
    return { type: n, sealed: c, iv: l };
  }
  const r = i + hi, o = s.slice(i, r), a = s.slice(r);
  return { type: n, sealed: a, iv: o };
}
function sy(t, e) {
  const s = Ei({ encoded: t, encoding: e == null ? void 0 : e.encoding });
  return Gd({ type: gn(s.type), senderPublicKey: typeof s.senderPublicKey < "u" ? gt(s.senderPublicKey, at) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Gd(t) {
  const e = (t == null ? void 0 : t.type) || jd;
  if (e === Is) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function yc(t) {
  return t.type === Is && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function wc(t) {
  return t.type === Si;
}
function ny(t) {
  const e = Buffer.from(t.x, "base64"), s = Buffer.from(t.y, "base64");
  return ci([new Uint8Array([4]), e, s]);
}
function iy(t, e) {
  const [s, n, i] = t.split("."), r = Buffer.from(Vd(i), "base64");
  if (r.length !== 64) throw new Error("Invalid signature length");
  const o = r.slice(0, 32), a = r.slice(32, 64), c = `${s}.${n}`, l = Er(c), d = ny(e);
  if (!Gm.verify(ci([o, a]), l, d)) throw new Error("Invalid signature");
  return oo(t).payload;
}
const ry = "irn";
function lr(t) {
  return (t == null ? void 0 : t.relay) || { protocol: ry };
}
function xn(t) {
  const e = Du[t];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var oy = Object.defineProperty, ay = Object.defineProperties, cy = Object.getOwnPropertyDescriptors, bc = Object.getOwnPropertySymbols, ly = Object.prototype.hasOwnProperty, dy = Object.prototype.propertyIsEnumerable, Ec = (t, e, s) => e in t ? oy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Hr = (t, e) => {
  for (var s in e || (e = {})) ly.call(e, s) && Ec(t, s, e[s]);
  if (bc) for (var s of bc(e)) dy.call(e, s) && Ec(t, s, e[s]);
  return t;
}, uy = (t, e) => ay(t, cy(e));
function hy(t, e = "-") {
  const s = {}, n = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(n)) {
      const r = i.replace(n, ""), o = t[i];
      s[r] = o;
    }
  }), s;
}
function Cc(t) {
  if (!t.includes("wc:")) {
    const l = Xl(t);
    l != null && l.includes("wc:") && (t = l);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, s).split("@"), r = typeof s < "u" ? t.substring(s) : "", o = new URLSearchParams(r), a = Object.fromEntries(o.entries()), c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
  return { protocol: n, topic: py(i[0]), version: parseInt(i[1], 10), symKey: a.symKey, relay: hy(a), methods: c, expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function py(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function fy(t, e = "-") {
  const s = "relay", n = {};
  return Object.keys(t).forEach((i) => {
    const r = i, o = s + e + r;
    t[r] && (n[o] = t[r]);
  }), n;
}
function vc(t) {
  const e = new URLSearchParams(), s = Hr(Hr(uy(Hr({}, fy(t.relay)), { symKey: t.symKey }), t.expiryTimestamp && { expiryTimestamp: t.expiryTimestamp.toString() }), t.methods && { methods: t.methods.join(",") });
  return Object.entries(s).sort(([n], [i]) => n.localeCompare(i)).forEach(([n, i]) => {
    i !== void 0 && e.append(n, String(i));
  }), `${t.protocol}:${t.topic}@${t.version}?${e}`;
}
function Bi(t, e, s) {
  return `${t}?wc_ev=${s}&topic=${e}`;
}
var gy = Object.defineProperty, my = Object.defineProperties, yy = Object.getOwnPropertyDescriptors, Ac = Object.getOwnPropertySymbols, wy = Object.prototype.hasOwnProperty, by = Object.prototype.propertyIsEnumerable, Ic = (t, e, s) => e in t ? gy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ey = (t, e) => {
  for (var s in e || (e = {})) wy.call(e, s) && Ic(t, s, e[s]);
  if (Ac) for (var s of Ac(e)) by.call(e, s) && Ic(t, s, e[s]);
  return t;
}, Cy = (t, e) => my(t, yy(e));
function Kn(t) {
  const e = [];
  return t.forEach((s) => {
    const [n, i] = s.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function Yd(t) {
  const e = [];
  return Object.values(t).forEach((s) => {
    e.push(...Kn(s.accounts));
  }), [...new Set(e)];
}
function vy(t) {
  const e = [];
  return Object.values(t).forEach((s) => {
    e.push(...s.methods);
  }), [...new Set(e)];
}
function Ay(t) {
  const e = [];
  return Object.values(t).forEach((s) => {
    e.push(...s.events);
  }), [...new Set(e)];
}
function Iy(t, e) {
  const s = [];
  return Object.values(t).forEach((n) => {
    Kn(n.accounts).includes(e) && s.push(...n.methods);
  }), s;
}
function Ny(t, e) {
  const s = [];
  return Object.values(t).forEach((n) => {
    Kn(n.accounts).includes(e) && s.push(...n.events);
  }), s;
}
function Ar(t) {
  return t.includes(":");
}
function Pn(t) {
  return Ar(t) ? t.split(":")[0] : t;
}
function Nc(t) {
  var e, s, n;
  const i = {};
  if (!ls(t)) return i;
  for (const [r, o] of Object.entries(t)) {
    const a = Ar(r) ? [r] : o.chains, c = o.methods || [], l = o.events || [], d = Pn(r);
    i[d] = Cy(Ey({}, i[d]), { chains: cs(a, (e = i[d]) == null ? void 0 : e.chains), methods: cs(c, (s = i[d]) == null ? void 0 : s.methods), events: cs(l, (n = i[d]) == null ? void 0 : n.events) });
  }
  return i;
}
function Sy(t) {
  const e = {};
  return t == null || t.forEach((s) => {
    var n;
    const [i, r] = s.split(":");
    e[i] || (e[i] = { accounts: [], chains: [], events: [], methods: [] }), e[i].accounts.push(s), (n = e[i].chains) == null || n.push(`${i}:${r}`);
  }), e;
}
function Sc(t, e) {
  e = e.map((n) => n.replace("did:pkh:", ""));
  const s = Sy(e);
  for (const [n, i] of Object.entries(s)) i.methods ? i.methods = cs(i.methods, t) : i.methods = t, i.events = ["chainChanged", "accountsChanged"];
  return s;
}
function _y(t, e) {
  var s, n, i, r, o, a;
  const c = Nc(t), l = Nc(e), d = {}, u = Object.keys(c).concat(Object.keys(l));
  for (const h of u) d[h] = { chains: cs((s = c[h]) == null ? void 0 : s.chains, (n = l[h]) == null ? void 0 : n.chains), methods: cs((i = c[h]) == null ? void 0 : i.methods, (r = l[h]) == null ? void 0 : r.methods), events: cs((o = c[h]) == null ? void 0 : o.events, (a = l[h]) == null ? void 0 : a.events) };
  return d;
}
const Ty = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Oy = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function L(t, e) {
  const { message: s, code: n } = Oy[t];
  return { message: e ? `${s} ${e}` : s, code: n };
}
function xe(t, e) {
  const { message: s, code: n } = Ty[t];
  return { message: e ? `${s} ${e}` : s, code: n };
}
function Ns(t, e) {
  return !!Array.isArray(t);
}
function ls(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function je(t) {
  return typeof t > "u";
}
function Be(t, e) {
  return e && je(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function fa(t, e) {
  return typeof t == "number" && !isNaN(t);
}
function ky(t, e) {
  const { requiredNamespaces: s } = e, n = Object.keys(t.namespaces), i = Object.keys(s);
  let r = !0;
  return cn(i, n) ? (n.forEach((o) => {
    const { accounts: a, methods: c, events: l } = t.namespaces[o], d = Kn(a), u = s[o];
    (!cn(Vl(o, u), d) || !cn(u.methods, c) || !cn(u.events, l)) && (r = !1);
  }), r) : !1;
}
function dr(t) {
  return Be(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function xy(t) {
  if (Be(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const s = e[0] + ":" + e[1];
      return !!e[2] && dr(s);
    }
  }
  return !1;
}
function Py(t) {
  function e(s) {
    try {
      return typeof new URL(s) < "u";
    } catch {
      return !1;
    }
  }
  try {
    if (Be(t, !1)) {
      if (e(t)) return !0;
      const s = Xl(t);
      return e(s);
    }
  } catch {
  }
  return !1;
}
function Ry(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function Uy(t) {
  return t == null ? void 0 : t.topic;
}
function Dy(t, e) {
  let s = null;
  return Be(t == null ? void 0 : t.publicKey, !1) || (s = L("MISSING_OR_INVALID", `${e} controller public key should be a string`)), s;
}
function _c(t) {
  let e = !0;
  return Ns(t) ? t.length && (e = t.every((s) => Be(s, !1))) : e = !1, e;
}
function $y(t, e, s) {
  let n = null;
  return Ns(e) && e.length ? e.forEach((i) => {
    n || dr(i) || (n = xe("UNSUPPORTED_CHAINS", `${s}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : dr(t) || (n = xe("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function Ly(t, e, s) {
  let n = null;
  return Object.entries(t).forEach(([i, r]) => {
    if (n) return;
    const o = $y(i, Vl(i, r), `${e} ${s}`);
    o && (n = o);
  }), n;
}
function By(t, e) {
  let s = null;
  return Ns(t) ? t.forEach((n) => {
    s || xy(n) || (s = xe("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : s = xe("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s;
}
function Fy(t, e) {
  let s = null;
  return Object.values(t).forEach((n) => {
    if (s) return;
    const i = By(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (s = i);
  }), s;
}
function My(t, e) {
  let s = null;
  return _c(t == null ? void 0 : t.methods) ? _c(t == null ? void 0 : t.events) || (s = xe("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : s = xe("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), s;
}
function Jd(t, e) {
  let s = null;
  return Object.values(t).forEach((n) => {
    if (s) return;
    const i = My(n, `${e}, namespace`);
    i && (s = i);
  }), s;
}
function Wy(t, e, s) {
  let n = null;
  if (t && ls(t)) {
    const i = Jd(t, e);
    i && (n = i);
    const r = Ly(t, e, s);
    r && (n = r);
  } else n = L("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
  return n;
}
function Kr(t, e) {
  let s = null;
  if (t && ls(t)) {
    const n = Jd(t, e);
    n && (s = n);
    const i = Fy(t, e);
    i && (s = i);
  } else s = L("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return s;
}
function Xd(t) {
  return Be(t.protocol, !0);
}
function qy(t, e) {
  let s = !1;
  return t ? t && Ns(t) && t.length && t.forEach((n) => {
    s = Xd(n);
  }) : s = !0, s;
}
function jy(t) {
  return typeof t == "number";
}
function ut(t) {
  return typeof t < "u" && typeof t !== null;
}
function Hy(t) {
  return !(!t || typeof t != "object" || !t.code || !fa(t.code) || !t.message || !Be(t.message, !1));
}
function Ky(t) {
  return !(je(t) || !Be(t.method, !1));
}
function Vy(t) {
  return !(je(t) || je(t.result) && je(t.error) || !fa(t.id) || !Be(t.jsonrpc, !1));
}
function zy(t) {
  return !(je(t) || !Be(t.name, !1));
}
function Tc(t, e) {
  return !(!dr(e) || !Yd(t).includes(e));
}
function Gy(t, e, s) {
  return Be(s, !1) ? Iy(t, e).includes(s) : !1;
}
function Yy(t, e, s) {
  return Be(s, !1) ? Ny(t, e).includes(s) : !1;
}
function Oc(t, e, s) {
  let n = null;
  const i = Jy(t), r = Xy(e), o = Object.keys(i), a = Object.keys(r), c = kc(Object.keys(t)), l = kc(Object.keys(e)), d = c.filter((u) => !l.includes(u));
  return d.length && (n = L("NON_CONFORMING_NAMESPACES", `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), cn(o, a) || (n = L("NON_CONFORMING_NAMESPACES", `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((u) => {
    if (!u.includes(":") || n) return;
    const h = Kn(e[u].accounts);
    h.includes(u) || (n = L("NON_CONFORMING_NAMESPACES", `${s} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${h.toString()}`));
  }), o.forEach((u) => {
    n || (cn(i[u].methods, r[u].methods) ? cn(i[u].events, r[u].events) || (n = L("NON_CONFORMING_NAMESPACES", `${s} namespaces events don't satisfy namespace events for ${u}`)) : n = L("NON_CONFORMING_NAMESPACES", `${s} namespaces methods don't satisfy namespace methods for ${u}`));
  }), n;
}
function Jy(t) {
  const e = {};
  return Object.keys(t).forEach((s) => {
    var n;
    s.includes(":") ? e[s] = t[s] : (n = t[s].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[s].methods, events: t[s].events };
    });
  }), e;
}
function kc(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Xy(t) {
  const e = {};
  return Object.keys(t).forEach((s) => {
    if (s.includes(":")) e[s] = t[s];
    else {
      const n = Kn(t[s].accounts);
      n == null || n.forEach((i) => {
        e[i] = { accounts: t[s].accounts.filter((r) => r.includes(`${i}:`)), methods: t[s].methods, events: t[s].events };
      });
    }
  }), e;
}
function Zy(t, e) {
  return fa(t) && t <= e.max && t >= e.min;
}
function xc() {
  const t = vi();
  return new Promise((e) => {
    switch (t) {
      case Nt.browser:
        e(Qy());
        break;
      case Nt.reactNative:
        e(ew());
        break;
      case Nt.node:
        e(tw());
        break;
      default:
        e(!0);
    }
  });
}
function Qy() {
  return Hn() && (navigator == null ? void 0 : navigator.onLine);
}
async function ew() {
  if (zs() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function tw() {
  return !0;
}
function sw(t) {
  switch (vi()) {
    case Nt.browser:
      nw(t);
      break;
    case Nt.reactNative:
      iw(t);
      break;
  }
}
function nw(t) {
  !zs() && Hn() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function iw(t) {
  zs() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
function rw() {
  var t;
  return Hn() && Ss.getDocument() ? ((t = Ss.getDocument()) == null ? void 0 : t.visibilityState) === "visible" : !0;
}
const Vr = {};
class Zn {
  static get(e) {
    return Vr[e];
  }
  static set(e, s) {
    Vr[e] = s;
  }
  static delete(e) {
    delete Vr[e];
  }
}
function ow(t) {
  const e = qn.decode(t);
  if (e.length < 33) throw new Error("Too short to contain a public key");
  return e.slice(1, 33);
}
function aw({ publicKey: t, signature: e, payload: s }) {
  var n;
  const i = ko(s.method), r = 128 | parseInt(((n = s.version) == null ? void 0 : n.toString()) || "4"), o = dw(s.address), a = s.era === "00" ? new Uint8Array([0]) : ko(s.era);
  if (a.length !== 1 && a.length !== 2) throw new Error("Invalid era length");
  const c = parseInt(s.nonce, 16), l = new Uint8Array([c & 255, c >> 8 & 255]), d = BigInt(`0x${lw(s.tip)}`), u = hw(d), h = new Uint8Array([0, ...t, o, ...e, ...a, ...l, ...u, ...i]), p = uw(h.length + 1);
  return new Uint8Array([...p, r, ...h]);
}
function cw(t) {
  const e = ko(t), s = Bu.blake2b(e, void 0, 32);
  return "0x" + Buffer.from(s).toString("hex");
}
function ko(t) {
  return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
function lw(t) {
  return t.startsWith("0x") ? t.slice(2) : t;
}
function dw(t) {
  const e = qn.decode(t)[0];
  return e === 42 ? 0 : e === 60 ? 2 : 1;
}
function uw(t) {
  if (t < 64) return new Uint8Array([t << 2]);
  if (t < 16384) {
    const e = t << 2 | 1;
    return new Uint8Array([e & 255, e >> 8 & 255]);
  } else if (t < 1 << 30) {
    const e = t << 2 | 2;
    return new Uint8Array([e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]);
  } else throw new Error("Compact encoding > 2^30 not supported");
}
function hw(t) {
  if (t < BigInt(1) << BigInt(6)) return new Uint8Array([Number(t << BigInt(2))]);
  if (t < BigInt(1) << BigInt(14)) {
    const e = t << BigInt(2) | BigInt(1);
    return new Uint8Array([Number(e & BigInt(255)), Number(e >> BigInt(8) & BigInt(255))]);
  } else if (t < BigInt(1) << BigInt(30)) {
    const e = t << BigInt(2) | BigInt(2);
    return new Uint8Array([Number(e & BigInt(255)), Number(e >> BigInt(8) & BigInt(255)), Number(e >> BigInt(16) & BigInt(255)), Number(e >> BigInt(24) & BigInt(255))]);
  } else throw new Error("BigInt compact encoding not supported > 2^30");
}
function pw(t) {
  const e = Uint8Array.from(Buffer.from(t.signature, "hex")), s = ow(t.transaction.address), n = aw({ publicKey: s, signature: e, payload: t.transaction }), i = Buffer.from(n).toString("hex");
  return cw(i);
}
function ga({ logger: t, name: e }) {
  const s = typeof t == "string" ? Yo({ opts: { level: t, name: e } }).logger : t;
  return s.level = typeof t == "string" ? t : t.level, s;
}
const Zd = "wc", Qd = 2, xo = "core", ds = `${Zd}@2:${xo}:`, fw = { logger: "error" }, gw = { database: ":memory:" }, mw = "crypto", Pc = "client_ed25519_seed", yw = B.ONE_DAY, ww = "keychain", bw = "0.3", Ew = "messages", Cw = "0.3", vw = B.SIX_HOURS, Aw = "publisher", eu = "irn", Iw = "error", tu = "wss://relay.walletconnect.org", Nw = "relayer", Le = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Sw = "_subscription", Ot = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, _w = 0.1, Po = "2.23.2", Oe = { link_mode: "link_mode", relay: "relay" }, Ji = { inbound: "inbound", outbound: "outbound" }, Tw = "0.3", Ow = "WALLETCONNECT_CLIENT_ID", Rc = "WALLETCONNECT_LINK_MODE_APPS", Et = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, kw = "subscription", xw = "0.3", Pw = "pairing", Rw = "0.3", Qn = { wc_pairingDelete: { req: { ttl: B.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: B.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: B.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: B.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: B.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: B.ONE_DAY, prompt: !1, tag: 0 } } }, nn = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, qt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Uw = "history", Dw = "0.3", $w = "expirer", Rt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Lw = "0.3", Bw = "verify-api", Fw = "https://verify.walletconnect.com", su = "https://verify.walletconnect.org", pi = su, Mw = `${pi}/v3`, Ww = [Fw, su], qw = "echo", jw = "https://echo.walletconnect.com", es = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, gs = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, jt = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success", session_request_response_started: "session_request_response_started", session_request_response_validation_success: "session_request_response_validation_success", session_request_response_publish_started: "session_request_response_publish_started" }, Zs = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found", session_request_response_validation_failure: "session_request_response_validation_failure", session_request_response_publish_failure: "session_request_response_publish_failure" }, Qs = { authenticated_session_approve_started: "authenticated_session_approve_started", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve" }, ei = { no_internet_connection: "no_internet_connection", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, Hw = 0.1, Kw = "event-client", Vw = 86400, zw = "https://pulse.walletconnect.org/batch";
function Gw(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var s = new Uint8Array(256), n = 0; n < s.length; n++) s[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var r = t.charAt(i), o = r.charCodeAt(0);
    if (s[o] !== 255) throw new TypeError(r + " is ambiguous");
    s[o] = i;
  }
  var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
  function u(g) {
    if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))), !(g instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (g.length === 0) return "";
    for (var m = 0, y = 0, I = 0, N = g.length; I !== N && g[I] === 0; ) I++, m++;
    for (var _ = (N - I) * d + 1 >>> 0, F = new Uint8Array(_); I !== N; ) {
      for (var Y = g[I], H = 0, Q = _ - 1; (Y !== 0 || H < y) && Q !== -1; Q--, H++) Y += 256 * F[Q] >>> 0, F[Q] = Y % a >>> 0, Y = Y / a >>> 0;
      if (Y !== 0) throw new Error("Non-zero carry");
      y = H, I++;
    }
    for (var J = _ - y; J !== _ && F[J] === 0; ) J++;
    for (var T = c.repeat(m); J < _; ++J) T += t.charAt(F[J]);
    return T;
  }
  function h(g) {
    if (typeof g != "string") throw new TypeError("Expected String");
    if (g.length === 0) return new Uint8Array();
    var m = 0;
    if (g[m] !== " ") {
      for (var y = 0, I = 0; g[m] === c; ) y++, m++;
      for (var N = (g.length - m) * l + 1 >>> 0, _ = new Uint8Array(N); g[m]; ) {
        var F = s[g.charCodeAt(m)];
        if (F === 255) return;
        for (var Y = 0, H = N - 1; (F !== 0 || Y < I) && H !== -1; H--, Y++) F += a * _[H] >>> 0, _[H] = F % 256 >>> 0, F = F / 256 >>> 0;
        if (F !== 0) throw new Error("Non-zero carry");
        I = Y, m++;
      }
      if (g[m] !== " ") {
        for (var Q = N - I; Q !== N && _[Q] === 0; ) Q++;
        for (var J = new Uint8Array(y + (N - Q)), T = y; Q !== N; ) J[T++] = _[Q++];
        return J;
      }
    }
  }
  function p(g) {
    var m = h(g);
    if (m) return m;
    throw new Error(`Non-${e} character`);
  }
  return { encode: u, decodeUnsafe: h, decode: p };
}
var Yw = Gw, Jw = Yw;
const nu = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Xw = (t) => new TextEncoder().encode(t), Zw = (t) => new TextDecoder().decode(t);
class Qw {
  constructor(e, s, n) {
    this.name = e, this.prefix = s, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class e0 {
  constructor(e, s, n) {
    if (this.name = e, this.prefix = s, s.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = s.codePointAt(0), this.baseDecode = n;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return iu(this, e);
  }
}
class t0 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return iu(this, e);
  }
  decode(e) {
    const s = e[0], n = this.decoders[s];
    if (n) return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const iu = (t, e) => new t0({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class s0 {
  constructor(e, s, n, i) {
    this.name = e, this.prefix = s, this.baseEncode = n, this.baseDecode = i, this.encoder = new Qw(e, s, n), this.decoder = new e0(e, s, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ir = ({ name: t, prefix: e, encode: s, decode: n }) => new s0(t, e, s, n), _i = ({ prefix: t, name: e, alphabet: s }) => {
  const { encode: n, decode: i } = Jw(s, e);
  return Ir({ prefix: t, name: e, encode: n, decode: (r) => nu(i(r)) });
}, n0 = (t, e, s, n) => {
  const i = {};
  for (let d = 0; d < e.length; ++d) i[e[d]] = d;
  let r = t.length;
  for (; t[r - 1] === "="; ) --r;
  const o = new Uint8Array(r * s / 8 | 0);
  let a = 0, c = 0, l = 0;
  for (let d = 0; d < r; ++d) {
    const u = i[t[d]];
    if (u === void 0) throw new SyntaxError(`Non-${n} character`);
    c = c << s | u, a += s, a >= 8 && (a -= 8, o[l++] = 255 & c >> a);
  }
  if (a >= s || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
  return o;
}, i0 = (t, e, s) => {
  const n = e[e.length - 1] === "=", i = (1 << s) - 1;
  let r = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > s; ) o -= s, r += e[i & a >> o];
  if (o && (r += e[i & a << s - o]), n) for (; r.length * s & 7; ) r += "=";
  return r;
}, Je = ({ name: t, prefix: e, bitsPerChar: s, alphabet: n }) => Ir({ prefix: e, name: t, encode(i) {
  return i0(i, n, s);
}, decode(i) {
  return n0(i, n, s, t);
} }), r0 = Ir({ prefix: "\0", name: "identity", encode: (t) => Zw(t), decode: (t) => Xw(t) });
var o0 = Object.freeze({ __proto__: null, identity: r0 });
const a0 = Je({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var c0 = Object.freeze({ __proto__: null, base2: a0 });
const l0 = Je({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var d0 = Object.freeze({ __proto__: null, base8: l0 });
const u0 = _i({ prefix: "9", name: "base10", alphabet: "0123456789" });
var h0 = Object.freeze({ __proto__: null, base10: u0 });
const p0 = Je({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), f0 = Je({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var g0 = Object.freeze({ __proto__: null, base16: p0, base16upper: f0 });
const m0 = Je({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), y0 = Je({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), w0 = Je({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), b0 = Je({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), E0 = Je({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), C0 = Je({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), v0 = Je({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), A0 = Je({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), I0 = Je({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var N0 = Object.freeze({ __proto__: null, base32: m0, base32upper: y0, base32pad: w0, base32padupper: b0, base32hex: E0, base32hexupper: C0, base32hexpad: v0, base32hexpadupper: A0, base32z: I0 });
const S0 = _i({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), _0 = _i({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var T0 = Object.freeze({ __proto__: null, base36: S0, base36upper: _0 });
const O0 = _i({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), k0 = _i({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var x0 = Object.freeze({ __proto__: null, base58btc: O0, base58flickr: k0 });
const P0 = Je({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), R0 = Je({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), U0 = Je({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), D0 = Je({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var $0 = Object.freeze({ __proto__: null, base64: P0, base64pad: R0, base64url: U0, base64urlpad: D0 });
const ru = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), L0 = ru.reduce((t, e, s) => (t[s] = e, t), []), B0 = ru.reduce((t, e, s) => (t[e.codePointAt(0)] = s, t), []);
function F0(t) {
  return t.reduce((e, s) => (e += L0[s], e), "");
}
function M0(t) {
  const e = [];
  for (const s of t) {
    const n = B0[s.codePointAt(0)];
    if (n === void 0) throw new Error(`Non-base256emoji character: ${s}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const W0 = Ir({ prefix: "🚀", name: "base256emoji", encode: F0, decode: M0 });
var q0 = Object.freeze({ __proto__: null, base256emoji: W0 }), j0 = ou, Uc = 128, H0 = -128, K0 = Math.pow(2, 31);
function ou(t, e, s) {
  e = e || [], s = s || 0;
  for (var n = s; t >= K0; ) e[s++] = t & 255 | Uc, t /= 128;
  for (; t & H0; ) e[s++] = t & 255 | Uc, t >>>= 7;
  return e[s] = t | 0, ou.bytes = s - n + 1, e;
}
var V0 = Ro, z0 = 128, Dc = 127;
function Ro(t, n) {
  var s = 0, n = n || 0, i = 0, r = n, o, a = t.length;
  do {
    if (r >= a) throw Ro.bytes = 0, new RangeError("Could not decode varint");
    o = t[r++], s += i < 28 ? (o & Dc) << i : (o & Dc) * Math.pow(2, i), i += 7;
  } while (o >= z0);
  return Ro.bytes = r - n, s;
}
var G0 = Math.pow(2, 7), Y0 = Math.pow(2, 14), J0 = Math.pow(2, 21), X0 = Math.pow(2, 28), Z0 = Math.pow(2, 35), Q0 = Math.pow(2, 42), eb = Math.pow(2, 49), tb = Math.pow(2, 56), sb = Math.pow(2, 63), nb = function(t) {
  return t < G0 ? 1 : t < Y0 ? 2 : t < J0 ? 3 : t < X0 ? 4 : t < Z0 ? 5 : t < Q0 ? 6 : t < eb ? 7 : t < tb ? 8 : t < sb ? 9 : 10;
}, ib = { encode: j0, decode: V0, encodingLength: nb }, au = ib;
const $c = (t, e, s = 0) => (au.encode(t, e, s), e), Lc = (t) => au.encodingLength(t), Uo = (t, e) => {
  const s = e.byteLength, n = Lc(t), i = n + Lc(s), r = new Uint8Array(i + s);
  return $c(t, r, 0), $c(s, r, n), r.set(e, i), new rb(t, s, e, r);
};
class rb {
  constructor(e, s, n, i) {
    this.code = e, this.size = s, this.digest = n, this.bytes = i;
  }
}
const cu = ({ name: t, code: e, encode: s }) => new ob(t, e, s);
class ob {
  constructor(e, s, n) {
    this.name = e, this.code = s, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const s = this.encode(e);
      return s instanceof Uint8Array ? Uo(this.code, s) : s.then((n) => Uo(this.code, n));
    } else throw Error("Unknown type, must be binary type");
  }
}
const lu = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), ab = cu({ name: "sha2-256", code: 18, encode: lu("SHA-256") }), cb = cu({ name: "sha2-512", code: 19, encode: lu("SHA-512") });
var lb = Object.freeze({ __proto__: null, sha256: ab, sha512: cb });
const du = 0, db = "identity", uu = nu, ub = (t) => Uo(du, uu(t)), hb = { code: du, name: db, encode: uu, digest: ub };
var pb = Object.freeze({ __proto__: null, identity: hb });
new TextEncoder(), new TextDecoder();
const Bc = { ...o0, ...c0, ...d0, ...h0, ...g0, ...N0, ...T0, ...x0, ...$0, ...q0 };
({ ...lb, ...pb });
function hu(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function fb(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? hu(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function pu(t, e, s, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: s }, decoder: { decode: n } };
}
const Fc = pu("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), zr = pu("ascii", "a", (t) => {
  let e = "a";
  for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = fb(t.length);
  for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
  return e;
}), gb = { utf8: Fc, "utf-8": Fc, hex: Bc.base16, latin1: zr, ascii: zr, binary: zr, ...Bc };
function mb(t, e = "utf8") {
  const s = gb[e];
  if (!s) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? hu(globalThis.Buffer.from(t, "utf-8")) : s.decoder.decode(`${s.prefix}${t}`);
}
var yb = Object.defineProperty, wb = (t, e, s) => e in t ? yb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Zt = (t, e, s) => wb(t, typeof e != "symbol" ? e + "" : e, s);
class bb {
  constructor(e, s) {
    this.core = e, this.logger = s, Zt(this, "keychain", /* @__PURE__ */ new Map()), Zt(this, "name", ww), Zt(this, "version", bw), Zt(this, "initialized", !1), Zt(this, "storagePrefix", ds), Zt(this, "init", async () => {
      if (!this.initialized) {
        const n = await this.getKeyChain();
        typeof n < "u" && (this.keychain = n), this.initialized = !0;
      }
    }), Zt(this, "has", (n) => (this.isInitialized(), this.keychain.has(n))), Zt(this, "set", async (n, i) => {
      this.isInitialized(), this.keychain.set(n, i), await this.persist();
    }), Zt(this, "get", (n) => {
      this.isInitialized();
      const i = this.keychain.get(n);
      if (typeof i > "u") {
        const { message: r } = L("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(r);
      }
      return i;
    }), Zt(this, "del", async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }), this.core = e, this.logger = St(s, this.name);
  }
  get context() {
    return _t(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, yo(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? wo(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var Eb = Object.defineProperty, Cb = (t, e, s) => e in t ? Eb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, We = (t, e, s) => Cb(t, typeof e != "symbol" ? e + "" : e, s);
class vb {
  constructor(e, s, n) {
    this.core = e, this.logger = s, We(this, "name", mw), We(this, "keychain"), We(this, "randomSessionIdentifier", Oo()), We(this, "initialized", !1), We(this, "clientId"), We(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }), We(this, "hasKeys", (i) => (this.isInitialized(), this.keychain.has(i))), We(this, "getClientId", async () => {
      if (this.isInitialized(), this.clientId) return this.clientId;
      const i = await this.getClientSeed(), r = Aa(i), o = qu(r.publicKey);
      return this.clientId = o, o;
    }), We(this, "generateKeyPair", () => {
      this.isInitialized();
      const i = Jm();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }), We(this, "signJWT", async (i) => {
      this.isInitialized();
      const r = await this.getClientSeed(), o = Aa(r), a = this.randomSessionIdentifier;
      return await ju(a, i, yw, o);
    }), We(this, "generateSharedKey", (i, r, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(i), c = Xm(a, r);
      return this.setSymKey(c, o);
    }), We(this, "setSymKey", async (i, r) => {
      this.isInitialized();
      const o = r || Yi(i);
      return await this.keychain.set(o, i), o;
    }), We(this, "deleteKeyPair", async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }), We(this, "deleteSymKey", async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }), We(this, "encode", async (i, r, o) => {
      this.isInitialized();
      const a = Gd(o), c = Hu(r);
      if (wc(a)) return ey(c, o == null ? void 0 : o.encoding);
      if (yc(a)) {
        const h = a.senderPublicKey, p = a.receiverPublicKey;
        i = await this.generateSharedKey(h, p);
      }
      const l = this.getSymKey(i), { type: d, senderPublicKey: u } = a;
      return Zm({ type: d, symKey: l, message: c, senderPublicKey: u, encoding: o == null ? void 0 : o.encoding });
    }), We(this, "decode", async (i, r, o) => {
      this.isInitialized();
      const a = sy(r, o);
      if (wc(a)) {
        const c = ty(r, o == null ? void 0 : o.encoding);
        return Ia(c);
      }
      if (yc(a)) {
        const c = a.receiverPublicKey, l = a.senderPublicKey;
        i = await this.generateSharedKey(c, l);
      }
      try {
        const c = this.getSymKey(i), l = Qm({ symKey: c, encoded: r, encoding: o == null ? void 0 : o.encoding });
        return Ia(l);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }), We(this, "getPayloadType", (i, r = pt) => {
      const o = Ei({ encoded: i, encoding: r });
      return gn(o.type);
    }), We(this, "getPayloadSenderPublicKey", (i, r = pt) => {
      const o = Ei({ encoded: i, encoding: r });
      return o.senderPublicKey ? gt(o.senderPublicKey, at) : void 0;
    }), this.core = e, this.logger = St(s, this.name), this.keychain = n || new bb(this.core, this.logger);
  }
  get context() {
    return _t(this.logger);
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
      e = this.keychain.get(Pc);
    } catch {
      e = Oo(), await this.keychain.set(Pc, e);
    }
    return mb(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var Ab = Object.defineProperty, Ib = Object.defineProperties, Nb = Object.getOwnPropertyDescriptors, Mc = Object.getOwnPropertySymbols, Sb = Object.prototype.hasOwnProperty, _b = Object.prototype.propertyIsEnumerable, Do = (t, e, s) => e in t ? Ab(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Tb = (t, e) => {
  for (var s in e || (e = {})) Sb.call(e, s) && Do(t, s, e[s]);
  if (Mc) for (var s of Mc(e)) _b.call(e, s) && Do(t, s, e[s]);
  return t;
}, Ob = (t, e) => Ib(t, Nb(e)), yt = (t, e, s) => Do(t, typeof e != "symbol" ? e + "" : e, s);
class kb extends Xh {
  constructor(e, s) {
    super(e, s), this.logger = e, this.core = s, yt(this, "messages", /* @__PURE__ */ new Map()), yt(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), yt(this, "name", Ew), yt(this, "version", Cw), yt(this, "initialized", !1), yt(this, "storagePrefix", ds), yt(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const n = await this.getRelayerMessages();
          typeof n < "u" && (this.messages = n);
          const i = await this.getRelayerMessagesWithoutClientAck();
          typeof i < "u" && (this.messagesWithoutClientAck = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (n) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(n);
        } finally {
          this.initialized = !0;
        }
      }
    }), yt(this, "set", async (n, i, r) => {
      this.isInitialized();
      const o = Ut(i);
      let a = this.messages.get(n);
      if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
      if (a[o] = i, this.messages.set(n, a), r === Ji.inbound) {
        const c = this.messagesWithoutClientAck.get(n) || {};
        this.messagesWithoutClientAck.set(n, Ob(Tb({}, c), { [o]: i }));
      }
      return await this.persist(), o;
    }), yt(this, "get", (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }), yt(this, "getWithoutAck", (n) => {
      this.isInitialized();
      const i = {};
      for (const r of n) {
        const o = this.messagesWithoutClientAck.get(r) || {};
        i[r] = Object.values(o);
      }
      return i;
    }), yt(this, "has", (n, i) => {
      this.isInitialized();
      const r = this.get(n), o = Ut(i);
      return typeof r[o] < "u";
    }), yt(this, "ack", async (n, i) => {
      this.isInitialized();
      const r = this.messagesWithoutClientAck.get(n);
      if (typeof r > "u") return;
      const o = Ut(i);
      delete r[o], Object.keys(r).length === 0 ? this.messagesWithoutClientAck.delete(n) : this.messagesWithoutClientAck.set(n, r), await this.persist();
    }), yt(this, "del", async (n) => {
      this.isInitialized(), this.messages.delete(n), this.messagesWithoutClientAck.delete(n), await this.persist();
    }), this.logger = St(e, this.name), this.core = s;
  }
  get context() {
    return _t(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, yo(e));
  }
  async setRelayerMessagesWithoutClientAck(e) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, yo(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? wo(e) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e < "u" ? wo(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var xb = Object.defineProperty, Pb = Object.defineProperties, Rb = Object.getOwnPropertyDescriptors, Wc = Object.getOwnPropertySymbols, Ub = Object.prototype.hasOwnProperty, Db = Object.prototype.propertyIsEnumerable, $o = (t, e, s) => e in t ? xb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Nn = (t, e) => {
  for (var s in e || (e = {})) Ub.call(e, s) && $o(t, s, e[s]);
  if (Wc) for (var s of Wc(e)) Db.call(e, s) && $o(t, s, e[s]);
  return t;
}, qc = (t, e) => Pb(t, Rb(e)), kt = (t, e, s) => $o(t, typeof e != "symbol" ? e + "" : e, s);
class $b extends Zh {
  constructor(e, s) {
    super(e, s), this.relayer = e, this.logger = s, kt(this, "events", new mn.EventEmitter()), kt(this, "name", Aw), kt(this, "queue", /* @__PURE__ */ new Map()), kt(this, "publishTimeout", B.toMiliseconds(B.ONE_MINUTE)), kt(this, "initialPublishTimeout", B.toMiliseconds(B.ONE_SECOND * 15)), kt(this, "needsTransportRestart", !1), kt(this, "publish", async (n, i, r) => {
      var o, a, c, l, d;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: r } });
      const u = (r == null ? void 0 : r.ttl) || vw, h = (r == null ? void 0 : r.prompt) || !1, p = (r == null ? void 0 : r.tag) || 0, g = (r == null ? void 0 : r.id) || an().toString(), m = xn(lr().protocol), y = { id: g, method: (r == null ? void 0 : r.publishMethod) || m.publish, params: Nn({ topic: n, message: i, ttl: u, prompt: h, tag: p, attestation: r == null ? void 0 : r.attestation }, r == null ? void 0 : r.tvf) }, I = `Failed to publish payload, please try again. id:${g} tag:${p}`;
      try {
        je((o = y.params) == null ? void 0 : o.prompt) && ((a = y.params) == null || delete a.prompt), je((c = y.params) == null ? void 0 : c.tag) && ((l = y.params) == null || delete l.tag);
        const N = new Promise(async (_) => {
          const F = ({ id: H }) => {
            var Q;
            ((Q = y.id) == null ? void 0 : Q.toString()) === H.toString() && (this.removeRequestFromQueue(H), this.relayer.events.removeListener(Le.publish, F), _());
          };
          this.relayer.events.on(Le.publish, F);
          const Y = os(new Promise((H, Q) => {
            this.rpcPublish(y, r).then(H).catch((J) => {
              this.logger.warn(J, J == null ? void 0 : J.message), Q(J);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${g} tag:${p}`);
          try {
            await Y, this.events.removeListener(Le.publish, F);
          } catch (H) {
            this.queue.set(g, { request: y, opts: r, attempt: 1 }), this.logger.warn(H, H == null ? void 0 : H.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: g, topic: n, message: i, opts: r } }), await os(N, this.publishTimeout, I);
      } catch (N) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(N), (d = r == null ? void 0 : r.internal) != null && d.throwOnFailedPublish) throw N;
      } finally {
        this.queue.delete(g);
      }
    }), kt(this, "publishCustom", async (n) => {
      var i, r, o, a, c;
      this.logger.debug("Publishing custom payload"), this.logger.trace({ type: "method", method: "publishCustom", params: n });
      const { payload: l, opts: d = {} } = n, { attestation: u, tvf: h, publishMethod: p, prompt: g, tag: m, ttl: y = B.FIVE_MINUTES } = d, I = d.id || an().toString(), N = xn(lr().protocol), _ = p || N.publish, F = { id: I, method: _, params: Nn(qc(Nn({}, l), { ttl: y, prompt: g, tag: m, attestation: u }), h) }, Y = `Failed to publish custom payload, please try again. id:${I} tag:${m}`;
      try {
        je((i = F.params) == null ? void 0 : i.prompt) && ((r = F.params) == null || delete r.prompt), je((o = F.params) == null ? void 0 : o.tag) && ((a = F.params) == null || delete a.tag);
        const H = new Promise(async (Q) => {
          const J = ({ id: z }) => {
            var se;
            ((se = F.id) == null ? void 0 : se.toString()) === z.toString() && (this.removeRequestFromQueue(z), this.relayer.events.removeListener(Le.publish, J), Q());
          };
          this.relayer.events.on(Le.publish, J);
          const T = os(new Promise((z, se) => {
            this.rpcPublish(F, d).then(z).catch((x) => {
              this.logger.warn(x, x == null ? void 0 : x.message), se(x);
            });
          }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${_} id:${I} tag:${m}`);
          try {
            await T, this.events.removeListener(Le.publish, J);
          } catch (z) {
            this.queue.set(I, { request: F, opts: d, attempt: 1 }), this.logger.warn(z, z == null ? void 0 : z.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: I, payload: l, opts: d } }), await os(H, this.publishTimeout, Y);
      } catch (H) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(H), (c = d == null ? void 0 : d.internal) != null && c.throwOnFailedPublish) throw H;
      } finally {
        this.queue.delete(I);
      }
    }), kt(this, "on", (n, i) => {
      this.events.on(n, i);
    }), kt(this, "once", (n, i) => {
      this.events.once(n, i);
    }), kt(this, "off", (n, i) => {
      this.events.off(n, i);
    }), kt(this, "removeListener", (n, i) => {
      this.events.removeListener(n, i);
    }), this.relayer = e, this.logger = St(s, this.name), this.registerEventListeners();
  }
  get context() {
    return _t(this.logger);
  }
  async rpcPublish(e, s) {
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: e });
    const n = await this.relayer.request(e);
    return this.relayer.events.emit(Le.publish, Nn(Nn({}, e), s)), this.logger.debug("Successfully Published Payload"), n;
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e, s) => {
      var n;
      const i = e.attempt + 1;
      this.queue.set(s, qc(Nn({}, e), { attempt: i })), this.logger.warn({}, `Publisher: queue->publishing: ${e.request.id}, tag: ${(n = e.request.params) == null ? void 0 : n.tag}, attempt: ${i}`), await this.rpcPublish(e.request, e.opts), this.logger.warn({}, `Publisher: queue->published: ${e.request.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(jn.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Le.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Le.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
var Lb = Object.defineProperty, Bb = (t, e, s) => e in t ? Lb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Sn = (t, e, s) => Bb(t, typeof e != "symbol" ? e + "" : e, s);
class Fb {
  constructor() {
    Sn(this, "map", /* @__PURE__ */ new Map()), Sn(this, "set", (e, s) => {
      const n = this.get(e);
      this.exists(e, s) || this.map.set(e, [...n, s]);
    }), Sn(this, "get", (e) => this.map.get(e) || []), Sn(this, "exists", (e, s) => this.get(e).includes(s)), Sn(this, "delete", (e, s) => {
      if (typeof s > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const n = this.get(e);
      if (!this.exists(e, s)) return;
      const i = n.filter((r) => r !== s);
      if (!i.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, i);
    }), Sn(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Mb = Object.defineProperty, Wb = Object.defineProperties, qb = Object.getOwnPropertyDescriptors, jc = Object.getOwnPropertySymbols, jb = Object.prototype.hasOwnProperty, Hb = Object.prototype.propertyIsEnumerable, Lo = (t, e, s) => e in t ? Mb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, ti = (t, e) => {
  for (var s in e || (e = {})) jb.call(e, s) && Lo(t, s, e[s]);
  if (jc) for (var s of jc(e)) Hb.call(e, s) && Lo(t, s, e[s]);
  return t;
}, Gr = (t, e) => Wb(t, qb(e)), Ne = (t, e, s) => Lo(t, typeof e != "symbol" ? e + "" : e, s);
class Kb extends tp {
  constructor(e, s) {
    super(e, s), this.relayer = e, this.logger = s, Ne(this, "subscriptions", /* @__PURE__ */ new Map()), Ne(this, "topicMap", new Fb()), Ne(this, "events", new mn.EventEmitter()), Ne(this, "name", kw), Ne(this, "version", xw), Ne(this, "pending", /* @__PURE__ */ new Map()), Ne(this, "cached", []), Ne(this, "initialized", !1), Ne(this, "storagePrefix", ds), Ne(this, "subscribeTimeout", B.toMiliseconds(B.ONE_MINUTE)), Ne(this, "initialSubscribeTimeout", B.toMiliseconds(B.ONE_SECOND * 15)), Ne(this, "clientId"), Ne(this, "batchSubscribeTopicsLimit", 500), Ne(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = !0;
    }), Ne(this, "subscribe", async (n, i) => {
      var r;
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const o = lr(i), a = { topic: n, relay: o, transportType: i == null ? void 0 : i.transportType };
        (r = i == null ? void 0 : i.internal) != null && r.skipSubscribe || this.pending.set(n, a);
        const c = await this.rpcSubscribe(n, o, i);
        return typeof c == "string" && (this.onSubscribe(c, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } })), c;
      } catch (o) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o), o;
      }
    }), Ne(this, "unsubscribe", async (n, i) => {
      this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }), Ne(this, "isSubscribed", (n) => new Promise((i) => {
      i(this.topicMap.topics.includes(n));
    })), Ne(this, "isKnownTopic", (n) => new Promise((i) => {
      i(this.topicMap.topics.includes(n) || this.pending.has(n) || this.cached.some((r) => r.topic === n));
    })), Ne(this, "on", (n, i) => {
      this.events.on(n, i);
    }), Ne(this, "once", (n, i) => {
      this.events.once(n, i);
    }), Ne(this, "off", (n, i) => {
      this.events.off(n, i);
    }), Ne(this, "removeListener", (n, i) => {
      this.events.removeListener(n, i);
    }), Ne(this, "start", async () => {
      await this.onConnect();
    }), Ne(this, "stop", async () => {
      await this.onDisconnect();
    }), Ne(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), Ne(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const n = [];
      this.pending.forEach((i) => {
        n.push(i);
      }), await this.batchSubscribe(n);
    }), Ne(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(jn.pulse, async () => {
        await this.checkPending();
      }), this.events.on(Et.created, async (n) => {
        const i = Et.created;
        this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, data: n }), await this.persist();
      }), this.events.on(Et.deleted, async (n) => {
        const i = Et.deleted;
        this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, data: n }), await this.persist();
      });
    }), this.relayer = e, this.logger = St(s, this.name), this.clientId = "";
  }
  get context() {
    return _t(this.logger);
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
    let n = !1;
    try {
      n = this.getSubscription(e).topic === s;
    } catch {
    }
    return n;
  }
  reset() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, s) {
    const n = this.topicMap.get(e);
    await Promise.all(n.map(async (i) => await this.unsubscribeById(e, i, s)));
  }
  async unsubscribeById(e, s, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: s, opts: n } });
    try {
      const i = lr(n);
      await this.restartToComplete({ topic: e, id: s, relay: i }), await this.rpcUnsubscribe(e, s, i);
      const r = xe("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, s, r), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: s, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, s, n) {
    var i, r;
    const o = await this.getSubscriptionId(e);
    if ((i = n == null ? void 0 : n.internal) != null && i.skipSubscribe) return o;
    (!n || (n == null ? void 0 : n.transportType) === Oe.relay) && await this.restartToComplete({ topic: e, id: e, relay: s });
    const a = { method: xn(s.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a });
    const c = (r = n == null ? void 0 : n.internal) == null ? void 0 : r.throwOnFailedPublish;
    try {
      if ((n == null ? void 0 : n.transportType) === Oe.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a).catch((u) => this.logger.warn(u));
      }, B.toMiliseconds(B.ONE_SECOND)), o;
      const l = new Promise(async (u) => {
        const h = (p) => {
          p.topic === e && (this.events.removeListener(Et.created, h), u(p.id));
        };
        this.events.on(Et.created, h);
        try {
          const p = await os(new Promise((g, m) => {
            this.relayer.request(a).catch((y) => {
              this.logger.warn(y, y == null ? void 0 : y.message), m(y);
            }).then(g);
          }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
          this.events.removeListener(Et.created, h), u(p);
        } catch {
        }
      }), d = await os(l, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
      if (!d && c) throw new Error(`Subscribing to ${e} failed, please try again`);
      return d ? o : null;
    } catch (l) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Le.connection_stalled), c) throw l;
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const s = e[0].relay, n = { method: xn(s.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await os(new Promise((i) => {
        this.relayer.request(n).catch((r) => this.logger.warn(r)).then(i);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(Le.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const s = e[0].relay, n = { method: xn(s.protocol).batchFetchMessages, params: { topics: e.map((r) => r.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    let i;
    try {
      i = await await os(new Promise((r, o) => {
        this.relayer.request(n).catch((a) => {
          this.logger.warn(a), o(a);
        }).then(r);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(Le.connection_stalled);
    }
    return i;
  }
  rpcUnsubscribe(e, s, n) {
    const i = { method: xn(n.protocol).unsubscribe, params: { topic: e, id: s } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, s) {
    this.setSubscription(e, Gr(ti({}, s), { id: e })), this.pending.delete(s.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((s) => {
      this.setSubscription(s.id, ti({}, s)), this.pending.delete(s.topic);
    });
  }
  async onUnsubscribe(e, s, n) {
    this.events.removeAllListeners(s), this.hasSubscription(s, e) && this.deleteSubscription(s, n), await this.relayer.messages.del(e);
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
    this.subscriptions.set(e, ti({}, s)), this.topicMap.set(s.topic, e), this.events.emit(Et.created, s);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const s = this.subscriptions.get(e);
    if (!s) {
      const { message: n } = L("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return s;
  }
  deleteSubscription(e, s) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: s });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Et.deleted, Gr(ti({}, n), { reason: s }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Et.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e = [...this.cached], s = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let n = 0; n < s; n++) {
        const i = e.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(Et.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size && !e.every((s) => {
        var n;
        return s.topic === ((n = this.subscriptions.get(s.id)) == null ? void 0 : n.topic);
      })) {
        const { message: s } = L("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (s) => Gr(ti({}, s), { id: await this.getSubscriptionId(s.topic) })))));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const s = await this.rpcBatchFetchMessages(e);
    s && s.messages && (await mf(B.toMiliseconds(B.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(s.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
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
    return Ut(e + await this.getClientId());
  }
}
var Vb = Object.defineProperty, Hc = Object.getOwnPropertySymbols, zb = Object.prototype.hasOwnProperty, Gb = Object.prototype.propertyIsEnumerable, Bo = (t, e, s) => e in t ? Vb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Kc = (t, e) => {
  for (var s in e || (e = {})) zb.call(e, s) && Bo(t, s, e[s]);
  if (Hc) for (var s of Hc(e)) Gb.call(e, s) && Bo(t, s, e[s]);
  return t;
}, Ce = (t, e, s) => Bo(t, typeof e != "symbol" ? e + "" : e, s);
class Yb extends Qh {
  constructor(e) {
    var s;
    super(e), Ce(this, "protocol", "wc"), Ce(this, "version", 2), Ce(this, "core"), Ce(this, "logger"), Ce(this, "events", new mn.EventEmitter()), Ce(this, "provider"), Ce(this, "messages"), Ce(this, "subscriber"), Ce(this, "publisher"), Ce(this, "name", Nw), Ce(this, "transportExplicitlyClosed", !1), Ce(this, "initialized", !1), Ce(this, "connectionAttemptInProgress", !1), Ce(this, "relayUrl"), Ce(this, "projectId"), Ce(this, "packageName"), Ce(this, "bundleId"), Ce(this, "hasExperiencedNetworkDisruption", !1), Ce(this, "pingTimeout"), Ce(this, "heartBeatTimeout", B.toMiliseconds(B.THIRTY_SECONDS + B.FIVE_SECONDS)), Ce(this, "reconnectTimeout"), Ce(this, "connectPromise"), Ce(this, "reconnectInProgress", !1), Ce(this, "requestsInFlight", []), Ce(this, "connectTimeout", B.toMiliseconds(B.ONE_SECOND * 15)), Ce(this, "request", async (n) => {
      var i, r;
      this.logger.debug("Publishing Request Payload");
      const o = n.id || an().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: o, method: n.method, topic: (i = n.params) == null ? void 0 : i.topic }, "relayer.request - publishing...");
        const a = `${o}:${((r = n.params) == null ? void 0 : r.tag) || ""}`;
        this.requestsInFlight.push(a);
        const c = await this.provider.request(n);
        return this.requestsInFlight = this.requestsInFlight.filter((l) => l !== a), c;
      } catch (a) {
        throw this.logger.debug(`Failed to Publish Request: ${o}`), a;
      }
    }), Ce(this, "resetPingTimeout", () => {
      nr() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var n, i, r, o;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o = (r = (i = (n = this.provider) == null ? void 0 : n.connection) == null ? void 0 : i.socket) == null ? void 0 : r.terminate) == null || o.call(r);
        } catch (a) {
          this.logger.warn(a, a == null ? void 0 : a.message);
        }
      }, this.heartBeatTimeout));
    }), Ce(this, "onPayloadHandler", (n) => {
      this.onProviderPayload(n), this.resetPingTimeout();
    }), Ce(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(Le.connect);
    }), Ce(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), Ce(this, "onProviderErrorHandler", (n) => {
      this.logger.fatal(`Fatal socket error: ${n.message}`), this.events.emit(Le.error, n), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), Ce(this, "registerProviderListeners", () => {
      this.provider.on(Ot.payload, this.onPayloadHandler), this.provider.on(Ot.connect, this.onConnectHandler), this.provider.on(Ot.disconnect, this.onDisconnectHandler), this.provider.on(Ot.error, this.onProviderErrorHandler);
    }), this.core = e.core, this.logger = ga({ logger: (s = e.logger) != null ? s : Iw, name: this.name }), this.messages = new kb(this.logger, e.core), this.subscriber = new Kb(this, this.logger), this.publisher = new $b(this, this.logger), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || tu, Qp() ? this.packageName = Fa() : ef() && (this.bundleId = Fa()), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.transportOpen().catch((e) => this.logger.warn(e, e == null ? void 0 : e.message));
  }
  get context() {
    return _t(this.logger);
  }
  get connected() {
    var e, s, n;
    return ((n = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : n.readyState) === 1 || !1;
  }
  get connecting() {
    var e, s, n;
    return ((n = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : n.readyState) === 0 || this.connectPromise !== void 0 || !1;
  }
  async publish(e, s, n) {
    this.isInitialized(), await this.publisher.publish(e, s, n), await this.recordMessageEvent({ topic: e, message: s, publishedAt: Date.now(), transportType: Oe.relay }, Ji.outbound);
  }
  async publishCustom(e) {
    this.isInitialized(), await this.publisher.publishCustom(e);
  }
  async subscribe(e, s) {
    var n, i, r;
    this.isInitialized(), (!(s != null && s.transportType) || (s == null ? void 0 : s.transportType) === "relay") && await this.toEstablishConnection();
    const o = typeof ((n = s == null ? void 0 : s.internal) == null ? void 0 : n.throwOnFailedPublish) > "u" ? !0 : (i = s == null ? void 0 : s.internal) == null ? void 0 : i.throwOnFailedPublish;
    let a = ((r = this.subscriber.topicMap.get(e)) == null ? void 0 : r[0]) || "", c;
    const l = (d) => {
      d.topic === e && (this.subscriber.off(Et.created, l), c());
    };
    return await Promise.all([new Promise((d) => {
      c = d, this.subscriber.on(Et.created, l);
    }), new Promise(async (d, u) => {
      a = await this.subscriber.subscribe(e, Kc({ internal: { throwOnFailedPublish: o } }, s)).catch((h) => {
        o && u(h);
      }) || a, d();
    })]), a;
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
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await os(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, await this.transportDisconnect();
  }
  async transportOpen(e) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (s, n) => {
      await this.connect(e).then(s).catch(n).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await xc()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const s = e.sort((n, i) => n.publishedAt - i.publishedAt);
    this.logger.debug(`Batch of ${s.length} message events sorted`);
    for (const n of s) try {
      await this.onMessageEvent(n);
    } catch (i) {
      this.logger.warn(i, "Error while processing batch message event: " + (i == null ? void 0 : i.message));
    }
    this.logger.trace(`Batch of ${s.length} message events processed`);
  }
  async onLinkMessageEvent(e, s) {
    const { topic: n } = e;
    if (!s.sessionExists) {
      const i = $e(B.FIVE_MINUTES), r = { topic: n, expiry: i, relay: { protocol: "irn" }, active: !1 };
      await this.core.pairing.pairings.set(n, r);
    }
    this.events.emit(Le.message, e), await this.recordMessageEvent(e, Ji.inbound);
  }
  async connect(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
    let s = 1;
    for (; s < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${s}...`), await this.createProvider(), await new Promise(async (n, i) => {
          const r = () => {
            i(new Error("Connection interrupted while trying to connect"));
          };
          this.provider.once(Ot.disconnect, r), await os(new Promise((o, a) => {
            this.provider.connect().then(o).catch(a);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
            i(o);
          }).finally(() => {
            this.provider.off(Ot.disconnect, r), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o, a) => {
            const c = () => {
              i(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(Ot.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
              this.provider.off(Ot.disconnect, c);
            });
          }), this.hasExperiencedNetworkDisruption = !1, n();
        });
      } catch (n) {
        await this.subscriber.stop();
        const i = n;
        this.logger.warn({}, i.message), this.hasExperiencedNetworkDisruption = !0;
      } finally {
        this.connectionAttemptInProgress = !1;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${s}`);
        break;
      }
      await new Promise((n) => setTimeout(n, B.toMiliseconds(s * 1))), s++;
    }
  }
  startPingTimeout() {
    var e, s, n, i, r;
    if (nr()) try {
      (s = (e = this.provider) == null ? void 0 : e.connection) != null && s.socket && ((r = (i = (n = this.provider) == null ? void 0 : n.connection) == null ? void 0 : i.socket) == null || r.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o) {
      this.logger.warn(o, o == null ? void 0 : o.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Jo(new Wu(of({ sdkVersion: Po, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e, s) {
    const { topic: n, message: i } = e;
    await this.messages.set(n, i, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: s, message: n } = e;
    if (!n || n.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${n}`), !0;
    if (!await this.subscriber.isKnownTopic(s)) return this.logger.warn(`Ignoring message for unknown topic ${s}`), !0;
    const i = this.messages.has(s, n);
    return i && this.logger.warn(`Ignoring duplicate message: ${n}`), i;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Xo(e)) {
      if (!e.method.endsWith(Sw)) return;
      const s = e.params, { topic: n, message: i, publishedAt: r, attestation: o } = s.data, a = { topic: n, message: i, publishedAt: r, transportType: Oe.relay, attestation: o };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Kc({ type: "event", event: s.id }, a)), this.events.emit(s.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else Zo(e) && this.events.emit(Le.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, Ji.inbound), this.events.emit(Le.message, e));
  }
  async acknowledgePayload(e) {
    const s = yi(e.id, !0);
    await this.provider.connection.send(s);
  }
  unregisterProviderListeners() {
    this.provider.off(Ot.payload, this.onPayloadHandler), this.provider.off(Ot.connect, this.onConnectHandler), this.provider.off(Ot.disconnect, this.onDisconnectHandler), this.provider.off(Ot.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await xc();
    sw(async (s) => {
      e !== s && (e = s, s ? await this.transportOpen().catch((n) => this.logger.error(n, n == null ? void 0 : n.message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
    }), this.core.heartbeat.on(jn.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && rw()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (s) {
        this.logger.warn(s, s == null ? void 0 : s.message);
      }
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(Le.disconnect), this.connectionAttemptInProgress = !1, !this.reconnectInProgress && (this.reconnectInProgress = !0, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = !1;
    }, B.toMiliseconds(_w)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
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
}
function Jb(t, e) {
  return t === e || Number.isNaN(t) && Number.isNaN(e);
}
function Vc(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function zc(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const Xb = "[object RegExp]", Zb = "[object String]", Qb = "[object Number]", eE = "[object Boolean]", Gc = "[object Arguments]", tE = "[object Symbol]", sE = "[object Date]", nE = "[object Map]", iE = "[object Set]", rE = "[object Array]", oE = "[object Function]", aE = "[object ArrayBuffer]", Yr = "[object Object]", cE = "[object Error]", lE = "[object DataView]", dE = "[object Uint8Array]", uE = "[object Uint8ClampedArray]", hE = "[object Uint16Array]", pE = "[object Uint32Array]", fE = "[object BigUint64Array]", gE = "[object Int8Array]", mE = "[object Int16Array]", yE = "[object Int32Array]", wE = "[object BigInt64Array]", bE = "[object Float32Array]", EE = "[object Float64Array]";
function CE() {
}
function Yc(t) {
  if (!t || typeof t != "object") return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : !1;
}
function vE(t, e, s) {
  return ai(t, e, void 0, void 0, void 0, void 0, s);
}
function ai(t, e, s, n, i, r, o) {
  const a = o(t, e, s, n, i, r);
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
      return fi(t, e, r, o);
  }
  return fi(t, e, r, o);
}
function fi(t, e, s, n) {
  if (Object.is(t, e)) return !0;
  let i = zc(t), r = zc(e);
  if (i === Gc && (i = Yr), r === Gc && (r = Yr), i !== r) return !1;
  switch (i) {
    case Zb:
      return t.toString() === e.toString();
    case Qb: {
      const c = t.valueOf(), l = e.valueOf();
      return Jb(c, l);
    }
    case eE:
    case sE:
    case tE:
      return Object.is(t.valueOf(), e.valueOf());
    case Xb:
      return t.source === e.source && t.flags === e.flags;
    case oE:
      return t === e;
  }
  s = s ?? /* @__PURE__ */ new Map();
  const o = s.get(t), a = s.get(e);
  if (o != null && a != null) return o === e;
  s.set(t, e), s.set(e, t);
  try {
    switch (i) {
      case nE: {
        if (t.size !== e.size) return !1;
        for (const [c, l] of t.entries()) if (!e.has(c) || !ai(l, e.get(c), c, t, e, s, n)) return !1;
        return !0;
      }
      case iE: {
        if (t.size !== e.size) return !1;
        const c = Array.from(t.values()), l = Array.from(e.values());
        for (let d = 0; d < c.length; d++) {
          const u = c[d], h = l.findIndex((p) => ai(u, p, void 0, t, e, s, n));
          if (h === -1) return !1;
          l.splice(h, 1);
        }
        return !0;
      }
      case rE:
      case dE:
      case uE:
      case hE:
      case pE:
      case fE:
      case gE:
      case mE:
      case yE:
      case wE:
      case bE:
      case EE: {
        if (typeof Buffer < "u" && Buffer.isBuffer(t) !== Buffer.isBuffer(e) || t.length !== e.length) return !1;
        for (let c = 0; c < t.length; c++) if (!ai(t[c], e[c], c, t, e, s, n)) return !1;
        return !0;
      }
      case aE:
        return t.byteLength !== e.byteLength ? !1 : fi(new Uint8Array(t), new Uint8Array(e), s, n);
      case lE:
        return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? !1 : fi(new Uint8Array(t), new Uint8Array(e), s, n);
      case cE:
        return t.name === e.name && t.message === e.message;
      case Yr: {
        if (!(fi(t.constructor, e.constructor, s, n) || Yc(t) && Yc(e))) return !1;
        const c = [...Object.keys(t), ...Vc(t)], l = [...Object.keys(e), ...Vc(e)];
        if (c.length !== l.length) return !1;
        for (let d = 0; d < c.length; d++) {
          const u = c[d], h = t[u];
          if (!Object.hasOwn(e, u)) return !1;
          const p = e[u];
          if (!ai(h, p, u, t, e, s, n)) return !1;
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
function AE(t, e) {
  return vE(t, e, CE);
}
var IE = Object.defineProperty, Jc = Object.getOwnPropertySymbols, NE = Object.prototype.hasOwnProperty, SE = Object.prototype.propertyIsEnumerable, Fo = (t, e, s) => e in t ? IE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Xc = (t, e) => {
  for (var s in e || (e = {})) NE.call(e, s) && Fo(t, s, e[s]);
  if (Jc) for (var s of Jc(e)) SE.call(e, s) && Fo(t, s, e[s]);
  return t;
}, dt = (t, e, s) => Fo(t, typeof e != "symbol" ? e + "" : e, s);
class wn extends ep {
  constructor(e, s, n, i = ds, r = void 0) {
    super(e, s, n, i), this.core = e, this.logger = s, this.name = n, dt(this, "map", /* @__PURE__ */ new Map()), dt(this, "version", Tw), dt(this, "cached", []), dt(this, "initialized", !1), dt(this, "getKey"), dt(this, "storagePrefix", ds), dt(this, "recentlyDeleted", []), dt(this, "recentlyDeletedLimit", 200), dt(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !je(o) ? this.map.set(this.getKey(o), o) : Ry(o) ? this.map.set(o.id, o) : Uy(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }), dt(this, "set", async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }), dt(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o))), dt(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => AE(a[c], o[c]))) : this.values)), dt(this, "update", async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const c = Xc(Xc({}, this.getData(o)), a);
      this.map.set(o, c), await this.persist();
    }), dt(this, "delete", async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
    }), this.logger = St(s, this.name), this.storagePrefix = i, this.getKey = r;
  }
  get context() {
    return _t(this.logger);
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
        const { message: i } = L("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(i), new Error(i);
      }
      const { message: n } = L("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
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
        const { message: s } = L("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var _E = Object.defineProperty, TE = (t, e, s) => e in t ? _E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, ge = (t, e, s) => TE(t, typeof e != "symbol" ? e + "" : e, s);
class OE {
  constructor(e, s) {
    this.core = e, this.logger = s, ge(this, "name", Pw), ge(this, "version", Rw), ge(this, "events", new Qo()), ge(this, "pairings"), ge(this, "initialized", !1), ge(this, "storagePrefix", ds), ge(this, "ignoredPayloadTypes", [Is]), ge(this, "registeredMethods", []), ge(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }), ge(this, "register", ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }), ge(this, "create", async (n) => {
      this.isInitialized();
      const i = Oo(), r = await this.core.crypto.setSymKey(i), o = $e(B.FIVE_MINUTES), a = { protocol: eu }, c = { topic: r, expiry: o, relay: a, active: !1, methods: n == null ? void 0 : n.methods }, l = vc({ protocol: this.core.protocol, version: this.core.version, topic: r, symKey: i, relay: a, expiryTimestamp: o, methods: n == null ? void 0 : n.methods });
      return this.events.emit(nn.create, c), this.core.expirer.set(r, o), await this.pairings.set(r, c), await this.core.relayer.subscribe(r, { transportType: n == null ? void 0 : n.transportType, internal: n == null ? void 0 : n.internal }), { topic: r, uri: l };
    }), ge(this, "pair", async (n) => {
      this.isInitialized();
      const i = this.core.eventClient.createEvent({ properties: { topic: n == null ? void 0 : n.uri, trace: [es.pairing_started] } });
      this.isValidPair(n, i);
      const { topic: r, symKey: o, relay: a, expiryTimestamp: c, methods: l } = Cc(n.uri);
      i.props.properties.topic = r, i.addTrace(es.pairing_uri_validation_success), i.addTrace(es.pairing_uri_not_expired);
      let d;
      if (this.pairings.keys.includes(r)) {
        if (d = this.pairings.get(r), i.addTrace(es.existing_pairing), d.active) throw i.setError(gs.active_pairing_already_exists), new Error(`Pairing already exists: ${r}. Please try again with a new connection URI.`);
        i.addTrace(es.pairing_not_expired);
      }
      const u = c || $e(B.FIVE_MINUTES), h = { topic: r, relay: a, expiry: u, active: !1, methods: l };
      this.core.expirer.set(r, u), await this.pairings.set(r, h), i.addTrace(es.store_new_pairing), n.activatePairing && await this.activate({ topic: r }), this.events.emit(nn.create, h), i.addTrace(es.emit_inactive_pairing), this.core.crypto.keychain.has(r) || await this.core.crypto.setSymKey(o, r), i.addTrace(es.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        i.setError(gs.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(r, { relay: a });
      } catch (p) {
        throw i.setError(gs.subscribe_pairing_topic_failure), p;
      }
      return i.addTrace(es.subscribe_pairing_topic_success), h;
    }), ge(this, "activate", async ({ topic: n }) => {
      this.isInitialized();
      const i = $e(B.FIVE_MINUTES);
      this.core.expirer.set(n, i), await this.pairings.update(n, { active: !0, expiry: i });
    }), ge(this, "ping", async (n) => {
      this.isInitialized(), await this.isValidPing(n), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const r = await this.sendRequest(i, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = sn();
        this.events.once(Ie("pairing_ping", r), ({ error: l }) => {
          l ? c(l) : a();
        }), await o();
      }
    }), ge(this, "updateExpiry", async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }), ge(this, "updateMetadata", async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }), ge(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), ge(this, "disconnect", async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", xe("USER_DISCONNECTED")), await this.deletePairing(i));
    }), ge(this, "formatUriFromPairing", (n) => {
      this.isInitialized();
      const { topic: i, relay: r, expiry: o, methods: a } = n, c = this.core.crypto.keychain.get(i);
      return vc({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: c, relay: r, expiryTimestamp: o, methods: a });
    }), ge(this, "sendRequest", async (n, i, r) => {
      const o = ns(i, r), a = await this.core.crypto.encode(n, o), c = Qn[i].req;
      return this.core.history.set(n, o), this.core.relayer.publish(n, a, c), o.id;
    }), ge(this, "sendResult", async (n, i, r) => {
      const o = yi(n, r), a = await this.core.crypto.encode(i, o), c = (await this.core.history.get(i, n)).request.method, l = Qn[c].res;
      await this.core.relayer.publish(i, a, l), await this.core.history.resolve(o);
    }), ge(this, "sendError", async (n, i, r) => {
      const o = Ol(n, r), a = await this.core.crypto.encode(i, o), c = (await this.core.history.get(i, n)).request.method, l = Qn[c] ? Qn[c].res : Qn.unregistered_method.res;
      await this.core.relayer.publish(i, a, l), await this.core.history.resolve(o);
    }), ge(this, "deletePairing", async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, xe("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }), ge(this, "cleanup", async () => {
      const n = this.pairings.getAll().filter((i) => is(i.expiry));
      await Promise.all(n.map((i) => this.deletePairing(i.topic)));
    }), ge(this, "onRelayEventRequest", async (n) => {
      const { topic: i, payload: r } = n;
      switch (r.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(i, r);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(i, r);
        default:
          return await this.onUnknownRpcMethodRequest(i, r);
      }
    }), ge(this, "onRelayEventResponse", async (n) => {
      const { topic: i, payload: r } = n, o = (await this.core.history.get(i, r.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, r);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }), ge(this, "onPairingPingRequest", async (n, i) => {
      const { id: r } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(r, n, !0), this.events.emit(nn.ping, { id: r, topic: n });
      } catch (o) {
        await this.sendError(r, n, o), this.logger.error(o);
      }
    }), ge(this, "onPairingPingResponse", (n, i) => {
      const { id: r } = i;
      setTimeout(() => {
        ps(i) ? this.events.emit(Ie("pairing_ping", r), {}) : ts(i) && this.events.emit(Ie("pairing_ping", r), { error: i.error });
      }, 500);
    }), ge(this, "onPairingDeleteRequest", async (n, i) => {
      const { id: r } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(nn.delete, { id: r, topic: n });
      } catch (o) {
        await this.sendError(r, n, o), this.logger.error(o);
      }
    }), ge(this, "onUnknownRpcMethodRequest", async (n, i) => {
      const { id: r, method: o } = i;
      try {
        if (this.registeredMethods.includes(o)) return;
        const a = xe("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(r, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(r, n, a), this.logger.error(a);
      }
    }), ge(this, "onUnknownRpcMethodResponse", (n) => {
      this.registeredMethods.includes(n) || this.logger.error(xe("WC_METHOD_UNSUPPORTED", n));
    }), ge(this, "isValidPair", (n, i) => {
      var r;
      if (!ut(n)) {
        const { message: a } = L("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw i.setError(gs.malformed_pairing_uri), new Error(a);
      }
      if (!Py(n.uri)) {
        const { message: a } = L("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw i.setError(gs.malformed_pairing_uri), new Error(a);
      }
      const o = Cc(n == null ? void 0 : n.uri);
      if (!((r = o == null ? void 0 : o.relay) != null && r.protocol)) {
        const { message: a } = L("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw i.setError(gs.malformed_pairing_uri), new Error(a);
      }
      if (!(o != null && o.symKey)) {
        const { message: a } = L("MISSING_OR_INVALID", "pair() uri#symKey");
        throw i.setError(gs.malformed_pairing_uri), new Error(a);
      }
      if (o != null && o.expiryTimestamp && B.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
        i.setError(gs.pairing_expired);
        const { message: a } = L("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }), ge(this, "isValidPing", async (n) => {
      if (!ut(n)) {
        const { message: r } = L("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(r);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }), ge(this, "isValidDisconnect", async (n) => {
      if (!ut(n)) {
        const { message: r } = L("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(r);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }), ge(this, "isValidPairingTopic", async (n) => {
      if (!Be(n, !1)) {
        const { message: i } = L("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = L("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (is(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = L("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }), this.core = e, this.logger = St(s, this.name), this.pairings = new wn(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return _t(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Le.message, async (e) => {
      const { topic: s, message: n, transportType: i } = e;
      if (this.pairings.keys.includes(s) && i !== Oe.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))) try {
        const r = await this.core.crypto.decode(s, n);
        Xo(r) ? (this.core.history.set(s, r), await this.onRelayEventRequest({ topic: s, payload: r })) : Zo(r) && (await this.core.history.resolve(r), await this.onRelayEventResponse({ topic: s, payload: r }), this.core.history.delete(s, r.id)), await this.core.relayer.messages.ack(s, n);
      } catch (r) {
        this.logger.error(r);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Rt.expired, async (e) => {
      const { topic: s } = Jl(e.target);
      s && this.pairings.keys.includes(s) && (await this.deletePairing(s, !0), this.events.emit(nn.expire, { topic: s }));
    });
  }
}
var kE = Object.defineProperty, xE = (t, e, s) => e in t ? kE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ke = (t, e, s) => xE(t, typeof e != "symbol" ? e + "" : e, s);
class PE extends Jh {
  constructor(e, s) {
    super(e, s), this.core = e, this.logger = s, Ke(this, "records", /* @__PURE__ */ new Map()), Ke(this, "events", new mn.EventEmitter()), Ke(this, "name", Uw), Ke(this, "version", Dw), Ke(this, "cached", []), Ke(this, "initialized", !1), Ke(this, "storagePrefix", ds), Ke(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }), Ke(this, "set", (n, i, r) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: r }), this.records.has(i.id)) return;
      const o = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: r, expiry: $e(B.THIRTY_DAYS) };
      this.records.set(o.id, o), this.persist(), this.events.emit(qt.created, o);
    }), Ke(this, "resolve", async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id)) return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = ts(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.persist(), this.events.emit(qt.updated, i));
    }), Ke(this, "get", async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i))), Ke(this, "delete", (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((r) => {
        if (r.topic === n) {
          if (typeof i < "u" && r.id !== i) return;
          this.records.delete(r.id), this.events.emit(qt.deleted, r);
        }
      }), this.persist();
    }), Ke(this, "exists", async (n, i) => (this.isInitialized(), this.records.has(i) ? (await this.getRecord(i)).topic === n : !1)), Ke(this, "on", (n, i) => {
      this.events.on(n, i);
    }), Ke(this, "once", (n, i) => {
      this.events.once(n, i);
    }), Ke(this, "off", (n, i) => {
      this.events.off(n, i);
    }), Ke(this, "removeListener", (n, i) => {
      this.events.removeListener(n, i);
    }), this.logger = St(s, this.name);
  }
  get context() {
    return _t(this.logger);
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
      const n = { topic: s.topic, request: ns(s.request.method, s.request.params, s.id), chainId: s.chainId };
      return e.push(n);
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
      const { message: n } = L("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return s;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(qt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: s } = L("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(qt.created, (e) => {
      const s = qt.created;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.events.on(qt.updated, (e) => {
      const s = qt.updated;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.events.on(qt.deleted, (e) => {
      const s = qt.deleted;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.core.heartbeat.on(jn.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((s) => {
        B.toMiliseconds(s.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${s.id}`), this.records.delete(s.id), this.events.emit(qt.deleted, s, !1), e = !0);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var RE = Object.defineProperty, UE = (t, e, s) => e in t ? RE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, et = (t, e, s) => UE(t, typeof e != "symbol" ? e + "" : e, s);
class DE extends sp {
  constructor(e, s) {
    super(e, s), this.core = e, this.logger = s, et(this, "expirations", /* @__PURE__ */ new Map()), et(this, "events", new mn.EventEmitter()), et(this, "name", $w), et(this, "version", Lw), et(this, "cached", []), et(this, "initialized", !1), et(this, "storagePrefix", ds), et(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }), et(this, "has", (n) => {
      try {
        const i = this.formatTarget(n);
        return typeof this.getExpiration(i) < "u";
      } catch {
        return !1;
      }
    }), et(this, "set", (n, i) => {
      this.isInitialized();
      const r = this.formatTarget(n), o = { target: r, expiry: i };
      this.expirations.set(r, o), this.checkExpiry(r, o), this.events.emit(Rt.created, { target: r, expiration: o });
    }), et(this, "get", (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }), et(this, "del", (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), r = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(Rt.deleted, { target: i, expiration: r });
      }
    }), et(this, "on", (n, i) => {
      this.events.on(n, i);
    }), et(this, "once", (n, i) => {
      this.events.once(n, i);
    }), et(this, "off", (n, i) => {
      this.events.off(n, i);
    }), et(this, "removeListener", (n, i) => {
      this.events.removeListener(n, i);
    }), this.logger = St(s, this.name);
  }
  get context() {
    return _t(this.logger);
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
    if (typeof e == "string") return af(e);
    if (typeof e == "number") return cf(e);
    const { message: s } = L("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(s);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Rt.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: s } = L("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: n } = L("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(n), new Error(n);
    }
    return s;
  }
  checkExpiry(e, s) {
    const { expiry: n } = s;
    B.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, s);
  }
  expire(e, s) {
    this.expirations.delete(e), this.events.emit(Rt.expired, { target: e, expiration: s });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, s) => this.checkExpiry(s, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(jn.pulse, () => this.checkExpirations()), this.events.on(Rt.created, (e) => {
      const s = Rt.created;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    }), this.events.on(Rt.expired, (e) => {
      const s = Rt.expired;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    }), this.events.on(Rt.deleted, (e) => {
      const s = Rt.deleted;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var $E = Object.defineProperty, LE = (t, e, s) => e in t ? $E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, De = (t, e, s) => LE(t, typeof e != "symbol" ? e + "" : e, s);
class BE extends np {
  constructor(e, s, n) {
    super(e, s, n), this.core = e, this.logger = s, this.store = n, De(this, "name", Bw), De(this, "abortController"), De(this, "isDevEnv"), De(this, "verifyUrlV3", Mw), De(this, "storagePrefix", ds), De(this, "version", Qd), De(this, "publicKey"), De(this, "fetchPromise"), De(this, "init", async () => {
      var i;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && B.toMiliseconds((i = this.publicKey) == null ? void 0 : i.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), De(this, "register", async (i) => {
      if (!Hn() || this.isDevEnv) return;
      const r = window.location.origin, { id: o, decryptedId: a } = i, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r}&id=${o}&decryptedId=${a}`;
      try {
        const l = Ss.getDocument(), d = this.startAbortTimer(B.ONE_SECOND * 5), u = await new Promise((h, p) => {
          const g = () => {
            window.removeEventListener("message", y), l.body.removeChild(m), p("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", g);
          const m = l.createElement("iframe");
          m.src = c, m.style.display = "none", m.addEventListener("error", g, { signal: this.abortController.signal });
          const y = (I) => {
            if (I.data && typeof I.data == "string") try {
              const N = JSON.parse(I.data);
              if (N.type === "verify_attestation") {
                if (oo(N.attestation).payload.id !== o) return;
                clearInterval(d), l.body.removeChild(m), this.abortController.signal.removeEventListener("abort", g), window.removeEventListener("message", y), h(N.attestation === null ? "" : N.attestation);
              }
            } catch (N) {
              this.logger.warn(N);
            }
          };
          l.body.appendChild(m), window.addEventListener("message", y, { signal: this.abortController.signal });
        });
        return this.logger.debug(u, "jwt attestation"), u;
      } catch (l) {
        this.logger.warn(l);
      }
      return "";
    }), De(this, "resolve", async (i) => {
      if (this.isDevEnv) return "";
      const { attestationId: r, hash: o, encryptedId: a } = i;
      if (r === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (r) {
        if (oo(r).payload.id !== a) return;
        const l = await this.isValidJwtAttestation(r);
        if (l) {
          if (!l.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return l;
        }
      }
      if (!o) return;
      const c = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
      return this.fetchAttestation(o, c);
    }), De(this, "fetchAttestation", async (i, r) => {
      this.logger.debug(`resolving attestation: ${i} from url: ${r}`);
      const o = this.startAbortTimer(B.ONE_SECOND * 5), a = await fetch(`${r}/attestation/${i}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
    }), De(this, "getVerifyUrl", (i) => {
      let r = i || pi;
      return Ww.includes(r) || (this.logger.info(`verify url: ${r}, not included in trusted list, assigning default: ${pi}`), r = pi), r;
    }), De(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const i = this.startAbortTimer(B.FIVE_SECONDS), r = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(i), await r.json();
      } catch (i) {
        this.logger.warn(i);
      }
    }), De(this, "persistPublicKey", async (i) => {
      this.logger.debug(i, "persisting public key to local storage"), await this.store.setItem(this.storeKey, i), this.publicKey = i;
    }), De(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), De(this, "isValidJwtAttestation", async (i) => {
      const r = await this.getPublicKey();
      try {
        if (r) return this.validateAttestation(i, r);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
      const o = await this.fetchAndPersistPublicKey();
      try {
        if (o) return this.validateAttestation(i, o);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
    }), De(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), De(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (r) => {
        const o = await this.fetchPublicKey();
        o && (await this.persistPublicKey(o), r(o));
      });
      const i = await this.fetchPromise;
      return this.fetchPromise = void 0, i;
    }), De(this, "validateAttestation", (i, r) => {
      const o = iy(i, r.publicKey), a = { hasExpired: B.toMiliseconds(o.exp) < Date.now(), payload: o };
      if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a.payload.origin, isScam: a.payload.isScam, isVerified: a.payload.isVerified };
    }), this.logger = St(s, this.name), this.abortController = new AbortController(), this.isDevEnv = ia(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return _t(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), B.toMiliseconds(e));
  }
}
var FE = Object.defineProperty, ME = (t, e, s) => e in t ? FE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Zc = (t, e, s) => ME(t, typeof e != "symbol" ? e + "" : e, s);
class WE extends ip {
  constructor(e, s) {
    super(e, s), this.projectId = e, this.logger = s, Zc(this, "context", qw), Zc(this, "registerDeviceToken", async (n) => {
      const { clientId: i, token: r, notificationType: o, enableEncrypted: a = !1 } = n, c = `${jw}/${this.projectId}/clients`;
      await fetch(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: i, type: o, token: r, always_raw: a }) });
    }), this.logger = St(s, this.context);
  }
}
var qE = Object.defineProperty, Qc = Object.getOwnPropertySymbols, jE = Object.prototype.hasOwnProperty, HE = Object.prototype.propertyIsEnumerable, Mo = (t, e, s) => e in t ? qE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, si = (t, e) => {
  for (var s in e || (e = {})) jE.call(e, s) && Mo(t, s, e[s]);
  if (Qc) for (var s of Qc(e)) HE.call(e, s) && Mo(t, s, e[s]);
  return t;
}, qe = (t, e, s) => Mo(t, typeof e != "symbol" ? e + "" : e, s);
class KE extends rp {
  constructor(e, s, n = !0) {
    super(e, s, n), this.core = e, this.logger = s, qe(this, "context", Kw), qe(this, "storagePrefix", ds), qe(this, "storageVersion", Hw), qe(this, "events", /* @__PURE__ */ new Map()), qe(this, "shouldPersist", !1), qe(this, "init", async () => {
      if (!ia()) try {
        const i = { eventId: Wa(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: Gl(this.core.relayer.protocol, this.core.relayer.version, Po) } } };
        await this.sendEvent([i]);
      } catch (i) {
        this.logger.warn(i);
      }
    }), qe(this, "createEvent", (i) => {
      const { event: r = "ERROR", type: o = "", properties: { topic: a, trace: c } } = i, l = Wa(), d = this.core.projectId || "", u = Date.now(), h = si({ eventId: l, timestamp: u, props: { event: r, type: o, properties: { topic: a, trace: c } }, bundleId: d, domain: this.getAppDomain() }, this.setMethods(l));
      return this.telemetryEnabled && (this.events.set(l, h), this.shouldPersist = !0), h;
    }), qe(this, "getEvent", (i) => {
      const { eventId: r, topic: o } = i;
      if (r) return this.events.get(r);
      const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
      if (a) return si(si({}, a), this.setMethods(a.eventId));
    }), qe(this, "deleteEvent", (i) => {
      const { eventId: r } = i;
      this.events.delete(r), this.shouldPersist = !0;
    }), qe(this, "setEventListeners", () => {
      this.core.heartbeat.on(jn.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((i) => {
          B.fromMiliseconds(Date.now()) - B.fromMiliseconds(i.timestamp) > Vw && (this.events.delete(i.eventId), this.shouldPersist = !0);
        });
      });
    }), qe(this, "setMethods", (i) => ({ addTrace: (r) => this.addTrace(i, r), setError: (r) => this.setError(i, r) })), qe(this, "addTrace", (i, r) => {
      const o = this.events.get(i);
      o && (o.props.properties.trace.push(r), this.events.set(i, o), this.shouldPersist = !0);
    }), qe(this, "setError", (i, r) => {
      const o = this.events.get(i);
      o && (o.props.type = r, o.timestamp = Date.now(), this.events.set(i, o), this.shouldPersist = !0);
    }), qe(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
    }), qe(this, "restore", async () => {
      try {
        const i = await this.core.storage.getItem(this.storageKey) || [];
        if (!i.length) return;
        i.forEach((r) => {
          this.events.set(r.eventId, si(si({}, r), this.setMethods(r.eventId)));
        });
      } catch (i) {
        this.logger.warn(i);
      }
    }), qe(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const i = [];
      for (const [r, o] of this.events) o.props.type && i.push(o);
      if (i.length !== 0) try {
        if ((await this.sendEvent(i)).ok) for (const r of i) this.events.delete(r.eventId), this.shouldPersist = !0;
      } catch (r) {
        this.logger.warn(r);
      }
    }), qe(this, "sendEvent", async (i) => {
      const r = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${zw}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Po}${r}`, { method: "POST", body: JSON.stringify(i) });
    }), qe(this, "getAppDomain", () => zl().url), this.logger = St(s, this.context), this.telemetryEnabled = n, n ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}
var VE = Object.defineProperty, el = Object.getOwnPropertySymbols, zE = Object.prototype.hasOwnProperty, GE = Object.prototype.propertyIsEnumerable, Wo = (t, e, s) => e in t ? VE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, tl = (t, e) => {
  for (var s in e || (e = {})) zE.call(e, s) && Wo(t, s, e[s]);
  if (el) for (var s of el(e)) GE.call(e, s) && Wo(t, s, e[s]);
  return t;
}, Se = (t, e, s) => Wo(t, typeof e != "symbol" ? e + "" : e, s);
let YE = class fu extends Vh {
  constructor(e) {
    var s;
    super(e), Se(this, "protocol", Zd), Se(this, "version", Qd), Se(this, "name", xo), Se(this, "relayUrl"), Se(this, "projectId"), Se(this, "customStoragePrefix"), Se(this, "events", new mn.EventEmitter()), Se(this, "logger"), Se(this, "heartbeat"), Se(this, "relayer"), Se(this, "crypto"), Se(this, "storage"), Se(this, "history"), Se(this, "expirer"), Se(this, "pairing"), Se(this, "verify"), Se(this, "echoClient"), Se(this, "linkModeSupportedApps"), Se(this, "eventClient"), Se(this, "initialized", !1), Se(this, "logChunkController"), Se(this, "on", (a, c) => this.events.on(a, c)), Se(this, "once", (a, c) => this.events.once(a, c)), Se(this, "off", (a, c) => this.events.off(a, c)), Se(this, "removeListener", (a, c) => this.events.removeListener(a, c)), Se(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: l }) => {
      if (!a || !c) return;
      const d = { topic: a, message: c, publishedAt: Date.now(), transportType: Oe.link_mode };
      this.relayer.onLinkMessageEvent(d, { sessionExists: l });
    });
    const n = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
    if (n) try {
      return this.customStoragePrefix = n.customStoragePrefix, this.logger = n.logger, this.heartbeat = n.heartbeat, this.crypto = n.crypto, this.history = n.history, this.expirer = n.expirer, this.storage = n.storage, this.relayer = n.relayer, this.pairing = n.pairing, this.verify = n.verify, this.echoClient = n.echoClient, this.linkModeSupportedApps = n.linkModeSupportedApps, this.eventClient = n.eventClient, this.initialized = n.initialized, this.logChunkController = n.logChunkController, n;
    } catch (a) {
      console.warn("Failed to copy global core", a);
    }
    this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || tu, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const i = Tl({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : fw.logger, name: xo }), { logger: r, chunkLoggerController: o } = Yo({ opts: i, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = o, (s = this.logChunkController) != null && s.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a, c;
      (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = St(r, this.name), this.heartbeat = new Fu(), this.crypto = new vb(this, this.logger, e == null ? void 0 : e.keychain), this.history = new PE(this, this.logger), this.expirer = new DE(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Mu(tl(tl({}, gw), e == null ? void 0 : e.storageOptions)), this.relayer = new Yb({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new OE(this, this.logger), this.verify = new BE(this, this.logger, this.storage), this.echoClient = new WE(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new KE(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e) {
    const s = new fu(e);
    await s.initialize();
    const n = await s.crypto.getClientId();
    return await s.storage.setItem(Ow, n), s;
  }
  get context() {
    return _t(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(Rc, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Rc) || [], this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(e, `Core Initialization Failure at epoch ${Date.now()}`), this.logger.error(e.message), e;
    }
  }
  getGlobalCore(e = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const s = `_walletConnectCore_${e}`, n = `${s}_count`;
      return globalThis[n] = (globalThis[n] || 0) + 1, globalThis[n] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[n]} times.`), globalThis[s];
    } catch (s) {
      console.warn("Failed to get global WalletConnect core", s);
      return;
    }
  }
  setGlobalCore(e) {
    var s;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const n = `_walletConnectCore_${((s = e.opts) == null ? void 0 : s.customStoragePrefix) || ""}`;
      globalThis[n] = e;
    } catch (n) {
      console.warn("Failed to set global WalletConnect core", n);
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
const JE = YE, gu = "wc", mu = 2, yu = "client", ma = `${gu}@${mu}:${yu}:`, Jr = { name: yu, logger: "error" }, sl = "WALLETCONNECT_DEEPLINK_CHOICE", XE = "proposal", nl = "Proposal expired", ZE = "session", _n = B.SEVEN_DAYS, QE = "engine", Ve = { wc_sessionPropose: { req: { ttl: B.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1101 }, reject: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1120 }, autoReject: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1121 } }, wc_sessionSettle: { req: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: B.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: B.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: B.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: B.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: B.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: B.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: B.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: B.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: B.ONE_DAY, prompt: !1, tag: 1114 }, res: { ttl: B.ONE_DAY, prompt: !1, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: B.ONE_HOUR, prompt: !0, tag: 1116 }, res: { ttl: B.ONE_HOUR, prompt: !1, tag: 1117 }, reject: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1118 }, autoReject: { ttl: B.FIVE_MINUTES, prompt: !1, tag: 1119 } } }, Xr = { min: B.FIVE_MINUTES, max: B.SEVEN_DAYS }, Qt = { idle: "IDLE", active: "ACTIVE" }, eC = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" }, sui_signAndExecuteTransaction: { key: "digest" }, sui_signTransaction: { key: "" }, hedera_signAndExecuteTransaction: { key: "transactionId" }, hedera_executeTransaction: { key: "transactionId" }, near_signTransaction: { key: "" }, near_signTransactions: { key: "" }, tron_signTransaction: { key: "txID" }, xrpl_signTransaction: { key: "" }, xrpl_signTransactionFor: { key: "" }, algo_signTxn: { key: "" }, sendTransfer: { key: "txid" }, stacks_stxTransfer: { key: "txId" }, polkadot_signTransaction: { key: "" }, cosmos_signDirect: { key: "" } }, tC = "request", sC = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], nC = "wc", iC = "auth", rC = "authKeys", oC = "pairingTopics", aC = "requests", Nr = `${nC}@${1.5}:${iC}:`, Xi = `${Nr}:PUB_KEY`;
var cC = Object.defineProperty, lC = Object.defineProperties, dC = Object.getOwnPropertyDescriptors, il = Object.getOwnPropertySymbols, uC = Object.prototype.hasOwnProperty, hC = Object.prototype.propertyIsEnumerable, qo = (t, e, s) => e in t ? cC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, ve = (t, e) => {
  for (var s in e || (e = {})) uC.call(e, s) && qo(t, s, e[s]);
  if (il) for (var s of il(e)) hC.call(e, s) && qo(t, s, e[s]);
  return t;
}, ze = (t, e) => lC(t, dC(e)), O = (t, e, s) => qo(t, typeof e != "symbol" ? e + "" : e, s);
class pC extends lp {
  constructor(e) {
    super(e), O(this, "name", QE), O(this, "events", new Qo()), O(this, "initialized", !1), O(this, "requestQueue", { state: Qt.idle, queue: [] }), O(this, "sessionRequestQueue", { state: Qt.idle, queue: [] }), O(this, "emittedSessionRequests", new yf({ limit: 500 })), O(this, "requestQueueDelay", B.ONE_SECOND), O(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), O(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), O(this, "recentlyDeletedLimit", 200), O(this, "relayMessageCache", []), O(this, "pendingSessions", /* @__PURE__ */ new Map()), O(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(Ve) }), this.initialized = !0, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, B.toMiliseconds(this.requestQueueDelay)));
    }), O(this, "connect", async (s) => {
      var n;
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const i = ze(ve({}, s), { requiredNamespaces: s.requiredNamespaces || {}, optionalNamespaces: s.optionalNamespaces || {} });
      await this.isValidConnect(i), i.optionalNamespaces = _y(i.requiredNamespaces, i.optionalNamespaces), i.requiredNamespaces = {};
      const { pairingTopic: r, requiredNamespaces: o, optionalNamespaces: a, sessionProperties: c, scopedProperties: l, relays: d, authentication: u, walletPay: h } = i, p = ((n = u == null ? void 0 : u[0]) == null ? void 0 : n.ttl) || Ve.wc_sessionPropose.req.ttl || B.FIVE_MINUTES;
      this.validateRequestExpiry(p);
      let g = r, m, y = !1;
      try {
        if (g) {
          const T = this.client.core.pairing.pairings.get(g);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), y = T.active;
        }
      } catch (T) {
        throw this.client.logger.error(`connect() -> pairing.get(${g}) failed`), T;
      }
      if (!g || !y) {
        const { topic: T, uri: z } = await this.client.core.pairing.create({ internal: { skipSubscribe: !0 } });
        g = T, m = z;
      }
      if (!g) {
        const { message: T } = L("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
        throw new Error(T);
      }
      const I = await this.client.core.crypto.generateKeyPair(), N = $e(p), _ = ve(ze(ve(ve({ requiredNamespaces: o, optionalNamespaces: a, relays: d ?? [{ protocol: eu }], proposer: { publicKey: I, metadata: this.client.metadata }, expiryTimestamp: N, pairingTopic: g }, c && { sessionProperties: c }), l && { scopedProperties: l }), { id: Os() }), (u || h) && { requests: { authentication: u == null ? void 0 : u.map((T) => {
        const { domain: z, chains: se, nonce: x, uri: w, exp: b, nbf: E, type: S, statement: U, requestId: $, resources: v, signatureTypes: P } = T;
        return { domain: z, chains: se, nonce: x, type: S ?? "caip122", aud: w, version: "1", iat: (/* @__PURE__ */ new Date()).toISOString(), exp: b, nbf: E, statement: U, requestId: $, resources: v, signatureTypes: P };
      }), walletPay: h } }), F = Ie("session_connect", _.id), { reject: Y, resolve: H, done: Q } = sn(p, nl), J = ({ id: T }) => {
        T === _.id && (this.client.events.off("proposal_expire", J), this.pendingSessions.delete(_.id), this.events.emit(F, { error: { message: nl, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", J), this.events.once(F, ({ error: T, session: z }) => {
        this.client.events.off("proposal_expire", J), T ? Y(T) : z && H(z);
      }), await this.setProposal(_.id, _), await this.sendProposeSession({ proposal: _, publishOpts: { internal: { throwOnFailedPublish: !0 }, tvf: { correlationId: _.id } } }).catch((T) => {
        throw this.deleteProposal(_.id), T;
      }), { uri: m, approval: Q };
    }), O(this, "pair", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(s);
      } catch (n) {
        throw this.client.logger.error("pair() failed"), n;
      }
    }), O(this, "approve", async (s) => {
      var n, i, r;
      const o = this.client.core.eventClient.createEvent({ properties: { topic: (n = s == null ? void 0 : s.id) == null ? void 0 : n.toString(), trace: [jt.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (z) {
        throw o.setError(Zs.no_internet_connection), z;
      }
      try {
        await this.isValidProposalId(s == null ? void 0 : s.id);
      } catch (z) {
        throw this.client.logger.error(`approve() -> proposal.get(${s == null ? void 0 : s.id}) failed`), o.setError(Zs.proposal_not_found), z;
      }
      try {
        await this.isValidApprove(s);
      } catch (z) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(Zs.session_approve_namespace_validation_failure), z;
      }
      const { id: a, relayProtocol: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: h, proposalRequestsResponses: p } = s, g = this.client.proposal.get(a);
      this.client.core.eventClient.deleteEvent({ eventId: o.eventId });
      const { pairingTopic: m, proposer: y, requiredNamespaces: I, optionalNamespaces: N } = g;
      let _ = (i = this.client.core.eventClient) == null ? void 0 : i.getEvent({ topic: m });
      _ || (_ = (r = this.client.core.eventClient) == null ? void 0 : r.createEvent({ type: jt.session_approve_started, properties: { topic: m, trace: [jt.session_approve_started, jt.session_namespaces_validation_success] } }));
      const F = await this.client.core.crypto.generateKeyPair(), Y = y.publicKey, H = await this.client.core.crypto.generateSharedKey(F, Y), Q = ze(ve(ve(ve({ relay: { protocol: c ?? "irn" }, namespaces: l, controller: { publicKey: F, metadata: this.client.metadata }, expiry: $e(_n) }, d && { sessionProperties: d }), u && { scopedProperties: u }), h && { sessionConfig: h }), { proposalRequestsResponses: p }), J = Oe.relay;
      _.addTrace(jt.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(H, { transportType: J, internal: { skipSubscribe: !0 } });
      } catch (z) {
        throw _.setError(Zs.subscribe_session_topic_failure), z;
      }
      _.addTrace(jt.subscribe_session_topic_success);
      const T = ze(ve({}, Q), { topic: H, requiredNamespaces: I, optionalNamespaces: N, pairingTopic: m, acknowledged: !1, self: Q.controller, peer: { publicKey: y.publicKey, metadata: y.metadata }, controller: F, transportType: Oe.relay, authentication: p == null ? void 0 : p.authentication, walletPayResult: p == null ? void 0 : p.walletPay });
      await this.client.session.set(H, T), _.addTrace(jt.store_session);
      try {
        await this.sendApproveSession({ sessionTopic: H, proposal: g, pairingProposalResponse: { relay: { protocol: c ?? "irn" }, responderPublicKey: F }, sessionSettleRequest: Q, publishOpts: { internal: { throwOnFailedPublish: !0 }, tvf: ve({ correlationId: a }, this.getTVFApproveParams(T)) } }), _.addTrace(jt.session_approve_publish_success);
      } catch (z) {
        throw this.client.logger.error(z), this.client.session.delete(H, xe("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(H), z;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: _.eventId }), await this.client.core.pairing.updateMetadata({ topic: m, metadata: y.metadata }), await this.deleteProposal(a), await this.client.core.pairing.activate({ topic: m }), await this.setExpiry(H, $e(_n)), { topic: H, acknowledged: () => Promise.resolve(this.client.session.get(H)) };
    }), O(this, "reject", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(s);
      } catch (o) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), o;
      }
      const { id: n, reason: i } = s;
      let r;
      try {
        r = this.client.proposal.get(n).pairingTopic;
      } catch (o) {
        throw this.client.logger.error(`reject() -> proposal.get(${n}) failed`), o;
      }
      r && await this.sendError({ id: n, topic: r, error: i, rpcOpts: Ve.wc_sessionPropose.reject }), await this.deleteProposal(n);
    }), O(this, "update", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(s);
      } catch (u) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), u;
      }
      const { topic: n, namespaces: i } = s, { done: r, resolve: o, reject: a } = sn(B.FIVE_MINUTES, "Session update request expired without receiving any acknowledgement"), c = Os(), l = an().toString(), d = this.client.session.get(n).namespaces;
      return this.events.once(Ie("session_update", c), ({ error: u }) => {
        u ? a(u) : o();
      }), await this.client.session.update(n, { namespaces: i }), await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i }, throwOnFailedPublish: !0, clientRpcId: c, relayRpcId: l }).catch((u) => {
        this.client.logger.error(u), this.client.session.update(n, { namespaces: d }), a(u);
      }), { acknowledged: r };
    }), O(this, "extend", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(s);
      } catch (c) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
      }
      const { topic: n } = s, i = Os(), { done: r, resolve: o, reject: a } = sn(B.FIVE_MINUTES, "Session extend request expired without receiving any acknowledgement");
      return this.events.once(Ie("session_extend", i), ({ error: c }) => {
        c ? a(c) : o();
      }), await this.setExpiry(n, $e(_n)), this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {}, clientRpcId: i, throwOnFailedPublish: !0 }).catch((c) => {
        a(c);
      }), { acknowledged: r };
    }), O(this, "request", async (s) => {
      this.isInitialized();
      try {
        await this.isValidRequest(s);
      } catch (y) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), y;
      }
      const { chainId: n, request: i, topic: r, expiry: o = Ve.wc_sessionRequest.req.ttl } = s, a = this.client.session.get(r);
      (a == null ? void 0 : a.transportType) === Oe.relay && await this.confirmOnlineStateOrThrow();
      const c = Os(), l = an().toString(), { done: d, resolve: u, reject: h } = sn(o, "Request expired. Please try again.");
      this.events.once(Ie("session_request", c), ({ error: y, result: I }) => {
        y ? h(y) : u(I);
      });
      const p = "wc_sessionRequest", g = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
      if (g) return await this.sendRequest({ clientRpcId: c, relayRpcId: l, topic: r, method: p, params: { request: ze(ve({}, i), { expiryTimestamp: $e(o) }), chainId: n }, expiry: o, throwOnFailedPublish: !0, appLink: g }).catch((y) => h(y)), this.client.events.emit("session_request_sent", { topic: r, request: i, chainId: n, id: c }), await d();
      const m = { request: ze(ve({}, i), { expiryTimestamp: $e(o) }), chainId: n };
      return await Promise.all([new Promise(async (y) => {
        await this.sendRequest({ clientRpcId: c, relayRpcId: l, topic: r, method: p, params: m, expiry: o, throwOnFailedPublish: !0, tvf: this.getTVFParams(c, m) }).catch((I) => h(I)), this.client.events.emit("session_request_sent", { topic: r, request: i, chainId: n, id: c }), y();
      }), new Promise(async (y) => {
        var I;
        if (!((I = a.sessionConfig) != null && I.disableDeepLink)) {
          const N = await hf(this.client.core.storage, sl);
          await lf({ id: c, topic: r, wcDeepLink: N });
        }
        y();
      }), d()]).then((y) => y[2]);
    }), O(this, "respond", async (s) => {
      var n, i;
      this.isInitialized();
      const r = this.client.core.eventClient.createEvent({ properties: { topic: (s == null ? void 0 : s.topic) || ((i = (n = s == null ? void 0 : s.response) == null ? void 0 : n.id) == null ? void 0 : i.toString()), trace: [jt.session_request_response_started] } });
      try {
        await this.isValidRespond(s);
      } catch (u) {
        throw r.addTrace(u == null ? void 0 : u.message), r.setError(Zs.session_request_response_validation_failure), u;
      }
      r.addTrace(jt.session_request_response_validation_success);
      const { topic: o, response: a } = s, { id: c } = a, l = this.client.session.get(o);
      l.transportType === Oe.relay && await this.confirmOnlineStateOrThrow();
      const d = this.getAppLinkIfEnabled(l.peer.metadata, l.transportType);
      try {
        r.addTrace(jt.session_request_response_publish_started), ps(a) ? await this.sendResult({ id: c, topic: o, result: a.result, throwOnFailedPublish: !0, appLink: d }) : ts(a) && await this.sendError({ id: c, topic: o, error: a.error, appLink: d }), this.cleanupAfterResponse(s);
      } catch (u) {
        throw r.addTrace(u == null ? void 0 : u.message), r.setError(Zs.session_request_response_publish_failure), u;
      }
    }), O(this, "ping", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(s);
      } catch (i) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), i;
      }
      const { topic: n } = s;
      if (this.client.session.keys.includes(n)) {
        const i = Os(), r = an().toString(), { done: o, resolve: a, reject: c } = sn(B.FIVE_MINUTES, "Ping request expired without receiving any acknowledgement");
        this.events.once(Ie("session_ping", i), ({ error: l }) => {
          l ? c(l) : a();
        }), await Promise.all([this.sendRequest({ topic: n, method: "wc_sessionPing", params: {}, throwOnFailedPublish: !0, clientRpcId: i, relayRpcId: r }), o()]);
      } else this.client.core.pairing.pairings.keys.includes(n) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: n }));
    }), O(this, "emit", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(s);
      const { topic: n, event: i, chainId: r } = s, o = an().toString(), a = Os();
      await this.sendRequest({ topic: n, method: "wc_sessionEvent", params: { event: i, chainId: r }, throwOnFailedPublish: !0, relayRpcId: o, clientRpcId: a });
    }), O(this, "disconnect", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(s);
      const { topic: n } = s;
      if (this.client.session.keys.includes(n)) await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: xe("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: n, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(n)) await this.client.core.pairing.disconnect({ topic: n });
      else {
        const { message: i } = L("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
        throw new Error(i);
      }
    }), O(this, "find", (s) => (this.isInitialized(), this.client.session.getAll().filter((n) => ky(n, s)))), O(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), O(this, "authenticate", async (s, n) => {
      var i;
      this.isInitialized(), this.isValidAuthenticate(s);
      const r = n && this.client.core.linkModeSupportedApps.includes(n) && ((i = this.client.metadata.redirect) == null ? void 0 : i.linkMode), o = r ? Oe.link_mode : Oe.relay;
      o === Oe.relay && await this.confirmOnlineStateOrThrow();
      const { chains: a, statement: c = "", uri: l, domain: d, nonce: u, type: h, exp: p, nbf: g, methods: m = [], expiry: y } = s, I = [...s.resources || []], { topic: N, uri: _ } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: o });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: N, uri: _ } });
      const F = await this.client.core.crypto.generateKeyPair(), Y = Yi(F);
      if (await Promise.all([this.client.auth.authKeys.set(Xi, { responseTopic: Y, publicKey: F }), this.client.auth.pairingTopics.set(Y, { topic: Y, pairingTopic: N })]), await this.client.core.relayer.subscribe(Y, { transportType: o }), this.client.logger.info(`sending request to new pairing topic: ${N}`), m.length > 0) {
        const { namespace: v } = As(a[0]);
        let P = kg(v, "request", m);
        Gi(I) && (P = Pg(P, I.pop())), I.push(P);
      }
      const H = y && y > Ve.wc_sessionAuthenticate.req.ttl ? y : Ve.wc_sessionAuthenticate.req.ttl, Q = { authPayload: { type: h ?? "caip122", chains: a, statement: c, aud: l, domain: d, version: "1", nonce: u, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: p, nbf: g, resources: I }, requester: { publicKey: F, metadata: this.client.metadata }, expiryTimestamp: $e(H) }, J = { eip155: { chains: a, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m])], events: ["chainChanged", "accountsChanged"] } }, T = { requiredNamespaces: {}, optionalNamespaces: J, relays: [{ protocol: "irn" }], pairingTopic: N, proposer: { publicKey: F, metadata: this.client.metadata }, expiryTimestamp: $e(Ve.wc_sessionPropose.req.ttl), id: Os() }, { done: z, resolve: se, reject: x } = sn(H, "Request expired"), w = Os(), b = Ie("session_connect", T.id), E = Ie("session_request", w), S = async ({ error: v, session: P }) => {
        this.events.off(E, U), v ? x(v) : P && se({ session: P });
      }, U = async (v) => {
        var P, K, j;
        if (await this.deletePendingAuthRequest(w, { message: "fulfilled", code: 0 }), v.error) {
          const he = xe("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return v.error.code === he.code ? void 0 : (this.events.off(b, S), x(v.error.message));
        }
        await this.deleteProposal(T.id), this.events.off(b, S);
        const { cacaos: fe, responder: re } = v.result, ne = [], pe = [];
        for (const he of fe) {
          await Za({ cacao: he, projectId: this.client.core.projectId }) || (this.client.logger.error(he, "Signature verification failed"), x(xe("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: Ue } = he, Mt = Gi(Ue.resources), Ts = [bo(Ue.iss)], Ys = rr(Ue.iss);
          if (Mt) {
            const bn = Qa(Mt), Pu = ec(Mt);
            ne.push(...bn), Ts.push(...Pu);
          }
          for (const bn of Ts) pe.push(`${bn}:${Ys}`);
        }
        const ue = await this.client.core.crypto.generateSharedKey(F, re.publicKey);
        let _e;
        ne.length > 0 && (_e = { topic: ue, acknowledged: !0, self: { publicKey: F, metadata: this.client.metadata }, peer: re, controller: re.publicKey, expiry: $e(_n), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: N, namespaces: Sc([...new Set(ne)], [...new Set(pe)]), transportType: o }, await this.client.core.relayer.subscribe(ue, { transportType: o }), await this.client.session.set(ue, _e), N && await this.client.core.pairing.updateMetadata({ topic: N, metadata: re.metadata }), _e = this.client.session.get(ue)), (P = this.client.metadata.redirect) != null && P.linkMode && (K = re.metadata.redirect) != null && K.linkMode && (j = re.metadata.redirect) != null && j.universal && n && (this.client.core.addLinkModeSupportedApp(re.metadata.redirect.universal), this.client.session.update(ue, { transportType: Oe.link_mode })), se({ auths: fe, session: _e });
      };
      this.events.once(b, S), this.events.once(E, U);
      let $;
      try {
        if (r) {
          const v = ns("wc_sessionAuthenticate", Q, w);
          this.client.core.history.set(N, v);
          const P = await this.client.core.crypto.encode("", v, { type: Si, encoding: qs });
          $ = Bi(n, N, P);
        } else await Promise.all([this.sendRequest({ topic: N, method: "wc_sessionAuthenticate", params: Q, expiry: s.expiry, throwOnFailedPublish: !0, clientRpcId: w }), this.sendRequest({ topic: N, method: "wc_sessionPropose", params: T, expiry: Ve.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: T.id })]);
      } catch (v) {
        throw this.events.off(b, S), this.events.off(E, U), v;
      }
      return await this.setProposal(T.id, T), await this.setAuthRequest(w, { request: ze(ve({}, Q), { verifyContext: {} }), pairingTopic: N, transportType: o }), { uri: $ ?? _, response: z };
    }), O(this, "approveSessionAuthenticate", async (s) => {
      const { id: n, auths: i } = s, r = this.client.core.eventClient.createEvent({ properties: { topic: n.toString(), trace: [Qs.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (y) {
        throw r.setError(ei.no_internet_connection), y;
      }
      const o = this.getPendingAuthRequest(n);
      if (!o) throw r.setError(ei.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${n}`);
      const a = o.transportType || Oe.relay;
      a === Oe.relay && await this.confirmOnlineStateOrThrow();
      const c = o.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), d = Yi(c), u = { type: Is, receiverPublicKey: c, senderPublicKey: l }, h = [], p = [];
      for (const y of i) {
        if (!await Za({ cacao: y, projectId: this.client.core.projectId })) {
          r.setError(ei.invalid_cacao);
          const Y = xe("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: n, topic: d, error: Y, encodeOpts: u }), new Error(Y.message);
        }
        r.addTrace(Qs.cacaos_verified);
        const { p: I } = y, N = Gi(I.resources), _ = [bo(I.iss)], F = rr(I.iss);
        if (N) {
          const Y = Qa(N), H = ec(N);
          h.push(...Y), _.push(...H);
        }
        for (const Y of _) p.push(`${Y}:${F}`);
      }
      const g = await this.client.core.crypto.generateSharedKey(l, c);
      r.addTrace(Qs.create_authenticated_session_topic);
      let m;
      if ((h == null ? void 0 : h.length) > 0) {
        m = { topic: g, acknowledged: !0, self: { publicKey: l, metadata: this.client.metadata }, peer: { publicKey: c, metadata: o.requester.metadata }, controller: c, expiry: $e(_n), authentication: i, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: o.pairingTopic, namespaces: Sc([...new Set(h)], [...new Set(p)]), transportType: a }, r.addTrace(Qs.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(g, { transportType: a });
        } catch (y) {
          throw r.setError(ei.subscribe_authenticated_session_topic_failure), y;
        }
        r.addTrace(Qs.subscribe_authenticated_session_topic_success), await this.client.session.set(g, m), r.addTrace(Qs.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: o.pairingTopic, metadata: o.requester.metadata });
      }
      r.addTrace(Qs.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: d, id: n, result: { cacaos: i, responder: { publicKey: l, metadata: this.client.metadata } }, encodeOpts: u, throwOnFailedPublish: !0, appLink: this.getAppLinkIfEnabled(o.requester.metadata, a) });
      } catch (y) {
        throw r.setError(ei.authenticated_session_approve_publish_failure), y;
      }
      return await this.client.auth.requests.delete(n, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: o.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: r.eventId }), { session: m };
    }), O(this, "rejectSessionAuthenticate", async (s) => {
      this.isInitialized();
      const { id: n, reason: i } = s, r = this.getPendingAuthRequest(n);
      if (!r) throw new Error(`Could not find pending auth request with id ${n}`);
      r.transportType === Oe.relay && await this.confirmOnlineStateOrThrow();
      const o = r.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = Yi(o), l = { type: Is, receiverPublicKey: o, senderPublicKey: a };
      await this.sendError({ id: n, topic: c, error: i, encodeOpts: l, rpcOpts: Ve.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(r.requester.metadata, r.transportType) }), await this.client.auth.requests.delete(n, { message: "rejected", code: 0 }), await this.deleteProposal(n);
    }), O(this, "formatAuthMessage", (s) => {
      this.isInitialized();
      const { request: n, iss: i } = s;
      return pd(n, i);
    }), O(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const s = this.relayMessageCache.shift();
          s && await this.onRelayMessage(s);
        } catch (s) {
          this.client.logger.error(s);
        }
      }, 50);
    }), O(this, "cleanupDuplicatePairings", async (s) => {
      if (s.pairingTopic) try {
        const n = this.client.core.pairing.pairings.get(s.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((r) => {
          var o, a;
          return ((o = r.peerMetadata) == null ? void 0 : o.url) && ((a = r.peerMetadata) == null ? void 0 : a.url) === s.peer.metadata.url && r.topic && r.topic !== n.topic;
        });
        if (i.length === 0) return;
        this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((r) => this.client.core.pairing.disconnect({ topic: r.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (n) {
        this.client.logger.error(n);
      }
    }), O(this, "deleteSession", async (s) => {
      var n;
      const { topic: i, expirerHasDeleted: r = !1, emitEvent: o = !0, id: a = 0 } = s, { self: c } = this.client.session.get(i);
      await this.client.core.relayer.unsubscribe(i), await this.client.session.delete(i, xe("USER_DISCONNECTED")), this.addToRecentlyDeleted(i, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i), r || this.client.core.expirer.del(i), this.client.core.storage.removeItem(sl).catch((l) => this.client.logger.warn(l)), i === ((n = this.sessionRequestQueue.queue[0]) == null ? void 0 : n.topic) && (this.sessionRequestQueue.state = Qt.idle), await Promise.all(this.getPendingSessionRequests().filter((l) => l.topic === i).map((l) => this.deletePendingSessionRequest(l.id, xe("USER_DISCONNECTED")))), o && this.client.events.emit("session_delete", { id: a, topic: i });
    }), O(this, "deleteProposal", async (s, n) => {
      if (n) try {
        const i = this.client.proposal.get(s), r = this.client.core.eventClient.getEvent({ topic: i.pairingTopic });
        r == null || r.setError(Zs.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(s, xe("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(s)]), this.addToRecentlyDeleted(s, "proposal");
    }), O(this, "deletePendingSessionRequest", async (s, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(s, n), i ? Promise.resolve() : this.client.core.expirer.del(s)]), this.addToRecentlyDeleted(s, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((r) => r.id !== s), i && (this.sessionRequestQueue.state = Qt.idle, this.client.events.emit("session_request_expire", { id: s }));
    }), O(this, "deletePendingAuthRequest", async (s, n, i = !1) => {
      await Promise.all([this.client.auth.requests.delete(s, n), i ? Promise.resolve() : this.client.core.expirer.del(s)]);
    }), O(this, "setExpiry", async (s, n) => {
      this.client.session.keys.includes(s) && (this.client.core.expirer.set(s, n), await this.client.session.update(s, { expiry: n }));
    }), O(this, "setProposal", async (s, n) => {
      this.client.core.expirer.set(s, $e(Ve.wc_sessionPropose.req.ttl)), await this.client.proposal.set(s, n);
    }), O(this, "setAuthRequest", async (s, n) => {
      const { request: i, pairingTopic: r, transportType: o = Oe.relay } = n;
      this.client.core.expirer.set(s, i.expiryTimestamp), await this.client.auth.requests.set(s, { authPayload: i.authPayload, requester: i.requester, expiryTimestamp: i.expiryTimestamp, id: s, pairingTopic: r, verifyContext: i.verifyContext, transportType: o });
    }), O(this, "setPendingSessionRequest", async (s) => {
      const { id: n, topic: i, params: r, verifyContext: o } = s, a = r.request.expiryTimestamp || $e(Ve.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(n, a), await this.client.pendingRequest.set(n, { id: n, topic: i, params: r, verifyContext: o });
    }), O(this, "sendRequest", async (s) => {
      const { topic: n, method: i, params: r, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: d, tvf: u, publishOpts: h = {} } = s, p = ns(i, r, c);
      let g;
      const m = !!d;
      try {
        const N = m ? qs : pt;
        g = await this.client.core.crypto.encode(n, p, { encoding: N });
      } catch (N) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${n} failed`), N;
      }
      let y;
      if (sC.includes(i)) {
        const N = Ut(JSON.stringify(p)), _ = Ut(g);
        y = await this.client.core.verify.register({ id: _, decryptedId: N });
      }
      const I = ve(ve({}, Ve[i].req), h);
      if (I.attestation = y, o && (I.ttl = o), a && (I.id = a), this.client.core.history.set(n, p), m) {
        const N = Bi(d, n, g);
        await global.Linking.openURL(N, this.client.name);
      } else I.tvf = ze(ve({}, u), { correlationId: p.id }), l ? (I.internal = ze(ve({}, I.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, g, I)) : this.client.core.relayer.publish(n, g, I).catch((N) => this.client.logger.error(N));
      return p.id;
    }), O(this, "sendProposeSession", async (s) => {
      const { proposal: n, publishOpts: i } = s, r = ns("wc_sessionPropose", n, n.id);
      this.client.core.history.set(n.pairingTopic, r);
      const o = await this.client.core.crypto.encode(n.pairingTopic, r, { encoding: pt }), a = Ut(JSON.stringify(r)), c = Ut(o), l = await this.client.core.verify.register({ id: c, decryptedId: a });
      await this.client.core.relayer.publishCustom({ payload: { pairingTopic: n.pairingTopic, sessionProposal: o }, opts: ze(ve({}, i), { publishMethod: "wc_proposeSession", attestation: l }) });
    }), O(this, "sendApproveSession", async (s) => {
      const { sessionTopic: n, pairingProposalResponse: i, proposal: r, sessionSettleRequest: o, publishOpts: a } = s, c = yi(r.id, i), l = await this.client.core.crypto.encode(r.pairingTopic, c, { encoding: pt }), d = ns("wc_sessionSettle", o, a == null ? void 0 : a.id), u = await this.client.core.crypto.encode(n, d, { encoding: pt });
      this.client.core.history.set(n, d), await this.client.core.relayer.publishCustom({ payload: { sessionTopic: n, pairingTopic: r.pairingTopic, sessionProposalResponse: l, sessionSettlementRequest: u }, opts: ze(ve({}, a), { publishMethod: "wc_approveSession" }) });
    }), O(this, "sendResult", async (s) => {
      const { id: n, topic: i, result: r, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = s, l = yi(n, r);
      let d;
      const u = c && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const g = u ? qs : pt;
        d = await this.client.core.crypto.encode(i, l, ze(ve({}, a || {}), { encoding: g }));
      } catch (g) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${i} failed`), g;
      }
      let h, p;
      try {
        h = await this.client.core.history.get(i, n);
        const g = h.request;
        try {
          p = this.getTVFParams(n, g.params, r);
        } catch (m) {
          this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${m == null ? void 0 : m.message}`);
        }
      } catch (g) {
        throw this.client.logger.error(`sendResult() -> history.get(${i}, ${n}) failed`), g;
      }
      if (u) {
        const g = Bi(c, i, d);
        await global.Linking.openURL(g, this.client.name);
      } else {
        const g = h.request.method, m = Ve[g].res;
        m.tvf = ze(ve({}, p), { correlationId: n }), o ? (m.internal = ze(ve({}, m.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, d, m)) : this.client.core.relayer.publish(i, d, m).catch((y) => this.client.logger.error(y));
      }
      await this.client.core.history.resolve(l);
    }), O(this, "sendError", async (s) => {
      const { id: n, topic: i, error: r, encodeOpts: o, rpcOpts: a, appLink: c } = s, l = Ol(n, r);
      let d;
      const u = c && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const p = u ? qs : pt;
        d = await this.client.core.crypto.encode(i, l, ze(ve({}, o || {}), { encoding: p }));
      } catch (p) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${i} failed`), p;
      }
      let h;
      try {
        h = await this.client.core.history.get(i, n);
      } catch (p) {
        throw this.client.logger.error(`sendError() -> history.get(${i}, ${n}) failed`), p;
      }
      if (u) {
        const p = Bi(c, i, d);
        await global.Linking.openURL(p, this.client.name);
      } else {
        const p = h.request.method, g = a || Ve[p].res;
        this.client.core.relayer.publish(i, d, g);
      }
      await this.client.core.history.resolve(l);
    }), O(this, "cleanup", async () => {
      const s = [], n = [];
      this.client.session.getAll().forEach((i) => {
        let r = !1;
        is(i.expiry) && (r = !0), this.client.core.crypto.keychain.has(i.topic) || (r = !0), r && s.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        is(i.expiryTimestamp) && n.push(i.id);
      }), await Promise.all([...s.map((i) => this.deleteSession({ topic: i })), ...n.map((i) => this.deleteProposal(i))]);
    }), O(this, "onProviderMessageEvent", async (s) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(s) : await this.onRelayMessage(s);
    }), O(this, "onRelayEventRequest", async (s) => {
      this.requestQueue.queue.push(s), await this.processRequestsQueue();
    }), O(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === Qt.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Qt.active;
        const s = this.requestQueue.queue.shift();
        if (s) try {
          await this.processRequest(s);
        } catch (n) {
          this.client.logger.warn(n);
        }
      }
      this.requestQueue.state = Qt.idle;
    }), O(this, "processRequest", async (s) => {
      const { topic: n, payload: i, attestation: r, transportType: o, encryptedId: a } = s, c = i.method;
      if (!this.shouldIgnorePairingRequest({ topic: n, requestMethod: c })) switch (c) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: n, payload: i, attestation: r, encryptedId: a });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(n, i);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(n, i);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(n, i);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(n, i);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(n, i);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: n, payload: i, attestation: r, encryptedId: a, transportType: o });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(n, i);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: n, payload: i, attestation: r, encryptedId: a, transportType: o });
        default:
          return this.client.logger.info(`Unsupported request method ${c}`);
      }
    }), O(this, "onRelayEventResponse", async (s) => {
      const { topic: n, payload: i, transportType: r } = s, o = (await this.client.core.history.get(n, i.id)).request.method;
      switch (o) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(n, i, r);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(n, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(n, i);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(n, i);
        case "wc_sessionPing":
          return this.onSessionPingResponse(n, i);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(n, i);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(n, i);
        default:
          return this.client.logger.info(`Unsupported response method ${o}`);
      }
    }), O(this, "onRelayEventUnknownPayload", (s) => {
      const { topic: n } = s, { message: i } = L("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }), O(this, "shouldIgnorePairingRequest", (s) => {
      const { topic: n, requestMethod: i } = s, r = this.expectedPairingMethodMap.get(n);
      return !r || r.includes(i) ? !1 : !!(r.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), O(this, "onSessionProposeRequest", async (s) => {
      const { topic: n, payload: i, attestation: r, encryptedId: o } = s, { params: a, id: c } = i;
      try {
        const l = this.client.core.eventClient.getEvent({ topic: n });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l == null || l.setError(gs.proposal_listener_not_found)), this.isValidConnect(ve({}, i.params));
        const d = a.expiryTimestamp || $e(Ve.wc_sessionPropose.req.ttl), u = ve({ id: c, pairingTopic: n, expiryTimestamp: d, attestation: r, encryptedId: o }, a);
        await this.setProposal(c, u);
        const h = await this.getVerifyContext({ attestationId: r, hash: Ut(JSON.stringify(i)), encryptedId: o, metadata: u.proposer.metadata });
        l == null || l.addTrace(es.emit_session_proposal), this.client.events.emit("session_proposal", { id: c, params: u, verifyContext: h });
      } catch (l) {
        await this.sendError({ id: c, topic: n, error: l, rpcOpts: Ve.wc_sessionPropose.autoReject }), this.client.logger.error(l);
      }
    }), O(this, "onSessionProposeResponse", async (s, n, i) => {
      const { id: r } = n;
      if (ps(n)) {
        const { result: o } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: o });
        const a = this.client.proposal.get(r);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const c = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const l = o.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const d = await this.client.core.crypto.generateSharedKey(c, l);
        this.pendingSessions.set(r, { sessionTopic: d, pairingTopic: s, proposalId: r, publicKey: c });
        const u = await this.client.core.relayer.subscribe(d, { transportType: i });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: u }), await this.client.core.pairing.activate({ topic: s });
      } else if (ts(n)) {
        await this.deleteProposal(r);
        const o = Ie("session_connect", r);
        if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
        this.events.emit(o, { error: n.error });
      }
    }), O(this, "onSessionSettleRequest", async (s, n) => {
      const { id: i, params: r } = n;
      try {
        this.isValidSessionSettleRequest(r);
        const { relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: d, scopedProperties: u, sessionConfig: h, proposalRequestsResponses: p } = n.params, g = [...this.pendingSessions.values()].find((I) => I.sessionTopic === s);
        if (!g) return this.client.logger.error(`Pending session not found for topic ${s}`);
        const m = this.client.proposal.get(g.proposalId), y = ze(ve(ve(ve({ topic: s, relay: o, expiry: c, namespaces: l, acknowledged: !0, pairingTopic: g.pairingTopic, requiredNamespaces: m.requiredNamespaces, optionalNamespaces: m.optionalNamespaces, controller: a.publicKey, self: { publicKey: g.publicKey, metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, d && { sessionProperties: d }), u && { scopedProperties: u }), h && { sessionConfig: h }), { transportType: Oe.relay, authentication: p == null ? void 0 : p.authentication, walletPayResult: p == null ? void 0 : p.walletPay });
        await this.client.session.set(y.topic, y), await this.setExpiry(y.topic, y.expiry), await this.client.core.pairing.updateMetadata({ topic: g.pairingTopic, metadata: y.peer.metadata }), this.pendingSessions.delete(g.proposalId), this.deleteProposal(g.proposalId, !1), this.cleanupDuplicatePairings(y), await this.sendResult({ id: n.id, topic: s, throwOnFailedPublish: !0, result: !0 }), this.client.events.emit("session_connect", { session: y }), this.events.emit(Ie("session_connect", g.proposalId), { session: y });
      } catch (o) {
        await this.sendError({ id: i, topic: s, error: o }), this.client.logger.error(o);
      }
    }), O(this, "onSessionSettleResponse", async (s, n) => {
      const { id: i } = n;
      ps(n) ? (await this.client.session.update(s, { acknowledged: !0 }), this.events.emit(Ie("session_approve", i), {})) : ts(n) && (await this.client.session.delete(s, xe("USER_DISCONNECTED")), this.events.emit(Ie("session_approve", i), { error: n.error }));
    }), O(this, "onSessionUpdateRequest", async (s, n) => {
      const { params: i, id: r } = n;
      try {
        const o = `${s}_session_update`, a = Zn.get(o);
        if (a && this.isRequestOutOfSync(a, r)) {
          this.client.logger.warn(`Discarding out of sync request - ${r}`), this.sendError({ id: r, topic: s, error: xe("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(ve({ topic: s }, i));
        try {
          Zn.set(o, r), await this.client.session.update(s, { namespaces: i.namespaces }), await this.sendResult({ id: r, topic: s, result: !0 });
        } catch (c) {
          throw Zn.delete(o), c;
        }
        this.client.events.emit("session_update", { id: r, topic: s, params: i });
      } catch (o) {
        await this.sendError({ id: r, topic: s, error: o }), this.client.logger.error(o);
      }
    }), O(this, "isRequestOutOfSync", (s, n) => n.toString().slice(0, -3) < s.toString().slice(0, -3)), O(this, "onSessionUpdateResponse", (s, n) => {
      const { id: i } = n, r = Ie("session_update", i);
      if (this.events.listenerCount(r) === 0) throw new Error(`emitting ${r} without any listeners`);
      ps(n) ? this.events.emit(Ie("session_update", i), {}) : ts(n) && this.events.emit(Ie("session_update", i), { error: n.error });
    }), O(this, "onSessionExtendRequest", async (s, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: s }), await this.setExpiry(s, $e(_n)), await this.sendResult({ id: i, topic: s, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: s });
      } catch (r) {
        await this.sendError({ id: i, topic: s, error: r }), this.client.logger.error(r);
      }
    }), O(this, "onSessionExtendResponse", (s, n) => {
      const { id: i } = n, r = Ie("session_extend", i);
      if (this.events.listenerCount(r) === 0) throw new Error(`emitting ${r} without any listeners`);
      ps(n) ? this.events.emit(Ie("session_extend", i), {}) : ts(n) && this.events.emit(Ie("session_extend", i), { error: n.error });
    }), O(this, "onSessionPingRequest", async (s, n) => {
      const { id: i } = n;
      try {
        this.isValidPing({ topic: s }), await this.sendResult({ id: i, topic: s, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_ping", { id: i, topic: s });
      } catch (r) {
        await this.sendError({ id: i, topic: s, error: r }), this.client.logger.error(r);
      }
    }), O(this, "onSessionPingResponse", (s, n) => {
      const { id: i } = n, r = Ie("session_ping", i);
      setTimeout(() => {
        if (this.events.listenerCount(r) === 0) throw new Error(`emitting ${r} without any listeners 2176`);
        ps(n) ? this.events.emit(Ie("session_ping", i), {}) : ts(n) && this.events.emit(Ie("session_ping", i), { error: n.error });
      }, 500);
    }), O(this, "onSessionDeleteRequest", async (s, n) => {
      const { id: i } = n;
      try {
        await this.isValidDisconnect({ topic: s, reason: n.params }), this.cleanupPendingSentRequestsForTopic({ topic: s, error: xe("USER_DISCONNECTED") }), await this.deleteSession({ topic: s, id: i });
      } catch (r) {
        this.client.logger.error(r);
      }
    }), O(this, "onSessionRequest", async (s) => {
      var n, i, r;
      const { topic: o, payload: a, attestation: c, encryptedId: l, transportType: d } = s, { id: u, params: h } = a;
      try {
        await this.isValidRequest(ve({ topic: o }, h));
        const p = this.client.session.get(o), g = await this.getVerifyContext({ attestationId: c, hash: Ut(JSON.stringify(ns("wc_sessionRequest", h, u))), encryptedId: l, metadata: p.peer.metadata, transportType: d }), m = { id: u, topic: o, params: h, verifyContext: g };
        await this.setPendingSessionRequest(m), d === Oe.link_mode && (n = p.peer.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp((i = p.peer.metadata.redirect) == null ? void 0 : i.universal), (r = this.client.signConfig) != null && r.disableRequestQueue ? this.emitSessionRequest(m) : (this.addSessionRequestToSessionRequestQueue(m), this.processSessionRequestQueue());
      } catch (p) {
        await this.sendError({ id: u, topic: o, error: p }), this.client.logger.error(p);
      }
    }), O(this, "onSessionRequestResponse", (s, n) => {
      const { id: i } = n, r = Ie("session_request", i);
      if (this.events.listenerCount(r) === 0) throw new Error(`emitting ${r} without any listeners`);
      ps(n) ? this.events.emit(Ie("session_request", i), { result: n.result }) : ts(n) && this.events.emit(Ie("session_request", i), { error: n.error });
    }), O(this, "onSessionEventRequest", async (s, n) => {
      const { id: i, params: r } = n;
      try {
        const o = `${s}_session_event_${r.event.name}`, a = Zn.get(o);
        if (a && this.isRequestOutOfSync(a, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(ve({ topic: s }, r)), this.client.events.emit("session_event", { id: i, topic: s, params: r }), Zn.set(o, i);
      } catch (o) {
        await this.sendError({ id: i, topic: s, error: o }), this.client.logger.error(o);
      }
    }), O(this, "onSessionAuthenticateResponse", (s, n) => {
      const { id: i } = n;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: s, payload: n }), ps(n) ? this.events.emit(Ie("session_request", i), { result: n.result }) : ts(n) && this.events.emit(Ie("session_request", i), { error: n.error });
    }), O(this, "onSessionAuthenticateRequest", async (s) => {
      var n;
      const { topic: i, payload: r, attestation: o, encryptedId: a, transportType: c } = s;
      try {
        const { requester: l, authPayload: d, expiryTimestamp: u } = r.params, h = await this.getVerifyContext({ attestationId: o, hash: Ut(JSON.stringify(r)), encryptedId: a, metadata: l.metadata, transportType: c }), p = { requester: l, pairingTopic: i, id: r.id, authPayload: d, verifyContext: h, expiryTimestamp: u };
        await this.setAuthRequest(r.id, { request: p, pairingTopic: i, transportType: c }), c === Oe.link_mode && (n = l.metadata.redirect) != null && n.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: i, params: r.params, id: r.id, verifyContext: h });
      } catch (l) {
        this.client.logger.error(l);
        const d = r.params.requester.publicKey, u = await this.client.core.crypto.generateKeyPair(), h = this.getAppLinkIfEnabled(r.params.requester.metadata, c), p = { type: Is, receiverPublicKey: d, senderPublicKey: u };
        await this.sendError({ id: r.id, topic: i, error: l, encodeOpts: p, rpcOpts: Ve.wc_sessionAuthenticate.autoReject, appLink: h });
      }
    }), O(this, "addSessionRequestToSessionRequestQueue", (s) => {
      this.sessionRequestQueue.queue.push(s);
    }), O(this, "cleanupAfterResponse", (s) => {
      this.deletePendingSessionRequest(s.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Qt.idle, this.processSessionRequestQueue();
      }, B.toMiliseconds(this.requestQueueDelay));
    }), O(this, "cleanupPendingSentRequestsForTopic", ({ topic: s, error: n }) => {
      const i = this.client.core.history.pending;
      i.length > 0 && i.filter((r) => r.topic === s && r.request.method === "wc_sessionRequest").forEach((r) => {
        this.events.emit(Ie("session_request", r.request.id), { error: n });
      });
    }), O(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === Qt.active) {
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
      } catch (n) {
        this.client.logger.error(n);
      }
    }), O(this, "emitSessionRequest", (s) => {
      if (this.emittedSessionRequests.has(s.id)) {
        this.client.logger.warn({ id: s.id }, `Skipping emitting \`session_request\` event for duplicate request. id: ${s.id}`);
        return;
      }
      this.sessionRequestQueue.state = Qt.active, this.emittedSessionRequests.add(s.id), this.client.events.emit("session_request", s);
    }), O(this, "onPairingCreated", (s) => {
      if (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods), s.active) return;
      const n = this.client.proposal.getAll().find((i) => i.pairingTopic === s.topic);
      n && this.onSessionProposeRequest({ topic: s.topic, payload: ns("wc_sessionPropose", ze(ve({}, n), { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties, scopedProperties: n.scopedProperties }), n.id), attestation: n.attestation, encryptedId: n.encryptedId });
    }), O(this, "isValidConnect", async (s) => {
      if (!ut(s)) {
        const { message: l } = L("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(s)}`);
        throw new Error(l);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: r, sessionProperties: o, scopedProperties: a, relays: c } = s;
      if (je(n) || await this.isValidPairingTopic(n), !qy(c)) {
        const { message: l } = L("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(l);
      }
      if (i && !je(i) && ls(i) !== 0) {
        const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
        ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l), this.validateNamespaces(i, "requiredNamespaces");
      }
      if (r && !je(r) && ls(r) !== 0 && this.validateNamespaces(r, "optionalNamespaces"), o && !je(o) && this.validateSessionProps(o, "sessionProperties"), a && !je(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const l = Object.keys(i || {}).concat(Object.keys(r || {}));
        if (!Object.keys(a).every((d) => l.includes(d.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`);
      }
    }), O(this, "validateNamespaces", (s, n) => {
      const i = Wy(s, "connect()", n);
      if (i) throw new Error(i.message);
    }), O(this, "isValidApprove", async (s) => {
      if (!ut(s)) throw new Error(L("MISSING_OR_INVALID", `approve() params: ${s}`).message);
      const { id: n, namespaces: i, relayProtocol: r, sessionProperties: o, scopedProperties: a } = s;
      this.checkRecentlyDeleted(n), await this.isValidProposalId(n);
      const c = this.client.proposal.get(n), l = Kr(i, "approve()");
      if (l) throw new Error(l.message);
      const d = Oc(c.requiredNamespaces, i, "approve()");
      if (d) throw new Error(d.message);
      if (!Be(r, !0)) {
        const { message: u } = L("MISSING_OR_INVALID", `approve() relayProtocol: ${r}`);
        throw new Error(u);
      }
      if (o && !je(o) && this.validateSessionProps(o, "sessionProperties"), a && !je(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const u = new Set(Object.keys(i));
        if (!Object.keys(a).every((h) => u.has(h.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`);
      }
    }), O(this, "isValidReject", async (s) => {
      if (!ut(s)) {
        const { message: r } = L("MISSING_OR_INVALID", `reject() params: ${s}`);
        throw new Error(r);
      }
      const { id: n, reason: i } = s;
      if (this.checkRecentlyDeleted(n), await this.isValidProposalId(n), !Hy(i)) {
        const { message: r } = L("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(r);
      }
    }), O(this, "isValidSessionSettleRequest", (s) => {
      if (!ut(s)) {
        const { message: l } = L("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
        throw new Error(l);
      }
      const { relay: n, controller: i, namespaces: r, expiry: o } = s;
      if (!Xd(n)) {
        const { message: l } = L("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const a = Dy(i, "onSessionSettleRequest()");
      if (a) throw new Error(a.message);
      const c = Kr(r, "onSessionSettleRequest()");
      if (c) throw new Error(c.message);
      if (is(o)) {
        const { message: l } = L("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }), O(this, "isValidUpdate", async (s) => {
      if (!ut(s)) {
        const { message: c } = L("MISSING_OR_INVALID", `update() params: ${s}`);
        throw new Error(c);
      }
      const { topic: n, namespaces: i } = s;
      this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
      const r = this.client.session.get(n), o = Kr(i, "update()");
      if (o) throw new Error(o.message);
      const a = Oc(r.requiredNamespaces, i, "update()");
      if (a) throw new Error(a.message);
    }), O(this, "isValidExtend", async (s) => {
      if (!ut(s)) {
        const { message: i } = L("MISSING_OR_INVALID", `extend() params: ${s}`);
        throw new Error(i);
      }
      const { topic: n } = s;
      this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
    }), O(this, "isValidRequest", async (s) => {
      if (!ut(s)) {
        const { message: c } = L("MISSING_OR_INVALID", `request() params: ${s}`);
        throw new Error(c);
      }
      const { topic: n, request: i, chainId: r, expiry: o } = s;
      this.checkRecentlyDeleted(n), await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!Tc(a, r)) {
        const { message: c } = L("MISSING_OR_INVALID", `request() chainId: ${r}`);
        throw new Error(c);
      }
      if (!Ky(i)) {
        const { message: c } = L("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(c);
      }
      if (!Gy(a, r, i.method)) {
        const { message: c } = L("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(c);
      }
      this.validateRequestExpiry(o);
    }), O(this, "isValidRespond", async (s) => {
      var n;
      if (!ut(s)) {
        const { message: a } = L("MISSING_OR_INVALID", `respond() params: ${s}`);
        throw new Error(a);
      }
      const { topic: i, response: r } = s;
      try {
        await this.isValidSessionTopic(i);
      } catch (a) {
        throw (n = s == null ? void 0 : s.response) != null && n.id && this.cleanupAfterResponse(s), a;
      }
      if (!Vy(r)) {
        const { message: a } = L("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
        throw new Error(a);
      }
      const o = this.client.pendingRequest.get(r.id);
      if (o.topic !== i) {
        const { message: a } = L("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${r.id}, expected topic: ${o.topic}, received topic: ${i}`);
        throw new Error(a);
      }
    }), O(this, "isValidPing", async (s) => {
      if (!ut(s)) {
        const { message: i } = L("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(i);
      }
      const { topic: n } = s;
      await this.isValidSessionOrPairingTopic(n);
    }), O(this, "isValidEmit", async (s) => {
      if (!ut(s)) {
        const { message: a } = L("MISSING_OR_INVALID", `emit() params: ${s}`);
        throw new Error(a);
      }
      const { topic: n, event: i, chainId: r } = s;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!Tc(o, r)) {
        const { message: a } = L("MISSING_OR_INVALID", `emit() chainId: ${r}`);
        throw new Error(a);
      }
      if (!zy(i)) {
        const { message: a } = L("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
      if (!Yy(o, r, i.name)) {
        const { message: a } = L("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }), O(this, "isValidDisconnect", async (s) => {
      if (!ut(s)) {
        const { message: i } = L("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(i);
      }
      const { topic: n } = s;
      await this.isValidSessionOrPairingTopic(n);
    }), O(this, "isValidAuthenticate", (s) => {
      const { chains: n, uri: i, domain: r, nonce: o } = s;
      if (!Array.isArray(n) || n.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!Be(i, !1)) throw new Error("uri is required parameter");
      if (!Be(r, !1)) throw new Error("domain is required parameter");
      if (!Be(o, !1)) throw new Error("nonce is required parameter");
      if ([...new Set(n.map((c) => As(c).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: a } = As(n[0]);
      if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), O(this, "getVerifyContext", async (s) => {
      const { attestationId: n, hash: i, encryptedId: r, metadata: o, transportType: a } = s, c = { verified: { verifyUrl: o.verifyUrl || pi, validation: "UNKNOWN", origin: o.url || "" } };
      try {
        if (a === Oe.link_mode) {
          const d = this.getAppLinkIfEnabled(o, a);
          return c.verified.validation = d && new URL(d).origin === new URL(o.url).origin ? "VALID" : "INVALID", c;
        }
        const l = await this.client.core.verify.resolve({ attestationId: n, hash: i, encryptedId: r, verifyUrl: o.verifyUrl });
        l && (c.verified.origin = l.origin, c.verified.isScam = l.isScam, c.verified.validation = l.origin === new URL(o.url).origin ? "VALID" : "INVALID");
      } catch (l) {
        this.client.logger.warn(l);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`), c;
    }), O(this, "validateSessionProps", (s, n) => {
      Object.values(s).forEach((i, r) => {
        if (i == null) {
          const { message: o } = L("MISSING_OR_INVALID", `${n} must contain an existing value for each key. Received: ${i} for key ${Object.keys(s)[r]}`);
          throw new Error(o);
        }
      });
    }), O(this, "getPendingAuthRequest", (s) => {
      const n = this.client.auth.requests.get(s);
      return typeof n == "object" ? n : void 0;
    }), O(this, "addToRecentlyDeleted", (s, n) => {
      if (this.recentlyDeletedMap.set(s, n), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let i = 0;
        const r = this.recentlyDeletedLimit / 2;
        for (const o of this.recentlyDeletedMap.keys()) {
          if (i++ >= r) break;
          this.recentlyDeletedMap.delete(o);
        }
      }
    }), O(this, "checkRecentlyDeleted", (s) => {
      const n = this.recentlyDeletedMap.get(s);
      if (n) {
        const { message: i } = L("MISSING_OR_INVALID", `Record was recently deleted - ${n}: ${s}`);
        throw new Error(i);
      }
    }), O(this, "isLinkModeEnabled", (s, n) => {
      var i, r, o, a, c, l, d, u, h;
      return !s || n !== Oe.link_mode ? !1 : ((r = (i = this.client.metadata) == null ? void 0 : i.redirect) == null ? void 0 : r.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((d = s == null ? void 0 : s.redirect) == null ? void 0 : d.universal) !== void 0 && ((u = s == null ? void 0 : s.redirect) == null ? void 0 : u.universal) !== "" && ((h = s == null ? void 0 : s.redirect) == null ? void 0 : h.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(s.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), O(this, "getAppLinkIfEnabled", (s, n) => {
      var i;
      return this.isLinkModeEnabled(s, n) ? (i = s == null ? void 0 : s.redirect) == null ? void 0 : i.universal : void 0;
    }), O(this, "handleLinkModeMessage", ({ url: s }) => {
      if (!s || !s.includes("wc_ev") || !s.includes("topic")) return;
      const n = Ma(s, "topic") || "", i = decodeURIComponent(Ma(s, "wc_ev") || ""), r = this.client.session.keys.includes(n);
      r && this.client.session.update(n, { transportType: Oe.link_mode }), this.client.core.dispatchEnvelope({ topic: n, message: i, sessionExists: r });
    }), O(this, "registerLinkModeListeners", async () => {
      var s;
      if (ia() || zs() && (s = this.client.metadata.redirect) != null && s.linkMode) {
        const n = global == null ? void 0 : global.Linking;
        if (typeof n < "u") {
          n.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const i = await n.getInitialURL();
          i && setTimeout(() => {
            this.handleLinkModeMessage({ url: i });
          }, 50);
        }
      }
    }), O(this, "getTVFApproveParams", (s) => {
      try {
        const n = Yd(s.namespaces), i = vy(s.namespaces), r = Ay(s.namespaces), o = s.sessionProperties, a = s.scopedProperties;
        return { approvedChains: n, approvedMethods: i, approvedEvents: r, sessionProperties: o, scopedProperties: a };
      } catch (n) {
        return this.client.logger.warn(n, "Error getting TVF approve params"), {};
      }
    }), O(this, "getTVFParams", (s, n, i) => {
      var r, o, a;
      if (!((r = n.request) != null && r.method)) return {};
      const c = { correlationId: s, rpcMethods: [n.request.method], chainId: n.chainId };
      try {
        const l = this.extractTxHashesFromResult(n.request, i);
        c.txHashes = l, c.contractAddresses = this.isValidContractData(n.request.params) ? [(a = (o = n.request.params) == null ? void 0 : o[0]) == null ? void 0 : a.to] : [];
      } catch (l) {
        this.client.logger.warn(l, "Error getting TVF params");
      }
      return c;
    }), O(this, "isValidContractData", (s) => {
      var n;
      if (!s) return !1;
      try {
        const i = (s == null ? void 0 : s.data) || ((n = s == null ? void 0 : s[0]) == null ? void 0 : n.data);
        if (!i.startsWith("0x")) return !1;
        const r = i.slice(2);
        return /^[0-9a-fA-F]*$/.test(r) ? r.length % 2 === 0 : !1;
      } catch {
      }
      return !1;
    }), O(this, "extractTxHashesFromResult", (s, n) => {
      var i;
      try {
        if (!n) return [];
        const r = s.method, o = eC[r];
        if (r === "sui_signTransaction") return [ug(n.transactionBytes)];
        if (r === "near_signTransaction") return [Ga(n)];
        if (r === "near_signTransactions") return n.map((c) => Ga(c));
        if (r === "xrpl_signTransactionFor" || r === "xrpl_signTransaction") return [(i = n.tx_json) == null ? void 0 : i.hash];
        if (r === "polkadot_signTransaction") return [pw({ transaction: s.params.transactionPayload, signature: n.signature })];
        if (r === "algo_signTxn") return Ns(n) ? n.map((c) => Ya(c)) : [Ya(n)];
        if (r === "cosmos_signDirect") return [pg(n)];
        if (r === "wallet_sendCalls") return fg(n);
        if (typeof n == "string") return [n];
        const a = n[o.key];
        if (Ns(a)) return r === "solana_signAllTransactions" ? a.map((c) => dg(c)) : a;
        if (typeof a == "string") return [a];
      } catch (r) {
        this.client.logger.warn(r, "Error extracting tx hashes from result");
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const e = this.client.session.keys, s = this.client.core.relayer.messages.getWithoutAck(e);
      for (const [n, i] of Object.entries(s)) for (const r of i) try {
        await this.onProviderMessageEvent({ topic: n, message: r, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${n}, message: ${r}`);
      }
    } catch (e) {
      this.client.logger.warn(e, "processPendingMessageEvents failed");
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = L("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Le.message, (e) => {
      this.onProviderMessageEvent(e);
    });
  }
  async onRelayMessage(e) {
    const { topic: s, message: n, attestation: i, transportType: r } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(Xi) ? this.client.auth.authKeys.get(Xi) : { publicKey: void 0 };
    try {
      const a = await this.client.core.crypto.decode(s, n, { receiverPublicKey: o, encoding: r === Oe.link_mode ? qs : pt });
      Xo(a) ? (this.client.core.history.set(s, a), await this.onRelayEventRequest({ topic: s, payload: a, attestation: i, transportType: r, encryptedId: Ut(n) })) : Zo(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: s, payload: a, transportType: r }), this.client.core.history.delete(s, a.id)) : (this.client.logger.error(`onRelayMessage() -> unknown payload: ${JSON.stringify(a)}`), await this.onRelayEventUnknownPayload({ topic: s, payload: a, transportType: r })), await this.client.core.relayer.messages.ack(s, n);
    } catch (a) {
      this.client.logger.error(`onRelayMessage() -> failed to process an inbound message: ${n}`), this.client.logger.error(a);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Rt.expired, async (e) => {
      const { topic: s, id: n } = Jl(e.target);
      if (n && this.client.pendingRequest.keys.includes(n)) return await this.deletePendingSessionRequest(n, L("EXPIRED"), !0);
      if (n && this.client.auth.requests.keys.includes(n)) return await this.deletePendingAuthRequest(n, L("EXPIRED"), !0);
      s ? this.client.session.keys.includes(s) && (await this.deleteSession({ topic: s, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: s })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(nn.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(nn.delete, (e) => {
      this.addToRecentlyDeleted(e.topic, "pairing");
    });
  }
  isValidPairingTopic(e) {
    if (!Be(e, !1)) {
      const { message: s } = L("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(s);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: s } = L("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (is(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: s } = L("EXPIRED", `pairing topic: ${e}`);
      throw new Error(s);
    }
  }
  async isValidSessionTopic(e) {
    if (!Be(e, !1)) {
      const { message: s } = L("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(s);
    }
    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
      const { message: s } = L("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (is(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: s } = L("EXPIRED", `session topic: ${e}`);
      throw new Error(s);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: s } = L("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(s);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
    else if (Be(e, !1)) {
      const { message: s } = L("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(s);
    } else {
      const { message: s } = L("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(s);
    }
  }
  async isValidProposalId(e) {
    if (!jy(e)) {
      const { message: s } = L("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(s);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: s } = L("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (is(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: s } = L("EXPIRED", `proposal id: ${e}`);
      throw new Error(s);
    }
  }
  validateRequestExpiry(e) {
    if (e && !Zy(e, Xr)) {
      const { message: s } = L("MISSING_OR_INVALID", `request() expiry: ${e}. Expiry must be a number (in seconds) between ${Xr.min} and ${Xr.max}`);
      throw new Error(s);
    }
  }
}
class fC extends wn {
  constructor(e, s) {
    super(e, s, XE, ma), this.core = e, this.logger = s;
  }
}
let gC = class extends wn {
  constructor(e, s) {
    super(e, s, ZE, ma), this.core = e, this.logger = s;
  }
};
class mC extends wn {
  constructor(e, s) {
    super(e, s, tC, ma, (n) => n.id), this.core = e, this.logger = s;
  }
}
class yC extends wn {
  constructor(e, s) {
    super(e, s, rC, Nr, () => Xi), this.core = e, this.logger = s;
  }
}
class wC extends wn {
  constructor(e, s) {
    super(e, s, oC, Nr), this.core = e, this.logger = s;
  }
}
class bC extends wn {
  constructor(e, s) {
    super(e, s, aC, Nr, (n) => n.id), this.core = e, this.logger = s;
  }
}
var EC = Object.defineProperty, CC = (t, e, s) => e in t ? EC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Zr = (t, e, s) => CC(t, typeof e != "symbol" ? e + "" : e, s);
class vC {
  constructor(e, s) {
    this.core = e, this.logger = s, Zr(this, "authKeys"), Zr(this, "pairingTopics"), Zr(this, "requests"), this.authKeys = new yC(this.core, this.logger), this.pairingTopics = new wC(this.core, this.logger), this.requests = new bC(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
var AC = Object.defineProperty, IC = (t, e, s) => e in t ? AC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, me = (t, e, s) => IC(t, typeof e != "symbol" ? e + "" : e, s);
class ya extends cp {
  constructor(e) {
    super(e), me(this, "protocol", gu), me(this, "version", mu), me(this, "name", Jr.name), me(this, "metadata"), me(this, "core"), me(this, "logger"), me(this, "events", new mn.EventEmitter()), me(this, "engine"), me(this, "session"), me(this, "proposal"), me(this, "pendingRequest"), me(this, "auth"), me(this, "signConfig"), me(this, "on", (n, i) => this.events.on(n, i)), me(this, "once", (n, i) => this.events.once(n, i)), me(this, "off", (n, i) => this.events.off(n, i)), me(this, "removeListener", (n, i) => this.events.removeListener(n, i)), me(this, "removeAllListeners", (n) => this.events.removeAllListeners(n)), me(this, "connect", async (n) => {
      try {
        return await this.engine.connect(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "pair", async (n) => {
      try {
        return await this.engine.pair(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "approve", async (n) => {
      try {
        return await this.engine.approve(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "reject", async (n) => {
      try {
        return await this.engine.reject(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "update", async (n) => {
      try {
        return await this.engine.update(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "extend", async (n) => {
      try {
        return await this.engine.extend(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "request", async (n) => {
      try {
        return await this.engine.request(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "respond", async (n) => {
      try {
        return await this.engine.respond(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "ping", async (n) => {
      try {
        return await this.engine.ping(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "emit", async (n) => {
      try {
        return await this.engine.emit(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "disconnect", async (n) => {
      try {
        return await this.engine.disconnect(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "find", (n) => {
      try {
        return this.engine.find(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }), me(this, "authenticate", async (n, i) => {
      try {
        return await this.engine.authenticate(n, i);
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }), me(this, "formatAuthMessage", (n) => {
      try {
        return this.engine.formatAuthMessage(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "approveSessionAuthenticate", async (n) => {
      try {
        return await this.engine.approveSessionAuthenticate(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), me(this, "rejectSessionAuthenticate", async (n) => {
      try {
        return await this.engine.rejectSessionAuthenticate(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), this.name = (e == null ? void 0 : e.name) || Jr.name, this.metadata = sf(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
    const s = ga({ logger: (e == null ? void 0 : e.logger) || Jr.logger, name: this.name });
    this.logger = s, this.core = (e == null ? void 0 : e.core) || new JE(e), this.session = new gC(this.core, this.logger), this.proposal = new fC(this.core, this.logger), this.pendingRequest = new mC(this.core, this.logger), this.engine = new pC(this), this.auth = new vC(this.core, this.logger);
  }
  static async init(e) {
    const s = new ya(e);
    return await s.initialize(), s;
  }
  get context() {
    return _t(this.logger);
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
}
const NC = ya;
function wa(t) {
  return t == null || typeof t != "object" && typeof t != "function";
}
function wu(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function bu(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const SC = "[object RegExp]", Eu = "[object String]", Cu = "[object Number]", vu = "[object Boolean]", Au = "[object Arguments]", _C = "[object Symbol]", TC = "[object Date]", OC = "[object Map]", kC = "[object Set]", xC = "[object Array]", PC = "[object ArrayBuffer]", RC = "[object Object]", UC = "[object DataView]", DC = "[object Uint8Array]", $C = "[object Uint8ClampedArray]", LC = "[object Uint16Array]", BC = "[object Uint32Array]", FC = "[object Int8Array]", MC = "[object Int16Array]", WC = "[object Int32Array]", qC = "[object Float32Array]", jC = "[object Float64Array]";
function ba(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function HC(t, e) {
  return Rn(t, void 0, t, /* @__PURE__ */ new Map(), e);
}
function Rn(t, e, s, n = /* @__PURE__ */ new Map(), i = void 0) {
  const r = i == null ? void 0 : i(t, e, s, n);
  if (r != null) return r;
  if (wa(t)) return t;
  if (n.has(t)) return n.get(t);
  if (Array.isArray(t)) {
    const o = new Array(t.length);
    n.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = Rn(t[a], a, s, n, i);
    return Object.hasOwn(t, "index") && (o.index = t.index), Object.hasOwn(t, "input") && (o.input = t.input), o;
  }
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    const o = new RegExp(t.source, t.flags);
    return o.lastIndex = t.lastIndex, o;
  }
  if (t instanceof Map) {
    const o = /* @__PURE__ */ new Map();
    n.set(t, o);
    for (const [a, c] of t) o.set(a, Rn(c, a, s, n, i));
    return o;
  }
  if (t instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    n.set(t, o);
    for (const a of t) o.add(Rn(a, void 0, s, n, i));
    return o;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
  if (ba(t)) {
    const o = new (Object.getPrototypeOf(t)).constructor(t.length);
    n.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = Rn(t[a], a, s, n, i);
    return o;
  }
  if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  if (t instanceof DataView) {
    const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return n.set(t, o), rn(o, t, s, n, i), o;
  }
  if (typeof File < "u" && t instanceof File) {
    const o = new File([t], t.name, { type: t.type });
    return n.set(t, o), rn(o, t, s, n, i), o;
  }
  if (t instanceof Blob) {
    const o = new Blob([t], { type: t.type });
    return n.set(t, o), rn(o, t, s, n, i), o;
  }
  if (t instanceof Error) {
    const o = new t.constructor();
    return n.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, rn(o, t, s, n, i), o;
  }
  if (typeof t == "object" && KC(t)) {
    const o = Object.create(Object.getPrototypeOf(t));
    return n.set(t, o), rn(o, t, s, n, i), o;
  }
  return t;
}
function rn(t, e, s = t, n, i) {
  const r = [...Object.keys(e), ...wu(e)];
  for (let o = 0; o < r.length; o++) {
    const a = r[o], c = Object.getOwnPropertyDescriptor(t, a);
    (c == null || c.writable) && (t[a] = Rn(e[a], a, s, n, i));
  }
}
function KC(t) {
  switch (bu(t)) {
    case Au:
    case xC:
    case PC:
    case UC:
    case vu:
    case TC:
    case qC:
    case jC:
    case FC:
    case MC:
    case WC:
    case OC:
    case Cu:
    case RC:
    case SC:
    case kC:
    case Eu:
    case _C:
    case DC:
    case $C:
    case LC:
    case BC:
      return !0;
    default:
      return !1;
  }
}
function VC(t, e) {
  return HC(t, (s, n, i, r) => {
    if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
      case Cu:
      case Eu:
      case vu: {
        const o = new t.constructor(t == null ? void 0 : t.valueOf());
        return rn(o, t), o;
      }
      case Au: {
        const o = {};
        return rn(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
      }
      default:
        return;
    }
  });
}
function rl(t) {
  return VC(t);
}
function ol(t) {
  return t !== null && typeof t == "object" && bu(t) === "[object Arguments]";
}
function al(t) {
  return typeof t == "object" && t !== null;
}
function zC() {
}
function GC(t) {
  return ba(t);
}
function YC(t) {
  var s;
  if (typeof t != "object" || t == null) return !1;
  if (Object.getPrototypeOf(t) === null) return !0;
  if (Object.prototype.toString.call(t) !== "[object Object]") {
    const n = t[Symbol.toStringTag];
    return n == null || !((s = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) != null && s.writable) ? !1 : t.toString() === `[object ${n}]`;
  }
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function JC(t) {
  if (wa(t)) return t;
  if (Array.isArray(t) || ba(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  const e = Object.getPrototypeOf(t), s = e.constructor;
  if (t instanceof Date || t instanceof Map || t instanceof Set) return new s(t);
  if (t instanceof RegExp) {
    const n = new s(t);
    return n.lastIndex = t.lastIndex, n;
  }
  if (t instanceof DataView) return new s(t.buffer.slice(0));
  if (t instanceof Error) {
    const n = new s(t.message);
    return n.stack = t.stack, n.name = t.name, n.cause = t.cause, n;
  }
  if (typeof File < "u" && t instanceof File) return new s([t], t.name, { type: t.type, lastModified: t.lastModified });
  if (typeof t == "object") {
    const n = Object.create(e);
    return Object.assign(n, t);
  }
  return t;
}
function XC(t, ...e) {
  const s = e.slice(0, -1), n = e[e.length - 1];
  let i = t;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    i = jo(i, o, n, /* @__PURE__ */ new Map());
  }
  return i;
}
function jo(t, e, s, n) {
  if (wa(t) && (t = Object(t)), e == null || typeof e != "object") return t;
  if (n.has(e)) return JC(n.get(e));
  if (n.set(e, t), Array.isArray(e)) {
    e = e.slice();
    for (let r = 0; r < e.length; r++) e[r] = e[r] ?? void 0;
  }
  const i = [...Object.keys(e), ...wu(e)];
  for (let r = 0; r < i.length; r++) {
    const o = i[r];
    let a = e[o], c = t[o];
    if (ol(a) && (a = { ...a }), ol(c) && (c = { ...c }), typeof Buffer < "u" && Buffer.isBuffer(a) && (a = rl(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
      const d = [], u = Reflect.ownKeys(c);
      for (let h = 0; h < u.length; h++) {
        const p = u[h];
        d[p] = c[p];
      }
      c = d;
    } else c = [];
    const l = s(c, a, o, t, e, n);
    l != null ? t[o] = l : Array.isArray(a) || al(c) && al(a) ? t[o] = jo(c, a, s, n) : c == null && YC(a) ? t[o] = jo({}, a, s, n) : c == null && GC(a) ? t[o] = rl(a) : (c === void 0 || a !== void 0) && (t[o] = a);
  }
  return t;
}
function ZC(t, ...e) {
  return XC(t, ...e, zC);
}
const cl = "error", QC = "wss://relay.walletconnect.org", e1 = "wc", Iu = "universal_provider", Fi = `${e1}@2:${Iu}:`, Nu = "https://rpc.walletconnect.org/v1/", Su = "generic", t1 = `${Nu}bundler`, $n = "call_status", s1 = 86400, Ea = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var n1 = Object.defineProperty, i1 = Object.defineProperties, r1 = Object.getOwnPropertyDescriptors, ll = Object.getOwnPropertySymbols, o1 = Object.prototype.hasOwnProperty, a1 = Object.prototype.propertyIsEnumerable, dl = (t, e, s) => e in t ? n1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Mi = (t, e) => {
  for (var s in e || (e = {})) o1.call(e, s) && dl(t, s, e[s]);
  if (ll) for (var s of ll(e)) a1.call(e, s) && dl(t, s, e[s]);
  return t;
}, c1 = (t, e) => i1(t, r1(e));
function _u(t, e, s) {
  var n;
  const i = As(t);
  return ((n = e.rpcMap) == null ? void 0 : n[i.reference]) || `${Nu}?chainId=${i.namespace}:${i.reference}&projectId=${s}`;
}
function l1(t) {
  return t.includes(":") ? t.split(":")[1] : t;
}
function Tu(t) {
  return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function d1(t, e) {
  const s = Object.keys(e.namespaces).filter((i) => i.includes(t));
  if (!s.length) return [];
  const n = [];
  return s.forEach((i) => {
    const r = e.namespaces[i].accounts;
    n.push(...r);
  }), n;
}
function ul(t) {
  return Object.fromEntries(Object.entries(t).filter(([e, s]) => {
    var n, i;
    return ((n = s == null ? void 0 : s.chains) == null ? void 0 : n.length) && ((i = s == null ? void 0 : s.chains) == null ? void 0 : i.length) > 0;
  }));
}
function Wi(t = {}, e = {}) {
  const s = ul(hl(t)), n = ul(hl(e));
  return ZC(s, n);
}
function hl(t) {
  var e, s, n, i, r;
  const o = {};
  if (!ls(t)) return o;
  for (const [a, c] of Object.entries(t)) {
    const l = Ar(a) ? [a] : c.chains, d = c.methods || [], u = c.events || [], h = c.rpcMap || {}, p = Pn(a);
    o[p] = c1(Mi(Mi({}, o[p]), c), { chains: cs(l, (e = o[p]) == null ? void 0 : e.chains), methods: cs(d, (s = o[p]) == null ? void 0 : s.methods), events: cs(u, (n = o[p]) == null ? void 0 : n.events) }), (ls(h) || ls(((i = o[p]) == null ? void 0 : i.rpcMap) || {})) && (o[p].rpcMap = Mi(Mi({}, h), (r = o[p]) == null ? void 0 : r.rpcMap));
  }
  return o;
}
function pl(t) {
  return t.includes(":") ? t.split(":")[2] : t;
}
function fl(t) {
  const e = {};
  for (const [s, n] of Object.entries(t)) {
    const i = n.methods || [], r = n.events || [], o = n.accounts || [], a = Ar(s) ? [s] : n.chains ? n.chains : Tu(n.accounts);
    e[s] = { chains: a, methods: i, events: r, accounts: o };
  }
  return e;
}
function Qr(t) {
  return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
}
function u1(t) {
  try {
    const e = JSON.parse(t);
    return typeof e == "object" && e !== null && !Array.isArray(e);
  } catch {
    return !1;
  }
}
const Ou = {}, Ln = (t) => Ou[t], eo = (t, e) => {
  Ou[t] = e;
};
var h1 = Object.defineProperty, gl = Object.getOwnPropertySymbols, p1 = Object.prototype.hasOwnProperty, f1 = Object.prototype.propertyIsEnumerable, ml = (t, e, s) => e in t ? h1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, yl = (t, e) => {
  for (var s in e || (e = {})) p1.call(e, s) && ml(t, s, e[s]);
  if (gl) for (var s of gl(e)) f1.call(e, s) && ml(t, s, e[s]);
  return t;
};
const wl = "eip155", g1 = ["atomic", "flow-control", "paymasterService", "sessionKeys", "auxiliaryFunds"], m1 = (t) => t && t.startsWith("0x") ? BigInt(t).toString(10) : t, to = (t) => t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, bl = (t) => Object.keys(t).filter((e) => g1.includes(e)).reduce((e, s) => (e[s] = y1(t[s]), e), {}), y1 = (t) => typeof t == "string" && u1(t) ? JSON.parse(t) : t, w1 = (t, e, s) => {
  const { sessionProperties: n = {}, scopedProperties: i = {} } = t, r = {};
  if (!ls(i) && !ls(n)) return;
  const o = bl(n);
  for (const a of s) {
    const c = m1(a);
    if (!c) continue;
    r[to(c)] = o;
    const l = i == null ? void 0 : i[`${wl}:${c}`];
    if (l) {
      const d = l == null ? void 0 : l[`${wl}:${c}:${e}`];
      r[to(c)] = yl(yl({}, r[to(c)]), bl(d || l));
    }
  }
  for (const [a, c] of Object.entries(r)) Object.keys(c).length === 0 && delete r[a];
  return Object.keys(r).length > 0 ? r : void 0;
};
var b1 = Object.defineProperty, E1 = (t, e, s) => e in t ? b1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, C1 = (t, e, s) => E1(t, e + "", s);
let so;
class Ca {
  constructor(e) {
    C1(this, "storage"), this.storage = e;
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
    return so || (so = new Ca(e)), so;
  }
}
var v1 = Object.defineProperty, A1 = Object.defineProperties, I1 = Object.getOwnPropertyDescriptors, El = Object.getOwnPropertySymbols, N1 = Object.prototype.hasOwnProperty, S1 = Object.prototype.propertyIsEnumerable, Cl = (t, e, s) => e in t ? v1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, _1 = (t, e) => {
  for (var s in e || (e = {})) N1.call(e, s) && Cl(t, s, e[s]);
  if (El) for (var s of El(e)) S1.call(e, s) && Cl(t, s, e[s]);
  return t;
}, T1 = (t, e) => A1(t, I1(e));
async function O1(t, e) {
  const s = As(t.result.capabilities.caip345.caip2), n = t.result.capabilities.caip345.transactionHashes, i = await Promise.allSettled(n.map((u) => k1(s.reference, u, e))), r = i.filter((u) => u.status === "fulfilled").map((u) => u.value).filter((u) => u);
  i.filter((u) => u.status === "rejected").forEach((u) => console.warn("Failed to fetch transaction receipt:", u.reason));
  const o = !r.length || r.some((u) => !u), a = r.every((u) => (u == null ? void 0 : u.status) === "0x1"), c = r.every((u) => (u == null ? void 0 : u.status) === "0x0"), l = r.some((u) => (u == null ? void 0 : u.status) === "0x0");
  let d;
  return o ? d = 100 : a ? d = 200 : c ? d = 500 : l && (d = 600), { id: t.result.id, version: t.request.version, atomic: t.request.atomicRequired, chainId: t.request.chainId, capabilities: t.result.capabilities, receipts: r, status: d };
}
async function k1(t, e, s) {
  return await s(parseInt(t)).request(ns("eth_getTransactionReceipt", [e]));
}
async function x1({ sendCalls: t, storage: e }) {
  const s = await e.getItem($n);
  await e.setItem($n, T1(_1({}, s), { [t.result.id]: { request: t.request, result: t.result, expiry: $e(s1) } }));
}
async function P1({ resultId: t, storage: e }) {
  const s = await e.getItem($n);
  if (s) {
    delete s[t], await e.setItem($n, s);
    for (const n in s) is(s[n].expiry) && delete s[n];
    await e.setItem($n, s);
  }
}
async function R1({ resultId: t, storage: e }) {
  const s = await e.getItem($n), n = s == null ? void 0 : s[t];
  if (n && !is(n.expiry)) return n;
  await P1({ resultId: t, storage: e });
}
var U1 = Object.defineProperty, D1 = Object.defineProperties, $1 = Object.getOwnPropertyDescriptors, vl = Object.getOwnPropertySymbols, L1 = Object.prototype.hasOwnProperty, B1 = Object.prototype.propertyIsEnumerable, Ho = (t, e, s) => e in t ? U1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, no = (t, e) => {
  for (var s in e || (e = {})) L1.call(e, s) && Ho(t, s, e[s]);
  if (vl) for (var s of vl(e)) B1.call(e, s) && Ho(t, s, e[s]);
  return t;
}, io = (t, e) => D1(t, $1(e)), en = (t, e, s) => Ho(t, typeof e != "symbol" ? e + "" : e, s);
class F1 {
  constructor(e) {
    en(this, "name", "eip155"), en(this, "client"), en(this, "chainId"), en(this, "namespace"), en(this, "httpProviders"), en(this, "events"), en(this, "storage"), this.namespace = e.namespace, this.events = Ln("events"), this.client = Ln("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = Ca.getStorage(this.client.core.storage);
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
    const n = this.chainId;
    this.chainId = parseInt(e), this.events.emit(Ea.DEFAULT_CHAIN_CHANGED, { currentCaipChainId: `${this.name}:${e}`, previousCaipChainId: `${this.name}:${n}` });
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
    const n = s || _u(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Jo(new kl(n, Ln("disableProviderPing")));
  }
  setHttpProvider(e, s) {
    const n = this.createHttpProvider(e, s);
    n && (this.httpProviders[e] = n);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var n;
      const i = parseInt(l1(s));
      e[i] = this.createHttpProvider(i, (n = this.namespace.rpcMap) == null ? void 0 : n[s]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  getHttpProvider(e) {
    const s = e || this.chainId;
    return this.httpProviders[s] || (this.httpProviders = io(no({}, this.httpProviders), { [s]: this.createHttpProvider(s) }), this.httpProviders[s]);
  }
  async handleSwitchChain(e) {
    var s, n;
    let i = e.request.params ? (s = e.request.params[0]) == null ? void 0 : s.chainId : "0x0";
    i = i.startsWith("0x") ? i : `0x${i}`;
    const r = parseInt(i, 16);
    if (this.isChainApproved(r)) this.setDefaultChain(`${r}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: i }] }, chainId: (n = this.namespace.chains) == null ? void 0 : n[0] }), this.setDefaultChain(`${r}`);
    else throw new Error(`Failed to switch to chain 'eip155:${r}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
  async getCapabilities(e) {
    var s, n, i, r, o;
    const a = (n = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : n[0], c = ((r = (i = e.request) == null ? void 0 : i.params) == null ? void 0 : r[1]) || [];
    if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const l = this.client.session.get(e.topic), d = ((o = l == null ? void 0 : l.sessionProperties) == null ? void 0 : o.capabilities) || {}, u = c.length > 0 ? c.join(",") : `0x${this.chainId.toString(16)}`, h = `${a}${u}`, p = d == null ? void 0 : d[h];
    if (p) return p;
    let g;
    try {
      g = w1(l, a, c);
    } catch (y) {
      console.warn("Failed to extract capabilities from session", y);
    }
    if (g) return g;
    const m = await this.client.request(e);
    try {
      await this.client.session.update(e.topic, { sessionProperties: io(no({}, l.sessionProperties || {}), { capabilities: io(no({}, d || {}), { [h]: m }) }) });
    } catch (y) {
      console.warn("Failed to update session with capabilities", y);
    }
    return m;
  }
  async getCallStatus(e) {
    var s, n, i;
    const r = this.client.session.get(e.topic), o = (s = r.sessionProperties) == null ? void 0 : s.bundler_name;
    if (o) {
      const l = this.getBundlerUrl(e.chainId, o);
      try {
        return await this.getUserOperationReceipt(l, e);
      } catch (d) {
        console.warn("Failed to fetch call status from bundler", d, l);
      }
    }
    const a = (n = r.sessionProperties) == null ? void 0 : n.bundler_url;
    if (a) try {
      return await this.getUserOperationReceipt(a, e);
    } catch (l) {
      console.warn("Failed to fetch call status from custom bundler", l, a);
    }
    const c = await R1({ resultId: (i = e.request.params) == null ? void 0 : i[0], storage: this.storage });
    if (c) try {
      return await O1(c, this.getHttpProvider.bind(this));
    } catch (l) {
      console.warn("Failed to fetch call status from stored send calls", l, c);
    }
    if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e, s) {
    var n;
    const i = new URL(e), r = await fetch(i, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(ns("eth_getUserOperationReceipt", [(n = s.request.params) == null ? void 0 : n[0]])) });
    if (!r.ok) throw new Error(`Failed to fetch user operation receipt - ${r.status}`);
    return await r.json();
  }
  getBundlerUrl(e, s) {
    return `${t1}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
  }
  async sendCalls(e) {
    var s, n, i;
    const r = await this.client.request(e), o = (s = e.request.params) == null ? void 0 : s[0], a = r == null ? void 0 : r.id, c = (r == null ? void 0 : r.capabilities) || {}, l = (n = c == null ? void 0 : c.caip345) == null ? void 0 : n.caip2, d = (i = c == null ? void 0 : c.caip345) == null ? void 0 : i.transactionHashes;
    return !a || !l || !(d != null && d.length) || await x1({ sendCalls: { request: o, result: r }, storage: this.storage }), r;
  }
}
var M1 = Object.defineProperty, W1 = (t, e, s) => e in t ? M1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Tn = (t, e, s) => W1(t, typeof e != "symbol" ? e + "" : e, s);
class q1 {
  constructor(e) {
    Tn(this, "name", Su), Tn(this, "client"), Tn(this, "httpProviders"), Tn(this, "events"), Tn(this, "namespace"), Tn(this, "chainId"), this.namespace = e.namespace, this.events = Ln("events"), this.client = Ln("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
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
    const n = this.chainId;
    this.chainId = e, this.events.emit(Ea.DEFAULT_CHAIN_CHANGED, { currentCaipChainId: `${this.name}:${e}`, previousCaipChainId: `${this.name}:${n}` });
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
    return As(e).namespace;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e, s;
    const n = {};
    return (s = (e = this.namespace) == null ? void 0 : e.accounts) == null || s.forEach((i) => {
      var r, o;
      const a = As(i), c = (o = (r = this.namespace) == null ? void 0 : r.rpcMap) == null ? void 0 : o[`${a.namespace}:${a.reference}`];
      n[a.reference] = this.createHttpProvider(i, c);
    }), n;
  }
  getHttpProvider(e) {
    const s = As(e).reference, n = this.httpProviders[s];
    if (typeof n > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return n;
  }
  setHttpProvider(e, s) {
    const n = this.createHttpProvider(e, s);
    n && (this.httpProviders[e] = n);
  }
  createHttpProvider(e, s) {
    const n = s || _u(e, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Jo(new kl(n, Ln("disableProviderPing")));
  }
}
var j1 = Object.defineProperty, H1 = Object.defineProperties, K1 = Object.getOwnPropertyDescriptors, Al = Object.getOwnPropertySymbols, V1 = Object.prototype.hasOwnProperty, z1 = Object.prototype.propertyIsEnumerable, Ko = (t, e, s) => e in t ? j1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, ni = (t, e) => {
  for (var s in e || (e = {})) V1.call(e, s) && Ko(t, s, e[s]);
  if (Al) for (var s of Al(e)) z1.call(e, s) && Ko(t, s, e[s]);
  return t;
}, qi = (t, e) => H1(t, K1(e)), wt = (t, e, s) => Ko(t, typeof e != "symbol" ? e + "" : e, s);
class va {
  constructor(e) {
    wt(this, "client"), wt(this, "namespaces"), wt(this, "optionalNamespaces"), wt(this, "sessionProperties"), wt(this, "scopedProperties"), wt(this, "events", new Qo()), wt(this, "rpcProviders", {}), wt(this, "session"), wt(this, "providerOpts"), wt(this, "logger"), wt(this, "uri"), wt(this, "disableProviderPing", !1), wt(this, "connectParams");
    var s, n;
    this.providerOpts = e, this.logger = ga({ logger: (s = e.logger) != null ? s : cl, name: (n = this.providerOpts.name) != null ? n : Iu }), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1;
  }
  static async init(e) {
    const s = new va(e);
    return await s.initialize(), s;
  }
  async request(e, s, n) {
    const [i, r] = this.validateChain(s);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(i).request({ request: ni({}, e), chainId: `${i}:${r}`, topic: this.session.topic, expiry: n });
  }
  sendAsync(e, s, n, i) {
    const r = (/* @__PURE__ */ new Date()).getTime();
    this.request(e, n, i).then((o) => s(null, yi(r, o))).catch((o) => s(o, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: xe("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.connectParams = e, this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
  }
  async authenticate(e, s) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e), await this.cleanupPendingPairings();
    const { uri: n, response: i } = await this.client.authenticate(e, s);
    n && (this.uri = n, this.events.emit("display_uri", n));
    const r = await i();
    if (this.session = r.session, this.session) {
      const o = fl(this.session.namespaces);
      this.namespaces = Wi(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return r;
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
    var s, n;
    const { uri: i, approval: r } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties, authentication: (s = this.connectParams) == null ? void 0 : s.authentication, walletPay: (n = this.connectParams) == null ? void 0 : n.walletPay });
    i && (this.uri = i, this.events.emit("display_uri", i));
    const o = await r();
    this.session = o;
    const a = fl(o.namespaces);
    return this.namespaces = Wi(this.namespaces, a), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e, s) {
    try {
      if (!this.session) return;
      const [n, i] = this.validateChain(e);
      this.getProvider(n).setDefaultChain(i, s);
    } catch (n) {
      if (!/Please call connect/.test(n.message)) throw n;
    }
  }
  async cleanupPendingPairings(e = {}) {
    try {
      this.logger.info("Cleaning up inactive pairings...");
      const s = this.client.pairing.getAll();
      if (!Ns(s)) return;
      for (const n of s) e.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
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
    if (this.client = this.providerOpts.client || await NC.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || cl, relayUrl: this.providerOpts.relayUrl || QC, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (n) {
      throw this.logger.error(n, "Failed to get session"), new Error(`The provided session: ${(s = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : s.topic} doesn't exist in the Sign client`);
    }
    else {
      const n = this.client.session.getAll();
      this.session = n[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e = [...new Set(Object.keys(this.session.namespaces).map((s) => Pn(s)))];
    eo("client", this.client), eo("events", this.events), eo("disableProviderPing", this.disableProviderPing), e.forEach((s) => {
      if (!this.session) return;
      const n = d1(s, this.session);
      if ((n == null ? void 0 : n.length) === 0) return;
      const i = Tu(n), r = Wi(this.namespaces, this.optionalNamespaces), o = qi(ni({}, r[s]), { accounts: n, chains: i });
      switch (s) {
        case "eip155":
          this.rpcProviders[s] = new F1({ namespace: o });
          break;
        default:
          this.rpcProviders[s] = new q1({ namespace: o });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      var s;
      const { topic: n } = e;
      n === ((s = this.session) == null ? void 0 : s.topic) && this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      var s;
      const { params: n, topic: i } = e;
      if (i !== ((s = this.session) == null ? void 0 : s.topic)) return;
      const { event: r } = n;
      if (r.name === "accountsChanged") {
        const o = r.data;
        o && Ns(o) && this.events.emit("accountsChanged", o.map(pl));
      } else if (r.name === "chainChanged") {
        const o = n.chainId, a = n.event.data, c = Pn(o), l = Qr(o) !== Qr(a) ? `${c}:${Qr(a)}` : o;
        this.onChainChanged({ currentCaipChainId: l });
      } else this.events.emit(r.name, r.data);
      this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: s }) => {
      var n, i;
      if (e !== ((n = this.session) == null ? void 0 : n.topic)) return;
      const { namespaces: r } = s, o = (i = this.client) == null ? void 0 : i.session.get(e);
      this.session = qi(ni({}, o), { namespaces: r }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: s });
    }), this.client.on("session_delete", async (e) => {
      var s;
      e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", qi(ni({}, xe("USER_DISCONNECTED")), { data: e.topic })));
    }), this.on(Ea.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged(qi(ni({}, e), { internal: !0 }));
    });
  }
  getProvider(e) {
    return this.rpcProviders[e] || this.rpcProviders[Su];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var s;
      this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: s = {}, optionalNamespaces: n = {}, sessionProperties: i, scopedProperties: r } = e;
    this.optionalNamespaces = Wi(s, n), this.sessionProperties = i, this.scopedProperties = r;
  }
  validateChain(e) {
    const [s, n] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [s, n];
    if (s && !Object.keys(this.namespaces || {}).map((o) => Pn(o)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
    if (s && n) return [s, n];
    const i = Pn(Object.keys(this.namespaces)[0]), r = this.rpcProviders[i].getDefaultChain();
    return [i, r];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  async onChainChanged({ currentCaipChainId: e, previousCaipChainId: s, internal: n = !1 }) {
    if (!this.namespaces) return;
    const [i, r] = this.validateChain(e);
    r && (this.updateNamespaceChain(i, r), n ? (this.events.emit("chainChanged", r), this.emitAccountsChangedOnChainChange({ namespace: i, currentCaipChainId: e, previousCaipChainId: s })) : this.getProvider(i).setDefaultChain(r), await this.persist("namespaces", this.namespaces));
  }
  emitAccountsChangedOnChainChange({ namespace: e, currentCaipChainId: s, previousCaipChainId: n }) {
    var i, r;
    try {
      if (n === s) return;
      const o = (r = (i = this.session) == null ? void 0 : i.namespaces[e]) == null ? void 0 : r.accounts;
      if (!o) return;
      const a = o.filter((c) => c.includes(`${s}:`)).map(pl);
      if (!Ns(a)) return;
      this.events.emit("accountsChanged", a);
    } catch (o) {
      this.logger.warn(o, "Failed to emit accountsChanged on chain change");
    }
  }
  updateNamespaceChain(e, s) {
    if (!this.namespaces) return;
    const n = this.namespaces[e] ? e : `${e}:${s}`, i = { chains: [], methods: [], events: [], defaultChain: s };
    this.namespaces[n] ? this.namespaces[n] && (this.namespaces[n].defaultChain = s) : this.namespaces[n] = i;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.connectParams = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({ deletePairings: !0 }), await this.cleanupStorage();
  }
  async persist(e, s) {
    var n;
    const i = ((n = this.session) == null ? void 0 : n.topic) || "";
    await this.client.core.storage.setItem(`${Fi}/${e}${i}`, s);
  }
  async getFromStore(e) {
    var s;
    const n = ((s = this.session) == null ? void 0 : s.topic) || "";
    return await this.client.core.storage.getItem(`${Fi}/${e}${n}`);
  }
  async deleteFromStore(e) {
    var s;
    const n = ((s = this.session) == null ? void 0 : s.topic) || "";
    await this.client.core.storage.removeItem(`${Fi}/${e}${n}`);
  }
  async cleanupStorage() {
    var e;
    try {
      if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
      const s = await this.client.core.storage.getKeys();
      for (const n of s) n.startsWith(Fi) && await this.client.core.storage.removeItem(n);
    } catch (s) {
      this.logger.warn(s, "Failed to cleanup storage");
    }
  }
}
const G1 = {
  black: "#202020",
  white: "#FFFFFF",
  white010: "rgba(255, 255, 255, 0.1)",
  accent010: "rgba(9, 136, 240, 0.1)",
  accent020: "rgba(9, 136, 240, 0.2)",
  accent030: "rgba(9, 136, 240, 0.3)",
  accent040: "rgba(9, 136, 240, 0.4)",
  accent050: "rgba(9, 136, 240, 0.5)",
  accent060: "rgba(9, 136, 240, 0.6)",
  accent070: "rgba(9, 136, 240, 0.7)",
  accent080: "rgba(9, 136, 240, 0.8)",
  accent090: "rgba(9, 136, 240, 0.9)",
  accent100: "rgba(9, 136, 240, 1.0)",
  accentSecondary010: "rgba(199, 185, 148, 0.1)",
  accentSecondary020: "rgba(199, 185, 148, 0.2)",
  accentSecondary030: "rgba(199, 185, 148, 0.3)",
  accentSecondary040: "rgba(199, 185, 148, 0.4)",
  accentSecondary050: "rgba(199, 185, 148, 0.5)",
  accentSecondary060: "rgba(199, 185, 148, 0.6)",
  accentSecondary070: "rgba(199, 185, 148, 0.7)",
  accentSecondary080: "rgba(199, 185, 148, 0.8)",
  accentSecondary090: "rgba(199, 185, 148, 0.9)",
  accentSecondary100: "rgba(199, 185, 148, 1.0)",
  productWalletKit: "#FFB800",
  productAppKit: "#FF573B",
  productCloud: "#0988F0",
  productDocumentation: "#008847",
  neutrals050: "#F6F6F6",
  neutrals100: "#F3F3F3",
  neutrals200: "#E9E9E9",
  neutrals300: "#D0D0D0",
  neutrals400: "#BBB",
  neutrals500: "#9A9A9A",
  neutrals600: "#6C6C6C",
  neutrals700: "#4F4F4F",
  neutrals800: "#363636",
  neutrals900: "#2A2A2A",
  neutrals1000: "#252525",
  semanticSuccess010: "rgba(48, 164, 107, 0.1)",
  semanticSuccess020: "rgba(48, 164, 107, 0.2)",
  semanticSuccess030: "rgba(48, 164, 107, 0.3)",
  semanticSuccess040: "rgba(48, 164, 107, 0.4)",
  semanticSuccess050: "rgba(48, 164, 107, 0.5)",
  semanticSuccess060: "rgba(48, 164, 107, 0.6)",
  semanticSuccess070: "rgba(48, 164, 107, 0.7)",
  semanticSuccess080: "rgba(48, 164, 107, 0.8)",
  semanticSuccess090: "rgba(48, 164, 107, 0.9)",
  semanticSuccess100: "rgba(48, 164, 107, 1.0)",
  semanticError010: "rgba(223, 74, 52, 0.1)",
  semanticError020: "rgba(223, 74, 52, 0.2)",
  semanticError030: "rgba(223, 74, 52, 0.3)",
  semanticError040: "rgba(223, 74, 52, 0.4)",
  semanticError050: "rgba(223, 74, 52, 0.5)",
  semanticError060: "rgba(223, 74, 52, 0.6)",
  semanticError070: "rgba(223, 74, 52, 0.7)",
  semanticError080: "rgba(223, 74, 52, 0.8)",
  semanticError090: "rgba(223, 74, 52, 0.9)",
  semanticError100: "rgba(223, 74, 52, 1.0)",
  semanticWarning010: "rgba(243, 161, 63, 0.1)",
  semanticWarning020: "rgba(243, 161, 63, 0.2)",
  semanticWarning030: "rgba(243, 161, 63, 0.3)",
  semanticWarning040: "rgba(243, 161, 63, 0.4)",
  semanticWarning050: "rgba(243, 161, 63, 0.5)",
  semanticWarning060: "rgba(243, 161, 63, 0.6)",
  semanticWarning070: "rgba(243, 161, 63, 0.7)",
  semanticWarning080: "rgba(243, 161, 63, 0.8)",
  semanticWarning090: "rgba(243, 161, 63, 0.9)",
  semanticWarning100: "rgba(243, 161, 63, 1.0)"
}, ur = {
  core: {
    backgroundAccentPrimary: "#0988F0",
    backgroundAccentCertified: "#C7B994",
    backgroundWalletKit: "#FFB800",
    backgroundAppKit: "#FF573B",
    backgroundCloud: "#0988F0",
    backgroundDocumentation: "#008847",
    backgroundSuccess: "rgba(48, 164, 107, 0.20)",
    backgroundError: "rgba(223, 74, 52, 0.20)",
    backgroundWarning: "rgba(243, 161, 63, 0.20)",
    textAccentPrimary: "#0988F0",
    textAccentCertified: "#C7B994",
    textWalletKit: "#FFB800",
    textAppKit: "#FF573B",
    textCloud: "#0988F0",
    textDocumentation: "#008847",
    textSuccess: "#30A46B",
    textError: "#DF4A34",
    textWarning: "#F3A13F",
    borderAccentPrimary: "#0988F0",
    borderSecondary: "#C7B994",
    borderSuccess: "#30A46B",
    borderError: "#DF4A34",
    borderWarning: "#F3A13F",
    foregroundAccent010: "rgba(9, 136, 240, 0.1)",
    foregroundAccent020: "rgba(9, 136, 240, 0.2)",
    foregroundAccent040: "rgba(9, 136, 240, 0.4)",
    foregroundAccent060: "rgba(9, 136, 240, 0.6)",
    foregroundSecondary020: "rgba(199, 185, 148, 0.2)",
    foregroundSecondary040: "rgba(199, 185, 148, 0.4)",
    foregroundSecondary060: "rgba(199, 185, 148, 0.6)",
    iconAccentPrimary: "#0988F0",
    iconAccentCertified: "#C7B994",
    iconSuccess: "#30A46B",
    iconError: "#DF4A34",
    iconWarning: "#F3A13F",
    glass010: "rgba(255, 255, 255, 0.1)",
    zIndex: "9999"
  },
  dark: {
    overlay: "rgba(0, 0, 0, 0.50)",
    backgroundPrimary: "#202020",
    backgroundInvert: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9A9A9A",
    textTertiary: "#BBBBBB",
    textInvert: "#202020",
    borderPrimary: "#2A2A2A",
    borderPrimaryDark: "#363636",
    borderSecondary: "#4F4F4F",
    foregroundPrimary: "#252525",
    foregroundSecondary: "#2A2A2A",
    foregroundTertiary: "#363636",
    iconDefault: "#9A9A9A",
    iconInverse: "#FFFFFF"
  },
  light: {
    overlay: "rgba(230 , 230, 230, 0.5)",
    backgroundPrimary: "#FFFFFF",
    borderPrimaryDark: "#E9E9E9",
    backgroundInvert: "#202020",
    textPrimary: "#202020",
    textSecondary: "#9A9A9A",
    textTertiary: "#6C6C6C",
    textInvert: "#FFFFFF",
    borderPrimary: "#E9E9E9",
    borderSecondary: "#D0D0D0",
    foregroundPrimary: "#F3F3F3",
    foregroundSecondary: "#E9E9E9",
    foregroundTertiary: "#D0D0D0",
    iconDefault: "#9A9A9A",
    iconInverse: "#202020"
  }
}, Y1 = {
  1: "4px",
  2: "8px",
  10: "10px",
  3: "12px",
  4: "16px",
  6: "24px",
  5: "20px",
  8: "32px",
  16: "64px",
  20: "80px",
  32: "128px",
  64: "256px",
  128: "512px",
  round: "9999px"
}, J1 = {
  0: "0px",
  "01": "2px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  32: "128px",
  64: "256px"
}, X1 = {
  regular: "KHTeka",
  mono: "KHTekaMono"
}, Z1 = {
  regular: "400",
  medium: "500"
}, Q1 = {
  h1: "50px",
  h2: "44px",
  h3: "38px",
  h4: "32px",
  h5: "26px",
  h6: "20px",
  large: "16px",
  medium: "14px",
  small: "12px"
}, ev = {
  "h1-regular-mono": { lineHeight: "50px", letterSpacing: "-3px" },
  "h1-regular": { lineHeight: "50px", letterSpacing: "-1px" },
  "h1-medium": { lineHeight: "50px", letterSpacing: "-0.84px" },
  "h2-regular-mono": { lineHeight: "44px", letterSpacing: "-2.64px" },
  "h2-regular": { lineHeight: "44px", letterSpacing: "-0.88px" },
  "h2-medium": { lineHeight: "44px", letterSpacing: "-0.88px" },
  "h3-regular-mono": { lineHeight: "38px", letterSpacing: "-2.28px" },
  "h3-regular": { lineHeight: "38px", letterSpacing: "-0.76px" },
  "h3-medium": { lineHeight: "38px", letterSpacing: "-0.76px" },
  "h4-regular-mono": { lineHeight: "32px", letterSpacing: "-1.92px" },
  "h4-regular": { lineHeight: "32px", letterSpacing: "-0.32px" },
  "h4-medium": { lineHeight: "32px", letterSpacing: "-0.32px" },
  "h5-regular-mono": { lineHeight: "26px", letterSpacing: "-1.56px" },
  "h5-regular": { lineHeight: "26px", letterSpacing: "-0.26px" },
  "h5-medium": { lineHeight: "26px", letterSpacing: "-0.26px" },
  "h6-regular-mono": { lineHeight: "20px", letterSpacing: "-1.2px" },
  "h6-regular": { lineHeight: "20px", letterSpacing: "-0.6px" },
  "h6-medium": { lineHeight: "20px", letterSpacing: "-0.6px" },
  "lg-regular-mono": { lineHeight: "16px", letterSpacing: "-0.96px" },
  "lg-regular": { lineHeight: "18px", letterSpacing: "-0.16px" },
  "lg-medium": { lineHeight: "18px", letterSpacing: "-0.16px" },
  "md-regular-mono": { lineHeight: "14px", letterSpacing: "-0.84px" },
  "md-regular": { lineHeight: "16px", letterSpacing: "-0.14px" },
  "md-medium": { lineHeight: "16px", letterSpacing: "-0.14px" },
  "sm-regular-mono": { lineHeight: "12px", letterSpacing: "-0.72px" },
  "sm-regular": { lineHeight: "14px", letterSpacing: "-0.12px" },
  "sm-medium": { lineHeight: "14px", letterSpacing: "-0.12px" }
}, tv = {
  "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
  "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
  "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
  "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
  "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
  "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
}, sv = {
  xl: "400ms",
  lg: "200ms",
  md: "125ms",
  sm: "75ms"
}, Vo = {
  colors: G1,
  fontFamily: X1,
  fontWeight: Z1,
  textSize: Q1,
  typography: ev,
  tokens: {
    core: ur.core,
    theme: ur.dark
  },
  borderRadius: Y1,
  spacing: J1,
  durations: sv,
  easings: tv
}, Il = "--apkt";
function ji(t) {
  if (!t)
    return {};
  const e = {};
  return e["font-family"] = t["--apkt-font-family"] ?? t["--w3m-font-family"] ?? "KHTeka", e.accent = t["--apkt-accent"] ?? t["--w3m-accent"] ?? "#0988F0", e["color-mix"] = t["--apkt-color-mix"] ?? t["--w3m-color-mix"] ?? "#000", e["color-mix-strength"] = t["--apkt-color-mix-strength"] ?? t["--w3m-color-mix-strength"] ?? 0, e["font-size-master"] = t["--apkt-font-size-master"] ?? t["--w3m-font-size-master"] ?? "10px", e["border-radius-master"] = t["--apkt-border-radius-master"] ?? t["--w3m-border-radius-master"] ?? "4px", t["--apkt-z-index"] !== void 0 ? e["z-index"] = t["--apkt-z-index"] : t["--w3m-z-index"] !== void 0 && (e["z-index"] = t["--w3m-z-index"]), e;
}
const ws = {
  createCSSVariables(t) {
    const e = {}, s = {};
    function n(r, o, a = "") {
      for (const [c, l] of Object.entries(r)) {
        const d = a ? `${a}-${c}` : c;
        l && typeof l == "object" && Object.keys(l).length ? (o[c] = {}, n(l, o[c], d)) : typeof l == "string" && (o[c] = `${Il}-${d}`);
      }
    }
    function i(r, o) {
      for (const [a, c] of Object.entries(r))
        c && typeof c == "object" ? (o[a] = {}, i(c, o[a])) : typeof c == "string" && (o[a] = `var(${c})`);
    }
    return n(t, e), i(e, s), { cssVariables: e, cssVariablesVarPrefix: s };
  },
  assignCSSVariables(t, e) {
    const s = {};
    function n(i, r, o) {
      for (const [a, c] of Object.entries(i)) {
        const l = o ? `${o}-${a}` : a, d = r[a];
        c && typeof c == "object" ? n(c, d, l) : typeof d == "string" && (s[`${Il}-${l}`] = d);
      }
    }
    return n(t, e), s;
  },
  createRootStyles(t, e) {
    const s = {
      ...Vo,
      tokens: { ...Vo.tokens, theme: t === "light" ? ur.light : ur.dark }
    }, { cssVariables: n } = ws.createCSSVariables(s), i = ws.assignCSSVariables(n, s), r = ws.generateW3MVariables(e), o = ws.generateW3MOverrides(e), a = ws.generateScaledVariables(e), c = ws.generateBaseVariables(i), l = {
      ...i,
      ...c,
      ...r,
      ...o,
      ...a
    }, d = ws.applyColorMixToVariables(e, l), u = {
      ...l,
      ...d
    };
    return `:root {${Object.entries(u).map(([p, g]) => `${p}:${g.replace("/[:;{}</>]/g", "")};`).join("")}}`;
  },
  generateW3MVariables(t) {
    if (!t)
      return {};
    const e = ji(t), s = {};
    return s["--w3m-font-family"] = e["font-family"], s["--w3m-accent"] = e.accent, s["--w3m-color-mix"] = e["color-mix"], s["--w3m-color-mix-strength"] = `${e["color-mix-strength"]}%`, s["--w3m-font-size-master"] = e["font-size-master"], s["--w3m-border-radius-master"] = e["border-radius-master"], s;
  },
  generateW3MOverrides(t) {
    if (!t)
      return {};
    const e = ji(t), s = {};
    if (t["--apkt-accent"] || t["--w3m-accent"]) {
      const n = e.accent;
      s["--apkt-tokens-core-iconAccentPrimary"] = n, s["--apkt-tokens-core-borderAccentPrimary"] = n, s["--apkt-tokens-core-textAccentPrimary"] = n, s["--apkt-tokens-core-backgroundAccentPrimary"] = n;
    }
    return (t["--apkt-font-family"] || t["--w3m-font-family"]) && (s["--apkt-fontFamily-regular"] = e["font-family"]), e["z-index"] !== void 0 && (s["--apkt-tokens-core-zIndex"] = `${e["z-index"]}`), s;
  },
  generateScaledVariables(t) {
    if (!t)
      return {};
    const e = ji(t), s = {};
    if (t["--apkt-font-size-master"] || t["--w3m-font-size-master"]) {
      const n = parseFloat(e["font-size-master"].replace("px", ""));
      s["--apkt-textSize-h1"] = `${Number(n) * 5}px`, s["--apkt-textSize-h2"] = `${Number(n) * 4.4}px`, s["--apkt-textSize-h3"] = `${Number(n) * 3.8}px`, s["--apkt-textSize-h4"] = `${Number(n) * 3.2}px`, s["--apkt-textSize-h5"] = `${Number(n) * 2.6}px`, s["--apkt-textSize-h6"] = `${Number(n) * 2}px`, s["--apkt-textSize-large"] = `${Number(n) * 1.6}px`, s["--apkt-textSize-medium"] = `${Number(n) * 1.4}px`, s["--apkt-textSize-small"] = `${Number(n) * 1.2}px`;
    }
    if (t["--apkt-border-radius-master"] || t["--w3m-border-radius-master"]) {
      const n = parseFloat(e["border-radius-master"].replace("px", ""));
      s["--apkt-borderRadius-1"] = `${Number(n)}px`, s["--apkt-borderRadius-2"] = `${Number(n) * 2}px`, s["--apkt-borderRadius-3"] = `${Number(n) * 3}px`, s["--apkt-borderRadius-4"] = `${Number(n) * 4}px`, s["--apkt-borderRadius-5"] = `${Number(n) * 5}px`, s["--apkt-borderRadius-6"] = `${Number(n) * 6}px`, s["--apkt-borderRadius-8"] = `${Number(n) * 8}px`, s["--apkt-borderRadius-16"] = `${Number(n) * 16}px`, s["--apkt-borderRadius-20"] = `${Number(n) * 20}px`, s["--apkt-borderRadius-32"] = `${Number(n) * 32}px`, s["--apkt-borderRadius-64"] = `${Number(n) * 64}px`, s["--apkt-borderRadius-128"] = `${Number(n) * 128}px`;
    }
    return s;
  },
  generateColorMixCSS(t, e) {
    if (!(t != null && t["--w3m-color-mix"]) || !t["--w3m-color-mix-strength"])
      return "";
    const s = t["--w3m-color-mix"], n = t["--w3m-color-mix-strength"];
    if (!n || n === 0)
      return "";
    const i = Object.keys(e || {}).filter((o) => {
      const a = o.includes("-tokens-core-background") || o.includes("-tokens-core-text") || o.includes("-tokens-core-border") || o.includes("-tokens-core-foreground") || o.includes("-tokens-core-icon") || o.includes("-tokens-theme-background") || o.includes("-tokens-theme-text") || o.includes("-tokens-theme-border") || o.includes("-tokens-theme-foreground") || o.includes("-tokens-theme-icon"), c = o.includes("-borderRadius-") || o.includes("-spacing-") || o.includes("-textSize-") || o.includes("-fontFamily-") || o.includes("-fontWeight-") || o.includes("-typography-") || o.includes("-duration-") || o.includes("-ease-") || o.includes("-path-") || o.includes("-width-") || o.includes("-height-") || o.includes("-visual-size-") || o.includes("-modal-width") || o.includes("-cover");
      return a && !c;
    });
    return i.length === 0 ? "" : ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${i.map((o) => {
      const a = (e == null ? void 0 : e[o]) || "";
      return a.includes("color-mix") || a.startsWith("#") || a.startsWith("rgb") ? `${o}: color-mix(in srgb, ${s} ${n}%, ${a});` : `${o}: color-mix(in srgb, ${s} ${n}%, var(${o}-base, ${a}));`;
    }).join("")}
      }
    }`;
  },
  generateBaseVariables(t) {
    const e = {}, s = t["--apkt-tokens-theme-backgroundPrimary"];
    s && (e["--apkt-tokens-theme-backgroundPrimary-base"] = s);
    const n = t["--apkt-tokens-core-backgroundAccentPrimary"];
    return n && (e["--apkt-tokens-core-backgroundAccentPrimary-base"] = n), e;
  },
  applyColorMixToVariables(t, e) {
    const s = {};
    e != null && e["--apkt-tokens-theme-backgroundPrimary"] && (s["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)"), e != null && e["--apkt-tokens-core-backgroundAccentPrimary"] && (s["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)");
    const n = ji(t), i = n["color-mix"], r = n["color-mix-strength"];
    if (!r || r === 0)
      return s;
    const o = Object.keys(e || {}).filter((a) => {
      const c = a.includes("-tokens-core-background") || a.includes("-tokens-core-text") || a.includes("-tokens-core-border") || a.includes("-tokens-core-foreground") || a.includes("-tokens-core-icon") || a.includes("-tokens-theme-background") || a.includes("-tokens-theme-text") || a.includes("-tokens-theme-border") || a.includes("-tokens-theme-foreground") || a.includes("-tokens-theme-icon") || a.includes("-tokens-theme-overlay"), l = a.includes("-borderRadius-") || a.includes("-spacing-") || a.includes("-textSize-") || a.includes("-fontFamily-") || a.includes("-fontWeight-") || a.includes("-typography-") || a.includes("-duration-") || a.includes("-ease-") || a.includes("-path-") || a.includes("-width-") || a.includes("-height-") || a.includes("-visual-size-") || a.includes("-modal-width") || a.includes("-cover");
      return c && !l;
    });
    return o.length === 0 || o.forEach((a) => {
      const c = (e == null ? void 0 : e[a]) || "";
      a.endsWith("-base") || (a === "--apkt-tokens-theme-backgroundPrimary" || a === "--apkt-tokens-core-backgroundAccentPrimary" ? s[a] = `color-mix(in srgb, ${i} ${r}%, var(${a}-base))` : c.includes("color-mix") || c.startsWith("#") || c.startsWith("rgb") ? s[a] = `color-mix(in srgb, ${i} ${r}%, ${c})` : s[a] = `color-mix(in srgb, ${i} ${r}%, var(${a}-base, ${c}))`);
    }), s;
  }
}, { cssVariablesVarPrefix: nv } = ws.createCSSVariables(Vo);
function Uv(t, ...e) {
  return Ms(t, ...e.map((s) => typeof s == "function" ? ss(s(nv)) : ss(s)));
}
let on, hn, as, It, hr;
const ms = {
  "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
  "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
  "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
  "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
  "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
  "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
  "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
  "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
};
function pr(t, e = "dark") {
  on && document.head.removeChild(on), on = document.createElement("style"), on.textContent = ws.createRootStyles(e, t), document.head.appendChild(on);
}
function Dv(t, e = "dark") {
  if (hr = t, hn = document.createElement("style"), as = document.createElement("style"), It = document.createElement("style"), hn.textContent = Bn(t).core.cssText, as.textContent = Bn(t).dark.cssText, It.textContent = Bn(t).light.cssText, document.head.appendChild(hn), document.head.appendChild(as), document.head.appendChild(It), pr(t, e), zo(e), !((t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"])))
    for (const [n, i] of Object.entries(ms)) {
      const r = document.createElement("link");
      r.rel = "preload", r.href = i, r.as = "font", r.type = n.includes("woff2") ? "font/woff2" : "font/woff", r.crossOrigin = "anonymous", document.head.appendChild(r);
    }
  zo(e);
}
function zo(t = "dark") {
  as && It && on && (t === "light" ? (pr(hr, t), as.removeAttribute("media"), It.media = "enabled") : (pr(hr, t), It.removeAttribute("media"), as.media = "enabled"));
}
function iv(t) {
  var e, s, n;
  if (hr = t, hn && as && It) {
    hn.textContent = Bn(t).core.cssText, as.textContent = Bn(t).dark.cssText, It.textContent = Bn(t).light.cssText;
    const i = (t == null ? void 0 : t["--apkt-font-family"]) || (t == null ? void 0 : t["--w3m-font-family"]);
    i && (hn.textContent = (e = hn.textContent) == null ? void 0 : e.replace("font-family: KHTeka", `font-family: ${i}`), as.textContent = (s = as.textContent) == null ? void 0 : s.replace("font-family: KHTeka", `font-family: ${i}`), It.textContent = (n = It.textContent) == null ? void 0 : n.replace("font-family: KHTeka", `font-family: ${i}`));
  }
  if (on) {
    const i = (It == null ? void 0 : It.media) === "enabled" ? "light" : "dark";
    pr(t, i);
  }
}
function Bn(t) {
  const e = !!(t != null && t["--apkt-font-family"] || t != null && t["--w3m-font-family"]);
  return {
    core: Ms`
      ${e ? Ms`` : Ms`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ss(ms["KHTeka-400-woff2"])}) format('woff2'),
                url(${ss(ms["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ss(ms["KHTeka-300-woff2"])}) format('woff2'),
                url(${ss(ms["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${ss(ms["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${ss(ms["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${ss(ms["KHTeka-400-woff2"])}) format('woff2'),
                url(${ss(ms["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
    dark: Ms`
      :root {
      }
    `,
    light: Ms`
      :root {
      }
    `
  };
}
const $v = Ms`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`, Lv = Ms`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`, ys = {
  EIP155: C.CHAIN.EVM,
  CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
  CONNECTOR_TYPE_INJECTED: "INJECTED",
  CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
  CONNECTOR_TYPE_AUTH: "AUTH"
}, rv = {
  NetworkImageIds: {
    // Ethereum
    1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    // Arbitrum
    42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
    // Avalanche
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    // Binance Smart Chain
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    // Fantom
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    // Optimism
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    // Polygon
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    // Mantle
    5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
    // Hedera Mainnet
    295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
    // Sepolia
    11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
    // Base Sepolia
    84532: "a18a7ecd-e307-4360-4746-283182228e00",
    // Unichain Sepolia
    1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
    // Unichain Mainnet
    130: "2257980a-3463-48c6-cbac-a42d2a956e00",
    // Monad Testnet
    10143: "0a728e83-bacb-46db-7844-948f05434900",
    // Gnosis
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    // EVMos
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    // ZkSync
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    // Filecoin
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    // Iotx
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    // Metis,
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    // Moonbeam
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    // Moonriver
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
    // Zora
    7777777: "845c60df-d429-4991-e687-91ae45791600",
    // Celo
    42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
    // Base
    8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
    // Aurora
    1313161554: "3ff73439-a619-4894-9262-4470c773a100",
    // Ronin Mainnet
    2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    // Saigon Testnet (a.k.a. Ronin)
    2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    // Berachain Mainnet
    80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
    // Abstract Mainnet
    2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
    // Solana networks
    "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    // Bitcoin
    "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
    // Bitcoin Testnet
    "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200",
    // Bitcoin Signet
    "00000008819873e925422c1ff0f99f7c": "b3406e4a-bbfc-44fb-e3a6-89673c78b700",
    // TON
    "-239": "20f673c0-095e-49b2-07cf-eb5049dcf600",
    // TON Testnet
    "-3": "20f673c0-095e-49b2-07cf-eb5049dcf600"
  }
}, Go = {
  getCaipTokens(t) {
    if (!t)
      return;
    const e = {};
    return Object.entries(t).forEach(([s, n]) => {
      e[`${ys.EIP155}:${s}`] = n;
    }), e;
  },
  isLowerCaseMatch(t, e) {
    return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
  },
  /**
   * Iterates the Auth connector supported chains and returns the namespace that is last connected to the active chain.
   * @returns ChainNamespace | undefined
   */
  getActiveNamespaceConnectedToAuth() {
    const t = f.state.activeChain;
    return C.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e) => R.getConnectorId(e) === C.CONNECTOR_ID.AUTH && e === t);
  },
  /**
   * Runs a condition function again and again until it returns true or the max number of tries is reached.
   *
   * @param conditionFn - A function (can be async) that returns true when the condition is met.
   * @param intervalMs - Time to wait between tries, in milliseconds.
   * @param maxRetries - Maximum number of times to try before stopping.
   * @returns A Promise that resolves to true if the condition becomes true in time, or false if it doesn't.
   */
  withRetry({ conditionFn: t, intervalMs: e, maxRetries: s }) {
    let n = 0;
    return new Promise((i) => {
      async function r() {
        return n += 1, await t() ? i(!0) : n >= s ? i(!1) : (setTimeout(r, e), null);
      }
      r();
    });
  },
  /**
   * Returns the chain namespace from user's chainId which is returned from Auth provider.
   * @param chainId - The chainId to parse.
   * @returns The chain namespace.
   */
  userChainIdToChainNamespace(t) {
    if (typeof t == "number")
      return C.CHAIN.EVM;
    const [e] = t.split(":");
    return e;
  },
  /**
   * Get all auth namespaces except the active one
   * @param activeNamespace - The active namespace
   * @returns All auth namespaces except the active one
   */
  getOtherAuthNamespaces(t) {
    return t ? C.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((n) => n !== t) : [];
  },
  /**
   * Gets the storage info for a connector
   * @param connectorId - The ID of the connector
   * @param namespace - The namespace of the connector
   * @returns
   */
  getConnectorStorageInfo(t, e) {
    const n = k.getConnections()[e] ?? [];
    return {
      hasDisconnected: k.isConnectorDisconnected(t, e),
      hasConnected: n.some((i) => Go.isLowerCaseMatch(i.connectorId, t))
    };
  }
}, ov = new AbortController(), xt = {
  EmbeddedWalletAbortController: ov,
  /**
   * Universal Provider errors. Make sure the `message` is matching with the errors thrown by the Universal Provider.
   * We use the `alertErrorKey` to map the error to the correct AppKit alert error.
   */
  UniversalProviderErrors: {
    UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
      message: "Unauthorized: origin not allowed",
      alertErrorKey: "ORIGIN_NOT_ALLOWED"
    },
    JWT_VALIDATION_ERROR: {
      message: "JWT validation error: JWT Token is not yet valid",
      alertErrorKey: "JWT_TOKEN_NOT_VALID"
    },
    INVALID_KEY: {
      message: "Unauthorized: invalid key",
      alertErrorKey: "INVALID_PROJECT_ID"
    }
  },
  ALERT_ERRORS: {
    SWITCH_NETWORK_NOT_FOUND: {
      code: "APKT001",
      displayMessage: "Network Not Found",
      debugMessage: "The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."
    },
    ORIGIN_NOT_ALLOWED: {
      code: "APKT002",
      displayMessage: "Invalid App Configuration",
      debugMessage: () => `The origin ${ii() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${A.state.projectId}]`
    },
    IFRAME_LOAD_FAILED: {
      code: "APKT003",
      displayMessage: "Network Error: Wallet Load Failed",
      debugMessage: () => "Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."
    },
    IFRAME_REQUEST_TIMEOUT: {
      code: "APKT004",
      displayMessage: "Wallet Request Timeout",
      debugMessage: () => "The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."
    },
    UNVERIFIED_DOMAIN: {
      code: "APKT005",
      displayMessage: "Unverified Domain",
      debugMessage: () => "Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."
    },
    JWT_TOKEN_NOT_VALID: {
      code: "APKT006",
      displayMessage: "Session Expired",
      debugMessage: "Your session is invalid or expired. Please check your system’s date and time settings, then reconnect."
    },
    INVALID_PROJECT_ID: {
      code: "APKT007",
      displayMessage: "Invalid Project ID",
      debugMessage: "The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."
    },
    PROJECT_ID_NOT_CONFIGURED: {
      code: "APKT008",
      displayMessage: "Project ID Missing",
      debugMessage: "No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."
    },
    SERVER_ERROR_APP_CONFIGURATION: {
      code: "APKT009",
      displayMessage: "Server Error",
      debugMessage: (t) => `Unable to fetch App Configuration. ${t}. Please check your network connection and try again shortly. Contact support if the issue persists.`
    },
    RATE_LIMITED_APP_CONFIGURATION: {
      code: "APKT010",
      displayMessage: "Rate Limited",
      debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
    }
  },
  ALERT_WARNINGS: {
    LOCAL_CONFIGURATION_IGNORED: {
      debugMessage: (t) => `[Reown Config Notice] ${t}`
    },
    INACTIVE_NAMESPACE_NOT_CONNECTED: {
      code: "APKTW001",
      displayMessage: "Inactive Namespace Not Connected",
      debugMessage: (t, e) => `An error occurred while connecting an inactive namespace ${t}: "${e}"`
    },
    INVALID_EMAIL: {
      code: "APKTW002",
      displayMessage: "Invalid Email Address",
      debugMessage: "Please enter a valid email address"
    }
  }
}, ku = {
  TOKEN_ADDRESSES_BY_SYMBOL: {
    USDC: {
      8453: qh.asset,
      84532: jh.asset
    }
  },
  getTokenSymbolByAddress(t) {
    if (!t)
      return;
    const [e] = Object.entries(ku.TOKEN_ADDRESSES_BY_SYMBOL).find(([s, n]) => Object.values(n).includes(t)) ?? [];
    return e;
  }
}, av = {
  createLogger(t, e = "error") {
    const s = Tl({
      level: e
    }), { logger: n } = Yo({
      opts: s
    });
    return n.error = (...i) => {
      for (const r of i)
        if (r instanceof Error) {
          t(r, ...i);
          return;
        }
      t(void 0, ...i);
    }, n;
  }
}, cv = "rpc.walletconnect.org";
function Nl(t, e) {
  const s = new URL("https://rpc.walletconnect.org/v1/");
  return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
}
const ro = [
  "near:mainnet",
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  "eip155:1101",
  "eip155:56",
  "eip155:42161",
  "eip155:7777777",
  "eip155:59144",
  "eip155:324",
  "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
  "eip155:5000",
  "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
  "eip155:80084",
  "eip155:5003",
  "eip155:100",
  "eip155:8453",
  "eip155:42220",
  "eip155:1313161555",
  "eip155:17000",
  "eip155:1",
  "eip155:300",
  "eip155:1313161554",
  "eip155:1329",
  "eip155:84532",
  "eip155:421614",
  "eip155:11155111",
  "eip155:8217",
  "eip155:43114",
  "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
  "eip155:999999999",
  "eip155:11155420",
  "eip155:80002",
  "eip155:97",
  "eip155:43113",
  "eip155:137",
  "eip155:10",
  "eip155:1301",
  "eip155:80094",
  "eip155:80069",
  "eip155:560048",
  "eip155:31",
  "eip155:2818",
  "eip155:57054",
  "eip155:911867",
  "eip155:534351",
  "eip155:1112",
  "eip155:534352",
  "eip155:1111",
  "eip155:146",
  "eip155:130",
  "eip155:1284",
  "eip155:30",
  "eip155:2810",
  "bip122:000000000019d6689c085ae165831e93",
  "bip122:000000000933ea01ad0ee984209779ba"
], On = {
  /**
   * Extends the RPC URL with the project ID if the RPC URL is a Reown URL
   * @param rpcUrl - The RPC URL to extend
   * @param projectId - The project ID to extend the RPC URL with
   * @returns The extended RPC URL
   */
  extendRpcUrlWithProjectId(t, e) {
    let s = !1;
    try {
      s = new URL(t).host === cv;
    } catch {
      s = !1;
    }
    if (s) {
      const n = new URL(t);
      return n.searchParams.has("projectId") || n.searchParams.set("projectId", e), n.toString();
    }
    return t;
  },
  isCaipNetwork(t) {
    return "chainNamespace" in t && "caipNetworkId" in t;
  },
  getChainNamespace(t) {
    return this.isCaipNetwork(t) ? t.chainNamespace : C.CHAIN.EVM;
  },
  getCaipNetworkId(t) {
    return this.isCaipNetwork(t) ? t.caipNetworkId : `${C.CHAIN.EVM}:${t.id}`;
  },
  // eslint-disable-next-line max-params
  getDefaultRpcUrl(t, e, s) {
    var i, r, o;
    const n = (o = (r = (i = t.rpcUrls) == null ? void 0 : i.default) == null ? void 0 : r.http) == null ? void 0 : o[0];
    return ro.includes(e) ? Nl(e, s) : n || "";
  },
  /**
   * Extends the CaipNetwork object with the image ID and image URL if the image ID is not provided
   * @param params - The parameters object
   * @param params.caipNetwork - The CaipNetwork object to extend
   * @param params.networkImageIds - The network image IDs
   * @param params.customNetworkImageUrls - The custom network image URLs
   * @param params.projectId - The project ID
   * @param params.customRpc - Boolean to indicate if the custom RPC URL should be used
   * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
   * @returns The extended array of CaipNetwork objects
   */
  extendCaipNetwork(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: n }) {
    var h, p, g, m, y, I, N;
    const i = this.getChainNamespace(t), r = this.getCaipNetworkId(t), o = (g = (p = (h = t.rpcUrls) == null ? void 0 : h.default) == null ? void 0 : p.http) == null ? void 0 : g[0], a = this.getDefaultRpcUrl(t, r, s), c = ((I = (y = (m = t == null ? void 0 : t.rpcUrls) == null ? void 0 : m.chainDefault) == null ? void 0 : y.http) == null ? void 0 : I[0]) || o, l = ((N = n == null ? void 0 : n[r]) == null ? void 0 : N.map((_) => _.url)) || [], d = [...l, ...a ? [a] : []], u = [...l];
    return c && !u.includes(c) && u.push(c), {
      ...t,
      chainNamespace: i,
      caipNetworkId: r,
      assets: {
        imageId: rv.NetworkImageIds[t.id],
        imageUrl: e == null ? void 0 : e[t.id]
      },
      rpcUrls: {
        ...t.rpcUrls,
        default: {
          http: d
        },
        // Save the networks original RPC URL default
        chainDefault: {
          http: u
        }
      }
    };
  },
  /**
   * Extends the array of CaipNetwork objects with the image ID and image URL if the image ID is not provided
   * @param caipNetworks - The array of CaipNetwork objects to extend
   * @param params - The parameters object
   * @param params.networkImageIds - The network image IDs
   * @param params.customNetworkImageUrls - The custom network image URLs
   * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
   * @param params.projectId - The project ID
   * @returns The extended array of CaipNetwork objects
   */
  extendCaipNetworks(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: n }) {
    return t.map((i) => On.extendCaipNetwork(i, {
      customNetworkImageUrls: e,
      customRpcUrls: n,
      projectId: s
    }));
  },
  getViemTransport(t, e, s) {
    var i, r, o;
    const n = [];
    return s == null || s.forEach((a) => {
      n.push(Oi(a.url, a.config));
    }), ro.includes(t.caipNetworkId) && n.push(Oi(Nl(t.caipNetworkId, e), {
      /*
       * The Blockchain API uses "Content-Type: text/plain" to avoid OPTIONS preflight requests
       * It will only work for viem >= 2.17.7
       */
      fetchOptions: {
        headers: {
          "Content-Type": "text/plain"
        }
      }
    })), (o = (r = (i = t == null ? void 0 : t.rpcUrls) == null ? void 0 : i.default) == null ? void 0 : r.http) == null || o.forEach((a) => {
      n.push(Oi(a));
    }), Na(n);
  },
  extendWagmiTransports(t, e, s) {
    if (ro.includes(t.caipNetworkId)) {
      const n = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
      return Na([s, Oi(n)]);
    }
    return s;
  },
  /**
   * Generates the unsupported network object with the given CaipNetwork ID
   * @param caipNetworkId - The CAIP network ID
   * @returns The unsupported CAIP network object
   */
  getUnsupportedNetwork(t) {
    return {
      id: t.split(":")[1],
      caipNetworkId: t,
      name: C.UNSUPPORTED_NETWORK_NAME,
      chainNamespace: t.split(":")[0],
      nativeCurrency: {
        name: "",
        decimals: 0,
        symbol: ""
      },
      rpcUrls: {
        default: {
          http: []
        }
      }
    };
  },
  /**
   * Gets the CaipNetwork object from the storage if `@appkit/active_caip_network_id` is being set
   * @returns CaipNetwork or undefined
   */
  getCaipNetworkFromStorage(t) {
    var c;
    const e = k.getActiveCaipNetworkId(), s = f.getAllRequestedCaipNetworks(), n = Array.from(((c = f.state.chains) == null ? void 0 : c.keys()) || []), i = e == null ? void 0 : e.split(":")[0], r = i ? n.includes(i) : !1, o = s == null ? void 0 : s.find((l) => l.caipNetworkId === e);
    return r && !o && e ? this.getUnsupportedNetwork(e) : o || t || (s == null ? void 0 : s[0]);
  }
}, Hi = {
  ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
  ERROR_CODE_DEFAULT: 5e3,
  ERROR_INVALID_CHAIN_ID: 32603
};
class lv extends Bh {
  async setUniversalProvider(e) {
    if (!this.namespace)
      throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
    return this.addConnector(new Fh({
      provider: e,
      caipNetworks: this.getCaipNetworks(),
      namespace: this.namespace
    })), Promise.resolve();
  }
  async connect(e) {
    return Promise.resolve({
      id: "WALLET_CONNECT",
      type: "WALLET_CONNECT",
      chainId: Number(e.chainId),
      provider: this.provider,
      address: ""
    });
  }
  async disconnect() {
    try {
      await this.getWalletConnectConnector().disconnect(), this.emit("disconnect");
    } catch (e) {
      console.warn("UniversalAdapter:disconnect - error", e);
    }
    return { connections: [] };
  }
  syncConnections() {
    return Promise.resolve();
  }
  async writeSolanaTransaction() {
    return Promise.resolve({
      hash: ""
    });
  }
  async getAccounts({ namespace: e }) {
    var i, r, o, a;
    const s = this.provider, n = ((a = (o = (r = (i = s == null ? void 0 : s.session) == null ? void 0 : i.namespaces) == null ? void 0 : r[e]) == null ? void 0 : o.accounts) == null ? void 0 : a.map((c) => {
      const [, , l] = c.split(":");
      return l;
    }).filter((c, l, d) => d.indexOf(c) === l)) || [];
    return Promise.resolve({
      accounts: n.map((c) => W.createAccount(e, c, e === "bip122" ? "payment" : "eoa"))
    });
  }
  async syncConnectors() {
    return Promise.resolve();
  }
  async getBalance(e) {
    var o, a, c, l, d;
    if (!(e.caipNetwork && le.BALANCE_SUPPORTED_CHAINS.includes((o = e.caipNetwork) == null ? void 0 : o.chainNamespace)) || (a = e.caipNetwork) != null && a.testnet)
      return {
        balance: "0.00",
        symbol: ((c = e.caipNetwork) == null ? void 0 : c.nativeCurrency.symbol) || ""
      };
    const n = f.getAccountData();
    if (n != null && n.balanceLoading && e.chainId === ((l = f.state.activeCaipNetwork) == null ? void 0 : l.id))
      return {
        balance: (n == null ? void 0 : n.balance) || "0.00",
        symbol: (n == null ? void 0 : n.balanceSymbol) || ""
      };
    const r = (await f.fetchTokenBalance()).find((u) => {
      var h, p;
      return u.chainId === `${(h = e.caipNetwork) == null ? void 0 : h.chainNamespace}:${e.chainId}` && u.symbol === ((p = e.caipNetwork) == null ? void 0 : p.nativeCurrency.symbol);
    });
    return {
      balance: (r == null ? void 0 : r.quantity.numeric) || "0.00",
      symbol: (r == null ? void 0 : r.symbol) || ((d = e.caipNetwork) == null ? void 0 : d.nativeCurrency.symbol) || ""
    };
  }
  async signMessage(e) {
    var o, a, c;
    const { provider: s, message: n, address: i } = e;
    if (!s)
      throw new Error("UniversalAdapter:signMessage - provider is undefined");
    let r = "";
    return ((o = f.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace) === C.CHAIN.SOLANA ? r = (await s.request({
      method: "solana_signMessage",
      params: {
        message: qn.encode(new TextEncoder().encode(n)),
        pubkey: i
      }
    }, (a = f.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId)).signature : r = await s.request({
      method: "personal_sign",
      params: [n, i]
    }, (c = f.state.activeCaipNetwork) == null ? void 0 : c.caipNetworkId), { signature: r };
  }
  // -- Transaction methods ---------------------------------------------------
  /**
   *
   * These methods are supported only on `wagmi` and `ethers` since the Solana SDK does not support them in the same way.
   * These function definition is to have a type parity between the clients. Currently not in use.
   */
  async estimateGas() {
    return Promise.resolve({
      gas: BigInt(0)
    });
  }
  async sendTransaction() {
    return Promise.resolve({
      hash: ""
    });
  }
  walletGetAssets(e) {
    return Promise.resolve({});
  }
  async writeContract() {
    return Promise.resolve({
      hash: ""
    });
  }
  emitFirstAvailableConnection() {
  }
  parseUnits() {
    return 0n;
  }
  formatUnits() {
    return "0";
  }
  async getCapabilities() {
    return Promise.resolve({});
  }
  async grantPermissions() {
    return Promise.resolve({});
  }
  async revokePermissions() {
    return Promise.resolve("0x");
  }
  async syncConnection() {
    return Promise.resolve({
      id: "WALLET_CONNECT",
      type: "WALLET_CONNECT",
      chainId: 1,
      provider: this.provider,
      address: ""
    });
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async switchNetwork(e) {
    var i, r, o, a, c, l;
    const { caipNetwork: s } = e, n = this.getWalletConnectConnector();
    if (s.chainNamespace === C.CHAIN.EVM)
      try {
        await ((i = n.provider) == null ? void 0 : i.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Sa(s.id) }]
        }));
      } catch (d) {
        if (d.code === Hi.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || d.code === Hi.ERROR_INVALID_CHAIN_ID || d.code === Hi.ERROR_CODE_DEFAULT || ((o = (r = d == null ? void 0 : d.data) == null ? void 0 : r.originalError) == null ? void 0 : o.code) === Hi.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)
          try {
            await ((l = n.provider) == null ? void 0 : l.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: Sa(s.id),
                  rpcUrls: [(a = s == null ? void 0 : s.rpcUrls.chainDefault) == null ? void 0 : a.http],
                  chainName: s.name,
                  nativeCurrency: s.nativeCurrency,
                  blockExplorerUrls: [(c = s.blockExplorers) == null ? void 0 : c.default.url]
                }
              ]
            }));
          } catch {
            throw new Error("Chain is not supported");
          }
      }
    n.provider.setDefaultChain(s.caipNetworkId);
  }
  getWalletConnectProvider() {
    const e = this.connectors.find((n) => n.type === "WALLET_CONNECT");
    return e == null ? void 0 : e.provider;
  }
}
const dv = [
  "email",
  "socials",
  "swaps",
  "onramp",
  "activity",
  "reownBranding",
  "multiWallet",
  "emailCapture",
  "payWithExchange",
  "payments",
  "reownAuthentication",
  "headless"
], Ki = {
  email: {
    apiFeatureName: "social_login",
    localFeatureName: "email",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => {
      if (!(t != null && t.config))
        return !1;
      const e = t.config;
      return !!t.isEnabled && e.includes("email");
    },
    processFallback: (t) => t === void 0 ? le.DEFAULT_REMOTE_FEATURES.email : !!t
  },
  socials: {
    apiFeatureName: "social_login",
    localFeatureName: "socials",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => {
      if (!(t != null && t.config))
        return !1;
      const e = t.config;
      return t.isEnabled && e.length > 0 ? e.filter((s) => s !== "email") : !1;
    },
    processFallback: (t) => t === void 0 ? le.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? le.DEFAULT_REMOTE_FEATURES.socials : !1 : t
  },
  swaps: {
    apiFeatureName: "swap",
    localFeatureName: "swaps",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => {
      if (!(t != null && t.config))
        return !1;
      const e = t.config;
      return t.isEnabled && e.length > 0 ? e : !1;
    },
    processFallback: (t) => t === void 0 ? le.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? le.DEFAULT_REMOTE_FEATURES.swaps : !1 : t
  },
  onramp: {
    apiFeatureName: "onramp",
    localFeatureName: "onramp",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => {
      if (!(t != null && t.config))
        return !1;
      const e = t.config;
      return t.isEnabled && e.length > 0 ? e : !1;
    },
    processFallback: (t) => t === void 0 ? le.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? le.DEFAULT_REMOTE_FEATURES.onramp : !1 : t
  },
  activity: {
    apiFeatureName: "activity",
    localFeatureName: "history",
    returnType: !1,
    isLegacy: !0,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: (t) => t === void 0 ? le.DEFAULT_REMOTE_FEATURES.activity : !!t
  },
  reownBranding: {
    apiFeatureName: "reown_branding",
    localFeatureName: "reownBranding",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: (t) => t === void 0 ? le.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
  },
  emailCapture: {
    apiFeatureName: "email_capture",
    localFeatureName: "emailCapture",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => t.isEnabled && (t.config ?? []),
    processFallback: (t) => !1
  },
  multiWallet: {
    apiFeatureName: "multi_wallet",
    localFeatureName: "multiWallet",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: () => le.DEFAULT_REMOTE_FEATURES.multiWallet
  },
  payWithExchange: {
    apiFeatureName: "fund_from_exchange",
    localFeatureName: "payWithExchange",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: () => le.DEFAULT_REMOTE_FEATURES.payWithExchange
  },
  payments: {
    apiFeatureName: "payments",
    localFeatureName: "payments",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: () => le.DEFAULT_REMOTE_FEATURES.payments
  },
  reownAuthentication: {
    apiFeatureName: "reown_authentication",
    localFeatureName: "reownAuthentication",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: (t) => typeof t > "u" ? le.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!t
  },
  headless: {
    apiFeatureName: "headless",
    localFeatureName: "headless",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: () => le.DEFAULT_REMOTE_FEATURES.headless
  }
}, uv = {
  localSettingsOverridden: /* @__PURE__ */ new Set(),
  getApiConfig(t, e) {
    return e == null ? void 0 : e.find((s) => s.id === t);
  },
  addWarning(t, e) {
    if (t !== void 0) {
      const s = Ki[e], n = s.isLegacy ? `"features.${s.localFeatureName}" (now "${e}")` : `"features.${e}"`;
      this.localSettingsOverridden.add(n);
    }
  },
  processFeature(t, e, s, n, i) {
    const r = Ki[t], o = e[r.localFeatureName];
    if (i && !r.isAvailableOnBasic)
      return !1;
    if (n) {
      const a = this.getApiConfig(r.apiFeatureName, s);
      return (a == null ? void 0 : a.config) === null ? this.processFallbackFeature(t, o) : a != null && a.config ? (o !== void 0 && this.addWarning(o, t), this.processApiFeature(t, a)) : !1;
    }
    return this.processFallbackFeature(t, o);
  },
  processApiFeature(t, e) {
    return Ki[t].processApi(e);
  },
  processFallbackFeature(t, e) {
    return Ki[t].processFallback(e);
  },
  async fetchRemoteFeatures(t) {
    const e = t.basic ?? !1, s = t.features || {};
    this.localSettingsOverridden.clear();
    let n = null, i = !1;
    try {
      n = await V.fetchProjectConfig(), i = n != null;
    } catch (o) {
      console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o);
    }
    const r = i && !e ? le.DEFAULT_REMOTE_FEATURES : le.DEFAULT_REMOTE_FEATURES_DISABLED;
    try {
      for (const o of dv) {
        const a = this.processFeature(o, s, n, i, e);
        Object.assign(r, { [o]: a });
      }
    } catch (o) {
      return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), le.DEFAULT_REMOTE_FEATURES;
    }
    if (i && this.localSettingsOverridden.size > 0) {
      const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
      bt.open({
        debugMessage: xt.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
      }, "warning");
    }
    return r;
  }
};
class hv {
  constructor(e) {
    this.chainNamespaces = [], this.features = {}, this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (s, n) => {
      var i, r, o;
      if (s) {
        const a = (i = f.getCaipNetworks(s)) == null ? void 0 : i.find((d) => d.id === n);
        if (a)
          return a;
        const c = (r = f.getNetworkData(s)) == null ? void 0 : r.caipNetwork;
        return c || ((o = f.getRequestedCaipNetworks(s).filter((d) => d.chainNamespace === s)) == null ? void 0 : o[0]);
      }
      return f.state.activeCaipNetwork || this.defaultCaipNetwork;
    }, this.getCaipNetworkId = () => {
      const s = this.getCaipNetwork();
      if (s)
        return s.id;
    }, this.getCaipNetworks = (s) => f.getCaipNetworks(s), this.getActiveChainNamespace = () => f.state.activeChain, this.setRequestedCaipNetworks = (s, n) => {
      f.setRequestedCaipNetworks(s, n);
    }, this.getApprovedCaipNetworkIds = () => f.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (s) => {
      var n, i;
      return f.state.activeChain === s || !s ? f.state.activeCaipAddress : (i = (n = f.state.chains.get(s)) == null ? void 0 : n.accountState) == null ? void 0 : i.caipAddress;
    }, this.setClientId = (s) => {
      te.setClientId(s);
    }, this.getProvider = (s) => Te.getProvider(s), this.getProviderType = (s) => Te.getProviderId(s), this.getPreferredAccountType = (s) => Lt(s), this.setCaipAddress = (s, n, i = !1) => {
      f.setAccountProp("caipAddress", s, n, i), f.setAccountProp("address", W.getPlainAddress(s), n, i);
    }, this.setBalance = (s, n, i) => {
      f.setAccountProp("balance", s, i), f.setAccountProp("balanceSymbol", n, i);
    }, this.setProfileName = (s, n) => {
      f.setAccountProp("profileName", s, n);
    }, this.setProfileImage = (s, n) => {
      f.setAccountProp("profileImage", s, n);
    }, this.setUser = (s, n) => {
      f.setAccountProp("user", s, n);
    }, this.resetAccount = (s) => {
      f.resetAccount(s);
    }, this.setCaipNetwork = (s) => {
      f.setActiveCaipNetwork(s);
    }, this.setCaipNetworkOfNamespace = (s, n) => {
      f.setChainNetworkData(n, { caipNetwork: s });
    }, this.setStatus = (s, n) => {
      f.setAccountProp("status", s, n), R.isConnected() ? k.setConnectionStatus("connected") : k.setConnectionStatus("disconnected");
    }, this.getAddressByChainNamespace = (s) => {
      var n;
      return (n = f.getAccountData(s)) == null ? void 0 : n.address;
    }, this.setConnectors = (s) => {
      const n = [...R.state.allConnectors, ...s];
      R.setConnectors(n);
    }, this.setConnections = (s, n) => {
      k.setConnections(s, n), D.setConnections(s, n);
    }, this.fetchIdentity = (s) => te.fetchIdentity(s), this.getReownName = (s) => di.getNamesForAddress(s), this.getConnectors = () => R.getConnectors(), this.getConnectorImage = (s) => Qi.getConnectorImage(s), this.getConnections = (s) => this.remoteFeatures.multiWallet ? er.getConnectionsData(s).connections : (bt.open(C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = (s) => this.remoteFeatures.multiWallet ? er.getConnectionsData(s).recentConnections : (bt.open(C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async (s) => {
      if (!this.remoteFeatures.multiWallet) {
        bt.open(C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return;
      }
      await D.switchConnection(s);
    }, this.deleteConnection = (s) => {
      if (!this.remoteFeatures.multiWallet) {
        bt.open(C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
        return;
      }
      k.deleteAddressFromConnection(s), D.syncStorageConnections();
    }, this.setConnectedWalletInfo = (s, n) => {
      const i = Te.getProviderId(n), r = s ? { ...s, type: i } : void 0;
      f.setAccountProp("connectedWalletInfo", r, n);
    }, this.getIsConnectedState = () => !!f.state.activeCaipAddress, this.addAddressLabel = (s, n, i) => {
      var o;
      const r = ((o = f.getAccountData(i)) == null ? void 0 : o.addressLabels) || {};
      f.setAccountProp("addressLabels", { ...r, [s]: n }, i);
    }, this.removeAddressLabel = (s, n) => {
      var r;
      const i = ((r = f.getAccountData(n)) == null ? void 0 : r.addressLabels) || {};
      f.setAccountProp("addressLabels", { ...i, [s]: void 0 }, n);
    }, this.getAddress = (s) => {
      var i;
      const n = s || f.state.activeChain;
      return (i = f.getAccountData(n)) == null ? void 0 : i.address;
    }, this.resetNetwork = (s) => {
      f.resetNetwork(s);
    }, this.addConnector = (s) => {
      R.addConnector(s);
    }, this.resetWcConnection = () => {
      D.resetWcConnection();
    }, this.setAddressExplorerUrl = (s, n) => {
      f.setAccountProp("addressExplorerUrl", s, n);
    }, this.setSmartAccountDeployed = (s, n) => {
      f.setAccountProp("smartAccountDeployed", s, n);
    }, this.setPreferredAccountType = (s, n) => {
      f.setAccountProp("preferredAccountType", s, n);
    }, this.setEIP6963Enabled = (s) => {
      A.setEIP6963Enabled(s);
    }, this.handleUnsafeRPCRequest = () => {
      if (this.isOpen()) {
        if (this.isTransactionStackEmpty())
          return;
        this.redirect("ApproveTransaction");
      } else
        this.open({ view: "ApproveTransaction" });
    }, this.options = e, this.version = e.sdkVersion, this.caipNetworks = this.extendCaipNetworks(e), this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e), this.chainAdapters = this.createAdapters(e.adapters), this.readyPromise = this.initialize(e);
  }
  getChainNamespacesSet(e, s) {
    const n = e == null ? void 0 : e.map((r) => r.namespace).filter((r) => !!r);
    if (n != null && n.length)
      return [...new Set(n)];
    const i = s == null ? void 0 : s.map((r) => r.chainNamespace);
    return [...new Set(i)];
  }
  async initialize(e) {
    var s, n, i, r, o, a;
    if (this.initializeProjectSettings(e), this.initControllers(e), await this.initChainAdapters(), this.sendInitializeEvent(e), (s = e.features) != null && s.headless && !rt.hasInjectedConnectors() && V.prefetch({
      fetchNetworkImages: !1,
      fetchConnectorImages: !1,
      fetchWalletRanks: !1,
      fetchRecommendedWallets: !0
    }), A.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), !e.basic && !e.manualWCControl && (this.remoteFeatures = await uv.fetchRemoteFeatures(e)), await V.fetchUsage(), A.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && ho.setOnrampProviders(this.remoteFeatures.onramp), ((n = A.state.remoteFeatures) != null && n.email || Array.isArray((i = A.state.remoteFeatures) == null ? void 0 : i.socials) && ((r = A.state.remoteFeatures) == null ? void 0 : r.socials.length) > 0) && await this.checkAllowedOrigins(), (o = A.state.features) != null && o.reownAuthentication || (a = A.state.remoteFeatures) != null && a.reownAuthentication) {
      const { ReownAuthentication: c } = await import("./features-CRnorIJW.mjs"), l = A.state.siwx;
      l instanceof c || (l && console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden."), A.setSIWX(new c()));
    }
  }
  async openSend(e) {
    var r;
    const s = e.namespace || f.state.activeChain, n = this.getCaipAddress(s), i = (r = this.getCaipNetwork(s)) == null ? void 0 : r.id;
    if (!n)
      throw new Error("openSend: caipAddress not found");
    if ((i == null ? void 0 : i.toString()) !== e.chainId.toString()) {
      const o = f.getCaipNetworkById(e.chainId, s);
      if (!o)
        throw new Error(`openSend: caipNetwork with chainId ${e.chainId} not found`);
      await this.switchNetwork(o, { throwOnFailure: !0 });
    }
    try {
      const o = ku.getTokenSymbolByAddress(e.assetAddress);
      o && await V.fetchTokenImages([o]);
    } catch {
    }
    return await de.open({
      view: "WalletSend",
      data: { send: e }
    }), new Promise((o, a) => {
      const c = ae.subscribeKey("hash", (u) => {
        u && (d(), o({ hash: u }));
      }), l = de.subscribe((u) => {
        u.open || (d(), a(new Error("Modal closed")));
      }), d = this.createCleanupHandler([c, l]);
    });
  }
  toModalOptions() {
    function e(n) {
      return (n == null ? void 0 : n.view) === "Swap";
    }
    function s(n) {
      return (n == null ? void 0 : n.view) === "WalletSend";
    }
    return {
      isSwap: e,
      isSend: s
    };
  }
  async checkAllowedOrigins() {
    try {
      const e = await V.fetchAllowedOrigins();
      if (!W.isClient())
        return;
      const s = window.location.origin;
      Hs.isOriginAllowed(s, e, C.DEFAULT_ALLOWED_ANCESTORS) || bt.open(xt.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
    } catch (e) {
      if (!(e instanceof Error))
        return;
      switch (e.message) {
        case "RATE_LIMITED":
          bt.open(xt.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
          break;
        case "SERVER_ERROR": {
          const s = e.cause instanceof Error ? e.cause : e;
          bt.open({
            displayMessage: xt.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
            debugMessage: xt.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(s.message)
          }, "error");
          break;
        }
      }
    }
  }
  createCleanupHandler(e) {
    return () => {
      e.forEach((s) => {
        try {
          s();
        } catch {
        }
      });
    };
  }
  sendInitializeEvent(e) {
    var n;
    const { ...s } = e;
    delete s.adapters, delete s.universalProvider, oe.sendEvent({
      type: "track",
      event: "INITIALIZE",
      properties: {
        ...s,
        networks: e.networks.map((i) => i.id),
        siweConfig: {
          options: ((n = e.siweConfig) == null ? void 0 : n.options) || {}
        }
      }
    });
  }
  // -- Controllers initialization ---------------------------------------------------
  initControllers(e) {
    this.initializeOptionsController(e), this.initializeChainController(e), this.initializeThemeController(e), this.initializeConnectionController(e), this.initializeConnectorController();
  }
  initAdapterController() {
    Ml.initialize(this.chainAdapters);
  }
  initializeThemeController(e) {
    e.themeMode && Ct.setThemeMode(e.themeMode), e.themeVariables && Ct.setThemeVariables(e.themeVariables);
  }
  initializeChainController(e) {
    if (!this.connectionControllerClient)
      throw new Error("ConnectionControllerClient must be set");
    f.initialize(e.adapters ?? [], this.caipNetworks, {
      connectionControllerClient: this.connectionControllerClient
    });
    const s = this.getDefaultNetwork();
    s && f.setActiveCaipNetwork(s);
  }
  initializeConnectionController(e) {
    D.initialize(e.adapters ?? []), D.setWcBasic(e.basic ?? !1);
  }
  initializeConnectorController() {
    R.initialize(this.chainNamespaces);
  }
  initializeProjectSettings(e) {
    A.setProjectId(e.projectId), A.setSdkVersion(e.sdkVersion);
  }
  initializeOptionsController(e) {
    var i;
    A.setDebug(e.debug !== !1), A.setEnableWalletGuide(e.enableWalletGuide !== !1), A.setEnableWallets(e.enableWallets !== !1), A.setEIP6963Enabled(e.enableEIP6963 !== !1), A.setEnableNetworkSwitch(e.enableNetworkSwitch !== !1), A.setEnableReconnect(e.enableReconnect !== !1), A.setEnableMobileFullScreen(e.enableMobileFullScreen === !0), A.setCoinbasePreference(e.coinbasePreference), A.setEnableAuthLogger(e.enableAuthLogger !== !1), A.setCustomRpcUrls(e.customRpcUrls), A.setEnableEmbedded(e.enableEmbedded), A.setAllWallets(e.allWallets), A.setIncludeWalletIds(e.includeWalletIds), A.setExcludeWalletIds(e.excludeWalletIds), A.setFeaturedWalletIds(e.featuredWalletIds), A.setTokens(e.tokens), A.setTermsConditionsUrl(e.termsConditionsUrl), A.setPrivacyPolicyUrl(e.privacyPolicyUrl), A.setCustomWallets(e.customWallets), A.setFeatures(e.features), A.setAllowUnsupportedChain(e.allowUnsupportedChain), A.setUniversalProviderConfigOverride(e.universalProviderConfigOverride), A.setPreferUniversalLinks(e.experimental_preferUniversalLinks), A.setDefaultAccountTypes(e.defaultAccountTypes);
    const s = this.getDefaultMetaData();
    if (!e.metadata && s && (e.metadata = s), A.setMetadata(e.metadata), A.setDisableAppend(e.disableAppend), A.setEnableEmbedded(e.enableEmbedded), A.setSIWX(e.siwx), this.features = A.state.features ?? {}, !e.projectId) {
      bt.open(xt.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
      return;
    }
    if (((i = e.adapters) == null ? void 0 : i.find((r) => r.namespace === C.CHAIN.EVM)) && e.siweConfig) {
      if (e.siwx)
        throw new Error("Cannot set both `siweConfig` and `siwx` options");
      A.setSIWX(e.siweConfig.mapToSIWX());
    }
  }
  getDefaultMetaData() {
    var e, s, n, i;
    return W.isClient() ? {
      name: ((s = (e = document.getElementsByTagName("title")) == null ? void 0 : e[0]) == null ? void 0 : s.textContent) || "",
      description: ((n = document.querySelector('meta[property="og:description"]')) == null ? void 0 : n.content) || "",
      url: window.location.origin,
      icons: [((i = document.querySelector('link[rel~="icon"]')) == null ? void 0 : i.href) || ""]
    } : null;
  }
  // -- Network Initialization ---------------------------------------------------
  setUnsupportedNetwork(e) {
    const s = this.getActiveChainNamespace();
    if (s) {
      const n = On.getUnsupportedNetwork(`${s}:${e}`);
      f.setActiveCaipNetwork(n);
    }
  }
  getDefaultNetwork() {
    return On.getCaipNetworkFromStorage(this.defaultCaipNetwork);
  }
  extendCaipNetwork(e, s) {
    return On.extendCaipNetwork(e, {
      customNetworkImageUrls: s.chainImages,
      projectId: s.projectId
    });
  }
  extendCaipNetworks(e) {
    return On.extendCaipNetworks(e.networks, {
      customNetworkImageUrls: e.chainImages,
      customRpcUrls: e.customRpcUrls,
      projectId: e.projectId
    });
  }
  extendDefaultCaipNetwork(e) {
    const s = e.networks.find((i) => {
      var r;
      return i.id === ((r = e.defaultNetwork) == null ? void 0 : r.id);
    });
    return s ? On.extendCaipNetwork(s, {
      customNetworkImageUrls: e.chainImages,
      customRpcUrls: e.customRpcUrls,
      projectId: e.projectId
    }) : void 0;
  }
  /**
   * Disconnects a connector with the given namespace and id. If the connector id is not provided, disconnects the adapter (namespace).
   * @param namespace ChainNamespace
   * @param id string
   * @returns
   */
  async disconnectConnector(e, s) {
    var n, i;
    try {
      this.setLoading(!0, e);
      let r = {
        connections: []
      };
      const o = this.getAdapter(e);
      return (((i = (n = f.state.chains.get(e)) == null ? void 0 : n.accountState) == null ? void 0 : i.caipAddress) || !A.state.enableReconnect) && (o != null && o.disconnect) && (r = await o.disconnect({ id: s })), this.setLoading(!1, e), r;
    } catch (r) {
      throw this.setLoading(!1, e), new Error(`Failed to disconnect chains: ${r.message}`);
    }
  }
  // -- Client Initialization ---------------------------------------------------
  createClients() {
    this.connectionControllerClient = {
      connectWalletConnect: async () => {
        var l;
        const e = f.state.activeChain, s = this.getAdapter(e), n = (l = this.getCaipNetwork(e)) == null ? void 0 : l.id, i = D.getConnections(e), r = this.remoteFeatures.multiWallet, o = i.length > 0;
        if (!s)
          throw new Error("Adapter not found");
        const a = await s.connectWalletConnect(n);
        (!o || !r) && this.close(), this.setClientId((a == null ? void 0 : a.clientId) || null), k.setConnectedNamespaces([...f.state.chains.keys()]), await this.syncWalletConnectAccount(), await Vt.initializeIfEnabled();
      },
      connectExternal: async (e) => {
        const s = await this.onConnectExternal(e);
        return await this.connectInactiveNamespaces(e, s), s ? { address: s.address } : void 0;
      },
      reconnectExternal: async ({ id: e, info: s, type: n, provider: i }) => {
        var a;
        const r = f.state.activeChain, o = this.getAdapter(r);
        if (!r)
          throw new Error("reconnectExternal: namespace not found");
        if (!o)
          throw new Error("reconnectExternal: adapter not found");
        o != null && o.reconnect && (await (o == null ? void 0 : o.reconnect({ id: e, info: s, type: n, provider: i, chainId: (a = this.getCaipNetwork()) == null ? void 0 : a.id })), k.addConnectedNamespace(r), this.syncConnectedWalletInfo(r));
      },
      disconnectConnector: async (e) => {
        await this.disconnectConnector(e.namespace, e.id);
      },
      disconnect: async (e) => {
        var l;
        const { id: s, chainNamespace: n, initialDisconnect: i } = e || {}, r = n || f.state.activeChain, o = R.getConnectorId(r), a = s === C.CONNECTOR_ID.AUTH || o === C.CONNECTOR_ID.AUTH, c = s === C.CONNECTOR_ID.WALLET_CONNECT || o === C.CONNECTOR_ID.WALLET_CONNECT;
        try {
          const d = Array.from(f.state.chains.keys());
          let u = n ? [n] : d;
          (c || a) && (u = d);
          const h = u.map(async (m) => {
            const y = R.getConnectorId(m), I = s || y, N = await this.disconnectConnector(m, I);
            N && (a && k.deleteConnectedSocialProvider(), N.connections.forEach((_) => {
              k.addDisconnectedConnectorId(_.connectorId, m);
            })), i && this.onDisconnectNamespace({ chainNamespace: m, closeModal: !1 });
          }), p = await Promise.allSettled(h);
          ae.resetSend(), D.resetWcConnection(), (l = Vt.getSIWX()) != null && l.signOutOnDisconnect && await Vt.clearSessions(), R.setFilterByNamespace(void 0), D.syncStorageConnections();
          const g = p.filter((m) => m.status === "rejected");
          if (g.length > 0)
            throw new Error(g.map((m) => m.reason.message).join(", "));
          oe.sendEvent({
            type: "track",
            event: "DISCONNECT_SUCCESS",
            properties: {
              namespace: n || "all"
            }
          });
        } catch (d) {
          throw new Error(`Failed to disconnect chains: ${d.message}`);
        }
      },
      checkInstalled: (e) => e ? e.some((s) => {
        var n;
        return !!((n = window.ethereum) != null && n[String(s)]);
      }) : !!window.ethereum,
      signMessage: async (e) => {
        const s = f.state.activeChain, n = this.getAdapter(f.state.activeChain);
        if (!s)
          throw new Error("signMessage: namespace not found");
        if (!n)
          throw new Error("signMessage: adapter not found");
        const i = this.getAddress(s);
        if (!i)
          throw new Error("signMessage: address not found");
        const r = await (n == null ? void 0 : n.signMessage({
          message: e,
          address: i,
          provider: Te.getProvider(s)
        }));
        return (r == null ? void 0 : r.signature) || "";
      },
      sendTransaction: async (e) => {
        const s = e.chainNamespace;
        if (!s)
          throw new Error("sendTransaction: namespace not found");
        if (le.SEND_SUPPORTED_NAMESPACES.includes(s)) {
          const n = this.getAdapter(s);
          if (!n)
            throw new Error("sendTransaction: adapter not found");
          const i = Te.getProvider(s), r = await (n == null ? void 0 : n.sendTransaction({
            ...e,
            caipNetwork: this.getCaipNetwork(),
            provider: i
          }));
          return (r == null ? void 0 : r.hash) || "";
        }
        return "";
      },
      estimateGas: async (e) => {
        const s = e.chainNamespace;
        if (s === C.CHAIN.EVM) {
          const n = this.getAdapter(s);
          if (!n)
            throw new Error("estimateGas: adapter is required but got undefined");
          const i = Te.getProvider(s), r = this.getCaipNetwork();
          if (!r)
            throw new Error("estimateGas: caipNetwork is required but got undefined");
          const o = await (n == null ? void 0 : n.estimateGas({ ...e, provider: i, caipNetwork: r }));
          return (o == null ? void 0 : o.gas) || 0n;
        }
        return 0n;
      },
      getEnsAvatar: async () => {
        var i;
        const e = f.state.activeChain;
        if (!e)
          throw new Error("getEnsAvatar: namespace is required but got undefined");
        const s = this.getAddress(e);
        if (!s)
          throw new Error("getEnsAvatar: address not found");
        await this.syncIdentity({
          address: s,
          chainId: Number((i = this.getCaipNetwork()) == null ? void 0 : i.id),
          chainNamespace: e
        });
        const n = f.getAccountData();
        return (n == null ? void 0 : n.profileImage) || !1;
      },
      getEnsAddress: async (e) => await Hs.resolveReownName(e),
      writeContract: async (e) => {
        const s = f.state.activeChain, n = this.getAdapter(s);
        if (!s)
          throw new Error("writeContract: namespace is required but got undefined");
        if (!n)
          throw new Error("writeContract: adapter is required but got undefined");
        const i = this.getCaipNetwork(), r = this.getCaipAddress(), o = Te.getProvider(s);
        if (!i || !r)
          throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
        const a = await (n == null ? void 0 : n.writeContract({ ...e, caipNetwork: i, provider: o, caipAddress: r }));
        return a == null ? void 0 : a.hash;
      },
      writeSolanaTransaction: async (e) => {
        const s = f.state.activeChain, n = this.getAdapter(s);
        if (!s)
          throw new Error("writeContract: namespace is required but got undefined");
        if (!n)
          throw new Error("writeContract: adapter is required but got undefined");
        const i = this.getCaipNetwork(), r = this.getCaipAddress(), o = Te.getProvider(s);
        if (!i || !r)
          throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
        const a = await (n == null ? void 0 : n.writeSolanaTransaction({
          ...e,
          caipNetwork: i,
          provider: o,
          caipAddress: r
        }));
        return a == null ? void 0 : a.hash;
      },
      parseUnits: (e, s) => {
        const n = this.getAdapter(f.state.activeChain);
        if (!n)
          throw new Error("parseUnits: adapter is required but got undefined");
        return (n == null ? void 0 : n.parseUnits({ value: e, decimals: s })) ?? 0n;
      },
      formatUnits: (e, s) => {
        const n = this.getAdapter(f.state.activeChain);
        if (!n)
          throw new Error("formatUnits: adapter is required but got undefined");
        return (n == null ? void 0 : n.formatUnits({ value: e, decimals: s })) ?? "0";
      },
      getCapabilities: async (e) => {
        const s = this.getAdapter(f.state.activeChain);
        if (!s)
          throw new Error("getCapabilities: adapter is required but got undefined");
        return await (s == null ? void 0 : s.getCapabilities(e));
      },
      grantPermissions: async (e) => {
        const s = this.getAdapter(f.state.activeChain);
        if (!s)
          throw new Error("grantPermissions: adapter is required but got undefined");
        return await (s == null ? void 0 : s.grantPermissions(e));
      },
      revokePermissions: async (e) => {
        const s = this.getAdapter(f.state.activeChain);
        if (!s)
          throw new Error("revokePermissions: adapter is required but got undefined");
        return s != null && s.revokePermissions ? await s.revokePermissions(e) : "0x";
      },
      walletGetAssets: async (e) => {
        const s = this.getAdapter(f.state.activeChain);
        if (!s)
          throw new Error("walletGetAssets: adapter is required but got undefined");
        return await (s == null ? void 0 : s.walletGetAssets(e)) ?? {};
      },
      updateBalance: (e) => {
        const s = this.getAddress(e), n = this.getCaipNetwork(e);
        !n || !s || this.updateNativeBalance(s, n == null ? void 0 : n.id, e);
      }
    }, D.setClient(this.connectionControllerClient);
  }
  async onConnectExternal(e) {
    var l, d, u, h, p, g, m, y;
    const s = f.state.activeChain, n = e.chain || s, i = this.getAdapter(n);
    let r = !0;
    if (e.type === ys.CONNECTOR_TYPE_AUTH && C.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((_) => R.getConnectorId(_) === C.CONNECTOR_ID.AUTH) && e.chain !== s && (r = !1), e.chain && e.chain !== s && !e.caipNetwork) {
      const I = this.getCaipNetworks().find((N) => N.chainNamespace === e.chain);
      I && r && this.setCaipNetwork(I);
    }
    if (!n)
      throw new Error("connectExternal: namespace not found");
    if (!i)
      throw new Error("connectExternal: adapter not found");
    const o = this.getCaipNetwork(n), a = e.caipNetwork || o, c = await i.connect({
      id: e.id,
      address: e.address,
      info: e.info,
      type: e.type,
      provider: e.provider,
      socialUri: e.socialUri,
      chainId: ((l = e.caipNetwork) == null ? void 0 : l.id) || (o == null ? void 0 : o.id),
      rpcUrl: ((p = (h = (u = (d = e.caipNetwork) == null ? void 0 : d.rpcUrls) == null ? void 0 : u.default) == null ? void 0 : h.http) == null ? void 0 : p[0]) || ((y = (m = (g = o == null ? void 0 : o.rpcUrls) == null ? void 0 : g.default) == null ? void 0 : m.http) == null ? void 0 : y[0])
    });
    if (c)
      return k.addConnectedNamespace(n), this.syncProvider({ ...c, chainNamespace: n }), this.setStatus("connected", n), this.syncConnectedWalletInfo(n), k.removeDisconnectedConnectorId(e.id, n), { address: c.address, connectedCaipNetwork: a };
  }
  async connectInactiveNamespaces(e, s) {
    var a;
    const n = e.type === ys.CONNECTOR_TYPE_AUTH, i = Go.getOtherAuthNamespaces((a = s == null ? void 0 : s.connectedCaipNetwork) == null ? void 0 : a.chainNamespace), r = f.state.activeCaipNetwork, o = this.getAdapter(r == null ? void 0 : r.chainNamespace);
    n && (await Promise.all(i.map(async (c) => {
      var l, d, u;
      try {
        const h = Te.getProvider(c), p = this.getCaipNetwork(c), g = this.getAdapter(c);
        await (g == null ? void 0 : g.connect({
          ...e,
          provider: h,
          socialUri: void 0,
          chainId: p == null ? void 0 : p.id,
          rpcUrl: (u = (d = (l = p == null ? void 0 : p.rpcUrls) == null ? void 0 : l.default) == null ? void 0 : d.http) == null ? void 0 : u[0]
        })) && (k.addConnectedNamespace(c), k.removeDisconnectedConnectorId(e.id, c), this.setStatus("connected", c), this.syncConnectedWalletInfo(c));
      } catch (h) {
        bt.warn(xt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, xt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(c, h instanceof Error ? h.message : void 0), xt.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
      }
    })), r && await (o == null ? void 0 : o.switchNetwork({
      caipNetwork: r
    })));
  }
  getApprovedCaipNetworksData() {
    var s, n, i, r, o;
    if (Te.getProviderId(f.state.activeChain) === ys.CONNECTOR_TYPE_WALLET_CONNECT) {
      const a = (n = (s = this.universalProvider) == null ? void 0 : s.session) == null ? void 0 : n.namespaces;
      return {
        /*
         * MetaMask Wallet only returns 1 namespace in the session object. This makes it imposible
         * to switch to other networks. Setting supportsAllNetworks to true for MetaMask Wallet
         * will make it possible to switch to other networks.
         */
        supportsAllNetworks: ((o = (r = (i = this.universalProvider) == null ? void 0 : i.session) == null ? void 0 : r.peer) == null ? void 0 : o.metadata.name) === "MetaMask Wallet",
        approvedCaipNetworkIds: this.getChainsFromNamespaces(a)
      };
    }
    return { supportsAllNetworks: !0, approvedCaipNetworkIds: [] };
  }
  async switchCaipNetwork(e) {
    const s = e.chainNamespace;
    if (this.getAddressByChainNamespace(e.chainNamespace)) {
      const i = Te.getProviderId(s);
      if (e.chainNamespace === f.state.activeChain) {
        const r = this.getAdapter(s);
        await (r == null ? void 0 : r.switchNetwork({ caipNetwork: e }));
      } else if (this.setCaipNetwork(e), i === ys.CONNECTOR_TYPE_WALLET_CONNECT)
        this.syncWalletConnectAccount();
      else {
        const r = this.getAddressByChainNamespace(s);
        r && this.syncAccount({
          address: r,
          chainId: e.id,
          chainNamespace: s
        });
      }
    } else
      this.setCaipNetwork(e);
  }
  getChainsFromNamespaces(e = {}) {
    return Object.values(e).flatMap((s) => {
      const n = s.chains || [], i = s.accounts.map((r) => {
        const { chainId: o, chainNamespace: a } = Ge.parseCaipAddress(r);
        return `${a}:${o}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...n, ...i]));
    });
  }
  // -- Adapter Initialization ---------------------------------------------------
  createAdapters(e) {
    return this.createClients(), this.chainNamespaces.reduce((s, n) => {
      var r, o;
      const i = e == null ? void 0 : e.find((a) => a.namespace === n);
      return i ? (i.construct({
        namespace: n,
        projectId: (r = this.options) == null ? void 0 : r.projectId,
        networks: (o = this.caipNetworks) == null ? void 0 : o.filter(({ chainNamespace: a }) => a === n)
      }), s[n] = i) : s[n] = new lv({
        namespace: n,
        networks: this.getCaipNetworks()
      }), s;
    }, {});
  }
  async initChainAdapter(e) {
    this.onConnectors(e), this.listenAdapter(e);
    const s = this.getAdapter(e);
    if (!s)
      throw new Error("adapter not found");
    await s.syncConnectors(), await this.createUniversalProviderForAdapter(e);
  }
  async initChainAdapters() {
    await Promise.all(this.chainNamespaces.map(async (e) => {
      await this.initChainAdapter(e);
    })), this.initAdapterController();
  }
  onConnectors(e) {
    const s = this.getAdapter(e);
    s == null || s.on("connectors", this.setConnectors.bind(this));
  }
  listenAdapter(e) {
    const s = this.getAdapter(e);
    if (!s)
      return;
    const n = k.getConnectionStatus();
    A.state.enableReconnect === !1 ? this.setStatus("disconnected", e) : n === "connected" ? this.setStatus("connecting", e) : n === "disconnected" ? (k.clearAddressCache(), this.setStatus(n, e)) : this.setStatus(n, e), s.on("switchNetwork", ({ address: i, chainId: r }) => {
      var l, d;
      const o = this.getCaipNetworks().find((u) => u.id.toString() === r.toString() || u.caipNetworkId.toString() === r.toString()), a = f.state.activeChain === e, c = (d = (l = f.state.chains.get(e)) == null ? void 0 : l.accountState) == null ? void 0 : d.address;
      if (o) {
        const u = a && i ? i : c;
        u && this.syncAccount({ address: u, chainId: o.id, chainNamespace: e });
      } else
        this.setUnsupportedNetwork(r);
    }), s.on("disconnect", () => {
      const i = this.remoteFeatures.multiWallet, r = Array.from(D.state.connections.values()).flat();
      this.onDisconnectNamespace({
        chainNamespace: e,
        closeModal: !i || r.length === 0
      });
    }), s.on("connections", (i) => {
      this.setConnections(i, e);
    }), s.on("pendingTransactions", () => {
      const i = this.getAddress(e), r = f.state.activeCaipNetwork;
      !i || !(r != null && r.id) || this.updateNativeBalance(i, r.id, r.chainNamespace);
    }), s.on("accountChanged", ({ address: i, chainId: r, connector: o }) => {
      var d, u;
      this.handlePreviousConnectorConnection(o);
      const a = f.state.activeChain === e;
      o != null && o.provider && (this.syncProvider({
        id: o.id,
        type: o.type,
        provider: o == null ? void 0 : o.provider,
        chainNamespace: e
      }), this.syncConnectedWalletInfo(e));
      const c = (u = (d = f.getNetworkData(e)) == null ? void 0 : d.caipNetwork) == null ? void 0 : u.id, l = r || c;
      a && l ? this.syncAccount({
        address: i,
        chainId: l,
        chainNamespace: e
      }) : !a && l ? (this.syncAccountInfo(i, l, e), this.syncBalance({ address: i, chainId: l, chainNamespace: e })) : this.syncAccountInfo(i, r, e), k.addConnectedNamespace(e);
    });
  }
  /**
   * Checks the incoming connector and handles the previous connection in the connector's namespace, and if necessary (i.e multi-wallet is disabled) disconnects the previous connector
   * @param connector
   */
  async handlePreviousConnectorConnection(e) {
    var c;
    const s = e == null ? void 0 : e.chain, n = e == null ? void 0 : e.id, i = R.getConnectorId(s), r = (c = A.state.remoteFeatures) == null ? void 0 : c.multiWallet, a = s && n && i && i !== n && !r;
    try {
      a && await D.disconnect({ id: i, namespace: s });
    } catch (l) {
      console.warn("Error disconnecting previous connector", l);
    }
  }
  async createUniversalProviderForAdapter(e) {
    var s, n, i;
    await this.getUniversalProvider(), this.universalProvider && await ((i = (n = (s = this.chainAdapters) == null ? void 0 : s[e]) == null ? void 0 : n.setUniversalProvider) == null ? void 0 : i.call(n, this.universalProvider));
  }
  // -- Connection Sync ---------------------------------------------------
  async syncExistingConnection() {
    await Promise.allSettled(this.chainNamespaces.map((e) => this.syncNamespaceConnection(e)));
  }
  async unSyncExistingConnection() {
    try {
      await Promise.allSettled(this.chainNamespaces.map((e) => D.disconnect({ namespace: e, initialDisconnect: !0 })));
    } catch (e) {
      console.error("Error disconnecting existing connections:", e);
    }
  }
  async reconnectWalletConnect() {
    await this.syncWalletConnectAccount();
    const e = this.getAddress();
    this.getCaipAddress() || k.deleteRecentWallet();
    const s = k.getRecentWallet();
    oe.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      address: e,
      properties: {
        method: W.isMobile() ? "mobile" : "qrcode",
        name: (s == null ? void 0 : s.name) || "Unknown",
        reconnect: !0,
        view: ee.state.view,
        walletRank: s == null ? void 0 : s.order
      }
    });
  }
  async syncNamespaceConnection(e) {
    try {
      e === C.CHAIN.EVM && W.isSafeApp() && R.setConnectorId(C.CONNECTOR_ID.SAFE, e);
      const s = R.getConnectorId(e);
      switch (this.setStatus("connecting", e), s) {
        case C.CONNECTOR_ID.WALLET_CONNECT:
          await this.reconnectWalletConnect();
          break;
        case C.CONNECTOR_ID.AUTH:
          break;
        default:
          await this.syncAdapterConnection(e);
      }
    } catch (s) {
      console.warn("AppKit couldn't sync existing connection", s), this.setStatus("disconnected", e);
    }
  }
  onDisconnectNamespace(e) {
    const { chainNamespace: s, closeModal: n } = e || {};
    f.resetAccount(s), f.resetNetwork(s), k.removeConnectedNamespace(s);
    const i = Array.from(f.state.chains.keys());
    (s ? [s] : i).forEach((o) => k.addDisconnectedConnectorId(R.getConnectorId(o) || "", o)), R.removeConnectorId(s), Te.resetChain(s), this.setUser(null, s), this.setStatus("disconnected", s), this.setConnectedWalletInfo(null, s), n !== !1 && de.close();
  }
  async syncAdapterConnections() {
    await Promise.allSettled(this.chainNamespaces.map((e) => {
      const s = this.getAdapter(e), n = this.getCaipAddress(e), i = this.getCaipNetwork(e);
      return s == null ? void 0 : s.syncConnections({
        connectToFirstConnector: !n,
        caipNetwork: i
      });
    }));
  }
  async syncAdapterConnection(e) {
    var a, c, l, d, u;
    const s = this.getAdapter(e), n = this.getCaipNetwork(e), i = R.getConnectorId(e), o = R.getConnectors(e).find((h) => h.id === i);
    try {
      if (!s || !o)
        throw new Error(`Adapter or connector not found for namespace ${e}`);
      if (!(n != null && n.id))
        throw new Error("CaipNetwork not found");
      const h = await (s == null ? void 0 : s.syncConnection({
        namespace: e,
        id: o.id,
        chainId: n.id,
        rpcUrl: (l = (c = (a = n == null ? void 0 : n.rpcUrls) == null ? void 0 : a.default) == null ? void 0 : c.http) == null ? void 0 : l[0]
      }));
      h ? (this.syncProvider({ ...h, chainNamespace: e }), await this.syncAccount({ ...h, chainNamespace: e }), this.setStatus("connected", e), oe.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        address: h.address,
        properties: {
          method: "browser",
          name: ((d = o.info) == null ? void 0 : d.name) || o.name || "Unknown",
          reconnect: !0,
          view: ee.state.view,
          walletRank: (u = o == null ? void 0 : o.explorerWallet) == null ? void 0 : u.order
        }
      })) : this.setStatus("disconnected", e);
    } catch {
      this.onDisconnectNamespace({ chainNamespace: e, closeModal: !1 });
    }
  }
  async syncWalletConnectAccount() {
    var n, i;
    const e = Object.keys(((i = (n = this.universalProvider) == null ? void 0 : n.session) == null ? void 0 : i.namespaces) || {}), s = this.chainNamespaces.map(async (r) => {
      var u, h, p, g, m;
      const o = this.getAdapter(r);
      if (!o)
        return;
      const a = ((g = (p = (h = (u = this.universalProvider) == null ? void 0 : u.session) == null ? void 0 : h.namespaces) == null ? void 0 : p[r]) == null ? void 0 : g.accounts) || [], c = (m = f.state.activeCaipNetwork) == null ? void 0 : m.id, l = a.find((y) => {
        const { chainId: I } = Ge.parseCaipAddress(y);
        return I === (c == null ? void 0 : c.toString());
      }) || a[0];
      if (l) {
        const y = Ge.validateCaipAddress(l), { chainId: I, address: N } = Ge.parseCaipAddress(y);
        if (Te.setProviderId(r, ys.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && f.state.activeCaipNetwork && o.namespace !== C.CHAIN.EVM) {
          const _ = o.getWalletConnectProvider({
            caipNetworks: this.getCaipNetworks(),
            provider: this.universalProvider,
            activeCaipNetwork: f.state.activeCaipNetwork
          });
          Te.setProvider(r, _);
        } else
          Te.setProvider(r, this.universalProvider);
        R.setConnectorId(C.CONNECTOR_ID.WALLET_CONNECT, r), k.addConnectedNamespace(r), await this.syncAccount({
          address: N,
          chainId: I,
          chainNamespace: r
        });
      } else e.includes(r) && this.setStatus("disconnected", r);
      const d = this.getApprovedCaipNetworksData();
      this.syncConnectedWalletInfo(r), f.setApprovedCaipNetworksData(r, {
        approvedCaipNetworkIds: d.approvedCaipNetworkIds,
        supportsAllNetworks: d.supportsAllNetworks
      });
    });
    await Promise.all(s);
  }
  syncProvider({ type: e, provider: s, id: n, chainNamespace: i }) {
    Te.setProviderId(i, e), Te.setProvider(i, s), R.setConnectorId(n, i);
  }
  async syncAccount(e) {
    var u, h;
    const s = e.chainNamespace === f.state.activeChain, n = f.getCaipNetworkByNamespace(e.chainNamespace, e.chainId), { address: i, chainId: r, chainNamespace: o } = e, { chainId: a } = k.getActiveNetworkProps(), c = (n == null ? void 0 : n.id) || a, l = ((u = f.state.activeCaipNetwork) == null ? void 0 : u.name) === C.UNSUPPORTED_NETWORK_NAME, d = f.getNetworkProp("supportsAllNetworks", o);
    if (this.setStatus("connected", o), !(l && !d) && c) {
      let p = this.getCaipNetworks().find((I) => I.id.toString() === c.toString()), g = this.getCaipNetworks().find((I) => I.chainNamespace === o);
      if (!d && !p && !g) {
        const I = this.getApprovedCaipNetworkIds() || [], N = I.find((F) => {
          var Y;
          return ((Y = Ge.parseCaipNetworkId(F)) == null ? void 0 : Y.chainId) === c.toString();
        }), _ = I.find((F) => {
          var Y;
          return ((Y = Ge.parseCaipNetworkId(F)) == null ? void 0 : Y.chainNamespace) === o;
        });
        p = this.getCaipNetworks().find((F) => F.caipNetworkId === N), g = this.getCaipNetworks().find((F) => F.caipNetworkId === _ || // This is a workaround used in Solana network to support deprecated caipNetworkId
        "deprecatedCaipNetworkId" in F && F.deprecatedCaipNetworkId === _);
      }
      const m = p || g;
      (m == null ? void 0 : m.chainNamespace) === f.state.activeChain ? A.state.enableNetworkSwitch && !A.state.allowUnsupportedChain && ((h = f.state.activeCaipNetwork) == null ? void 0 : h.name) === C.UNSUPPORTED_NETWORK_NAME ? f.showUnsupportedChainUI() : this.setCaipNetwork(m) : s || n && this.setCaipNetworkOfNamespace(n, o), this.syncConnectedWalletInfo(o);
      const y = this.getAddress(o);
      Go.isLowerCaseMatch(i, y) || this.syncAccountInfo(i, m == null ? void 0 : m.id, o), s ? await this.syncBalance({ address: i, chainId: m == null ? void 0 : m.id, chainNamespace: o }) : await this.syncBalance({ address: i, chainId: n == null ? void 0 : n.id, chainNamespace: o }), this.syncIdentity({
        address: i,
        chainId: r,
        chainNamespace: o
      });
    }
  }
  async syncAccountInfo(e, s, n) {
    const i = this.getCaipAddress(n), r = s || (i == null ? void 0 : i.split(":")[1]);
    if (!r)
      return;
    const o = `${n}:${r}:${e}`;
    this.setCaipAddress(o, n, !0), await this.syncIdentity({
      address: e,
      chainId: r,
      chainNamespace: n
    });
  }
  async syncReownName(e, s) {
    try {
      const n = await this.getReownName(e);
      if (n[0]) {
        const i = n[0];
        this.setProfileName(i.name, s);
      } else
        this.setProfileName(null, s);
    } catch {
      this.setProfileName(null, s);
    }
  }
  syncConnectedWalletInfo(e) {
    var i;
    const s = R.getConnectorId(e), n = Te.getProviderId(e);
    if (n === ys.CONNECTOR_TYPE_ANNOUNCED || n === ys.CONNECTOR_TYPE_INJECTED) {
      if (s) {
        const o = this.getConnectors().find((a) => {
          var u, h;
          const c = a.id === s, l = ((u = a.info) == null ? void 0 : u.rdns) === s, d = (h = a.connectors) == null ? void 0 : h.some((p) => {
            var g;
            return p.id === s || ((g = p.info) == null ? void 0 : g.rdns) === s;
          });
          return c || l || !!d;
        });
        if (o) {
          const { info: a, name: c, imageUrl: l } = o, d = l || this.getConnectorImage(o);
          this.setConnectedWalletInfo({ name: c, icon: d, ...a }, e);
        }
      }
    } else if (n === ys.CONNECTOR_TYPE_WALLET_CONNECT) {
      const r = Te.getProvider(e);
      r != null && r.session && this.setConnectedWalletInfo({
        ...r.session.peer.metadata,
        name: r.session.peer.metadata.name,
        icon: (i = r.session.peer.metadata.icons) == null ? void 0 : i[0]
      }, e);
    } else if (s && (s === C.CONNECTOR_ID.COINBASE_SDK || s === C.CONNECTOR_ID.COINBASE)) {
      const r = this.getConnectors().find((l) => l.id === s), o = (r == null ? void 0 : r.name) || "Coinbase Wallet", a = (r == null ? void 0 : r.imageUrl) || this.getConnectorImage(r), c = r == null ? void 0 : r.info;
      this.setConnectedWalletInfo({
        ...c,
        name: o,
        icon: a
      }, e);
    }
  }
  async syncBalance(e) {
    !Pl.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find((n) => {
      var i;
      return n.id.toString() === ((i = e.chainId) == null ? void 0 : i.toString());
    }) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace);
  }
  async ready() {
    await this.readyPromise;
  }
  async updateNativeBalance(e, s, n) {
    const i = this.getAdapter(n), r = f.getCaipNetworkByNamespace(n, s);
    if (i) {
      const o = await i.getBalance({
        address: e,
        chainId: s,
        caipNetwork: r,
        tokens: this.options.tokens
      });
      return this.setBalance(o.balance, o.symbol, n), o;
    }
  }
  // -- Universal Provider ---------------------------------------------------
  async initializeUniversalAdapter() {
    var i, r, o, a, c, l, d, u, h, p;
    const e = av.createLogger((g, ...m) => {
      g && this.handleAlertError(g), console.error(...m);
    }), s = {
      projectId: (i = this.options) == null ? void 0 : i.projectId,
      metadata: {
        name: (r = this.options) != null && r.metadata ? (o = this.options) == null ? void 0 : o.metadata.name : "",
        description: (a = this.options) != null && a.metadata ? (c = this.options) == null ? void 0 : c.metadata.description : "",
        url: (l = this.options) != null && l.metadata ? (d = this.options) == null ? void 0 : d.metadata.url : "",
        icons: (u = this.options) != null && u.metadata ? (h = this.options) == null ? void 0 : h.metadata.icons : [""]
      },
      logger: e
    };
    A.setManualWCControl(!!((p = this.options) != null && p.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await va.init(s);
    const n = this.universalProvider.disconnect.bind(this.universalProvider);
    this.universalProvider.disconnect = async () => {
      try {
        return await n();
      } catch (g) {
        if (g instanceof Error && g.message.includes("Missing or invalid. Record was recently deleted"))
          return;
        throw g;
      }
    }, A.state.enableReconnect === !1 && this.universalProvider.session && await this.universalProvider.disconnect(), this.listenWalletConnect();
  }
  listenWalletConnect() {
    this.universalProvider && this.chainNamespaces.forEach((e) => {
      Hs.listenWcProvider({
        universalProvider: this.universalProvider,
        namespace: e,
        onDisplayUri: (s) => {
          D.setUri(s);
        },
        onConnect: (s) => {
          const { address: n } = W.getAccount(s[0]);
          for (const i of this.chainNamespaces)
            k.removeDisconnectedConnectorId(C.CONNECTOR_ID.WALLET_CONNECT, i);
          D.finalizeWcConnection(n);
        },
        onDisconnect: () => {
          f.state.noAdapters && this.resetAccount(e), D.resetWcConnection();
        },
        onChainChanged: (s) => {
          const n = f.state.activeChain, i = n && R.state.activeConnectorIds[n] === C.CONNECTOR_ID.WALLET_CONNECT;
          if (n === e && (f.state.noAdapters || i)) {
            const r = this.getCaipNetworks().find((a) => a.id.toString() === s.toString() || a.caipNetworkId.toString() === s.toString()), o = this.getCaipNetwork();
            if (!r) {
              this.setUnsupportedNetwork(s);
              return;
            }
            (o == null ? void 0 : o.id.toString()) !== (r == null ? void 0 : r.id.toString()) && (o == null ? void 0 : o.chainNamespace) === (r == null ? void 0 : r.chainNamespace) && this.setCaipNetwork(r);
          }
        },
        onAccountsChanged: (s) => {
          const n = f.state.activeChain, i = n && R.state.activeConnectorIds[n] === C.CONNECTOR_ID.WALLET_CONNECT;
          if (n === e && (f.state.noAdapters || i)) {
            const r = s == null ? void 0 : s[0];
            r && this.syncAccount({
              address: r.address,
              chainId: r.chainId,
              chainNamespace: r.chainNamespace
            });
          }
        }
      });
    });
  }
  createUniversalProvider() {
    var e;
    return !this.universalProviderInitPromise && W.isClient() && ((e = this.options) != null && e.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
  }
  async getUniversalProvider() {
    if (!this.universalProvider)
      try {
        await this.createUniversalProvider();
      } catch (e) {
        oe.sendEvent({
          type: "error",
          event: "INTERNAL_SDK_ERROR",
          properties: {
            errorType: "UniversalProviderInitError",
            errorMessage: e instanceof Error ? e.message : "Unknown",
            uncaught: !1
          }
        }), console.error("AppKit:getUniversalProvider - Cannot create provider", e);
      }
    return this.universalProvider;
  }
  getDisabledCaipNetworks() {
    const e = f.getAllApprovedCaipNetworkIds(), s = f.getAllRequestedCaipNetworks();
    return W.sortRequestedNetworks(e, s).filter((i) => f.isCaipNetworkDisabled(i));
  }
  // - Utils -------------------------------------------------------------------
  handleAlertError(e) {
    const s = Object.entries(xt.UniversalProviderErrors).find(([, { message: a }]) => e.message.includes(a)), [n, i] = s ?? [], { message: r, alertErrorKey: o } = i ?? {};
    if (n && r && !this.reportedAlertErrors[n]) {
      const a = xt.ALERT_ERRORS[o];
      a && (bt.open(a, "error"), this.reportedAlertErrors[n] = !0);
    }
  }
  getAdapter(e) {
    var s;
    if (e)
      return (s = this.chainAdapters) == null ? void 0 : s[e];
  }
  createAdapter(e) {
    var i, r;
    if (!e)
      return;
    const s = e.namespace;
    if (!s)
      return;
    this.createClients();
    const n = e;
    n.namespace = s, n.construct({
      namespace: s,
      projectId: (i = this.options) == null ? void 0 : i.projectId,
      networks: (r = this.caipNetworks) == null ? void 0 : r.filter(({ chainNamespace: o }) => o === s)
    }), this.chainNamespaces.includes(s) || this.chainNamespaces.push(s), this.chainAdapters && (this.chainAdapters[s] = n);
  }
  // -- Public -------------------------------------------------------------------
  async open(e) {
    await this.injectModalUi(), e != null && e.uri && D.setUri(e.uri);
    const { isSwap: s, isSend: n } = this.toModalOptions();
    return s(e) ? de.open({
      ...e,
      data: { swap: e.arguments }
    }) : n(e) && e.arguments ? this.openSend(e.arguments) : de.open(e);
  }
  async close() {
    await this.injectModalUi(), de.close();
  }
  setLoading(e, s) {
    de.setLoading(e, s);
  }
  async disconnect(e) {
    await D.disconnect({ namespace: e });
  }
  getSIWX() {
    return A.state.siwx;
  }
  // -- review these -------------------------------------------------------------------
  getError() {
    return "";
  }
  getChainId() {
    var e;
    return (e = f.state.activeCaipNetwork) == null ? void 0 : e.id;
  }
  async switchNetwork(e, { throwOnFailure: s = !1 } = {}) {
    const n = this.getCaipNetworks().find((i) => i.id === e.id);
    if (!n) {
      bt.open(xt.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
      return;
    }
    await f.switchActiveNetwork(n, { throwOnFailure: s });
  }
  getWalletProvider() {
    return f.state.activeChain ? Te.state.providers[f.state.activeChain] : null;
  }
  getWalletProviderType() {
    return Te.getProviderId(f.state.activeChain);
  }
  subscribeProviders(e) {
    return Te.subscribeProviders(e);
  }
  getThemeMode() {
    return Ct.state.themeMode;
  }
  getThemeVariables() {
    return Ct.state.themeVariables;
  }
  setThemeMode(e) {
    Ct.setThemeMode(e), zo(Ct.state.themeMode);
  }
  setTermsConditionsUrl(e) {
    A.setTermsConditionsUrl(e);
  }
  setPrivacyPolicyUrl(e) {
    A.setPrivacyPolicyUrl(e);
  }
  setThemeVariables(e) {
    Ct.setThemeVariables(e), iv(Ct.state.themeVariables);
  }
  subscribeTheme(e) {
    return Ct.subscribe(e);
  }
  subscribeConnections(e) {
    return this.remoteFeatures.multiWallet ? D.subscribe(e) : (bt.open(C.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), () => {
    });
  }
  getWalletInfo(e) {
    var n, i;
    if (e)
      return (i = (n = f.state.chains.get(e)) == null ? void 0 : n.accountState) == null ? void 0 : i.connectedWalletInfo;
    const s = f.getAccountData();
    return s == null ? void 0 : s.connectedWalletInfo;
  }
  getAccount(e) {
    const s = e || f.state.activeChain, n = R.getAuthConnector(s), i = f.getAccountData(s), r = k.getConnectedConnectorId(f.state.activeChain), o = D.getConnections(s);
    if (!s)
      throw new Error("AppKit:getAccount - namespace is required");
    const a = o.flatMap((c) => c.accounts.map(({ address: l, type: d, publicKey: u }) => W.createAccount(s, l, d || "eoa", u)));
    if (i)
      return {
        allAccounts: a,
        caipAddress: i.caipAddress,
        address: W.getPlainAddress(i.caipAddress),
        isConnected: !!i.caipAddress,
        status: i.status,
        embeddedWalletInfo: n && r === C.CONNECTOR_ID.AUTH ? {
          user: i.user ? {
            ...i.user,
            /*
             * Getting the username from the chain controller works well for social logins,
             * but Farcaster uses a different connection flow and doesn't emit the username via events.
             * Since the username is stored in local storage before the chain controller updates,
             * it's safe to use the local storage value here.
             */
            username: k.getConnectedSocialUsername()
          } : void 0,
          authProvider: i.socialProvider || "email",
          accountType: Lt(s),
          isSmartAccountDeployed: !!i.smartAccountDeployed
        } : void 0
      };
  }
  subscribeAccount(e, s) {
    const n = [], i = () => {
      const o = this.getAccount(s);
      o && e(o);
    };
    if (s) {
      const o = f.subscribeChainProp("accountState", i, s);
      n.push(o);
    } else {
      const o = f.subscribe(i);
      n.push(o);
    }
    const r = R.subscribe(i);
    return n.push(r), () => {
      n.forEach((o) => o());
    };
  }
  subscribeNetwork(e) {
    return f.subscribe(({ activeCaipNetwork: s }) => {
      e({
        caipNetwork: s,
        chainId: s == null ? void 0 : s.id,
        caipNetworkId: s == null ? void 0 : s.caipNetworkId
      });
    });
  }
  subscribeWalletInfo(e, s) {
    return s ? f.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.connectedWalletInfo), s) : f.subscribeChainProp("accountState", (n) => e(n == null ? void 0 : n.connectedWalletInfo));
  }
  subscribeShouldUpdateToAddress(e) {
    return f.subscribeChainProp("accountState", (s) => e(s == null ? void 0 : s.shouldUpdateToAddress));
  }
  subscribeCaipNetworkChange(e) {
    return f.subscribeKey("activeCaipNetwork", e);
  }
  getState() {
    return zt.state;
  }
  getRemoteFeatures() {
    return A.state.remoteFeatures;
  }
  subscribeState(e) {
    return zt.subscribe(e);
  }
  subscribeRemoteFeatures(e) {
    return A.subscribeKey("remoteFeatures", e);
  }
  showErrorMessage(e) {
    rs.showError(e);
  }
  showSuccessMessage(e) {
    rs.showSuccess(e);
  }
  getEvent() {
    return { ...oe.state };
  }
  subscribeEvents(e) {
    return oe.subscribe(e);
  }
  replace(e) {
    ee.replace(e);
  }
  redirect(e) {
    ee.push(e);
  }
  popTransactionStack(e) {
    ee.popTransactionStack(e);
  }
  isOpen() {
    return de.state.open;
  }
  isTransactionStackEmpty() {
    return ee.state.transactionStack.length === 0;
  }
  static getInstance() {
    return this.instance;
  }
  updateFeatures(e) {
    A.setFeatures(e);
  }
  updateRemoteFeatures(e) {
    A.setRemoteFeatures(e);
  }
  updateOptions(e) {
    const n = { ...A.state || {}, ...e };
    A.setOptions(n);
  }
  setConnectMethodsOrder(e) {
    A.setConnectMethodsOrder(e);
  }
  setWalletFeaturesOrder(e) {
    A.setWalletFeaturesOrder(e);
  }
  setCollapseWallets(e) {
    A.setCollapseWallets(e);
  }
  setSocialsOrder(e) {
    A.setSocialsOrder(e);
  }
  getConnectMethodsOrder() {
    return js.getConnectOrderMethod(A.state.features, R.getConnectors());
  }
  /**
   * Adds a network to an existing adapter in AppKit.
   * @param namespace - The chain namespace to add the network to (e.g. 'eip155', 'solana')
   * @param network - The network configuration to add
   * @throws Error if adapter for namespace doesn't exist
   */
  addNetwork(e, s) {
    if (this.chainAdapters && !this.chainAdapters[e])
      throw new Error(`Adapter for namespace ${e} doesn't exist`);
    const n = this.extendCaipNetwork(s, this.options);
    this.getCaipNetworks().find((i) => i.id === n.id) || f.addNetwork(n);
  }
  /**
   * Removes a network from an existing adapter in AppKit.
   * @param namespace - The chain namespace the network belongs to
   * @param networkId - The network ID to remove
   * @throws Error if adapter for namespace doesn't exist or if removing last network
   */
  removeNetwork(e, s) {
    if (this.chainAdapters && !this.chainAdapters[e])
      throw new Error(`Adapter for namespace ${e} doesn't exist`);
    this.getCaipNetworks().find((i) => i.id === s) && f.removeNetwork(e, s);
  }
}
let Sl = !1;
class xu extends hv {
  // -- Overrides --------------------------------------------------------------
  async open(e) {
    R.isConnected() || await super.open(e);
  }
  async close() {
    var e;
    if (await super.close(), this.options.manualWCControl) {
      const s = (e = f.getAccountData(this.activeChainNamespace)) == null ? void 0 : e.address;
      D.finalizeWcConnection(s);
    }
  }
  async syncIdentity(e) {
    return Promise.resolve();
  }
  async syncBalance(e) {
    return Promise.resolve();
  }
  async injectModalUi() {
    if (!Sl && W.isClient()) {
      if (await import("./basic-DuHcEGDH.mjs"), await import("./w3m-modal-nYiY7jth.mjs"), !document.querySelector("w3m-modal")) {
        const s = document.createElement("w3m-modal");
        !A.state.disableAppend && !A.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", s);
      }
      Sl = !0;
    }
  }
}
const pv = "1.8.17-wc-circular-dependencies-fix.0";
function fv(t) {
  return new xu({
    ...t,
    basic: !0,
    sdkVersion: `html-core-${pv}`
  });
}
const Bv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AppKit: xu,
  createAppKit: fv
}, Symbol.toStringTag, { value: "Module" }));
export {
  V as A,
  te as B,
  f as C,
  ea as D,
  oe as E,
  Fl as F,
  Vt as G,
  Go as H,
  Ju as I,
  Ge as J,
  Ci as K,
  yv as L,
  de as M,
  Pl as N,
  A as O,
  Te as P,
  Dv as Q,
  ee as R,
  X as S,
  Ct as T,
  Ml as U,
  Bv as V,
  js as W,
  C as a,
  G as b,
  R as c,
  W as d,
  D as e,
  Uv as f,
  ki as g,
  Dt as h,
  rt as i,
  Qi as j,
  Lv as k,
  rs as l,
  pn as m,
  Es as n,
  er as o,
  le as p,
  On as q,
  $v as r,
  k as s,
  Ul as t,
  Lt as u,
  nv as v,
  Ft as w,
  Cs as x,
  Ih as y,
  bt as z
};
//# sourceMappingURL=core-DlhNsfMo.mjs.map
