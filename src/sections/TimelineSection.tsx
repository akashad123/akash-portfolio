import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { Briefcase } from 'lucide-react';
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
  const row3Ref = useRef<HTMLDivElement>(null);
  const row4Ref = useRef<HTMLDivElement>(null);
  const row5Ref = useRef<HTMLDivElement>(null);

  // GSAP Topward & Bottomward Scroll Parallax on Timeline Content & Rows
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: headerRef.current, yStart: 25, yEnd: -25, scrub: 1 },
        { target: row1Ref.current, yStart: 28, yEnd: -30, scrub: 1.1 },
        { target: row2Ref.current, yStart: 38, yEnd: -40, scrub: 1.2 },
        { target: row3Ref.current, yStart: 48, yEnd: -50, scrub: 1.3 },
        { target: row4Ref.current, yStart: 58, yEnd: -60, scrub: 1.4 },
        { target: row5Ref.current, yStart: 68, yEnd: -70, scrub: 1.5 },
      ],
      sectionRef.current
    );
    return cleanup;
  }, []);

  // Chronologically sequenced timeline items (reverse chronological: most recent to foundational)
  const timelineItems = [
    {
      id: 'nrithya',
      type: 'work' as const,
      title: experience[0].role,
      subtitle: experience[0].company,
      duration: experience[0].duration,
      ref: row1Ref,
      customDelay: 0.1,
    },
    {
      id: 'mca',
      type: 'education' as const,
      title: education[0].degree,
      subtitle: education[0].institution,
      status: education[0].status,
      duration: education[0].duration,
      ref: row2Ref,
      customDelay: 0.16,
    },
    {
      id: 'stratagile',
      type: 'work' as const,
      title: experience[1].role,
      subtitle: experience[1].company,
      duration: experience[1].duration,
      ref: row3Ref,
      customDelay: 0.22,
    },
    {
      id: 'luminar',
      type: 'work' as const,
      title: experience[2].role,
      subtitle: experience[2].company,
      duration: experience[2].duration,
      ref: row4Ref,
      customDelay: 0.28,
    },
    {
      id: 'bsc',
      type: 'education' as const,
      title: education[1].degree,
      subtitle: education[1].institution,
      duration: education[1].duration,
      ref: row5Ref,
      customDelay: 0.34,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative min-h-screen bg-black text-white py-16 sm:py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden border-b border-white/10 select-none"
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

      {/* Center Layout with Clean Tabular Rows in Chronological Sequence */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-10">
        <div className="relative">
          <div className="relative z-10 space-y-2 sm:space-y-3">
            {timelineItems.map((item) => (
              <div key={item.id} ref={item.ref} className="will-change-transform">
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewportConfig}
                  custom={item.customDelay}
                  className="group border-b border-white/15 hover:border-brand-yellow transition-colors py-6 sm:py-7 md:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-black/40 backdrop-blur-[2px] px-4 sm:px-5"
                >
                  <div>
                    <h3
                      className={`font-display text-xl sm:text-2xl md:text-3xl tracking-tight uppercase transition-colors ${
                        item.type === 'education'
                          ? 'text-brand-yellow'
                          : 'text-white group-hover:text-brand-yellow'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {item.status && (
                      <p className="text-xs font-mono text-brand-yellow font-bold mt-1.5 tracking-wider uppercase">
                        {item.status}
                      </p>
                    )}

                    <p className={`text-xs sm:text-[13px] font-mono text-neutral-400 ${item.status ? 'mt-1' : 'mt-1.5'}`}>
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold tracking-widest transition-colors ${
                        item.type === 'education'
                          ? 'text-brand-yellow'
                          : 'text-white group-hover:text-brand-yellow'
                      }`}
                    >
                      {item.duration}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
