export const site = {
  name: "BSB",
  instagramUrl: "https://instagram.com/bsb.webdesign",
  instagramHandle: "@bsb.webdesign",
  email: "studio@bsb.rs",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Studio", href: "#studio" },
    { label: "FAQ", href: "#faq" },
  ],
  /**
   * Chapters of the scroll, in document order — drives the progress bar in the
   * navbar. Deliberately the story's beats, not every section id, so the bar
   * answers "how far into the pitch am I" instead of "how many pixels left".
   */
  chapters: [
    { id: "intro", label: "Početak" },
    { id: "services", label: "Usluge" },
    { id: "vebsajt", label: "Vebsajt" },
    { id: "prodavnica", label: "Prodavnica" },
    { id: "seo", label: "SEO" },
    { id: "work", label: "Radovi" },
    { id: "studio", label: "Studio" },
    { id: "faq", label: "Pitanja" },
    { id: "contact", label: "Kontakt" },
  ],
} as const;
