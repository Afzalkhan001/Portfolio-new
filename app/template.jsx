"use client";

import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

/* Route transition: an ink sheet wipes up and away,
   a thin blue rule trailing its lower edge; content rises in. */

export default function Template({ children }) {
  return (
    <>
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
        className="pointer-events-none fixed inset-0 z-[500] bg-ink"
      >
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-blue" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
