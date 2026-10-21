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

export interface MultiParallaxItem {
  target: HTMLElement | null;
  yStart?: number;
  yEnd?: number;
  xStart?: number;
  xEnd?: number;
  scrub?: number | boolean;
}

/**
 * Initializes a high-performance GSAP ScrollTrigger parallax animation on a single element.
 * Smoothly translates target elements up/down (topward/bottomward) on scroll with physics dampening.
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

/**
 * Initializes synchronized multi-element GSAP ScrollTrigger parallax within a section.
 * Powers multi-layered topward and bottomward text and card movements on scroll.
 */
export const initGsapMultiParallax = (
  items: MultiParallaxItem[],
  trigger: HTMLElement | null,
  options: { start?: string; end?: string; defaultScrub?: number | boolean } = {}
): (() => void) => {
  if (!trigger || typeof window === 'undefined') return () => {};

  const { start = 'top bottom', end = 'bottom top', defaultScrub = 1.2 } = options;

  const ctx = gsap.context(() => {
    items.forEach(({ target, yStart, yEnd, xStart, xEnd, scrub = defaultScrub }) => {
      if (!target) return;

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
    });
  }, trigger);

  return () => ctx.revert();
};
