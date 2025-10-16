import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natal Free Surf - Brazilian Surf Camp Experience",
  description: "Experience world-class surfing in Natal, Brazil. Professional surf lessons, comfortable accommodation, and authentic Brazilian culture at our premier surf camp.",
};

export default async function RootLayout({ 
  children, 
  params 
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
