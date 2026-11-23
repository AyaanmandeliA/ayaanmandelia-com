import type { ReactNode } from "react";

/** Page container. One place to control gutters and max width. */
export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1400px] px-6 lg:px-10 ${className}`}>{children}</div>;
}

/** Small uppercase section label, gilt, with a lead lozenge. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mono inline-flex items-center gap-2 text-[10px] text-bronze-deep">
      <span aria-hidden className="inline-block h-[5px] w-[5px] rotate-45 border border-bronze/70" />
      {children}
    </span>
  );
}

/** An ornamental section divider — gilt rule with a centred lozenge. */
export function DecoRule({ className = "" }: { className?: string }) {
  return (
    <div className={`deco-rule ${className}`} aria-hidden>
      <span className="lozenge" />
    </div>
  );
}

/** Standard page header used by every inner page. */
export function PageHeader({
  kicker,
  title,
  standfirst,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
}) {
  return (
    <header className="pt-24 lg:pt-28">
      <Kicker>{kicker}</Kicker>
      <h1 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.025em] text-ink text-balance">
        {title}
      </h1>
      {standfirst && (
        <p className="measure mt-5 text-[16.5px] leading-[1.6] text-ink-soft text-pretty">{standfirst}</p>
      )}
    </header>
  );
}
