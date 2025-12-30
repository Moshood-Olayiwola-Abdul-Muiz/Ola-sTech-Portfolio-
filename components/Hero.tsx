
import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-zinc-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f615,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-50 container mx-auto px-6 py-8 flex justify-between items-center animate-fade-in">
        <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="relative w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:rotate-3 shadow-2xl">
            <span className="text-blue-500 font-black text-xl">OT</span>
            <div className="absolute -inset-1 bg-blue-500/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
             <span className="text-xl font-black tracking-tighter text-white leading-none uppercase">OLA'S<span className="text-blue-500">TECH</span></span>
             <span className="text-[9px] font-bold text-zinc-500 tracking-[0.4em] uppercase">Systems Architect</span>
          </div>
        </div>

        <a 
          href="https://calendly.com/olas-tech/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-black px-8 py-4 rounded-xl transition-all tracking-[0.1em] shadow-lg shadow-blue-500/20 active:scale-95 uppercase"
        >
          Book a Call
        </a>
      </div>

      <div className="flex-grow relative flex flex-col justify-center pb-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="opacity-0 animate-reveal-up delay-100 mb-8">
              <span className="inline-block px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">
                Strategic Automation & Logic
              </span>
            </div>
            
            <h1 className="opacity-0 animate-reveal-up delay-200 text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-12 tracking-tighter text-white">
              Engineering <br />
              <span className="text-blue-500">Efficiency.</span>
            </h1>

            {/* --- HERO VISUAL (WITH SUBTLE PARALLAX) --- */}
            <div className="opacity-0 animate-reveal-up delay-300 relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900/50 p-2 mb-12 shadow-2xl">
               <div className="relative aspect-[21/9] md:aspect-[32/10] rounded-[2.2rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" 
                    alt="Cybernetic Logic Flow" 
                    className="w-full h-full object-cover opacity-40 brightness-75 scale-110 transition-transform duration-75 ease-out"
                    style={{ 
                      transform: `translateY(${offset * 0.12}px) scale(1.1)` 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex items-center px-12 md:px-20">
                     <div className="max-w-xl">
                        <p className="text-white text-xl md:text-3xl font-black leading-tight mb-6 tracking-tight drop-shadow-2xl">
                           "I design automation and eCommerce systems that remove friction and run reliably in the background."
                        </p>
                        <div className="flex items-center space-x-3">
                           <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                           <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Logic-Driven Architecture</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <p className="opacity-0 animate-reveal-up delay-400 text-lg md:text-xl text-zinc-500 max-w-2xl mb-14 leading-relaxed">
              Simplifying operations through scalable workflow design and performance-first integration logic.
            </p>

            <div className="opacity-0 animate-reveal-up delay-400">
              <button 
                onClick={() => scrollTo('services')}
                className="px-14 py-6 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] text-center tracking-[0.2em] text-xs uppercase flex items-center justify-center group active:scale-95"
              >
                Explore Architecture
                <svg className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
