// Bottom sheet for phones: three resting heights (peek, half, full), dragged by
// its header anywhere, or by its body when the body can't scroll that way.
import { project, rubberband, spring } from "./spring.js";

const wide = window.matchMedia("(min-width: 860px)");

export function createSheet({ panel, head, body, peekContent, onSnap }) {
  let y = 0;
  let snap = "half";
  let motion = null;
  let suppressClick = false;

  const height = () => panel.offsetHeight;
  const safeBottom = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-bottom")) || 0;

  function stops() {
    const h = height();
    const peekVisible = head.offsetHeight + (peekContent() || 72) + 18 + safeBottom();
    const halfVisible = Math.max(peekVisible + 120, Math.round(window.innerHeight * 0.48));
    return {
      full: 0,
      half: Math.max(0, h - halfVisible),
      peek: Math.max(0, h - peekVisible),
    };
  }

  function apply(next) {
    y = next;
    panel.style.transform = `translate3d(0, ${next}px, 0)`;
  }

  function settle(name, velocity = 0) {
    if (wide.matches) return;
    snap = name;
    const to = stops()[name];
    if (motion) motion.stop();
    motion = spring({ from: y, to, velocity, response: 0.42, dampingRatio: 0.86, onUpdate: apply });
    body.style.overflowY = name === "full" ? "auto" : "hidden";
    if (name !== "full") body.scrollTop = 0;
    if (onSnap) onSnap(name);
  }

  function nearest(position, velocity) {
    const s = stops();
    const projected = position + project(velocity, 0.994);
    const order = ["full", "half", "peek"];
    let best = order[0];
    for (const name of order) {
      if (Math.abs(s[name] - projected) < Math.abs(s[best] - projected)) best = name;
    }
    return best;
  }

  // Touch dragging, with velocity from the last ~80ms.
  let start = null;
  let samples = [];
  let dragging = false;

  function begin(clientY, fromHead) {
    if (wide.matches) return;
    if (motion) motion.stop();
    start = { clientY, y, fromHead, scrollTop: body.scrollTop };
    samples = [{ t: performance.now(), y: clientY }];
    dragging = false;
  }

  function move(clientY, event) {
    if (!start) return;
    const dy = clientY - start.clientY;
    if (!dragging) {
      if (Math.abs(dy) < 6) return;
      const canDragBody =
        snap !== "full" || (dy > 0 && body.scrollTop <= 0);
      if (!start.fromHead && !canDragBody) {
        start = null;
        return;
      }
      dragging = true;
      start.clientY = clientY;
    }
    if (event && event.cancelable) event.preventDefault();
    let next = start.y + (clientY - start.clientY);
    const max = stops().peek;
    if (next < 0) next = rubberband(next, height());
    if (next > max) next = max + rubberband(next - max, height());
    apply(next);
    const now = performance.now();
    samples.push({ t: now, y: clientY });
    while (samples.length > 2 && now - samples[0].t > 80) samples.shift();
  }

  function end() {
    if (!start) return;
    const wasDragging = dragging;
    start = null;
    dragging = false;
    if (!wasDragging) return;
    suppressClick = true;
    setTimeout(() => (suppressClick = false), 0);
    const a = samples[0];
    const b = samples[samples.length - 1];
    const velocity = b.t > a.t ? ((b.y - a.y) / (b.t - a.t)) * 1000 : 0;
    settle(nearest(y, velocity), velocity);
  }

  panel.addEventListener("touchstart", (e) => begin(e.touches[0].clientY, head.contains(e.target)), { passive: true });
  panel.addEventListener("touchmove", (e) => move(e.touches[0].clientY, e), { passive: false });
  panel.addEventListener("touchend", end);
  panel.addEventListener("touchcancel", end);

  // Mouse users on a narrow window drag the header.
  head.addEventListener("mousedown", (e) => {
    begin(e.clientY, true);
    const onMove = (m) => move(m.clientY, m);
    const onUp = () => {
      end();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  });

  panel.addEventListener("click", (e) => {
    if (suppressClick) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);

  head.querySelector(".grab").addEventListener("click", () => {
    settle(snap === "peek" ? "half" : snap === "half" ? "full" : "peek");
  });

  function layout() {
    if (wide.matches) {
      panel.style.transform = "";
      body.style.overflowY = "auto";
      return;
    }
    if (motion) motion.stop();
    apply(stops()[snap]);
    body.style.overflowY = snap === "full" ? "auto" : "hidden";
  }

  window.addEventListener("resize", layout);
  wide.addEventListener("change", layout);
  layout();

  return {
    settle,
    layout,
    get snap() {
      return wide.matches ? "full" : snap;
    },
    get wide() {
      return wide.matches;
    },
    // How much of the map the sheet covers, for fitting the map around it.
    coveredBottom() {
      return wide.matches ? 0 : Math.max(0, height() - stops()[snap]);
    },
  };
}
