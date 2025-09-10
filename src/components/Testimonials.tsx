import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      position: 'CEO, Fashion Forward',
      company: 'E-commerce',
      content: 'Devansh transformed our online presence completely. Our sales increased by 250% within 6 months of working with him. His strategic approach to Google Ads and Facebook marketing is exceptional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Patel',
      position: 'Marketing Director',
      company: 'Tech Solutions',
      content: 'Working with Devansh was a game-changer for our B2B lead generation. He reduced our cost per lead by 60% while significantly improving lead quality. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Amit Kumar',
      position: 'Owner',
      company: 'Local Restaurant Chain',
      content: 'Our local SEO rankings improved dramatically after Devansh optimized our online presence. We now rank #1 for most local searches and have seen a 150% increase in foot traffic.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What My Clients
            <span className="text-primary-600"> Say About Me</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what business owners and marketing directors 
            have to say about working with me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover relative">
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-primary-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join my list of satisfied clients?
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;