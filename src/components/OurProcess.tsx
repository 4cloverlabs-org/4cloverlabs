"use client";
import React, { useState } from "react";

const processSteps = [
  {
    id: "step-1",
    tag: "STEP 01",
    num: "01",
    title: "Identify the Opportunity",
    shortTitle: "Identify",
    desc: "We scan market gaps at the intersection of AI, automation, and emerging tech — then pressure-test the concept against our portfolio, resources, and long term thesis.",
    image: "/ourprocess/1.jpg",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    id: "step-2",
    tag: "STEP 02",
    num: "02",
    title: "Define the Venture",
    shortTitle: "Define",
    desc: "We scope the product, name the business, and lock the go-to-market angle. Brand, architecture, and first-sprint priorities get defined before a single line of code is written.",
    image: "/ourprocess/2.jpg",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  },
  {
    id: "step-3",
    tag: "STEP 03",
    num: "03",
    title: "Build the MVP",
    shortTitle: "Build MVP",
    desc: "Our internal engineering team ships a working product — real infrastructure, real UI, and direct AI integrations. Everything is engineered for scalability from day one.",
    image: "/ourprocess/3.jpg",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: "step-4",
    tag: "STEP 04",
    num: "04",
    title: "Launch under its own Brand",
    shortTitle: "Launch",
    desc: "The venture goes live as an independent business with its own identity, domain, and market presence — backed by 4CloverLabs' robust core infrastructure.",
    image: "/ourprocess/4.jpg",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    )
  }
];

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: "var(--background)",
      padding: "8rem 0",
    }}>

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Header Tag */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "3rem",
        }}>
          <span style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--color-accent-orange)",
            marginBottom: "1.5rem",
            display: "inline-block",
            padding: "4px 12px",
            border: "1px solid var(--color-neutral-200)",
            borderRadius: "100px",
            backgroundColor: "var(--color-neutral-50)"
          }}>
            OUR PROCESS
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", width: "100%", gap: "2rem" }}>
            <h2 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)", // H2 Heading 48px
              fontWeight: 600,
              color: "var(--color-deep-black)",
              lineHeight: "1.1",
              letterSpacing: "normal",
              margin: 0,
              maxWidth: "480px",
            }}>
              A simple process built for complex systems.
            </h2>
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "18px", // Body text
              color: "var(--color-neutral-500)",
              fontWeight: 400,
              lineHeight: "30px",
              margin: 0,
              maxWidth: "480px",
            }}>
              A focused studio process that takes a raw concept to a live, revenue-ready venture through structured development steps.
            </p>
          </div>
        </div>

        {/* Tabs Grid */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          width: "100%",
          marginBottom: "3rem",
        }}>
          {processSteps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "10px 20px",
                  border: isActive ? "1px solid var(--color-deep-black)" : "1px solid var(--color-neutral-300)",
                  borderRadius: "4px", // Minimal, not rounded
                  background: isActive ? "var(--color-deep-black)" : "transparent",
                  color: isActive ? "var(--color-neutral-white)" : "var(--color-neutral-600)",
                  fontWeight: 500,
                  fontSize: "12px", // Button Label scale
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans), sans-serif",
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", opacity: isActive ? 1 : 0.7 }}>
                  {step.icon}
                </span>
                {step.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="brand-card" style={{
          width: "100%",
          padding: "3rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "3rem",
          alignItems: "center",
          backgroundColor: "var(--color-neutral-white)",
          border: "6px solid #E2E8F0",
          borderRadius: "8px",
          boxShadow: "none",
        }}>
          {/* Left Visual Area */}
          <div style={{
            flex: "1 1 340px",
            height: "320px",
            background: "var(--color-neutral-100)",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--color-neutral-200)"
          }}>
            <img
              src={activeStep.image}
              alt={activeStep.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback pattern if image is missing */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(var(--color-neutral-300) 1px, transparent 0)",
              backgroundSize: "20px 20px",
              zIndex: -1
            }} />
          </div>

          {/* Right Text Area */}
          <div style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}>
            {/* Step Label Tag */}
            <div style={{
              color: "var(--color-neutral-500)",
              fontSize: "12px",
              fontFamily: "var(--font-mono)",
              fontWeight: 500,
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{
                background: "var(--color-neutral-100)",
                padding: "2px 8px",
                borderRadius: "4px",
                color: "var(--color-deep-black)"
              }}>
                {activeStep.num}
              </span>
              {activeStep.tag}
            </div>

            {/* Title Row */}
            <h3 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "36px", // H3 Heading 36px
              fontWeight: 600,
              color: "var(--color-deep-black)",
              margin: "0 0 1.25rem 0",
              lineHeight: "42px",
              letterSpacing: "normal"
            }}>
              {activeStep.title}
            </h3>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "18px", // Body text 18px
              color: "var(--color-neutral-500)",
              lineHeight: "30px",
              margin: 0,
            }}>
              {activeStep.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
