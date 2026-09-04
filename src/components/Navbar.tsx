"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
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
 * Mobilni panel nije ukras: sa nestankom trake ovo je jedini način da se sa
 * telefona stigne bilo gde osim na početnu.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Navbar živi u layout-u, pa ga navigacija ne remountuje — bez ovoga bi
  // otvoreni panel ostao preko nove stranice. Zatvara se na klik, ne kroz
  // efekat na pathname, da promena rute ne izaziva još jedan render prolaz.
  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMobileOpen(false);
      setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const servicesActive = pathname.startsWith("/usluge");

  return (
    <header className="relative z-50 border-b border-line bg-bg">
      <nav className="flex h-16 items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          onClick={closeAll}
          className="text-lg font-bold tracking-[-0.04em]"
          aria-label="BSB — početna"
        >
          BSB<span className="text-eye">®</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/"
              onClick={closeAll}
              className={clsx(
                "label text-[10px] transition-colors duration-300 hover:text-fg",
                isActive("/") && "text-fg"
              )}
            >
              Početna
            </Link>
          </li>

          <li className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
              className={clsx(
                "label flex items-center gap-1.5 text-[10px] transition-colors duration-300 hover:text-fg",
                servicesActive && "text-fg"
              )}
            >
              Usluge
              <ChevronDown
                size={12}
                className={clsx(
                  "transition-transform duration-300",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-3 w-60 overflow-hidden rounded-sm border border-line bg-bg">
                {site.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeAll}
                    className={clsx(
                      "block px-4 py-3 text-[15px] transition-colors duration-200 hover:bg-eye hover:text-bg",
                      pathname === service.href ? "text-eye" : "text-fg"
                    )}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {site.nav
            .filter((item) => item.href !== "/" && item.href !== "/kontakt")
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
            className="-mr-1 p-1 text-fg md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          <Link
            href="/"
            onClick={closeAll}
            className="block border-b border-line py-4 text-[15px]"
          >
            Početna
          </Link>

          <p className="label mt-5 text-[9px] text-eye">Usluge</p>
          {site.services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              onClick={closeAll}
              className="block border-b border-line py-4 text-[15px]"
            >
              {service.label}
            </Link>
          ))}

          <div className="mt-5">
            {site.nav
              .filter((item) => item.href !== "/")
              .map((item) => (
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
        </div>
      )}
    </header>
  );
}
