"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const partnerColors = [
    "#cfcfcf", "#cfcfcf", "#cfcfcf", "#cfcfcf", "#cfcfcf", "#cfcfcf"
  ];

  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      backgroundColor: "#0b0d14", // Syntiq Dark Hero Background
      color: "#ffffff",
    }}>
      {/* Dark Grid Background */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
      }} />

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 2rem 5rem",
        textAlign: "center",
        maxWidth: "68rem",
        margin: "0 auto",
        width: "100%",
      }}>
        {/* Brand Name / Main Heading */}
        <h1 style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 600,
          color: "#ffffff",
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          4CloverLabs
        </h1>

        {/* Description */}
        <p style={{
          fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
          color: "#888888",
          fontWeight: 400,
          lineHeight: 1.6,
          fontFamily: "var(--font-sans), sans-serif",
          maxWidth: "40rem",
          margin: "0 auto 2.5rem",
          letterSpacing: "-0.01em",
        }}>
          Strategy, automations, custom agents, and the support to keep them running - all from one team.
        </p>
        
        {/* Actions */}
        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <a href="/contact" style={{
            background: "#ffffff",
            color: "#0b0d14",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            fontWeight: 500,
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "all 0.2s",
          }}>
            See how it works
          </a>
          <a href="/contact" style={{
            background: "transparent",
            color: "#ffffff",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            border: "1px solid #313131",
            fontWeight: 500,
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "all 0.2s",
          }}>
            Talk to us
          </a>
        </div>
      </div>

      {/* Logo / Partner Bar (Light section below dark hero) */}
      <div style={{
        position: "relative",
        zIndex: 15,
        width: "100%",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        height: "80px",
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
      }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            borderRight: i !== 5 ? "1px solid var(--color-border-light)" : undefined
          }}>
            <span style={{
              fontWeight: 600,
              fontSize: "0.85rem",
              fontFamily: "var(--font-sans), sans-serif",
              letterSpacing: "0.02em",
              color: "#888888",
              textTransform: "uppercase"
            }}>
              Partner
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
