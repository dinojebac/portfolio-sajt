"use client";

import { useRef } from "react";
import type { ElementType, ReactNode } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** "lines" — masked line-by-line text reveal; "fade" — whole-block rise. */
  mode?: "lines" | "fade";
  delay?: number;
  id?: string;
};

/**
 * Scroll-triggered reveal. Content stays visible without JS (no opacity-0 in
 * markup); GSAP sets the initial hidden state only right before animating.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  mode = "fade",
  delay = 0,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current;
      if (!el || !contextSafe) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      if (mode === "fade") {
        gsap.from(el, {
          autoAlpha: 0,
          y: 30,
          duration: 1.1,
          ease: "power3.out",
          delay,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
        return;
      }

      // Line splitting must wait for webfonts, otherwise lines break wrong.
      let split: InstanceType<typeof SplitText> | null = null;
      document.fonts.ready.then(
        contextSafe(() => {
          if (!el.isConnected) return;
          split = new SplitText(el, { type: "lines", mask: "lines" });
          gsap.from(split.lines, {
            yPercent: 115,
            duration: 1.15,
            ease: "power4.out",
            stagger: 0.09,
            delay,
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          });
        })
      );

      return () => split?.revert();
    },
    { scope: ref, dependencies: [mode, delay] }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return (
    <Comp ref={ref} id={id} className={className}>
      {children}
    </Comp>
  );
}
