export type Service = {
  index: string;
  title: string;
  tag: string;
  description: string;
  meta: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Sajt koji predstavlja vrednost tvog rada",
    tag: "Design & Development",
    description:
      "Ne pravimo stranice koje samo lepo izgledaju. Gradimo sajt koji odmah pokazuje ko si, šta nudiš i zašto tvoj rad vredi više od proseka u tvojoj branši.",
    meta: ["Custom dizajn", "Next.js", "Mobile-first"],
  },
  {
    index: "02",
    title: "Struktura koja dovodi klijente",
    tag: "Strategy & UX",
    description:
      "Svaka sekcija ima jasan cilj — da posetilac za par sekundi shvati šta radiš i zašto baš tebe da pozove.",
    meta: ["Struktura", "Sadržaj", "UX pravac"],
  },
  {
    index: "03",
    title: "Animacije koje privlače klijente",
    tag: "Motion",
    description:
      "Dizajn koji izgleda ozbiljno, animacije koje privlače klijente i prezentacija zbog koje brend deluje skuplje od konkurencije.",
    meta: ["GSAP", "ScrollTrigger", "Fluid motion"],
  },
];
