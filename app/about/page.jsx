import Reveal, { OverflowReveal } from "@/components/Reveal";
import { PipelineSchematic, NodeMark } from "@/components/Schematic";
import { profile, experience, skills, achievements } from "@/lib/data";

export const metadata = {
  title: "About — Afzal Khan",
  description:
    "AI Engineer & Team Lead. From web development into AI engineering — LLM applications, agents, automation, and full-stack AI products.",
};

export default function AboutPage() {
  return (
    <main className="relative pt-28">
      {/* intro */}
      <section className="px-[5vw] pb-20 pt-10">
        <div className="mb-10 flex items-baseline justify-between border-b rule pb-4">
          <span className="t-mono text-dim">fig. 03 — the engineer</span>
          <span className="t-mono text-dim">first IT hire → team lead</span>
        </div>

        <h1 className="t-hero max-w-[14ch]">
          <OverflowReveal>An engineer who</OverflowReveal>
          <OverflowReveal delay={0.08}>
            treats AI as a <span className="t-serif text-blue">product,</span>
          </OverflowReveal>
          <OverflowReveal delay={0.16}>not a demo.</OverflowReveal>
        </h1>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal delay={0.2}>
            <div className="max-w-lg space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {profile.about.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>
          <div className="hidden lg:block">
            <PipelineSchematic className="w-full max-w-[520px]" />
            <p className="t-mono mt-2 text-dim">
              fig. 03a — complex ideas in, usable products out
            </p>
          </div>
        </div>
      </section>

      {/* experience — full detail */}
      <section className="border-t rule px-[5vw] py-24">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="t-h2">
            <OverflowReveal>Experience</OverflowReveal>
          </h2>
          <span className="t-mono hidden text-dim sm:block">
            fig. 04 — the record
          </span>
        </div>

        <div className="space-y-16">
          {experience.map((e) => (
            <Reveal key={e.n}>
              <article className="grid gap-6 border-t rule pt-8 lg:grid-cols-[80px_1fr_1.4fr] lg:gap-10">
                <span className="t-mono text-blue">{e.period}</span>
                <div>
                  <h3 className="t-h3">{e.role}</h3>
                  <p className="t-mono-lg mt-1 text-dim">{e.company}</p>
                  <p className="mt-3 max-w-xs text-[14px] italic text-dim">
                    {e.note}
                  </p>
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-snug text-ink-soft">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* skills grid */}
      <section className="border-t rule px-[5vw] py-24">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="t-h2">
            <OverflowReveal>Skills</OverflowReveal>
          </h2>
          <span className="t-mono hidden text-dim sm:block">
            fig. 05 — the toolkit
          </span>
        </div>

        <div className="grid gap-px overflow-hidden border rule bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="h-full bg-paper p-8 transition-colors duration-300 hover:bg-paper-2">
                <span className="t-mono text-dim">{g.n}</span>
                <h3 className="t-h3 mt-3">{g.title}</h3>
                <ul className="mt-6 space-y-2.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-baseline gap-3 border-b rule pb-2.5 text-[14px] text-ink-soft"
                    >
                      <span className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-blue" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* achievements — ink block */}
      <section className="bg-ink px-[5vw] py-24 text-paper">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="t-h2">
            <OverflowReveal>
              On the <span className="t-serif text-blue-soft">record</span>
            </OverflowReveal>
          </h2>
          <NodeMark className="hidden h-10 w-10 sm:block" stroke="#7c93ff" />
        </div>
        <div className="border-t border-paper/15">
          {achievements.map((a, i) => (
            <Reveal key={a} delay={i * 0.05}>
              <div className="grid grid-cols-[48px_1fr] items-baseline gap-4 border-b border-paper/15 py-6 sm:grid-cols-[64px_1fr] sm:gap-8 sm:px-3">
                <span className="t-mono text-paper/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="t-h3 font-medium">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
