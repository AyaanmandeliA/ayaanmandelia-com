import { ACHIEVEMENTS, GUINNESS_URL } from "@/lib/achievements";
import { SITE_URL } from "@/lib/site";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";

/**
 * Public-site chrome: the gilt frame, masthead and footer. Everything under
 * this route group (home, about, projects, notes, off-script, timeline, press)
 * gets the dark-maximalist look.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="gilt-frame" aria-hidden />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person", "@id": `${SITE_URL}/#ayaan`,
        name: "Ayaan Mandelia", url: SITE_URL, description: ACHIEVEMENTS,
        award: "Guinness World Records — youngest chartered accountant (male)",
        sameAs: [GUINNESS_URL],
      }).replace(/</g, "\\u003c") }} />
      <Masthead />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
