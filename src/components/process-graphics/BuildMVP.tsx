import React from 'react';

const BuildMVP: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-square max-w-[360px] bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#F4F0E6] overflow-hidden flex items-center justify-center ${className}`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes skeleton-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes draw-line {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-float-1 { animation: float 4s ease-in-out infinite; }
        .animate-float-2 { animation: float 5s ease-in-out infinite 0.7s; }
        .animate-progress { animation: progress 3s ease-in-out infinite; }
        .animate-skeleton {
          background: linear-gradient(90deg, #F4F0E6 25%, #FFFFFF 50%, #F4F0E6 75%);
          background-size: 200% 100%;
          animation: skeleton-shimmer 2s infinite linear;
        }
        .animate-draw { stroke-dasharray: 120; animation: draw-line 2s forwards ease-out; }
      `}</style>
      
      {/* Connector Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <path d="M 180 180 L 100 85" stroke="#8A8A78" strokeWidth="1" fill="none" className="animate-draw" />
        <path d="M 180 180 L 260 105" stroke="#8A8A78" strokeWidth="1" fill="none" className="animate-draw" />
      </svg>

      {/* Base: Browser/Editor Window */}
      <div className="absolute bottom-[30px] w-[220px] bg-[#FFFFFF] rounded-lg border border-[#070706] shadow-sm flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-6 bg-[#070706] flex items-center px-2 space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-[#8A8A78]" />
          <div className="w-2 h-2 rounded-full bg-[#8A8A78]" />
          <div className="w-2 h-2 rounded-full bg-[#8A8A78]" />
        </div>
        {/* Progress Bar */}
        <div className="h-0.5 w-full bg-[#F4F0E6]">
          <div className="h-full bg-[#EA6B33] animate-progress" />
        </div>
        {/* Body */}
        <div className="p-4 space-y-2">
          <div className="h-2 w-3/4 rounded animate-skeleton" />
          <div className="h-2 w-1/2 rounded animate-skeleton" />
          <div className="h-2 w-5/6 rounded animate-skeleton" />
        </div>
      </div>

      {/* Center Icon */}
      <div className="relative z-10 w-16 h-16 bg-[#EA6B33] rounded-full flex items-center justify-center shadow-lg animate-float-1 mt-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </div>

      {/* Pills */}
      <div className="absolute top-[70px] left-[25px] z-20 animate-float-2">
        <div className="bg-[#FFFFFF] border border-[#070706] text-[#070706] text-[11px] font-medium px-3 py-1.5 rounded-full shadow-sm">
          Infrastructure
        </div>
      </div>
      <div className="absolute top-[90px] right-[25px] z-20 animate-float-1" style={{ animationDelay: '1.2s' }}>
        <div className="bg-[#EA6B33] text-[#FFFFFF] text-[11px] font-medium px-3 py-1.5 rounded-full shadow-sm">
          AI Integration
        </div>
      </div>
    </div>
  );
};

export default BuildMVP;
