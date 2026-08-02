"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * A single soft light behind the page that drifts as the visitor scrolls and
 * breathes brighter at the two moments that matter — the opening and the form.
 *
 * This stands in for the "palette shifts per section" idea. On a site that is
 * deliberately black with one accent, recolouring whole sections would read as
 * a different site every screen; moving one light instead keeps the discipline
 * and still makes the scroll feel like travel through a space.
 *
 * The gradient itself never changes — only `transform` and `opacity` animate,
 * so the browser paints the blob once and then just moves the layer. Animating
 * the gradient's own position instead would repaint a full screen every frame,
 * which is exactly the kind of thing that turns a nice idea into a stuttering
 * phone.
 *
 * Sits at -z-10: painted above the body background but behind all content, so
 * it never touches text contrast.
 */
export default function AmbientGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      gsap.set(el, { xPercent: -50, yPercent: -50 });

      gsap
        .timeline({
          scrollTrigger: {
            start: 0,
            end: "max",
            // Long catch-up: the light should lag behind the thumb noticeably,
            // which is what sells it as something further away.
            scrub: 1.4,
            invalidateOnRefresh: true,
          },
        })
        // Drifts down and across the page over the full scroll…
        .fromTo(
          el,
          { x: () => innerWidth * 0.18, y: () => innerHeight * 0.24 },
          {
            x: () => innerWidth * 0.78,
            y: () => innerHeight * 0.8,
            ease: "none",
            duration: 1,
          },
          0
        )
        // …dimming through the belly of the page and lifting again for the
        // contact section, so the pitch ends brighter than it reads mid-scroll.
        .fromTo(
          el,
          { opacity: 1 },
          { keyframes: { opacity: [1, 0.32, 0.36, 1.15] }, ease: "none", duration: 1 },
          0
        );
    },
    { scope: ref }
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={ref}
        className="absolute left-0 top-0 h-[75vmax] w-[75vmax] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle closest-side, rgba(194,205,171,0.15), rgba(194,205,171,0.05) 45%, transparent 72%)",
        }}
      />
    </div>
  );
}
