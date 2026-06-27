"use client";
import { useEffect, useRef, useState } from "react";

const ThemeToggle = () => {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const isDarkRef = useRef(false);
  const points = useRef([]);
  const sticks = useRef([]);
  const mouse = useRef({ x: 0, y: 0, down: false, target: null });
  const hasToggled = useRef(false);

  useEffect(() => {
    const checkInitialTheme = () => {
      const isHtmlDark = document.documentElement.classList.contains("dark");
      setIsDark(isHtmlDark);
      isDarkRef.current = isHtmlDark;
    };
    checkInitialTheme();

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

    const gravity = 1.3;
    const friction = 0.965;
    const iterations = 12;
    const segmentCount = 9;
    const segmentLen = 12;

    points.current = [];
    sticks.current = [];

    for (let i = 0; i < segmentCount; i++) {
      points.current.push({
        x: worldWidth / 2,
        y: i * segmentLen,
        oldX: worldWidth / 2,
        oldY: i * segmentLen,
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

    const getPoint = (e) => {
      const rect = canvas.getBoundingClientRect();
      const point =
        "touches" in e && e.touches.length
          ? e.touches[0]
          : "changedTouches" in e && e.changedTouches.length
            ? e.changedTouches[0]
            : e;
      const mx = clamp(
        (point.clientX - rect.left) / scale,
        10,
        worldWidth - 10,
      );
      const my = clamp((point.clientY - rect.top) / scale, 6, worldHeight - 10);
      return { mx, my };
    };

    const onPointerDown = (e) => {
      if (e.cancelable) e.preventDefault();

      if (e.pointerId !== undefined) {
        try {
          canvas.setPointerCapture(e.pointerId);
        } catch (err) {}
      }

      const { mx, my } = getPoint(e);
      const endPoint = points.current[points.current.length - 1];
      const bodyW = 20;
      const bodyH = 40;
      const toggleY = Math.min(endPoint.y, worldHeight - 70);
      const withinBody =
        mx >= endPoint.x - bodyW / 2 - 12 &&
        mx <= endPoint.x + bodyW / 2 + 12 &&
        my >= toggleY - 8 &&
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

    const onPointerMove = (e) => {
      const { mx, my } = getPoint(e);
      mouse.current.x = mx;
      mouse.current.y = my;
      if (mouse.current.down && e.cancelable) e.preventDefault();
    };

    const onPointerUp = (e) => {
      if (e?.pointerId !== undefined) {
        try {
          canvas.releasePointerCapture(e.pointerId);
        } catch (err) {}
      }
      mouse.current.down = false;
      mouse.current.target = null;
      hasToggled.current = false;
      points.current.forEach((p) => {
        p.oldX = p.x;
        p.oldY = p.y;
      });
      if (e?.cancelable) e.preventDefault();
    };

    const handleDown = (e) => {
      onPointerDown(e);
    };
    const handleMove = (e) => {
      onPointerMove(e);
    };
    const handleUp = (e) => {
      onPointerUp(e);
    };

    canvas.addEventListener("dragstart", (e) => e.preventDefault());

    canvas.addEventListener("pointerdown", handleDown, { passive: false });
    canvas.addEventListener("mousedown", handleDown);
    canvas.addEventListener("touchstart", handleDown, { passive: false });

    window.addEventListener("pointermove", handleMove, { passive: false });
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: false });

    window.addEventListener("pointerup", handleUp, { passive: false });
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp, { passive: false });
    window.addEventListener("pointercancel", handleUp, { passive: false });
    window.addEventListener("touchcancel", handleUp, { passive: false });

    const render = () => {
      const lastPoint = points.current[points.current.length - 1];

      points.current.forEach((p) => {
        if (p.pinned) return;
        if (mouse.current.down && mouse.current.target === p) {
          p.oldX = p.x;
          p.oldY = p.y;
          p.x = clamp(mouse.current.x, 10, worldWidth - 10);
          p.y = clamp(mouse.current.y, 6, worldHeight - 10);
          
          if (p === lastPoint) {
            const triggerY = worldHeight * 0.52;
            if (p.y > triggerY) {
              if (!hasToggled.current) {
                setIsDark((prev) => {
                  const next = !prev;
                  isDarkRef.current = next;
                  document.documentElement.classList.toggle("dark", next);
                  hasToggled.current = true;
                  return next;
                });
              }
            } else {
              hasToggled.current = false;
            }
          }
        } else {
          const vx = (p.x - p.oldX) * friction;
          const vy = (p.y - p.oldY) * friction;
          p.oldX = p.x;
          p.oldY = p.y;
          p.x += vx;
          p.y += vy + gravity;
        }
      });

      if (!mouse.current.down) {
        const dx = lastPoint.x - worldWidth / 2;
        const dy = lastPoint.y - 0;
        const dist = Math.hypot(dx, dy);
        const restLen = segmentCount * segmentLen;
        if (dist > restLen) {
          const springForce = (dist - restLen) * 0.24;
          lastPoint.x -= (dx / dist) * springForce;
          lastPoint.y -= (dy / dist) * springForce;
        }
      }

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

      colorT += ((isDarkRef.current ? 1 : 0) - colorT) * 0.15;
      const t = Math.max(0, Math.min(1, colorT));

      const cordLight = hexToRgb("#d4d4d8");
      const cordDark = hexToRgb("#27272a");

      ctx.beginPath();
      ctx.moveTo(points.current[0].x, points.current[0].y);
      for (let i = 1; i < points.current.length - 1; i++) {
        const xc = (points.current[i].x + points.current[i + 1].x) / 2;
        const yc = (points.current[i].y + points.current[i + 1].y) / 2;
        ctx.quadraticCurveTo(points.current[i].x, points.current[i].y, xc, yc);
      }
      ctx.lineTo(lastPoint.x, lastPoint.y);
      ctx.strokeStyle = toRgb(mix(cordLight, cordDark, t));
      ctx.lineWidth = 1.2;
      ctx.stroke();

      const pen = points.current[points.current.length - 2];
      const angle = Math.atan2(lastPoint.x - pen.x, lastPoint.y - pen.y);
      const toggleY = Math.min(lastPoint.y, worldHeight - 50);
      const bodyW = 14;
      const bodyH = 34;

      ctx.save();
      ctx.translate(lastPoint.x, toggleY);
      ctx.rotate(angle);

      ctx.beginPath();
      ctx.roundRect(-bodyW / 2, 0, bodyW, bodyH, 7);
      ctx.fillStyle = isDarkRef.current ? "#ffffff" : "#09090b";
      ctx.fill();

      ctx.strokeStyle = isDarkRef.current ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const cy = bodyH / 2;
      const symbolColor = isDarkRef.current ? "#09090b" : "#ffffff";

      if (t < 1) {
        ctx.save();
        ctx.globalAlpha = 1 - t;
        ctx.strokeStyle = symbolColor;
        ctx.fillStyle = symbolColor;
        ctx.lineWidth = 1.0;

        ctx.beginPath();
        ctx.arc(0, cy, 3, 0, Math.PI * 2);
        ctx.fill();

        for (let i = 0; i < 8; i++) {
          const a = (i * Math.PI) / 4;
          ctx.beginPath();
          ctx.moveTo(Math.cos(a) * 4.5, cy + Math.sin(a) * 4.5);
          ctx.lineTo(Math.cos(a) * 6.5, cy + Math.sin(a) * 6.5);
          ctx.stroke();
        }
        ctx.restore();
      }

      if (t > 0) {
        ctx.save();
        ctx.globalAlpha = t;
        ctx.fillStyle = symbolColor;

        ctx.beginPath();
        ctx.arc(-0.8, cy, 4, -Math.PI / 1.8, Math.PI / 1.8, false);
        ctx.arc(1.4, cy, 3.7, Math.PI / 2, -Math.PI / 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();

      requestAnimationFrame(render);
    };

    render();
    return () => {
      canvas.removeEventListener("pointerdown", handleDown);
      canvas.removeEventListener("mousedown", handleDown);
      canvas.removeEventListener("touchstart", handleDown);
      
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);

      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
      window.removeEventListener("pointercancel", handleUp);
      window.removeEventListener("touchcancel", handleUp);
    };
  }, []);

  return (
    <div className="fixed top-0 right-6 z-[999] pointer-events-none w-[160px] h-[260px]">
      <canvas
        ref={canvasRef}
        className="pointer-events-auto w-full h-full block cursor-grab active:cursor-grabbing touch-none"
      />
    </div>
  );
};

export default ThemeToggle;
