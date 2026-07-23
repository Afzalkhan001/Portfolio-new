"use client";

import { motion } from "framer-motion";

/* Original self-drawing system schematics — hairline node graphs
   that sketch themselves in when scrolled into view. */

const draw = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay },
      opacity: { duration: 0.2, delay },
    },
  },
});

/* data → pipeline → users */
export function PipelineSchematic({ className = "", stroke = "#002fa7" }) {
  const s = {
    fill: "none",
    stroke,
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  return (
    <motion.svg
      viewBox="0 0 520 300"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-hidden
    >
      {/* raw data cluster */}
      <motion.circle cx="60" cy="70" r="16" {...s} variants={draw(0)} />
      <motion.circle cx="46" cy="140" r="12" {...s} variants={draw(0.1)} />
      <motion.circle cx="80" cy="210" r="14" {...s} variants={draw(0.2)} />
      {/* flows into the system block */}
      <motion.path d="M78 76 C 140 90, 160 110, 208 128" {...s} variants={draw(0.3)} />
      <motion.path d="M60 142 C 120 148, 160 142, 206 144" {...s} variants={draw(0.4)} />
      <motion.path d="M96 204 C 140 190, 170 170, 208 158" {...s} variants={draw(0.5)} />
      {/* the system */}
      <motion.rect x="212" y="108" width="120" height="78" rx="10" {...s} variants={draw(0.6)} />
      <motion.path d="M232 132 L 312 132 M 232 148 L 296 148 M 232 164 L 280 164" {...s} variants={draw(0.8)} />
      {/* output to users */}
      <motion.path d="M334 138 C 390 128, 410 112, 448 96" {...s} variants={draw(1)} />
      <motion.path d="M334 156 C 390 166, 410 182, 448 198" {...s} variants={draw(1.1)} />
      <motion.circle cx="466" cy="88" r="14" {...s} variants={draw(1.2)} />
      <motion.circle cx="466" cy="206" r="14" {...s} variants={draw(1.3)} />
      {/* captions */}
      <motion.text
        x="40" y="252" fontSize="10" fill={stroke} opacity="0.7"
        style={{ fontFamily: "var(--font-geist-mono)", letterSpacing: "0.1em" }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.7, transition: { delay: 1.5 } } }}
      >
        RAW DATA
      </motion.text>
      <motion.text
        x="228" y="206" fontSize="10" fill={stroke} opacity="0.7"
        style={{ fontFamily: "var(--font-geist-mono)", letterSpacing: "0.1em" }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.7, transition: { delay: 1.6 } } }}
      >
        THE SYSTEM
      </motion.text>
      <motion.text
        x="432" y="240" fontSize="10" fill={stroke} opacity="0.7"
        style={{ fontFamily: "var(--font-geist-mono)", letterSpacing: "0.1em" }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.7, transition: { delay: 1.7 } } }}
      >
        REAL USERS
      </motion.text>
    </motion.svg>
  );
}

/* small corner node-mark, used as a recurring glyph */
export function NodeMark({ className = "", stroke = "currentColor" }) {
  const s = {
    fill: "none",
    stroke,
    strokeWidth: 1.4,
    strokeLinecap: "round",
  };
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-hidden
    >
      <motion.circle cx="14" cy="14" r="6" {...s} variants={draw(0)} />
      <motion.circle cx="50" cy="32" r="6" {...s} variants={draw(0.15)} />
      <motion.circle cx="18" cy="52" r="6" {...s} variants={draw(0.3)} />
      <motion.path d="M20 16 L 44 30 M 44 36 L 24 49" {...s} variants={draw(0.45)} />
    </motion.svg>
  );
}
