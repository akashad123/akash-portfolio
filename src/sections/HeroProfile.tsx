import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { MapPin } from 'lucide-react';
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
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Parallax on Landing Hero Elements
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: bgRef.current, yStart: 0, yEnd: 50, scrub: 1.2 },
        { target: topBarRef.current, yStart: 0, yEnd: -15, scrub: 1 },
        { target: akashTextRef.current, yStart: 0, yEnd: -30, scrub: 1.1 },
        { target: portraitRef.current, yStart: 0, yEnd: 25, scrub: 1.3 },
        { target: ctaRef.current, yStart: 0, yEnd: -25, scrub: 1.1 },
        { target: statsRef.current, yStart: 0, yEnd: -30, scrub: 1.2 },
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
      {/* 1. Background Architectural Grid Lines & Atmospheric Ambient Gradient */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
        <GridBackground theme="dark" columns={8} />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/70 via-black to-black" />
      </div>

      {/* 2. Top Coordinates Bar - Exact Match to Reference Image */}
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="relative z-30 w-full border-b border-white/10 shrink-0"
      >
        <div
          ref={topBarRef}
          className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 py-3.5 sm:py-4 flex items-center justify-between text-xs font-mono will-change-transform"
        >
          {/* Location on Left: Yellow MapPin + 'Kerala, India' */}
          <div className="flex items-center space-x-2">
            <MapPin size={13} className="text-brand-yellow shrink-0 fill-brand-yellow/20" />
            <span className="text-neutral-400 font-mono text-xs tracking-wider">
              {developer.location}
            </span>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* DESKTOP HERO PRESENTATION (lg: and larger)                                */}
      {/* Exact Match to Reference Screenshot:                                      */}
      {/* - Giant Masthead 'A K A S H' Row across center (A,K,H solid; A,S stroke)  */}
      {/* - Centered Akash Portrait (z-20) in front of typography                   */}
      {/* - Left Bio Block & Yellow DEPLOY CONTRACT Button                          */}
      {/* - Right Telemetry Stack with Border Line & Yellow Square Marker           */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative z-20 flex-1 min-h-0 w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex-col justify-between pt-4 xl:pt-8 pb-6 xl:pb-8 2xl:pb-10">
        
        {/* Top Segment: Editorial 'A K A S H' Typography Row spanning container */}
        <div
          ref={akashTextRef}
          className="relative w-full flex items-center justify-between font-serifDisplay font-black text-[16vw] lg:text-[15.5vw] xl:text-[175px] 2xl:text-[200px] leading-none tracking-tight select-none pointer-events-none z-10 pt-1 xl:pt-2 will-change-transform"
        >
          {/* A (First): Solid White */}
          <span className="text-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]">A</span>
          
          {/* K: Solid White */}
          <span className="text-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]">K</span>
          
          {/* A (Second): Properly Formed Crisp Wireframe Outline */}
          <span className="text-stroke-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]">A</span>
          
          {/* S: Wireframe Outline */}
          <span className="text-stroke-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]">S</span>
          
          {/* H: Solid White */}
          <span className="text-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]">H</span>
        </div>

        {/* Center Cutout Portrait of Akash (z-20, in front of typography) */}
        <div
          ref={portraitRef}
          className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none select-none z-20 will-change-transform"
        >
          <div className="relative flex items-end justify-center h-full max-h-[78vh] xl:max-h-[84vh] 2xl:max-h-[88vh] w-auto">
            <img
              src="/images/akash-hero-portrait.png"
              alt="Akash - Full Stack Web Developer"
              className="h-full w-auto max-w-full object-contain object-bottom select-none"
            />
            {/* Ambient bottom scrim to merge smoothly with floor */}
            <div className="absolute bottom-0 inset-x-0 h-16 xl:h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Foreground Wireframe Stroke Layer: Outline A and S across photo */}
        <div
          className="absolute inset-x-6 sm:inset-x-10 md:inset-x-14 lg:inset-x-16 top-4 xl:top-8 flex items-center justify-between font-serifDisplay font-black text-[16vw] lg:text-[15.5vw] xl:text-[175px] 2xl:text-[200px] leading-none tracking-tight select-none pointer-events-none z-25 pt-1 xl:pt-2"
        >
          <span className="opacity-0">A</span>
          <span className="opacity-0">K</span>
          <span className="text-stroke-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">A</span>
          <span className="text-stroke-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">S</span>
          <span className="opacity-0">H</span>
        </div>

        {/* Bottom Segment: Left CTA Button & Right Stats Flanks (Sitting below letters) */}
        <div className="relative z-30 w-full flex items-end justify-between pb-1 xl:pb-2">
          
          {/* Left Column: DEPLOY CONTRACT button */}
          <motion.div
            variants={fadeInLeftVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="w-[340px] sm:w-[370px] lg:w-[400px] shrink-0"
          >
            <div ref={ctaRef} className="will-change-transform">
              <button
                onClick={onOpenContact}
                className="bg-brand-yellow hover:bg-[#E5C200] text-black font-display font-bold tracking-widest text-[11px] sm:text-xs uppercase px-5 py-2.5 xl:px-6 xl:py-3 transition-colors rounded-none cursor-pointer shadow-sm"
              >
                DEPLOY CONTRACT
              </button>
            </div>
          </motion.div>

          {/* Right Column: Active Stack, Experience, Current Availability with right border */}
          <motion.div
            variants={fadeInRightVariants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="w-[280px] sm:w-[300px] lg:w-[330px] border-r border-white/20 pr-4 space-y-3 xl:space-y-4 text-right shrink-0"
          >
            <div ref={statsRef} className="space-y-2.5 xl:space-y-3.5 will-change-transform">
              <div>
                <div className="text-[10px] xl:text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
                  ACTIVE STACK
                </div>
                <div className="font-display text-base sm:text-lg xl:text-xl 2xl:text-2xl tracking-tight text-white uppercase mt-0.5">
                  FULL STACK AND AI
                </div>
              </div>

              <div>
                <div className="text-[10px] xl:text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
                  EXPERIENCE
                </div>
                <div className="font-display text-base sm:text-lg xl:text-xl 2xl:text-2xl tracking-tight text-white uppercase mt-0.5">
                  1+ YEARS IN SOFTWARE DEVELOPMENT
                </div>
              </div>

              <div>
                <div className="text-[10px] xl:text-[11px] font-mono tracking-wider text-brand-yellow uppercase">
                  CURRENT AVAILABILITY
                </div>
                <div className="font-display text-xs sm:text-sm xl:text-base tracking-tight text-white uppercase mt-0.5 flex items-center justify-end space-x-2">
                  <span className="w-2 h-2 bg-brand-yellow inline-block shrink-0" />
                  <span>{developer.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET HERO PRESENTATION (< lg)                                  */}
      {/* Clean vertical hierarchy ensuring ZERO TEXT OVERLAPS THE PHOTO           */}
      {/* ========================================================================= */}
      <div className="flex lg:hidden flex-col flex-1 min-h-0 justify-between w-full px-4 sm:px-8 md:px-12 overflow-y-auto">
        
        {/* Visual Stage: Akash Portrait with Editorial AKASH Typography */}
        <div className="relative w-full h-[46vh] sm:h-[52vh] md:h-[58vh] flex items-end justify-center overflow-hidden my-1 shrink-0">
          
          {/* Background Typography behind photo */}
          <div className="absolute bottom-[20%] sm:bottom-[22%] inset-x-0 z-10 flex items-center justify-between font-serifDisplay font-black text-[21vw] sm:text-[19vw] leading-none tracking-tight pointer-events-none select-none px-2">
            <span className="text-white">A</span>
            <span className="text-white">K</span>
            <span className="text-stroke-white">A</span>
            <span className="text-stroke-white">S</span>
            <span className="text-white">H</span>
          </div>

          {/* Centered Cutout Portrait */}
          <div className="relative z-20 h-full w-auto flex items-end justify-center">
            <img
              src="/images/akash-hero-portrait.png"
              alt="Akash - Full Stack Web Developer"
              className="h-full w-auto object-contain object-bottom select-none"
            />
            {/* Ambient bottom scrim */}
            <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          </div>

          {/* Foreground Wireframe Stroke Layer: Outline A and S across photo */}
          <div className="absolute bottom-[20%] sm:bottom-[22%] inset-x-0 z-25 flex items-center justify-between font-serifDisplay font-black text-[21vw] sm:text-[19vw] leading-none tracking-tight pointer-events-none select-none px-2">
            <span className="opacity-0">A</span>
            <span className="opacity-0">K</span>
            <span className="text-stroke-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">A</span>
            <span className="text-stroke-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">S</span>
            <span className="opacity-0">H</span>
          </div>
        </div>

        {/* Information & Telemetry Container - Strictly positioned BELOW the photo */}
        <div className="relative z-30 pt-3 sm:pt-4 pb-6 sm:pb-8 space-y-3 sm:space-y-4 border-t border-white/10 shrink-0">
          
          {/* CTA button */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="pt-1"
          >
            <button
              onClick={onOpenContact}
              className="bg-brand-yellow hover:bg-[#E5C200] text-black font-display font-bold tracking-widest text-[11px] sm:text-xs uppercase px-4 py-2.5 transition-colors rounded-none cursor-pointer shadow-sm"
            >
              DEPLOY CONTRACT
            </button>
          </motion.div>

          {/* Mobile Telemetry Grid: Stack, Experience, Availability */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-2 border-t border-white/5"
          >
            <div className="border-l border-white/20 pl-2.5">
              <div className="text-[9px] sm:text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                ACTIVE STACK
              </div>
              <div className="font-display text-sm sm:text-base tracking-tight text-white uppercase mt-0.5">
                FULL STACK AND AI
              </div>
            </div>

            <div className="border-l border-white/20 pl-2.5">
              <div className="text-[9px] sm:text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                EXPERIENCE
              </div>
              <div className="font-display text-sm sm:text-base tracking-tight text-white uppercase mt-0.5">
                1+ YEARS IN SOFTWARE DEVELOPMENT
              </div>
            </div>

            <div className="border-l border-brand-yellow pl-2.5">
              <div className="text-[9px] sm:text-[10px] font-mono tracking-wider text-brand-yellow uppercase">
                CURRENT AVAILABILITY
              </div>
              <div className="font-display text-xs sm:text-sm tracking-tight text-white uppercase mt-0.5 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 bg-brand-yellow inline-block shrink-0" />
                <span>{developer.status}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
