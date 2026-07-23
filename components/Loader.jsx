"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

/* Minimal preloader: paper field, mono counter, a hairline that
   fills left→right, then the whole sheet lifts away. Fast — 1.6s. */

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    let n = 0;
    const tick = () => {
      n = Math.min(100, n + 4 + Math.random() * 8);
      setCount(Math.floor(n));
      if (n < 100) {
        setTimeout(tick, 30 + Math.random() * 40);
      } else {
        setTimeout(() => {
          setDone(true);
          document.documentElement.style.overflow = "";
        }, 250);
      }
    };
    const start = setTimeout(tick, 200);
    return () => {
      clearTimeout(start);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="fixed inset-0 z-[999] flex flex-col justify-between bg-paper px-[5vw] py-8"
        >
          <div className="flex items-baseline justify-between">
            <span className="t-mono text-ink">Afzal Khan</span>
            <span className="t-mono text-dim">AI Systems Architect</span>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="t-serif text-2xl text-ink"
            >
              assembling the ledger…
            </motion.p>
            <div className="mt-6 h-px w-full bg-line">
              <motion.div
                className="h-px bg-blue"
                style={{ width: `${count}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between">
              <span className="t-mono text-dim">/// loading</span>
              <span className="t-mono tabular-nums text-ink">
                {String(count).padStart(3, "0")}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
