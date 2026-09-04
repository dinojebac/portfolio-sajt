"use client";

import Reveal from "@/components/Reveal";
import ScrambleLabel from "@/components/ScrambleLabel";
import Btn from "@/components/Btn";
import { contactHref, type ServiceChoice } from "@/lib/serviceSelection";

type OfferProps = {
  label: string;
  title: string;
  children: React.ReactNode;
  service: ServiceChoice;
  cta: string;
  aside: React.ReactNode;
};

/**
 * Jedna ponuda — kopija levo, cenovna kartica desno.
 *
 * Ranije je živela unutar `OfferDetails` gde su sve četiri bile sekcije jedne
 * stranice, pa je CTA skrolovao do forme ispod. Sad je svaka ponuda svoja ruta,
 * pa CTA navigira na /kontakt i nosi izbor usluge u URL-u.
 */
export default function Offer({ label, title, children, service, cta, aside }: OfferProps) {
  return (
    <section className="px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 md:grid-cols-[1.25fr_.75fr] md:gap-20">
        <Reveal mode="fade">
          <p className="label text-eye">
            <ScrambleLabel>{label}</ScrambleLabel>
          </p>
          <h1 className="mt-6 max-w-3xl text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[1.03] tracking-[-0.035em]">
            {title}
          </h1>
          <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-dim md:text-lg">
            {children}
          </div>
          <Btn href={contactHref(service)} className="mt-9">
            {cta}
          </Btn>
        </Reveal>

        <Reveal mode="fade" delay={0.12}>
          {/* Drifts slower than the copy beside it — the price card reads as a
              separate plane, which is what makes the column feel deep. */}
          <div data-speed="0.9" className="rounded-md border border-line bg-panel/60 p-6 md:p-8">
            {aside}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
