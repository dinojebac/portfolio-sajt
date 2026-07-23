"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects, type Project } from "@/data/projects";
import SectionHead from "@/components/SectionHead";
import MockSite from "@/components/MockSite";
import CaseModal from "@/components/CaseModal";
import { scrollToTarget } from "@/lib/lenis";

export default function SelectedWork() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Parallax unutar media kadra + ulazni reveal za svaki case.
      gsap.utils.toArray<HTMLElement>("[data-case]").forEach((panel) => {
        const media = panel.querySelector("[data-case-media]");
        if (media) {
          gsap.fromTo(
            media,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        }
        gsap.from(panel, {
          autoAlpha: 0,
          y: 60,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 88%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section id="work" ref={ref} className="px-5 py-24 md:px-10 md:py-36">
      <SectionHead
        index="03"
        label="Selected Work"
        title="Projekti koji rade svoj posao."
        lead="Svaki projekat je mala studija slučaja: problem, rešenje i rezultat koji se meri upitima — ne lajkovima."
      />

      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((p) => (
          <button
            key={p.slug}
            type="button"
            data-case
            onClick={() => setActive(p)}
            className="group w-full text-left"
            aria-label={`Otvori case study: ${p.title}`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md md:aspect-[21/10]">
              <div data-case-media className="absolute -inset-y-[8%] inset-x-0">
                <MockSite
                  project={p}
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-fg/15 bg-black/30 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="mt-5 flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between">
              <div className="flex items-baseline gap-4">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] md:text-4xl">
                  {p.title}
                </h3>
              </div>
              <div className="flex items-center gap-5 text-sm text-dim">
                <span>{p.type}</span>
                <span className="relative hidden items-center gap-1.5 md:inline-flex">
                  Case study
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-fg transition-all duration-500 group-hover:w-full" />
                </span>
              </div>
            </div>
            <p className="mt-2 max-w-xl text-[15px] text-dim/85">{p.summary}</p>
          </button>
        ))}

        {/* CTA slot — sledeći projekat */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToTarget("#contact");
          }}
          data-case
          className="group flex aspect-[16/10] w-full flex-col items-center justify-center gap-5 rounded-md border border-dashed border-line transition-colors duration-500 hover:border-eye/40 md:aspect-[21/7]"
        >
          <span className="px-6 text-center text-[clamp(1.6rem,4.5vw,3rem)] font-semibold tracking-[-0.03em]">
            Sledeći case study: <span className="text-eye">tvoj brend.</span>
          </span>
          <span className="label text-[10px] flex items-center gap-2 transition-colors duration-300 group-hover:text-fg">
            Pošalji projekat <ArrowUpRight size={13} />
          </span>
        </a>
      </div>

      <CaseModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
