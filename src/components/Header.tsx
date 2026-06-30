"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .header-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          pointer-events: none;
          padding: 0;
          /* Full-width background so no colour bleed past max-width */
          background: #ffffff;
          border-bottom: 1px dashed #d1d5db;
          transition:
            padding        0.5s cubic-bezier(0.4, 0, 0.2, 1),
            background     0.5s cubic-bezier(0.4, 0, 0.2, 1),
            border-color   0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header-root.pill {
          padding: 14px 20px;
          /* Transparent in pill state — inner div carries its own frosted bg */
          background: transparent;
          border-bottom-color: transparent;
        }

        .header-inner {
          pointer-events: all;
          width: 100%;
          /* Both states need explicit max-width so CSS can tween between them */
          max-width: 80rem;
          background: transparent;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 5rem;
          border-radius: 0px;
          box-shadow: none;
          /* All animatable properties listed explicitly */
          transition:
            max-width     0.55s cubic-bezier(0.4, 0, 0.2, 1),
            height        0.5s  cubic-bezier(0.4, 0, 0.2, 1),
            padding       0.5s  cubic-bezier(0.4, 0, 0.2, 1),
            border-radius 0.5s  cubic-bezier(0.4, 0, 0.2, 1),
            border-color  0.4s  cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow    0.5s  cubic-bezier(0.4, 0, 0.2, 1),
            background    0.5s  cubic-bezier(0.4, 0, 0.2, 1),
            backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header-inner.pill {
          max-width: 36rem;
          height: 3rem;
          border-radius: 9999px;
          padding: 0 1.25rem;
          border: 1px solid rgba(0,0,0,0.10);
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10), 0 1px 4px 0 rgba(0,0,0,0.06);
          background: rgba(245,245,245,0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        /* Logo text */
        .header-logo-text {
          font-size: 1.25rem;
          transition: font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header-inner.pill .header-logo-text {
          font-size: 1.05rem;
        }

        /* Nav separators collapse smoothly */
        .header-nav-dot {
          display: inline-block;
          max-width: 1rem;
          overflow: hidden;
          opacity: 1;
          transition:
            opacity   0.35s cubic-bezier(0.4, 0, 0.2, 1),
            max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header-inner.pill .header-nav-dot {
          opacity: 0;
          max-width: 0;
        }

        /* CTA button */
        .header-cta {
          transition:
            padding    0.5s cubic-bezier(0.4, 0, 0.2, 1),
            font-size  0.5s cubic-bezier(0.4, 0, 0.2, 1),
            background 0.2s ease;
        }
        .header-inner.pill .header-cta {
          padding: 0.38rem 0.9rem !important;
          font-size: 0.78rem !important;
        }

        /* Logo icon */
        .header-logo-icon {
          width: 2rem;
          height: 2rem;
          border-radius: 6px;
          transition:
            width         0.5s cubic-bezier(0.4, 0, 0.2, 1),
            height        0.5s cubic-bezier(0.4, 0, 0.2, 1),
            border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header-inner.pill .header-logo-icon {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
        }
      `}</style>

      <div className={`header-root${scrolled ? " pill" : ""}`}>
        <div className={`header-inner${scrolled ? " pill" : ""}`}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              className="header-logo-icon"
              style={{
                background: "#1A1A1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" style={{ width: "60%", height: "60%", color: "white" }} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <span
              className="header-logo-text"
              style={{ fontFamily: "var(--font-geist-sans, 'Geist', sans-serif)", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1A1A" }}
            >
              4CloverLabs
            </span>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, color: "#374151" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none", padding: "0.25rem 0.5rem", borderRadius: "6px", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#000")}
              onMouseLeave={e => (e.currentTarget.style.color = "#374151")}
            >Home</Link>
            <span className="header-nav-dot" style={{ color: "#d1d5db", fontSize: "0.6rem" }}>•</span>
            <Link href="/about" style={{ color: "inherit", textDecoration: "none", padding: "0.25rem 0.5rem", borderRadius: "6px", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#000")}
              onMouseLeave={e => (e.currentTarget.style.color = "#374151")}
            >About</Link>
            <span className="header-nav-dot" style={{ color: "#d1d5db", fontSize: "0.6rem" }}>•</span>
            <Link href="/portfolio" style={{ color: "inherit", textDecoration: "none", padding: "0.25rem 0.5rem", borderRadius: "6px", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#000")}
              onMouseLeave={e => (e.currentTarget.style.color = "#374151")}
            >Portfolio</Link>
            <span className="header-nav-dot" style={{ color: "#d1d5db", fontSize: "0.6rem" }}>•</span>
            <Link href="/blog" style={{ color: "inherit", textDecoration: "none", padding: "0.25rem 0.5rem", borderRadius: "6px", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#000")}
              onMouseLeave={e => (e.currentTarget.style.color = "#374151")}
            >Blog</Link>

          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="header-cta"
            style={{
              background: "#1A1A1A",
              color: "#fff",
              padding: "0.6rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)",
              transition: "background 0.2s, padding 0.45s cubic-bezier(0.4,0,0.2,1), font-size 0.45s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#000")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1A1A1A")}
          >
            <span>Contact us</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

        </div>
      </div>

      {/* Spacer so page content starts below the fixed header */}
      <div style={{ height: "5rem" }} aria-hidden="true" />
    </>
  );
}
