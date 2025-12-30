
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Workflows } from './components/Workflows';
import { KlaviyoFlows } from './components/KlaviyoFlows';
import { StoreMarquee } from './components/StoreMarquee';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200 bg-zinc-950 text-zinc-50">
      <Header />
      <main>
        <Hero />
        <StoreMarquee />
        <About />
        <Services />
        <Workflows />
        <KlaviyoFlows />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
