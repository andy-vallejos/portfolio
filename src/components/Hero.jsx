import { useEffect, useRef } from "react";

const CYAN = "0,184,230";
const LIGHT = "245,247,250";
const SLATE = "135,146,166";
const GAP = 14;

function QuarkField({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const quarks = [
      { color: CYAN, phase: 0, trail: [], x: 0, y: 0 },
      { color: LIGHT, phase: (Math.PI * 2) / 3, trail: [], x: 0, y: 0 },
      { color: SLATE, phase: (Math.PI * 4) / 3, trail: [], x: 0, y: 0 },
    ];
    let sparks = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion) frame(2500);
    };

    const frame = (now) => {
      const t = now / 1000;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.5;
      const orbit = R * 0.26;

      ctx.clearRect(0, 0, w, h);

      // Posición de cada quark: órbita elíptica que gira y respira
      quarks.forEach((q) => {
        const a = t * 0.9 + q.phase;
        const r = orbit * (1 + 0.3 * Math.sin(t * 1.3 + q.phase * 1.5));
        const ex = Math.cos(a) * r;
        const ey = Math.sin(a) * r * 0.62;
        const tilt = t * 0.25;
        q.x = cx + ex * Math.cos(tilt) - ey * Math.sin(tilt);
        q.y = cy + ex * Math.sin(tilt) + ey * Math.cos(tilt);
        q.trail.push({ x: q.x, y: q.y });
        if (q.trail.length > 40) q.trail.shift();
      });

      // Partículas que se desprenden
      if (!reduceMotion && sparks.length < 50 && Math.random() < 0.12) {
        const q = quarks[Math.floor(Math.random() * 3)];
        const ang =
          Math.atan2(q.y - cy, q.x - cx) + (Math.random() - 0.5) * 1.2;
        const speed = 0.25 + Math.random() * 0.5;
        sparks.push({
          x: q.x,
          y: q.y,
          vx: Math.cos(ang) * speed,
          vy: Math.sin(ang) * speed,
          life: 1,
          color: q.color,
        });
      }

      // Malla de puntos con caída radial
      const x0 = cx - Math.floor(cx / GAP) * GAP;
      const y0 = cy - Math.floor(cy / GAP) * GAP;
      for (let x = x0; x < w; x += GAP) {
        for (let y = y0; y < h; y += GAP) {
          const dx = x - cx;
          const dy = y - cy;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > R) continue;

          let energy = 0;
          for (let i = 0; i < 3; i++) {
            const qx = x - quarks[i].x;
            const qy = y - quarks[i].y;
            energy += Math.exp(-(qx * qx + qy * qy) / (2 * 42 * 42));
          }
          const mx = x - mouse.x;
          const my = y - mouse.y;
          energy += Math.exp(-(mx * mx + my * my) / (2 * 60 * 60)) * 0.8;

          const base = Math.pow(1 - d / R, 1.6) * 0.45;
          const alpha = Math.min(1, base + energy * 0.85);
          if (alpha < 0.02) continue;

          const radius = 0.9 + Math.min(energy, 1.2) * 2.2;
          ctx.fillStyle =
            energy > 0.12
              ? `rgba(${CYAN},${alpha})`
              : `rgba(170,185,195,${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.14)";
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.62, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = `rgba(${CYAN},0.8)`;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.62, t * 0.4, t * 0.4 + 0.9);
      ctx.stroke();

      // Enlaces entre quarks (gluones)
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${CYAN},0.28)`;
      ctx.beginPath();
      ctx.moveTo(quarks[0].x, quarks[0].y);
      ctx.lineTo(quarks[1].x, quarks[1].y);
      ctx.lineTo(quarks[2].x, quarks[2].y);
      ctx.closePath();
      ctx.stroke();

      // Estelas y cuerpos
      quarks.forEach((q) => {
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        for (let i = 1; i < q.trail.length; i++) {
          ctx.strokeStyle = `rgba(${q.color},${(i / q.trail.length) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(q.trail[i - 1].x, q.trail[i - 1].y);
          ctx.lineTo(q.trail[i].x, q.trail[i].y);
          ctx.stroke();
        }
        ctx.fillStyle = `rgba(${q.color},0.14)`;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgb(${q.color})`;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 4.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Partículas desprendidas
      sparks = sparks.filter((s) => s.life > 0);
      sparks.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.008;
        ctx.fillStyle = `rgba(${s.color},${Math.max(s.life, 0) * 0.7})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const loop = (now) => {
      frame(now);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduceMotion || !visible || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    });
    io.observe(canvas);

    resize();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export function Hero({
  kicker = "Desarrollo",
  title = "de software a medida para tu negocio",
  description = "Aplicaciones web, sistemas y automatización. Construimos desde la partícula más pequeña para que todo escale.",
}) {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#0a0a0a] px-6 pb-16 pt-28 text-white md:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <h1 className="text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[1.15] tracking-tight">
            <span className="block text-white/25">{kicker}</span>
            <span className="block">{title}</span>
          </h1>

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/60">
            {description}
          </p>
        </div>

        <div className="relative h-85 w-full sm:h-110 lg:h-145">
          <QuarkField className="pointer-events-none absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}
