"use client";
import React from "react";

export default function WhyUs() {
  const soloFounderItems = [
    "One idea, no portfolio diversification",
    "Burns out before product-market fit",
    "No shared infrastructure or tooling",
    "Fundraising takes priority over building",
    "Pivots kill momentum entirely"
  ];

  const traditionalStudioItems = [
    "Outsource the actual building",
    "Equity-heavy, founder-unfriendly terms",
    "Generic playbooks, not domain-specific",
    "Slow to move - committees at every step",
    "Exit-driven, not built for longevity"
  ];

  const usItems = [
    "Fully internal — we build what we own",
    "Shared infrastructure across every venture",
    "AI-native from day one, not bolted on",
    "Founders with deep technical and product expertise",
    "Built for sustainable value, not quick exits"
  ];

  const renderXIcon = () => (
    <span style={{ color: "#FF7B7B", fontWeight: 900, fontSize: "1.1rem", fontFamily: "monospace", marginRight: "4px" }}>×</span>
  );

  const renderCheckIcon = () => (
    <span style={{ color: "#FF9E66", fontWeight: 900, fontSize: "1rem", fontFamily: "monospace", marginRight: "4px" }}>✓</span>
  );

  return (
    <section style={{
      position: "relative",
      width: "100%",
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
        background: "radial-gradient(circle at 50% 50%, rgba(255,158,102,0.12) 0%, rgba(255,255,255,0) 70%)",
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "68rem",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

        {/* Header Tag */}
        <div style={{
          background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
          border: "3.5px solid var(--foreground)",
          boxShadow: "3px 3px 0px var(--foreground)",
          padding: "5px 15px",
          display: "inline-block",
          marginBottom: "1.75rem",
        }}>
          <span style={{
            fontFamily: "monospace",
            fontSize: "0.8rem",
            fontWeight: 900,
            color: "var(--foreground)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}>
            WHY US
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "clamp(2.3rem, 5vw, 4rem)",
          fontWeight: 1000,
          color: "var(--foreground)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "3.5rem",
        }}>
          A STUDIO BUILT TO LAST.
        </h2>

        {/* Comparison Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          width: "100%",
        }}>
          {/* Card 1: Solo Founders */}
          <div style={{
            background: "#FFFFFF",
            border: "3.5px solid var(--foreground)",
            boxShadow: "8px 8px 0px var(--foreground)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
          }}>
            <h3 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "var(--foreground)",
              textTransform: "uppercase",
              margin: "0 0 1rem 0",
              borderBottom: "3.5px solid var(--foreground)",
              paddingBottom: "1rem",
            }}>
              Solo Founders
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {soloFounderItems.map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  lineHeight: 1.5,
                }}>
                  {renderXIcon()}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Traditional Studios */}
          <div style={{
            background: "#FFFFFF",
            border: "3.5px solid var(--foreground)",
            boxShadow: "8px 8px 0px var(--foreground)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
          }}>
            <h3 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "var(--foreground)",
              textTransform: "uppercase",
              margin: "0 0 1rem 0",
              borderBottom: "3.5px solid var(--foreground)",
              paddingBottom: "1rem",
            }}>
              Traditional Studios
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {traditionalStudioItems.map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  lineHeight: 1.5,
                }}>
                  {renderXIcon()}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: 4CloverLabs */}
          <div style={{
            background: "#FFFFFF",
            border: "3.5px solid var(--foreground)",
            boxShadow: "8px 8px 0px var(--foreground)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
          }}>
            <h3 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#FF9E66",
              textTransform: "uppercase",
              margin: "0 0 1rem 0",
              borderBottom: "3.5px solid #FF9E66",
              paddingBottom: "1rem",
            }}>
              4CloverLabs
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {usItems.map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  lineHeight: 1.5,
                }}>
                  {renderCheckIcon()}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
