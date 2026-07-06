"use client";
import React, { useState } from "react";

const processSteps = [
  {
    id: "step-1",
    tag: "STEP 01",
    num: "01",
    title: "Identify the Opportunity",
    shortTitle: "Identify",
    desc: "We scan market gaps at the intersection of AI, automation, and emerging tech - then pressure-test the concept against our portfolio, resources, and long term thesis.",
    image: "/ourprocess/1.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
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
    image: "/ourprocess/2.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
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
    desc: "Our internal team ships a working product - real infrastructure, real UI, real AI integration. No outsourcing, no hand-offs. Everything built to own and scale.",
    image: "/ourprocess/3.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
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
    desc: "The venture goes live as an independent business with its own identity, domain, and market presence - backed by 4CloverLabs' infrastructure and capital from day one.",
    image: "/ourprocess/4.png",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
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
      backgroundColor: "#F5F2E9",
      padding: "6rem 0",
      borderBottom: "3.5px solid var(--foreground)",
    }}>
      {/* Background Gradient Mesh */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "radial-gradient(circle at 10% 30%, rgba(255,158,102,0.18) 0%, rgba(255,255,255,0) 65%), radial-gradient(circle at 90% 70%, rgba(255,123,123,0.12) 0%, rgba(255,255,255,0) 65%)",
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "68rem",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        {/* Header Tag */}
        <div style={{
          background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
          border: "3.5px solid var(--foreground)",
          boxShadow: "3px 3px 0px var(--foreground)",
          padding: "5px 15px",
          display: "inline-block",
          marginBottom: "1.75rem",
        }}>
          <span style={{
            fontFamily: "monospace",
            fontSize: "0.8rem",
            fontWeight: 900,
            color: "var(--foreground)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}>
            OUR PROCESS
          </span>
        </div>

        {/* Heading Title */}
        <h2 style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "clamp(2.5rem, 5.5vw, 4.4rem)",
          fontWeight: 1000,
          color: "var(--foreground)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "1.75rem",
        }}>
          BUILT FOR HIGH PERFORMANCE
        </h2>

        {/* Description card */}
        <div style={{
          background: "#FFFFFF",
          border: "3.5px solid var(--foreground)",
          boxShadow: "6px 6px 0px var(--foreground)",
          padding: "1.5rem 2.5rem",
          maxWidth: "46rem",
          width: "100%",
          textAlign: "center",
          marginBottom: "3.5rem",
        }}>
          <p style={{
            fontFamily: "monospace",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "var(--foreground)",
            lineHeight: 1.65,
            margin: 0,
          }}>
            A focused studio process that takes a raw concept to a live, revenue-ready venture - without the overhead of an agency or the chaos of a solo build.
          </p>
        </div>

        {/* Tabs Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1.25rem",
          width: "100%",
          marginBottom: "2.5rem",
        }}>
          {processSteps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  padding: "1.25rem 1rem",
                  border: "3.5px solid var(--foreground)",
                  boxShadow: isActive ? "6px 6px 0px var(--foreground)" : "4px 4px 0px var(--foreground)",
                  background: isActive ? "#0A0A0A" : "#FFFFFF",
                  color: isActive ? "#FF9E66" : "var(--foreground)",
                  fontWeight: 900,
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-sans), sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transform: isActive ? "translate(-2px, -2px)" : "none",
                  transition: "all 0.15s ease-out",
                }}
              >
                <span style={{ color: isActive ? "#FF9E66" : "var(--foreground)" }}>
                  {step.icon}
                </span>
                {step.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div style={{
          width: "100%",
          background: "#FFFFFF",
          border: "3.5px solid var(--foreground)",
          boxShadow: "8px 8px 0px var(--foreground)",
          padding: "2.5rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2.5rem",
          alignItems: "center",
        }}>
          {/* Left Visual Area */}
          <div style={{
            flex: "1 1 340px",
            minHeight: "280px",
            border: "3.5px solid var(--foreground)",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <img
              src={activeStep.image}
              alt={activeStep.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.95,
              }}
            />
          </div>

          {/* Right Text Area */}
          <div style={{
            flex: "1 1 340px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}>
            {/* Step Label Tag */}
            <div style={{
              background: "linear-gradient(135deg, #FF9E66 0%, #FFD075 100%)",
              border: "3.5px solid var(--foreground)",
              boxShadow: "3px 3px 0px var(--foreground)",
              padding: "4px 12px",
              display: "inline-block",
              marginBottom: "1.5rem",
            }}>
              <span style={{
                fontFamily: "monospace",
                fontSize: "0.75rem",
                fontWeight: 900,
                color: "var(--foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                {activeStep.tag}
              </span>
            </div>

            {/* Title / Number Row */}
            <div style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.8rem",
              width: "100%",
              borderBottom: "3px solid var(--foreground)",
              paddingBottom: "1.25rem",
              marginBottom: "1.5rem",
            }}>
              <span style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "#FF9E66",
                fontFamily: "monospace",
              }}>
                {activeStep.num}
              </span>
              <h3 style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 1000,
                color: "var(--foreground)",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 1.1,
              }}>
                {activeStep.title}
              </h3>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: "monospace",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--foreground)",
              lineHeight: 1.65,
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
