import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Public routes only.
const routes = ["/", "/about", "/projects", "/notes", "/off-script", "/timeline", "/press"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-11-01"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
