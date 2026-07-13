import React from "react";
import { motion } from "framer-motion";

export function CloverIcon({ className = "w-[18px] h-[18px] text-neutral-600", ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <g transform="translate(12, 12) rotate(45)">
        <path d="M 0,-0.8 C -1.8,-2.2 -4.2,-3 -4.2,-5.8 C -4.2,-7.8 -2.8,-9.2 -1.2,-9.2 C -0.4,-9.2 0,-8.3 0,-7.5 C 0,-8.3 0.4,-9.2 1.2,-9.2 C 2.8,-9.2 4.2,-7.8 4.2,-5.8 C 4.2,-3 1.8,-2.2 0,-0.8 Z" />
        <path d="M 0,-0.8 C -1.8,-2.2 -4.2,-3 -4.2,-5.8 C -4.2,-7.8 -2.8,-9.2 -1.2,-9.2 C -0.4,-9.2 0,-8.3 0,-7.5 C 0,-8.3 0.4,-9.2 1.2,-9.2 C 2.8,-9.2 4.2,-7.8 4.2,-5.8 C 4.2,-3 1.8,-2.2 0,-0.8 Z" transform="rotate(90)" />
        <path d="M 0,-0.8 C -1.8,-2.2 -4.2,-3 -4.2,-5.8 C -4.2,-7.8 -2.8,-9.2 -1.2,-9.2 C -0.4,-9.2 0,-8.3 0,-7.5 C 0,-8.3 0.4,-9.2 1.2,-9.2 C 2.8,-9.2 4.2,-7.8 4.2,-5.8 C 4.2,-3 1.8,-2.2 0,-0.8 Z" transform="rotate(180)" />
        <path d="M 0,-0.8 C -1.8,-2.2 -4.2,-3 -4.2,-5.8 C -4.2,-7.8 -2.8,-9.2 -1.2,-9.2 C -0.4,-9.2 0,-8.3 0,-7.5 C 0,-8.3 0.4,-9.2 1.2,-9.2 C 2.8,-9.2 4.2,-7.8 4.2,-5.8 C 4.2,-3 1.8,-2.2 0,-0.8 Z" transform="rotate(270)" />
      </g>
    </svg>
  );
}

interface SectionDividerProps {
  bgColor?: string;
  withText?: boolean;
}

export function SectionDivider({ bgColor = "transparent", withText = false }: SectionDividerProps) {
  return (
    <div className="relative w-full h-0 z-20 flex items-center justify-center">
      <div className="absolute w-full h-[1px] bg-neutral-200/60" />
      
      {withText ? (
        <div 
          className="relative px-6 text-[10px] uppercase tracking-widest text-neutral-400 font-mono flex items-center gap-2"
          style={{ backgroundColor: bgColor !== "transparent" ? bgColor : undefined }}
        >
          <CloverIcon className="w-3 h-3 text-[#ff4f00]" />
          4CloverLabs
        </div>
      ) : (
        <div 
          className="relative w-8 h-8 rounded-full border border-neutral-200/60 flex items-center justify-center"
          style={{ backgroundColor: bgColor !== "transparent" ? bgColor : undefined, backdropFilter: bgColor === "transparent" ? "blur(4px)" : "none" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
        </div>
      )}
    </div>
  );
}

interface DashedBorderWrapperProps {
  children: React.ReactNode;
  bgColor?: string;
}

export function DashedBorderWrapper({ children, bgColor = "transparent" }: DashedBorderWrapperProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* Left Vertical Subtle Line */}
      <div className="absolute left-4 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-neutral-200/40 pointer-events-none z-10" />
      
      {/* Right Vertical Subtle Line */}
      <div className="absolute right-4 md:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-neutral-200/40 pointer-events-none z-10" />
      
      {/* Center Subtle Line (optional/decorative) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-neutral-200/20 pointer-events-none z-10 hidden md:block" />

      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}

