
import React from 'react';

export const CaseObservation: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
             <div className="bg-white/10 p-2 inline-block rounded-lg mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
             <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Case Observation</h3>
             <p className="text-blue-100 text-sm opacity-80 uppercase tracking-widest font-bold">Optimization Protocol</p>
          </div>
          <div className="md:w-2/3">
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-tight">
              "Checkout Flow Simplification: Reduced friction at the purchase stage by restructuring logic. The result was a 14% lift in completed transactions without changing price or product."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
