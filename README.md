# BLACKBOLD — Creative Producer Portfolio

A dark-mode, Liquid Glass portfolio site for **BLACKBOLD** — a Creative Producer building
platform-native video, photo &amp; A+ content for **Beauty, Clinic, Technology &amp; AI** brands
selling across the US e-commerce marketplace (Amazon, TikTok Shop, Shopify, Walmart, Meta).

## Live entry point

- **`BLACKBOLD.html`** — the current site (dark default + light mode toggle).

## Features

- **Liquid Glass** UI: frosted panels, mouse-tracked specular + 3D tilt, ambient gradient blobs.
- **Dark-first** near-black theme with a cool cyan accent; optional light mode (persisted).
- **Work** grid with **dual filtering** (Industry × Platform) and a **case-study modal**
  (Challenge → Approach → Deliverables → Results / CTR · CVR · ROAS).
- **Services**, **Platform expertise matrix**, **5-step process** + AI-assisted workflow.
- **Contact / Book a Call** with SEO `Schema.org` structured data.
- Fully responsive; respects `prefers-reduced-motion` and `prefers-reduced-transparency`.

## Tech

Vanilla HTML / CSS / JS — no build step. Typography: Space Grotesk + Manrope (Google Fonts).
Icons: Unicons (CDN).

## Structure

```
BLACKBOLD.html      → main site
blackbold.css       → design system + layout
bb-app.js           → filters, modal, theme, interactions
index.html          → previous bilingual (VI/EN) version, kept for reference
assets/             → images, fonts, favicon, PDF
```

## Local preview

Open `BLACKBOLD.html` in any modern browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/BLACKBOLD.html
```

## To do (replace placeholders)

- Real project thumbnails / video for the 9 work cards
- Real social links and Calendly booking embed
- Real campaign metrics in each case study

---

© 2025 BLACKBOLD — Tran Quoc Toan. All rights reserved.
