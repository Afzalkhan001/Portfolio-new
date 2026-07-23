import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal, { OverflowReveal } from "@/components/Reveal";
import { NodeMark } from "@/components/Schematic";
import CaseSchematic from "@/components/CaseSchematic";
import { featuredProjects, getProject } from "@/lib/data";

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} — Afzal Khan`,
    description: p.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p || !p.featured) notFound();

  const idx = featuredProjects.findIndex((x) => x.slug === slug);
  const next = featuredProjects[(idx + 1) % featuredProjects.length];

  return (
    <main className="relative pt-28">
      <article className="px-[5vw] pb-24 pt-8">
        {/* meta line */}
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-b rule pb-4">
          <span className="t-mono text-dim">
            case {p.n} — {p.context}
          </span>
          <span className="t-mono text-dim">{p.year}</span>
        </div>

        {/* title */}
        <h1 className="t-hero max-w-[14ch]">
          <OverflowReveal>{p.name}</OverflowReveal>
        </h1>
        <OverflowReveal delay={0.1}>
          <p className="t-serif mt-4 text-2xl text-dim sm:text-3xl">
            {p.tagline}
          </p>
        </OverflowReveal>

        {/* system flow schematic — each case has its own topology */}
        <Reveal delay={0.12}>
          <div className="mt-14 border rule bg-paper-2/40 px-4 py-8 sm:px-10">
            {/* scrolls horizontally on phones so labels stay legible */}
            <div className="overflow-x-auto">
              <CaseSchematic
                slug={p.slug}
                className="mx-auto w-full min-w-[480px] max-w-3xl"
              />
            </div>
            <p className="t-mono mt-4 text-center text-dim">
              fig. {p.n} — system flow
            </p>
          </div>
        </Reveal>

        {/* lede + side facts */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-[19px] font-medium leading-relaxed text-ink">
                {p.summary}
              </p>
            </Reveal>

            {/* case narrative */}
            <Reveal delay={0.22}>
              <div className="mt-10 max-w-2xl space-y-6 border-t rule pt-8">
                <p className="t-mono text-dim">/// the case</p>
                {p.overview.map((para) => (
                  <p
                    key={para.slice(0, 32)}
                    className="text-[16px] leading-[1.75] text-ink-soft"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            {p.links.length > 0 && (
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 border border-ink px-6 py-3 text-[13px] font-medium transition-colors duration-300 hover:bg-ink hover:text-paper"
                    >
                      {l.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* side rail: role + stack */}
          <Reveal delay={0.25}>
            <div className="border-t rule pt-8 lg:sticky lg:top-28 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="t-mono mb-3 text-dim">/// my role</p>
              <p className="t-serif text-xl leading-relaxed text-ink">
                {p.role}
              </p>
              <p className="t-mono mb-3 mt-10 text-dim">/// stack</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="t-mono border rule px-3 py-1.5 text-dim">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* capabilities + engineering, two ledgers */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="t-h3">Capabilities</h2>
              <NodeMark className="h-9 w-9 text-blue" />
            </div>
            <Reveal>
              <div className="border-t rule">
                {p.features.map((f, i) => (
                  <div
                    key={f}
                    className="grid grid-cols-[44px_1fr] items-baseline gap-4 border-b rule py-4.5 sm:px-2"
                  >
                    <span className="t-mono text-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="py-1 text-[15px] text-ink-soft">{f}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="t-h3">{p.impact ? "Impact" : "Engineering decisions"}</h2>
              <span className="t-mono text-dim">
                {p.impact ? "/// what changed" : "/// under the hood"}
              </span>
            </div>
            <Reveal delay={0.1}>
              <div className="border-t rule">
                {(p.impact || p.depth).map((d, i) => (
                  <div
                    key={d}
                    className="grid grid-cols-[44px_1fr] items-baseline gap-4 border-b rule py-4.5 sm:px-2"
                  >
                    <span className="t-mono text-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="py-1 text-[15px] text-ink-soft">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {p.confidential && (
          <p className="t-mono mt-10 text-dim">
            /// shared at a public case-study level — proprietary implementation
            details intentionally omitted
          </p>
        )}

        {/* next case */}
        <div className="mt-24 border-t rule pt-10">
          <span className="t-mono text-dim">next case</span>
          <Link href={`/work/${next.slug}`} className="group mt-3 block">
            <span className="t-h2 flex items-baseline gap-4 transition-transform duration-500 group-hover:translate-x-3">
              {next.name}
              <span className="text-blue">→</span>
            </span>
            <span className="text-[15px] text-dim">{next.tagline}</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
