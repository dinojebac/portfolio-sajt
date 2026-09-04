import Hero from "@/sections/Hero";
import ServiceChooser from "@/sections/ServiceChooser";
import SelectedWork from "@/sections/SelectedWork";
import HomeCta from "@/sections/HomeCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceChooser />
      <SelectedWork showAllLink />
      <HomeCta />
    </>
  );
}
