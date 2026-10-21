import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ParallaxOptions {
  yStart?: number;
  yEnd?: number;
  xStart?: number;
  xEnd?: number;
  scrub?: number | boolean;
  start?: string;
  end?: string;
}

/**
 * Initializes a high-performance GSAP ScrollTrigger parallax animation.
 * Smoothly translates target elements up/down or left/right on scroll with physics dampening.
 * Uses gsap.context for full React 19 / StrictMode lifecycle cleanup.
 */
export const initGsapParallax = (
  target: HTMLElement | null,
  trigger: HTMLElement | null,
  options: ParallaxOptions = {}
): (() => void) => {
  if (!target || !trigger || typeof window === 'undefined') return () => {};

  const {
    yStart = 50,
    yEnd = -50,
    xStart,
    xEnd,
    scrub = 1.2,
    start = 'top bottom',
    end = 'bottom top',
  } = options;

  const ctx = gsap.context(() => {
    const fromVars: gsap.TweenVars = {};
    const toVars: gsap.TweenVars = {
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: scrub,
        invalidateOnRefresh: true,
      },
    };

    if (yStart !== undefined && yEnd !== undefined) {
      fromVars.y = yStart;
      toVars.y = yEnd;
    }

    if (xStart !== undefined && xEnd !== undefined) {
      fromVars.x = xStart;
      toVars.x = xEnd;
    }

    gsap.fromTo(target, fromVars, toVars);
  }, trigger);

  return () => ctx.revert();
};
