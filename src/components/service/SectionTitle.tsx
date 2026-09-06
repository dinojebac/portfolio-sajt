import Reveal from "@/components/Reveal";
import Hairline from "@/components/service/Hairline";

type SectionTitleProps = {
  children: React.ReactNode;
  /** Uvodna linija ispod naslova, kad je sekcija ima. */
  lead?: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ children, lead, className }: SectionTitleProps) {
  return (
    <div className={className}>
      <Hairline />
      <Reveal as="h2" mode="lines" className="t-h2 mt-7 max-w-3xl text-ink">
        {children}
      </Reveal>
      {lead && (
        <Reveal as="p" mode="fade" delay={0.12} className="t-lead mt-6 max-w-2xl text-ink-soft">
          {lead}
        </Reveal>
      )}
    </div>
  );
}
