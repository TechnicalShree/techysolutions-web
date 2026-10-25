"use client";

import { useEffect, useRef } from "react";
import { heroFlow } from "@/lib/content";

// Geometry, palette and timing follow "TechySolutions explainer.html" (scenes 1–2), drawn on its 1280×720 stage.
const W = 1280;
const H = 720;
const LOOP = 11.5; // seconds
const C = {
  ink: "#05193A", muted: "#45556E", line: "#D5DEEA", lineStrong: "#7A8AA3", bar: "#E8EDF4", barD: "#D5DEEA",
  blue: "#006DFE", dot: "#B9C7DA", bg: "#F3F7FB", navy: "#0A1F44", warnBg: "#FFF1D6", warn: "#8A5100",
};
// scene 1 screens: laptop, browser, phone (x, y, w, h, rotation°)
const LAPTOP = { x: 70, y: 236, w: 430, h: 284, rot: -3 };
const BROWSER = { x: 592, y: 318, w: 384, h: 256, rot: 2 };
const MOBILE = { x: 1060, y: 222, w: 180, h: 372, rot: 4 };
// scenes 2–3 cards
const CARD = { x: 440, y: 136, w: 400, h: 232 };
const PORTAL = { x: 200, y: 456, w: 380, h: 224 };
const PHONE = { x: 820, y: 442, w: 160, h: 236 };
// screen positions (s) and card positions (d) used for the morph between scenes
const MORPH = [
  { s: [285, 378], d: [640, 252] },
  { s: [784, 446], d: [390, 568] },
  { s: [1150, 408], d: [900, 592] },
];
const LINES_WHOLE = ["M498 402 C 530 402, 556 452, 590 452", "M976 430 C 1004 430, 1030 380, 1058 380"];
const LINES_BRK_L = ["M498 402 C 520 402, 528 420, 538 428", "M976 430 C 996 430, 1004 414, 1012 404"];
const LINES_BRK_R = ["M552 440 C 562 448, 572 452, 590 452", "M1026 390 C 1034 382, 1042 380, 1058 380"];
const LINES_BRK_M = ["M540 418 L546 426", "M548 424 L556 420", "M1014 392 L1020 400", "M1018 394 L1026 388"];
const PATH_L = "M560 375 V392 Q560 412 540 412 H410 Q390 412 390 432 V443";
const PATH_R = "M720 375 V384 Q720 404 740 404 H880 Q900 404 900 424 V427";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2);
const lin = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
const seg = (t: number, a: number, b: number) => ease(lin(t, a, b));

/** Looping explainer: three disconnected screens, then one ERPNext order connected to the portal and driver app. */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sans = "Archivo, 'Helvetica Neue', Arial, sans-serif";

    // detached SVG paths give us each connector's length for the draw-in
    const svgPath = (d: string) => {
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", d);
      return { p2d: new Path2D(d), len: p.getTotalLength() };
    };
    const traces = [
      { ...svgPath(PATH_L), start: [560, 368], end: [390, 450] },
      { ...svgPath(PATH_R), start: [720, 368], end: [900, 434] },
    ];
    const p2d = (ds: string[]) => ds.map((d) => new Path2D(d));
    const whole = p2d(LINES_WHOLE), brkL = p2d(LINES_BRK_L), brkR = p2d(LINES_BRK_R), brkM = p2d(LINES_BRK_M);

    const rr = (x: number, y: number, w: number, h: number, r: number | number[]) => {
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, r);
    };
    const fill = (color: string) => { ctx.fillStyle = color; ctx.fill(); };
    const stroke = (color: string, lw = 1) => { ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.stroke(); };
    const shadow = (on: boolean, big = true) => {
      ctx.shadowColor = on ? `rgba(5,25,58,${big ? 0.16 : 0.08})` : "transparent";
      ctx.shadowBlur = on ? (big ? 40 : 14) : 0;
      ctx.shadowOffsetY = on ? (big ? 16 : 4) : 0;
    };
    const text = (s: string, x: number, y: number, font: string, color: string, align: CanvasTextAlign = "left") => {
      ctx.font = font;
      ctx.fillStyle = color;
      ctx.textAlign = align;
      ctx.textBaseline = "middle";
      ctx.fillText(s, x, y);
    };
    const bar = (x: number, y: number, w: number, h: number, color = C.bar) => { rr(x, y, w, h, h / 2); fill(color); };
    const circle = (x: number, y: number, r: number) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); };
    // run fn with alpha multiplied and an optional transform about (cx, cy); restores afterwards
    const layer = (alpha: number, fn: () => void, cx = 0, cy = 0, rot = 0, sc = 1, dx = 0, dy = 0) => {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha *= alpha;
      ctx.translate(cx + dx, cy + dy);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.scale(sc, sc);
      ctx.translate(-cx, -cy);
      fn();
      ctx.restore();
    };
    // chip anchored left or right at x; vertically centred on cy
    const chip = (s: string, x: number, cy: number, fg: string, bg: string, alpha = 1, align: "left" | "right" = "left") =>
      layer(alpha, () => {
        ctx.font = `600 13px ${sans}`;
        const w = ctx.measureText(s).width + 24;
        const left = align === "left" ? x : x - w;
        rr(left, cy - 13.5, w, 27, 13.5);
        fill(bg);
        text(s, left + 12, cy + 0.5, `600 13px ${sans}`, fg);
      });
    const headline = (s: string, a: number, center = false) =>
      layer(a, () => text(s, center ? W / 2 : 72, 86 + 14 * (1 - a), `800 44px ${sans}`, C.ink, center ? "center" : "left"));

    // ---------- scene 1: three disconnected screens ----------
    const drawLaptop = () => {
      const { x, y } = LAPTOP;
      shadow(true);
      rr(x, y, 430, 270, [16, 16, 6, 6]);
      fill(C.navy);
      shadow(false);
      rr(x - 22, y + 270, 474, 14, [0, 0, 14, 14]);
      fill(C.line);
      rr(x + 10, y + 10, 410, 250, 6);
      fill("#fff");
      ctx.save();
      ctx.clip();
      ctx.fillStyle = C.bg;
      ctx.fillRect(x + 10, y + 10, 64, 250);
      ctx.fillStyle = C.line;
      ctx.fillRect(x + 73, y + 10, 1, 250);
      [0, 1, 2, 3].forEach((i) => bar(x + 22, y + 24 + i * 18, 40, 8, i === 2 ? C.dot : C.barD));
      const mx = x + 94, mw = 306;
      bar(mx, y + 32, 140, 12, C.muted);
      chip(heroFlow.problem.office, mx + mw, y + 38, C.warn, C.warnBg, 1, "right");
      const cw = (mw - 12) / 2;
      [0, 1, 2, 3].forEach((i) => {
        const gx = mx + (i % 2) * (cw + 12), gy = y + 62 + Math.floor(i / 2) * 50;
        bar(gx, gy, cw * [0.6, 0.5, 0.4, 0.65][i], 6, C.barD);
        rr(gx, gy + 12, cw, 26, 6);
        stroke(C.line);
      });
      ctx.fillStyle = C.line;
      ctx.fillRect(mx, y + 176, mw, 1);
      bar(mx, y + 191, mw * 0.9, 8);
      bar(mx, y + 207, mw * 0.75, 8);
      ctx.restore();
    };
    const drawBrowser = () => {
      const { x, y, w, h } = BROWSER;
      shadow(true);
      rr(x, y, w, h, 12);
      fill("#fff");
      shadow(false);
      ctx.save();
      ctx.clip();
      ctx.fillStyle = C.bg;
      ctx.fillRect(x, y, w, 36);
      ctx.fillStyle = C.line;
      ctx.fillRect(x, y + 36, w, 1);
      [0, 1, 2].forEach((i) => { circle(x + 18.5 + i * 15, y + 18, 4.5); fill(C.dot); });
      rr(x + 75, y + 10, w - 89, 16, 8);
      fill("#fff");
      stroke(C.line);
      bar(x + 20, y + 56, 120, 12, C.muted);
      rr(x + 20, y + 82, w - 40, 100, 12);
      stroke(C.line);
      bar(x + 34, y + 105, 110, 8, C.barD);
      chip(heroFlow.problem.portal, x + w - 34, y + 109, C.warn, C.warnBg, 1, "right");
      bar(x + 34, y + 134, (w - 68) * 0.7, 8);
      bar(x + 34, y + 152, (w - 68) * 0.5, 8);
      bar(x + 20, y + 196, (w - 40) * 0.8, 8);
      ctx.restore();
      rr(x, y, w, h, 12);
      stroke(C.line);
    };
    const drawMobile = () => {
      const { x, y, w, h } = MOBILE;
      shadow(true);
      rr(x, y, w, h, 30);
      fill(C.navy);
      shadow(false);
      rr(x + 8, y + 8, w - 16, h - 16, 23);
      fill("#fff");
      const ix = x + 22, iw = w - 44;
      bar(ix, y + 34, 80, 10, C.muted);
      rr(ix, y + 56, iw, 99, 12);
      stroke(C.line);
      bar(ix + 12, y + 68, (iw - 24) * 0.8, 8, C.barD);
      bar(ix + 12, y + 86, (iw - 24) * 0.55, 8);
      chip(heroFlow.problem.field, ix + 12, y + 127.5, C.muted, C.bar);
      [167, 233].forEach((cy, i) => {
        rr(ix, y + cy, iw, 54, 12);
        stroke(C.line);
        bar(ix + 12, y + cy + 12, (iw - 24) * [0.7, 0.75][i], 8, C.barD);
        bar(ix + 12, y + cy + 30, (iw - 24) * [0.45, 0.4][i], 8);
      });
    };

    const scene1 = (t: number) => {
      const exitFade = 1 - lin(t, 5.0, 5.55);
      if (exitFade <= 0) return;
      const q = seg(t, 5.0, 6.0);
      const zoom = 1 + 0.05 * ease(lin(t, 0, 5));
      ctx.save();
      ctx.translate(640 - 26, 400);
      ctx.scale(zoom, zoom);
      ctx.translate(-640, -400);

      // dashed links: whole → flicker → broken and drifting apart
      let isWhole = 0, broken = 0;
      if (t < 3.0) isWhole = lin(t, 1.3, 2.0);
      else if (t < 3.6) { const on = Math.floor(t * 16) % 3 !== 0; isWhole = on ? 1 : 0; broken = on ? 0 : 1; }
      else broken = 1;
      const b = seg(t, 3.6, 4.4);
      ctx.lineCap = "round";
      ctx.setLineDash([6, 9]);
      ctx.strokeStyle = C.lineStrong;
      ctx.lineWidth = 2.5;
      layer(isWhole * exitFade, () => whole.forEach((p) => ctx.stroke(p)));
      layer(broken * exitFade, () => brkL.forEach((p) => ctx.stroke(p)), 0, 0, 0, 1, -5 * b, -3 * b);
      layer(broken * exitFade, () => brkR.forEach((p) => ctx.stroke(p)), 0, 0, 0, 1, 5 * b, 3 * b);
      ctx.setLineDash([]);
      ctx.lineWidth = 2;
      layer(broken * exitFade * b * (0.55 + 0.45 * Math.abs(Math.sin(t * 9))), () => brkM.forEach((p) => ctx.stroke(p)));

      [[LAPTOP, drawLaptop], [BROWSER, drawBrowser], [MOBILE, drawMobile]].forEach(([box, fn], i) => {
        const s = box as typeof LAPTOP, m = MORPH[i];
        const p = seg(t, 0.2 + 0.25 * i, 1.3 + 0.25 * i);
        const bob = Math.sin(t * 1.1 + i * 1.7) * 4 * (1 - q);
        const dx = (m.d[0] - m.s[0]) * q * 0.6, dy = (m.d[1] - m.s[1]) * q * 0.6 + bob + 24 * (1 - p);
        layer(p * exitFade, fn as () => void, s.x + s.w / 2, s.y + s.h / 2, s.rot, 1 - 0.08 * q, dx, dy);
      });
      ctx.restore();
      headline(heroFlow.headlines[0], seg(t, 1.6, 2.4) * (1 - seg(t, 4.5, 5.0)));
    };

    // ---------- scene 2: ERPNext at the center ----------
    const scene2 = (t: number) => {
      const morphQ = seg(t, 5.0, 6.4), morphA = lin(t, 5.15, 5.7);
      const card = (i: number, box: { x: number; y: number; w: number; h: number }, fn: () => void) => {
        const m = MORPH[i];
        layer(morphA, fn, box.x + box.w / 2, box.y + box.h / 2, 0, 0.9 + 0.1 * morphQ,
          (m.s[0] - m.d[0]) * (1 - morphQ), (m.s[1] - m.d[1]) * (1 - morphQ));
      };

      // order card
      card(0, CARD, () => {
        shadow(true);
        rr(CARD.x, CARD.y, CARD.w, CARD.h, 20);
        fill("#fff");
        shadow(false);
        stroke(C.line);
        const cx = CARD.x + 24;
        text(heroFlow.order.label, cx, CARD.y + 38, `400 13px ${sans}`, C.muted);
        chip(heroFlow.pending, CARD.x + CARD.w - 24, CARD.y + 38, C.warn, C.warnBg, 1, "right");
        text(heroFlow.order.id, cx, CARD.y + 68, "500 14px 'JetBrains Mono', ui-monospace, Menlo, monospace", C.ink);
        text(heroFlow.order.customer, cx, CARD.y + 98, `700 21px ${sans}`, C.ink);
        text(heroFlow.order.amount, cx, CARD.y + CARD.h - 46, `700 30px ${sans}`, C.ink);
        ctx.font = `600 15px ${sans}`;
        const bw = ctx.measureText(heroFlow.button).width + 40, bh = 44;
        const bx = CARD.x + CARD.w - 24 - bw, by = CARD.y + CARD.h - 24 - bh;
        rr(bx, by, bw, bh, bh / 2);
        fill(C.blue);
        text(heroFlow.button, bx + bw / 2, by + bh / 2 + 0.5, `600 15px ${sans}`, "#fff", "center");
      });

      // connectors draw in, then their end nodes pop
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const nodeStart = seg(t, 6.45, 6.75);
      traces.forEach((p, i) => {
        const draw = seg(t, 6.6 + 0.15 * i, 7.8 + 0.15 * i);
        const nodeEnd = seg(t, 7.75 + 0.15 * i, 8.05 + 0.15 * i);
        if (draw > 0) {
          ctx.setLineDash([p.len * draw, p.len]);
          ctx.strokeStyle = C.lineStrong;
          ctx.lineWidth = 3;
          ctx.stroke(p.p2d);
          ctx.setLineDash([]);
        }
        for (const [[x, y], a] of [[p.start, nodeStart], [p.end, nodeEnd]] as const) {
          layer(a, () => {
            circle(x, y, 5.5 * (0.5 + 0.5 * a));
            fill("#fff");
            stroke(C.lineStrong, 3);
          });
        }
      });

      // portal
      card(1, PORTAL, () => {
        shadow(true, false);
        rr(PORTAL.x, PORTAL.y, PORTAL.w, PORTAL.h, 12);
        fill("#fff");
        shadow(false);
        ctx.save();
        ctx.clip();
        ctx.fillStyle = C.bg;
        ctx.fillRect(PORTAL.x, PORTAL.y, PORTAL.w, 40);
        ctx.fillStyle = C.line;
        ctx.fillRect(PORTAL.x, PORTAL.y + 40, PORTAL.w, 1);
        [0, 1, 2].forEach((i) => { circle(PORTAL.x + 18.5 + i * 15, PORTAL.y + 20, 4.5); fill(C.dot); });
        text(heroFlow.portal.title, PORTAL.x + 72, PORTAL.y + 20.5, `600 15px ${sans}`, C.ink);
        const ix = PORTAL.x + 18, iy = PORTAL.y + 58;
        rr(ix, iy, PORTAL.w - 36, 106, 12);
        stroke(C.line);
        bar(ix + 14, iy + 14, (PORTAL.w - 64) * 0.6, 8, C.barD);
        bar(ix + 14, iy + 32, (PORTAL.w - 64) * 0.4, 8);
        bar(ix + 14, iy + 52, 190, 27);
        bar(ix, iy + 120, (PORTAL.w - 36) * 0.75, 8);
        ctx.restore();
        rr(PORTAL.x, PORTAL.y, PORTAL.w, PORTAL.h, 12);
        stroke(C.line);
      });

      // phone
      card(2, PHONE, () => {
        shadow(true, false);
        rr(PHONE.x, PHONE.y, PHONE.w, PHONE.h, 28);
        fill(C.navy);
        shadow(false);
        rr(PHONE.x + 7, PHONE.y + 7, PHONE.w - 14, PHONE.h - 14, 22);
        fill("#fff");
        const px = PHONE.x + 19, pw = PHONE.w - 38;
        text(heroFlow.phone.title, px, PHONE.y + 40, `700 15px ${sans}`, C.ink);
        rr(px, PHONE.y + 60, pw, 92, 12);
        stroke(C.line);
        bar(px + 10, PHONE.y + 71, (pw - 20) * 0.8, 7, C.barD);
        bar(px + 10, PHONE.y + 86, (pw - 20) * 0.5, 7);
        bar(px + 10, PHONE.y + 101, 100, 27);
        rr(px, PHONE.y + 162, pw, 52, 12);
        stroke(C.line);
        bar(px + 10, PHONE.y + 174, (pw - 20) * 0.7, 7, C.barD);
        bar(px + 10, PHONE.y + 189, (pw - 20) * 0.4, 7);
      });

      headline(heroFlow.headlines[1], seg(t, 7.0, 7.8), true);
    };

    const draw = (t: number) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.globalAlpha = 1 - seg(t, LOOP - 0.9, LOOP - 0.3);
      scene1(t);
      if (t >= 4.9) scene2(t);
    };

    let scale = 1;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const cssScale = canvas.clientWidth / W;
      canvas.width = Math.round(W * cssScale * dpr);
      canvas.height = Math.round(H * cssScale * dpr);
      scale = cssScale * dpr;
      if (reduced) draw(9); // static connected frame
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    if (reduced) return () => ro.disconnect();
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      draw(((now - start) / 1000) % LOOP);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Three teams see three versions of the same order; ERPNext at the center connects the office, the customer portal and the driver app."
      className="w-full aspect-video"
    />
  );
}
