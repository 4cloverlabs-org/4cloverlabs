"use client";

import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";

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
    <div className="min-h-screen bg-[#E9F4EF] flex flex-col font-sans text-[#111111]">
      {/* Back link */}
      <div className="px-6 md:px-12 lg:px-24 py-10">
        <Link
          href="/#features"
          className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity font-mono text-sm uppercase tracking-widest font-bold"
        >
          <span>&larr;</span> Back to Home
        </Link>
      </div>

      {/* Centred content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-24">


        {/* Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#111111] text-[#E9F4EF] font-mono text-xs px-2 py-1 uppercase tracking-widest">
            PRODUCT
          </span>
          <span className="font-mono text-xs text-[#111111]/50 tracking-widest">{product.id}</span>
        </div>

        <h1 className="font-['Spectral'] text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4 max-w-2xl">
          COMING SOON!
        </h1>

        <p className="font-mono text-base tracking-[0.25em] uppercase text-[#111111]/40 mb-12">
          Something's growing here — check back soon
        </p>
      </div>

      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
        }
      `}</style>
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

  // Muted background colors for badges
  const badgeColors = [
    "bg-[#F1E3D3] text-[#5C4033]",
    "bg-[#E2E3F4] text-[#4A4B82]",
    "bg-[#FDF3C7] text-[#786115]",
    "bg-[#FCE8E6] text-[#8C3A32]"
  ];

  return (
    <div className="min-h-screen bg-[#E9F4EF] py-16 px-6 md:px-12 lg:px-24 font-sans text-[#111111] relative">


      <div className="max-w-[1000px] mx-auto">
        <Link
          href="/#features"
          className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity font-['Inter'] text-sm uppercase tracking-widest font-bold"
        >
          <span>&larr;</span> Back
        </Link>

        <div className="flex flex-col gap-12">
          {/* Header Title & Tags */}
          <div className="text-center md:text-left">
            <h1 className="font-['Spectral'] text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              {product.name}
            </h1>

            {product.tags && (
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-2">
                {product.tags.map((tag, idx) => {
                  const colorClass = badgeColors[idx % badgeColors.length];
                  return (
                    <span
                      key={tag}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${colorClass}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Large Main Banner */}
          <div className="w-full aspect-[16/9] relative bg-[#111111]/5 rounded-[32px] overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Project Details Grid & Button */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              <div className="border-b border-[#111111]/15 pb-2">
                <span className="font-mono text-[10px] tracking-widest text-[#111111]/60 block uppercase">CLIENT</span>
                <span className="font-['Spectral'] text-xl font-bold text-[#111111]">{product.client || product.name}</span>
              </div>
              <div className="border-b border-[#111111]/15 pb-2">
                <span className="font-mono text-[10px] tracking-widest text-[#111111]/60 block uppercase">DURATION</span>
                <span className="font-['Spectral'] text-xl font-bold text-[#111111]">{product.duration || "N/A"}</span>
              </div>
              <div className="border-b border-[#111111]/15 pb-2">
                <span className="font-mono text-[10px] tracking-widest text-[#111111]/60 block uppercase">YEAR</span>
                <span className="font-['Spectral'] text-xl font-bold text-[#111111]">{product.year || "2026"}</span>
              </div>
              <div className="border-b border-[#111111]/15 pb-2">
                <span className="font-mono text-[10px] tracking-widest text-[#111111]/60 block uppercase">INDUSTRY</span>
                <span className="font-['Spectral'] text-xl font-bold text-[#111111]">{product.industry || "N/A"}</span>
              </div>
            </div>

            {product.liveUrl && (
              <div className="py-2">
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-3 bg-[#FCD269] text-[#111111] font-bold text-sm border border-[#111111] rounded-[18px] shadow-[4px_4px_0px_#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111] transition-all"
                >
                  Live Website
                </a>
              </div>
            )}
          </div>

          {/* Description Paragraph */}
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-[#111111]/85 leading-relaxed">
              {product.details}
            </p>
          </div>

          {/* Secondary Images (Side-by-Side) */}
          {product.secondaryImages && product.secondaryImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.secondaryImages.map((imgUrl, i) => (
                <div key={i} className="w-full aspect-[4/3] relative rounded-3xl overflow-hidden shadow-sm bg-[#111111]/5">
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
            <div className="max-w-2xl py-6">
              <h2 className="font-['Spectral'] text-3xl font-bold mb-4 flex items-center gap-2 text-[#111111]">
                <span>💡</span> Subservices Provided:
              </h2>
              <p className="text-[#111111]/70 mb-6 font-medium font-sans">What services we offered in this project:</p>

              <ol className="list-decimal pl-5 space-y-4">
                {product.subservices.map((sub, i) => (
                  <li key={i} className="font-bold text-lg text-[#111111] font-sans">
                    {sub.title}:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-base font-normal text-[#111111]/80 font-sans">
                      {sub.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          )}


          {/* The Problem / What We Did Grid */}
          {(product.problem || product.whatWeDid) && (
            <div className="border-t border-[#111111]/10 pt-10 flex flex-col gap-10">
              {product.problem && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
                  <h3 className="font-['Spectral'] text-2xl md:text-3xl font-bold text-[#111111] md:col-span-1">
                    The Problem
                  </h3>
                  <p className="text-base text-[#111111]/80 leading-relaxed md:col-span-2">
                    {product.problem}
                  </p>
                </div>
              )}

              {product.whatWeDid && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start border-t border-[#111111]/10 pt-10">
                  <h3 className="font-['Spectral'] text-2xl md:text-3xl font-bold text-[#111111] md:col-span-1">
                    What we Did
                  </h3>
                  <p className="text-base text-[#111111]/80 leading-relaxed md:col-span-2">
                    {product.whatWeDid}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Other Businesses */}
          <div className="mt-20 pt-12 border-t border-[#111111]/10">
            <h2 className="font-['Spectral'] text-2xl md:text-3xl font-bold mb-8">Other Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter((p) => p.slug !== product.slug)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map((p) => (
                  <Link
                    href={`/products/${p.slug}`}
                    key={p.id}
                    className="group flex flex-col gap-4"
                  >
                    <div className="w-full aspect-video relative bg-[#111111]/5 overflow-hidden rounded-lg">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm tracking-widest font-bold group-hover:opacity-70 transition-opacity">
                        {p.name}
                      </h3>
                      <p className="text-[#111111]/60 text-sm mt-1">{p.description || "Coming soon"}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
