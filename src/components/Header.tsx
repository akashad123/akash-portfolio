import React from 'react';
import { motion } from 'framer-motion';
import { headerInitial, headerAnimate, headerTransition } from '../utils/motion';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  return (
    <motion.header
      initial={headerInitial}
      animate={headerAnimate}
      transition={headerTransition}
      className="fixed top-0 left-0 right-0 z-40 bg-transparent py-3.5 sm:py-4 px-6 sm:px-10 md:px-14 lg:px-16 pointer-events-none transition-none"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-end pointer-events-none">
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
