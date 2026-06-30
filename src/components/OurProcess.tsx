"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const processSteps = [
  {
    id: "step-1",
    duration: "WEEKS 1–2",
    num: "01",
    title: "Identify the Opportunity",
    desc: "We scan market gaps at the intersection of AI, automation, and emerging tech — then pressure-test the concept against our portfolio, resources, and long-term thesis."
  },
  {
    id: "step-2",
    duration: "WEEKS 3–4",
    num: "02",
    title: "Define the Venture",
    desc: "We scope the product, name the business, and lock the go-to-market angle. Brand, architecture, and first-sprint priorities get defined before a single line of code is written."
  },
  {
    id: "step-3",
    duration: "WEEKS 5–10",
    num: "03",
    title: "Build the MVP",
    desc: "Our internal team ships a working product — real infrastructure, real UI, real AI integration. No outsourcing, no hand-offs. Everything built to own and scale."
  },
  {
    id: "step-4",
    duration: "WEEKS 11-12",
    num: "04",
    title: "Launch under its own Brand",
    desc: "The venture goes live as an independent business with its own identity, domain, and market presence — backed by 4CloverLabs' infrastructure and capital from day one."
  }
];

export default function ProcessSection() {
  const [activeId, setActiveId] = useState("step-1");
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // Trigger when element is near the middle of viewport
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="relative w-full overflow-visible bg-[#f0ece6] py-32 border-b border-dashed border-gray-300">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-l border-r border-dashed border-[#DEDEDE]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        {/* Left Column: Fixed Text */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-32 flex flex-col items-start">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-300 bg-transparent mb-8 shadow-sm">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">
              OUR PROCESS
            </span>
          </div>

          <h2 className="text-[3rem] md:text-[4rem] font-serif text-[#111] leading-[1.05] tracking-tight mb-6">
            From Idea <br /> To Operating Business.
          </h2>

          <p className="text-[16px] text-[#666] font-medium leading-relaxed mb-10 max-w-sm">
            A focused studio process that takes a raw concept to a live, revenue-ready venture — without the overhead of an agency or the chaos of a solo build.
          </p>

        </div>

        {/* Right Column: Scrolling Cards */}
        <div className="w-full lg:w-[55%] flex flex-col gap-10">
          {processSteps.map((step, index) => {
            const isActive = activeId === step.id;

            return (
              <div
                key={step.id}
                id={step.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                className="flex flex-col gap-2 transition-all duration-500"
              >
                {/* Header Strip */}
                <div className={`px-6 py-3 rounded-[1rem] flex justify-between items-center transition-colors duration-500 shadow-sm border ${isActive
                  ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                  : "bg-[#F9F7F5] border-dashed border-[#C0C0C0] text-[#111]"
                  }`}>
                  <span className="text-[10px] font-bold tracking-widest uppercase">{step.duration}</span>
                  <div className="flex gap-1">
                    <div className={`w-1 h-3 rounded-full ${isActive ? "bg-[#F9F7F5]" : "bg-[#1A1A1A]"}`}></div>
                    <div className={`w-1 h-3 rounded-full ${isActive ? "bg-white/20" : "bg-black/10"}`}></div>
                    <div className={`w-1 h-3 rounded-full ${isActive ? "bg-white/20" : "bg-black/10"}`}></div>
                    <div className={`w-1 h-3 rounded-full ${isActive ? "bg-white/20" : "bg-black/10"}`}></div>
                  </div>
                </div>

                {/* Main Body */}
                <div className={`p-8 md:p-12 rounded-[2rem] transition-colors duration-500 shadow-sm border ${isActive
                  ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                  : "bg-[#F9F7F5] border-dashed border-[#C0C0C0] text-[#111]"
                  }`}>
                  <div className={`text-[15px] font-bold mb-4 ${isActive ? "text-white" : "text-[#111]"}`}>
                    {step.num}
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className={`text-[15px] font-medium leading-relaxed max-w-md ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
