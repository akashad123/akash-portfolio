import React, { useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { initGsapParallax } from '../utils/gsapParallax';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { developer } = portfolioData;
  const footerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Parallax on Footer Background Grid
  useEffect(() => {
    const cleanup = initGsapParallax(bgRef.current, footerRef.current, {
      yStart: 20,
      yEnd: -20,
      scrub: 1.2,
    });
    return cleanup;
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#050505] text-white py-8 sm:py-10 px-4 sm:px-8 md:px-12 border-t border-white/10 select-none overflow-hidden"
    >
      {/* Background Architectural Grid Lines with GSAP Scroll Parallax */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
        <GridBackground theme="dark" columns={8} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Monogram Brand Logo & Copyright */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <span className="font-display italic font-black text-2xl sm:text-3xl tracking-tighter text-white">
            {developer.monogram}
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest">
            © {new Date().getFullYear()} {developer.name}. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center / Right Links and Back-to-Top Button */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6 sm:space-x-8">
          <div className="flex items-center space-x-3 sm:space-x-4 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <a
              href={developer.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-yellow transition-colors"
            >
              LINKEDIN
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href={developer.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-yellow transition-colors"
            >
              GITHUB
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href={`mailto:${developer.socials.email}`}
              className="hover:text-brand-yellow transition-colors"
            >
              MAIL
            </a>
          </div>

          {/* Square Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-[#111111] border border-white/10 hover:border-brand-yellow text-neutral-400 hover:text-brand-yellow flex items-center justify-center transition-all cursor-pointer rounded-none group shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
