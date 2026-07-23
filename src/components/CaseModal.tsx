"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { getLenis, scrollToTarget } from "@/lib/lenis";
import type { Project } from "@/data/projects";
import MockSite from "@/components/MockSite";
import Btn from "@/components/Btn";

type CaseModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function CaseModal({ project, onClose }: CaseModalProps) {
  // `current` keeps the content mounted while the exit animation plays.
  const [current, setCurrent] = useState<Project | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (project) setCurrent(project);
  }, [project]);

  // Scroll lock + Escape while open.
  useEffect(() => {
    if (!project) return;
    getLenis()?.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      getLenis()?.start();
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const panel = panelRef.current;
      if (!current || !overlay || !panel) return;

      if (project) {
        gsap.fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: "power2.out" });
        gsap.fromTo(
          panel,
          { yPercent: 7, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.55, ease: "power3.out" }
        );
        panel.scrollTop = 0;
        closeBtnRef.current?.focus({ preventScroll: true });
      } else {
        const tl = gsap.timeline({ onComplete: () => setCurrent(null) });
        tl.to(panel, { yPercent: 5, autoAlpha: 0, duration: 0.3, ease: "power2.in" }, 0);
        tl.to(overlay, { autoAlpha: 0, duration: 0.3 }, 0.05);
      }
    },
    { dependencies: [project?.slug, current?.slug] }
  );

  if (!current) return null;
  const p = current;

  const toContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    setTimeout(() => scrollToTarget("#contact"), 420);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[80] bg-black/75 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${p.title}`}
    >
      <div
        ref={panelRef}
        data-lenis-prevent
        className="absolute inset-x-0 bottom-0 top-[5svh] overflow-y-auto rounded-t-2xl border border-line bg-panel md:inset-x-[6vw] md:bottom-[5vh] md:top-[5vh] md:rounded-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-panel/90 px-5 py-5 backdrop-blur-xl md:px-10">
          <div>
            <p className="label text-[10px]">
              Case study
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">{p.title}</h3>
            <p className="mt-1 text-sm text-dim">{p.type}</p>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Zatvori"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-dim transition-colors duration-300 hover:border-fg/50 hover:text-fg"
          >
            <X size={18} />
          </button>
        </div>

        {/* Media */}
        <div className="aspect-[16/9] w-full overflow-hidden border-b border-line">
          {p.media.kind === "video" ? (
            <video
              src={p.media.src}
              poster={p.media.poster}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : p.media.kind === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.media.src} alt={p.media.alt} className="h-full w-full object-cover" />
          ) : (
            <MockSite project={p} />
          )}
        </div>

        {/* Body */}
        <div className="px-5 py-10 md:px-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="label mb-4 text-eye">Problem</p>
              <p className="text-base leading-relaxed text-fg/90 md:text-lg">{p.problem}</p>
            </div>
            <div>
              <p className="label mb-4 text-eye">Rešenje</p>
              <p className="text-base leading-relaxed text-fg/90 md:text-lg">{p.solution}</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="label mb-5">Šta je urađeno</p>
            <ul className="flex flex-wrap gap-2.5">
              {p.built.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-4 py-1.5 text-sm text-fg/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 border-l-2 border-eye pl-6 md:pl-8">
            <p className="label mb-4">Rezultat</p>
            <p className="max-w-2xl text-xl font-medium leading-snug tracking-[-0.01em] md:text-3xl">
              {p.result}
            </p>
          </div>

          <div className="mt-14 flex flex-col items-start gap-4 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
            <p className="text-dim">Želiš ovakav rezultat za svoj brend?</p>
            <Btn href="#contact" onClick={toContact}>
              Pošalji projekat
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
