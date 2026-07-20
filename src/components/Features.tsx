"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  const card01 = {
    focus: "Venture Building",
    stages: 4,
    description: "We conceive, build, and operate AI businesses. Fully owned, fully internal.",
    steps: ["Validation", "Strategy", "MVP", "Go-to-Market"],
  };

  const card02 = {
    title: "AI Development",
    progress: "4/4",
    sectionTitle: "Recent updates",
    description: "We engineer AI products built for real-world impact.",
    items: ["Custom Agents", "Workflow Automation", "LLM Integration",],
  };

  const card03 = {
    title: "Shared Infrastructure",
    status: "Operational",
    activePercent: "100%",
    description: "One foundation across every venture - faster builds, easier scale.",
    infra: ["Cloud Native", "Security by Design", "Scalable Data"],
  };

  return (
    <section id="capabilities" className="relative w-full py-24 z-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="font-mono text-sm font-semibold text-[#ff4f00] tracking-widest mb-6"
          >
            [ WHAT WE DO ]
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className=" text-[clamp(2rem,4vw,3.5rem)] font-medium text-neutral-900 leading-[1.1] tracking-tight mb-6 max-w-2xl"
          >
            Everything you need to build what's next.
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="font-sans text-lg text-neutral-500 font-normal max-w-xl mx-auto leading-relaxed"
          >
            Venture creation, product engineering, and intelligent automation. All operating under one roof.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >

          {/* Card 1: Venture Building (Reference 0.png) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="group relative flex flex-col h-[520px] rounded-[2rem] overflow-hidden bg-[#151515]/92 backdrop-blur-md shadow-xl p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="px-6 pt-6 pb-4 flex justify-between items-start text-white/70">
              <div className="flex flex-col">
                <span className="font-sans text-[13px] mb-1 opacity-70">Focus</span>
                <span className="font-sans text-base font-medium text-white">{card01.focus}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[13px] mb-1 opacity-70">Stages</span>
                <span className="font-sans text-base font-medium text-white">{card01.stages}</span>
              </div>
            </div>

            <p className="font-sans px-6 text-[18px] text-white/50 mb-6 leading-relaxed">
              {card01.description}
            </p>

            {/* Stacked Checks */}
            <div className="flex flex-col flex-1 pb-2 px-2 gap-0 overflow-hidden rounded-b-[1.5rem]">
              {/* Check 1 */}
              <div className="flex-1 bg-[#1c1c1c]/92 rounded-t-3xl rounded-b-xl mb-1 flex items-center justify-between px-6 transition-transform hover:scale-[1.02] cursor-default z-30 shadow-lg">
                <span className="text-lg md:text-xl font-semibold text-white tracking-tight">{card01.steps[0]}</span>
                <div className="w-12 h-12 rounded-full bg-[#ff5500]/92 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>

              {/* Check 2 */}
              <div className="flex-1 bg-gradient-to-r from-[#ff6b2b]/92 to-[#ff5500]/92 rounded-xl mb-1 flex items-center justify-between px-6 transition-transform hover:scale-[1.02] cursor-default z-20 shadow-lg">
                <span className="text-lg md:text-xl font-semibold text-white tracking-tight">{card01.steps[1]}</span>
                <div className="w-12 h-12 rounded-full bg-white/92 flex items-center justify-center text-[#ff5500]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>

              {/* Check 3 */}
              <div className="flex-1 bg-white/92 rounded-xl mb-1 flex items-center justify-between px-6 transition-transform hover:scale-[1.02] cursor-default z-10 shadow-lg">
                <span className="text-lg md:text-xl font-semibold text-black tracking-tight">{card01.steps[2]}</span>
                <div className="w-12 h-12 rounded-full bg-[#ff5500]/92 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>

              {/* Check 4 */}
              <div className="flex-1 bg-[#2a2a2a]/92 rounded-b-3xl rounded-t-xl flex items-center justify-between px-6 transition-transform hover:scale-[1.02] cursor-default z-0">
                <span className="text-lg md:text-xl font-semibold text-white tracking-tight">{card01.steps[3]}</span>
                <div className="w-12 h-12 rounded-full bg-[#151515]/92 flex items-center justify-center text-[#ff5500]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI Development (Reference 1.png) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="group relative flex flex-col h-[520px] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#ff7a33]/92 to-[#e64c00]/92 backdrop-blur-md shadow-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Grid background on orange */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Top dark pill */}
            <div className="relative z-10 bg-[#151515]/92 rounded-2xl p-5 mb-5 shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <span className="font-sans text-white font-medium text-lg">{card02.title}</span>
                <span className="font-sans text-white/50 text-sm">{card02.progress}</span>
              </div>
              <div className="flex gap-1.5 h-1.5">
                <div className="flex-1 bg-[#ff5500]/92 rounded-full"></div>
                <div className="flex-1 bg-[#ff5500]/92 rounded-full"></div>
                <div className="flex-1 bg-[#ff5500]/92 rounded-full"></div>
                <div className="flex-1 bg-[#ff5500]/92 rounded-full"></div>
              </div>
            </div>

            {/* White card */}
            <div className="relative z-10 bg-white/92 backdrop-blur-md rounded-3xl flex-1 p-6 flex flex-col shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-semibold text-black leading-none tracking-tight max-w-[150px]">
                  {card02.sectionTitle}
                </h3>
                <div className="w-14 h-14 rounded-full bg-[#ff5500]/92 flex items-center justify-center text-white shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>

              <p className="font-sans text-[18px] text-neutral-500 mb-6 leading-relaxed">
                {card02.description}
              </p>

              {/* Checks */}
              <div className="flex flex-col gap-3 mt-auto">
                {card02.items.map((check, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#333] to-[#111] flex items-center justify-center text-white/70 mr-3 shrink-0 shadow-inner">
                      {i === 0 ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      )}
                    </div>
                    <div className="flex-1 flex justify-between items-center border-b border-neutral-100 pb-2">
                      <span className="font-sans text-[13px] font-medium text-neutral-800">{check}</span>
                      <span className="font-sans text-[10px] text-neutral-400">now</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Shared Infrastructure (Reference 2.png) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="group relative flex flex-col h-[520px] rounded-[2rem] overflow-hidden bg-[#151515]/92 backdrop-blur-md shadow-xl p-4 md:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="bg-white/92 backdrop-blur-md rounded-[2rem] flex-1 flex flex-col p-6 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[1.7rem] md:text-3xl font-semibold text-black leading-none tracking-tight max-w-[180px]">
                  {card03.title}
                </h3>
                <div className="w-14 h-14 rounded-full bg-[#151515]/92 flex items-center justify-center text-white/70 shadow-md shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>

              <div className="flex justify-between items-end mb-2">
                <span className="font-sans text-xl font-bold text-black">Active</span>
                <span className="font-sans text-lg font-bold text-black">{card03.activePercent}</span>
              </div>

              {/* Progress bar pill */}
              <div className="w-full h-[52px] bg-neutral-100/92 rounded-full mb-2 flex relative overflow-hidden shadow-inner p-1">
                <div className="h-full w-full bg-gradient-to-r from-[#ff6b2b]/92 to-[#ff5500]/92 rounded-full shadow-sm" />
              </div>

              <div className="flex justify-end mb-6">
                <span className="font-sans text-sm font-medium">Status: <span className="text-[#ff5500]/92">{card03.status}</span></span>
              </div>

              <p className="font-sans text-[18px] text-neutral-500 mb-6 leading-relaxed hidden sm:block">
                {card03.description}
              </p>

              <div className="mt-auto flex flex-col gap-3">
                {card03.infra.map((check, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="font-sans text-sm font-medium text-neutral-500">{check}</span>
                    <span className="font-sans text-sm font-bold text-neutral-300">Live</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
