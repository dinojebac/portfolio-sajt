import Reveal from "@/components/Reveal";
import { clsx } from "clsx";

type SectionHeadProps = {
  index: string;
  label?: string;
  title: React.ReactNode;
  lead?: string;
  className?: string;
};

export default function SectionHead({ label, title, lead, className }: SectionHeadProps) {
  return (
    <div className={clsx("mb-14 md:mb-20", className)}>
      {label && (
        <Reveal mode="fade">
          <p className="label flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-line" aria-hidden />
            {label}
          </p>
        </Reveal>
      )}
      <Reveal
        as="h2"
        mode="lines"
        className={clsx("max-w-3xl text-[clamp(1.9rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em]", label && "mt-6")}
      >
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" mode="fade" delay={0.15} className="mt-6 max-w-xl text-base leading-relaxed text-dim md:text-lg">
          {lead}
        </Reveal>
      )}
    </div>
  );
}
