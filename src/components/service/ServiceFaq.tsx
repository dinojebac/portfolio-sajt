"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { clsx } from "clsx";
import type { FaqItem } from "@/data/faq";

/**
 * Akordeon za stranice usluga.
 *
 * Nije isti kao `sections/FAQ` iako radi isto: onaj vozi na stare tokene i na
 * globalni `faq` spisak, i koriste ga druge stranice. Ovaj prima svoja pitanja
 * i koristi tokene novih stranica.
 */
export default function ServiceFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-b border-subtle">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="border-t border-subtle">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="t-h3 text-ink">{item.question}</span>
              <Plus
                size={18}
                className={clsx(
                  "shrink-0 text-ink-muted transition-transform duration-500 ease-out",
                  isOpen && "rotate-[135deg] text-accent"
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
                <p className="t-body max-w-2xl pb-7 text-ink-soft">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
