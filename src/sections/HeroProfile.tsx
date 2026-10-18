import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { ArrowDown, Terminal, MapPin } from 'lucide-react';

interface HeroProfileProps {
  onOpenContact: () => void;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ onOpenContact }) => {
  const { developer, stats } = portfolioData;

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
        {/* Top Metric Bar & Coordinates */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-neutral-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-brand-yellow inline-block" />
            <span>AKASH // PRODUCTION TELEMETRY</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={12} className="text-brand-yellow" />
            <span>{developer.location}</span>
          </div>
        </div>

        {/* Triple Column Center Grid (Left Stats | Giant Focal "98" | Right Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8 md:my-16">
          {/* Left Column: Metrics & Name Intro */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              {stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="border-l border-white/20 pl-4 py-1">
                  <div className="font-display text-4xl sm:text-5xl tracking-tight text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono tracking-wider text-neutral-400 uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <span className="text-xs font-mono text-brand-yellow tracking-widest uppercase block mb-1">
                IDENTITY
              </span>
              <h1 className="font-display text-5xl sm:text-6xl tracking-tight uppercase text-white">
                {developer.name}
              </h1>
              <p className="text-xs font-mono text-neutral-400 mt-2 leading-relaxed">
                {developer.bio}
              </p>
            </div>
          </div>

          {/* Center Column: Giant Focal Number ("98") */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center order-1 lg:order-2 select-none py-6">
            <div className="relative">
              <span className="font-display text-[26vw] lg:text-[18rem] leading-none tracking-tighter text-white font-extrabold select-none">
                {developer.focalNumber}
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-yellow text-black font-mono text-[10px] sm:text-xs font-bold px-3 py-0.5 tracking-widest uppercase whitespace-nowrap">
                {developer.focalNumberLabel}
              </div>
            </div>
          </div>

          {/* Right Column: Statement, Experience & Current Availability */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8 text-left lg:text-right order-3">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed lg:max-w-xs lg:ml-auto">
                "Every release is a test. Not just of syntax, but of system resilience, speed, and real-world utility."
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="border-l lg:border-l-0 lg:border-r border-white/20 pl-4 lg:pl-0 lg:pr-4">
                <div className="text-xs font-mono tracking-wider text-neutral-500 uppercase">
                  ACTIVE DOMAIN
                </div>
                <div className="font-display text-xl sm:text-2xl tracking-tight text-white uppercase mt-0.5">
                  FULL-STACK & AI
                </div>
              </div>

              <div className="border-l lg:border-l-0 lg:border-r border-white/20 pl-4 lg:pl-0 lg:pr-4">
                <div className="text-xs font-mono tracking-wider text-neutral-500 uppercase">
                  EXPERIENCE
                </div>
                <div className="font-display text-xl sm:text-2xl tracking-tight text-white uppercase mt-0.5">
                  {developer.experienceYears}
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

            {/* CTAs */}
            <div className="flex items-center lg:justify-end space-x-3 pt-2">
              <button
                onClick={onOpenContact}
                className="bg-brand-yellow text-black font-display text-xs tracking-widest uppercase font-bold px-5 py-2.5 hover:bg-[#E5C200] transition-colors rounded-none"
              >
                DEPLOY CONTRACT
              </button>
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
