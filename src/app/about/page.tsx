"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DashedBorderWrapper, SectionDivider } from "@/components/DashedBorder";

/* ─── DATA ─────────────────────────────────────────────────── */

const stats = [
  { value: "2026", suffix: "", label: "YEAR FOUNDED" },
  { value: "4", suffix: "", label: "CORE TEAM MEMBERS" },
  { value: "4", suffix: "+", label: "ACTIVE VENTURES" },
  { value: "100", suffix: "%", label: "LONG-TERM ALIGNMENT" },
];

const logos = [
  "LinksMeet",
  "Expantra",
  "InterviewAI",
  "ContextCapsule",
  "DomainMaster",
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
    <span ref={ref} className="font-semibold text-neutral-900">
      {count}
      <span className="text-neutral-500 font-medium">{suffix}</span>
    </span>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)] overflow-x-hidden selection:bg-[#ff4f00] selection:text-white">
      <Header />

      <style>{`
        .architectural-grid {
          background-image: 
            linear-gradient(to right, rgba(17, 17, 17, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 17, 17, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
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

      <DashedBorderWrapper bgColor="#FAFAFA">
        {/* ── SECTION 1: HERO (Warm-white) ── */}
        <section className="relative pt-36 pb-28 px-6 lg:px-16 overflow-hidden bg-[#FAFAFA]">
          <div className="absolute inset-0 architectural-grid pointer-events-none opacity-80" />

          {/* Soft Cream Glow */}
          <div
            className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none opacity-40 blur-[100px]"
            style={{
              background: "radial-gradient(circle, rgba(253, 244, 218, 0.8) 0%, rgba(255, 255, 255, 0) 70%)"
            }}
          />

          {/* Giant background typography */}
          <div className="absolute top-10 right-20 select-none pointer-events-none z-0">
            <span className="text-[14vw] font-black tracking-tight text-neutral-900/[0.03] leading-none uppercase block">
              ABOUT
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">


            {/* Main Content */}
            <div className="lg:col-span-10 mt-30">

              <h1 className="text-4xl md:text-7xl font-semibold leading-[0.95] tracking-tight uppercase mb-8 text-neutral-950">
                The Studio Behind <br />The Ventures.
              </h1>

              <p className="text-lg md:text-2xl font-mono leading-relaxed border-l-2 border-neutral-900 pl-6 mb-12 text-neutral-800 font-normal max-w-3xl">
                A small, founding team that conceives, builds, and operates AI-native businesses – for the long term, not the exit.
              </p>

              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-4 pl-6 pr-1.5 py-1.5 bg-[#1a1a1a] text-white rounded-[1rem] font-sans text-[15px] font-medium transition-all hover:bg-black shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
              >
                Book A Call
                <span className="w-9 h-9 rounded-[0.6rem] bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-inner shadow-white/20 transition-transform group-hover:scale-105">
                  <svg className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider bgColor="#FAFAFA" />

        {/* ── SECTION 2: CINEMATIC MONOCHROME PHOTOGRAPHY 1 ── */}
        <div className="relative w-full h-[60vh] overflow-hidden bg-neutral-950">
          <Image
            src="/about_studio_architectural.png"
            alt="Architectural concrete facade"
            fill
            className="object-cover opacity-90 transition-transform duration-[1.5s] hover:scale-105"
            priority
          />
          {/* Subtle Geometric Overlay */}
          <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-neutral-950/20" />
        </div>

        <SectionDivider bgColor="#F7F7F7" />

        {/* ── SECTION 3: MISSION & PHILOSOPHY (Cool-white) ── */}
        <section className="relative py-32 px-6 lg:px-16 bg-[#F7F7F7] overflow-hidden">
          {/* Soft Blue Radial Glow */}
          <div
            className="absolute left-1/4 top-1/4 w-[600px] h-[600px] pointer-events-none opacity-40 blur-[120px]"
            style={{
              background: "radial-gradient(circle, rgba(191, 219, 254, 0.6) 0%, rgba(243, 246, 250, 0) 70%)"
            }}
          />

          {/* Giant background typography */}
          <div className="absolute bottom-1 right-14 select-none pointer-events-none z-0">
            <span className="text-[14vw] font-black tracking-tight text-neutral-900/[0.03] leading-none uppercase block">
              MISSION
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header / Intro Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-8">
                <div className="inline-block px-4 py-1.5 border border-neutral-300 bg-neutral-200/50 text-[10px] font-bold uppercase tracking-widest font-mono mb-6 shadow-sm">
                  OUR PHILOSOPHY
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold uppercase leading-none tracking-tight text-neutral-900 max-w-3xl">
                  We build what we believe in. No clients, no briefs. Just real systems built to endure.
                </h2>
              </div>

            </div>
          </div>
        </section>

        <SectionDivider bgColor="#F3F3F3" />

        {/* ── SECTION 4: STATS & METRICS (Warm-white) ── */}
        <section className="relative py-20 bg-[#F3F3F3] overflow-hidden">
          <div className="absolute inset-0 architectural-grid pointer-events-none opacity-60" />


          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
            {/* Grid of stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-neutral-300 bg-white shadow-sm w-full">
              {stats.map((s, i) => {
                const numericTarget = parseInt(s.value.replace(/\D/g, ""), 10);
                return (
                  <div
                    className={`p-8 flex flex-col justify-between min-h-[160px] border-r border-b md:border-b-0 border-neutral-300 ${i === 3 ? "border-r-0" : ""
                      }`}
                    key={i}
                  >
                    <span className="text-[10px] font-mono text-neutral-400 font-bold">
                      INDEX 0{i + 1}
                    </span>
                    <div className="my-4">
                      <span className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 leading-none">
                        <Counter target={numericTarget} suffix={s.suffix} />
                      </span>
                    </div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-600 font-mono">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <SectionDivider bgColor="#F5F5F2" />


        {/* ── SECTION 7: TEAM (Warm-white) ── */}
        <section className="py-32 px-6 lg:px-16 bg-[#F5F5F2] overflow-hidden relative">
          <div className="absolute inset-0 architectural-grid pointer-events-none opacity-40" />

          {/* Giant background typography */}
          <div className="absolute bottom-10 right-4 select-none pointer-events-none z-0">
            <span className="text-[14vw] font-black tracking-tight text-neutral-900/[0.02] leading-none uppercase block">
              TEAM
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 border-b border-neutral-300/80 pb-12">
              <div className="lg:col-span-8">
                <div className="inline-block px-4 py-1.5 border border-neutral-800 text-[10px] font-bold uppercase tracking-widest font-mono mb-6 shadow-sm bg-neutral-900 text-white">
                  STUDIO ARCHITECTS
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase leading-none text-neutral-950">
                  Our Expert Team.
                </h2>
              </div>

            </div>

            {/* Grid of Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  className="group relative flex flex-col border border-neutral-300 bg-white hover:shadow-2xl transition-all duration-500 hover:border-neutral-800"
                  key={member.name}
                >
                  {/* Expanding border line decorations on hover */}
                  <span className="absolute top-0 left-0 h-0.5 w-0 bg-neutral-800 group-hover:w-full transition-all duration-500" />
                  <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-neutral-800 group-hover:w-full transition-all duration-500" />
                  <span className="absolute top-0 right-0 w-0.5 h-0 bg-neutral-800 group-hover:h-full transition-all duration-500" />
                  <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-neutral-800 group-hover:h-full transition-all duration-500" />

                  {/* Image wrapper */}
                  <div className="relative overflow-hidden aspect-[3/4] border-b border-neutral-300 bg-neutral-900">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={533}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                    />
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 flex items-center justify-between bg-white min-h-[110px]">
                    <div className="flex flex-col gap-2">
                      <div className="font-semibold text-lg uppercase tracking-tight text-neutral-955 leading-tight">
                        {member.name}
                      </div>
                      <div className="text-[9px] font-bold tracking-wider uppercase font-mono bg-neutral-900 text-white px-2.5 py-1 self-start">
                        {member.role}
                      </div>
                    </div>
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-neutral-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
                      aria-label={`${member.name} on ${member.social}`}
                    >
                      {member.social === "x" ? <XIcon /> : <LinkedInIcon />}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </DashedBorderWrapper>

      <Footer />
    </div>
  );
}
