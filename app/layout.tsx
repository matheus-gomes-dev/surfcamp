import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers';
import getDictionary from '@/lib/dictionaries';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const lang = headersList.get('x-locale') || 'en';
  const dict = getDictionary(lang);
  
  return {
    title: dict.metaTitle,
    description: dict.metaDescription,
  };
}

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
