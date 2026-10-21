# Project Tasks

## Status legend
- `NOT_STARTED`
- `IN_PROGRESS`
- `BLOCKED`
- `COMPLETED`

## Current module
Module 32: Content-Wide Topward & Bottomward GSAP Scroll Parallax & Stationary Background Watermark Fix

## Task list

| ID | Module | Task | Status | Notes |
|---|---|---|---|---|
| 1 | Discovery & Stack | Reference visual analysis & Tech stack confirmation | COMPLETED | Approved: React 19 + Vite + TS + Tailwind + Framer Motion + GSAP |
| 2 | Foundation | Vite + TS + Tailwind CSS + Font setup & Design Tokens | COMPLETED | 0px radius, `#FDD60A`, condensed Anton & Oswald fonts |
| 3 | Data Layer | Centralized portfolio data schema & user provided data | COMPLETED | Integrated real data from `data (2).json` in `src/data/portfolioData.ts` |
| 4 | Core Components | Shared UI primitives (Buttons, Nav trigger, Grid Lines, Dividers) | COMPLETED | Strict 0px radius, hairline dividers |
| 5 | Navigation & Header | Editorial Header & Full-screen typographic navigation overlay | COMPLETED | Monogram mark, sharp yellow hamburger trigger, full-screen overlay |
| 6 | Hero Section | Dark Profile Stats & oversized focal number ("98") | COMPLETED | Matching Screenshot 3, high contrast, stats telemetry |
| 7 | Statement Section | Light Editorial Statement with yellow word highlights & flanking imagery | COMPLETED | Matching Screenshot 2, massive condensed typography |
| 8 | Curved Arc Gallery | Interactive orbital arc project gallery with drag & radial dial indicator | COMPLETED | Matching Screenshot 5, drag pill, radial dial speedometer |
| 9 | Timeline Section | Dark Schedule / Career timeline with vertically intersecting visual | COMPLETED | Matching Screenshot 4, tabular rows with center blueprint asset |
| 10 | Ecosystem Grid | Light Architectural Partners & Tech stack grid with center emblem | COMPLETED | Matching Screenshot 1, symmetrical multi-column layout |
| 11 | Case Studies | Deep-dive modal showcase for Nrithya Dances AI & YouTube automation | COMPLETED | Full architecture, metrics, challenges, and learnings |
| 12 | Contact & Footer | High-contrast contact modal/surface & spacious editorial footer | COMPLETED | Form validation, mailto fallback, multi-column footer |
| 13 | Verification | Responsive audit (mobile/tablet/desktop), SEO, performance | COMPLETED | Build verified (vite build passing with zero errors) |
| 14 | Landing Refinement | Remove focal 98, left stats, telemetry, adjust active stack & availability | COMPLETED | Clean 2-col editorial hero, 1+ yrs experience, available only |
| 15 | Hero Typography Cleanup | Remove AKASH from top left, EDITORIAL PORTFOLIO, quote, set AVAILABLE | COMPLETED | Clean minimalistic hero layout, verified build |
| 16 | Engagement Status Update | Update status to reflect active internship at Nrithya Dances | COMPLETED | Set to INTERNING AT NRITHYA DANCES |
| 17 | Developer Statement Tone | Refactor statement from QA/tester tone to software developer/architect | COMPLETED | "I'm driven by the craft of building..." |
| 18 | Transparent Navbar & Minimal Header | Transparent header, 'AD' monogram, yellow 2-bar square hamburger, removed 'Get in Touch', and streamlined menu overlay strictly to Overview, Philosophy, and Selected Works | COMPLETED | Removed 'Get in Touch', transparent fixed navbar, exact match to reference screenshot |
| 19 | Forward Deployed Engineer (FDE) Narrative | Reposition whole portfolio identity, bio, statement, case studies, metadata, and writings to FDE | COMPLETED | Ground-truth verification, frontline operational execution, production deployment tone |
| 20 | Frontend Developer → FDE Transition Calibration | Set current availability to Full Stack Developer at Nrithya Dances, position developer as Frontend Developer transitioning to FDE | COMPLETED | Restored Nrithya Dances full stack role, calibrated bio & statement to bridge frontend craftsmanship with FDE rigor |
| 21 | Core Philosophy Simplification & Landing Polish | Removed flanking images and bottom text from Section 02, reduced typography size for clean responsive balance, removed `// TARGET: FDE` from Hero active stack, and removed `FRONTEND DEVELOPER →` prefix from role and metadata. | COMPLETED | Clean minimalist central typography for Core Philosophy, clean landing coordinates and active stack |
| 22 | ArcGallery 100vh & Real Drag Physics | Fixed section to strict 100vh with no vertical scrolling needed, incorporated `<` and `>` buttons inside the viewport, added real drag gestures with rotation and elastic spring physics, and animated the speedometer dial. | COMPLETED | Active drag physics with swipe thresholds, animated speedometer dial, keyboard arrow support, strictly 100vh |
| 23 | Continuous Orbital Flow & Real Drag Across Cards | Continuous 3D orbital carousel flow, unified drag gesture across all cards and stage, left-to-center physics, and compact nav buttons. | COMPLETED | Synchronized card spring animations, sleek w-7/w-8 buttons, left-to-center physics, verified build |
| 24 | Transition to Full Stack Web Developer Everywhere | Remove Forward Deployed Engineer (FDE) and establish Full Stack Web Developer consistently across entire portfolio. | COMPLETED | Updated data, navigation drawer, footer, timeline, ecosystem grid, HTML metadata, and env configs |
| 25 | ScrollReveal Text Animation on Core Philosophy | Letter-by-letter unblur and opacity reveal on scroll (React Bits pattern) for Section 02 Core Philosophy | COMPLETED | Created reusable ScrollReveal component, mapped scroll progression across viewport entry, verified build |
| 26 | Compact Hamburger Icon & Kinetic Spring Text Reveal | Reduced top-right header hamburger icon footprint from 44px to sleek 30-32px square, and replaced blurry text reveal in Section 02 with lively letter-by-letter spring pop-up motion (y: 28px -> 0px, scale: 0.65 -> 1.0, rotate: -6deg -> 0deg) and interactive hover bounce. | COMPLETED | Compact w-8 hamburger button, letter-by-letter physical pop-up spring, angular settling, interactive hover physics |
| 27 | Background Watermark Typography | Added subtle PHILOSOPHY watermark typography in faint gray (text-neutral-100) behind the Core Philosophy statement. | COMPLETED | text-neutral-100 on white background, pointer-events-none, high-contrast legibility preserved |
| 28 | Framer Motion Viewport Fade-In | Engineered centralized motion system in `src/utils/motion.ts` with custom cubic-bezier `[0.16, 1, 0.3, 1]` curve. | COMPLETED | Smooth landing entrance animation, viewport fade-ins with once: true preservation |
| 29 | Core Philosophy 2-Column Layout with Portrait | Restructured Section 02 into an asymmetrical 12-column editorial grid with text on left and portrait on right. | COMPLETED | 12-col responsive grid, 0px radius, hover grayscale-to-color transition, mobile-responsive |
| 30 | Directional Animations & ArcGallery Controls Streamline | Multi-directional GPU-accelerated Framer animations across all sections; removed drag rectangle and yellow indicators; reduced navigation button sizes; kept hamburger compact. | COMPLETED | Zero-jank hardware-accelerated transforms, once: true viewport config, streamlined minimalistic controls |
| 31 | Apple-Style Clean Portrait & GSAP Scroll Parallax | Removed black border, yellow corner brackets, top telemetry overlay, bottom coordinate tag, and figure caption from the About portrait; added .apple-portrait-card styling; implemented GSAP ScrollTrigger bidirectional parallax across Statement, ArcGallery, Timeline, Ecosystem, and Hero. | COMPLETED | Pristine Apple product showcase aesthetics, silky smooth scroll scrub up/down, gsap.context lifecycle |
| 32 | Content-Wide Topward/Bottomward GSAP Parallax & Watermark Stabilization | Anchored Section 03 & Section 02 background watermarks to remain stationary; deployed multi-speed topward/bottomward GSAP parallax across Landing Page texts (bio, coordinates, telemetry blocks), Timeline career rows, Statement text, and Case Studies cards. | COMPLETED | Silky bidirectional inertia on actual content, zero background shift in ArcGallery, responsive & hardware-accelerated |

## Completed modules
- Module 1 (Discovery & Tech Stack Gate): Approved stack recorded in all documentation.
- Module 2 (Foundation & Setup): Vite + TS + Tailwind CSS + Fonts configured.
- Module 3 (Data Architecture): User's real experience, skills, projects, case studies, and education ingested.
- Modules 4-12 (Editorial Sections & UI Components): All 5 reference screenshot sections implemented faithfully.
- Module 13 (Verification & Git Remote): Production TypeScript build verified (`npm run build` exited with code 0) and pushed to GitHub remote.
- Module 14 (Landing Refinements): Removed 98 focal number, production telemetry, left side stats, kept ACTIVE STACK FULL STACK AND AI, updated to 1+ years experience.
- Module 15 (Hero Typography Cleanup): Removed AKASH from top left, removed EDITORIAL PORTFOLIO, removed release test quote.
- Module 16 (Engagement Status Update): Updated current availability across the site to "INTERNING AT NRITHYA DANCES".
- Module 17 (Developer Statement Tone): Replaced QA/tester tone with software developer/architect statement focusing on craft, systems, and performance.
- Module 18 (Transparent Navbar & Minimal Header): Created transparent navbar, 'AD' italic bold monogram with dynamic light/dark contrast, yellow 2-bar square hamburger, removed 'Get in Touch', and streamlined menu overlay strictly to Overview, Philosophy, and Selected Works.
- Module 19 (Forward Deployed Engineer Narrative): Repositioned role, bio, tagline, statement, case studies, experience, ecosystem grid, timeline, navigation matrix, and metadata to "Forward Deployed Engineer (FDE)".
- Module 20 (Frontend Developer → FDE Transition Calibration): Reverted Nrithya Dances roles to Full-Stack Developer Intern, set current availability to "FULL STACK DEVELOPER AT NRITHYA DANCES", and accurately positioned career narrative as a Frontend Developer with Full Stack foundations transitioning into Forward Deployed Engineering.
- Module 21 (Core Philosophy Simplification & Landing Polish): Removed flanking images and bottom text from Section 02, reduced typography size for clean responsive balance, removed `// TARGET: FDE` from Hero active stack, and removed `FRONTEND DEVELOPER →` prefix from role and metadata.
- Module 22 (ArcGallery 100vh & Real Drag Physics): Fixed section to strict 100vh with no vertical scrolling needed, incorporated `<` and `>` buttons inside the viewport, added real drag gestures with rotation and elastic spring physics, and animated the speedometer dial.
- Module 23 (Continuous Orbital Flow & Real Drag Across Cards): Implemented simultaneous 3D orbital carousel animation, unified drag gesture across all cards and stage, left-to-center physics, and compact nav buttons.
- Module 24 (Full Stack Web Developer Everywhere): Completely removed Forward Deployed Engineer (FDE) and replaced with Full Stack Web Developer across all portfolio data, metadata, navigation, footer, timeline, and ecosystem grid.
- Module 25 (ScrollReveal Text Animation on Core Philosophy): Built React Bits-inspired ScrollReveal component featuring progressive letter-by-letter unblur, subtle translateY settling, and opacity reveal scrubbed continuously by user scroll position.
- Module 26 (Compact Hamburger Icon & Kinetic Spring Text Reveal): Reduced top-right header hamburger icon footprint to sleek 32px square, and replaced blurry text reveal in Section 02 with lively letter-by-letter spring pop-up motion (y: 28px -> 0px, scale: 0.65 -> 1.0, rotate: -6deg -> 0deg) and interactive hover bounce.
- Module 27 (Background Watermark Typography): Added subtle PHILOSOPHY watermark typography in faint gray (text-neutral-100) behind the Core Philosophy statement, matching the architectural watermark aesthetic of Section 03 while preserving foreground legibility and 0px radius design language.
- Module 28 (Framer Motion Viewport Fade-In): Engineered centralized motion system in `src/utils/motion.ts` with custom cubic-bezier `[0.16, 1, 0.3, 1]` curve. Applied smooth landing entrance animation to HeroProfile and Header, and seamless viewport fade-in transitions (`whileInView`) across Core Philosophy, Selected Works, Career Timeline, Production Case Studies, Tech Ecosystem, and Editorial Footer with `once: true` preservation.
- Module 29 (Core Philosophy 2-Column Layout with Portrait): Restructured Section 02 into an asymmetrical 12-column editorial grid. Positioned the kinetic spring ScrollReveal text on the left (`lg:col-span-7 xl:col-span-8`, `text-left`) and placed the user's uploaded portrait on the right (`lg:col-span-5 xl:col-span-4`) encased in a sharp 0px border-radius frame with yellow telemetry accents, subject identification tags, and interactive grayscale-to-color hover transition.
- Module 30 (Directional Animations & ArcGallery Controls Streamline): Maintained small 30-32px header hamburger icon; removed drag rectangle button and yellow indicators from Section 03; reduced navigation button sizes to compact `w-6 h-6 sm:w-6.5 sm:h-6.5` squares; deployed GPU-accelerated multi-directional Framer Motion animations (sliding up/down and left/right) across all sections with hardware acceleration and single-fire viewport triggers (`once: true`) for butter-smooth performance.
- Module 31 (Apple-Style Clean Portrait & GSAP Scroll Parallax): Removed black border, yellow corner brackets, top telemetry overlay, bottom coordinate tag, and figure caption from the About portrait; added `.apple-portrait-card` with clean Apple-style drop shadows and luxurious grayscale-to-color hover transition; deployed bidirectional GSAP ScrollTrigger parallax on the portrait and across background watermarks, timeline blueprint, and tech monolith for fluid scroll depth when moving up and down.
- Module 32 (Content-Wide Topward/Bottomward GSAP Parallax & Watermark Stabilization): Anchored Section 03 & Section 02 background watermarks to remain stationary; deployed multi-speed topward/bottomward GSAP parallax across Landing Page texts (bio, coordinates, telemetry blocks), Timeline career rows, Statement text, and Case Studies cards.

## Current blockers
- None.

## Next continuation point
User review of live development server at `http://localhost:3000/`, followed by optional production hosting deployment on Vercel.

## Verification
- Build: PASSED (`tsc -b && vite build` completed with 0 errors)
- Lint: PASSED (strict type checking enabled)
- Git Remote: Pushed to `origin/main` (https://github.com/akashad123/akash-portfolio)
- Tests: N/A (static UI with local validation)
- Responsive: Built with Tailwind mobile-first breakpoints (sm/md/lg/xl)
- SEO: Semantic HTML, OpenGraph, Twitter, and JSON-LD structured schema
