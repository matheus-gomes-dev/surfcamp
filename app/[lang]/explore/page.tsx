import ImageCardContent from '@/app/components/ImageCardContent';
import getDictionary from '../../../lib/dictionaries';
import BookButton from '../../components/BookButton';
import PhotosAlbum from '@/app/components/PhotosAlbum';

export default async function ExplorePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pipa-beach.jpg')"
          }}
        />
        
        {/* Centered Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
              {dictionary.exploreTitle}
            </h1>
            <BookButton dictionary={dictionary} lang={lang} />
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            {dictionary.exploreContent}
          </p>
        </div>
      </section>

      <section className="lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-stretch">
          <ImageCardContent 
            imageSrc="/baia-formosa.jpg"
            imageAlt={dictionary.exploreBaiaFormosaAlt}
            title='Baía Formosa'
            content={dictionary.exploreCard1Content}
            dictionary={dictionary}
            lang={lang}
            bookRedirect
          />
          <ImageCardContent 
            imageSrc="/aerial-photo-of-baia-dos-golfinhos.webp"
            imageAlt={dictionary.explorePipaAlt}
            title={dictionary.exploreCard2Title}
            content={dictionary.exploreCard2Content}
            dictionary={dictionary}
            lang={lang}
            bookRedirect
          />
        </div>
      </section>

      <section>
        <PhotosAlbum
          photos={[
            {
              url: '/surf-trip-1.jpg',
              alt: dictionary.exploreAlbumAlt,
              id: 1,
            },
            {
              url: '/surf-trip-4.webp',
              alt: dictionary.exploreAlbumAlt,
              id: 2,
            },
            {
              url: '/surf-trip-3.jpg',
              alt: dictionary.exploreAlbumAlt,
              id: 3,
            },
            {
              url: '/surf-trip-5.webp',
              alt: dictionary.exploreAlbumAlt,
              id: 4,
            },
          ]}
          title="Surf trips"
        />
      </section>
    </div>
  );
}