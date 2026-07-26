"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { clsx } from "clsx";
import { faq } from "@/data/faq";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <SectionHead
          index="06"
          title="Pitanja koja svi postave."
          lead="Ako odgovora nema ovde — forma je ispod, odgovaramo brzo."
          className="mb-0!"
        />

        <Reveal mode="fade" className="border-b border-line">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-t border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-medium tracking-[-0.01em] md:text-xl">
                    {item.question}
                  </span>
                  <Plus
                    size={18}
                    className={clsx(
                      "shrink-0 text-dim transition-transform duration-500 ease-out",
                      isOpen && "rotate-[135deg] text-eye"
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-dim">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
