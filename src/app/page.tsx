import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ImageCards from "@/components/OurProcess";
import Steps from "@/components/WhyUs";
import Contact from "@/components/CTA";
import Footer from "@/components/Footer";
import { DashedBorderWrapper, SectionDivider } from "@/components/DashedBorder";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] overflow-x-hidden">
      <Header />

      <main className="relative w-full bg-[#F5F5F5]">
        <Hero />
        <SectionDivider bgColor="#F5F5F5" />

        <DashedBorderWrapper bgColor="#F5F5F5">
          <Features />
          <SectionDivider bgColor="#F5F5F5" />
          <ImageCards />
          <SectionDivider bgColor="#F5F5F5" />
          <Steps />
        </DashedBorderWrapper>

        <SectionDivider bgColor="#F5F5F5" />
        <div className="h-16" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
