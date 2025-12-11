import React from 'react';
import { Card, CardContent } from './ui/card';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { clinicData } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Dr. Smitha Nair
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Doctor Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {clinicData.doctor.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                {clinicData.doctor.qualification}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {clinicData.doctor.bio}
              </p>
            </div>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {clinicData.doctor.designation}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {clinicData.doctor.workplace}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Credentials */}
          <div className="space-y-4">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Qualifications</h4>
                    <p className="text-sm text-gray-600">
                      Post Graduate in Respiratory Medicine with specialized training in pulmonary diseases and critical care.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                    <p className="text-sm text-gray-600">
                      Specialized in treating asthma, COPD, respiratory infections, sleep disorders, and comprehensive lung health management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Patient Care</h4>
                    <p className="text-sm text-gray-600">
                      Committed to providing personalized, compassionate care with evidence-based treatment approaches for optimal patient outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
