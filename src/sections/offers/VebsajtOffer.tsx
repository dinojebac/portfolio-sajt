"use client";

import { Check } from "lucide-react";
import Offer from "@/components/Offer";
import ScrubText from "@/components/ScrubText";

export default function VebsajtOffer() {
  return (
    <Offer
      label="Vebsajt"
      title="Sajt koji pravi prvi utisak umesto tebe."
      service="vebsajt"
      cta="Zatraži sajt"
      aside={
        <>
          <p className="label text-eye">Pre nego što krenem</p>
          <p className="mt-3 text-sm leading-relaxed text-dim">
            Ne moraš da dođeš sa gotovom idejom. Istražim tvoj Instagram, sajt
            konkurencije (ako postoji), tržište na kom radiš, Google recenzije
            tvojih klijenata i tvoj eventualni postojeći sajt — pa sam predložim
            rešenje koje odgovara tvom biznisu, ne generički template.
          </p>

          <div className="mt-8 flex items-baseline justify-between gap-4 border-t border-line pt-6">
            <p className="label text-eye">Osnovni</p>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-fg">300€</p>
          </div>
          <ul className="mt-5 space-y-3">
            {["Domen i hosting", "Jednokratno plaćanje", "Osnovna SEO optimizacija"].map(
              (item) => (
                <li key={item} className="flex gap-3 text-sm text-fg/85">
                  <Check size={17} className="mt-0.5 shrink-0 text-eye" />
                  {item}
                </li>
              )
            )}
          </ul>

          <div className="mt-8 flex items-baseline justify-between gap-4 border-t border-line pt-6">
            <p className="label text-eye">Ključ u ruke</p>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-fg">600€</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-dim">
            Sve iz osnovnog paketa, plus napredna SEO optimizacija i redovno vođenje.
          </p>
          <ul className="mt-4 space-y-3">
            {["Napredna SEO optimizacija", "Vođenje Google Search Console-a", "Vođenje Google Analytics 4 (GA4)"].map(
              (item) => (
                <li key={item} className="flex gap-3 text-sm text-fg/85">
                  <Check size={17} className="mt-0.5 shrink-0 text-eye" />
                  {item}
                </li>
              )
            )}
          </ul>

          <div className="mt-8 border-t border-line pt-6">
            <p className="label text-eye">Dodatak: 3D animacije</p>
            <p className="mt-3 text-sm leading-relaxed text-dim">
              3D animacije privlače pažnju, zadržavaju posetioce i čine da se tvoj
              sajt pamti duže od konkurencije. Dostupno uz bilo koji paket.
            </p>
            <p className="mt-3 text-sm text-fg">
              Doplata: <span className="font-semibold text-eye">+150€</span>.
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
        Osnovni paket ti daje statičan sajt sa osnovnom SEO optimizacijom. Ključ u
        ruke ide dalje: napredna SEO optimizacija, vođenje Search Console-a i GA4
        analitike, tako da posle lansiranja vidiš ko dolazi na sajt i odakle.
      </ScrubText>
    </Offer>
  );
}
