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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
      backgroundColor: "#f9fafb",
      padding: "8rem 0",
      borderBottom: "1px solid #eaeaea",
    }}>
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "72rem",
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
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#666666",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            padding: "4px 12px",
            border: "1px solid #eaeaea",
            borderRadius: "100px",
            backgroundColor: "#ffffff",
            marginBottom: "1.5rem"
          }}>
            OUR PROCESS
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", width: "100%", gap: "2rem" }}>
            <h2 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 500,
              color: "#111111",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "28rem",
            }}>
              A simple process built for complex systems.
            </h2>
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "1.125rem",
              color: "#666666",
              fontWeight: 400,
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "24rem",
            }}>
              A focused studio process that takes a raw concept to a live, revenue-ready venture.
            </p>
          </div>
        </div>

        {/* Tabs Grid */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
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
                  padding: "0.8rem 1.5rem",
                  border: isActive ? "1px solid #111" : "1px solid #eaeaea",
                  borderRadius: "100px",
                  background: isActive ? "#111111" : "#ffffff",
                  color: isActive ? "#ffffff" : "#666666",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-sans), sans-serif",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.02)",
                }}
              >
                <span style={{ opacity: isActive ? 1 : 0.6 }}>
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
          border: "1px solid #eaeaea",
          borderRadius: "24px",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.04)",
          padding: "3rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "4rem",
          alignItems: "center",
        }}>
          {/* Left Visual Area */}
          <div style={{
            flex: "1 1 340px",
            minHeight: "320px",
            background: "#f4f5f7",
            borderRadius: "16px",
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
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback pattern if image is missing */}
            <div style={{
              position: "absolute", inset: 0, 
              backgroundImage: "radial-gradient(#ddd 1px, transparent 0)", 
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
              color: "#999999",
              fontSize: "0.875rem",
              fontWeight: 600,
              fontFamily: "var(--font-sans), sans-serif",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{ 
                background: "#f0f0f0", 
                padding: "2px 8px", 
                borderRadius: "4px",
                color: "#111"
              }}>
                {activeStep.num}
              </span>
              {activeStep.tag}
            </div>

            {/* Title Row */}
            <h3 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 500,
              color: "#111111",
              margin: "0 0 1.25rem 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}>
              {activeStep.title}
            </h3>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "1.125rem",
              color: "#666666",
              lineHeight: 1.6,
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
