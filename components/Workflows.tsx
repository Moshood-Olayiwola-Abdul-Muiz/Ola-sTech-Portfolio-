
import React from 'react';

const blueprints = [
  {
    title: "Shopify AI Assistant Agent",
    description: "Multi-node n8n workflow integrating Gemini AI and Shopify for intent analysis and customer product matching.",
    tags: ["n8n", "Shopify API", "AI Agent"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Recruitment Automation Flow",
    description: "End-to-end recruitment logic that automates candidate matching, resume parsing, and scheduling communications.",
    tags: ["Logic", "Outlook", "HR Tech"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export const Workflows: React.FC = () => {
  return (
    <section id="workflows" className="py-24 bg-zinc-950 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-4">Operations Blueprints</h2>
          <h3 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">System Logic Flow.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {blueprints.map((bp, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900/50 aspect-video mb-8 border border-zinc-800 group-hover:border-blue-500/50 transition-all">
                <img 
                  src={bp.image} 
                  alt={bp.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 flex gap-2">
                  {bp.tags.map(tag => (
                    <span key={tag} className="text-[9px] px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur border border-zinc-800 text-zinc-400 font-bold uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
              <h4 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors tracking-tight">{bp.title}</h4>
              <p className="text-zinc-500 leading-relaxed text-lg">{bp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
