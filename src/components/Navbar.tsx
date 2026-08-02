"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { scrollToTarget } from "@/lib/lenis";
import { site } from "@/data/site";
import ChapterProgress from "@/components/ChapterProgress";

/**
 * Fixed navbar that stays out of the way for the hero and slides in as the
 * visitor leaves it, bringing the chapter progress strip with it.
 */
export default function Navbar() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const nav = ref.current;
      if (!nav) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return; // static hero → navbar visible from the start

      gsap.set(nav, { yPercent: -120, autoAlpha: 0 });
      const show = () =>
        gsap.to(nav, { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out", overwrite: true });
      const hide = () =>
        gsap.to(nav, { yPercent: -120, autoAlpha: 0, duration: 0.4, ease: "power2.in", overwrite: true });

      ScrollTrigger.create({
        // Just past the hero — early enough that the progress strip is on
        // screen while there is still most of the page left to earn.
        start: () => window.innerHeight * 0.85,
        end: "max",
        onEnter: show,
        onLeaveBack: hide,
      });
    },
    { scope: ref }
  );

  const onAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToTarget(href);
  };

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-[60] bg-bg/60 backdrop-blur-xl"
    >
      <nav className="flex h-16 items-center justify-between px-5 md:px-10">
        <a
          href="#intro"
          onClick={(e) => onAnchor(e, "#intro")}
          className="text-lg font-bold tracking-[-0.04em]"
          aria-label="BSB — početak"
        >
          BSB<span className="text-eye">®</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => onAnchor(e, item.href)}
                className="label text-[10px] transition-colors duration-300 hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => onAnchor(e, "#contact")}
          className="rounded-full border border-line px-5 py-2 text-sm font-medium transition-colors duration-300 hover:border-fg/50"
        >
          Kontakt
        </a>
      </nav>
      {/* Doubles as the navbar's bottom rule — no separate border needed. */}
      <ChapterProgress />
    </header>
  );
}
