import type { Metadata } from "next";
import IzradaSajta from "@/sections/services/IzradaSajta";
import CrossLinks from "@/components/CrossLinks";
import JsonLd from "@/components/service/JsonLd";
import { izradaSajtaFaq } from "@/data/izradaSajtaFaq";

export const metadata: Metadata = {
  title: "Izrada sajta",
  description:
    "Ljudi te guglaju pre nego što te pozovu. Sajt od 300€, ključ u ruke od 800€, rok 2 do 7 dana.",
};

// Ista pitanja koja stoje u akordeonu na dnu stranice, iz istog izvora.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: izradaSajtaFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function IzradaSajtaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <IzradaSajta />
      <CrossLinks work faq />
    </>
  );
}
