import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, User, Code, LayoutGrid, BarChart2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useInView } from 'react-intersection-observer';
import ProfilePhoto from '../assets/images/ProfilePhoto.jpg';

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5 + (i * 0.2),
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const heroStats = [
    {
      value: "4+",
      label: "Years Experience",
      icon: <User className="h-5 w-5 text-blue-primary" />,
    },
    {
      value: "50+",
      label: "Projects Completed",
      icon: <Code className="h-5 w-5 text-blue-primary" />,
    },
    {
      value: "12+",
      label: "Design Systems",
      icon: <LayoutGrid className="h-5 w-5 text-blue-primary" />,
    },
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/SaidIbraahim/", 
      label: "GitHub Profile"
    },
    { 
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/sa-ibrahim", 
      label: "LinkedIn Profile"
    },
    { 
      icon: <Instagram className="h-6 w-6" />,
      href: "https://www.instagram.com/saidibrahim.tech/", 
      label: "Instagram Profile"
    },
    { 
      icon: <BarChart2 className="h-6 w-6" />,
      href: "https://www.tiktok.com/@saidibrahim.tech", 
      label: "TikTok Profile"
    }
  ];

  return (
    <section 
      id="hero" 
      ref={ref}
      className="min-h-screen flex items-center pt-24 pb-16 bg-light overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              className="flex items-center space-x-4"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
            >
              <div className="h-1 w-12 bg-blue-primary"></div>
              <span className="text-blue-primary font-semibold tracking-wider uppercase text-sm">
                Software Developer & UX Designer
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight text-dark"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
              transition={{ delay: 0.3 }}
            >
              Creating Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary via-accent to-blue-primary">Experiences</span> That Matter
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-dark/80 max-w-2xl leading-relaxed"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
              transition={{ delay: 0.6 }}
            >
              Merging technical excellence with intuitive design to craft beautiful, 
              user-centric digital solutions for forward-thinking businesses.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                className="group bg-blue-primary hover:bg-accent text-white font-medium transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-blue-primary text-blue-primary hover:text-white hover:bg-blue-primary/90 font-medium transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-5 pt-4"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
              transition={{ delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark hover:text-blue-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-2 relative">
            <motion.div
              className="relative z-10 overflow-hidden rounded-2xl aspect-[3/4] bg-gradient-to-br from-blue-primary/80 to-accent/80 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="w-full h-full relative">
                <motion.img
                  src={ProfilePhoto}
                  alt="Said Ibrahim"
                  className="w-full h-full object-cover object-center mix-blend-overlay opacity-90"
                  initial={{ scale: 1.2 }}
                  animate={inView ? { scale: 1 } : { scale: 1.2 }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 h-24 w-24 bg-accent rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            
            <motion.div
              className="absolute -top-6 -right-6 h-24 w-24 bg-blue-primary rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={statsVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center p-6 rounded-xl bg-white shadow-sm border border-border/40 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-light rounded-lg mr-4">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-dark">{stat.value}</h3>
                <p className="text-dark/70">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to About section">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-dark/60 mb-2">Scroll Down</span>
            <div className="w-5 h-9 border-2 border-blue-primary/30 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-primary rounded-full animate-scroll"></div>
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;