import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/header";
import { Inter, Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "DaylGames - Seu portal de games",
  description: "Encontre os melhores games aqui. ",
  keywords: ["games", "jogos", "steam", "epicgames"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-text",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-title",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
