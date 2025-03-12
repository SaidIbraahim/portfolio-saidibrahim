import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nameVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold text-secondary mb-4"
          >
            Said Ibrahim
          </motion.h1>

          {showTitle && (
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-3xl text-gray-600 mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Software Engineer & UX Designer
            </motion.h2>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful, user-centric digital experiences that merge
            technical excellence with intuitive design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="space-x-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;