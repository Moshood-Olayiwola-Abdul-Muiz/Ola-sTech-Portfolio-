
import React from 'react';

const partners = [
  "OJ Beauty Space",
  "Pure Gym",
  "Unusual Decor",
  "Slyck Stylez",
  "Stilwerk",
  "Vena Tech",
  "Ola's Store"
];

export const StoreMarquee: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 border-t border-zinc-900/50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col items-center">
          <p className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-[0.6em] font-black text-center mb-4">
            Engineered Solutions for Industry Leaders
          </p>
          <div className="w-12 h-px bg-blue-600/50"></div>
        </div>
      </div>
      
      {/* Marquee Container with fluid layout for high-resolution screens */}
      <div className="relative flex whitespace-nowrap overflow-hidden py-4 group">
        <div className="flex animate-marquee hover:pause-marquee">
          {/* Multiply sets to ensure no gaps on wide monitors */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {partners.map((partner, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center mx-12 md:mx-20">
                  <span className="text-lg md:text-2xl font-black text-zinc-800 hover:text-blue-500/60 transition-all duration-700 uppercase tracking-[0.2em] cursor-default select-none whitespace-nowrap">
                    {partner}
                  </span>
                  <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full mx-12 md:mx-20 shadow-[0_0_10px_rgba(255,255,255,0.05)]"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Deep Gradient masks for a professional, expensive visual feel */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          width: max-content;
        }
        .hover\:pause-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Smooth speed adjustments based on screen width */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 40s;
          }
        }
        @media (min-width: 2500px) {
          .animate-marquee {
            animation-duration: 100s;
          }
        }
      `}</style>
    </section>
  );
};
