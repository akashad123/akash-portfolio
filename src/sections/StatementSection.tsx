import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { ScrollReveal, TextSegment } from '../components/ScrollReveal';
import { initGsapMultiParallax } from '../utils/gsapParallax';
import {
  sectionViewportConfig,
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeInDownVariants,

} from '../utils/motion';

export const StatementSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const { statement } = portfolioData.developer;

  // GSAP Topward & Bottomward Scroll Parallax on Content (Text & Apple Portrait)
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        // Background Watermark moves smoothly as you scroll
        { target: watermarkRef.current, yStart: 70, yEnd: -70, scrub: 1.2 },
        // Background Grid lines glide with subtle depth
        { target: gridRef.current, yStart: 35, yEnd: -35, scrub: 1.1 },
        // Statement text moves topward as you scroll down, bottomward as you scroll up
        { target: textRef.current, yStart: 40, yEnd: -40, scrub: 1.2 },
        // Apple portrait card floats with complementary topward/bottomward parallax
        { target: portraitRef.current, yStart: -20, yEnd: 35, scrub: 1.4 },
      ],
      sectionRef.current
    );
    return cleanup;
  }, []);

  const segments: TextSegment[] = [
    { text: statement.beforeHighlight, isHighlight: false },
    { text: statement.highlight1, isHighlight: true },
    ...(statement.middleText ? [{ text: statement.middleText, isHighlight: false, breakBefore: true }] : []),
    ...(statement.highlight2 ? [{ text: statement.highlight2, isHighlight: true }] : []),
    ...(statement.afterText ? [{ text: statement.afterText, isHighlight: false }] : []),
  ];

  return (
    <section
      ref={sectionRef}
      id="statement"
      className="relative min-h-screen bg-white text-black flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-8 md:px-12 overflow-hidden border-b border-black/10 select-none"
    >
      {/* Light Theme Architectural Grid with GSAP Parallax */}
      <div ref={gridRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
        <GridBackground theme="light" columns={8} />
      </div>

      {/* Background Watermark Typography with GSAP Parallax */}
      <div
        ref={watermarkRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 will-change-transform"
      >
        <span className="font-display text-[16vw] sm:text-[18vw] uppercase text-neutral-200 font-extrabold tracking-tight leading-none select-none">
          ABOUT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Section Top Header - Animates down from top */}
        <motion.div
          variants={fadeInDownVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportConfig}
          custom={0.05}
          className="flex items-center justify-between border-b border-black/10 pb-4 text-xs font-mono tracking-widest text-neutral-500"
        >
          <span>02 // ABOUT & CORE PHILOSOPHY</span>
          <span className="bg-brand-yellow text-black px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase">
            ABOUT
          </span>
        </motion.div>

        {/* Main Content Grid: Left Text Statement | Right Apple-like Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center my-auto py-8 sm:py-12">
          {/* Left Column: Scroll Reveal Typography with GSAP Topward/Bottomward Movement */}
          <motion.div
            variants={fadeInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewportConfig}
            custom={0.15}
            className="lg:col-span-7 xl:col-span-8 text-left"
          >
            <div ref={textRef} className="will-change-transform">
              <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-4 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-brand-yellow" />
                <span>ABOUT // CORE ETHOS</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl tracking-tight uppercase leading-snug sm:leading-tight text-black text-left">
                <ScrollReveal
                  segments={segments}
                  containerRef={sectionRef}
                />
              </h2>

              {/* Supporting Editorial Paragraphs */}
              {statement.paragraphs && statement.paragraphs.length > 0 && (
                <div className="mt-6 sm:mt-8 space-y-3.5 border-l-2 border-brand-yellow pl-4 sm:pl-5 max-w-2xl">
                  {statement.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed font-sans"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Clean, Professional Apple-like Portrait with GSAP Parallax */}
          <motion.div
            variants={fadeInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewportConfig}
            custom={0.25}
            className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-end justify-center"
          >
            <div
              ref={portraitRef}
              className="apple-portrait-card group relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[370px] aspect-[3/4] bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.2)] transition-shadow duration-700 overflow-hidden rounded-none will-change-transform"
            >
              {/* High-Resolution Portrait with Apple-like Hover Filter */}
              <img
                src="/images/akash-philosophy.jpg"
                alt="Akash D - React Developer (Frontend)"
                className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                loading="lazy"
              />

              {/* Subtle Ambient Sheen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-10 transition-opacity duration-700" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
