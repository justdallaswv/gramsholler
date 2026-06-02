/* global React, Icon, Button, Eyebrow, Badge, Placeholder, PriceTag */
// Gram's Holler storefront — catalog data + product cards

const PRODUCTS = [
  { id: "spoon", name: "Walnut serving spoon", category: "Woodwork", price: 38, stock: "low",
    blurb: "Carved by hand and rubbed with beeswax. It'll outlive the both of us.",
    story: "We cut these from walnut that came down in the storm of '21. Every spoon takes the better part of an evening on the porch — shaped with a drawknife, finished with nothing but beeswax and elbow grease." },
  { id: "board", name: "Cherry cutting board", category: "Woodwork", price: 72, stock: "stock",
    blurb: "End-grain cherry, kind to your knives, kinder to your kitchen.",
    story: "Glued up from cherry offcuts, planed flat, and oiled till it glows. Wash it by hand and give it a rub of balm now and then and it'll feed your family for forty years." },
  { id: "throw", name: "Wool throw, ridge pattern", category: "Textiles", price: 128, stock: "low",
    blurb: "Woven on the old loom in the pattern of the ridgeline out back.",
    story: "Undyed mountain wool, woven slow. The pattern follows the ridge you can see from Gram's kitchen window — two peaks and the holler between them." },
  { id: "wrap", name: "Skillet handle wrap", category: "Textiles", price: 18, stock: "stock",
    blurb: "Quilted cotton so you don't go burning your good hand.",
    story: "Scrap-quilted from flour-sack cotton. Slips right over a cast-iron handle and stays put while supper's on." },
  { id: "molasses", name: "Sorghum molasses", category: "Pantry", price: 14, stock: "stock",
    blurb: "Cooked down in the copper kettle, dark and slow and sweet.",
    story: "Pressed and boiled the way Gram's people always have. Good on a biscuit, better in the gingerbread come winter." },
  { id: "preserves", name: "Blackberry preserves", category: "Pantry", price: 11, stock: "low",
    blurb: "Berries picked off the fence row, put up by the dozen.",
    story: "We pick the brambles along the back fence in July and put up preserves the same afternoon. Each jar is hand-labeled and dated." },
  { id: "birdhouse", name: "Whittled birdhouse", category: "Homestead", price: 46, stock: "stock",
    blurb: "Cedar, weatherproof, sized just right for a wren.",
    story: "Built from cedar shakes, whittled and pegged — not a nail in it. Hang it under the eave and you'll have neighbors by spring." },
  { id: "balm", name: "Beeswax wood balm", category: "Homestead", price: 16, stock: "stock",
    blurb: "Beeswax and walnut oil to keep your good wood drinking.",
    story: "Our own beeswax melted with walnut oil. A little goes a long way on a board, a spoon, or a dry old table that needs some love." },
];

const CATEGORIES = ["All", "Woodwork", "Textiles", "Pantry", "Homestead"];

function ProductCard({ product, onOpen, onAdd }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(product)}
      style={{
        background: "var(--gh-paper-warm)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-md)", overflow: "hidden", cursor: "pointer",
        display: "flex", flexDirection: "column", transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "transform var(--dur) var(--ease-rock), box-shadow var(--dur) var(--ease-rock)",
      }}>
      <div style={{ position: "relative" }}>
        <Placeholder category={product.category} height={170} />
        {product.stock === "low" && (
          <div style={{ position: "absolute", top: 10, left: 10 }}><Badge tone="low">Only 2 left</Badge></div>
        )}
      </div>
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        <Eyebrow color="var(--gh-oak)" style={{ fontSize: 10.5 }}>{product.category}</Eyebrow>
        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, color: "var(--gh-ink)", lineHeight: 1.2 }}>{product.name}</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--gh-bark)", lineHeight: 1.45 }}>{product.blurb}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 12 }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: "var(--gh-ink)" }}>${product.price}</span>
          <Button size="sm" icon="ShoppingBasket" onClick={(e) => { e.stopPropagation(); onAdd(product); }}>Add</Button>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ products, onOpen, onAdd }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
      {products.map((p) => <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />)}
    </div>
  );
}

Object.assign(window, { PRODUCTS, CATEGORIES, ProductCard, ProductGrid });
