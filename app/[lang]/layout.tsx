import "../globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import getDictionary from '../../lib/dictionaries';

export const metadata = {
  title: "Natal Free Surf - Brazilian Surf Camp Experience",
  description: "Experience world-class surfing in Natal, Brazil. Professional surf lessons, comfortable accommodation, and authentic Brazilian culture at our premier surf camp.",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export default async function RootLayout({ 
  children, 
  params 
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Header dictionary={dictionary} lang={lang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer dictionary={dictionary} lang={lang} />
    </div>
  );
}