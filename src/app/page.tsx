import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Showcase from "@/sections/Showcase";
import SelectedWork from "@/sections/SelectedWork";
import WhyBSB from "@/sections/WhyBSB";
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
        <Services />
        <Showcase />
        <SelectedWork />
        <WhyBSB />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
