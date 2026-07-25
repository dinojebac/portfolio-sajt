"use client";

import { useSyncExternalStore } from "react";

/**
 * Heuristic "should we run the expensive hero effects" check: respects
 * prefers-reduced-motion, and falls back on low core-count / low device
 * memory as a rough proxy for weaker hardware (older Android phones,
 * integrated-GPU laptops) where the full 3D flip + canvas starfield can
 * drop frames. useSyncExternalStore keeps this SSR-safe (server snapshot
 * assumes full effects; the client corrects on the first paint) without
 * the extra render pass a state+effect pair would cost.
 */
function getSnapshot(): boolean {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // 4 cores / 4GB is a perfectly common, capable modern device — only back
  // off for genuinely weak hardware (old/budget Android, very old laptops).
  const cores = navigator.hardwareConcurrency ?? 8;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  return reducedMotion || cores <= 2 || memory <= 2;
}

function getServerSnapshot(): boolean {
  return false;
}

function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function usePerfMode() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
