"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { works, type Work } from "@/content/site";
import { EASE_OUT } from "@/components/motion";




const imageVariants = {
  rest: { transform: "scale(1)" },
  hover: { transform: "scale(1.03)", transition: { duration: 0.35, ease: EASE_OUT } },
};

const kindVariants = {
  rest: { color: "var(--color-mute)" },
  hover: { color: "var(--color-ink)" },
};

function WorkTile({
  work,
  hoverable,
}: {
  work: Work;
  hoverable: boolean;
}) {
  return (
    <motion.article
      className="flex flex-col"
      initial="rest"
      whileHover={hoverable ? "hover" : undefined}
    >
      <div className="border border-ink bg-plate p-2">
        <div className={`relative overflow-hidden ${work.ratio === "portrait" ? "aspect-[4/5]" : "aspect-square"}`}>
          <motion.div className="absolute inset-0" variants={imageVariants}>
            <Image
              src={work.image}
              alt={`${work.title}, ${work.kind}`}
              fill
              sizes="(min-width:768px) 33vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="font-display text-xl tracking-tight md:text-2xl">{work.title}</h3>
        <motion.p className="label mt-1" variants={kindVariants}>{work.kind}</motion.p>
        <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-mute">{work.note}</p>
      </div>
    </motion.article>
  );
}

export default function Works() {
  // Hover hanya di perangkat dengan kursor presisi; sentuhan memicu hover palsu.
  const [hoverable, setHoverable] = useState(false);
  useEffect(() => {
    setHoverable(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  return (
    <section id="karya" className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <header className="mb-12 flex items-end justify-between gap-4 md:mb-16">
        <div>
          <p className="label text-mute">Karya</p>
          <h2 className="display-xl mt-4 text-[clamp(2.6rem,7vw,6rem)]">Lima potong apparel</h2>
        </div>
        <p className="label hidden shrink-0 text-mute md:block">[ {works.length} ]</p>
      </header>
      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-12">
        <div className="flex flex-col gap-y-10 md:col-span-7 md:gap-y-16">
          {works
            .filter((_, i) => i < 2)
            .map((work) => (
              <WorkTile key={work.slug} work={work} hoverable={hoverable} />
            ))}
        </div>
        <div className="mt-10 flex flex-col gap-y-10 md:col-span-5 md:mt-28 md:gap-y-16">
          {works
            .filter((_, i) => i >= 2)
            .map((work) => (
              <WorkTile key={work.slug} work={work} hoverable={hoverable} />
            ))}
        </div>
      </div>
    </section>
  );
}
