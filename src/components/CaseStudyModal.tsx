import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { CaseStudyItem } from '../types/portfolio';

interface CaseStudyModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0E0E] text-white border border-white/15 overflow-y-auto rounded-none shadow-2xl"
        >
          {/* Sticky Header */}
          <div className="sticky top-0 z-20 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-white/10 p-6 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-brand-yellow text-black text-xs font-mono font-bold px-2 py-0.5 tracking-widest uppercase">
                  {caseStudy.status}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {caseStudy.company} // {caseStudy.duration}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-white">
                {caseStudy.title}
              </h2>
              <p className="text-neutral-400 text-sm mt-1">
                {caseStudy.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 bg-brand-yellow text-black hover:bg-[#E5C200] transition-colors flex items-center justify-center rounded-none shrink-0 ml-4"
              aria-label="Close case study dialog"
            >
              <X size={22} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Tech Stack Pills */}
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3">
                DEPLOYED TECHNOLOGIES & APIS
              </span>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-5">
                <div className="flex items-center space-x-2 text-brand-yellow mb-2">
                  <AlertTriangle size={18} />
                  <span className="font-display uppercase text-sm tracking-widest">THE BOTTLENECK</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="bg-white/5 border border-brand-yellow/30 p-5">
                <div className="flex items-center space-x-2 text-brand-yellow mb-2">
                  <CheckCircle size={18} />
                  <span className="font-display uppercase text-sm tracking-widest">THE ARCHITECTED SOLUTION</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Engineering Process */}
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-4">
                IMPLEMENTATION PHASES & ARCHITECTURE
              </span>
              <div className="space-y-3">
                {caseStudy.process.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-white/[0.02] border border-white/5">
                    <span className="font-mono text-brand-yellow font-bold text-xs pt-0.5">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Challenges Solved */}
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-4">
                TECHNICAL CHALLENGES & RESOLUTIONS
              </span>
              <div className="space-y-4">
                {caseStudy.challenges.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-brand-yellow pl-4 py-1">
                    <p className="text-sm font-semibold text-neutral-200 mb-1">
                      ⚠️ Challenge: {item.challenge}
                    </p>
                    <p className="text-sm text-neutral-400">
                      ✅ Resolution: {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Results */}
            <div className="bg-brand-yellow/5 border border-brand-yellow/20 p-6">
              <span className="text-xs font-mono tracking-widest text-brand-yellow uppercase block mb-3">
                VERIFIED METRICS & OUTCOMES
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-neutral-200">
                    <span className="text-brand-yellow font-bold">›</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Engineering Learnings */}
            <div>
              <div className="flex items-center space-x-2 text-neutral-400 mb-3">
                <Lightbulb size={18} className="text-brand-yellow" />
                <span className="font-display uppercase text-xs tracking-widest">CORE ARCHITECTURAL TAKEAWAYS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseStudy.learnings.map((learning, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/5 text-xs text-neutral-300">
                    "{learning}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
