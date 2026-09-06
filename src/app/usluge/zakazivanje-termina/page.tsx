import type { Metadata } from "next";
import ZakazivanjeTermina from "@/sections/services/ZakazivanjeTermina";
import CrossLinks from "@/components/CrossLinks";
import JsonLd from "@/components/service/JsonLd";
import { zakazivanjeFaq } from "@/data/zakazivanjeFaq";

export const metadata: Metadata = {
  title: "Zakazivanje termina",
  description:
    "Aplikacija u kojoj klijent sam vidi slobodne termine i zakaže se za deset sekundi. Instalira se sa tvog sajta, 4.000 dinara mesečno.",
};

// Ista pitanja koja stoje u akordeonu na dnu stranice, iz istog izvora.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: zakazivanjeFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ZakazivanjeTerminaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ZakazivanjeTermina />
      <CrossLinks work faq />
    </>
  );
}
