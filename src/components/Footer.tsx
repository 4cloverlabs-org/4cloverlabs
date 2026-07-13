import React from "react";
import Link from "next/link";

// ─── Link Columns ─────────────────────────────────────────────────────────────
const COLUMNS = [
  {
    heading: "QUICK LINKS",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Projects", href: "/projects" },
      { label: "Pricing Details", href: "/projects/details" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Blog Details", href: "/blog/details" },
      { label: "Q&A", href: "/404" },
    ],
  },
  {
    heading: "SOCIAL",
    links: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--color-deep-black)",
      color: "var(--color-neutral-white)",
      borderTop: "1px solid var(--color-neutral-800)",
      paddingTop: "5rem",
      paddingBottom: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem"
    }}>
      <div style={{
        maxWidth: "1180px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "4rem",
        justifyContent: "space-between",
        alignItems: "start"
      }}>

        {/* LEFT — Brand + Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "380px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src="/favicon_1.png"
              alt="4CloverLabs Logo"
              style={{
                width: "1.75rem",
                height: "1.75rem",
                objectFit: "contain",
              }}
            />
            <h2 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontWeight: 600,
              fontSize: "1.25rem",
              letterSpacing: "-0.03em",
              margin: 0
            }}>
              4cloverlabs
            </h2>
          </div>
          <p style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "14px",
            color: "var(--color-neutral-400)",
            lineHeight: "1.6",
            borderLeft: "1px solid var(--color-neutral-800)",
            paddingLeft: "1rem",
            margin: 0
          }}>
            We turn bold ideas into real, operating businesses — fast, focused, and without the bloat.
          </p>
        </div>

        {/* RIGHT — Columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "3rem",
          width: "100%",
          maxWidth: "640px"
        }}>
          {COLUMNS.map(({ heading, links }) => (
            <div key={heading} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "var(--color-neutral-white)",
                margin: 0,
                textTransform: "uppercase"
              }}>
                {heading}
              </h3>
              <ul style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: 0,
                margin: 0,
                listStyle: "none"
              }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="hover:text-[var(--color-neutral-white)] transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14px",
                        color: "var(--color-neutral-400)",
                        textDecoration: "none"
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: "1180px", margin: "4rem auto 2rem" }}>
        <div style={{ width: "100%", height: "1px", backgroundColor: "var(--color-neutral-800)" }} />
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1180px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1.5rem",
        fontFamily: "var(--font-sans)",
        fontSize: "12px", // Caption/Meta scale
        color: "var(--color-neutral-500)"
      }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} 4cloverlabs. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link
            href="/privacy"
            className="hover:text-[var(--color-neutral-300)] transition-colors duration-200"
            style={{ color: "var(--color-neutral-500)", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[var(--color-neutral-300)] transition-colors duration-200"
            style={{ color: "var(--color-neutral-500)", textDecoration: "none" }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
