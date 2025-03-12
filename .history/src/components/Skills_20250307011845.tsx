import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'Tailwind CSS', icon: '🌪' }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: '💻' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🌲' }
      { name: 'Rest API', icon: '🌐' }
    ]
  },
  {
    title: 'Design & UX',
    skills: [
      { name: 'Figma', icon: '🎨' },
      { name: 'UI Design', icon: '🎯' },
      { name: 'User Research', icon: '🔍' },
      { name: 'Prototyping', icon: '⚡' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-6 text-secondary">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <div className="font-medium text-gray-700">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;