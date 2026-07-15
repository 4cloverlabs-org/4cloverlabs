import React from 'react';

const IdentifyOpportunity: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-square max-w-[360px] bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#F4F0E6] overflow-hidden flex items-center justify-center ${className}`}>
      <style>{`
        @keyframes radar-pulse {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes draw-line {
          0% { stroke-dashoffset: 150; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-radar-1 { animation: radar-pulse 3s linear infinite; }
        .animate-radar-2 { animation: radar-pulse 3s linear infinite 1.5s; }
        .animate-float-1 { animation: float 4s ease-in-out infinite; }
        .animate-float-2 { animation: float 5s ease-in-out infinite 1s; }
        .animate-draw { stroke-dasharray: 150; animation: draw-line 2s forwards ease-out; }
      `}</style>
      
      {/* Connector Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <path d="M 180 180 L 90 95" stroke="#8A8A78" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-draw" />
        <path d="M 180 180 L 270 115" stroke="#8A8A78" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-draw" />
      </svg>

      {/* Base: Radar Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full border border-dashed border-[#8A8A78] animate-radar-1" />
        <div className="absolute w-32 h-32 rounded-full border border-dashed border-[#8A8A78] animate-radar-2" />
      </div>

      {/* Center Icon */}
      <div className="relative z-10 w-16 h-16 bg-[#EA6B33] rounded-full flex items-center justify-center shadow-lg animate-float-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      {/* Pills */}
      <div className="absolute top-[80px] left-[30px] z-20 animate-float-2">
        <div className="bg-[#FFFFFF] border border-[#070706] text-[#070706] text-[11px] font-medium px-3 py-1.5 rounded-full shadow-sm">
          Market Gap
        </div>
      </div>
      <div className="absolute top-[100px] right-[30px] z-20 animate-float-1" style={{ animationDelay: '0.5s' }}>
        <div className="bg-[#EA6B33] text-[#FFFFFF] text-[11px] font-medium px-3 py-1.5 rounded-full shadow-sm">
          Thesis Fit
        </div>
      </div>
    </div>
  );
};

export default IdentifyOpportunity;
