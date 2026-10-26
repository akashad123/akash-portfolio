import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { ProjectItem } from '../types/portfolio';
import { getLenis } from '../utils/smoothScroll';

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
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const currentIdxRef = useRef(0);
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

      // Total vertical scroll room calibrated to horizontal travel for a smooth, luxurious gliding pace
      const getScrollEnd = () => {
        const horizontalDist = getScrollDistance();
        return Math.max(window.innerHeight * 2.2, horizontalDist * 1.6);
      };

      // Direct GSAP Horizontal Scroll with 3D GPU layer compositing
      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        force3D: true,
      });

      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${getScrollEnd()}`,
        pin: pinContainer,
        pinSpacing: true,
        animation: tween,
        scrub: 0.6,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${Math.min(100, Math.max(0, self.progress * 100))}%`;
          }
          const total = projects.length;
          const idx = Math.min(
            Math.floor(self.progress * total * 0.999),
            total - 1
          );
          if (idx !== currentIdxRef.current) {
            currentIdxRef.current = idx;
            setActiveProjectIndex(idx);
          }
        },
      });

      scrollTriggerRef.current = st;

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
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(scrollTarget, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth',
      });
    }
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

              {/* Contrast Scrim */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none z-10" />

              {/* Standing Vertical Title */}
              <div className="absolute top-10 left-4 z-20 pointer-events-none">
                <h3
                  style={{ writingMode: 'vertical-rl' }}
                  className="font-display text-4xl text-white font-black uppercase tracking-[0.08em] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] select-none"
                >
                  {project.title}
                </h3>
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
            className="flex flex-row items-center gap-8 md:gap-12 lg:gap-16 pl-6 sm:pl-12 md:pl-16 lg:pl-20 md:pr-[26vw] lg:pr-[calc(50vw-min(20vw,300px))] will-change-transform transform-gpu"
          >
            {projects.map((project, idx) => {
              const isCurrent = idx === activeProjectIndex;

              return (
                <div
                  key={project.id}
                  onClick={() => setModalProject(project)}
                  className={`relative shrink-0 w-[65vw] md:w-[48vw] lg:w-[40vw] max-w-[600px] h-[58vh] max-h-[520px] bg-neutral-950 overflow-hidden rounded-none border transition-[border-color,box-shadow,opacity] duration-300 will-change-transform cursor-pointer group ${
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

                  {/* Ambient Contrast Scrim */}
                  <div className="absolute inset-y-0 left-0 w-36 sm:w-44 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none z-10" />

                  {/* Standing Vertical Title */}
                  <div className="absolute top-10 sm:top-12 left-4 sm:left-5 z-20 pointer-events-none">
                    <h3
                      style={{ writingMode: 'vertical-rl' }}
                      className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] select-none"
                    >
                      {project.title}
                    </h3>
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
                ref={progressBarRef}
                className="h-full bg-brand-yellow rounded-none"
                style={{ width: '0%' }}
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
