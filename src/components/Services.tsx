import React from 'react';
import { Search, MousePointer, Facebook, BarChart3, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your organic visibility and drive qualified traffic with proven SEO strategies.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building'],
      color: 'bg-green-500'
    },
    {
      icon: MousePointer,
      title: 'Google Ads Management',
      description: 'Maximize your ROI with expertly managed Google Ads campaigns across all networks.',
      features: ['Search Campaigns', 'Display Advertising', 'Shopping Ads', 'YouTube Ads'],
      color: 'bg-blue-500'
    },
    {
      icon: Facebook,
      title: 'Facebook & Instagram Ads',
      description: 'Reach your target audience with compelling social media advertising campaigns.',
      features: ['Audience Targeting', 'Creative Development', 'Campaign Optimization', 'Retargeting'],
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Marketing',
      description: 'Data-driven marketing strategies focused on measurable results and ROI optimization.',
      features: ['Conversion Tracking', 'A/B Testing', 'Analytics Setup', 'ROI Analysis'],
      color: 'bg-orange-500'
    },
    {
      icon: Globe,
      title: 'Digital Strategy Consulting',
      description: 'Comprehensive digital marketing strategies tailored to your business goals.',
      features: ['Market Analysis', 'Competitor Research', 'Strategy Development', 'Implementation'],
      color: 'bg-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across social platforms.',
      features: ['Content Strategy', 'Community Management', 'Influencer Marketing', 'Brand Building'],
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">My Services</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Marketing
            <span className="text-primary-600"> Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From SEO to performance marketing, I offer a full suite of digital marketing services 
            designed to grow your business and maximize your online presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 card-hover">
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-600 text-xs">✓</span>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;