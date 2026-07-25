import { clsx } from "clsx";
import type { Project } from "@/data/projects";

const tones: Record<string, string> = {
  warm: "from-[#141010] via-[#0c0a09] to-[#080707]",
  cool: "from-[#0e1114] via-[#0a0c0e] to-[#070808]",
  neutral: "from-[#121212] via-[#0c0c0c] to-[#070707]",
};

/**
 * Stilizovan "cover" prikaz projekta dok ne stignu pravi screenshotovi.
 * Namerno apstraktan — čita se kao plakat case studije, ne kao lažni sajt.
 */
export default function MockSite({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const tone = project.media.kind === "mock" ? project.media.tone : "neutral";

  return (
    <div
      aria-hidden
      className={clsx(
        "relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br p-6 md:p-10",
        tones[tone],
        className
      )}
    >
      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="flex items-center justify-between">
        <span className="label text-[9px] md:text-[10px]">{project.type}</span>
        <span className="label text-[9px] text-eye md:text-[10px]">BSB</span>
      </div>
      <p className="text-center text-[clamp(2.6rem,9vw,7rem)] font-bold leading-none tracking-[-0.05em] text-fg/85">
        {project.title}
      </p>
      <div className="flex items-center justify-between">
        <span className="label text-[9px] md:text-[10px]">Selected work</span>
      </div>
    </div>
  );
}
