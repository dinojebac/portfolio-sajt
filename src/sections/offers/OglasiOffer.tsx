"use client";

import { Check } from "lucide-react";
import Offer from "@/components/Offer";
import ScrubText from "@/components/ScrubText";

export default function OglasiOffer() {
  return (
    <Offer
      label="Vođenje oglasa"
      title="Kupci koji te traže, ne kupci koje moraš da uveriš."
      service="ads"
      cta="Zatraži vođenje oglasa"
      aside={
        <>
          <p className="label">Google & Meta</p>
          <p className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-eye">
            Po dogovoru
          </p>
          <p className="mt-4 text-sm leading-relaxed text-dim">
            Fiksna mesečna naknada za vođenje, nezavisno od visine budžeta. Budžet
            za sam oglas ide direktno Google-u ili Meti, ne meni.
          </p>
          <ul className="mt-7 space-y-3 border-t border-line pt-6">
            {[
              "Istraživanje ključnih reči (Google) i ciljnih grupa (Meta)",
              "Podešavanje kampanje i praćenje konverzija preko GA4",
              "Optimizacija budžeta iz nedelje u nedelju",
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
        Za razliku od SEO-a, koji gradi rezultate mesecima, Google i Meta oglasi te
        odmah stavljaju pred ljude koji već traže ono što nudiš — na Google
        pretrazi ili na Instagramu i Facebooku.
      </ScrubText>
      <ScrubText>
        Kampanju vodim iz nedelje u nedelju — gasim ono što ne dovodi upite, guram
        ono što radi, tako da svaki evro budžeta ide na najbolju moguću reč ili
        ciljnu grupu.
      </ScrubText>
      <ScrubText>
        Naknada za vođenje je fiksna, ne procenat od budžeta — nemam interes da te
        guram da trošiš više nego što ti treba.
      </ScrubText>
    </Offer>
  );
}
