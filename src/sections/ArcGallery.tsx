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
   * Rotate Right:
   * Moves center card to the right, and glides the left card into the center.
   * Triggered by clicking the right button (>), dragging rightward, or clicking the left flank card.
   */
  const rotateRight = () => {
    setShowDetails(false);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  /**
   * Rotate Left:
   * Moves center card to the left, and glides the right card into the center.
   * Triggered by clicking the left button (<), dragging leftward, or clicking the right flank card.
   */
  const rotateLeft = () => {
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
        if (e.key === 'ArrowRight') rotateRight();
        if (e.key === 'ArrowLeft') rotateLeft();
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
      // Dragged right (e.g. pulling left card toward center)
      rotateRight();
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      // Dragged left (e.g. pulling right card toward center)
      rotateLeft();
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
      opacity: 0.55,
      zIndex: 10,
      filter: 'grayscale(100%)',
      transition: { type: 'spring' as const, stiffness: 320, damping: 28 },
    },
    right: {
      x: '76%',
      scale: 0.78,
      rotate: 10,
      opacity: 0.55,
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
                    ? { scale: 0.82, opacity: 0.85, rotate: -6 }
                    : isRight
                    ? { scale: 0.82, opacity: 0.85, rotate: 6 }
                    : undefined
                }
                onClick={() => {
                  if (isDraggingRef.current) return;
                  if (isLeft) rotateRight();
                  else if (isRight) rotateLeft();
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
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                {/* 3. Flank Cards Overlay (Click to bring into view) */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex flex-col items-center justify-center p-4 text-center z-10">
                    <span className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight line-clamp-1 mb-2 drop-shadow-md">
                      {project.title}
                    </span>
                    <span className="bg-black/90 text-white font-mono text-[9px] px-2.5 py-1 tracking-widest uppercase border border-white/20">
                      {isLeft ? '‹ CLICK TO VIEW' : 'CLICK TO VIEW ›'}
                    </span>
                  </div>
                )}

                {/* 4. Center Card Bottom Bar (Current Display when details are hidden) */}
                {isCenter && !showDetails && (
                  <div className="absolute bottom-3 inset-x-3 z-10 space-y-1.5 pointer-events-auto">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl text-white tracking-tight uppercase leading-none drop-shadow-md">
                        {project.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-mono text-neutral-300 mt-1 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="pt-1 flex items-center justify-between gap-2">
                      {/* Compact Small VIEW DETAILS Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isDraggingRef.current) setShowDetails(true);
                        }}
                        className="h-6 bg-brand-yellow hover:bg-[#E5C200] text-black font-mono text-[9px] font-bold px-2 sm:px-2.5 tracking-wider uppercase flex items-center space-x-1 shadow-sm active:scale-95 transition-all cursor-pointer rounded-none"
                        title="Reveal project specifications and architecture"
                      >
                        <span>VIEW DETAILS</span>
                      </button>

                      {/* Small Compact GitHub and Live Link Buttons matching VIEW DETAILS */}
                      <div className="flex items-center space-x-1.5">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="w-6 h-6 bg-black/80 hover:bg-black text-white hover:text-brand-yellow transition-colors flex items-center justify-center border border-white/20 cursor-pointer rounded-none"
                            title="GitHub Repository"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={11} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="w-6 h-6 bg-brand-yellow text-black hover:bg-[#E5C200] transition-colors flex items-center justify-center font-bold cursor-pointer shadow-sm rounded-none"
                            title="Live Application"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
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

        {/* Reduced-Size Sleek Left and Right Navigation Buttons */}
        <div className="flex items-center space-x-2 mt-3 select-none">
          <button
            onClick={rotateLeft}
            className="w-6 h-6 sm:w-6.5 sm:h-6.5 bg-neutral-100 hover:bg-black hover:text-white active:scale-90 transition-all border border-black/20 flex items-center justify-center font-mono rounded-none shadow-xs cursor-pointer"
            aria-label="Previous work"
            title="Slide left (center moves left)"
          >
            <ChevronLeft size={12} strokeWidth={2.5} />
          </button>
          <button
            onClick={rotateRight}
            className="w-6 h-6 sm:w-6.5 sm:h-6.5 bg-neutral-100 hover:bg-black hover:text-white active:scale-90 transition-all border border-black/20 flex items-center justify-center font-mono rounded-none shadow-xs cursor-pointer"
            aria-label="Next work"
            title="Slide right (center moves right)"
          >
            <ChevronRight size={12} strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>

      {/* Clean Bottom Coordinate Bar - Slides up smoothly */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewportConfig}
        custom={0.25}
        className="relative z-10 max-w-7xl mx-auto w-full pt-1.5 border-t border-black/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-500"
      >
        <span>INTERACTIVE ARC PHYSICS // SWIPE ⇄</span>
        <span>VERIFIED CODE REPOSITORIES AVAILABLE</span>
      </motion.div>

      {/* Fullscreen Project Specification Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
