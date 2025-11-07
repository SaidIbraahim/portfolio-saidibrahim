import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, TrendingUp, Bot, Code2, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../components/ui/button';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const backgroundDecorationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };


  const achievements = [
    {
      icon: <Award className="w-6 w-6" />,
      number: "25+",
      label: "Projects Delivered",
      description: "Successfully completed projects across diverse industries"
    },
    {
      icon: <Users className="w-6 w-6" />,
      number: "20+",
      label: "Happy Clients",
      description: "Satisfied clients from startups to enterprises"
    },
    {
      icon: <TrendingUp className="w-6 w-6" />,
      number: "5",
      label: "Years Experience",
      description: "Continuous growth in technology and AI solutions"
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 1000px 600px at 0% 50%, rgba(113, 120, 255, 0.04), transparent),
          radial-gradient(ellipse 800px 800px at 100% 50%, rgba(62, 143, 250, 0.03), transparent),
          linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #fafafa 100%)
        `
      }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(113, 120, 255, 0.08), rgba(62, 143, 250, 0.06))' }}
          variants={backgroundDecorationVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(62, 143, 250, 0.06), rgba(113, 120, 255, 0.04))' }}
          variants={backgroundDecorationVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full blur-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(113, 120, 255, 0.1), rgba(62, 143, 250, 0.08))' }}
          variants={backgroundDecorationVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-gradient-premium-soft text-purple-primary text-sm font-semibold px-6 py-2 rounded-full border border-purple-primary/20">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 text-dark leading-tight">
              AI & Software Solutions Developer
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg sm:text-xl text-dark/80 leading-relaxed mb-4">
                GenAI Applications, Foundation Models & RAG Systems
              </p>
              <p className="text-lg sm:text-xl text-dark/80 leading-relaxed">
                Building smarter, context-aware solutions through LangChain development and AI agents.<br className="hidden sm:block" />
                Specializing in business automation that saves time and boosts productivity.
              </p>
            </div>
          </motion.div>

          {/* Main Content - Centered Layout */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Journey Content */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="relative max-w-3xl mx-auto">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-premium rounded-2xl shadow-lg">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">My Journey</h3>
                    <div className="p-4 bg-gradient-to-br from-blue-primary to-purple-primary rounded-2xl shadow-lg">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-6 text-left md:text-center">
                    <p className="text-lg md:text-xl text-dark/80 leading-relaxed">
                      With over <span className="font-semibold text-purple-primary">5 years of experience</span> in 
                      AI and software development, I specialize in <span className="font-semibold text-blue-primary">LangChain development, AI agents, and GenAI applications</span>.
                      I build intelligent systems using foundation models and RAG (Retrieval-Augmented Generation) to create context-aware solutions.
                    </p>
                    <p className="text-lg md:text-xl text-dark/80 leading-relaxed">
                      My focus is on <span className="font-semibold text-orange-primary">business automation</span> that saves time and boosts productivity. 
                      From AI agents that handle complex workflows to RAG systems that understand context, 
                      I create solutions that transform how businesses operate.
                    </p>
                    <p className="text-lg md:text-xl text-dark/80 leading-relaxed">
                      Based in <span className="font-semibold text-blue-primary">Garowe, Somalia</span>, I bring a global perspective, 
                      having collaborated with clients across Africa, Europe, and North America.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Achievement Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-primary/10 hover:border-purple-primary/30 transition-all duration-300 hover-lift shadow-lg hover:shadow-luxury"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.6 }}
                >
                  <div className="p-3 bg-gradient-premium rounded-xl mb-4 mx-auto w-fit shadow-lg">
                    {achievement.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-dark mb-2">{achievement.number}</h4>
                  <p className="text-sm font-semibold text-purple-primary mb-2">{achievement.label}</p>
                  <p className="text-xs text-dark/60">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Call to Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                className="group bg-gradient-premium hover:shadow-luxury-hover text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all duration-500 hover:scale-105 shadow-luxury text-sm sm:text-base"
                asChild
              >
                <a href="#projects">
                  <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  View My Work
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-primary/30 text-purple-primary hover:bg-gradient-premium hover:text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all duration-500 backdrop-blur-sm hover:border-transparent hover:shadow-luxury text-sm sm:text-base"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;