/* global React, Icon, Button, Eyebrow, Placeholder */
// Gram's Holler storefront — header, hero, story, footer

function Logo({ onClick }) {
  return (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 11, cursor: "pointer" }}>
      <img src="../../assets/logo-mark.svg" alt="" width="42" height="42" style={{ display: "block" }} />
      <span style={{ fontFamily: "var(--font-display)", fontSize: 23, color: "var(--gh-barn)", lineHeight: 1 }}>Gram's Holler</span>
    </div>
  );
}

function Header({ cartCount, onCart, onHome, category, setCategory }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "color-mix(in srgb, var(--gh-paper) 92%, transparent)",
      backdropFilter: "blur(6px)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <Logo onClick={onHome} />
        <nav style={{ display: "flex", gap: 4 }}>
          {["Woodwork", "Textiles", "Pantry", "Homestead"].map((c) => (
            <button key={c} onClick={() => { onHome(); setCategory(c); }}
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 14, color: category === c ? "var(--gh-barn)" : "var(--gh-bark)",
                background: "none", border: "none", cursor: "pointer", padding: "6px 12px", borderRadius: "var(--radius-sm)" }}>{c}</button>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Icon name="Search" size={20} color="var(--gh-bark)" style={{ cursor: "pointer" }} />
          <button onClick={onCart} style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 4, display: "inline-flex" }}>
            <Icon name="ShoppingBasket" size={22} color="var(--gh-bark)" />
            {cartCount > 0 && (
              <span style={{ position: "absolute", top: -4, right: -6, background: "var(--gh-barn)", color: "#fff",
                fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 11, minWidth: 18, height: 18, borderRadius: 999,
                display: "grid", placeItems: "center", padding: "0 4px" }}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onShop }) {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 32px 8px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center",
        background: "var(--gh-holler)", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
        <div style={{ padding: "56px 12px 56px 56px" }}>
          <Eyebrow color="var(--gh-wheat)">Handmade in the holler</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 46, lineHeight: 1.12, color: "var(--gh-paper-warm)", margin: "14px 0 0", letterSpacing: "-0.01em" }}>
            Made slow.<br />Made to last.
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.6, color: "color-mix(in srgb, var(--gh-paper-warm) 84%, transparent)", margin: "18px 0 28px", maxWidth: 380 }}>
            Wood, cloth, and pantry goods made by hand on the porch — the way Gram always has. Pull up a chair and set a spell.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <Button size="lg" onClick={onShop} icon="ArrowRight">Shop the holler</Button>
            <Button size="lg" variant="ghost" style={{ color: "var(--gh-paper-warm)", borderColor: "color-mix(in srgb, var(--gh-paper-warm) 40%, transparent)" }}>Read our story</Button>
          </div>
        </div>
        <div style={{ alignSelf: "stretch" }}>
          <Placeholder category="Woodwork" label="hero photo — workshop / hands" height={420} />
        </div>
      </div>
    </section>
  );
}

function StoryStrip() {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center" }}>
        <Placeholder category="Homestead" label="photo — Gram on the porch" height={300} radius="var(--radius-xl)" />
        <div>
          <Eyebrow>From the workshop</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 38, lineHeight: 1.1, color: "var(--gh-ink)", margin: "12px 0 16px" }}>
            A holler is a hollow between the hills.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.65, color: "var(--gh-bark)", margin: "0 0 14px" }}>
            Ours is green and quiet and a little hard to get to. That's where Gram taught us to whittle a spoon, weave a throw, and put up the blackberries before the birds get them.
          </p>
          <p style={{ fontFamily: "var(--font-hand)", fontSize: 26, color: "var(--gh-moss)", margin: 0 }}>
            We pack each one in kraft paper and tie it with twine.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer({ setCategory }) {
  const cols = [
    { h: "The shop", links: ["Woodwork", "Textiles", "Pantry", "Homestead"] },
    // "Wholesale" is now completely removed from the list below!
    { h: "The holler", links: ["Our story", "How we make it", "Visit the workshop"] },
    { h: "Help", links: ["Shipping & returns", "Care & keeping", "Contact us"] },
  ];
  return (
    <footer style={{ background: "var(--gh-walnut)", color: "var(--gh-paper-warm)", marginTop: 24 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 32px 36px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <img src="../../assets/logo-mark.svg" alt="" width="40" height="40" />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--gh-wheat)" }}>Gram's Holler</span>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6, color: "color-mix(in srgb, var(--gh-paper-warm) 70%, transparent)", maxWidth: 260, margin: 0 }}>
            Authentic rustic goods, made by hand in the Appalachian hills. Made slow, made to last.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.h}>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gh-wheat)", marginBottom: 12 }}>{col.h}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
              {col.links.map((l) => {
                // This smart helper assigns the right page file destination based on the name clicked
                let destination = "#";
                if (l === "Our story") destination = "./story.html";
                if (l === "How we make it") destination = "./how.html";
                if (l === "Visit the workshop") destination = "./workshop.html";

                return (
                  <li key={l}>
                    <a 
                      href={destination} 
                      onClick={(e) => { 
                        if (["Woodwork", "Textiles", "Pantry", "Homestead"].includes(l)) {
                          e.preventDefault(); 
                          setCategory(l); 
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }} 
                      style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "color-mix(in srgb, var(--gh-paper-warm) 78%, transparent)", textDecoration: "none" }}
                    >
                      {l}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid color-mix(in srgb, var(--gh-paper-warm) 18%, transparent)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 32px", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: 13, color: "color-mix(in srgb, var(--gh-paper-warm) 55%, transparent)" }}>
          <span>© Gram's Holler. Every piece made by hand.</span>
          <span>Free shipping over $75 · We're not in a hurry, and that's the point.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Logo, Header, Hero, StoryStrip, Footer });
