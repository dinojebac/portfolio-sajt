"use client";

import { Check } from "lucide-react";
import Offer from "@/components/Offer";
import ScrubText from "@/components/ScrubText";

export default function ProdavnicaOffer() {
  return (
    <Offer
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
          <div className="mt-6 border-t border-line pt-6">
            <p className="label text-eye">Plaćanje i dostava</p>
            <ul className="mt-4 space-y-3">
              {[
                "Plaćanje pouzećem po difoltu",
                "Kartično plaćanje preko Monri WSPay ili AllSecure",
                "Povezivanje sa kurirskim službama (D Express, Post Express...)",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-fg/85">
                  <Check size={17} className="mt-0.5 shrink-0 text-eye" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      }
    >
      <ScrubText>
        Dobijaš prodavnicu spremnu za naručivanje, sa jasnim kategorijama,
        proizvodima i tokom kupovine — bez čekanja da klijent objasni tačno šta mu
        treba, istražim tvoje proizvode i tržište i sam predložim strukturu.
      </ScrubText>
      <ScrubText>
        Plaćanje pouzećem ostaje dostupno jer je i dalje najpopularnije u Srbiji,
        pogotovo kod kupaca koji prvi put naručuju online. Kartično plaćanje
        povezujem preko provajdera kao što su Monri WSPay ili AllSecure, uz ugovor
        sa bankom koji tvoja firma sklapa.
      </ScrubText>
      <ScrubText>
        Porudžbine mogu da idu direktno ka kurirskoj službi (D Express, Post
        Express i slično), tako da ne moraš ručno da prepisuješ adrese sa svakog
        upita.
      </ScrubText>
    </Offer>
  );
}
