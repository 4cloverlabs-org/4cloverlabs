"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── DATA ────────────────────────────────────────────────── */

const PROJECTS = [
  {
    id: "p1",
    headline: "SALEMAIL",
    description:
      "A modern booking and meeting automation platform for sales teams, consultants, and creators who need calendars synced, links generated, and reminders sent — without a single back-and-forth email.",
    image: "/pf-1.png",
    url: "https://scheduleai.demo.4cloverlabs.com",
  },
  {
    id: "p2",
    headline: "EXPANTRA",
    description:
      "A technology and product studio crafting custom web, mobile, and AI-driven experiences for startups and enterprises that need fast, secure, and high-performing digital infrastructure.",
    image: "/expantra.jpeg",
    url: "https://www.expantra.me/",
  },
  {
    id: "p3",
    headline: "INTERVIEWAI",
    description:
      "An AI-driven interview platform that automates candidate assessment, scheduling, and evaluation — giving recruiters data-backed insights and candidates a fairer way to showcase their skills.",
    image: "/pf-3.png",
    url: "https://hireiq.demo.4cloverlabs.com",
  },
];

const TRUSTED_NAMES = [
  "Madrid",
  "Oslo",
  "Manila",
  "Norsk",
  "Madrid",
  "Oslo",
  "Manila",
  "Norsk",
];

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

/* ─── PAGE ────────────────────────────────────────────────── */

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(i);
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const project = PROJECTS[active];

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col font-sans text-[#111111]">
      <Header />

      <style>{`
        .pf-marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: pf-scroll 15s linear infinite;
        }
        @keyframes pf-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div className="flex flex-col lg:flex-row flex-1 pt-20">
        
        {/* ════ LEFT SIDEBAR ════ */}
        <aside className="lg:fixed lg:top-20 lg:left-0 lg:w-[480px] lg:h-[calc(100vh-5rem)] border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[#ffffff] flex flex-col z-40 overflow-hidden relative">
          {/* Subtle background grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          ></div>
          <DotPattern rows={3} cols={3} className="absolute right-4 top-4 opacity-50" />

          <div className="flex flex-col h-full p-8 lg:p-12 relative z-10">
            
            {/* Dynamic: headline + description */}
            <div className="transition-opacity duration-200 ease-in-out mt-4 flex-1">
              <div className="inline-block px-4 py-1.5 border border-[var(--color-border)] bg-[var(--color-border)] text-xs font-bold uppercase tracking-widest font-mono mb-8 shadow-sm rounded-md">
                Portfolio
              </div>
              <h1 className="text-5xl lg:text-[4rem] font-semibold tracking-tight uppercase leading-[1.0] text-[#111111] mb-8">
                {project.headline.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-lg font-mono font-bold leading-relaxed text-[#111111] opacity-90 mb-10 border-l-2 border-[#111111] pl-6">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--color-border)] bg-[var(--color-dark)] text-white text-[#111111] font-medium text-sm px-6 py-3.5 uppercase tracking-widest inline-flex items-center gap-3 shadow-md rounded-lg hover:shadow-lg rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Preview
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M2 12L12 2M12 2H5.5M12 2V8.5" />
                </svg>
              </a>
            </div>

            {/* Trusted by + marquee */}
            <div className="border-t-[3px] border-[var(--color-border)] pt-6 mt-12 overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
              
              <p className="text-xs font-bold uppercase tracking-widest font-mono text-[#111111] mb-6 opacity-60">Trusted by</p>
              
              <div className="pf-marquee-track">
                {TRUSTED_NAMES.map((name, i) => (
                  <span key={i} className="text-3xl font-semibold uppercase tracking-tighter text-[#111111] opacity-30">{name}</span>
                ))}
              </div>
            </div>

          </div>
        </aside>

        {/* ════ RIGHT SCROLL AREA ════ */}
        <main className="flex-1 lg:ml-[480px] bg-[#f9fafb] relative">
          {/* Subtle background grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          ></div>

          <div className="flex flex-col gap-12 p-6 lg:p-12 relative z-10">
            {PROJECTS.map((p, i) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                ref={(el) => { refs.current[i] = el as HTMLDivElement | null; }}
              >
                <div className="w-full aspect-[4/3] lg:aspect-[16/10] relative overflow-hidden bg-[#111111] border border-[var(--color-border)] shadow-xl rounded-2xl">
                  <Image
                    src={p.image}
                    alt={p.headline.replace("\n", " ")}
                    fill
                    sizes="(max-width: 1024px) 100vw, calc(100vw - 480px)"
                    priority={i === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
                  />
                  
                  {/* Floating label on hover */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="bg-[var(--color-dark)] text-white border border-[var(--color-border)] text-[#111111] px-4 py-2 font-mono font-bold text-xs uppercase tracking-widest shadow-md rounded-lg">
                      View Project ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
