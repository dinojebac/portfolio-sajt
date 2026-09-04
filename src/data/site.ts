export const site = {
  name: "BSB",
  url: "https://bitsitebuilder.com",
  instagramUrl: "https://instagram.com/bsb.webdesign",
  instagramHandle: "@bsb.webdesign",
  email: "studio@bsb.rs",
  /** Četiri usluge — izvor istine za navigaciju, home kartice i footer. */
  services: [
    { label: "Vebsajt", href: "/usluge/vebsajt" },
    { label: "Online prodavnica", href: "/usluge/prodavnica" },
    { label: "SEO optimizacija", href: "/usluge/seo" },
    { label: "Vođenje oglasa", href: "/usluge/oglasi" },
  ],
  nav: [
    { label: "Početna", href: "/" },
    { label: "O nama", href: "/o-nama" },
    { label: "Radovi", href: "/radovi" },
    { label: "Kontakt", href: "/kontakt" },
  ],
} as const;
