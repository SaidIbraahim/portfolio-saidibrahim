import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Brain, ChevronRight, Zap, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../components/ui/button';
import ProfilePhoto from '../assets/images/ProfilePhoto.jpg';

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const backgroundDecorationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 1.2,
      },
    },
  };

  const coreValues = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Building robust, scalable applications with modern technologies and clean code practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Intuition",
      description: "Creating visually stunning interfaces that deliver exceptional user experiences."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Strategic Problem Solving",
      description: "Approaching challenges with innovative thinking and efficient solutions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Bringing a diverse worldview to every project, creating inclusive digital solutions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Continuous Innovation",
      description: "Staying at the cutting edge of tech trends, especially in AI and emerging technologies."
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-light to-white"
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 rounded-full bg-blue-primary/5 -z-10"
        variants={backgroundDecorationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-blue-primary/5 -z-10"
        variants={backgroundDecorationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
      />
      <motion.div 
        className="absolute top-40 left-1/4 w-20 h-20 rounded-full bg-accent/10 -z-10"
        variants={backgroundDecorationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.5 }}
      />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block">
              <span className="bg-blue-primary/10 text-blue-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">ABOUT ME</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              Merging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-accent">Technology</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-primary">Design</span>
            </h2>
            <div className="mx-auto max-w-2xl">
              <p className="text-dark/80 text-lg">
                As a passionate Software Developer and UX Designer, I create digital experiences 
                that are both technically excellent and beautifully intuitive.
              </p>
            </div>
          </motion.div>

          {/* Professional Journey */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Image column with decorative elements */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl border-8 border-white shadow-xl aspect-[4/5] bg-gradient-to-br from-blue-primary to-accent/80">
                <img
                  src={ProfilePhoto}
                  alt="Said Ibrahim"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <div className="flex flex-col">
                    <span className="text-sm uppercase tracking-wider opacity-80">Expertise</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm">React</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm">UX Design</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm">TypeScript</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm">AI Integration</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-6 -right-6 h-24 w-24 bg-accent rounded-xl -z-10"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 20, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.div 
                className="absolute -top-6 -left-6 h-20 w-20 bg-blue-primary/80 rounded-full -z-10"
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -20, y: -20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>

            {/* Bio column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-primary to-accent rounded-full"></div>
                <div className="pl-6">
                  <h3 className="text-2xl font-bold text-dark mb-4">My Journey</h3>
                  <p className="text-dark/80 mb-4">
                    With over 4 years of experience in software development and UX design, I've helped businesses transform their digital presence through intuitive, user-centered solutions.
                  </p>
                  <p className="text-dark/80 mb-4">
                    My passion lies at the intersection of technology and human experience – creating software that not only functions flawlessly but delights users with every interaction.
                  </p>
                  <p className="text-dark/80">
                    Based in Garowe, Somalia, I bring a unique global perspective to my work, having collaborated with clients across Africa, Europe, and North America.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <Button 
                  className="group bg-blue-primary hover:bg-accent text-white transition-all"
                  asChild
                >
                  <a href="#projects">
                    View My Work
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white transition-all"
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-dark">Core Values & Expertise</h3>
              <p className="text-dark/70 max-w-2xl mx-auto mt-3">
                The principles and skills that guide my approach to every project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl border border-border/40 hover:border-blue-primary/30 shadow-sm hover:shadow-md transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-blue-primary/10 text-blue-primary rounded-lg inline-block mb-4 group-hover:bg-blue-primary group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-dark">{value.title}</h4>
                  <p className="text-dark/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;