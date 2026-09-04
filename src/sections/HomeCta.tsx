import Reveal from "@/components/Reveal";
import Btn from "@/components/Btn";

/**
 * Završetak home stranice — samo poziv na formu, koja sad živi na /kontakt.
 * Naslov i podnaslov su isti tekst koji stoji iznad same forme, da posetilac
 * stigne na /kontakt bez osećaja da je skrenuo negde drugde.
 */
export default function HomeCta() {
  return (
    <section className="border-t border-line px-5 py-24 md:px-10 md:py-36">
      <Reveal
        as="h2"
        mode="lines"
        className="max-w-3xl text-[clamp(1.9rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em]"
      >
        Želiš projekat? Pričajmo.
      </Reveal>
      <Reveal as="p" mode="fade" delay={0.15} className="mt-6 max-w-xl text-base leading-relaxed text-dim md:text-lg">
        Reci mi šta radiš i šta ti treba, ja ti rešavam sve ostalo.
      </Reveal>
      <Reveal mode="fade" delay={0.25}>
        <Btn href="/kontakt" className="mt-10">
          Popuni formu
        </Btn>
      </Reveal>
    </section>
  );
}
