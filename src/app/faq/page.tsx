import type { Metadata } from "next";
import FAQ from "@/sections/FAQ";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "Česta pitanja",
};

export default function FaqPage() {
  return (
    <>
      <FAQ titleAs="h1" />
      <CrossLinks contact work />
    </>
  );
}
