export type Service = {
  title: string;
  description: string;
  href: string;
};

/**
 * Izvor istine za sve tri liste usluga: kartice na naslovnoj, hub `/usluge` i
 * dropdown u kontakt formi. Ranije je svaka od njih drzala svoj spisak, pa je
 * preimenovanje jedne rute trazilo izmenu na tri mesta i uvek se negde
 * zaboravilo.
 *
 * Redosled nije proizvoljan: analiza je prva zato sto od nje pocinje svaka
 * saradnja, a sve ispod nje su odluke koje se donose tek posle nje.
 */
export const services: Service[] = [
  {
    title: "Analiza tržišta i konkurencije",
    description:
      "Ko su ti kupci, ko je konkurencija i šta ljudi zaista kucaju u pretragu. Odavde počinje svaka saradnja.",
    href: "/usluge/analiza-trzista",
  },
  {
    title: "Izrada sajta",
    description: "Predstavi svoj biznis ili brend online.",
    href: "/usluge/izrada-sajta",
  },
  {
    title: "Online prodavnica",
    description: "Prodaj proizvode 24/7, sa plaćanjem pouzećem ili karticom.",
    href: "/usluge/online-prodavnica",
  },
  {
    title: "SEO optimizacija",
    description: "Da te ljudi nađu na Google-u kad traže ono što radiš.",
    href: "/usluge/seo-optimizacija",
  },
  {
    title: "Google Ads",
    description: "Dovedi kupce sa Google pretrage i društvenih mreža.",
    href: "/usluge/google-ads",
  },
  {
    title: "Instagram oglašavanje",
    description: "Kad se tvoj proizvod prodaje tako što ga vide, a nisu ga tražili.",
    href: "/usluge/instagram-oglasavanje",
  },
  {
    title: "Zakazivanje termina",
    description:
      "Aplikacija u kojoj klijenti sami zakazuju termin, bez poziva i bez tvog vremena.",
    href: "/usluge/zakazivanje-termina",
  },
];
