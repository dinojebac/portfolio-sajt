import { site } from "@/data/site";

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
          <div className="flex items-center gap-6">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-fg"
            >
              Instagram
            </a>
            <a href={`mailto:${site.email}`} className="transition-colors duration-300 hover:text-fg">
              {site.email}
            </a>
          </div>
          <p className="label text-[10px]">Dizajn & kod: BSB</p>
        </div>
      </div>
    </footer>
  );
}
