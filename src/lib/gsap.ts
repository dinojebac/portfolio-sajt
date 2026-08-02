import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, Observer, useGSAP);
  // Ručke za debug iz konzole, uz postojeći __lenis.
  Object.assign(window, { __gsap: gsap, __ST: ScrollTrigger });
}

/** True when the visitor asked for less motion — every effect must check this. */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger, SplitText, ScrambleTextPlugin, Observer, useGSAP };
