import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GridBackground } from '../components/GridBackground';
import {
  Layers,
  Server,
  Wrench,
  ShieldCheck,
  BarChart3,
  Brain,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// Technology SVGs matching reference image
// ==========================================
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 shrink-0 text-[#00D8FF] fill-none stroke-current stroke-[1.4]">
    <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
    <ellipse rx="11" ry="4.2" />
    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <rect width="24" height="24" fill="#F7DF1E" />
    <text x="5" y="18" fill="#000" fontWeight="bold" fontSize="13" fontFamily="sans-serif">JS</text>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#539E43]">
    <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
    <path d="M10 8h2v8h-2zm3 0h2v5h-2z" />
  </svg>
);

const ExpressIcon = () => (
  <span className="font-mono font-black text-xs text-black tracking-tighter shrink-0 px-0.5">ex</span>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <path d="M11.9 2c-3.1 0-5.1 1.4-5.1 3.2v2.4h5.2v.8H4.7C2.9 8.4 2 9.7 2 11.9c0 2.3.9 3.6 2.7 3.6h1.6v-2.3c0-1.8 1.5-3.3 3.3-3.3h5.2c1.5 0 2.7-1.2 2.7-2.7V4.7c0-1.8-2.5-2.7-5.6-2.7zm-1.8 1.6c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z" fill="#3776AB"/>
    <path d="M12.1 22c3.1 0 5.1-1.4 5.1-3.2v-2.4h-5.2v-.8h7.3c1.8 0 2.7-1.3 2.7-3.5 0-2.3-.9-3.6-2.7-3.6h-1.6v2.3c0 1.8-1.5 3.3-3.3 3.3H9.2c-1.5 0-2.7 1.2-2.7 2.7v2.5c0 1.8 2.5 2.7 5.6 2.7zm1.8-1.6c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" fill="#FFD43B"/>
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#336791]">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 3.8 2.1 7.1 5.3 8.7.2-.6.4-1.5.5-2.2-.6-.3-1.1-.7-1.5-1.3-.4-.5-.6-1.1-.6-1.8 0-.9.4-1.7 1-2.3.6-.6 1.4-1 2.3-1 .4 0 .8.1 1.2.2.3-.8.8-1.5 1.5-2 .7-.5 1.5-.8 2.4-.8 1.1 0 2.1.4 2.8 1.2.8.8 1.2 1.8 1.2 2.9 0 1.3-.6 2.5-1.5 3.3-.9.9-2.1 1.4-3.4 1.4-.4 0-.7 0-1.1-.1-.3.9-.7 1.8-1.2 2.6 1.1.3 2.3.5 3.5.5 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#13AA52]">
    <path d="M12 1.5s-4.5 5.3-4.5 10.5c0 4.3 3.1 7.8 7.3 8.4l-.3-2.1c-2.8-.7-4.8-3.2-4.8-6.3 0-3.3 2.3-7.5 2.3-7.5s2.3 4.2 2.3 7.5c0 3.1-2 5.6-4.8 6.3l-.3 2.1c4.2-.6 7.3-4.1 7.3-8.4C16.5 6.8 12 1.5 12 1.5z"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#3ECF8E]">
    <path d="M13.5 1L3 13.5h7.5L9.5 23 21 9.5h-7.5z"/>
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#FF9900]">
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.4l6.8 3.8L12 12 5.2 8.2 12 4.4zM4.8 9.8l6.4 3.6v7.2l-6.4-3.6V9.8zm8 10.8v-7.2l6.4-3.6v7.2l-6.4 3.6z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#24292E]">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const ActionsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#2088FF]">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M6 9v6M9 6h6M8.5 15.5l7-7" stroke="#2088FF" strokeWidth="2" fill="none" />
  </svg>
);

const RestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-[#2563EB] fill-current">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#D97706]">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <path d="M12 24C12 17.37 6.63 12 0 12C6.63 12 12 6.63 12 0C12 6.63 17.37 12 24 12C17.37 12 12 17.37 12 24Z" fill="url(#gemini-grad-eco)" />
    <defs>
      <linearGradient id="gemini-grad-eco" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#9B72CB" />
        <stop offset="100%" stopColor="#D96570" />
      </linearGradient>
    </defs>
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#10A37F]">
    <path d="M20.5 9.5a5.5 5.5 0 0 0-4.8-4.8 5.5 5.5 0 0 0-7.4-1.8 5.5 5.5 0 0 0-5 3.4 5.5 5.5 0 0 0 .9 7.6 5.5 5.5 0 0 0 4.8 4.8 5.5 5.5 0 0 0 7.4 1.8 5.5 5.5 0 0 0 5-3.4 5.5 5.5 0 0 0-.9-7.6zm-8.5 7a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
  </svg>
);

const AntigravityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#1E40AF]">
    <path d="M12 3L2 21h5l5-9 5 9h5L12 3zm0 6.5l2.5 4.5h-5L12 9.5z" />
  </svg>
);

const BootstrapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <rect width="24" height="24" fill="#7952B3" />
    <text x="6.5" y="18" fill="#FFF" fontWeight="black" fontSize="16" fontFamily="sans-serif">B</text>
  </svg>
);

const SassIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#CF649A]">
    <path d="M12 3C6.5 3 2 6.5 2 11c0 3.2 2.3 6 5.8 7.2l-.6 2.3c-.1.5.3 1 .8.9l3.5-1.1c.2 0 .3.1.5.1 5.5 0 10-3.5 10-8s-4.5-8-10-8z"/>
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#00758F]">
    <path d="M12 2C8 2 4 5 4 10c0 3 2 5 4 6-1 2-3 3-5 3 3 1 7 1 10-1 3 1 6 1 8-1 1-1 2-2 2-4 0-4-3-8-8-8z"/>
  </svg>
);

const JWTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <circle cx="12" cy="12" r="9" fill="none" stroke="url(#jwt-grad-eco)" strokeWidth="3.2" />
    <defs>
      <linearGradient id="jwt-grad-eco" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FB015B" />
        <stop offset="50%" stopColor="#D63AFF" />
        <stop offset="100%" stopColor="#00B9F1" />
      </linearGradient>
    </defs>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#38BDF8]">
    <path d="M12 6c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.5 5.5-1.5 1.1.6 2 1.5 3 2.5 1.5 1.5 3.5 3 7 3 4 0 6.5-2 7.5-6-1.5 2-3.5 2.5-5.5 1.5-1.1-.6-2-1.5-3-2.5-1.5-1.5-3.5-3-7-3zm-7.5 6c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.5 5.5-1.5 1.1.6 2 1.5 3 2.5 1.5 1.5 3.5 3 7 3 4 0 6.5-2 7.5-6-1.5 2-3.5 2.5-5.5 1.5-1.1-.6-2-1.5-3-2.5-1.5-1.5-3.5-3-7-3z" />
  </svg>
);

// ==========================================
// Data Structures matching Screenshot Exactly
// ==========================================
interface OrbitCard {
  name: string;
  icon: React.ReactNode;
}

const INNER_CARDS: OrbitCard[] = [
  { name: 'Full Stack Architecture', icon: <Layers size={16} className="text-[#2563EB] shrink-0" /> },
  { name: 'Zero-Downtime Reliability', icon: <Server size={16} className="text-[#2563EB] shrink-0" /> },
  { name: 'Operational Troubleshooting', icon: <Wrench size={16} className="text-[#2563EB] shrink-0" /> },
  { name: 'Rate Limiting', icon: <ShieldCheck size={16} className="text-[#2563EB] shrink-0" /> },
  { name: 'Performance Profiling', icon: <BarChart3 size={16} className="text-[#2563EB] shrink-0" /> },
  { name: 'Multimodal AI', icon: <Brain size={16} className="text-[#2563EB] shrink-0" /> },
];

const OUTER_CARDS: OrbitCard[] = [
  { name: 'React.js', icon: <ReactIcon /> },
  { name: 'JavaScript', icon: <JSIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Express.js', icon: <ExpressIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'PostgreSQL', icon: <PostgresIcon /> },
  { name: 'MongoDB', icon: <MongoIcon /> },
  { name: 'Supabase', icon: <SupabaseIcon /> },
  { name: 'AWS EC2', icon: <AWSIcon /> },
  { name: 'Git / GitHub', icon: <GitHubIcon /> },
  { name: 'GitHub Actions', icon: <ActionsIcon /> },
  { name: 'REST APIs', icon: <RestIcon /> },
  { name: 'Claude', icon: <ClaudeIcon /> },
  { name: 'Google Gemini API', icon: <GeminiIcon /> },
  { name: 'ChatGPT', icon: <ChatGPTIcon /> },
  { name: 'Antigravity', icon: <AntigravityIcon /> },
  { name: 'Bootstrap', icon: <BootstrapIcon /> },
  { name: 'Sass', icon: <SassIcon /> },
  { name: 'MySQL', icon: <MySQLIcon /> },
  { name: 'JWT', icon: <JWTIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
];

// Radii constants for the 3D plane
const INNER_RADIUS = 210;
const OUTER_RADIUS = 430;

export const EcosystemGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);
  const innerRingRef = useRef<HTMLDivElement>(null);

  const outerCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [scale, setScale] = useState(1);

  // Responsive scale handler so the 3D orbit fits on all devices
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setScale(0.44);
      } else if (w < 640) {
        setScale(0.54);
      } else if (w < 768) {
        setScale(0.68);
      } else if (w < 1024) {
        setScale(0.82);
      } else if (w < 1280) {
        setScale(0.92);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP ScrollTrigger Bidirectional Scrub (scrub = true / 1.2)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rotState = { outer: 0, inner: 0 };

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      onUpdate: (self) => {
        // Scrub rotation as user scrolls down and up
        const p = self.progress;
        rotState.outer = p * 160;
        rotState.inner = -p * 110;

        if (outerRingRef.current) {
          outerRingRef.current.style.transform = `rotateZ(${rotState.outer}deg)`;
        }
        if (innerRingRef.current) {
          innerRingRef.current.style.transform = `rotateZ(${rotState.inner}deg)`;
        }

        // Counter-rotate each card so it always faces forward and upright
        outerCardsRef.current.forEach((el, idx) => {
          if (!el) return;
          const baseAngle = (idx / OUTER_CARDS.length) * 360;
          el.style.transform = `rotateZ(${-(baseAngle + rotState.outer)}deg) rotateX(-60deg)`;
        });

        innerCardsRef.current.forEach((el, idx) => {
          if (!el) return;
          const baseAngle = (idx / INNER_CARDS.length) * 360;
          el.style.transform = `rotateZ(${-(baseAngle + rotState.inner)}deg) rotateX(-60deg)`;
        });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative min-h-[780px] sm:min-h-[860px] lg:min-h-[940px] bg-white text-black py-16 sm:py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden border-b border-black/10 select-none"
    >
      {/* Light Theme Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <GridBackground theme="light" columns={8} />
      </div>

      {/* Top Header Bar matching Screenshot */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-black/10 pb-4 text-xs font-mono tracking-widest text-neutral-500">
        <div className="flex items-center space-x-2">
          <Layers size={14} className="text-black" />
          <span>06 // TECH STACK & SYSTEM ECOSYSTEM</span>
        </div>
        <span className="bg-black text-white font-bold px-2.5 py-1 text-[10px] tracking-widest uppercase font-mono rounded-none">
          PRODUCTION ARSENAL
        </span>
      </div>

      {/* 3D Perspective Orbital Rings Stage */}
      <div
        className="relative z-10 w-full flex-1 flex items-center justify-center my-auto"
        style={{ perspective: '1200px' }}
      >
        {/* Scale Wrapper for Responsive Viewports */}
        <div
          className="relative flex items-center justify-center transition-transform duration-150"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Tilted 3D Stage Plane (60deg pitch) */}
          <div
            className="relative flex items-center justify-center will-change-transform"
            style={{
              width: `${OUTER_RADIUS * 2 + 180}px`,
              height: `${OUTER_RADIUS * 2 + 180}px`,
              transformStyle: 'preserve-3d',
              transform: 'rotateX(60deg)',
            }}
          >
            {/* Center Origin Point & Subtle Concentric Guide Circles */}
            <div className="absolute w-28 h-28 rounded-full border border-dashed border-amber-400/40 pointer-events-none" />
            <div className="absolute w-56 h-56 rounded-full border border-dashed border-amber-400/25 pointer-events-none" />
            <div className="absolute w-72 h-[1px] bg-neutral-300/40 pointer-events-none" />
            <div className="absolute h-72 w-[1px] bg-neutral-300/40 pointer-events-none" />
            <div className="absolute w-2.5 h-2.5 bg-[#FDD60A] rounded-full shadow-[0_0_10px_#FDD60A] pointer-events-none z-10" />

            {/* ========================================================= */}
            {/* LAYER 1: INNER CIRCLE (6 Core Architecture Competencies)  */}
            {/* ========================================================= */}
            <div
              ref={innerRingRef}
              className="absolute flex items-center justify-center rounded-full border border-amber-400/90 shadow-[0_0_20px_rgba(253,214,10,0.45)] will-change-transform"
              style={{
                width: `${INNER_RADIUS * 2}px`,
                height: `${INNER_RADIUS * 2}px`,
                transformStyle: 'preserve-3d',
              }}
            >
              {INNER_CARDS.map((card, idx) => {
                const baseAngle = (idx / INNER_CARDS.length) * 360;

                return (
                  <div
                    key={card.name}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotateZ(${baseAngle}deg) translateX(${INNER_RADIUS}px)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Glowing Yellow Node Dot on Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FDD60A] rounded-full shadow-[0_0_10px_#FDD60A] pointer-events-none z-0" />

                    {/* Upright Standing 3D Card (Counter-Rotated) */}
                    <div
                      ref={(el) => {
                        innerCardsRef.current[idx] = el;
                      }}
                      className="relative z-10 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xs border border-neutral-300/80 shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center space-x-2.5 whitespace-nowrap rounded-none hover:border-brand-yellow hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer group"
                      style={{
                        transform: `rotateZ(${-baseAngle}deg) rotateX(-60deg)`,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {card.icon}
                      <span className="font-mono font-bold text-xs text-neutral-900 tracking-tight group-hover:text-black">
                        {card.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ========================================================= */}
            {/* LAYER 2: OUTER CIRCLE (21 Tech Stack Arsenal Items)       */}
            {/* ========================================================= */}
            <div
              ref={outerRingRef}
              className="absolute flex items-center justify-center rounded-full border border-amber-400/70 shadow-[0_0_25px_rgba(253,214,10,0.35)] will-change-transform"
              style={{
                width: `${OUTER_RADIUS * 2}px`,
                height: `${OUTER_RADIUS * 2}px`,
                transformStyle: 'preserve-3d',
              }}
            >
              {OUTER_CARDS.map((card, idx) => {
                const baseAngle = (idx / OUTER_CARDS.length) * 360;

                return (
                  <div
                    key={card.name}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotateZ(${baseAngle}deg) translateX(${OUTER_RADIUS}px)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Glowing Yellow Node Dot on Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#FDD60A] rounded-full shadow-[0_0_10px_#FDD60A] pointer-events-none z-0" />

                    {/* Upright Standing 3D Card (Counter-Rotated) */}
                    <div
                      ref={(el) => {
                        outerCardsRef.current[idx] = el;
                      }}
                      className="relative z-10 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xs border border-neutral-300/80 shadow-[0_8px_25px_rgba(0,0,0,0.1)] px-3 sm:px-3.5 py-1.5 sm:py-2 flex items-center space-x-2 whitespace-nowrap rounded-none hover:border-brand-yellow hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer group"
                      style={{
                        transform: `rotateZ(${-baseAngle}deg) rotateX(-60deg)`,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {card.icon}
                      <span className="font-mono font-bold text-[11px] sm:text-xs text-neutral-800 tracking-tight group-hover:text-black">
                        {card.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
