import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { StoreMarquee } from './components/StoreMarquee';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 bg-zinc-950 text-zinc-50">
      <main>
        <Hero />
        <Services />
        {/* Logos placed at the top of testimonials as requested */}
        <StoreMarquee />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;