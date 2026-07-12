"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isLearnMoreHovered, setIsLearnMoreHovered] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      backgroundColor: "var(--background)",
      color: "var(--color-deep-black)",
    }}>
      {/* Abstract Background Image */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.45, // Very low opacity
      }} />

      {/* Light Grid Background */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
      }} />

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 2rem 5rem",
        textAlign: "center",
        maxWidth: "1280px",
        margin: "0 auto",
        width: "100%",
      }}>
        {/* Subtitle / Brand Intro */}
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          fontWeight: 500,
          color: "var(--color-accent-orange)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          display: "inline-block",
        }}>
          Scientific AI Systems for Structured Growth
        </span>

        {/* Hero Display Heading (H1) */}
        <h1 style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "clamp(2.5rem, 6vw, 3.875rem)", // 62px display size on desktop
          fontWeight: 600,
          color: "var(--color-deep-black)",
          letterSpacing: "normal",
          lineHeight: "1.1",
          marginBottom: "1.5rem",
          maxWidth: "900px",
        }}>
          We build intelligent AI systems that transform complex operations into measurable growth.
        </h1>

        {/* Hero Paragraph (Body Text) */}
        <p style={{
          fontSize: "18px", // brand guidelines body text size
          color: "var(--color-neutral-600)",
          fontWeight: 400,
          lineHeight: "30px", // brand guidelines body line height
          fontFamily: "var(--font-sans), sans-serif",
          maxWidth: "640px",
          margin: "0 auto 2.5rem",
          letterSpacing: "normal",
        }}>
          Strategy, automations, custom agents, and the engineering support to keep them running — all from one trusted AI partner.
        </p>

        {/* Actions */}
        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <a href="/contact" className="btn-primary" style={{
            backgroundColor: "var(--color-deep-black)",
            color: "var(--color-neutral-white)",
            borderColor: "var(--color-deep-black)",
          }}>
            Get Started
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a 
            href="/about" 
            className="btn-secondary" 
            style={{
              color: "var(--color-deep-black)",
              borderColor: "var(--color-neutral-300)",
              backgroundColor: isLearnMoreHovered ? "#f3f4f6" : "#ffffff",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={() => setIsLearnMoreHovered(true)}
            onMouseLeave={() => setIsLearnMoreHovered(false)}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Partner bar styled to match the custom design */}
      <div style={{
        position: "relative",
        zIndex: 15,
        width: "100%",
        borderTop: "1px dashed var(--color-neutral-200)",
        borderBottom: "1px dashed var(--color-neutral-200)",
        minHeight: "90px",
        display: "flex",
        alignItems: "center",
        background: "var(--background)",
      }}>
        <div className="flex flex-col md:flex-row items-center w-full max-w-[1280px] mx-auto px-8 py-6 md:py-0 gap-6 md:gap-8 justify-between">

          {/* Social Proof (Left) */}
          <div className="flex items-center gap-4 shrink-0 justify-center w-full md:w-auto">
            {/* Avatar Stack */}
            <div className="flex items-center">
              {[
                (
                  <img
                    src="/logo-e.jpg"
                    alt="Logo E"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "1.5px solid var(--color-neutral-300)",
                      backgroundColor: "var(--color-neutral-white)",
                    }}
                  />
                ),
                (
                  <img
                    src="/logo-mail.jpg"
                    alt="Logo Mail"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "1.5px solid var(--color-neutral-300)",
                      backgroundColor: "var(--color-neutral-white)",
                    }}
                  />
                ),
                (
                  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <circle cx="18" cy="18" r="17" fill="var(--color-neutral-white)" stroke="var(--color-neutral-300)" />
                    <path d="M9 22c0-5 4-9 9-9s9 4 9 9" stroke="var(--color-neutral-800)" strokeWidth="2" fill="var(--color-neutral-100)" />
                    <path d="M18 10c-3 0-5 2-5 5v2c0 2 1.5 4 4.5 4h1c3 0 4.5-2 4.5-4v-2c0-3-2-5-5-5z" fill="var(--color-neutral-white)" stroke="var(--color-neutral-800)" />
                    <circle cx="16" cy="15.5" r="1" fill="var(--color-neutral-800)" />
                    <circle cx="20" cy="15.5" r="1" fill="var(--color-neutral-800)" />
                    <path d="M16 18c1 .8 3 .8 4 0" stroke="var(--color-neutral-800)" strokeLinecap="round" />
                  </svg>
                ),
                (
                  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <circle cx="18" cy="18" r="17" fill="var(--color-neutral-white)" stroke="var(--color-neutral-300)" />
                    <path d="M18 10c-3 0-5 2-5 5v2c0 2 1.5 4 4.5 4h1c3 0 4.5-2 4.5-4v-2c0-3-2-5-5-5z" fill="var(--color-neutral-100)" stroke="var(--color-neutral-800)" />
                    <path d="M12 11.5c2-2 7-2 12 .5" stroke="var(--color-accent-orange)" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="16" cy="15" r="1" fill="var(--color-neutral-800)" />
                    <circle cx="20" cy="15" r="1" fill="var(--color-neutral-800)" />
                    <path d="M16 18.5c1 .5 3 .5 4 0" stroke="var(--color-neutral-800)" strokeLinecap="round" />
                  </svg>
                )
              ].map((avatar, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    marginLeft: idx > 0 ? "-10px" : "0",
                    position: "relative",
                    zIndex: 10 - idx,
                  }}
                >
                  {avatar}
                </div>
              ))}
            </div>

            {/* Stars & Text */}
            <div className="flex flex-col items-start gap-1">
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--color-accent-orange)" }}>
                    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: "12px", fontFamily: "var(--font-sans)", lineHeight: "1.2" }}>
                <span style={{ fontWeight: 700, color: "var(--color-deep-black)" }}>4+</span>{" "}
                <span style={{ color: "var(--color-neutral-600)" }}>Ventures in the studio</span>
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block h-10 w-px border-l border-dashed border-[var(--color-neutral-200)]" />

          {/* Partner Marquee (Right) */}
          <div className="w-full flex-1 overflow-hidden" style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}>
            <div className="animate-marquee-left" style={{ gap: "3.5rem", width: "max-content", display: "flex", alignItems: "center", animationDuration: "30s" }}>
              {[
                { name: "LinksMeet" },
                { name: "InterviewAI" },
                { name: "Expantra" },
                { name: "OpenAI" },
                { name: "Anthropic" },
                { name: "Supabase" },
                { name: "Vercel" },
              ].concat([
                { name: "LinksMeet" },
                { name: "InterviewAI" },
                { name: "Expantra" },
                { name: "OpenAI" },
                { name: "Anthropic" },
                { name: "Supabase" },
                { name: "Vercel" },
              ]).map((item, idx) => {
                const iconSize = "18px";
                const strokeColor = "var(--color-neutral-600)";
                let iconElement = null;

                switch (item.name) {
                  case "LinksMeet":
                    iconElement = (
                      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    );
                    break;
                  case "InterviewAI":
                    iconElement = (
                      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="10" r="1" fill={strokeColor} />
                        <circle cx="8" cy="10" r="1" fill={strokeColor} />
                        <circle cx="16" cy="10" r="1" fill={strokeColor} />
                      </svg>
                    );
                    break;
                  case "Expantra":
                    iconElement = (
                      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    );
                    break;
                  case "OpenAI":
                    iconElement = (
                      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        <path d="M2 12h20" />
                      </svg>
                    );
                    break;
                  case "Anthropic":
                    iconElement = (
                      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18" />
                        <path d="M18 12H6" />
                      </svg>
                    );
                    break;
                  case "Supabase":
                    iconElement = (
                      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    );
                    break;
                  case "Vercel":
                    iconElement = (
                      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" style={{ color: strokeColor }}>
                        <polygon points="12,3 22,21 2,21" />
                      </svg>
                    );
                    break;
                  default:
                    iconElement = (
                      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    );
                }

                return (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {iconElement}
                    <span style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "var(--font-sans)",
                      color: "var(--color-neutral-700)",
                    }}>
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
