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
          <div className="text-neutral-400 uppercase tracking-widest text-[11px]">
            {developer.role}
          </div>
        </div>

        {/* Main Grid: Left Bio | Center Editorial Portrait | Right Active Stack, Experience & Availability */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-6 md:my-12">
          {/* Left Column: Bio & Deploy Action */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 order-1">
            <div className="space-y-4">
              <div className="text-[10px] font-mono tracking-widest text-brand-yellow uppercase flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-brand-yellow" />
                <span>ARCHITECTURAL PROFILE // BIO</span>
              </div>
              <p className="text-sm sm:text-base font-mono text-neutral-300 leading-relaxed">
                {developer.bio}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                onClick={onOpenContact}
                className="bg-brand-yellow text-black font-display text-xs tracking-widest uppercase font-bold px-6 py-3 hover:bg-[#E5C200] transition-colors rounded-none cursor-pointer shadow-sm"
              >
                DEPLOY CONTRACT
              </button>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                // SYSTEM VERIFIED
              </span>
            </div>
          </div>

          {/* Center Column: High-Impact Editorial Portrait of Akash */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-2 sm:order-2 my-4 lg:my-0">
            <div className="relative group w-full max-w-[270px] sm:max-w-[310px] md:max-w-[330px] aspect-[3/4] bg-neutral-950 border border-white/20 hover:border-brand-yellow transition-all duration-500 shadow-2xl overflow-hidden rounded-none">
              {/* Corner Framing Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-yellow z-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-yellow z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-yellow z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-yellow z-20 pointer-events-none" />

              {/* Top Telemetry Overlay */}
              <div className="absolute top-2.5 left-2.5 z-20 bg-black/85 backdrop-blur-sm border border-white/15 px-2 py-0.5 flex items-center space-x-1.5 font-mono text-[9px] text-brand-yellow uppercase tracking-widest select-none">
                <span className="w-1.5 h-1.5 bg-brand-yellow animate-ping" />
                <span>AKASH D // SUBJECT 01</span>
              </div>

              {/* Bottom Right Coordinate Badge */}
              <div className="absolute bottom-2.5 right-2.5 z-20 bg-black/85 backdrop-blur-sm border border-white/15 px-2 py-0.5 font-mono text-[8px] text-neutral-400 tracking-widest uppercase select-none">
                BLR // 12.97°N 77.59°E
              </div>

              {/* High-Resolution Portrait with Dynamic Hover Un-Filter */}
              <img
                src="/images/akash-portrait.jpg"
                alt="Akash D - Full Stack Web Developer"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-105 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="eager"
              />

              {/* Subtle Scanline Texture Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-2.5 flex items-center space-x-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest select-none">
              <span className="text-brand-yellow font-bold">›</span>
              <span>DEV PORTRAIT // HOVER TO REVEAL COLOR</span>
            </div>
          </div>

          {/* Right Column: Active Stack, Experience & Current Availability */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 text-left lg:text-right order-3">
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
                  <span>{developer.status}</span>
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
