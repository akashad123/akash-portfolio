# Project Memory

This file is the persistent handoff record for the project.

## Current state
- Current phase: Discovery & Architecture Gate Complete
- Current module: Module 1 — Tech Stack Gate & Project Setup
- Overall status: Ready for Foundation Setup

## Last completed work
- Analyzed all 5 reference screenshots (`nickho-motorsports.nl/#media`).
- Analyzed `PROMPT_STATIC_FRONTEND.md`, `AGENTS.md`, and design configurations in `docs/REFERENCE_CONFIG.jsonc`.
- Completed Tech-Stack Gate confirmation with owner.
- Approved stack: Vite + React 19 + TypeScript + Tailwind CSS + Framer Motion + GSAP.
- Synchronized all project documentation (`TECH_STACK.md`, `PRD.md`, `DESIGN.md`, `ARCHITECTURE.md`, `TASKS.md`).

## In-progress work
- Ready to initialize project dependencies and baseline directory structure.

## Important decisions
- **Framework**: Vite + React 19 SPA for rapid client-side rendering, sub-millisecond HMR, and smooth 60fps animations.
- **Language**: TypeScript with strict mode for rock-solid schemas and component props.
- **Styling**: Tailwind CSS with custom design system tokens (`border-radius: 0px` globally, `#FDD60A` yellow accent, condensed typography, architectural grid hairlines).
- **Motion**: Framer Motion for draggable curved arc gallery and modal interactions; GSAP ScrollTrigger for pinned scroll sequences and typographic reveals.
- **Data Architecture**: Fully data-driven from `src/data/portfolioData.ts` to allow 1-place updates of Akash's projects, stats, bio, and timeline.

## Known constraints
- `border-radius: 0px` strictly enforced across all components (buttons, cards, inputs, dialogs).
- Editorial high-contrast color strategy: `#FFFFFF`, `#000000`, `#FDD60A`, controlled grays.
- Mobile responsiveness mandatory across all sections (stacking columns, preserving touch ergonomics).

## Known issues
- None currently.

## Files/components currently relevant
- `docs/TECH_STACK.md`
- `docs/PRD.md`
- `docs/DESIGN.md`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/REFERENCE_CONFIG.jsonc`

## Next exact step
Initialize the Vite + React 19 + TypeScript + Tailwind CSS project in the workspace, configure fonts (`Oswald`/`Anton` and `Inter`), set up design tokens in `tailwind.config.js`, and verify the clean build.

## Last verification
- Date: 2026-10-18
- Build: Not yet initialized
- Tests: Not yet initialized
- Responsive: Planning phase
- SEO: Planned in HTML template

## Handoff note
All architectural rules, stack decisions, design tokens, and screenshot analyses have been codified into the repository documentation. The next phase is executing Module 2 (project scaffolding & design token setup).

