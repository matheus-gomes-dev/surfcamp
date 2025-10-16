export const openWhatsAppBooking = (lang: string) => {
  const phoneNumber = '5584999114283'; // +55 84 99911-4283 without special characters
  const message = lang === 'pt' 
    ? 'Olá, gostaria de reservar minha vaga para o surfcamp!' 
    : 'Hello, I would like to book my spot for the surfcamp!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};