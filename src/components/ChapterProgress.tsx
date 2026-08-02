"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { scrollToTarget } from "@/lib/lenis";
import { site } from "@/data/site";

/**
 * Segmented progress strip along the bottom edge of the navbar — one segment
 * per chapter, each filling as that chapter is read.
 *
 * A single bar tied to page height would only say "you have scrolled N%".
 * Segments say "you are in the fourth of nine things", which is the version
 * that creates the itch to finish. Segments are tappable so the bar doubles as
 * the section nav on mobile, where the text links are hidden.
 */
export default function ChapterProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const fills = gsap.utils.toArray<HTMLElement>("[data-chapter-fill]", root);

      if (prefersReducedMotion()) {
        gsap.set(fills, { scaleX: 1, opacity: 0.35 });
        return;
      }

      site.chapters.forEach((chapter, i) => {
        const section = document.getElementById(chapter.id);
        const fill = fills[i];
        if (!section || !fill) return;

        // scrub pins the value to scroll position and, past the end, leaves it
        // at 1 — so finished chapters stay lit with no extra bookkeeping.
        gsap.fromTo(
          fill,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="flex h-px w-full gap-px px-5 md:px-10" aria-hidden="true">
      {site.chapters.map((chapter) => (
        <button
          key={chapter.id}
          tabIndex={-1}
          onClick={() => scrollToTarget(`#${chapter.id}`)}
          className="group relative h-px flex-1 bg-line"
          title={chapter.label}
        >
          {/* Taller-than-visible hit area: the bar is 1px, thumbs are not. */}
          <span className="absolute inset-x-0 -top-2 -bottom-2 block" />
          <span
            data-chapter-fill
            className="block h-px w-full origin-left bg-eye"
            style={{ transform: "scaleX(0)" }}
          />
        </button>
      ))}
    </div>
  );
}
