# 🔥 HotPot Swap Widget

Embeddable DeFi swap widget for integrating HotPot swaps into any website.

## 🚀 Quick Start

### For Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The dev server will open at `http://localhost:3000` with live examples.

## 📦 Integration

### CDN (Coming Soon)

```html
<!-- Load the widget -->
<script src="https://widget.hotpot.com/v1/widget.js"></script>

<!-- Add to your page -->
<hotpot-swap-widget
  theme="dark"
  primary-color="#6366f1"
  default-from-token="ETH"
  default-to-token="USDT"
></hotpot-swap-widget>
```

### Local Testing

```html
<!-- Use local build -->
<script type="module" src="./dist/widget.esm.js"></script>

<hotpot-swap-widget></hotpot-swap-widget>
```

## ⚙️ Configuration

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `theme` | `'light' \| 'dark' \| 'auto'` | `'dark'` | Widget theme |
| `primary-color` | `string` | `'#6366f1'` | Primary/accent color (hex) |
| `default-from-token` | `string` | `'ETH'` | Default source token |
| `default-to-token` | `string` | `'USDT'` | Default destination token |
| `default-slippage` | `number` | `0.5` | Default slippage tolerance (%) |

### Example

```html
<hotpot-swap-widget
  theme="light"
  primary-color="#ff6b6b"
  default-from-token="BTC"
  default-to-token="ETH"
  default-slippage="1"
></hotpot-swap-widget>
```

## 🎨 Customization

### Themes

- **Dark** (default): Perfect for crypto/DeFi platforms
- **Light**: Clean minimal design
- **Auto**: Follows system preference

### Branding

Customize the primary color to match your brand:

```html
<hotpot-swap-widget primary-color="#your-brand-color"></hotpot-swap-widget>
```

## ✨ Features

- ✅ **Universal**: Works on any website (WordPress, Webflow, custom HTML)
- ✅ **Zero Config**: Just 2 lines of code to integrate
- ✅ **Customizable**: Themes + custom colors
- ✅ **Multi-chain**: EVM chains + Tron support
- ✅ **Non-custodial**: Users control their keys
- ✅ **Lightweight**: ~150KB gzipped
- ✅ **Slippage Control**: Adjustable slippage tolerance
- ✅ **Price Impact Warning**: Protects users from bad trades

## 🏗️ Project Structure

```
rfq-widget/
├── src/
│   ├── index.ts              # Main Web Component
│   ├── components/           # UI components
│   ├── services/             # Wallet, API logic
│   ├── styles/               # Theme styles
│   ├── types/                # TypeScript types
│   └── utils/                # Helper functions
├── examples/
│   └── index.html            # Demo page
├── dist/                     # Built files
└── package.json
```

## 🔧 Development

### Tech Stack

- **TypeScript**: Type safety
- **Web Components**: Universal compatibility
- **Vite**: Fast build tool
- **Shadow DOM**: Style isolation

### Building

```bash
# Development build with watch
npm run dev

# Production build
npm run build

# Type checking
npm run type-check
```

### Output

- `dist/widget.esm.js` - ES Module format
- `dist/widget.umd.js` - UMD format (for CDN)
- `dist/widget.d.ts` - TypeScript definitions

## 📝 TODO

- [ ] Wallet connection (MetaMask, WalletConnect)
- [ ] API integration for quotes
- [ ] Transaction execution
- [ ] Token list fetching
- [ ] Error handling
- [ ] Loading states
- [ ] Transaction history
- [ ] Analytics events

## 📄 License

MIT
