"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { services } from "@/data/services";
import SectionHead from "@/components/SectionHead";

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils.toArray<HTMLElement>("[data-service-row]").forEach((row) => {
        gsap.from(row, {
          autoAlpha: 0,
          y: 36,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section id="services" ref={ref} className="px-5 py-24 md:px-10 md:py-36">
      <SectionHead
        index="01"
        label="Services"
        title="Ne pravimo samo sajt. Gradimo prvi utisak koji prodaje."
      />

      <div className="border-b border-line">
        {services.map((s) => (
          <article
            key={s.index}
            data-service-row
            className="group grid gap-3 border-t border-line py-8 transition-colors duration-500 md:grid-cols-[1.2fr_1fr_auto] md:items-baseline md:gap-8 md:py-10"
          >
            <h3 className="text-xl font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
              {s.title}
            </h3>
            <p className="max-w-md text-[15px] leading-relaxed text-dim">{s.description}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 md:flex-col md:items-end md:gap-y-1.5">
              <span className="label text-[9px] hidden md:inline">{s.tag}</span>
              <span className="text-xs text-dim/70 md:text-right">{s.meta.join(" · ")}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
