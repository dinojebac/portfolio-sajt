export type Demo = {
  name: string;
  trade: string;
  body: string;
  href: string;
  preview: string;
};

/**
 * Cetiri ziva sajta sa stranice /usluge/animacije-i-efekti.
 *
 * Isti spisak vozi i mrezu kartica u sredini strane i mala dugmad u CTA bloku
 * na dnu, pa se ta dva ne mogu razici. Slike su snimci samih sajtova, ne
 * ilustracije: cela stranica tvrdi da treba pogledati, pa mora i da pokaze.
 */
export const demos: Demo[] = [
  {
    name: "Urban Alu Team",
    trade: "stolarija, Pančevo",
    body: "Konfigurator u kom mušterija bira materijal, boju, staklo i dimenzije, pa šalje upit sa gotovom specifikacijom. Umesto poziva „koliko košta prozor”, stiže ti upit u kom je sve već izabrano.",
    href: "https://urban-alu-team-sajt2.vercel.app/",
    preview: "/images/demo/urban-alu-team.webp",
  },
  {
    name: "Vasiljević Keramika",
    trade: "keramičarski radovi",
    body: "Ceo sajt je građen oko detalja. Fuge, uglovi, prelazi, sve u krupnom planu i otkriva se dok skroluješ.",
    href: "https://vasiljevic-keramika.vercel.app/",
    preview: "/images/demo/vasiljevic-keramika.webp",
  },
  {
    name: "Destilerija Zarić",
    trade: "proizvodnja rakije, Kosjerić",
    body: "Proces ispričan kroz skrol, od voća do bureta, plus zid sa nagradama sa svetskih takmičenja. Kad čovek dođe do cene, već je prošao kroz razlog zbog kog je takva.",
    href: "https://zaric-destilerija.vercel.app/",
    preview: "/images/demo/zaric-destilerija.webp",
  },
  {
    name: "Milan Rakić",
    trade: "pevač",
    body: "Video nastupa uživo umesto galerije slika, i rezervacija preko WhatsApp-a u dva klika.",
    href: "https://milanrakic.vercel.app/",
    preview: "/images/demo/milan-rakic.webp",
  },
];
