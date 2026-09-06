import type { Metadata } from "next";
import SeoOptimizacija from "@/sections/services/SeoOptimizacija";
import CrossLinks from "@/components/CrossLinks";
import JsonLd from "@/components/service/JsonLd";
import { seoFaq } from "@/data/seoFaq";

export const metadata: Metadata = {
  title: "SEO optimizacija",
  description:
    "Ne rešava se time što ćeš platiti da budeš prvi, nego time što ćeš postati odgovor na pitanje koje ljudi kucaju. Rad na procenat, bez ičega unapred.",
};

// Ista tri pitanja koja stoje u akordeonu na dnu stranice, iz istog izvora.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seoFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function SeoOptimizacijaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <SeoOptimizacija />
      <CrossLinks work faq />
    </>
  );
}
