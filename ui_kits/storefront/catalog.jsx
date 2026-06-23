/* global React, Icon, Button, Eyebrow, Badge, Placeholder, PriceTag */
// Gram's Holler storefront — catalog data + product cards

const PRODUCTS = [
  { id: "apple_butter", name: "Apple Butter", category: "Pantry", price: 6, stock: "stock",
    blurb: "Made from an honest blend of 6 different types of apples.",
    story: "We gather up six varieties of sweet apples and let them simmer all day long in a kettle until thick, dark, and spiced just right. Perfect on a hot morning biscuit." },
  { id: "pear_butter", name: "Pear Butter", category: "Pantry", price: 7, stock: "stock",
    blurb: "Slow-simmered in small batches and put up in traditional jars.",
    story: "Pure autumn sweetness put up in jars right here in our busy kitchen. We take our time letting it cook down slow so every spoonful brings a taste of mountain warmth." },
  { id: "wooden_cars", name: "Toy wooden cars and trains", category: "Woodwork", price: 6, stock: "stock",
    blurb: "Sturdy timber playthings with working rolling wheels.",
    story: "Cut out using proper tools in our workshop and sanded perfectly smooth. These classic toys are built solid from rugged lumber, designed to survive generations of play." },
  { id: "wrap", name: "Skillet handle wrap", category: "Textiles", price: 18, stock: "stock",
    blurb: "Quilted cotton so you don't go burning your good hand.",
    story: "Stitched with care using heritage styles passed down through generations. Slips right over a cast-iron handle and stays put while supper's on." },
  { id: "molasses", name: "Sorghum molasses", category: "Pantry", price: 14, stock: "stock",
    blurb: "Cooked down in the kettle, dark and slow and sweet.",
    story: "Pressed and boiled the traditional way. Good on a biscuit, better in the gingerbread come winter." },
  { id: "birdhouse", name: "Wooden birdhouse", category: "Homestead", price: 46, stock: "stock",
    blurb: "Cedar, weatherproof, sized just right for a wren.",
    story: "Built from solid cedar lumber right in our shop. Hang it under the eave and you'll have nesting neighbors by spring." },
  { id: "balm", name: "Beeswax wood balm", category: "Homestead", price: 16, stock: "stock",
    blurb: "Beeswax and oil to keep your good wood drinking.",
    story: "Our own favorite workshop recipe melted down. A little goes a long way on a toy, a board, a spoon, or a dry old table that needs some love." },
];

const CATEGORIES = ["All", "Woodwork", "Textiles", "Pantry", "Homestead"];

function ProductCard({ product, onOpen, onAdd }) {
  const [hover, setHover] = React.useState(false);
  
  // Clean image path selector
  let imageSource = null;
  if (product.id === "apple_butter") imageSource = "assets/apple.jpeg";
  if (product.id === "pear_butter") imageSource = "assets/pearbutter.jpeg";
  if (product.id === "wooden_cars") imageSource = "assets/woodtrainandcar.jpeg";

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
        {imageSource ? (
          <img src={imageSource} alt={product.name} style={{ width: "100%", height: "170px", objectFit: "cover", display: "block" }} />
        ) : (
          <Placeholder category={product.category} height={170} />
        )}
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
