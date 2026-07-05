"use client";

import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[var(--background)] py-24 px-6 overflow-hidden border-b-[3px] border-[var(--foreground)]"
    >
      {/* High-contrast block serving as a bold interruption */}
      <div
        className="relative w-full max-w-6xl mx-auto brutal-card bg-[var(--foreground)] p-8 md:p-16 flex flex-col items-center text-center brutal-shadow"
      >
        {/* Blueprint Grid Overlay for texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(to right, var(--background) 2px, transparent 2px), linear-gradient(to bottom, var(--background) 2px, transparent 2px)",
            backgroundSize: "40px 40px"
          }}
        ></div>

        {/* Corner bracket decorations */}
        <div className="absolute inset-0 pointer-events-none p-4">
          {/* Top-left bracket */}
          <svg className="absolute top-4 left-4" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M32 3H3V32" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
          {/* Top-right bracket */}
          <svg className="absolute top-4 right-4" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M0 3H29V32" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
          {/* Bottom-left bracket */}
          <svg className="absolute bottom-4 left-4" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M32 29H3V0" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
          {/* Bottom-right bracket */}
          <svg className="absolute bottom-4 right-4" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M0 29H29V0" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-10 max-w-3xl w-full">
          {/* Editorial Label */}
          <span className="font-mono text-[var(--foreground)] bg-[var(--color-primary)] border-[3px] border-[var(--color-primary)] px-4 py-2 font-bold uppercase tracking-widest text-sm self-center">
            Ready to deploy?
          </span>

          {/* Heading */}
          <h2 className="text-[3rem] md:text-[5rem] font-bold text-[var(--background)] leading-[1.0] tracking-tight uppercase">
            Stop sitting on ideas.<br />
            <span className="text-[var(--color-primary)]">Start building.</span>
          </h2>

          {/* Body text */}
          <p className="font-mono text-[var(--background-secondary)] text-[1.125rem] md:text-[1.25rem] leading-relaxed max-w-lg font-medium border-t-[3px] border-[var(--background)] opacity-80 pt-6">
            If you have an idea, we have the team, the tools, and the drive to build it.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group brutal-btn bg-[var(--color-primary)] text-[var(--foreground)] font-bold text-lg px-8 py-4 mt-4 inline-flex items-center gap-3 uppercase tracking-wider"
          >
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
