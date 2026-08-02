"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { haptic } from "@/lib/haptic";
import {
  SERVICE_SELECT_EVENT,
  type ServiceChoice,
} from "@/lib/serviceSelection";

type FormState = "idle" | "sending" | "sent" | "error";
type ChoiceOption = { value: string; label: string };

const inputCls =
  "w-full border-b border-line bg-transparent py-3 text-[15px] text-fg outline-none transition-colors duration-300 placeholder:text-dim/50 focus:border-fg/60";
const labelCls = "label mb-1.5 block text-[10px]";

const serviceOptions: ChoiceOption[] = [
  { value: "vebsajt", label: "Vebsajt" },
  { value: "prodavnica", label: "Online prodavnica" },
  { value: "seo", label: "SEO optimizacija" },
];

const logoPhotoOptions: ChoiceOption[] = [
  { value: "imam", label: "Imam, poslaću na Instagram odmah" },
  {
    value: "instagram",
    label: "Na Instagramu imam sve što želim da ubacim u sajt",
  },
];

const styleOptions: ChoiceOption[] = [
  { value: "dark", label: "Dark (tamna tema)" },
  { value: "light", label: "Light (svetla tema)" },
  { value: "minimal", label: "Minimal" },
  { value: "bold", label: "Bold/upečatljivo" },
];

const animationOptions: ChoiceOption[] = [
  { value: "dynamic", label: "Da, želim dinamičan sajt sa animacijama" },
  { value: "simple", label: "Ne, želim jednostavan i brz sajt" },
  { value: "advisor", label: "Nisam siguran, prepuštam tebi" },
];

const deadlineOptions: ChoiceOption[] = [
  { value: "two-days", label: "Želim sajt za 2 dana maks" },
  { value: "this-week", label: "Želim sajt ove nedelje" },
  { value: "flexible", label: "Nije mi bitno kad ćeš završiti" },
];

function ChoiceSelect({
  id,
  name,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  options: ChoiceOption[];
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((option) => option.value === value);

  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label} *
      </label>
      <input
        id={id}
        name={name}
        value={value}
        readOnly
        tabIndex={-1}
        className="absolute h-px w-px opacity-0"
      />
      <div className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className={`${inputCls} flex items-center justify-between text-left`}
        >
          <span>{selected?.label ?? "Izaberi..."}</span>
          <span className="text-xs text-dim" aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
        {isOpen && (
          <div
            role="listbox"
            aria-label={label}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-sm border border-line bg-bg shadow-2xl"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={value === option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-3 text-left text-[15px] text-fg transition-colors hover:bg-eye hover:text-bg"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [service, setService] = useState<ServiceChoice | "">("");
  const [logoPhotos, setLogoPhotos] = useState("");
  const [siteStyle, setSiteStyle] = useState("");
  const [animations, setAnimations] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const onService = (event: Event) => {
      const choice = (event as CustomEvent<ServiceChoice>).detail;
      if (serviceOptions.some((option) => option.value === choice)) {
        setService(choice);
      }
    };
    window.addEventListener(SERVICE_SELECT_EVENT, onService);
    return () => window.removeEventListener(SERVICE_SELECT_EVENT, onService);
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return;
    if (!service || !logoPhotos || !siteStyle || !animations || !deadline) {
      setErrorMessage("Popuni sva obavezna polja označena zvezdicom.");
      setState("error");
      haptic("error");
      return;
    }

    setErrorMessage("");
    setState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!response.ok) {
        throw new Error(
          result?.error || "Upit nije poslat. Proveri podatke i pokušaj ponovo."
        );
      }
      setState("sent");
      haptic("success");
      form.reset();
      setService("");
      setLogoPhotos("");
      setSiteStyle("");
      setAnimations("");
      setDeadline("");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Upit nije poslat. Proveri podatke i pokušaj ponovo."
      );
      setState("error");
      haptic("error");
    }
  }

  return (
    <section id="contact" className="px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-24">
        <div>
          <SectionHead
            index=""
            title={
              <>
                Želiš projekat?
                <br />
                Pričajmo.
              </>
            }
            lead="Reci mi šta radiš i šta ti treba, ja ti rešavam sve ostalo."
            className="mb-10!"
          />
        </div>

        <Reveal mode="fade" delay={0.1}>
          {state === "sent" ? (
            <div className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-md border border-line p-8 md:p-12">
              <p className="label text-eye">Primljeno</p>
              <p className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                Hvala, javljam se uskoro!
              </p>
              <p className="mt-4 text-sm text-dim">
                Javiću ti se na Instagramu radi dogovora o daljoj saradnji.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-7">
              <p className="label">Popuni formu</p>

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
                  <input
                    id="c-name"
                    name="name"
                    required
                    placeholder="Petar Petrović"
                    className={inputCls}
                  />
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
                  <label htmlFor="c-brand-name" className={labelCls}>
                    Naziv biznisa/brenda *
                  </label>
                  <input
                    id="c-brand-name"
                    name="brandName"
                    required
                    placeholder="Naziv vašeg biznisa"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="c-city" className={labelCls}>
                    Grad/lokacija *
                  </label>
                  <input
                    id="c-city"
                    name="city"
                    required
                    placeholder="Beograd, Srbija"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <label htmlFor="c-business" className={labelCls}>
                    Čime se baviš
                  </label>
                  <input
                    id="c-business"
                    name="business"
                    placeholder="Restoran, studio, brend..."
                    className={inputCls}
                  />
                </div>
                <ChoiceSelect
                  id="c-service"
                  name="service"
                  label="Koja usluga te zanima?"
                  value={service}
                  options={serviceOptions}
                  onChange={(value) => setService(value as ServiceChoice)}
                />
              </div>

              {service === "prodavnica" && (
                <div>
                  <label htmlFor="c-products" className={labelCls}>
                    Okvirni broj proizvoda
                  </label>
                  <input
                    id="c-products"
                    name="productCount"
                    type="number"
                    min="1"
                    placeholder="Na primer: 24"
                    className={inputCls}
                  />
                </div>
              )}

              <div>
                <label htmlFor="c-instagram" className={labelCls}>
                  Vaš Instagram *
                </label>
                <input
                  id="c-instagram"
                  name="instagram"
                  type="text"
                  required
                  placeholder="@precizno_ime"
                  className={inputCls}
                />
              </div>

              <ChoiceSelect
                id="c-logo-photos"
                name="logoPhotos"
                label="Logo i fotke"
                value={logoPhotos}
                options={logoPhotoOptions}
                onChange={setLogoPhotos}
              />

              <div>
                <label htmlFor="c-references" className={labelCls}>
                  Reference sajtovi (linkovi koji ti se sviđaju)
                </label>
                <input
                  id="c-references"
                  name="references"
                  type="url"
                  placeholder="npr. https://..."
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="c-message" className={labelCls}>
                  Šta želiš na sajtu? *
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Opiši stranice, funkcije, stil i sve što ti je važno..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                <ChoiceSelect
                  id="c-style"
                  name="siteStyle"
                  label="Stil sajta"
                  value={siteStyle}
                  options={styleOptions}
                  onChange={setSiteStyle}
                />
                <ChoiceSelect
                  id="c-animations"
                  name="animations"
                  label="Želiš li animacije na sajtu?"
                  value={animations}
                  options={animationOptions}
                  onChange={setAnimations}
                />
              </div>

              <ChoiceSelect
                id="c-deadline"
                name="deadline"
                label="Kada ti treba sajt?"
                value={deadline}
                options={deadlineOptions}
                onChange={setDeadline}
              />

              {state === "error" && (
                <p className="text-sm text-red-400/90">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "sending"}
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-fg px-8 py-4 text-[15px] font-medium text-bg transition-colors duration-300 hover:bg-eye disabled:opacity-60"
              >
                {state === "sending" ? "Šaljem..." : "Pošalji upit"}
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
