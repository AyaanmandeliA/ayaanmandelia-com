import type { NextConfig } from "next";

// NEXT_PUBLIC_STATIC_SNAPSHOT=1 renders entrance animations as plain content
// (used for shareable snapshots and for visual QA screenshots).
// STATIC_EXPORT=1 additionally emits a static export to ./out.
// Normal builds are unaffected by both.
const isSnapshot = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Static export can't use the optimizing image loader.
    ...(isSnapshot ? { unoptimized: true } : {}),
  },
  ...(isSnapshot ? { output: "export" as const } : {}),
  // Canonical-host redirect. Ignored in export mode.
  ...(isSnapshot
    ? {}
    : {
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [{ type: "host", value: "www.ayaanmandelia.com" }],
              destination: "https://ayaanmandelia.com/:path*",
              permanent: true,
            },
          ];
        },
      }),
};

export default nextConfig;
