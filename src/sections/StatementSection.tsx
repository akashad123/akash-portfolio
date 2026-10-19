import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';

export const StatementSection: React.FC = () => {
  const { statement } = portfolioData.developer;

  return (
    <section
      id="statement"
      className="relative min-h-screen bg-white text-black flex flex-col justify-center py-20 px-4 sm:px-8 md:px-12 overflow-hidden border-b border-black/10 select-none"
    >
      {/* Light Theme Architectural Grid */}
      <GridBackground theme="light" columns={8} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Top Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-12 text-xs font-mono tracking-widest text-neutral-500">
          <span>02 // CORE PHILOSOPHY</span>
          <span className="bg-black text-white px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase">
            ENGINEERING PRINCIPLES
          </span>
        </div>

        {/* Triple Element Layout: Left Image | Center Massive Typography | Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Flanking Image (Action / High-Performance Graphic) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="border border-black/10 bg-neutral-100 p-2 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
                alt="System Architecture Matrix"
                className="w-full h-44 object-cover filter grayscale contrast-125"
              />
              <div className="mt-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-center">
                FIG 01. CODE MATRIX
              </div>
            </div>
          </div>

          {/* Center Column: Massive Editorial Typography Composition */}
          <div className="lg:col-span-8 text-center px-2 sm:px-6">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tighter uppercase leading-[0.92] text-black">
              {statement.beforeHighlight}
              <span className="text-brand-yellow bg-black px-2 py-0.5 inline-block mx-1">
                {statement.highlight1}
              </span>
              {statement.middleText}
              <span className="text-brand-yellow bg-black px-2 py-0.5 inline-block mx-1">
                {statement.highlight2}
              </span>
              {statement.afterText}
            </h2>

            <div className="mt-8 flex items-center justify-center space-x-3">
              <span className="w-12 h-px bg-black/20" />
              <span className="text-xs font-mono tracking-widest text-neutral-600 uppercase">
                AKASH // SYSTEMS ARCHITECTURE
              </span>
              <span className="w-12 h-px bg-black/20" />

            </div>
          </div>

          {/* Right Flanking Image (Developer Focus Frame) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="border border-black/10 bg-neutral-100 p-2 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1534972195531-a756b1140f6c?auto=format&fit=crop&w=600&q=80"
                alt="Developer Craftsmanship"
                className="w-full h-44 object-cover filter grayscale contrast-125"
              />
              <div className="mt-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-center">
                FIG 02. FOCUS & METRICS
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Supporting Cards (Visible on smaller viewports) */}
        <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
          <div className="border border-black/10 p-2 bg-neutral-50">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
              alt="System Architecture Matrix"
              className="w-full h-28 object-cover filter grayscale"
            />
          </div>
          <div className="border border-black/10 p-2 bg-neutral-50">
            <img
              src="https://images.unsplash.com/photo-1534972195531-a756b1140f6c?auto=format&fit=crop&w=400&q=80"
              alt="Developer Focus"
              className="w-full h-28 object-cover filter grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
