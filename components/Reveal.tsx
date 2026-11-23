"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** seconds */
  delay?: number;
  /** how far it travels — kept small on purpose */
  y?: number;
  className?: string;
  once?: boolean;
  /**
   * Animate on mount instead of on scroll-into-view. Use for above-the-fold
   * content so the opening never depends on an IntersectionObserver tick.
   */
  immediate?: boolean;
}

/**
 * A restrained entrance. Not a generic fade-up: short travel, a soft blur
 * that resolves, and an editorial easing. Honours reduced-motion.
 */
/**
 * Set at build time for the shareable static snapshot: renders content plainly
 * so the exported HTML is fully visible without JavaScript.
 */
const STATIC_SNAPSHOT = process.env.NEXT_PUBLIC_STATIC_SNAPSHOT === "1";

export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
  once = true,
  immediate = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (STATIC_SNAPSHOT || reduce) {
    return <div className={className}>{children}</div>;
  }

  const target = { opacity: 1, y: 0, filter: "blur(0px)" };
  // Slower and with more travel/blur so the entrance is clearly noticeable
  // as each section scrolls into view.
  const transition = { duration: 1.25, delay, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      {...(immediate
        ? { animate: target }
        : {
            whileInView: target,
            // amount: 0.25 — wait until a quarter of the block is in view before
            // firing, so the reveal actually happens on screen where you see it.
            viewport: { once, amount: 0.25 },
          })}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
