"use client";

import Header from "@/components/Header";
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.902-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
    <span ref={ref}>
      {count}
      <span style={{ color: "#e85c2c" }}>{suffix}</span>
    </span>
  );
}

/* ─── BAR SPARKLINE ─────────────────────────────────────────── */

function Sparkline({ bars }: { bars: number }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 24 }}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 3,
            background: "#e85c2c",
            height: `${40 + Math.sin(i * 1.3) * 40}%`,
            borderRadius: 2,
            opacity: 0.65,
          }}
        />
      ))}
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function About() {
  return (
    <>
      <style>{`
        /* ── reset + base ── */
        .about-page {
          min-height: 100vh;
          background: #F5F5F5;
          color: #111;
          font-family: var(--font-geist-sans, 'Geist', 'Inter', sans-serif);
          overflow-x: hidden;
        }

        /* ── grid lines (vertical columns) ── */
        .grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            to right,
            rgba(0,0,0,0.06) 0px,
            rgba(0,0,0,0.06) 1px,
            transparent 1px,
            transparent calc(100% / 6)
          );
        }

        /* ── hero ── */
        .about-hero {
          position: relative;
          padding: 3.5rem 4rem 4rem;
          border-bottom: 1px solid rgba(0,0,0,0.10);
          max-width: 1400px;
          margin: 0 auto;
        }
        .about-badge {
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(0,0,0,0.18);
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 1.5rem;
          background: transparent;
        }
        .about-h1 {
          font-size: clamp(2.8rem, 7vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.0;
          margin: 0 0 1.25rem;
          max-width: 640px;
        }
        .about-hero-desc {
          font-size: 0.95rem;
          color: #555;
          max-width: 340px;
          line-height: 1.6;
          margin: 0;
        }
        .book-cta {
          position: absolute;
          bottom: 3.5rem;
          right: 4rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #111;
          color: #fff;
          padding: 0.85rem 1.6rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .book-cta:hover {
          background: #000;
          transform: translateY(-2px);
        }

        /* ── stats bar ── */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: 1px solid rgba(0,0,0,0.10);
          max-width: 1400px;
          margin: 0 auto;
        }
        .stat-cell {
          padding: 2.5rem 3rem;
          border-right: 1px solid rgba(0,0,0,0.10);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .stat-cell:last-child { border-right: none; }
        .stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .stat-number {
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #888;
          margin-top: 0.25rem;
        }

        /* ── mission ── */
        .mission-section {
          padding: 6rem 4rem;
          text-align: center;
          border-bottom: 1px solid rgba(0,0,0,0.10);
          max-width: 1400px;
          margin: 0 auto;
        }
        .mission-text {
          font-size: clamp(1.3rem, 2.8vw, 2rem);
          font-weight: 700;
          line-height: 1.45;
          max-width: 860px;
          margin: 1.5rem auto 0;
          letter-spacing: -0.02em;
        }
        .mission-text .muted {
          color: #aaa;
        }

        /* ── logo strip ── */
        .logo-strip {
          overflow: hidden;
          border-bottom: 1px solid rgba(0,0,0,0.10);
          padding: 1.5rem 0;
          background: #F5F5F5;
        }
        .logo-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: ticker 28s linear infinite;
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 3rem;
          border-right: 1px solid rgba(0,0,0,0.08);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #999;
          white-space: nowrap;
          height: 44px;
        }

        /* ── team ── */
        .team-section {
          padding: 5rem 4rem 6rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .team-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 3rem;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .team-h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin: 0.5rem 0 0;
        }
        .team-desc {
          max-width: 300px;
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin-top: 0.5rem;
          align-self: flex-end;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .team-card {
          display: flex;
          flex-direction: column;
        }
        .team-img-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 3/4;
          background: #222;
        }
        .team-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .team-card:hover .team-img-wrap img {
          transform: scale(1.04);
        }
        .team-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          gap: 0.5rem;
        }
        .team-name {
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .team-role {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
          margin-top: 0.15rem;
        }
        .team-social-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          text-decoration: none;
        }
        .team-social-btn:hover {
          background: #111;
          border-color: #111;
          color: #fff;
        }

        /* ── responsive ── */
        @media (max-width: 900px) {
          .stats-bar { grid-template-columns: repeat(2,1fr); }
          .stat-cell:nth-child(2) { border-right: none; }
          .team-grid { grid-template-columns: repeat(2,1fr); }
          .about-hero, .mission-section, .team-section { padding-left: 1.5rem; padding-right: 1.5rem; }
          .book-cta { position: static; margin-top: 2rem; display: inline-flex; }
          .stat-cell { padding: 2rem 1.5rem; }
        }
        @media (max-width: 540px) {
          .stats-bar { grid-template-columns: 1fr 1fr; }
          .team-grid { grid-template-columns: 1fr 1fr; }
          .about-h1 { font-size: 2.4rem; }
        }
      `}</style>

      <div className="about-page">
        <Header />

        {/* ── HERO ── */}
        <section style={{ position: "relative", borderBottom: "1px solid rgba(0,0,0,0.10)" }}>
          <div className="grid-bg" />
          <div className="about-hero">
            <div className="about-badge">About Us</div>
            <h1 className="about-h1">
              The Studio Behind The Ventures.
            </h1>
            <p className="about-hero-desc">
              A small, founding team that conceives, builds, and operates AI-native businesses — for the long term, not the exit.
            </p>
            <Link href="#contact" className="book-cta">
              Book A Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="stats-bar">
          {stats.map((s, i) => {
            const numericTarget = parseInt(s.value.replace(/\D/g, ""), 10);
            return (
              <div className="stat-cell" key={i}>
                <div className="stat-top">
                  <div className="stat-number">
                    <Counter target={numericTarget} suffix={s.suffix} />
                  </div>
                  <Sparkline bars={5 + i} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* ── MISSION ── */}
        <section style={{ borderBottom: "1px solid rgba(0,0,0,0.10)" }}>
          <div className="mission-section">
            <div className="about-badge" style={{ margin: "0 auto 0" }}>Our Mission</div>
            <p className="mission-text">
              We started 4CloverLabs because we wanted to build things we actually believed in. No clients, no briefs, no hand-offs — just a small team turning real opportunities into{" "}
              <span className="muted">businesses that last.</span>
            </p>
          </div>
        </section>

        {/* ── LOGO TICKER ── */}
        <div className="logo-strip">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, i) => (
              <div className="logo-item" key={i}>
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* ── TEAM ── */}
        <section>
          <div className="team-section">
            <div className="team-header">
              <div>
                <div className="about-badge">Our Team</div>
                <h2 className="team-h2">Our Expert Team.</h2>
              </div>
              <p className="team-desc">
                The specialists behind every system — strategists and automation engineers working as one.
              </p>
            </div>

            <div className="team-grid">
              {team.map((member) => (
                <div className="team-card" key={member.name}>
                  <div className="team-img-wrap">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={533}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="team-info">
                    <div>
                      <div className="team-name">{member.name}</div>
                      <div className="team-role">{member.role}</div>
                    </div>
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-btn"
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

        {/* ── FOOTER ── */}
        <footer style={{ background: "#111", color: "#fff", padding: "5rem 4rem 0", overflow: "hidden" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", gap: "4rem", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ maxWidth: 340 }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
                Ready to build the next venture?
              </h3>
              <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                We're always exploring the next idea. If you're a founder, operator, or builder who thinks like we do — let's talk.
              </p>
              <Link
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#fff",
                  color: "#111",
                  padding: "0.85rem 1.6rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                Let's Talk
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>

            <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
              {[
                { title: "Navigation", links: ["Home", "About", "Portfolio", "Blog", "Contact"] },
                { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
                { title: "Socials", links: ["X (Twitter)", "LinkedIn", "YouTube", "Instagram"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>{col.title}</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" style={{ color: "#888", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 1400, margin: "3rem auto 0", paddingTop: "2rem", borderTop: "1px dashed rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <span style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>4CloverLabs</span>
            <span style={{ color: "#666", fontSize: "0.8rem" }}>© {new Date().getFullYear()} 4CloverLabs Inc. All rights reserved.</span>
          </div>

          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <h2 style={{ fontSize: "12.5vw", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, color: "#fff", whiteSpace: "nowrap", transform: "translateY(12%)" }}>
              4CLOVERLABS
            </h2>
          </div>
        </footer>
      </div>
    </>
  );
}
