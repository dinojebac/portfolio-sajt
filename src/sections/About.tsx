import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

const steps = [
  {
    index: "",
    title: "Sajt koji dovodi mušterije",
    text: "Svaka animacija i svako dugme imaju jedan cilj: da posetilac ostavi kontakt ili te pozove.",
  },
  {
    index: "",
    title: "Izgled koji diže cenu tvog rada",
    text: "Tvoj posao počinje da deluje ozbiljnije i skuplje čim ga ljudi vide na sajtu, ne samo na Instagram storiju.",
  },
  {
    index: "",
    title: "Gotovo brzo, bez glavobolje",
    text: "Nema čekanja mesecima ni prepiske sa gomilom ljudi. Kažeš mi šta ti treba, ja se pobrinem za sve — dizajn, kod i kompletan UX (korisničko iskustvo).",
  },
];

export default function About() {
  return (
    <section id="studio" className="px-5 py-24 md:px-10 md:py-36">
      <SectionHead index="" title="Šta dobijaš kada sarađujemo?" />

      <Reveal as="p" mode="lines" className="max-w-4xl text-[clamp(1.4rem,3.2vw,2.5rem)] font-medium leading-[1.25] tracking-[-0.02em]">
        Ne dobijaš samo lep sajt. Dobijaš alat koji ti dovodi nove mušterije i čini da tvoj posao izgleda ozbiljnije i skuplje nego ikad.
      </Reveal>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-dim md:text-base">
        Posetilac proceni sajt pre nego što pročita prvu rečenicu — i tu odluči koliko tvoja usluga sme da košta.
      </p>

      <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-3 md:gap-8">
        {steps.map((s, i) => (
          <Reveal key={s.title} mode="fade" delay={i * 0.08} className="border-t border-line pt-6">
            <h3 className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">{s.title}</h3>
            <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-dim">{s.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" mode="fade" delay={0.2} className="label mt-16 md:mt-20">
        Sve je napravljeno da tvoj brend deluje ozbiljno, jasno i vredno pažnje.
      </Reveal>
    </section>
  );
}
