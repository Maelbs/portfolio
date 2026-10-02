import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maël Bouvier Sobrino | Creative Developer",
  description: "Portfolio of Maël Bouvier Sobrino, a versatile computer science student and developer based in Annecy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
