import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
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
  const { developer } = portfolioData;
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
          <span className="bg-brand-yellow text-black font-bold px-2.5 py-1 text-[10px] tracking-widest uppercase">
            DIRECT INQUIRY
          </span>
        </motion.div>

        {/* Massive Editorial Brand Statement: LET'S BUILD + Reduced CTA + Social Links */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportConfig}
          custom={0.1}
          className="flex flex-col md:flex-row items-start justify-between gap-8 py-4 sm:py-8"
        >
          <div className="space-y-6 sm:space-y-8">
            <div ref={titleRef} className="will-change-transform">
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-white">
                LET'S BUILD
              </h2>
            </div>

            {/* Under 'Let's Build': LinkedIn, GitHub, and Mail */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
              <a
                href={developer.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-neutral-300 hover:text-black hover:bg-brand-yellow transition-all border border-white/15 hover:border-brand-yellow px-4 py-2 bg-neutral-900/60 rounded-none group cursor-pointer"
              >
                <Linkedin size={14} className="text-brand-yellow group-hover:text-black transition-colors" />
                <span className="tracking-wider uppercase font-semibold">LINKEDIN</span>
                <ArrowUpRight size={12} className="text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={developer.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-neutral-300 hover:text-black hover:bg-brand-yellow transition-all border border-white/15 hover:border-brand-yellow px-4 py-2 bg-neutral-900/60 rounded-none group cursor-pointer"
              >
                <Github size={14} className="text-brand-yellow group-hover:text-black transition-colors" />
                <span className="tracking-wider uppercase font-semibold">GITHUB</span>
                <ArrowUpRight size={12} className="text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={`mailto:${developer.socials.email}`}
                className="flex items-center space-x-2 text-neutral-300 hover:text-black hover:bg-brand-yellow transition-all border border-white/15 hover:border-brand-yellow px-4 py-2 bg-neutral-900/60 rounded-none group cursor-pointer"
              >
                <Mail size={14} className="text-brand-yellow group-hover:text-black transition-colors" />
                <span className="tracking-wider uppercase font-semibold">MAIL</span>
                <ArrowUpRight size={12} className="text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Reduced-size Start an Engagement button moved to the top (aligned with top of Let's Build) */}
          <button
            onClick={onOpenContact}
            className="bg-brand-yellow text-black font-bold px-2.5 sm:px-3 py-1 text-[10px] tracking-widest uppercase hover:bg-[#E5C200] transition-colors rounded-none shadow-xs shrink-0 cursor-pointer flex items-center space-x-1 group md:self-start md:mt-2"
          >
            <span>START AN ENGAGEMENT</span>
            <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
