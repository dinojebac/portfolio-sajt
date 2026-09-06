"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Btn from "@/components/Btn";
import Reveal from "@/components/Reveal";
import ScrubText from "@/components/ScrubText";
import ScrambleLabel from "@/components/ScrambleLabel";
import Hairline from "@/components/service/Hairline";
import SectionTitle from "@/components/service/SectionTitle";
import { demos } from "@/data/demos";

/**
 * Jedina stranica usluga na kojoj tekst nije glavni argument. Zato demo sekcija
 * dolazi odmah posle heroja, pre svakog objasnjenja: cela ponuda pociva na tome
 * da covek otvori tudji sajt i sam vidi razliku.
 *
 * Stavke u „Sta konkretno radim” su namerno razlicite duzine i stoje jedna
 * ispod druge, ne u karticama jednake visine. Kartice bi ih izjednacile, pa bi
 * konfigurator, koji je alat i najveci deo posla, izgledao isto koliko i jedan
 * prelaz izmedju sekcija.
 */

const WORK = [
  {
    lead: "Otkrivanje sadržaja na skrol.",
    body: "Tekst i slike ulaze u kadar dok se spuštaš.",
    width: "max-w-lg",
  },
  {
    lead: "Prikaz procesa korak po korak.",
    body: "Kao na sajtu destilerije. Za sve što se radi u fazama, ovo je najjasniji način da čovek shvati šta se tačno dešava između trenutka kad te pozove i trenutka kad je posao gotov.",
    width: "max-w-2xl",
  },
  {
    lead: "Krupni planovi.",
    body: "Za zanate gde je ceo kvalitet u detalju.",
    width: "max-w-md",
  },
  {
    lead: "Video umesto galerije.",
    body: "Ako je pokret deo onoga što prodaješ.",
    width: "max-w-md",
  },
  {
    lead: "Konfiguratori.",
    body: "Mušterija sama sklopi šta hoće i pošalje upit sa gotovom specifikacijom. Ovo nije animacija nego alat. Štedi ti pozive u kojima objašnjavaš cene i donosi upite od ljudi koji su već razmislili.",
    width: "max-w-2xl",
  },
  {
    lead: "Prelazi između sekcija,",
    body: "da se sajt oseća kao celina, a ne kao pet zalepljenih delova.",
    width: "max-w-xl",
  },
];

export default function AnimacijeIEfekti() {
  return (
    <div className="bg-base">
      {/* Hero */}
      <section className="px-5 pb-20 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal mode="fade">
          <p className="t-eyebrow text-accent">
            <ScrambleLabel>Animacije i efekti</ScrambleLabel>
          </p>
        </Reveal>
        <Reveal as="h1" mode="lines" className="t-display mt-8 max-w-[17ch] text-ink">
          Otvori sajt svog konkurenta, pa otvori ove četiri
        </Reveal>
        <Reveal as="p" mode="fade" delay={0.15} className="t-lead mt-8 max-w-2xl text-ink-soft">
          Za deset sekundi ti bude jasno zašto ovo košta više, a da ti niko ništa ne
          objašnjava.
        </Reveal>
        <Reveal mode="fade" delay={0.22}>
          <Btn href="#demo" arrow={false} className="mt-10">
            Pogledaj uživo
          </Btn>
        </Reveal>
      </section>

      {/* Demo mreza: dolazi pre svakog objasnjenja, jer ona je argument. */}
      <section id="demo" className="scroll-mt-8 bg-elevated px-5 py-24 md:px-10 md:py-36">
        <SectionTitle>Otvori i vidi sam</SectionTitle>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
          {demos.map((demo, i) => (
            <Reveal key={demo.href} mode="fade" delay={(i % 2) * 0.08}>
              <article className="flex h-full flex-col">
                <a
                  href={demo.href}
                  target="_blank"
                  rel="noopener"
                  tabIndex={-1}
                  aria-hidden
                  className="group block overflow-hidden rounded-md border border-subtle"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={demo.preview}
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </a>

                <h3 className="t-h3 mt-7 text-ink">{demo.name}</h3>
                <p className="t-eyebrow mt-2 text-ink-muted">{demo.trade}</p>
                <p className="t-body mt-4 flex-1 text-ink-soft">{demo.body}</p>

                <div className="mt-7">
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex items-center gap-2 rounded-full border border-subtle px-5 py-3 text-[15px] font-medium text-ink transition-colors duration-300 hover:border-accent-line hover:text-accent"
                  >
                    Otvori {demo.name}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Zasto ovo nije bacanje para */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <SectionTitle>Zašto ovo nije bacanje para</SectionTitle>

        <div className="mt-14 max-w-2xl space-y-7 md:mt-20">
          <ScrubText className="t-body text-ink-soft">
            Prvo, čovek ostane duže. Sajt na kom sve stoji odjednom pregleda se za pet
            sekundi i zatvori. Ovaj se otkriva dok skroluješ, pa se skroluje do kraja.
            Google meri koliko se ljudi zadržava, tako da ti to indirektno pomaže i u
            pretrazi.
          </ScrubText>
          <ScrubText className="t-body text-ink-soft">
            Drugo, i važnije: pokazuješ umesto da tvrdiš. Keramičar može da napiše da
            radi precizno. Može i da ti pokaže fugu izbliza, toliko blizu da se vidi da
            nema greške. Ono drugo ne traži da mu iko veruje na reč.
          </ScrubText>
          <ScrubText className="t-body text-ink-soft">
            I treće, ono što niko ne voli da kaže naglas: izgledaš skuplje. Kad čovek
            uporedi tvoj sajt i sajt konkurenta rađen na šablonu, tvoja cena mu deluje
            opravdano pre nego što je čuo ijedan argument.
          </ScrubText>
        </div>
      </section>

      {/* Sta konkretno radim */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-36">
        <SectionTitle>Šta konkretno radim</SectionTitle>

        <div className="mt-14 md:mt-20">
          {WORK.map((item, i) => (
            <div
              key={item.lead}
              className={i > 0 ? "mt-9 border-t border-subtle pt-9" : undefined}
            >
              <ScrubText className={`t-body text-ink-soft ${item.width}`}>
                <strong className="font-medium text-ink">{item.lead}</strong> {item.body}
              </ScrubText>
            </div>
          ))}
        </div>
      </section>

      {/* Kad ovo nema smisla */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <SectionTitle lead="Neću ti prodati nešto što ti ne treba.">
          Kad ovo nema smisla
        </SectionTitle>

        <div className="mt-12 max-w-2xl space-y-6 md:mt-16">
          <ScrubText className="t-body text-ink-soft">
            Ako ti posao dolazi od ljudi kojima je hitno, popravka, hitna intervencija,
            vodoinstalater u dva ujutru, animacije te koštaju vremena učitavanja i ne
            donose ništa. Tom čoveku treba broj telefona na ekranu i ništa više.
          </ScrubText>
          <ScrubText className="t-body text-ink-soft">
            Isto važi ako ti ceo posao drže stalne mušterije koje te već znaju.
          </ScrubText>
          <ScrubText className="t-body border-l-2 border-accent pl-6 text-ink">
            Ovo se isplati kad kupac bira između tebe i još nekoliko, kad poredi, i kad
            utisak o tome koliko si ozbiljan presuđuje.
          </ScrubText>
        </div>
      </section>

      {/* Cena */}
      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <Reveal mode="fade">
          <div className="max-w-3xl rounded-md border border-accent-line bg-card p-8 md:p-12">
            <Hairline />
            <h2 className="t-h2 mt-7 text-ink">Cena</h2>
            <p className="mt-7 text-[clamp(1.375rem,2.8vw,2rem)] font-medium leading-snug text-ink">
              <span className="text-accent">150€</span> uz izradu sajta.
            </p>
            <p className="t-body mt-7 max-w-2xl text-ink-soft">
              Ide kao dodatak na osnovni paket ili na ključ u ruke. Ako sajt već postoji i
              radio ga je neko drugi, javi se pa da vidim šta može da se uradi na njemu.
            </p>
            <Btn href="/kontakt" className="mt-9">
              Javi se
            </Btn>
            <p className="mt-6 text-[13px] text-ink-muted">
              <Link
                href="/usluge/izrada-sajta"
                className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-ink hover:decoration-accent"
              >
                Pogledaj pakete izrade sajta
              </Link>
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-card px-5 py-24 md:px-10 md:py-32">
        <Hairline />
        <Reveal as="h2" mode="lines" className="t-h2 mt-7 max-w-2xl text-ink">
          Otvori demo na telefonu
        </Reveal>
        <Reveal mode="fade" delay={0.12}>
          <p className="t-body mt-6 max-w-2xl text-ink-soft">
            Ozbiljno, otvori. Nijedan opis ne prenosi utisak koji dobiješ kad sam
            skroluješ.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {demos.map((demo) => (
              <a
                key={demo.href}
                href={demo.href}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full border border-subtle px-4 py-2.5 text-[14px] text-ink-soft transition-colors duration-300 hover:border-accent-line hover:text-accent"
              >
                {demo.name}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>

          <Btn href="/kontakt" className="mt-10">
            Hoću ovako nešto
          </Btn>
        </Reveal>
      </section>
    </div>
  );
}
