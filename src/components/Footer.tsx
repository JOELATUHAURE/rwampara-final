import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+256780844955" className="flex items-center hover:text-indigo-400">
                <Phone className="w-5 h-5 mr-2" />
                +256 780 844 955
              </a>
              <a href="mailto:info@rwamparasuites.com" className="flex items-center hover:text-indigo-400">
                <Mail className="w-5 h-5 mr-2" />
                info@rwamparasuites.com
              </a>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <p>Plot 17, High Street, Mbarara, Uganda</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/rooms" className="hover:text-indigo-400">Rooms & Rates</a></li>
              <li><a href="/restaurant" className="hover:text-indigo-400">Restaurant</a></li>
              <li><a href="/book" className="hover:text-indigo-400">Book Now</a></li>
              <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <div>
                  <p className="font-semibold">Check-in Time</p>
                  <p>2:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <div>
                  <p className="font-semibold">Check-out Time</p>
                  <p>Until 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" className="hover:text-indigo-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-indigo-400">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 RWAMPARA SUITES. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a>
              <a href="/terms" className="hover:text-indigo-400">Terms & Conditions</a>
              <a href="/faq" className="hover:text-indigo-400">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;