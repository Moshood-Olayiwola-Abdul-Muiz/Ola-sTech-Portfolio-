
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
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-zinc-950 px-6">
      {/* High-End Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f615,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl py-24 text-center">
        {/* Badge: Operations Architect & Systems Designer */}
        <div className="opacity-0 animate-reveal-up delay-100 mb-10 flex justify-center">
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-2xl shadow-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <span className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">
              Operations Architect & Systems Designer
            </span>
          </div>
        </div>
        
        {/* Main Title: Systems Redefined */}
        <h1 className="opacity-0 animate-reveal-up delay-200 text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] mb-12 tracking-tighter text-white">
          Systems <br />
          <span className="text-blue-600">Redefined.</span>
        </h1>

        {/* Personalized Description about Founder and Service */}
        <p className="opacity-0 animate-reveal-up delay-300 text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
          I am Olayiwola Moshood, Lead Engineer and Founder of Ola’sTech. I engineer high-performance automation frameworks, AI-driven Shopify agents, and intelligent backend systems that allow brands to scale with absolute velocity and technical precision.
        </p>

        {/* Call to Action Buttons */}
        <div className="opacity-0 animate-reveal-up delay-400 flex flex-wrap justify-center gap-8">
          <button 
            onClick={() => scrollTo('services')}
            className="px-14 py-7 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-500 transition-all hover:shadow-[0_0_50px_-5px_rgba(59,130,246,0.5)] text-center tracking-[0.2em] text-xs uppercase flex items-center justify-center group active:scale-95"
          >
            Explore Architecture
            <svg className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-14 py-7 bg-zinc-900 text-white font-black rounded-3xl hover:bg-zinc-800 transition-all border border-zinc-800 text-center tracking-[0.2em] text-xs uppercase flex items-center justify-center group active:scale-95 shadow-2xl"
          >
            Get Analyzed
          </button>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center">
        <span className="text-[10px] text-zinc-500 uppercase tracking-[0.5em] mb-4">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
      </div>
    </section>
  );
};
