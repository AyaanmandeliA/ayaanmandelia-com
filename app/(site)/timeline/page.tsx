import { publicMetadata } from "@/lib/achievements";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Shell } from "@/components/ui";
import { milestones } from "@/lib/content";

export const metadata = publicMetadata("ACCA & Guinness Record Timeline", "/timeline", "Follow the education and record milestones.");

export default function TimelinePage() {
  return (
    <Shell>
      <PageHeader
        kicker="Timeline"
        title="How it has gone so far"
        standfirst="School, the ACCA, and the work in between, in order, without embellishment."
      />

      <section className="section">
        <ol className="border-t border-bronze/25">
          {milestones.map((m, i) => (
            <Reveal key={`${m.when}-${i}`} delay={Math.min(i * 0.03, 0.3)}>
              <li className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-bronze/15 py-6 lg:grid-cols-12 lg:py-7">
                <div className="lg:col-span-3">
                  <span className="mono text-[10.5px] text-bronze-deep">{m.when}</span>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <p className="font-display text-[18px] leading-[1.3] text-ink text-balance lg:text-[19px]">
                    {m.what}
                  </p>
                  {m.detail && (
                    <p className="measure mt-2 text-[14.5px] leading-[1.6] text-ink-soft text-pretty">
                      {m.detail}
                    </p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </Shell>
  );
}
