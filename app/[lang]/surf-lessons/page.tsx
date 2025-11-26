import getDictionary from '../../../lib/dictionaries';
import BookButton from '../../components/BookButton';
import PhotosAlbum from '@/app/components/PhotosAlbum';

export default async function SurfcampPage({ params }: { params: Promise<{ lang: string }> }) {
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
            backgroundImage: "url('/instrutores-alunos.jpg')"
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
              {dictionary.surfLessonsPageTitle}
            </h1>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            {dictionary.surfLessonsPageContent1}
          </p>
          <BookButton dictionary={dictionary} lang={lang} />
        </div>
      </section>

      <section>
        <PhotosAlbum
          photos={[
            {
              url: '/beginner-surfer.jpg',
              alt: 'Beginner Surfer',
              id: 1,
            },
            {
              url: '/beginner-surfer-2.jpg',
              alt: 'Beginner Surfer',
              id: 2,
            },
            {
              url: '/beginner-surfer-3.jpg',
              alt: 'Beginner Surfer',
              id: 3,
            },
            {
              url: '/beginner-surfer-4.webp',
              alt: 'Beginner Surfer',
              id: 4,
            },
            {
              url: '/beginner-surfer-5.webp',
              alt: 'Beginner Surfer',
              id: 5,
            },
            {
              url: '/beginner-surfer-6.jpg',
              alt: 'Beginner Surfer',
              id: 6,
            }
          ]}
          title="Beginner surfers"
          bottomWave
        />
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            {dictionary.surfLessonsPageContent2}
          </p>
        </div>
      </section>

      <section>
        <PhotosAlbum
          photos={[
            {
              url: '/intermediate-surfer.jpg',
              alt: 'Intermediate Surfer',
              id: 1,
            },
            {
              url: '/barrel-wave.webp',
              alt: 'Advanced surfer on a barrel wave',
              id: 2,
            }
          ]}
          title="Surf lessons"
        />
      </section>
    </div>
  );
}