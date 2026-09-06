"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Btn from "@/components/Btn";
import Reveal from "@/components/Reveal";
import ScrubText from "@/components/ScrubText";
import ScrambleLabel from "@/components/ScrambleLabel";
import Breadcrumb from "@/components/service/Breadcrumb";
import Hairline from "@/components/service/Hairline";
import SectionTitle from "@/components/service/SectionTitle";

const DELIVERABLES = [
  "Profil tvog kupca i šta ga tera da kupi",
  "Pregled konkurencije sa konkretnim primerima gde su jači, a gde slabiji od tebe",
  "Spisak pretraga sa brojevima, poređan po prioritetu",
  "Preporuka gde da uložiš i kojim redom",
  "Plan za prvih 90 dana",
];

const METHOD = [
  {
    title: "Ko su ti kupci i kako zapravo kupuju",
    paragraphs: [
      "Podatak tipa „muškarci od 25 do 45” ne pomaže nikome. Treba znati konkretnije stvari. Koji problem čovek ima u trenutku kad te traži, koliko mu se žuri, čega se plaši kad bira izvođača i koliko uopšte zna o tome što kupuje.",
      "Od toga zavisi sve ostalo. Čoveku kome je hitno neće ni pasti na pamet da otvori stranicu „o nama”. Njemu treba broj telefona na svakom ekranu i osećaj da se javljaš odmah. Neko ko renoviranje planira od proleća pročitaće sve, pregledaće svaku sliku i uzeti tri ponude. Ista delatnost, a sajt mora da izgleda drugačije.",
    ],
  },
  {
    title: "Ko je konkurencija i zašto je iznad tebe",
    paragraphs: [
      "Uzmem pet do deset firmi koje su trenutno na vrhu za pretrage od kojih ti zavisi posao i prođem ih jednu po jednu. Šta nude, kako naplaćuju, kako se predstavljaju, koliko im se brzo otvara sajt, šta imaju što kod tebe ne postoji.",
      "I ono zbog čega se ovo najviše i radi: šta rade loše. Skoro uvek se nađe rupa. Negde svi imaju isti prepisan tekst. Negde niko ne stavlja cene. Negde niko ne pokazuje gotove radove, ili se svima sajt raspada na telefonu. Ta rupa postaje tvoja pozicija.",
    ],
  },
  {
    title: "Šta ljudi zaista kucaju u pretragu",
    paragraphs: [
      "Spisak stvarnih pretraga u tvojoj delatnosti i tvom gradu, sa brojem ljudi koji ih ukuca svakog meseca i procenom koliko je teško izaći na prvu stranu za svaku od njih.",
      "Redosled se ne pravi po tome koja pretraga ima najveći broj. Pravi se po tome koliko je čovek koji je kuca blizu tome da plati. Pretraga koju mesečno ukuca dve hiljade radoznalih vredi manje od one koju ukuca pedeset ljudi sa novčanikom u ruci.",
    ],
  },
];

const CHANNELS = [
  {
    title: "SEO optimizacija",
    href: "/usluge/seo-optimizacija",
    body: "Kad te ljudi traže na Google-u, ali te ne nalaze.",
  },
  {
    title: "Google Ads",
    href: "/usluge/google-ads",
    body: "Kad ti treba posao odmah, a ne za dva meseca.",
  },
  {
    title: "Instagram oglašavanje",
    href: "/usluge/instagram-oglasavanje",
    body: "Kad se tvoj proizvod prodaje tako što ga vide, a nisu ga tražili.",
  },
];

export default function AnalizaTrzista() {
  return (
    <div className="bg-base">
      {/* Hero */}
      <section className="px-5 pb-24 pt-10 md:px-10 md:pb-32 md:pt-14">
        <Breadcrumb
          items={[
            { label: "Usluge", href: "/usluge" },
            { label: "Analiza tržišta i konkurencije" },
          ]}
        />

        <Reveal mode="fade" className="mt-12 md:mt-16">
          <p className="t-eyebrow text-accent">
            <ScrambleLabel>Analiza tržišta i konkurencije</ScrambleLabel>
          </p>
        </Reveal>
        <Reveal as="h1" mode="lines" className="t-display mt-8 max-w-[16ch] text-ink">
          Analiza tržišta i konkurencije
        </Reveal>
        <Reveal as="p" mode="fade" delay={0.15} className="t-lead mt-8 max-w-2xl text-ink-soft">
          Najveći deo para koji ode na sajtove i oglašavanje potroši se na pogrešnu
          pretpostavku sa početka. Ovo postoji da se pretpostavke provere dok još
          ništa nije potrošeno.
        </Reveal>
        <Reveal mode="fade" delay={0.22}>
          <p className="mt-10 max-w-xl border-l-2 border-accent pl-6 text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium leading-snug text-ink">
            <span className="text-accent">5.000 dinara.</span> Gotovo za{" "}
            <span className="text-accent">24 sata</span>.
          </p>
          <Btn href="/kontakt" className="mt-10">
            Naruči analizu
          </Btn>
        </Reveal>
      </section>

      {/* Pogresne pretpostavke: bez naslova, kratki razmaknuti pasusi. */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="max-w-2xl space-y-10">
          <ScrubText className="t-body text-ink-soft">
            Vlasnik misli da kupac gleda ko je najjeftiniji, a kupac u stvari traži
            nekog ko će doći u dogovoreno vreme.
          </ScrubText>
          <ScrubText className="t-body text-ink-soft">
            Pretpostavi se da ljudi kucaju „stolarija”, a oni kucaju „zamena prozora
            cena”.
          </ScrubText>
          <ScrubText className="t-body text-ink-soft">
            Ode ceo budžet na Instagram, a u toj delatnosti se sve dešava na Google-u,
            u trenutku kad je već pukla cev i kad se ne pita za cenu.
          </ScrubText>
          <ScrubText className="t-body border-l-2 border-accent pl-6 text-ink">
            Svaka od te tri greške košta mesecima i para i vremena, a proveri se za
            jedan dan.
          </ScrubText>
        </div>
      </section>

      {/* Sta dobijas */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-36">
        <SectionTitle lead="Gotov dokument, pisan tako da ga razumeš sam.">
          Šta dobijaš
        </SectionTitle>

        <Reveal mode="fade" className="mt-14 md:mt-20">
          <div className="max-w-2xl rounded-md border border-subtle bg-card p-7 md:p-9">
            <ul className="space-y-4">
              {DELIVERABLES.map((item) => (
                <li key={item} className="t-body flex gap-4 text-ink-soft">
                  <Check size={18} className="mt-1 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="t-body mt-8 max-w-2xl text-ink-soft">
            Dokument ostaje tvoj. Ako posle njega odlučiš da radiš sam ili sa nekim
            drugim, sve što sam našao ide sa tobom.
          </p>
        </Reveal>
      </section>

      {/* Cena i rok: uska sekcija, jasno odvojena. */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <Reveal mode="fade">
          <div className="max-w-3xl rounded-md border border-accent-line bg-card p-8 md:p-12">
            <Hairline />
            <h2 className="t-h2 mt-7 text-ink">Cena i rok</h2>
            <p className="mt-7 text-[clamp(1.375rem,2.8vw,2rem)] font-medium leading-snug text-ink">
              <span className="text-accent">5.000 dinara</span>, gotovo za{" "}
              <span className="text-accent">24 sata</span> od trenutka kad mi kažeš čime
              se baviš i gde radiš.
            </p>
            <p className="t-body mt-7 max-w-2xl text-ink-soft">
              Ako uzimaš neku od mojih usluga, analiza je uključena u cenu i ne plaćaš je
              posebno. Plaća se samo kad je uzimaš samu, bez ikakve obaveze da nastavimo.
              U tom slučaju se taj iznos odbija od ukupne cene ako se kasnije dogovorimo
              za saradnju.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Kako to radim */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <SectionTitle>Kako to radim</SectionTitle>

        <div className="mt-16 md:mt-24">
          {METHOD.map((block, i) => (
            <div
              key={block.title}
              className={i > 0 ? "mt-14 border-t border-subtle pt-14 md:mt-20 md:pt-20" : undefined}
            >
              <div className="grid gap-6 md:grid-cols-[1fr_1.6fr] md:gap-16">
                <ScrubText as="h3" className="t-h3 max-w-sm text-ink" from={0.22}>
                  {block.title}
                </ScrubText>
                <div className="max-w-2xl space-y-5">
                  {block.paragraphs.map((text) => (
                    <ScrubText key={text.slice(0, 40)} className="t-body text-ink-soft">
                      {text}
                    </ScrubText>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Most ka uslugama */}
      <section className="bg-elevated px-5 py-24 md:px-10 md:py-36">
        <SectionTitle>Gde te uopšte ima smisla tražiti</SectionTitle>

        <div className="mt-10 max-w-2xl space-y-6">
          <ScrubText className="t-body text-ink-soft">
            Ne ide svaka delatnost na isti kanal. Ima firmi kod kojih je Google sve, jer
            ih niko ne traži dok mu ne zatreba. Ima onih kod kojih posao dolazi sa
            Instagrama, jer se proizvod kupuje kad ga vidiš a nisi ga ni tražio. A ima i
            slučajeva gde nema svrhe plaćati bilo šta dok se ne sredi ono što već
            postoji.
          </ScrubText>
          <ScrubText className="t-body text-ink-soft">
            Iz analize izađe redosled. Gde ide prvi dinar, gde drugi, i šta možeš mirno
            da preskočiš. Najčešće to bude nešto od ovoga:
          </ScrubText>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.href} mode="fade" delay={i * 0.08}>
              <Link
                href={channel.href}
                className="group flex h-full flex-col rounded-md border border-subtle bg-card p-7 transition-colors duration-300 hover:border-accent-line"
              >
                <h3 className="t-h3 flex items-center gap-2 text-ink transition-colors duration-300 group-hover:text-accent">
                  {channel.title}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </h3>
                <p className="t-body mt-4 text-ink-soft">{channel.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-5 py-24 md:px-10 md:py-32">
        <Hairline />
        <Reveal as="h2" mode="lines" className="t-h2 mt-7 max-w-2xl text-ink">
          Pre nego što potrošiš na sajt ili reklame
        </Reveal>
        <Reveal mode="fade" delay={0.12}>
          <p className="t-body mt-6 max-w-2xl text-ink-soft">
            Reci mi čime se baviš i u kom gradu radiš. Sutra u ovo vreme imaš gotovu
            analizu.
          </p>
          <Btn href="/kontakt" className="mt-10">
            Naruči analizu
          </Btn>
        </Reveal>
      </section>
    </div>
  );
}
