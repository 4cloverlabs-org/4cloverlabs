import React from "react";

export function CloverIcon({ className = "w-[18px] h-[18px] text-neutral-600", ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <g transform="translate(12, 12) rotate(45)">
        {/* Top Heart */}
        <path d="M 0,-0.8 C -1.8,-2.2 -4.2,-3 -4.2,-5.8 C -4.2,-7.8 -2.8,-9.2 -1.2,-9.2 C -0.4,-9.2 0,-8.3 0,-7.5 C 0,-8.3 0.4,-9.2 1.2,-9.2 C 2.8,-9.2 4.2,-7.8 4.2,-5.8 C 4.2,-3 1.8,-2.2 0,-0.8 Z" />
        {/* Right Heart */}
        <path d="M 0,-0.8 C -1.8,-2.2 -4.2,-3 -4.2,-5.8 C -4.2,-7.8 -2.8,-9.2 -1.2,-9.2 C -0.4,-9.2 0,-8.3 0,-7.5 C 0,-8.3 0.4,-9.2 1.2,-9.2 C 2.8,-9.2 4.2,-7.8 4.2,-5.8 C 4.2,-3 1.8,-2.2 0,-0.8 Z" transform="rotate(90)" />
        {/* Bottom Heart */}
        <path d="M 0,-0.8 C -1.8,-2.2 -4.2,-3 -4.2,-5.8 C -4.2,-7.8 -2.8,-9.2 -1.2,-9.2 C -0.4,-9.2 0,-8.3 0,-7.5 C 0,-8.3 0.4,-9.2 1.2,-9.2 C 2.8,-9.2 4.2,-7.8 4.2,-5.8 C 4.2,-3 1.8,-2.2 0,-0.8 Z" transform="rotate(180)" />
        {/* Left Heart */}
        <path d="M 0,-0.8 C -1.8,-2.2 -4.2,-3 -4.2,-5.8 C -4.2,-7.8 -2.8,-9.2 -1.2,-9.2 C -0.4,-9.2 0,-8.3 0,-7.5 C 0,-8.3 0.4,-9.2 1.2,-9.2 C 2.8,-9.2 4.2,-7.8 4.2,-5.8 C 4.2,-3 1.8,-2.2 0,-0.8 Z" transform="rotate(270)" />
      </g>
    </svg>
  );
}

interface SectionDividerProps {
  bgColor?: string;
}

export function SectionDivider({ bgColor = "#F5F5F5" }: SectionDividerProps) {
  return (
    <div className="relative max-w-[90rem] mx-auto h-0 border-t-2 border-dashed border-neutral-300 z-20">
      {/* Clover icon on the left edge */}
      <div
        className="absolute -left-[8px] -top-[8px] w-[18px] h-[18px] flex items-center justify-center select-none hidden xl:flex"
        style={{ backgroundColor: bgColor }}
      >
        <CloverIcon className="w-[14px] h-[14px] text-neutral-600" />
      </div>
      {/* Clover icon on the right edge */}
      <div
        className="absolute -right-[10px] -top-[8px] w-[18px] h-[18px] flex items-center justify-center select-none hidden xl:flex"
        style={{ backgroundColor: bgColor }}
      >
        <CloverIcon className="w-[14px] h-[14px] text-neutral-600" />
      </div>
    </div>
  );
}

interface DashedBorderWrapperProps {
  children: React.ReactNode;
  bgColor?: string;
}

export function DashedBorderWrapper({ children, bgColor = "#F5F5F5" }: DashedBorderWrapperProps) {
  return (
    <div className="relative w-full" style={{ backgroundColor: bgColor }}>
      {/* Left Vertical Dashed Line */}
      <div className="absolute left-1/2 -translate-x-[45rem] top-0 bottom-0 w-0 border-l-2 border-dashed border-neutral-300 pointer-events-none z-10 hidden xl:block" />
      
      {/* Right Vertical Dashed Line */}
      <div className="absolute left-1/2 translate-x-[45rem] top-0 bottom-0 w-0 border-l-2 border-dashed border-neutral-300 pointer-events-none z-10 hidden xl:block" />

      {children}
    </div>
  );
}
