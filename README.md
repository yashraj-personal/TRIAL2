# Caesar Cipher – Encrypt & Decrypt (Static Web App)

A tiny, no-backend web app to encrypt and decrypt text using the classic Caesar cipher. Runs entirely in the browser and can be hosted for free 24/7 on static hosting (GitHub Pages, Netlify, Vercel).

## Features
- Encrypt or decrypt text with a configurable shift
- Works with uppercase and lowercase letters (non-letters unchanged)
- Random shift, copy output, instant preview while typing
- Pure HTML/CSS/JS – no build tools, no server
- Works offline after first load (static assets cached by the browser)

## Quick Start (Local)
- Double-click `index.html` to open in your browser, or
- Serve the folder with any static server, e.g. Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy 24/7 (Free Options)

### Option 1: GitHub Pages (simple)
1. Create a new repo and add these files (`index.html`, `style.css`, `script.js`, `README.md`).
2. Commit and push to the `main` branch.
3. In your GitHub repo: Settings → Pages.
4. Set Source to “Deploy from a branch”, choose `main`, folder `/root`, Save.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/` with HTTPS.

Optional: Add a custom domain in Settings → Pages → Custom domain. Update your DNS with `A`/`CNAME` per GitHub’s instructions.

### Option 2: Netlify
1. Go to `https://app.netlify.com/` → New site from Git → connect your repo.
2. Build command: leave empty. Publish directory: `/` (repo root).
3. Deploy – Netlify gives you an always-on HTTPS URL.

### Option 3: Vercel
1. Go to `https://vercel.com/` → Add New → Project → Import your repo.
2. Framework preset: “Other”. Output/public dir: `/`.
3. Deploy – Vercel provides a live HTTPS URL.

## Security Note
The Caesar cipher is for education and fun only. It is not secure for real data. For real encryption, use modern, audited cryptography and protocols (e.g., AES-GCM, libsodium, Web Crypto API).

## Files
- `index.html` – App layout and UI
- `style.css` – Styles
- `script.js` – Caesar cipher logic and interactivity

## How It Works
- Encrypt: shifts each A–Z/a–z by `shift` positions, wrapping around.
- Decrypt: applies the negative shift.
- Non-letters (spaces, punctuation, emojis) are left unchanged.

## License
MIT © 2025 okk. See `LICENSE` for details.
