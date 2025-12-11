import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { clinicData } from '../mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Clinic Name */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-900">
              {clinicData.name.english}
            </h1>
            <p className="text-xs sm:text-sm text-blue-700">{clinicData.name.malayalam}</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-8">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              onClick={() => window.open(`tel:${clinicData.contact.phone}`, '_self')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('schedule')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white w-full transition-colors"
                onClick={() => window.open(`tel:${clinicData.contact.phone}`, '_self')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
