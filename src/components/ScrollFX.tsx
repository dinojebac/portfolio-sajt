"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Two page-wide scroll behaviours, driven from one place so there is a single
 * ScrollTrigger doing velocity bookkeeping instead of one per element.
 *
 * `data-skew`  — element leans into the direction of the scroll, proportional
 *                to how hard the visitor flicked. Gives the page weight: the
 *                content reacts to force, not just to position.
 * `data-speed` — element travels slower (<1) or faster (>1) than the scroll.
 *                Layers at different speeds read as depth.
 *
 * ScrollSmoother would give us `data-speed` for free but it owns the scroller,
 * and Lenis already does — so the parallax is wired by hand.
 */
export default function ScrollFX() {
  const done = useRef(false);

  useGSAP(() => {
    if (done.current || prefersReducedMotion()) return;
    done.current = true;

    // --- data-speed parallax -------------------------------------------------
    gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
      const speed = parseFloat(el.dataset.speed ?? "1");
      if (!Number.isFinite(speed) || speed === 1) return;

      gsap.fromTo(
        el,
        { yPercent: (speed - 1) * 22 },
        {
          yPercent: (1 - speed) * 22,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // --- velocity skew -------------------------------------------------------
    const targets = gsap.utils.toArray<HTMLElement>("[data-skew]");
    if (!targets.length) return;

    const setSkew = gsap.quickSetter(targets, "skewY", "deg");
    const clamp = gsap.utils.clamp(-3.5, 3.5);
    const proxy = { skew: 0 };

    ScrollTrigger.create({
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -420);
        // Only ever grow the skew from a scroll event; the tween below is what
        // brings it back to rest, so a fast flick isn't cut short by the next
        // update landing a smaller value.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.7,
            ease: "power3.out",
            overwrite: true,
            onUpdate: () => setSkew(proxy.skew),
          });
        }
      },
    });

    gsap.set(targets, { transformOrigin: "center center", force3D: true });
  });

  return null;
}
