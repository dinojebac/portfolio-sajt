"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import { ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const destroy = reduced ? () => {} : initLenis();

    // Re-measure pinned sections once everything (fonts, video metadata) settles.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      destroy();
    };
  }, []);

  return null;
}
