"use client";
import React from "react";

export default function Features() {
  const featuresData = [
    {
      title: "Venture Building",
      description: "We conceive, fund, and build intelligent digital businesses from the ground up. Fully owned and operated within the studio.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      )
    },
    {
      title: "AI Development",
      description: "From intelligent automations to autonomous agent platforms - we engineer custom AI products built for real-world impact.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      )
    },
    {
      title: "Shared Infrastructure",
      description: "Every venture we build runs on the same foundation - enabling faster time to market and scaling with ease.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      )
    }
  ];

  return (
    <section style={{
      position: "relative",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#F5F5F5",
      padding: "8rem 0",
    }}>
      <style>{`
        @property --border-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 135deg;
        }

        .gradient-border-card {
          border: 6px solid transparent;
          background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(
  var(--border-angle),
  #F8F6F2 0%,
  #E4EDF6 35%,
  #B5C8DD 65%,
  #6B84A1 100%
);
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }

        .gradient-border-card:hover {
          animation: rotate-border 6s linear infinite;
        }

        @keyframes rotate-border {
          to {
            --border-angle: 495deg;
          }
        }
      `}</style>
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "0 2rem",
      }}>
        {/* Section Heading */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "5rem",
        }}>
          <span style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#666666",
            marginBottom: "1rem",
            display: "inline-block",
            padding: "4px 12px",
            border: "1px solid #eaeaea",
            borderRadius: "100px",
            backgroundColor: "#ffffff"
          }}>
            CAPABILITIES
          </span>
          <h2 style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 500,
            color: "#111111",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            maxWidth: "48rem"
          }}>
            Everything you need to build what's next.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "1.125rem",
            color: "#666666",
            fontWeight: 400,
            maxWidth: "36rem",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Venture creation, product engineering, and intelligent automation. All operating under one roof.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-[2rem]">
          {featuresData.map((item, idx) => (
            <div
              key={idx}
              className="gradient-border-card relative block h-full w-full rounded-2xl p-10 flex flex-col transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 border-2 border-[#e2e8f0] rounded-lg flex items-center justify-center mb-6 text-[#111111] bg-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-mono text-xl font-medium text-[#111111] mb-6">
                {item.title}
              </h3>

              {/* Dotted Separator */}
              <div className="border-t border-dotted border-neutral-300 w-full mb-6" />

              {/* Description */}
              <p className="font-sans text-[#666666] leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
