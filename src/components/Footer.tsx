import { site } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="px-5 pb-10 pt-16 md:px-10">
        <p
          aria-hidden
          className="pointer-events-none select-none text-center text-[24vw] font-bold leading-[0.8] tracking-[-0.06em] text-fg/[0.05] md:text-[19vw]"
        >
          BSB®
        </p>
        <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 text-sm text-dim md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BSB — Sva prava zadržana.</p>
          <div>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-fg transition-colors duration-300 hover:border-eye hover:bg-eye hover:text-bg"
            >
              Instagram {site.instagramHandle}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
          <p className="label text-[10px]">Dizajn & kod: BSB</p>
        </div>
      </div>
    </footer>
  );
}
