# Project Memory

This file is the persistent handoff record for the project.

## Current state
- Current phase: Development & Verification Complete
- Current module: Completed Modules 1–44
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
     - Added GPU-accelerated directional Framer Motion animations across all sections (sliding up/down and left/right) with hardware acceleration and single-fire viewport triggers (`once: true`) for butter-smooth performance.
  15. Apple-Style Clean Portrait & GSAP Scroll Parallax:
     - Stripped the harsh black outline, telemetry tags, coordinate badges, and caption from the About section portrait.
     - Added `.apple-portrait-card` class with pristine Apple-like styling: subtle drop shadow, zero harsh outlines, clean framing, and grayscale-to-color hover transition.
  16. Content-Wide Topward/Bottomward GSAP Parallax & Watermark Stabilization (Module 32):
     - Anchored Section 03 (`GALLERY`) and Section 02 (`PHILOSOPHY`) background watermarks to remain stationary and calm, resolving distracting scroll translation.
     - Created reusable `initGsapMultiParallax` helper in `src/utils/gsapParallax.ts` managing `gsap.context()` for React 19 StrictMode safety.
     - Deployed bidirectional (topward and bottomward) GSAP ScrollTrigger parallax scrub across content (Hero texts, Timeline rows, Statement text, Case Studies cards, Ecosystem stacks).
  17. Full-Bleed Carousel Slides & Interactive Details-On-Demand (Module 33):
     - In Section 03 (`ArcGallery.tsx`), expanded project imagery to cover 100% of the slide area edge-to-edge (`absolute inset-0 w-full h-full object-cover`), eliminating small header banners and white card margins.
     - In the default carousel display state, all bullet points, descriptions, and tech stack tags are hidden, keeping the presentation clean, bold, and image-centric with high-contrast title typography and category tags.
     - On user interaction (clicking the center card or clicking `[ + ] VIEW DETAILS`), an editorial slide-up panel animates smoothly over the card revealing full project architecture, bullet points, tech stack tags, and action buttons (`LIVE APP ↗`, `GITHUB ↗`, `✕ HIDE`).
     - Created `src/components/ProjectDetailModal.tsx` providing a full-screen specification dialog accessible via the expand icon (`Maximize2`) in the details sheet.
     - Rotating left/right automatically collapses details to present the next incoming project with its full-bleed cover image first.
  18. Carousel Minimalist Controls & Borderless Refinement (Module 34):
     - Reduced `VIEW DETAILS` to a sleek, compact button (`h-6 px-2 sm:px-2.5 text-[9px] font-bold`).
     - Sized GitHub and Live demo buttons to matching compact dimensions (`w-6 h-6`, `size={11}` icons).
     - Removed top category/workspace badges (`project.tag`) and top year badges (`project.date`) from the top of the cards for complete visual minimalism.
     - Removed black outlines/borders from the carousel cards (`border-0` with clean ambient drop shadows).
  19. Background Watermark Calibration ('PROJECTS') (Module 35):
     - Updated Section 03 background watermark text from `GALLERY` to `PROJECTS`.
  20. Timeline Clutter Cleanup & Expanded 'PROJECTS' Watermark Spacing (Module 36):
     - Removed the intersecting central blueprint card (`98 FULL-STACK // AI`, `AKASH.ENGINEERING`) from Section 04 (`TimelineSection.tsx`), providing clean, unobscured visibility for career and academic entries.
  21. Tightened 'PROJECTS' Watermark Letter Spacing (Module 37):
     - Decreased letter spacing of the 'PROJECTS' watermark in Section 03 (`ArcGallery.tsx`) from the previous wide `[0.3em]` tracking to compact `tracking-tight` at `text-[16vw] sm:text-[18vw]`.
     - Preserved clear, elegant `text-neutral-200` visibility with a bold, cohesive typographic structure.
  22. Vertically Expanded Standing Title & Full Slide Control Streamline (Module 38):
     - Removed `VIEW DETAILS`, GitHub, and Live link buttons, as well as project subtitles from carousel slides in Section 03 (`ArcGallery.tsx`).
     - Transformed project titles (`ONAKKOOTTU`, `LIFEOS`, `REDCONNECT`) into massive vertically expanded typography standing from top to bottom (`writingMode: 'vertical-rl'`).
     - Positioned along the left edge with a subtle dark horizontal scrim (`bg-gradient-to-r from-black/85 via-black/40 to-transparent`), providing high contrast while keeping the rest of the full-bleed image open and clean.
     - Maintained interactive click-to-expand details panel on center card and flank navigation.
- Verified production build (`tsc -b && vite build`) with zero errors.
- Completed Module 39:
  1. Solid Flank Cards (100% Opacity): Set `cardVariants.left` and `cardVariants.right` and hover states to `opacity: 1`, preventing background watermark letters from bleeding through.
  2. Clean Slide Surface: Removed all `CLICK TO VIEW` prompt badges from flank cards.
  3. Architectural Editorial Navigation Dock: Replaced plain detached square buttons with an integrated editorial console dock with `PREV`, `01 / 03` counter, dynamic 3-bar progress segments, and `NEXT`, matching the portfolio's architectural aesthetic and sharp 0px border radius.
- Completed Module 40 (Career Timeline Layout Streamline & Clutter Removal):
  1. Removed 'ENTRY 01 —' and 'ENTRY 02 —' labels from the left side of career rows.
  2. Removed all center descriptions (`Currently working as a Full Stack Developer...`, `Engineered scalable web applications...`, `ACADEMIC FOUNDATION IN COMPUTER SCIENCE`).
  3. Formatted dates cleanly on the right: `Jul 2026 – Present` for Nrithya Dances, `Mar 2024 – Mar 2025` for Stratagile, and `2025 – 2027` for MCA.
  4. Restructured MCA education row: Main heading `Master of Computer Applications (MCA)`, with `Pursuing S4` stacked below in bold brand yellow, and `LEAD College, Palakkad` stacked below that in neutral-400.
  5. Removed bottom telemetry coordinate bar (`EXPERIENCE VERIFICATION AVAILABLE UPON REQUEST` and `PRODUCTION INCIDENT LOGS: ZERO`).
- Completed Module 41 (Full Chronological Timeline with Degree Graduation & MERN Internship):
  1. Integrated Bachelor of Science in Computer Science (`2020 – 2023`, University of Calicut).
  2. Integrated MERN Stack Intern at Luminar Technolab (`Jul 2023 – Feb 2024`) immediately following degree graduation.
  3. Structured all 5 milestones in chronological sequence: Nrithya Dances (`Jul 2026 – Present`) → MCA (`2025 – 2027`) → Stratagile (`Mar 2024 – Mar 2025`) → Luminar Technolab (`Jul 2023 – Feb 2024`) → B.Sc Graduation (`2020 – 2023`).
  4. Deployed 5-stage GSAP scroll parallax with bidirectional inertia and hover highlights across all rows.
- Completed Module 42 (Timeline Vertical Alignment & ArcGallery Minimalist Icon-Only Controls):
  1. Removed mortarboard graduation cap icons from Section 04.
  2. Aligned all 5 entries (titles, statuses, subtitles) to the exact same vertical left baseline with zero indent.
  3. Highlighted MCA and B.Sc Computer Science educations in `#ffe600` brand-yellow by default in their initial state.
  4. Removed the bottom coordinate bar from Section 03 (`ArcGallery`).
  5. Streamlined carousel controls to a sharp-edged dual-icon-only dock (`<` / `>`) with no labels, numerical counters, or indicators.
- Completed Module 43 (Timeline Row Spacing & Breathing Room Calibration):
  1. Increased row vertical padding to `py-6 sm:py-7 md:py-8` (24px–32px).
  2. Added inter-row spacing `space-y-2 sm:space-y-3` for distinct separation between each career/education entry.
  3. Expanded internal spacing below titles and between education status/institution.
- Completed Module 44 (Statement Display Typography & Kinetic ScrollReveal):
  1. Elevated the secondary philosophy statement (`"FROM POLISHED FRONTEND EXPERIENCES TO FULL-STACK SYSTEMS, I TURN COMPLEX IDEAS INTO RELIABLE, REAL-WORLD SOFTWARE. I FOCUS ON CLEAN INTERFACES, STRONG ARCHITECTURE, AND PRACTICAL SOLUTIONS THAT ARE FAST, RESILIENT, AND PRODUCTION-READY."`) into the exact same bold uppercase `font-display` display typography style as `"I BUILD DIGITAL PRODUCTS THAT ARE SIMPLE, FAST, AND BUILT TO SCALE."`.
  2. Enhanced `src/components/ScrollReveal.tsx` with a `breakBefore?: boolean` attribute on `TextSegment` to inject a responsive block spacer `<span className="block h-3 sm:h-5 w-full" aria-hidden="true" />` between sentences while maintaining seamless, continuous letter-by-letter scroll activation.
  3. Styled `"FAST, RESILIENT, AND PRODUCTION-READY."` with an identical black highlight badge (`text-brand-yellow bg-black px-2 sm:px-2.5 py-0.5 inline-block mx-1 my-1`).
  4. Preserved GSAP bidirectional scroll parallax scrub on both text and the Apple-style portrait, interactive cursor hover bounce on every individual letter, and strict 0px border-radius styling.
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
- `src/utils/gsapParallax.ts`

## Next exact step
User review of live development server at `http://localhost:3000/`, followed by optional production hosting deployment on Vercel.

## Last verification
- Date: 2026-10-21
- Build: PASSED (`tsc -b && vite build` completed with 0 errors)
- Git Remote: PASSED (`main` branch synced with `https://github.com/akashad123/akash-portfolio.git`)
- Tests: PASSED
- Responsive: Verified across mobile/tablet/desktop breakpoints
- SEO: Verified in `index.html` with full meta tags and JSON-LD schema
