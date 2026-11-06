// Semua teks dan path gambar ada di file ini. Edit di sini, bukan di komponen.
// Tanda TODO = belum terverifikasi, ganti kalau salah.

export type Work = {
  slug: string;
  title: string;
  kind: string;
  note: string;
  image: string;
  ratio: "square" | "portrait";
};

export type Shot = {
  src: string;
  alt: string;
};

export const site = {
  name: "Alfatik Persi",
  role: "Desain apparel",
  school: "SMK Cinta Kasih Tzu Chi", // TODO: konfirmasi penulisan resmi
  // TODO: isi email asli. Kalau null, tombol email tidak dirender.
  email: null as string | null,
  instagramCommission: {
    handle: "@trappelss",
    url: "https://instagram.com/trappelss",
  },
  cv: {
    file: "/cv/alfatik-persi-cv.pdf", // taruh PDF di public/cv/
    available: false, // ubah ke true setelah PDF ada
  },
};

export const hero = {
  eyebrow: "Portofolio desain apparel",
  lines: ["Alfatik", "Persi"],
  lead: "Merancang kaos, hoodie, dan outfit untuk pesanan orang lain, sambil membangun brand sendiri.",
  secondaryCta: { label: "Lihat karya", href: "#karya" },
  image: "/img/hero-halftone.webp",
  imageAlt:
    "Kaos cetak penuh dengan potret halftone biru dan bunga menutupi wajah model",
};

export const nav = [
  { label: "Status", href: "#status" },
  { label: "Karya", href: "#karya" },
  { label: "Brand", href: "#brand" },
  { label: "Kontak", href: "#kontak" },
];

export const status = {
  label: "Status",
  heading: "Sekolah pagi, desain sepanjang sisa hari",
  body: [
    `Saya ${site.name}. Sehari-hari siswa di ${site.school}, tapi hampir semua waktu luang habis untuk apparel: menata tipografi, memotong gambar orang, memutuskan apa yang muncul di depan kaos dan apa yang disembunyikan di punggung.`,
    "Semua yang ada di halaman ini lahir dari pesanan orang, bukan tugas sekolah. Klien datang lewat DM, lalu saya kerjakan sendiri dari sketsa sampai file siap sablon.",
  ],
  facts: [
    { k: "Sekolah", v: site.school },
    { k: "Bidang", v: "Desain apparel dan merchandise" },
    { k: "Komisi", v: site.instagramCommission.handle },
    { k: "Brand", v: "can't" },
  ],
  portrait: "/img/persi.webp",
  portraitAlt: "Alfatik Persi memakai kaos putih cetakan semanggi hijau",
};

export const hobbies = {
  label: "Di luar desain",
  heading: "Bola mengajari saya soal huruf",
  body: [
    "Nomor punggung, nama pemain, sponsor, dan warna klub harus muat di satu punggung kaos dan tetap terbaca dari tribun. Dari situ saya mulai serius menatap tipografi di kostum.",
    "Barcelona dan Neymar adalah alasan pertama saya membongkar file jersey, menghapus logo, lalu menaruhnya kembali dengan susunan saya sendiri.",
  ],
  ticks: ["Barcelona", "Futsal", "Jersey culture", "Tipografi kostum"],
};

export const works: Work[] = [
  {
    slug: "cut",
    title: "Cut",
    kind: "Kaos putih, lettering gotik",
    note: "Huruf gotik merah dipotong oleh potret petinju muda. Satu warna, dua masa.",
    image: "/img/01-cut.webp",
    ratio: "square",
  },
  {
    slug: "jogo-bonito",
    title: "The Last Jogo Bonito",
    kind: "Kaos, cetak punggung",
    note: "Potret Neymar dipotong mengikuti angka 11, dengan tanda tangan dan teks sarif di bawahnya.",
    image: "/img/06-jogo.webp",
    ratio: "portrait",
  },
  {
    slug: "sga",
    title: "SGA",
    kind: "Kaos gelap, tipografi krom",
    note: "Tiga huruf krom merah dengan potongan pemain keluar dari huruf.",
    image: "/img/03-sga.webp",
    ratio: "square",
  },
  {
    slug: "broski",
    title: "Bro Ski Pia Nic",
    kind: "Kaos putih, grid tipografi",
    note: "Grid huruf tebal dengan potongan bayi di tengah, dibaca sebagai satu kalimat.",
    image: "/img/02-broski.webp",
    ratio: "square",
  },
  {
    slug: "the-smith",
    title: "The Smith",
    kind: "Kaos putih, ilustrasi tangan",
    note: "Bus tingkat dan bangunan digambar tangan, lalu dijatuhkan ke kaos putih.",
    image: "/img/04-smith.webp",
    ratio: "square",
  },
];

export const brand = {
  label: "Brand berjalan",
  heading: "can't",
  body: "Brand yang sedang saya bangun. Masih kecil, masih belajar, tapi sudah dipakai orang dan difoto di jalan.",
  shots: [
    { src: "/img/look-01.webp", alt: "Empat orang memakai seri can't di pinggir jalan" },
    { src: "/img/look-02.webp", alt: "Lengan panjang can't dipakai di jalan malam" },
    { src: "/img/look-04.webp", alt: "Kaos can't dengan celana bergaris di trotoar" },
    { src: "/img/look-05.webp", alt: "Lengan panjang can't dipakai berjalan di siang hari" },
    { src: "/img/09-heart-after.webp", alt: "Cetak punggung Heart After dipakai di jalan" },
    { src: "/img/08-trappelss.webp", alt: "Merchandise TRAPPELSS dengan karet pinggang merah" },
  ] satisfies Shot[],
  illustration: {
    src: "/img/illustration.webp",
    alt: "Mockup jersey TRAP PELSS dipasang pada potongan gambar anime",
    caption: "Mockup jersey TRAP PELSS di atas potongan gambar anime",
  },
};

export const cv = {
  label: "Rekrutmen magang",
  heading: "Sedang mencari anak magang desain?",
  body: "Saya terbuka untuk magang di studio desain, konveksi, atau brand apparel. CV satu halaman berisi sekolah, alat yang saya pakai, dan ringkasan karya.",
  unavailableNote:
    "CV sedang disiapkan. Sementara itu, minta lewat DM Instagram.",
};

export const contact = {
  label: "Kontak",
  heading: "Pesan desain atau ajak magang",
  body: "Jalur tercepat lewat DM Instagram. Untuk urusan magang, sebutkan nama sekolah atau studio dan posisi yang dibuka.",
  channels: [
    { k: "Komisi desain", v: site.instagramCommission.handle, href: site.instagramCommission.url },
  ],
};

export const footer = {
  name: site.name,
  note: "Dibuat sendiri. Next.js, Vercel.",
};
