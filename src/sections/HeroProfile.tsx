import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { ArrowDown, Terminal, MapPin } from 'lucide-react';

interface HeroProfileProps {
  onOpenContact: () => void;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ onOpenContact }) => {
  const { developer } = portfolioData;


  const scrollToStatement = () => {
    const el = document.getElementById('statement');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 md:px-12 overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Grid Lines */}
      <GridBackground theme="dark" columns={8} />

      {/* Atmospheric High-Contrast Background Media */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black" />

      {/* Main Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Coordinates Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-neutral-400">
          <div className="flex items-center space-x-2">
            <MapPin size={12} className="text-brand-yellow" />
            <span>{developer.location}</span>
          </div>
          <div className="text-neutral-500 font-mono text-[11px] tracking-widest uppercase">
            EDITORIAL PORTFOLIO
          </div>
        </div>

        {/* Main Grid: Left Identity & Bio | Right Active Stack, Experience & Availability */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-10 md:my-20">
          {/* Left Column: Identity, Large Typographic Name & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-brand-yellow tracking-widest uppercase block mb-2">
                IDENTITY
              </span>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase text-white leading-[0.9]">
                {developer.name}
              </h1>
            </div>

            <p className="text-sm sm:text-base font-mono text-neutral-400 max-w-xl leading-relaxed">
              {developer.bio}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="bg-brand-yellow text-black font-display text-xs tracking-widest uppercase font-bold px-6 py-3 hover:bg-[#E5C200] transition-colors rounded-none"
              >
                DEPLOY CONTRACT
              </button>
            </div>
          </div>

          {/* Right Column: Statement, Active Stack, Experience & Current Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left lg:text-right">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed lg:max-w-sm lg:ml-auto">
                "Every release is a test. Not just of syntax, but of system resilience, speed, and real-world utility."
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="border-l lg:border-l-0 lg:border-r border-white/20 pl-4 lg:pl-0 lg:pr-4">
                <div className="text-xs font-mono tracking-wider text-neutral-500 uppercase">
                  ACTIVE STACK
                </div>
                <div className="font-display text-xl sm:text-2xl tracking-tight text-white uppercase mt-0.5">
                  FULL STACK AND AI
                </div>
              </div>

              <div className="border-l lg:border-l-0 lg:border-r border-white/20 pl-4 lg:pl-0 lg:pr-4">
                <div className="text-xs font-mono tracking-wider text-neutral-500 uppercase">
                  EXPERIENCE
                </div>
                <div className="font-display text-xl sm:text-2xl tracking-tight text-white uppercase mt-0.5">
                  1+ YEARS IN SOFTWARE DEVELOPMENT
                </div>
              </div>

              <div className="border-l lg:border-l-0 lg:border-r border-brand-yellow pl-4 lg:pl-0 lg:pr-4">
                <div className="text-xs font-mono tracking-wider text-brand-yellow uppercase">
                  CURRENT AVAILABILITY
                </div>
                <div className="font-display text-lg tracking-tight text-white uppercase mt-0.5 flex items-center lg:justify-end space-x-2">
                  <span className="w-2 h-2 bg-brand-yellow animate-ping inline-block" />
                  <span>AVAILABLE ONLY</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar with Scroll Indicator */}
        <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-neutral-500">
          <div className="flex items-center space-x-2">
            <Terminal size={14} className="text-brand-yellow" />
            <span>MERN // GEMINI API // SUPABASE // AWS EC2</span>
          </div>

          <button
            onClick={scrollToStatement}
            className="flex items-center space-x-1 hover:text-brand-yellow transition-colors group cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
