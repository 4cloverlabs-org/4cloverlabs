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
    <div style={{ flexShrink: 0, marginTop: "2px", width: "16px", height: "16px", borderRadius: "50%", background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444", fontSize: "10px", fontWeight: "bold" }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  );

  const renderCheckIcon = () => (
    <div style={{ flexShrink: 0, marginTop: "2px", width: "16px", height: "16px", borderRadius: "50%", background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", color: "#22c55e", fontSize: "10px", fontWeight: "bold" }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: "#ffffff",
      padding: "8rem 0",
      borderBottom: "1px solid #eaeaea",
    }}>
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "76rem",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

        {/* Header Tag */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "4rem",
        }}>
          <span style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#666666",
            padding: "4px 12px",
            border: "1px solid #eaeaea",
            borderRadius: "100px",
            backgroundColor: "#f9fafb",
            marginBottom: "1.5rem"
          }}>
            WHY US
          </span>
          <h2 style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 500,
            color: "#111111",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            textAlign: "center",
            margin: 0,
            maxWidth: "36rem",
          }}>
            A studio built to last.
          </h2>
        </div>

        {/* Comparison Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          width: "100%",
        }}>
          {/* Card 1: Solo Founders */}
          <div style={{
            background: "#f9fafb",
            border: "1px solid #eaeaea",
            borderRadius: "20px",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
          }}>
            <h3 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#111111",
              margin: "0 0 1.5rem 0",
              borderBottom: "1px solid #eaeaea",
              paddingBottom: "1rem",
              letterSpacing: "-0.02em"
            }}>
              Solo Founders
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {soloFounderItems.map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#666666",
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
            background: "#f9fafb",
            border: "1px solid #eaeaea",
            borderRadius: "20px",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
          }}>
            <h3 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#111111",
              margin: "0 0 1.5rem 0",
              borderBottom: "1px solid #eaeaea",
              paddingBottom: "1rem",
              letterSpacing: "-0.02em"
            }}>
              Traditional Studios
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {traditionalStudioItems.map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#666666",
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
            background: "#111111",
            border: "1px solid #333333",
            borderRadius: "20px",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
          }}>
            <h3 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#ffffff",
              margin: "0 0 1.5rem 0",
              borderBottom: "1px solid #333333",
              paddingBottom: "1rem",
              letterSpacing: "-0.02em"
            }}>
              4CloverLabs
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {usItems.map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#cccccc",
                  lineHeight: 1.5,
                }}>
                  <div style={{ flexShrink: 0, marginTop: "2px", width: "16px", height: "16px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#111111" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
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
