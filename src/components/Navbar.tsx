"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { scrollToTarget } from "@/lib/lenis";
import { site } from "@/data/site";

/**
 * Fixed navbar that stays hidden during the dark panther intro and slides in
 * once the hero text has appeared (~1.75 viewport heights of scroll).
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
        start: () => window.innerHeight * 1.75,
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
      className="fixed inset-x-0 top-0 z-[60] border-b border-line bg-bg/60 backdrop-blur-xl"
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
    </header>
  );
}
