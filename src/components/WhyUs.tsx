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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const renderCheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F04020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <section className="relative w-full overflow-visible bg-[#f0ece6] py-32 border-b border-dashed border-gray-300">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-l border-r border-dashed border-[#DEDEDE]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-300 bg-transparent mb-6 shadow-sm">
            <span className="text-[10px] font-bold text-[#111] uppercase tracking-widest">
              WHY US
            </span>
          </div>

          <h2 className="text-[3.5rem] md:text-[4.5rem] font-serif text-[#111] leading-[1.05] tracking-tight mb-4">
            A Studio Built to Last.
          </h2>


        </div>

        {/* Comparison Table / Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

          {/* Light Container (Freelance & Agencies) */}
          <div className="lg:w-2/3 bg-[#F9F7F5] border border-dashed border-gray-300 rounded-[2rem] flex flex-col md:flex-row shadow-sm">

            {/* Freelance */}
            <div className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
              <h3 className="font-serif font-bold text-[22px] text-[#111] mb-8">Solo Founders</h3>
              <ul className="flex flex-col">
                {soloFounderItems.map((item, i) => (
                  <li key={i} className={`flex items-start gap-4 py-[18px] ${i !== soloFounderItems.length - 1 ? 'border-b border-dashed border-gray-300' : ''}`}>
                    {renderXIcon()}
                    <span className="font-bold text-[#111] text-[15px] leading-tight mt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Agencies */}
            <div className="flex-1 p-8 md:p-10">
              <h3 className="font-serif font-bold text-[22px] text-[#111] mb-8">Traditional VC Studios</h3>
              <ul className="flex flex-col">
                {traditionalStudioItems.map((item, i) => (
                  <li key={i} className={`flex items-start gap-4 py-[18px] ${i !== traditionalStudioItems.length - 1 ? 'border-b border-dashed border-gray-300' : ''}`}>
                    {renderXIcon()}
                    <span className="font-bold text-[#111] text-[15px] leading-tight mt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dark Container (Working with Us) */}
          <div className="lg:w-1/3 bg-[#1A1A1A] rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Subtle gradient overlay on dark box */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <h3 className="relative z-10 font-serif font-bold text-[22px] text-white mb-8">4CloverLabs</h3>
            <ul className="relative z-10 flex flex-col">
              {usItems.map((item, i) => (
                <li key={i} className={`flex items-start gap-4 py-[18px] ${i !== usItems.length - 1 ? 'border-b border-dashed border-[#333]' : ''}`}>
                  {renderCheckIcon()}
                  <span className="font-bold text-white text-[15px] leading-tight mt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
