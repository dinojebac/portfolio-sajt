import type { Metadata } from "next";
import OglasiOffer from "@/sections/offers/OglasiOffer";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "Vođenje oglasa",
};

export default function OglasiPage() {
  return (
    <>
      <OglasiOffer />
      <CrossLinks work faq />
    </>
  );
}
