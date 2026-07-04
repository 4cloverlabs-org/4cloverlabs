"use client";

import React from "react";
import Link from "next/link";

// ─── Grid Config ──────────────────────────────────────────────────────────────
const GRID = {
  cellSize: 5,           // px — width & height of one repeating tile
  diamondPad: 1,          // px — gap between diamond tip and cell edge (controls diamond size)
  strokeColor: "#dad2c9ff", // stroke colour of the diamonds
  strokeWidth: 0.8,       // stroke thickness
  borderPad: 32,          // px — grid padding that extends beyond the content (the "border")
  sidePad: "px-6",        // Tailwind class — outer section left/right margin
};
// ──────────────────────────────────────────────────────────────────────────────

// Build a repeating SVG diamond (outlined rhombus) pattern as a data URI.
// The pattern tiles a single diamond that fills each cell.
const C = GRID.cellSize;
const P = GRID.diamondPad;
const mid = C / 2;
// Four points of the diamond: top, right, bottom, left
const pts = `${mid},${P} ${C - P},${mid} ${mid},${C - P} ${P},${mid}`;
const col = GRID.strokeColor.replace("#", "%23");
const svgTile = `%3Csvg xmlns='http://www.w3.org/2000/svg' width='${C}' height='${C}'%3E%3Cpolygon points='${pts}' fill='none' stroke='${col}' stroke-width='${GRID.strokeWidth}'/%3E%3C/svg%3E`;
const diamondBg = `url("data:image/svg+xml,${svgTile}")`;

export default function Contact() {
  return (
    <section
      id="contact"
      className={`relative w-full bg-[#f0ece6] py-24 ${GRID.sidePad} overflow-hidden`}
    >
      {/* Card with diamond-grid background and corner brackets */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: diamondBg,
          backgroundSize: `${C}px ${C}px`,
          padding: `${GRID.borderPad}px`,
        }}
      >
        {/* Corner bracket decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left bracket */}
          <svg
            className="absolute top-0 left-0"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path d="M28 2H2V28" stroke="#888" strokeWidth="1.5" />
          </svg>
          {/* Top-right bracket */}
          <svg
            className="absolute top-0 right-0"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path d="M0 2H26V28" stroke="#888" strokeWidth="1.5" />
          </svg>
          {/* Bottom-left bracket */}
          <svg
            className="absolute bottom-0 left-0"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path d="M28 26H2V0" stroke="#888" strokeWidth="1.5" />
          </svg>
          {/* Bottom-right bracket */}
          <svg
            className="absolute bottom-0 right-0"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path d="M0 26H26V0" stroke="#888" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center gap-8 py-16 px-10">
          {/* Heading */}
          <h2
            className="font-serif text-[3.5rem] md:text-[5rem] leading-[1.1] tracking-tight text-[#111]"
            style={{ fontWeight: 400 }}
          >
            Stop sitting on ideas.
            <br />
            Start building.
          </h2>

          {/* Body text */}
          <p className="font-mono text-[#666] text-[0.9rem] leading-relaxed max-w-sm">
            If you have an idea, we have the team, the tools, and the drive to build it.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-white font-semibold text-[0.9rem] px-6 py-3"
            style={{
              background: "#1A1A1A",
              borderRadius: "9999px",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#000")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1A1A1A")}
          >
            <span>Get Started</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
