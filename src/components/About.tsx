import React from 'react';

const About = () => {
  const images = [
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            About RWAMPARA SUITES
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Located in the heart of Mbarara, RWAMPARA SUITES offers a comfortable stay with 23 well-furnished rooms, 
            a restaurant, and a lively bar. We provide modern amenities such as free Wi-Fi, self-parking, and room service. 
            Our guesthouse is conveniently located near Mbarara Golf Course, Mbarara Regional Hospital, and Mbarara University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`RWAMPARA SUITES Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;