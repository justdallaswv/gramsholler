/* global React, lucide */
// Gram's Holler storefront — shared UI primitives

// --- Lucide icon wrapper (uses the lucide UMD global) ---
function Icon({ name, size = 20, color = "currentColor", stroke = 1.9, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    const node = lucide.icons[name];
    if (!node) return;
    ref.current.innerHTML = "";
    const el = lucide.createElement(node);
    el.setAttribute("width", size);
    el.setAttribute("height", size);
    el.setAttribute("stroke", color);
    el.setAttribute("stroke-width", stroke);
    el.setAttribute("stroke-linecap", "round");
    el.setAttribute("stroke-linejoin", "round");
    ref.current.appendChild(el);
  }, [name, size, color, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", lineHeight: 0, ...style }} />;
}

// --- Button ---
function Button({ children, variant = "primary", size = "md", icon, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pads = size === "lg" ? "14px 28px" : size === "sm" ? "8px 15px" : "11px 22px";
  const fs = size === "lg" ? 17 : size === "sm" ? 13 : 15;
  const base = {
    fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: fs, letterSpacing: "0.01em",
    padding: pads, borderRadius: "var(--radius-md)",
    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 9,
    transition: "background var(--dur) var(--ease-rock), transform var(--dur-fast) var(--ease-rock)",
    transform: press ? "scale(0.99)" : "scale(1)",
  };
  const variants = {
    primary: { background: press ? "var(--gh-ember)" : hover ? "var(--gh-clay)" : "var(--gh-barn)", color: "var(--gh-paper-warm)", border: "1.5px solid transparent", boxShadow: "var(--shadow-sm)" },
    secondary: { background: hover ? "color-mix(in srgb, var(--gh-holler) 8%, transparent)" : "transparent", color: "var(--gh-holler)", border: "1.5px solid var(--gh-holler)" },
    ghost: { background: hover ? "color-mix(in srgb, var(--gh-oak) 12%, transparent)" : "transparent", color: "var(--gh-bark)", border: "1.5px solid var(--border)" },
    gold: { background: hover ? "var(--gh-wheat)" : "var(--gh-goldenrod)", color: "var(--gh-walnut)", border: "1.5px solid transparent" },
  };
  return (
    <button style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} onClick={onClick}>
      {icon && <Icon name={icon} size={fs + 3} />}
      {children}
    </button>
  );
}

// --- Eyebrow ---
function Eyebrow({ children, color = "var(--gh-barn)", style }) {
  return <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color, ...style }}>{children}</div>;
}

// --- Badge ---
function Badge({ children, tone = "stock" }) {
  const tones = {
    stock: { background: "color-mix(in srgb, var(--gh-moss) 20%, transparent)", color: "var(--gh-moss)" },
    low: { background: "color-mix(in srgb, var(--gh-goldenrod) 26%, transparent)", color: "#8a5e10" },
    sale: { background: "var(--gh-barn)", color: "var(--gh-paper-warm)" },
  };
  return <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 9px", borderRadius: "var(--radius-sm)", whiteSpace: "nowrap", ...tones[tone] }}>{children}</span>;
}

// --- Photo placeholder (woodgrain tone until real shots arrive) ---
const PH_TONES = {
  Woodwork: ["#c9ad7e", "#c4a675"],
  Textiles: ["#b6a98a", "#afa07d"],
  Pantry: ["#cda86a", "#c69e5d"],
  Homestead: ["#b9a173", "#b39a69"],
};
function Placeholder({ category = "Woodwork", label, height = 200, radius = 0 }) {
  const [a, b] = PH_TONES[category] || PH_TONES.Woodwork;
  return (
    <div style={{ height, borderRadius: radius, position: "relative", display: "grid", placeItems: "center",
      background: `repeating-linear-gradient(102deg, ${a} 0 16px, ${b} 16px 32px)` }}>
      <span style={{ fontFamily: "var(--font-hand)", fontSize: 19, color: "rgba(44,32,20,0.45)" }}>{label || "your photo here"}</span>
    </div>
  );
}

// --- Hand-tied price tag ---
function PriceTag({ price, hand }) {
  return (
    <div style={{ position: "relative", background: "var(--gh-kraft)", border: "1.5px dashed rgba(44,32,20,0.35)",
      borderRadius: "var(--radius-tag)", padding: "8px 16px 8px 26px", display: "inline-flex", flexDirection: "column" }}>
      <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", width: 10, height: 10,
        borderRadius: "50%", background: "var(--gh-paper)", boxShadow: "inset 0 0 0 1.5px rgba(44,32,20,0.4)" }} />
      {hand && <span style={{ fontFamily: "var(--font-hand)", fontSize: 16, color: "var(--gh-bark)", lineHeight: 1 }}>{hand}</span>}
      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: "var(--gh-ink)" }}>${price}</span>
    </div>
  );
}

Object.assign(window, { Icon, Button, Eyebrow, Badge, Placeholder, PriceTag });
