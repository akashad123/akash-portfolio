# Project Memory

This file is the persistent handoff record for the project.

## Current state
- Current phase: Development & Verification Complete
- Current module: Completed Modules 1–65
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
  29. Pure Neutral 3D Dual-Orbit Exact Match (Module 63):
     - Completely calibrated Section 06 (`EcosystemGrid.tsx`) to match the latest reference image (`media_1792766915436_d3f07557.png`):
       - Subtle neutral connecting orbit lines (`border border-neutral-300/80`), removing all bright golden rings, yellow dots, dashed circles, and crosshairs.
       - Inner Ring features exactly 8 items: `Full Stack Architecture`, `Multimodal AI`, `Operational Troubleshooting`, `Zero-Downtime Reliability`, `Rate Limiting`, `REST APIs`, `Antigravity`, and `Performance Profiling`.
       - Outer Ring features exactly 19 technologies: `React.js`, `JavaScript`, `Tailwind CSS`, `Node.js`, `Express.js`, `Python`, `PostgreSQL`, `MongoDB`, `MySQL`, `AWS EC2`, `Supabase`, `Bootstrap`, `Sass`, `Vite`, `Git / GitHub`, `GitHub Actions`, `Google Gemini API`, `ChatGPT`, and `Claude`.
       - Soft rounded `.orbit-card` design with soft shadows and upright 3D billboarding facing the user.
       - GSAP ScrollTrigger bidirectional scrub (`scrub: 1.2`): smoothly orbits both rings on scroll down and scroll up.
  30. Landing Hero Editorial Portrait & Serif Typography (Module 64):
     - Ingested user's raw high-res portrait image (`media_1792769621579_7fa9a59b.jpg`) and prepared clean transparent cutout with anti-aliasing in `public/images/akash-hero-portrait.png`.
     - Integrated luxury `Bodoni Moda` serif masthead typography behind the portrait with 5 evenly spaced, crystal clear letters: **A - K - A - S - H** (resolving previous letter clarity and alignment issues).
     - Layered subtle white stroke outline (`text-stroke-white`) where letters intersect the subject's suit for a magazine cover depth effect.
     - Retained all required writings:
       - Location with yellow `MapPin` (`Kerala, India`).
       - Role at top right (`FULL STACK WEB DEVELOPER`).
       - `DEPLOY CONTRACT` action button with sharp 0px corners and yellow accent.
       - Bio narrative paragraph with full stack & AI expertise and immediate real-world impact.
       - `ACTIVE STACK`: `FULL STACK AND AI`.
       - `EXPERIENCE`: `1+ YEARS IN SOFTWARE DEVELOPMENT`.
       - `CURRENT AVAILABILITY`: `FULL STACK DEVELOPER AT NRITHYA DANCES` with live pulsing yellow ping indicator.
       - Bottom telemetry bar with terminal icon.
     - **Strict Zero-Overlap Architecture**:
       - Desktop (>= 1024px): 3-column flanking architecture with Bio + CTA strictly in the left flank and Telemetry blocks strictly in the right flank, leaving a 200–360px clear buffer on either side of Akash's portrait.
       - Tablet & Mobile (< 1024px): Clear vertical flow where the portrait and `AKASH` typography have their own dedicated stage, and all bio text, CTA, and telemetry blocks sit cleanly underneath, guaranteeing zero text overlaps the portrait on any screen size.
  31. Strict 100vh Landing Hero Calibration (Module 65):
     - Constrained Section 01 (`HeroProfile.tsx`) strictly to `h-screen max-h-screen h-[100dvh] max-h-[100dvh]` so all landing elements fit 100% inside the viewport on initial page load without vertical scrolling.
     - Top coordinates bar (`Kerala, India` with `MapPin` and `FULL STACK WEB DEVELOPER`) anchored cleanly at top.
     - Middle stage converted to `flex-1 min-h-0` with portrait height dynamically capped at `max-h-[64vh]-max-h-[74vh]` so it scales proportionally to available viewport height on compact laptop screens (e.g. 1024x576) as well as larger 1080p monitors.
     - Bottom telemetry bar (`>_ MERN // GEMINI API // SUPABASE // AWS EC2`) strictly anchored at the bottom with `shrink-0` and compact padding (`pt-2 sm:pt-2.5 pb-0.5`).
     - Verified smooth transition on scroll down: Section 02 (`StatementSection` / Core Philosophy) seamlessly enters the viewport as user scrolls.
- Connected GitHub remote: `https://github.com/akashad123/akash-portfolio.git` and pushed branch `main`.

## In-progress work
- Live preview active on local port 3000.

## Important decisions
- Centralized data layer in `src/data/portfolioData.ts` adhering strictly to user's provided JSON data.
- Enforced `border-radius: 0px` globally across all components, with `.orbit-card` scoped to match reference screenshot pills.
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
User review on live mobile, tablet, and desktop devices, followed by Vercel deployment update.

## Last verification
- Date: 2026-10-23
- Build: PASSED (`tsc -b && vite build` completed with 0 errors)
- Git Remote: PASSED (`main` branch synced with `https://github.com/akashad123/akash-portfolio.git`)
- Tests: PASSED
- Responsive: Scaled across mobile (< 480px, < 768px), tablet (768px - 1024px), and desktop (1024px+)
- SEO: Semantic HTML, OpenGraph, Twitter, and JSON-LD structured schema
