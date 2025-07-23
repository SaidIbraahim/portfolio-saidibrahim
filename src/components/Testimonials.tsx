import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, User } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../components/ui/button';

// Fallback default image in case Unsplash images fail to load
const DEFAULT_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23cbd5e0' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";

const testimonials = [
  {
    quote: "Said's ability to transform complex requirements into intuitive user experiences is remarkable. He consistently delivered beyond our expectations and brought innovative solutions to our technical challenges.",
    author: "Sarah Chen",
    role: "CTO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    company: "TechVision Inc.",
    project: "Enterprise Dashboard Redesign",
    result: "40% increase in user engagement"
  },
  {
    quote: "Working with Said was a game-changer for our startup. His technical expertise and design-thinking approach helped us launch a product our users love. His AI integration skills gave us a competitive edge.",
    author: "Michael Rodriguez",
    role: "Founder, InnovateLab",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    company: "InnovateLab",
    project: "AI-Powered Analytics Platform",
    result: "300% faster data processing"
  },
  {
    quote: "The attention to detail and commitment to quality in both development and design sets Said apart. A true professional who delivers excellence and understands the balance between aesthetics and functionality.",
    author: "Emily Thompson",
    role: "Product Manager, DesignFlow",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    company: "DesignFlow",
    project: "Design System Implementation",
    result: "60% faster development cycles"
  },
  {
    quote: "Said's work on our web application exceeded all expectations. His ability to understand complex business requirements and translate them into beautiful, functional interfaces is extraordinary.",
    author: "David Wilson",
    role: "CEO, TechSolutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    company: "TechSolutions",
    project: "E-commerce Platform Overhaul",
    result: "85% increase in conversions"
  },
  {
    quote: "Exceptional talent in both technical implementation and user experience design. Said delivered a solution that not only met our requirements but elevated our entire digital presence.",
    author: "Lisa Chang",
    role: "Director of Engineering, DataCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5,
    company: "DataCorp",
    project: "Real-time Dashboard System",
    result: "50% reduction in response time"
  }
];

const AUTO_CAROUSEL_INTERVAL = 6000; // 6 seconds

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  // Use window.setInterval for browser compatibility
  const autoCarouselRef = useRef<number | null>(null);

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotate carousel
  useEffect(() => {
    if (autoCarouselRef.current) window.clearInterval(autoCarouselRef.current);
    autoCarouselRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, AUTO_CAROUSEL_INTERVAL);
    return () => {
      if (autoCarouselRef.current) window.clearInterval(autoCarouselRef.current);
    };
  }, [testimonials.length]);

  return (
    <section 
      id="testimonials"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 1000px 600px at 50% 0%, rgba(90, 89, 242, 0.04), transparent),
          radial-gradient(ellipse 800px 800px at 0% 100%, rgba(113, 120, 255, 0.03), transparent),
          linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #ffffff 100%)
        `
      }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-10 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(90, 89, 242, 0.06), rgba(113, 120, 255, 0.04))' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(113, 120, 255, 0.04), rgba(90, 89, 242, 0.06))' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-block mb-6">
            <span className="bg-gradient-premium-soft text-purple-primary text-sm font-semibold px-6 py-2 rounded-full border border-purple-primary/20">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-dark leading-tight">
            What Clients Say About My{' '}
            <span className="gradient-text-premium">Work</span>
          </h2>
          <p className="text-xl text-dark/80 leading-relaxed">
            Real feedback from satisfied clients who've experienced the impact of exceptional 
            development and design collaboration.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-luxury p-12 border border-purple-primary/10 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 p-4 bg-gradient-premium rounded-2xl shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-8 mt-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 mr-1" />
            ))}
          </div>
          
                {/* Testimonial Content */}
                <div className="text-center mb-12">
                  <p className="text-2xl md:text-3xl text-dark/90 leading-relaxed font-medium mb-8 max-w-4xl mx-auto">
              "{testimonials[currentIndex].quote}"
            </p>
                  
                  {/* Project Details */}
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <div className="bg-gradient-premium-soft px-4 py-2 rounded-xl border border-purple-primary/20">
                      <span className="text-sm font-semibold text-purple-primary">Project: </span>
                      <span className="text-sm text-dark">{testimonials[currentIndex].project}</span>
                    </div>
                    <div className="bg-gradient-premium-soft px-4 py-2 rounded-xl border border-purple-primary/20">
                      <span className="text-sm font-semibold text-accent">Result: </span>
                      <span className="text-sm text-dark font-semibold">{testimonials[currentIndex].result}</span>
                    </div>
                  </div>
          </div>
          
                {/* Author Info */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="relative mr-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-primary/20 shadow-lg">
              {imageErrors[currentIndex] ? (
                          <div className="w-full h-full bg-gradient-premium-soft flex items-center justify-center">
                            <User className="w-10 h-10 text-purple-primary" />
                          </div>
              ) : (
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(currentIndex)}
                  loading="lazy"
                />
              )}
            </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-premium rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-4 h-4 text-white" />
            </div>
          </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-dark mb-1">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-purple-primary font-semibold mb-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-dark/60 text-sm">
                        {testimonials[currentIndex].company}
                  </p>
                </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-premium-soft opacity-5 pointer-events-none" />
                </div>
              </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="w-14 h-14 rounded-full border-2 border-purple-primary/30 text-purple-primary hover:bg-gradient-premium hover:text-white hover:border-transparent shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-premium shadow-md"
                    : "w-3 h-3 bg-purple-primary/30 hover:bg-purple-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline" 
            size="icon"
            onClick={nextTestimonial}
            className="w-14 h-14 rounded-full border-2 border-purple-primary/30 text-purple-primary hover:bg-gradient-premium hover:text-white hover:border-transparent shadow-lg transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
      </div>
      
        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
            key={index}
              onClick={() => goToTestimonial(index)}
              className={`group p-6 rounded-2xl transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-premium text-white shadow-luxury"
                  : "bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-purple-primary/10 hover:border-purple-primary/30"
              }`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full overflow-hidden border-2 mb-4 ${
                  index === currentIndex ? "border-white/30" : "border-purple-primary/20"
                }`}>
                  {imageErrors[index] ? (
                    <div className="w-full h-full bg-gradient-premium-soft flex items-center justify-center">
                      <User className="w-8 h-8 text-purple-primary" />
                    </div>
                  ) : (
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(index)}
                      loading="lazy"
                    />
                  )}
      </div>
                <h4 className={`font-bold text-sm mb-1 ${
                  index === currentIndex ? "text-white" : "text-dark"
                }`}>
                  {testimonial.author}
                </h4>
                <p className={`text-xs ${
                  index === currentIndex ? "text-white/80" : "text-dark/60"
                }`}>
                  {testimonial.company}
                </p>
    </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-premium p-12 rounded-3xl shadow-luxury text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Let's create something remarkable together. Experience the same level of 
              excellence and dedication that these clients have praised.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-purple-primary px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;