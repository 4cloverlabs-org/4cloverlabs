"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const processSteps = [
  {
    id: "step-1",
    tag: "STEP 01",
    num: "01",
    title: "Identify the Opportunity",
    shortTitle: "Identify",
    desc: "We scan market gaps at the intersection of AI, automation, and emerging tech - then pressure-test the concept against our portfolio, resources, and long term thesis.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="currentColor">
        <path d="M 5 30 A 11 11 0 0 1 27 30 Z" />
        <path d="M 8 17 A 8 8 0 0 1 24 17 Z" />
        <path d="M 11 7 A 5 5 0 0 1 21 7 Z" />
      </svg>
    )
  },
  {
    id: "step-2",
    tag: "STEP 02",
    num: "02",
    title: "Define the Venture",
    shortTitle: "Define",
    desc: "We scope the product, name the business, and lock the go-to-market angle. Brand, architecture, and first-sprint priorities get defined before a single line of code is written.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="currentColor">
        <g transform="rotate(45 16 16)">
          <circle cx="16" cy="16" r="7" />
          <path d="M 10 6 C 10 2 22 2 22 6 Z" />
          <path d="M 26 10 C 30 10 30 22 26 22 Z" />
          <path d="M 22 26 C 22 30 10 30 10 26 Z" />
          <path d="M 6 22 C 2 22 2 10 6 10 Z" />
        </g>
      </svg>
    )
  },
  {
    id: "step-3",
    tag: "STEP 03",
    num: "03",
    title: "Build the MVP",
    shortTitle: "Build",
    desc: "Our internal engineering team ships a working product - real infrastructure, real UI, and direct AI integrations. Everything is engineered for scalability from day one.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="7" cy="7" r="4" />
        <circle cx="16" cy="7" r="4" />
        <circle cx="25" cy="7" r="4" />
        <circle cx="7" cy="16" r="4" />
        <circle cx="16" cy="16" r="4" />
        <circle cx="25" cy="16" r="4" />
        <circle cx="7" cy="25" r="4" />
        <circle cx="16" cy="25" r="4" />
        <circle cx="25" cy="25" r="4" />
      </svg>
    )
  },
  {
    id: "step-4",
    tag: "STEP 04",
    num: "04",
    title: "Launch & Scale",
    shortTitle: "Launch",
    desc: "The venture goes live as an independent business with its own identity, domain, and market presence - backed by 4CloverLabs' robust core infrastructure.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 32 32" fill="currentColor">
        <path d="M 5 27 L 21 27 A 16 16 0 0 0 5 11 Z" />
        <circle cx="24" cy="8" r="5" />
      </svg>
    )
  }
];

interface ProcessCardProps {
  step: typeof processSteps[0];
  index: number;
  isActive: boolean;
  setActiveIndex: (index: number) => void;
}

function ProcessCard({ step, index, isActive, setActiveIndex }: ProcessCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: 0.5,
    margin: "-10% 0px -10% 0px"
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => {
        setActiveIndex(index);
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
      className={`group relative p-8 md:p-10 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden ${
        isActive 
          ? 'bg-[#E85F1E] text-white shadow-[0_20px_40px_-15px_rgba(232,95,30,0.3)]' 
          : 'bg-[#ECECEC] text-neutral-900 hover:bg-[#e2e2e2]'
      }`}
    >
      {isActive && (
         <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      )}
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-6 mb-2">
          <div className={`p-4 rounded-2xl transition-colors duration-500 ${isActive ? 'bg-white/10 text-white' : 'bg-white text-neutral-900 shadow-sm'}`}>
             {step.icon}
          </div>
          <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-500`}>
            {step.title}
          </h3>
        </div>
        <p className={`text-lg leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-neutral-500'}`}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="process" className="relative w-full py-24 md:py-32 z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Sticky Content */}
        <div className="w-full lg:w-[40%] flex flex-col items-start lg:sticky lg:top-32 h-fit">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-mono text-sm font-semibold text-[#E85F1E] tracking-widest mb-6 block"
          >
            [ OUR PROCESS ]
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,4vw,3.5rem)] font-medium text-neutral-900 leading-[1.1] tracking-tight mb-6"
          >
            A simple process built for complex systems.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-500 font-normal leading-relaxed"
          >
            A focused studio process that takes a raw concept to a live, revenue-ready venture through structured development steps.
          </motion.p>
        </div>

        {/* Right Side: Process Cards */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              step={step}
              index={index}
              isActive={activeIndex === index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
