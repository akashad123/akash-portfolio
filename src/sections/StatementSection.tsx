import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { ScrollReveal, TextSegment } from '../components/ScrollReveal';

export const StatementSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { statement } = portfolioData.developer;

  const segments: TextSegment[] = [
    { text: statement.beforeHighlight, isHighlight: false },
    { text: statement.highlight1, isHighlight: true },
    { text: statement.middleText, isHighlight: false },
    { text: statement.highlight2, isHighlight: true },
    ...(statement.afterText ? [{ text: statement.afterText, isHighlight: false }] : []),
  ];

  return (
    <section
      ref={sectionRef}
      id="statement"
      className="relative min-h-screen bg-white text-black flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-8 md:px-12 overflow-hidden border-b border-black/10 select-none"
    >
      {/* Light Theme Architectural Grid */}
      <GridBackground theme="light" columns={8} />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Section Top Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 text-xs font-mono tracking-widest text-neutral-500">
          <span>02 // CORE PHILOSOPHY</span>
          <span className="bg-black text-white px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase">
            PHILOSOPHY
          </span>
        </div>

        {/* Center: Scroll Reveal Typography (React Bits Pattern: Letter-by-Letter Unblur & Opacity) */}
        <div className="my-auto py-12 max-w-4xl mx-auto w-full text-center px-2 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase leading-snug sm:leading-tight text-black">
            <ScrollReveal
              segments={segments}
              containerRef={sectionRef}
            />
          </h2>
        </div>

        {/* Clean Bottom Coordinate Bar */}
        <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-neutral-500">
          <span>SECTION 02</span>
          <span>CORE PHILOSOPHY // SCROLL REVEAL</span>
        </div>
      </div>
    </section>
  );
};
