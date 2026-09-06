import type { FaqItem } from "@/data/faq";

/**
 * Tri pitanja sa dna /usluge/izrada-sajta. Zaseban fajl iz istog razloga kao
 * [seoFaq] i [zakazivanjeFaq]: cita ih i akordeon i FAQPage JSON-LD, pa im je
 * izvor jedan da se shema ne razidje sa vidljivim tekstom.
 */
export const izradaSajtaFaq: FaqItem[] = [
  {
    question: "Imam sajt, treba mi nov ili može da se sredi postojeći?",
    answer:
      "Prvo pogledam. Ako je tehnički u redu a problem je izgled i tekst, često je jeftinije srediti postojeći. Ako je pravljen na šablonu koji koči brzinu, prepravljanje je bacanje para i reći ću ti to odmah.",
  },
  {
    question: "Ko piše tekst?",
    answer:
      "Ja. Ti mi kažeš čime se baviš, ja pišem. Kod paketa ključ u ruke tekst se piše na osnovu analize, pa cilja pretrage koje ljudi stvarno kucaju.",
  },
  {
    question: "Šta ako mi kasnije treba izmena?",
    answer:
      "Sitne izmene, promena broja telefona, cene, nova slika, radim bez naplate. Veće stvari, nova stranica ili nova funkcija, dogovaramo posebno.",
  },
];
