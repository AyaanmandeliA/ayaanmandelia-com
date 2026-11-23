import { GUINNESS_URL, publicMetadata } from "@/lib/achievements";
import { Reveal } from "@/components/Reveal";
import { Kicker, PageHeader, Shell } from "@/components/ui";
import { contact, press } from "@/lib/content";

export const metadata = publicMetadata("Press & Guinness World Record", "/press", "Official recognition and media enquiries.");

export default function PressPage() {
  return (
    <Shell>
      <PageHeader kicker="Press" title={press.title} standfirst={press.note} />

      <section className="section">
        <Reveal>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 border-t border-bronze/25 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Kicker>Guinness World Records</Kicker>
              <h2 className="mt-4 font-display text-[24px] leading-snug text-ink">Youngest chartered accountant (male)</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">Official title held by Ayaan Mandelia. Age: 15 years and three days. Achieved in Dubai on 13 July 2026.</p>
              <a href={GUINNESS_URL} className="mt-4 mb-8 inline-block border-b border-ink/30 pb-0.5 text-[14px] text-ink">Read the official Guinness record ↗</a>
              <div><Kicker>Enquiries</Kicker></div>
              <p className="mt-4 text-[15px] leading-[1.62] text-ink-soft text-pretty">
                For interviews, talks or anything that needs a proper answer, email is best.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 inline-block border-b border-ink/30 pb-0.5 text-[15px] text-ink transition-colors hover:border-bronze hover:text-bronze-deep"
              >
                {contact.email}
              </a>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Kicker>Quick facts</Kicker>
              <dl className="mt-4">
                {[
                  ["Name", "Ayaan Mandelia"],
                  ["Age", "15"],
                  ["Based", "Dubai, UAE"],
                  ["Qualification", "ACCA Affiliate"],
                  ["ACCA distinction", "World’s youngest ACCA affiliate"],
                  ["Guinness title", "Youngest chartered accountant (male)"],
                  ["Role", "AANKA Group, since Sep 2025"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 border-b border-bronze/15 py-2.5 first:border-t"
                  >
                    <dt className="mono text-[10px] text-ink-faint">{k}</dt>
                    <dd className="text-[14px] text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mono mt-4 text-[10px] leading-relaxed text-ink-faint">
                A press portrait is not available yet.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
