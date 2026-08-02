"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import SectionHead from "@/components/SectionHead";

type Category = "sajtovi" | "prodavnice";

const websites = [
  ["https://urban-alu-team-sajt2.vercel.app/", "/images/projects/urban-alu-team.png"],
  ["https://pizzerijaihpdemo.netlify.app/", "/images/projects/pizzerija-ihp.png"],
  ["https://ledambientlightdeske.rs/", "/images/projects/led-ambient-light.png"],
  ["https://ordulja.com/", "/images/projects/ordulja.png"],
  ["https://dejanatrepaviceborca.com/", "/images/projects/dejana-trepavice.png"],
  ["https://markovicwash.netlify.app/", "/images/projects/markovic-wash.png"],
  ["https://kneletattoo222.vercel.app/", "/images/projects/knele-tattoo.png"],
];

const stores = [
  ["https://nevidljivinosac.netlify.app/", "/images/projects/nevidljivi-nosac.png"],
  ["https://moroccansrbija.com/", "/images/projects/moroccan-srbija.png"],
];

function ProjectCard({ href, preview }: { href: string; preview: string }) {
  const hostname = new URL(href).hostname.replace(/^www\./, "");

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

export default function SelectedWork() {
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
      <SectionHead
        index=""
        title="Samo neki od projekata"
      />

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

      {/* Horizontal swipe on phones, grid from md up. Snap points make the rail
          feel like a deck of cards rather than a scrollable strip, and each
          card is wide enough that the screenshot actually reads.
          data-lenis-prevent keeps the smooth-scroll wrapper off this axis. */}
      <div
        data-work-grid
        data-lenis-prevent
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {(category === "sajtovi" ? websites : stores).map(([href, preview]) => (
          <ProjectCard key={href} href={href} preview={preview} />
        ))}
      </div>

      <p className="label mt-5 text-[9px] md:hidden" aria-hidden="true">
        ← Prevuci za još radova
      </p>
    </section>
  );
}
