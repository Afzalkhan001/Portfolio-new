import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal, { OverflowReveal } from "@/components/Reveal";
import { NodeMark } from "@/components/Schematic";
import { featuredProjects, experience, services } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      {/* ledger index — featured work */}
      <section className="px-[5vw] py-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="t-h2">
            <OverflowReveal>Featured</OverflowReveal>
            <OverflowReveal delay={0.07}>
              <span className="t-serif text-dim">work,</span> indexed
            </OverflowReveal>
          </h2>
          <span className="t-mono hidden text-dim sm:block">
            fig. 02 — the ledger
          </span>
        </div>

        <div className="border-t rule">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} y={20}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-[48px_1fr_auto] items-baseline gap-4 border-b rule py-6 transition-colors duration-300 hover:bg-paper-2 sm:grid-cols-[64px_1fr_auto_90px_auto] sm:gap-8 sm:px-3"
              >
                <span className="t-mono text-dim">{p.n}</span>
                <span className="t-h3 transition-transform duration-500 group-hover:translate-x-2">
                  {p.name}
                  <span className="ml-3 hidden text-[14px] font-normal text-dim lg:inline">
                    {p.tagline}
                  </span>
                </span>
                <span className="t-mono hidden text-dim sm:block">{p.context}</span>
                <span className="t-mono hidden text-dim sm:block">{p.year}</span>
                <span className="text-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-end">
            <Link href="/work" className="u-sweep t-mono-lg text-blue">
              All projects &amp; timeline →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* experience strip */}
      <section className="border-t rule px-[5vw] py-24">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="t-h2">
            <OverflowReveal>Where I</OverflowReveal>
            <OverflowReveal delay={0.07}>
              <span className="t-serif text-dim">work</span>
            </OverflowReveal>
          </h2>
          <span className="t-mono hidden text-dim sm:block">
            fig. 03 — experience
          </span>
        </div>

        <div className="grid gap-px overflow-hidden border rule bg-line lg:grid-cols-2">
          {experience.map((e) => (
            <Reveal key={e.n} className="h-full">
              <div className="h-full bg-paper p-8 sm:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="t-mono text-dim">{e.n}</span>
                  <span className="t-mono text-blue">{e.period}</span>
                </div>
                <h3 className="t-h3 mt-4">{e.role}</h3>
                <p className="t-mono-lg mt-1 text-dim">{e.company}</p>
                <ul className="mt-6 space-y-2.5">
                  {e.points.slice(0, 4).map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-snug text-ink-soft">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-end">
            <Link href="/about" className="u-sweep t-mono-lg text-blue">
              Full story, skills &amp; achievements →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* services */}
      <section className="border-t rule px-[5vw] py-24">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-24">
          <div>
            <NodeMark className="h-12 w-12 text-blue" />
            <p className="t-mono mt-3 text-dim">fig. 04 — services</p>
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <span
                  key={s}
                  className="border rule px-5 py-2.5 text-[14px] text-ink-soft transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* github activity */}
      <section className="border-t rule px-[5vw] py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="t-h2">
            <OverflowReveal>Always</OverflowReveal>
            <OverflowReveal delay={0.07}>
              <span className="t-serif text-dim">shipping</span>
            </OverflowReveal>
          </h2>
          <span className="t-mono hidden text-dim sm:block">
            fig. 05 — github activity
          </span>
        </div>
        <Reveal>
          <a
            href="https://github.com/Afzalkhan001"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rule bg-paper-2/50 p-6 transition-colors duration-300 hover:bg-paper-2 sm:p-8"
          >
            {/* contribution graph rendered by ghchart from the live profile */}
            <img
              src="https://ghchart.rshah.org/002fa7/Afzalkhan001"
              alt="Afzal Khan's GitHub contribution graph"
              className="w-full"
              loading="lazy"
            />
            <span className="t-mono mt-4 flex items-center justify-between text-dim">
              github.com/Afzalkhan001
              <span className="text-blue">open profile ↗</span>
            </span>
          </a>
        </Reveal>
      </section>

      {/* contact strip — inverted ink block */}
      <section className="bg-ink px-[5vw] py-24 text-paper">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="t-h2 max-w-[16ch]">
            <OverflowReveal>Have a problem AI</OverflowReveal>
            <OverflowReveal delay={0.07}>
              should be <span className="t-serif text-blue-soft">solving?</span>
            </OverflowReveal>
          </h2>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-paper px-7 py-3.5 text-[14px] font-medium transition-colors duration-300 hover:bg-paper hover:text-ink"
            >
              Start the conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
