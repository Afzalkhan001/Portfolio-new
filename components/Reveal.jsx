"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * OverflowReveal — masked line reveal.
 * The OUTER div is observed for viewport entry (it is never clipped),
 * and passes the variant down to the inner translated child.
 * Observing the inner child directly would never fire: translated 100%
 * outside an overflow-hidden parent, it has zero visible pixels.
 */
export function OverflowReveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      /* pb gives descenders (g, y, p) room inside the clip;
         the negative margin removes the visual gap it would add */
      className={`overflow-hidden pb-[0.15em] -mb-[0.15em] ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        variants={{
          hidden: { y: "115%" },
          visible: {
            y: "0%",
            transition: { duration: 0.85, delay, ease: EASE },
          },
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Reveal — simple fade-rise for body copy and blocks.
 */
export default function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * WordPop — springy word entrance (kept for playful contexts).
 */
export function WordPop({ children, delay = 0, className = "" }) {
  return (
    <motion.span
      className={`inline-block will-change-transform ${className}`}
      initial={{ opacity: 0, y: 60, scale: 0.7, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.9, delay }}
    >
      {children}
    </motion.span>
  );
}
