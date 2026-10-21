import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo, Variants } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { ProjectItem } from '../types/portfolio';
import {
  sectionViewportConfig,
  fadeInDownVariants,
  fadeInUpVariants,
} from '../utils/motion';

/**
 * Section 03: Interactive Orbital Arc Showcase
 * Provides a continuous 3D orbital carousel where cards physically glide
 * between left flank, center prominence, and right flank.
 * 
 * Features:
 * - Full-bleed imagery covering the entire slide (no squished banners).
 * - Clean visual display: details hidden by default to keep the focus on imagery.
 * - Interactive slide-up details reveal and fullscreen modal on click.
 * - Fluid gesture dragging, responsive keyboard navigation, and compact controls.
 */
export const ArcGallery: React.FC = () => {
  const projects = portfolioData.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const isDraggingRef = useRef(false);

  /**
   * Go to Previous Project:
   * Moves index backward and glides the left flank card into the center.
   */
  const handlePrev = () => {
    setShowDetails(false);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  /**
   * Go to Next Project:
   * Moves index forward and glides the right flank card into the center.
   */
  const handleNext = () => {
    setShowDetails(false);
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation when gallery is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('projects');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') {
          setShowDetails(false);
          setModalProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Small timeout ensures onClick doesn't accidentally fire on release
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);

    const swipeThreshold = 30;
    const velocityThreshold = 120;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      // Dragged right (pulling left card toward center)
      handlePrev();
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      // Dragged left (pulling right card toward center)
      handleNext();
    }
  };

  // Framer Motion spring variants for smooth continuous orbital flow
  const cardVariants: Variants = {
    center: {
      x: '0%',
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 30,
      filter: 'grayscale(0%)',
      transition: { type: 'spring' as const, stiffness: 320, damping: 28 },
    },
    left: {
      x: '-76%',
      scale: 0.78,
      rotate: -10,
      opacity: 1,
      zIndex: 10,
      filter: 'grayscale(100%)',
      transition: { type: 'spring' as const, stiffness: 320, damping: 28 },
    },
    right: {
      x: '76%',
      scale: 0.78,
      rotate: 10,
      opacity: 1,
      zIndex: 10,
      filter: 'grayscale(100%)',
      transition: { type: 'spring' as const, stiffness: 320, damping: 28 },
    },
  };

  return (
    <section
      id="projects"
      className="relative h-screen max-h-screen overflow-hidden bg-white text-black py-3 sm:py-5 px-3 sm:px-6 md:px-10 flex flex-col justify-between border-b border-black/10 select-none"
    >
      {/* Light Theme Grid */}
      <GridBackground theme="light" columns={8} />

      {/* Stable Background Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display text-[16vw] sm:text-[18vw] uppercase text-neutral-200 font-extrabold tracking-tight leading-none select-none">
          PROJECTS
        </span>
      </div>

      {/* Top Header - Slides down smoothly */}
      <motion.div
        variants={fadeInDownVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewportConfig}
        custom={0.05}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-black/10 pb-2 text-xs font-mono tracking-widest text-neutral-500"
      >
        <div className="flex items-center space-x-2">
          <span>03 // SELECTED WORKS</span>
          <span className="bg-brand-yellow text-black font-bold px-1.5 py-0.5 text-[10px]">
            ORBITAL SHOWCASE
          </span>
        </div>
        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="text-black font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(projects.length).padStart(2, '0')}</span>
        </div>
      </motion.div>

      {/* Main Curved Orbital Arc Presentation (Strictly sized to fit inside 100vh) */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewportConfig}
        custom={0.15}
        className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-center justify-center"
      >
        {/* Draggable Orbital Track Container */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.35}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ touchAction: 'pan-y' }}
          className="relative w-full max-w-5xl h-[330px] sm:h-[365px] md:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          {projects.map((project, idx) => {
            // Calculate circular offset relative to active card (-1, 0, 1)
            let diff = idx - activeIndex;
            if (diff > 1) diff -= projects.length;
            if (diff < -1) diff += projects.length;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const variantKey = isCenter ? 'center' : isLeft ? 'left' : 'right';

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial={false}
                animate={variantKey}
                whileHover={
                  isLeft
                    ? { scale: 0.82, opacity: 1, rotate: -6 }
                    : isRight
                    ? { scale: 0.82, opacity: 1, rotate: 6 }
                    : undefined
                }
                onClick={() => {
                  if (isDraggingRef.current) return;
                  if (isLeft) handlePrev();
                  else if (isRight) handleNext();
                  else if (isCenter && !showDetails) setShowDetails(true);
                }}
                className={`absolute w-[280px] sm:w-[340px] md:w-[390px] h-[330px] sm:h-[365px] md:h-[400px] overflow-hidden bg-neutral-950 transition-shadow duration-300 rounded-none border-0 ${
                  isCenter
                    ? 'shadow-2xl cursor-pointer'
                    : 'shadow-md cursor-pointer'
                }`}
              >
                {/* 1. Full Image Covering the Slide Completely */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 select-none ${
                    isCenter
                      ? 'filter grayscale contrast-110 hover:grayscale-0'
                      : 'filter grayscale contrast-125'
                  }`}
                />

                {/* 2. Ambient Contrast Scrim */}
                <div className="absolute inset-y-0 left-0 w-32 sm:w-40 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-10" />

                {/* 3. Flank Cards Overlay (Clean, no click-to-view text) */}
                {!isCenter && (
                  <div className="absolute inset-0 z-10 p-4 sm:p-5 flex flex-col justify-start">
                    <div className="pointer-events-none">
                      <h3
                        style={{ writingMode: 'vertical-rl' }}
                        className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] leading-none drop-shadow-lg select-none"
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                )}

                {/* 4. Center Card Vertically Expanded Title (Standing from top to bottom) */}
                {isCenter && !showDetails && (
                  <div className="absolute top-4 sm:top-5 left-4 sm:left-5.5 z-20 pointer-events-none">
                    <h3
                      style={{ writingMode: 'vertical-rl' }}
                      className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] select-none"
                    >
                      {project.title}
                    </h3>
                  </div>
                )}

                {/* 6. Center Card Slide-Up Details Panel (Shown when clicked) */}
                <AnimatePresence>
                  {isCenter && showDetails && (
                    <motion.div
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: '100%', opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute inset-0 z-30 bg-[#0E0E0E]/95 backdrop-blur-md text-white p-4 sm:p-5 flex flex-col justify-between border-t-2 border-brand-yellow overflow-y-auto"
                    >
                      {/* Details Header */}
                      <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-2.5">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="bg-brand-yellow text-black font-mono text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">
                              {project.tag}
                            </span>
                            <span className="text-[10px] font-mono text-neutral-400">
                              {project.date}
                            </span>
                          </div>
                          <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight leading-none">
                            {project.title}
                          </h3>
                          <p className="text-[10px] sm:text-[11px] font-mono text-neutral-400 mt-0.5 line-clamp-1">
                            {project.subtitle}
                          </p>
                        </div>

                        <div className="flex items-center space-x-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => setModalProject(project)}
                            className="w-7 h-7 bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                            title="Open in full screen modal"
                          >
                            <Maximize2 size={13} />
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowDetails(false)}
                            className="w-7 h-7 bg-brand-yellow hover:bg-[#E5C200] text-black font-bold flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
                            title="Close details (show image)"
                          >
                            <X size={15} strokeWidth={2.5} />
                          </button>
                        </div>
                      </div>

                      {/* Details Body */}
                      <div className="py-2.5 space-y-2.5 overflow-y-auto pr-1">
                        <ul className="text-[11px] text-neutral-300 space-y-1 font-sans">
                          {project.description.slice(0, 3).map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start space-x-1.5 leading-tight">
                              <span className="text-brand-yellow font-bold text-xs shrink-0">›</span>
                              <span className="line-clamp-2">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1">
                          {project.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="bg-white/10 border border-white/15 text-neutral-200 text-[9px] font-mono px-1.5 py-0.5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Details Footer Actions */}
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="bg-brand-yellow text-black hover:bg-[#E5C200] font-mono text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase flex items-center space-x-1 transition-all shadow-sm cursor-pointer"
                            >
                              <span>LIVE APP</span>
                              <ExternalLink size={11} />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="bg-neutral-800 text-white hover:bg-neutral-700 font-mono text-[10px] px-2.5 py-1 tracking-wider uppercase flex items-center space-x-1 border border-white/20 transition-all cursor-pointer"
                            >
                              <Github size={11} />
                              <span>GITHUB</span>
                            </a>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => setShowDetails(false)}
                          className="text-[10px] font-mono text-neutral-400 hover:text-white cursor-pointer transition-colors"
                        >
                          ✕ HIDE
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Minimalist Architectural Dual-Icon Navigation Dock */}
        <div className="flex items-center mt-3 select-none border border-black bg-white divide-x divide-black shadow-xs">
          <button
            type="button"
            onClick={handlePrev}
            className="w-8 h-7.5 sm:w-9 sm:h-8 bg-white hover:bg-black text-black hover:text-brand-yellow active:bg-neutral-900 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Previous project"
            title="Previous project"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-8 h-7.5 sm:w-9 sm:h-8 bg-white hover:bg-black text-black hover:text-brand-yellow active:bg-neutral-900 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Next project"
            title="Next project"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>

      {/* Fullscreen Project Specification Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
