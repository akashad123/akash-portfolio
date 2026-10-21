import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { CaseStudyItem } from '../types/portfolio';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { initGsapMultiParallax } from '../utils/gsapParallax';
import {
  sectionViewportConfig,
  fadeInDownVariants,
  fadeInLeftVariants,
  fadeInUpVariants,
} from '../utils/motion';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudyItem) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  const caseStudies = portfolioData.caseStudies;
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  // GSAP Topward & Bottomward Scroll Parallax on Case Study Cards
  useEffect(() => {
    const cleanup = initGsapMultiParallax(
      [
        { target: introRef.current, yStart: 30, yEnd: -30, scrub: 1 },
        { target: card1Ref.current, yStart: 45, yEnd: -45, scrub: 1.2 },
        { target: card2Ref.current, yStart: 65, yEnd: -65, scrub: 1.4 },
      ],
      sectionRef.current
    );
    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden border-b border-white/10 select-none"
    >
      <GridBackground theme="dark" columns={8} />

      {/* Top Header - Slides down smoothly */}
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewportConfig}
        custom={0.05}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-neutral-400"
      >
        <div className="flex items-center space-x-2">
          <Cpu size={14} className="text-brand-yellow" />
          <span>05 // PRODUCTION CASE STUDIES</span>
        </div>
        <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase">
          AI & AUTOMATION
        </span>
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        {/* Intro Block - Slides in from left & GSAP Parallax */}
        <motion.div
          variants={fadeInLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportConfig}
          custom={0.1}
          className="mb-10 max-w-2xl"
        >
          <div ref={introRef} className="will-change-transform">
            <span className="text-xs font-mono text-brand-yellow tracking-widest uppercase block mb-1">
              DEEP-DIVE ENGINEERING
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight">
              MULTIMODAL AI & HIGH-AVAILABILITY CLOUD PIPELINES
            </h2>
            <p className="text-sm font-mono text-neutral-400 mt-2">
              Real systems deployed on AWS EC2 processing hundreds of live instructional media files with deterministic quality scoring.
            </p>
          </div>
        </motion.div>

        {/* Case Study Cards with Differential Topward/Bottomward GSAP Scroll Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies[0] && (
            <div ref={card1Ref} className="will-change-transform">
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewportConfig}
                custom={0.15}
                onClick={() => onSelectCaseStudy(caseStudies[0])}
                className="group border border-white/15 bg-[#0C0C0C] hover:border-brand-yellow transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer rounded-none relative overflow-hidden h-full"
              >
                {/* Corner Yellow Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-brand-yellow/10 group-hover:bg-brand-yellow transition-colors flex items-center justify-center">
                  <ArrowUpRight size={16} className="text-white group-hover:text-black transition-colors" />
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-brand-yellow text-black text-[10px] font-mono font-bold px-2 py-0.5 tracking-wider uppercase">
                      {caseStudies[0].status}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {caseStudies[0].company}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight group-hover:text-brand-yellow transition-colors text-white">
                    {caseStudies[0].title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    {caseStudies[0].subtitle}
                  </p>

                  <p className="text-sm text-neutral-300 font-sans mt-4 leading-relaxed line-clamp-3">
                    {caseStudies[0].overview}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {caseStudies[0].techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {caseStudies[0].techStack.length > 5 && (
                      <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-1 text-brand-yellow">
                        +{caseStudies[0].techStack.length - 5} MORE
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-brand-yellow group-hover:underline">
                    <span>VIEW ARCHITECTURE & AUDIT LOGS</span>
                    <span>[READ AUDIT →]</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {caseStudies[1] && (
            <div ref={card2Ref} className="will-change-transform">
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewportConfig}
                custom={0.25}
                onClick={() => onSelectCaseStudy(caseStudies[1])}
                className="group border border-white/15 bg-[#0C0C0C] hover:border-brand-yellow transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer rounded-none relative overflow-hidden h-full"
              >
                {/* Corner Yellow Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-brand-yellow/10 group-hover:bg-brand-yellow transition-colors flex items-center justify-center">
                  <ArrowUpRight size={16} className="text-white group-hover:text-black transition-colors" />
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-brand-yellow text-black text-[10px] font-mono font-bold px-2 py-0.5 tracking-wider uppercase">
                      {caseStudies[1].status}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {caseStudies[1].company}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight group-hover:text-brand-yellow transition-colors text-white">
                    {caseStudies[1].title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    {caseStudies[1].subtitle}
                  </p>

                  <p className="text-sm text-neutral-300 font-sans mt-4 leading-relaxed line-clamp-3">
                    {caseStudies[1].overview}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {caseStudies[1].techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {caseStudies[1].techStack.length > 5 && (
                      <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-1 text-brand-yellow">
                        +{caseStudies[1].techStack.length - 5} MORE
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-brand-yellow group-hover:underline">
                    <span>VIEW ARCHITECTURE & AUDIT LOGS</span>
                    <span>[READ AUDIT →]</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer - Slides up smoothly */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewportConfig}
        custom={0.3}
        className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500"
      >
        <span>ZERO PRODUCTION DOWNTIME RECORD</span>
        <span>DEPLOYED ON AWS EC2 + PM2 DAEMONS</span>
      </motion.div>
    </section>
  );
};
