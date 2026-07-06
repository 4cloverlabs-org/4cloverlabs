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
          transition: padding 0.3s ease;
        }

        .header-inner {
          width: 100%;
          background: #F5F2E9;
          border-bottom: 3.5px solid var(--foreground);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 5.5rem;
          transition: height 0.3s ease;
        }
        .header-root.scrolled .header-inner {
          height: 4.5rem;
        }

        .header-logo-text {
          font-size: 1.5rem;
          font-family: var(--font-sans), sans-serif;
          text-transform: uppercase;
          font-weight: 900;
          color: var(--foreground);
          letter-spacing: -0.02em;
        }

        .header-nav-link {
          color: var(--foreground);
          text-decoration: none;
          padding: 0.5rem 1rem;
          font-weight: 800;
          font-size: 0.95rem;
          text-transform: uppercase;
          transition: opacity 0.2s;
        }
        .header-nav-link:hover {
          opacity: 0.7;
        }

        .header-cta {
          background: linear-gradient(135deg, #FF9E66 0%, #FFD075 100%);
          color: var(--foreground);
          padding: 0.75rem 1.75rem;
          font-weight: 900;
          font-size: 0.95rem;
          text-transform: uppercase;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 3.5px solid var(--foreground);
          box-shadow: 4px 4px 0px var(--foreground);
          transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
        }
        .header-cta:hover {
          box-shadow: 6px 6px 0px var(--foreground);
          transform: translate(-2px, -2px);
        }
        .header-cta:active {
          box-shadow: 0px 0px 0px var(--foreground);
          transform: translate(4px, 4px);
        }
      `}</style>

      <div className={`header-root${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3.5px solid var(--foreground)",
                boxShadow: "3px 3px 0px var(--foreground)",
                fontWeight: 900,
                fontSize: "1.4rem",
                fontFamily: "var(--font-sans), sans-serif",
                color: "var(--foreground)",
              }}
            >
              P
            </div>
            <span className="header-logo-text">
              4CloverLabs
            </span>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

        </div>
      </div>

      <div style={{ height: "5.5rem" }} aria-hidden="true" />
    </>
  );
}
