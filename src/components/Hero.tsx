import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to RWAMPARA SUITES
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            Your Comfort in Mbarara - Relax and Enjoy Top-Notch Accommodation, Dining, and More!
          </p>
          <a
            href="/book"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;