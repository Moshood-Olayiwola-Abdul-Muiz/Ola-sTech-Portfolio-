import React from 'react';

const coreServices = [
  {
    id: "ai-agents",
    title: "AI Sales & Support Agents",
    desc: "Intelligent Shopify & CRM bots that handle product search, intent analysis, and customer recovery automatically.",
    tech: ["Gemini AI", "Shopify API", "Re:amaze", "n8n"],
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gallery: [
      { url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400", title: "Active API Nodes" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400", title: "Integration Dashboard" },
      { url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400", title: "Flow Logic Map" }
    ]
  },
  {
    id: "hr-automation",
    title: "HR & Recruitment Automation",
    desc: "End-to-end candidate screening systems that extract data from resumes and automate hiring communications.",
    tech: ["PDF Parsing", "AI Scoring", "Outlook", "Sheets"],
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    gallery: [
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400", title: "HR Portal Logic" },
      { url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400", title: "CV Analysis Engine" },
      { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400", title: "Workflow Screen" }
    ]
  },
  {
    id: "media-orchestration",
    title: "Content & Media Orchestration",
    desc: "Router-based distribution systems that sync content across social networks while logging engagement data.",
    tech: ["API Routers", "Instagram Graph", "LinkedIn API", "Pinterest"],
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    gallery: [
      { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400", title: "Social Sync Graph" },
      { url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=400", title: "Syndication Hub" },
      { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400", title: "Metrics Router" }
    ]
  },
  {
    id: "integrations",
    title: "Integrations & Voice AI",
    desc: "Connecting VAPI and Webhooks to backend databases for low-latency voice-driven business operations.",
    tech: ["VAPI", "Webhooks", "JSON Parsing", "DB Ops"],
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    gallery: [
      { url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=400", title: "Server Nodes" },
      { url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400", title: "Endpoint Security" },
      { url: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400", title: "Voice API Logic" }
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-zinc-950 border-t border-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <h2 className="text-xs font-black tracking-[0.5em] text-blue-500 uppercase mb-6">Service Architecture</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Scalable Business Logic.</h3>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {coreServices.map((s) => (
            <div 
              key={s.id} 
              className="bg-zinc-900/30 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800/60 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <div className="mb-8 p-4 bg-zinc-950 rounded-2xl inline-block group-hover:bg-blue-500/10 transition-colors border border-zinc-800">
                    {s.icon}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors tracking-tight">
                    {s.title}
                  </h4>
                  <p className="text-zinc-500 text-sm md:text-base mb-8 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.tech.map((t) => (
                      <span key={t} className="text-[9px] px-3 py-1.5 rounded-lg bg-zinc-950 text-zinc-400 border border-zinc-800 font-bold uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="grid grid-cols-2 gap-3 h-full max-h-[300px]">
                    {s.gallery.map((img, i) => (
                      <div 
                        key={i} 
                        className={`relative rounded-2xl overflow-hidden border border-zinc-800 group/img cursor-pointer ${i === 0 ? 'col-span-2 row-span-1 h-32' : 'h-32'}`}
                      >
                        <img 
                          src={img.url} 
                          alt={img.title} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110 opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 left-3">
                          <span className="text-[8px] font-black text-white uppercase tracking-widest bg-zinc-900/80 px-2 py-1 rounded">
                            {img.title}
                          </span>
                        </div>
                      </div>
                    ))}
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