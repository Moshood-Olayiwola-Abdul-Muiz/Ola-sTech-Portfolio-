
import React from 'react';

export const ToolsCloud: React.FC = () => {
  const tools = ["n8n", "Zapier", "Make", "IFTTT", "APIs", "Webhooks", "JSON", "Node.js", "Python", "Airtable", "Shopify", "Stripe"];

  return (
    <section className="py-24 px-6 border-t border-zinc-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase mb-12">The Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {tools.map((tool) => (
            <span 
              key={tool} 
              className="text-2xl md:text-3xl font-bold text-zinc-800 hover:text-blue-500/50 transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
