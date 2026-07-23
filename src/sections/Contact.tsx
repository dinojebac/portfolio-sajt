"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

type FormState = "idle" | "sending" | "sent" | "error";

// Lucide je izbacio brend ikonice, pa Instagram glif crtamo sami.
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const inputCls =
  "w-full border-b border-line bg-transparent py-3 text-[15px] text-fg outline-none transition-colors duration-300 placeholder:text-dim/50 focus:border-fg/60";
const labelCls = "label text-[10px] mb-1.5 block";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — botovi ga popune, ljudi ga ne vide.
    if (data.website) return;

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-24">
        <div>
          <SectionHead
            index="07"
            label="Contact"
            title={
              <>
                Imaš projekat?
                <br />
                Pričajmo.
              </>
            }
            lead="Opiši šta radiš i šta ti treba. Odgovor stiže brzo — konkretan, sa sledećim korakom."
            className="mb-10!"
          />

          <Reveal mode="fade" className="rounded-md border border-line p-6 md:p-8">
            <p className="label text-[10px] text-eye">Najbrži put</p>
            <p className="mt-3 text-lg font-medium leading-snug md:text-xl">
              Pošalji <span className="text-eye">„PROJEKAT”</span> u DM — nastavljamo
              tamo, bez formalnosti.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-fg px-6 py-3.5 text-[15px] font-medium text-bg transition-colors duration-300 hover:bg-eye"
            >
              <InstagramIcon size={16} />
              {site.instagramHandle}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>

          <Reveal mode="fade" delay={0.1} className="mt-6 text-sm text-dim">
            Ili direktno na{" "}
            <a href={`mailto:${site.email}`} className="text-fg underline-offset-4 hover:underline">
              {site.email}
            </a>
          </Reveal>
        </div>

        <Reveal mode="fade" delay={0.1}>
          {state === "sent" ? (
            <div className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-md border border-line p-8 md:p-12">
              <p className="label text-eye">Primljeno</p>
              <p className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                Upit je stigao. Odgovaramo brzo.
              </p>
              <p className="mt-4 text-sm text-dim">Bez spama. Bez obaveza. Samo konkretan predlog.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-7">
              <p className="label">Ili kroz formu</p>

              {/* Honeypot polje — sakriveno od ljudi */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className={labelCls}>
                    Ime i prezime *
                  </label>
                  <input id="c-name" name="name" required placeholder="Petar Petrović" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-contact" className={labelCls}>
                    Email ili telefon *
                  </label>
                  <input
                    id="c-contact"
                    name="contact"
                    required
                    placeholder="petar@firma.rs"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <label htmlFor="c-business" className={labelCls}>
                    Čime se baviš
                  </label>
                  <input id="c-business" name="business" placeholder="Restoran, studio, brend…" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-budget" className={labelCls}>
                    Okvirni budžet
                  </label>
                  <select id="c-budget" name="budget" defaultValue="" className={`${inputCls} appearance-none`}>
                    <option value="" disabled hidden>
                      Izaberi…
                    </option>
                    <option value="osnovni">Osnovni projekat</option>
                    <option value="standardni">Standardni projekat</option>
                    <option value="premium">Premium projekat</option>
                    <option value="po-dogovoru">Po dogovoru</option>
                    <option value="ne-znam">Još ne znam</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="c-message" className={labelCls}>
                  Projekat *
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Šta radiš, šta ti treba i dokle si stigao/la…"
                  className={`${inputCls} resize-none`}
                />
              </div>

              {state === "error" && (
                <p className="text-sm text-red-400/90">
                  Nešto je zapelo. Pokušaj ponovo — ili piši direktno u DM.
                </p>
              )}

              <button
                type="submit"
                disabled={state === "sending"}
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-fg px-8 py-4 text-[15px] font-medium text-bg transition-colors duration-300 hover:bg-eye disabled:opacity-60"
              >
                {state === "sending" ? "Šaljem…" : "Pošalji upit"}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
