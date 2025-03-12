import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Brain } from 'lucide-react';
import ProfilePhoto from '../assets/images/ProfilePhoto.jpg'; // Import the image

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8 text-center">About Me</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="w-full md:w-1/3">
              <img
                src={ProfilePhoto} // Use the imported image
                alt="Said Ibrahim"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                With over 3 years of experience in software development and UX design, I specialize in creating intuitive digital experiences that bridge the gap between user needs and technical excellence. My approach combines clean code with user-centered design principles.
              </p>
              <p className="text-lg text-gray-700">
                I've worked with startups and enterprise clients across various industries, helping them transform their ideas into successful digital products that users love.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-600">Writing maintainable, scalable, and efficient code that stands the test of time.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <Palette className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Design Focus</h3>
              <p className="text-gray-600">Creating beautiful interfaces that provide exceptional user experiences.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
              <p className="text-gray-600">Tackling complex challenges with innovative and efficient solutions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;