export default function ExplorePage() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pipa-beach.jpg')"
          }}
        />
        
        {/* Centered Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Explore the region
            </h1>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Discover the best surf spots and surf trips in Rio Grande do Norte. Learn why the Northeast of Brazil is one of the top surfing destinations in the country, with consistent waves, warm water, and perfect weather year-round.
          </p>
        </div>
      </section>
    </div>
  );
}