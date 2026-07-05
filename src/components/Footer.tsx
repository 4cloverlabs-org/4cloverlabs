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
    <footer className="bg-[var(--foreground)] text-[var(--background)] border-t-[3px] border-[var(--foreground)] pt-20 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-start">

        {/* LEFT — Brand + Tagline */}
        <div className="flex flex-col gap-6 max-w-sm">
          <h2 className="font-bold text-[3rem] leading-none tracking-tighter uppercase text-[var(--background)]">
            4CloverLabs
          </h2>
          <p className="font-mono text-[var(--background-secondary)] opacity-80 text-sm leading-relaxed border-l-[3px] border-[var(--color-primary)] pl-4">
            We turn bold ideas into real, operating businesses — fast, focused, and without the bloat.
          </p>
        </div>

        {/* RIGHT — Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full lg:w-auto">
          {COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3 font-mono">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[var(--background-secondary)] opacity-70 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors duration-200 text-sm uppercase tracking-wide"
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
      <div className="max-w-7xl mx-auto mt-20 mb-8">
        <div className="w-full h-[3px] bg-[var(--background)] opacity-20" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[var(--background-secondary)] opacity-60 uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()} 4CloverLabs. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-[var(--color-primary)] hover:opacity-100 transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[var(--color-primary)] hover:opacity-100 transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
