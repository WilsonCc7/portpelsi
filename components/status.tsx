import Image from "next/image";
import { status } from "@/content/site";
import { Reveal, Rule } from "@/components/motion";

export default function Status() {
  return (
    <section
      id="status"
      className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-32"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <Reveal className="relative aspect-[3/4] w-full border border-ink bg-plate md:col-start-2 md:col-span-4">
          <Image
            src={status.portrait}
            alt={status.portraitAlt}
            fill
            sizes="(min-width:768px) 33vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.12} className="md:col-start-7 md:col-span-5">
          <p className="label text-mute">{status.label}</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.98] tracking-[-0.02em]">
            {status.heading}
          </h2>

          <div className="mt-6 max-w-[58ch] space-y-6 text-base leading-relaxed md:text-lg">
            {status.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10">
            {status.facts.map(({ k, v }) => (
              <div
                key={k}
                className="grid grid-cols-[8rem_1fr] gap-4 border-t border-ink py-3"
              >
                <dt className="label text-mute">{k}</dt>
                <dd className="font-mono text-sm">{v}</dd>
              </div>
            ))}
          </dl>
          <Rule />
        </Reveal>
      </div>
    </section>
  );
}
