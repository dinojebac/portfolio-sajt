import Link from "next/link";

export type Crumb = { label: string; href?: string };

/**
 * Vidljiv breadcrumb koji prati BreadcrumbList shemu iste stranice.
 *
 * Stavka bez `href` se ispisuje kao tekst: takva je i poslednja (tekuca
 * stranica), i svaki nivo koji jos nema svoju rutu.
 */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Putanja" className="t-eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-3">
          {i > 0 && (
            <span aria-hidden className="text-ink-muted/60">
              /
            </span>
          )}
          {item.href ? (
            <Link href={item.href} className="transition-colors duration-300 hover:text-accent">
              {item.label}
            </Link>
          ) : (
            <span className={i === items.length - 1 ? "text-ink-soft" : undefined}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
