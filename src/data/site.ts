export const site = {
  name: "BSB",
  url: "https://bitsitebuilder.com",
  instagramUrl: "https://instagram.com/bsb.webdesign",
  instagramHandle: "@bsb.webdesign",
  email: "studio@bsb.rs",
  /**
   * Spisak usluga vise ne stoji ovde nego u `data/services.ts`, jer uz naslov i
   * rutu nosi i opis koji ide na kartice. Ovde ostaje samo navigacija.
   */
  nav: [
    { label: "Početna", href: "/" },
    { label: "Usluge", href: "/usluge" },
    { label: "O nama", href: "/o-nama" },
    { label: "Radovi", href: "/radovi" },
    { label: "Kontakt", href: "/kontakt" },
  ],
} as const;
