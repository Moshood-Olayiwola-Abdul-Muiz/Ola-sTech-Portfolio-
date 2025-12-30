
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* LOGO SECTION */}
        <a href="#home" className="flex items-center space-x-3 md:space-x-4 flex-shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-600 font-black text-base md:text-lg shadow-xl">
            OT
          </div>
          <div className="flex flex-col">
             <span className="text-base md:text-xl font-black tracking-tighter text-white leading-none">OLA'S<span className="text-blue-600">TECH</span></span>
             <span className="text-[8px] md:text-[9px] font-bold text-zinc-500 tracking-[0.3em] uppercase">Architecture</span>
          </div>
        </a>
        
        {/* PROMINENT BOOK A CALL BUTTON */}
        <div className="flex items-center flex-shrink-0 ml-4">
          <a 
            href="https://calendly.com/olas-tech/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] md:text-[11px] font-black px-6 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl transition-all tracking-[0.2em] uppercase shadow-2xl shadow-blue-500/40 active:scale-95 border border-blue-400/20 whitespace-nowrap"
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </header>
  );
};
