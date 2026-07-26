"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import SectionHead from "@/components/SectionHead";

type Category = "sajtovi" | "prodavnice";

const websites = [
  ["https://fast-food-lux.vercel.app/", "/images/projects/fast-food-lux.png"],
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
  return (
    <a
      data-case
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Otvori projekat ${new URL(href).hostname}`}
      className="group relative block aspect-square overflow-hidden rounded-md border border-line bg-panel/30 transition-colors duration-300 hover:border-eye"
    >
      <img
        src={preview}
        alt=""
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-bg/0 transition-colors duration-300 group-hover:bg-bg/15" />
      <span className="sr-only">Otvori projekat</span>
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

      <div data-work-grid className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {category === "sajtovi" && (
          websites.map(([href, preview]) => (
            <ProjectCard key={href} href={href} preview={preview} />
          ))
        )}

        {category === "prodavnice" && (
          stores.map(([href, preview]) => (
            <ProjectCard key={href} href={href} preview={preview} />
          ))
        )}
      </div>
    </section>
  );
}
