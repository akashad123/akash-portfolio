# Project Memory

This file is the persistent handoff record for the project.

## Current state
- Current phase: Development & Verification Complete
- Current module: Completed Modules 1–19
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
  4. Updated status across data and UI to `FORWARD DEPLOYED AT NRITHYA DANCES`.
  5. Implemented transparent navbar with 'AD' monogram and yellow 2-bar hamburger.
  6. Repositioned whole portfolio identity, bio, statement, case studies, metadata, and writings to **Forward Deployed Engineer (FDE)**:
     - Bio: Operating on the frontlines of real-world problems — rapidly architecting, integrating, and deploying high-impact full-stack applications, multimodal AI pipelines, and resilient cloud systems.
     - Section 02 Statement: *"As a Forward Deployed Engineer, I operate on the frontlines to convert complex problems into production-ready deployments. Every system is a direct operational commitment, every codebase a chance to deliver solutions that are resilient, battle-tested, and built for scale."*
     - Case studies & experience: Emphasize ground-truth verification, stakeholder integration, production daemons, and frontline deployment.
     - Telemetry & Badges: `FDE // FULL STACK & AI`, `FORWARD DEPLOYED ETHOS`, `MISSION-CRITICAL FDE`.
- Verified production build (`tsc -b && vite build`) with zero errors.
- Connected GitHub remote: `https://github.com/akashad123/akash-portfolio.git` and pushed branch `main`.




## In-progress work
- Live preview active on local port 3001.


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
User review of live development server at `http://localhost:3001/`, followed by optional production hosting deployment on Vercel.

## Last verification
- Date: 2026-10-18
- Build: PASSED (`tsc -b && vite build` completed in 7.83s with 0 errors)
- Git Remote: PASSED (`main` branch synced with `https://github.com/akashad123/akash-portfolio.git`)
- Tests: PASSED
- Responsive: Verified across mobile/tablet/desktop breakpoints
- SEO: Verified in `index.html` with full meta tags and JSON-LD schema



## Handoff note
All architectural rules, stack decisions, design tokens, and screenshot analyses have been codified into the repository documentation. The next phase is executing Module 2 (project scaffolding & design token setup).

