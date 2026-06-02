# Gram's Holler — Design System

> Authentic rustic goods, made by hand. An Appalachian holler — the hollow valley
> cradled between two mountains — where things are still made slow, by lantern light,
> on a porch, in a rocking chair.

This repository is the brand and design system for **Gram's Holler**. It contains the
brand story, voice, color and type foundations, the logo and visual assets, ready-to-use
CSS tokens, design-system preview cards, and a high-fidelity **storefront UI kit**.

---

## 1. The Brand

**Gram's Holler** makes and sells handmade Appalachian goods — wood (cutting boards,
spoons, stools, bowls), woven and stitched textiles, preserves and pantry goods, and
small homestead wares. Every piece is made by hand and meant to last generations.

**The feeling:** sitting on the front porch with Gram in a rocking chair, whittling and
whittling away the afternoon. Woodsmoke, sweet tea, slow hands, good company. A *holler*
is the hollow between two ridgelines — a sheltered, green, quiet valley. That word is the
heart of the brand: shelter, craft, and a place that's a little hard to get to but worth
the trip.

**What it is NOT:** not industrial-farmhouse-chic, not shiplap-and-mason-jar kitsch, not
slick DTC minimalism. It's genuinely old, genuinely warm, genuinely handmade.

### Sources
There was **no attached codebase, Figma file, or asset library** for this project — the
system was authored from the brand brief alone:

> *"Gram's Holler — authentic rustic goods made by hand with an Appalachian focus. The
> feeling should be like sitting on the front porch with grandma in a rocking chair making
> things out of wood. A holler is a 'hollow' between mountains, a valley. Incorporate it
> into the brand."*

Everything here (logo, palette, type pairing, voice) is an original interpretation of that
brief and should be reviewed against the founders' intent. See **CAVEATS** at the bottom.

---

## 2. Content Fundamentals (Voice & Tone)

The voice is **Gram talking to you on the porch** — warm, plain-spoken, unhurried,
with a touch of Appalachian color. It is never corporate, never breathless, never salesy.

| Principle | Do | Don't |
|---|---|---|
| **Person** | Talk to "you," sign as "we" / "us" / "Gram." Personal and direct. | Faceless third-person ("customers will find…"). |
| **Casing** | Sentence case everywhere. Title Case only for proper names + the logotype. | ALL-CAPS shouting (small uppercase eyebrows are fine). |
| **Length** | Short, plain sentences. A little folksy rhythm. | Run-on marketing copy, jargon, buzzwords. |
| **Warmth** | Homey, generous, a bit of dry humor. | Cutesy, ironic, or twee. |
| **Authority** | Quiet confidence — craft speaks for itself. | Superlatives, "revolutionary," "game-changing." |

**Vocabulary that fits:** holler, hollow, ridge, porch, by hand, made to last, seasoned,
whittled, put up (as in canning), a spell, set a while, neighbor, Gram, the workshop.

**Emoji:** none. Not part of the brand. If a glyph is ever needed, a small typographic
ornament (✦ · —) is the limit.

**Examples (use this tone):**
- Headline: *"Made slow. Made to last."*
- Product blurb: *"A walnut spoon, carved by hand and rubbed with beeswax. It'll outlive the both of us."*
- Empty cart: *"Your basket's empty as a Sunday porch. Let's fix that."*
- Shipping note: *"We pack each one in kraft paper and tie it with twine. Give us a few days — good things take time."*
- Newsletter ask: *"Get a note from the holler now and then."*
- Button labels: "Add to basket," "Read the story," "Find your way here," "Set a spell."

---

## 3. Visual Foundations

The look is **aged paper, hand-tied tags, and woodgrain** — the colors of a workshop and
the ridgeline behind it. Warm, earthy, tactile. Nothing glossy, nothing neon.

### Color
A warm, earth-derived palette. See `colors_and_type.css` for the full token list.
- **Paper & kraft** — aged cream (`#F3E8CF`), warm card cream (`#FBF4E2`), linen, kraft tan. These are the backgrounds; the whole system sits on paper, not white.
- **Wood** — walnut ink (`#2C2014`) for text, through bark, oak, and light tan for structure and muted text.
- **Holler green** (`#354029` → moss → sage) — the valley. Secondary brand color, nature, "in stock," success.
- **Barn / clay red** (`#9E3A24`) — the **primary action / accent** color. Warm, confident, drawn from barn paint and red clay.
- **Goldenrod / wheat** (`#C8902C` / `#DEBB5E`) — lantern light and wheat. Highlights, sale tags, small accents.
- **Dusk blue** (`#5E7173`) — muted mountain blue, used very sparingly (links, info).
- **Vibe of imagery:** warm, golden-hour, slightly desaturated, a touch of grain/texture. Wood, hands, cloth, plants. Never cold, never high-key clinical white.

### Type
A four-family system (see `colors_and_type.css`):
- **Rye** — woodtype display, used for the **logotype** and rare big moments only. It's the carved-sign voice; a little goes a long way.
- **Bitter** — a sturdy slab serif for **headings & eyebrows**. Reads like stamped wood.
- **Spectral** — a warm, literary serif for **all body copy**. Comfortable to read at length.
- **Caveat** — a casual handwriting face for **gift-tag captions, prices on tags, and quotes** — Gram's own hand. Use sparingly, as an accent.
- Scale is a 1.250 major third on an 18px base. Body is serif (Spectral), never sans.

### Spacing, radii, elevation
- **Spacing:** 4px base scale (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128).
- **Corner radii:** gently rounded and hand-cut — 3 / 6 / 10 / 16px. Never fully-pill UI (pills reserved for chips/avatars). Paper tags use a 4px radius with a punched hole.
- **Shadows:** soft, warm, low-spread — like porch light, brown-tinted (`rgba(44,32,20,…)`), never gray, never hard. There's an inset shadow for "sunk" surfaces (kraft panels, inputs).
- **Borders:** thin oak-brown hairlines (`color-mix` of oak). Cards often use a 1px border + soft shadow rather than shadow alone. A signature treatment is a **stitched / dashed border** (like a sewn seam) on tags and feature panels.

### Backgrounds & texture
- The base background is **aged paper cream**, not white. Surfaces are a slightly lighter warm cream.
- Subtle **paper grain / woodgrain texture** is welcome as a low-opacity overlay; keep it quiet.
- **Kraft-tan panels** and **hand-tied tags** (with a punched hole + twine) are a recurring device for prices, labels, and callouts.
- Full-bleed warm photography (workshop, hands, the ridgeline) for heroes. Avoid gradients except the gentlest paper/vignette warmth.

### Motion & states
- **Motion is unhurried** — a gentle rocking-chair ease (`--ease-rock`), 140–420ms. Soft fades and small rises. No bounces, no springy overshoot, no flashy parallax.
- **Hover:** primary buttons lighten toward clay (`--primary-hover`); cards lift a little (shadow + 2px rise); links draw a hand-drawn underline.
- **Press:** darken toward ember (`--primary-press`) and shrink ~1% (`scale(0.99)`) — a firm, physical press.
- **Focus:** a 2px goldenrod ring with offset — visible and warm.
- Transparency/blur is used rarely (a soft paper scrim over hero photos for legibility); this is not a glassmorphism brand.

---

## 4. Iconography

**Approach:** simple, friendly **line icons** with rounded caps and joins — the closest
digital analog to a whittled, hand-tooled mark. Stroke weight ~1.75–2px, never filled-heavy,
never duotone.

- **No custom icon font or SVG sprite existed** to import (greenfield brand). The system uses
  **[Lucide](https://lucide.dev)** via CDN as the working icon set — its rounded, hand-friendly
  line style fits the brand better than sharp geometric sets.
  > **Substitution flag:** Lucide is a stand-in. The ideal long-term direction is a small set of
  > **custom woodcut / linocut-style icons** (axe, spoon, pine, jar, basket, porch) commissioned to
  > match the logo's hand. Until then, prefer Lucide and tint icons in `--gh-bark` or `--gh-barn`.
- **Emoji:** never used in product or marketing.
- **Unicode ornaments:** a small set is allowed as typographic seasoning — `✦`, `·`, `—`, `❧` — in
  walnut or barn red, sparingly.
- The **logo mark** (`assets/logo-mark.svg`) — two peaks cradling the holler, with a setting sun —
  is the one piece of bespoke iconography and the source of truth for the icon "hand."

---

## 5. Index — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This file — brand, voice, visual foundations, iconography, index. |
| `colors_and_type.css` | All design tokens: raw palette, semantic roles, type families & scale, spacing, radii, shadows, motion. |
| `fonts/fonts.css` | Google Fonts loader (Rye, Bitter, Spectral, Caveat). |
| `assets/logo-mark.svg` | The Gram's Holler emblem (peaks + holler + sun). |
| `assets/` | Logo + any exported brand imagery. |
| `preview/` | Design-system preview cards (type, color, spacing, components, brand) — shown in the Design System tab. |
| `ui_kits/storefront/` | High-fidelity storefront UI kit: `index.html` clickable demo + JSX components (header, hero, product grid, product detail, tag, footer, etc.). |
| `SKILL.md` | Agent-Skill manifest so this system can be used as a downloadable Claude skill. |

### Quick start
1. Link the fonts and tokens:
   ```html
   <link rel="stylesheet" href="fonts/fonts.css">
   <link rel="stylesheet" href="colors_and_type.css">
   ```
2. Use semantic classes (`.gh-h1`, `.gh-body`, `.gh-eyebrow`, `.gh-hand`) or the raw CSS vars.
3. For product UI, lift components from `ui_kits/storefront/`.

---

## CAVEATS

- **Greenfield brand.** No codebase, Figma, or existing assets were provided — everything is an
  original interpretation of a short brief and should be reviewed against the founders' vision.
- **The logo is a first-pass mark** I created because none existed. Please review it and replace
  with professionally finalized artwork if you have it.
- **Fonts load from Google Fonts CDN**, not self-hosted files. If you want offline/self-hosted
  fonts, say so and I'll wire up local `@font-face`.
- **Icons are Lucide (a substitution).** Custom woodcut icons would be the ideal next step.
- **No real photography exists yet** — the UI kit uses warm styled placeholders. Drop in real
  workshop/product photos to bring it to life.
