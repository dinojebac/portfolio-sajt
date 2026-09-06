import type { Metadata } from "next";
import AnimacijeIEfekti from "@/sections/services/AnimacijeIEfekti";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "Animacije i efekti",
  description:
    "Četiri živa sajta koja možeš da otvoriš i uporediš sa konkurencijom. Premium dodatak uz izradu sajta, 150€.",
};

export default function AnimacijeIEfektiPage() {
  return (
    <>
      <AnimacijeIEfekti />
      <CrossLinks work contact />
    </>
  );
}
