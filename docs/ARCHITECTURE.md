# Architecture

## Architecture status
`APPROVED`

## Approved stack
See `TECH_STACK.md` (React 19 + Vite + TypeScript + Tailwind CSS + Framer Motion + GSAP).

## High-level flow

```text
Visitor Browser
      ↓
Static HTML5 / Vite React 19 SPA
      ↓
Root Layout & Global Navigation
      ↓
Section Orchestrator (Dark/Light alternate editorial flow)
   ├── Header (Sticky/Floating with sharp yellow menu toggle)
   ├── Hero / Profile Stats (Dark theme with giant focal stat & bio metrics)
   ├── Statement Section (Light theme with highlighted manifesto)
   ├── Curved Arc Gallery (Interactive draggable project showcase)
   ├── Timeline / Schedule (Dark theme with intersecting visual centerpiece)
   ├── Ecosystem & Partners Grid (Light theme architectural grid)
   ├── Media / Selected Works Carousel (Light theme horizontal slider)
   ├── Contact Modal & Section (High contrast form surface)
   └── Editorial Footer (Multi-column architectural credits)
      ↓
Data Layer (`src/data/portfolioData.ts`) — Centralized data model
      ↓
External Form Handler (Formspree / Web3Forms / Resend API or client mailto)
```

## Folder structure

```text
akash-portfolio/
├── docs/                      # Architectural, design, and project documentation
├── public/                    # Static assets, fonts, icons, showcase images
├── src/
│   ├── assets/                # Local SVGs, vectors, brand marks
│   ├── components/            # Reusable UI primitives (Button, Modal, Divider, GridLine, Logo)
│   ├── sections/              # Major editorial page sections
│   │   ├── Header.tsx         # Brand mark + yellow menu trigger
│   │   ├── NavigationMenu.tsx # Full-screen typographic overlay
│   │   ├── HeroProfile.tsx    # Dark profile stats & focal number
│   │   ├── Statement.tsx      # Light editorial statement with yellow highlights
│   │   ├── ArcGallery.tsx     # Interactive curved orbital project gallery
│   │   ├── Timeline.tsx       # Tabular schedule with intersecting visual
│   │   ├── PartnersGrid.tsx   # Architectural grid with central 3D asset
│   │   ├── MediaCarousel.tsx  # Horizontal editorial works carousel
│   │   ├── ContactModal.tsx   # Dark/light contact inquiry surface
│   │   └── Footer.tsx         # Spacious architectural footer
│   ├── data/
│   │   └── portfolioData.ts   # Centralized data model for all content & stats
│   ├── hooks/
│   │   ├── useScrollSpy.ts    # Section active tracking
│   │   └── useMediaQuery.ts   # Screen size breakpoints helper
│   ├── types/
│   │   └── portfolio.ts       # TypeScript interfaces for projects, stats, events
│   ├── styles/
│   │   └── index.css          # Tailwind imports, custom font faces, design tokens
│   ├── App.tsx                # Main single-page application orchestrator
│   └── main.tsx               # Application entry point
├── index.html                 # Semantic HTML shell, SEO metadata, JSON-LD schema
├── tailwind.config.js         # Design token configuration (0px radius, colors, fonts)
├── tsconfig.json              # TypeScript strict configuration
├── vite.config.ts             # Vite build configuration
└── package.json               # Dependencies and scripts
```

## Data flow
All content (bio, stats, projects, timeline events, partner logos, contact metadata) is strongly typed and centralized in `src/data/portfolioData.ts`. Changing Akash's name, titles, numbers, or projects requires editing only this single data layer.

## State management
- React local component state (`useState`, `useRef`, `useCallback`) for interactive controls.
- Framer Motion `motionValue` and gesture hooks for draggable arc gallery physics.
- GSAP ScrollTrigger for pinned scroll scenes and viewport-based trigger callbacks.

## External services
- Client-side form submission to Formspree / Web3Forms or `mailto:` protocol fallback.

## Architecture decisions
- 2026-10-18 — Approved Vite + React 19 SPA with static data-driven architecture for rapid rendering, clean separation of concerns, and robust animation performance.

