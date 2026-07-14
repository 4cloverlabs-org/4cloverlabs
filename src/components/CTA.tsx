"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AsciiWaveBackground from "./AsciiWaveBackground";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full pt-16 pb-25 px-4 md:px-8 flex flex-col items-center justify-center z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col items-center text-center px-6 py-12 md:py-16 shadow-2xl"
      >
        {/* Animated ASCII wave background */}
        <AsciiWaveBackground />

        {/* Abstract Corner Shapes (mimicking the faint shapes in the reference image) */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white rounded-[3rem] rotate-45 pointer-events-none opacity-[0.03] blur-sm"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[450px] h-[450px] bg-white rounded-[4rem] rotate-[30deg] pointer-events-none opacity-[0.03] blur-sm"></div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold text-white leading-[1.1] tracking-tight max-w-[800px]">
            Stop sitting on ideas.<br className="hidden md:block" /> Start building.
          </h2>
          <p className="font-sans text-base md:text-xl text-white/90 font-medium leading-relaxed max-w-[650px] mb-4">
            If you have a bold idea, we have the engineering team, the shared tools, and the drive to build it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white text-neutral-900 rounded-full font-semibold text-[15px] transition-transform hover:scale-105 shadow-xl shadow-black/10"
            >
              Get Started
            </Link>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
