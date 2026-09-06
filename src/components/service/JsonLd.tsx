/**
 * Structured data za jednu stranicu. Objekat se serijalizuje kakav jeste, pa
 * shema i vidljivi tekst na stranici uvek dolaze iz istog izvora.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
