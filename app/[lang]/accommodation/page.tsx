import ImageCardContent from '@/app/components/ImageCardContent';
import getDictionary from '../../../lib/dictionaries';
import BookButton from '../../components/BookButton';
import Image from 'next/image';
import PhotosAlbum from '@/app/components/PhotosAlbum';

export default async function AccommodationPage({ params }: { params: Promise<{ lang: string }> }) {
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
            backgroundImage: "url('/private-room-large-width-1.jpeg')"
          }}
        />
        
        {/* Centered Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
              {dictionary.accommodationTitle}
            </h1>
            <BookButton dictionary={dictionary} lang={lang} />
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            {dictionary.accommodationContent1}
          </p>
        </div>
      </section>

      {/* Image Card Content Section */}
      <section className="lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-stretch">
          <ImageCardContent 
            imageSrc="/private-room-large-width-1.jpeg"
            imageAlt="Private room with comfortable bed and decor"
            subtitle={dictionary.accommodationsSubtitle}
            title={dictionary.privateRoom}
            content={dictionary.privateRoomContent}
            buttonLabel={dictionary.book}
            dictionary={dictionary}
            lang={lang}
            bookRedirect
          />
          <ImageCardContent 
            imageSrc="/shared-room.jpg"
            imageAlt="Shared room with comfortable beds and decor"
            subtitle={dictionary.accommodationsSubtitle}
            title={dictionary.sharedRoom}
            content={dictionary.sharedRoomContent}
            dictionary={dictionary}
            lang={lang}
            bookRedirect
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {dictionary.accommodationContent2}
          </p>
        </div>
      </section>

      <section>
        <PhotosAlbum
        photos={[
          {
            url: '/surfcamp4.jpeg',
            alt: dictionary.accommodationAlt,
            id: 4,
          },
          {
            url: '/surfcamp1.jpeg',
            alt: dictionary.accommodationAlt,
            id: 1,
          },
          {
            url: '/surfcamp9.jpeg',
            alt: dictionary.accommodationAlt,
            id: 9,
          },
          {
            url: '/surfcamp11.jpeg',
            alt: dictionary.accommodationAlt,
            id: 11,
          },
        ]}
        title="Surfcamp"
        />
      </section>
    </div>
  );
}