
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from '@/components/ui/SocialLinks';
import AnimatedText from '@/components/ui/AnimatedText';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 px-6">
      <div className="hero-gradient"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6">
          <AnimatedText 
            className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-2"
            delay={0}
            animationDuration={500}
          >
            <span>Software Developer & UX Designer</span>
          </AnimatedText>
          
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <AnimatedText delay={0} animationDuration={1000}>
              Hi, I'm <br />
            </AnimatedText>
            <AnimatedText delay={200} animationDuration={1000}>
              <span className="text-accent">Said Ibrahim</span>
            </AnimatedText>
          </div>
          
          <AnimatedText 
            className="text-lg md:text-xl text-muted-foreground max-w-xl"
            delay={800}
            animationDuration={500}
          >
            <p>
              I craft beautiful, user-focused digital experiences with modern technologies 
              and thoughtful design principles.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={1000} animationDuration={500}>
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button onClick={scrollToProjects} className="rounded-full px-8 py-6 bg-accent hover:bg-accent/90 text-white">
                View My Work
              </Button>
              <SocialLinks className="mt-4 sm:mt-0" />
            </div>
          </AnimatedText>
        </div>
        
        <div className="lg:col-span-2">
          <AnimatedText delay={600} animationDuration={800}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full filter blur-xl animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/30 rounded-full filter blur-xl animate-blob animate-delay-200"></div>
              
              {/* Main image container */}
              <div className="relative z-10 overflow-hidden rounded-2xl border border-white/30 backdrop-blur-sm shadow-xl">
                <div className="aspect-[4/5] bg-gradient-to-tr from-accent/5 to-accent/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-2xl font-display">
                      SI
                    </div>
                    <p className="mt-6 text-sm">Professional photo placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to About section"
          className="flex flex-col items-center text-sm text-muted-foreground"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
