import React from 'react';

const DefineVenture: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-square max-w-[360px] bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#F4F0E6] overflow-hidden flex items-center justify-center ${className}`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes draw-line {
          0% { stroke-dashoffset: 150; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-float-1 { animation: float 4s ease-in-out infinite; }
        .animate-float-2 { animation: float 4.5s ease-in-out infinite 0.5s; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-draw { stroke-dasharray: 150; animation: draw-line 2s forwards ease-out; }
      `}</style>
      
      {/* Connector Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <path d="M 180 180 L 80 125" stroke="#8A8A78" strokeWidth="1" fill="none" className="animate-draw" />
        <path d="M 180 180 L 270 135" stroke="#8A8A78" strokeWidth="1" fill="none" className="animate-draw" />
      </svg>

      {/* Base: Blueprint Panel */}
      <div className="absolute bottom-[40px] w-[200px] h-[120px] bg-[#F4F0E6] rounded-lg border border-[#8A8A78] shadow-sm transform -rotate-6 flex flex-col overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#8A8A78 1px, transparent 1px), linear-gradient(90deg, #8A8A78 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2 }} />
        <div className="absolute top-0 right-0 w-8 h-8 bg-[#EA6B33] animate-shimmer" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
      </div>

      {/* Center Icon */}
      <div className="relative z-10 w-16 h-16 bg-[#EA6B33] rounded-full flex items-center justify-center shadow-lg animate-float-1 mt-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      </div>

      {/* Pills */}
      <div className="absolute top-[110px] left-[30px] z-20 animate-float-2">
        <div className="bg-[#FFFFFF] border border-[#070706] text-[#070706] text-[11px] font-medium px-3 py-1.5 rounded-full shadow-sm">
          Brand
        </div>
      </div>
      <div className="absolute top-[120px] right-[25px] z-20 animate-float-1" style={{ animationDelay: '1s' }}>
        <div className="bg-[#EA6B33] text-[#FFFFFF] text-[11px] font-medium px-3 py-1.5 rounded-full shadow-sm">
          Go-to-Market
        </div>
      </div>
    </div>
  );
};

export default DefineVenture;
