import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Syne } from "next/font/google";
import "../globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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
  title: "Maël Bouvier Sobrino | Versatile Developer",
  description: "Portfolio de Maël Bouvier Sobrino, développeur fullstack / DevOps créatif et polyvalent. Projets, expériences et contact.",
  openGraph: {
    title: "Maël Bouvier Sobrino | Versatile Developer",
    description: "Portfolio de Maël Bouvier Sobrino, développeur fullstack / DevOps créatif et polyvalent. Projets, expériences et contact.",
    url: "https://maelbouviersobrino.com",
    siteName: "Maël Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "Maël - Versatile Developer Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maël Bouvier Sobrino | Versatile Developer",
    description: "Portfolio de Maël Bouvier Sobrino, développeur fullstack / DevOps créatif et polyvalent.",
    images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"],
  },
};
export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${inter.variable} ${syne.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <Script id="theme-initializer" strategy="afterInteractive">
          {`
            try {
              if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                document.documentElement.classList.add('dark');
              }
            } catch (_) {}
          `}
        </Script>
      </head>
      <body className="font-sans bg-background text-foreground overflow-x-hidden antialiased md:cursor-none">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <CustomCursor />
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
