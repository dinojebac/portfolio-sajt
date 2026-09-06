import type { FaqItem } from "@/data/faq";

/**
 * Tri pitanja sa dna /usluge/seo-optimizacija.
 *
 * Stoje u zasebnom fajlu zato sto ih citaju dva mesta: akordeon u klijentskoj
 * komponenti i FAQPage JSON-LD koji se ispisuje na serveru. Shema koja se
 * razidje sa vidljivim tekstom je za Google greska, pa im je izvor jedan.
 */
export const seoFaq: FaqItem[] = [
  {
    question: "Da li mi garantuješ prvo mesto?",
    answer:
      "Poziciju ne može da garantuje niko, Google svoj algoritam ne prodaje. Ali mogu da garantujem da nećeš ostati na gubitku. Ako uzmeš rad na procenat, ne plaćaš ništa unapred i zarađujem tek kad ti zaradiš. Nema rezultata, nisi izgubio ni dinar. Kad ti neko drugi garantuje prvo mesto, pitaj ga da li je spreman da radi pod istim uslovima.",
  },
  {
    question: "Imam sajt koji mi je radio neko drugi. Može li se raditi na njemu?",
    answer:
      "Najčešće može. Prvo uradim analizu i kažem ti šta se da popraviti, a šta ne. Ako je sajt tehnički toliko loš da nema smisla ulagati u optimizaciju, čućeš to odmah, a ne posle tri meseca naplaćivanja.",
  },
  {
    question: "Šta ako prekinem saradnju?",
    answer:
      "Sve ostaje tvoje. Sajt, nalozi, podaci, sve urađeno. Pozicije ne nestaju preko noći, ali polako padaju jer konkurencija nastavlja da radi.",
  },
];
