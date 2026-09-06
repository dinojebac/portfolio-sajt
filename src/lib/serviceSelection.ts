export type ServiceChoice =
  | "analiza"
  | "vebsajt"
  | "prodavnica"
  | "animacije"
  | "seo"
  | "ads"
  | "instagram"
  | "zakazivanje"
  | "nisam-siguran";

/**
 * Query parametar kojim uslužne stranice prenose izbor usluge na /kontakt.
 *
 * Ranije je ovo bio custom event — radilo je dok su ponuda i forma bile na
 * istoj stranici. Posle prelaska na više ruta event se emituje pre nego što
 * je forma uopšte montirana, pa nema ko da ga čuje; URL preživljava
 * navigaciju (i osvežavanje stranice, i deljenje linka).
 *
 * Vrednosti su namerno ostale iste i kad su se rute i nazivi usluga promenili
 * (`vebsajt` je sada „Izrada sajta”, `ads` je „Google Ads”). Ovo su ključevi
 * koji žive u linkovima koje su ljudi već dobili, pa im promena ne bi donela
 * ništa osim pokvarenog izbora u formi.
 */
export const SERVICE_QUERY_PARAM = "usluga";

const CHOICES: readonly ServiceChoice[] = [
  "analiza",
  "vebsajt",
  "prodavnica",
  "animacije",
  "seo",
  "ads",
  "instagram",
  "zakazivanje",
  "nisam-siguran",
];

/** Putanja ka formi sa unapred izabranom uslugom. */
export function contactHref(service: ServiceChoice) {
  return `/kontakt?${SERVICE_QUERY_PARAM}=${service}`;
}

/**
 * Prepoznaje izbor iz sirove vrednosti query parametra. Radi i na serveru, pa
 * /kontakt može da pročita parametar pri renderu i prosledi ga formi kao
 * početnu vrednost — bez efekta koji naknadno prepravlja state.
 */
export function parseService(value: unknown): ServiceChoice | "" {
  return CHOICES.includes(value as ServiceChoice) ? (value as ServiceChoice) : "";
}
