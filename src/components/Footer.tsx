import React from "react";
import Link from "next/link";

// ─── Link Columns ─────────────────────────────────────────────────────────────
const COLUMNS = [
  {
    heading: "QUICK LINKS",
    links: [
      { label: "HOME", href: "/" },
      { label: "ABOUT US", href: "/about" },
      { label: "CONTACT US", href: "/contact" },
      { label: "PORTFOLIO", href: "/portfolio" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "SERVICES", href: "/services" },
      { label: "CASE STUDIES", href: "/case-studies" },
      { label: "PROJECTS", href: "/projects" },
      { label: "PRICING DETAILS", href: "/projects/details" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "BLOG", href: "/blog" },
      { label: "BLOG DETAILS", href: "/blog/details" },
      { label: "Q&A", href: "/404" },
    ],
  },
  {
    heading: "SOCIAL",
    links: [
      { label: "FACEBOOK", href: "https://facebook.com" },
      { label: "LINKEDIN", href: "https://linkedin.com" },
      { label: "INSTAGRAM", href: "https://instagram.com" },
      { label: "TWITTER", href: "https://twitter.com" },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-[#0b0d14] text-[#ffffff] border-t border-[#313131] pt-20 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-start">

        {/* LEFT — Brand + Tagline */}
        <div className="flex flex-col gap-6 max-w-sm">
          <h2 className="font-bold text-[2rem] leading-none tracking-tight uppercase text-[#ffffff]">
            4CloverLabs
          </h2>
          <p className="font-sans text-[#888888] text-sm leading-relaxed border-l border-[#313131] pl-4">
            We turn bold ideas into real, operating businesses - fast, focused, and without the bloat.
          </p>
        </div>

        {/* RIGHT — Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full lg:w-auto">
          {COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-6">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#ffffff]">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3 font-mono">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[#888888] hover:text-[#ffffff] transition-colors duration-200 text-xs uppercase tracking-wide"
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
        <div className="w-full h-[1px] bg-[#313131]" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#888888] uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()} 4CloverLabs. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-[#ffffff] transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#ffffff] transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
