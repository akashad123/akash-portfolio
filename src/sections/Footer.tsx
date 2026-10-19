import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { developer } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-12 px-4 sm:px-8 md:px-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Massive Editorial Brand Statement in Footer */}
        <div className="border-b border-white/10 pb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-brand-yellow tracking-widest uppercase block mb-2">
              AVAILABLE FOR HIGH-IMPACT COLLABORATIONS
            </span>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-white">
              LET'S BUILD
            </h2>
          </div>

          <button
            onClick={onOpenContact}
            className="bg-brand-yellow text-black font-display text-sm tracking-widest uppercase font-bold px-10 py-5 hover:bg-[#E5C200] transition-colors rounded-none shadow-xl shrink-0"
          >
            START AN ENGAGEMENT
          </button>
        </div>

        {/* Multi-Column Architectural Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16 border-b border-white/10">
          {/* Col 1: Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-display text-3xl tracking-tighter text-white">
                {developer.name}
              </span>
              <span className="text-[10px] font-mono bg-brand-yellow text-black px-1.5 py-0.5 font-bold uppercase tracking-widest">
                FULL STACK
              </span>
            </div>

            <p className="text-xs font-mono text-neutral-400 max-w-sm leading-relaxed">
              {developer.tagline}
            </p>
            <div className="text-xs font-mono text-neutral-500 pt-2">
              LOCATION: {developer.location}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest block mb-4">
              SITE MAP
            </span>
            <ul className="space-y-2 text-xs font-mono text-neutral-300">
              <li>
                <a href="#hero" className="hover:text-brand-yellow transition-colors">
                  01 // OVERVIEW
                </a>
              </li>
              <li>
                <a href="#statement" className="hover:text-brand-yellow transition-colors">
                  02 // PHILOSOPHY
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-yellow transition-colors">
                  03 // SELECTED WORKS
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-brand-yellow transition-colors">
                  04 // TIMELINE & CAREER
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-brand-yellow transition-colors">
                  05 // CASE STUDIES
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-brand-yellow transition-colors">
                  06 // TECH ECOSYSTEM
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Channels */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest block mb-4">
              DISPATCH CHANNELS
            </span>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center space-x-2 text-neutral-300">
                <Mail size={14} className="text-brand-yellow" />
                <a
                  href={`mailto:${developer.socials.email}`}
                  className="hover:text-brand-yellow transition-colors"
                >
                  {developer.socials.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <Github size={14} className="text-brand-yellow" />
                <a
                  href={developer.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-yellow transition-colors"
                >
                  github.com/akashad123
                </a>
              </div>
            </div>

            <div className="pt-4">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                SYSTEM AVAILABILITY
              </span>
              <div className="flex items-center space-x-2 mt-1">
                <span className="w-2 h-2 bg-brand-yellow animate-ping inline-block" />
                <span className="text-xs font-mono text-neutral-300">
                  {developer.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} AKASH. MOTORSPORT EDITORIAL ART DIRECTION. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:text-brand-yellow transition-colors group cursor-pointer"
          >
            <span>BACK TO ASCENT</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
