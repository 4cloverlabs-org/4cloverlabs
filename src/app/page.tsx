import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ImageCards from "@/components/OurProcess";
import Steps from "@/components/WhyUs";
import Contact from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main>
        <Hero />
        <Features />
        <ImageCards />
        <Steps />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
