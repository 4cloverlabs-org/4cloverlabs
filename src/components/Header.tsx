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
          padding: 1rem;
          transition: transform 0.3s ease;
        }
        .header-root.scrolled {
          padding: 0;
        }

        .header-inner {
          width: 100%;
          background: var(--background);
          border-bottom: 3px solid var(--foreground);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 5rem;
          transition: height 0.3s ease, border-bottom 0.3s ease;
        }
        .header-root.scrolled .header-inner {
          height: 4rem;
        }

        .header-logo-text {
          font-size: 1.5rem;
          font-family: monospace;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--foreground);
          letter-spacing: -0.02em;
        }

        .header-nav-link {
          color: var(--foreground);
          text-decoration: none;
          padding: 0.5rem 1rem;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          border: 3px solid transparent;
          transition: border-color 0.2s;
        }
        .header-nav-link:hover {
          border-bottom-color: var(--foreground);
        }

        .header-cta {
          background: var(--color-primary);
          color: var(--foreground);
          padding: 0.75rem 1.5rem;
          font-weight: 800;
          font-size: 1rem;
          text-transform: uppercase;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>

      <div className={`header-root${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner brutal-shadow">

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              className="brutal-border"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                background: "var(--foreground)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" style={{ width: "60%", height: "60%", color: "var(--color-primary)" }} stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <span className="header-logo-text">
              4CloverLabs
            </span>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/" className="header-nav-link">Home</Link>
            <Link href="/about" className="header-nav-link">About</Link>
            <Link href="/portfolio" className="header-nav-link">Portfolio</Link>
            <Link href="/blog" className="header-nav-link">Blog</Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="header-cta brutal-btn"
          >
            <span>Contact us</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

        </div>
      </div>

      <div style={{ height: "6rem" }} aria-hidden="true" />
    </>
  );
}
