"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── DATA ─────────────────────────────────────────────────── */

const stats = [
  { value: "2026", suffix: "", label: "YEAR FOUNDED" },
  { value: "4", suffix: "", label: "CORE TEAM MEMBERS" },
  { value: "4", suffix: "+", label: "ACTIVE VENTURES" },
  { value: "100", suffix: "%", label: "LONG-TERM ALIGNMENT" },
];

const logos = [
  "Accenture",
  "Deloitte",
  "McKinsey",
  "Palantir",
  "OpenAI",
  "Stripe",
  "Vercel",
  "Notion",
];

const team = [
  {
    name: "Candace Baker",
    role: "AUTOMATION ARCHITECT",
    img: "/team_navtej.png",
    social: "x",
    link: "https://x.com",
  },
  {
    name: "Marcus Elliot",
    role: "AI STRATEGY LEAD",
    img: "/team_marcus.png",
    social: "x",
    link: "https://x.com",
  },
  {
    name: "Sara Vance",
    role: "CLIENT SUCCESS LEAD",
    img: "/team_sara.png",
    social: "linkedin",
    link: "https://linkedin.com",
  },
  {
    name: "James Okafor",
    role: "IMPLEMENTATION ENGINEER",
    img: "/team_james.png",
    social: "linkedin",
    link: "https://linkedin.com",
  },
];

/* ─── ICON HELPERS ──────────────────────────────────────────── */

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.902-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ─── ANIMATED COUNTER ──────────────────────────────────────── */

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 60;
          const stepVal = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += stepVal;
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(cur));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-medium text-[var(--foreground)]">
      {count}
      <span className="text-[var(--color-dark)]">{suffix}</span>
    </span>
  );
}

/* ─── BAR SPARKLINE ─────────────────────────────────────────── */

function Sparkline({ bars }: { bars: number }) {
  return (
    <div className="flex items-end gap-1 h-8">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-1 border border-[var(--color-border)]"
          style={{
            background: "var(--color-dark)", color: "#ffffff",
            height: `${30 + Math.sin(i * 1.3) * 50}%`,
          }}
        />
      ))}
    </div>
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
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--color-dark)] text-white" />
      ))}
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function About() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[var(--foreground)] overflow-x-hidden">
      <Header />

      <style>{`
        .logo-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: ticker 25s linear infinite;
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative border-b border-[var(--color-border)] pt-32 pb-24 px-6 lg:px-16 overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        ></div>

        {/* Scattered Background Dot Patterns */}
        <DotPattern rows={4} cols={4} className="absolute left-8 top-12 opacity-80 hidden md:grid" />
        <DotPattern rows={5} cols={3} className="absolute right-12 top-20 opacity-80 hidden md:grid" />
        <DotPattern rows={3} cols={4} className="absolute left-1/4 bottom-12 opacity-80 hidden md:grid" />
        <DotPattern rows={4} cols={3} className="absolute right-1/4 top-16 opacity-80 hidden md:grid" />

        <div className="relative z-10 max-w-5xl mx-auto mt-8">
          {/* Main Hero Card */}
          <div
            className="relative border border-[var(--color-border)] p-12 lg:p-20 shadow-xl rounded-2xl overflow-hidden"
            style={{
              background: "#f9fafb"
            }}
          >
            {/* Corner Decorative Dot Patterns inside Card */}
            <DotPattern rows={3} cols={3} className="absolute right-8 top-8 opacity-60" />
            <DotPattern rows={4} cols={3} className="absolute right-12 bottom-12 opacity-60" />
            <DotPattern rows={3} cols={3} className="absolute left-1/2 bottom-8 opacity-50" />


            <div className="inline-block px-4 py-1.5 border border-[var(--color-border)] bg-[var(--color-border)] text-xs font-bold uppercase tracking-widest font-mono mb-8 shadow-sm rounded-md">
              About Us
            </div>

            <h1 className="text-[3.5rem] md:text-[5.5rem] font-semibold leading-[0.95] tracking-tight mb-8 uppercase text-[#111111] max-w-4xl">
              The Studio Behind The Ventures.
            </h1>

            <p className="text-lg md:text-xl font-mono max-w-2xl leading-relaxed border-l-2 border-[#111111] pl-6 mb-12 font-medium text-[#111111]">
              A small, founding team that conceives, builds, and operates AI-native businesses – for the long term, not the exit.
            </p>

            <Link
              href="#contact"
              className="border border-[var(--color-border)] bg-[var(--color-dark)] text-white text-[#111111] font-medium text-lg px-8 py-4 inline-flex items-center gap-3 uppercase tracking-wider shadow-md rounded-lg hover:shadow-lg rounded-xl hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all"
            >
              Book A Call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[var(--color-border)] bg-[#f9fafb]">
        {stats.map((s, i) => {
          const numericTarget = parseInt(s.value.replace(/\D/g, ""), 10);
          return (
            <div
              className={`p-8 md:p-12 flex flex-col gap-4 border-b lg:border-b-0 border-[var(--color-border)] ${i % 2 === 0 ? 'border-r' : 'border-r-0 lg:border-r'
                } ${i === 3 ? 'lg:border-r-0' : ''}`}
              key={i}
            >
              <div className="flex items-center justify-between">
                <div className="text-[3.5rem] md:text-[5rem] font-semibold leading-none tracking-tighter text-[#111111]">
                  <Counter target={numericTarget} suffix={s.suffix} />
                </div>
                <Sparkline bars={5 + i} />
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-[#111111] font-mono opacity-80">{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* ── MISSION ── */}
      <section className="relative border-b border-[var(--color-border)] py-32 px-6 lg:px-16 text-center bg-[#f9fafb] overflow-hidden">
        {/* Radial Warm Glow Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: "radial-gradient(circle at center, rgba(255, 208, 117, 0.4) 0%, rgba(245, 242, 233, 0) 70%)"
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 border border-[var(--color-border)] bg-[var(--color-border)] text-xs font-bold uppercase tracking-widest font-mono mb-12 shadow-sm rounded-md">
            Our Mission
          </div>
          <p className="text-[2.25rem] md:text-[3.75rem] font-semibold leading-[1.15] tracking-tight uppercase text-[#111111]">
            We build what we believe in. No clients, no briefs —just a small team turning real opportunities into{" "}
            <span className="inline-block bg-[#111111] text-[#f9fafb] border border-white px-4 py-1 mt-2 md:mt-0">
              businesses that last.
            </span>
          </p>
        </div>
      </section>

      {/* ── LOGO TICKER ── */}
      <div className="overflow-hidden border-b border-[var(--color-border)] py-8 bg-[#f9fafb]">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="flex items-center justify-center px-12 text-xl font-semibold font-mono tracking-widest uppercase text-[#111111]" key={i}>
              <span className="mr-12 opacity-80">{logo}</span>
              <span className="text-[#111111] font-normal">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── TEAM ── */}
      <section className="py-24 px-6 lg:px-16 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">

          {/* Big Team Container Card */}
          <div className="border border-[var(--color-border)] p-8 md:p-12 shadow-xl rounded-2xl bg-[#f9fafb] flex flex-col gap-12">

            {/* Header section inside the card */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-10 border-b border-[var(--color-border)]">
              <div>
                <div className="inline-block px-4 py-1.5 border border-[var(--color-border)] bg-[var(--color-border)] text-xs font-bold uppercase tracking-widest font-mono mb-6 shadow-sm rounded-md">
                  Our Team
                </div>
                <h2 className="text-[3.5rem] md:text-[4.5rem] font-semibold tracking-tighter uppercase leading-none text-[#111111]">Our Expert Team.</h2>
              </div>
              <div className="flex flex-col md:w-1/3 gap-4">
                <div className="h-[2px] bg-[#111111] w-full hidden md:block"></div>
                <p className="text-base font-mono font-bold text-[#111111] leading-relaxed">
                  The specialists behind every system – strategists and automation engineers working as one.
                </p>
              </div>
            </div>

            {/* Grid of Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div className="group flex flex-col border border-[var(--color-border)] bg-white" key={member.name}>
                  {/* Image wrapper */}
                  <div className="relative overflow-hidden aspect-[3/4] border-b border-[var(--color-border)] bg-[#111111]">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={533}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
                    />
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 flex items-center justify-between bg-[#ffffff] min-h-[110px]">
                    <div className="flex flex-col gap-2">
                      <div className="font-semibold text-lg uppercase tracking-tight text-[#111111] leading-tight">{member.name}</div>
                      <div className="text-[10px] font-semibold tracking-wider uppercase font-mono bg-[#111111] text-[#f9fafb] px-2.5 py-1 self-start rounded-full">
                        {member.role}
                      </div>
                    </div>
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-[var(--color-dark)] text-white text-[#111111] border border-[var(--color-border)] font-medium shadow-sm rounded-md hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                      aria-label={`${member.name} on ${member.social}`}
                    >
                      {member.social === "x" ? <XIcon /> : <LinkedInIcon />}
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
