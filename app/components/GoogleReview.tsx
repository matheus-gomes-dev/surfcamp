'use client';

import Link from 'next/link';
import Image from 'next/image';

interface GoogleReviewProps {
  name: string;
  timeAgo: string;
  rating: number;
  review: string;
  link: string;
  className?: string;
}

// https://codesandbox.io/p/sandbox/loop-scroll-4w8ek6?file=%2Fsrc%2Findex.tsx%3A17%2C6-17%2C29
const GoogleReview = ({ name, timeAgo, rating, review, link = '/', className = '' }: GoogleReviewProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-yellow-400 text-lg">
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className='w-[70vw] md:w-96 p-4'>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div 
          className={`bg-white rounded-lg shadow-md p-6 relative mb-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${className}`}
        >
          {/* Google Logo */}
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src='/google-icon.png' alt="goole icon" height={30} width={30}></Image>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex mb-4">
            {renderStars(rating)}
          </div>

          {/* Review Text */}
          <div className="mb-10 h-30">
            <p className="text-gray-700 leading-relaxed text-sm overflow-hidden text-ellipsis line-clamp-7">
              {review}
            </p>
          </div>

          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-6 transform translate-y-full">
            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      </Link>
      
      <div className="pl-4">
        <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
        <p className="text-gray-500 text-xs">{timeAgo}</p>
      </div>
    </div>
  );
};

export default GoogleReview;