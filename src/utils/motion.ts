/**
 * Global Framer Motion physics and transitions for editorial portfolio.
 * Features ultra-smooth cubic-bezier curves [0.16, 1, 0.3, 1] inspired by high-end editorial and typography sites.
 */

export const editorialEase = [0.16, 1, 0.3, 1] as const;

export const fadeInTransition = {
  duration: 0.85,
  ease: editorialEase,
} as const;

export const sectionInitial = {
  opacity: 0,
  y: 28,
} as const;

export const sectionWhileInView = {
  opacity: 1,
  y: 0,
} as const;

export const sectionViewportConfig = {
  once: true,
  amount: 0.08,
  margin: '0px 0px -40px 0px',
} as const;

export const heroInitial = {
  opacity: 0,
  y: 20,
} as const;

export const heroAnimate = {
  opacity: 1,
  y: 0,
} as const;

export const heroTransition = {
  duration: 0.95,
  ease: editorialEase,
  delay: 0.05,
} as const;

export const headerInitial = {
  opacity: 0,
  y: -10,
} as const;

export const headerAnimate = {
  opacity: 1,
  y: 0,
} as const;

export const headerTransition = {
  duration: 0.65,
  ease: editorialEase,
  delay: 0.1,
} as const;
