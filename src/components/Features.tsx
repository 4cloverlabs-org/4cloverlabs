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
    <div className="w-[60px] h-[60px] shrink-0 bg-[#E8E8E8] rounded-[1.25rem] flex items-center justify-center mx-1.5 shadow-sm">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="2"></circle><circle cx="15" cy="9" r="2"></circle><circle cx="9" cy="15" r="2"></circle><circle cx="15" cy="15" r="2"></circle><circle cx="12" cy="12" r="10" strokeWidth="2"></circle></svg>
    </div>
  );
  const IconAI = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[#111] rounded-[1.25rem] flex items-center justify-center mx-1.5 shadow-sm">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12 2.5 7.5" /><path d="M12 12l9.5-4.5" /><path d="M12 12v10" /></svg>
    </div>
  );
  const IconNodes = () => (
    <div className="w-[60px] h-[60px] shrink-0 border border-[#111] bg-white rounded-[1.25rem] flex items-center justify-center mx-1.5 shadow-sm">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
    </div>
  );
  const IconAsterisk = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-transparent opacity-40 rounded-[1.25rem] flex items-center justify-center mx-1.5">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"></path></svg>
    </div>
  );
  const IconBox = () => (
    <div className="w-[60px] h-[60px] shrink-0 bg-[#E8E8E8] rounded-[1.25rem] flex items-center justify-center mx-1.5 shadow-sm">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
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
            <div className="h-[240px] p-5 border-b border-dashed border-[#D0D0D0] relative flex items-center overflow-hidden bg-white/40">
              {/* The Selection Box */}
              <div className="absolute top-8 left-6 right-6 bottom-[-20px] border-t border-l border-[#111]">
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border border-[#111] bg-white"></div>
              </div>
              
              <div className="relative z-10 flex gap-6 w-full ml-10 mt-4">
                {/* Sidebar */}
                <div className="w-12 bg-[#F5F5F5] rounded-3xl flex flex-col items-center py-4 gap-5 shadow-sm relative">
                  <div className="absolute -left-5 top-2 transform rotate-[-20deg]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#111" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L5.5 3.21z"/></svg>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] absolute top-1 left-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  </div>
                  
                  <div className="mt-12 text-[#111]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
                  </div>
                  <div className="text-[#111]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="10" ry="6"/></svg>
                  </div>
                  <div className="text-[#999] font-serif text-lg font-bold">
                    T
                  </div>
                </div>
                
                {/* Main Area */}
                <div className="flex-1 flex flex-col gap-3.5 pr-4">
                  {/* Row 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E8E8E8] rounded-[0.8rem] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>
                    </div>
                    <div className="px-4 py-2 bg-[#E8E8E8] rounded-xl text-sm font-semibold text-[#111]">Primary</div>
                    <div className="ml-auto px-3 py-1.5 bg-[#F5F5F5] rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/></svg></div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#111] rounded-[0.8rem] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>
                    </div>
                    <div className="px-4 py-2 bg-[#111] rounded-xl text-sm font-semibold text-white">Secondary</div>
                    <div className="ml-auto px-3 py-1.5 bg-[#F5F5F5] rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/></svg></div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-[#111] bg-white rounded-[0.8rem] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>
                    </div>
                    <div className="px-4 py-2 border border-[#111] bg-white rounded-xl text-sm font-semibold text-[#111]">Outline</div>
                    <div className="ml-auto px-3 py-1.5 bg-[#F5F5F5] rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/></svg></div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-center gap-3 opacity-40">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>
                    </div>
                    <div className="px-4 py-2 text-sm font-bold text-[#111]">Ghost</div>
                    <div className="ml-auto w-16 h-8 bg-gradient-to-r from-gray-200 to-transparent rounded-full"></div>
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
            <div className="h-[240px] border-b border-dashed border-[#D0D0D0] relative overflow-hidden bg-[#F4F6F8]">
              {/* Horizontal Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-6">
                <div className="w-full h-px bg-white"></div>
                <div className="w-full h-px bg-white"></div>
                <div className="w-full h-px bg-white"></div>
                <div className="w-full h-px bg-white"></div>
                <div className="w-full h-px bg-white"></div>
              </div>
              
              {/* Charts (SVG) */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 240">
                {/* Light grey area */}
                <path d="M0,200 L40,160 L80,210 L140,120 L200,160 L260,110 L320,170 L380,90 L400,140 L400,240 L0,240 Z" fill="#E8EBED" />
                <path d="M0,200 L40,160 L80,210 L140,120 L200,160 L260,110 L320,170 L380,90 L400,140" fill="none" stroke="#B0B5C0" strokeWidth="1.5" />
                
                {/* Darker grey area */}
                <path d="M0,220 L30,190 L90,70 L150,150 L210,120 L280,210 L330,180 L380,110 L400,160 L400,240 L0,240 Z" fill="rgba(215, 220, 225, 0.7)" />
                <path d="M0,220 L30,190 L90,70 L150,150 L210,120 L280,210 L330,180 L380,110 L400,160" fill="none" stroke="#8C93A1" strokeWidth="1.5" />
                
                {/* Connecting line */}
                <line x1="90" y1="70" x2="90" y2="240" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="4 4" />
                {/* Dots at peaks */}
                <circle cx="90" cy="70" r="5" fill="#6B7280" stroke="white" strokeWidth="2" />
                <circle cx="90" cy="120" r="5" fill="#9CA3AF" stroke="white" strokeWidth="2" />
              </svg>
              
              {/* Tooltip */}
              <div className="absolute top-10 left-28 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 border border-gray-100 min-w-[200px] z-10">
                <div className="text-[13px] font-semibold text-gray-800 mb-3">Oct 15, 2023</div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#9CA3AF]"></div>
                      <span className="text-gray-500 font-medium">Unique Visitors</span>
                    </div>
                    <span className="font-bold text-gray-800">9,706</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#6B7280]"></div>
                      <span className="text-gray-500 font-medium">Total Pageviews</span>
                    </div>
                    <span className="font-bold text-gray-800">6,816</span>
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
