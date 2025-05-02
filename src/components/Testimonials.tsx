import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../components/ui/button';

const testimonials = [
  {
    quote: "Said's ability to transform complex requirements into intuitive user experiences is remarkable. He consistently delivered beyond our expectations and brought innovative solutions to our technical challenges.",
    author: "Sarah Chen",
    role: "CTO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    quote: "Working with Said was a game-changer for our startup. His technical expertise and design-thinking approach helped us launch a product our users love. His AI integration skills gave us a competitive edge.",
    author: "Michael Rodriguez",
    role: "Founder, InnovateLab",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    quote: "The attention to detail and commitment to quality in both development and design sets Said apart. A true professional who delivers excellence and understands the balance between aesthetics and functionality.",
    author: "Emily Thompson",
    role: "Product Manager, DesignFlow",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    quote: "Said's work on our web application exceeded all expectations. His ability to understand complex business requirements and translate them into beautiful, functional interfaces is extraordinary.",
    author: "David Wilson",
    role: "CEO, TechSolutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // For mobile view, we'll show a simplified version
  const renderMobileView = () => (
    <div className="md:hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          variants={testimonialVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-md border border-border/40 relative"
        >
          {/* Navigation buttons positioned at the sides but inside the container */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 border-blue-primary/30 shadow-md text-blue-primary hover:bg-blue-primary hover:text-white z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline" 
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 border-blue-primary/30 shadow-md text-blue-primary hover:bg-blue-primary hover:text-white z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="inline-block w-5 h-5 fill-accent text-accent mr-1" />
            ))}
          </div>
          
          <div className="relative mb-8">
            <Quote className="absolute -top-3 -left-2 text-blue-primary/20 w-10 h-10 rotate-180" />
            <p className="text-dark/80 italic pl-6 relative text-lg">
              "{testimonials[currentIndex].quote}"
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full border-2 border-blue-primary/30 overflow-hidden mr-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-dark">{testimonials[currentIndex].author}</h4>
              <p className="text-dark/60 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators for mobile */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-7 bg-blue-primary" : "w-2.5 bg-blue-primary/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  // For desktop view, we'll show a nicer carousel
  const renderDesktopView = () => (
    <div className="hidden md:block">
      <div className="relative">
        <div className="flex gap-6">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            const isNext = (index === (currentIndex + 1) % testimonials.length);
            const isPrev = (index === (currentIndex - 1 + testimonials.length) % testimonials.length);
            
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  x: index > currentIndex ? 100 : -100
                }}
                animate={{ 
                  opacity: isActive ? 1 : isNext || isPrev ? 0.7 : 0.3,
                  scale: isActive ? 1 : isNext || isPrev ? 0.9 : 0.8,
                  x: isActive ? 0 : isNext ? 300 : isPrev ? -300 : (index > currentIndex ? 500 : -500)
                }}
                transition={{ duration: 0.6 }}
                className={`absolute top-0 bg-white rounded-xl shadow-lg border border-border/40 p-8 w-full max-w-2xl mx-auto 
                  ${isActive ? 'z-20' : isNext || isPrev ? 'z-10' : 'z-0'}`}
                style={{ left: "calc(50% - 16rem)" }}
              >
                <div className="mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="inline-block w-5 h-5 fill-accent text-accent mr-1" />
                  ))}
                </div>
                
                <div className="relative mb-8">
                  <Quote className="absolute -top-3 -left-2 text-blue-primary/20 w-10 h-10 rotate-180" />
                  <p className="text-dark/80 italic pl-6 relative text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-blue-primary/30 overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{testimonial.author}</h4>
                    <p className="text-dark/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 mt-8 -mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="h-12 w-12 rounded-full border-border bg-white shadow-md text-dark hover:bg-blue-primary hover:text-white z-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline" 
            size="icon"
            onClick={nextTestimonial}
            className="h-12 w-12 rounded-full border-border bg-white shadow-md text-dark hover:bg-blue-primary hover:text-white z-30"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Testimonial indicators */}
      <div className="flex justify-center gap-2 mt-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-blue-primary" : "w-3 bg-blue-primary/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section 
      id="testimonials"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-light to-white"
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-primary/5 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-accent/5 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="inline-block">
            <span className="bg-blue-primary/10 text-blue-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-accent">Feedback</span>
          </h2>
          <p className="text-dark/80">
            What my clients have to say about my work and collaboration
          </p>
        </motion.div>

        <div className="relative h-[350px] md:h-[420px] mb-8">
          {renderMobileView()}
          {renderDesktopView()}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;