"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Tanka sage linija koja se izvlaci sleva udesno dok sekcija ulazi u ekran.
 *
 * Stoji iznad svakog H2 na obe stranice usluga i jedini je posao da ih drzi na
 * okupu kao isti dokument. Scrub, ne trigger: linija prati koliko je posetilac
 * gurnuo, pa se ponasa kao pokazivac napretka, a ne kao animacija koja se
 * odigra sama od sebe.
 */
export default function Hairline({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 95%", end: "top 60%", scrub: 0.4 },
        }
      );
    },
    { scope: ref }
  );

  return (
    <span
      ref={ref}
      aria-hidden
      className={`block h-px w-24 origin-left bg-accent-line ${className ?? ""}`}
    />
  );
}
