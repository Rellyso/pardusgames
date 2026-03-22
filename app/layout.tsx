import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AppProvider } from "@/providers/app-provider";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-barlow",
});
const pfDIN = localFont({
  src: "./fonts/PFDIN_compressed_bold.otf",
  variable: "--font-pfdin",
});
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "PARDUS GAMES",
  description: "Venha viver uma experiência Pardus! Dias 22 e 23 de Maio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <AppProvider>
        <body
          className={`${bebas.variable} ${barlow.variable} ${pfDIN.variable} ${anton.variable} font-sans`}
        >
          <div className="min-h-full w-full bg-black flex flex-col justify-center scroll-smooth">
            <Header />
            <main className="w-full flex-1 bg-black flex flex-col self-center">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </AppProvider>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
    </html>
  );
}
