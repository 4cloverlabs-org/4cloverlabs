import React from "react";
import Link from "next/link";

// ─── Link Columns ─────────────────────────────────────────────────────────────
const COLUMNS = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Projects", href: "/projects" },
      { label: "Project details", href: "/projects/details" },
    ],
  },
  {
    heading: "Others",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Blog details", href: "/blog/details" },
      { label: "404", href: "/404" },
    ],
  },
  {
    heading: "Social",
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
    <footer style={{ background: "#000000ff", color: "#ffffff" }}>

      {/* ── Main body: explicit table-like two-section layout ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 40px 64px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "0",
        }}
      >

        {/* LEFT — brand + tagline, fixed 300px */}
        <div style={{ flexShrink: 0, width: "300px", paddingRight: "24px" }}>
          <h2
            style={{
              fontFamily: "inherit",
              fontWeight: 900,
              fontSize: "2.5rem",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            4CloverLabs
          </h2>
          <p
            style={{
              marginTop: "24px",
              fontSize: "0.83rem",
              lineHeight: 1.6,
              color: "#6B7280",
              maxWidth: "220px",
            }}
          >
            We turn bold ideas into real, operating businesses — fast, focused, and without the bloat.
          </p>
        </div>

        {/* RIGHT — 4 columns, each fixed 160px */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "48px",
          }}
        >
          {COLUMNS.map(({ heading, links }) => (
            <div key={heading} style={{ minWidth: "120px" }}>
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  whiteSpace: "nowrap",
                }}
              >
                {heading}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      style={{ color: "#6B7280", fontSize: "0.83rem", textDecoration: "none", whiteSpace: "nowrap" }}
                      className="hover:text-white transition-colors duration-200"
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

      {/* ── Divider ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "#1e1e1e" }} />
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <p style={{ color: "#444", fontSize: "0.72rem", margin: 0 }}>
          © {new Date().getFullYear()} 4CloverLabs. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/privacy" style={{ color: "#444", fontSize: "0.72rem", textDecoration: "none" }} className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" style={{ color: "#444", fontSize: "0.72rem", textDecoration: "none" }} className="hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  );
}
