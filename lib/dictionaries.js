const dictionaries = {
  en: {
    // Navigation
    home: "Home",
    surfcamp: "Surfcamp",
    contact: "Contact",
    
    // Welcome Video
    welcomeSubtitle: "Your surfcamp in Brazil starts here!",
    
    // Home Page Content
    surfingTitle: "Your ultimate surfcamp experience",
    surfingText1: "Experience world-class waves, endless sunshine, and the warm Brazilian culture at our premier surf camp in Natal, Rio Grande do Norte.",
    surfingText2: "Whether you're a beginner catching your first wave or an experienced surfer looking to perfect your skills, our expert instructors and pristine beaches provide the perfect setting for your surfing adventure.",
    
    // Cards
    accommodationsSubtitle: "ACCOMMODATION",
    accommodationsTitle: "Comfortable Stay",
    accommodationsContent: "Relax in our cozy hostel rooms designed for surfers. Clean, comfortable beds and a friendly atmosphere where you can meet fellow adventurers from around the world.",
    
    surfLessonsSubtitle: "SURFCAMP",
    surfLessonsTitle: "Learn to Surf", 
    surfLessonsContent: "Professional surf instruction for all levels. From your first time on a board to advanced technique refinement, our experienced instructors will guide your progression.",
    
    adventuresSubtitle: "ADVENTURES",
    adventuresTitle: "Explore Natal",
    adventuresContent: "Discover the beauty of Rio Grande do Norte beyond the waves. From stunning beaches to local culture, adventure awaits at every corner of this tropical paradise.",
    
    // Buttons
    readMore: "Read More",
    bookNow: "Book Now",
    book: "Book",
    
    // Footer
    usefulLinks: "Useful Links",
    accommodation: "Accommodation",
    followUs: "Follow Us",
    
    // Explore Page
    exploreTitle: "Explore the region",
    exploreContent: "Discover the best surf spots and surf trips in Rio Grande do Norte. Learn why the Northeast of Brazil is one of the top surfing destinations in the country, with consistent waves, warm water, and perfect weather year-round.",
    
    // Accommodation Page
    accommodationTitle: "Comfortable Stay",
    accommodationContent: "Experience the perfect blend of comfort and adventure at our surf hostel. Our clean, cozy rooms are designed with surfers in mind, featuring comfortable beds, secure storage for your gear, and a friendly atmosphere where you can connect with fellow surf enthusiasts from around the world. Wake up to ocean views and fall asleep to the sound of waves.",
    
    // Surfcamp Page
    surfcampTitle: "Surfcamp",
    surfcampContent: "Join our professional surf camp and transform your surfing skills under the guidance of experienced instructors. Whether you're taking your first steps on a surfboard or looking to master advanced maneuvers, our personalized lessons and ideal wave conditions provide the perfect learning environment. Experience the thrill of catching waves while building confidence and technique in the warm waters of Brazil's northeast coast.",

    // Time
    oneMonthAgo: "1 month ago",
    twoMonthsAgo: "2 months ago",
    twoWeeksAgo: "2 weeks ago",
    oneYearAgo: "1 year ago",
    twoYearsAgo: "2 years ago",
    threeYearsAgo: "3 year ago"
  },
  pt: {
    // Navigation
    home: "Início",
    surfcamp: "Surfcamp",
    contact: "Contato",
    
    // Welcome Video
    welcomeSubtitle: "Seu surfcamp no nordeste começa aqui!",
    
    // Home Page Content
    surfingTitle: "Sua experiência completa de surfcamp",
    surfingText1: "Experimente ondas de classe mundial, sol infinito e a calorosa cultura brasileira em nosso camp de surf premier em Natal, Rio Grande do Norte.",
    surfingText2: "Seja você um iniciante pegando sua primeira onda ou um surfista experiente procurando aperfeiçoar suas habilidades, nossos instrutores especializados e praias pristinas proporcionam o cenário perfeito para sua aventura de surf.",
    
    // Cards
    accommodationsSubtitle: "HOSPEDAGEM",
    accommodationsTitle: "Estadia Confortável",
    accommodationsContent: "Relaxe em nossos quartos aconchegantes de hostel projetados para surfistas. Camas limpas e confortáveis e uma atmosfera amigável onde você pode conhecer outros aventureiros do mundo todo.",
    
    surfLessonsSubtitle: "SURFCAMP",
    surfLessonsTitle: "Aprenda a Surfar",
    surfLessonsContent: "Instrução profissional de surf para todos os níveis. Da sua primeira vez na prancha ao refinamento de técnicas avançadas, nossos instrutores experientes guiarão sua progressão.",
    
    adventuresSubtitle: "AVENTURAS", 
    adventuresTitle: "Explore Natal",
    adventuresContent: "Descubra a beleza do Rio Grande do Norte além das ondas. De praias deslumbrantes à cultura local, a aventura te espera em cada canto deste paraíso tropical.",
    
    // Buttons
    readMore: "Leia Mais",
    bookNow: "Reserve Agora",
    book: "Reservar",
    
    // Footer
    usefulLinks: "Links Úteis",
    accommodation: "Hospedagem",
    followUs: "Nos Siga",
    
    // Explore Page
    exploreTitle: "Explore a região",
    exploreContent: "Descubra os melhores picos de surf e surf trips no Rio Grande do Norte. Saiba por que o Nordeste do Brasil é um dos principais destinos de surf do país, com ondas consistentes, água quente e clima perfeito o ano todo.",
    
    // Accommodation Page
    accommodationTitle: "Estadia Confortável",
    accommodationContent: "Experimente a combinação perfeita de conforto e aventura em nosso hostel de surf. Nossos quartos limpos e aconchegantes são projetados pensando nos surfistas, com camas confortáveis, armazenamento seguro para seu equipamento e uma atmosfera amigável onde você pode se conectar com outros entusiastas do surf de todo o mundo. Acorde com vista para o oceano e adormeça ao som das ondas.",
    
    // Surfcamp Page
    surfcampTitle: "Surfcamp",
    surfcampContent: "Junte-se ao nosso surf camp profissional e transforme suas habilidades de surf sob a orientação de instrutores experientes. Seja dando seus primeiros passos em uma prancha de surf ou procurando dominar manobras avançadas, nossas aulas personalizadas e condições ideais de ondas proporcionam o ambiente de aprendizado perfeito. Experimente a emoção de pegar ondas enquanto desenvolve confiança e técnica nas águas mornas da costa nordeste do Brasil.",

    // Time
    oneMonthAgo: "1 mês atrás",
    twoMonthsAgo: "2 meses atrás",
    twoWeeksAgo: "2 semanas atrás",
    oneYearAgo: "1 ano atrás",
    twoYearsAgo: "2 anos atrás",
    threeYearsAgo: "3 anos atrás"
  }
}

export default function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en
}