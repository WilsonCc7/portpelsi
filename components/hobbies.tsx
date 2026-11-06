"use client";

import { hobbies } from "@/content/site";
import { LineMask, Reveal } from "@/components/motion";

export default function Hobbies() {
  return (
    <section
      id="di-luar-desain"
      className="mx-auto w-full max-w-[1400px] overflow-hidden px-5 py-20 md:px-10 md:py-32"
    >
      <div className="relative isolate">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 top-0 -z-10 select-none font-display text-[clamp(12rem,34vw,30rem)] font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_var(--color-garnet)]"
        >
          11
        </span>

        <Reveal>
          <p className="label text-mute">{hobbies.label}</p>
          <div className="mt-6 w-10 border-t border-garnet" />
          <h2 className="display-xl mt-6 text-[clamp(2.2rem,6vw,5rem)]">
            {hobbies.heading.split(" ").map((word, index) => (
              <LineMask key={`${word}-${index}`} delay={index * 0.08}>
                {word}
              </LineMask>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-8 max-w-[58ch]">
          <div className="space-y-5 text-base leading-relaxed md:text-lg">
            {hobbies.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="label mt-8 text-mute">{hobbies.ticks.join(" / ")}</p>
        </Reveal>
      </div>
    </section>
  );
}
