import type { Metadata } from "next";
import OglasiOffer from "@/sections/offers/OglasiOffer";
import CrossLinks from "@/components/CrossLinks";

// Sadrzaj je i dalje postojeca ponuda za vodjenje oglasa. Ruta je vec
// preimenovana u /usluge/google-ads, tekst se menja kad ga vlasnik posalje.
export const metadata: Metadata = {
  title: "Google Ads",
  description: "Dovedi kupce sa Google pretrage i društvenih mreža.",
};

export default function GoogleAdsPage() {
  return (
    <>
      <OglasiOffer />
      <CrossLinks work faq />
    </>
  );
}
