
import React from 'react';

const flows = [
  {
    title: "Welcome Series Logic",
    store: "Look At Me Streetwear",
    description: "Multi-step welcome sequence designed for high-end streetwear. Focuses on brand storytelling and first-purchase logic.",
    metrics: "24% Open Rate Lift",
    type: "Email Logic",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Post-Purchase Recovery",
    store: "Stilwerk Partnership",
    description: "Automated retention cycles that trigger based on customer lifetime value and behavioral purchase data.",
    metrics: "12% CR Increase",
    type: "Retention Flow",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
  }
];

export const KlaviyoFlows: React.FC = () => {
  return (
    <section id="retention" className="py-32 bg-zinc-950 px-6">
      <div className="container mx-auto max-w-6xl mb-24 text-center">
        <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-6">Retention Ecosystems</h2>
        <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">Data-Driven <br /> Retention.</h3>
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {flows.map((flow, idx) => (
            <div key={idx} className="group bg-zinc-900/10 border border-zinc-800 rounded-[3rem] p-10 hover:border-blue-500/50 transition-all hover:bg-zinc-900/20 shadow-2xl">
              <div className="h-64 rounded-[2rem] overflow-hidden mb-10 border border-zinc-800">
                <img 
                  src={flow.image} 
                  alt={flow.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              <h4 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors tracking-tight">{flow.title}</h4>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">{flow.description}</p>
              <div className="pt-10 border-t border-zinc-800 flex justify-between items-center">
                <div>
                   <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Key Performance</p>
                   <p className="text-2xl font-black text-blue-500">{flow.metrics}</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Partner</p>
                   <p className="text-white font-bold">{flow.store}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
