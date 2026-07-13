"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col justify-between overflow-hidden bg-transparent z-10 min-h-screen">

      {/* Top Dark Textured Header Area */}
      <div className="absolute top-0 left-0 w-full h-[45vh] bg-[#0a0a0a] rounded-b-[2rem] sm:rounded-b-[3rem] overflow-hidden shadow-2xl z-0">
        <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        {/* Subtle mesh gradient to give it depth like the reference image */}
        <div className="absolute top-0 left-1/4 w-[50%] h-[100%] bg-white/5 rounded-full blur-[100px] mix-blend-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-5xl mx-auto w-full pt-[45vh] mt-16 mb-16">

        {/* Headline */}
        <h1 className="font-sans text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-neutral-900 leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
          Scientific AI Systems
          for Structured Growth
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-neutral-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          4CloverLabs is a premium studio for AI-driven businesses that<br className="hidden md:block" />
          value clarity, logic, and scalable systems — not hype.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="/process"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-[#111111] text-white rounded-md font-mono text-xs font-semibold tracking-[0.15em] uppercase transition-all shadow-[0_0_0_2px_rgba(255,255,255,0.1)_inset] hover:bg-black"
          >
            See how it works
          </a>
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-white text-neutral-900 border border-neutral-200 rounded-md font-mono text-xs font-semibold tracking-[0.15em] uppercase transition-all shadow-sm hover:bg-neutral-50"
          >
            Talk to us
          </a>
        </div>
      </div>

      {/* Bottom Bar: Avatars + Scrolling Logos */}
      <div className="relative z-10 w-full border-t border-b border-dashed border-neutral-200 bg-[#FAFAFA] flex flex-col md:flex-row items-stretch h-auto md:h-20 overflow-hidden">

        {/* Left Side: Avatars and Stars */}
        <div className="flex items-center gap-4 px-6 py-4 md:py-0 border-b md:border-b-0 md:border-r border-dashed border-neutral-200 bg-white/50 min-w-max">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=f3f4f6" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=f3f4f6" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Leo&backgroundColor=f3f4f6" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Sam&backgroundColor=f3f4f6" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-0.5 text-[#ff4f00]">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            </div>
            <span className="text-[11px] font-medium text-neutral-600 mt-0.5">
              <strong className="text-neutral-900">200+</strong> Satisfied teams
            </span>
          </div>
        </div>

        {/* Right Side: Infinite Scrolling Logos */}
        <div className="flex-1 flex items-center overflow-hidden whitespace-nowrap bg-transparent py-4 md:py-0 relative">

          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex items-center gap-12 px-6"
          >
            {/* Array is duplicated to create infinite scroll effect without gaps */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {["Anthropic", "Supabase", "Vercel", "OpenAI", "Cursor", "Github", "Stripe"].map((tech) => (
                  <div key={`${i}-${tech}`} className="flex items-center gap-2 font-bold text-lg text-neutral-400 hover:text-neutral-600 transition-colors cursor-default">
                    <div className="w-6 h-6 rounded bg-neutral-200 flex items-center justify-center text-xs text-neutral-500 font-sans shadow-inner">
                      {tech.charAt(0)}
                    </div>
                    {tech}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
