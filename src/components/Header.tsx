import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Rooms & Rates', href: 'rooms' },
    { name: 'Restaurant', href: 'restaurant' },
    { name: 'Book Now', href: 'book' },
    { name: 'About Us', href: 'about' }, // Updated for react-scroll
    { name: 'Contact', href: 'contact' },
    { name: 'Gallery', href: 'gallery' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">RWAMPARA SUITES</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <a
              href="tel:+256780844955"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>+256 780 844 955</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
