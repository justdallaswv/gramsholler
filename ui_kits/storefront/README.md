# Gram's Holler — Storefront UI Kit

A high-fidelity, clickable recreation of the Gram's Holler online shop. It's a *prototype*,
not production code — interactions are faked with React state — but the visuals, components,
and copy are pixel-honest to the brand system.

## Run it
Open `index.html`. It loads the shared foundations (`../../fonts/fonts.css`,
`../../colors_and_type.css`), React + Babel, and Lucide icons from CDN.

## What's demonstrated (click-through)
- **Browse** the home page: hero, category filter chips, product grid, story strip, footer.
- **Filter** by category (chips + top nav both drive the grid).
- **Open a product** → full product-detail page with quantity stepper, story copy, and trust row.
- **Add to basket** from a card or the detail page → toast + cart-count badge.
- **Open the basket drawer** → line items, subtotal, free-shipping threshold, checkout CTA, and an empty state.

## Files
| File | Contents |
|---|---|
| `index.html` | Page shell, font/token links, script load order. |
| `ui.jsx` | Primitives: `Icon` (Lucide wrapper), `Button`, `Eyebrow`, `Badge`, `Placeholder`, `PriceTag`. |
| `catalog.jsx` | `PRODUCTS` data, `CATEGORIES`, `ProductCard`, `ProductGrid`. |
| `chrome.jsx` | `Logo`, `Header`, `Hero`, `StoryStrip`, `Footer`. |
| `detail.jsx` | `ProductDetail`, `BasketDrawer`. |
| `app.jsx` | `App` — view routing, cart state, toast. Mounts to `#root`. |

Each component file exports to `window` (Babel scripts don't share scope), so load order in
`index.html` matters: `ui → catalog → chrome → detail → app`.

## Notes & caveats
- **Photography is placeholder.** `Placeholder` renders a woodgrain-toned block with a
  hand-lettered label. Swap in real warm, golden-hour workshop/product photos.
- **Icons are Lucide** (a documented substitution — see root `README.md` → Iconography).
- **No real commerce** — checkout, search, and account are visual only.
