"use client";

import { Check } from "lucide-react";
import Offer from "@/components/Offer";
import ScrubText from "@/components/ScrubText";

export default function SeoOffer() {
  return (
    <Offer
      label="SEO optimizacija"
      title="Budi prvi kad te neko traži na Google-u."
      service="seo"
      cta="Zatraži SEO optimizaciju"
      aside={
        <>
          <p className="label">Fiksna cena</p>
          <p className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-eye">400€</p>
          <p className="mt-4 text-sm text-dim">Bez skrivenih troškova.</p>
          <ul className="mt-7 space-y-3 border-t border-line pt-6">
            {[
              "Istraživanje ključnih reči za tvoju delatnost i lokaciju",
              "On-page SEO: naslovi, meta opisi, struktura sadržaja, alt tekst slika",
              "Prijava i vođenje Google Search Console-a",
              "Podešavanje GA4 praćenja poziva, formi i klikova na dugmad",
              "Sređivanje Google Business profila",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-fg/85">
                <Check size={17} className="mt-0.5 shrink-0 text-eye" />
                {item}
              </li>
            ))}
          </ul>
        </>
      }
    >
      <ScrubText>
        Istražim šta tačno kucaju ljudi kad traže baš tvoju uslugu, i šta pritom
        nalaze kod konkurencije — pa sadržaj i strukturu sajta prilagodim tim
        pretragama, ne generičkim ključnim rečima.
      </ScrubText>
      <ScrubText>
        Prijavljujem sajt na Google Search Console i pratim greške pri
        indeksiranju i pozicije u pretrazi, a preko GA4 podešavam praćenje poziva,
        popunjenih formi i klikova na dugmad, tako da vidiš šta stvarno donosi
        upite.
      </ScrubText>
      <ScrubText>
        Kada je relevantno, sređujem i Google Business profil. Sve dobijaš u jednom
        paketu — nema dodatnih podešavanja ni skrivenih doplata.
      </ScrubText>
    </Offer>
  );
}
