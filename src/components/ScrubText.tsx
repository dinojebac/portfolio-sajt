"use client";

import { useRef } from "react";
import type { ElementType, ReactNode } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type ScrubTextProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Opacity of words that haven't been "read" yet. */
  from?: number;
  id?: string;
};

/**
 * Paragraph whose words light up one by one, tied to scroll position rather
 * than triggered once. The distinction matters: a triggered reveal makes the
 * visitor a spectator, while scrubbing hands them the dial — the text brightens
 * exactly as far as they pushed, which is what keeps a thumb moving.
 *
 * Text is fully visible without JS; GSAP dims it only right before wiring up.
 */
export default function ScrubText({
  children,
  as: Tag = "p",
  className,
  from = 0.18,
  id,
}: ScrubTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current;
      if (!el || !contextSafe || prefersReducedMotion()) return;

      let split: InstanceType<typeof SplitText> | null = null;

      // Word splitting has to wait for webfonts or the words land in the
      // wrong places once the real face swaps in.
      document.fonts.ready.then(
        contextSafe(() => {
          if (!el.isConnected) return;
          split = new SplitText(el, { type: "words" });

          gsap.fromTo(
            split.words,
            { opacity: from },
            {
              opacity: 1,
              ease: "none",
              duration: 1,
              stagger: 0.6,
              scrollTrigger: {
                trigger: el,
                // Starts once the block is comfortably in view and finishes
                // before it leaves, so the payoff lands mid-screen.
                start: "top 78%",
                end: "bottom 58%",
                scrub: 0.45,
              },
            }
          );
        })
      );

      return () => split?.revert();
    },
    { scope: ref, dependencies: [from] }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return (
    <Comp ref={ref} id={id} className={className}>
      {children}
    </Comp>
  );
}
