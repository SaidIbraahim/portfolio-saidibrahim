import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Brain, ChevronRight, Zap, Globe, Award, Target, Users, TrendingUp } from 'lucide-react';
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

  const coreValues = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Building robust, scalable applications with modern technologies and clean code practices.",
      gradient: "from-purple-primary to-accent"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Innovation",
      description: "Creating visually stunning interfaces that deliver exceptional user experiences and drive engagement.",
      gradient: "from-accent to-purple-primary"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Thinking",
      description: "Approaching challenges with innovative problem-solving and efficient, scalable solutions.",
      gradient: "from-purple-primary via-accent to-purple-primary"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Bringing diverse perspectives to create inclusive digital solutions that work worldwide.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Integration",
      description: "Leveraging cutting-edge AI technologies to create intelligent, future-ready applications.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focused on delivering measurable outcomes that drive business growth and user satisfaction.",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

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
          radial-gradient(ellipse 1000px 600px at 0% 50%, rgba(90, 89, 242, 0.04), transparent),
          radial-gradient(ellipse 800px 800px at 100% 50%, rgba(113, 120, 255, 0.03), transparent),
          linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #fafafa 100%)
        `
      }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(90, 89, 242, 0.08), rgba(113, 120, 255, 0.06))' }}
          variants={backgroundDecorationVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(113, 120, 255, 0.06), rgba(90, 89, 242, 0.04))' }}
          variants={backgroundDecorationVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full blur-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(90, 89, 242, 0.1), rgba(113, 120, 255, 0.08))' }}
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
              Software & AI Solutions Developer
            </h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl text-dark/80 leading-relaxed">
                I build smart web software and AI tools that solve real business problems.<br />
                From automation to custom platforms — everything is built to save time, cut manual work, and just work.<br />
               
              </p>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-primary/20 via-transparent to-accent/10" />
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
                      software and AI solutions development, I've helped businesses transform their operations 
                      through <span className="font-semibold text-accent">automation, custom platforms, and smart tools</span>.
                    </p>
                    <p className="text-lg text-dark/80 leading-relaxed">
                      My passion is building technology that saves time, cuts manual work, and just works — 
                      from AI-powered automation to robust web applications.
                    </p>
                    <p className="text-lg text-dark/80 leading-relaxed">
                      Based in <span className="font-semibold text-accent">Garowe, Somalia</span>, I bring a global perspective, 
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

          {/* Enhanced Core Values */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <div className="inline-block mb-4">
                <span className="bg-gradient-premium-soft text-purple-primary text-sm font-semibold px-6 py-2 rounded-full border border-purple-primary/20">
                  CORE VALUES & EXPERTISE
                </span>
              </div>
              <h3 className="text-4xl font-bold text-dark mb-4">
                What Drives My <span className="gradient-text-premium">Excellence</span>
              </h3>
              <p className="text-lg text-dark/70 max-w-3xl mx-auto">
                The principles and skills that guide my approach to every project, ensuring exceptional 
                results and meaningful impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-purple-primary/10 hover:border-purple-primary/30 shadow-lg hover:shadow-luxury transition-all duration-500 hover-lift h-full">
                    <div className={`p-4 bg-gradient-to-br ${value.gradient} text-white rounded-2xl inline-block mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-dark group-hover:text-purple-primary transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-dark/80 leading-relaxed">
                      {value.description}
                    </p>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-premium-soft opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-24"
          >
            <div className="bg-gradient-premium p-12 rounded-3xl shadow-luxury text-white max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Ready to transform your ideas into exceptional digital experiences? 
                Let's discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-white text-purple-primary px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start a Project
                  <ChevronRight className="ml-2 w-5 h-5" />
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
      </div>
    </section>
  );
};

export default About;