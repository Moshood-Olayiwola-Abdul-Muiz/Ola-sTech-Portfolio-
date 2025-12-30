
import React from 'react';

const blueprints = [
  {
    title: "AI Sales Assistant for Shopify",
    description: "Multi-node n8n workflow integrating Re:amaze, Gemini AI, and Shopify Product Search for real-time customer intent analysis.",
    tags: ["n8n", "Gemini AI", "Shopify API"],
    // System representative image
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Job Application HR Assistant",
    description: "End-to-end HR pipeline that extracts resume content from PDF, analyzes candidate-to-job-fit, and automates emails.",
    tags: ["PDF Extraction", "AI Agent", "Outlook"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "VAPI Voice Assistant HR",
    description: "Logic-driven voice automation triggered by Webhooks, utilizing an Analyzer Agent to update databases.",
    tags: ["VAPI", "Webhooks", "Database"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Social Media Distribution Router",
    description: "Content syndication system using a central router node to distribute data across Pinterest, LinkedIn, Instagram, and Facebook.",
    tags: ["Routing", "Social APIs", "Automation"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  }
];

export const Workflows: React.FC = () => {
  return (
    <section id="workflows" className="py-24 bg-zinc-950 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-4">Operations Blueprints</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter">System Logic Flow.</h3>
          <p className="text-zinc-500 max-w-2xl text-lg">
            Production-ready n8n architectures built to solve specific operational bottlenecks and eliminate manual entry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {blueprints.map((bp, idx) => (
            <div key={idx} className="group">
              <a href="#services" className="relative block overflow-hidden rounded-[2rem] bg-zinc-900/50 aspect-video mb-8 border border-zinc-800 group-hover:border-blue-500/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
                <div className="absolute inset-0 p-10 flex items-center justify-center">
                  <div className="w-full h-full border border-dashed border-zinc-800 rounded-2xl flex items-center justify-center overflow-hidden bg-zinc-950/30">
                    <img 
                      src={bp.image} 
                      alt={bp.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-30 group-hover:opacity-60 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 flex gap-3">
                  {bp.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur border border-zinc-800 text-zinc-400 font-black uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors text-white">{bp.title}</h4>
              <p className="text-zinc-500 leading-relaxed mb-4">
                {bp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
