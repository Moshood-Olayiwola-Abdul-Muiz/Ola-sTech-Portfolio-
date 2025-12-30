
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-48 bg-zinc-950 px-6 border-y border-zinc-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
          <div className="relative group">
            {/* Technical Blueprint Frame with Logo */}
            <div className="absolute -inset-16 bg-blue-600/5 rounded-full blur-[150px] opacity-40 group-hover:opacity-70 transition-opacity duration-1000"></div>
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)] transition-all duration-1000 group-hover:border-blue-500/30 flex flex-col items-center justify-center p-16">
              
              <div className="text-center relative z-10">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-950 border border-zinc-800 rounded-[2.5rem] mx-auto mb-12 flex items-center justify-center shadow-2xl group-hover:border-blue-500/50 transition-all p-4">
                  <img 
                    src="logo.png" 
                    alt="Ola'sTech Core" 
                    className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-700"
                  />
                </div>
                
                <h4 className="text-zinc-600 font-black text-2xl tracking-[0.2em] uppercase mb-4">Core Philosophy</h4>
                <div className="h-0.5 w-12 bg-blue-600 mx-auto mb-8 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                
                <p className="text-white text-3xl font-black tracking-tighter leading-tight mb-8">
                  "Architecture is about the decisions you don't have to make tomorrow."
                </p>
                
                <div className="flex justify-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40"></div>
                </div>
              </div>

              {/* Identity Header Tag */}
              <div className="absolute top-12 left-12">
                <div className="px-6 py-3 bg-zinc-950/70 backdrop-blur-2xl border border-zinc-800 rounded-full shadow-2xl">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">The Architect</span>
                </div>
              </div>

              {/* Bottom Visual Label */}
              <div className="absolute bottom-16 left-16 right-16">
                <h4 className="text-white font-black text-5xl md:text-6xl tracking-tighter leading-[0.85] mb-6">Systems <br />Philosopher</h4>
                <div className="w-16 h-1.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xs font-black tracking-[0.7em] text-blue-500 uppercase mb-12">Operational Ethos</h2>
            <h3 className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter text-white">
              Reduction <br />
              <span className="text-zinc-700">is Mastery.</span>
            </h3>
            <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-16 font-medium">
              I am Olayiwola Abdul-Muiz Moshood. I specialize in technical reduction. By eliminating friction through robust automation, I allow visionaries to scale without increasing operational burden.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 hover:border-blue-500/30 transition-all group/stat backdrop-blur-md shadow-2xl">
                <div className="text-5xl font-black text-white mb-3 tracking-tighter group-hover/stat:text-blue-500 transition-colors">99.9%</div>
                <div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em]">Architecture Reliability</div>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 hover:border-blue-500/30 transition-all group/stat backdrop-blur-md shadow-2xl">
                <div className="text-5xl font-black text-white mb-3 tracking-tighter group-hover/stat:text-blue-500 transition-colors">150+</div>
                <div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em]">Live Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
