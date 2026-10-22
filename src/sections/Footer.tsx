import React, { useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { initGsapParallax } from '../utils/gsapParallax';

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
      yStart: 25,
      yEnd: -25,
      scrub: 1.2,
    });
    return cleanup;
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <div className="flex items-center space-x-4">
          <span className="font-display italic font-black text-2xl sm:text-3xl tracking-tighter text-white">
            {developer.monogram}
          </span>
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline-block">
            © {new Date().getFullYear()} {developer.name}. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Back to Top Arrow Only (Key Up Arrow Only in size 14) */}
        <button
          onClick={scrollToTop}
          className="w-8 h-8 sm:w-9 sm:h-9 bg-neutral-900 border border-white/10 text-white flex items-center justify-center hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-colors group cursor-pointer rounded-none"
          aria-label="Back to top"
        >
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
