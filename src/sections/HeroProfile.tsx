import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { Terminal, MapPin } from 'lucide-react';
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
  const bioRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const availRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // GSAP Topward & Bottomward Scroll Parallax on Landing Page Background & Texts
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        // Background Architectural Lines & Gradient moves smoothly on scroll
        { target: bgRef.current, yStart: 0, yEnd: 80, scrub: 1.2 },
        // Top bar glides subtly topward
        { target: topBarRef.current, yStart: 0, yEnd: -25, scrub: 1 },
        // Bio paragraph and button glide topward on scroll down, bottomward on scroll up
        { target: bioRef.current, yStart: 0, yEnd: -45, scrub: 1.1 },
        // Right telemetry blocks glide with differential multi-speed parallax
        { target: stackRef.current, yStart: 0, yEnd: -35, scrub: 1.2 },
        { target: expRef.current, yStart: 0, yEnd: -50, scrub: 1.3 },
        { target: availRef.current, yStart: 0, yEnd: -65, scrub: 1.4 },
        // Bottom bar moves gently
        { target: bottomBarRef.current, yStart: 0, yEnd: -20, scrub: 1 },
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
      className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 md:px-12 overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Grid Lines & Atmospheric Gradient with GSAP Parallax */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
        <GridBackground theme="dark" columns={8} />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black" />
      </div>

      {/* Main Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Top Coordinates Bar - Slides down smoothly on mount & GSAP scroll parallax */}
        <motion.div
          variants={fadeInDownVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="border-b border-white/10 pb-4"
        >
          <div ref={topBarRef} className="flex items-center justify-between text-xs font-mono tracking-widest text-neutral-400 will-change-transform">
            <div className="flex items-center space-x-2">
              <MapPin size={12} className="text-brand-yellow" />
              <span>{developer.location}</span>
            </div>
            <div className="text-neutral-400 uppercase tracking-widest text-[11px]">
              {developer.role}
            </div>
          </div>
        </motion.div>

        {/* Main Grid: Left Bio | Right Active Stack, Experience & Availability */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-10 md:my-20">
          {/* Left Column: Bio & Deploy Action - GSAP Topward/Bottomward Movement */}
          <motion.div
            variants={fadeInLeftVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div ref={bioRef} className="space-y-6 will-change-transform">
              <p className="text-base sm:text-lg font-mono text-neutral-300 max-w-xl leading-relaxed">
                {developer.bio}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="bg-brand-yellow text-black font-display text-xs tracking-widest uppercase font-bold px-6 py-3 hover:bg-[#E5C200] transition-colors rounded-none cursor-pointer"
                >
                  DEPLOY CONTRACT
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Active Stack, Experience & Current Availability - GSAP Staggered Movement */}
          <motion.div
            variants={fadeInRightVariants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left lg:text-right"
          >
            <div className="space-y-4 lg:space-y-6">
              <div ref={stackRef} className="border-l lg:border-l-0 lg:border-r border-white/20 pl-4 lg:pl-0 lg:pr-4 will-change-transform">
                <div className="text-xs font-mono tracking-wider text-neutral-500 uppercase">
                  ACTIVE STACK
                </div>
                <div className="font-display text-xl sm:text-2xl tracking-tight text-white uppercase mt-0.5">
                  FULL STACK AND AI
                </div>
              </div>

              <div ref={expRef} className="border-l lg:border-l-0 lg:border-r border-white/20 pl-4 lg:pl-0 lg:pr-4 will-change-transform">
                <div className="text-xs font-mono tracking-wider text-neutral-500 uppercase">
                  EXPERIENCE
                </div>
                <div className="font-display text-xl sm:text-2xl tracking-tight text-white uppercase mt-0.5">
                  1+ YEARS IN SOFTWARE DEVELOPMENT
                </div>
              </div>

              <div ref={availRef} className="border-l lg:border-l-0 lg:border-r border-brand-yellow pl-4 lg:pl-0 lg:pr-4 will-change-transform">
                <div className="text-xs font-mono tracking-wider text-brand-yellow uppercase">
                  CURRENT AVAILABILITY
                </div>
                <div className="font-display text-lg tracking-tight text-white uppercase mt-0.5 flex items-center lg:justify-end space-x-2">
                  <span className="w-2 h-2 bg-brand-yellow animate-ping inline-block" />
                  <span>{developer.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - GSAP Parallax */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="border-t border-white/10 pt-4"
        >
          <div ref={bottomBarRef} className="flex items-center text-xs font-mono text-neutral-500 will-change-transform">
            <div className="flex items-center space-x-2">
              <Terminal size={14} className="text-brand-yellow" />
              <span>MERN // GEMINI API // SUPABASE // AWS EC2</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
