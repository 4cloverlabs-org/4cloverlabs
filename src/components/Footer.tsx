"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white border-t border-white/10 pt-20 pb-8 z-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/10">

          {/* Brand & Mission (Col 1-5) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
              <img
                src="/4cloverlabs-black-withoutbg.png"
                alt="4CloverLabs Logo"
                style={{
                  width: "1.75rem",
                  height: "1.75rem",
                  objectFit: "contain",
                }}
              />
              <span style={{
                fontSize: "1.25rem",
                fontFamily: "var(--font-sans), sans-serif",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.03em",
              }}>
                4cloverlabs
              </span>
            </Link>
            <p className="font-sans text-sm text-neutral-400 leading-relaxed max-w-sm m-0">
              We build AI systems and launch independent ventures. A focused studio process that takes a raw concept to a live, revenue-ready business.
            </p>
            <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-2">
              Building companies since 2025.
            </div>
          </div>

          {/* Nav Links Wrapper (Col 6-9) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {/* Pages Navigation */}
            <div className="flex flex-col gap-6">
              <h3 className=" text-[11px] font-semibold text-neutral-500 uppercase tracking-widest m-0">
                Pages
              </h3>
              <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                <li><Link href="/" className="font-sans text-sm text-neutral-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="font-sans text-sm text-neutral-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="font-sans text-sm text-neutral-300 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/blog" className="font-sans text-sm text-neutral-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="font-sans text-sm text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Sections Navigation */}
            <div className="flex flex-col gap-6">
              <h3 className=" text-[11px] font-semibold text-neutral-500 uppercase tracking-widest m-0">
                Sections
              </h3>
              <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                <li><Link href="/#capabilities" className="font-sans text-sm text-neutral-300 hover:text-white transition-colors">What We Do</Link></li>
                <li><Link href="/#process" className="font-sans text-sm text-neutral-300 hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="/#contact" className="font-sans text-sm text-neutral-300 hover:text-white transition-colors">Get in Touch</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter (Col 10-12) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h3 className=" text-[11px] font-semibold text-neutral-500 uppercase tracking-widest m-0">
              Signal
            </h3>
            <p className="font-sans text-sm text-neutral-400 m-0">
              Updates on what we're building. No spam.
            </p>
            <form className="flex w-full mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-2.5 text-sm font-semibold rounded-r-lg hover:bg-neutral-200 transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            © {new Date().getFullYear()} 4CLOVERLABS
          </div>

          <div className="flex items-center gap-6">
          </div>
        </div>

      </div>
    </footer>
  );
}
