import SectionHead from "@/components/SectionHead";
import ServiceGrid from "@/components/ServiceGrid";
import Btn from "@/components/Btn";
import { homeServices } from "@/data/services";

export default function ServiceChooser() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        index=""
        title="Šta ti treba?"
        lead="Izaberi uslugu i vidi kako radimo."
      />

      <ServiceGrid items={homeServices} />

      <div className="mt-10">
        <Btn href="/usluge" variant="ghost">
          Sve usluge
        </Btn>
      </div>
    </section>
  );
}
