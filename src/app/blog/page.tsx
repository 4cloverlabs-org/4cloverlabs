"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FEATURED_POST, GRID_POSTS } from "@/data/blog-posts";

/* ─── TAG PILL ───────────────────────────────────────────── */

function TagPill({ tag }: { tag: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 12px",
        borderRadius: "9999px",
        background: "#F04020",
        color: "#fff",
        fontSize: "0.65rem",
        fontWeight: 800,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {tag}
    </span>
  );
}

function DatePill({ date }: { date: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 14px",
        borderRadius: "9999px",
        border: "1.5px solid #ccc",
        background: "transparent",
        color: "#555",
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.03em",
      }}
    >
      {date}
    </span>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */

export default function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0ece6",
        color: "#111111",
        fontFamily: "var(--font-geist-sans, 'Geist', 'Inter', sans-serif)",
        overflowX: "hidden",
      }}
    >
      <Header />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "5rem 2.5rem 0",
        }}
      >
        {/* Large title */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            textTransform: "uppercase",
            color: "#111",
            marginBottom: "3rem",
          }}
        >
          The Latest,
          <br />
          from 4CloverLabs
        </h1>

        {/* Sub-row: description + email | featured image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: desc + subscribe */}
          <div style={{ paddingBottom: "2rem" }}>
            <div
              style={{
                borderTop: "2px solid #111",
                paddingTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            />
            <p
              style={{
                fontSize: "0.95rem",
                color: "#555",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "360px",
              }}
            >
              Insights on AI strategy, automation engineering, and building
              systems that actually work — straight from the team at 4CloverLabs.
            </p>

            {/* Subscribe */}
            {subscribed ? (
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#F04020",
                  letterSpacing: "0.02em",
                }}
              >
                ✓ You&apos;re subscribed!
              </p>
            ) : (
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: "1 1 180px",
                    padding: "0.6rem 1rem",
                    border: "1.5px solid #ccc",
                    borderRadius: "6px",
                    background: "#fff",
                    fontSize: "0.875rem",
                    color: "#111",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  onClick={() => {
                    if (email.includes("@")) setSubscribed(true);
                  }}
                  style={{
                    padding: "0.6rem 1.25rem",
                    background: "#F04020",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: 800,
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "#c93510")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "#F04020")
                  }
                >
                  Submit
                </button>
              </div>
            )}
          </div>

          {/* Right: featured hero image — clickable */}
          <Link
            href={`/blog/${FEATURED_POST.slug}`}
            style={{
              display: "block",
              overflow: "hidden",
              aspectRatio: "16/10",
              background: "#222",
              textDecoration: "none",
            }}
          >
            <Image
              src={FEATURED_POST.img}
              alt={FEATURED_POST.title}
              width={900}
              height={562}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
              priority
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1.03)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1)")
              }
            />
          </Link>
        </div>
      </section>

      {/* ── FEATURED POST DETAILS ──────────────────────────────── */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2.5rem 4rem",
        }}
      >
        <Link
          href={`/blog/${FEATURED_POST.slug}`}
          style={{ display: "block", maxWidth: "640px", textDecoration: "none", color: "inherit" }}
        >
          {/* Separator line */}
          <div
            style={{
              borderTop: "2px solid #111",
              margin: "2rem 0 1.5rem",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textTransform: "uppercase",
              color: "#111",
              marginBottom: "0.75rem",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) =>
              ((e.currentTarget as HTMLHeadingElement).style.color = "#F04020")
            }
            onMouseOut={(e) =>
              ((e.currentTarget as HTMLHeadingElement).style.color = "#111")
            }
          >
            {FEATURED_POST.title}
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: 1.65,
              marginBottom: "1.25rem",
            }}
          >
            {FEATURED_POST.excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <TagPill tag={FEATURED_POST.tag} />
            <DatePill date={FEATURED_POST.date} />
          </div>
        </Link>
      </section>

      {/* ── POST GRID ──────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2.5rem 8rem",
        }}
      >
        {/* 2-column grid of post cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0",
            borderTop: "1px solid #ccc",
          }}
        >
          {GRID_POSTS.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: "1.5rem",
                padding: "2.5rem 2rem",
                borderBottom: "1px solid #ccc",
                borderRight: i % 2 === 0 ? "1px solid #ccc" : "none",
                cursor: "pointer",
                transition: "background 0.2s",
                textDecoration: "none",
                color: "inherit",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(0,0,0,0.02)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent")
              }
            >
              {/* Thumbnail */}
              <div
                style={{
                  width: "180px",
                  aspectRatio: "1",
                  overflow: "hidden",
                  background: "#ddd",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={post.img}
                  alt={post.title}
                  width={360}
                  height={360}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>

              {/* Text */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                }}
              >
                <div>
                  {/* Separator line above title */}
                  <div
                    style={{
                      borderTop: "2px solid #111",
                      marginBottom: "0.9rem",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      textTransform: "uppercase",
                      color: "#111",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <TagPill tag={post.tag} />
                  <DatePill date={post.date} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More coming soon */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            border: "1px dashed #ccc",
            borderRadius: "12px",
            textAlign: "center",
            color: "#aaa",
            fontSize: "0.85rem",
            fontWeight: 500,
          }}
        >
          More posts coming soon — subscribe above to stay in the loop.
        </div>
      </section>

      <Footer />
    </div>
  );
}
