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
import { zakazivanjeFaq } from "@/data/zakazivanjeFaq";

/**
 * Ista pravila kao na ostalim stranicama usluga: povrsine alterniraju
 * base / elevated cistim rezom, sekcije nisu jednake tezine, a scrub hairline
 * iznad svakog H2 drzi stranicu kao jedan dokument.
 *
 * Najveca sekcija je „Kako to izgleda”: to je jedino mesto gde covek vidi da li
 * ovo resava njegov problem, sve ostalo je posledica.
 */

const SIDES = [
  {
    title: "Kod tvog klijenta",
    paragraphs: [
      "Otvori aplikaciju, vidi kalendar sa slobodnim i zakazanim terminima. Ako imaš više zaposlenih, prvo bira kod koga hoće termin ili ostavlja aplikaciji da mu ponudi prvi slobodan. Izabere uslugu i vreme, ostavi ime i broj. Gotovo. Potvrdu i podsetnik dva sata pre termina dobija kao notifikaciju direktno od aplikacije.",
      "Ako mu nešto iskrsne, sam otkaže ili pomeri termin iz aplikacije, ne mora da te zove.",
    ],
  },
  {
    title: "Kod tebe",
    paragraphs: [
      "Vidiš sve termine na jednom mestu, po danima i po zaposlenom. Sam podešavaš radno vreme, pauze, koliko traje koja usluga i koliko ljudi može da primi svaki zaposleni u isto vreme. Kad neko ne radi, zatvoriš mu termine i niko ne može da se zakaže kod njega.",
      "Dvoje ljudi ne mogu da se zakažu za isti termin kod istog zaposlenog, sistem to sam blokira. Čim neko zakaže, otkaže ili pomeri termin, stigne ti notifikacija u istom trenutku.",
    ],
  },
];

const CHANGES = [
  {
    lead: "Zakazuje se i kad ti spavaš.",
    body: "Najviše ljudi zakazuje uveče, posle deset, kad ti odavno ne radiš. Ti pozivi ti sada ne stižu uopšte.",
  },
  {
    lead: "Manje praznih termina.",
    body: "Podsetnik pred termin je jedina stvar koja stvarno smanjuje broj onih koji ne dođu, a to je i najskuplji problem u ovom poslu.",
  },
  {
    lead: "Ne plaćaš proviziju po rezervaciji.",
    body: "Sistem je tvoj i vezan za tvoj sajt. Niko ti ne uzima procenat od svakog termina i niko ti ne prikazuje konkurenciju pored tebe.",
  },
];

const INCLUDED = [
  "Kalendar sa slobodnim terminima, podešen prema tvom radnom vremenu",
  "Podrška za više zaposlenih, svaki sa svojim terminima i radnim vremenom",
  "Automatska zaštita od duplog zakazivanja",
  "Potvrda klijentu odmah po zakazivanju",
  "Podsetnik dva sata pre termina",
  "Klijent sam otkazuje ili pomera svoj termin",
  "Tvoj pregled svih termina, po danima i po zaposlenom",
  "Podešavanje usluga, trajanja i pauza",
  "Instalacija na telefon sa tvog sajta, bez Play Store-a",
  "Sve u tvojim bojama i pod tvojim imenom",
  "Održavanje i ispravke dok traje pretplata",
];

export default function ZakazivanjeTermina() {
  return (
    <div className="bg-base">
      {/* Hero */}
      <section className="px-5 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <Reveal mode="fade">
          <p className="t-eyebrow text-accent">
            <ScrambleLabel>Aplikacija za zakazivanje termina</ScrambleLabel>
          </p>
        </Reveal>
        <Reveal as="h1" mode="lines" className="t-display mt-8 max-w-[19ch] text-ink">
          Telefon ti zvoni dok radiš, a ko se ne dozove obično ne zove drugi put
        </Reveal>
        <Reveal as="p" mode="fade" delay={0.15} className="t-lead mt-8 max-w-2xl text-ink-soft">
          Aplikacija u kojoj klijent sam vidi slobodne termine i zakaže se za deset
          sekundi. Bez poziva, bez dopisivanja, bez tvog vremena.
        </Reveal>
        <Reveal mode="fade" delay={0.22}>
          <p className="t-body mt-10 max-w-xl border-l-2 border-accent pl-6 text-ink-muted">
            Instalira se direktno sa tvog sajta. Ikonica ostane na telefonu kao svaka
            druga aplikacija, a nema je ni na Google Play-u ni na App Store-u.
          </p>
          <Btn href="/kontakt" className="mt-10">
            Javi se
          </Btn>
        </Reveal>
      </section>

      {/* Prepoznavanje: bez naslova, najlaksa sekcija na strani. */}
      <section className="px-5 py-20 md:px-10">
        <div className="max-w-2xl space-y-6">
          <ScrubText className="text-[15px] leading-relaxed text-ink-soft">
            Ovako to obično izgleda: radiš, telefon zvoni, ne možeš da se javiš. Čovek
            zove konkurenciju. Uveče nađeš tri propuštena poziva i ne znaš ko je šta
            hteo. Sutradan dvoje ne dođe na termin jer su zaboravili, a ti si im držao
            mesto prazno.
          </ScrubText>
          <ScrubText className="text-[15px] leading-relaxed text-ink-soft">
            Svaka od tih stvari je izgubljen novac i nijedna se ne rešava time što ćeš se
            više truditi.
          </ScrubText>
        </div>
      </section>

      {/* Kako to izgleda: najveca sekcija na stranici. */}
      <section className="bg-elevated px-5 py-28 md:px-10 md:py-40">
        <SectionTitle>Kako to izgleda</SectionTitle>

        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-2 md:gap-16">
          {SIDES.map((side) => (
            <div key={side.title} className="border-t border-subtle pt-10">
              <ScrubText as="h3" className="t-h3 text-ink" from={0.22}>
                {side.title}
              </ScrubText>
              <div className="mt-6 space-y-5">
                {side.paragraphs.map((text) => (
                  <ScrubText key={text.slice(0, 40)} className="t-body text-ink-soft">
                    {text}
                  </ScrubText>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sta ovo stvarno menja */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <SectionTitle>Šta ovo stvarno menja</SectionTitle>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {CHANGES.map((item, i) => (
            <Reveal key={item.lead} mode="fade" delay={i * 0.08}>
              <div className="border-t border-subtle pt-7">
                <p className="t-body max-w-sm text-ink-soft">
                  <strong className="font-medium text-ink">{item.lead}</strong> {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Zasto ovo nije obicna aplikacija */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <SectionTitle>Zašto ovo nije „obična aplikacija”</SectionTitle>
          <div className="max-w-2xl space-y-6 md:pt-14">
            <ScrubText className="t-body text-ink-soft">
              Prava aplikacija se skida sa Google Play-a ili App Store-a. Košta da se
              napravi, košta da se održava, i traži od klijenta da je traži, skine i
              sačeka.
            </ScrubText>
            <ScrubText className="t-body text-ink-soft">
              Ovo radi isto, a instalira se sa tvog sajta u dva klika. Ikonica stoji na
              telefonu, otvara se preko celog ekrana, radi na Androidu i na iPhone-u. Za
              klijenta je razlika neprimetna, a tebi ne pravi trošak koji prava aplikacija
              pravi.
            </ScrubText>
          </div>
        </div>
      </section>

      {/* Sta je ukljuceno */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <SectionTitle>Šta je uključeno</SectionTitle>

        <Reveal mode="fade" className="mt-14 md:mt-20">
          <div className="max-w-2xl rounded-md border border-subtle bg-card p-7 md:p-9">
            <ul className="space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="t-body flex gap-4 text-ink-soft">
                  <Check size={18} className="mt-1 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Most ka analizi */}
      <section className="bg-elevated px-5 py-20 md:px-10 md:py-28">
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
              Pre postavljanja gledam kako tvoji klijenti zakazuju sada i gde ti se gubi
              najviše termina. Uz ovu uslugu je uključena u cenu.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Cena i rok */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <Reveal mode="fade">
          <div className="max-w-3xl rounded-md border border-accent-line bg-card p-8 md:p-12">
            <Hairline />
            <h2 className="t-h2 mt-7 text-ink">Cena i rok</h2>
            <p className="mt-7 text-[clamp(1.375rem,2.8vw,2rem)] font-medium leading-snug text-ink">
              <span className="text-accent">4.000 dinara</span> mesečno.
            </p>
            <p className="t-body mt-7 max-w-2xl text-ink-soft">
              Postavljanje traje 24 sata. Za to vreme mi treba samo spisak usluga, koliko
              koja traje, tvoje radno vreme i tvoje boje i logo da aplikacija izgleda kao
              tvoja.
            </p>
            <p className="t-body mt-5 max-w-2xl text-ink-soft">
              Nema ugovora na godinu dana. Prestaneš da plaćaš, sistem se gasi, ali ti
              podaci o klijentima i terminima ostaju i dobijaš ih u fajlu.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <SectionTitle>Pitanja koja stalno dobijam</SectionTitle>
          <div className="md:pt-14">
            <ServiceFaq items={zakazivanjeFaq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-5 py-24 md:px-10 md:py-32">
        <Hairline />
        <Reveal as="h2" mode="lines" className="t-h2 mt-7 max-w-2xl text-ink">
          Postavljanje traje jedan dan
        </Reveal>
        <Reveal mode="fade" delay={0.12}>
          <p className="t-body mt-6 max-w-2xl text-ink-soft">
            Reci mi čime se baviš, koje usluge nudiš i koliko vas radi. Sutra u ovo vreme
            aplikacija radi pod tvojim imenom.
          </p>
          <Btn href="/kontakt" className="mt-10">
            Javi se
          </Btn>
        </Reveal>
      </section>
    </div>
  );
}
