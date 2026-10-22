import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, MapPin, Send } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { initGsapMultiParallax } from '../utils/gsapParallax';
import {
  sectionViewportConfig,
  fadeInDownVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
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
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: bgRef.current, yStart: 30, yEnd: -30, scrub: 1.1 },
        { target: titleRef.current, yStart: 25, yEnd: -25, scrub: 1.2 },
        { target: detailsRef.current, yStart: 35, yEnd: -35, scrub: 1.25 },
      ],
      sectionRef.current
    );
    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#050505] text-white py-20 px-4 sm:px-8 md:px-12 border-b border-white/10 select-none overflow-hidden"
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
          className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-neutral-400 mb-12"
        >
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-brand-yellow" />
            <span>07 // CONTACT & COLLABORATIONS</span>
          </div>
          <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase">
            DIRECT INQUIRY
          </span>
        </motion.div>

        {/* Massive Editorial Brand Statement - Slides up & GSAP Parallax */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportConfig}
          custom={0.1}
          className="border-b border-white/10 pb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div ref={titleRef} className="will-change-transform">
            <span className="text-xs font-mono text-brand-yellow tracking-widest uppercase block mb-2 font-bold">
              AVAILABLE FOR HIGH-IMPACT COLLABORATIONS
            </span>
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

        {/* Dispatch Channels & Contact Info */}
        <div ref={detailsRef} className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-16 will-change-transform">
          {/* Identity & Bio */}
          <motion.div
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewportConfig}
            custom={0.15}
            className="md:col-span-5 space-y-4"
          >
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
            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 pt-2">
              <MapPin size={12} className="text-brand-yellow" />
              <span>LOCATION: {developer.location}</span>
            </div>
          </motion.div>

          {/* Direct Dispatch Channels */}
          <motion.div
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewportConfig}
            custom={0.2}
            className="md:col-span-7 flex flex-col sm:flex-row justify-between gap-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest block font-bold">
                DIRECT INBOX
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center space-x-2 text-neutral-300">
                  <Mail size={14} className="text-brand-yellow" />
                  <a
                    href={`mailto:${developer.socials.email}`}
                    className="hover:text-brand-yellow transition-colors underline-offset-4 hover:underline"
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
                    className="hover:text-brand-yellow transition-colors underline-offset-4 hover:underline"
                  >
                    github.com/akashad123
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block font-bold">
                SYSTEM AVAILABILITY
              </span>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-brand-yellow animate-ping inline-block" />
                <span className="text-xs font-mono text-neutral-300 font-bold uppercase">
                  {developer.status}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
