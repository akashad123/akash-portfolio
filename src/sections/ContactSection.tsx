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
  const watermarkRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: bgRef.current, yStart: 25, yEnd: -25, scrub: 1.1 },
        { target: watermarkRef.current, yStart: 35, yEnd: -35, scrub: 1.3 },
        { target: titleRef.current, yStart: 15, yEnd: -15, scrub: 1.2 },
      ],
      sectionRef.current
    );
    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#050505] text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 border-b border-white/10 select-none overflow-hidden"
    >
      {/* Background Architectural Grid Lines with GSAP Scroll Parallax */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
        <GridBackground theme="dark" columns={8} />
      </div>

      {/* Massive Repeating Watermark Typography across width */}
      <div
        ref={watermarkRef}
        className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden z-0 will-change-transform"
      >
        <div className="flex whitespace-nowrap space-x-12 sm:space-x-16 text-white/[0.08] font-display text-[16vw] sm:text-[14vw] uppercase tracking-[0.05em] leading-none select-none pl-2">
          <span>LET'S BUILD</span>
          <span>LET'S BUILD</span>
          <span>LET'S BUILD</span>
          <span>LET'S BUILD</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top Header - Compact Direct Inquiry Button matching small footprint */}
        <motion.div
          variants={fadeInDownVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportConfig}
          custom={0.05}
          className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-neutral-300 mb-12 sm:mb-16"
        >
          <div className="flex items-center space-x-2.5">
            <Mail size={14} className="text-brand-yellow" />
            <span>07 // CONTACT & COLLABORATIONS</span>
          </div>
          <span className="bg-brand-yellow text-black font-bold px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase">
            DIRECT INQUIRY
          </span>
        </motion.div>

        {/* Foreground Headline + Social Links + Start Engagement Button */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportConfig}
          custom={0.1}
          className="py-4 sm:py-6"
        >
          {/* Headline: Clean, Non-Overlapping LET'S BUILD with calibrated letter spacing */}
          <div ref={titleRef} className="will-change-transform">
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-white leading-none tracking-[0.05em] sm:tracking-[0.06em] flex flex-wrap items-center gap-x-4 sm:gap-x-6">
              <span>LET'S</span>
              <span>BUILD</span>
            </h2>
          </div>

          {/* Social Links Row (Compact, sharp, yellow icons, diagonal arrows) */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href={developer.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 bg-[#0c0c0c] text-white hover:text-white border border-white/15 hover:border-brand-yellow px-2.5 sm:px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-none transition-all duration-200 group cursor-pointer"
            >
              <Linkedin size={12} className="text-brand-yellow" />
              <span>LINKEDIN</span>
              <ArrowUpRight
                size={10}
                className="text-neutral-400 group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            <a
              href={developer.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 bg-[#0c0c0c] text-white hover:text-white border border-white/15 hover:border-brand-yellow px-2.5 sm:px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-none transition-all duration-200 group cursor-pointer"
            >
              <Github size={12} className="text-brand-yellow" />
              <span>GITHUB</span>
              <ArrowUpRight
                size={10}
                className="text-neutral-400 group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            <a
              href={`mailto:${developer.socials.email}`}
              className="flex items-center space-x-1.5 bg-[#0c0c0c] text-white hover:text-white border border-white/15 hover:border-brand-yellow px-2.5 sm:px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-none transition-all duration-200 group cursor-pointer"
            >
              <Mail size={12} className="text-brand-yellow" />
              <span>MAIL</span>
              <ArrowUpRight
                size={10}
                className="text-neutral-400 group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          </div>

          {/* Solid Yellow Small-Footprint Start an Engagement Button */}
          <div className="mt-3 sm:mt-3.5">
            <button
              onClick={onOpenContact}
              className="bg-brand-yellow hover:bg-[#E5C200] text-black font-mono font-bold px-2.5 sm:px-3 py-1 text-[10px] tracking-widest uppercase transition-colors rounded-none shadow-xs shrink-0 cursor-pointer flex items-center space-x-1 group"
            >
              <span>START AN ENGAGEMENT</span>
              <ArrowUpRight
                size={11}
                className="text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
