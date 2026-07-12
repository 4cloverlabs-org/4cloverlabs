"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FEATURED_POST, GRID_POSTS } from "@/data/blog-posts";
import { DashedBorderWrapper, SectionDivider } from "@/components/DashedBorder";

/* ─── TAG PILL ───────────────────────────────────────────── */

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-[var(--color-border)] border border-[var(--color-border)] text-[#111111] text-xs font-semibold uppercase tracking-widest font-mono shadow-sm rounded-md">
      {tag}
    </span>
  );
}

function DatePill({ date }: { date: string }) {
  return (
    <span className="inline-flex items-center px-4 py-1 border border-[var(--color-border)] bg-white text-[#111111] text-xs font-bold tracking-widest uppercase font-mono shadow-sm rounded-md">
      {date}
    </span>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */

export default function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#111111] overflow-x-hidden">
      <Header />

      <DashedBorderWrapper bgColor="#f9fafb">
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-6 lg:px-16 overflow-hidden relative">

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="inline-block px-4 py-1.5 border border-[var(--color-border)] bg-[var(--color-border)] text-xs font-bold uppercase tracking-widest font-mono mb-8 shadow-sm rounded-md">
              Insights
            </div>
            {/* Large title */}
            <h1 className="text-[3.5rem] md:text-[6.5rem] font-semibold tracking-tighter leading-[0.95] uppercase mb-16 text-[#111111]">
              The Latest,<br />from 4CloverLabs
            </h1>

            {/* Sub-row: description + email | featured image */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Left: desc + subscribe */}
              <div className="w-full lg:w-5/12 flex flex-col pt-6 border-t-[3px] border-[var(--color-border)] relative">
                <p className="text-lg font-mono font-bold leading-relaxed mb-10 max-w-sm">
                  Insights on AI strategy, automation engineering, and building
                  systems that actually work — straight from the team at 4CloverLabs.
                </p>

                {/* Subscribe */}
                {subscribed ? (
                  <p className="font-mono font-semibold text-[#111111] bg-[var(--color-border)] px-4 py-3.5 border border-[var(--color-border)] inline-block shadow-md rounded-lg">
                    ✓ You're subscribed!
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 min-w-[200px] px-6 py-4 border border-[var(--color-border)] bg-[#ffffff] text-[#111111] font-mono font-bold placeholder-gray-600 focus:outline-none focus:ring-0 shadow-md rounded-lg"
                    />
                    <button
                      onClick={() => {
                        if (email.includes("@")) setSubscribed(true);
                      }}
                      className="border border-[var(--color-border)] bg-[var(--color-dark)] text-white text-[#111111] font-medium text-sm px-8 py-4 uppercase tracking-widest flex-shrink-0 shadow-md rounded-lg hover:shadow-lg rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>

              {/* Right: featured hero image — clickable */}
              <Link
                href={`/blog/${FEATURED_POST.slug}`}
                className="w-full lg:w-7/12 border border-[var(--color-border)] bg-[#111111] overflow-hidden aspect-[16/10] block shadow-xl rounded-2xl group relative"
              >
                <Image
                  src={FEATURED_POST.img}
                  alt={FEATURED_POST.title}
                  width={900}
                  height={562}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                  priority
                />
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider bgColor="#f9fafb" />

        {/* ── FEATURED POST DETAILS ──────────────────────────────── */}
        <section className="px-6 lg:px-16 pt-8 pb-20 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <Link
              href={`/blog/${FEATURED_POST.slug}`}
              className="w-full lg:w-5/12 border border-[var(--color-border)] bg-[#111111] overflow-hidden aspect-[16/10] block shadow-xl rounded-2xl group relative"
            >
              <Image
                src={FEATURED_POST.img}
                alt={FEATURED_POST.title}
                width={600}
                height={375}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
              />
            </Link>

            <Link
              href={`/blog/${FEATURED_POST.slug}`}
              className="block w-full lg:w-7/12 pt-6 border-t-[3px] border-[var(--color-border)] group"
            >
              <h2 className="text-3xl md:text-[2.6rem] font-semibold uppercase tracking-tight leading-[1.1] mb-4 text-[#111111] group-hover:text-[var(--color-dark)] transition-colors duration-200">
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

        <SectionDivider bgColor="#f9fafb" />

        {/* ── POST GRID ──────────────────────────────────────────── */}
        <section className="px-6 lg:px-16 pb-32 bg-[#f9fafb] relative">


          <div className="max-w-7xl mx-auto relative z-10 mt-16">
            {/* 2-column grid of post cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t-[3px] border-l-[3px] border-[var(--color-border)]">
              {GRID_POSTS.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`flex flex-col sm:flex-row gap-8 p-8 lg:p-12 border-b border-r border-[var(--color-border)] group hover:bg-[#ffffff] transition-colors duration-200`}
                >
                  {/* Thumbnail */}
                  <div className="w-full sm:w-[180px] aspect-square flex-shrink-0 border border-[var(--color-border)] bg-[#111111] overflow-hidden shadow-xl rounded-2xl relative">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={360}
                      height={360}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between gap-6 flex-1 pt-4 border-t-[3px] border-[var(--color-border)] sm:border-t-0 sm:pt-0">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold uppercase tracking-tight leading-tight mb-4 text-[#111111] group-hover:text-[var(--color-dark)] transition-colors duration-200">
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
            <div className="mt-20 p-12 border border-[var(--color-border)] shadow-xl rounded-2xl bg-[#ffffff] text-center max-w-3xl mx-auto">
              <p className="font-mono font-bold text-lg uppercase tracking-widest text-[#111111]">
                More posts coming soon — subscribe above to stay in the loop.
              </p>
            </div>
          </div>
        </section>
      </DashedBorderWrapper>

      <Footer />
    </div>
  );
}
