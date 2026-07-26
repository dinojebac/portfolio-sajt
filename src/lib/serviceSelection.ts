export type ServiceChoice = "vebsajt" | "prodavnica" | "seo" | "nisam-siguran";

export const SERVICE_SELECT_EVENT = "bsb:select-service";

export function selectService(service: ServiceChoice) {
  window.dispatchEvent(
    new CustomEvent<ServiceChoice>(SERVICE_SELECT_EVENT, { detail: service })
  );
}
