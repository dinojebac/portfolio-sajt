"use client";

import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Expanding ring from the point of contact whenever an interactive element is
 * pressed, in the site's accent rather than a generic grey.
 *
 * Touch has no hover state, so without this a tap has no acknowledgement until
 * the next screen paints — and on a slow connection that gap is long enough for
 * people to tap again, or to assume the site is broken. The ring closes that
 * gap instantly, and being brand-coloured it reads as craft rather than chrome.
 *
 * One delegated listener at the document level; nodes are created per press and
 * removed when their tween ends.
 */
export default function TapRipple() {
  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const onPointerDown = (event: PointerEvent) => {
      // Mouse users already get hover and :active feedback.
      if (event.pointerType === "mouse") return;

      const target = event.target as Element | null;
      if (!target?.closest?.("a, button, [role='button'], summary")) return;

      const ring = document.createElement("span");
      ring.setAttribute("aria-hidden", "true");
      Object.assign(ring.style, {
        position: "fixed",
        left: `${event.clientX}px`,
        top: `${event.clientY}px`,
        width: "18px",
        height: "18px",
        marginLeft: "-9px",
        marginTop: "-9px",
        borderRadius: "9999px",
        border: "1px solid var(--color-eye)",
        pointerEvents: "none",
        zIndex: "90",
        willChange: "transform, opacity",
      });
      document.body.appendChild(ring);

      gsap.fromTo(
        ring,
        { scale: 0.4, opacity: 0.55 },
        {
          scale: 5.5,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          onComplete: () => ring.remove(),
        }
      );
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onPointerDown);
  });

  return null;
}
