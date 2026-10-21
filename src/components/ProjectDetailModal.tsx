import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

/**
 * Editorial Project Detail Modal
 * Displays complete project specifications, architecture highlights, tech stack,
 * and direct links to live demo and source code in a focused modal dialog.
 */
export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0E0E0E] text-white border border-white/20 overflow-y-auto rounded-none shadow-2xl"
        >
          {/* Sticky Editorial Header */}
          <div className="sticky top-0 z-20 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-white/10 p-5 sm:p-6 flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                {project.tag && (
                  <span className="bg-brand-yellow text-black text-xs font-mono font-bold px-2 py-0.5 tracking-widest uppercase">
                    {project.tag}
                  </span>
                )}
                {project.date && (
                  <span className="text-xs font-mono text-neutral-400">
                    {project.date}
                  </span>
                )}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-white leading-none">
                {project.title}
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1.5 font-mono">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-yellow text-black hover:bg-[#E5C200] transition-colors flex items-center justify-center rounded-none shrink-0 ml-4 cursor-pointer"
              aria-label="Close project modal"
              title="Close specifications"
            >
              <X size={20} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            {/* Full Project Image Banner */}
            {project.image && (
              <div className="relative w-full aspect-video sm:aspect-[21/9] bg-neutral-900 border border-white/10 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60" />
              </div>
            )}

            {/* Architecture Highlights & Description */}
            <div>
              <div className="flex items-center space-x-2 text-brand-yellow mb-3">
                <CheckCircle2 size={16} />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">
                  CORE CAPABILITIES & ENGINEERING ARCHITECTURE
                </span>
              </div>
              <ul className="space-y-2.5 font-sans text-sm text-neutral-300">
                {project.description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 leading-relaxed bg-white/5 border border-white/5 p-3">
                    <span className="text-brand-yellow font-bold shrink-0 mt-0.5">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack */}
            <div>
              <div className="flex items-center space-x-2 text-neutral-400 mb-3">
                <Layers size={14} />
                <span className="font-mono text-xs uppercase tracking-widest">
                  TECHNOLOGY & TOOLCHAIN
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 border border-white/15 text-neutral-200 text-xs font-mono px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Actions & Repository Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 items-center">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-yellow text-black hover:bg-[#E5C200] font-bold font-mono text-xs px-5 py-2.5 tracking-wider uppercase flex items-center space-x-2 transition-all shadow-md cursor-pointer"
                >
                  <span>LAUNCH LIVE APPLICATION</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs px-5 py-2.5 tracking-wider uppercase flex items-center space-x-2 border border-white/20 transition-all cursor-pointer"
                >
                  <Github size={14} />
                  <span>VIEW SOURCE REPOSITORY</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="ml-auto text-xs font-mono text-neutral-400 hover:text-white px-3 py-2 cursor-pointer transition-colors"
              >
                CLOSE [ ESC ]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
