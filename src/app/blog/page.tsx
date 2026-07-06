"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FEATURED_POST, GRID_POSTS } from "@/data/blog-posts";

/* ─── TAG PILL ───────────────────────────────────────────── */

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-[#FFD075] border-[3px] border-black text-black text-xs font-black uppercase tracking-widest font-mono shadow-[2px_2px_0px_rgba(0,0,0,1)]">
      {tag}
    </span>
  );
}

function DatePill({ date }: { date: string }) {
  return (
    <span className="inline-flex items-center px-4 py-1 border-[3px] border-black bg-white text-black text-xs font-bold tracking-widest uppercase font-mono shadow-[2px_2px_0px_rgba(0,0,0,1)]">
      {date}
    </span>
  );
}

/* ─── DOT GRID PATTERN COMPONENT ───────────────────────────────── */

function DotPattern({ rows = 3, cols = 4, className = "" }: { rows?: number; cols?: number; className?: string }) {
  return (
    <div
      className={`grid gap-1.5 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FF9E66]" />
      ))}
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */

export default function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F2E9] text-black overflow-x-hidden">
      <Header />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="border-b-[3px] border-black pt-32 pb-16 px-6 lg:px-16 overflow-hidden relative">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        ></div>

        {/* Scattered Background Dot Patterns */}
        <DotPattern rows={4} cols={4} className="absolute left-10 top-12 opacity-80 hidden md:grid" />
        <DotPattern rows={3} cols={5} className="absolute right-12 top-24 opacity-80 hidden md:grid" />
        <DotPattern rows={3} cols={3} className="absolute left-1/3 bottom-8 opacity-80 hidden md:grid" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 border-[3px] border-black bg-[#FFD075] text-xs font-bold uppercase tracking-widest font-mono mb-8 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            Insights
          </div>
          {/* Large title */}
          <h1 className="text-[3.5rem] md:text-[6.5rem] font-black tracking-tighter leading-[0.95] uppercase mb-16 text-black">
            The Latest,<br />from 4CloverLabs
          </h1>

          {/* Sub-row: description + email | featured image */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: desc + subscribe */}
            <div className="w-full lg:w-5/12 flex flex-col pt-6 border-t-[3px] border-black relative">
              <p className="text-lg font-mono font-bold leading-relaxed mb-10 max-w-sm">
                Insights on AI strategy, automation engineering, and building
                systems that actually work — straight from the team at 4CloverLabs.
              </p>

              {/* Subscribe */}
              {subscribed ? (
                <p className="font-mono font-black text-black bg-[#FFD075] px-4 py-3.5 border-[3px] border-black inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  ✓ You're subscribed!
                </p>
              ) : (
                <div className="flex flex-wrap gap-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-[200px] px-6 py-4 border-[3px] border-black bg-[#ECE7D7] text-black font-mono font-bold placeholder-gray-600 focus:outline-none focus:ring-0 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                  />
                  <button
                    onClick={() => {
                      if (email.includes("@")) setSubscribed(true);
                    }}
                    className="border-[3px] border-black bg-[#FF9E66] text-black font-extrabold text-sm px-8 py-4 uppercase tracking-widest flex-shrink-0 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>

            {/* Right: featured hero image — clickable */}
            <Link
              href={`/blog/${FEATURED_POST.slug}`}
              className="w-full lg:w-7/12 border-[3px] border-black bg-black overflow-hidden aspect-[16/10] block brutal-shadow group relative"
            >
              <Image
                src={FEATURED_POST.img}
                alt={FEATURED_POST.title}
                width={900}
                height={562}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
                priority
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED POST DETAILS ──────────────────────────────── */}
      <section className="px-6 lg:px-16 pt-8 pb-20 bg-[#F5F2E9]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <Link
            href={`/blog/${FEATURED_POST.slug}`}
            className="w-full lg:w-5/12 border-[3px] border-black bg-black overflow-hidden aspect-[16/10] block brutal-shadow group relative"
          >
            <Image
              src={FEATURED_POST.img}
              alt={FEATURED_POST.title}
              width={600}
              height={375}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
            />
          </Link>

          <Link
            href={`/blog/${FEATURED_POST.slug}`}
            className="block w-full lg:w-7/12 pt-6 border-t-[3px] border-black group"
          >
            <h2 className="text-3xl md:text-[2.6rem] font-black uppercase tracking-tight leading-[1.1] mb-4 text-black group-hover:text-[#FF9E66] transition-colors duration-200">
              {FEATURED_POST.title}
            </h2>
            <p className="text-lg font-mono font-bold leading-relaxed mb-6 opacity-80 max-w-2xl">
              {FEATURED_POST.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <TagPill tag={FEATURED_POST.tag} />
              <DatePill date={FEATURED_POST.date} />
            </div>
          </Link>
        </div>
      </section>

      {/* ── POST GRID ──────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 pb-32 bg-[#F5F2E9] border-t-[3px] border-black relative">
        {/* Subtle background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10 mt-16">
          {/* 2-column grid of post cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t-[3px] border-l-[3px] border-black">
            {GRID_POSTS.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`flex flex-col sm:flex-row gap-8 p-8 lg:p-12 border-b-[3px] border-r-[3px] border-black group hover:bg-[#ECE7D7] transition-colors duration-200`}
              >
                {/* Thumbnail */}
                <div className="w-full sm:w-[180px] aspect-square flex-shrink-0 border-[3px] border-black bg-black overflow-hidden brutal-shadow relative">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={360}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between gap-6 flex-1 pt-4 border-t-[3px] border-black sm:border-t-0 sm:pt-0">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight leading-tight mb-4 text-black group-hover:text-[#FF9E66] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-sm font-mono font-bold leading-relaxed opacity-80">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <TagPill tag={post.tag} />
                    <DatePill date={post.date} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More coming soon */}
          <div className="mt-20 p-12 border-[3px] border-black brutal-shadow bg-[#ECE7D7] text-center max-w-3xl mx-auto">
            <p className="font-mono font-bold text-lg uppercase tracking-widest text-black">
              More posts coming soon — subscribe above to stay in the loop.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
