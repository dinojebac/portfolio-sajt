import SmoothScroll from "@/components/SmoothScroll";
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
    </>
  );
}
