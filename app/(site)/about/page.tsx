import { publicMetadata } from "@/lib/achievements";
import { ImageSlot, slotVisible } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { Kicker, PageHeader, Shell } from "@/components/ui";
import { about, contact, education, liveSocials, milestones } from "@/lib/content";

export const metadata = publicMetadata("About", "/about", "Meet Ayaan and learn about his ACCA journey.");

export default function AboutPage() {
  const schooling = milestones.filter((m) => m.when.startsWith("Years"));

  return (
    <Shell>
      <PageHeader kicker="About" title={about.lead} />

      <section className="section">
        <div className="grid grid-cols-1 gap-x-10 gap-y-9 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5">
              {about.body.map((p, i) => (
                <p key={i} className="measure text-[15.5px] leading-[1.65] text-ink-soft text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-4 lg:col-start-9">
            {slotVisible(about.image) && <ImageSlot image={about.image} className="mb-7" />}

            <Kicker>Results</Kicker>
            <dl className="mt-4">
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

            <div className="mt-8">
              <Kicker>Contact</Kicker>
              <ul className="mt-4 space-y-2 text-[14.5px]">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-ink transition-colors hover:text-bronze-deep"
                  >
                    {contact.email}
                  </a>
                </li>
                {liveSocials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-soft transition-colors hover:text-ink"
                    >
                      {s.handle}
                    </a>
                  </li>
                ))}
                <li className="text-ink-soft">{contact.location}</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="border-t border-bronze/25 pt-5">
            <Kicker>Schooling</Kicker>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
            {schooling.map((m) => (
              <div key={m.when}>
                <div className="mono text-[9.5px] text-bronze-deep">{m.when}</div>
                <p className="mt-2 text-[14.5px] leading-snug text-ink">{m.what}</p>
                {m.detail && (
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft text-pretty">{m.detail}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
