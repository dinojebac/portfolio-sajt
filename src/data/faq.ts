export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Koliko košta sajt?",
    answer:
      "Cenu određuje obim: broj strana, animacije, sadržaj, rokovi. Posle kratkog razgovora dobijaš tačnu, fiksnu ponudu — bez skrivenih stavki i bez iznenađenja na kraju.",
  },
  {
    question: "Koliko traje izrada?",
    answer:
      "Standardan projekat traje nekoliko nedelja od predatog materijala do lansiranja. Kompleksniji projekti traju duže, ali rok znaš unapred i on se poštuje.",
  },
  {
    question: "Šta treba da pripremim?",
    answer:
      "Osnovne informacije o biznisu, logo ako postoji, i sat vremena za razgovor. Za sve ostalo — tekstove, strukturu, vizuale — imamo proces i rešenje.",
  },
  {
    question: "Već imam sajt. Radite li redizajn?",
    answer:
      "Da, i to je najčešći tip projekta. Zadržavamo ono što radi, menjamo ono što te košta klijenata — a migraciju sadržaja i domena preuzimamo mi.",
  },
  {
    question: "Ko sređuje domen, hosting i mejl?",
    answer:
      "Mi. Domen, hosting, poslovni mejl i analitika se postavljaju kao deo projekta. Sajt predajemo kao gotov proizvod koji radi — sa svim pristupima kod tebe.",
  },
  {
    question: "Šta se dešava posle lansiranja?",
    answer:
      "Ne nestajemo. Dogovaramo održavanje i dalje izmene po potrebi, a sajt je napravljen tako da može da raste zajedno sa poslom.",
  },
];
