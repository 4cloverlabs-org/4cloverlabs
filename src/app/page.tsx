import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ImageCards from "@/components/OurProcess";
import Contact from "@/components/CTA";
import Footer from "@/components/Footer";
import { DashedBorderWrapper, SectionDivider } from "@/components/DashedBorder";
import { BlueprintGrid, SectionWatermark, DotGrid } from "@/components/AbstractPatterns";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] overflow-x-hidden selection:bg-[#ff4f00] selection:text-white">
      <Header />

      <main className="relative w-full">
        {/* HERO - #FAFAFA */}
        <section className="relative bg-[#FAFAFA] overflow-hidden">
          <DotGrid opacity={0.03} />
          <Hero />
        </section>

        <SectionDivider bgColor="#F7F7F7" />

        {/* FEATURES - #F7F7F7 */}
        <section className="relative bg-[#F7F7F7] overflow-hidden">
          <BlueprintGrid opacity={0.04} />
          <SectionWatermark text="BUILD" className="top-20 left-10" />
          <DashedBorderWrapper>
            <Features />
          </DashedBorderWrapper>
        </section>

        <SectionDivider bgColor="#F3F3F3" />

        {/* PROCESS - #F3F3F3 */}
        <section className="relative bg-[#F3F3F3] overflow-hidden">
          <SectionWatermark text="SYSTEMS" className="bottom-10 right-10" />
          <DashedBorderWrapper>
            <ImageCards />
          </DashedBorderWrapper>
        </section>
        <SectionDivider bgColor="#FAFAFA" />

        {/* CTA - #FAFAFA */}
        <section className="relative bg-[#FAFAFA] overflow-hidden">
          <DotGrid opacity={0.05} />
          <SectionWatermark text="VENTURE" className="top-0 left-1/2 -translate-x-1/2 opacity-30" />
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
