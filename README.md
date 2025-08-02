# SEO Vision – On-Page SEO Analyzer Chrome Extension

SEO Vision is a modern, privacy-friendly Chrome extension that provides instant, client-side on-page SEO analysis for any website you visit. It gives you a clear, actionable checklist and visual feedback to help you optimize your pages for search engines—no server, no data collection, no permissions beyond what’s needed.

---

## Features

- **No Permissions Needed Beyond Active Tab**: All analysis is performed client-side. No data leaves your browser.
- **One-Click Analysis**: Instantly analyze the current tab’s HTML with a single click.
- **Visual SEO Score**: Get a color-coded SEO score and feedback summary.
- **Detailed Checklist**: Checks for:
  - Title tag length (50–60 chars)
  - Meta description length (120–160 chars)
  - Heading structure (1 H1, multiple H2s)
  - Content length (500+ words)
  - Image alt texts
  - Internal links
  - Mobile viewport tag
  - Canonical tag
  - Schema markup
- **Color-Coded Status**: Good, Warning, and Needs Work indicators for each check.
- **Tooltips**: Hover for actual content and recommendations.
- **Accordion UI**: Expand/collapse categories for a clean, modern look.
- **Loading Indicator**: See when analysis is running.
- **Works on Most Pages**: (Not available on Chrome Web Store, extensions, or `chrome://` pages due to browser restrictions.)

---

## Installation

1. **Clone or Download this Repository**
2. **Open Chrome and go to** `chrome://extensions/`
3. **Enable "Developer mode"** (top right)
4. **Click "Load unpacked"** and select the `seoguru` folder

---

## Usage

1. Visit any website you want to analyze.
2. Click the SEO Vision extension icon in your Chrome toolbar.
3. Click **"Analyze Current Page"**.
4. View your SEO score, checklist, and detailed results instantly.

---

## Screenshots

![SEO Vision Screenshot](screenshot.png)

---

## How It Works

- Uses the [Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/) API.
- Injects a script into the active tab to fetch the page’s HTML.
- Parses and analyzes the HTML in the popup—**no data is sent anywhere**.
- Displays results in a modern, interactive UI.

---

## Development

### File Structure

```
seoguru/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── popup.html
├── popup.js
├── manifest.json
└── README.md
```

### Key Files

- **manifest.json** – Extension configuration and permissions
- **popup.html** – Extension popup UI
- **popup.js** – Main logic for fetching and analyzing the page
- **icons/** – Extension icons

### Permissions

```json
"permissions": [
  "scripting",
  "activeTab"
],
"host_permissions": [
  "<all_urls>"
]
```

---

## Limitations

- **Cannot analyze Chrome Web Store, extensions, or `chrome://` pages** (browser security restriction).
- **Some sites may block script injection** (e.g., with CSP headers).
- **SEO checks are basic and for guidance only**—always combine with manual review and other tools.

---

## Privacy

SEO Vision does **not** collect, store, or transmit any data. All analysis is performed locally in your browser.

---

## License

MIT License

---

## Credits

- UI inspired by modern design aspects.
- Built with [Chrome Extensions API](https://developer.chrome.com/docs/extensions/).
- **Developer:** [Anupam Mondal](https://anupammondal.in)