import React from 'react';
import { Tag, Users, Calendar, Coffee } from 'lucide-react';

const SpecialOffers = () => {
  const offers = [
    {
      title: 'Weekend Getaway Package',
      description: 'Enjoy a romantic weekend with complimentary breakfast and late checkout.',
      price: 'From $150/night',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['2 Nights Stay', 'Breakfast Included', 'Late Checkout']
    },
    {
      title: 'Business Travel Deal',
      description: 'Perfect for business travelers with added workspace amenities.',
      price: 'From $100/night',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['High-speed Wi-Fi', 'Work Desk', 'Breakfast']
    },
    {
      title: 'Family Holiday Package',
      description: 'Create memorable moments with our family-friendly package.',
      price: 'From $200/night',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['Connecting Rooms', 'Kids Eat Free', 'Family Activities']
    }
  ];

  return (
    <section className="py-20 bg-white" id="offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Special Offers & Packages</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Take advantage of our exclusive deals and packages designed to make your stay even more special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {offer.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="space-y-2">
                  {offer.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <Tag className="w-4 h-4 mr-2 text-indigo-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/book"
                  className="mt-6 block w-full text-center bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Book This Offer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;