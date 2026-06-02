/* global React, Icon, Button, Eyebrow, Badge, Placeholder, PriceTag */
// Gram's Holler storefront — product detail + basket drawer

function ProductDetail({ product, onBack, onAdd }) {
  const [qty, setQty] = React.useState(1);
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 32px 56px" }}>
      <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "none", border: "none",
        cursor: "pointer", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 14, color: "var(--gh-bark)", marginBottom: 22, padding: 0, whiteSpace: "nowrap" }}>
        <Icon name="ArrowLeft" size={18} /> Back to the shop
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
        <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
          <Placeholder category={product.category} height={460} />
        </div>
        <div>
          <Eyebrow>{product.category}</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 42, lineHeight: 1.08, color: "var(--gh-ink)", margin: "12px 0 14px" }}>{product.name}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 30, color: "var(--gh-ink)" }}>${product.price}</span>
            <Badge tone={product.stock}>{product.stock === "low" ? "Only 2 left" : "In stock"}</Badge>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.6, color: "var(--gh-ink)", margin: "0 0 14px", fontStyle: "italic" }}>{product.blurb}</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.7, color: "var(--gh-bark)", margin: "0 0 28px" }}>{product.story}</p>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
            <div style={{ display: "flex", alignItems: "center", border: "1.5px solid var(--border-strong)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--gh-paper-warm)" }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={qbtn}><Icon name="Minus" size={16} /></button>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, width: 38, textAlign: "center", color: "var(--gh-ink)" }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={qbtn}><Icon name="Plus" size={16} /></button>
            </div>
            <Button size="lg" icon="ShoppingBasket" onClick={() => onAdd(product, qty)}>Add to basket</Button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 11, borderTop: "1px solid var(--hairline)", paddingTop: 20 }}>
            {[["Hammer", "Made by hand in the workshop"], ["Package", "Wrapped in kraft paper & twine"], ["Truck", "Free shipping over $75 — good things take a few days"]].map(([ic, t]) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 11, fontFamily: "var(--font-body)", fontSize: 15, color: "var(--gh-bark)" }}>
                <Icon name={ic} size={19} color="var(--gh-moss)" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const qbtn = { background: "none", border: "none", cursor: "pointer", padding: "10px 12px", display: "inline-flex", color: "var(--gh-bark)" };

function BasketDrawer({ open, items, onClose, onRemove }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(44,32,20,0.4)", opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur) var(--ease-rock)", zIndex: 40 }} />
      <aside style={{ position: "fixed", top: 0, right: 0, height: "100%", width: 400, maxWidth: "90vw", background: "var(--gh-paper)",
        boxShadow: "var(--shadow-lg)", zIndex: 41, transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--dur-slow) var(--ease-rock)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 21, color: "var(--gh-ink)" }}>Your basket</span>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", display: "inline-flex" }}><Icon name="X" size={22} color="var(--gh-bark)" /></button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "8px 24px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 16px" }}>
              <Icon name="ShoppingBasket" size={40} color="var(--gh-tan)" />
              <p style={{ fontFamily: "var(--font-hand)", fontSize: 24, color: "var(--gh-bark)", margin: "14px 0 0" }}>Empty as a Sunday porch.</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--gh-oak)", margin: "6px 0 0" }}>Let's fix that.</p>
            </div>
          ) : items.map((i) => (
            <div key={i.id} style={{ display: "flex", gap: 14, padding: "16px 0", borderBottom: "1px solid var(--hairline)" }}>
              <div style={{ width: 64, height: 64, borderRadius: "var(--radius-md)", overflow: "hidden", flex: "none" }}><Placeholder category={i.category} label="" height={64} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15.5, color: "var(--gh-ink)", lineHeight: 1.2 }}>{i.name}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--gh-oak)", marginTop: 2 }}>Qty {i.qty}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15.5, color: "var(--gh-ink)" }}>${i.price * i.qty}</div>
                <button onClick={() => onRemove(i.id)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--gh-barn)", padding: "4px 0 0" }}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div style={{ padding: "20px 24px", borderTop: "1px solid var(--border)", background: "var(--gh-paper-warm)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--gh-bark)" }}>
              <span>Subtotal</span><span>${total}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--gh-moss)" }}>
              <span>Shipping</span><span>{total >= 75 ? "Free" : "$8"}</span>
            </div>
            <Button size="lg" icon="ArrowRight" style={{ width: "100%", justifyContent: "center" }}>Check out · ${total >= 75 ? total : total + 8}</Button>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--gh-oak)", textAlign: "center", margin: "12px 0 0" }}>Give us a few days — good things take time.</p>
          </div>
        )}
      </aside>
    </>
  );
}

Object.assign(window, { ProductDetail, BasketDrawer });
