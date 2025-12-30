
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 px-6 border-y border-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-cyan-500/10 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-zinc-800 shadow-2xl">
              {/* IMAGE 7: USER PORTRAIT */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Olayiwola Moshood" 
                className="w-full h-full object-cover filter brightness-90 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-white font-black text-3xl tracking-tighter">Olayiwola Moshood</p>
                <p className="text-cyan-500 text-sm font-black uppercase tracking-[0.2em] mt-1">Founder & Lead Architect</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xs font-black tracking-[0.6em] text-cyan-500 uppercase mb-8">System Philosopher</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-10 leading-none tracking-tighter text-white">Reduction of Effort <br /><span className="text-zinc-600">is the Goal.</span></h3>
            <p className="text-zinc-400 text-xl leading-relaxed mb-10 font-medium">
              Olayiwola Abdul-Muiz Moshood specializes in the reduction of manual effort for growing digital businesses. By bridging technical gaps with robust automation flows, I enable brands to scale without scaling overhead.
            </p>
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-cyan-500/20 transition-all">
                <h4 className="font-bold text-white text-xl mb-3">Simplicity over complexity</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">If a system isn't intuitive, it's a liability. We build elegant, maintainable logic that survives staff turnover and platform updates.</p>
              </div>
              <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-cyan-500/20 transition-all">
                <h4 className="font-bold text-white text-xl mb-3">Reliability over novelty</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">We use battle-tested tools like n8n and Klaviyo to ensure your operations never sleep, even when you do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
