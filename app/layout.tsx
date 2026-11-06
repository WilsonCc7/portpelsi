import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://persi.vercel.app"),
  title: "Alfatik Persi · Desain Apparel",
  description:
    "Siswa SMK Cinta Kasih Tzu Chi yang merancang kaos, hoodie, dan outfit custom. Portofolio desain apparel dan CV untuk magang.",
  openGraph: {
    title: "Alfatik Persi · Desain Apparel",
    description:
      "Tipografi, potongan gambar, dan cetak penuh untuk kaos, hoodie, dan outfit custom.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
