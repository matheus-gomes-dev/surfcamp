'use client';

import { openWhatsAppBooking } from '../../helpers/whatsapp';

interface BookButtonProps {
  dictionary: Record<string, string>;
  lang: string;
}

const BookButton = ({ dictionary, lang }: BookButtonProps) => {
  const handleBookClick = () => openWhatsAppBooking(lang);

  return (
    <button 
      onClick={handleBookClick}
      className="mt-6 px-8 py-3 bg-green-400 hover:bg-green-500 text-gray-900 font-medium rounded-md transition-colors duration-200 cursor-pointer text-lg"
    >
      {dictionary.book}
    </button>
  );
};

export default BookButton;