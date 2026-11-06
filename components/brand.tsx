"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { brand } from "@/content/site";
import { EASE_OUT, Rule } from "@/components/motion";

export default function Brand() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="brand" className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-5">
        <div className="md:col-span-5 md:col-start-1 md:row-start-1">
          <p className="label text-mute">{brand.label}</p>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-mute md:mt-8">{brand.body}</p>
        </div>
        <h2 className="font-display text-[clamp(4rem,16vw,13rem)] leading-[0.8] tracking-[-0.04em] md:col-span-7 md:col-start-6 md:row-start-1">
          {brand.heading}
        </h2>
      </div>

      <motion.div
        className="mt-16 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 md:mt-24 md:grid md:grid-cols-6 md:overflow-visible md:pb-0 md:[&>*:nth-child(even)]:translate-y-8"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        {brand.shots.map((shot) => (
          <div key={shot.src} className="relative aspect-[3/4] w-[60vw] shrink-0 snap-start overflow-hidden border border-ink bg-plate md:w-auto">
            <Image src={shot.src} alt={shot.alt} fill sizes="(min-width:768px) 20vw, 60vw" className="object-cover" />
          </div>
        ))}
      </motion.div>

      <Rule className="my-12 md:my-16" />

      <figure className="md:max-w-[440px]">
        <div className="relative aspect-square overflow-hidden border border-ink bg-plate">
          <Image
            src={brand.illustration.src}
            alt={brand.illustration.alt}
            fill
            sizes="(min-width:768px) 440px, 100vw"
            className="object-contain"
          />
        </div>
        <figcaption className="label mt-3 text-mute">
          {brand.illustration.caption}
        </figcaption>
      </figure>
    </section>
  );
}
