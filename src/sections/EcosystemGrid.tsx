import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GridBackground } from '../components/GridBackground';
import { Layers } from 'lucide-react';

export const EcosystemGrid: React.FC = () => {
  const { skills } = portfolioData;

  // Flattened high-impact tech entities for architectural grid distribution (Matching Screenshot 1)
  const leftStack = [
    { name: "REACT.JS", category: "FRONTEND FRAMEWORK", sub: "V19 / VITE" },
    { name: "TYPESCRIPT", category: "TYPE SYSTEM", sub: "STRICT MODE" },
    { name: "TAILWIND CSS", category: "DESIGN SYSTEM", sub: "CUSTOM TOKENS" },
    { name: "NODE.JS", category: "RUNTIME", sub: "ASYNC / V8" },
    { name: "EXPRESS.JS", category: "REST ENGINE", sub: "API GATEWAYS" },
    { name: "SOCKET.IO", category: "REAL-TIME", sub: "WEBSOCKETS" },
    { name: "REDUX TOOLKIT", category: "STATE MANAGEMENT", sub: "PREDICTABLE" },
    { name: "FRAMER MOTION", category: "INTERACTION", sub: "SPRING PHYSICS" }
  ];

  const rightStack = [
    { name: "PYTHON", category: "AI & SCRIPTS", sub: "RULE ENGINES" },
    { name: "GOOGLE GEMINI", category: "MULTIMODAL AI", sub: "VIDEO / AUDIO" },
    { name: "SUPABASE", category: "POSTGRESQL", sub: "ROW-LEVEL SEC" },
    { name: "AWS EC2", category: "CLOUD INFRA", sub: "DAEMONS / PM2" },
    { name: "MONGODB", category: "NOSQL DATABASE", sub: "DOCUMENT STORE" },
    { name: "DOCKER", category: "CONTAINERIZATION", sub: "DEV ENV" },
    { name: "VERCEL", category: "EDGE NETWORK", sub: "CI/CD DEPLOY" },
    { name: "GIT / GITHUB", category: "VERSION CONTROL", sub: "PR WORKFLOWS" }
  ];

  return (
    <section
      id="ecosystem"
      className="relative min-h-screen bg-white text-black py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden border-b border-black/10 select-none"
    >
      <GridBackground theme="light" columns={8} />

      {/* Top Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-black/10 pb-4 text-xs font-mono tracking-widest text-neutral-500">
        <div className="flex items-center space-x-2">
          <Layers size={14} className="text-black" />
          <span>06 // TECH STACK & SYSTEM ECOSYSTEM</span>
        </div>
        <span className="bg-black text-white font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase">
          PRODUCTION ARSENAL
        </span>
      </div>

      {/* Symmetrical Architectural Grid with Centerpiece (Matching Screenshot 1) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column of Partner / Tech Logos */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {leftStack.map((item, idx) => (
              <div
                key={idx}
                className="group border border-black/10 p-4 bg-neutral-50 hover:bg-black hover:text-white transition-all duration-200 flex flex-col justify-between h-24"
              >
                <span className="font-display text-lg tracking-tight uppercase group-hover:text-brand-yellow transition-colors">
                  {item.name}
                </span>
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500 group-hover:text-neutral-400">
                  <span>{item.category}</span>
                  <span className="text-brand-yellow font-bold">›</span>
                </div>
              </div>
            ))}
          </div>

          {/* Centerpiece Column: High-Impact Visual Monolith Artifact (Matching Helmet in Screenshot 1) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-4">
            <div className="relative w-56 sm:w-64 md:w-72 aspect-square border-4 border-black bg-neutral-900 shadow-2xl flex flex-col items-center justify-between p-6 overflow-hidden">
              {/* Top Racing / Engineering Stripe */}
              <div className="w-full bg-brand-yellow text-black font-mono text-[10px] font-extrabold text-center py-1 tracking-widest uppercase">
                SYSTEM UNIT #98
              </div>

              {/* Graphic Emblem Center */}
              <div className="relative my-auto flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-brand-yellow flex items-center justify-center bg-black rotate-45 mb-4 shadow-lg">
                  <span className="font-display text-4xl text-white -rotate-45 font-extrabold tracking-tighter">
                    {portfolioData.developer.monogram}
                  </span>
                </div>
                <span className="font-display text-2xl text-white tracking-tight uppercase">
                  AKASH // FULL STACK
                </span>
                <span className="text-[10px] font-mono text-brand-yellow tracking-widest uppercase mt-0.5">
                  FORWARD DEPLOYMENT
                </span>
              </div>

              {/* Bottom Telemetry */}
              <div className="w-full border-t border-neutral-700 pt-2 flex items-center justify-between text-[9px] font-mono text-neutral-400">
                <span>LATENCY: &lt;50MS</span>
                <span className="text-brand-yellow">● ONLINE</span>
                <span>ZERO DRIFT</span>
              </div>
            </div>
          </div>

          {/* Right Column of Partner / Tech Logos */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {rightStack.map((item, idx) => (
              <div
                key={idx}
                className="group border border-black/10 p-4 bg-neutral-50 hover:bg-black hover:text-white transition-all duration-200 flex flex-col justify-between h-24"
              >
                <span className="font-display text-lg tracking-tight uppercase group-hover:text-brand-yellow transition-colors">
                  {item.name}
                </span>
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500 group-hover:text-neutral-400">
                  <span>{item.category}</span>
                  <span className="text-brand-yellow font-bold">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Concepts Category Strip */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-4">
            FORWARD DEPLOYMENT & ARCHITECTURE COMPETENCIES
          </span>
          <div className="flex flex-wrap gap-2">
            {skills.flatMap((s) => s.items).filter((v, i, a) => a.indexOf(v) === i).map((skill, idx) => (
              <span
                key={idx}
                className="text-xs font-mono bg-neutral-100 border border-black/10 px-3 py-1 text-neutral-800 hover:border-black transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>ALL TECHNOLOGIES DEPLOYED IN PRODUCTION ENVIRONMENTS</span>
        <span>MISSION-CRITICAL FORWARD DEPLOYMENT DISCIPLINE</span>
      </div>
    </section>
  );
};
