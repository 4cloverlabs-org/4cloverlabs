"use client";
import React, { useState } from "react";

const processSteps = [
  {
    id: "step-1",
    duration: "WEEKS 1–2",
    num: "01",
    title: "Identify the Opportunity",
    shortTitle: "Identify",
    desc: "We scan market gaps at the intersection of AI, automation, and emerging tech — then pressure-test the concept against our portfolio, resources, and long-term thesis.",
    color: "from-amber-200 to-yellow-400",
    image: "/ourprocess/1.png",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    id: "step-2",
    duration: "WEEKS 3–4",
    num: "02",
    title: "Define the Venture",
    shortTitle: "Define",
    desc: "We scope the product, name the business, and lock the go-to-market angle. Brand, architecture, and first-sprint priorities get defined before a single line of code is written.",
    color: "from-blue-200 to-indigo-400",
    image: "/ourprocess/2.png",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  },
  {
    id: "step-3",
    duration: "WEEKS 5–10",
    num: "03",
    title: "Build the MVP",
    shortTitle: "Build MVP",
    desc: "Our internal team ships a working product — real infrastructure, real UI, real AI integration. No outsourcing, no hand-offs. Everything built to own and scale.",
    color: "from-green-200 to-emerald-400",
    image: "/ourprocess/3.png",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: "step-4",
    duration: "WEEKS 11-12",
    num: "04",
    title: "Launch under its own Brand",
    shortTitle: "Launch",
    desc: "The venture goes live as an independent business with its own identity, domain, and market presence — backed by 4CloverLabs' infrastructure and capital from day one.",
    color: "from-purple-200 to-fuchsia-400",
    image: "/ourprocess/4.png",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    )
  }
];

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = processSteps[activeIndex];

  return (
    <section className="relative w-full overflow-visible bg-[#f0ece6] py-24 md:py-32 px-4 sm:px-6 border-b border-dashed border-gray-300">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-l border-r border-dashed border-[#DEDEDE]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-4xl md:text-[3.5rem] font-serif text-[#111] leading-[1.1] tracking-tight mb-6 text-center">
          Built for high performance
        </h2>
        <p className="text-lg md:text-xl text-[#666] font-medium leading-relaxed max-w-3xl text-center mb-16">
          A focused studio process that takes a raw concept to a live, revenue-ready venture — without the overhead of an agency or the chaos of a solo build.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 bg-black/5 p-1.5 rounded-[2rem] w-full max-w-4xl">
          {processSteps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-1 min-w-[140px] px-4 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-[15px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 ${isActive
                  ? "bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                  : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                <span className={isActive ? "text-black" : "text-gray-400"}>
                  {step.icon}
                </span>
                {step.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="w-full bg-white rounded-[2rem] p-6 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left Visual Area */}
          <div className="w-full lg:w-1/2 h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative bg-black/5">
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Text Area */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 bg-transparent text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
              {activeStep.duration}
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-sans tracking-tight font-medium text-[#111] mb-6 leading-[1.15]">
              {activeStep.title}
            </h3>

            <p className="text-[17px] text-[#666] leading-relaxed">
              {activeStep.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


