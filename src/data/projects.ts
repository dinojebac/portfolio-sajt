export type Project = {
  href: string;
  preview: string;
  /**
   * Ime domena za prikaz ispod kartice. Projekti koji žive na besplatnom
   * poddomenu (vercel.app / netlify.app) dobijaju čitljivo ime; link i dalje
   * vodi na pravi `href`.
   */
  displayDomain?: string;
};

/**
 * Redosled je ručno određen, ne hronološki — prve tri kartice su jedine koje
 * posetilac vidi bez prevlačenja, pa tu stoje radovi koje vlasnik želi prve.
 */
export const websites: Project[] = [
  {
    href: "https://ledambientlightdeske.rs/",
    preview: "/images/projects/led-ambient-light.png",
  },
  {
    href: "https://ordulja.com/",
    preview: "/images/projects/ordulja.png",
  },
  {
    href: "https://kneletattoo222.vercel.app/",
    preview: "/images/projects/knele-tattoo.png",
    displayDomain: "knele-tattoo.rs",
  },
  {
    href: "https://urban-alu-team-sajt2.vercel.app/",
    preview: "/images/projects/urban-alu-team.png",
    displayDomain: "urban-alu-team.rs",
  },
  {
    href: "https://pizzerijaihpdemo.netlify.app/",
    preview: "/images/projects/pizzerija-ihp.png",
    displayDomain: "pizzerijaihp.rs",
  },
  {
    href: "https://dejanatrepaviceborca.com/",
    preview: "/images/projects/dejana-trepavice.png",
  },
  {
    href: "https://markovicwash.netlify.app/",
    preview: "/images/projects/markovic-wash.png",
    displayDomain: "markovicwash.rs",
  },
];

export const stores: Project[] = [
  {
    href: "https://nevidljivinosac.netlify.app/",
    preview: "/images/projects/nevidljivi-nosac.png",
    displayDomain: "nevidljivinosac.rs",
  },
  {
    href: "https://moroccansrbija.com/",
    preview: "/images/projects/moroccan-srbija.png",
  },
];
