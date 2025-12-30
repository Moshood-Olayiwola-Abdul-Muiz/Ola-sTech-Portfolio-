import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">Ready to reduce friction?</h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-md leading-relaxed">
              Let's discuss how we can automate your manual processes and build systems that work while you sleep.
            </p>
            <div className="space-y-6">
               <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-black mb-1">Direct Protocol (Discord)</span>
                  <span className="text-zinc-300 font-bold text-lg">olastech001</span>
               </div>
               <a href="mailto:moshoodolayiwola111@gmail.com" className="flex flex-col group w-fit">
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-black mb-1 group-hover:text-blue-500 transition-colors">Official Mail</span>
                  <span className="text-zinc-300 font-bold text-lg group-hover:text-blue-400 transition-colors">moshoodolayiwola111@gmail.com</span>
               </a>
            </div>
          </div>

          <div className="flex flex-col justify-end items-start lg:items-end">
            <h4 className="text-zinc-500 text-[10px] uppercase tracking-widest font-black mb-6">Contact Ecosystem</h4>
            <ul className="space-y-4 text-left lg:text-right">
              <li>
                <a href="https://calendly.com/olas-tech/30min" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-blue-500 transition-colors uppercase font-black tracking-widest flex items-center lg:justify-end gap-2 group">
                  <span>Schedule Consultation (Calendly)</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </li>
              <li>
                <a href="https://wa.me/15814657574" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-blue-500 transition-colors uppercase font-black tracking-widest">WhatsApp</a>
              </li>
              <li>
                <a href="https://t.me/OlasTech_01" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-blue-500 transition-colors uppercase font-black tracking-widest">Telegram</a>
              </li>
              <li>
                <a href="https://x.com/moshood_ola01?t=Eya8cRbISNcYr5FBzKcRKg&s=09" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-blue-500 transition-colors uppercase font-black tracking-widest">Twitter (X)</a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~014c393a7fe5ecf925" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-blue-500 transition-colors uppercase font-black tracking-widest">Upwork</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] tracking-[0.3em] font-black uppercase">
            © {new Date().getFullYear()} OLA’S TECH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            <span className="text-zinc-700 text-[9px] uppercase tracking-[0.2em] font-black">Simplicity over complexity</span>
            <span className="text-zinc-700 text-[9px] uppercase tracking-[0.2em] font-black">Reliability over novelty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};