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
          padding: 0;
          transition: padding 0.3s ease, background 0.3s ease;
        }

        .header-inner {
          width: 100%;
          background: var(--background);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 4.5rem;
          transition: height 0.3s ease;
        }
        .header-root.scrolled .header-inner {
          height: 4rem;
          background: rgba(245, 245, 245, 0.9);
          backdrop-filter: blur(8px);
        }

        .header-logo-text {
          font-size: 1.25rem;
          font-family: var(--font-sans), sans-serif;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--foreground);
          letter-spacing: -0.04em;
        }

        .header-nav-link {
          color: var(--color-muted);
          text-decoration: none;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 0.9rem;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .header-nav-link:hover {
          color: var(--foreground);
        }

        .header-cta {
          background: var(--color-dark);
          color: #ffffff;
          padding: 0.6rem 1.25rem;
          font-weight: 500;
          font-size: 0.9rem;
          text-transform: uppercase;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 6px;
          border: 1px solid var(--color-dark);
          transition: all 0.2s ease-out;
        }
        .header-cta:hover {
          background: #ffffff;
          color: var(--color-dark);
        }
        .header-cta:active {
          transform: translateY(1px);
        }
      `}</style>

      <div className={`header-root${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                background: "var(--foreground)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "1.2rem",
                fontFamily: "var(--font-sans), sans-serif",
                color: "#ffffff",
              }}
            >
              P
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
            className="header-cta"
          >
            <span>Contact Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

        </div>
      </div>

      <div style={{ height: "4.5rem" }} aria-hidden="true" />
    </>
  );
}
