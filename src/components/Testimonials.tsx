
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard, { TestimonialProps } from '@/components/ui/TestimonialCard';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const testimonials: TestimonialProps[] = [
  {
    quote: "Said's ability to translate complex requirements into elegant, user-friendly designs sets him apart. His deep understanding of both development and design principles resulted in a product that exceeded our expectations.",
    author: "Alex Johnson",
    position: "CTO, TechVision Inc.",
  },
  {
    quote: "Working with Said was a game-changer for our project. His attention to detail and commitment to creating accessible, intuitive interfaces transformed our application. Users frequently comment on how easy and enjoyable our platform is to use.",
    author: "Sarah Chen",
    position: "Product Manager, InnovateCorp",
  },
  {
    quote: "Said combines technical expertise with a genuine understanding of user needs. He doesn't just build what you ask for—he helps you figure out what your users actually need. The result was a dramatic increase in our user engagement metrics.",
    author: "Michael Rodriguez",
    position: "Founder, StartupLaunch",
  },
  {
    quote: "I was impressed by Said's ability to balance aesthetic considerations with technical requirements. He created a beautiful design that was also highly performant and maintainable. The codebase he delivered was clean, well-documented, and a pleasure to work with.",
    author: "Priya Patel",
    position: "Lead Developer, WebSolutions",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const itemsPerView = windowWidth >= 1024 ? 2 : 1;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Testimonials" 
            className="section-title"
            once={true}
          />
          <AnimatedText 
            text="What clients and colleagues have to say about my work"
            className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
            once={true}
          />
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                display: 'grid',
                gridTemplateColumns: `repeat(${totalSlides}, 100%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
                >
                  {testimonials
                    .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                    .map((testimonial, i) => (
                      <div key={i} className="h-full">
                        <TestimonialCard {...testimonial} isActive={slideIndex === activeIndex} />
                      </div>
                    ))
                  }
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <Button 
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-accent' : 'bg-accent/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
