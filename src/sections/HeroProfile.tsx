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

export const HeroProfile: React.FC<HeroProfileProps> = () => {
  const { developer } = portfolioData;
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const akashTextRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Parallax on Landing Hero Elements
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: bgRef.current, yStart: 0, yEnd: 50, scrub: 1.2 },
        { target: topBarRef.current, yStart: 0, yEnd: -15, scrub: 1 },
        { target: akashTextRef.current, yStart: 0, yEnd: -35, scrub: 1.1 },
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

      {/* 3. Centered Elegant Hero Presentation: AKASH AD */}
      <div className="relative z-20 flex-1 min-h-0 w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col justify-between py-6 sm:py-10">
        {/* Top spacer for balanced vertical optical center */}
        <div className="shrink-0 h-2" />

        {/* Center Masthead & Subtitle */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex flex-col items-center justify-center text-center my-auto px-4"
        >
          <h1
            ref={akashTextRef}
            className="font-serifDisplay font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[145px] 2xl:text-[165px] leading-none tracking-tight text-white drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] will-change-transform"
          >
            AKASH AD
          </h1>

          <div className="w-12 sm:w-16 h-[2px] bg-brand-yellow my-4 sm:my-6" />

          <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-neutral-400">
            {developer.role}
          </p>
        </motion.div>

        {/* Bottom spacer for balanced vertical optical center */}
        <div className="shrink-0 h-2" />
      </div>
    </section>
  );
};
