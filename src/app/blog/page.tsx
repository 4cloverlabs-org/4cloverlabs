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
    <span className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)] border-[3px] border-[var(--foreground)] text-[var(--foreground)] text-xs font-bold uppercase tracking-widest font-mono brutal-shadow">
      {tag}
    </span>
  );
}

function DatePill({ date }: { date: string }) {
  return (
    <span className="inline-flex items-center px-4 py-1 border-[3px] border-[var(--foreground)] bg-[var(--background)] text-[var(--foreground)] text-xs font-bold tracking-widest uppercase font-mono brutal-shadow">
      {date}
    </span>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */

export default function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      <Header />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="border-b-[3px] border-[var(--foreground)] pt-32 pb-16 px-6 lg:px-16 overflow-hidden relative">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(to right, var(--foreground) 2px, transparent 2px), linear-gradient(to bottom, var(--foreground) 2px, transparent 2px)",
            backgroundSize: "40px 40px"
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block px-4 py-2 border-[3px] border-[var(--foreground)] bg-[var(--color-primary)] text-xs font-bold uppercase tracking-widest font-mono mb-8 brutal-shadow">
            Insights
          </div>
          {/* Large title */}
          <h1 className="text-[3.5rem] md:text-[6.5rem] font-bold tracking-tighter leading-[0.95] uppercase mb-16 text-[var(--foreground)]">
            The Latest,<br />from 4CloverLabs
          </h1>

          {/* Sub-row: description + email | featured image */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: desc + subscribe */}
            <div className="w-full lg:w-5/12 flex flex-col pt-6 border-t-[3px] border-[var(--foreground)]">
              <p className="text-lg font-mono font-medium leading-relaxed mb-10 max-w-sm">
                Insights on AI strategy, automation engineering, and building
                systems that actually work — straight from the team at 4CloverLabs.
              </p>

              {/* Subscribe */}
              {subscribed ? (
                <p className="font-mono font-bold text-[var(--foreground)] bg-[var(--color-primary)] px-4 py-3 border-[3px] border-[var(--foreground)] inline-block brutal-shadow">
                  ✓ You're subscribed!
                </p>
              ) : (
                <div className="flex flex-wrap gap-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-[200px] px-6 py-4 border-[3px] border-[var(--foreground)] bg-[var(--background-secondary)] text-[var(--foreground)] font-mono font-bold placeholder-gray-500 focus:outline-none focus:ring-0 brutal-shadow"
                  />
                  <button
                    onClick={() => {
                      if (email.includes("@")) setSubscribed(true);
                    }}
                    className="brutal-btn bg-[var(--color-primary)] text-[var(--foreground)] font-bold text-sm px-8 py-4 uppercase tracking-widest flex-shrink-0"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>

            {/* Right: featured hero image — clickable */}
            <Link
              href={`/blog/${FEATURED_POST.slug}`}
              className="w-full lg:w-7/12 border-[3px] border-[var(--foreground)] bg-[var(--foreground)] overflow-hidden aspect-[16/10] block brutal-shadow group relative"
            >
              <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 pointer-events-none"></div>
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
      <section className="px-6 lg:px-16 pt-8 pb-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto flex justify-end">
          <Link
            href={`/blog/${FEATURED_POST.slug}`}
            className="block w-full lg:w-7/12 pt-6 border-t-[3px] border-[var(--foreground)] group"
          >
            <h2 className="text-3xl md:text-[2.6rem] font-bold uppercase tracking-tight leading-[1.1] mb-4 text-[var(--foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
              {FEATURED_POST.title}
            </h2>
            <p className="text-lg font-mono font-medium leading-relaxed mb-6 opacity-80 max-w-2xl">
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
      <section className="px-6 lg:px-16 pb-32 bg-[var(--background)] border-t-[3px] border-[var(--foreground)]">
        <div className="max-w-7xl mx-auto">
          {/* 2-column grid of post cards */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {GRID_POSTS.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`flex flex-col sm:flex-row gap-8 p-8 lg:p-12 border-b-[3px] border-[var(--foreground)] group hover:bg-[var(--background-secondary)] transition-colors duration-200 ${
                  i % 2 === 0 ? "md:border-r-[3px] md:border-r-[var(--foreground)]" : ""
                }`}
              >
                {/* Thumbnail */}
                <div className="w-full sm:w-[180px] aspect-square flex-shrink-0 border-[3px] border-[var(--foreground)] bg-[var(--foreground)] overflow-hidden brutal-shadow relative">
                  <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={360}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between gap-6 flex-1 pt-4 border-t-[3px] border-[var(--foreground)] sm:border-t-0 sm:pt-0">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight leading-tight mb-4 text-[var(--foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-sm font-mono font-medium leading-relaxed opacity-80">
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
          <div className="mt-20 p-12 brutal-card bg-[var(--background-secondary)] text-center max-w-3xl mx-auto">
            <p className="font-mono font-bold text-lg uppercase tracking-widest text-[var(--foreground)]">
              More posts coming soon — subscribe above to stay in the loop.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
