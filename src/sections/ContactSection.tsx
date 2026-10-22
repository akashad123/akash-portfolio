import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { initGsapMultiParallax } from '../utils/gsapParallax';
import {
  sectionViewportConfig,
  fadeInDownVariants,
  fadeInUpVariants,
} from '../utils/motion';

interface ContactSectionProps {
  onOpenContact: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: bgRef.current, yStart: 30, yEnd: -30, scrub: 1.1 },
        { target: titleRef.current, yStart: 25, yEnd: -25, scrub: 1.2 },
      ],
      sectionRef.current
    );
    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#050505] text-white py-16 sm:py-20 px-4 sm:px-8 md:px-12 border-b border-white/10 select-none overflow-hidden"
    >
      {/* Background Architectural Grid Lines with GSAP Scroll Parallax */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
        <GridBackground theme="dark" columns={8} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top Header - Slides down smoothly */}
        <motion.div
          variants={fadeInDownVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportConfig}
          custom={0.05}
          className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-neutral-400 mb-8 sm:mb-12"
        >
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-brand-yellow" />
            <span>07 // CONTACT & COLLABORATIONS</span>
          </div>
          <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase">
            DIRECT INQUIRY
          </span>
        </motion.div>

        {/* Massive Editorial Brand Statement: LET'S BUILD + START AN ENGAGEMENT */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportConfig}
          custom={0.1}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 py-4 sm:py-8"
        >
          <div ref={titleRef} className="will-change-transform">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-white">
              LET'S BUILD
            </h2>
          </div>

          <button
            onClick={onOpenContact}
            className="bg-brand-yellow text-black font-display text-sm tracking-widest uppercase font-bold px-10 py-5 hover:bg-[#E5C200] transition-colors rounded-none shadow-xl shrink-0 cursor-pointer flex items-center space-x-2 group"
          >
            <span>START AN ENGAGEMENT</span>
            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
