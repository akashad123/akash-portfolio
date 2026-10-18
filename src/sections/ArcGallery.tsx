import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { GridBackground } from '../components/GridBackground';

export const ArcGallery: React.FC = () => {
  const projects = portfolioData.projects;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[activeIndex];
  const prevProject = projects[(activeIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(activeIndex + 1) % projects.length];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-white text-black py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden border-b border-black/10 select-none"
    >
      {/* Light Theme Grid */}
      <GridBackground theme="light" columns={8} />

      {/* Massive Background Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display text-[22vw] uppercase text-neutral-100 font-extrabold tracking-tighter leading-none">
          GALLERY
        </span>
      </div>

      {/* Section Top Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-black/10 pb-4 text-xs font-mono tracking-widest text-neutral-500">
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

      {/* Main Curved Orbital Arc Presentation */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[480px]">
          {/* Left Flank Card (Tilted -12deg) */}
          <div
            onClick={handlePrev}
            className="absolute left-2 sm:left-8 md:left-16 z-10 cursor-pointer transform -rotate-12 hover:-rotate-6 transition-all duration-300 opacity-60 hover:opacity-100 hidden sm:block w-48 md:w-64"
          >
            <div className="border border-black/20 bg-white p-2 shadow-md">
              <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                <img
                  src={prevProject.image}
                  alt={prevProject.title}
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute top-2 left-2 bg-black text-white text-[9px] font-mono font-bold px-2 py-0.5">
                  {prevProject.date}
                </div>
              </div>
              <div className="mt-2 text-xs font-display uppercase tracking-tight text-neutral-700 truncate">
                {prevProject.title}
              </div>
            </div>
          </div>

          {/* Center Active Focused Card with Drag Badge */}
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            {/* DRAG Pill / Badge matching Reference */}
            <div className="flex justify-center mb-3">
              <div className="bg-brand-yellow text-black font-mono text-xs font-bold px-3 py-1 flex items-center space-x-1 tracking-widest uppercase shadow-md select-none">
                <span>DRAG</span>
                <span>⇄</span>
              </div>
            </div>

            {/* Main Interactive Card Frame */}
            <div className="border-2 border-black bg-white p-3 sm:p-4 shadow-xl">
              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-yellow text-black font-mono text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase">
                  {currentProject.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-black text-white font-mono text-[10px] px-2 py-0.5">
                  {currentProject.date}
                </div>
              </div>

              {/* Card Meta & Description */}
              <div className="mt-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight uppercase">
                      {currentProject.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-500 mt-0.5">
                      {currentProject.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    {currentProject.github && (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 bg-neutral-100 hover:bg-black hover:text-white transition-colors flex items-center justify-center border border-black/10"
                        title="GitHub Source"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {currentProject.live && (
                      <a
                        href={currentProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 bg-brand-yellow text-black hover:bg-[#E5C200] transition-colors flex items-center justify-center font-bold"
                        title="Live Deployment"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <ul className="text-xs text-neutral-600 space-y-1 font-sans">
                  {currentProject.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-black font-bold">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-2 border-t border-black/10 flex flex-wrap gap-1.5">
                  {currentProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-100 border border-black/10 text-neutral-800 text-[10px] font-mono px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Flank Card (Tilted +12deg) */}
          <div
            onClick={handleNext}
            className="absolute right-2 sm:right-8 md:right-16 z-10 cursor-pointer transform rotate-12 hover:rotate-6 transition-all duration-300 opacity-60 hover:opacity-100 hidden sm:block w-48 md:w-64"
          >
            <div className="border border-black/20 bg-white p-2 shadow-md">
              <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute top-2 left-2 bg-black text-white text-[9px] font-mono font-bold px-2 py-0.5">
                  {nextProject.date}
                </div>
              </div>
              <div className="mt-2 text-xs font-display uppercase tracking-tight text-neutral-700 truncate">
                {nextProject.title}
              </div>
            </div>
          </div>
        </div>

        {/* Speedometer Radial Dial / Ticks Indicator (Matching Reference 5) */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 my-2">
            {/* Left ticks */}
            <div className="w-1.5 h-4 bg-neutral-300 transform -rotate-45" />
            <div className="w-1.5 h-5 bg-neutral-400 transform -rotate-25" />
            <div className="w-1.5 h-6 bg-neutral-400 transform -rotate-10" />
            
            {/* Center Yellow Active Ticks Indicator */}
            <div className="flex flex-col items-center mx-1">
              <div className="w-2 h-7 bg-brand-yellow" />
              <div className="w-2 h-2 bg-black mt-1" />
            </div>

            {/* Right ticks */}
            <div className="w-1.5 h-6 bg-neutral-400 transform rotate-10" />
            <div className="w-1.5 h-5 bg-neutral-400 transform rotate-25" />
            <div className="w-1.5 h-1.5 bg-neutral-300 transform rotate-45" />
          </div>

          {/* Navigation Buttons << and >> */}
          <div className="flex items-center space-x-2 mt-4">
            <button
              onClick={handlePrev}
              className="w-12 h-9 bg-neutral-100 hover:bg-black hover:text-white transition-colors border border-black/15 flex items-center justify-center font-mono text-xs font-bold rounded-none"
              aria-label="Previous work"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-9 bg-neutral-100 hover:bg-black hover:text-white transition-colors border border-black/15 flex items-center justify-center font-mono text-xs font-bold rounded-none"
              aria-label="Next work"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Section Bottom Footer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>INTERACTIVE ARC PHYSICS</span>
        <span>VERIFIED CODE REPOSITORIES AVAILABLE</span>
      </div>
    </section>
  );
};
