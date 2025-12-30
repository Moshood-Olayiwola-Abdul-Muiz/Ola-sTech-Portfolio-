import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    scope: ''
  });
  const [error, setError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation for country code
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
    `.trim();

    // Redirection to WhatsApp
    const whatsappUrl = `https://wa.me/15814657574?text=${encodeURIComponent(message)}`;
    
    // Redirection to Email (mailto)
    const mailtoUrl = `mailto:moshoodolayiwola111@gmail.com?subject=New Project Inquiry&body=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Fallback or secondary: open email
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
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
                  {error && <p className="text-[9px] text-red-500 mt-2 ml-2 font-black uppercase tracking-widest">{error}</p>}
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

              <div>
                <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3 ml-2">Project Scope</label>
                <textarea 
                  rows={5} 
                  placeholder="Describe your operational bottlenecks..." 
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-3xl px-6 py-6 text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-zinc-700" 
                  value={formData.scope}
                  onChange={(e) => setFormData({...formData, scope: e.target.value})}
                  required
                ></textarea>
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