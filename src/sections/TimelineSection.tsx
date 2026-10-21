import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { Briefcase, GraduationCap } from 'lucide-react';
import { initGsapMultiParallax } from '../utils/gsapParallax';
import {
  sectionViewportConfig,
  fadeInDownVariants,
  fadeInUpVariants,
} from '../utils/motion';

export const TimelineSection: React.FC = () => {
  const { experience, education } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // GSAP Topward & Bottomward Scroll Parallax on Timeline Content & Texts
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: headerRef.current, yStart: 25, yEnd: -25, scrub: 1 },
        { target: row1Ref.current, yStart: 35, yEnd: -40, scrub: 1.1 },
        { target: row2Ref.current, yStart: 50, yEnd: -55, scrub: 1.25 },
        { target: eduRef.current, yStart: 65, yEnd: -70, scrub: 1.4 },
        { target: bottomRef.current, yStart: 20, yEnd: -20, scrub: 1 },
      ],
      sectionRef.current
    );
    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden border-b border-white/10 select-none"
    >
      {/* Dark Grid Background */}
      <GridBackground theme="dark" columns={8} />

      {/* Top Header - Slides down smoothly & GSAP Parallax */}
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewportConfig}
        custom={0.05}
        className="relative z-10 max-w-7xl mx-auto w-full border-b border-white/10 pb-4"
      >
        <div ref={headerRef} className="flex items-center justify-between text-xs font-mono tracking-widest text-neutral-400 will-change-transform">
          <div className="flex items-center space-x-2">
            <Briefcase size={14} className="text-brand-yellow" />
            <span>04 // CAREER & ENGAGEMENTS TIMELINE</span>
          </div>
          <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase">
            CHRONOLOGY
          </span>
        </div>
      </motion.div>

      {/* Center Layout with Clean Tabular Rows */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="relative">
          {/* Tabular Rows Stack with GSAP Parallax on Content */}
          <div className="relative z-10 space-y-0">
            {/* Experience Row 1 - Nrithya Dances */}
            {experience[0] && (
              <div ref={row1Ref} className="will-change-transform">
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewportConfig}
                  custom={0.1}
                  className="group border-b border-white/10 hover:border-brand-yellow transition-colors py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-black/40 backdrop-blur-[2px] px-4"
                >
                  <div className="md:col-span-5">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-brand-yellow font-bold">
                        ENTRY 01 —
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl tracking-tight uppercase group-hover:text-brand-yellow transition-colors text-white">
                        {experience[0].role}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                      {experience[0].company}
                    </p>
                  </div>

                  <div className="md:col-span-4 hidden md:block">
                    <p className="text-xs font-mono text-neutral-400 line-clamp-2">
                      {experience[0].description[0]}
                    </p>
                  </div>

                  <div className="md:col-span-3 text-left md:text-right">
                    <span className="font-mono text-sm sm:text-base font-bold text-white tracking-widest group-hover:text-brand-yellow transition-colors">
                      {experience[0].duration}
                    </span>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Experience Row 2 - Personal Lab */}
            {experience[1] && (
              <div ref={row2Ref} className="will-change-transform">
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewportConfig}
                  custom={0.18}
                  className="group border-b border-white/10 hover:border-brand-yellow transition-colors py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-black/40 backdrop-blur-[2px] px-4"
                >
                  <div className="md:col-span-5">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-brand-yellow font-bold">
                        ENTRY 02 —
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl tracking-tight uppercase group-hover:text-brand-yellow transition-colors text-white">
                        {experience[1].role}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                      {experience[1].company}
                    </p>
                  </div>

                  <div className="md:col-span-4 hidden md:block">
                    <p className="text-xs font-mono text-neutral-400 line-clamp-2">
                      {experience[1].description[0]}
                    </p>
                  </div>

                  <div className="md:col-span-3 text-left md:text-right">
                    <span className="font-mono text-sm sm:text-base font-bold text-white tracking-widest group-hover:text-brand-yellow transition-colors">
                      {experience[1].duration}
                    </span>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Education Row - Degree */}
            {education[0] && (
              <div ref={eduRef} className="will-change-transform">
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewportConfig}
                  custom={0.26}
                  className="group border-b border-white/10 hover:border-brand-yellow transition-colors py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-black/40 backdrop-blur-[2px] px-4"
                >
                  <div className="md:col-span-5">
                    <div className="flex items-center space-x-2">
                      <GraduationCap size={16} className="text-brand-yellow" />
                      <h3 className="font-display text-xl sm:text-2xl tracking-tight uppercase group-hover:text-brand-yellow transition-colors text-neutral-200">
                        {education[0].degree}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                      {education[0].institution}
                    </p>
                  </div>

                  <div className="md:col-span-4 hidden md:block">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      ACADEMIC FOUNDATION IN COMPUTER SCIENCE
                    </span>
                  </div>

                  <div className="md:col-span-3 text-left md:text-right">
                    <span className="font-mono text-sm font-bold text-neutral-300 tracking-widest">
                      {education[0].duration}
                    </span>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer - Slides up smoothly & GSAP Parallax */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewportConfig}
        custom={0.3}
        className="relative z-10 max-w-7xl mx-auto w-full border-t border-white/10 pt-4"
      >
        <div ref={bottomRef} className="flex items-center justify-between text-xs font-mono text-neutral-500 will-change-transform">
          <span>EXPERIENCE VERIFICATION AVAILABLE UPON REQUEST</span>
          <span>PRODUCTION INCIDENT LOGS: ZERO</span>
        </div>
      </motion.div>
    </section>
  );
};
