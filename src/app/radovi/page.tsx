import type { Metadata } from "next";
import SelectedWork from "@/sections/SelectedWork";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "Radovi",
};

export default function RadoviPage() {
  return (
    <>
      <SelectedWork title="Radovi" titleAs="h1" />
      <CrossLinks contact faq />
    </>
  );
}
