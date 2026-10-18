# Product Requirements Document

## Product
Akash Portfolio — Motorsport Editorial Creative Personal Website

## Purpose
A high-contrast, editorial-style personal portfolio inspired by high-end motorsport art direction (Nick Ho reference) showcasing Akash's developer identity, projects, technical skills/partnerships, experience timeline, and contact interface.

## Problem
Standard developer portfolios often look generic, relying on generic card grids, rounded pill buttons, and SaaS-like templates. Akash requires a distinct, bold, high-performance editorial presence with strong typography, geometric discipline, restrained yellow accents, and cinematic interactions.

## Target users
- Engineering managers and technical recruiters
- High-value freelance clients and agency partners
- Collaborators and fellow engineers

## Scope
### In scope
- **Editorial Header**: Minimalist logo mark on left, sharp yellow square hamburger button (`#FDD60A`, `0px radius`) on right with full-screen typographic navigation overlay.
- **Hero / Profile Stats Section (Dark Theme)**: Large monochrome photography, oversized iconic stat number ("98" or custom developer focal number), key metrics, bio statement, and status indicator.
- **Partners / Tech Ecosystem Architectural Grid (Light Theme)**: Multi-column architectural grid with 1px divider lines, central 3D/rendered creative focal artifact, and surrounding client/tech ecosystem logos.
- **Editorial Statement Section (Light Theme)**: Enormous bold condensed uppercase typography with selective `#FDD60A` yellow word highlights, flanked by asymmetrical imagery.
- **Career / Project Release Timeline (Dark Theme)**: Tabular schedule rows with subtle dividers, project/race metadata, and a vertically intersecting central visual element.
- **Interactive Curved Arc Gallery (Light Theme)**: Drag-enabled orbital arc gallery with angled side cards, upright central card with "DRAG ⇄" indicator, custom speedometer/radial dial tick tracker, and minimal navigation controls.
- **Editorial Media / Selected Works Carousel**: Horizontal editorial card carousel with previous/next controls.
- **Contact Surface / Modal**: Dark backdrop with light editorial contact card, sharp inputs, and bold yellow submit button.
- **Editorial Footer**: Spacious footer with brand logo, vertical grid dividers, navigation links, socials, and credits.

### Out of scope
- Complex backend databases or user authentication systems.
- Blog CMS backend (static MD/JSON content is supported).

## Core requirements
- 100% sharp-edged geometry (`border-radius: 0px` globally on all cards, buttons, modals, inputs).
- Strict color system: Black (`#000000`), White (`#FFFFFF`), Yellow accent (`#FDD60A`), Controlled grays.
- Condensed, heavy display typography paired with clean neutral body typography.
- Fluid responsive design across mobile (4 columns), tablet (6 columns), and desktop (12 columns).
- Accessible contrast ratios and keyboard navigation.

## User flows
1. Visitor lands on dark Hero profile section, immediately grasps developer stature, core metrics, and availability.
2. Visitor scrolls to light Statement section, engaging with personal philosophy and bold typography.
3. Visitor interacts with the Curved Arc Gallery (dragging cards or clicking dial/controls to view featured projects).
4. Visitor explores the Schedule/Experience timeline with intersecting central visual.
5. Visitor browses the Partners & Tech ecosystem grid with subtle hover states.
6. Visitor triggers the contact action (modal or footer form) to send an inquiry.

## Non-functional requirements
- Responsive/mobile: Mandatory testing across mobile (<640px), tablet (768px), desktop (1024px, 1280px, 1536px).
- Accessibility: Semantic HTML5, visible focus states, WCAG contrast compliance.
- SEO: Metadata, OpenGraph cards, schema markup, semantic headings.
- Performance: 60fps animations, lightweight assets, responsive images.
- Maintainability: Centralized configuration in `src/data/portfolioData.ts`.

## Change log
- 2026-10-18 — Initialized PRD from reference screenshots and design brief.

