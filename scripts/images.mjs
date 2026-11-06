// Mengubah PNG mentah di root jadi webp teroptimasi di public/img.
// Jalankan: npm run images
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = path.join(process.cwd(), "raw");
const OUT = path.join(process.cwd(), "public/img");

/** Potong UI Instagram (panah kanan, titik carousel, badge tayangan). */
const ig = (w, h, right = 42, bottom = 64) => ({
  left: 0,
  top: 0,
  width: w - right,
  height: h - bottom,
});

const jobs = [
  { src: "IMG_1921.PNG", out: "01-cut.webp", width: 1100 },
  { src: "IMG_1922.PNG", out: "02-broski.webp", width: 1100 },
  { src: "IMG_1923.PNG", out: "03-sga.webp", width: 1100 },
  { src: "IMG_1924.PNG", out: "04-smith.webp", width: 1100 },
  { src: "IMG_1925.PNG", out: "hero-halftone.webp", width: 1800 },

  {
    src: "Screenshot 2026-11-06 at 18-55-48 Instagram.png",
    out: "illustration.webp",
    width: 900,
    crop: ig(962, 962, 74),
  },
  {
    src: "Screenshot 2026-11-06 at 18-55-56 Instagram.png",
    out: "08-trappelss.webp",
    width: 900,
    crop: ig(962, 962),
  },

  {
    src: "Screenshot 2026-11-06 at 18-55-18 Instagram.png",
    out: "06-jogo.webp",
    width: 820,
    crop: ig(722, 962),
  },
  {
    src: "Screenshot 2026-11-06 at 18-52-49 (5) Instagram.png",
    out: "09-heart-after.webp",
    width: 820,
    crop: ig(722, 962),
  },
  {
    src: "Screenshot 2026-11-06 at 18-55-09 Instagram.png",
    out: "persi.webp",
    width: 760,
    crop: ig(722, 962, 42, 140),
  },

  {
    src: "Screenshot 2026-11-06 at 18-53-27 (5) Instagram.png",
    out: "look-01.webp",
    width: 900,
    crop: ig(745, 962, 42, 130),
  },
  {
    src: "Screenshot 2026-11-06 at 18-53-09 (5) Instagram.png",
    out: "look-02.webp",
    width: 900,
    crop: ig(722, 962),
  },
  {
    src: "Screenshot 2026-11-06 at 18-53-42 (5) Instagram.png",
    out: "look-04.webp",
    width: 900,
    crop: ig(745, 962),
  },
  {
    src: "Screenshot 2026-11-06 at 18-53-37 (5) Instagram.png",
    out: "look-05.webp",
    width: 900,
    crop: ig(745, 962),
  },
];

await mkdir(OUT, { recursive: true });

const made = [];
for (const job of jobs) {
  let img = sharp(path.join(SRC, job.src));
  if (job.crop) img = img.extract(job.crop);
  const file = path.join(OUT, job.out);
  const info = await img
    .resize({ width: job.width, withoutEnlargement: false })
    .webp({ quality: 82, effort: 5 })
    .toFile(file);
  made.push({ file: job.out, w: info.width, h: info.height, kb: Math.round(info.size / 1024) });
}

for (const m of made) console.log(`${String(m.kb).padStart(5)}KB  ${m.w}x${m.h}  ${m.file}`);

// Contact sheet untuk verifikasi visual cepat.
const cols = 5;
const cell = 300;
const rows = Math.ceil(made.length / cols);
const tiles = await Promise.all(
  made.map(async (m, i) => ({
    input: await sharp(path.join(OUT, m.file))
      .resize(cell, cell, { fit: "contain", background: "#ffffff" })
      .toBuffer(),
    left: (i % cols) * cell,
    top: Math.floor(i / cols) * cell,
  })),
);
await sharp({
  create: {
    width: cols * cell,
    height: rows * cell,
    channels: 3,
    background: "#dddddd",
  },
})
  .composite(tiles)
  .png()
  .toFile("/tmp/contact-sheet.png");

const strays = (await readdir(OUT)).filter((f) => !made.some((m) => m.file === f));
if (strays.length) console.log("tidak terpakai:", strays.join(", "));
