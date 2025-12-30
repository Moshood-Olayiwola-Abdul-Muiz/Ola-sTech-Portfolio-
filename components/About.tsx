
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 px-6 border-y border-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-3xl opacity-50 transition-opacity"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-zinc-800 shadow-2xl bg-zinc-900">
              {/* FOUNDER IMAGE - Linked to the photo you provided */}
              <img 
                src="profile-photo.png" 
                alt="Olayiwola Moshood" 
                className="w-full h-full object-cover object-top filter brightness-110 contrast-105"
                onError={(e) => {
                  // Fallback if local image isn't found yet
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-white font-black text-3xl tracking-tighter">Olayiwola Moshood</p>
                <p className="text-blue-500 text-sm font-black uppercase tracking-[0.2em] mt-1">Founder & Lead Architect</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xs font-black tracking-[0.6em] text-blue-500 uppercase mb-8">System Philosopher</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-10 leading-none tracking-tighter text-white">Reduction of Effort <br /><span className="text-zinc-600">is the Goal.</span></h3>
            <p className="text-zinc-400 text-xl leading-relaxed mb-10 font-medium">
              Olayiwola Abdul-Muiz Moshood specializes in technical reduction. By bridging gaps with robust automation, I enable brands to scale without increasing overhead.
            </p>
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-blue-500/20 transition-all">
                <h4 className="font-bold text-white text-xl mb-3">Simplicity over complexity</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">If a system isn't intuitive, it's a liability. We build elegant, maintainable logic that survives staff turnover and market shifts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
