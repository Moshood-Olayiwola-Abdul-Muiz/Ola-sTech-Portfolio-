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
    <section className="py-12 bg-zinc-950 border-t border-zinc-900/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-[9px] text-zinc-600 uppercase tracking-[0.4em] font-black text-center">Engineered Solutions for Industry Leaders</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="mx-10 md:mx-16 flex items-center">
              <span className="text-sm md:text-base font-black text-zinc-700 hover:text-blue-500/80 transition-all duration-500 uppercase tracking-widest cursor-default select-none">
                {partner}
              </span>
              <div className="w-1 h-1 bg-zinc-800 rounded-full mx-10 md:mx-16"></div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};