// Critically damped by default. Response is seconds-to-settle, not a fixed duration.

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export function project(initialVelocity, decelerationRate = 0.998) {
  return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
}

export function rubberband(overshoot, dimension, constant = 0.55) {
  const extra = Math.abs(overshoot);
  return (Math.sign(overshoot) * extra * dimension * constant) / (dimension + constant * extra);
}

export function spring({
  from,
  to,
  velocity = 0,
  response = 0.35,
  dampingRatio = 1,
  onUpdate,
  onRest,
}) {
  if (reducedMotion.matches) {
    onUpdate(to);
    if (onRest) onRest();
    return {
      stop() {},
      retarget() {},
      get position() {
        return to;
      },
      get velocity() {
        return 0;
      },
    };
  }

  const omega = (2 * Math.PI) / response;
  const stiffness = omega * omega;
  const damping = 2 * dampingRatio * omega;
  let x = from;
  let v = velocity;
  let target = to;
  let last = performance.now();
  let frame = 0;
  let running = true;

  const step = (now) => {
    if (!running) return;
    const dt = Math.min(0.032, (now - last) / 1000);
    last = now;
    const accel = -stiffness * (x - target) - damping * v;
    v += accel * dt;
    x += v * dt;
    onUpdate(x);
    const settled = Math.abs(x - target) < 0.4 && Math.abs(v) < 12;
    if (settled) {
      x = target;
      v = 0;
      onUpdate(x);
      running = false;
      if (onRest) onRest();
      return;
    }
    frame = requestAnimationFrame(step);
  };

  frame = requestAnimationFrame(step);

  return {
    stop() {
      running = false;
      cancelAnimationFrame(frame);
    },
    retarget(next, nextVelocity) {
      target = next;
      if (nextVelocity != null) v = nextVelocity;
      if (!running) {
        running = true;
        last = performance.now();
        frame = requestAnimationFrame(step);
      }
    },
    get position() {
      return x;
    },
    get velocity() {
      return v;
    },
  };
}
