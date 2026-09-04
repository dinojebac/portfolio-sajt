import type { Metadata } from "next";
import SeoOffer from "@/sections/offers/SeoOffer";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "SEO optimizacija",
};

export default function SeoPage() {
  return (
    <>
      <SeoOffer />
      <CrossLinks work faq />
    </>
  );
}
