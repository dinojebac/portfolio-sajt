import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

/**
 * Sitemap se sklapa iz istog spiska usluga koji vozi meni i kartice, pa nova
 * usluga ne može da postoji na sajtu a da izostane odavde.
 *
 * Preimenovane rute (`/usluge/vebsajt`, `/usluge/prodavnica`, `/usluge/seo`,
 * `/usluge/oglasi`) ovde namerno nema: one su 301 na nove adrese, a Google
 * adresu koja odgovara redirektom tretira kao grešku u sitemap-u.
 */
const staticRoutes = ["", "/usluge", "/radovi", "/o-nama", "/faq", "/kontakt", "/modeli-naplate"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...staticRoutes, ...services.map((service) => service.href)].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
