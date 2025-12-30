
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    scope: ''
  });
  const [error, setError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: e.target.value });
    if (error) setError('');
  };

  const analyzeWithAI = async () => {
    if (!formData.scope || formData.scope.length < 10) {
      setError("Please provide a bit more detail in the project scope first.");
      return;
    }

    setIsAnalyzing(true);
    setAiAnalysis(null);
    setError('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `As a senior technical systems architect for Ola'sTech, provide a professional, highly specific technical analysis and suggested high-level tech stack (e.g., n8n, VAPI, Shopify Liquid, etc.) for this project scope: "${formData.scope}". Keep it to 3-4 impactful sentences.`,
        config: {
          temperature: 0.4,
          thinkingConfig: { thinkingBudget: 4000 }
        },
      });

      setAiAnalysis(response.text || "Analysis complete. Ready for deployment.");
    } catch (err) {
      console.error("AI Analysis failed:", err);
      setError("AI Analysis unavailable. Proceed with direct contact.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone.startsWith('+')) {
      setError('Error: Please include your country code (e.g., +1, +44, +234).');
      return;
    }

    const message = `
*New Architecture Inquiry*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Scope: ${formData.scope}
${aiAnalysis ? `\n*AI Initial Assessment:* \n${aiAnalysis}` : ''}
    `.trim();

    const whatsappUrl = `https://wa.me/15814657574?text=${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:moshoodolayiwola111@gmail.com?subject=New Project Inquiry&body=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <h2 className="text-xs font-black tracking-[0.6em] text-blue-500 uppercase mb-8">System Deployment</h2>
            <h3 className="text-5xl md:text-8xl font-black mb-10 text-white tracking-tighter leading-[0.85]">Let's Build <br /><span className="text-blue-500">Robustness.</span></h3>
            <p className="text-zinc-500 text-xl leading-relaxed mb-12 font-medium">
              Start a conversation about your infrastructure. We analyze bottlenecks and deploy reliable automation.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:moshoodolayiwola111@gmail.com" className="flex items-center space-x-6 text-zinc-400 group transition-all w-fit">
                <div className="w-16 h-16 rounded-[1.25rem] bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 group-hover:text-blue-500 transition-all shadow-xl">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-lg font-bold group-hover:text-white transition-colors">moshoodolayiwola111@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-10 md:p-16 rounded-[3rem] border border-zinc-800 backdrop-blur-3xl shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 blur-[80px] pointer-events-none"></div>
            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3 ml-2">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-zinc-700" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3 ml-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-zinc-700" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required 
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3 ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className={`w-full bg-zinc-950/80 border rounded-2xl px-6 py-5 text-white focus:outline-none transition-all placeholder:text-zinc-700 ${error ? 'border-red-500' : 'border-zinc-800 focus:border-blue-500'}`} 
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-zinc-700" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-3 ml-2">
                  <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Project Scope</label>
                  <button 
                    type="button"
                    onClick={analyzeWithAI}
                    disabled={isAnalyzing}
                    className="text-[9px] font-black text-blue-500 uppercase tracking-widest hover:text-blue-400 disabled:text-zinc-700 transition-colors flex items-center space-x-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                        <span>Processing Logic...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        <span>Analyze with AI</span>
                      </>
                    )}
                  </button>
                </div>
                <textarea 
                  rows={5} 
                  placeholder="Describe your operational bottlenecks..." 
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-3xl px-6 py-6 text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-zinc-700" 
                  value={formData.scope}
                  onChange={(e) => setFormData({...formData, scope: e.target.value})}
                  required
                ></textarea>

                {aiAnalysis && (
                  <div className="mt-6 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl animate-reveal-up">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Architectural Assessment</span>
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed font-medium">{aiAnalysis}</p>
                  </div>
                )}
                
                {error && <p className="text-[9px] text-red-500 mt-4 ml-2 font-black uppercase tracking-widest">{error}</p>}
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-6 rounded-2xl transition-all tracking-[0.3em] uppercase text-xs shadow-xl shadow-blue-500/10 active:scale-95">
                Initiate Deployment Flow
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
