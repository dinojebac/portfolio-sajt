import type { Metadata } from "next";
import About from "@/sections/About";
import CrossLinks from "@/components/CrossLinks";

export const metadata: Metadata = {
  title: "O nama",
};

export default function ONamaPage() {
  return (
    <>
      <About />
      <CrossLinks work contact />
    </>
  );
}
