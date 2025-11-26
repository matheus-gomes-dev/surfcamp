import style from './PhotosAlbum.module.css';
import Image from 'next/image';

interface Photo {
  url: string;
  alt: string;
  id: number;
}

interface PhotosAlbumProps {
  title: string;
  photos: Photo[];
  bottomWave?: boolean;
}

const PhotosAlbum = ({ photos, title, bottomWave }: PhotosAlbumProps) => (

  <div>
    <svg width="100%" height="120px" viewBox="0 0 1200 80" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M 0 50 
          C 100 30, 100 30, 200 50 
          C 300 70, 300 70, 400 50 
          C 500 30, 500 30, 600 50 
          C 700 70, 700 70, 800 50 
          C 900 30, 900 30, 1000 50 
          C 1100 70, 1100 70, 1200 50
          L 1200 80 
          L 0 80
          Z"
        fill="#e6ffff" 
        stroke="none"   
      />
    </svg>
    <div className='flex justify-center flex-wrap gap-4 bg-[#e6ffff] pt-12 pb-24'>
      {photos.map(({ url, alt, id }) => (
        <Image src={url} alt={alt} width={350} height={350} key={`${title}-photo-${id}`} className='rounded-md' />
      ))}
    </div>
    {bottomWave && <svg width="100%" height="120px" viewBox="0 0 1200 80" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className='rotate-180'>
      <path 
        d="M 0 50 
          C 100 30, 100 30, 200 50 
          C 300 70, 300 70, 400 50 
          C 500 30, 500 30, 600 50 
          C 700 70, 700 70, 800 50 
          C 900 30, 900 30, 1000 50 
          C 1100 70, 1100 70, 1200 50
          L 1200 80 
          L 0 80
          Z"
        fill="#e6ffff" 
        stroke="none"   
      />
    </svg>}
  </div>
);

export default PhotosAlbum