# Technology Stack

## Stack decision status
`APPROVED`

## Approved Stack

### Frontend
- Framework: React 19 (Vite SPA)
- Language: TypeScript
- Styling: Tailwind CSS (with sharp 0px border-radius, `#FDD60A` yellow accent token, editorial grid tokens)
- Animation: Framer Motion + GSAP (Framer Motion for draggable arc gallery, gestures, and layout state; GSAP ScrollTrigger for pinned scroll sequences, timelines, and typography reveals)
- Icons: Lucide React (sharp/minimal stroke)

### Backend
- Mode: Static data-driven architecture
- Contact Form: Client-side integration (Formspree / Web3Forms / Resend API or client mailto fallback with interactive validation state)
- Database: None (structured static TypeScript/JSON data models in `src/data/`)
- Authentication: None
- Storage: Static assets served via `public/`

### Deployment
- Frontend: Vercel / Netlify / GitHub Pages (Static SPA)
- Backend: N/A (Serverless form handling)

## SEO requirement
Client-rendered React SPA with semantic HTML5 architecture, full OpenGraph/Twitter meta tags in `index.html`, crawlable heading hierarchy (`h1`/`h2`), descriptive `alt` texts, and JSON-LD structured schema for personal portfolio.

## Dependency policy
- Add a dependency only when it provides a real benefit.
- Prefer lightweight, well-maintained libraries.
- Record significant stack/dependency decisions here.

## Decision history
- 2026-10-18 — Approved Vite + React 19 + TypeScript + Tailwind CSS + Framer Motion + GSAP — Optimal performance, ultra-fast development, powerful draggable arc interactions and cinematic scroll triggers.

