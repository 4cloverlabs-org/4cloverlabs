"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const sectionLabel = "[ WHY CHOOSE US ]";
  const sectionHeadline = "Ventures built with\nconviction, not guesswork";
  const sectionSubhead = "Every product we build is backed by real technical depth, shared infrastructure, and a team that stays invested well past launch.";

  const col1 = "4CloverLabs";
  const col2 = "Typical Studio";

  const features = [
    {
      title: "Fully internal builds",
      description: "No outsourcing, no freelancers. Every line of code is written by our own team.",
      us: true,
      them: false,
    },
    {
      title: "AI-native from day one",
      description: "We don't bolt on AI after the fact - it's built into the core of every product.",
      us: true,
      them: false,
    },
    {
      title: "Shared infrastructure",
      description: "Every venture runs on proven tooling, so teams move fast without reinventing the stack.",
      us: true,
      them: false,
    },
    {
      title: "Long-term ownership",
      description: "We operate what we build. No hand-offs, no exits, no walking away after launch.",
      us: true,
      them: false,
    },
  ];

  const stats = [
    {
      value: "4+",
      label: "Active ventures",
      sublabel: "Conceived, built, and operated entirely within the studio",
    },
    {
      value: "12+",
      label: "Products shipped",
      sublabel: "Across ventures, tools, and internal systems - all built in-house",
    },
    {
      value: "100%",
      label: "Internally owned",
      sublabel: "No clients, no briefs - everything we ship, we own",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 z-20 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <span className="font-mono text-sm font-semibold text-[#ff4f00] tracking-widest mb-6">
            {sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1] mb-6 max-w-3xl whitespace-pre-line">
            {sectionHeadline}
          </h2>
          <p className="font-sans text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            {sectionSubhead}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative w-full max-w-5xl mx-auto">

          {/* Background Highlight for 4CloverLabs */}
          <div className="absolute top-0 bottom-[-40px] right-[80px] w-[80px] sm:right-[140px] sm:w-[140px] md:right-[200px] md:w-[200px] bg-gradient-to-b from-[#ff4f00]/15 via-[#ff4f00]/5 to-transparent rounded-t-[2rem] md:rounded-t-[2.5rem] border-t border-x border-[#ff4f00]/20 pointer-events-none -z-10 shadow-[0_0_30px_rgba(255,79,0,0.05)]"></div>

          <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_140px_140px] md:grid-cols-[1fr_200px_200px] gap-y-10 md:gap-y-14 items-center">

            {/* Table Header */}
            <div className="col-span-1"></div>
            <div className="text-center text-lg md:text-xl font-serif text-neutral-900 pt-8">
              {col1}
            </div>
            <div className="text-center font-sans text-xs sm:text-sm md:text-base font-bold text-neutral-800 pt-8">
              {col2}
            </div>

            {/* Table Body */}
            {features.map((feature, idx) => (
              <React.Fragment key={idx}>
                <div className="pr-4 md:pr-12">
                  <h4 className="text-lg md:text-xl font-medium text-neutral-900 mb-2">{feature.title}</h4>
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </div>

                <div className="flex justify-center items-center">
                  {feature.us && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#ff4f00] flex items-center justify-center text-[#ff4f00] bg-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  )}
                </div>

                <div className="flex justify-center items-center">
                  {!feature.them && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-neutral-500 bg-neutral-100 flex items-center justify-center text-neutral-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="mt-24 md:mt-32 pt-16 relative flex justify-center max-w-5xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full text-center">
            {stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="flex flex-col items-center"
              >
                <div className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-[#ff4f00] mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-neutral-900 font-bold mb-3 text-lg md:text-xl">{stat.label}</div>
                <div className="text-neutral-500 text-sm max-w-[220px] leading-relaxed">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

