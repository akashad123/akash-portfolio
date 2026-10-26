# Project Memory

This file is the persistent handoff record for the project.

## Current state
- Current phase: Development & Verification Complete
- Current module: Completed Modules 1–84
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
  32. Reference Image Exact Match & Wireframe 'A' Reconstruction (Module 66):
     - Analyzed newly uploaded reference image (`media_1792773021327_3d09a294.png`) and calibrated exact coordinates, element positions, and typographic styling.
     - Reconstructed middle letter 'A' as a clean, properly formed wireframe outline with crisp serifs matching 'S' (`text-stroke-white` with `-webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.95)` and `color: transparent`), resolving the broken/faint lines in the mockup.
     - Preserved solid white fill on 'A' (first), 'K', and 'H', and wireframe outline on 'A' (second) and 'S'.
     - Full-width top hairline divider running edge-to-edge below the top coordinates bar and hamburger trigger.
     - Positioned Bio text block and yellow `DEPLOY CONTRACT` button on left, and `ACTIVE STACK`, `EXPERIENCE`, and `CURRENT AVAILABILITY` (with yellow square marker `■`) on right with vertical border.
     - Anchored bottom telemetry bar with yellow `>_` terminal prompt.
  33. Exact User-Provided Portrait Image Ingestion (Module 67):
     - Ingested user's newly uploaded exact portrait image asset (`media_1792773869648_54083a6e.jpg`) directly into `public/images/akash-hero-portrait.png` and `public/images/akash-hero-portrait.jpg` (mirrored in `dist/images/`).
     - Preserved 100% untouched RGB pixel fidelity of Akash's face, curly hair, glasses, beard, and suit.
     - Seamlessly integrated with pure black `[0,0,0]` background and transparent alpha mapping for clear `AKASH` typography layering.
     - Removed artificial CSS contrast filters (`filter contrast-[1.05]`) to present the portrait with authentic tones as exported by the user.
  34. Elimination of Neck Artifacts & Direct Asset Restoration (Module 68):
     - Diagnosed dark mottled holes under the chin and throat in the browser screenshot: an automatic background flood-fill algorithm in the previous cutout step leaked across the dark collar shadow, erroneously converting ~27,000 neck pixels into transparent alpha holes and exposing the dark background/grid beneath the skin.
     - Replaced the cutout with the 100% authentic, untouched user portrait (`akash-hero-portrait.jpg` and updated `.png` with full solid alpha).
     - Throat and neck skin tones are now completely solid, smooth, and natural with 0 holes or blotches.
     - Perfectly blends with the pure black `#000000` page background while retaining clear visibility and layering of the Bodoni Moda serif `AKASH` masthead.
  35. Hero Bio & Bottom Stack Telemetry Decommissioning (Module 69):
     - Removed the entire bio paragraph ("I am a full stack web developer currently working at Nrithya Dances...") from desktop and mobile views, keeping exclusively the yellow `DEPLOY CONTRACT` action button on the left flank.
     - Removed the bottom telemetry bar ("MERN // GEMINI API // SUPABASE // AWS EC2") and its border container.
     - Enhanced vertical breathing room and aesthetic balance across desktop, laptop (1366x768), and mobile viewports.
  36. Silhouette Cutout & Grand Typography Scaling (Module 70):
     - Reconstructed a 100% backgroundless, transparent cutout PNG (`akash-hero-portrait.png`) by deriving row-by-row silhouette bounds `[c_min, c_max]` from the high-res uploaded image (`media_1792775421630_3245a889.jpg`).
     - Inside the silhouette: 100% solid alpha with untouched RGB, completely preventing any neck or throat transparency leaks.
     - Outside the silhouette: 100% transparent alpha with 1px smooth antialiasing, completely eliminating the black rectangular box that previously occluded the letters `K`, `A`, and `S`.
     - Scaled up the Bodoni Moda serif `AKASH` typography to `text-[16vw] lg:text-[15.5vw] xl:text-[175px] 2xl:text-[200px]` on desktop and `text-[21vw]` on mobile for massive editorial presence.
     - Scaled up the portrait height dynamically to `max-h-[78vh] xl:max-h-[84vh] 2xl:max-h-[88vh]` on desktop and `h-[46vh] sm:h-[52vh] md:h-[58vh]` on mobile.
     - Verified with Playwright across 1080p, 768p laptop, and mobile; production build passed with 0 errors.
  37. Top Role Removal & Foreground Wireframe 'A' Outline (Module 71):
     - Removed `FULL STACK WEB DEVELOPER` from top right coordinates bar, leaving only `Kerala, India` with MapPin on the left and the hamburger navigation trigger on the right.
     - Deployed a dedicated foreground wireframe stroke layer at `z-25` across both desktop and mobile, ensuring the middle letter `A` is 100% visible in the exact wireframe outline style of `S`.
     - Because `A` has transparent fill and an enhanced `1.8px` crisp white stroke, Akash's curly hair and forehead remain completely visible through the letter while the wireframe stroke outlines across his silhouette.
     - Verified with Playwright and built cleanly (`tsc -b && vite build` in 7.48s).
  38. Portrait Removal & Pure 'AKASH AD' Typographic Hero (Module 72):
     - Removed the portrait photo, portrait refs, and overlay stroke layers from the landing hero section.
     - Transformed the masthead into a bold, pure typographic architectural presentation reading `AKASH AD`.
     - Word grouping preserves distinct spacing: `AKASH` (`A`, `K`, wireframe `A`, wireframe `S`, `H`) and `AD` (wireframe `A`, solid `D`).
     - Aligned with `DEPLOY CONTRACT` button on the left flank and telemetry stack on the right flank within strict 100vh ingress.
     - Verified with Playwright across 1080p, 768p laptop, and mobile; production build passed with 0 errors.
  39. Pure Minimalist Hero - Centered Akash AD & Telemetry Strip (Module 73):
     - Clarified requirements through interactive alignment: user requested removing all bottom telemetry clutter (`ACTIVE STACK`, `EXPERIENCE`, `CURRENT AVAILABILITY`, `DEPLOY CONTRACT`) and creating a centered, elegant, minimalist landing page.
     - Reconstructed the hero section into a clean, unified viewport presentation:
       - Top Bar: `Kerala, India` with MapPin on left and hamburger button on right.
       - Center Stage: Bold, elegant, timeless `AKASH AD` typography in luxury Bodoni Moda serif (`text-6xl` to `2xl:text-[165px]`), yellow `#FDD60A` architectural accent line, and `FULL STACK WEB DEVELOPER` uppercase monospace tracking subtitle.
       - Bottom Prompt: Subtle, elegant `SCROLL TO EXPLORE ↓` prompt guiding users into Section 02.
     - Verified optically centered placement across 1080p, 768p laptop, and mobile viewports with Playwright; production build passed with 0 errors.
   40. Hero Scroll Prompt Removal & ArcGallery Centered Dwell Calibration (Module 74):
      - Completely removed scroll to explore prompt from HeroProfile.tsx for an uncluttered, pure typographic landing hero.
      - Calibrated Section 03 (ArcGallery.tsx) horizontal pinned track travel:
        - Replaced restrictive right padding with responsive mathematical formula: md:pr-[26vw] lg:pr-[calc(50vw-min(20vw,300px))]. This ensures the final project card (ONAKKOOTTU) travels until its center is located precisely at 50vw (exact center/half of the viewport) with LIFEOS peeking on the left.
        - Upgraded GSAP ScrollTrigger animation from a single tween to a two-phase gsap.timeline():
          - Phase 1 (glide): Horizontal scrub translating track to the exact centered position of Onakkoottu.
          - Phase 2 (dwell): A dedicated pinned dwell period (duration: 0.6 / 1800px+ vertical scroll travel) keeping Onakkoottu centered and in focus while user scrolls down, before the section unpins and the page scrolls down into Section 04.
        - Updated progress bar and counter mapping with glideRatio = 1 / 1.6 so progress reflects 100% and stays active throughout the dwell period.
      - Verified across desktop (1920x1080), laptop (1366x768), and mobile (375x812); build passed with 0 errors.
   41. ArcGallery Minimalist Cards, Stationary Background & Landing Hero Enrichment (Module 75):
      - Cleaned up Section 03 (ArcGallery.tsx) cards: stripped all top tag badges, date tags, subtitles, tech pills, and buttons across both desktop and mobile; now each card strictly features the bold vertical title (REDCONNECT, LIFEOS, ONAKKOOTTU) and the full-bleed image with ambient scrim.
      - Stationary background: removed GSAP translation on watermarkRef and gridRef so the architectural background text 'PROJECTS' remains completely static and never shifts to the left during scroll.
      - Smooth unpin transition: removed the artificial pinned dwell pause so as soon as Onakkoottu glides to the center, continuing to scroll down immediately transitions down into Section 04 without delay.
      - Enriched Landing Hero (HeroProfile.tsx):
        - Top Coordinates Bar: added Kerala coordinates (11.2588° N, 75.7804° E) and a live pulsing availability status beacon ('AVAILABLE FOR SELECT ROLES') with generous right margin.
        - Center Stage: augmented AKASH AD with the developer role, an editorial mission statement ('BUILDING RESILIENT WEB SYSTEMS & BESPOKE INTERACTIVE EXPERIENCES'), and an interactive, glowing 'DEPLOY CONTRACT →' CTA button wired directly to onOpenContact.
        - Bottom Telemetry Dock: anchored the bottom of the 100vh viewport with active stack focus, current engagement status, and software architecture experience.
      - Verified across desktop (1920x1080), laptop (1366x768), and mobile (375x812); build passed with 0 errors.
   42. Landing Hero Polish - Telemetry Consolidation & Compact CTA (Module 76):
      - Removed 'AVAILABLE FOR SELECT ROLES' status beacon from the top bar for a pure, distraction-free coordinates header (location + geographical coordinates).
      - Removed 'BUILDING RESILIENT WEB SYSTEMS...' mission statement from the center stage.
      - Re-engineered the 'DEPLOY CONTRACT →' CTA button to be sleek and compact (`text-[10px] sm:text-[11px]`, `px-3.5 sm:px-4 py-1.5 sm:py-2`, sharp 0px border radius, subtle hover glow).
      - Relocated STACK, CURRENT, and EXP telemetry directly above the deploy contract button in a unified, centered monospace row with clean wrapping behavior across mobile and desktop.
      - Maintained optical vertical balance in strict 100vh viewport; production build passed with 0 errors.
   43. Landing Hero Top Bar Polish - Isolated Location Display (Module 77):
      - Removed the coordinate text (`// 11.2588° N, 75.7804° E`) next to 'Kerala, India' in `HeroProfile.tsx`.
      - Top bar now purely and cleanly presents the yellow MapPin icon and `Kerala, India` on the left flank, and the yellow hamburger navigation trigger on the right flank.
      - Verified across desktop and mobile; production build passed with 0 errors.
   44. Landing Hero Typography - Kinetic Letter Spring Animation (Module 78):
      - Transformed 'AKASH AD' into an interactive typography system:
        - Each individual character is rendered as an independent `motion.span` using Framer Motion spring physics.
        - Hovering over a letter triggers a smooth vertical pop (`y: -14px`), subtle scale (`1.1x`), illumination into brand yellow (`#FDD60A`), and a luminous drop shadow with authentic spring settling (`stiffness: 500, damping: 14`).
        - Sweeping the cursor across the name creates a tactile, fluid kinetic wave.
        - Mobile touchscreen taps deliver responsive tactile feedback (`whileTap={{ scale: 0.9, color: '#FDD60A' }}`).
        - Added interactive expand motion to the yellow accent divider below the name.
      - Verified across desktop (1366x768) and mobile (375x812); production build passed with 0 errors.
   45. Tech Stack Ecosystem - Row and Column Grid Transformation (Module 79):
      - Replaced the rotating 3D circular orbit rings in Section 06 (`EcosystemGrid.tsx`) with a clean, responsive row-and-column grid.
      - Preserved the user's requested curved rectangle styling (`.orbit-card` with `border-radius: 12px`, subtle border, white background, authentic SVG icons, and typography).
      - Features the core existing skills (AWS EC2, MySQL, PostgreSQL, MongoDB, Supabase, React.js, TypeScript, JavaScript, Node.js, Express.js, Python, Tailwind CSS, Google Gemini API, REST APIs, Socket.IO, GitHub Actions, Git / GitHub, Vite, Claude, ChatGPT, Bootstrap, Sass, PM2, Antigravity) totaling 24 cards.
      - Arranged in an exact symmetric grid:
        - 6 columns on large desktop (4 rows x 6 cols)
        - 4 columns on tablet (6 rows x 4 cols)
        - 3 columns on small tablet (8 rows x 3 cols)
        - 2 columns on mobile (12 rows x 2 cols)
      - Added smooth micro-hover elevation (`whileHover={{ y: -3, scale: 1.02 }}`) and subtle background watermark `ECOSYSTEM`.
      - Verified build passes with 0 errors and visual layout verified across desktop and mobile.
   46. Tech Stack Ecosystem - Header and Telemetry Clutter Removal (Module 80):
      - Removed 'PRODUCTION TECHNOLOGIES' count badge from Section 06 top header (`EcosystemGrid.tsx`). Top bar now cleanly displays solely `06 // TECH STACK & SYSTEM ECOSYSTEM` with the layers icon.
      - Removed the entire bottom telemetry bar below the skills grid, eliminating `// ARSENAL ARCHITECTURE: VERIFIED PRODUCTION GRADE` and `FULL STACK • CLOUD • APPLIED AI`.
      - Maintained pristine vertical spacing and responsive symmetry across mobile and desktop.
      - Verified across desktop (1366x900) and mobile (375x812); production build passed with 0 errors.
   47. Landing Hero Masthead Typography - Resolution of Hairline Drop-out with Playfair Display (Module 81):
      - Diagnosed live site broken letter appearance: `Bodoni Moda` is a Didone typeface with extreme stroke contrast where upstrokes, crossbars, and left stems are 1px hairlines that drop out / become invisible on dark backgrounds at screen resolution.
      - Integrated Google Font `Playfair Display` (weight 700, 900) into `index.html` and prioritized it in `tailwind.config.js` (`serifDisplay`).
      - All letters in 'AKASH AD' (A, K, A, S, H, A, D) now render with 100% solid, fully formed, luxurious strokes without any hairline gaps or missing pieces.
      - Verified in production build artifact `check_dist_playfair.png`; built and verified with 0 errors.
   48. Landing Hero Typography - Clean Scale-Only Interaction (Module 82):
      - Removed golden `#FDD60A` color and luminous glow shadow from the hover and tap states of 'AKASH AD'.
      - Retained pure physical spring scale effect (`scale: 1.1`, stiffness 500, damping 14) so letters remain pristine white during interaction.
      - Verified in Playwright artifact `check_hover_scale_only.png`; build and verification passed with 0 errors.
   49. Career Role Positioning Calibration - React Developer (Frontend) (Module 83):
      - Updated developer role to `REACT DEVELOPER (FRONTEND)` displayed cleanly beneath the `AKASH AD` masthead and yellow accent bar in `HeroProfile.tsx`.
      - Preserved current employment status as `FULL STACK DEVELOPER AT NRITHYA DANCES` in the telemetry row above the deploy contract CTA.
      - Updated `portfolioData.ts` tagline, bio, `index.html` page title, OpenGraph tags, Twitter card, and Schema.org JSON-LD to `React Developer (Frontend)`.
      - Verified in Playwright artifacts `check_role_desktop.png` and `check_role_mobile.png`; production build passed with 0 errors.
   50. About Section Telemetry Cleanup (Module 84):
      - Removed the bottom coordinate telemetry bar displaying `SECTION 02` and `CORE PHILOSOPHY // SCROLL REVEAL` from the About section (`StatementSection.tsx`).
      - Preserved the Core Philosophy statement, highlighted typography, and Apple-like portrait photo.
      - Verified across desktop (`1366x900`) and mobile (`375x812`) in Playwright artifacts `check_about_clean_desktop.png` and `check_about_clean_mobile.png`; production build passed with 0 errors.
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
Date: 2026-10-25
- Build: PASSED (`tsc -b && vite build` completed with 0 errors)
- Git Remote: PASSED (`main` branch synced with `https://github.com/akashad123/akash-portfolio.git`)
- Tests: PASSED
- Responsive: Scaled across mobile (< 480px, < 768px), tablet (768px - 1024px), and desktop (1024px+)
- SEO: Semantic HTML, OpenGraph, Twitter, and JSON-LD structured schema
