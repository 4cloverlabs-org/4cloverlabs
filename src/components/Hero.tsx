"use client";

import React, { useEffect, useRef, useState } from "react";

// ─── Shape config ────────────────────────────────────────────────────────────
// Each shape is a grid of tiny square dots (cols × rows) or a single dot.
// This matches the reference screenshot exactly.
type ShapeKind = "dot-grid-3x3" | "dot-grid-4x4" | "dot-grid-5x5" | "dot-single";

interface FloatingShape {
  id: number;
  kind: ShapeKind;
  col: number;  // grid column (0-indexed, 0..COLS-1)
  row: number;  // grid row    (0-indexed, 0..ROWS-1)
  delay: number;    // animation-delay in seconds
  duration: number; // full pulse cycle in seconds
  dotSize: number;  // px per dot
  gap: number;      // px gap between dots
  peakOpacity: number;
}

const COLS = 20;
const ROWS = 10;

function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateShapes(): FloatingShape[] {
  const kinds: ShapeKind[] = [
    "dot-grid-3x3",
    "dot-grid-4x4",
    "dot-grid-5x5",
    "dot-single",
    "dot-grid-3x3",
    "dot-single",
    "dot-grid-4x4",
    "dot-single",
  ];

  // Grid cell positions [col, row] — each shape sits centered inside one grid square.
  // COLS=20, ROWS=10. Center of left edges and corners, middle area left clear for text.
  const cellPositions: [number, number][] = [
    // top row — dense
    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0],
    [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0],
    // row 1
    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
    // row 2
    [0, 2], [1, 2], [2, 2], [3, 2], [16, 2], [17, 2], [18, 2], [19, 2],
    // row 3
    [0, 3], [1, 3], [2, 3], [17, 3], [18, 3], [19, 3],
    // row 4
    [0, 4], [1, 4], [18, 4], [19, 4],
    // row 5
    [0, 5], [1, 5], [18, 5], [19, 5],
    // row 6
    [0, 6], [1, 6], [2, 6], [17, 6], [18, 6], [19, 6],
    // row 7
    [0, 7], [1, 7], [2, 7], [3, 7], [16, 7], [17, 7], [18, 7], [19, 7],
    // row 8
    [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8],
    // bottom row — dense
    [0, 9], [1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9],
    [10, 9], [11, 9], [12, 9], [13, 9], [14, 9], [15, 9], [16, 9], [17, 9], [18, 9], [19, 9],
  ];

  return cellPositions.map(([col, row], i) => {
    const seed = col * 97 + row * 43 + i * 7;
    return {
      id: i,
      kind: kinds[i % kinds.length],
      col,
      row,
      delay: seededRand(seed) * 6,
      duration: 3 + seededRand(seed + 9) * 4,         // faster: 3–7 s
      dotSize: 2 + Math.floor(seededRand(seed + 2) * 3),  // bigger: 2–5 px
      gap: 3 + Math.floor(seededRand(seed + 4) * 3),      // wider: 3–6 px
      peakOpacity: 0.35 + seededRand(seed + 6) * 0.30,   // more visible: 0.35–0.65
    };
  });
}

// ─── Dot-grid renderer ───────────────────────────────────────────────────────
function DotGrid({ cols, rows, dotSize, gap, color }: {
  cols: number; rows: number; dotSize: number; gap: number; color: string;
}) {
  const w = cols * dotSize + (cols - 1) * gap;
  const h = rows * dotSize + (rows - 1) * gap;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * (dotSize + gap)}
            y={r * (dotSize + gap)}
            width={dotSize}
            height={dotSize}
            fill={color}
            rx={0.5}
          />
        ))
      )}
    </svg>
  );
}

function Shape({ kind, dotSize, gap }: { kind: ShapeKind; dotSize: number; gap: number }) {
  const color = "#b0b8c4";
  switch (kind) {
    case "dot-grid-3x3": return <DotGrid cols={3} rows={3} dotSize={dotSize} gap={gap} color={color} />;
    case "dot-grid-4x4": return <DotGrid cols={4} rows={4} dotSize={dotSize} gap={gap} color={color} />;
    case "dot-grid-5x5": return <DotGrid cols={5} rows={5} dotSize={dotSize} gap={gap} color={color} />;
    case "dot-single": return <DotGrid cols={1} rows={1} dotSize={dotSize + 1} gap={0} color={color} />;
  }
}

export default function Hero() {
  const shapes = useRef(generateShapes()).current;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      backgroundColor: "#f0ece6",
      borderBottom: "1px dashed #d1d5db",
    }}>
      {/* Square Grid Background — masked out in the center text zone */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(to right, rgba(156,163,175,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(156,163,175,0.3) 1px, transparent 1px)",
        backgroundSize: `${100 / COLS}% ${100 / ROWS}%`,
        // Fade the grid out in the center where the text lives
        WebkitMaskImage: "radial-gradient(ellipse 46% 58% at 50% 48%, transparent 0%, transparent 55%, black 85%)",
        maskImage: "radial-gradient(ellipse 46% 58% at 50% 48%, transparent 0%, transparent 55%, black 85%)",
      }} />

      {/* Corner Labels */}
      {[
        { label: "200 OK", style: { top: 14, left: 14 } },
        { label: "SCRAPE", style: { top: 14, right: 14 } },
        { label: "JSON", style: { bottom: 90, left: 14 } },
        { label: "NO", style: { bottom: 90, right: 14 } },
      ].map(({ label, style }) => (
        <span key={label} aria-hidden="true" style={{
          position: "absolute",
          zIndex: 5,
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#9ca3af",
          border: "1px solid #d1d5db",
          padding: "2px 6px",
          background: "#f5f5f5",
          lineHeight: 1.4,
          ...style,
        }}>{label}</span>
      ))}

      {/* Pulsing Dot-Grid Shapes */}
      {mounted && (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
          {shapes.map((s) => (
            <div
              key={s.id}
              style={{
                position: "absolute",
                // Center of the grid cell
                left: `${(s.col + 0.5) / COLS * 100}%`,
                top: `${(s.row + 0.5) / ROWS * 100}%`,
                transform: "translate(-50%, -50%)",
                // Drive opacity via CSS custom properties so each shape has its own peak
                animationName: "heroPulse",
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                // Start invisible; the keyframe will pulse up to peakOpacity
                opacity: 0,
                // Pass the peak opacity as a CSS variable consumed by the keyframe
                // (we use a wrapper trick: scale the 0→1 keyframe output by peakOpacity)
                // We implement this by layering a second element inside
              }}
            >
              {/* Inner wrapper scales up slightly while outer fades — gives a breathing feel */}
              <div
                style={{
                  animation: `heroPulseInner ${s.duration}s ease-in-out ${s.delay}s infinite alternate`,
                  opacity: s.peakOpacity,
                }}
              >
                <Shape kind={s.kind} dotSize={s.dotSize} gap={s.gap} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 4rem",
        textAlign: "center",
        maxWidth: "56rem",
        margin: "0 auto",
        width: "100%",
      }}>


        {/* Brand Name */}
        <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1.0, marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>
          <span style={{
            fontFamily: "var(--font-geist-sans, 'Geist', sans-serif)",
            fontSize: "clamp(4.5rem, 12vw, 9rem)",
            fontWeight: 800,
            color: "#111111",
            display: "block",
          }}>4CloverLabs</span>

        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#6b7280", maxWidth: "38rem", marginBottom: "3rem", fontWeight: 500, lineHeight: 1.7 }}>
          Strategy, automations, custom agents, and the support to keep them running — all from one team.
        </p>

      </div>

      {/* Logo Bar */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", borderTop: "1px dashed #d1d5db", height: 80, display: "flex", alignItems: "center", backdropFilter: "blur(4px)" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRight: i !== 5 ? "1px dashed #d1d5db" : undefined }}>
            <svg style={{ height: "1.5rem", color: "#9ca3af", opacity: 0.6 }} viewBox="0 0 120 30" fill="currentColor">
              <path d="M20 15a5 5 0 100-10 5 5 0 000 10zm0 4a9 9 0 110-18 9 9 0 010 18z" />
              <text x="35" y="20" fontSize="16" fontWeight="bold" fontFamily="sans-serif">logoipsum</text>
            </svg>
          </div>
        ))}
      </div>

      <style>{`
        /* Outer wrapper fades the whole element in/out */
        @keyframes heroPulse {
          0%   { opacity: 0; }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; }
        }
        /* Inner wrapper adds a subtle scale breath while visible */
        @keyframes heroPulseInner {
          0%   { transform: scale(0.88); }
          40%  { transform: scale(1); }
          60%  { transform: scale(1); }
          100% { transform: scale(0.92); }
        }
        .hero-btn-primary:hover { background: #000 !important; }
        .hero-btn-secondary:hover { background: rgba(255,255,255,0.6) !important; border-color: #6b7280 !important; }
      `}</style>
    </section>
  );
}
