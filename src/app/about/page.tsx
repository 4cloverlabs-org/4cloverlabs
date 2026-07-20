"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { DashedBorderWrapper, SectionDivider } from "@/components/DashedBorder";
import { Lightbulb, Rocket, Cpu, TrendingUp, Sparkles } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────── */

const stats = [
  { value: "4", suffix: "+", label: "Ventures", description: "Currently operated by our team" },
  { value: "12", suffix: "+", label: "Products", description: "Built on shared infrastructure" },
  { value: "100", suffix: "%", label: "Internally owned", description: "No client IP." },
];

const team = [
  {
    name: "Marcus Elliott",
    role: "STRATEGY LEAD",
    img: "/team_marcus.png",
    social: "x",
    link: "https://x.com",
    bio: "Marcus shapes the overarching strategy and market positioning for our internal ventures.",
    specialty: ["AI GTM strategy", "Automation", "Product validation"],
    ventures: ["LinksMeet", "SailMail"]
  },
  {
    name: "Candace Baker",
    role: "AUTOMATION ARCHITECT",
    img: "/team_navtej.png",
    social: "x",
    link: "https://x.com",
    bio: "Candace builds the scalable workflows and AI integrations that power our infrastructure.",
    specialty: ["Workflow automation", "LLM integration", "System architecture"],
    ventures: ["ContextCapsule", "DomainMaster"]
  },
  {
    name: "Sara Vance",
    role: "VENTURE OPERATIONS LEAD",
    img: "/team_sara.png",
    social: "linkedin",
    link: "https://linkedin.com",
    bio: "Sara ensures operational excellence and seamless scaling across all active ventures.",
    specialty: ["Operations", "User Success", "Scaling"],
    ventures: ["Expantra", "InterviewAI"]
  },
  {
    name: "James Okafor",
    role: "IMPLEMENTATION ENGINEER",
    img: "/team_james.png",
    social: "linkedin",
    link: "https://linkedin.com",
    bio: "James turns complex AI concepts into robust, production-ready applications.",
    specialty: ["Full-stack Dev", "AI Engineering", "Performance Optimization"],
    ventures: ["LinksMeet", "ContextCapsule"]
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

/* ─── SCROLLING WATERMARK ───────────────────────────────────── */

function Watermark() {
  const [text, setText] = useState("ABOUT");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollProgress = scrollPosition / (documentHeight - windowHeight);

      if (scrollProgress < 0.25) {
        setText("ABOUT");
      } else if (scrollProgress < 0.5) {
        setText("MISSION");
      } else if (scrollProgress < 0.75) {
        setText("VALUES");
      } else {
        setText("TEAM");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-1 right-14 select-none pointer-events-none z-0 transition-opacity duration-700 opacity-20 mix-blend-multiply">
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-[14vw] font-black tracking-tight text-neutral-900/[0.1] leading-none uppercase block"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}


/* ─── PARALLAX IMAGE ────────────────────────────────────────── */

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative w-full h-[60vh] overflow-hidden bg-neutral-950">
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover opacity-90 transition-transform duration-[1.5s] hover:scale-105"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-neutral-950/20 z-10" />
    </div>
  );
}


/* ─── PAGE ──────────────────────────────────────────────────── */

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)] overflow-x-hidden selection:bg-[#ff4f00] selection:text-white relative">
      <Watermark />
      <Header />

      <style>{`
        .architectural-grid {
          background-image: 
            linear-gradient(to right, rgba(17, 17, 17, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 17, 17, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .bg-texture {
           background-image: radial-gradient(rgba(0,0,0,0.05) 1px, transparent 0);
           background-size: 24px 24px;
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

          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-7xl font-semibold leading-[0.95] tracking-tight uppercase mb-8 text-neutral-950"
              >
                The Studio That <br />Builds Its Own <br />AI Companies.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-2xl font-mono leading-relaxed border-l-2 border-neutral-900 pl-6 mb-12 text-neutral-800 font-normal max-w-3xl"
              >
                We don&apos;t build software for clients.
                <br /><br />
                We identify opportunities, launch AI-native ventures, and operate them for the long term.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center gap-4 pl-6 pr-1.5 py-1.5 bg-[#1a1a1a] text-white rounded-[1rem] font-sans text-[15px] font-medium transition-all hover:bg-black shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
                >
                  See Our Ventures
                  <span className="w-9 h-9 rounded-[0.6rem] bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-inner shadow-white/20 transition-transform group-hover:scale-105">
                    <svg className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: CINEMATIC MONOCHROME PHOTOGRAPHY 1 ── */}
        <ParallaxImage src="/about_studio_architectural.png" alt="Architectural concrete facade" />

        <div className="h-24 bg-gradient-to-b from-neutral-950 to-[#F7F7F7] relative z-20"></div>

        {/* ── SECTION 3: MISSION & PHILOSOPHY (Cool-white) ── */}
        <section className="relative py-24 px-6 lg:px-16 bg-[#F7F7F7] overflow-hidden bg-texture">
          {/* Soft Blue Radial Glow */}
          <div
            className="absolute left-1/4 top-1/4 w-[600px] h-[600px] pointer-events-none opacity-40 blur-[120px]"
            style={{
              background: "radial-gradient(circle, rgba(191, 219, 254, 0.6) 0%, rgba(243, 246, 250, 0) 70%)"
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5"
              >
                <div className="inline-block px-4 py-1.5 border border-neutral-800 text-[10px] font-bold uppercase tracking-widest font-mono mb-6 shadow-sm bg-neutral-900 text-white">
                  OUR PHILOSOPHY
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold uppercase leading-none tracking-tight text-neutral-900 mb-8">
                  The Manifesto.
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <div className="text-xl md:text-3xl font-mono leading-relaxed text-neutral-800 space-y-6">
                  <p className="font-bold text-neutral-950 uppercase border-b border-neutral-300 pb-4">No client work.</p>
                  <p className="font-bold text-neutral-950 uppercase border-b border-neutral-300 pb-4">No agency model.</p>
                  <p className="font-bold text-neutral-950 uppercase border-b border-neutral-300 pb-4">No chasing trends.</p>
                  <p className="pt-4 text-neutral-600 font-normal">
                    Every product begins with a real problem, is engineered in-house, and remains part of our ecosystem.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* ── SECTION 5: STATS & METRICS (Warm-white) ── */}
        <section className="relative py-24 bg-[#F3F3F3] overflow-hidden">
          <div className="absolute inset-0 architectural-grid pointer-events-none opacity-60" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-300 bg-white shadow-sm w-full relative">
              {stats.map((s, i) => {
                const numericTarget = parseInt(s.value.replace(/\D/g, ""), 10);
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`p-10 flex flex-col justify-between min-h-[220px] border-b md:border-b-0 md:border-r border-neutral-300 ${i === 2 ? "md:border-r-0" : ""
                      }`}
                    key={i}
                  >
                    <div className="mb-4">
                      <span className="text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 leading-none block mb-2">
                        <Counter target={numericTarget} suffix={s.suffix} />
                      </span>
                      <span className="text-xl font-bold tracking-tight text-neutral-800 uppercase">
                        {s.label}
                      </span>
                    </div>
                    <div className="text-sm text-neutral-600 font-mono leading-relaxed mt-auto">
                      {s.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>



        {/* ── SECTION 7: TEAM (Warm-white) ── */}
        <section className="py-32 px-6 lg:px-16 bg-[#F5F5F2] overflow-hidden relative">
          <div className="absolute inset-0 architectural-grid pointer-events-none opacity-40" />

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
              {team.map((member, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative flex flex-col border border-neutral-300 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 hover:border-neutral-800 overflow-hidden"
                  key={member.name}
                >
                  {/* Expanding border line decorations on hover */}
                  <span className="absolute top-0 left-0 h-0.5 w-0 bg-neutral-800 group-hover:w-full transition-all duration-500 z-20" />
                  <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-neutral-800 group-hover:w-full transition-all duration-500 z-20" />

                  {/* Image wrapper */}
                  <div className="relative overflow-hidden aspect-[3/4] border-b border-neutral-300 bg-neutral-50">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={533}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay Details */}
                    <div className="absolute inset-0 bg-neutral-950/90 p-6 flex flex-col justify-end translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out text-white">
                      <p className="text-sm mb-4 font-mono leading-relaxed opacity-90">{member.bio}</p>

                      <div className="mb-4">
                        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Specialties</div>
                        <div className="flex flex-wrap gap-2">
                          {member.specialty.map(spec => (
                            <span key={spec} className="px-2 py-1 bg-white/10 text-[10px] rounded uppercase font-mono">{spec}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Worked On</div>
                        <div className="text-sm font-semibold">{member.ventures.join(" • ")}</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 flex items-center justify-between bg-white min-h-[110px] relative z-10">
                    <div className="flex flex-col gap-2">
                      <div className="font-semibold text-lg uppercase tracking-tight text-neutral-950 leading-tight">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </DashedBorderWrapper>

      <Footer />
    </div>
  );
}
