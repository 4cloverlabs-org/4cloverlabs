"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const comparisonData = [
    {
      before: "One idea with no safety net",
      after: "A portfolio of independent ventures"
    },
    {
      before: "Building alone, burning out fast",
      after: "Small, focused team that ships"
    },
    {
      before: "Starting from scratch every time",
      after: "Shared infrastructure from day one"
    },
    {
      before: "Exit pressure before product-market fit",
      after: "Built for longevity, not a quick exit"
    }
  ];

  return (
    <section className="relative w-full py-24 z-20">
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-4 inline-block px-3 py-1.5 border border-neutral-200 rounded-full bg-white/50 backdrop-blur-sm">
            WHY US
          </span>
          <h2 className=" text-[clamp(2.5rem,5vw,3.5rem)] font-medium text-neutral-900 leading-[1.1] tracking-tight mb-6">
            Most studios pitch decks. We ship products.
          </h2>
          <p className="font-sans text-lg text-neutral-500 font-normal max-w-2xl mx-auto leading-relaxed">
            The difference between an idea and a business isn't funding or strategy — it's a team that actually builds. Here is what changes when you build with us.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full bg-white border border-neutral-200/60 rounded-2xl overflow-hidden shadow-sm mb-20">
          
          {/* Table Header */}
          <div className="grid grid-cols-2 border-b border-neutral-200/60 bg-neutral-50/50">
            <div className="p-6 md:p-8 border-r border-neutral-200/60 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <span className="font-mono text-sm md:text-base font-semibold text-neutral-500 uppercase tracking-wide">
                Without 4CloverLabs
              </span>
            </div>
            <div className="p-6 md:p-8 flex items-center gap-3 bg-[#ff4f00]/5">
              <div className="w-8 h-8 rounded-full bg-[#ff4f00] flex items-center justify-center text-white shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-mono text-sm md:text-base font-semibold text-[#ff4f00] uppercase tracking-wide">
                With 4CloverLabs
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50/30 transition-colors">
                <div className="p-6 md:px-8 md:py-6 border-r border-neutral-100 text-neutral-500 text-sm md:text-base pr-8 relative">
                   <span className="opacity-0 group-hover:opacity-100 absolute left-4 top-1/2 -translate-y-1/2 text-red-300">×</span>
                   {row.before}
                </div>
                <div className="p-6 md:px-8 md:py-6 font-medium text-neutral-900 text-sm md:text-base pl-8 relative">
                   <span className="opacity-0 group-hover:opacity-100 absolute left-4 top-1/2 -translate-y-1/2 text-[#ff4f00]/40">✓</span>
                   {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Metrics (Rhythm) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-dashed border-neutral-200">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-sans font-semibold text-neutral-900 tracking-tight mb-2">20+</span>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Products</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-sans font-semibold text-[#ff4f00] tracking-tight mb-2">5</span>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Ventures</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-sans font-semibold text-neutral-900 tracking-tight mb-2">100%</span>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Founder Focus</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
