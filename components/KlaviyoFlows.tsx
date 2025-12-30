
import React from 'react';

const flows = [
  {
    title: "Welcome Series Architecture",
    store: "Look At Me Streetwear",
    description: "Multi-step welcome sequence designed for high-end streetwear. Focuses on brand story, exclusive drops, and conversion optimization.",
    metrics: "24% Open Rate Lift",
    type: "Email Design & Logic",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Behavioral Retention Popups",
    store: "Unusual Decor / Streetwear",
    description: "High-converting acquisition forms designed to capture lead intent while maintaining luxury aesthetic.",
    metrics: "8.4% Opt-in Rate",
    type: "Lead Acquisition",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Post-Purchase Recovery",
    store: "Stilwerk Partnership",
    description: "Automated retention cycles that trigger based on customer lifetime value and past purchase behavior to drive repeat revenue.",
    metrics: "12% CR Increase",
    type: "Retention Flow",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  }
];

export const KlaviyoFlows: React.FC = () => {
  return (
    <section id="retention" className="py-24 bg-zinc-950 px-6">
      {/* Klaviyo Section Banner */}
      <div className="container mx-auto max-w-6xl mb-24">
        <div className="relative rounded-[2.5rem] overflow-hidden group min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1557426282-08695bd38ceb?auto=format&fit=crop&q=80&w=1600" 
              alt="Klaviyo Systems" 
              className="w-full h-full object-cover grayscale opacity-25 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-zinc-950/80"></div>
          </div>
          <div className="relative z-10 p-12 text-center max-w-3xl">
            <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-6">Retention Ecosystems</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Data-Driven <br /> Retention <span className="text-zinc-500">Engines.</span></h3>
            <div className="inline-flex items-center space-x-3 bg-zinc-900/90 border border-zinc-800 px-6 py-3 rounded-full backdrop-blur-xl">
               <span className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em]">Certified Klaviyo Partner</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {flows.map((flow, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-zinc-900/20 border border-zinc-800/60 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all overflow-hidden">
              <a href="#services" className="relative block aspect-[4/5] rounded-2xl overflow-hidden mb-8 border border-zinc-800/50">
                <img 
                  src={flow.image} 
                  alt={flow.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">{flow.type}</p>
                  <p className="text-xs text-zinc-400 font-bold">Partner: {flow.store}</p>
                </div>
              </a>
              
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{flow.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                {flow.description}
              </p>
              
              <div className="pt-8 border-t border-zinc-800/50 flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Key Metric</span>
                <span className="text-lg font-black text-blue-500">{flow.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
