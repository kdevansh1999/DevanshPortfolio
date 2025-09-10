import React from 'react';
import { MapPin, Globe, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">About Me</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Driving Digital Success with 
              <span className="text-primary-600"> Data-Driven Strategies</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Indore, I specialize in creating and executing digital marketing campaigns 
              that deliver real, measurable results. My approach combines creative strategy with 
              performance analytics to ensure every rupee spent generates maximum ROI.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">1+ years of hands-on digital marketing experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Successfully managed 10+ client campaigns</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Expertise across diverse industries</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>Based in Indore</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="w-5 h-5 text-primary-600" />
                <span>Serving Pan India</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Performance Focus</h3>
                  <p className="text-sm text-gray-600">ROI-driven approach to every campaign</p>
                </div>
                
                <div className="text-center p-4 bg-accent-50 rounded-xl">
                  <div className="w-12 h-12 bg-accent-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Strategic Planning</h3>
                  <p className="text-sm text-gray-600">Data-backed marketing strategies</p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Multi-Platform</h3>
                  <p className="text-sm text-gray-600">Google, Facebook, and beyond</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Local Expertise</h3>
                  <p className="text-sm text-gray-600">Deep understanding of Indian markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;