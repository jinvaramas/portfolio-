// move-mode.jsx — global "drag anything" mode
//
// Adds a floating toggle button (bottom-left). When enabled:
//   - every element in <header> + <main> + <footer> can be click-dragged
//   - position offset is persisted in localStorage per element
//   - reset button restores defaults
//
// Excluded: tweaks panel, image-slot internals, background blobs, the toggle itself.

const STORAGE_KEY = "move-positions-v1";
const ACTIVE_KEY  = "move-mode-active";

// Walks a deterministic tree-order over visible content and stamps data-move-id.
function stampIds(){
  const roots = [
    document.querySelector("header.nav"),
    document.querySelector("main"),
    document.querySelector("footer")
  ].filter(Boolean);
  let counter = 0;
  const skip = (el) => {
    if (!el || el.nodeType !== 1) return true;
    if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return true;
    if (el.classList && (
      el.classList.contains("twk-panel") ||
      el.classList.contains("move-toggle") ||
      el.classList.contains("bg-stack")
    )) return true;
    if (el.tagName === "IMAGE-SLOT") return true;
    return false;
  };
  const walk = (el) => {
    if (skip(el)) return;
    el.setAttribute("data-move-id", `m${counter++}`);
    for (const child of el.children) walk(child);
  };
  for (const r of roots) walk(r);
}

// Apply stored offsets to all stamped elements.
function applyOffsets(positions){
  document.querySelectorAll("[data-move-id]").forEach(el => {
    const off = positions[el.dataset.moveId];
    if (off && (off.x || off.y)) {
      // preserve existing transform by using `translate` (separate from transform)
      el.style.translate = `${off.x}px ${off.y}px`;
    } else {
      el.style.translate = "";
    }
  });
}

function loadPositions(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch(e){ return {}; }
}

function savePositions(p){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch(e){}
}

function MoveMode(){
  const [active, setActive] = React.useState(() => localStorage.getItem(ACTIVE_KEY) === "1");
  const positionsRef = React.useRef(loadPositions());

  // Stamp IDs on first mount + reapply offsets after each React render commit.
  React.useEffect(() => {
    const t = setTimeout(() => {
      stampIds();
      applyOffsets(positionsRef.current);
    }, 50);
    return () => clearTimeout(t);
  }, []);

  // Toggle active class + listeners
  React.useEffect(() => {
    document.body.dataset.moveMode = active ? "on" : "off";
    localStorage.setItem(ACTIVE_KEY, active ? "1" : "0");
    if (!active) return;

    let dragEl = null, startX = 0, startY = 0, startOff = { x:0, y:0 };

    const onDown = (e) => {
      // ignore clicks inside the tweaks panel or move toggle
      if (e.target.closest(".twk-panel, .move-toggle")) return;
      const target = e.target.closest("[data-move-id]");
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();

      dragEl = target;
      startX = e.clientX;
      startY = e.clientY;
      const id = target.dataset.moveId;
      startOff = positionsRef.current[id] || { x: 0, y: 0 };
      dragEl.style.zIndex = "9999";
      dragEl.style.position = dragEl.style.position || "relative";
      dragEl.classList.add("is-dragging");
      document.body.style.cursor = "grabbing";
      try { dragEl.setPointerCapture(e.pointerId); } catch(e){}
    };

    const onMove = (e) => {
      if (!dragEl) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const nx = startOff.x + dx;
      const ny = startOff.y + dy;
      dragEl.style.translate = `${nx}px ${ny}px`;
      positionsRef.current[dragEl.dataset.moveId] = { x: nx, y: ny };
    };

    const onUp = () => {
      if (!dragEl) return;
      dragEl.classList.remove("is-dragging");
      dragEl.style.zIndex = "";
      dragEl = null;
      document.body.style.cursor = "";
      savePositions(positionsRef.current);
    };

    const onClickCapture = (e) => {
      // suppress link/button activation while in move mode
      if (e.target.closest(".twk-panel, .move-toggle")) return;
      if (e.target.closest("[data-move-id]")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("click", onClickCapture, true);
    return () => {
      document.removeEventListener("pointerdown", onDown, true);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("click", onClickCapture, true);
    };
  }, [active]);

  const reset = () => {
    positionsRef.current = {};
    savePositions({});
    applyOffsets({});
  };

  return (
    <div className="move-toggle" data-active={active ? "1" : "0"}>
      <button className="mv-btn primary" onClick={() => setActive(!active)}>
        {active ? "✕ Stop moving" : "✦ Move anything"}
      </button>
      {active && (
        <button className="mv-btn ghost" onClick={reset} title="Reset positions">
          ⟲ Reset
        </button>
      )}
    </div>
  );
}

Object.assign(window, { MoveMode });
