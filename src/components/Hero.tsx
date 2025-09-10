import React from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">1+ Years of Proven Results</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let's Grow Your
              <span className="text-accent-500"> Business </span>
              Together
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Hi, I'm <strong>Devansh Kaushal</strong> – a Digital Marketing & Performance Marketing Expert 
              based in Indore with hands-on experience driving measurable results for 10+ clients 
              across diverse industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#portfolio" className="btn-secondary">
                View My Work
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">10+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">1+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">100%</div>
                <div className="text-sm text-gray-300">ROI Focused</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Performance Marketing</h3>
                    <p className="text-gray-300 text-sm">ROI-driven campaigns</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Digital Strategy</h3>
                    <p className="text-gray-300 text-sm">Comprehensive solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Proven Results</h3>
                    <p className="text-gray-300 text-sm">Measurable growth</p>
                  </div>
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