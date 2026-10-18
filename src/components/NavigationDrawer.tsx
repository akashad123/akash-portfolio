import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const navLinks = [
    { label: '01 // OVERVIEW', href: '#hero' },
    { label: '02 // PHILOSOPHY', href: '#statement' },
    { label: '03 // SELECTED WORKS', href: '#projects' },
    { label: '04 // CASE STUDIES', href: '#case-studies' },
    { label: '05 // TIMELINE & CAREER', href: '#timeline' },
    { label: '06 // TECH ECOSYSTEM', href: '#ecosystem' },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-black/95 text-white flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center space-x-3">
              <span className="font-display text-2xl tracking-tighter text-white">
                {portfolioData.developer.name}
              </span>
              <span className="bg-brand-yellow text-black text-xs font-bold px-2 py-0.5 tracking-widest uppercase">
                {portfolioData.developer.focalNumber}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="w-10 h-10 bg-brand-yellow text-black flex items-center justify-center hover:bg-[#E5C200] transition-colors rounded-none"
              aria-label="Close navigation"
            >
              <X size={22} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="my-auto py-12">
            <nav className="flex flex-col space-y-4 sm:space-y-6">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.href)}
                  className="group text-left flex items-center justify-between border-b border-white/5 pb-3 hover:border-brand-yellow transition-colors"
                >
                  <span className="font-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-neutral-300 group-hover:text-brand-yellow transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight className="text-neutral-500 group-hover:text-brand-yellow transition-colors opacity-0 group-hover:opacity-100 w-8 h-8" />
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom Bar inside Overlay */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Status</p>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-brand-yellow animate-pulse inline-block" />
                <span className="text-sm font-medium text-neutral-200">
                  {portfolioData.developer.status}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={portfolioData.developer.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-brand-yellow transition-colors"
              >
                <Github size={16} />
                <span>GITHUB</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="bg-brand-yellow text-black font-display text-sm tracking-wider uppercase font-bold px-5 py-2 hover:bg-[#E5C200] flex items-center space-x-2 rounded-none"
              >
                <Mail size={16} />
                <span>INITIATE CONTACT</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
