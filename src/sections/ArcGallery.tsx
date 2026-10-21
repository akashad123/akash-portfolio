import React, { useState, useEffect, useRef } from 'react';
import { motion, PanInfo, Variants } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import {
  sectionViewportConfig,
  fadeInDownVariants,
  fadeInUpVariants,
} from '../utils/motion';

/**
 * Section 03: Interactive Orbital Arc Showcase
 * Provides a continuous 3D orbital carousel where cards physically glide
 * between left flank, center prominence, and right flank.
 * Supports fluid gesture dragging, responsive keyboard navigation, and compact controls.
 */
export const ArcGallery: React.FC = () => {
  const projects = portfolioData.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const isDraggingRef = useRef(false);

  /**
   * Rotate Right:
   * Moves center card to the right, and glides the left card into the center.
   * Triggered by clicking the right button (>), dragging rightward, or clicking the left flank card.
   */
  const rotateRight = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  /**
   * Rotate Left:
   * Moves center card to the left, and glides the right card into the center.
   * Triggered by clicking the left button (<), dragging leftward, or clicking the right flank card.
   */
  const rotateLeft = () => {
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
        <span className="font-display text-[20vw] uppercase text-neutral-100 font-extrabold tracking-tighter leading-none">
          GALLERY
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
          className="relative w-full max-w-5xl h-[310px] sm:h-[340px] md:h-[370px] flex items-center justify-center cursor-grab active:cursor-grabbing"
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
                }}
                className={`absolute w-[280px] sm:w-[340px] md:w-[380px] bg-white p-3 sm:p-3.5 transition-shadow duration-300 ${
                  isCenter
                    ? 'border-2 border-black shadow-2xl cursor-grab active:cursor-grabbing'
                    : 'border border-black/25 shadow-md cursor-pointer hover:border-black'
                }`}
              >
                {/* Media Banner */}
                <div className="relative h-28 sm:h-32 md:h-36 w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isCenter ? 'filter grayscale contrast-125 hover:grayscale-0' : 'filter grayscale contrast-125'
                    }`}
                  />
                  <div className="absolute top-2 left-2 bg-brand-yellow text-black font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase shadow-sm">
                    {project.tag}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black text-white font-mono text-[9px] px-2 py-0.5">
                    {project.date}
                  </div>
                  {!isCenter && (
                    <div className="absolute inset-0 bg-white/10 hover:bg-transparent transition-colors flex items-center justify-center">
                      <span className="bg-black/85 text-white font-mono text-[9px] px-2 py-1 tracking-wider uppercase">
                        {isLeft ? '‹ CLICK TO VIEW' : 'CLICK TO VIEW ›'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Meta & Header */}
                <div className="mt-2.5 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl tracking-tight uppercase leading-none">
                        {project.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] font-mono text-neutral-500 mt-0.5 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {isCenter && (
                      <div className="flex items-center space-x-1.5 shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="w-6 h-6 sm:w-7 sm:h-7 bg-neutral-100 hover:bg-black hover:text-white transition-colors flex items-center justify-center border border-black/15 cursor-pointer"
                            title="GitHub Repository"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={12} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="w-6 h-6 sm:w-7 sm:h-7 bg-brand-yellow text-black hover:bg-[#E5C200] transition-colors flex items-center justify-center font-bold cursor-pointer shadow-sm"
                            title="Live Application"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Highlights & Tech - Visible only when center to keep flank cards clean & fast */}
                  <div
                    className={`transition-all duration-300 space-y-1.5 ${
                      isCenter ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <ul className="text-[10px] sm:text-[11px] text-neutral-600 space-y-0.5 font-sans">
                      {project.description.slice(0, 2).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-1.5 leading-tight">
                          <span className="text-black font-bold text-xs shrink-0">›</span>
                          <span className="line-clamp-2">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-1.5 border-t border-black/10 flex flex-wrap gap-1">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-neutral-100 border border-black/10 text-neutral-800 text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
    </section>
  );
};
