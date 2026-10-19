import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-md py-4 border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Monogram Brand Mark */}
        <a
          href="#hero"
          className="group flex items-center space-x-2 select-none"
          aria-label="Akash - Home"
        >
          <span className="font-display text-2xl sm:text-3xl tracking-tighter text-white group-hover:text-brand-yellow transition-colors">
            {portfolioData.developer.monogram}
          </span>
        </a>


        {/* Right Controls */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onOpenContact}
            className="hidden md:inline-flex items-center text-xs uppercase font-mono tracking-widest text-neutral-300 hover:text-brand-yellow px-4 py-2 border border-white/20 hover:border-brand-yellow transition-colors rounded-none"
          >
            GET IN TOUCH
          </button>

          {/* Yellow Square Menu Trigger */}
          <button
            onClick={onOpenMenu}
            className="w-10 h-10 sm:w-11 sm:h-11 bg-brand-yellow text-black flex items-center justify-center hover:bg-[#E5C200] transition-colors active:scale-95 shadow-lg rounded-none"
            aria-label="Open navigation menu"
          >
            <Menu size={22} className="stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};
