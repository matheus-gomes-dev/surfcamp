import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natal Free Surf - Brazilian Surf Camp Experience",
  description: "Experience world-class surfing in Natal, Brazil. Professional surf lessons, comfortable accommodation, and authentic Brazilian culture at our premier surf camp.",
};

export default async function RootLayout({ 
  children
}: {
  children: React.ReactNode;
}) {
  // Get the language from middleware header
  const headersList = await headers();
  const lang = headersList.get('x-locale') || 'en';

  return (
    <html lang={lang}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
