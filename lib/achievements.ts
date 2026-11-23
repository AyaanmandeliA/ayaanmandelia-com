import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const GUINNESS_URL = "https://www.guinnessworldrecords.com/world-records/74747-youngest-chartered-accountant-ca";
export const ACHIEVEMENTS = "World’s youngest ACCA affiliate and Guinness World Records title holder for youngest chartered accountant (male).";

export function publicMetadata(title: string, path: string, context: string): Metadata {
  const description = `${context} Ayaan Mandelia: world’s youngest ACCA affiliate and Guinness record holder for youngest chartered accountant (male).`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} — Ayaan Mandelia`, description, url: `${SITE_URL}${path}`, siteName: "Ayaan Mandelia", type: "website", locale: "en_GB" },
    twitter: { card: "summary", title: `${title} — Ayaan Mandelia`, description },
  };
}
