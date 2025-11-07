import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ChevronRight, Award, Users, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../components/ui/button';
import ProfilePhoto from '../assets/images/profile-photo.jpg';

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
      className="py-32 relative overflow-hidden"
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
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-gradient-premium-soft text-purple-primary text-sm font-semibold px-6 py-2 rounded-full border border-purple-primary/20">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-dark leading-tight">
              AI & Software Solutions Developer
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl text-dark/80 leading-relaxed mb-4">
                GenAI Applications, Foundation Models & RAG Systems
              </p>
              <p className="text-xl text-dark/80 leading-relaxed">
                Building smarter, context-aware solutions through LangChain development and AI agents.<br />
                Specializing in business automation that saves time and boosts productivity.
              </p>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Enhanced Image Column */}
            <motion.div variants={itemVariants} className="relative lg:order-1">
              <div className="relative z-10 group">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-luxury hover:shadow-luxury-hover transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-premium p-1 rounded-3xl">
                    <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-3xl overflow-hidden backdrop-blur-sm">
                      <img
                        src={ProfilePhoto}
                        alt="Said Ibrahim"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-primary/20 via-transparent to-blue-primary/10" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 p-6 bg-white rounded-3xl shadow-luxury border border-purple-primary/10"
                  initial={{ opacity: 0, x: 30, y: 30 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 30, y: 30 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-premium rounded-2xl">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-dark">25+ Projects</p>
                      <p className="text-sm text-dark/60">Completed Successfully</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-8 -left-8 p-4 bg-white rounded-2xl shadow-lg border border-purple-primary/10"
                  initial={{ opacity: 0, x: -30, y: -30 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -30, y: -30 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-dark">Available for projects</span>
                  </div>
                </motion.div>

                {/* Background Decoration */}
                <motion.div 
                  className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-premium rounded-3xl -z-10 opacity-20"
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={inView ? { opacity: 0.2, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -15 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Enhanced Content Column */}
            <motion.div variants={itemVariants} className="space-y-8 lg:order-2">
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-premium rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-3xl font-bold text-dark mb-6">My Journey</h3>
                  <div className="space-y-6">
                    <p className="text-lg text-dark/80 leading-relaxed">
                      With over <span className="font-semibold text-purple-primary">5 years of experience</span> in 
                      AI and software development, I specialize in <span className="font-semibold text-blue-primary">LangChain development, AI agents, and GenAI applications</span>.
                      I build intelligent systems using foundation models and RAG (Retrieval-Augmented Generation) to create context-aware solutions.
                    </p>
                    <p className="text-lg text-dark/80 leading-relaxed">
                      My focus is on <span className="font-semibold text-orange-primary">business automation</span> that saves time and boosts productivity. 
                      From AI agents that handle complex workflows to RAG systems that understand context, 
                      I create solutions that transform how businesses operate.
                    </p>
                    <p className="text-lg text-dark/80 leading-relaxed">
                      Based in <span className="font-semibold text-blue-primary">Garowe, Somalia</span>, I bring a global perspective, 
                      having collaborated with clients across Africa, Europe, and North America.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-primary/10 hover:border-purple-primary/30 transition-all duration-300 hover-lift"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                  >
                    <div className="p-2 bg-gradient-premium rounded-xl mb-2 mx-auto w-fit">
                      {achievement.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-dark mb-1">{achievement.number}</h4>
                    <p className="text-sm font-semibold text-purple-primary mb-1">{achievement.label}</p>
                    <p className="text-xs text-dark/60">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <Button 
                  className="group bg-gradient-premium hover:shadow-luxury-hover text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 shadow-luxury"
                  asChild
                >
                  <a href="#projects">
                    View My Work
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-purple-primary/30 text-purple-primary hover:bg-gradient-premium hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 backdrop-blur-sm hover:border-transparent hover:shadow-luxury"
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;