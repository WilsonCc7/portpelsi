"use client";

import Image from "next/image";
import { hero, site } from "@/content/site";
import { CvButton } from "@/components/cv-button";
import { EASE_OUT, LineMask, Reveal } from "@/components/motion";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative grid min-h-[86svh] w-full grid-cols-1 md:grid-cols-12"
    >
      <div className="relative aspect-[4/5] overflow-hidden md:col-span-7 md:col-start-6 md:row-start-1 md:aspect-auto md:h-full md:min-h-[86svh]">
        <motion.div
          className="absolute inset-0"
          initial={
            reduceMotion ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(100% 0 0 0)" }
          }
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
        >
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 58.333vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-between gap-10 bg-acid p-6 text-ink md:col-span-5 md:col-start-1 md:row-start-1 md:min-h-[86svh] md:p-8 lg:p-10">
        <div>
          <Reveal>
            <p className="label mb-5 text-ink">{hero.eyebrow}</p>
          </Reveal>
          <h1 className="display-xl text-[clamp(3rem,7vw,7.5rem)] text-ink">
            {hero.lines.map((line, index) => (
              <LineMask key={line} delay={0.12 + index * 0.14}>
                {line}
              </LineMask>
            ))}
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-[42ch] text-base leading-relaxed text-ink md:text-lg">
              {hero.lead}
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <CvButton label="Unduh CV" tone="ink" />
              <a
                href={hero.secondaryCta.href}
                className="label border-b border-ink py-1 text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-ink pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
          <span>{site.role}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{site.school}</span>
        </div>
      </div>
    </section>
  );
}
