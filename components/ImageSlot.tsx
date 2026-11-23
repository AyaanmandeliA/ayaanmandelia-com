import type { ImageSpec } from "@/lib/content";

const isDev = process.env.NODE_ENV === "development";

/** True when this slot has something to render (a real asset, or a dev guide). */
export function slotVisible(image?: ImageSpec): boolean {
  if (!image) return false;
  return Boolean(image.src) || isDev;
}

/**
 * A graceful image slot.
 *
 * - Real asset supplied  → renders the image.
 * - No asset, production → renders nothing, and the layout closes up around it.
 *   The live site never shows an empty or placeholder box.
 * - No asset, development → a quiet dashed guide describing the shot, so the
 *   slot is visible while building. Never present in the production build.
 */
export function ImageSlot({
  image,
  className = "",
  priority = false,
}: {
  image: ImageSpec;
  className?: string;
  priority?: boolean;
}) {
  if (image.src) {
    return (
      <div className={`overflow-hidden rounded-[3px] bg-paper-2 ${className}`} style={{ aspectRatio: image.ratio }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
        />
      </div>
    );
  }

  if (!isDev) return null;

  // Reserved space for a photo — rendered as an intentional gilt frame, not a
  // dev box. Shows where the picture will sit and a short note of what it is.
  return (
    <div
      data-dev-image-slot={image.id}
      className={`group relative flex items-center justify-center overflow-hidden rounded-[3px] ${className}`}
      style={{ aspectRatio: image.ratio }}
    >
      {/* ground + faint centre glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-paper-2 to-paper" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 45%, color-mix(in srgb, var(--color-bronze) 8%, transparent), transparent 70%)",
        }}
      />
      {/* double gilt frame, inset */}
      <div className="pointer-events-none absolute inset-[10px] border border-bronze/25" />
      <div className="pointer-events-none absolute inset-[14px] border border-bronze/10" />

      {/* centre mark + label */}
      <div className="relative z-10 flex flex-col items-center gap-2.5 px-4 text-center">
        <span aria-hidden className="h-2 w-2 rotate-45 border border-bronze/60" />
        <span className="font-display text-[13px] italic leading-tight text-ink-soft">
          {image.subject}
        </span>
        <span className="mono text-[8.5px] text-ink-faint">
          {image.orientation} · photograph
        </span>
      </div>

      {/* tiny slot id, corner, for reference */}
      <span className="mono absolute bottom-2 right-2.5 z-10 text-[7.5px] text-bronze/40">
        {image.id}
      </span>
    </div>
  );
}
