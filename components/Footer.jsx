"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t rule bg-paper px-[5vw] py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <span className="t-mono text-dim">
          © {new Date().getFullYear()} Afzal Khan — AI Systems Architect
        </span>
        <nav className="flex gap-6">
          <Link href="/work" className="u-sweep t-mono text-dim hover:text-ink">
            Work
          </Link>
          <Link href="/about" className="u-sweep t-mono text-dim hover:text-ink">
            About
          </Link>
          <Link href="/contact" className="u-sweep t-mono text-dim hover:text-ink">
            Contact
          </Link>
        </nav>
        <span className="t-mono flex items-center gap-2 text-dim">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" />
          All systems operational
        </span>
      </div>
    </footer>
  );
}
