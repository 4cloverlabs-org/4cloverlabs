"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 z-20 flex flex-col items-center justify-center min-h-[600px] overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/cta.png')", backgroundPosition: "center 85%" }}
      />
      <div className="absolute inset-0 z-0 bg-black/60 mix-blend-multiply" />
      
      {/* Abstract Animated Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border border-white/10 rounded-full border-dashed"
        />
      </div>

      {/* Content Container (Glassmorphism Card) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[90%] max-w-4xl mx-auto p-12 md:p-20 flex flex-col items-center text-center gap-10 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
      >
        <div className="flex flex-col gap-6 items-center">
          <span className="font-mono text-xs font-semibold text-orange-300 uppercase tracking-[0.2em]">
            Ready to Build
          </span>
          <h2 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-medium text-white leading-[1.05] tracking-tight max-w-[800px]">
            Stop sitting on ideas.<br/>Start building.
          </h2>
          <p className="font-sans text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-[600px]">
            If you have a bold idea, we have the engineering team, the shared tools, and the drive to build it.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)]"
          >
            Get Started
            <motion.svg 
              className="ml-2 w-4 h-4 text-[#ff4f00]" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </motion.svg>
          </Link>
          
          <Link 
            href="/about" 
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
          >
            Learn More
            <motion.svg 
              className="ml-2 w-4 h-4 text-white" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 2, y: -2 }}
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </motion.svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
