import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { Briefcase, GraduationCap } from 'lucide-react';
import {
  sectionViewportConfig,
  fadeInDownVariants,
  fadeInUpVariants,
  fadeInScaleVariants,
} from '../utils/motion';

export const TimelineSection: React.FC = () => {
  const { experience, education } = portfolioData;

  return (
    <section
      id="timeline"
      className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden border-b border-white/10 select-none"
    >
      {/* Dark Grid Background */}
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
          <Briefcase size={14} className="text-brand-yellow" />
          <span>04 // CAREER & ENGAGEMENTS TIMELINE</span>
        </div>
        <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase">
          CHRONOLOGY
        </span>
      </motion.div>

      {/* Center Layout with Tabular Rows and Central Intersecting Visual */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="relative">
          {/* Central Vertical Intersecting High-Tech Blueprint Visual - Scales smoothly in background */}
          <motion.div
            variants={fadeInScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewportConfig}
            custom={0.1}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 pointer-events-none opacity-20 lg:opacity-40 z-0"
          >
            <div className="relative border-2 border-brand-yellow/60 bg-black/90 p-4 shadow-2xl flex flex-col items-center justify-between h-[480px]">
              {/* Top Wing / Spoiler */}
              <div className="w-full bg-brand-yellow text-black font-mono text-[10px] font-bold text-center py-1 tracking-widest">
                AKASH.ENGINEERING
              </div>

              {/* Number 98 Center Badge */}
              <div className="text-center my-auto">
                <span className="font-display text-7xl text-white font-extrabold tracking-tight">
                  98
                </span>
                <div className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest">
                  FULL-STACK // AI
                </div>
              </div>

              {/* Bottom Badges */}
              <div className="w-full border-t border-white/20 pt-2 flex items-center justify-between text-[9px] font-mono text-neutral-400 px-2">
                <span>SYS 01</span>
                <span>CORE STACK</span>
                <span>FULL STACK // WEB</span>
              </div>
            </div>
          </motion.div>

          {/* Tabular Rows Stack */}
          <div className="relative z-10 space-y-0">
            {/* Experience Rows - Staggered slide up */}
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewportConfig}
                custom={0.1 + idx * 0.08}
                className="group border-b border-white/10 hover:border-brand-yellow transition-colors py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-black/40 backdrop-blur-[2px] px-4"
              >
                {/* Left: Role & Sequence Title */}
                <div className="md:col-span-5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-brand-yellow font-bold">
                      ENTRY {String(idx + 1).padStart(2, '0')} —
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight uppercase group-hover:text-brand-yellow transition-colors text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                {/* Middle: Key Responsibilities / Scope */}
                <div className="md:col-span-4 hidden md:block">
                  <p className="text-xs font-mono text-neutral-400 line-clamp-2">
                    {exp.description[0]}
                  </p>
                </div>

                {/* Right: Date Duration */}
                <div className="md:col-span-3 text-left md:text-right">
                  <span className="font-mono text-sm sm:text-base font-bold text-white tracking-widest group-hover:text-brand-yellow transition-colors">
                    {exp.duration}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Education Rows - Staggered slide up */}
            {education.map((edu, idx) => (
              <motion.div
                key={`edu-${idx}`}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewportConfig}
                custom={0.25 + idx * 0.08}
                className="group border-b border-white/10 hover:border-brand-yellow transition-colors py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-black/40 backdrop-blur-[2px] px-4"
              >
                <div className="md:col-span-5">
                  <div className="flex items-center space-x-2">
                    <GraduationCap size={16} className="text-brand-yellow" />
                    <h3 className="font-display text-xl sm:text-2xl tracking-tight uppercase group-hover:text-brand-yellow transition-colors text-neutral-200">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="md:col-span-4 hidden md:block">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    ACADEMIC FOUNDATION IN COMPUTER SCIENCE
                  </span>
                </div>

                <div className="md:col-span-3 text-left md:text-right">
                  <span className="font-mono text-sm font-bold text-neutral-300 tracking-widest">
                    {edu.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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
        <span>EXPERIENCE VERIFICATION AVAILABLE UPON REQUEST</span>
        <span>PRODUCTION INCIDENT LOGS: ZERO</span>
      </motion.div>
    </section>
  );
};
