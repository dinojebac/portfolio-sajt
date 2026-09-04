import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CrossLinksProps = {
  work?: boolean;
  faq?: boolean;
  contact?: boolean;
};

const ITEMS = {
  work: { href: "/radovi", label: "Pogledaj radove" },
  faq: { href: "/faq", label: "Česta pitanja" },
  contact: { href: "/kontakt", label: "Popuni formu" },
} as const;

/**
 * Interni linkovi na dnu stranice. FAQ namerno nije u glavnom meniju — dolazi
 * ovuda, sa stranica gde pitanje i nastaje.
 */
export default function CrossLinks({ work, faq, contact }: CrossLinksProps) {
  const shown = [
    work && ITEMS.work,
    faq && ITEMS.faq,
    contact && ITEMS.contact,
  ].filter(Boolean) as { href: string; label: string }[];

  if (!shown.length) return null;

  return (
    <nav className="border-t border-line px-5 py-10 md:px-10">
      <ul className="flex flex-wrap gap-x-10 gap-y-4">
        {shown.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-center gap-2 text-[15px] text-dim transition-colors duration-300 hover:text-fg"
            >
              {item.label}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
