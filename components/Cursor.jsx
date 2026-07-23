"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Minimal cursor rendered in mix-blend-difference so it stays
   visible on every surface: dark dot on paper, light dot on ink.
   Grows into a ring over interactive elements. */

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = { damping: 30, stiffness: 450, mass: 0.4 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => {
      setHovering(!!e.target.closest("a, button, [data-interactive='true']"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference md:block"
      style={{ x: sx, y: sy }}
      animate={{
        width: hovering ? 44 : 10,
        height: hovering ? 44 : 10,
        /* white in difference mode = inverse of whatever is underneath */
        backgroundColor: hovering ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)",
        border: hovering
          ? "1.5px solid rgba(255,255,255,1)"
          : "1.5px solid rgba(255,255,255,0)",
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.4 }}
    />
  );
}
