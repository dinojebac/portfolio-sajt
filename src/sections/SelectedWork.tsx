"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import SectionHead from "@/components/SectionHead";
import Btn from "@/components/Btn";
import { websites, stores, type Project } from "@/data/projects";

type Category = "sajtovi" | "prodavnice";

function ProjectCard({ href, preview, displayDomain }: Project) {
  const hostname = displayDomain ?? new URL(href).hostname.replace(/^www\./, "");

  return (
    <a
      data-case
      data-skew
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Otvori projekat ${hostname}`}
      className="group block w-[78vw] shrink-0 snap-start sm:w-[52vw] md:w-auto"
    >
      {/* 4:3 with the crop pinned to the top: these are desktop screenshots, so
          a square centre-crop cut the hero out and left mid-page text sliced in
          half — the exact opposite of proof that the work is good. */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-panel/30 transition-colors duration-300 group-hover:border-eye">
        <img
          src={preview}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-bg/0 transition-colors duration-300 group-hover:bg-bg/15" />
      </div>
      {/* Real domains do more for credibility than another decorative caption. */}
      <p className="label mt-3 text-[9px] transition-colors duration-300 group-hover:text-fg">
        {hostname}
      </p>
    </a>
  );
}

type SelectedWorkProps = {
  title?: string;
  lead?: string;
  titleAs?: "h1" | "h2";
  /** Dugme ka /radovi — stoji na home, ne i na samoj /radovi stranici. */
  showAllLink?: boolean;
};

export default function SelectedWork({
  title = "Samo neki od projekata",
  lead,
  titleAs = "h2",
  showAllLink = false,
}: SelectedWorkProps) {
  const ref = useRef<HTMLElement>(null);
  const [category, setCategory] = useState<Category>("sajtovi");

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-work-grid]", {
        autoAlpha: 0,
        y: 48,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section id="work" ref={ref} className="px-5 py-24 md:px-10 md:py-36">
      <SectionHead index="" title={title} lead={lead} titleAs={titleAs} />

      <div className="mb-10 flex w-fit rounded-full border border-line p-1">
        {[
          ["sajtovi", "Sajtovi"],
          ["prodavnice", "Online prodavnice"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setCategory(value as Category)}
            className={`rounded-full px-5 py-2.5 text-sm transition-colors duration-300 ${
              category === value ? "bg-fg text-bg" : "text-dim hover:text-fg"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Horizontal swipe on phones, grid from md up. Both attributes below
          are scoped on purpose — the unscoped versions each froze the page on
          this section, from opposite ends:

          touch-action: pan-x reads like "this element owns the X axis", but
          the spec means "for a touch starting here, horizontal panning is the
          only gesture allowed — anywhere in the chain". A vertical swipe that
          landed on the rail (which covers most of a phone screen) scrolled
          neither the rail nor the page. auto lets the browser axis-lock from
          the gesture itself, which is what a native carousel does.

          data-lenis-prevent made Lenis drop *every* gesture here, vertical
          wheel included. The browser then scrolled natively while Lenis kept
          animating toward its own now-stale target, and the two pulled the
          page against each other. Scoped to horizontal, Lenis keeps the Y
          axis and only hands off what the rail can actually consume.

          snap-x is proximity, not mandatory, so it doesn't fight the release. */}
      <div
        data-work-grid
        data-lenis-prevent-horizontal
        className="-mx-5 flex touch-auto snap-x gap-4 overflow-x-auto overscroll-x-contain px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {(category === "sajtovi" ? websites : stores).map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>

      <p className="label mt-5 text-[9px] md:hidden" aria-hidden="true">
        ← Prevuci za još radova
      </p>

      {showAllLink && (
        <Btn href="/radovi" variant="ghost" className="mt-10">
          Pogledaj sve radove
        </Btn>
      )}
    </section>
  );
}
