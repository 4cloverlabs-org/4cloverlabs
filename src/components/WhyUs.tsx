"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const sectionLabel = "[ WHY FOUNDERS CHOOSE US ]";
  const sectionHeadline = "Ventures built with\nconviction, not guesswork";
  const sectionSubhead = "Every product we build is backed by real technical depth, shared infrastructure, and a team that stays invested well past launch.";

  const col1 = "4CloverLabs";
  const col2 = "Typical Studio";

  const features = [
    {
      title: "Fully internal builds",
      description: "No outsourcing, no freelancers. Every line of code is written by our own team.",
      us: true,
      them: false,
    },
    {
      title: "AI-native from day one",
      description: "We don't bolt on AI after the fact - it's built into the core of every product.",
      us: true,
      them: false,
    },
    {
      title: "Shared infrastructure",
      description: "Every venture runs on proven tooling, so teams move fast without reinventing the stack.",
      us: true,
      them: false,
    },
    {
      title: "Long-term ownership",
      description: "We operate what we build. No hand-offs, no exits, no walking away after launch.",
      us: true,
      them: false,
    },
  ];

  const stats = [
    {
      value: "4+",
      label: "Active ventures",
      sublabel: "Conceived, built, and operated entirely within the studio",
    },
    {
      value: "12+",
      label: "Products shipped",
      sublabel: "Across ventures, tools, and internal systems - all built in-house",
    },
    {
      value: "100%",
      label: "Internally owned",
      sublabel: "No clients, no briefs - everything we ship, we own",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 z-20 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="flex flex-col items-center text-center mb-20 md:mb-28"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="font-mono text-sm font-semibold text-[#ff4f00] tracking-widest mb-6 md:mb-8 uppercase"
          >
            {sectionLabel}
          </motion.span>
          
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.15] mb-8 md:mb-10 max-w-4xl">
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="block mb-2 md:mb-4"
            >
              Ventures built with conviction.
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="block text-neutral-400 italic"
            >
              Not guesswork.
            </motion.span>
          </motion.h2>

          <motion.div 
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, ease: "easeInOut" } }
            }}
            className="w-16 md:w-24 h-[2px] bg-neutral-200 mb-8 md:mb-10 rounded-full"
          ></motion.div>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="font-sans text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed"
          >
            {sectionSubhead}
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <div className="relative w-full max-w-5xl mx-auto mt-8 md:mt-12 z-0">

          {/* Background Highlight for 4CloverLabs (Elevated Card) */}
          {/* Sits at z-10, above the row backgrounds (z-0) but below the content (z-20) */}
          <div className="absolute top-[-20px] bottom-[-30px] right-[80px] w-[100px] sm:right-[120px] sm:w-[180px] md:right-[140px] md:w-[280px] bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(255,79,0,0.12)] border border-[#ff4f00]/20 ring-1 ring-white/50 pointer-events-none z-10"></div>

          <div className="flex flex-col w-full">

            {/* Table Header */}
            <div className="flex items-center pb-6 md:pb-8">
              <div className="flex-1"></div>
              <div className="w-[100px] sm:w-[180px] md:w-[280px] relative z-20 text-center text-lg md:text-2xl font-serif text-[#ff4f00]">
                {col1}
              </div>
              <div className="w-[20px] md:w-[40px] flex-shrink-0"></div>
              <div className="w-[60px] sm:w-[100px] md:w-[100px] relative z-20 text-center font-sans text-[10px] sm:text-xs md:text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                {col2}
              </div>
            </div>

            {/* Table Body */}
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 }
                  }
                }}
                className="relative flex items-center py-6 md:py-8 -mx-4 px-4 sm:-mx-8 sm:px-8 group cursor-default transition-colors duration-300"
              >
                {/* Row Background rendered as absolute z-0 behind the column card (z-10) */}
                <div className={`absolute inset-0 rounded-2xl z-0 pointer-events-none transition-colors duration-300 ${idx % 2 !== 0 ? 'bg-[#FAFAFA]' : 'bg-transparent'} group-hover:bg-[#ff4f00]/5`}></div>

                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex-shrink-0 max-w-[180px] sm:max-w-[280px] md:max-w-sm pr-2 md:pr-4 relative z-20"
                >
                  <h4 className="text-lg md:text-xl font-medium text-neutral-900 mb-1 md:mb-2 transition-colors duration-300 group-hover:text-[#ff4f00]">{feature.title}</h4>
                  <p className="text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-neutral-700">{feature.description}</p>
                </motion.div>

                {/* Flexible Connecting Line */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, scaleX: 0 },
                    visible: { opacity: 0.4, scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" } }
                  }}
                  style={{ originX: 0 }}
                  className="flex-grow flex items-center relative z-20 mx-2 sm:mx-4 md:mx-6 transition-all duration-300 group-hover:opacity-80"
                >
                  <div className="h-[2px] w-full border-b-2 border-dashed border-neutral-300 transition-colors duration-300 group-hover:border-[#ff4f00]/50"></div>
                  <svg className="text-neutral-400 flex-shrink-0 -ml-1 transition-colors duration-300 group-hover:text-[#ff4f00]/50" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </motion.div>

                {/* Company (4CloverLabs) */}
                <div className="w-[100px] sm:w-[180px] md:w-[280px] flex justify-center items-center flex-shrink-0 relative z-20">
                  {feature.us && (
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
                      }}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ff4f00] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(255,79,0,0.3)] transition-transform duration-300 group-hover:scale-110"
                    >
                      <svg className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <motion.polyline 
                          points="20 6 9 17 4 12" 
                          variants={{
                            hidden: { pathLength: 0 },
                            visible: { pathLength: 1, transition: { duration: 0.4, ease: "easeOut" } }
                          }}
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* VS Divider */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.3 } }
                  }}
                  className="w-[20px] md:w-[40px] flex justify-center items-center flex-shrink-0 relative z-20"
                >
                  <span className="text-neutral-300 font-serif italic text-xs md:text-sm transition-colors duration-300 group-hover:text-neutral-400">vs</span>
                </motion.div>

                {/* Studio (Typical Studio) */}
                <div className="w-[60px] sm:w-[100px] md:w-[100px] flex justify-center items-center flex-shrink-0 relative z-20">
                  {!feature.them && (
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                      }}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-neutral-400 bg-neutral-100 flex items-center justify-center text-neutral-400 opacity-70 transition-all duration-300 group-hover:opacity-50"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="mt-24 md:mt-32 pt-16 relative flex justify-center max-w-5xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full text-center">
            {stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="flex flex-col items-center"
              >
                <div className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-[#ff4f00] mb-4 tracking-tighter">
                  <Counter value={stat.value} />
                </div>
                <div className="text-neutral-900 font-bold mb-3 text-lg md:text-xl">{stat.label}</div>
                <div className="text-neutral-500 text-sm max-w-[220px] leading-relaxed">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Counter({ value }: { value: string }) {
  const target = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 60;
          const stepVal = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += stepVal;
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(cur));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

