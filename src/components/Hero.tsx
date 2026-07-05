"use client";

import React, { useEffect, useRef, useState } from "react";

type ShapeKind = "dot-grid-3x3" | "dot-grid-4x4" | "dot-grid-5x5" | "dot-single";

interface FloatingShape {
  id: number;
  kind: ShapeKind;
  col: number;
  row: number;
  delay: number;
  duration: number;
  dotSize: number;
  gap: number;
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
    "dot-grid-3x3", "dot-grid-4x4", "dot-grid-5x5", "dot-single",
    "dot-grid-3x3", "dot-single", "dot-grid-4x4", "dot-single",
  ];
  const cellPositions: [number, number][] = [
    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0],
    [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0],
    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
    [0, 2], [1, 2], [2, 2], [3, 2], [16, 2], [17, 2], [18, 2], [19, 2],
    [0, 3], [1, 3], [2, 3], [17, 3], [18, 3], [19, 3],
    [0, 4], [1, 4], [18, 4], [19, 4],
    [0, 5], [1, 5], [18, 5], [19, 5],
    [0, 6], [1, 6], [2, 6], [17, 6], [18, 6], [19, 6],
    [0, 7], [1, 7], [2, 7], [3, 7], [16, 7], [17, 7], [18, 7], [19, 7],
    [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8],
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
      delay: seededRand(seed) * 2,
      duration: 1 + seededRand(seed + 9) * 2,
      dotSize: 3 + Math.floor(seededRand(seed + 2) * 2),
      gap: 4 + Math.floor(seededRand(seed + 4) * 2),
      peakOpacity: 0.6 + seededRand(seed + 6) * 0.4,
    };
  });
}

function DotGrid({ cols, rows, dotSize, gap, color }: { cols: number; rows: number; dotSize: number; gap: number; color: string; }) {
  const w = cols * dotSize + (cols - 1) * gap;
  const h = rows * dotSize + (rows - 1) * gap;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <rect key={`${r}-${c}`} x={c * (dotSize + gap)} y={r * (dotSize + gap)} width={dotSize} height={dotSize} fill={color} />
        ))
      )}
    </svg>
  );
}

function Shape({ kind, dotSize, gap }: { kind: ShapeKind; dotSize: number; gap: number }) {
  const color = "var(--foreground)";
  switch (kind) {
    case "dot-grid-3x3": return <DotGrid cols={3} rows={3} dotSize={dotSize} gap={gap} color={color} />;
    case "dot-grid-4x4": return <DotGrid cols={4} rows={4} dotSize={dotSize} gap={gap} color={color} />;
    case "dot-grid-5x5": return <DotGrid cols={5} rows={5} dotSize={dotSize} gap={gap} color={color} />;
    case "dot-single": return <DotGrid cols={1} rows={1} dotSize={dotSize + 2} gap={0} color={color} />;
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
      backgroundColor: "var(--background-secondary)",
      borderBottom: "3px solid var(--foreground)",
    }}>
      {/* Blueprint Grid Background */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: "linear-gradient(to right, rgba(10,10,10,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.1) 1px, transparent 1px)",
        backgroundSize: `${100 / COLS}% ${100 / ROWS}%`,
        WebkitMaskImage: "radial-gradient(ellipse 50% 60% at 50% 50%, transparent 0%, transparent 40%, black 80%)",
        maskImage: "radial-gradient(ellipse 50% 60% at 50% 50%, transparent 0%, transparent 40%, black 80%)",
      }} />

      {/* Corner Labels */}
      {[
        { label: "SYS_READY", style: { top: 20, left: 20 } },
        { label: "INDEX_01", style: { top: 20, right: 20 } },
        { label: "V. 2.0.4", style: { bottom: 100, left: 20 } },
        { label: "SEC_ACTIVE", style: { bottom: 100, right: 20 } },
      ].map(({ label, style }) => (
        <span key={label} className="brutal-card" aria-hidden="true" style={{
          position: "absolute",
          zIndex: 5,
          fontSize: 12,
          fontWeight: 800,
          fontFamily: "monospace",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--foreground)",
          padding: "4px 8px",
          background: "var(--color-primary)",
          ...style,
        }}>{label}</span>
      ))}

      {/* Mechanical Dot-Grid Shapes */}
      {mounted && (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
          {shapes.map((s) => (
            <div
              key={s.id}
              style={{
                position: "absolute",
                left: `${(s.col + 0.5) / COLS * 100}%`,
                top: `${(s.row + 0.5) / ROWS * 100}%`,
                transform: "translate(-50%, -50%)",
                animationName: "heroBlink",
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
                animationTimingFunction: "steps(2, end)",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                opacity: 0,
              }}
            >
              <div style={{ opacity: s.peakOpacity }}>
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
        padding: "6rem 2rem 4rem",
        textAlign: "center",
        maxWidth: "64rem",
        margin: "0 auto",
        width: "100%",
      }}>
        {/* Brand Name */}
        <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 0.9, marginBottom: "2rem", letterSpacing: "-0.04em", textTransform: "uppercase" }}>
          <span style={{
            fontFamily: "var(--font-geist-sans, 'Geist', sans-serif)",
            fontSize: "clamp(4rem, 10vw, 8rem)",
            fontWeight: 900,
            color: "var(--foreground)",
            display: "block",
            textShadow: "6px 6px 0px rgba(0,0,0,0.1)",
          }}>4CloverLabs</span>
        </h1>

        {/* Subtitle */}
        <p style={{ 
          fontSize: "clamp(1.2rem, 2vw, 1.5rem)", 
          color: "var(--foreground)", 
          maxWidth: "42rem", 
          marginBottom: "3rem", 
          fontWeight: 700, 
          lineHeight: 1.5,
          fontFamily: "monospace",
          backgroundColor: "var(--color-primary)",
          padding: "1rem 2rem",
          border: "3px solid var(--foreground)",
          boxShadow: "6px 6px 0px var(--foreground)",
        }}>
          Strategy, automations, custom agents, and the support to keep them running — all from one team.
        </p>
      </div>

      {/* Logo Bar */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", borderTop: "3px solid var(--foreground)", height: 80, display: "flex", alignItems: "center", background: "var(--background)" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRight: i !== 5 ? "3px solid var(--foreground)" : undefined }}>
            <svg style={{ height: "1.5rem", color: "var(--foreground)", opacity: 1 }} viewBox="0 0 120 30" fill="currentColor">
              <path d="M20 15a5 5 0 100-10 5 5 0 000 10zm0 4a9 9 0 110-18 9 9 0 010 18z" />
              <text x="35" y="20" fontSize="16" fontWeight="bold" fontFamily="monospace" style={{ textTransform: "uppercase" }}>partner</text>
            </svg>
          </div>
        ))}
      </div>

      <style>{`
        /* Mechanical blinking instead of soft pulsing */
        @keyframes heroBlink {
          0%   { opacity: 0; }
          40%  { opacity: 0; }
          41%  { opacity: 1; }
          80%  { opacity: 1; }
          81%  { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
