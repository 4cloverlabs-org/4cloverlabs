"use client";
import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#F5F2E9",
        padding: "6rem 0",
        borderBottom: "3.5px solid var(--foreground)",
        overflow: "hidden",
      }}
    >
      {/* Background Gradient Mesh */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "radial-gradient(circle at 50% 50%, rgba(255,158,102,0.1) 0%, rgba(255,255,255,0) 70%)",
      }} />

      {/* Main Container Card */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "68rem",
        margin: "0 auto",
        padding: "0 2rem",
      }}>
        <div style={{
          position: "relative",
          background: "#FFFFFF",
          border: "3.5px solid var(--foreground)",
          boxShadow: "8px 8px 0px var(--foreground)",
          padding: "3.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}>
          {/* Orange corner bracket decorations */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", padding: "1.25rem" }}>
            {/* Top-left bracket */}
            <svg style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }} width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M32 3H3V32" stroke="#FF9E66" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            {/* Top-right bracket */}
            <svg style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }} width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M0 3H29V32" stroke="#FF9E66" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            {/* Bottom-left bracket */}
            <svg style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem" }} width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M32 29H3V0" stroke="#FF9E66" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            {/* Bottom-right bracket */}
            <svg style={{ position: "absolute", bottom: "1.25rem", right: "1.25rem" }} width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M0 29H29V0" stroke="#FF9E66" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
          </div>

          {/* Content */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem", maxWidth: "42rem", zIndex: 10 }}>
            {/* Tag label */}
            <div style={{
              background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
              border: "3.5px solid var(--foreground)",
              boxShadow: "3px 3px 0px var(--foreground)",
              padding: "5px 15px",
              display: "inline-block",
            }}>
              <span style={{
                fontFamily: "monospace",
                fontSize: "0.75rem",
                fontWeight: 900,
                color: "var(--foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                READY TO DEPLOY
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(2.3rem, 6.2vw, 4.4rem)",
              fontWeight: 1000,
              color: "var(--foreground)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}>
              STOP SITTING ON<br />IDEAS. <br />
              <span style={{ color: "#FF7B7B" }}>START BUILDING.</span>
            </h2>

            {/* Description */}
            <p style={{
              fontFamily: "monospace",
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "var(--foreground)",
              lineHeight: 1.65,
              margin: 0,
            }}>
              If you have an idea, we have the team, the tools, and the drive to build it.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              style={{
                background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
                color: "var(--foreground)",
                padding: "1rem 2.25rem",
                fontWeight: 900,
                fontSize: "1rem",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                border: "3.5px solid var(--foreground)",
                boxShadow: "4px 4px 0px var(--foreground)",
                marginTop: "0.5rem",
              }}
            >
              <span>Get Started</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
