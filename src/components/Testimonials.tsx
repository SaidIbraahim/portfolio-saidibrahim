import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Said's ability to transform complex requirements into intuitive user experiences is remarkable. He consistently delivered beyond our expectations.",
    author: "Sarah Chen",
    role: "CTO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with Said was a game-changer for our startup. His technical expertise and design-thinking approach helped us launch a product our users love.",
    author: "Michael Rodriguez",
    role: "Founder, InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The attention to detail and commitment to quality in both development and design sets Said apart. A true professional who delivers excellence.",
    author: "Emily Thompson",
    role: "Product Manager, DesignFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg relative"
              >
                <Quote className="absolute top-4 right-4 text-primary/20 w-8 h-8" />
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;