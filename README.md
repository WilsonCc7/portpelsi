# portpelsi

Portofolio Alfatik Persi. Next.js 15 (App Router) + Tailwind v4 + Motion. Deploy ke Vercel.

## Edit isi

Semua teks, link, dan path gambar ada di satu file: `content/site.ts`.
Komponen di `components/` hanya membaca dari situ.

## Ganti foto

Foto mentah taruh di `raw/`, lalu:

```bash
npm run images
```

Script di `scripts/images.mjs` memotong UI Instagram, mengecilkan, dan mengubah ke webp di `public/img/`.
`raw/` tidak masuk git.

## CV

Taruh PDF di `public/cv/alfatik-persi-cv.pdf`, lalu set `available: true` di `site.cv` di `content/site.ts`.
Selama masih `false`, tombol CV mengarah ke bagian kontak, bukan ke file yang tidak ada.

## Jalankan

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Deploy

```bash
npx vercel login
npx vercel --prod
```

Vercel mendeteksi Next.js otomatis. Tidak ada environment variable yang dibutuhkan.
