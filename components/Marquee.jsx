"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Marquee({ children, baseVelocity = 2, className = "" }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // A ref to keep track of the scroll direction
  const directionFactor = useRef(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Speed up based on scroll velocity
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Wrap the content so it loops seamlessly. You might need to adjust the [-100, 0] or wrap depending on child size.
  // We'll use CSS to duplicate children for a simple endless loop if the wrap logic is too complex for arbitrary children.
  
  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div
        className="flex whitespace-nowrap flex-nowrap"
        style={{ x: useTransform(baseX, (v) => `${wrap(-20, -70, v)}%`) }}
      >
        <div className="flex shrink-0 pr-8">{children}</div>
        <div className="flex shrink-0 pr-8">{children}</div>
        <div className="flex shrink-0 pr-8">{children}</div>
        <div className="flex shrink-0 pr-8">{children}</div>
      </motion.div>
    </div>
  );
}
