import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { clinicData } from '../mock';

const Contact = () => {
  const handleCallClick = () => {
    window.open(`tel:${clinicData.contact.phone}`, '_self');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${clinicData.contact.whatsapp}`, '_blank');
  };

  const handleDirectionsClick = () => {
    // Using the actual Google Maps link provided by the user
    window.open('https://maps.app.goo.gl/Qh1GEHHAMg1C1mX18', '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600">
            Get in touch to book your appointment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-blue-600 font-semibold mb-3">{clinicData.contact.phone}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                        onClick={handleCallClick}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-1">
                      {clinicData.contact.address.line1}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-1">
                      {clinicData.contact.address.line2}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-1">
                      {clinicData.contact.address.city}, {clinicData.contact.address.state}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {clinicData.contact.address.pincode}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
                      onClick={handleDirectionsClick}
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Embed */}
          <div className="space-y-6">
            <Card className="border-2 border-gray-200 shadow-lg overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.534429825384!2d76.99999999999999!3d8.321599999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTknMTcuOCJOIDc2wrA1OSc1OS45IkU!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Respiratory Medical Clinic Location"
                  className="h-full min-h-[400px]"
                ></iframe>
                <div className="p-4 bg-white border-t border-gray-200">
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                    onClick={handleDirectionsClick}
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Open in Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-none shadow-xl">
            <CardContent className="p-8">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-3">Ready to Book Your Appointment?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Contact us today to schedule your consultation with Dr. Smitha Nair. 
                  We're here to help you breathe easier.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 transition-colors"
                    onClick={handleCallClick}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {clinicData.contact.phone}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 transition-colors"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
