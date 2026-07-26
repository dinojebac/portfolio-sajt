"use client";

import Btn from "@/components/Btn";
import InstagramBrowserFallback from "@/components/InstagramBrowserFallback";

export default function Hero() {
  return (
    <section id="intro" className="relative flex min-h-[100svh] items-end overflow-hidden bg-black px-5 pb-[11svh] pt-28 md:px-12 md:pb-[13svh]">
      <div className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75" style={{ backgroundImage: "url('/images/hero-architecture.png')" }} />
      <div className="pointer-events-none absolute inset-0 bg-black/45" />
      <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.48) 56%, rgba(0,0,0,.30) 100%), linear-gradient(0deg, rgba(0,0,0,.60) 0%, transparent 55%)" }} />
      <div className="relative z-10">
        <p className="label mb-5 text-eye">BSB® — autenticni web studio</p>
        <h1 className="max-w-[16ch] text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[1.01] tracking-[-0.04em]">
          Tvoj sajt mora da izgleda <em className="not-italic text-eye">skuplje</em> od konkurencije.
        </h1>
        <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-fg/75 md:text-lg">
          Ozbiljan dizajn, jasna poruka i animacije koje zadržavaju pažnju — za brendove koji žele da klijenti odmah osete razliku.
        </p>
        <p className="mt-5 text-xs font-medium tracking-[0.12em] text-eye/75 md:text-sm">
          2 godine iskustva · 20+ realizovanih projekata
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Btn href="#contact" variant="ghost" arrow={false}>Popuni formu</Btn>
        </div>
        <InstagramBrowserFallback />
      </div>
    </section>
  );
}
