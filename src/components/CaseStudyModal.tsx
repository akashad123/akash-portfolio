import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
          {/* Sticky Header: Clean Title with Nrithya Dances // July 2026 - Present on bottom */}
          <div className="sticky top-0 z-20 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-white/10 p-6 flex items-start justify-between">
            <div>
              <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-white">
                {caseStudy.title}
              </h2>
              <p className="text-xs font-mono text-neutral-400 mt-2 tracking-wider uppercase">
                {caseStudy.company} // {caseStudy.duration}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 bg-brand-yellow text-black hover:bg-[#E5C200] transition-colors flex items-center justify-center rounded-none shrink-0 ml-4 cursor-pointer"
              aria-label="Close case study dialog"
            >
              <X size={22} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Modal Content: Deployed Technologies & Storytelling Method in Plain Paragraph-Wise Writing */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Deployed Technologies & APIs */}
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase block mb-3 font-semibold">
                DEPLOYED TECHNOLOGIES & APIS
              </span>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-mono text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Storytelling Narrative - Plain Paragraph-Wise Writing */}
            {caseStudy.story && (
              <div className="space-y-6 pt-6 border-t border-white/10">
                {caseStudy.story.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <span className="font-mono text-xs text-brand-yellow uppercase tracking-wider font-bold block">
                      {item.title}:
                    </span>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
