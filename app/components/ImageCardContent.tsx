import { Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import BookButton from './BookButton';

interface ImageCardContentProps {
  imageSrc: string;
  imageAlt: string;
  subtitle?: string;
  title: string;
  content: string;
  buttonLabel?: string;
  dictionary: Record<string, string>;
  lang: string;
  link?: string;
  bookRedirect?: boolean
}

const ImageCardContent = ({ 
  imageSrc, 
  imageAlt, 
  subtitle, 
  title, 
  content, 
  buttonLabel = '', 
  link,
  bookRedirect,
  dictionary,
  lang,
}: ImageCardContentProps) => {
  const renderButton = () => {
    if (!link && !bookRedirect) return null;
    if (bookRedirect) {
      return (
        <BookButton dictionary={dictionary} lang={lang} />
      );
    } else {
      return (
        <div className="pt-6 flex-shrink-0">
          <Link
            href={link || '#'}
            className="inline-flex items-center px-6 py-3 bg-green-400 hover:bg-green-500 text-gray-900 font-medium rounded-md transition-colors duration-200 cursor-pointer"
          >
            {buttonLabel}
          </Link>
        </div>
      );
    }
  }
  return (
    <Paper elevation={1} className="shadow-lg overflow-hidden w-[90vw] lg:w-[30vw] mx-auto min-h-[600px] flex flex-col">
      <section className="bg-white h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full flex-shrink-0">
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Content - flex-grow to fill remaining space */}
        <div className="px-6 py-8 sm:px-8 flex flex-col flex-grow">
          <div className="max-w-4xl mx-auto text-center flex flex-col h-full">
            {/* Text content that grows */}
            <div className="flex-grow">
              <div className="mb-6">
                {subtitle && <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  {subtitle}
                </p>}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {title}
                </h2>
              </div>

              <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {content}
              </p>
            </div>

            {/* Button fixed at bottom */}
            {renderButton()}
          </div>
        </div>
      </section>
    </Paper>
  );
};

export default ImageCardContent;