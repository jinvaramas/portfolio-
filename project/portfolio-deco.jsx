// portfolio-deco.jsx — decorative SVG elements (stars, sparkles, painted star frames)

function Star({ size = 32, fill = "#ff5b5b", stroke = "#2a1d18", strokeWidth = 1.5, rotate = 0, style = {}, className = "" }){
  // 5-point star with slightly imperfect, hand-drawn feel
  const points = [];
  const cx = 50, cy = 50;
  const outer = 48, inner = 20;
  for (let i = 0; i < 10; i++) {
    const a = (Math.PI * 2 * i) / 10 - Math.PI / 2;
    const r = i % 2 === 0 ? outer : inner;
    // tiny jitter for handmade feel — deterministic per index
    const jx = (i % 3 === 0 ? 1.2 : -0.8);
    const jy = (i % 2 === 0 ? -0.6 : 1.0);
    points.push(`${(cx + Math.cos(a) * r + jx).toFixed(2)},${(cy + Math.sin(a) * r + jy).toFixed(2)}`);
  }
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}
         className={className}
         style={{ transform: `rotate(${rotate}deg)`, overflow: "visible", ...style }}>
      <polygon points={points.join(" ")} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}

function Sparkle({ size = 18, color = "#2a1d18", style = {} }){
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={{ overflow:"visible", ...style }}>
      <path d="M12 1 L13.5 10.5 L23 12 L13.5 13.5 L12 23 L10.5 13.5 L1 12 L10.5 10.5 Z"
            fill={color} />
    </svg>
  );
}

function Burst({ size = 220, color = "#ffae2e", stroke = "#2a1d18", spikes = 18, style = {} }){
  // Sunburst — like the cover image central shape
  const cx = 50, cy = 50;
  const points = [];
  for (let i = 0; i < spikes * 2; i++) {
    const a = (Math.PI * 2 * i) / (spikes * 2) - Math.PI / 2;
    const r = i % 2 === 0 ? 48 : 30;
    points.push(`${(cx + Math.cos(a) * r).toFixed(2)},${(cy + Math.sin(a) * r).toFixed(2)}`);
  }
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ overflow:"visible", ...style }}>
      <polygon points={points.join(" ")} fill={color} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function ScatterStars({ count = 8, palette }){
  // pseudo-random but deterministic placement
  const pal = palette || ["#ff5b5b","#ffae2e","#ffe156","#5fb55b","#1fa8a8","#e63f8d","#9d7bea"];
  const seed = (i) => {
    const s = Math.sin(i * 99.13) * 10000;
    return s - Math.floor(s);
  };
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const x = seed(i) * 100;
        const y = seed(i + 17) * 100;
        const size = 14 + seed(i + 41) * 22;
        const rot = seed(i + 7) * 360;
        const color = pal[i % pal.length];
        return (
          <div key={i} className="star-deco" style={{
            left: `${x}%`, top: `${y}%`,
            transform: `translate(-50%, -50%)`
          }}>
            <Star size={size} fill={color} rotate={rot} />
          </div>
        );
      })}
    </>
  );
}

function Squiggle({ width = 120, height = 24, color = "#2a1d18", strokeWidth = 2 }){
  return (
    <svg width={width} height={height} viewBox="0 0 120 24" style={{ overflow:"visible" }}>
      <path d="M2 12 Q 12 2, 22 12 T 42 12 T 62 12 T 82 12 T 102 12 T 118 12"
            fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

function Underline({ color = "#ff5b5b", strokeWidth = 5, style = {} }){
  return (
    <svg viewBox="0 0 200 14" preserveAspectRatio="none" style={{ width:"100%", height: 14, display:"block", ...style }}>
      <path d="M3 9 C 40 3, 80 13, 120 6 S 190 9, 197 6"
            fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

function ArrowHand({ size = 36, color = "#2a1d18" }){
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} style={{ overflow:"visible" }}>
      <path d="M5 8 Q 14 30, 30 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M22 19 L30 24 L26 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

Object.assign(window, { Star, Sparkle, Burst, ScatterStars, Squiggle, Underline, ArrowHand, Draggable });

// ─── Draggable wrapper ──────────────────────────────────────────────
// Wrap any decoration with <Draggable id="unique-id" x={pct} y={pct}>...</Draggable>
// User can click & drag to reposition. Position persists in localStorage per id.
// Anchor: position is stored as % relative to the parent (so it scales with layout).
function Draggable({ id, x = 0, y = 0, anchor = "parent", children, style = {}, hoverOutline = true }){
  const ref = React.useRef(null);
  const storageKey = `deco-pos:${id}`;
  const [pos, setPos] = React.useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw);
    } catch(e){}
    return { x, y };
  });
  const [dragging, setDragging] = React.useState(false);
  const [hovered, setHovered]   = React.useState(false);

  React.useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(pos)); } catch(e){}
  }, [pos, storageKey]);

  const onPointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const el = ref.current;
    if (!el) return;
    const parent = el.offsetParent || el.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const startPos = { ...pos };
    setDragging(true);

    const move = (ev) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      const dxPct = (dx / parentRect.width)  * 100;
      const dyPct = (dy / parentRect.height) * 100;
      setPos({
        x: startPos.x + dxPct,
        y: startPos.y + dyPct
      });
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const outline = (hovered || dragging) && hoverOutline
    ? "1.5px dashed rgba(42,29,24,.55)"
    : "1.5px dashed transparent";

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        left:  `${pos.x}%`,
        top:   `${pos.y}%`,
        transform: "translate(-50%, -50%)",
        cursor: dragging ? "grabbing" : "grab",
        touchAction: "none",
        userSelect: "none",
        padding: 4,
        borderRadius: 8,
        outline,
        outlineOffset: 2,
        transition: dragging ? "none" : "outline-color .15s ease",
        zIndex: dragging ? 999 : "auto",
        ...style
      }}
      title="Drag to reposition"
    >
      {children}
    </div>
  );
}
