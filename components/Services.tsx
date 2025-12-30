
import React from 'react';

const coreServices = [
  {
    number: "01",
    title: "AI Sales & Shopify Agents",
    desc: "Intelligent Shopify & CRM bots that handle product search and customer recovery automatically using Gemini AI logic to drive conversions.",
    tech: ["Gemini AI", "Shopify API", "n8n"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "02",
    title: "HR & Recruitment Pipelines",
    desc: "VAPI-driven voice assistant systems for HR that automate candidate screening, log data directly to Google Sheets, and trigger selection/rejection emails based on AI scoring.",
    tech: ["VAPI", "AI Voice", "Outlook Automation"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "03",
    title: "Media Orchestration",
    desc: "Sophisticated Social Media Router systems that catch webhooks and distribute content across Pinterest, LinkedIn, Instagram, and Facebook with automatic performance logging.",
    tech: ["Make/Integromat", "API Routers", "Data Sync"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "04",
    title: "Cloud & Voice Architecture",
    desc: "Connecting high-scale VAPI voice agents and Webhooks to backend databases for low-latency, real-time business operations and high-impact AI interaction.",
    tech: ["Cloud Architecture", "VAPI", "Webhooks"],
    // Updated with a high-impact technical visualization of cloud/network architecture
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-zinc-950 border-t border-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24 text-left border-l-4 border-blue-600 pl-8">
          <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-6">Service Architecture</h2>
          <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">Scalable Logic.</h3>
        </div>

        <div className="space-y-12">
          {coreServices.map((s, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-zinc-900/10 border border-zinc-900/50 rounded-[2.5rem] p-8 md:p-12 transition-all hover:bg-zinc-900/30 hover:border-blue-500/30 flex flex-col lg:flex-row items-center gap-10 md:gap-14"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform shadow-2xl">
                {s.number}
              </div>
              
              {/* Content Text */}
              <div className="flex-grow text-center lg:text-left">
                <h4 className="text-2xl md:text-4xl font-black mb-4 text-white group-hover:text-blue-500 transition-colors tracking-tight uppercase">
                  {s.title}
                </h4>
                <p className="text-zinc-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 text-base md:text-lg font-medium">
                  {s.desc}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
                  {s.tech.map((t) => (
                    <span key={t} className="text-[10px] md:text-[11px] px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-zinc-950 text-zinc-400 border border-zinc-800 font-black uppercase tracking-widest group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* IMAGE CONTAINER - Ensured visibility for all devices */}
              <div className="w-full lg:w-[450px] aspect-video lg:aspect-square h-auto lg:h-64 rounded-[2rem] overflow-hidden border border-zinc-800 flex-shrink-0 relative group-hover:border-blue-500/40 transition-all duration-700 shadow-[0_0_50px_-15px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover opacity-90 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                />
                {/* Visual Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
