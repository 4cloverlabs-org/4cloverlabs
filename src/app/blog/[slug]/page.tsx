import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blog-posts";

/* ─── generateStaticParams ──────────────────────────────── */

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

/* ─── generateMetadata ──────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — 4CloverLabs Blog`,
    description: post.excerpt,
  };
}

/* ─── PAGE ──────────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.body.split("\n\n").filter(Boolean);

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
      <style>{`
        .blog-back-link { color: #888; transition: color 0.2s; }
        .blog-back-link:hover { color: #F04020; }
        .blog-cta-btn { background: #F04020; transition: background 0.2s; }
        .blog-cta-btn:hover { background: #c93510; }
        .blog-bottom-back { color: #888; text-decoration: underline; text-underline-offset: 3px; transition: color 0.2s; }
        .blog-bottom-back:hover { color: #F04020; }
      `}</style>
      <Header />

      {/* ── Hero image ───────────────────────────────────── */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "3rem 2.5rem 0",
        }}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "21/9",
            overflow: "hidden",
            background: "#222",
          }}
        >
          <Image
            src={post.img}
            alt={post.title}
            width={1400}
            height={600}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────── */}
      <article
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "3.5rem 2.5rem 8rem",
        }}
      >
        {/* Back link */}
        <Link
          href="/blog"
          className="blog-back-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            marginBottom: "2rem",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All posts
        </Link>

        {/* Separator */}
        <div
          style={{
            borderTop: "2px solid #111",
            marginBottom: "1.75rem",
          }}
        />

        {/* Meta: tag + date + read time */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
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
            {post.tag}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "3px 14px",
              borderRadius: "9999px",
              border: "1.5px solid #ccc",
              color: "#555",
              fontSize: "0.72rem",
              fontWeight: 600,
            }}
          >
            {post.date}
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              color: "#999",
              fontWeight: 500,
            }}
          >
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textTransform: "uppercase",
            color: "#111",
            marginBottom: "2rem",
          }}
        >
          {post.title}
        </h1>

        {/* Excerpt (lead) */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#444",
            lineHeight: 1.75,
            fontWeight: 500,
            marginBottom: "2.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px dashed #ccc",
          }}
        >
          {post.excerpt}
        </p>

        {/* Body paragraphs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "1rem",
                color: "#333",
                lineHeight: 1.8,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2.5rem",
            background: "#111",
            color: "#fff",
            borderRadius: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
            }}
          >
            Ready to put this into practice?
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#aaa",
              lineHeight: 1.6,
              maxWidth: "460px",
            }}
          >
            We build AI-native systems for founders and operators who want to
            move faster. Let&apos;s talk.
          </p>
          <Link
            href="/#contact"
            className="blog-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#fff",
              padding: "0.7rem 1.4rem",
              borderRadius: "9999px",
              fontWeight: 800,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            Get in touch
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* Back to blog */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link
            href="/blog"
            className="blog-bottom-back"
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            ← Back to all posts
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
