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
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Parallax on Landing Hero Elements
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: bgRef.current, yStart: 0, yEnd: 40, scrub: 1.2 },
        { target: topBarRef.current, yStart: 0, yEnd: -15, scrub: 1 },
        { target: centerStageRef.current, yStart: 0, yEnd: -30, scrub: 1.1 },
        { target: bottomBarRef.current, yStart: 0, yEnd: -10, scrub: 1 },
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

      {/* 2. Top Coordinates & Status Bar */}
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

          {/* Real-time Status Beacon */}
          <div className="flex items-center space-x-2 text-xs font-mono pr-10 sm:pr-14">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-brand-yellow opacity-75" />
              <span className="relative inline-flex rounded-none h-2 w-2 bg-brand-yellow" />
            </span>
            <span className="text-neutral-300 uppercase tracking-widest text-[10px] sm:text-[11px] font-medium">
              AVAILABLE FOR SELECT ROLES
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. Center Stage: AKASH AD Masthead, Editorial Statement & Deploy CTA */}
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
          <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-neutral-300 font-semibold mb-2">
            {developer.role}
          </p>

          {/* Concise Editorial Statement */}
          <p className="font-mono text-[10px] sm:text-xs text-neutral-400 max-w-lg tracking-wider uppercase mb-6 sm:mb-7 leading-relaxed">
            BUILDING RESILIENT WEB SYSTEMS & BESPOKE INTERACTIVE EXPERIENCES
          </p>

          {/* Interactive Deploy Contract CTA */}
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center space-x-2.5 bg-brand-yellow hover:bg-[#E5C200] text-black font-mono font-bold text-xs uppercase tracking-widest px-6 sm:px-7 py-3 transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(253,214,10,0.2)] hover:shadow-[0_0_35px_rgba(253,214,10,0.45)] rounded-none"
          >
            <span>DEPLOY CONTRACT</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
          </button>
        </motion.div>
      </div>

      {/* 4. Bottom Telemetry Strip */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="relative z-30 w-full border-t border-white/10 shrink-0"
      >
        <div
          ref={bottomBarRef}
          className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 py-3 sm:py-3.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400 will-change-transform"
        >
          {/* Tech Stack Focus */}
          <div className="flex items-center space-x-1.5">
            <span className="text-neutral-500 font-mono">// STACK:</span>
            <span className="text-neutral-200 uppercase tracking-wider">REACT • NODE.JS • TYPESCRIPT • APPLIED AI</span>
          </div>

          {/* Role & Engagement */}
          <div className="hidden md:flex items-center space-x-1.5">
            <span className="text-neutral-500 font-mono">// CURRENT:</span>
            <span className="text-neutral-200 uppercase tracking-wider">{developer.status}</span>
          </div>

          {/* Experience */}
          <div className="flex items-center space-x-1.5">
            <span className="text-brand-yellow font-mono">// EXP:</span>
            <span className="text-neutral-200 uppercase tracking-wider">1+ YEARS IN SOFTWARE ARCHITECTURE</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
