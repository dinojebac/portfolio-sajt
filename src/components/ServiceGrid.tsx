import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Service } from "@/data/services";

/**
 * Kartice usluga. Isti komponent stoji i na naslovnoj i na `/usluge`, pa se
 * kartica ne moze razici izmedju te dve strane.
 *
 * Cetiri kolone: naslovna prikazuje cetiri kartice, hub osam, pa se oba
 * spiska dele bez rupe u poslednjem redu.
 */
export default function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid border-b border-line md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <Reveal
          key={item.href}
          mode="fade"
          delay={index * 0.06}
          className="border-t border-line md:border-l md:odd:border-l-0 lg:border-l lg:[&:nth-child(4n+1)]:border-l-0"
        >
          {/* Strelica gore-desno, ne nadole: kartica vodi na zasebnu rutu, a
              nadole bi obecavalo skrol do sekcije na istoj stranici. */}
          <Link
            href={item.href}
            className="group flex min-h-64 flex-col justify-between p-6 transition-colors duration-500 hover:bg-panel md:min-h-80 md:p-8"
          >
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[32ch] leading-relaxed text-dim">
                {item.description}
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
  );
}
