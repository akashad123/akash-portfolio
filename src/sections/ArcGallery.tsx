import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { ProjectItem } from '../types/portfolio';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section 03: Selected Works
 * 
 * Responsive Behavior:
 * - Mobile (< 768px): Clean vertical stack where projects flow naturally downwards one by one.
 *   Zero horizontal pinning or touch interference for smooth, native mobile scrolling.
 * - Tablet, Tablet Pro & Laptop (>= 768px): Smooth, calibrated GSAP ScrollTrigger horizontal scroll.
 *   The section pins in place and scrolling down glides the cards horizontally.
 */
export const ArcGallery: React.FC = () => {
  const projects = portfolioData.projects;
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // GSAP Horizontal Scroll Setup strictly for tablets and desktops (>= 768px)
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const section = sectionRef.current;
      const pinContainer = pinContainerRef.current;
      const track = trackRef.current;
      if (!section || !pinContainer || !track) return;

      // Exact horizontal travel distance
      const getScrollDistance = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth);
      };

      // Total vertical scroll room calibrated to horizontal travel
      const getScrollEnd = () => {
        const horizontalDist = getScrollDistance();
        return Math.max(window.innerHeight * 1.6, horizontalDist + 120);
      };

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
      });

      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${getScrollEnd()}`,
        pin: pinContainer,
        pinSpacing: true,
        animation: tween,
        scrub: 0.9,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          const total = projects.length;
          const idx = Math.min(
            Math.floor(self.progress * total * 0.999),
            total - 1
          );
          setActiveProjectIndex(idx);
        },
      });

      scrollTriggerRef.current = st;

      // Subtle atmospheric motion on background watermark and grid
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          x: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getScrollEnd()}`,
            scrub: 1.2,
          },
        });
      }

      if (gridRef.current) {
        gsap.to(gridRef.current, {
          x: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getScrollEnd()}`,
            scrub: 1.1,
          },
        });
      }

      return () => {
        st.kill();
        tween.kill();
      };
    });

    // Refresh after DOM and images settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('resize', handleResize);
      mm.revert();
    };
  }, [projects.length]);

  /**
   * Smoothly scroll to a specific project card index on desktop/tablet
   */
  const scrollToProject = (index: number) => {
    const st = scrollTriggerRef.current;
    if (!st) return;
    const total = projects.length - 1;
    const targetProgress = total > 0 ? index / total : 0;
    const scrollTarget = st.start + (st.end - st.start) * targetProgress;
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    scrollToProject(Math.max(0, activeProjectIndex - 1));
  };

  const handleNext = () => {
    scrollToProject(Math.min(projects.length - 1, activeProjectIndex + 1));
  };

  // Keyboard navigation when pinned gallery is in view on desktop/tablet
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 768) return;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= window.innerHeight * 0.4) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNext();
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrev();
        }
        if (e.key === 'Escape') {
          setModalProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectIndex]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-white text-black border-b border-black/10 select-none overflow-hidden"
    >
      {/* ============================================================== */}
      {/* 1. MOBILE EXPERIENCE (< 768px): Vertical Stack Downwards       */}
      {/*    No horizontal locking, projects scroll naturally 1 by 1.     */}
      {/* ============================================================== */}
      <div className="block md:hidden relative bg-white py-12 px-4 sm:px-8">
        {/* Background Grid & Watermark on Mobile */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <GridBackground theme="light" columns={6} />
        </div>
        <div className="absolute top-24 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-40">
          <span className="font-display text-[24vw] uppercase text-neutral-200 font-extrabold tracking-tight leading-none select-none">
            PROJECTS
          </span>
        </div>

        {/* Top Header Bar for Mobile */}
        <div className="relative z-10 flex items-center justify-between border-b border-black/10 pb-3 text-xs font-mono tracking-widest text-neutral-500 mb-8">
          <span>03 // SELECTED WORKS</span>
          <span className="bg-brand-yellow text-black font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase">
            {String(projects.length).padStart(2, '0')} PROJECTS
          </span>
        </div>

        {/* Vertical Project Cards Feed (Downwards one after another) */}
        <div className="relative z-10 flex flex-col space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setModalProject(project)}
              className="relative w-full h-[460px] bg-neutral-950 overflow-hidden rounded-none border border-black/20 hover:border-brand-yellow transition-all duration-300 cursor-pointer group shadow-lg"
            >
              {/* Image Full Bleed */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 group-hover:grayscale-0 transition-all duration-500 select-none"
              />

              {/* Contrast Scrims */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black/95 via-black/60 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/85 via-black/30 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none z-10" />

              {/* Top Badges */}
              <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between">
                <span className="bg-brand-yellow text-black font-mono font-bold text-[10px] px-2 py-0.5 tracking-wider uppercase rounded-none">
                  {project.tag}
                </span>
                <span className="text-[11px] font-mono text-neutral-300 tracking-wider">
                  {project.date}
                </span>
              </div>

              {/* Standing Vertical Title */}
              <div className="absolute top-12 left-3 z-20 pointer-events-none">
                <h3
                  style={{ writingMode: 'vertical-rl' }}
                  className="font-display text-3xl text-white font-black uppercase tracking-[0.08em] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] select-none"
                >
                  {project.title}
                </h3>
              </div>

              {/* Bottom Metadata & Actions */}
              <div className="absolute bottom-3.5 inset-x-3.5 z-20 pl-11">
                <p className="text-xs font-mono text-neutral-200 line-clamp-1 mb-1.5 font-medium">
                  {project.subtitle}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-2.5">
                  {project.tech.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-black/75 backdrop-blur-xs border border-white/15 text-neutral-200 text-[9px] font-mono px-1.5 py-0.5 rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-brand-yellow text-[9px] font-mono self-center">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-brand-yellow text-black hover:bg-[#E5C200] font-mono text-[9px] font-bold px-2.5 py-1 tracking-wider uppercase flex items-center space-x-1 rounded-none shadow-sm cursor-pointer"
                    >
                      <span>LIVE APP</span>
                      <ExternalLink size={10} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-neutral-900 text-white hover:bg-neutral-800 font-mono text-[9px] px-2.5 py-1 tracking-wider uppercase flex items-center space-x-1 border border-white/20 rounded-none cursor-pointer"
                    >
                      <Github size={10} />
                      <span>CODE</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setModalProject(project)}
                    className="bg-neutral-800 text-neutral-200 hover:bg-white hover:text-black font-mono text-[9px] px-2.5 py-1 tracking-wider uppercase flex items-center space-x-1 border border-white/10 rounded-none cursor-pointer ml-auto"
                  >
                    <span>SPECS</span>
                    <Maximize2 size={10} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. TABLET, LAPTOP & DESKTOP (>= 768px): Pinned Horizontal Flow  */}
      {/*    Smooth, hardware-accelerated horizontal scrub.              */}
      {/* ============================================================== */}
      <div
        ref={pinContainerRef}
        className="hidden md:flex h-screen w-full overflow-hidden flex-col justify-between relative bg-white"
      >
        {/* Background Architectural Grid Lines */}
        <div ref={gridRef} className="absolute inset-0 pointer-events-none will-change-transform z-0">
          <GridBackground theme="light" columns={8} />
        </div>

        {/* Background Watermark Typography ('PROJECTS') */}
        <div
          ref={watermarkRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 will-change-transform"
        >
          <span className="font-display text-[16vw] sm:text-[18vw] uppercase text-neutral-200 font-extrabold tracking-tight leading-none select-none">
            PROJECTS
          </span>
        </div>

        {/* Top Header Bar - Fixed in pinned view */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-black/10 pb-2 text-xs font-mono tracking-widest text-neutral-500 pt-3 sm:pt-4 px-4 sm:px-8 md:px-12">
          <div className="flex items-center space-x-2">
            <span>03 // SELECTED WORKS</span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs">
            <span className="text-black font-bold">{String(activeProjectIndex + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Horizontal Track Viewport Container */}
        <div className="relative z-10 w-full flex-1 flex items-center overflow-visible my-auto">
          {/* Translating Project Cards Track */}
          <div
            ref={trackRef}
            className="flex flex-row items-center gap-8 md:gap-12 lg:gap-16 pl-6 sm:pl-12 md:pl-16 lg:pl-20 pr-16 sm:pr-24 md:pr-32 will-change-transform"
          >
            {projects.map((project, idx) => {
              const isCurrent = idx === activeProjectIndex;

              return (
                <div
                  key={project.id}
                  onClick={() => setModalProject(project)}
                  className={`relative shrink-0 w-[65vw] md:w-[48vw] lg:w-[40vw] max-w-[600px] h-[58vh] max-h-[520px] bg-neutral-950 overflow-hidden rounded-none border transition-all duration-300 cursor-pointer group ${
                    isCurrent
                      ? 'border-brand-yellow/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)]'
                      : 'border-black/20 shadow-xl opacity-95 hover:opacity-100 hover:border-black/40'
                  }`}
                >
                  {/* Full Image Covering Slide */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 select-none"
                  />

                  {/* Ambient Contrast Scrims */}
                  <div className="absolute inset-y-0 left-0 w-36 sm:w-44 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none z-10" />
                  <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-10" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 sm:top-4 inset-x-3.5 sm:inset-x-4 z-20 flex items-center justify-between">
                    <span className="bg-brand-yellow text-black font-mono font-bold text-[10px] px-2 py-0.5 tracking-wider uppercase rounded-none">
                      {project.tag}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-300 tracking-wider">
                      {project.date}
                    </span>
                  </div>

                  {/* Standing Vertical Title */}
                  <div className="absolute top-12 sm:top-14 left-3 sm:left-4 z-20 pointer-events-none">
                    <h3
                      style={{ writingMode: 'vertical-rl' }}
                      className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] select-none"
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Bottom Metadata & Actions */}
                  <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 z-20 pl-12 sm:pl-16">
                    <p className="text-[11px] sm:text-xs font-mono text-neutral-200 line-clamp-1 mb-1.5 font-medium">
                      {project.subtitle}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {project.tech.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-black/65 backdrop-blur-xs border border-white/15 text-neutral-200 text-[9px] font-mono px-1.5 py-0.5 rounded-none"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-brand-yellow text-[9px] font-mono self-center">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions: Live App, GitHub, Specs Modal */}
                    <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-brand-yellow text-black hover:bg-[#E5C200] font-mono text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 tracking-wider uppercase flex items-center space-x-1 transition-all rounded-none shadow-sm cursor-pointer"
                        >
                          <span>LIVE APP</span>
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-neutral-900 text-white hover:bg-neutral-800 font-mono text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1 sm:py-1.5 tracking-wider uppercase flex items-center space-x-1 border border-white/20 transition-all rounded-none cursor-pointer"
                        >
                          <Github size={10} />
                          <span>CODE</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setModalProject(project)}
                        className="bg-neutral-800 text-neutral-200 hover:bg-white hover:text-black font-mono text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1 sm:py-1.5 tracking-wider uppercase flex items-center space-x-1 border border-white/10 transition-colors rounded-none cursor-pointer ml-auto"
                        title="View project specifications"
                      >
                        <span>SPECS</span>
                        <Maximize2 size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Telemetry & Navigation Dock */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-end border-t border-black/10 pt-2 pb-3 sm:pb-4 px-4 sm:px-8 md:px-12 text-xs font-mono text-neutral-500">
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Real-time horizontal progress indicator */}
            <div className="w-20 sm:w-32 h-1 bg-neutral-200 border border-black/10 overflow-hidden relative rounded-none">
              <div
                className="h-full bg-brand-yellow transition-all duration-75 rounded-none"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center border border-black bg-white divide-x divide-black rounded-none shadow-xs">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeProjectIndex === 0}
                className="w-7 h-6 sm:w-8 sm:h-7 bg-white hover:bg-black text-black hover:text-brand-yellow disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black transition-colors flex items-center justify-center cursor-pointer disabled:cursor-not-allowed rounded-none"
                aria-label="Previous project"
                title="Previous project"
              >
                <ChevronLeft size={14} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeProjectIndex === projects.length - 1}
                className="w-7 h-6 sm:w-8 sm:h-7 bg-white hover:bg-black text-black hover:text-brand-yellow disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black transition-colors flex items-center justify-center cursor-pointer disabled:cursor-not-allowed rounded-none"
                aria-label="Next project"
                title="Next project"
              >
                <ChevronRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Project Specification Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
