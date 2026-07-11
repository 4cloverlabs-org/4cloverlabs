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
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .header-root.scrolled {
          padding: 0.75rem 1.5rem;
        }

        .header-inner {
          width: 100%;
          max-width: 100%;
          background: var(--background);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 4.5rem;
          border-radius: 0px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .header-root.scrolled .header-inner {
          max-width: 1180px;
          height: 3.75rem;
          background: #313131;
          border: none;
          border-radius: 9999px;
          padding: 0 1.5rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
        }

        .header-logo-text {
          font-size: 1.25rem;
          font-family: var(--font-sans), sans-serif;
          font-weight: 600;
          color: var(--foreground);
          letter-spacing: -0.03em;
        }

        .header-nav-link {
          color: var(--color-neutral-600);
          text-decoration: none;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 0.875rem;
          transition: color 0.2s ease-out;
        }
        .header-nav-link:hover {
          color: var(--foreground);
        }

        .header-cta {
          background: var(--color-deep-black);
          color: #ffffff;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 0.75rem; /* 12px */
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 4px;
          border: 1px solid var(--color-deep-black);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .header-cta:hover {
          background: var(--color-graphite);
          border-color: var(--color-graphite);
        }
        .header-cta:active {
          transform: translateY(1px);
        }

        /* Scrolled Text Inversion */
        .header-root.scrolled .header-logo-text {
          color: #ffffff;
        }
        .header-root.scrolled .header-nav-link {
          color: #e7e2e2;
        }
        .header-root.scrolled .header-nav-link:hover {
          color: #ffffff;
        }
        .header-root.scrolled .header-cta {
          background: #ffffff;
          color: var(--color-deep-black);
          border-color: #ffffff;
        }
        .header-root.scrolled .header-cta:hover {
          background: var(--color-neutral-200);
          border-color: var(--color-neutral-200);
        }
      `}</style>

      <div className={`header-root${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <div
              style={{
                width: "1.75rem",
                height: "1.75rem",
                background: scrolled ? "var(--color-neutral-white)" : "var(--color-deep-black)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "1.1rem",
                fontFamily: "var(--font-sans), sans-serif",
                color: scrolled ? "var(--color-deep-black)" : "#ffffff",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              4
            </div>
            <span className="header-logo-text">
              4cloverlabs
            </span>
          </Link>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
