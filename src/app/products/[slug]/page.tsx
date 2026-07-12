"use client";

import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function ComingSoonPage({ product }: { product: (typeof products)[0] }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col font-sans text-[var(--foreground)]">
      <Header />
      {/* Back link */}
      <div className="px-6 md:px-12 lg:px-24 py-10 border-b-[3px] border-[var(--foreground)]">
        <Link
          href="/#features"
          className="inline-flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors font-mono text-sm uppercase tracking-widest font-bold"
        >
          <span>&larr;</span> Back to Home
        </Link>
      </div>

      {/* Centred content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-24">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-[var(--foreground)] text-[var(--background)] font-mono text-xs px-3 py-1.5 uppercase tracking-widest font-bold">
            PRODUCT
          </span>
          <span className="font-mono text-xs text-[var(--foreground)] tracking-widest font-bold bg-[var(--color-primary)] px-3 py-1.5 border-[3px] border-[var(--foreground)] brutal-shadow">{product.id}</span>
        </div>

        <h1 className="text-[4rem] md:text-[6rem] font-bold tracking-tighter uppercase leading-none mb-6">
          COMING SOON!
        </h1>

        <p className="font-mono text-lg font-bold tracking-widest uppercase text-[var(--foreground)] mb-12 bg-[var(--background-secondary)] px-6 py-3 border-[3px] border-[var(--foreground)] brutal-shadow">
          Something's growing here — check back soon
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default function ProductPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // If no description/details, show the coming soon page
  if (!product.description || !product.details) {
    return <ComingSoonPage product={product} />;
  }

  return (
    <div className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] relative flex flex-col">
      <Header />

      <div className="flex-1 py-16 px-6 md:px-12 lg:px-24 border-b-[3px] border-[var(--foreground)]">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#features"
            className="inline-flex items-center gap-2 mb-12 hover:text-[var(--color-primary)] transition-colors font-mono text-sm uppercase tracking-widest font-bold"
          >
            <span>&larr;</span> Back
          </Link>

          <div className="flex flex-col gap-12">
            {/* Header Title & Tags */}
            <div className="text-left">
              <h1 className="text-[4rem] md:text-[6rem] font-bold tracking-tighter uppercase leading-none mb-8">
                {product.name}
              </h1>

              {product.tags && (
                <div className="flex flex-wrap gap-4 mb-4">
                  {product.tags.map((tag, idx) => (
                    <span
                      key={tag}
                      className="px-4 py-2 border-[3px] border-[var(--foreground)] bg-[var(--color-primary)] text-[var(--foreground)] text-xs font-bold uppercase tracking-widest font-mono brutal-shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Large Main Banner */}
            <div className="w-full aspect-[16/9] relative bg-[var(--foreground)] border-[3px] border-[var(--foreground)] overflow-hidden brutal-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Project Details Grid & Button */}
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-2 md:grid-cols-4 border-[3px] border-[var(--foreground)] bg-[var(--background-secondary)] brutal-shadow">
                <div className="border-b-[3px] md:border-b-0 border-r-[3px] border-[var(--foreground)] p-6">
                  <span className="font-mono text-[10px] tracking-widest text-[var(--foreground)] font-bold block uppercase mb-2">CLIENT</span>
                  <span className="text-xl font-bold uppercase">{product.client || product.name}</span>
                </div>
                <div className="border-b-[3px] md:border-b-0 md:border-r-[3px] border-[var(--foreground)] p-6">
                  <span className="font-mono text-[10px] tracking-widest text-[var(--foreground)] font-bold block uppercase mb-2">DURATION</span>
                  <span className="text-xl font-bold uppercase">{product.duration || "N/A"}</span>
                </div>
                <div className="border-r-[3px] border-[var(--foreground)] p-6">
                  <span className="font-mono text-[10px] tracking-widest text-[var(--foreground)] font-bold block uppercase mb-2">YEAR</span>
                  <span className="text-xl font-bold uppercase">{product.year || "2026"}</span>
                </div>
                <div className="p-6">
                  <span className="font-mono text-[10px] tracking-widest text-[var(--foreground)] font-bold block uppercase mb-2">INDUSTRY</span>
                  <span className="text-xl font-bold uppercase">{product.industry || "N/A"}</span>
                </div>
              </div>

              {product.liveUrl && (
                <div className="py-2">
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn inline-block px-8 py-4 bg-[var(--color-primary)] text-[var(--foreground)] font-bold text-sm uppercase tracking-widest"
                  >
                    Live Website ↗
                  </a>
                </div>
              )}
            </div>

            {/* Description Paragraph */}
            <div className="max-w-4xl bg-[var(--background-secondary)] border-[3px] border-[var(--foreground)] p-8 brutal-shadow">
              <p className="text-lg md:text-xl font-mono font-medium leading-relaxed">
                {product.details}
              </p>
            </div>

            {/* Secondary Images (Side-by-Side) */}
            {product.secondaryImages && product.secondaryImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.secondaryImages.map((imgUrl, i) => (
                  <div key={i} className="w-full aspect-[4/3] relative overflow-hidden bg-[var(--foreground)] border-[3px] border-[var(--foreground)] brutal-shadow">
                    <img
                      src={imgUrl}
                      alt={`${product.name} detail view ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Subservices section */}
            {product.subservices && product.subservices.length > 0 && (
              <div className="max-w-3xl py-12 border-t-[3px] border-[var(--foreground)]">
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 flex items-center gap-4">
                  <span className="bg-[var(--color-primary)] border-[3px] border-[var(--foreground)] px-2 py-1 text-sm font-mono brutal-shadow">SERVICES</span>
                  What we provided
                </h2>

                <ol className="mt-8 flex flex-col gap-6">
                  {product.subservices.map((sub, i) => (
                    <li key={i} className="font-bold text-xl uppercase tracking-tight">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-sm bg-[var(--foreground)] text-[var(--background)] px-2 py-1">0{i + 1}</span>
                        {sub.title}
                      </div>
                      <ul className="flex flex-col gap-3 font-mono text-base font-medium normal-case tracking-normal ml-12">
                        {sub.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <svg className="mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            )}


            {/* The Problem / What We Did Grid */}
            {(product.problem || product.whatWeDid) && (
              <div className="border-t-[3px] border-[var(--foreground)] pt-12 flex flex-col gap-12">
                {product.problem && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase md:col-span-1">
                      The Problem
                    </h3>
                    <p className="text-lg font-mono font-medium leading-relaxed md:col-span-2 p-6 bg-[var(--background-secondary)] border-[3px] border-[var(--foreground)] brutal-shadow">
                      {product.problem}
                    </p>
                  </div>
                )}

                {product.whatWeDid && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-t-[3px] border-[var(--foreground)] pt-12">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase md:col-span-1">
                      What we Did
                    </h3>
                    <p className="text-lg font-mono font-medium leading-relaxed md:col-span-2 p-6 bg-[var(--color-primary)] border-[3px] border-[var(--foreground)] brutal-shadow">
                      {product.whatWeDid}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Other Businesses */}
            <div className="mt-24 pt-16 border-t-[3px] border-[var(--foreground)]">
              <h2 className="text-4xl font-bold uppercase tracking-tight mb-12">Other Businesses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((p) => p.slug !== product.slug)
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      href={`/products/${p.slug}`}
                      key={p.id}
                      className="group flex flex-col gap-4 brutal-card p-4 bg-[var(--background-secondary)] brutal-shadow hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-200"
                    >
                      <div className="w-full aspect-video relative border-[3px] border-[var(--foreground)] overflow-hidden bg-[var(--foreground)]">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                        />
                      </div>
                      <div className="mt-2">
                        <h3 className="font-mono text-sm tracking-widest uppercase font-bold text-inherit">
                          {p.name}
                        </h3>
                        <p className="font-mono text-xs mt-2 font-medium opacity-80 text-inherit">{p.description || "Coming soon"}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
