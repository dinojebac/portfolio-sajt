"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type ScrambleLabelProps = {
  children: string;
  className?: string;
};

/**
 * Mono label that decodes itself into place when scrolled to.
 *
 * The scramble only arms if the label is still below the fold when this runs —
 * descrambling text the visitor has already read looks like a fault, not an
 * effect. Anything already on screen is simply left alone.
 */
export default function ScrambleLabel({ children, className }: ScrambleLabelProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const belowFold = el.getBoundingClientRect().top > window.innerHeight;
      if (!belowFold) return;

      el.textContent = "";

      gsap.to(el, {
        duration: 0.9,
        scrambleText: { text: children, chars: "upperCase", speed: 0.55, revealDelay: 0.12 },
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    },
    { scope: ref, dependencies: [children] }
  );

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
