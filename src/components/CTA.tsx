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
        backgroundImage: `
    linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2)),
    url('/cta_v3.png')
  `,
        backgroundSize: "cover",
        backgroundPosition: "center 85%",
        backgroundRepeat: "no-repeat",
        padding: "8rem 0 3rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "550px",
      }}
    >
      {/* Content Container */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "2.5rem",
      }}>
        {/* Title & Subtitle */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
            fontWeight: 400,
            color: "#000000ff",
            lineHeight: "1.25",
            margin: 0,
            maxWidth: "800px",
          }}>
            Stop sitting on ideas. Start building.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "#000000ff",
            lineHeight: "1.6",
            margin: "0.5rem 0 0 0",
            maxWidth: "600px",
          }}>
            If you have a bold idea, we have the engineering team, the shared tools, and the drive to build it.
          </p>
        </div>

        {/* Action Button */}
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.75rem 2.25rem",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#000000ff",
            backgroundColor: "#ffffffff",
            border: "1px solid #ffffffff",
            borderRadius: "9999px",
            boxShadow: "0 4px 14px rgba(230, 230, 230, 0.3)",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            cursor: "pointer",
          }}
          className="hover:scale-105 hover:bg-[#0052cc] transition-all"
        >
          Get Started
        </Link>
      </div>

      {/* Footer copyright bar */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        textAlign: "center",
        marginTop: "auto",
        paddingTop: "6rem",
      }}>
        <p style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "14px",
          color: "#ffffff",
          opacity: 0.95,
          margin: 0,
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
        }}>
          © 2026 4cloverlabs. All rights reserved.
        </p>
      </div>
    </section>
  );
}
