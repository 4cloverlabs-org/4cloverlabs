"use client";
import React from "react";

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

export default function Features() {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#F5F2E9",
      padding: "6rem 0",
      borderBottom: "3.5px solid var(--foreground)",
    }}>
      {/* Background Gradient Mesh */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "radial-gradient(circle at 80% 20%, rgba(255,158,102,0.15) 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at 15% 80%, rgba(255,123,123,0.1) 0%, rgba(255,255,255,0) 60%)",
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "76rem",
        margin: "0 auto",
        padding: "0 2rem",
      }}>
        {/* Section Heading Card */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "4.5rem",
        }}>
          <div style={{
            textAlign: "center",
            background: "#FFFFFF",
            border: "3.5px solid var(--foreground)",
            boxShadow: "8px 8px 0px var(--foreground)",
            padding: "2.5rem 3rem",
            maxWidth: "52rem",
            width: "100%",
          }}>
            <span style={{
              fontFamily: "monospace",
              fontSize: "0.85rem",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
              border: "3px solid var(--foreground)",
              padding: "4px 12px",
              display: "inline-block",
              marginBottom: "2rem",
              boxShadow: "3px 3px 0px var(--foreground)",
            }}>
              CAPABILITIES
            </span>
            <h2 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 1000,
              color: "var(--foreground)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              EVERYTHING YOU NEED<br />TO BUILD WHAT'S NEXT.
            </h2>
            <div style={{
              width: "100%",
              height: "3.5px",
              backgroundColor: "var(--foreground)",
              margin: "2rem 0 1.5rem 0"
            }} />
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              color: "var(--foreground)",
              fontWeight: 800,
              maxWidth: "40rem",
              margin: "0 auto",
              lineHeight: 1.5,
            }}>
              Venture creation, product engineering, and intelligent automation.<br />All operating under one roof.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
        }}>

          {/* Card 1: Venture Building */}
          <div style={{
            background: "#FFFFFF",
            border: "3.5px solid var(--foreground)",
            boxShadow: "8px 8px 0px var(--foreground)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}>
            {/* Illustration */}
            <div style={{
              height: "260px",
              borderBottom: "3.5px solid var(--foreground)",
              position: "relative",
              backgroundColor: "#ECE7D7",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* Grid Background */}
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />

              {/* Selection Border Line */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                right: "20px",
                bottom: "-20px",
                borderTop: "3.5px solid var(--foreground)",
                borderLeft: "3.5px solid var(--foreground)",
              }}>
                <div style={{
                  position: "absolute",
                  top: "-7px",
                  left: "-7px",
                  width: "11px",
                  height: "11px",
                  border: "3.5px solid var(--foreground)",
                  backgroundColor: "#FF9E66",
                }} />
              </div>

              {/* Illustration content */}
              <div style={{ display: "flex", gap: "1.5rem", zIndex: 5, position: "relative" }}>
                {/* Left Panel */}
                <div style={{
                  width: "3.2rem",
                  background: "#FFFFFF",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "4px 4px 0px var(--foreground)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0.5rem 0",
                  gap: "0.8rem",
                  position: "relative",
                }}>
                  {/* Cursor pointing at it */}
                  <div style={{
                    position: "absolute",
                    top: "10px",
                    left: "-18px",
                    width: "24px",
                    height: "24px",
                    transform: "rotate(-15deg)",
                  }}>
                    <svg viewBox="0 0 24 24" fill="#FF9E66" stroke="#000" strokeWidth="2">
                      <path d="M4.5 2V21.5L10.5 15.5H19.5L4.5 2Z" />
                    </svg>
                  </div>

                  {/* Gradient Box */}
                  <div style={{
                    width: "2.2rem",
                    height: "2.2rem",
                    background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
                    border: "3px solid var(--foreground)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                  {/* Plus Icon */}
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#000" }}>+</span>
                  {/* Cross Icon */}
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#000", fontFamily: "serif" }}>†</span>
                </div>

                {/* Right Elements */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>
                  {/* Bell Box Row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{
                      width: "2.6rem",
                      height: "2.6rem",
                      background: "#FFFFFF",
                      border: "3.5px solid var(--foreground)",
                      boxShadow: "3px 3px 0px var(--foreground)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </div>
                    <div style={{
                      background: "#FFFFFF",
                      border: "3px solid var(--foreground)",
                      color: "#FF9E66",
                      fontWeight: 900,
                      fontSize: "0.7rem",
                      padding: "4px 10px",
                      letterSpacing: "0.05em",
                    }}>
                      PRIMARY
                    </div>
                  </div>

                  {/* Dark Search Box Row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{
                      width: "2.6rem",
                      height: "2.6rem",
                      background: "#0A0A0A",
                      border: "3.5px solid var(--foreground)",
                      boxShadow: "3px 3px 0px var(--foreground)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD075" strokeWidth="3">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <div style={{
                      background: "#0A0A0A",
                      border: "3px solid var(--foreground)",
                      color: "#FFD075",
                      fontWeight: 900,
                      fontSize: "0.7rem",
                      padding: "4px 10px",
                      letterSpacing: "0.05em",
                    }}>
                      DISCOVER
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
                border: "3px solid var(--foreground)",
                boxShadow: "3px 3px 0px var(--foreground)",
                fontWeight: 900,
                fontSize: "0.8rem",
                padding: "2px 8px",
                width: "fit-content",
                marginBottom: "1.25rem",
              }}>
                01
              </div>
              <h3 style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "var(--foreground)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                Venture Building
              </h3>
              <div style={{ width: "100%", height: "3px", backgroundColor: "var(--foreground)", marginBottom: "1rem" }} />
              <p style={{
                fontFamily: "monospace",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--foreground)",
                lineHeight: 1.6,
                margin: 0,
              }}>
                We conceive, fund, and build intelligent digital businesses from the ground up. Fully owned and operated within the studio.
              </p>
            </div>
          </div>

          {/* Card 2: AI Development */}
          <div style={{
            background: "#FFFFFF",
            border: "3.5px solid var(--foreground)",
            boxShadow: "8px 8px 0px var(--foreground)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}>
            {/* Illustration */}
            <div style={{
              height: "260px",
              borderBottom: "3.5px solid var(--foreground)",
              position: "relative",
              backgroundColor: "#ECE7D7",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}>
              {/* Grid Background */}
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />

              {/* Decorative Dot Grid */}
              <div style={{ position: "absolute", right: "20px", top: "20px" }}>
                <DotGrid cols={3} rows={3} color="#FF9E66" />
              </div>

              {/* Row 1 */}
              <div style={{ display: "flex", gap: "0.8rem", zIndex: 5 }}>
                {/* Nut */}
                <div style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  background: "#FFFFFF",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "3px 3px 0px var(--foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                {/* Target */}
                <div style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  background: "#FFFFFF",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "3px 3px 0px var(--foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="22" y1="12" x2="18" y2="12" />
                    <line x1="6" y1="12" x2="2" y2="12" />
                    <line x1="12" y1="6" x2="12" y2="2" />
                    <line x1="12" y1="22" x2="12" y2="18" />
                  </svg>
                </div>
                {/* Orange G Box */}
                <div style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  background: "#FF9E66",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "3px 3px 0px var(--foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                }}>
                  G
                </div>
                {/* Red Chain Box */}
                <div style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  background: "#FF7B7B",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "3px 3px 0px var(--foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", zIndex: 5 }}>
                {/* Translucent Orange Box */}
                <div style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  background: "rgba(255,158,102,0.45)",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "3px 3px 0px var(--foreground)",
                }} />
                {/* Swirl Black Box */}
                <div style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  background: "#0A0A0A",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "3px 3px 0px var(--foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF9E66" strokeWidth="3">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                  </svg>
                </div>
                {/* Asterisk */}
                <span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#000", margin: "0 0.2rem" }}>★</span>
                {/* Target Circle */}
                <div style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  background: "#FFFFFF",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "3px 3px 0px var(--foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                {/* Braces */}
                <div style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  background: "#FFFFFF",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: "3px 3px 0px var(--foreground)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1rem",
                  fontFamily: "monospace",
                }}>
                  {"{}"}
                </div>
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
                border: "3px solid var(--foreground)",
                boxShadow: "3px 3px 0px var(--foreground)",
                fontWeight: 900,
                fontSize: "0.8rem",
                padding: "2px 8px",
                width: "fit-content",
                marginBottom: "1.25rem",
              }}>
                02
              </div>
              <h3 style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "var(--foreground)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                AI Development
              </h3>
              <div style={{ width: "100%", height: "3px", backgroundColor: "var(--foreground)", marginBottom: "1rem" }} />
              <p style={{
                fontFamily: "monospace",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--foreground)",
                lineHeight: 1.6,
                margin: 0,
              }}>
                From intelligent automations to autonomous agent platforms - we engineer custom AI products built for real-world impact.
              </p>
            </div>
          </div>

          {/* Card 3: Shared Infrastructure */}
          <div style={{
            background: "#FFFFFF",
            border: "3.5px solid var(--foreground)",
            boxShadow: "8px 8px 0px var(--foreground)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}>
            {/* Illustration */}
            <div style={{
              height: "260px",
              borderBottom: "3.5px solid var(--foreground)",
              position: "relative",
              backgroundColor: "#ECE7D7",
              overflow: "hidden",
            }}>
              {/* Horizontal Grid lines */}
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />

              {/* Charts (SVG) */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none" viewBox="0 0 400 260">
                {/* Area under curve */}
                <path d="M0,210 L50,170 L110,220 L180,140 L250,180 L310,120 L370,190 L400,160 L400,260 L0,260 Z" fill="rgba(255,123,123,0.3)" stroke="none" />
                <path d="M0,230 L40,190 L100,240 L160,150 L220,190 L290,130 L350,210 L400,150" fill="none" stroke="var(--foreground)" strokeWidth="3.5" />
                <path d="M0,210 L50,170 L110,220 L180,140 L250,180 L310,120 L370,190 L400,160" fill="none" stroke="#FF9E66" strokeWidth="4.5" />

                {/* Connecting dashed line */}
                <line x1="180" y1="140" x2="180" y2="260" stroke="var(--foreground)" strokeWidth="3" strokeDasharray="6 4" />
                <circle cx="180" cy="140" r="7" fill="#FF9E66" stroke="var(--foreground)" strokeWidth="3" />
              </svg>

              {/* System Monitor Overlapping Card */}
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "#FFFFFF",
                border: "3.5px solid var(--foreground)",
                boxShadow: "4px 4px 0px var(--foreground)",
                padding: "0.8rem",
                width: "140px",
                zIndex: 10,
              }}>
                <div style={{
                  fontSize: "0.65rem",
                  fontWeight: 900,
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                  borderBottom: "2.5px solid var(--foreground)",
                  paddingBottom: "4px",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                  APPS
                </div>
                {/* Progress bar */}
                <div style={{
                  width: "100%",
                  height: "8px",
                  background: "#ECE7D7",
                  border: "2px solid var(--foreground)",
                  marginBottom: "8px",
                  position: "relative",
                }}>
                  <div style={{ width: "70%", height: "100%", background: "#FF9E66" }} />
                </div>
                {/* Database OK */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.55rem",
                  fontFamily: "monospace",
                  fontWeight: 900,
                  marginBottom: "4px",
                }}>
                  <span>DATABASE</span>
                  <span style={{ color: "#FF9E66" }}>OK</span>
                </div>
                {/* System 99.9% */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.55rem",
                  fontFamily: "monospace",
                  fontWeight: 900,
                }}>
                  <span>SYSTEM</span>
                  <span style={{ background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)", padding: "0 2px", border: "1.5px solid #000" }}>99.9%</span>
                </div>
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
                border: "3px solid var(--foreground)",
                boxShadow: "3px 3px 0px var(--foreground)",
                fontWeight: 900,
                fontSize: "0.8rem",
                padding: "2px 8px",
                width: "fit-content",
                marginBottom: "1.25rem",
              }}>
                03
              </div>
              <h3 style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "var(--foreground)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                Shared Infrastructure
              </h3>
              <div style={{ width: "100%", height: "3px", backgroundColor: "var(--foreground)", marginBottom: "1rem" }} />
              <p style={{
                fontFamily: "monospace",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--foreground)",
                lineHeight: 1.6,
                margin: 0,
              }}>
                Every venture we build runs on the same foundation - enabling faster time to market and scaling with ease.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
