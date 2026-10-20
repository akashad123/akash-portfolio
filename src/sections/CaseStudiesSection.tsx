import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { CaseStudyItem } from '../types/portfolio';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import {
  fadeInTransition,
  sectionInitial,
  sectionWhileInView,
  sectionViewportConfig,
} from '../utils/motion';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudyItem) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  const caseStudies = portfolioData.caseStudies;

  return (
    <motion.section
      id="case-studies"
      initial={sectionInitial}
      whileInView={sectionWhileInView}
      viewport={sectionViewportConfig}
      transition={fadeInTransition}
      className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden border-b border-white/10 select-none"
    >
      <GridBackground theme="dark" columns={8} />

      {/* Top Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-neutral-400">
        <div className="flex items-center space-x-2">
          <Cpu size={14} className="text-brand-yellow" />
          <span>05 // PRODUCTION CASE STUDIES</span>
        </div>
        <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase">
          AI & AUTOMATION
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="mb-10 max-w-2xl">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              onClick={() => onSelectCaseStudy(cs)}
              className="group border border-white/15 bg-[#0C0C0C] hover:border-brand-yellow transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer rounded-none relative overflow-hidden"
            >
              {/* Corner Yellow Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-brand-yellow/10 group-hover:bg-brand-yellow transition-colors flex items-center justify-center">
                <ArrowUpRight size={16} className="text-white group-hover:text-black transition-colors" />
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-brand-yellow text-black text-[10px] font-mono font-bold px-2 py-0.5 tracking-wider uppercase">
                    {cs.status}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {cs.company}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight group-hover:text-brand-yellow transition-colors text-white">
                  {cs.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  {cs.subtitle}
                </p>

                <p className="text-sm text-neutral-300 font-sans mt-4 leading-relaxed line-clamp-3">
                  {cs.overview}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.techStack.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {cs.techStack.length > 5 && (
                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-1 text-brand-yellow">
                      +{cs.techStack.length - 5} MORE
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-brand-yellow group-hover:underline">
                  <span>VIEW ARCHITECTURE & AUDIT LOGS</span>
                  <span>[READ AUDIT →]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>ZERO PRODUCTION DOWNTIME RECORD</span>
        <span>DEPLOYED ON AWS EC2 + PM2 DAEMONS</span>
      </div>
    </motion.section>
  );
};
