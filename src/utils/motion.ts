/**
 * Global Framer Motion physics and transitions for editorial portfolio.
 * High-performance, hardware-accelerated animations using transforms & opacity.
 * Features ultra-smooth cubic-bezier curves [0.16, 1, 0.3, 1] inspired by luxury motorsport typography.
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
  amount: 0.1,
  margin: '0px 0px -40px 0px',
} as const;

// Header animation presets
export const headerInitial = {
  opacity: 0,
  y: -12,
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

// Directional Motion Variants (High-Performance GPU-Accelerated)
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: editorialEase, delay },
  }),
};

export const fadeInDownVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: editorialEase, delay },
  }),
};

export const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: editorialEase, delay },
  }),
};

export const fadeInRightVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: editorialEase, delay },
  }),
};

export const fadeInScaleVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: editorialEase, delay },
  }),
};
