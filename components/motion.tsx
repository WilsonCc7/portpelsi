"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Sama dengan --ease-out di globals.css. Motion butuh array, bukan var(). */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`reveal ${className ?? ""}`}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

/** Baris teks yang tersingkap dari balik masker. Dipakai untuk headline besar. */
export function LineMask({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  // Mask (parent) tidak punya transform, jadi whileInView bisa mengamatinya.
  // Anak yang bergerak mewarisi variant dari induk.
  if (reduce) {
    return (
      <span className={`block overflow-hidden pb-[0.06em] ${className ?? ""}`}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={`block overflow-hidden pb-[0.06em] ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { delayChildren: delay } } }}
    >
      <motion.span
        className="mask-inner block"
        variants={{
          hidden: { y: "110%" },
          visible: { y: "0%", transition: { duration: 0.7, ease: EASE_OUT } },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/** Garis yang tumbuh dari kiri. Dipakai sebagai pemisah antar bagian. */
export function Rule({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const base = `rule-grow h-px w-full origin-left bg-ink ${className ?? ""}`;

  if (reduce) {
    return <div className={base} />;
  }

  return (
    <motion.div
      className={base}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
    />
  );
}
