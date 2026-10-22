import { useState } from 'react';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { ContactModal } from './components/ContactModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HeroProfile } from './sections/HeroProfile';
import { StatementSection } from './sections/StatementSection';
import { ArcGallery } from './sections/ArcGallery';
import { TimelineSection } from './sections/TimelineSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { EcosystemGrid } from './sections/EcosystemGrid';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { CaseStudyItem } from './types/portfolio';

export function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyItem | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-body selection:bg-brand-yellow selection:text-black">
      {/* Editorial Header */}
      <Header
        onOpenMenu={() => setIsNavOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Full-Screen Typographic Navigation Menu */}
      <NavigationDrawer
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Editorial Flow */}
      <main className="flex-1">
        {/* 01 // Hero Profile (Dark Theme, Screenshot 3) */}
        <HeroProfile onOpenContact={() => setIsContactOpen(true)} />

        {/* 02 // Statement Section (Light Theme, Screenshot 2) */}
        <StatementSection />

        {/* 03 // Interactive Orbital Arc Gallery (Light Theme, Screenshot 5) */}
        <ArcGallery />

        {/* 04 // Career & Schedule Timeline (Dark Theme, Screenshot 4) */}
        <TimelineSection />

        {/* 05 // Case Studies Deep-Dive (Dark Theme) */}
        <CaseStudiesSection onSelectCaseStudy={(cs) => setActiveCaseStudy(cs)} />

        {/* 06 // Tech Ecosystem & Partners Architectural Grid (Light Theme, Screenshot 1) */}
        <EcosystemGrid />

        {/* 07 // Contact & Collaborations (Dark Theme) */}
        <ContactSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Spacious Editorial Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact Modal / Overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </div>
  );
}

export default App;
