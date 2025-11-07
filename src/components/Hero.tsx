import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, User, Code, LayoutGrid, BarChart2, Sparkles, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useInView } from 'react-intersection-observer';
import ProfilePhoto from '../assets/images/profile-photo.jpg';

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 1.8 + (i * 0.2),
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const heroStats = [
    {
      value: "5",
      label: "Years Experience",
      icon: <User className="h-6 w-6 text-purple-primary" />,
      gradient: "from-purple-primary to-blue-primary"
    },
    {
      value: "25+",
      label: "Projects Completed",
      icon: <Code className="h-6 w-6 text-purple-primary" />,
      gradient: "from-blue-primary to-purple-primary"
    },
    {
      value: "10+",
      label: "System Design",
      icon: <LayoutGrid className="h-6 w-6 text-purple-primary" />,
      gradient: "from-purple-primary via-blue-primary to-orange-primary"
    },
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/SaidIbraahim/", 
      label: "GitHub Profile",
      color: "hover:text-purple-primary"
    },
    { 
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/sa-ibrahim", 
      label: "LinkedIn Profile",
      color: "hover:text-blue-primary"
    },
    { 
      icon: <Instagram className="h-6 w-6" />,
      href: "https://www.instagram.com/saidibrahim.tech/", 
      label: "Instagram Profile",
      color: "hover:text-purple-primary"
    },
    { 
      icon: <BarChart2 className="h-6 w-6" />,
      href: "https://www.tiktok.com/@saidibrahim.tech", 
      label: "TikTok Profile",
      color: "hover:text-orange-primary"
    }
  ];

  return (
    <section 
      id="hero" 
      ref={ref}
      className="min-h-screen flex items-center pt-32 pb-12 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 800px 600px at 50% 0%, rgba(113, 120, 255, 0.08), transparent),
          radial-gradient(ellipse 1200px 800px at 100% 100%, rgba(62, 143, 250, 0.06), transparent),
          linear-gradient(180deg, #fafafa 0%, #ffffff 100%)
        `
      }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={inView ? { opacity: 0.03, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -45 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-br from-purple-primary to-blue-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
          animate={inView ? { opacity: 0.02, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: 45 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-1/4 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-primary to-purple-primary rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: [-20, -100, -20],
              x: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-primary to-blue-primary rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${60 + Math.random() * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3 space-y-10">
            <motion.div
              className="flex items-center space-x-4"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
            >
              <motion.div 
                className="h-1 bg-gradient-to-r from-purple-primary to-blue-primary rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: 48 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-purple-primary" />
                <span className="text-purple-primary font-semibold tracking-wider uppercase text-sm bg-gradient-premium-soft px-4 py-2 rounded-full">
                  AI & Software Solutions Developer
                </span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-dark mb-6">
                Building <span className="gradient-text-premium">GenAI Applications</span> <br className="hidden sm:block" />
                and <span className="gradient-text-premium">AI Agents</span> that <br className="hidden sm:block" />
                boost productivity.
              </h1>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-dark/80 max-w-2xl leading-relaxed font-medium"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
              transition={{ delay: 0.7 }}
            >
              Building intelligent, context-aware solutions that transform businesses.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 pt-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
              transition={{ delay: 1 }}
            >
              <Button
                size="lg"
                className="group bg-gradient-premium hover:shadow-luxury-hover text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-luxury text-sm sm:text-base"
                asChild
              >
                <a href="#projects">
                  <Zap className="mr-2 w-5 h-5" />
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-purple-primary/30 text-purple-primary hover:text-white hover:bg-gradient-premium font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all duration-500 backdrop-blur-sm hover:border-transparent hover:shadow-luxury text-sm sm:text-base"
                asChild
              >
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6 pt-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={heroTextVariants}
              transition={{ delay: 1.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-4 bg-white/80 backdrop-blur-sm rounded-2xl text-dark ${social.color} transition-all duration-300 hover:shadow-luxury hover:scale-110 border border-purple-primary/10`}
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-2 relative">
            <motion.div
              className="relative z-10 overflow-hidden rounded-3xl aspect-[3/4] shadow-luxury"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="w-full h-full relative bg-gradient-premium p-1 rounded-3xl">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-3xl overflow-hidden backdrop-blur-sm">
                  <motion.img
                    src={ProfilePhoto}
                    alt="Said Ibrahim"
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.3 }}
                    animate={inView ? { scale: 1 } : { scale: 1.3 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-primary/20 via-transparent to-blue-primary/10" />
                </div>
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -bottom-8 -left-8 h-32 w-32 bg-gradient-premium rounded-3xl shadow-luxury"
              initial={{ opacity: 0, x: -30, rotate: -10 }}
              animate={inView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -30, rotate: -10 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            />
            
            <motion.div
              className="absolute -top-8 -right-8 h-24 w-24 bg-gradient-to-br from-blue-primary to-purple-primary rounded-2xl shadow-luxury"
              initial={{ opacity: 0, x: 30, rotate: 10 }}
              animate={inView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 30, rotate: 10 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            />

            {/* Glass Effect Card */}
            <motion.div
              className="absolute top-16 -left-12 p-4 glass-effect rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-dark">Available for work</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Premium Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={statsVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group relative"
            >
              <div className="flex items-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-purple-primary/10 hover:border-purple-primary/30 shadow-lg hover:shadow-luxury transition-all duration-500 hover-lift">
                <div className={`p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl mr-6 shadow-lg`}>
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-dark mb-1">{stat.value}</h3>
                  <p className="text-dark/70 font-medium">{stat.label}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-premium-soft opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a href="#about" aria-label="Scroll to About section">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-dark/60 mb-3 font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-12 border-2 border-purple-primary/40 rounded-full flex items-center justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-2 bg-gradient-premium rounded-full" />
            </motion.div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;