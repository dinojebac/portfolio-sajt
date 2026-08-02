"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import ScrubText from "@/components/ScrubText";
import ScrambleLabel from "@/components/ScrambleLabel";
import Btn from "@/components/Btn";
import { scrollToTarget } from "@/lib/lenis";
import { selectService, type ServiceChoice } from "@/lib/serviceSelection";

type OfferProps = {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
  service: ServiceChoice;
  cta: string;
  aside: React.ReactNode;
};

function Offer({ id, label, title, children, service, cta, aside }: OfferProps) {
  const toContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    selectService(service);
    scrollToTarget("#contact");
  };

  return (
    <section id={id} className="border-t border-line px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 md:grid-cols-[1.25fr_.75fr] md:gap-20">
        <Reveal mode="fade">
          <p className="label text-eye">
            <ScrambleLabel>{label}</ScrambleLabel>
          </p>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[1.03] tracking-[-0.035em]">
            {title}
          </h2>
          <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-dim md:text-lg">
            {children}
          </div>
          <Btn href="#contact" onClick={toContact} className="mt-9">
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

export default function OfferDetails() {
  return (
    <>
      <Offer
        id="vebsajt"
        label="Vebsajt"
        title="Sajt koji pravi prvi utisak umesto tebe."
        service="vebsajt"
        cta="Zatraži sajt"
        aside={
          <>
            <p className="label">U paketu</p>
            <ul className="mt-6 space-y-4">
              {["Domen", "Hosting", "Jednokratno plaćanje"].map(
                (item) => (
                  <li key={item} className="flex gap-3 text-sm text-fg/85">
                    <Check size={17} className="mt-0.5 shrink-0 text-eye" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-dim">
              Cena vebsajta: <span className="font-semibold text-fg">300€</span>.
            </p>
            <div className="mt-6 border-t border-line pt-6">
              <p className="label text-eye">3D animacije</p>
              <p className="mt-3 text-sm leading-relaxed text-dim">
                3D animacije privlače pažnju, zadržavaju posetioce i čine da se tvoj
                sajt pamti duže od konkurencije.
              </p>
              <p className="mt-3 text-sm text-fg">
                Sajt sa 3D animacijom: <span className="font-semibold text-eye">450€</span>.
              </p>
            </div>
          </>
        }
      >
        <ScrubText>
          Profesionalan sajt gradi poverenje pre prvog razgovora, radi 24/7 i jasno
          pokazuje zašto tvoj posao vredi.
        </ScrubText>
        <ScrubText>
          Za razliku od Instagram ili Facebook profila, tvoj sajt ne zavisi od
          algoritma i daje ti potpunu kontrolu nad prezentacijom brenda.
        </ScrubText>
      </Offer>

      <Offer
        id="prodavnica"
        label="Online prodavnica"
        title="Prodavnica koja radi dok ti spavaš."
        service="prodavnica"
        cta="Zatraži prodavnicu"
        aside={
          <>
            <p className="label">Cenovnik</p>
            <div className="mt-5 divide-y divide-line">
              {[
                ["Do 10 proizvoda", "300€"],
                ["10 do 30 proizvoda", "450€"],
                ["30 do 50 proizvoda", "550€"],
                ["Preko 50 proizvoda", "Po dogovoru"],
              ].map(([range, price]) => (
                <div key={range} className="flex items-center justify-between gap-5 py-4">
                  <span className="text-sm text-dim">{range}</span>
                  <span className="font-semibold text-fg">{price}</span>
                </div>
              ))}
            </div>
          </>
        }
      >
        <ScrubText>
          Dobijaš prodavnicu spremnu za naručivanje i plaćanje pouzećem, sa jasnim
          kategorijama, proizvodima i tokom kupovine.
        </ScrubText>
        <ScrubText>
          Online plaćanje karticom je dostupno klijentima koji imaju registrovanu
          firmu i može se povezati u okviru projekta.
        </ScrubText>
      </Offer>

      <Offer
        id="seo"
        label="SEO optimizacija"
        title="Budi prvi kad te neko traži na Google-u."
        service="seo"
        cta="Zatraži SEO optimizaciju"
        aside={
          <>
            <p className="label">Fiksna cena</p>
            <p className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-eye">400€</p>
            <p className="mt-4 text-sm text-dim">Bez skrivenih troškova.</p>
            <div className="mt-7 border-t border-line pt-6">
              <p className="flex items-center gap-2 text-sm text-fg/85">
                <ArrowUpRight size={16} className="text-eye" />
                Tehnički i sadržajni SEO u paketu
              </p>
            </div>
          </>
        }
      >
        <ScrubText>
          Podešavamo meta tagove, brzinu, strukturu stranica i sadržaj tako da
          Google jasno razume šta nudiš i za koje pretrage treba da te prikaže.
        </ScrubText>
        <ScrubText>
          Kada je relevantno, sređujemo i Google Business profil. Sve dobijaš u
          jednom paketu — nema dodatnih podešavanja ni skrivenih doplata.
        </ScrubText>
      </Offer>
    </>
  );
}
