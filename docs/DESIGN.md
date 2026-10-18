# Design System

## Design source
Reference screenshots based on Nick Ho Motorsport portfolio (`nickho-motorsports.nl/#media`), analyzed and mapped into an editorial developer portfolio system for Akash.

## Design principles
- Bold editorial art direction over generic SaaS UI
- Strict high-contrast palette (Black, White, Yellow `#FDD60A`, Grayscale)
- 100% sharp geometric forms (`border-radius: 0px` globally)
- Architectural grid with subtle 1px divider lines
- Asymmetric compositions with intentional whitespace
- Responsive-first across mobile, tablet, and desktop

## Visual direction
Aggressive, high-impact motorsport editorial aesthetic translated into high-performance software engineering. High-contrast monochrome background imagery, dramatic scale contrasts (e.g. clamp display typography up to 11rem), subtle low-contrast background watermarks, and surgical yellow interaction points.

## Color tokens
```css
:root {
  /* Brand Tokens */
  --color-primary: #FDD60A;          /* Accent Yellow */
  --color-primary-hover: #E5C200;
  --color-secondary: #000000;        /* Deep Black */
  
  /* Light Theme */
  --color-light-bg: #FFFFFF;
  --color-light-surface: #F8F8F8;
  --color-light-text: #111111;
  --color-light-muted: #737373;
  --color-light-border: rgba(0, 0, 0, 0.08);
  --color-light-watermark: #F2F2F2;

  /* Dark Theme */
  --color-dark-bg: #000000;
  --color-dark-surface: #0D0D0D;
  --color-dark-text: #FFFFFF;
  --color-dark-muted: #A3A3A3;
  --color-dark-border: rgba(255, 255, 255, 0.12);
  --color-dark-watermark: #141414;
}
```

## Typography
- **Display Headings**: Condensed heavy sans-serif (`font-family: 'Oswald', 'Anton', 'Barlow Condensed', sans-serif`, weight 800-900, uppercase, `letter-spacing: -0.04em`, `line-height: 0.88-0.95`).
- **Body & Metadata**: Clean neutral grotesque sans-serif (`font-family: 'Inter', system-ui, sans-serif`, weight 400-500, `line-height: 1.5-1.6`).
- **Scale**:
  - Hero / Focal Display: `clamp(3.5rem, 12vw, 11rem)`
  - Section Headings (H2): `clamp(2.5rem, 6vw, 5.5rem)`
  - Subheadings (H3): `clamp(1.5rem, 3vw, 2.5rem)`
  - Body: `0.95rem - 1.05rem`
  - Caption / Metadata: `0.75rem - 0.85rem` uppercase tracking-widest

## Spacing & Grid
- **Columns**: 12 columns desktop, 6 columns tablet, 4 columns mobile.
- **Dividers**: 1px vertical hairline rules between grid tracks.
- **Section Spacing**: Generous editorial breathing room (`padding: 6rem 1.5rem` mobile, `8rem 4vw` desktop).

## Breakpoints
- Mobile: `sm: 640px`
- Tablet: `md: 768px`
- Laptop/Desktop: `lg: 1024px`
- Wide Desktop: `xl: 1280px`
- Ultra-wide: `2xl: 1536px`

## Components
- **Header**: Minimalist brand mark on left; square yellow hamburger button (`36px` - `42px`, `#FDD60A`, `rounded-none`) on right triggering full-screen editorial menu.
- **Buttons**: Sharp rectangular CTA (`border-radius: 0px`, `#FDD60A` background, `#000000` text, bold condensed uppercase font, hover micro-translation).
- **Inputs**: Sharp rectangular inputs (`border-radius: 0px`, `#F2F2F2` or dark surface, subtle 1px border, visible yellow focus outline).
- **Cards**: Sharp rectangular frames, monochrome imagery, selective yellow badges.
- **Gallery**: Curved orbital arc arrangement with angled flank cards (`-12deg` / `+12deg`), upright central card with "DRAG ⇄" indicator, and radial dial indicator.
- **Dividers**: 1px subtle lines (`rgba(0,0,0,0.08)` in light sections, `rgba(255,255,255,0.12)` in dark sections).

## Motion
- **Libraries**: Framer Motion + GSAP.
- **GSAP**: ScrollTrigger for smooth section reveals, pinned timeline sequences, and typography entrance staggers.
- **Framer Motion**: Gesture handling for draggable curved arc gallery, modal transitions, and navigation drawer animations.
- **Reduced Motion**: Fallback to instant or subtle opacity fades when `prefers-reduced-motion` is active.

## Accessibility
- Contrast ratios verified across both light and dark sections.
- Keyboard accessible navigation and modal trapping.
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Descriptive `alt` attributes on all imagery.

