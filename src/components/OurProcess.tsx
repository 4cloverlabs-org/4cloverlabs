"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
  {
    id: "step-1",
    tag: "STEP 01",
    num: "01",
    title: "Identify the Opportunity",
    shortTitle: "Identify",
    desc: "We scan market gaps at the intersection of AI, automation, and emerging tech — then pressure-test the concept against our portfolio, resources, and long term thesis.",
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
    desc: "Our internal engineering team ships a working product — real infrastructure, real UI, and direct AI integrations. Everything is engineered for scalability from day one.",
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
    desc: "The venture goes live as an independent business with its own identity, domain, and market presence — backed by 4CloverLabs' robust core infrastructure.",
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
  const activeStep = processSteps[activeIndex];

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-24 z-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex flex-col items-start">
            <span className="font-mono text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-4 inline-block px-3 py-1.5 border border-neutral-200 rounded-full bg-white/50 backdrop-blur-sm">
              OUR PROCESS
            </span>
            <h2 className=" text-[clamp(2.5rem,5vw,4rem)] font-medium text-neutral-900 leading-[1.05] tracking-tight max-w-2xl">
              A simple process built for complex systems.
            </h2>
          </div>
          <p className="font-sans text-lg text-neutral-500 font-normal max-w-[400px] leading-relaxed pb-2">
            A focused studio process that takes a raw concept to a live, revenue-ready venture through structured development steps.
          </p>
        </div>

        {/* Progress Line Navigation */}
        <div className="relative w-full mb-12 hidden md:block">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-neutral-200/60 rounded-full" />
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-[#ff4f00] rounded-full transition-all duration-500" 
            style={{ width: `${(activeIndex / (processSteps.length - 1)) * 100}%` }}
          />
          
          <div className="relative z-10 flex justify-between w-full">
            {processSteps.map((step, index) => {
              const isActive = activeIndex === index;
              const isPast = activeIndex > index;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIndex(index)}
                  className="flex flex-col items-center gap-3 relative group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-sm border ${isActive || isPast ? 'bg-[#ff4f00] border-[#ff4f00] text-white scale-110' : 'bg-white border-neutral-200 text-neutral-400 group-hover:border-neutral-400'}`}>
                    {isActive || isPast ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                      step.num
                    )}
                  </div>
                  <span className={`font-mono text-[11px] uppercase tracking-wider font-semibold transition-colors duration-300 ${isActive ? 'text-[#ff4f00]' : 'text-neutral-500'}`}>
                    {step.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex md:hidden overflow-x-auto gap-2 pb-4 mb-6 hide-scrollbar w-full">
           {processSteps.map((step, index) => (
             <button
                key={step.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-xs font-mono font-semibold tracking-wider uppercase border transition-colors ${activeIndex === index ? 'bg-[#ff4f00] text-white border-[#ff4f00]' : 'bg-white text-neutral-500 border-neutral-200'}`}
             >
               {step.shortTitle}
             </button>
           ))}
        </div>

        {/* Large Content Card */}
        <div className="relative w-full rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
          
          {/* Text Area */}
          <div className="w-full lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center relative z-10 border-r border-neutral-200/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center text-neutral-800 mb-8 shadow-sm">
                  {activeStep.icon}
                </div>
                
                <div className="font-mono text-sm font-semibold text-[#ff4f00] mb-4">
                  {activeStep.tag}
                </div>
                
                <h3 className=" text-4xl font-semibold text-neutral-900 mb-6 tracking-tight leading-tight">
                  {activeStep.title}
                </h3>
                
                <p className="font-sans text-lg text-neutral-600 leading-relaxed">
                  {activeStep.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual Area (Abstract representations) */}
          <div className="w-full lg:w-[55%] relative overflow-hidden bg-neutral-50/50 flex items-center justify-center min-h-[400px] lg:min-h-auto">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay z-0" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                className="relative z-10 w-full h-full flex items-center justify-center p-8"
              >
                {/* Custom animated visuals per step instead of static images */}
                {activeIndex === 0 && (
                  <div className="relative w-64 h-64 border-2 border-dashed border-neutral-300 rounded-full flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[120%] h-[120%] border border-orange-200 rounded-full" 
                    />
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}
                      className="w-16 h-16 bg-[#ff4f00] rounded-full shadow-xl shadow-orange-500/20 flex items-center justify-center text-white"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </motion.div>
                    
                    {/* Floating Labels */}
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 right-0 bg-white px-3 py-1 rounded-md text-xs font-mono border shadow-sm text-neutral-600">Market Gap</motion.div>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-4 -left-8 bg-white px-3 py-1 rounded-md text-xs font-mono border shadow-sm text-neutral-600">Thesis Fit</motion.div>
                  </div>
                )}

                {activeIndex === 1 && (
                  <div className="relative w-full max-w-sm flex flex-col gap-4">
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="w-full h-12 bg-white rounded-lg border shadow-sm flex items-center px-4 gap-4">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500"></div>
                      <div className="h-2 w-24 bg-neutral-200 rounded-full"></div>
                    </motion.div>
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-full h-12 bg-white rounded-lg border shadow-sm flex items-center px-4 gap-4 ml-8">
                      <div className="w-4 h-4 rounded-full bg-[#ff4f00]/20 border border-[#ff4f00]"></div>
                      <div className="h-2 w-32 bg-neutral-200 rounded-full"></div>
                      <span className="ml-auto text-xs font-mono text-neutral-400">GTM</span>
                    </motion.div>
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="w-full h-12 bg-white rounded-lg border shadow-sm flex items-center px-4 gap-4">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500"></div>
                      <div className="h-2 w-16 bg-neutral-200 rounded-full"></div>
                    </motion.div>
                    
                    {/* Connecting line */}
                    <div className="absolute left-6 top-6 bottom-6 w-px bg-neutral-200 -z-10"></div>
                  </div>
                )}

                {activeIndex === 2 && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-64">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} className="w-full aspect-square bg-white border rounded-xl shadow-sm flex items-center justify-center flex-col gap-2">
                        <svg className="text-neutral-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>
                        <span className="text-[10px] font-mono text-neutral-400">UI/UX</span>
                      </motion.div>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="w-full aspect-square bg-white border rounded-xl shadow-sm flex items-center justify-center flex-col gap-2">
                         <svg className="text-neutral-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                         <span className="text-[10px] font-mono text-neutral-400">API</span>
                      </motion.div>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="w-full aspect-square bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg flex items-center justify-center flex-col gap-2 text-white">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                         <span className="text-[10px] font-mono">Agent</span>
                      </motion.div>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="w-full aspect-square bg-white border rounded-xl shadow-sm flex items-center justify-center flex-col gap-2">
                         <svg className="text-neutral-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                         <span className="text-[10px] font-mono text-neutral-400">Data</span>
                      </motion.div>
                    </div>
                  </div>
                )}

                {activeIndex === 3 && (
                  <div className="relative w-full max-w-sm flex items-center justify-center">
                    <motion.div 
                      initial={{ y: 50, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="w-full bg-white rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-neutral-200 overflow-hidden"
                    >
                      <div className="h-12 border-b bg-neutral-50 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div><div className="w-2.5 h-2.5 rounded-full bg-green-400"></div></div>
                        <div className="mx-auto w-32 h-4 bg-white border rounded text-[8px] flex items-center justify-center font-mono text-neutral-400">new-venture.com</div>
                      </div>
                      <div className="p-8 flex flex-col items-center justify-center text-center gap-4 bg-gradient-to-br from-white to-neutral-50 h-48">
                        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-12 h-12 rounded-full bg-[#ff4f00] shadow-lg shadow-orange-500/30 flex items-center justify-center text-white">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>
                        </motion.div>
                        <div className="h-2 w-24 bg-neutral-200 rounded-full"></div>
                        <div className="h-2 w-32 bg-neutral-200 rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    {/* Floating metric */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                      className="absolute -right-4 top-12 bg-white rounded-lg shadow-lg border p-3 flex flex-col items-center"
                    >
                      <span className="text-xl font-bold text-green-500">+124%</span>
                      <span className="text-[9px] font-mono text-neutral-500 uppercase">Growth</span>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
