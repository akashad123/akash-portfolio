import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { GridBackground } from '../components/GridBackground';
import { Layers } from 'lucide-react';

// ==========================================
// Technology SVGs matching authentic stack
// ==========================================
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 shrink-0 text-[#00D8FF] fill-none stroke-current stroke-[1.4]">
    <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
    <ellipse rx="11" ry="4.2" />
    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <rect width="24" height="24" fill="#3178C6" rx="3" />
    <path d="M12 8.5v8h-1.5v-8h3v-1.5h-7.5v1.5h3zm2.5 5.5c.5.5 1.2.8 1.8.8.8 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.5-1.3-1.3-.5-2-1.2-2-2.2 0-1.4 1.1-2.4 2.7-2.4 1 0 1.8.3 2.4.9l-.7 1.2c-.4-.4-1-.7-1.7-.7-.7 0-1.1.4-1.1.8 0 .5.4.8 1.4 1.2 1.4.5 2.1 1.2 2.1 2.3 0 1.5-1.1 2.5-2.8 2.5-1.2 0-2.2-.4-2.8-1.1z" fill="#FFF" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <rect width="24" height="24" fill="#F7DF1E" rx="3" />
    <text x="5" y="18" fill="#000" fontWeight="bold" fontSize="13" fontFamily="sans-serif">JS</text>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#38BDF8]">
    <path d="M12 6c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.5 5.5-1.5 1.1.6 2 1.5 3 2.5 1.5 1.5 3.5 3 7 3 4 0 6.5-2 7.5-6-1.5 2-3.5 2.5-5.5 1.5-1.1-.6-2-1.5-3-2.5-1.5-1.5-3.5-3-7-3zm-7.5 6c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.5 5.5-1.5 1.1.6 2 1.5 3 2.5 1.5 1.5 3.5 3 7 3 4 0 6.5-2 7.5-6-1.5 2-3.5 2.5-5.5 1.5-1.1-.6-2-1.5-3-2.5-1.5-1.5-3.5-3-7-3z" />
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

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-4 shrink-0 fill-[#FF9900]">
    <path d="M18.8 15.6c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-8-1.5-10.8-4.1-.2-.2 0-.5.2-.3 3.1 1.7 6.9 2.7 10.7 2.7 2.7 0 5.7-.7 8.4-2.1.4-.2.7.2.3.6v.4z"/>
    <path d="M19.7 14.5c-.3-.4-2-.2-2.7-.1-.2 0-.3-.2-.1-.3 1.2-.9 3.2-.6 3.5-.2.3.4-.1 2.3-1.3 3.2-.2.1-.3 0-.3-.2.3-.8.9-2 .9-2.4z"/>
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#00758F]">
    <path d="M12 2C8 2 4 5 4 10c0 3 2 5 4 6-1 2-3 3-5 3 3 1 7 1 10-1 3 1 6 1 8-1 1-1 2-2 2-4 0-4-3-8-8-8z"/>
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

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <path d="M12 24C12 17.37 6.63 12 0 12C6.63 12 12 6.63 12 0C12 6.63 17.37 12 24 12C17.37 12 12 17.37 12 24Z" fill="url(#gemini-grad-grid)" />
    <defs>
      <linearGradient id="gemini-grad-grid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#9B72CB" />
        <stop offset="100%" stopColor="#D96570" />
      </linearGradient>
    </defs>
  </svg>
);

const RestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <path d="M12 2L4 13h6l-1 9 9-12h-6l1-8z" fill="#2563EB" />
    <circle cx="18" cy="18" r="2.5" fill="#FDD60A" />
  </svg>
);

const SocketIOIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <circle cx="12" cy="12" r="10" fill="#010101"/>
    <path d="M15.5 8.5L8.5 15.5M8.5 8.5l7 7" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round"/>
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

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#24292E]">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const ViteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <path d="M21.5 3.5l-9.5 17-9.5-17h6l3.5 7 3.5-7z" fill="url(#vite-grad-grid)" />
    <path d="M12.5 3.5l-3 6.5h3l-2 4 4.5-5.5h-3l2-5z" fill="#FFD02F" />
    <defs>
      <linearGradient id="vite-grad-grid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#41D1FF" />
        <stop offset="100%" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#D97706]">
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#10A37F]">
    <path d="M20.5 9.5a5.5 5.5 0 0 0-4.8-4.8 5.5 5.5 0 0 0-7.4-1.8 5.5 5.5 0 0 0-5 3.4 5.5 5.5 0 0 0 .9 7.6 5.5 5.5 0 0 0 4.8 4.8 5.5 5.5 0 0 0 7.4 1.8 5.5 5.5 0 0 0 5-3.4 5.5 5.5 0 0 0-.9-7.6zm-8.5 7a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
  </svg>
);

const BootstrapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
    <rect width="24" height="24" rx="4" fill="#7952B3" />
    <text x="6.5" y="18" fill="#FFF" fontWeight="black" fontSize="16" fontFamily="sans-serif">B</text>
  </svg>
);

const SassIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#CF649A]">
    <path d="M12 3C6.5 3 2 6.5 2 11c0 3.2 2.3 6 5.8 7.2l-.6 2.3c-.1.5.3 1 .8.9l3.5-1.1c.2 0 .3.1.5.1 5.5 0 10-3.5 10-8s-4.5-8-10-8z"/>
  </svg>
);

const PM2Icon = () => (
  <span className="font-mono font-black text-xs text-[#2B037A] tracking-tighter shrink-0 px-0.5">PM2</span>
);

const AntigravityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#2563EB]">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM12 8.5l3.5 6.5h-2.2l-.6-1.3h-1.4l-.6 1.3H8.5L12 8.5zm-.4 3.6h.8l-.4-1-.4 1z" />
  </svg>
);

// ==========================================
// Complete Production Skills Arsenal
// ==========================================
interface TechSkill {
  name: string;
  icon: React.ReactNode;
}

const TECH_SKILLS: TechSkill[] = [
  { name: 'React.js', icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <TSIcon /> },
  { name: 'JavaScript', icon: <JSIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Express.js', icon: <ExpressIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'AWS EC2', icon: <AWSIcon /> },
  { name: 'MySQL', icon: <MySQLIcon /> },
  { name: 'PostgreSQL', icon: <PostgresIcon /> },
  { name: 'MongoDB', icon: <MongoIcon /> },
  { name: 'Supabase', icon: <SupabaseIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Google Gemini API', icon: <GeminiIcon /> },
  { name: 'REST APIs', icon: <RestIcon /> },
  { name: 'Socket.IO', icon: <SocketIOIcon /> },
  { name: 'GitHub Actions', icon: <ActionsIcon /> },
  { name: 'Git / GitHub', icon: <GitHubIcon /> },
  { name: 'Vite', icon: <ViteIcon /> },
  { name: 'Claude', icon: <ClaudeIcon /> },
  { name: 'ChatGPT', icon: <ChatGPTIcon /> },
  { name: 'Bootstrap', icon: <BootstrapIcon /> },
  { name: 'Sass', icon: <SassIcon /> },
  { name: 'PM2', icon: <PM2Icon /> },
  { name: 'Antigravity', icon: <AntigravityIcon /> },
];

export const EcosystemGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative bg-white text-black py-16 sm:py-24 px-4 sm:px-8 md:px-12 flex flex-col overflow-hidden border-b border-black/10 select-none"
    >
      {/* Light Theme Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <GridBackground theme="light" columns={8} />
      </div>

      {/* Architectural Background Giant Typography Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden opacity-40">
        <span className="font-display text-[15vw] sm:text-[17vw] uppercase text-neutral-200 font-extrabold tracking-tight leading-none select-none">
          ECOSYSTEM
        </span>
      </div>

      {/* Top Header Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-black/10 pb-4 text-xs font-mono tracking-widest text-neutral-500 mb-8 sm:mb-12">
        <div className="flex items-center space-x-2">
          <Layers size={14} className="text-black" />
          <span>06 // TECH STACK & SYSTEM ECOSYSTEM</span>
        </div>
      </div>

      {/* Skills Arranged in Row and Column Fashion (Curved Rectangle Cards) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.02 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-4.5"
        >
          {TECH_SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="orbit-card rounded-xl bg-white border border-neutral-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.03)] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center space-x-2.5 hover:border-black/30 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <div className="shrink-0 flex items-center justify-center w-5 h-5">
                {skill.icon}
              </div>
              <span className="font-sans font-semibold text-xs sm:text-sm text-neutral-800 tracking-tight group-hover:text-black truncate">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
