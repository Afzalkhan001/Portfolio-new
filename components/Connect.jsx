"use client";

import Reveal, { OverflowReveal } from "./Reveal";
import { NodeMark } from "./Schematic";
import { profile, services } from "@/lib/data";

export default function Connect() {
  return (
    <section className="bg-ink px-[5vw] py-28 text-paper">
      <div className="mb-4 flex items-baseline justify-between border-b border-paper/15 pb-4">
        <span className="t-mono text-paper/50">fig. 06 — initialize protocol</span>
        <NodeMark className="h-8 w-8" stroke="#7c93ff" />
      </div>

      <a href={`mailto:${profile.email}`} className="group block pt-8">
        <h1 className="t-hero max-w-[12ch]">
          <OverflowReveal>Let’s build</OverflowReveal>
          <OverflowReveal delay={0.08}>
            something <span className="t-serif text-blue-soft">useful.</span>
          </OverflowReveal>
        </h1>
        <span className="mt-6 inline-block text-paper/60 transition-transform duration-500 group-hover:translate-x-3">
          → {profile.email}
        </span>
      </a>

      <Reveal delay={0.2}>
        <p className="mt-10 max-w-md leading-relaxed text-paper/70">
          Startups shipping AI products, teams that need automation, founders
          who need execution — I help take AI from idea to production.
        </p>
      </Reveal>

      {/* services */}
      <Reveal delay={0.3}>
        <div className="mt-12">
          <p className="t-mono mb-4 text-paper/50">/// what I can do for you</p>
          <div className="flex max-w-3xl flex-wrap gap-2.5">
            {services.map((s) => (
              <span
                key={s}
                className="border border-paper/20 px-4 py-2 text-[13px] text-paper/80 transition-colors duration-300 hover:bg-paper hover:text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* channels */}
      <div className="mt-16 border-t border-paper/15">
        {[
          ...profile.socials,
          { label: "Résumé", href: profile.resume, handle: "PDF — download" },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <a
              href={s.href}
              target={
                s.href.startsWith("http") || s.href.endsWith(".pdf")
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              className="group grid grid-cols-[48px_1fr_auto] items-baseline gap-4 border-b border-paper/15 py-6 transition-colors duration-300 hover:bg-ink-soft sm:grid-cols-[64px_200px_1fr_auto] sm:gap-8 sm:px-3"
            >
              <span className="t-mono text-paper/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="t-h3">{s.label}</span>
              <span className="t-mono-lg hidden truncate text-paper/50 sm:block">
                {s.handle}
              </span>
              <span className="text-paper/40 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-paper">
                ↗
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
