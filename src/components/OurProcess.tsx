"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IdentifyOpportunity from "./process-graphics/IdentifyOpportunity";
import DefineVenture from "./process-graphics/DefineVenture";
import BuildMVP from "./process-graphics/BuildMVP";
import LaunchScale from "./process-graphics/LaunchScale";

const processSteps = [
  {
    id: "step-1",
    tag: "STEP 01",
    num: "01",
    title: "Identify the Opportunity",
    shortTitle: "Identify",
    desc: "We scan market gaps at the intersection of AI, automation, and emerging tech - then pressure-test the concept against our portfolio, resources, and long term thesis.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    )
  }
];

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="relative w-full py-24 z-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col">

        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
        >
          <div className="flex flex-col items-start">
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="font-mono text-sm font-semibold text-[#ff4f00] tracking-widest mb-6"
            >
              [ OUR PROCESS ]
            </motion.span>
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className=" text-[clamp(2.5rem,5vw,4rem)] font-medium text-neutral-900 leading-[1.05] tracking-tight max-w-2xl"
            >
              A simple process built for complex systems.
            </motion.h2>
          </div>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="font-sans text-lg text-neutral-500 font-normal max-w-[400px] leading-relaxed pb-2"
          >
            A focused studio process that takes a raw concept to a live, revenue-ready venture through structured development steps.
          </motion.p>
        </motion.div>

        {/* Tabs Card Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[580px]"
        >

          {/* Left Side: Tabs List */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center gap-3">
            {processSteps.map((step, index) => {
              const isActive = activeIndex === index;
              const distance = Math.abs(activeIndex - index);

              let opacityClass = "opacity-100";
              if (!isActive) {
                if (distance === 1) opacityClass = "opacity-75 hover:opacity-100";
                else if (distance === 2) opacityClass = "opacity-50 hover:opacity-100";
                else opacityClass = "opacity-40 hover:opacity-100";
              }

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative p-6 md:p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border ${opacityClass} ${isActive
                    ? 'bg-neutral-50 border-neutral-200 shadow-sm'
                    : 'bg-transparent border-transparent hover:bg-neutral-50/50'
                    }`}
                >
                  <div className="flex items-center gap-5">
                    {/* Progress Indicator */}
                    <div className="relative flex items-center justify-center shrink-0 w-12 h-12">
                      {isActive ? (
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
                          {/* Background Track - Beige/Light Brown */}
                          <circle cx="24" cy="24" r="23" fill="none" stroke="#e0d5c1" strokeWidth="2" />
                          <motion.circle
                            cx="24" cy="24" r="23"
                            fill="none"
                            stroke="currentColor"
                            className="text-[#ff4f00]"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 8, ease: "linear" }}
                          />
                        </svg>
                      ) : (
                        <div
                          className="absolute inset-0 rounded-full border-2 border-neutral-300 transition-colors duration-500"
                        />
                      )}
                      {isActive && (
                        <div
                          className="w-full h-full rounded-full bg-[#ff4f00]/10 absolute inset-0"
                        />
                      )}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-semibold z-10 transition-colors duration-500 ${isActive ? 'text-[#ff4f00]' : 'text-neutral-600'
                        }`}>
                        {step.num}
                      </div>
                    </div>

                    <h3 className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-500 ${isActive ? 'text-neutral-900' : 'text-neutral-700'
                      }`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Visual Area */}
          <div
            className="w-full lg:w-[55%] relative rounded-[2rem] overflow-hidden backdrop-blur-md border border-white/60 min-h-[580px] lg:min-h-auto"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.06), inset 0 rgba(255, 255, 255, 0.7)'
            }}
          >
            {/* Abstract Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-0" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <AnimatePresence>
              <motion.div
                key={activeIndex}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-10 w-full h-full flex flex-col justify-between p-8 md:p-12 text-left"
              >
                {/* Step Content Info */}
                <div className="flex flex-col items-start max-w-xl">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-medium text-neutral-900 tracking-tight mb-3"
                  >
                    {processSteps[activeIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.04 }}
                    className="text-neutral-500 text-base md:text-lg leading-relaxed"
                  >
                    {processSteps[activeIndex].desc}
                  </motion.p>
                </div>

                {/* Animation/Graphic Area */}
                <div className="flex-1 w-full flex items-center justify-center min-h-[220px] relative mt-6">
                  {activeIndex === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.02, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[340px] h-auto object-contain drop-shadow-sm flex items-center justify-center"
                    >
                      <IdentifyOpportunity />
                    </motion.div>
                  )}

                  {activeIndex === 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.02, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[340px] h-auto object-contain drop-shadow-sm flex items-center justify-center"
                    >
                      <DefineVenture />
                    </motion.div>
                  )}

                  {activeIndex === 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.02, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[340px] h-auto object-contain drop-shadow-sm flex items-center justify-center"
                    >
                      <BuildMVP />
                    </motion.div>
                  )}

                  {activeIndex === 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.02, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[340px] h-auto object-contain drop-shadow-sm flex items-center justify-center"
                    >
                      <LaunchScale />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>

        {/* Progress Indicator */}
        <div className="w-full flex justify-center items-center gap-2.5 mt-12 md:mt-16">
          {processSteps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx
                ? "w-8 bg-[#ff4f00]"
                : "w-2 bg-neutral-200"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
