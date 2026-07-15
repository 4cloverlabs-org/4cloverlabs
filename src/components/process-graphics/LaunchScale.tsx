import React from 'react';

const LaunchScale: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-square max-w-[360px] bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#F4F0E6] overflow-hidden flex items-center justify-center ${className}`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes bar-grow {
          0% { transform: scaleY(0.2); }
          50%, 100% { transform: scaleY(1); }
        }
        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes draw-line {
          0% { stroke-dashoffset: 130; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-float-1 { animation: float 4s ease-in-out infinite; }
        .animate-float-2 { animation: float 4.5s ease-in-out infinite 0.5s; }
        .animate-bar { transform-origin: bottom; animation: bar-grow 3s ease-out infinite alternate; }
        .animate-arrow { animation: arrow-bounce 2s ease-in-out infinite; }
        .animate-draw { stroke-dasharray: 130; animation: draw-line 2s forwards ease-out; }
      `}</style>
      
      {/* Connector Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <path d="M 180 180 L 100 85" stroke="#8A8A78" strokeWidth="1" fill="none" strokeDasharray="3 3" className="animate-draw" />
        <path d="M 180 180 L 260 115" stroke="#8A8A78" strokeWidth="1" fill="none" strokeDasharray="3 3" className="animate-draw" />
      </svg>

      {/* Base: Bar Chart */}
      <div className="absolute bottom-[30px] w-[180px] h-[80px] flex items-end justify-between border-b-2 border-[#070706] pb-1 px-2">
        <div className="w-6 h-[30%] bg-[#070706] rounded-t-sm animate-bar" style={{ animationDelay: '0s' }} />
        <div className="w-6 h-[50%] bg-[#8A8A78] rounded-t-sm animate-bar" style={{ animationDelay: '0.2s' }} />
        <div className="w-6 h-[70%] bg-[#EA6B33] rounded-t-sm animate-bar" style={{ animationDelay: '0.4s' }} />
        <div className="w-6 h-[100%] bg-[#070706] rounded-t-sm animate-bar" style={{ animationDelay: '0.6s' }} />
      </div>

      {/* Center Icon */}
      <div className="relative z-10 w-16 h-16 bg-[#EA6B33] rounded-full flex items-center justify-center shadow-lg animate-float-1 mt-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </div>

      {/* Pills */}
      <div className="absolute top-[70px] left-[20px] z-20 animate-float-2">
        <div className="bg-[#FFFFFF] border border-[#070706] text-[#070706] text-[11px] font-medium px-3 py-1.5 rounded-full shadow-sm">
          Independent Domain
        </div>
      </div>
      <div className="absolute top-[100px] right-[20px] z-20 animate-float-1" style={{ animationDelay: '0.8s' }}>
        <div className="bg-[#EA6B33] text-[#FFFFFF] text-[11px] font-medium px-3 py-1.5 rounded-full shadow-sm">
          Core Infrastructure
        </div>
      </div>
    </div>
  );
};

export default LaunchScale;
