import React from 'react';
import { Phone, Mail, MapPin, Globe, TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DK</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Devansh Kaushal</h3>
                <p className="text-gray-400 text-sm">Digital Marketing Expert</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Helping businesses grow through strategic digital marketing and performance-driven campaigns. 
              Based in Indore, serving clients across India with measurable results and ROI-focused strategies.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Indore, MP</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>Pan India</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">SEO</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Google Ads</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Facebook Ads</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Digital Strategy</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Social Media Marketing</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <a href="tel:+919753530964" className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 97535 30964</span>
              </a>
              <a href="mailto:kaushaldevansh3@gmail.com" className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>kaushaldevansh3@gmail.com</span>
              </a>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium text-white mb-2">Quick Links</h5>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-primary-400 transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Devansh Kaushal. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <TrendingUp className="w-4 h-4 text-primary-400" />
                <span>Growing businesses since 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;