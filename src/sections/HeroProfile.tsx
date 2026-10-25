import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { MapPin } from 'lucide-react';
import { initGsapMultiParallax } from '../utils/gsapParallax';
import {
  fadeInDownVariants,
  fadeInUpVariants,
} from '../utils/motion';

interface HeroProfileProps {
  onOpenContact: () => void;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ onOpenContact }) => {
  const { developer } = portfolioData;
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const centerStageRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Parallax on Landing Hero Elements
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: bgRef.current, yStart: 0, yEnd: 40, scrub: 1.2 },
        { target: topBarRef.current, yStart: 0, yEnd: -15, scrub: 1 },
        { target: centerStageRef.current, yStart: 0, yEnd: -30, scrub: 1.1 },
      ],
      heroRef.current,
      { start: 'top top', end: 'bottom top' }
    );
    return cleanup;
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen max-h-screen h-[100dvh] max-h-[100dvh] bg-black text-white flex flex-col justify-between overflow-hidden select-none border-b border-white/10"
    >
      {/* 1. Background Architectural Grid Lines & Atmospheric Ambient Radial Gradient */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
        <GridBackground theme="dark" columns={8} />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black" />
      </div>

      {/* 2. Top Coordinates Bar */}
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="relative z-30 w-full border-b border-white/10 shrink-0"
      >
        <div
          ref={topBarRef}
          className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 py-3 sm:py-3.5 flex items-center justify-between text-xs font-mono will-change-transform"
        >
          {/* Location & Precise Coordinates */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <MapPin size={13} className="text-brand-yellow shrink-0 fill-brand-yellow/20" />
            <span className="text-neutral-300 font-mono text-xs tracking-wider uppercase">
              {developer.location}
            </span>
            <span className="hidden sm:inline text-neutral-600 font-mono text-[11px]">
              // 11.2588° N, 75.7804° E
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. Center Stage: AKASH AD Masthead, Telemetry & Compact Deploy CTA */}
      <div className="relative z-20 flex-1 min-h-0 w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col items-center justify-center text-center my-auto py-4">
        <motion.div
          ref={centerStageRef}
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex flex-col items-center justify-center text-center px-4 will-change-transform"
        >
          {/* Masthead */}
          <h1 className="font-serifDisplay font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[160px] leading-none tracking-tight text-white drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
            AKASH AD
          </h1>

          {/* Yellow Architectural Accent Divider */}
          <div className="w-12 sm:w-16 h-[2px] bg-brand-yellow my-3.5 sm:my-5" />

          {/* Role Subtitle */}
          <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-neutral-300 font-semibold mb-4 sm:mb-5">
            {developer.role}
          </p>

          {/* Stack, Current & Experience - Positioned Just Above Deploy Contract */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-6 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-5 sm:mb-6 text-center max-w-4xl px-2">
            <div className="text-center">
              <span className="text-neutral-500 font-mono mr-1.5">// STACK:</span>
              <span className="text-neutral-200">REACT • NODE.JS • TYPESCRIPT • APPLIED AI</span>
            </div>

            <div className="text-center">
              <span className="text-neutral-500 font-mono mr-1.5">// CURRENT:</span>
              <span className="text-neutral-200">{developer.status}</span>
            </div>

            <div className="text-center">
              <span className="text-brand-yellow font-mono mr-1.5">// EXP:</span>
              <span className="text-neutral-200">1+ YEARS IN SOFTWARE ARCHITECTURE</span>
            </div>
          </div>

          {/* Compact Minimalist Deploy Contract CTA */}
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center space-x-1.5 bg-brand-yellow hover:bg-[#E5C200] text-black font-mono font-bold text-[10px] sm:text-[11px] uppercase tracking-wider px-3.5 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md rounded-none"
          >
            <span>DEPLOY CONTRACT</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 font-bold">→</span>
          </button>
        </motion.div>
      </div>

      {/* Optical bottom balancing spacer */}
      <div className="shrink-0 h-4" />
    </section>
  );
};
