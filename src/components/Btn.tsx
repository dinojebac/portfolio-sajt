import { clsx } from "clsx";
import { ArrowUpRight } from "lucide-react";

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  arrow?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function Btn({
  href,
  children,
  variant = "primary",
  external,
  arrow = true,
  className,
  onClick,
}: BtnProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium tracking-tight transition-all duration-300",
        variant === "primary" &&
          "bg-fg text-bg hover:bg-eye hover:text-[#060606]",
        variant === "ghost" &&
          "border border-line text-fg hover:border-fg/50",
        className
      )}
    >
      {children}
      {arrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}
