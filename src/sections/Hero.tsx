"use client";

import { useRef } from "react";
import Btn from "@/components/Btn";
import Odometer from "@/components/Odometer";
import InstagramBrowserFallback from "@/components/InstagramBrowserFallback";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Hero: entrance choreography on load, then a scroll-scrubbed parallax split
 * where the background lags behind the copy. The lag is the point — two layers
 * moving at different speeds read as depth, which is what makes the first
 * flick of the thumb feel like it moved something real.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe || prefersReducedMotion()) return;

      const bg = bgRef.current;
      const content = contentRef.current;
      const heading = headingRef.current;
      const label = labelRef.current;
      if (!bg || !content || !heading || !label) return;

      // Hide the heading synchronously (useGSAP runs pre-paint) so the split
      // that has to wait on webfonts never flashes unsplit text.
      gsap.set(heading, { autoAlpha: 0 });

      // Blank it in the same pre-paint pass we read it in, otherwise the real
      // text shows for a beat before the scramble starts and reads as a glitch.
      const labelText = label.textContent ?? "";
      label.textContent = "";

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Slow push-in on the photo. Starts before everything else and outlasts
      // it, so the section is still settling while the copy is already legible.
      intro.from(bg, { scale: 1.14, autoAlpha: 0, duration: 2.2, ease: "power2.out" }, 0);

      intro.to(
        label,
        {
          duration: 1.1,
          scrambleText: { text: labelText, chars: "upperCase", speed: 0.4, revealDelay: 0.15 },
        },
        0.25
      );

      const revealHeading = contextSafe(() => {
        if (!heading.isConnected) return;
        const split = new SplitText(heading, { type: "lines", mask: "lines" });
        gsap.set(heading, { autoAlpha: 1 });
        gsap.from(split.lines, {
          yPercent: 118,
          duration: 1.25,
          ease: "power4.out",
          stagger: 0.11,
          delay: 0.35,
        });
        return split;
      });

      let split: InstanceType<typeof SplitText> | undefined;
      document.fonts.ready.then(() => {
        split = revealHeading();
      });

      intro.from(
        content.querySelectorAll("[data-hero-stagger]"),
        { y: 26, autoAlpha: 0, duration: 1, stagger: 0.11 },
        0.85
      );

      // Scrubbed parallax: content leaves ~2.5x faster than the photo, and
      // fades out over the first 60% so the next section arrives clean.
      const scrub = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      scrub.to(bg, { yPercent: 14, scale: 1.06, ease: "none" }, 0);
      scrub.to(content, { yPercent: -34, ease: "none" }, 0);
      scrub.to(content, { autoAlpha: 0, ease: "power1.in", duration: 0.6 }, 0);

      return () => split?.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="intro"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-black px-5 pb-[11svh] pt-28 md:px-12 md:pb-[13svh]"
    >
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 will-change-transform"
        style={{ backgroundImage: "url('/images/hero-architecture.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/45" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.48) 56%, rgba(0,0,0,.30) 100%), linear-gradient(0deg, rgba(0,0,0,.60) 0%, transparent 55%)",
        }}
      />
      <div ref={contentRef} className="relative z-10 will-change-transform">
        <p ref={labelRef} className="label mb-5 text-eye">
          BSB® — autenticni web studio
        </p>
        <h1
          ref={headingRef}
          className="max-w-[16ch] text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[1.01] tracking-[-0.04em]"
        >
          Tvoj sajt mora da izgleda <em className="not-italic text-eye">skuplje</em> od konkurencije.
        </h1>
        <p
          data-hero-stagger
          className="mt-6 max-w-[46ch] text-base leading-relaxed text-fg/75 md:text-lg"
        >
          Ozbiljan dizajn, jasna poruka i animacije koje zadržavaju pažnju — za brendove koji žele da
          klijenti odmah osete razliku.
        </p>
        <p
          data-hero-stagger
          className="mt-5 flex flex-wrap items-center gap-x-1.5 text-xs font-medium tracking-[0.12em] text-eye/75 md:text-sm"
        >
          {/* Delayed past the stagger above so the roll isn't already over by
              the time this line finishes fading in. */}
          <Odometer value={2} delay={1.2} /> godine iskustva ·{" "}
          <Odometer value={20} delay={1.35} />+ realizovanih projekata
        </p>
        <div data-hero-stagger className="mt-9 flex flex-wrap items-center gap-4">
          <Btn href="#contact" variant="ghost" arrow={false}>
            Popuni formu
          </Btn>
        </div>
        <div data-hero-stagger className="mt-12 flex items-center gap-3">
          <span className="relative block h-8 w-px overflow-hidden bg-line">
            <span className="absolute inset-x-0 top-0 block h-1/2 bg-eye [animation:scrollhint_2.2s_cubic-bezier(.4,0,.2,1)_infinite]" />
          </span>
          <span className="label text-[10px]">Skroluj</span>
        </div>
        <InstagramBrowserFallback />
      </div>
    </section>
  );
}
