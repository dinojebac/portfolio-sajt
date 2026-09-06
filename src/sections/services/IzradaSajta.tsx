"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Btn from "@/components/Btn";
import Reveal from "@/components/Reveal";
import ScrubText from "@/components/ScrubText";
import ScrambleLabel from "@/components/ScrambleLabel";
import Hairline from "@/components/service/Hairline";
import SectionTitle from "@/components/service/SectionTitle";
import ServiceFaq from "@/components/service/ServiceFaq";
import { contactHref } from "@/lib/serviceSelection";
import { izradaSajtaFaq } from "@/data/izradaSajtaFaq";

/**
 * Zamenjuje celu staru Offer-baziranu ponudu. Tri stvari su se ranije sudarale
 * sa druge dve stranice usluga i zato su ovde uklonjene, ne prepravljene:
 * "Pre nego što krenem" je sad plaćena analiza tržišta, a "Osnovna/Napredna
 * SEO optimizacija" u paketima su sad mesečni rad na `/usluge/seo-optimizacija`.
 * Posetilac koji pročita obe stranice mora da zna šta je već platio.
 */

const BASIC_ITEMS = [
  "Domen i hosting za prvu godinu",
  "Dugme „Pozovi” koje na telefonu odmah pokreće poziv",
  "Viber ili WhatsApp dugme",
  "Google mapa sa lokacijom i navigacijom",
  "Galerija radova",
  "Forma za upit",
  "Radno vreme i linkovi na društvene mreže",
  "CTA dugmad kroz celu stranicu, ne samo jedno na dnu",
  "Postavljeno tako da Google može da ga pročita od prvog dana",
];

const PREMIUM_ITEMS = [
  "Sve iz osnovnog paketa",
  "Zasebna stranica za svaku uslugu, ciljana na konkretne pretrage",
  "Napredne animacije i efekti",
  "Tekst pisan na osnovu analize tržišta, ne po osećaju",
  "GA4 praćenje poziva, formi i klikova, da vidiš šta ti stvarno donosi upite",
  "Analiza tržišta i konkurencije uključena",
];

export default function IzradaSajta() {
  return (
    <div className="bg-base">
      {/* Hero */}
      <section className="px-5 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <Reveal mode="fade">
          <p className="t-eyebrow text-accent">
            <ScrambleLabel>Izrada sajta</ScrambleLabel>
          </p>
        </Reveal>
        <Reveal as="h1" mode="lines" className="t-display mt-8 max-w-[19ch] text-ink">
          Ljudi te guglaju pre nego što te pozovu. Pitanje je samo šta nađu.
        </Reveal>
        <Reveal as="p" mode="fade" delay={0.15} className="t-lead mt-8 max-w-2xl text-ink-soft">
          Ako nemaš sajt, nađu konkurenta. Ako imaš loš, nađu razlog da te ne zovu.
        </Reveal>
        <Reveal mode="fade" delay={0.22}>
          <Btn href={contactHref("izrada-sajta")} className="mt-10">
            Zatraži sajt
          </Btn>
        </Reveal>
      </section>

      {/* Prepoznavanje: bez naslova, najlaksa sekcija na strani. */}
      <section className="px-5 py-20 md:px-10">
        <div className="max-w-2xl space-y-6">
          <ScrubText className="text-[15px] leading-relaxed text-ink-soft">
            Većina lokalnih firmi kod nas ili nema sajt, ili ima nešto napravljeno pre
            osam godina što se od tada nije diralo. Otvara se sporo. Na telefonu se
            raspada. Broj telefona se traži po tri ekrana.
          </ScrubText>
          <ScrubText className="text-[15px] leading-relaxed text-ink-soft">
            To i dalje prolazi kod ljudi koji te već znaju. Ne prolazi ni kod koga ko te
            tek gleda i poredi sa još dvojicom.
          </ScrubText>
        </div>
      </section>

      {/* Dva paketa: najveca sekcija na stranici. */}
      <section className="bg-elevated px-5 py-28 md:px-10 md:py-40">
        <SectionTitle>Dva paketa</SectionTitle>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 md:gap-8">
          <Reveal mode="fade">
            <div className="h-full rounded-md border border-subtle bg-card p-7 md:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="t-h3 text-ink">Osnovni</h3>
                <p className="text-2xl font-semibold tracking-[-0.03em] text-ink">300€</p>
              </div>
              <p className="t-body mt-5 text-ink-soft">
                Do pet stranica, statičan sajt, osnovne animacije. Za lokalni biznis kome
                treba ozbiljno mesto na koje može da uputi čoveka.
              </p>
              <ul className="mt-6 space-y-3">
                {BASIC_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <Check size={17} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="t-eyebrow mt-7 text-ink-muted">Rok: 2 dana</p>
            </div>
          </Reveal>

          <Reveal mode="fade" delay={0.1}>
            {/* Jaca kartica: to je paket koji vlasnik zaista gura. */}
            <div className="h-full rounded-md border border-accent-line bg-accent-wash p-7 md:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="t-h3 text-accent">Ključ u ruke</h3>
                <p className="text-2xl font-semibold tracking-[-0.03em] text-ink">800€</p>
              </div>
              <p className="t-body mt-5 text-ink-soft">
                Broj stranica po dogovoru, napredne animacije, tekst pisan po stvarnim
                pretragama.
              </p>
              <ul className="mt-6 space-y-3">
                {PREMIUM_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <Check size={17} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="t-eyebrow mt-7 text-ink-muted">Rok: 7 dana</p>
            </div>
          </Reveal>
        </div>

        <Reveal mode="fade" className="mt-10">
          <p className="t-body text-ink-soft">
            Osnovni te predstavlja. Ključ u ruke te prodaje.
          </p>
        </Reveal>

        {/* Dodatak: vec napravljen blok, samo je premesten ovde ispod paketa. */}
        <Reveal mode="fade" className="mt-14 md:mt-20">
          <div className="max-w-2xl rounded-md border border-accent-line bg-card p-7 md:p-9">
            <p className="t-eyebrow text-accent">Dodatak: 3D animacije i napredni efekti</p>
            <p className="mt-3 text-[15px] text-ink">
              <span className="font-semibold text-accent">+150€</span>
            </p>
            <p className="t-body mt-3 text-ink-soft">
              Ide uz oba paketa. Imam četiri žive demonstracije koje možeš da otvoriš na
              telefonu pre nego što odlučiš.
            </p>
            <Btn href="/usluge/animacije-i-efekti" variant="ghost" className="mt-5">
              Pogledaj primere
            </Btn>
          </div>
        </Reveal>
      </section>

      {/* Most ka analizi */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <Reveal mode="fade">
          <div className="max-w-3xl rounded-md border border-accent-line bg-card p-7 md:p-9">
            <p className="t-eyebrow text-accent">Pročitaj više</p>
            <h2 className="t-h3 mt-4">
              <Link
                href="/usluge/analiza-trzista"
                className="group inline-flex items-center gap-2 text-ink transition-colors duration-300 hover:text-accent"
              >
                Analiza tržišta i konkurencije
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </h2>
            <p className="t-body mt-4 text-ink-soft">
              Pre nego što napišem ijednu reč, gledam ko su tvoji kupci, ko ti je
              konkurencija i šta ljudi zaista kucaju kad traže tvoju uslugu. U paketu ključ
              u ruke je uključena u cenu.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Sajt je spreman za Google, ali to nije SEO */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-32">
        <SectionTitle lead="Ovo mešaju svi pa da razdvojim odmah.">
          Sajt je spreman za Google, ali to nije SEO
        </SectionTitle>

        <div className="mt-12 max-w-2xl space-y-6 md:mt-16">
          <ScrubText className="t-body text-ink-soft">
            Uz svaki sajt ide tehnički temelj. Sajt se brzo otvara, ima uredne adrese i
            naslove, prijavljen je na Google i Google ga može pročitati od prvog dana. To
            se odradi jednom, na kraju izrade, i ne plaća se posebno.
          </ScrubText>
          <ScrubText className="t-body text-ink-soft">
            Penjanje u rezultatima pretrage je poseban posao. Traje mesecima, radi se
            stalno, i to je zasebna usluga.
          </ScrubText>
        </div>

        <Reveal mode="fade" className="mt-8">
          <Link
            href="/usluge/seo-optimizacija"
            className="group inline-flex items-center gap-2 text-ink underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
          >
            SEO optimizacija
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </section>

      {/* Rok i placanje */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <Reveal mode="fade">
          <div className="max-w-3xl rounded-md border border-accent-line bg-card p-8 md:p-12">
            <Hairline />
            <h2 className="t-h2 mt-7 text-ink">Rok i plaćanje</h2>
            <p className="t-body mt-7 max-w-2xl text-ink-soft">
              Osnovni sajt je gotov za 2 dana, ključ u ruke za 7 dana, računato od trenutka
              kad dobijem materijal, fotografije i logo.
            </p>
            <p className="t-body mt-5 max-w-2xl text-ink-soft">
              Plaća se pola pre početka, pola kad je sajt gotov i kad si ga video.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <SectionTitle>Tri pitanja koja stalno dobijam</SectionTitle>
          <div className="md:pt-14">
            <ServiceFaq items={izradaSajtaFaq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-5 py-24 md:px-10 md:py-32">
        <Hairline />
        <Reveal as="h2" mode="lines" className="t-h2 mt-7 max-w-2xl text-ink">
          Reci mi čime se baviš
        </Reveal>
        <Reveal mode="fade" delay={0.12}>
          <p className="t-body mt-6 max-w-2xl text-ink-soft">
            Nije mi potreban formalan upit. Napiši u dve rečenice šta radiš i u kom gradu,
            pa ti kažem koji paket ti treba i da li ti uopšte treba.
          </p>
          <Btn href={contactHref("izrada-sajta")} className="mt-10">
            Javi se
          </Btn>
        </Reveal>
      </section>
    </div>
  );
}
