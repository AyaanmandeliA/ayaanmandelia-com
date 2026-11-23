/**
 * Canonical site URL. Configurable via NEXT_PUBLIC_SITE_URL, defaulting to
 * the live domain. Single source for metadata, robots and sitemap so the
 * canonical origin is set in one place.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ayaanmandelia.com").replace(/\/$/, "");
