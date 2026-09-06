import type { Metadata } from "next";
import ProdavnicaOffer from "@/sections/offers/ProdavnicaOffer";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "Online prodavnica",
  description: "Prodaj proizvode 24/7, sa plaćanjem pouzećem ili karticom.",
};

export default function ProdavnicaPage() {
  return (
    <>
      <ProdavnicaOffer />
      <CrossLinks work faq />
    </>
  );
}
