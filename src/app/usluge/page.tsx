import type { Metadata } from "next";
import SectionHead from "@/components/SectionHead";
import ServiceGrid from "@/components/ServiceGrid";
import CrossLinks from "@/components/CrossLinks";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Sve počinje analizom. Odatle se vidi šta ti stvarno treba, a šta možeš da preskočiš.",
};

/**
 * Hub svih usluga. Postoji i zato sto je meni prestao da otvara dropdown:
 * stavka `Usluge` sada vodi ovde, pa ovo mora da bude pun spisak, ne izbor.
 */
export default function UslugePage() {
  return (
    <>
      <section className="px-5 py-24 md:px-10 md:py-32">
        <SectionHead
          index=""
          title="Usluge"
          lead="Sve počinje analizom. Odatle se vidi šta ti stvarno treba, a šta možeš da preskočiš."
          titleAs="h1"
        />
        <ServiceGrid items={services} />
      </section>
      <CrossLinks work contact />
    </>
  );
}
