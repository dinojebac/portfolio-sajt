"use client";

import { site } from "@/data/site";
import Btn from "@/components/Btn";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-black px-5 pb-[11svh] pt-28 md:px-12 md:pb-[13svh]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 72% 28%, rgba(194,205,171,.13), transparent 32%), radial-gradient(circle at 15% 85%, rgba(255,255,255,.05), transparent 36%)",
        }}
      />
      <div className="relative z-10">
        <p className="label mb-5 text-eye">BSB® — Premium Web Studio</p>
        <h1 className="max-w-[16ch] text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[1.01] tracking-[-0.04em]">
          Tvoj sajt mora da izgleda{" "}
          <em className="not-italic text-eye">skuplje</em> od konkurencije.
        </h1>
        <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-fg/75 md:text-lg">
          Premium dizajn, cinematic animacije i kompletna digitalna prezentacija —
          za brendove koji ne žele da izgledaju prosečno.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Btn href={site.instagramUrl} external>
            Pošalji projekat u DM
          </Btn>
          <Btn href="#contact" variant="ghost" arrow={false}>
            Popuni formu
          </Btn>
        </div>
      </div>
    </section>
  );
}
