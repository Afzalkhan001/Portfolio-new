"use client";

import { motion } from "framer-motion";

/* Per-project system schematics — original self-drawing diagrams.
   Each case gets a topology that matches how its system actually flows.
   Data-driven renderer: circles, boxes, edges, decor paths, mono labels. */

const BLUE = "#002fa7";

const draw = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay },
      opacity: { duration: 0.15, delay },
    },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 0.75, transition: { delay, duration: 0.4 } },
});

/* ── per-slug diagram definitions ───────────────────────────── */
const DIAGRAMS = {
  "daily-mattr": {
    viewBox: "0 0 560 280",
    circles: [
      [52, 62, 15], [40, 138, 11], [64, 210, 13],          // raw news
      [498, 70, 14], [512, 140, 12], [496, 212, 14],       // readers
    ],
    boxes: [[210, 100, 140, 80, 10]],
    edges: [
      "M68 68 C 130 84, 160 104, 208 122",
      "M52 140 C 120 144, 150 140, 206 140",
      "M78 204 C 130 190, 160 172, 208 158",
      "M352 122 C 410 106, 440 88, 484 76",
      "M352 140 C 420 140, 450 140, 498 140",
      "M352 158 C 410 172, 440 192, 482 206",
    ],
    decor: ["M232 124 L 328 124 M232 140 L 310 140 M232 156 L 292 156"],
    labels: [
      [30, 250, "RAW NEWS"],
      [216, 208, "SUMMARIZE · CLASSIFY · RANK"],
      [468, 250, "READERS"],
    ],
  },
  kiwikoo: {
    viewBox: "0 0 560 280",
    circles: [
      [58, 84, 16], [50, 186, 14],                          // photo, product
      [498, 62, 14], [512, 140, 12], [498, 218, 14],        // shopper/brand/creator
    ],
    boxes: [[212, 98, 140, 84, 10]],
    edges: [
      "M74 90 C 140 102, 165 116, 210 126",
      "M66 180 C 135 168, 165 156, 210 152",
      "M352 122 C 415 104, 445 84, 484 68",
      "M352 140 C 420 140, 455 140, 500 140",
      "M352 158 C 415 176, 445 198, 484 212",
    ],
    decor: [
      "M252 124 q 14 -14 28 0 q -14 18 -28 0 Z",            // little garment mark
      "M240 158 L 324 158",
    ],
    labels: [
      [34, 122, "PHOTO"],
      [22, 224, "PRODUCT"],
      [224, 206, "TRY-ON ENGINE"],
      [462, 34, "SHOPPER"],
      [478, 178, "BRAND"],
      [460, 256, "CREATOR"],
    ],
  },
  shortly: {
    viewBox: "0 0 560 280",
    circles: [
      [46, 60, 13], [38, 132, 10], [52, 204, 12],           // sources
      [498, 140, 18],                                        // inbox
    ],
    boxes: [
      [124, 108, 88, 62, 8],
      [242, 108, 88, 62, 8],
      [360, 108, 96, 62, 8],
    ],
    edges: [
      "M60 66 C 92 84, 104 100, 122 118",
      "M50 134 C 80 138, 96 138, 122 139",
      "M66 198 C 94 182, 106 166, 124 154",
      "M212 139 L 240 139",
      "M330 139 L 358 139",
      "M456 139 L 478 139",
    ],
    decor: [
      "M488 132 L 498 141 L 508 132",                        // envelope flap
    ],
    labels: [
      [26, 244, "SOURCES"],
      [138, 200, "SCRAPE"],
      [258, 200, "CLEAN"],
      [368, 200, "SUMMARIZE"],
      [478, 190, "INBOX"],
    ],
  },
  pixagent: {
    viewBox: "0 0 560 280",
    circles: [[50, 70, 14], [42, 145, 11], [56, 214, 13]],
    boxes: [
      [190, 100, 160, 80, 10],
      [438, 108, 92, 64, 8],
    ],
    edges: [
      "M64 76 C 120 92, 145 108, 188 124",
      "M53 146 C 115 144, 145 142, 188 140",
      "M70 208 C 122 192, 148 172, 190 156",
      "M350 140 L 436 140",
    ],
    decor: ["M214 126 L 326 126 M214 142 L 306 142 M214 158 L 286 158"],
    labels: [
      [30, 254, "ARTICLES"],
      [196, 206, "GENERATE · SUMMARIZE"],
      [438, 198, "EDITORIAL"],
    ],
  },
  "sentinel-ai": {
    viewBox: "0 0 560 280",
    circles: [[52, 66, 13], [44, 140, 11], [56, 212, 13]],
    boxes: [
      [206, 96, 148, 88, 10],
      [446, 110, 84, 60, 8],
    ],
    edges: [
      "M66 72 L 110 88 L 130 82 L 204 116",                  // jagged probe paths
      "M56 142 L 104 138 L 126 148 L 204 140",
      "M70 206 L 116 190 L 134 198 L 206 164",
      "M354 140 L 444 140",
    ],
    decor: [
      "M256 118 L 280 106 L 304 118 L 304 146 Q 304 166 280 174 Q 256 166 256 146 Z", // shield
      "M456 126 L 512 126 M456 140 L 500 140 M456 154 L 506 154",
    ],
    labels: [
      [28, 250, "PROBES"],
      [222, 210, "TARGET SYSTEM"],
      [448, 196, "REPORT"],
    ],
  },
  stride: {
    viewBox: "0 0 560 280",
    circles: [
      [280, 140, 34],                                        // check-in core
      [280, 48, 12], [372, 186, 12], [188, 186, 12],         // day phases
    ],
    boxes: [],
    edges: [
      "M292 59 A 92 92 0 0 1 366 176",
      "M362 197 A 92 92 0 0 1 198 197",
      "M194 176 A 92 92 0 0 1 268 59",
    ],
    decor: ["M280 128 L 280 140 L 290 148"],                 // clock hands
    labels: [
      [252, 100, "CHECK-IN"],
      [258, 24, "MORNING"],
      [396, 190, "DUSK"],
      [124, 190, "NIGHT"],
    ],
  },
  "nori-ai-browser": {
    viewBox: "0 0 560 280",
    circles: [[500, 140, 16]],
    boxes: [
      [60, 48, 320, 184, 12],                                // browser window
      [268, 92, 92, 116, 8],                                 // assistant panel
    ],
    edges: ["M380 140 L 482 140"],
    decor: [
      "M60 78 L 380 78",                                     // topbar
      "M78 63 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0 M98 63 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0",
      "M84 108 L 240 108 M84 128 L 220 128 M84 148 L 236 148 M84 168 L 200 168",
      "M284 112 L 344 112 M284 130 L 332 130 M284 148 L 340 148 M284 180 L 320 180",
    ],
    labels: [
      [76, 252, "THE PAGE"],
      [258, 226, "ASSISTANT"],
      [484, 190, "YOU"],
    ],
  },
  pikoos: {
    viewBox: "0 0 560 280",
    circles: [],
    boxes: [[330, 96, 150, 88, 10]],
    edges: ["M160 140 C 220 140, 260 140, 328 140"],
    decor: [
      "M96 140 C 100 118, 106 112, 128 108 C 106 104, 100 98, 96 76 C 92 98, 86 104, 64 108 C 86 112, 92 118, 96 140 Z", // idea spark
      "M354 122 L 456 122 M354 140 L 436 140 M354 158 L 448 158",
    ],
    labels: [
      [72, 178, "IDEA"],
      [346, 210, "WORKING MVP"],
      [210, 122, "DAYS, NOT MONTHS"],
    ],
  },
};

export default function CaseSchematic({ slug, className = "" }) {
  const d = DIAGRAMS[slug];
  if (!d) return null;

  const s = {
    fill: "none",
    stroke: BLUE,
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  let i = 0;
  const step = () => 0.12 * i++;

  return (
    <motion.svg
      viewBox={d.viewBox}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-hidden
    >
      {d.circles.map(([cx, cy, r], k) => (
        <motion.circle key={`c${k}`} cx={cx} cy={cy} r={r} {...s} variants={draw(step())} />
      ))}
      {d.boxes.map(([x, y, w, h, rx], k) => (
        <motion.rect key={`b${k}`} x={x} y={y} width={w} height={h} rx={rx} {...s} variants={draw(step())} />
      ))}
      {d.edges.map((p, k) => (
        <motion.path key={`e${k}`} d={p} {...s} variants={draw(step())} />
      ))}
      {d.decor.map((p, k) => (
        <motion.path key={`d${k}`} d={p} {...s} strokeWidth={1.2} variants={draw(step())} />
      ))}
      {d.labels.map(([x, y, text], k) => (
        <motion.text
          key={`l${k}`}
          x={x}
          y={y}
          fontSize="10"
          fill={BLUE}
          style={{ fontFamily: "var(--font-geist-mono)", letterSpacing: "0.1em" }}
          variants={fadeIn(1 + k * 0.08)}
        >
          {text}
        </motion.text>
      ))}
    </motion.svg>
  );
}
