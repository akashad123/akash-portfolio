# Project Memory

This file is the persistent handoff record for the project.

## Current state
- Current phase: Development & Verification Complete
- Current module: Completed Modules 1–61
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
     - Removed drag rectangle button and yellow indicators from Section 03 (`ArcGallery`).
     - Reduced size of left/right slide square buttons (`w-6 h-6 sm:w-6.5 sm:h-6.5`, 12px chevron icons).
     - Added GPU-accelerated directional Framer Motion animations across all sections (sliding up/down and left/right) with hardware acceleration and single-fire viewport triggers (`once: true`) for butter-smooth performance.
  15. Apple-Style Clean Portrait & GSAP Scroll Parallax:
     - Stripped the harsh black outline, telemetry tags, coordinate badges, and caption from the About portrait.
     - Added `.apple-portrait-card` class with pristine Apple-like styling: subtle drop shadow, zero harsh outlines, clean framing, and grayscale-to-color hover transition.
  16. Content-Wide Topward/Bottomward GSAP Parallax & Watermark Stabilization (Module 32):
     - Anchored Section 03 (`GALLERY`) and Section 02 (`PHILOSOPHY`) background watermarks to remain stationary and calm, resolving distracting scroll translation.
     - Created reusable `initGsapMultiParallax` helper in `src/utils/gsapParallax.ts` managing `gsap.context()` for React 19 StrictMode safety.
     - Deployed bidirectional (topward and bottomward) GSAP ScrollTrigger parallax scrub across content (Hero texts, Timeline rows, Statement text, Case Studies cards, Ecosystem stacks).
  17. Full-Bleed Carousel Slides & Interactive Details-On-Demand (Module 33):
     - In Section 03 (`ArcGallery.tsx`), expanded project imagery to cover 100% of the slide area edge-to-edge (`absolute inset-0 w-full h-full object-cover`), eliminating small header banners and white card margins.
     - In the default carousel display state, all bullet points, descriptions, and tech stack tags are hidden, keeping the presentation clean, bold, and image-centric with high-contrast title typography and category tags.
     - On user interaction (clicking the center card or clicking `[ + ] VIEW DETAILS`), an editorial slide-up panel animates smoothly over the card revealing full project architecture, bullet points, tech stack tags, and action buttons (`LIVE APP ↗`, `GITHUB ↗`, `✕ HIDE`).
  18. Career Timeline Minimalist Clean & Education Highlighting (Modules 40-43):
     - Structured full chronological career and education milestones.
     - Vertically aligned titles and subtitles with generous padding and spacing.
  19. Statement Display Typography & Kinetic ScrollReveal (Module 44):
     - Unified both statement passages into cohesive bold display typography.
  20. Landing Minimalist Streamlining (Module 45):
     - Removed 'SCROLL TO DISCOVER' and top logo.
  21. Case Studies Authentic Plain-Paragraph Narrative (Modules 48-50):
     - Integrated authentic AI Teacher Scoring and Zoom-to-YouTube automation narratives.
     - Removed corporate badges, metric cards, and card action links for pure storytelling.
  22. Skills Section Refinement (Modules 51 & 55):
     - Stripped non-core frameworks and EJS, keeping verified production stack.
  23. Contact Section & Channels Restoration (Modules 52-54):
     - Restored Section 07 with direct communication channels.
  24. Horizontal Pinned Scroll Gallery (Module 56):
     - Replaced 3D carousel with GSAP ScrollTrigger pinned horizontal scroll experience.
  25. Socials Calibration & UI Cleanup (Module 57):
     - Linked real LinkedIn URL and direct email.
  26. Contact Section & Footer Reference Image Alignment (Module 59):
     - Replicated exact visual composition from reference screenshot `media_1792683432536_b024e4a0.png`.
  27. Kerning Calibration & Small Button Footprint (Module 60):
     - Solved glyph collision in "LET'S BUILD": eliminated negative tracking that caused 'L', 'E', 'T', apostrophe, 'S', 'B', 'U', 'I', 'L', 'D' to overlap; applied positive `tracking-[0.05em] sm:tracking-[0.06em]` and separate spans with `gap-x-4 sm:gap-x-6` so all letters have distinct, crisp spacing.
     - Restored small button footprints for `START AN ENGAGEMENT` (`px-2.5 sm:px-3 py-1 text-[10px]`) and `DIRECT INQUIRY` (`px-2.5 py-1 text-[10px]`).
  28. Mobile Vertical Feed, Desktop Horizontal Scrub & Heading Cleanup (Module 61):
     - Mobile (< 768px): Disabled horizontal scroll/pinning completely. Project cards render in a clean vertical feed flowing downwards one by one, enabling native, touch-friendly, 60fps mobile scrolling.
     - Tablet & Desktop (>= 768px): Utilized `gsap.matchMedia('(min-width: 768px)')` with calibrated scroll distance (`track.scrollWidth - window.innerWidth + 120`) eliminating dead zones, stuck pins, or touch fighting.
     - Case Studies: Removed duplicate `<h2>CASE STUDIES</h2>` block in Section 05 (`CaseStudiesSection.tsx`), aligning with the clean subheader style of Sections 02 and 03.
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
- `src/sections/ContactSection.tsx`
- `src/sections/Footer.tsx`
- `src/components/Header.tsx`
- `src/components/NavigationDrawer.tsx`
- `src/components/ContactModal.tsx`
- `src/components/CaseStudyModal.tsx`
- `src/utils/gsapParallax.ts`

## Next exact step
User review on live mobile and desktop devices, followed by Vercel deployment update.

## Last verification
- Date: 2026-10-23
- Build: PASSED (`tsc -b && vite build` completed with 0 errors)
- Git Remote: PASSED (`main` branch synced with `https://github.com/akashad123/akash-portfolio.git`)
- Tests: PASSED
- Responsive: Verified across mobile (< 768px vertical feed) and tablet/desktop (>= 768px horizontal scrub)
- SEO: Verified in `index.html` with full meta tags and JSON-LD schema
