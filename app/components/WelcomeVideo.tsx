'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { openWhatsAppBooking } from '../../helpers/whatsapp';

interface WelcomeVideoProps {
  dictionary: Record<string, string>;
  lang: string;
}

const WelcomeVideo = ({ dictionary, lang }: WelcomeVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleBookClick = () => openWhatsAppBooking(lang);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays when component mounts
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Video autoplay failed:', error);
        }
      };

      // Try to play immediately
      playVideo();

      // Also try when video is loaded
      video.addEventListener('loadeddata', playVideo);
      
      return () => {
        video.removeEventListener('loadeddata', playVideo);
      };
    }
  }, []);

  return (
    <section className="relative text-center overflow-hidden w-full min-h-[500px] flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
      >
        <source src="/surf-video.mp4" type="video/mp4" />
      </video>
      
      {/* Content overlay */}
      <div className="relative z-10 text-black flex flex-col items-center">
        <Image 
          src="/nfs-logo-removebg.png" 
          alt="Natal Free Surf Logo" 
          width={240}
          height={64}
        />
        <p className="text-lg drop-shadow-md">
          <b>{dictionary.welcomeSubtitle}</b>
        </p>
        <button 
          onClick={handleBookClick}
          className="mt-4 px-6 py-3 bg-green-400 hover:bg-green-500 text-gray-900 font-medium rounded-md transition-colors duration-200 cursor-pointer drop-shadow-md w-32"
        >
          {dictionary.book}
        </button>
      </div>
    </section>
  );
};

export default WelcomeVideo;