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
      // Completed state: dark bg, tick mark
      return (
        <div className="w-11 h-11 bg-[#1A1A1A] rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      );
    } else if (activeStep === index) {
      // Loading state: grey bg, spinning asterisk
      return (
        <div className="w-11 h-11 bg-[#E0E0E0] rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
          <svg className="animate-spin-slow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
        </div>
      );
    } else {
      // Idle state: grey bg, static asterisk (or slightly faded)
      return (
        <div className="w-11 h-11 bg-[#E0E0E0] rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 opacity-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
        </div>
      );
    }
  };

  // Reusable icon components for Data & Integrations marquee
  const IconDots = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[#f0ece6] border border-dashed border-[#C0C0C0] rounded-[1.25rem] flex items-center justify-center mx-1.5">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="2"></circle><circle cx="15" cy="9" r="2"></circle><circle cx="9" cy="15" r="2"></circle><circle cx="15" cy="15" r="2"></circle><circle cx="12" cy="12" r="10" strokeWidth="2"></circle></svg>
    </div>
  );
  const IconAI = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[#f0ece6] border border-dashed border-[#C0C0C0] rounded-[1.25rem] flex items-center justify-center mx-1.5">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12 2.5 7.5" /><path d="M12 12l9.5-4.5" /><path d="M12 12v10" /></svg>
    </div>
  );
  const IconNodes = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[#f0ece6] border border-dashed border-[#C0C0C0] rounded-[1.25rem] flex items-center justify-center mx-1.5">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
    </div>
  );
  const IconAsterisk = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[#f0ece6] border border-dashed border-[#C0C0C0] rounded-[1.25rem] flex items-center justify-center mx-1.5">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"></path></svg>
    </div>
  );
  const IconBox = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[#f0ece6] border border-dashed border-[#C0C0C0] rounded-[1.25rem] flex items-center justify-center mx-1.5">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#f0ece6] py-16 border-b border-dashed border-gray-300">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-l border-r border-dashed border-[#DEDEDE]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] md:text-[4rem] font-serif text-[#111] leading-[1.05] tracking-tight mb-4">
            Everything You Need <br className="hidden md:block" /> To Build What's Next.
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#666] max-w-2xl mx-auto font-medium leading-relaxed">
            Venture creation, product engineering, and intelligent automation <br className="hidden md:block" />All operating under one roof.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Workflow Automations */}
          <div className="flex flex-col bg-[#F9F7F5] rounded-[2rem] overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1">
            {/* Illustration */}
            <div className="h-[240px] p-5 border-b border-dashed border-[#D0D0D0] flex flex-col justify-center gap-[10px]">

              {/* Pill 1 */}
              <div className="bg-[#F9F7F5] b  order border-dashed border-[#C0C0C0] rounded-2xl p-2.5 flex items-center gap-3 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-opacity duration-300">
                {renderIcon(0)}
                <div className="flex-1 pt-1">
                  <div className="font-serif font-bold text-[#111] text-[14px] leading-tight mb-0.5">New venture scoped</div>
                  <div className="text-[8px] font-bold text-[#666] tracking-wider uppercase">IDEA → BUILD</div>
                </div>
                <div className="flex gap-[2px] pr-2 opacity-30">
                  <div className="flex flex-col gap-[2px]">
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Pill 2 */}
              <div className={`bg-[#F9F7F5] border border-dashed border-[#C0C0C0] rounded-2xl p-2.5 flex items-center gap-3 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-opacity duration-300 ${activeStep < 1 ? 'opacity-60' : 'opacity-100'}`}>
                {renderIcon(1)}
                <div className="flex-1 pt-1">
                  <div className="font-serif font-bold text-[#111] text-[14px] leading-tight mb-0.5">MVP shipped in 6 weeks</div>
                  <div className="text-[8px] font-bold text-[#666] tracking-wider uppercase">AUTOMATED</div>
                </div>
                <div className="flex gap-[2px] pr-2 opacity-30">
                  <div className="flex flex-col gap-[2px]">
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Pill 3 */}
              <div className={`bg-[#F9F7F5] border border-dashed border-[#C0C0C0] rounded-2xl p-2.5 flex items-center gap-3 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-opacity duration-300 ${activeStep < 2 ? 'opacity-60' : 'opacity-100'}`}>
                {renderIcon(2)}
                <div className="flex-1 pt-1">
                  <div className="font-serif font-bold text-[#111] text-[14px] leading-tight mb-0.5">Scaled under its own brand</div>
                  <div className="text-[8px] font-bold text-[#666] tracking-wider uppercase">0 EXTERNAL CLIENTS</div>
                </div>
                <div className="flex gap-[2px] pr-2 opacity-30">
                  <div className="flex flex-col gap-[2px]">
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#111] rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
            {/* Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
              <span className="text-[#F04020] font-bold text-xs mb-2 tracking-wide">01</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111] mb-2">Venture Building</h3>
              <p className="text-[#666] text-[14px] font-medium leading-snug">We conceive, fund, and build independent digital businesses from the ground up — fully owned and operated within the studio.</p>
            </div>
          </div>

          {/* Card 2: Data & Integrations */}
          <div className="flex flex-col bg-[#F9F7F5] rounded-[2rem] overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1">
            {/* Illustration */}
            <div className="h-[240px] border-b border-dashed border-[#D0D0D0] flex flex-col justify-center gap-3 relative overflow-hidden">
              {/* Fade Masks */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F9F7F5] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F9F7F5] to-transparent z-10 pointer-events-none"></div>

              {/* Marquee Row 1 (Right to Left) */}
              <div className="flex w-full overflow-hidden">
                <div className="animate-marquee-left">
                  <IconDots /><IconAI /><IconNodes /><IconAsterisk /><IconBox />
                  <IconDots /><IconAI /><IconNodes /><IconAsterisk /><IconBox />
                  <IconDots /><IconAI /><IconNodes /><IconAsterisk /><IconBox />
                </div>
              </div>

              {/* Marquee Row 2 (Left to Right) */}
              <div className="flex w-full overflow-hidden ml-[-20px]">
                <div className="animate-marquee-right">
                  <IconBox /><IconNodes /><IconAI /><IconAsterisk /><IconDots />
                  <IconBox /><IconNodes /><IconAI /><IconAsterisk /><IconDots />
                  <IconBox /><IconNodes /><IconAI /><IconAsterisk /><IconDots />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
              <span className="text-[#F04020] font-bold text-xs mb-2 tracking-wide">02</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111] mb-2">AI Product Development</h3>
              <p className="text-[#666] text-[14px] font-medium leading-snug">From intelligent interview systems to autonomous agent platforms — we engineer specialized AI products built for real market needs.</p>
            </div>
          </div>

          {/* Card 3: Business Consulting */}
          <div className="flex flex-col bg-[#F9F7F5] rounded-[2rem] overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1">
            {/* Illustration */}
            <div className="h-[240px] p-5 border-b border-dashed border-[#D0D0D0] flex flex-col relative">
              <div className="flex justify-between items-center mb-4 text-[9px] font-bold tracking-wider text-[#111]">
                <span>WORK AUTOMATED</span>
                <span>0–50%</span>
              </div>

              <div className="flex-1 flex gap-3 h-full pl-1">
                {/* Y-axis Labels */}
                <div className="flex flex-col justify-between h-full text-[9px] font-bold text-[#111] py-1">
                  <span>50%</span>
                  <span>40%</span>
                  <span>30%</span>
                  <span>20%</span>
                  <span>10%</span>
                  <span>0</span>
                </div>
                {/* Bars Container */}
                <div className="flex-1 flex items-end justify-start gap-[10px] relative h-full pb-5 pl-2">

                  {/* Bar 1: Highlighted & Animated */}
                  <div className="w-[38px] flex flex-col items-center justify-end relative animate-grow-1">
                    <div className="w-full h-full border border-dashed border-[#C0C0C0] bg-[#f0ece6] rounded-t-[4px] relative"></div>
                    <span className="text-[9px] font-bold text-[#F04020] absolute -bottom-4">+20%</span>
                  </div>

                  {/* Bar 2: Animated */}
                  <div className="w-[38px] flex flex-col items-center justify-end relative animate-grow-2">
                    <div className="w-full h-full border border-dashed border-[#C0C0C0] bg-transparent rounded-t-[4px] relative"></div>
                    <span className="text-[9px] font-bold text-[#111] absolute -bottom-4">FEB</span>
                  </div>

                  {/* Bar 3: Animated */}
                  <div className="w-[38px] flex flex-col items-center justify-end relative animate-grow-3">
                    <div className="w-full h-full border border-dashed border-[#C0C0C0] bg-transparent rounded-t-[4px] relative"></div>
                    <span className="text-[9px] font-bold text-[#111] absolute -bottom-4">MAR</span>
                  </div>

                  {/* Bar 4: Animated */}
                  <div className="w-[38px] flex flex-col items-center justify-end relative animate-grow-4">
                    <div className="w-full h-full border border-dashed border-[#C0C0C0] bg-transparent rounded-t-[4px] relative"></div>
                    <span className="text-[9px] font-bold text-[#111] absolute -bottom-4">APR</span>
                  </div>

                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
              <span className="text-[#F04020] font-bold text-xs mb-2 tracking-wide">03</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#111] mb-2">Shared Infrastructure</h3>
              <p className="text-[#666] text-[14px] font-medium leading-snug">Every venture runs on common capital, technical expertise, and operational frameworks — so each team moves fast without starting from zero.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
