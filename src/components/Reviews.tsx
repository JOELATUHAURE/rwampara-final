import React from 'react';
import { Star, User } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      date: 'March 2024',
      rating: 5,
      text: 'Exceptional service and beautiful rooms. The restaurant serves delicious local and international cuisine. Will definitely return!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Chen',
      date: 'February 2024',
      rating: 5,
      text: 'Perfect location in Mbarara, friendly staff, and very clean rooms. The breakfast was amazing!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emily Williams',
      date: 'January 2024',
      rating: 4,
      text: 'Great value for money. The rooms are spacious and well-maintained. The staff went above and beyond to make our stay comfortable.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">What Our Guests Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We pride ourselves on excellent service. Here's what our guests have to say about their experience at RWAMPARA SUITES.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;