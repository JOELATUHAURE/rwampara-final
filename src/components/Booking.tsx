import React, { useState } from 'react';
import { Calendar, Users, Phone, Mail, User } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: 'standard',
    checkIn: '',
    checkOut: '',
    guests: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll add the booking logic later
    const whatsappMessage = encodeURIComponent(
      `Hi, I would like to book a room at RWAMPARA SUITES:\n\n` +
      `Name: ${formData.name}\n` +
      `Room Type: ${formData.roomType}\n` +
      `Check-in: ${formData.checkIn}\n` +
      `Check-out: ${formData.checkOut}\n` +
      `Guests: ${formData.guests}`
    );
    window.open(`https://wa.me/256780844955?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 bg-gray-50" id="booking">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Book Your Stay</h2>
          <p className="text-lg text-gray-600">
            Reserve your room with ease through our online booking system.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Check-in Date
                  </span>
                </label>
                <input
                  type="date"
                  name="checkIn"
                  required
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Check-out Date
                  </span>
                </label>
                <input
                  type="date"
                  name="checkOut"
                  required
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Number of Guests
                  </span>
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
              >
                Book via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;