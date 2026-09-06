"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Btn from "@/components/Btn";
import Reveal from "@/components/Reveal";
import ScrubText from "@/components/ScrubText";
import ScrambleLabel from "@/components/ScrambleLabel";
import Hairline from "@/components/service/Hairline";
import SectionTitle from "@/components/service/SectionTitle";
import ServiceFaq from "@/components/service/ServiceFaq";
import { seoFaq } from "@/data/seoFaq";

/**
 * Sekcije namerno nisu jednake tezine. "Kako Google zapravo bira" je najveca na
 * stranici i jedina dobija py-40 na `elevated` povrsini; sekcija prepoznavanja
 * je samo pasus na `base`. Povrsine alterniraju base / elevated cistim rezom,
 * bez gradijenta, i to je ono sto razbija monotoniju, a ne dodatna boja.
 */

const MECHANISM = [
  {
    title: "Prvo mora da zna da postojiš",
    body: (
      <>
        <ScrubText className="t-body text-ink-soft">
          Google-ovi programi obilaze internet i čitaju stranice. Ono što pročitaju
          upisuju u indeks, ogroman spisak svega što na internetu postoji. Stranica
          koja nije u indeksu za Google ne postoji, ma koliko lepo izgledala.
        </ScrubText>
        <ScrubText className="t-body mt-5 text-ink-soft">
          Ovde je detalj koji većina ne zna.{" "}
          <strong className="font-medium text-ink">
            Indeksira se svaka stranica posebno, ne sajt kao celina.
          </strong>{" "}
          Početna, stranica usluge i stranica o firmi su tri odvojena ulaza u tvoj
          posao. Zbog toga jedna stranica ne može da pokrije sve što radiš, i zbog
          toga sajt od jedne strane skoro nikad ne rangira ozbiljno.
        </ScrubText>
      </>
    ),
  },
  {
    title: "Onda mora da proceni da si baš ti odgovor",
    body: (
      <ScrubText className="t-body text-ink-soft">
        Kad neko nešto ukuca, Google iz indeksa vadi stranice koje najbolje
        odgovaraju toj konkretnoj pretrazi. Čovek koji kuca „koliko košta zamena
        stolarije” i čovek koji kuca „pvc stolarija Valjevo” traže dve različite
        stvari. Prvi se raspituje, drugi je spreman da zove. Jedna stranica ne može
        da bude najbolji odgovor na oba pitanja i tu se gubi najviše posla.
      </ScrubText>
    ),
  },
  {
    title: "I na kraju mora da veruje da si ozbiljan",
    body: (
      <>
        <ScrubText className="t-body text-ink-soft">
          Kad ima više stranica koje odgovaraju na isto pitanje, presuđuju signali
          poverenja. Koliko brzo se sajt otvara, radi li kako treba na telefonu, da
          li ljudi ostaju na njemu ili se odmah vraćaju u pretragu, koliko sadržaja
          imaš o toj temi, ko te sa strane pominje i linkuje.
        </ScrubText>
        <ScrubText className="t-body mt-5 text-ink-soft">
          Zato sajt koji je jednom završen i zaboravljen polako pada, iako se ništa
          nije pokvarilo. Konkurencija radi, ti ne.
        </ScrubText>
      </>
    ),
  },
];

const WORK = [
  {
    title: "Ključne reči i raspored po stranicama",
    body: "Iz analize izađe spisak pretraga. Svaka od njih dobija svoju stranicu, da bi sajt imao više ulaza umesto jednog.",
  },
  {
    title: "Tehnička optimizacija",
    body: "Brzina, ponašanje na telefonu, struktura naslova, interno povezivanje stranica, sitemap i podaci koje Google čita da bi razumeo šta je koja stranica. Deo koji tvoj kupac nikad ne vidi, a Google ga vidi prvi.",
  },
  {
    title: "Sadržaj koji odgovara na pitanje",
    body: "Tekst pisan za čoveka koji traži rešenje. Nabijanje ključnih reči ne radi od 2012. i danas pravi više štete nego koristi.",
  },
];

const TIMELINE = [
  {
    when: "Prve nedelje.",
    body: "Tehnički deo i pretrage vezane za tvoj grad i tvoju uslugu. Tu se vidi najbrže.",
  },
  {
    when: "Do drugog meseca.",
    body: "Izlaziš na prvu stranu i za glavne pretrage iz svoje delatnosti. Kod lokalnih firmi konkurencija je tanka, retko ko od njih radi bilo šta na sajtu, pa se prostor osvaja brzo.",
  },
  {
    when: "Dalje.",
    body: "Držanje pozicije i širenje na nove pretrage. Konkurencija ne miruje, pa ovaj posao nikad nije sasvim gotov.",
  },
];

export default function SeoOptimizacija() {
  return (
    <div className="bg-base">
      {/* Hero */}
      <section className="px-5 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <Reveal mode="fade">
          <p className="t-eyebrow text-accent">
            <ScrambleLabel>SEO optimizacija</ScrambleLabel>
          </p>
        </Reveal>
        <Reveal as="h1" mode="lines" className="t-display mt-8 max-w-[18ch] text-ink">
          Konkurent koji radi lošiji posao od tebe stoji iznad tebe na Google-u
        </Reveal>
        <Reveal as="p" mode="fade" delay={0.15} className="t-lead mt-8 max-w-2xl text-ink-soft">
          To se ne rešava time što ćeš platiti da budeš prvi. Rešava se time što ćeš
          postati odgovor na pitanje koje ljudi kucaju.
        </Reveal>
        <Reveal mode="fade" delay={0.22}>
          <p className="t-body mt-10 max-w-xl border-l-2 border-accent pl-6 text-ink-muted">
            Ako hoćeš, radim bez ijednog dinara unapred, na procenat od onoga što ti
            donesem. Objašnjenje je na dnu strane.
          </p>
          <Btn href="/kontakt" className="mt-10">
            Pošalji sajt na proveru
          </Btn>
        </Reveal>
      </section>

      {/* Prepoznavanje: bez naslova, sitniji tekst, najlaksa sekcija na strani. */}
      <section className="px-5 py-20 md:px-10">
        <div className="max-w-2xl space-y-6">
          <ScrubText className="text-[15px] leading-relaxed text-ink-soft">
            Znaš da si na pravoj strani ako ti je poznata bar jedna od ovih situacija.
            Ukucaš svoju delatnost i grad, izađu konkurenti a tebe nema ni na trećoj
            strani. Sav posao ti stiže preko preporuke i Instagrama, i staje čim
            prestaneš da guraš. Plaćaš reklame, rade, ali sve stane onog dana kad
            ugasiš budžet.
          </ScrubText>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Ako sajt tek praviš, SEO se ugrađuje odmah{" "}
            <Link
              href="/usluge/izrada-sajta"
              className="text-ink underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-accent"
            >
              dok se gradi
            </Link>
            , i tad je najjeftiniji. Struktura se postavi kako treba iz prve umesto da
            se posle prepravlja gotov sajt.
          </p>
        </div>
      </section>

      {/* Mehanizam: najveca sekcija na stranici. */}
      <section className="bg-elevated px-5 py-28 md:px-10 md:py-40">
        <SectionTitle lead="Nema tu magije. Ima tri stvari i svaka od njih je posao koji neko mora da odradi.">
          Kako Google zapravo bira ko će biti prvi
        </SectionTitle>

        <div className="mt-16 md:mt-24">
          {MECHANISM.map((block, i) => (
            <div
              key={block.title}
              className={i > 0 ? "mt-14 border-t border-subtle pt-14 md:mt-20 md:pt-20" : undefined}
            >
              <div className="grid gap-6 md:grid-cols-[1fr_1.6fr] md:gap-16">
                <ScrubText as="h3" className="t-h3 max-w-sm text-ink" from={0.22}>
                  {block.title}
                </ScrubText>
                <div className="max-w-2xl">{block.body}</div>
              </div>
            </div>
          ))}
        </div>

        <Reveal mode="fade" className="mt-20 md:mt-28">
          <div className="max-w-3xl rounded-md border border-accent-line bg-card p-7 md:p-10">
            <p className="t-body text-ink-soft">
              Do ovde većina pomisli da to može i sama. Tehnički može, ništa od ovoga
              nije tajna. Problem je što se ne radi jednom nego stalno, i što se
              odustane u drugom mesecu jer se rezultat još ne vidi. Onda ostane sajt na
              kom je nešto započeto i ništa dovršeno, a to je gore nego da se nije
              diralo.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Sta tu radim */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <SectionTitle>Šta tu radim</SectionTitle>

        <div className="mt-14 max-w-3xl md:mt-20">
          <Reveal mode="fade">
            <div className="rounded-md border border-accent-line bg-card p-7 md:p-9">
              <p className="t-eyebrow text-accent">Pročitaj više</p>
              <h3 className="t-h3 mt-4">
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
              </h3>
              <p className="t-body mt-4 text-ink-soft">
                Odavde počinje svaka saradnja. Ko su tvoji kupci, ko je konkurencija i
                zašto je iznad tebe, i šta ljudi zaista kucaju u pretragu. Kod SEO-a je
                uključena u cenu.
              </p>
            </div>
          </Reveal>

          {WORK.map((item) => (
            <Reveal key={item.title} mode="fade" className="mt-10 border-t border-subtle pt-10">
              <h3 className="t-h3 text-ink">{item.title}</h3>
              <p className="t-body mt-4 text-ink-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Koliko traje */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-32">
        <SectionTitle>Koliko traje</SectionTitle>

        {/* Tacke na liniji: vertikalno na telefonu, vodoravno od md navise. */}
        <ol className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {TIMELINE.map((step) => (
            <li key={step.when} className="relative pl-8 md:pl-0 md:pt-8">
              <span
                aria-hidden
                className="absolute left-0 top-2 h-px w-4 bg-accent md:top-0 md:h-px md:w-full md:bg-subtle"
              />
              <span
                aria-hidden
                className="absolute left-[-3px] top-[5px] h-2 w-2 rounded-full bg-accent md:left-0 md:top-[-3.5px]"
              />
              <Reveal mode="fade">
                <p className="t-h3 text-ink">{step.when}</p>
                <p className="t-body mt-3 max-w-sm text-ink-soft">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal mode="fade" className="mt-14 md:mt-20">
          <p className="t-body border-t border-subtle pt-8 text-ink-soft">
            Treba ti posao odmah?{" "}
            <Link
              href="/usluge/google-ads"
              className="text-ink underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-accent"
            >
              Reklame ga donose dok SEO stigne.
            </Link>
          </p>
        </Reveal>
      </section>

      {/* Izvestaj */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <SectionTitle>Šta vidiš svakog meseca</SectionTitle>
          <div className="max-w-2xl space-y-6 md:pt-14">
            <ScrubText className="t-body text-ink-soft">
              Izveštaj na jednoj strani, bez stručnih izraza. Za koje pretrage izlaziš i
              na kojoj si poziciji u odnosu na prošli mesec, koliko je ljudi videlo tvoj
              sajt u pretrazi, koliko ih je kliknulo i koliko ih se javilo. Uz to šta sam
              radio taj mesec i šta radim sledeći.
            </ScrubText>
            <ScrubText className="t-body text-ink-soft">
              Ovo postoji da bi mogao da proveriš da radim. Podaci idu direktno iz Google
              Search Console-a i Analytics-a, nalozi su tvoji i otvoreni su ti kad god
              hoćeš da pogledaš bez mene.
            </ScrubText>
          </div>
        </div>
      </section>

      {/* Kako se placa */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-36">
        <SectionTitle>Kako se plaća</SectionTitle>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          <Reveal mode="fade">
            <div className="h-full rounded-md border border-subtle bg-card p-7 md:p-9">
              <h3 className="t-h3 text-ink">Fiksno mesečno</h3>
              <p className="t-body mt-5 text-ink-soft">
                Dogovorimo iznos i on se ne menja. Znaš tačno koliki ti je trošak i možeš
                da ga uračunaš unapred.
              </p>
            </div>
          </Reveal>

          <Reveal mode="fade" delay={0.1}>
            {/* Jaca kartica: to je ponuda koju vlasnik zaista gura. */}
            <div className="h-full rounded-md border border-accent-line bg-accent-wash p-7 md:p-9">
              <h3 className="t-h3 text-accent">Na procenat, bez ičega unapred</h3>
              <p className="t-body mt-5 text-ink-soft">
                Ako ti je sajt već u pristojnom stanju, SEO ne naplaćujem unapred. Radim
                za procenat od onoga što ti donesem i zarađujem tek kad ti zaradiš.
              </p>
              <p className="t-body mt-4 text-ink-soft">
                Nudim ovo zato što znam šta radim. Ako ne bude rezultata, nisi platio
                ništa.
              </p>
            </div>
            <p className="mt-5 text-[13px] leading-relaxed text-ink-muted">
              Za ovu opciju mi treba uvid u to koliko ti upita i poslova stiže i dogovor
              šta se tačno računa. To ide u ugovor pre početka, da posle ne bude
              nesporazuma.
            </p>
          </Reveal>
        </div>

        <Reveal mode="fade" className="mt-12">
          <Btn href="/modeli-naplate" variant="ghost">
            Ostali modeli naplate
          </Btn>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <SectionTitle>Tri pitanja koja stalno dobijam</SectionTitle>
          <div className="md:pt-14">
            <ServiceFaq items={seoFaq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-5 py-24 md:px-10 md:py-32">
        <Hairline />
        <Reveal as="h2" mode="lines" className="t-h2 mt-7 max-w-2xl text-ink">
          Prvo da vidimo gde si sada
        </Reveal>
        <Reveal mode="fade" delay={0.12}>
          <p className="t-body mt-6 max-w-2xl text-ink-soft">
            Pošalji mi adresu svog sajta. Vratim ti se sa konkretnim spiskom. Za koje
            pretrage trenutno izlaziš, ko je iznad tebe i zašto, i šta bih radio prvo.
          </p>
          <Btn href="/kontakt" className="mt-10">
            Pošalji sajt
          </Btn>
          <p className="mt-6 text-[13px] text-ink-muted">
            <Link
              href="/usluge/izrada-sajta"
              className="underline decoration-transparent underline-offset-4 transition-colors duration-300 hover:text-ink hover:decoration-accent"
            >
              Nemaš još sajt?
            </Link>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
