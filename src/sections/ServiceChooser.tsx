import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

const choices = [
  {
    title: "Vebsajt",
    description: "Predstavi svoj biznis ili brend online.",
    href: "/usluge/vebsajt",
  },
  {
    title: "Online prodavnica",
    description: "Prodaj proizvode 24/7, sa plaćanjem pouzećem ili karticom.",
    href: "/usluge/prodavnica",
  },
  {
    title: "SEO optimizacija",
    description: "Budi prvi na Google pretrazi za svoju delatnost.",
    href: "/usluge/seo",
  },
  {
    title: "Vođenje oglasa",
    description: "Dovedi kupce sa Google pretrage i društvenih mreža.",
    href: "/usluge/oglasi",
  },
];

export default function ServiceChooser() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        index=""
        title="Šta ti treba?"
        lead="Izaberi uslugu i vidi kako radimo."
      />

      <div className="grid border-b border-line md:grid-cols-2 lg:grid-cols-4">
        {choices.map((choice, index) => (
          <Reveal
            key={choice.href}
            mode="fade"
            delay={index * 0.08}
            className="border-t border-line md:border-l md:odd:border-l-0 lg:border-l lg:first:border-l-0"
          >
            {/* Strelica je pre pokazivala nadole, jer je kartica skrolovala do
                ponude niže na istoj stranici. Sad vodi na zasebnu rutu, pa bi
                nadole obećavalo pogrešnu radnju. */}
            <Link
              href={choice.href}
              className="group flex min-h-64 flex-col justify-between p-6 transition-colors duration-500 hover:bg-panel md:min-h-80 md:p-8"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                  {choice.title}
                </h3>
                <p className="mt-4 max-w-[32ch] leading-relaxed text-dim">
                  {choice.description}
                </p>
              </div>
              <span className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-eye">
                Saznaj više
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
