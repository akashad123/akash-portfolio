import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { headerInitial, headerAnimate, headerTransition } from '../utils/motion';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find whether the header (viewport Y ~ 50px) is currently positioned over a light section
      const lightElements = document.querySelectorAll('#statement, #projects, #ecosystem');
      let onLight = false;
      const headerY = 50;
      lightElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerY && rect.bottom >= headerY) {
          onLight = true;
        }
      });
      setIsLightSection(onLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={headerInitial}
      animate={headerAnimate}
      transition={headerTransition}
      className="fixed top-0 left-0 right-0 z-40 bg-transparent py-5 sm:py-6 px-4 sm:px-8 md:px-12 pointer-events-none transition-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
        {/* Monogram Brand Mark 'AD' */}
        <a
          href="#hero"
          className="pointer-events-auto group flex items-center select-none"
          aria-label="Akash - Home"
        >
          <span
            className={`font-display italic font-black text-3xl sm:text-4xl tracking-tighter transition-colors duration-200 ${
              isLightSection ? 'text-black' : 'text-white'
            } group-hover:text-brand-yellow`}
          >
            {portfolioData.developer.monogram}
          </span>
        </a>

        {/* Sleek Compact Yellow Square Hamburger Trigger with 2 horizontal black bars */}
        <button
          onClick={onOpenMenu}
          className="pointer-events-auto w-7.5 h-7.5 sm:w-8 sm:h-8 bg-brand-yellow text-black flex flex-col items-center justify-center gap-[3.5px] hover:bg-[#E5C200] active:scale-90 transition-all shadow-sm rounded-none border border-black/10 cursor-pointer"
          aria-label="Open navigation menu"
        >
          <span className="w-3.5 h-[2px] bg-black block" />
          <span className="w-3.5 h-[2px] bg-black block" />
        </button>
      </div>
    </motion.header>
  );
};
