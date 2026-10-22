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
 * Section 03: Horizontal Scroll Production Gallery
 * 
 * Behavior:
 * - When entering from Section 02 (About / Statement), the background pins fixed in the viewport.
 * - Scrolling down drives horizontal motion across the project showcase track.
 * - After all projects glide across, pinning unpins cleanly and flows directly
 *   into Section 04: Career Timeline.
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

  useEffect(() => {
    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    const track = trackRef.current;
    if (!section || !pinContainer || !track) return;

    const ctx = gsap.context(() => {
      // Calculate how far the horizontal track must translate
      const getScrollDistance = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth);
      };

      // Total vertical distance to pin and scrub horizontally
      const getScrollEnd = () => {
        const horizontalDist = getScrollDistance();
        // Give comfortable vertical scroll room (~2.4x viewport height for 3 cards)
        return Math.max(window.innerHeight * 2.2, horizontalDist + 160);
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
        scrub: 1.1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          const idx = Math.min(
            Math.floor(self.progress * projects.length * 0.999),
            projects.length - 1
          );
          setActiveProjectIndex(idx);
        },
      });

      scrollTriggerRef.current = st;

      // Subtle atmospheric motion on background watermark and grid
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          x: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getScrollEnd()}`,
            scrub: 1.4,
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
            scrub: 1.2,
          },
        });
      }
    }, section);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [projects.length]);

  /**
   * Smoothly scroll to a specific project card index
   */
  const scrollToProject = (index: number) => {
    const st = scrollTriggerRef.current;
    if (!st) return;
    const targetProgress = index / (projects.length - 1);
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

  // Keyboard navigation when pinned gallery is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
      className="relative bg-white text-black border-b border-black/10 select-none"
    >
      {/* Pinned Viewport Container (Locks in place while horizontal track translates) */}
      <div
        ref={pinContainerRef}
        className="h-screen w-full overflow-hidden flex flex-col justify-between relative bg-white"
      >
        {/* Light Theme Background Grid Lines */}
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
            <span className="bg-brand-yellow text-black font-bold px-1.5 py-0.5 text-[10px] uppercase">
              HORIZONTAL SHOWCASE
            </span>
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
            className="flex flex-row items-center gap-6 sm:gap-10 md:gap-14 pl-4 sm:pl-10 md:pl-16 pr-12 sm:pr-20 md:pr-32 will-change-transform"
          >
            {projects.map((project, idx) => {
              const isCurrent = idx === activeProjectIndex;

              return (
                <div
                  key={project.id}
                  onClick={() => setModalProject(project)}
                  className={`relative shrink-0 w-[84vw] sm:w-[68vw] md:w-[50vw] lg:w-[42vw] max-w-[580px] h-[56vh] sm:h-[60vh] max-h-[500px] bg-neutral-950 overflow-hidden rounded-none border transition-all duration-300 cursor-pointer group ${
                    isCurrent
                      ? 'border-brand-yellow/80 shadow-[0_20px_50px_rgba(0,0,0,0.35)]'
                      : 'border-black/20 shadow-xl opacity-95 hover:opacity-100 hover:border-black/40'
                  }`}
                >
                  {/* 1. Full Image Covering the Slide Completely */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 select-none"
                  />

                  {/* 2. Ambient Contrast Scrims */}
                  <div className="absolute inset-y-0 left-0 w-36 sm:w-44 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none z-10" />
                  <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-10" />

                  {/* 3. Top Badges: Category Tag & Year */}
                  <div className="absolute top-3.5 sm:top-4 inset-x-3.5 sm:inset-x-4 z-20 flex items-center justify-between">
                    <span className="bg-brand-yellow text-black font-mono font-bold text-[10px] px-2 py-0.5 tracking-wider uppercase rounded-none">
                      {project.tag}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-300 tracking-wider">
                      {project.date}
                    </span>
                  </div>

                  {/* 4. Standing Vertical Title on Left Edge (Matching Editorial Style) */}
                  <div className="absolute top-12 sm:top-14 left-3 sm:left-4 z-20 pointer-events-none">
                    <h3
                      style={{ writingMode: 'vertical-rl' }}
                      className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] select-none"
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* 5. Bottom Metadata, Tech Badges & Direct Action Buttons */}
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
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-black/10 pt-2 pb-3 sm:pb-4 px-4 sm:px-8 md:px-12 text-xs font-mono text-neutral-500">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-brand-yellow animate-ping inline-block" />
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-600 hidden sm:inline-block">
              SCROLL DOWN TO ADVANCE HORIZONTALLY
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-600 sm:hidden">
              SCROLL DOWN ⇄
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Real-time horizontal progress indicator */}
            <div className="w-20 sm:w-32 h-1 bg-neutral-200 border border-black/10 overflow-hidden relative rounded-none">
              <div
                className="h-full bg-brand-yellow transition-all duration-75 rounded-none"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>

            {/* Sharp Architectural Navigation Buttons */}
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
