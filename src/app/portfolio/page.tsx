"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CloverIcon } from "@/components/DashedBorder";
import { motion, AnimatePresence } from "framer-motion";

import { products } from "@/data/products";

const PROJECTS = products.map((p) => ({
  id: p.id,
  headline: p.name,
  description: p.description || p.details || "Details coming soon.",
  image: p.image,
  url: p.liveUrl || `/products/${p.slug}`,
}));



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
    <div className="min-h-screen bg-[var(--background)] flex flex-col font-sans overflow-x-hidden selection:bg-[#ff4f00] selection:text-white">
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
        <aside className="lg:fixed lg:top-20 lg:left-0 lg:w-[480px] lg:h-[calc(100vh-5rem)] border-b lg:border-b-0 lg:border-r-2 lg:border-dashed lg:border-neutral-300 bg-transparent flex flex-col z-40 overflow-hidden relative">

          <div className="flex flex-col h-full p-8 lg:p-12 relative z-10">

            {/* Large Faded Project Number at the Top */}
            <div className="mb-2 select-none min-h-[10rem] lg:min-h-[13rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-[9rem] lg:text-[12rem] font-black tracking-tighter font-inter text-[#111111] leading-none block"
                >
                  {String(active + 1).padStart(2, "0")}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dynamic: headline + description */}
            <div className="mt-4 flex-1">
              <div className="inline-block px-4 py-1.5 border border-[var(--color-border)] bg-[var(--color-border)] text-xs font-bold uppercase tracking-widest font-mono mb-8 shadow-sm rounded-md">
                Portfolio
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
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
                    className="group relative inline-flex items-center gap-4 pl-6 pr-1.5 py-1.5 bg-[#1a1a1a] text-white rounded-[1rem] font-sans text-[15px] font-medium transition-all hover:bg-black shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
                  >
                    Preview
                    <span className="w-9 h-9 rounded-[0.6rem] bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-inner shadow-white/20 transition-transform group-hover:scale-105">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                        <path d="M2 12L12 2M12 2H5.5M12 2V8.5" />
                      </svg>
                    </span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>


          </div>
        </aside>

        {/* ════ RIGHT SCROLL AREA ════ */}
        <main className="flex-1 lg:ml-[480px] bg-transparent relative">


          <div className="flex flex-col gap-12 p-6 lg:p-12 relative z-10">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="flex flex-col gap-12">
                <a
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
                      className={`object-cover transition-all duration-700 group-hover:scale-105 ${i === active
                        ? "mix-blend-normal opacity-100"
                        : "mix-blend-luminosity opacity-40"
                        }`}
                    />

                    {/* Floating label on hover */}
                    <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-2 font-mono font-bold text-xs uppercase tracking-widest shadow-md rounded-lg">
                        View Project ↗
                      </span>
                    </div>
                  </div>
                </a>
                {i < PROJECTS.length - 1 && (
                  <div className="border-b-2 border-dashed border-neutral-300 -mx-6 lg:-mx-12" />
                )}
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
