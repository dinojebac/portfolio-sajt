"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initLenis, getLenis } from "@/lib/lenis";
import { ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const destroy = reduced ? () => {} : initLenis();

    // Re-measure pinned sections once everything (fonts, video metadata) settles.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      destroy();
    };
  }, []);

  // Lenis drži sopstvenu poziciju skrola, pa Next-ov skrol na vrh pri
  // navigaciji ne stiže do njega — bez ovoga nova ruta se otvara na visini na
  // kojoj je posetilac napustio prethodnu. Refresh ide u sledećem frejmu, kad
  // je nova stranica već izmerljiva, jer svaki scrub trigger računa svoje
  // granice iz visine dokumenta koja se upravo promenila.
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
