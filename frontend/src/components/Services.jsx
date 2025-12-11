import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wind, Activity, Pill, Moon, TestTube, Thermometer } from 'lucide-react';
import { clinicData } from '../mock';

const Services = () => {
  const serviceIcons = [Wind, Activity, Pill, Moon, TestTube, Thermometer];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive respiratory care services tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <Card
                key={index}
                className="border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Private Medical Consultation
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We offer personalized one-on-one consultations for all respiratory medical illnesses. 
              Our approach focuses on accurate diagnosis, effective treatment, and continuous monitoring 
              to ensure the best possible outcomes for our patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
