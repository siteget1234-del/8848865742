import React from 'react';
import { Card, CardContent } from './ui/card';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { clinicData } from '../mock';

const Schedule = () => {
  return (
    <section id="schedule" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Consultation Schedule
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600">
            Plan your visit according to our consultation hours
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {clinicData.schedule.map((day, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 ${
                  day.available
                    ? 'border-green-200 bg-green-50 hover:border-green-300 hover:shadow-lg'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          day.available ? 'bg-green-100' : 'bg-gray-200'
                        }`}
                      >
                        <Clock
                          className={`h-6 w-6 ${
                            day.available ? 'text-green-600' : 'text-gray-500'
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{day.day}</h3>
                        <p
                          className={`text-sm font-medium ${
                            day.available ? 'text-green-600' : 'text-gray-500'
                          }`}
                        >
                          {day.time}
                        </p>
                      </div>
                    </div>
                    <div>
                      {day.available ? (
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="h-6 w-6" />
                          <span className="text-sm font-semibold hidden sm:inline">Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-400">
                          <XCircle className="h-6 w-6" />
                          <span className="text-sm font-semibold hidden sm:inline">Closed</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note Card */}
          <Card className="mt-8 bg-blue-50 border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Appointment Note</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Please call or WhatsApp to book your appointment in advance. Walk-in consultations 
                    may experience longer waiting times. We recommend arriving 10 minutes before your 
                    scheduled appointment time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
