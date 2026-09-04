import type { Metadata } from "next";
import VebsajtOffer from "@/sections/offers/VebsajtOffer";
import CrossLinks from "@/components/CrossLinks";

// Opis, Open Graph i JSON-LD dolaze u koraku 2, uz tekst koji vlasnik potvrdi.
export const metadata: Metadata = {
  title: "Vebsajt",
};

export default function VebsajtPage() {
  return (
    <>
      <VebsajtOffer />
      <CrossLinks work faq />
    </>
  );
}
