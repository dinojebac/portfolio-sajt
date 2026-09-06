import CrossLinks from "@/components/CrossLinks";

/**
 * Placeholder za rute koje su vec linkovane sa stranica usluga, a jos nemaju
 * sadrzaj. Postoji da link ne vodi u 404. Kad stranica dobije pravi tekst, ovo
 * se brise, ne dopunjava.
 */
export default function SoonPage({ title }: { title: string }) {
  return (
    <div className="bg-base">
      <section className="px-5 py-32 md:px-10 md:py-40">
        <h1 className="t-display max-w-[16ch] text-ink">{title}</h1>
        <p className="t-lead mt-8 max-w-xl text-ink-soft">Stranica je u pripremi.</p>
      </section>
      <CrossLinks work contact />
    </div>
  );
}
