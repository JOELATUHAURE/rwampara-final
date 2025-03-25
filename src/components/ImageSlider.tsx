import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      caption: 'Luxurious Suite'
    },
    {
      url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      caption: 'Restaurant View'
    },
    {
      url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      caption: 'Comfortable Rooms'
    },
    {
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      caption: 'Modern Amenities'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Photo Gallery</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Browse through our gallery and discover the beauty of RWAMPARA SUITES.
          </p>
        </div>

        <div className="relative h-[600px] group">
          {/* Main Image */}
          <div
            style={{ backgroundImage: `url(${images[currentIndex].url})` }}
            className="w-full h-full rounded-xl bg-center bg-cover duration-500 shadow-xl"
          >
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-xl">
              <p className="text-xl text-center">{images[currentIndex].caption}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-4 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-4 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots/Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;