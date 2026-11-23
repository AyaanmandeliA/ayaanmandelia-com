import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ayaan Mandelia | World’s Youngest ACCA Affiliate & Guinness Record Holder",
    template: "%s — Ayaan Mandelia",
  },
  description:
    "Ayaan Mandelia, world’s youngest ACCA affiliate and Guinness World Records title holder for youngest chartered accountant (male). Based in Dubai.",
  openGraph: {
    title: "Ayaan Mandelia | World’s Youngest ACCA Affiliate & Guinness Record Holder",
    description:
      "World’s youngest ACCA affiliate and Guinness World Records title holder for youngest chartered accountant (male). Ayaan Mandelia, Dubai.",
    url: SITE_URL,
    siteName: "Ayaan Mandelia",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary", title: "Ayaan Mandelia | World’s Youngest ACCA Affiliate", description: "World’s youngest ACCA affiliate and Guinness record holder for youngest chartered accountant (male)." },
  icons: { icon: "/favicon.svg" },
};

/**
 * Minimal root layout: html/body + fonts only. The public site's chrome
 * (masthead, footer, gilt frame) lives in app/(site)/layout.tsx.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
      style={{ fontOpticalSizing: "auto" }}
    >
      <body>{children}</body>
    </html>
  );
}
