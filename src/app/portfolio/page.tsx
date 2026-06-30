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
  "=Madrid",
  "Oslo.",
  "Manila.",
  "Norsk",
  "=Madrid",
  "Oslo.",
  "Manila.",
  "Norsk",
];

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
    <>
      <style>{`
        /* ── Reset for this page ── */
        .pf-page * { box-sizing: border-box; }

        /* ── Outer shell ── */
        .pf-page {
          display: flex;
          min-height: 100vh;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
          color: #0a0a0a;
        }

        /* ════════════════════════════
           LEFT — Fixed Sidebar
        ════════════════════════════ */
        .pf-sidebar {
          position: fixed;
          top: 5rem;   /* clears the floating header */
          left: 0;
          width: 420px;
          height: calc(100vh - 5rem);
          border-right: 1px dashed #d1d5db;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          z-index: 40;
          overflow: hidden;
        }

        .pf-sidebar-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 24px 20px 0 20px;
        }



        .pf-dynamic {
          margin-top: 40px;
        }

        /* Badge */

        .pf-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #d4f5a5;
          color: #2a5200;
          border-radius: 9999px;
          padding: 4px 11px 4px 11px;
          font-size: 0.68rem;
          font-weight: 700;
          margin-bottom: 16px;
          width: fit-content;
          line-height: 1;
        }

        /* Headline */
        .pf-headline {
          font-family: Inter, "Inter Placeholder", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 56px;
          line-height: 64px;
          color: rgb(0, 0, 0);
          margin-bottom: 10px;
        }

        /* Body */
        .pf-body {
          font-family: Geist, "Geist Placeholder", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: rgb(120, 120, 120);
          margin-bottom: 20px;
        }

        /* Preview button */
        .pf-preview-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #0a0a0a;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 9999px;
          text-decoration: none;
          width: fit-content;
          margin-top: 4px;
          margin-bottom: 24px;
          transition: background 0.18s, transform 0.15s;
          letter-spacing: -0.005em;
        }
        .pf-preview-btn:hover {
          background: #2a2a2a;
          transform: translateY(-1px);
        }
        .pf-preview-btn svg {
          flex-shrink: 0;
          opacity: 0.75;
        }

        /* Clickable image card */
        .pf-img-link {
          display: block;
          text-decoration: none;
          color: inherit;
          border-radius: 16px;
          overflow: hidden;
        }
        .pf-img-link .pf-img-card {
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .pf-img-link:hover .pf-img-card {
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
          transform: translateY(-2px);
        }

        /* Features */
        .pf-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .pf-feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          color: #444;
          line-height: 1;
        }
        .pf-checkmark {
          color: #3b82f6;
          font-size: 0.65rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* Spacer */
        .pf-flex-grow { flex: 1 1 0%; min-height: 0; }

        /* Trusted by */
        .pf-trusted-block {
          border-top: 1px solid #ebebeb;
          padding: 13px 0 16px;
          flex-shrink: 0;
        }
        .pf-trusted-label {
          font-size: 20px;
          color: #000000ff;
          text-align: center;
          margin-bottom: 9px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-transform: none;
        }
        .pf-marquee-clip {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          );
        }
        .pf-marquee-track {
          display: flex;
          gap: 1.4rem;
          width: max-content;
          animation: pf-scroll 10s linear infinite;
        }
        .pf-marquee-track:hover { animation-play-state: paused; }
        .pf-marquee-name {
          font-size: 32px;
          font-weight: 800;
          color: #000000ff;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }
        @keyframes pf-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ════════════════════════════
           RIGHT — Scrolling images
        ════════════════════════════ */
        .pf-main {
          margin-left: 420px;
          flex: 1;
          background: #ffffff;
          min-height: 100vh;
        }

        .pf-images-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
        }

        .pf-img-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #e0e0e0;
          aspect-ratio: 16 / 9;
          flex-shrink: 0;
          border-radius: 16px;
          border: 1px solid #e0e0e0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .pf-img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s ease;
        }
        .pf-img-card:hover img {
          transform: scale(1.025);
        }

        /* ── Transition for left panel dynamic content ── */
        .pf-dynamic {
          transition: opacity 0.25s ease;
        }

        /* ── Mobile fallback ── */
        @media (max-width: 900px) {
          .pf-sidebar {
            position: static;
            width: 100%;
            height: auto;
            border-right: none;
            border-bottom: 1px solid #e5e5e5;
          }
          .pf-main {
            margin-left: 0;
          }
        }
      `}</style>

      <Header />

      <div className="pf-page">

        {/* ════ LEFT SIDEBAR ════ */}
        <aside className="pf-sidebar">
          <div className="pf-sidebar-inner">


            {/* Dynamic: headline + description */}
            <div className="pf-dynamic" key={project.id}>
              <h1 className="pf-headline">
                {project.headline.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="pf-body">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-preview-btn"
              >
                Preview
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11L11 2M11 2H5.5M11 2V7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>



            {/* Flex spacer pushes trusted-by to bottom */}
            <div className="pf-flex-grow" />

            {/* Trusted by + marquee */}
            <div className="pf-trusted-block">
              <p className="pf-trusted-label">Trusted by</p>
              <div className="pf-marquee-clip">
                <div className="pf-marquee-track">
                  {TRUSTED_NAMES.map((name, i) => (
                    <span key={i} className="pf-marquee-name">{name}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </aside>

        {/* ════ RIGHT SCROLL AREA ════ */}
        <main className="pf-main">
          <div className="pf-images-stack">
            {PROJECTS.map((p, i) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-img-link"
                ref={(el) => { refs.current[i] = el as HTMLDivElement | null; }}
              >
                <div className="pf-img-card">
                  <Image
                    src={p.image}
                    alt={p.headline.replace("\n", " ")}
                    fill
                    sizes="(max-width: 768px) 100vw, calc(100vw - 272px)"
                    priority={i === 0}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </main>

      </div>
    </>
  );
}
