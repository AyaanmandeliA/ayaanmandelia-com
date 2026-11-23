import { publicMetadata } from "@/lib/achievements";
import { ImageSlot, slotVisible } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Shell } from "@/components/ui";
import { work } from "@/lib/content";

export const metadata = publicMetadata("Projects", "/projects", "Explore Ayaan’s work across AANKA Group, websites and reporting.");

export default function ProjectsPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Projects"
        title="What I’ve actually worked on"
        standfirst="Everything here is real work inside my family’s group. Where something is a prototype rather than a finished system, it says so."
      />

      <section className="section">
        <div className="border-t border-bronze/25">
          {work.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.04}>
              <article className="grid grid-cols-1 gap-x-10 gap-y-6 border-b border-bronze/15 py-10 lg:grid-cols-12 lg:py-12">
                <div className="lg:col-span-3">
                  <div className="mono text-[9.5px] text-bronze-deep">{w.kicker}</div>
                  {w.meta && <p className="mono mt-3 text-[10px] leading-relaxed text-ink-faint">{w.meta}</p>}
                </div>

                <div className={slotVisible(w.image) ? "lg:col-span-5" : "lg:col-span-8"}>
                  <h2 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.18] text-ink text-balance">
                    {w.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.62] text-ink-soft text-pretty">{w.summary}</p>
                  {w.detail && (
                    <p className="mt-3.5 text-[14.5px] leading-[1.62] text-ink-soft text-pretty">{w.detail}</p>
                  )}
                </div>

                {slotVisible(w.image) && w.image && (
                  <div className="lg:col-span-3 lg:col-start-10">
                    <ImageSlot image={w.image} />
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Shell>
  );
}
