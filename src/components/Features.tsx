"use client";
import React, { useState, useEffect } from "react";

export default function Features() {
  const [activeStep, setActiveStep] = useState(0);

  // Cycle through steps 0, 1, 2, 3 every 1.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Helper to get the correct icon for Workflow Automation cards
  const renderIcon = (index: number) => {
    if (activeStep > index || activeStep === 3) {
      // Completed state
      return (
        <div className="w-11 h-11 bg-[var(--foreground)] brutal-border flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      );
    } else if (activeStep === index) {
      // Loading state
      return (
        <div className="w-11 h-11 bg-[var(--color-primary)] brutal-border flex items-center justify-center shrink-0">
          <svg className="animate-spin-slow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
        </div>
      );
    } else {
      // Idle state
      return (
        <div className="w-11 h-11 bg-[var(--background-secondary)] brutal-border flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
        </div>
      );
    }
  };

  // Reusable icon components for Data & Integrations marquee
  const IconDots = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[var(--background)] brutal-border flex items-center justify-center mx-2 brutal-shadow">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><circle cx="9" cy="9" r="2"></circle><circle cx="15" cy="9" r="2"></circle><circle cx="9" cy="15" r="2"></circle><circle cx="15" cy="15" r="2"></circle><circle cx="12" cy="12" r="10"></circle></svg>
    </div>
  );
  const IconAI = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[var(--foreground)] brutal-border flex items-center justify-center mx-2 brutal-shadow">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12 2.5 7.5" /><path d="M12 12l9.5-4.5" /><path d="M12 12v10" /></svg>
    </div>
  );
  const IconNodes = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[var(--color-primary)] brutal-border flex items-center justify-center mx-2 brutal-shadow">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
    </div>
  );
  const IconAsterisk = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-transparent flex items-center justify-center mx-2">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"></path></svg>
    </div>
  );
  const IconBox = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[var(--background-secondary)] brutal-border flex items-center justify-center mx-2 brutal-shadow">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[var(--background)] py-24 border-b-[3px] border-[var(--foreground)]">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-l-[3px] border-r-[3px] border-[var(--foreground)] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16 brutal-card p-8 inline-block mx-auto max-w-4xl bg-[var(--color-primary)]">
          <span className="font-mono text-sm font-bold uppercase tracking-widest border-[3px] border-[var(--foreground)] bg-[var(--background)] px-3 py-1 mb-6 inline-block brutal-shadow">
            Capabilities
          </span>
          <h2 className="text-[3rem] md:text-[5rem] font-bold text-[var(--foreground)] leading-[1.0] tracking-tight mb-6 uppercase">
            Everything You Need <br className="hidden md:block" /> To Build What's Next.
          </h2>
          <p className="text-[1.125rem] md:text-[1.25rem] text-[var(--foreground)] font-bold max-w-2xl mx-auto leading-relaxed border-t-[3px] border-[var(--foreground)] pt-6 mt-4">
            Venture creation, product engineering, and intelligent automation. All operating under one roof.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Card 1: Venture Building */}
          <div className="group flex flex-col brutal-card h-full">
            {/* Illustration */}
            <div className="h-[280px] p-5 border-b-[3px] border-[var(--foreground)] relative flex items-center overflow-hidden bg-[var(--background-secondary)]">
              {/* The Selection Box */}
              <div className="absolute top-8 left-6 right-6 bottom-[-20px] border-t-[3px] border-l-[3px] border-[var(--foreground)]">
                <div className="absolute -top-[7.5px] -left-[7.5px] w-[12px] h-[12px] border-[3px] border-[var(--foreground)] bg-[var(--color-primary)]"></div>
              </div>

              <div className="relative z-10 flex gap-6 w-full ml-8 mt-4">
                {/* Sidebar */}
                <div className="w-16 bg-[var(--background)] brutal-border brutal-shadow flex flex-col items-center py-4 gap-5 relative">
                  <div className="absolute -left-5 top-2 transform rotate-[-15deg] transition-transform duration-200 group-hover:translate-x-1">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--foreground)" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinejoin="miter"><path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L5.5 3.21z" /></svg>
                  </div>
                  <div className="w-10 h-10 bg-[var(--color-primary)] brutal-border flex items-center justify-center absolute top-2 left-2 brutal-shadow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                  </div>

                  <div className="mt-16 text-[var(--foreground)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                  </div>
                  <div className="text-[var(--foreground)] font-mono text-xl font-bold">
                    T
                  </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 flex flex-col gap-4 pr-4">
                  {/* Row 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[var(--background)] brutal-border brutal-shadow flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="3"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" /></svg>
                    </div>
                    <div className="px-4 py-2 bg-[var(--background)] brutal-border font-bold text-[var(--foreground)] uppercase text-xs tracking-wider">Primary</div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[var(--foreground)] brutal-border brutal-shadow flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" /></svg>
                    </div>
                    <div className="px-4 py-2 bg-[var(--foreground)] brutal-border font-bold text-[var(--color-primary)] uppercase text-xs tracking-wider">Secondary</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 flex-1 flex flex-col justify-start bg-[var(--background)]">
              <span className="font-mono font-bold text-[var(--foreground)] bg-[var(--color-primary)] border-[3px] border-[var(--foreground)] px-2 py-1 text-xs mb-4 self-start brutal-shadow tracking-widest">01</span>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 uppercase">Venture Building</h3>
              <p className="text-[var(--foreground)] font-mono text-sm leading-relaxed border-t-[3px] border-[var(--foreground)] pt-4">We conceive, fund, and build independent digital businesses from the ground up — fully owned and operated within the studio.</p>
            </div>
          </div>

          {/* Card 2: AI Product Development */}
          <div className="group flex flex-col brutal-card h-full">
            {/* Illustration */}
            <div className="h-[280px] border-b-[3px] border-[var(--foreground)] flex flex-col justify-center gap-6 relative overflow-hidden bg-[var(--background-secondary)]">
              {/* Masks removed for brutalist sharp edges, let them bleed */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--background-secondary)] to-transparent z-10 pointer-events-none opacity-80"></div>
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--background-secondary)] to-transparent z-10 pointer-events-none opacity-80"></div>

              {/* Marquee Row 1 */}
              <div className="flex w-full">
                <div className="animate-marquee-left flex items-center">
                  <IconDots /><IconAI /><IconNodes /><IconAsterisk /><IconBox />
                  <IconDots /><IconAI /><IconNodes /><IconAsterisk /><IconBox />
                  <IconDots /><IconAI /><IconNodes /><IconAsterisk /><IconBox />
                </div>
              </div>

              {/* Marquee Row 2 */}
              <div className="flex w-full ml-[-40px]">
                <div className="animate-marquee-right flex items-center">
                  <IconBox /><IconNodes /><IconAI /><IconAsterisk /><IconDots />
                  <IconBox /><IconNodes /><IconAI /><IconAsterisk /><IconDots />
                  <IconBox /><IconNodes /><IconAI /><IconAsterisk /><IconDots />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 flex-1 flex flex-col justify-start bg-[var(--background)]">
              <span className="font-mono font-bold text-[var(--foreground)] bg-[var(--color-primary)] border-[3px] border-[var(--foreground)] px-2 py-1 text-xs mb-4 self-start brutal-shadow tracking-widest">02</span>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 uppercase">AI Development</h3>
              <p className="text-[var(--foreground)] font-mono text-sm leading-relaxed border-t-[3px] border-[var(--foreground)] pt-4">From intelligent interview systems to autonomous agent platforms — we engineer specialized AI products built for real market needs.</p>
            </div>
          </div>

          {/* Card 3: Shared Infrastructure */}
          <div className="group flex flex-col brutal-card h-full">
            {/* Illustration */}
            <div className="h-[280px] border-b-[3px] border-[var(--foreground)] relative overflow-hidden bg-[var(--background)]">
              {/* Horizontal Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-6">
                <div className="w-full h-[3px] bg-[var(--foreground)] opacity-20"></div>
                <div className="w-full h-[3px] bg-[var(--foreground)] opacity-20"></div>
                <div className="w-full h-[3px] bg-[var(--foreground)] opacity-20"></div>
                <div className="w-full h-[3px] bg-[var(--foreground)] opacity-20"></div>
                <div className="w-full h-[3px] bg-[var(--foreground)] opacity-20"></div>
              </div>

              {/* Charts (SVG) */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 280">
                <path d="M0,230 L40,190 L80,240 L140,150 L200,190 L260,140 L320,200 L380,120 L400,170 L400,280 L0,280 Z" fill="var(--color-primary)" stroke="var(--foreground)" strokeWidth="3" />
                <path d="M0,250 L30,220 L90,100 L150,180 L210,150 L280,240 L330,210 L380,140 L400,190" fill="none" stroke="var(--foreground)" strokeWidth="4" />

                {/* Connecting line */}
                <line x1="90" y1="100" x2="90" y2="280" stroke="var(--foreground)" strokeWidth="3" strokeDasharray="6 6" />
                {/* Dots at peaks */}
                <circle cx="90" cy="100" r="8" fill="var(--foreground)" stroke="var(--background)" strokeWidth="3" className="transition-transform duration-200 group-hover:scale-125 origin-[90px_100px]" />
                <circle cx="90" cy="150" r="8" fill="var(--color-primary)" stroke="var(--foreground)" strokeWidth="3" className="transition-transform duration-200 group-hover:scale-125 origin-[90px_150px]" />
              </svg>

              {/* Tooltip */}
              <div className="absolute top-8 left-28 brutal-card p-4 z-10 transition-transform duration-200">
                <div className="text-sm font-bold text-[var(--foreground)] mb-3 font-mono border-b-[3px] border-[var(--foreground)] pb-2 uppercase tracking-widest">Q1 2025</div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm font-mono font-bold">
                    <span className="text-[var(--foreground)]">Ventures</span>
                    <span className="text-[var(--foreground)] bg-[var(--color-primary)] px-2 border-[2px] border-[var(--foreground)] ml-4">4</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-mono font-bold">
                    <span className="text-[var(--foreground)]">Uptime</span>
                    <span className="text-[var(--foreground)] bg-[var(--background-secondary)] px-2 border-[2px] border-[var(--foreground)] ml-4">99%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-8 flex-1 flex flex-col justify-start bg-[var(--background)]">
              <span className="font-mono font-bold text-[var(--foreground)] bg-[var(--color-primary)] border-[3px] border-[var(--foreground)] px-2 py-1 text-xs mb-4 self-start brutal-shadow tracking-widest">03</span>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 uppercase">Shared Infrastructure</h3>
              <p className="text-[var(--foreground)] font-mono text-sm leading-relaxed border-t-[3px] border-[var(--foreground)] pt-4">Every venture we build runs on the same foundation — so nothing starts from scratch and nothing slows down.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
