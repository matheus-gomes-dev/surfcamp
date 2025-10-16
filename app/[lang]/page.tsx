import WelcomeVideo from '../components/WelcomeVideo';
import ImageCardContent from '../components/ImageCardContent';
import WaveAnimation from '../components/WaveAnimation';
import getDictionary from '../../lib/dictionaries';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <div className="w-full">
      <WelcomeVideo dictionary={dictionary} lang={lang} />
      
      {/* Surfing Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {dictionary.surfingTitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            {dictionary.surfingText1}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {dictionary.surfingText2}
          </p>
          
          {/* Animated Wave SVG */}
          <div className="mt-12">
            <WaveAnimation />
          </div>
        </div>
      </section>
      
      {/* Image Card Content Section */}
      <section className="py-16 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-stretch">
          <ImageCardContent 
            imageSrc="/hostel-room.jpg"
            imageAlt="Beautiful hostel room with bunk beds"
            subtitle={dictionary.accommodationsSubtitle}
            title={dictionary.accommodationsTitle}
            content={dictionary.accommodationsContent}
            buttonLabel={dictionary.readMore}
            link={`/${lang}/accommodation`}
          />
          
          <ImageCardContent 
            imageSrc="/surf-instructor.jpg"
            imageAlt="Surf instructor teaching on the beach"
            subtitle={dictionary.surfLessonsSubtitle}
            title={dictionary.surfLessonsTitle}
            content={dictionary.surfLessonsContent}
            buttonLabel={dictionary.readMore}
            link={`/${lang}/surfcamp`}
          />
          
          <ImageCardContent 
            imageSrc="/pipa.jpg"
            imageAlt="Exploring local attractions and culture"
            subtitle={dictionary.adventuresSubtitle}
            title={dictionary.adventuresTitle}
            content={dictionary.adventuresContent}
            buttonLabel={dictionary.readMore}
            link={`/${lang}/explore`}
          />
        </div>
      </section>
    </div>
  );
}