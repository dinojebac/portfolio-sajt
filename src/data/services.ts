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
 * saradnja, a sve ispod nje su odluke koje se donose tek posle nje. Animacije
 * stoje odmah uz izradu sajta jer su njen dodatak, a ne zasebna usluga.
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
    description: "Sajt koji te predstavlja ozbiljno pre prvog razgovora.",
    href: "/usluge/izrada-sajta",
  },
  {
    title: "Online prodavnica",
    description: "Prodavnica spremna za naručivanje, sa plaćanjem i dostavom.",
    href: "/usluge/online-prodavnica",
  },
  {
    title: "Animacije i efekti",
    description: "Premium dodatak uz izradu sajta. Otvori demo i vidi razliku.",
    href: "/usluge/animacije-i-efekti",
  },
  {
    title: "SEO optimizacija",
    description: "Da te ljudi nađu na Google-u kad traže ono što radiš.",
    href: "/usluge/seo-optimizacija",
  },
  {
    title: "Google Ads",
    description: "Kad ti treba posao odmah, a ne za dva meseca.",
    href: "/usluge/google-ads",
  },
  {
    title: "Instagram oglašavanje",
    description: "Kad se tvoj proizvod prodaje tako što ga vide, a nisu ga tražili.",
    href: "/usluge/instagram-oglasavanje",
  },
  {
    title: "Aplikacija za zakazivanje termina",
    description:
      "Aplikacija u kojoj klijenti sami zakazuju termin, bez poziva i bez tvog vremena.",
    href: "/usluge/zakazivanje-termina",
  },
];

/**
 * Cetiri kartice koje stoje na naslovnoj. Nisu prve cetiri iz spiska: ovo je
 * izbor koji pokriva ceo luk saradnje (od analize, preko sajta i vidljivosti,
 * do alata koji radi posle), pa posetilac iz njih vidi domet, a ne pocetak
 * abecede. Ostalo je iza dugmeta `Sve usluge`.
 */
const HOME_HREFS = [
  "/usluge/analiza-trzista",
  "/usluge/izrada-sajta",
  "/usluge/seo-optimizacija",
  "/usluge/zakazivanje-termina",
];

export const homeServices: Service[] = HOME_HREFS.map((href) => {
  const match = services.find((service) => service.href === href);
  if (!match) throw new Error(`Nepoznata usluga na naslovnoj: ${href}`);
  return match;
});
