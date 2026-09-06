import type { Metadata } from "next";
import VebsajtOffer from "@/sections/offers/VebsajtOffer";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "Izrada sajta",
  description: "Predstavi svoj biznis ili brend online. Sajt koji se brzo otvara, radi na telefonu i ima gde da primi posao.",
};

export default function IzradaSajtaPage() {
  return (
    <>
      <VebsajtOffer />
      <CrossLinks work faq />
    </>
  );
}
