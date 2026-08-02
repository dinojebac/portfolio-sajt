"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type OdometerProps = {
  value: number;
  className?: string;
  /** Full 0–9 rotations each wheel spins through before landing. */
  spins?: number;
  /** Held back so the roll isn't over before its container has faded in. */
  delay?: number;
};

/** Digits a wheel scrolls through before resting on `target`. */
function wheel(target: number, spins: number) {
  const run: number[] = [];
  for (let s = 0; s < spins; s++) {
    for (let d = 0; d <= 9; d++) run.push(d);
  }
  for (let d = 0; d <= target; d++) run.push(d);
  return run;
}

/**
 * Number whose digits physically roll into place like a mileage counter,
 * each wheel landing slightly after the one to its left.
 *
 * A plain count-up animates a value; this animates an object. The difference
 * is that the visitor watches something arrive rather than watching a number
 * change, which is why it earns the half-second it costs.
 *
 * Renders the final value as real text for screen readers and no-JS.
 */
export default function Odometer({ value, className, spins = 2, delay = 0 }: OdometerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const digits = String(Math.trunc(Math.abs(value))).split("").map(Number);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || prefersReducedMotion()) return;

      const columns = gsap.utils.toArray<HTMLElement>("[data-odometer-col]", root);

      columns.forEach((col, i) => {
        const steps = col.childElementCount;
        gsap.fromTo(
          col,
          { yPercent: 0 },
          {
            // Land on the last cell: the column is `steps` tall in units of
            // one cell, so the final offset is (steps - 1) / steps.
            yPercent: (-100 * (steps - 1)) / steps,
            duration: 1.5 + i * 0.18,
            ease: "power4.out",
            delay: delay + i * 0.08,
            scrollTrigger: { trigger: root, start: "top 92%", once: true },
          }
        );
      });
    },
    { scope: ref, dependencies: [value, spins, delay] }
  );

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex tabular-nums">
        {digits.map((digit, i) => {
          const run = wheel(digit, spins);
          return (
            <span key={i} className="inline-block h-[1em] overflow-hidden leading-none">
              <span data-odometer-col className="flex flex-col will-change-transform">
                {run.map((d, j) => (
                  <span key={j} className="flex h-[1em] items-center justify-center leading-none">
                    {d}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
