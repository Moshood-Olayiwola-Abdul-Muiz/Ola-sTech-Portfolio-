
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'RETENTION', href: '#retention' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO SECTION */}
        <a href="#home" className="flex items-center space-x-3 z-50">
          <div className="w-12 h-12 rounded-full border-2 border-cyan-500/30 flex items-center justify-center bg-zinc-900 overflow-hidden shadow-[0_0_15px_-3px_rgba(6,182,212,0.5)]">
            <img 
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200" 
              alt="OT Logo" 
              className="w-10 h-10 object-contain brightness-110"
            />
          </div>
          <div className="flex flex-col">
             <span className="text-lg font-black tracking-tighter text-white leading-none">OLA'S<span className="text-cyan-400">TECH</span></span>
             <span className="text-[8px] font-bold text-zinc-500 tracking-[0.3em] uppercase">Architecture</span>
          </div>
        </a>
        
        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black tracking-[0.2em] text-zinc-400 hover:text-cyan-400 transition-all duration-300 uppercase hover:translate-y-[-1px]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendly.com/olas-tech/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-black px-6 py-3 rounded-full transition-all tracking-[0.1em] shadow-[0_4px_20px_-5px_rgba(6,182,212,0.5)] active:scale-95"
          >
            CONSULTATION
          </a>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button 
          className="lg:hidden text-white p-2 z-50 bg-zinc-900/50 rounded-lg border border-zinc-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-zinc-950 to-zinc-950"></div>
        <nav className="relative z-10 flex flex-col items-center space-y-8">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-black text-white hover:text-cyan-400 transition-all tracking-tighter"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
            <a 
              href="https://calendly.com/olas-tech/30min" 
              className="bg-cyan-600 text-white px-10 py-5 rounded-full font-black tracking-widest uppercase text-sm shadow-xl"
            >
              BOOK CONSULTATION
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
