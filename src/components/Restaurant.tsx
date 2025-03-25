import React from 'react';

const Restaurant = () => {
  const dishes = [
    {
      name: 'Local Specialties',
      image: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Experience authentic Ugandan cuisine prepared by our expert chefs.'
    },
    {
      name: 'International Cuisine',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Enjoy a variety of international dishes crafted with care.'
    },
    {
      name: 'Fresh Beverages',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Refresh yourself with our selection of drinks and cocktails.'
    }
  ];

  return (
    <section className="py-20 bg-white" id="restaurant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Restaurant</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Savor local and international dishes in a cozy atmosphere at our in-house restaurant. 
            Enjoy great food and beverages in the heart of RWAMPARA SUITES.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{dish.name}</h3>
                <p className="text-white/90">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Opening Hours</h3>
          <div className="inline-block text-left">
            <div className="space-y-2 text-gray-600">
              <p>Breakfast: 6:30 AM - 10:30 AM</p>
              <p>Lunch: 12:00 PM - 3:00 PM</p>
              <p>Dinner: 6:00 PM - 10:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;