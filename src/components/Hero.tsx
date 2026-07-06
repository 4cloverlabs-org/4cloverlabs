"use client";

import React, { useEffect, useState } from "react";

function DotGrid({ cols, rows, dotSize = 4, gap = 6, color = "#FF9E66" }: { cols: number; rows: number; dotSize?: number; gap?: number; color?: string; }) {
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

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const partnerColors = [
    "#FF9E66", // Orange
    "#FF7B7B", // Red/Pink
    "#FFD075", // Yellow
    "#FF85A2", // Pink
    "#FF9E66", // Orange
    "#FFD075"  // Yellow
  ];

  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "82vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      backgroundColor: "#F5F2E9",
      borderBottom: "3.5px solid var(--foreground)",
    }}>
      {/* Mesh Gradient Blurry Blobs */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden"
      }}>
        {/* Top Right Orange Blob */}
        <div style={{
          position: "absolute",
          top: "-10%",
          right: "10%",
          width: "50%",
          height: "60%",
          background: "radial-gradient(circle, rgba(255,158,102,0.45) 0%, rgba(255,208,117,0.2) 50%, rgba(255,255,255,0) 100%)",
          filter: "blur(80px)",
        }} />
        {/* Left Pinkish Orange Blob */}
        <div style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "45%",
          height: "55%",
          background: "radial-gradient(circle, rgba(255,123,123,0.3) 0%, rgba(255,158,102,0.25) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(90px)",
        }} />
      </div>

      {/* Blueprint Grid Background */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        backgroundImage: "linear-gradient(to right, rgba(10,10,10,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.06) 1px, transparent 1px)",
        backgroundSize: "4.5% 9%",
      }} />

      {/* Corner Labels with Dots */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none" }}>
        {/* Top-Left: SYS_READY */}
        <div style={{ position: "absolute", top: 24, left: 24, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 900,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
            color: "var(--foreground)",
            padding: "5px 10px",
            background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
            border: "3px solid var(--foreground)",
            boxShadow: "3px 3px 0px var(--foreground)",
          }}>SYS_READY</span>
          <DotGrid cols={3} rows={4} color="#FF9E66" />
        </div>

        {/* Top-Right: INDEX_01 */}
        <div style={{ position: "absolute", top: 24, right: 24, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 900,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
            color: "var(--foreground)",
            padding: "5px 10px",
            background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
            border: "3px solid var(--foreground)",
            boxShadow: "3px 3px 0px var(--foreground)",
          }}>INDEX_01</span>
        </div>

        {/* Bottom-Left: V. 2.0.4 */}
        <div style={{ position: "absolute", bottom: 104, left: 24, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 900,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
            color: "var(--foreground)",
            padding: "5px 10px",
            background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
            border: "3px solid var(--foreground)",
            boxShadow: "3px 3px 0px var(--foreground)",
          }}>V. 2.0.4</span>
          <DotGrid cols={4} rows={3} color="#FF9E66" />
        </div>

        {/* Bottom-Right: SEC_ACTIVE */}
        <div style={{ position: "absolute", bottom: 104, right: 24, display: "flex", alignItems: "center", gap: 12 }}>
          <DotGrid cols={3} rows={4} color="#FF9E66" />
          <span style={{
            fontSize: 11,
            fontWeight: 900,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
            color: "var(--foreground)",
            padding: "5px 10px",
            background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
            border: "3px solid var(--foreground)",
            boxShadow: "3px 3px 0px var(--foreground)",
          }}>SEC_ACTIVE</span>
        </div>

        {/* Extra Decorative Dot Grids and Squares */}
        <div style={{ position: "absolute", top: "15%", left: "38%" }}><DotGrid cols={4} rows={4} color="#FF9E66" /></div>
        <div style={{ position: "absolute", top: "25%", right: "42%" }}><DotGrid cols={4} rows={4} color="#FF9E66" /></div>
        <div style={{ position: "absolute", top: "30%", left: "10%" }}><DotGrid cols={3} rows={3} color="#FF9E66" /></div>
        <div style={{ position: "absolute", bottom: "35%", right: "8%" }}><DotGrid cols={3} rows={4} color="#FF9E66" /></div>
        
        {/* Tiny floating black and orange squares */}
        <div style={{ position: "absolute", top: "18%", left: "18%", width: 6, height: 6, backgroundColor: "#000" }} />
        <div style={{ position: "absolute", top: "50%", left: "5%", width: 5, height: 5, backgroundColor: "#FF9E66" }} />
        <div style={{ position: "absolute", top: "72%", right: "20%", width: 6, height: 6, backgroundColor: "#000" }} />
        <div style={{ position: "absolute", bottom: "25%", left: "16%", width: 6, height: 6, backgroundColor: "#FF9E66" }} />
        <div style={{ position: "absolute", top: "10%", right: "18%", width: 5, height: 5, backgroundColor: "#FF9E66" }} />
      </div>

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 2rem 3rem",
        textAlign: "center",
        maxWidth: "68rem",
        margin: "0 auto",
        width: "100%",
      }}>
        {/* Brand Name */}
        <h1 style={{ 
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "clamp(3.5rem, 9.5vw, 7.8rem)",
          fontWeight: 1000,
          color: "#000",
          textTransform: "uppercase",
          letterSpacing: "-0.05em",
          lineHeight: 0.95,
          marginBottom: "2rem",
          textShadow: "4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}>
          4CloverLabs
        </h1>

        {/* Monospace Description Card */}
        <div style={{ 
          background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
          border: "3.5px solid var(--foreground)",
          boxShadow: "7px 7px 0px var(--foreground)",
          padding: "1.75rem 2.5rem",
          maxWidth: "43rem",
          width: "90%",
        }}>
          <p style={{
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)", 
            color: "var(--foreground)", 
            fontWeight: 800, 
            lineHeight: 1.6,
            fontFamily: "monospace",
            margin: 0,
          }}>
            Strategy, automations, custom agents, and the support to keep them running - all from one team.
          </p>
        </div>
      </div>

      {/* Logo / Partner Bar */}
      <div style={{ 
        position: "relative", 
        zIndex: 15, 
        width: "100%", 
        borderTop: "3.5px solid var(--foreground)", 
        height: 80, 
        display: "flex", 
        alignItems: "center", 
        background: "#F5F2E9" 
      }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ 
            flex: 1, 
            height: "100%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "0.6rem",
            borderRight: i !== 5 ? "3.5px solid var(--foreground)" : undefined 
          }}>
            {/* Colored Outline Circle */}
            <div style={{
              width: "1.2rem",
              height: "1.2rem",
              borderRadius: "50%",
              border: `3.5px solid ${partnerColors[i]}`,
              backgroundColor: "transparent",
            }} />
            <span style={{ 
              fontWeight: 900, 
              fontSize: "0.85rem",
              fontFamily: "var(--font-sans), sans-serif",
              letterSpacing: "0.05em",
              color: "var(--foreground)", 
              textTransform: "uppercase" 
            }}>
              Partner
            </span>
          </div>
        ))}

        {/* Circular Bottom-Left Overlapping Badge */}
        <div style={{
          position: "absolute",
          bottom: "-21px",
          left: "16px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          backgroundColor: "#000",
          color: "#FFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: "1.4rem",
          fontFamily: "var(--font-sans), sans-serif",
          zIndex: 25,
          boxShadow: "0 0 0 3.5px #000",
        }}>
          N
        </div>
      </div>
    </section>
  );
}
