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
    title: "Premium sajtovi",
    tag: "Design & Development",
    description:
      "Sajt projektovan da tvoj brend izgleda kao najskuplji izbor u svojoj kategoriji — i kodiran da to potvrdi brzinom.",
    meta: ["Custom dizajn", "Next.js", "Mobile-first"],
  },
  {
    index: "02",
    title: "Cinematic scroll animacije",
    tag: "Motion",
    description:
      "Scroll koreografija koja vodi pogled: video reveal, tekst koji ulazi u pravom trenutku i interakcije koje se osete, ne primete.",
    meta: ["GSAP", "ScrollTrigger", "Fluid motion"],
  },
  {
    index: "03",
    title: "Brending i digitalna prezentacija",
    tag: "Identity",
    description:
      "Logo, tipografija, boje i ton komunikacije — jedan utisak, dosledan od sajta do svake objave.",
    meta: ["Vizuelni identitet", "Social kit", "Smernice"],
  },
  {
    index: "04",
    title: "Domen, hosting i lansiranje",
    tag: "Setup & Launch",
    description:
      "Domen, hosting, poslovni mejl i analitika — tehnički deo preuzimamo u celosti. Ti dobijaš link koji radi.",
    meta: ["Domen", "Hosting", "Analitika"],
  },
  {
    index: "05",
    title: "Koncept, struktura i UX",
    tag: "Strategy & UX",
    description:
      "Pre prvog piksela: šta sajt treba da kaže, kojim redom, i kako posetioca vodi do upita.",
    meta: ["Struktura", "Sadržaj", "UX pravac"],
  },
];
