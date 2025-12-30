import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Ola'sTech streamlined our back-office operations in a way we didn't think possible. The focus on system reliability meant we finally stopped worrying about broken flows.",
      author: "Digital Brand Director",
      company: "E-comm Growth Agency",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
      text: "A true engineer's approach to business. Every automation feels intentional and robust. Highly recommended for complex logic flows.",
      author: "Founder",
      company: "SaaS Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
    }
  ];

  const proofImages = [
    { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600", label: "$18,850.51 Achievement" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", label: "$42,635.81 Scale Logic" },
    { src: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600", label: "Global Performance Data" },
  ];

  return (
    <section id="testimonials" className="py-32 bg-zinc-950 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black tracking-[0.6em] text-blue-500 uppercase mb-6">Proven Background Performance</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Market Proof & Results.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-12 rounded-[3rem] relative hover:border-blue-500/20 transition-all group backdrop-blur-sm">
              <div className="absolute top-8 right-12 text-blue-500/10 text-8xl font-black select-none pointer-events-none">"</div>
              <p className="text-zinc-300 mb-10 italic text-xl leading-relaxed relative z-10 font-medium">
                "{t.text}"
              </p>
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-blue-500 transition-all duration-500">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-black text-white text-lg tracking-tight">{t.author}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-black">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proof Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofImages.map((img, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/3] shadow-2xl">
               <img 
                 src={img.src} 
                 alt={img.label} 
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale-0" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
               <div className="absolute bottom-8 left-8 right-8">
                  <span className="block text-[10px] font-black text-blue-400 uppercase tracking-widest bg-zinc-950/90 px-5 py-3 rounded-xl border border-zinc-800 backdrop-blur-xl text-center shadow-lg">
                    {img.label}
                  </span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};