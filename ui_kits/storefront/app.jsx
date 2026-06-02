/* global React, ReactDOM, PRODUCTS, CATEGORIES, Header, Hero, StoryStrip, Footer, ProductGrid, ProductDetail, BasketDrawer, Eyebrow, Icon */
// Gram's Holler storefront — app shell

function App() {
  const [view, setView] = React.useState("home");       // home | product
  const [active, setActive] = React.useState(null);
  const [category, setCategory] = React.useState("All");
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  const add = (p, qty = 1) => {
    setCart((c) => {
      const found = c.find((i) => i.id === p.id);
      if (found) return c.map((i) => i.id === p.id ? { ...i, qty: i.qty + qty } : i);
      return [...c, { ...p, qty }];
    });
    setToast(`${p.name} — added to your basket`);
    clearTimeout(window.__ghToast);
    window.__ghToast = setTimeout(() => setToast(null), 2200);
  };
  const remove = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const open = (p) => { setActive(p); setView("product"); window.scrollTo(0, 0); };
  const home = () => { setView("home"); window.scrollTo(0, 0); };
  const count = cart.reduce((s, i) => s + i.qty, 0);

  const shown = category === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header cartCount={count} onCart={() => setCartOpen(true)} onHome={home} category={category} setCategory={setCategory} />

      <main style={{ flex: 1 }}>
        {view === "home" && (
          <>
            <Hero onShop={() => document.getElementById("shop").scrollIntoView({ behavior: "smooth" })} />
            <section id="shop" style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 32px 8px", scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <Eyebrow>The shop</Eyebrow>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 34, color: "var(--gh-ink)", margin: "8px 0 0" }}>Everything we've made lately</h2>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {CATEGORIES.map((c) => (
                    <button key={c} onClick={() => setCategory(c)}
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, padding: "7px 15px", borderRadius: 999, cursor: "pointer",
                        background: category === c ? "var(--gh-holler)" : "transparent", color: category === c ? "var(--gh-paper-warm)" : "var(--gh-bark)",
                        border: category === c ? "1.5px solid var(--gh-holler)" : "1.5px solid var(--border-strong)" }}>{c}</button>
                  ))}
                </div>
              </div>
              <ProductGrid products={shown} onOpen={open} onAdd={add} />
            </section>
            <StoryStrip />
          </>
        )}
        {view === "product" && active && (
          <ProductDetail product={active} onBack={home} onAdd={(p, q) => { add(p, q); setCartOpen(true); }} />
        )}
      </main>

      <Footer />
      <BasketDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={remove} />

      {/* toast */}
      <div style={{ position: "fixed", bottom: 24, left: "50%", transform: `translateX(-50%) translateY(${toast ? 0 : 16}px)`,
        opacity: toast ? 1 : 0, transition: "all var(--dur) var(--ease-rock)", pointerEvents: "none", zIndex: 50,
        background: "var(--gh-walnut)", color: "var(--gh-paper-warm)", padding: "12px 20px", borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontSize: 15 }}>
        <Icon name="Check" size={18} color="var(--gh-wheat)" /> {toast}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
