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
    <span ref={ref} className="font-bold">
      {count}
      <span className="text-[var(--color-primary)]">{suffix}</span>
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
          style={{
            width: 4,
            background: "var(--color-primary)",
            height: `${40 + Math.sin(i * 1.3) * 40}%`,
            border: "1px solid var(--foreground)",
          }}
        />
      ))}
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      <Header />

      <style>{`
        .logo-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: ticker 20s linear infinite;
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative border-b-[3px] border-[var(--foreground)] pt-32 pb-16 px-6 lg:px-16 overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(to right, var(--foreground) 2px, transparent 2px), linear-gradient(to bottom, var(--foreground) 2px, transparent 2px)",
            backgroundSize: "40px 40px"
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start bg-[var(--background)] brutal-card p-12 lg:p-20 mt-8 brutal-shadow">
          <div className="inline-block px-4 py-2 border-[3px] border-[var(--foreground)] bg-[var(--color-primary)] text-xs font-bold uppercase tracking-widest font-mono mb-8 brutal-shadow">
            About Us
          </div>
          <h1 className="text-[3.5rem] md:text-[6rem] font-bold leading-[0.95] tracking-tight mb-8 uppercase text-[var(--foreground)]">
            The Studio Behind The Ventures.
          </h1>
          <p className="text-lg md:text-xl font-mono max-w-3xl leading-relaxed border-l-[3px] border-[var(--color-primary)] pl-6 mb-12 font-medium">
            A small, founding team that conceives, builds, and operates AI-native businesses — for the long term, not the exit.
          </p>
          <Link href="#contact" className="brutal-btn bg-[var(--color-primary)] text-[var(--foreground)] font-bold text-lg px-8 py-4 inline-flex items-center gap-3 uppercase tracking-wider">
            Book A Call
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b-[3px] border-[var(--foreground)] bg-[var(--background-secondary)]">
        {stats.map((s, i) => {
          const numericTarget = parseInt(s.value.replace(/\D/g, ""), 10);
          return (
            <div className={`p-8 md:p-12 flex flex-col gap-4 border-b-[3px] md:border-b-0 border-[var(--foreground)] ${i % 2 === 0 ? 'border-r-[3px]' : 'border-r-0 md:border-r-[3px]'} ${i === 3 ? 'md:border-r-0' : ''}`} key={i}>
              <div className="flex items-center justify-between">
                <div className="text-[3rem] md:text-[4.5rem] leading-none tracking-tighter">
                  <Counter target={numericTarget} suffix={s.suffix} />
                </div>
                <Sparkline bars={5 + i} />
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-[var(--foreground)] font-mono opacity-80">{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* ── MISSION ── */}
      <section className="border-b-[3px] border-[var(--foreground)] py-24 px-6 lg:px-16 text-center bg-[var(--background)]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-2 border-[3px] border-[var(--foreground)] bg-[var(--color-primary)] text-xs font-bold uppercase tracking-widest font-mono mb-12 brutal-shadow">
            Our Mission
          </div>
          <p className="text-[2rem] md:text-[3.5rem] font-bold leading-[1.2] tracking-tight uppercase">
            We build what we believe in. No clients, no briefs —just a small team turning real opportunities into{" "}
            <span className="text-[var(--background)] bg-[var(--foreground)] px-4">businesses that last.</span>
          </p>
        </div>
      </section>

      {/* ── LOGO TICKER ── */}
      <div className="overflow-hidden border-b-[3px] border-[var(--foreground)] py-8 bg-[var(--background-secondary)]">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="flex items-center justify-center px-12 border-r-[3px] border-[var(--foreground)] text-xl font-bold font-mono tracking-widest uppercase text-[var(--foreground)] opacity-80" key={i}>
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* ── TEAM ── */}
      <section className="py-24 px-6 lg:px-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8 brutal-card p-10 bg-[var(--background-secondary)] brutal-shadow">
            <div>
              <div className="inline-block px-4 py-2 border-[3px] border-[var(--foreground)] bg-[var(--color-primary)] text-xs font-bold uppercase tracking-widest font-mono mb-6 brutal-shadow">
                Our Team
              </div>
              <h2 className="text-[4rem] font-bold tracking-tighter uppercase leading-none">Our Expert Team.</h2>
            </div>
            <p className="max-w-sm text-lg font-mono font-medium self-end border-t-[3px] border-[var(--foreground)] pt-4">
              The specialists behind every system — strategists and automation engineers working as one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div className="group flex flex-col brutal-card bg-[var(--background)]" key={member.name}>
                <div className="relative overflow-hidden aspect-[3/4] border-b-[3px] border-[var(--foreground)] bg-[var(--foreground)]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
                  />
                </div>
                <div className="p-6 flex items-center justify-between bg-[var(--background-secondary)]">
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-xl uppercase tracking-tight">{member.name}</div>
                    <div className="text-xs font-bold tracking-widest uppercase font-mono bg-[var(--foreground)] text-[var(--background)] px-2 py-1 self-start inline-block">
                      {member.role}
                    </div>
                  </div>
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn w-12 h-12 flex items-center justify-center bg-[var(--color-primary)] text-[var(--foreground)]"
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

      <Footer />
    </div>
  );
}
