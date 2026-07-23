export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  type: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  built: string[];
  result: string;
  /**
   * Vizuelni prikaz projekta. Za sada su svi "mock" (stilizovan poster koji
   * renderuje MockSite komponenta). Kad stignu pravi materijali, dodati
   * kind: "image" | "video" sa src/poster putanjama u public/images/projects.
   */
  media:
    | { kind: "mock"; tone: "warm" | "cool" | "neutral" }
    | { kind: "image"; src: string; alt: string }
    | { kind: "video"; src: string; poster: string };
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "velvet",
    index: "001",
    title: "VELVET",
    client: "Velvet",
    type: "Restoran & wine bar",
    year: "2026",
    summary: "Sajt koji prenosi atmosferu sale pre nego što gost uđe u nju.",
    problem:
      "Rezervacije su stizale telefonom i kroz Instagram poruke, a meni je živeo kao PDF slikan telefonom. Utisak na mreži — daleko ispod utiska u sali.",
    solution:
      "Tamna paleta, veliki kadrovi enterijera i meni tretiran kao deo dizajna, ne kao prilog. Rezervacija u dva koraka, vidljiva sa svakog ekrana.",
    built: ["One-page sajt", "Digitalni meni", "Rezervacioni tok", "Foto direkcija", "Lokalni SEO"],
    result:
      "Gost pre dolaska već zna da je ovo skupo mesto — i dolazi spreman na to.",
    media: { kind: "mock", tone: "warm" },
  },
  {
    slug: "orbis",
    index: "002",
    title: "ORBIS",
    client: "Orbis",
    type: "Arhitektonski studio",
    year: "2025",
    summary: "Portfolio koji je izašao iz PDF-a i počeo da dovodi projekte.",
    problem:
      "Deset godina ozbiljnih projekata — zaključano u PDF portfoliju koji niko ne otvara do kraja. Studio je delovao manji nego što jeste.",
    solution:
      "Case studije sa velikim renderima i planovima, minimalna tipografija i scroll ritam koji pušta projekte da dišu. Kontakt na jedan klik iz svake studije.",
    built: ["Portfolio sajt", "Case study sistem", "CMS za projekte", "Scroll animacije"],
    result:
      "Upiti su se promenili: manje 'koliko košta kuća', više 'kada možete da počnete'.",
    media: { kind: "mock", tone: "cool" },
  },
  {
    slug: "pulse",
    index: "003",
    title: "PULSE",
    client: "Pulse",
    type: "Fitnes & personalni trening",
    year: "2025",
    summary: "Od Instagram profila do brenda sa jasnom ponudom i cenom.",
    problem:
      "Profil pun rezultata i transformacija, ali bez mesta gde se programi, termini i cene vide jasno. Svaki upit počinjao je od nule.",
    solution:
      "Landing sa programima i cenama, video sa treninga kao hero, i prijava koja unapred filtrira ozbiljne klijente od radoznalih.",
    built: ["Landing page", "Video hero", "Sistem prijava", "Brend osveženje"],
    result:
      "Prijave stižu popunjene i konkretne — cena više nije neprijatna tema.",
    media: { kind: "mock", tone: "neutral" },
  },
];
