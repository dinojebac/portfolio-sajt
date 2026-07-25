import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    index: "01",
    title: "Izgled koji podiže cenu",
    text: "Kad brend deluje premium, cena prestaje da bude glavna tema razgovora. Sajt je najjeftiniji način da posao izgleda skuplje.",
  },
  {
    index: "02",
    title: "Sajt koji dovodi mušterije",
    text: "Svaka animacija i svako dugme imaju jedan cilj: da posetilac ostavi kontakt ili te pozove.",
  },
  {
    index: "03",
    title: "Gotovo brzo, bez glavobolje",
    text: "Nema čekanja mesecima ni prepiske sa gomilom ljudi. Kažeš mi šta ti treba, ja se pobrinem za sve — dizajn, kod i kompletan UX (korisničko iskustvo).",
  },
];

export default function WhyBSB() {
  return (
    <section id="why" className="px-5 py-24 md:px-10 md:py-36">
      <SectionHead
        index="04"
        label="Why BSB"
        title="Prvi utisak je odluka o ceni."
        lead="Posetilac proceni sajt pre nego što pročita prvu rečenicu — i tu odluči koliko tvoja usluga sme da košta."
      />

      <div className="border-b border-line">
        {reasons.map((r, i) => (
          <Reveal
            key={r.index}
            mode="fade"
            delay={i * 0.05}
            className="grid gap-3 border-t border-line py-8 md:grid-cols-[1fr_1.2fr] md:gap-8 md:py-10"
          >
            <h3 className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">{r.title}</h3>
            <p className="max-w-xl text-[15px] leading-relaxed text-dim">{r.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
