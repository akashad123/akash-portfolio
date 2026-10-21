# Project Memory

This file is the persistent handoff record for the project.

## Current state
- Current phase: Development & Verification Complete
- Current module: Completed Modules 1–30
- Overall status: Ready for Review & Deployment

## Last completed work
- Analyzed all reference screenshots (`nickho-motorsports.nl/#media`) and confirmed tech stack.
- Ingested all user data from `data (2).json`.
- Configured React 19 + Vite + TypeScript + Tailwind CSS with strict `border-radius: 0px` tokens and `#FDD60A` yellow accent.
- Built all reference sections: HeroProfile, StatementSection, ArcGallery, TimelineSection, CaseStudiesSection, EcosystemGrid, Footer, Header, and modals.
- Executed landing page hero cleanups:
  1. Removed `AKASH` from top-left of landing hero.
  2. Removed `EDITORIAL PORTFOLIO` from top bar.
  3. Removed `EVERY RELEASE IS A TEST, NOT JUST OF SYNTAX` quote text.
  4. Implemented transparent navbar with 'AD' monogram and yellow 2-bar hamburger.
  5. Calibrated career identity:
     - Role: `FULL STACK WEB DEVELOPER`.
     - Current Role & Availability: `FULL STACK DEVELOPER AT NRITHYA DANCES`.
     - Active Stack: `FULL STACK AND AI`.
  6. Simplified Section 02 (Core Philosophy):
     - Removed left and right flanking image columns completely.
     - Removed mobile image cards completely.
     - Removed bottom "Akash Frontend" line and divider.
     - Reduced text size of the central statement to a clean, balanced `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` with `leading-snug sm:leading-tight`.
  7. Optimized Section 03 (ArcGallery):
     - Constrained strictly to `100vh` (`h-screen max-h-screen overflow-hidden`) so the entire layout fits in the viewport without vertical scrolling.
     - Incorporated navigation buttons `<` and `>` directly within the 100vh viewport alongside the interactive speedometer dial.
     - Implemented true continuous 3D orbital carousel flow: all 3 project cards are simultaneously rendered and smoothly spring-animated between left flank, center prominence, and right flank based on dynamic circular offsets (`diff = -1, 0, 1`).
     - Enabled universal horizontal gesture dragging across the entire orbital track, the cards, and the floating `DRAG ⇄` badge.
     - Implemented precise directional mechanics: clicking the right button `>` or dragging to the right glides the center card (LifeOS) to the right flank and brings the left card (RedConnect) into the center. Clicking `<` or dragging left brings the right card (HireFlow AI) into the center.
     - Clicking on flank cards directly rotates them into the center.
     - Reduced navigation button sizes to sleek, compact `w-6 h-6 sm:w-6.5 sm:h-6.5` with crisp 12px icons.
  8. Transitioned to Full Stack Web Developer Everywhere:
     - Removed Forward Deployed Engineer (FDE) and positioned developer as Full Stack Web Developer across all data objects, hero metadata, navigation overlay, footer identity badge, timeline badges, skills categories, and HTML/JSON-LD meta tags.
  9. Implemented ScrollReveal Text Animation on Core Philosophy (React Bits Pattern):
     - Created `src/components/ScrollReveal.tsx` featuring letter-by-letter unblur, progressive opacity cascade, and subtle vertical settling driven directly by user scroll progression across viewport entry.
     - Preserved editorial highlight badges (`text-brand-yellow bg-black px-2 sm:px-2.5 py-0.5 inline-block mx-1 my-1`), illuminating yellow letters on black sequentially as the user scrolls.
  10. Compact Hamburger Icon & Kinetic Spring Text Reveal:
     - Reduced top-right header hamburger icon footprint from 44px to sleek 30-32px (`w-7.5 h-7.5 sm:w-8 sm:h-8`) with 14px bars (`w-3.5`) and 3.5px gap.
     - Re-engineered `src/components/ScrollReveal.tsx` to eliminate CSS blur and deliver a lively, physical spring motion reveal.
     - Each letter pops up from below (`y: 28px` -> `0px`, `scale: 0.65` -> `1.0`, `rotateZ: -6deg` -> `0deg`, `opacity: 0` -> `1.0`) with authentic spring physics (`stiffness: 260, damping: 14`).
     - Added interactive hover bounce (`scale: 1.22, y: -4, rotateZ: 2`) when sweeping the cursor across revealed letters.
  11. Background Watermark Typography in Core Philosophy:
     - Added subtle `PHILOSOPHY` watermark typography in faint gray (`text-neutral-100`) at `z-0` behind the central statement in Section 02.
     - Blends seamlessly with the `GridBackground` and matches the architectural watermark aesthetic of `GALLERY` in Section 03 while preserving strict foreground readability and non-intrusive layering (`pointer-events-none`).
  12. Framer Motion Viewport Fade-In Across Entire Flow:
     - Created `src/utils/motion.ts` with custom cubic-bezier `[0.16, 1, 0.3, 1]` editorial curves.
  13. Core Philosophy 2-Column Layout with Portrait:
     - Placed the user's uploaded high-res portrait in Section 02 on the right side encased in a sharp 0px border-radius editorial frame (`aspect-[3/4]`, yellow telemetry corner accents, and hover color-reveal).
     - Moved the kinetic spring ScrollReveal statement to the left side (`text-left`, `lg:col-span-7 xl:col-span-8`), maintaining responsive stacking on mobile viewports.
  14. Multi-Directional High-Performance Framer Animations & Control Streamlining:
     - Sized hamburger icon strictly small in navbar (`w-7.5 h-7.5 sm:w-8 sm:h-8`, `w-3.5` bars).
     - Removed drag rectangle button (`DRAG ⇄`) and yellow rectangle tick indicators from Section 03 (`ArcGallery`).
     - Reduced size of left/right slide square buttons (`w-6 h-6 sm:w-6.5 sm:h-6.5`, 12px chevron icons).
     - Added GPU-accelerated directional Framer Motion animations across all sections:
       - `HeroProfile`: top header down, left bio from left, right stack from right, bottom telemetry up.
       - `StatementSection`: header down, left statement from left, right portrait from right, bottom coordinate up.
       - `ArcGallery`: header down, orbital cards up, compact buttons up, bottom coordinates up.
       - `TimelineSection`: header down, blueprint artifact scale, rows staggered up, bottom coordinates up.
       - `CaseStudiesSection`: header down, intro from left, cards staggered up, bottom coordinates up.
       - `EcosystemGrid`: header down, left stack from left, center monolith scale, right stack from right, skills strip up.
       - `Footer`: CTA up, column 1 from left, column 2 up, column 3 from right, bottom credits up.
       - All with `viewport={{ once: true, amount: 0.1 }}` and hardware-accelerated transforms (`transform`, `opacity`) ensuring zero performance degradation or scroll jank.
- Verified production build (`tsc -b && vite build`) with zero errors.
- Connected GitHub remote: `https://github.com/akashad123/akash-portfolio.git` and pushed branch `main`.

## In-progress work
- Live preview active on local port 3000.

## Important decisions
- Centralized data layer in `src/data/portfolioData.ts` adhering strictly to user's provided JSON data.
- Enforced `border-radius: 0px` globally across all components.
- Mobile-first responsive hierarchy: 12-col desktop, 6-col tablet, 4-col mobile.

## Known constraints
- Strictly static architecture with serverless client-side email dispatch fallback.

## Known issues
- None.

## Files/components currently relevant
- `src/data/portfolioData.ts`
- `src/sections/HeroProfile.tsx`
- `src/sections/StatementSection.tsx`
- `src/components/ScrollReveal.tsx`
- `src/sections/ArcGallery.tsx`
- `src/sections/TimelineSection.tsx`
- `src/sections/CaseStudiesSection.tsx`
- `src/sections/EcosystemGrid.tsx`
- `src/components/Header.tsx`
- `src/components/NavigationDrawer.tsx`
- `src/components/ContactModal.tsx`
- `src/components/CaseStudyModal.tsx`
- `src/sections/Footer.tsx`

## Next exact step
User review of live development server at `http://localhost:3000/`, followed by optional production hosting deployment on Vercel.

## Last verification
- Date: 2026-10-21
- Build: PASSED (`tsc -b && vite build` completed with 0 errors)
- Git Remote: PASSED (`main` branch synced with `https://github.com/akashad123/akash-portfolio.git`)
- Tests: PASSED
- Responsive: Verified across mobile/tablet/desktop breakpoints
- SEO: Verified in `index.html` with full meta tags and JSON-LD schema
