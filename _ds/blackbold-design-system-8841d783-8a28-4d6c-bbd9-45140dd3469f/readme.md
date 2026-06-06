# BLACKBOLD — Design System

BLACKBOLD is a **portfolio platform for a Creative Producer** who turns ideas into
polished visual experiences — creative direction, production planning, storytelling,
and execution that move campaigns, films, events, and digital content from concept
to final delivery.

The visual signature is **Liquid Glass**: translucent, frosted panels with specular
highlights floating over a soft ambient-gradient background, anchored by a bold black
wordmark and a single confident accent — **violet**.

---

## Sources

This system was reverse-engineered from the brand's portfolio codebase:

- **Codebase:** `SeniorPerformanceVideoEditor/` (the portfolio site — single-page,
  vanilla HTML/CSS/JS with a Swiper-powered testimonial carousel).
- Live reference: a published GitHub Pages portfolio (`portfolio-tranquoctoan`).
- Key source files: `index.html`, `styles.css`, `liquid-glass.css`, `assets/js/main.js`,
  and `assets/img/*` (logos, portraits, testimonial avatars).

No design tokens or component library existed in the source — they were extracted from
the CSS custom properties and the `liquid-glass.css` treatment, then formalized here.

---

## CONTENT FUNDAMENTALS

How BLACKBOLD writes copy:

- **Voice:** first-person singular from the producer ("My introduction", "About Me",
  "I turn ideas into…"). Speaks *to* the visitor as "you" in CTAs.
- **Tone:** warm, confident, understated. Lets the work carry the weight — no hype,
  no superlatives stacked on superlatives.
- **Casing:** Section eyebrows are **Title Case** ("About Me", "My Services"),
  flanked by chevron marks (`»» … ««`). Titles are sentence-case display
  ("My introduction"). Buttons are Title Case ("View CV & Portfolio", "Download").
- **Length:** short. Eyebrow → 1–4 words. Title → 2–3 words. Body paragraphs are
  2–3 sentences max.
- **Emoji:** none. The chevron (`»`/`«`) is the only recurring glyph flourish.
- **Numbers/stats:** used sparingly as proof points (years of experience, projects
  completed) in small stat blocks — never as decorative filler.
- **Vibe:** a calm, premium creative studio. Polished, not flashy.

Examples (from source):
- Eyebrow: `»» About Me ««`
- Title: `My introduction`
- CTA: `View CV & Portfolio →`

---

## VISUAL FOUNDATIONS

**Colors.** One accent — **violet** (`--violet-500 = hsl(250 69% 61%)`), used on
primary buttons (a 400→600 vertical gradient) and tints. Neutrals are a warm
violet-grey ink ramp. Brand **black** (`#111`) is reserved for the wordmark. A
**portrait gold** (`#ffc107`) appears only as the photo backdrop. Status colors
(success/warning/danger) are muted and used only for feedback. Dark theme uses a
**lightened Slate Navy** (`#1b2d46`) — deliberately not too dark, so the frosted
glass still refracts. (Indigo Dusk and Graphite are offered as alternates.)

**Type.** A single family — **Poppins** (300/400/500/600), geometric and friendly.
Display sizes are large and light; body is 400 at 16px / 1.6 line-height. Eyebrows
are uppercase-ish Title Case with `0.18em` tracking.

**Spacing.** A 4px-based ramp (`--sp-1 … --sp-12`) mirroring the source's `mb-*`
margins. Container max 1024px, 1.5rem gutters, 3rem header.

**Backgrounds.** Soft **ambient gradient blobs** (violet + cyan + blue washes) at low
opacity behind a near-white body (`hsl(250 60% 99%)`). No photographic full-bleeds in
chrome; imagery lives inside glass cards. No hard textures or grain.

**The Liquid Glass surface.** The defining motif. Translucent fills
(`rgba(255,255,255,.15–.40)`), `backdrop-filter: blur(16px) saturate(180%)`, a bright
1px border, a **top specular highlight** + bottom inner-shade, and a soft violet-tinted
outer drop shadow. Applied to nav, cards, buttons, chips. Utility: `.lg-surface`.

**Corner radii.** Generous and rounded: cards `1–1.25rem`, buttons are full **pills**
(`3rem` / `999px`), inputs `0.5rem`, social bubbles are circles. The hero portrait uses
an organic **blob radius**.

**Shadows.** Two systems: (1) soft **purple-tinted** ambient elevation
(`--shadow-sm/md/lg`), and (2) the **composite glass shadow** (outer drop + inner top
highlight + inner bottom shade). Violet buttons get a colored glow (`--shadow-primary`).

**Cards.** Frosted glass, rounded `1–1.25rem`, bright hairline border, specular top.
Lift and brighten on hover.

**Motion.** Springy and light. A spring ease (`cubic-bezier(0.34,1.56,0.64,1)`) for
glass press/lift; a smooth out-ease for the rest. Durations 0.18–0.40s. Hover = lift +
brighten fill; press = shrink slightly + collapse to the pressed glass shadow. Fades and
slides on scroll-in. No infinite decorative loops.

**Transparency & blur.** Used intentionally on chrome and cards (the glass), never on
plain body text. Blur 16px standard, 28px for strong/nav.

---

## ICONOGRAPHY

- **Icon system:** **Unicons** (Iconscout) — the "Line" variant, loaded by the source
  from CDN (`unicons.iconscout.com/release/v4.0.0/css/line.css`). Icons are referenced
  by class (e.g. `uil-message`, `uil-arrow-right`, `uil-github-alt`). This system links
  the same CDN — see `Button` / `SocialIcon`, which take a `uil-*` class name.
- **Stroke style:** consistent thin line icons, currentColor-driven.
- **Emoji:** never used.
- **Unicode glyphs:** the chevron pair `»` / `«` is used as a brand flourish around
  eyebrows (`.bb-eyebrow::before/::after` draw short tinted rules instead, but the
  chevron is the conceptual mark — see `guidelines/brand-eyebrow.html`).
- **Logos:** `assets/logo-black.png` / `assets/logo-white.png` — a bold "BLACK"
  wordmark in chevron brackets. Favicons in `assets/`.
- **Imagery:** portraits and testimonial avatars live in `assets/` (profile-*,
  testimonial-1…5). Use real imagery inside glass cards; do not draw SVG illustrations.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for downstream use.

**`tokens/`** (all reached from `styles.css`)
- `fonts.css` — Poppins `@import` (Google Fonts CDN — see Caveats).
- `colors.css` — violet scale, ink ramp, navy dark surfaces, gold, status, semantic aliases.
- `typography.css` — family, weights, type scale, line-heights, tracking.
- `spacing.css` — spacing ramp, radii, shadows, motion, z-index.
- `glass.css` — Liquid Glass tokens + `.lg-surface` utility.
- `base.css` — resets, ambient background, `.bb-eyebrow`, base utilities.
- `components.css` — glass component classes (`.bb-*`).

**`components/`** (React primitives — `window.BLACKBOLDDesignSystem_8841d7`)
- `buttons/` — `Button` (glass pill; primary/ghost/white, sizes, icons), `SocialIcon`.
- `forms/` — `Field` (glass input/textarea), `Toggle` (theme switch style).
- `disclosure/` — `Accordion` (FAQ / qualification list).
- `surfaces/` — `Card` (glass panel), `Badge` (tag/chip), `Stat` (number + label).
- `media/` — `SectionHeading` (chevron eyebrow + title + subtitle), `Avatar` (glass-ring).

**`guidelines/`** — foundation specimen cards (Design System tab): colors (primary,
ink, navy, accent), type (headings, body), spacing, radii, glass shadows, motion, and
brand cards (logo, eyebrow, background).

**`assets/`** — logos, favicons, portraits, testimonial avatars, decorative blob.

---

## CAVEATS

- **Fonts** are served from the Google Fonts CDN (Poppins). No local font binaries
  shipped with the source — if you need offline/self-hosted fonts, supply the files.
- **Icons** use the Unicons CDN (matching the source). No local icon assets were present.
- **Dark theme** default is Slate Navy; Indigo Dusk and Graphite alternates are defined
  in `tokens/colors.css` pending a final pick.
