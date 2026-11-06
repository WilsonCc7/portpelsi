import { site } from "@/content/site";

/**
 * Server component. Kalau PDF belum ada, tombol mengarah ke bagian kontak
 * alih-alih menawarkan file yang 404.
 */
export function CvButton({
  label = "Unduh CV",
  tone = "acid",
  className = "",
}: {
  label?: string;
  tone?: "acid" | "ink" | "outline";
  className?: string;
}) {
  const skin = {
    acid: "bg-acid text-ink",
    ink: "bg-ink text-paper",
    outline: "border border-ink text-ink",
  }[tone];

  const base = `inline-flex items-center gap-3 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${skin} ${className}`;

  if (!site.cv.available) {
    // Tidak ada PDF: jangan menjanjikan unduhan. Tombol jadi ajakan minta CV.
    return (
      <a href="#kontak" className={base}>
        Minta CV
        <span aria-hidden="true">&#8599;</span>
        <span className="sr-only">, CV belum tersedia, buka bagian kontak</span>
      </a>
    );
  }

  return (
    <a href={site.cv.file} download className={base}>
      {label}
      <span aria-hidden="true">&#8595;</span>
      <span className="sr-only">, unduh PDF</span>
    </a>
  );
}
