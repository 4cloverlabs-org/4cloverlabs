"use client";
import React from "react";

export default function WhyUs() {
  const soloFounderItems = [
    "One idea, no portfolio diversification",
    "Burns out before product-market fit",
    "No shared infrastructure or tooling",
    "Fundraising takes priority over building",
    "Pivots kill momentum entirely"
  ];

  const traditionalStudioItems = [
    "Outsource the actual building",
    "Equity-heavy, founder-unfriendly terms",
    "Generic playbooks, not domain-specific",
    "Slow to move — committees at every step",
    "Exit-driven, not built for longevity"
  ];

  const usItems = [
    "Fully internal — we build what we own",
    "Shared infrastructure across every venture",
    "AI-native from day one, not bolted on",
    "Founders with deep technical and product depth",
    "Built for sustainable value, not quick exits"
  ];

  const renderXIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" className="shrink-0 mt-0.5 opacity-50">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const renderCheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" className="shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <section className="relative w-full overflow-visible bg-[var(--background)] py-32 border-b-[3px] border-[var(--foreground)]">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-l-[3px] border-r-[3px] border-[var(--foreground)] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 border-[3px] border-[var(--foreground)] bg-[var(--color-primary)] mb-8 brutal-shadow">
            <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-widest font-mono">
              WHY US
            </span>
          </div>

          <h2 className="text-[3.5rem] md:text-[5.5rem] font-bold text-[var(--foreground)] leading-[1.0] tracking-tight mb-4 uppercase">
            A Studio Built to Last.
          </h2>
        </div>

        {/* Comparison Table / Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Light Container (Freelance & Agencies) */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-8">

            {/* Solo Founders */}
            <div className="flex-1 brutal-card p-8 md:p-10 bg-[var(--background-secondary)]">
              <h3 className="font-bold text-2xl md:text-3xl text-[var(--foreground)] mb-8 uppercase font-mono border-b-[3px] border-[var(--foreground)] pb-4">Solo Founders</h3>
              <ul className="flex flex-col gap-6">
                {soloFounderItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[var(--foreground)]">
                    {renderXIcon()}
                    <span className="font-bold text-[1.1rem] leading-tight font-mono opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional Studios */}
            <div className="flex-1 brutal-card p-8 md:p-10 bg-[var(--background-secondary)]">
              <h3 className="font-bold text-2xl md:text-3xl text-[var(--foreground)] mb-8 uppercase font-mono border-b-[3px] border-[var(--foreground)] pb-4">Traditional Studios</h3>
              <ul className="flex flex-col gap-6">
                {traditionalStudioItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[var(--foreground)]">
                    {renderXIcon()}
                    <span className="font-bold text-[1.1rem] leading-tight font-mono opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dark Container (Working with Us) */}
          <div className="lg:w-1/3 brutal-card p-8 md:p-10 bg-[var(--foreground)] border-l-0 text-[var(--background)]">
            <h3 className="font-bold text-2xl md:text-3xl text-[var(--color-primary)] mb-8 uppercase font-mono border-b-[3px] border-[var(--color-primary)] pb-4">4CloverLabs</h3>
            <ul className="flex flex-col gap-6">
              {usItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[var(--color-primary)]">
                  {renderCheckIcon()}
                  <span className="font-bold text-[1.1rem] leading-tight text-[var(--background)] font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
