import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

/**
 * Initializes buttery-smooth momentum scrolling synchronized with GSAP ScrollTrigger.
 * Eliminates mousewheel stutter, layout thrashing, and native scroll conflicts.
 */
export const initSmoothScroll = (): Lenis => {
  if (typeof window === 'undefined') return {} as Lenis;

  if (lenisInstance) {
    return lenisInstance;
  }

  const lenis = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  lenisInstance = lenis;

  // Synchronize Lenis scroll with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Drive Lenis directly via GSAP ticker for 100% synchronized frame timing
  const tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return lenis;
};

export const getLenis = (): Lenis | null => lenisInstance;

export const destroySmoothScroll = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};
