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
    image: "/ourprocess/1.png",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
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
    image: "/ourprocess/2.png",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
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
    image: "/ourprocess/3.png",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
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
    image: "/ourprocess/4.png",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
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
    <section className="relative w-full overflow-visible bg-[var(--background-secondary)] py-24 md:py-32 px-4 sm:px-6 border-b-[3px] border-[var(--foreground)]">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-l-[3px] border-r-[3px] border-[var(--foreground)] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-primary)] border-[3px] border-[var(--foreground)] brutal-shadow mb-8">
          <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-widest font-mono">
            OUR PROCESS
          </span>
        </div>

        <h2 className="text-4xl md:text-[5rem] font-bold text-[var(--foreground)] leading-[1.0] tracking-tight mb-8 text-center uppercase">
          Built for high performance
        </h2>
        <p className="text-lg md:text-xl text-[var(--foreground)] font-mono font-bold leading-relaxed max-w-3xl text-center mb-16 bg-[var(--background)] p-6 border-[3px] border-[var(--foreground)] brutal-shadow">
          A focused studio process that takes a raw concept to a live, revenue-ready venture — without the overhead of an agency or the chaos of a solo build.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 w-full max-w-5xl">
          {processSteps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-1 min-w-[160px] px-6 py-4 border-[3px] border-[var(--foreground)] text-sm md:text-base font-bold uppercase tracking-widest transition-all duration-150 flex flex-col items-center justify-center gap-3 brutal-btn ${
                  isActive
                    ? "bg-[var(--foreground)] text-[var(--color-primary)] shadow-[6px_6px_0px_var(--color-primary)] transform -translate-y-1 -translate-x-1"
                    : "bg-[var(--background)] text-[var(--foreground)]"
                }`}
                style={{
                  boxShadow: isActive ? "8px 8px 0px var(--foreground)" : "4px 4px 0px var(--foreground)"
                }}
              >
                <span className={isActive ? "text-[var(--color-primary)]" : "text-[var(--foreground)]"}>
                  {step.icon}
                </span>
                {step.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="w-full bg-[var(--background)] border-[3px] border-[var(--foreground)] p-6 md:p-12 lg:p-16 brutal-shadow flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

          {/* Left Visual Area */}
          <div className="w-full lg:w-1/2 min-h-[300px] md:h-[400px] border-[3px] border-[var(--foreground)] overflow-hidden bg-[var(--foreground)] relative flex items-center justify-center group brutal-shadow">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black/20 z-10 pointer-events-none"></div>
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
            />
          </div>

          {/* Right Text Area */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left justify-center">
            <div className="inline-block px-4 py-2 border-[3px] border-[var(--foreground)] bg-[var(--color-primary)] text-[var(--foreground)] text-[12px] font-bold uppercase tracking-widest mb-6 font-mono brutal-shadow">
              {activeStep.duration}
            </div>

            <div className="flex items-center gap-4 mb-4 border-b-[3px] border-[var(--foreground)] pb-4 w-full">
              <span className="text-4xl font-bold text-[var(--foreground)] font-mono opacity-50">
                {activeStep.num}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[var(--foreground)] leading-[1.1] uppercase">
                {activeStep.title}
              </h3>
            </div>

            <p className="text-[1.125rem] text-[var(--foreground)] leading-relaxed font-mono font-medium mt-4">
              {activeStep.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
