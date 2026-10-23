import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { MapPin, Terminal } from 'lucide-react';
import { initGsapMultiParallax } from '../utils/gsapParallax';
import {
  fadeInLeftVariants,
  fadeInRightVariants,
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
  const akashTextRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const availRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // GSAP Topward & Bottomward Scroll Parallax on Landing Hero Elements
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: bgRef.current, yStart: 0, yEnd: 60, scrub: 1.2 },
        { target: topBarRef.current, yStart: 0, yEnd: -20, scrub: 1 },
        { target: akashTextRef.current, yStart: 0, yEnd: -35, scrub: 1.1 },
        { target: portraitRef.current, yStart: 0, yEnd: 30, scrub: 1.3 },
        { target: bioRef.current, yStart: 0, yEnd: -30, scrub: 1.1 },
        { target: stackRef.current, yStart: 0, yEnd: -25, scrub: 1.2 },
        { target: expRef.current, yStart: 0, yEnd: -35, scrub: 1.3 },
        { target: availRef.current, yStart: 0, yEnd: -45, scrub: 1.4 },
        { target: bottomBarRef.current, yStart: 0, yEnd: -15, scrub: 1 },
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
      className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden border-b border-white/10 select-none"
    >
      {/* 1. Background Architectural Grid Lines & Atmospheric Ambient Gradient */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
        <GridBackground theme="dark" columns={8} />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/70 via-black to-black" />
      </div>

      {/* 2. Top Coordinates Bar - Matching reference with MapPin & Role */}
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="relative z-30 w-full border-b border-white/10 pb-4 mb-4 sm:mb-6"
      >
        <div ref={topBarRef} className="flex items-center justify-between text-xs font-mono tracking-widest text-neutral-400 will-change-transform">
          <div className="flex items-center space-x-2">
            <MapPin size={13} className="text-brand-yellow" />
            <span className="uppercase tracking-widest text-neutral-300 text-[11px] sm:text-xs">
              {developer.location}
            </span>
          </div>
          <div className="text-neutral-400 uppercase tracking-widest text-[11px] font-mono mr-12 sm:mr-16">
            {developer.role}
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* DESKTOP HERO PRESENTATION (lg: and larger)                                */}
      {/* 3-Column Architecture: Left Bio Flank | Center Visual Stage | Right Stats */}
      {/* Text strictly sits in left and right columns, never overlapping portrait   */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative z-20 flex-1 items-end justify-between w-full max-w-7xl mx-auto my-auto min-h-[560px] xl:min-h-[620px]">
        
        {/* Left Column Flank: Bio text & DEPLOY CONTRACT CTA */}
        <motion.div
          variants={fadeInLeftVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="relative z-30 w-[280px] xl:w-[320px] pb-10 flex flex-col justify-end space-y-6 shrink-0"
        >
          <div ref={bioRef} className="space-y-6 will-change-transform">
            <p className="text-xs xl:text-sm font-mono text-neutral-300 leading-relaxed max-w-xs">
              {developer.bio}
            </p>

            <div>
              <button
                onClick={onOpenContact}
                className="bg-brand-yellow hover:bg-[#E5C200] text-black font-display font-bold tracking-widest text-xs uppercase px-6 py-3 transition-colors rounded-none cursor-pointer shadow-sm"
              >
                DEPLOY CONTRACT
              </button>
            </div>
          </div>
        </motion.div>

        {/* Center Visual Stage: AKASH Typography + Centered Akash Portrait Cutout */}
        <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none select-none overflow-visible">
          
          {/* Layer A (z-10): Giant Serif 'AKASH' Typography Behind Portrait */}
          <div
            ref={akashTextRef}
            className="absolute bottom-[24%] xl:bottom-[26%] inset-x-0 z-10 flex items-center justify-center will-change-transform pointer-events-none select-none"
          >
            <div className="w-full max-w-5xl px-4 flex items-center justify-between font-serifDisplay font-black text-[12vw] xl:text-[13vw] 2xl:text-[180px] leading-none text-white tracking-tight drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]">
              <span className="inline-block transform transition-transform duration-500 hover:scale-105">A</span>
              <span className="inline-block transform transition-transform duration-500 hover:scale-105">K</span>
              <span className="inline-block transform transition-transform duration-500 hover:scale-105">A</span>
              <span className="inline-block transform transition-transform duration-500 hover:scale-105">S</span>
              <span className="inline-block transform transition-transform duration-500 hover:scale-105">H</span>
            </div>
          </div>

          {/* Layer B (z-20): Centered Cutout Portrait of Akash */}
          <div
            ref={portraitRef}
            className="relative z-20 flex items-end justify-center h-[520px] xl:h-[620px] 2xl:h-[680px] max-w-md xl:max-w-lg 2xl:max-w-xl will-change-transform"
          >
            <img
              src="/images/akash-hero-portrait.png"
              alt="Akash - Full Stack Web Developer"
              className="h-full w-auto object-contain object-bottom select-none"
            />
            {/* Ambient bottom scrim to merge smoothly with dark floor */}
            <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          </div>

          {/* Layer C (z-25): Fine Stroke Outline Overlap Layer */}
          <div className="absolute bottom-[24%] xl:bottom-[26%] inset-x-0 z-25 flex items-center justify-center pointer-events-none select-none">
            <div className="w-full max-w-5xl px-4 flex items-center justify-between font-serifDisplay font-black text-[12vw] xl:text-[13vw] 2xl:text-[180px] leading-none tracking-tight text-stroke-white opacity-85">
              <span>A</span>
              <span>K</span>
              <span>A</span>
              <span>S</span>
              <span>H</span>
            </div>
          </div>
        </div>

        {/* Right Column Flank: Active Stack, Experience & Availability */}
        <motion.div
          variants={fadeInRightVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="relative z-30 w-[280px] xl:w-[320px] pb-10 flex flex-col justify-end space-y-6 text-right shrink-0"
        >
          <div className="space-y-6">
            <div ref={stackRef} className="border-r border-white/20 pr-4 will-change-transform">
              <div className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                ACTIVE STACK
              </div>
              <div className="font-display text-xl xl:text-2xl tracking-tight text-white uppercase mt-0.5">
                FULL STACK AND AI
              </div>
            </div>

            <div ref={expRef} className="border-r border-white/20 pr-4 will-change-transform">
              <div className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                EXPERIENCE
              </div>
              <div className="font-display text-xl xl:text-2xl tracking-tight text-white uppercase mt-0.5">
                1+ YEARS IN SOFTWARE DEVELOPMENT
              </div>
            </div>

            <div ref={availRef} className="border-r border-brand-yellow pr-4 will-change-transform">
              <div className="text-xs font-mono tracking-wider text-brand-yellow uppercase">
                CURRENT AVAILABILITY
              </div>
              <div className="font-display text-base xl:text-lg tracking-tight text-white uppercase mt-0.5 flex items-center justify-end space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
                </span>
                <span>{developer.status}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET HERO PRESENTATION (< lg)                                  */}
      {/* Clean vertical hierarchy ensuring ZERO TEXT OVERLAPS THE PHOTO           */}
      {/* 1. Portrait + AKASH Visual Stage                                          */}
      {/* 2. Structured Information Blocks Below Portrait                           */}
      {/* ========================================================================= */}
      <div className="flex lg:hidden flex-col flex-1 justify-between w-full">
        
        {/* Visual Stage: Akash Portrait with Editorial AKASH Typography */}
        <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[54vh] flex items-end justify-center overflow-hidden my-2">
          
          {/* Background Typography behind photo */}
          <div className="absolute bottom-[20%] sm:bottom-[22%] inset-x-0 z-10 flex items-center justify-center pointer-events-none select-none">
            <div className="w-full px-2 flex items-center justify-between font-serifDisplay font-black text-[20vw] sm:text-[18vw] leading-none text-white tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              <span>A</span>
              <span>K</span>
              <span>A</span>
              <span>S</span>
              <span>H</span>
            </div>
          </div>

          {/* Centered Cutout Portrait */}
          <div className="relative z-20 h-full w-auto flex items-end justify-center">
            <img
              src="/images/akash-hero-portrait.png"
              alt="Akash - Full Stack Web Developer"
              className="h-full w-auto object-contain object-bottom select-none"
            />
            {/* Ambient bottom scrim */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          </div>

          {/* Fine Stroke Layer Overlap */}
          <div className="absolute bottom-[20%] sm:bottom-[22%] inset-x-0 z-25 flex items-center justify-center pointer-events-none select-none">
            <div className="w-full px-2 flex items-center justify-between font-serifDisplay font-black text-[20vw] sm:text-[18vw] leading-none tracking-tight text-stroke-white opacity-85">
              <span>A</span>
              <span>K</span>
              <span>A</span>
              <span>S</span>
              <span>H</span>
            </div>
          </div>
        </div>

        {/* Information & Telemetry Container - Strictly positioned BELOW the photo */}
        <div className="relative z-30 pt-6 pb-4 space-y-6 border-t border-white/10">
          
          {/* Bio paragraph & CTA button */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="space-y-4"
          >
            <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
              {developer.bio}
            </p>

            <div>
              <button
                onClick={onOpenContact}
                className="bg-brand-yellow hover:bg-[#E5C200] text-black font-display font-bold tracking-widest text-xs uppercase px-5 py-2.5 transition-colors rounded-none cursor-pointer shadow-sm"
              >
                DEPLOY CONTRACT
              </button>
            </div>
          </motion.div>

          {/* Mobile Telemetry Grid: Stack, Experience, Availability */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/5"
          >
            <div className="border-l border-white/20 pl-3">
              <div className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                ACTIVE STACK
              </div>
              <div className="font-display text-base sm:text-lg tracking-tight text-white uppercase mt-0.5">
                FULL STACK AND AI
              </div>
            </div>

            <div className="border-l border-white/20 pl-3">
              <div className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                EXPERIENCE
              </div>
              <div className="font-display text-base sm:text-lg tracking-tight text-white uppercase mt-0.5">
                1+ YEARS IN SOFTWARE DEVELOPMENT
              </div>
            </div>

            <div className="border-l border-brand-yellow pl-3">
              <div className="text-[10px] font-mono tracking-wider text-brand-yellow uppercase">
                CURRENT AVAILABILITY
              </div>
              <div className="font-display text-sm sm:text-base tracking-tight text-white uppercase mt-0.5 flex items-center space-x-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
                </span>
                <span>{developer.status}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Bottom Telemetry Bar - GSAP Parallax */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="relative z-30 w-full border-t border-white/10 pt-4 mt-2 sm:mt-4"
      >
        <div ref={bottomBarRef} className="flex items-center text-xs font-mono text-neutral-500 will-change-transform">
          <div className="flex items-center space-x-2">
            <Terminal size={14} className="text-brand-yellow" />
            <span className="text-[11px] sm:text-xs tracking-wider">
              MERN // GEMINI API // SUPABASE // AWS EC2
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
