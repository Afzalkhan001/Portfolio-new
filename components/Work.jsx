"use client";

import Link from "next/link";
import Reveal, { OverflowReveal } from "./Reveal";
import { NodeMark } from "./Schematic";
import { projects, featuredProjects, primaryLive } from "@/lib/data";

export default function Work() {
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="px-[5vw] py-24">
      {/* featured — each opens its own case page */}
      <div className="mb-12 flex items-end justify-between">
        <h2 className="t-h2">
          <OverflowReveal>Selected</OverflowReveal>
          <OverflowReveal delay={0.07}>
            <span className="t-serif text-dim">work</span>
          </OverflowReveal>
        </h2>
        <div className="hidden text-right sm:block">
          <NodeMark className="ml-auto h-10 w-10 text-blue" />
          <span className="t-mono text-dim">
            ({featuredProjects.length}) case studies
          </span>
        </div>
      </div>

      <div className="border-t rule">
        {featuredProjects.map((p, i) => {
          const live = primaryLive(p);
          return (
            <Reveal key={p.slug} delay={i * 0.05} y={20}>
              <div className="group relative grid grid-cols-[48px_1fr_auto] items-baseline gap-4 border-b rule py-7 transition-colors duration-300 hover:bg-ink hover:text-paper sm:grid-cols-[64px_1fr_auto_auto_auto] sm:gap-8 sm:px-3">
                {/* full-row overlay link to the case study */}
                <Link
                  href={`/work/${p.slug}`}
                  aria-label={`${p.name} — case study`}
                  className="absolute inset-0 z-0"
                />
                <span className="t-mono text-dim group-hover:text-paper/60">
                  {p.n}
                </span>
                <span>
                  <span className="t-h3 block transition-transform duration-500 group-hover:translate-x-2">
                    {p.name}
                  </span>
                  <span className="mt-1 block text-[14px] text-dim group-hover:text-paper/60">
                    {p.tagline}
                  </span>
                </span>
                <span className="t-mono hidden text-dim group-hover:text-paper/60 sm:block">
                  {p.context}
                </span>
                <span className="t-mono hidden text-dim group-hover:text-paper/60 sm:block">
                  {p.year}
                </span>
                <span className="flex items-center gap-4 justify-self-end">
                  {live && (
                    <a
                      href={live.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 whitespace-nowrap border border-current/25 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-blue transition-colors duration-200 hover:bg-blue hover:text-paper group-hover:border-paper/30 group-hover:text-paper group-hover:hover:bg-paper group-hover:hover:text-ink"
                    >
                      {live.label} ↗
                    </a>
                  )}
                  <span className="text-blue transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-paper">
                    →
                  </span>
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* timeline — everything else, year-ordered */}
      <div className="mb-10 mt-24 flex items-end justify-between">
        <h2 className="t-h2">
          <OverflowReveal>Project</OverflowReveal>
          <OverflowReveal delay={0.07}>
            <span className="t-serif text-dim">timeline</span>
          </OverflowReveal>
        </h2>
        <span className="t-mono hidden text-dim sm:block">
          fig. — smaller builds &amp; experiments
        </span>
      </div>

      <Reveal>
        <div className="border-t rule">
          {secondary.map((p) => (
            <article
              key={p.n}
              className="grid grid-cols-[48px_1fr_auto] items-baseline gap-4 border-b rule py-5 sm:grid-cols-[64px_220px_1fr_auto] sm:gap-8 sm:px-3"
            >
              <span className="t-mono text-dim">{p.year}</span>
              <h3 className="text-[16px] font-semibold">{p.name}</h3>
              <p className="hidden text-[14px] text-dim sm:block">{p.summary}</p>
              <span className="t-mono text-dim">{p.context}</span>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
