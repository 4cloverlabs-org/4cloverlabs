"use client";
import React from "react";

export default function WhyUs() {
  const beforeTitle = "Without 4CloverLabs";

  const beforeItems = [
    "One idea with no safety net",
    "Building alone, burning out fast",
    "Starting from scratch every time",
    "Exit pressure before product-market fit",
  ];

  const withTitle = "With 4CloverLabs";

  const withItems = [
    "A portfolio of independent ventures",
    "Small, focused team that ships",
    "Shared infrastructure from day one",
    "Built for longevity, not a quick exit",
  ];

  const realityLabel = "[ REALITY ]";
  const realityQuote = "Most studios pitch decks. We ship products.";
  const realitySubtext = "The difference between an idea and a business isn't funding or strategy — it's a team that actually builds.";

  return (
    <section style={{
      position: "relative",
      width: "100%",
      backgroundColor: "var(--background)",
      padding: "8rem 0",
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .why-us-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          width: 100%;
        }
        @media (min-width: 992px) {
          .why-us-grid {
            grid-template-columns: 380px 1fr;
            gap: 4rem;
            align-items: start;
          }
        }
        .why-us-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          width: 100%;
        }
        @media (min-width: 640px) {
          .why-us-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      ` }} />
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "0 2rem",
      }}>
        <div className="why-us-grid">
          {/* Left Column: Info & Tag */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
            <span style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-accent-orange)",
              padding: "4px 12px",
              border: "1px solid var(--color-neutral-200)",
              borderRadius: "100px",
              backgroundColor: "var(--color-neutral-50)",
              marginBottom: "2rem",
              display: "inline-block",
            }}>
              WHY US
            </span>

            <div style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-neutral-500)",
              marginBottom: "0.75rem",
              letterSpacing: "0.05em",
            }}>
              {realityLabel}
            </div>

            <h2 style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 600,
              color: "var(--color-deep-black)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              margin: "0 0 1.5rem 0",
            }}>
              {realityQuote}
            </h2>

            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "var(--color-neutral-600)",
              margin: 0,
            }}>
              {realitySubtext}
            </p>
          </div>

          {/* Right Column: Comparison Cards */}
          <div className="why-us-cards">
            {/* Card 1: Without 4CloverLabs */}
            <div className="brand-card" style={{
              backgroundColor: "var(--color-neutral-white)",
              border: "1px solid var(--color-neutral-200)",
              borderRadius: "8px",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}>
              {/* Cross Icon */}
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                border: "1px solid var(--color-neutral-200)",
                backgroundColor: "var(--color-neutral-white)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-black)" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>

              <h3 style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "22px",
                fontWeight: 500,
                color: "var(--color-deep-black)",
                margin: "0 0 1.25rem 0",
                letterSpacing: "normal"
              }}>
                {beforeTitle}
              </h3>

              {/* Dashed Line */}
              <div style={{
                borderBottom: "1px dashed var(--color-neutral-300)",
                marginBottom: "1.75rem",
                width: "100%",
              }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {beforeItems.map((item, i) => (
                  <li key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "var(--color-neutral-600)",
                    lineHeight: "1.6",
                  }}>
                    <span style={{ color: "var(--color-neutral-400)", userSelect: "none" }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: With 4CloverLabs */}
            <div className="brand-card" style={{
              backgroundColor: "var(--color-neutral-white)",
              border: "1px solid var(--color-neutral-200)",
              borderRadius: "8px",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Top Gradient Border */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "6px",
                background: "linear-gradient(90deg, #60656E 0%, #E3E6EB 100%)",
              }} />

              {/* Check Icon */}
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                backgroundColor: "var(--color-deep-black)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                border: "1px solid var(--color-deep-black)",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-white)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <h3 style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "22px",
                fontWeight: 500,
                color: "var(--color-deep-black)",
                margin: "0 0 1.25rem 0",
                letterSpacing: "normal"
              }}>
                {withTitle}
              </h3>

              {/* Dashed Line */}
              <div style={{
                borderBottom: "1px dashed var(--color-neutral-300)",
                marginBottom: "1.75rem",
                width: "100%",
              }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {withItems.map((item, i) => (
                  <li key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "var(--color-neutral-700)",
                    lineHeight: "1.6",
                  }}>
                    <span style={{ color: "var(--color-neutral-400)", userSelect: "none" }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
