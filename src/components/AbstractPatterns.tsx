"use client";

import React from "react";
import { motion } from "framer-motion";

export function BlueprintGrid({ className = "", opacity = 0.05 }) {
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`} style={{ opacity }}>
      <defs>
        <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <pattern id="blueprint-grid-large" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill="url(#blueprint-grid)" />
          <path d="M 200 0 L 0 0 0 200" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-grid-large)" />
    </svg>
  );
}

export function DotGrid({ className = "", opacity = 0.1 }) {
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`} style={{ opacity }}>
      <defs>
        <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  );
}

export function NodeGraph({ className = "", opacity = 0.08 }) {
  return (
    <svg viewBox="0 0 800 600" className={`absolute pointer-events-none z-0 ${className}`} style={{ opacity }}>
      <circle cx="100" cy="100" r="4" fill="currentColor" />
      <circle cx="300" cy="50" r="4" fill="currentColor" />
      <circle cx="200" cy="250" r="4" fill="currentColor" />
      <circle cx="450" cy="200" r="6" fill="currentColor" />
      <circle cx="600" cy="100" r="4" fill="currentColor" />
      <circle cx="700" cy="350" r="4" fill="currentColor" />
      <circle cx="500" cy="450" r="4" fill="currentColor" />
      <circle cx="250" cy="450" r="4" fill="currentColor" />
      
      <line x1="100" y1="100" x2="300" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="100" y1="100" x2="200" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="300" y1="50" x2="450" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="250" x2="450" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="450" y1="200" x2="600" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="450" y1="200" x2="700" y2="350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="450" y1="200" x2="500" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="250" x2="250" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="250" y1="450" x2="500" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
}

export function AnimatedNoise({ opacity = 0.03 }) {
  return (
    <motion.div
      initial={{ transform: "translateX(0) translateY(0)" }}
      animate={{ transform: "translateX(-5%) translateY(-5%)" }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      style={{ opacity }}
      className="absolute inset-0 pointer-events-none z-50 w-[200%] h-[200%] -left-1/2 -top-1/2"
    >
      <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100 mix-blend-overlay" />
    </motion.div>
  );
}

export function SectionWatermark({ text, className = "" }: { text: string, className?: string }) {
  return (
    <div className={`absolute select-none pointer-events-none font-black text-transparent -z-10 ${className}`} 
         style={{ WebkitTextStroke: "1px rgba(0,0,0,0.03)", fontSize: "clamp(6rem, 15vw, 20rem)", lineHeight: 0.8, letterSpacing: "-0.05em" }}>
      {text}
    </div>
  );
}
