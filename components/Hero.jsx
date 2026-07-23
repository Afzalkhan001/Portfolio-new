"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { OverflowReveal } from "./Reveal";
import { PipelineSchematic } from "./Schematic";
import Marquee from "./Marquee";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 800], [0, 90]);
  const fade = useTransform(scrollY, [200, 700], [1, 0.15]);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between pt-28">
      <motion.div style={{ y: drift, opacity: fade }} className="px-[5vw]">
        {/* meta line */}
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-b rule pb-4">
          <span className="t-mono text-dim">fig. 00 — introduction</span>
          <span className="t-mono text-dim">
            AI Engineer · Automation · Full Stack
          </span>
        </div>

        {/* the statement */}
        <h1 className="t-hero max-w-[16ch]">
          <OverflowReveal>I build AI products</OverflowReveal>
          <OverflowReveal delay={0.08}>
            that solve <span className="t-serif text-blue">real</span>
          </OverflowReveal>
          <OverflowReveal delay={0.16}>business problems.</OverflowReveal>
        </h1>

        {/* intro row: copy left, schematic right */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
            className="max-w-md"
          >
            <p className="text-[17px] font-normal leading-relaxed text-ink-soft">
              I’m Afzal Khan — an AI Engineer. I build LLM applications,
              intelligent agents, automation systems, and full-stack AI
              products — transforming complex ideas into things people actually
              use.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/work"
                className="group flex items-center gap-3 border border-ink px-6 py-3 text-[13px] font-medium transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                View selected work
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
              <Link href="/contact" className="u-sweep t-mono-lg text-blue">
                or say hello
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <PipelineSchematic className="ml-auto w-full max-w-[520px]" />
            <p className="t-mono mt-2 text-right text-dim">
              fig. 01 — what I do, schematically
            </p>
          </div>
        </div>
      </motion.div>

      {/* thin capability ticker along the hero's base */}
      <div className="mt-16 border-y rule py-3">
        <Marquee baseVelocity={1.2} className="text-dim">
          {[
            "LLM Applications",
            "AI Agents",
            "Workflow Automation",
            "RAG",
            "Prompt Engineering",
            "Data Pipelines",
            "Full-Stack AI",
          ].map((t) => (
            <span key={t} className="t-mono mx-6 flex items-center gap-6">
              {t}
              <span className="inline-block h-1 w-1 rounded-full bg-blue" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
