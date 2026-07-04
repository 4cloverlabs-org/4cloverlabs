import React from "react";
import Header from "@/components/Header";
import Contact from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | 4CloverLabs",
  description:
    "Have an idea that keeps you up at night? Reach out to the 4CloverLabs team — we'd love to hear it.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f0ece6]">
      <Header />

      <main>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
