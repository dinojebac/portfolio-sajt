import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

let lenis: Lenis | null = null;

/**
 * Creates the single Lenis instance and drives it from GSAP's ticker so
 * smooth scroll and ScrollTrigger share one clock. Returns a destroy fn.
 */
export function initLenis() {
  if (lenis) return () => {};

  lenis = new Lenis({
    lerp: 0.115,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
  });

  lenis.on("scroll", ScrollTrigger.update);

  // Ručka za debug/testiranje iz konzole.
  (window as Window & { __lenis?: Lenis }).__lenis = lenis;

  const raf = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(raf);
    lenis?.destroy();
    lenis = null;
  };
}

/** The active Lenis instance (null before init / with reduced motion). */
export function getLenis() {
  return lenis;
}

/** Smooth-scrolls to an anchor target, falling back to native scroll. */
export function scrollToTarget(target: string) {
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}
