"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col justify-between overflow-hidden bg-transparent z-10 min-h-screen">

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-[url('/bg_hero.png')] bg-cover bg-center bg-no-repeat z-0 pointer-events-none">
        {/* Gradient overlay to blend smoothly into the content below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-[#FAFAFA]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 text-center max-w-5xl mx-auto w-full pt-[20vh] pb-16">


        {/* Headline (Elegant Serif) */}
        <h1 className=" text-[clamp(3rem,8vw,6rem)] text-neutral-900 leading-[1] tracking-tight mb-6 max-w-4xl mx-auto">
          Scientific AI Systems <br className="hidden md:block" />
          for Structured Growth
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-neutral-800 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          4CloverLabs is a premium studio for AI-driven businesses that<br className="hidden md:block" />
          value clarity, logic, and scalable systems - not hype.
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
      </div>

      {/* Bottom Bar: Avatars + Scrolling Logos */}
      <div className="relative z-10 w-full bg-[#FAFAFA] flex flex-col md:flex-row items-stretch h-auto md:h-20 overflow-hidden pt-8 md:pt-0">

        {/* Left Side: Avatars and Stars */}
        <div className="flex items-center gap-4 px-6 py-4 md:py-0 bg-transparent min-w-max">
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
            <div className="flex gap-0.5 text-orange-500">
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
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                {/* 4CloverLabs Logo */}
                <div className="flex items-center justify-center shrink-0 px-4 transition-all cursor-default">
                  <div className="flex items-center gap-2 font-sans">
                    <div className="flex items-center">
                      <span className="text-3xl font-black text-slate-900 tracking-tighter">4</span>
                      <div className="grid grid-cols-2 gap-0.5 ml-0.5">
                        <div className="w-2.5 h-2.5 rounded-tl-full bg-slate-900"></div>
                        <div className="w-2.5 h-2.5 rounded-tr-full bg-green-500"></div>
                        <div className="w-2.5 h-2.5 rounded-bl-full bg-slate-900"></div>
                        <div className="w-2.5 h-2.5 rounded-br-full bg-slate-900"></div>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-slate-900 tracking-tight">4cloverlabs</span>
                  </div>
                </div>

                {/* Expantra Logo */}
                <div className="flex items-center justify-center shrink-0 px-4 transition-all cursor-default">
                  <div className="flex items-center gap-2">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    <span className="text-xl font-bold tracking-widest text-neutral-900 mt-0.5">EXPANTRA</span>
                  </div>
                </div>

                {/* LinksMeet Logo */}
                <div className="flex items-center justify-center shrink-0 px-4 transition-all cursor-default">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-[#6333FF] rounded-md relative flex items-center justify-center overflow-hidden">
                      <div className="absolute top-0 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/30"></div>
                      <svg className="w-3.5 h-3.5 text-white z-10 -mt-1 ml-0.5 transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                    <span className="text-[1.35rem] font-bold text-neutral-900 tracking-tight">LinksMeet</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
