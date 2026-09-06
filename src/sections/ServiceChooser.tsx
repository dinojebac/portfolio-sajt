import SectionHead from "@/components/SectionHead";
import ServiceGrid from "@/components/ServiceGrid";
import Btn from "@/components/Btn";
import { services } from "@/data/services";

/**
 * Naslovna prikazuje sest od sedam usluga, pa dugme vodi na hub.
 * Sedma kartica bi ostala sama u trecem redu i razbila mrezu, a puna lista
 * ionako postoji na `/usluge`.
 */
const HOME_COUNT = 6;

export default function ServiceChooser() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        index=""
        title="Šta ti treba?"
        lead="Izaberi uslugu i vidi kako radimo."
      />

      <ServiceGrid items={services.slice(0, HOME_COUNT)} />

      <div className="mt-10">
        <Btn href="/usluge" variant="ghost">
          Sve usluge
        </Btn>
      </div>
    </section>
  );
}
