"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { site } from "@/data/site";

/**
 * Navigacija u normalnom toku stranice — skroluje zajedno sa sadržajem.
 *
 * Ranije je bila `fixed` sa GSAP-om koji ju je uvlačio posle heroja i sa
 * ChapterProgress trakom ispod. Obe stvari su imale smisla dok je sajt bio
 * jedna duga stranica; sa više ruta traka je merila poglavlja kojih više
 * nema, a fiksni meni je samo jeo visinu ekrana na svakoj podstranici.
 *
 * `Usluge` je bila dropdown dok ih je bilo četiri. Sa sedam usluga spisak
 * ispod menija postaje duži od ekrana na telefonu, pa je stavka sada običan
 * link na `/usluge`, gde pun spisak ima mesta i opis uz svaku uslugu.
 *
 * Mobilni panel nije ukras: sa nestankom trake ovo je jedini način da se sa
 * telefona stigne bilo gde osim na početnu.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navbar živi u layout-u, pa ga navigacija ne remountuje — bez ovoga bi
  // otvoreni panel ostao preko nove stranice.
  const closeAll = () => setMobileOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative z-50 border-b border-line bg-bg">
      <nav className="flex h-16 items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          onClick={closeAll}
          className="text-lg font-bold tracking-[-0.04em]"
          aria-label="BSB, početna"
        >
          BSB<span className="text-eye">®</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav
            .filter((item) => item.href !== "/kontakt")
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeAll}
                  className={clsx(
                    "label text-[10px] transition-colors duration-300 hover:text-fg",
                    isActive(item.href) && "text-fg"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            onClick={closeAll}
            className="hidden rounded-full border border-line px-5 py-2 text-sm font-medium transition-colors duration-300 hover:border-fg/50 md:inline-block"
          >
            Kontakt
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Zatvori meni" : "Otvori meni"}
            // p-3 drzi dodirnu zonu na ~44px (Apple/Google minimum) a da se
            // ikonica vizuelno ne pomeri — negativna margina je poravnava
            // nazad na isto mesto gde je bila sa p-1.
            className="-mr-3 p-3 text-fg md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeAll}
              className="block border-b border-line py-4 text-[15px]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
