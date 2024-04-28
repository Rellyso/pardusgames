import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });
const pfDIN = localFont({ src: '../fonts/PFDIN_compressed_bold.otf', variable: '--font-pfdin', });
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: "Pardus Games - Box Pardus",
  description: "Venha viver uma experiência Pardus! Dias 6 e 7 de Julho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${pfDIN.variable} ${anton.variable} font-sans`}
      >
        <div className="min-h-full w-full flex flex-col bg-slate-50">
          <Header />
          <main className="flex-1 bg-black">
            {children}
          </main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
    </html>
  );
}
