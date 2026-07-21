"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const opacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);
  const y = useTransform(smoothProgress, [0, 0.75], [0, 60]);
  const scale = useTransform(smoothProgress, [0, 0.75], [1, 0.96]);

  return (
    <section ref={containerRef} className="relative w-full flex flex-col justify-between overflow-hidden bg-transparent z-10 min-h-screen">

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-[url('/bg_hero.png')] bg-cover bg-center bg-no-repeat z-0 pointer-events-none">
        {/* Gradient overlay to blend smoothly into the content below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-[#FAFAFA]"></div>
      </div>

      {/* Main Content with Smooth Scroll Parallax */}
      <motion.div 
        style={{ opacity, y, scale }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-5xl mx-auto w-full pt-[20vh] pb-16 will-change-transform"
      >
        {/* Headline (Elegant Serif) */}
        <h1 className="text-[clamp(3rem,8vw,6rem)] text-neutral-900 leading-[1] tracking-tight mb-6 max-w-4xl mx-auto whitespace-pre-line">
          Engineering Intelligent Systems{"\n"}Built for Scalable Growth.
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-neutral-800 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
          4CloverLabs is a venture studio that conceives, builds, and operates AI-native businesses — entirely in-house, from idea to launch.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-2">
          {/* Primary Button */}
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-4 pl-6 pr-1.5 py-1.5 bg-[#1a1a1a] text-white rounded-[1rem] font-sans text-[15px] font-medium transition-all hover:bg-black shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
          >
            Talk to us
            <span className="w-9 h-9 rounded-[0.6rem] bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-inner shadow-white/20 transition-transform group-hover:scale-105">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5H7M19 5v12"></path></svg>
            </span>
          </a>
        </div>
      </motion.div>

      {/* Bottom Bar: Avatars + Scrolling Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-full bg-[#FAFAFA] flex flex-col md:flex-row items-stretch h-auto md:h-20 overflow-hidden pt-8 md:pt-0"
      >

        {/* Left Side: Avatars and Stars */}
        <div className="flex items-center gap-4 px-6 py-4 md:py-0 bg-transparent min-w-max">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center overflow-hidden relative z-30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center overflow-hidden relative z-20 p-[2px]">
              <img src="/linksmeet.png" alt="LinksMeet Logo" className="w-full h-full object-contain" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center overflow-hidden relative z-10 p-[2px]">
              <img src="/logo-mail.jpg" alt="Mail Logo" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-0.5 text-orange-500">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            </div>
            <span className="text-[11px] font-medium text-neutral-600 mt-0.5">
              <strong className="text-neutral-900">5+</strong> ventures created
            </span>
          </div>
        </div>

        {/* Right Side: Infinite Scrolling Logos */}
        <div className="flex-1 flex items-center overflow-hidden whitespace-nowrap bg-transparent py-4 md:py-0 relative">

          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track - Using percentage translation for seamless infinite loop */}
          <div className="flex overflow-hidden w-full">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex items-center gap-12 min-w-max will-change-transform"
            >
              {/* Duplicate array twice to ensure seamless continuous scroll */}
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-12 shrink-0">
                  {[...Array(4)].map((_, i) => (
                    <React.Fragment key={i}>
                      {/* Expantra Logo */}
                      <div className="flex items-center justify-center shrink-0 px-4 transition-all cursor-default">
                        <div className="flex items-center gap-2">
                          <img src="/logo-mail.jpg" alt="SailMail" className="w-7 h-7 object-cover rounded-full" />
                          <span className="text-xl font-bold tracking-tight text-neutral-900">EXPANTRA</span>
                        </div>
                      </div>

                      {/* LinksMeet Logo */}
                      <div className="flex items-center justify-center shrink-0 px-4 transition-all cursor-default">
                        <div className="flex items-center gap-2">
                          <img src="/linksmeet.png" alt="LinksMeet" className="w-7 h-7 object-contain" />
                          <span className="text-[1.35rem] font-bold text-neutral-900 tracking-tight">LinksMeet</span>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
