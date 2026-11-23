import { publicMetadata } from "@/lib/achievements";
import { ImageSlot, slotVisible } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { Kicker, PageHeader, Shell } from "@/components/ui";
import { offScript, strands } from "@/lib/content";

export const metadata = publicMetadata("Off Script", "/off-script", "Travel, design, stage and life beyond the exams.");

export default function OffScriptPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Off Script"
        title="The parts that aren’t work"
        standfirst={offScript.body}
      />

      <section className="section-tight">
        <Reveal>
          <a
            href={offScript.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] text-paper transition-colors hover:bg-bronze-deep"
          >
            @{offScript.handle}
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">↗</span>
          </a>
        </Reveal>
      </section>

      <section className="section">
        <div className="border-t border-bronze/25">
          {strands.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <article
                id={s.id}
                className="grid scroll-mt-24 grid-cols-1 gap-x-10 gap-y-5 border-b border-bronze/15 py-10 lg:grid-cols-12 lg:py-12"
              >
                <div className="lg:col-span-3">
                  <h2 className="font-display text-[clamp(1.4rem,2.4vw,1.85rem)] leading-[1.15] text-ink">
                    {s.title}
                  </h2>
                </div>

                <div className={slotVisible(s.image) ? "lg:col-span-5" : "lg:col-span-8"}>
                  <p className="text-[15px] leading-[1.65] text-ink-soft text-pretty">{s.body}</p>
                  {s.awaiting && (
                    <p className="mono mt-4 text-[10px] leading-relaxed text-ink-faint">
                      Photographs for this section are still to come.
                    </p>
                  )}
                </div>

                {slotVisible(s.image) && s.image && (
                  <div className="lg:col-span-3 lg:col-start-10">
                    <ImageSlot image={s.image} />
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <Reveal>
          <Kicker>More soon</Kicker>
          <p className="measure mt-3 text-[15px] leading-[1.62] text-ink-soft text-pretty">
            Photography, restaurants and objects will get proper sections here once I have
            pictures worth putting up. I would rather leave a gap than fill it with something
            borrowed.
          </p>
        </Reveal>
      </section>
    </Shell>
  );
}
