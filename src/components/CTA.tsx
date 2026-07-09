"use client";
import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#f9fafb", // Match Syntiq light section
        padding: "8rem 0",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "76rem",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "4rem",
      }}>
        {/* Left Side: Large Heading */}
        <div style={{ flex: "1 1 500px" }}>
          <h2 style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 500,
            color: "#111111",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: 0,
            maxWidth: "32rem",
          }}>
            Stop sitting on ideas. Start building.
          </h2>
        </div>

        {/* Right Side: Description and Actions */}
        <div style={{ 
          flex: "1 1 300px", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "flex-start",
          maxWidth: "28rem"
        }}>
          <p style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "1.125rem",
            color: "#666666",
            lineHeight: 1.6,
            margin: "0 0 2rem 0",
          }}>
            If you have an idea, we have the team, the tools, and the drive to build it.
          </p>
          
          <div style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap"
          }}>
            <Link
              href="/contact"
              style={{
                background: "#111111",
                color: "#ffffff",
                padding: "0.8rem 1.5rem",
                borderRadius: "6px",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              style={{
                background: "#ffffff",
                color: "#111111",
                padding: "0.8rem 1.5rem",
                borderRadius: "6px",
                border: "1px solid #eaeaea",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
              }}
            >
              Talk to us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
