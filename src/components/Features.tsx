"use client";
import React from "react";
import { motion } from "framer-motion";
import { BlueprintGrid } from "./AbstractPatterns";

export default function Features() {
  const featuresData = [
    {
      title: "Venture Building",
      description: "We conceive, fund, and build intelligent digital businesses from the ground up. Fully owned and operated within the studio.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
      checks: ["Validation", "Strategy", "MVP", "Go-to-Market"]
    },
    {
      title: "AI Development",
      description: "From intelligent automations to autonomous agent platforms - we engineer custom AI products built for real-world impact.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      checks: ["Custom Agents", "Workflow Automation", "LLM Integration", "RAG Systems"]
    },
    {
      title: "Shared Infrastructure",
      description: "Every venture we build runs on the same foundation - enabling faster time to market and scaling with ease.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      checks: ["Cloud Native", "DevOps Pipelines", "Security by Design", "Scalable Data"]
    }
  ];

  return (
    <section className="relative w-full py-24 z-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-4 inline-block px-3 py-1.5 border border-neutral-200 rounded-full bg-white/50 backdrop-blur-sm">
            CAPABILITIES
          </span>
          <h2 className="font-sans text-[clamp(2rem,4vw,3.5rem)] font-medium text-neutral-900 leading-[1.1] tracking-tight mb-6 max-w-2xl">
            Everything you need to build what's next.
          </h2>
          <p className="font-sans text-lg text-neutral-500 font-normal max-w-xl mx-auto leading-relaxed">
            Venture creation, product engineering, and intelligent automation. All operating under one roof.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative flex flex-col h-[520px] rounded-2xl overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
            >
              {/* Internal Blueprint Background */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <BlueprintGrid opacity={0.08} className="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/90" />
              </div>

              <div className="relative z-10 flex flex-col h-full p-10">
                
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 text-[#ff4f00] bg-white border border-neutral-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>

                <h3 className="font-mono text-xl font-semibold text-neutral-900 mb-4 tracking-tight uppercase">
                  {item.title}
                </h3>
                
                <div className="w-8 h-px bg-neutral-300 mb-6" />

                <p className="font-sans text-neutral-600 leading-relaxed mb-8 text-[15px]">
                  {item.description}
                </p>

                <div className="flex-1" />

                {/* Checkmarks */}
                <ul className="space-y-3 mb-8">
                  {item.checks.map((check, i) => (
                    <li key={i} className="flex items-center text-[13px] font-medium text-neutral-700">
                      <svg className="w-4 h-4 mr-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {check}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a href="#" className="inline-flex items-center text-sm font-semibold text-neutral-900 mt-auto group/link">
                  Learn More
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1 text-[#ff4f00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
