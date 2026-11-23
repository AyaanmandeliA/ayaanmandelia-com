import Link from "next/link";
import { ACHIEVEMENTS, GUINNESS_URL } from "@/lib/achievements";
import { contact, liveSocials, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink/12 bg-paper-2/50 lg:mt-28">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[24px] leading-[1.3] text-ink text-balance lg:text-[28px]">
              Working in Dubai. Open to interesting conversations.
            </p>
            <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-ink-soft">
              Ayaan Mandelia. {ACHIEVEMENTS}{" "}
              <a href={GUINNESS_URL} className="underline underline-offset-4 hover:text-ink">View the official Guinness record ↗</a>
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-5 inline-block border-b border-ink/30 pb-0.5 text-[15px] text-ink transition-colors hover:border-bronze hover:text-bronze-deep"
            >
              {contact.email}
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <div className="mono text-[10px] text-ink-faint">Pages</div>
            <ul className="mt-4 space-y-2.5 text-[14.5px] text-ink-soft">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/press" className="transition-colors hover:text-ink">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <div className="mono text-[10px] text-ink-faint">Elsewhere</div>
            <ul className="mt-4 space-y-2.5 text-[14.5px] text-ink-soft">
              {liveSocials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-ink"
                  >
                    {s.handle}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://www.aankagroup.com" className="transition-colors hover:text-ink">
                  AANKA Group
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mono mt-12 flex flex-wrap items-baseline justify-between gap-3 border-t border-ink/12 pt-6 text-[10px] text-ink-faint">
          <span>© 2026 Ayaan Mandelia</span>
          <span>{contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
