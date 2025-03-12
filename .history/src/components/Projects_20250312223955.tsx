import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Figma } from 'lucide-react';
import voteimg from '../assets/images/voteimg.jpg';

const projects = [
  {
    title: 'Online Student Council Voting platform',
    description: 'a comprehensive Online Student Council Voting platform designed to facilitate secure and efficient student council elections.',
    image: voteimg,
    tech: ['React', 'Tailwind CSS', 'MongoDB', 'Node.js'],
    liveUrl: 'https://github.com/SaidIbraahim/online-student-council-voting-system',
    githubUrl: 'https://github.com/SaidIbraahim/online-student-council-voting-system',
    type: 'development'
  },
  {
    title: 'HealthTrack UX Case Study',
    description: 'Complete UX redesign of a health tracking platform, focusing on user research, wireframing, and final UI implementation.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    tech: ['Figma', 'User Research', 'Prototyping', 'UI Design'],
    liveUrl: 'https://projects.saidibrahim.tech/healthtrack-ux',
    figmaUrl: 'https://figma.com/file/healthtrack',
    type: 'design'
  },
  {
    title: 'AI-powered Chatbot',
    description: 'Interactive Chatbot web application that uses the Meta-Llama-3-70B API to provide fast and accurate responses to a wide range of text prompts.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    tech: ['JavaScript', 'OpenAI API', 'CSS', 'HTML'],
    liveUrl: 'https://turbotide-chatbot.onrender.com/',
    githubUrl: 'https://github.com/SaidIbraahim/AI-Powered-Chatbot',
    type: 'development'
  },
  {
    title: 'FinTech App Redesign',
    description: 'Comprehensive UX/UI redesign for a financial technology application, improving user engagement by 45%.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tech: ['Adobe XD', 'User Testing', 'Information Architecture', 'Visual Design'],
    liveUrl: 'https://projects.saidibrahim.tech/fintech-redesign',
    figmaUrl: 'https://figma.com/file/fintech',
    type: 'design'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.type === 'development' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {project.type === 'development' ? 'Development' : 'UX Design'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      {project.type === 'development' ? 'Live Demo' : 'Case Study'}
                    </a>
                    {project.type === 'development' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900"
                      >
                        <Github size={20} className="mr-2" />
                        Source Code
                      </a>
                    ) : (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900"
                      >
                        <Figma size={20} className="mr-2" />
                        Prototype
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;