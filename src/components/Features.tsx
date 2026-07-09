"use client";
import React from "react";

function DotGrid({ cols, rows, dotSize = 3, gap = 6, color = "#e0e0e0" }: { cols: number; rows: number; dotSize?: number; gap?: number; color?: string; }) {
  const w = cols * dotSize + (cols - 1) * gap;
  const h = rows * dotSize + (rows - 1) * gap;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <rect key={`${r}-${c}`} x={c * (dotSize + gap)} y={r * (dotSize + gap)} width={dotSize} height={dotSize} rx={dotSize/2} fill={color} />
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
      backgroundColor: "#f9fafb", // Very light gray like Syntiq
      padding: "8rem 0",
    }}>
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "0 2rem",
      }}>
        {/* Section Heading */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "5rem",
        }}>
          <span style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#666666",
            marginBottom: "1rem",
            display: "inline-block",
            padding: "4px 12px",
            border: "1px solid #eaeaea",
            borderRadius: "100px",
            backgroundColor: "#ffffff"
          }}>
            CAPABILITIES
          </span>
          <h2 style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 500,
            color: "#111111",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            maxWidth: "48rem"
          }}>
            Everything you need to build what's next.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "1.125rem",
            color: "#666666",
            fontWeight: 400,
            maxWidth: "36rem",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Venture creation, product engineering, and intelligent automation. All operating under one roof.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
        }}>

          {/* Card 1: Venture Building */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #eaeaea",
            borderRadius: "20px",
            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden"
          }}>
            {/* Illustration */}
            <div style={{
              height: "280px",
              position: "relative",
              backgroundColor: "#f4f5f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* Illustration content */}
              <div style={{ display: "flex", gap: "1rem", zIndex: 5, position: "relative" }}>
                {/* Left Panel */}
                <div style={{
                  width: "4rem",
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0.75rem 0",
                  gap: "1rem",
                  border: "1px solid #f0f0f0"
                }}>
                  <div style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "#111111",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff"
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "1.2rem", color: "#888" }}>+</span>
                </div>

                {/* Right Elements */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: "3rem",
                      height: "3rem",
                      background: "#FFFFFF",
                      borderRadius: "10px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #f0f0f0"
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </div>
                    <div style={{
                      background: "#FFFFFF",
                      borderRadius: "100px",
                      color: "#111",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      padding: "6px 12px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                      border: "1px solid #f0f0f0"
                    }}>
                      PRIMARY
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: "3rem",
                      height: "3rem",
                      background: "#111111",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <div style={{
                      background: "#111111",
                      borderRadius: "100px",
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      padding: "6px 12px",
                    }}>
                      DISCOVER
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: "2.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                color: "#999",
                fontSize: "0.875rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}>
                01
              </div>
              <h3 style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "#111111",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}>
                Venture Building
              </h3>
              <p style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1rem",
                color: "#666666",
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
            border: "1px solid #eaeaea",
            borderRadius: "20px",
            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden"
          }}>
            {/* Illustration */}
            <div style={{
              height: "280px",
              position: "relative",
              backgroundColor: "#f4f5f7",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}>
              {/* Decorative Dot Grid */}
              <div style={{ position: "absolute", right: "24px", top: "24px" }}>
                <DotGrid cols={3} rows={3} color="#ddd" />
              </div>

              {/* Row 1 */}
              <div style={{ display: "flex", gap: "1rem", zIndex: 5 }}>
                <div style={{
                  width: "3rem", height: "3rem", background: "#FFFFFF", borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div style={{
                  width: "3rem", height: "3rem", background: "#FFFFFF", borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="22" y1="12" x2="18" y2="12" />
                    <line x1="6" y1="12" x2="2" y2="12" />
                    <line x1="12" y1="6" x2="12" y2="2" />
                    <line x1="12" y1="22" x2="12" y2="18" />
                  </svg>
                </div>
                <div style={{
                  width: "3rem", height: "3rem", background: "#111111", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 600, fontSize: "1.2rem", color: "#fff"
                }}>
                  G
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", zIndex: 5 }}>
                <div style={{
                  width: "3rem", height: "3rem", background: "#e5e7eb", borderRadius: "10px",
                }} />
                <div style={{
                  width: "3rem", height: "3rem", background: "#FFFFFF", borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div style={{
                  width: "3rem", height: "3rem", background: "#FFFFFF", borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 600, fontSize: "1.1rem", fontFamily: "var(--font-mono)", color: "#111"
                }}>
                  {"{}"}
                </div>
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: "2.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                color: "#999",
                fontSize: "0.875rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}>
                02
              </div>
              <h3 style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "#111111",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}>
                AI Development
              </h3>
              <p style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1rem",
                color: "#666666",
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
            border: "1px solid #eaeaea",
            borderRadius: "20px",
            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden"
          }}>
            {/* Illustration */}
            <div style={{
              height: "280px",
              position: "relative",
              backgroundColor: "#f4f5f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {/* Charts (SVG) */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }} preserveAspectRatio="none" viewBox="0 0 400 280">
                <path d="M0,230 L50,190 L110,240 L180,160 L250,200 L310,140 L370,210 L400,180 L400,280 L0,280 Z" fill="#e5e7eb" stroke="none" />
                <path d="M0,230 L50,190 L110,240 L180,160 L250,200 L310,140 L370,210 L400,180" fill="none" stroke="#111111" strokeWidth="2" />
              </svg>

              {/* System Monitor Overlapping Card */}
              <div style={{
                position: "absolute",
                background: "#FFFFFF",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
                padding: "1.25rem",
                width: "180px",
                zIndex: 10,
              }}>
                <div style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#111",
                  borderBottom: "1px solid #eaeaea",
                  paddingBottom: "8px",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                  APPS
                </div>
                {/* Progress bar */}
                <div style={{
                  width: "100%",
                  height: "6px",
                  background: "#f0f0f0",
                  borderRadius: "100px",
                  marginBottom: "12px",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <div style={{ width: "70%", height: "100%", background: "#111111", borderRadius: "100px" }} />
                </div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: "#666",
                  marginBottom: "6px",
                }}>
                  <span>DATABASE</span>
                  <span style={{ color: "#111" }}>OK</span>
                </div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: "#666"
                }}>
                  <span>SYSTEM</span>
                  <span style={{ color: "#111" }}>99.9%</span>
                </div>
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: "2.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                color: "#999",
                fontSize: "0.875rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}>
                03
              </div>
              <h3 style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "#111111",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}>
                Shared Infrastructure
              </h3>
              <p style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "1rem",
                color: "#666666",
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
