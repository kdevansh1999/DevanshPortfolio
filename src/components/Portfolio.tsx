import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Growth Campaign',
      category: 'Google Ads + Facebook Ads',
      description: 'Increased online sales by 250% for a fashion retailer through strategic multi-platform advertising.',
      results: [
        { metric: 'ROAS', value: '4.2x', icon: DollarSign },
        { metric: 'Traffic Increase', value: '180%', icon: TrendingUp },
        { metric: 'Conversions', value: '+250%', icon: Users }
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Google Ads', 'Facebook Ads', 'E-commerce']
    },
    {
      title: 'Local Business SEO Success',
      category: 'SEO + Local Marketing',
      description: 'Helped a local restaurant chain dominate local search results and increase foot traffic.',
      results: [
        { metric: 'Local Rankings', value: '#1-3', icon: TrendingUp },
        { metric: 'Organic Traffic', value: '+320%', icon: Users },
        { metric: 'Store Visits', value: '+150%', icon: DollarSign }
      ],
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Local Marketing', 'Restaurant']
    },
    {
      title: 'SaaS Lead Generation',
      category: 'Performance Marketing',
      description: 'Generated high-quality leads for a B2B SaaS company through targeted LinkedIn and Google campaigns.',
      results: [
        { metric: 'Cost per Lead', value: '-60%', icon: DollarSign },
        { metric: 'Lead Quality', value: '+85%', icon: Users },
        { metric: 'Conversion Rate', value: '12%', icon: TrendingUp }
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Lead Generation', 'B2B', 'SaaS']
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Proven Results for
            <span className="text-primary-600"> Real Businesses</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some examples of how I've helped businesses across different industries 
            achieve their digital marketing goals and drive measurable growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-3 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <result.icon className="w-4 h-4 text-primary-600" />
                        <span className="text-sm text-gray-600">{result.metric}</span>
                      </div>
                      <span className="font-bold text-primary-600">{result.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to see similar results for your business?
          </p>
          <a href="#contact" className="btn-primary">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;