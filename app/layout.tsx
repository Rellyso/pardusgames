import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });
const pfDIN = localFont({ src: '../fonts/PFDIN_compressed_bold.otf', variable: '--font-pfdin', });
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: "Pardus Games",
  description: "Save the date: 6 e 7 de Julho. Venha vivenciar uma experiência incrivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${pfDIN.variable} ${anton.variable} font-sans`}>{children}</body>
    </html>
  );
}
