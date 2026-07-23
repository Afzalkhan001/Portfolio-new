"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "/work", n: "01" },
  { label: "About", href: "/about", n: "02" },
  { label: "Contact", href: "/contact", n: "03" },
];

/* live clock — the "system status" readout */
function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="t-mono tabular-nums text-dim">
      {time || "00:00:00"}
    </span>
  );
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      className="fixed inset-x-0 top-0 z-[90] border-b rule bg-paper/85 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-[5vw] py-4">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-[15px] font-semibold tracking-tight">
            Afzal Khan
          </span>
          <span className="t-mono hidden text-dim sm:inline">
            AI Engineer
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" />
          <span className="t-mono text-dim">Operational</span>
          <span className="t-mono text-line">|</span>
          <Clock />
        </div>

        <nav className="flex items-center gap-4 sm:gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`u-sweep flex items-baseline gap-1.5 text-[14px] font-medium transition-colors ${
                  active ? "text-blue" : "text-ink hover:text-blue"
                }`}
              >
                <span className="t-mono hidden text-[9px] text-dim sm:inline">
                  {l.n}
                </span>
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
