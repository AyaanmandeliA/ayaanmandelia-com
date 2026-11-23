import type { Metadata } from "next";
import { GUINNESS_URL } from "@/lib/achievements";
import Link from "next/link";
import { ImageSlot, slotVisible } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { DecoRule, Kicker, Shell } from "@/components/ui";
import {
  currentFocus,
  education,
  featuredNote,
  heroImage,
  intro,
  milestones,
  offScript,
  taste,
  travel,
  work,
} from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const lead = work.find((w) => w.weight === "lead")!;
  const major = work.find((w) => w.weight === "major")!;
  const supporting = work.filter((w) => w.weight === "supporting");
  const recent = milestones.slice(-5).reverse();

  return (
    <Shell>
      {/* ── Opening ─────────────────────────────────────────────── */}
      <section className="pt-24 lg:pt-28">
        <Reveal immediate>
          <p className="mono text-[11px] text-ink-faint">{intro.standfirst}</p>
        </Reveal>

        <Reveal delay={0.06} immediate>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,5.6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-ink">
            {intro.name}
          </h1>
        </Reveal>

        <Reveal delay={0.09} immediate>
          <DecoRule className="mt-7 max-w-[520px]" />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 lg:mt-10 lg:grid-cols-12">
          <Reveal delay={0.12} immediate className="lg:col-span-7">
            <p className="dropcap measure text-[16.5px] leading-[1.6] text-ink-soft text-pretty lg:text-[17.5px]">
              {intro.lead}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-2.5 text-[14px] text-paper transition-colors hover:bg-bronze-deep"
              >
                See what I’ve built
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/about"
                className="border-b border-ink/30 pb-0.5 text-[14.5px] text-ink transition-colors hover:border-bronze hover:text-bronze-deep"
              >
                More about me
              </Link>
            </div>
          </Reveal>

          {/* Facts — carries the right column when there is no image yet. */}
          <Reveal delay={0.18} immediate className="lg:col-span-4 lg:col-start-9">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-bronze/25 pt-5 lg:grid-cols-1 lg:gap-y-4">
              {intro.facts.map((f) => (
                <div key={f.label} className="lg:flex lg:items-baseline lg:justify-between lg:gap-4">
                  <dt className="font-display text-[19px] leading-none text-ink lg:text-[20px]">{f.value}</dt>
                  <dd className="mono mt-1.5 text-[9.5px] text-ink-faint lg:mt-0 lg:text-right">{f.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {slotVisible(heroImage) && (
          <Reveal delay={0.24} y={18}>
            <ImageSlot image={heroImage} priority className="mt-12 w-full lg:mt-14" />
          </Reveal>
        )}
      </section>

      {/* ── Current focus ───────────────────────────────────────── */}
      <section className="section">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-bronze/25 pt-5">
            <Kicker>{currentFocus.title}</Kicker>
            <span className="mono text-[10px] text-ink-faint">{currentFocus.updated}</span>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {currentFocus.items.map((item) => (
              <div key={item.label}>
                <div className="mono text-[9.5px] text-bronze-deep">{item.label}</div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink text-pretty">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Education ───────────────────────────────────────────── */}
      <section className="section">
        <Reveal>
          <div className="border-t border-bronze/25 pt-5">
            <Kicker>{education.kicker}</Kicker>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.12] tracking-[-0.02em] text-ink text-balance">
                {education.title}
              </h2>
              <p className="measure mt-5 text-[15.5px] leading-[1.62] text-ink-soft text-pretty">
                {education.body}
              </p>
              <a href={GUINNESS_URL} className="mt-4 inline-block border-b border-ink/30 pb-0.5 text-[14px] text-ink">
                Guinness World Records: youngest chartered accountant (male) ↗
              </a>
              <p className="measure mt-4 text-[15.5px] leading-[1.62] text-ink-soft text-pretty">
                {education.aside}
              </p>
            </div>
            <dl className="lg:col-span-4 lg:col-start-9">
              {education.results.map((r) => (
                <div
                  key={r.label}
                  className="flex items-baseline justify-between gap-4 border-b border-bronze/15 py-3 first:border-t"
                >
                  <dt className="text-[13.5px] text-ink-soft">{r.label}</dt>
                  <dd className="mono shrink-0 text-[11px] text-ink">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      {/* ── Selected work ───────────────────────────────────────── */}
      <section className="section">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-bronze/25 pt-5">
            <Kicker>Selected work</Kicker>
            <Link href="/projects" className="mono text-[10px] text-ink-soft transition-colors hover:text-ink">
              All projects →
            </Link>
          </div>
        </Reveal>

        {/* Lead — AANKA Group */}
        <Reveal delay={0.05}>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-12">
            <div className={slotVisible(lead.image) ? "lg:col-span-6" : "lg:col-span-7"}>
              <div className="mono text-[9.5px] text-bronze-deep">{lead.kicker}</div>
              <h3 className="mt-2.5 font-display text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.15] text-ink text-balance">
                {lead.title}
              </h3>
              <p className="measure mt-4 text-[15px] leading-[1.62] text-ink-soft text-pretty">{lead.summary}</p>
              {lead.meta && <p className="mono mt-4 text-[10px] text-ink-faint">{lead.meta}</p>}
            </div>
            {slotVisible(lead.image) && lead.image && (
              <div className="lg:col-span-5 lg:col-start-8">
                <ImageSlot image={lead.image} />
              </div>
            )}
          </div>
        </Reveal>

        {/* Major + supporting, in one balanced row */}
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-9 border-t border-bronze/15 pt-8 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="mono text-[9.5px] text-bronze-deep">{major.kicker}</div>
            <h3 className="mt-2.5 font-display text-[21px] leading-[1.2] text-ink text-balance lg:text-[23px]">
              {major.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft text-pretty">{major.summary}</p>
            {major.meta && <p className="mono mt-3 text-[10px] text-ink-faint">{major.meta}</p>}
          </Reveal>

          {supporting.map((w, i) => (
            <Reveal
              key={w.slug}
              delay={0.1 + i * 0.05}
              className={i === 0 ? "lg:col-span-3 lg:col-start-7" : "lg:col-span-3 lg:col-start-10"}
            >
              <div className="mono text-[9.5px] text-ink-faint">{w.kicker}</div>
              <h3 className="mt-2.5 font-display text-[17.5px] leading-[1.25] text-ink text-balance">{w.title}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-ink-soft text-pretty">{w.summary}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Off Script ──────────────────────────────────────────── */}
      <section className="section">
        <Reveal>
          <div className="border-t border-bronze/25 pt-5">
            <Kicker>{offScript.kicker}</Kicker>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-7 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.15] text-ink text-balance">
                {offScript.title}
              </h2>
              <p className="measure mt-4 text-[15px] leading-[1.62] text-ink-soft text-pretty">{offScript.body}</p>
              <a
                href={offScript.url}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 border-b border-ink/30 pb-0.5 text-[14.5px] text-ink transition-colors hover:border-bronze hover:text-bronze-deep"
              >
                @{offScript.handle}
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">↗</span>
              </a>
            </div>
            {slotVisible(offScript.image) && (
              <div className="lg:col-span-4 lg:col-start-9">
                <ImageSlot image={offScript.image} className="max-w-[260px]" />
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* ── Travel + taste, paired so neither column reads empty ── */}
      <section className="section">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 border-t border-bronze/25 pt-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Kicker>{travel.kicker}</Kicker>
            <h2 className="mt-4 font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.18] text-ink text-balance">
              {travel.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.62] text-ink-soft text-pretty">{travel.body}</p>
            {slotVisible(travel.image) && <ImageSlot image={travel.image} className="mt-6" />}
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5 lg:col-start-8">
            <Kicker>{taste.kicker}</Kicker>
            <h2 className="mt-4 font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.18] text-ink text-balance">
              {taste.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.62] text-ink-soft text-pretty">{taste.body}</p>
            <ul className="mono mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[10px] text-ink-faint">
              {taste.references.map((r) => (
                <li key={r} className="rounded-full border border-ink/15 px-2.5 py-1">
                  {r}
                </li>
              ))}
            </ul>
            {slotVisible(taste.image) && <ImageSlot image={taste.image} className="mt-6 max-w-[240px]" />}
          </Reveal>
        </div>
      </section>

      {/* ── Note ────────────────────────────────────────────────── */}
      <section className="section">
        <Reveal>
          <div className="border-t border-bronze/25 pt-5">
            <Kicker>{featuredNote.kicker}</Kicker>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-12">
            <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.18] text-ink text-balance lg:col-span-4">
              {featuredNote.title}
            </h2>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-[15.5px] leading-[1.62] text-ink-soft text-pretty">{featuredNote.body}</p>
              <Link
                href={featuredNote.href}
                className="mono mt-5 inline-block text-[10px] text-ink-soft transition-colors hover:text-ink"
              >
                More notes →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Milestones ──────────────────────────────────────────── */}
      <section className="section">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-bronze/25 pt-5">
            <Kicker>Recent milestones</Kicker>
            <Link href="/timeline" className="mono text-[10px] text-ink-soft transition-colors hover:text-ink">
              Full timeline →
            </Link>
          </div>
          <ol className="mt-6">
            {recent.map((m) => (
              <li
                key={m.when}
                className="grid grid-cols-[88px_1fr] items-baseline gap-4 border-b border-bronze/15 py-3.5 lg:grid-cols-[140px_1fr]"
              >
                <span className="mono text-[10px] text-ink-faint">{m.when}</span>
                <span className="text-[14.5px] leading-snug text-ink text-pretty">{m.what}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>
    </Shell>
  );
}
