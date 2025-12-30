
import React from 'react';

const coreServices = [
  {
    number: "01",
    title: "AI Sales & Shopify Agents",
    desc: "Intelligent Shopify & CRM bots that handle product search and customer recovery automatically using Gemini AI.",
    tech: ["Gemini AI", "Shopify API", "n8n"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "02",
    title: "HR & Recruitment Pipelines",
    desc: "End-to-end candidate screening systems that extract data from resumes and automate hiring flows via PDF parsing.",
    tech: ["PDF Parsing", "AI Scoring", "Outlook"],
    image: "https://images.unsplash.com/photo-1454165833767-1314d7968593?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "03",
    title: "Media Orchestration",
    desc: "Router-based distribution systems that sync content across social networks while logging engagement data.",
    tech: ["API Routers", "Instagram Graph", "LinkedIn"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "04",
    title: "Cloud & Voice Architecture",
    desc: "Connecting VAPI and Webhooks to backend databases for low-latency business operations and voice AI.",
    tech: ["VAPI", "Webhooks", "Cloud Ops"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-zinc-950 border-t border-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24 text-left border-l-4 border-blue-600 pl-8">
          <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-6">Service Architecture</h2>
          <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter">Scalable Logic.</h3>
        </div>

        <div className="space-y-8">
          {coreServices.map((s, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-zinc-900/10 border border-zinc-900/50 rounded-[2.5rem] p-8 md:p-12 transition-all hover:bg-zinc-900/30 hover:border-blue-500/30 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="flex-shrink-0 w-24 md:w-32 h-24 md:h-32 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform">
                {s.number}
              </div>
              
              <div className="flex-grow">
                <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors tracking-tight">
                  {s.title}
                </h4>
                <p className="text-zinc-500 mb-8 leading-relaxed max-w-xl">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {s.tech.map((t) => (
                    <span key={t} className="text-[10px] px-4 py-2 rounded-xl bg-zinc-950 text-zinc-400 border border-zinc-800 font-bold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block w-72 h-48 rounded-[2rem] overflow-hidden border border-zinc-800/50">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
