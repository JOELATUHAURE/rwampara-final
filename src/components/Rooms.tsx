import React from 'react';
import { Bed, Wifi, Car, Coffee } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      type: 'Standard Room',
      price: '$80',
      description: 'Comfortable room with essential amenities perfect for solo travelers or couples.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      amenities: ['Free Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'TV']
    },
    {
      type: 'Deluxe Room',
      price: '$120',
      description: 'Spacious room with premium furnishings and additional living space.',
      image: 'https://images.unsplash.com/photo-1590490359683-321617974740?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini Bar', 'Work Desk', 'Premium TV']
    },
    {
      type: 'Suite',
      price: '$180',
      description: 'Luxury suite with separate living area and premium amenities.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      amenities: ['Free Wi-Fi', 'Air Conditioning', 'Living Room', 'Mini Bar', 'Premium TV', 'City View']
    }
  ];

  const amenityIcons = {
    'Free Wi-Fi': <Wifi className="w-5 h-5" />,
    'Parking': <Car className="w-5 h-5" />,
    'Room Service': <Coffee className="w-5 h-5" />,
    'Bed': <Bed className="w-5 h-5" />
  };

  return (
    <section className="py-20 bg-gray-50" id="rooms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Rooms</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Choose from our selection of well-appointed rooms, each designed to provide maximum comfort during your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{room.type}</h3>
                  <span className="text-xl font-semibold text-indigo-600">{room.price}/night</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="border-t pt-4">
                  <div className="flex flex-wrap gap-3">
                    {room.amenities.map((amenity, i) => (
                      <span key={i} className="inline-flex items-center text-sm text-gray-600">
                        {amenityIcons[amenity] || <Bed className="w-4 h-4 mr-1" />}
                        <span className="ml-1">{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="/book"
                  className="mt-6 block w-full text-center bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;