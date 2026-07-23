import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

const steps = [
  {
    index: "01",
    title: "Koncept",
    text: "Razgovor, cilj, struktura. Znamo šta sajt treba da uradi pre nego što otvorimo editor.",
  },
  {
    index: "02",
    title: "Dizajn & motion",
    text: "Vizuelni jezik i scroll koreografija — kadar po kadar, dok svaki ekran ne stoji kako treba.",
  },
  {
    index: "03",
    title: "Build & launch",
    text: "Next.js, performanse, domen, hosting. Predajemo sajt koji radi — i posle nas.",
  },
];

export default function About() {
  return (
    <section id="studio" className="px-5 py-24 md:px-10 md:py-36">
      <SectionHead index="05" label="Studio" title="Mali studio. Jedan standard." />

      <Reveal
        as="p"
        mode="lines"
        className="max-w-4xl text-[clamp(1.4rem,3.2vw,2.5rem)] font-medium leading-[1.25] tracking-[-0.02em]"
      >
        BSB pravi sajtove koji izgledaju kao da su koštali više nego što jesu.
        Bez šablona i bez viška — samo režija, tipografija i razlog iza svake
        odluke na ekranu.
      </Reveal>

      <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-3 md:gap-8">
        {steps.map((s, i) => (
          <Reveal key={s.index} mode="fade" delay={i * 0.08} className="border-t border-line pt-6">
            <h3 className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">{s.title}</h3>
            <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-dim">{s.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" mode="fade" delay={0.2} className="label mt-16 md:mt-20">
        Ograničen broj projekata mesečno — kvalitet ispred kvantiteta.
      </Reveal>
    </section>
  );
}
