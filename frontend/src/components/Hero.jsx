import React from 'react';
import { Button } from './ui/button';
import { Phone, MessageCircle, Stethoscope } from 'lucide-react';
import { clinicData } from '../mock';

const Hero = () => {
  const handleCallClick = () => {
    window.open(`tel:${clinicData.contact.phone}`, '_self');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${clinicData.contact.whatsapp}`, '_blank');
  };

  return (
    <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Stethoscope className="h-4 w-4" />
                <span>Expert Respiratory Care</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {clinicData.name.english}
            </h1>
            <p className="text-2xl sm:text-3xl text-blue-700 font-semibold">
              {clinicData.name.malayalam}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              {clinicData.info}
            </p>

            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-700 mb-3">By {clinicData.doctor.name}</p>
              <p className="text-sm text-gray-600">
                {clinicData.doctor.designation} at {clinicData.doctor.workplace}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 transition-colors"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6 transition-colors"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-sm text-gray-600">
                Specialized treatment for all respiratory conditions
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-sm text-gray-600">
                Book appointments via call or WhatsApp
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 sm:col-span-2">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Contact Us</h3>
                  <p className="text-blue-600 font-semibold">{clinicData.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
