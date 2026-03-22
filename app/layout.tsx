import type { Metadata } from "next";
import { Anton, Barlow, Bebas_Neue } from "next/font/google";
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

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  title: "Pardus Games 2026",
  description:
    "Competição em trio organizada pelo Box Pardus. 23 e 24 de maio de 2026 no SESC Mossoró/RN.",
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
