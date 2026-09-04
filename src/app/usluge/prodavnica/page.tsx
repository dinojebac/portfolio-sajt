import type { Metadata } from "next";
import ProdavnicaOffer from "@/sections/offers/ProdavnicaOffer";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "Online prodavnica",
};

export default function ProdavnicaPage() {
  return (
    <>
      <ProdavnicaOffer />
      <CrossLinks work faq />
    </>
  );
}
