import type { Metadata } from "next";
import AnalizaTrzista from "@/sections/services/AnalizaTrzista";
import CrossLinks from "@/components/CrossLinks";
import JsonLd from "@/components/service/JsonLd";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Analiza tržišta i konkurencije",
  description:
    "Ko su tvoji kupci, ko je konkurencija i zašto je iznad tebe, i šta ljudi zaista kucaju u pretragu. 5.000 dinara, gotovo za 24 sata.",
};

/**
 * Breadcrumb prati stvarnu strukturu ruta: `/usluge` je hub sa svim uslugama,
 * pa prvi nivo ima svoj URL i u shemi i u vidljivoj putanji.
 */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Usluge",
      item: `${site.url}/usluge`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Analiza tržišta i konkurencije",
      item: `${site.url}/usluge/analiza-trzista`,
    },
  ],
};

export default function AnalizaTrzistaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AnalizaTrzista />
      <CrossLinks work faq />
    </>
  );
}
