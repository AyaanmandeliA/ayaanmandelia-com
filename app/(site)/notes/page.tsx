import { publicMetadata } from "@/lib/achievements";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Shell } from "@/components/ui";
import { notes } from "@/lib/content";

export const metadata = publicMetadata("Notes", "/notes", "Read Ayaan’s notes on exams, work, systems and design.");

export default function NotesPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Notes"
        title="Things worth writing down"
        standfirst="Short pieces, written when I’ve actually learned something rather than on a schedule."
      />

      <section className="section">
        <div className="border-t border-bronze/25">
          {notes.map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.05}>
              <article className="grid grid-cols-1 gap-x-10 gap-y-5 border-b border-bronze/15 py-10 lg:grid-cols-12 lg:py-12">
                <div className="lg:col-span-3">
                  <div className="mono text-[10px] text-ink-faint">{n.date}</div>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.16] text-ink text-balance">
                    {n.title}
                  </h2>
                  <p className="mt-3 font-display text-[17px] italic leading-[1.45] text-ink-soft text-pretty">
                    {n.standfirst}
                  </p>
                  <div className="mt-5 space-y-4">
                    {n.body.map((p, j) => (
                      <p key={j} className="measure text-[15px] leading-[1.65] text-ink-soft text-pretty">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Shell>
  );
}
