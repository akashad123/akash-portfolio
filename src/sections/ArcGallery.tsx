import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';

export const ArcGallery: React.FC = () => {
  const projects = portfolioData.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation when section is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('projects');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3) {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentProject = projects[activeIndex];
  const prevProject = projects[(activeIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(activeIndex + 1) % projects.length];

  // Motion values for real physical dragging
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-200, 200], [-12, 12]);
  const dragOpacity = useTransform(dragX, [-200, -100, 0, 100, 200], [0.75, 0.95, 1, 0.95, 0.75]);

  return (
    <section
      id="projects"
      className="relative h-screen max-h-screen overflow-hidden bg-white text-black py-4 sm:py-6 px-4 sm:px-8 md:px-12 flex flex-col justify-between border-b border-black/10 select-none"
    >
      {/* Light Theme Grid */}
      <GridBackground theme="light" columns={8} />

      {/* Background Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display text-[20vw] uppercase text-neutral-100 font-extrabold tracking-tighter leading-none">
          GALLERY
        </span>
      </div>

      {/* Top Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-black/10 pb-2.5 text-xs font-mono tracking-widest text-neutral-500">
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
      </div>

      {/* Main Curved Orbital Arc Presentation (Strictly sized to fit inside 100vh) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-center justify-center">
        {/* Orbital Stage with Left Flank, Active Center, Right Flank */}
        <div className="relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[400px]">
          {/* Left Flank Card (Tilted -12deg) */}
          <motion.div
            onClick={handlePrev}
            whileHover={{ scale: 1.05, rotate: -6, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute left-1 sm:left-4 md:left-12 lg:left-16 z-10 cursor-pointer transform -rotate-12 opacity-60 hidden sm:block w-40 md:w-56"
          >
            <div className="border border-black/20 bg-white p-2 shadow-md">
              <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                <img
                  src={prevProject.image}
                  alt={prevProject.title}
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute top-1.5 left-1.5 bg-black text-white text-[9px] font-mono font-bold px-1.5 py-0.5">
                  {prevProject.date}
                </div>
              </div>
              <div className="mt-1.5 text-xs font-display uppercase tracking-tight text-neutral-700 truncate">
                {prevProject.title}
              </div>
            </div>
          </motion.div>

          {/* Active Center Card with Real Drag Motion & Physics */}
          <div className="relative z-20 w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center">
            {/* Animated DRAG Pill */}
            <motion.div
              animate={{ x: [0, 4, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="mb-2 bg-brand-yellow text-black font-mono text-[10px] sm:text-xs font-bold px-3 py-1 flex items-center space-x-1.5 tracking-widest uppercase shadow-md select-none cursor-grab active:cursor-grabbing border border-black/10"
            >
              <span>DRAG</span>
              <span className="font-extrabold">⇄</span>
            </motion.div>

            {/* Draggable Card Frame */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -direction * 80, scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                style={{ x: dragX, rotate: dragRotate, opacity: dragOpacity }}
                onDragEnd={(_e, info) => {
                  const swipeThreshold = 50;
                  const velocityThreshold = 200;
                  if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
                    handleNext();
                  } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
                    handlePrev();
                  }
                }}
                whileDrag={{ scale: 1.02, cursor: 'grabbing' }}
                className="w-full border-2 border-black bg-white p-3 sm:p-3.5 shadow-2xl cursor-grab active:cursor-grabbing"
              >
                {/* Media Banner */}
                <div className="relative h-32 sm:h-40 md:h-44 w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-brand-yellow text-black font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase shadow-sm">
                    {currentProject.tag}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black text-white font-mono text-[9px] px-2 py-0.5">
                    {currentProject.date}
                  </div>
                </div>

                {/* Card Meta & Header */}
                <div className="mt-3 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl tracking-tight uppercase leading-none">
                        {currentProject.title}
                      </h3>
                      <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                        {currentProject.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      {currentProject.github && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 bg-neutral-100 hover:bg-black hover:text-white transition-colors flex items-center justify-center border border-black/10 cursor-pointer"
                          title="GitHub Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={13} />
                        </a>
                      )}
                      {currentProject.live && (
                        <a
                          href={currentProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 bg-brand-yellow text-black hover:bg-[#E5C200] transition-colors flex items-center justify-center font-bold cursor-pointer shadow-sm"
                          title="Live Application"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Highlights (Clean, compact, non-overflowing) */}
                  <ul className="text-[11px] text-neutral-600 space-y-1 font-sans">
                    {currentProject.description.slice(0, 2).map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5 leading-snug">
                        <span className="text-black font-bold text-xs shrink-0">›</span>
                        <span className="line-clamp-2">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Pills */}
                  <div className="pt-2 border-t border-black/10 flex flex-wrap gap-1">
                    {currentProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-neutral-100 border border-black/10 text-neutral-800 text-[9px] font-mono px-1.5 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Flank Card (Tilted +12deg) */}
          <motion.div
            onClick={handleNext}
            whileHover={{ scale: 1.05, rotate: 6, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute right-1 sm:right-4 md:right-12 lg:right-16 z-10 cursor-pointer transform rotate-12 opacity-60 hidden sm:block w-40 md:w-56"
          >
            <div className="border border-black/20 bg-white p-2 shadow-md">
              <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute top-1.5 left-1.5 bg-black text-white text-[9px] font-mono font-bold px-1.5 py-0.5">
                  {nextProject.date}
                </div>
              </div>
              <div className="mt-1.5 text-xs font-display uppercase tracking-tight text-neutral-700 truncate">
                {nextProject.title}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Speedometer Radial Gauge & Navigation Controls (Strictly inside 100vh) */}
        <div className="mt-2 sm:mt-3 flex flex-col items-center justify-center select-none">
          {/* Animated Speedometer / Ticks Indicator */}
          <div className="flex items-center space-x-2 my-1">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className="group p-1 flex flex-col items-center cursor-pointer"
                aria-label={`Go to project ${idx + 1}`}
              >
                <motion.div
                  animate={{
                    height: idx === activeIndex ? 26 : 14,
                    backgroundColor: idx === activeIndex ? '#FDD60A' : '#D4D4D4',
                    scale: idx === activeIndex ? 1.15 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="w-2 transition-colors group-hover:bg-neutral-600 rounded-none shadow-sm"
                />
                <motion.div
                  animate={{
                    opacity: idx === activeIndex ? 1 : 0,
                    scale: idx === activeIndex ? 1 : 0.5,
                  }}
                  className="w-1.5 h-1.5 bg-black mt-1"
                />
              </button>
            ))}
          </div>

          {/* Left and Right Navigation Buttons */}
          <div className="flex items-center space-x-2 mt-1.5">
            <button
              onClick={handlePrev}
              className="w-11 h-8 sm:w-12 sm:h-9 bg-neutral-100 hover:bg-black hover:text-white active:scale-95 transition-all border border-black/15 flex items-center justify-center font-mono text-xs font-bold rounded-none shadow-sm cursor-pointer"
              aria-label="Previous work"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-8 sm:w-12 sm:h-9 bg-neutral-100 hover:bg-black hover:text-white active:scale-95 transition-all border border-black/15 flex items-center justify-center font-mono text-xs font-bold rounded-none shadow-sm cursor-pointer"
              aria-label="Next work"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Clean Bottom Coordinate Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <span>INTERACTIVE ARC PHYSICS // SWIPE ⇄</span>
        <span>VERIFIED CODE REPOSITORIES AVAILABLE</span>
      </div>
    </section>
  );
};
