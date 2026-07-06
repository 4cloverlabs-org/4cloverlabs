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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      <Header />

      {/* ── Hero image ───────────────────────────────────── */}
      <div className="w-full pt-32 pb-16 px-6 lg:px-16 border-b-[3px] border-[var(--foreground)] bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto border-[3px] border-[var(--foreground)] aspect-[21/9] overflow-hidden bg-[var(--foreground)] brutal-shadow relative group">
          <Image
            src={post.img}
            alt={post.title}
            width={1400}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-luminosity hover:mix-blend-normal"
            priority
          />
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────── */}
      <article className="max-w-4xl mx-auto py-24 px-6 lg:px-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest font-mono text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors duration-200 mb-12"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All posts
        </Link>

        {/* Separator */}
        <div className="border-t-[3px] border-[var(--foreground)] mb-10" />

        {/* Meta: tag + date + read time */}
        <div className="flex items-center gap-4 mb-10 flex-wrap">
          <span className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)] border-[3px] border-[var(--foreground)] text-[var(--foreground)] text-xs font-bold uppercase tracking-widest font-mono brutal-shadow">
            {post.tag}
          </span>
          <span className="inline-flex items-center px-4 py-1 border-[3px] border-[var(--foreground)] bg-[var(--background)] text-[var(--foreground)] text-xs font-bold tracking-widest uppercase font-mono brutal-shadow">
            {post.date}
          </span>
          <span className="text-xs font-mono font-bold text-[var(--foreground)] opacity-70 uppercase tracking-widest">
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-tighter leading-[1.0] uppercase text-[var(--foreground)] mb-12">
          {post.title}
        </h1>

        {/* Excerpt (lead) */}
        <p className="text-xl font-mono font-bold text-[var(--foreground)] leading-relaxed mb-16 pb-12 border-b-[3px] border-[var(--foreground)]">
          {post.excerpt}
        </p>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-8">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-lg font-mono font-medium text-[var(--foreground)] leading-loose opacity-90">
              {para}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 p-10 md:p-16 brutal-card bg-[var(--background-secondary)] text-[var(--foreground)] flex flex-col gap-8 items-start brutal-shadow">
          <p className="text-3xl font-bold uppercase tracking-tight leading-[1.1]">
            Ready to put this into practice?
          </p>
          <p className="text-lg font-mono font-medium opacity-80 max-w-xl">
            We build AI-native systems for founders and operators who want to move faster. Let's talk.
          </p>
          <Link
            href="/#contact"
            className="brutal-btn bg-[var(--color-primary)] text-[var(--foreground)] font-bold text-sm px-8 py-4 uppercase tracking-widest inline-flex items-center gap-3 mt-4"
          >
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* Back to blog */}
        <div className="mt-16 text-center border-t-[3px] border-[var(--foreground)] pt-12">
          <Link
            href="/blog"
            className="text-sm font-bold uppercase font-mono tracking-widest text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
