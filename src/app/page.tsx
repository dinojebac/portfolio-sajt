import SmoothScroll from "@/components/SmoothScroll";
import ScrollFX from "@/components/ScrollFX";
import AmbientGlow from "@/components/AmbientGlow";
import TapRipple from "@/components/TapRipple";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import ServiceChooser from "@/sections/ServiceChooser";
import Services from "@/sections/Services";
import OfferDetails from "@/sections/OfferDetails";
import SelectedWork from "@/sections/SelectedWork";
import About from "@/sections/About";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <AmbientGlow />
      <Navbar />
      <main>
        <Hero />
        <ServiceChooser />
        <Services />
        <OfferDetails />
        <SelectedWork />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <TapRipple />
      {/* Last so every [data-speed] / [data-skew] node is already committed. */}
      <ScrollFX />
    </>
  );
}
