"use client";
import { useEffect, useRef, useState } from "react";

const ThemeToggle = () => {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const isDarkRef = useRef(false);
  const points = useRef([]);
  const sticks = useRef([]);
  const mouse = useRef({ x: 0, y: 0, down: false, target: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const viewWidth = 160;
    const viewHeight = 260;
    const worldWidth = 240;
    const worldHeight = 390;
    const scale = viewWidth / worldWidth;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = viewWidth * dpr;
    canvas.height = viewHeight * dpr;
    canvas.style.width = `${viewWidth}px`;
    canvas.style.height = `${viewHeight}px`;
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0);

    const gravity = 0.9;
    const friction = 0.996;
    const iterations = 32;
    const segmentCount = 9;
    const segmentLen = 18;

    points.current = [];
    sticks.current = [];

    for (let i = 0; i < segmentCount; i++) {
      points.current.push({
        x: worldWidth / 2,
        y: 8 + i * segmentLen,
        oldX: worldWidth / 2,
        oldY: 8 + i * segmentLen,
        pinned: i === 0,
      });
      if (i > 0) {
        sticks.current.push({
          p1: points.current[i - 1],
          p2: points.current[i],
          len: segmentLen,
        });
      }
    }

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
    const hexToRgb = (hex) => {
      const clean = hex.replace("#", "");
      const num = parseInt(clean, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    };
    const lerp = (a, b, t) => a + (b - a) * t;
    const mix = (a, b, t) => ({
      r: Math.round(lerp(a.r, b.r, t)),
      g: Math.round(lerp(a.g, b.g, t)),
      b: Math.round(lerp(a.b, b.b, t)),
    });
    const toRgb = (c) => `rgb(${c.r}, ${c.g}, ${c.b})`;
    let colorT = isDarkRef.current ? 1 : 0;

    const onMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = clamp((e.clientX - rect.left) / scale, 10, worldWidth - 10);
      const my = clamp((e.clientY - rect.top) / scale, 6, worldHeight - 10);
      const endPoint = points.current[points.current.length - 1];
      const bodyW = 24;
      const bodyH = 36;
      const toggleY = Math.min(endPoint.y, worldHeight - 70);
      const withinBody =
        mx >= endPoint.x - bodyW / 2 - 10 &&
        mx <= endPoint.x + bodyW / 2 + 10 &&
        my >= toggleY - 6 &&
        my <= toggleY + bodyH + 12;

      let nearest = null;
      let nearestDist = Infinity;
      const startIndex = Math.max(0, points.current.length - 4);
      for (let i = startIndex; i < points.current.length; i++) {
        const p = points.current[i];
        const d = Math.hypot(p.x - mx, p.y - my);
        if (d < nearestDist) {
          nearestDist = d;
          nearest = p;
        }
      }

      if (withinBody || nearestDist < 24) {
        mouse.current.down = true;
        mouse.current.target = withinBody ? endPoint : nearest;
      }
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = clamp(
        (e.clientX - rect.left) / scale,
        10,
        worldWidth - 10,
      );
      mouse.current.y = clamp(
        (e.clientY - rect.top) / scale,
        6,
        worldHeight - 10,
      );
    };

    const onMouseUp = () => {
      if (mouse.current.down && mouse.current.y > worldHeight * 0.62) {
        setIsDark((prev) => {
          const next = !prev;
          isDarkRef.current = next;
          document.documentElement.classList.toggle("dark", next);
          return next;
        });
      }
      mouse.current.down = false;
      mouse.current.target = null;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const render = () => {
      points.current.forEach((p) => {
        if (p.pinned) return;
        if (mouse.current.down && mouse.current.target === p) {
          p.x = clamp(mouse.current.x, 10, worldWidth - 10);
          p.y = clamp(mouse.current.y, 6, worldHeight - 10);
        } else {
          const vx = (p.x - p.oldX) * friction;
          const vy = (p.y - p.oldY) * friction;
          p.oldX = p.x;
          p.oldY = p.y;
          p.x += vx;
          p.y += vy + gravity;
        }
      });

      for (let i = 0; i < iterations; i++) {
        sticks.current.forEach((s) => {
          const dx = s.p2.x - s.p1.x;
          const dy = s.p2.y - s.p1.y;
          const dist = Math.hypot(dx, dy);
          const diff = s.len - dist;
          const pct = diff / dist / 2;
          const ox = dx * pct;
          const oy = dy * pct;
          if (!s.p1.pinned) {
            s.p1.x -= ox;
            s.p1.y -= oy;
          }
          if (!s.p2.pinned) {
            s.p2.x += ox;
            s.p2.y += oy;
          }
        });
      }

      ctx.clearRect(0, 0, worldWidth, worldHeight);
      colorT += (isDarkRef.current ? 1 : 0 - colorT) * 0.08;
      const t = Math.max(0, Math.min(1, colorT));
      const cordLight = hexToRgb("#cfcfcf");
      const cordDark = hexToRgb("#3a3a3a");
      const mountFillLight = hexToRgb("#e6e6e6");
      const mountFillDark = hexToRgb("#2b2b2b");
      const mountStrokeLight = hexToRgb("#c9c9c9");
      const mountStrokeDark = hexToRgb("#4a4a4a");
      const bodyTopLight = hexToRgb("#0f0f0f");
      const bodyTopDark = hexToRgb("#f4f4f4");
      const bodyBotLight = hexToRgb("#2a2a2a");
      const bodyBotDark = hexToRgb("#cfcfcf");
      const bodyStrokeLight = hexToRgb("#1f1f1f");
      const bodyStrokeDark = hexToRgb("#d9d9d9");
      const slotLight = hexToRgb("#151515");
      const slotDark = hexToRgb("#aaaaaa");
      const nubLight = hexToRgb("#f2f2f2");
      const nubDark = hexToRgb("#2b2b2b");
      const ledLight = hexToRgb("#00bcd4");
      const ledDark = hexToRgb("#00e5ff");

      // Ceiling mount
      ctx.save();
      ctx.translate(worldWidth / 2, 6);
      ctx.fillStyle = toRgb(mix(mountFillLight, mountFillDark, t));
      ctx.strokeStyle = toRgb(mix(mountStrokeLight, mountStrokeDark, t));
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(-18, -4, 36, 10, 5);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Cord
      ctx.beginPath();
      ctx.moveTo(points.current[0].x, points.current[0].y);
      points.current.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.strokeStyle = toRgb(mix(cordLight, cordDark, t));
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.stroke();

      const last = points.current[points.current.length - 1];
      const toggleY = Math.min(last.y, worldHeight - 70);
      const bodyW = 24;
      const bodyH = 36;
      ctx.save();
      ctx.translate(last.x, toggleY);

      // Toggle body with soft gradient
      const bodyGrad = ctx.createLinearGradient(0, 0, 0, bodyH);
      bodyGrad.addColorStop(0, toRgb(mix(bodyTopLight, bodyTopDark, t)));
      bodyGrad.addColorStop(1, toRgb(mix(bodyBotLight, bodyBotDark, t)));
      ctx.fillStyle = bodyGrad;
      ctx.strokeStyle = toRgb(mix(bodyStrokeLight, bodyStrokeDark, t));
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(-bodyW / 2, 2, bodyW, bodyH, 10);
      ctx.fill();
      ctx.stroke();

      // Toggle slot
      ctx.beginPath();
      ctx.roundRect(-6, 10, 12, 18, 6);
      ctx.fillStyle = toRgb(mix(slotLight, slotDark, t));
      ctx.fill();

      // Toggle nub
      ctx.beginPath();
      ctx.arc(0, 16 + 10 * t, 5, 0, Math.PI * 2);
      ctx.fillStyle = toRgb(mix(nubLight, nubDark, t));
      ctx.fill();

      // Indicator LED
      ctx.beginPath();
      ctx.arc(0, bodyH - 6, 2, 0, Math.PI * 2);
      ctx.fillStyle = toRgb(mix(ledLight, ledDark, t));
      ctx.fill();
      ctx.restore();

      requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className="fixed top-0 right-4 z-[999] pointer-events-none w-[160px] h-[260px]">
      <canvas
        ref={canvasRef}
        className="pointer-events-auto w-full h-full block cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
export default ThemeToggle;
