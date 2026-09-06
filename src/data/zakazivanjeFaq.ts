import type { FaqItem } from "@/data/faq";

/**
 * Pitanja sa dna /usluge/zakazivanje-termina. Zaseban fajl iz istog razloga
 * kao [seoFaq]: cita ih i akordeon u klijentskoj komponenti i FAQPage JSON-LD
 * koji se ispisuje na serveru, a shema koja se razidje sa vidljivim tekstom je
 * za Google greska.
 */
export const zakazivanjeFaq: FaqItem[] = [
  {
    question: "Moji klijenti su stariji, neće umeti da koriste.",
    answer:
      "Neće ni morati. Telefon i dalje radi kao i do sada, ovo je samo dodatna mogućnost za one koji je hoće. U praksi mlađi pređu odmah, stariji ostanu na telefonu, a tebi se broj poziva prepolovi.",
  },
  {
    question: "Da li klijentu stiže SMS ili mejl kad zakaže?",
    answer:
      "Ne, sve ide kroz notifikaciju same aplikacije, kao kod bilo koje aplikacije na telefonu. To znači da nema dodatnog troška po poruci, za razliku od SMS sistema gde svaka poruka nešto košta.",
  },
  {
    question: "Da li se plaća kapara pri zakazivanju?",
    answer:
      "Ne. Zaštita od toga da neko ne dođe je podsetnik dva sata pre termina, ne naplata unapred. Ako ti kasnije zatreba i kapara, to je nešto što se može dodati.",
  },
  {
    question: "Mogu li da menjam termine i ručno?",
    answer:
      "Da. Možeš sam da upišeš termin za nekog ko te je zvao telefonom, da pomeriš ili otkažeš termin, i klijent o tome dobija notifikaciju.",
  },
  {
    question: "Šta ako prestanem da plaćam?",
    answer:
      "Sistem se gasi, ali svi podaci ostaju tvoji i dobijaš ih u fajlu koji možeš da otvoriš u Excel-u. Ništa ne gubiš i ništa ne ostaje kod mene.",
  },
];
