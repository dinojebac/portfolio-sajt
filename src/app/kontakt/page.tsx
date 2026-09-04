import type { Metadata } from "next";
import Contact from "@/sections/Contact";
import CrossLinks from "@/components/CrossLinks";
import { parseService, SERVICE_QUERY_PARAM } from "@/lib/serviceSelection";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Uslužne stranice šalju izbor kroz ?usluga=. Čita se ovde, na serveru, pa
  // forma dobija gotovu početnu vrednost umesto da je naknadno prepravlja.
  const params = await searchParams;
  const initialService = parseService(params[SERVICE_QUERY_PARAM]);

  return (
    <>
      <Contact initialService={initialService} />
      <CrossLinks faq work />
    </>
  );
}
