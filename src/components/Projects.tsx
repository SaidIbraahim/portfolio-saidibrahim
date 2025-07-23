import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Figma, Shield, Users, Heart, Zap, FileText, GraduationCap, Building, Bot } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import voteimg from '../assets/images/voteimg.jpg';
import AIimg from '../assets/images/AIimg.jpg';

const projects = [
  {
    title: 'Tixraac.ai - AI Secretary',
    description: 'Revolutionary AI-powered document management platform that reads, organizes, and remembers documents for life. Send documents via Telegram and let AI handle the rest.',
    tagline: 'Snap it. Send it. Stored for life.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    tech: ['AI/ML', 'Telegram API', 'Document Processing', 'Natural Language Processing', 'Cloud Storage'],
    liveUrl: 'https://tixraac-ai.vercel.app/',
    githubUrl: 'https://github.com/SaidIbraahim/tixraac-ai',
    type: 'development',
    category: 'AI Innovation',
    icon: <Bot className="h-6 w-6" />,
    gradient: 'from-purple-primary to-accent',
    featured: true
  },
  {
    title: 'Certificate Verification System',
    description: 'Comprehensive platform for universities to issue and verify academic certificates using blockchain technology, ensuring authenticity and preventing fraud.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'Blockchain', 'Express', 'MongoDB', 'Digital Certificates'],
    liveUrl: 'https://eau-verify.vercel.app/',
    githubUrl: 'https://github.com/SaidIbraahim/certificate-verification',
    type: 'development',
    category: 'EdTech',
    icon: <Shield className="h-6 w-6" />,
    gradient: 'from-emerald-500 to-teal-500',
    featured: true
  },
  {
    title: 'Alumni Management System',
    description: 'Advanced system for universities to manage graduate records, transcripts, and certificates while maintaining connection with alumni community.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'PDF Generation', 'Email Integration'],
    liveUrl: 'https://eau-admin.vercel.app/login',
    githubUrl: 'https://github.com/SaidIbraahim/alumni-management',
    type: 'development',
    category: 'EdTech',
    icon: <GraduationCap className="h-6 w-6" />,
    gradient: 'from-blue-500 to-purple-600',
    featured: true
  },
  {
    title: 'SOWDA - NGO Client Website',
    description: 'Professional website for a non-governmental organization focused on social impact and community development, featuring donation systems and volunteer management.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Stripe API', 'CMS Integration', 'SEO Optimization'],
    liveUrl: 'https://sowda.vercel.app/',
    githubUrl: 'https://github.com/SaidIbraahim/sowda-website',
    type: 'development',
    category: 'Non-Profit',
    icon: <Heart className="h-6 w-6" />,
    gradient: 'from-rose-500 to-pink-500',
    featured: true
  },
  {
    title: 'Online Student Council Voting System',
    description: 'Secure and efficient platform for student council elections featuring real-time voting, candidate management, and transparent result reporting.',
    image: voteimg,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication', 'Real-time Updates'],
    liveUrl: 'https://voting-system.demo.com',
    githubUrl: 'https://github.com/SaidIbraahim/online-student-council-voting-system',
    type: 'development',
    category: 'EdTech',
    icon: <Users className="h-6 w-6" />,
    gradient: 'from-indigo-500 to-purple-500',
    featured: false
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'Interactive chatbot web application powered by Meta-Llama-3-70B API providing fast and accurate responses to diverse text prompts.',
    image: AIimg,
    tech: ['JavaScript', 'Node.js', 'Express', 'Meta-Llama-3-70B API', 'Natural Language Processing'],
    liveUrl: 'https://turbotide-chatbot.onrender.com/',
    githubUrl: 'https://github.com/SaidIbraahim/AI-Powered-Chatbot',
    type: 'development',
    category: 'AI Innovation',
    icon: <Zap className="h-6 w-6" />,
    gradient: 'from-amber-500 to-orange-500',
    featured: false
  }
];

const Projects = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 1200px 800px at 100% 0%, rgba(90, 89, 242, 0.03), transparent),
          radial-gradient(ellipse 800px 600px at 0% 100%, rgba(113, 120, 255, 0.04), transparent),
          linear-gradient(180deg, #ffffff 0%, #fafafa 100%)
        `
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={inView ? { opacity: 0.02, rotate: 0 } : { opacity: 0, rotate: -10 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-primary to-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 10 }}
          animate={inView ? { opacity: 0.03, rotate: 0 } : { opacity: 0, rotate: 10 }}
          transition={{ duration: 4, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tl from-accent to-purple-primary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-premium-soft text-purple-primary text-sm font-semibold px-6 py-2 rounded-full border border-purple-primary/20">
              FEATURED WORK
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-dark leading-tight">
            Transforming Ideas Into{' '}
            <span className="gradient-text-premium">Digital Reality</span>
          </h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Discover my latest projects showcasing cutting-edge technology, innovative design, 
            and impactful solutions that drive business growth and user engagement.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-luxury hover:shadow-luxury-hover transition-all duration-700 hover-lift border border-purple-primary/10">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-white shadow-lg`}>
                      {project.icon}
                      <span className="text-sm font-semibold">{project.category}</span>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-purple-primary">
                      FEATURED
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-purple-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.tagline && (
                        <p className="text-sm text-accent font-semibold italic mb-3">
                          "{project.tagline}"
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-dark/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-premium-soft text-purple-primary rounded-lg text-sm font-medium border border-purple-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white bg-gradient-premium hover:shadow-luxury px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      {project.type === 'development' ? 'Live Demo' : 'Case Study'}
                    </a>
                    {project.type === 'development' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-dark hover:text-purple-primary border-2 border-purple-primary/30 hover:border-purple-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      >
                        <Github size={18} className="mr-2" />
                        Source Code
                      </a>
                    ) : (
                      null
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-premium-soft opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-4">
            More <span className="gradient-text-premium">Projects</span>
          </h3>
          <p className="text-dark/70 text-center max-w-2xl mx-auto mb-12">
            Explore additional projects showcasing diverse technologies and creative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury transition-all duration-500 border border-purple-primary/10 hover:border-purple-primary/30 hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-semibold`}>
                      {project.icon}
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-purple-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark/80 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-premium-soft text-purple-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-primary hover:text-accent font-semibold text-sm transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      {project.type === 'development' ? 'Demo' : 'Study'}
                    </a>
                    {project.type === 'development' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-dark hover:text-purple-primary font-semibold text-sm transition-colors duration-300"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    ) : (
                      null
                    )}
                  </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-premium p-12 rounded-3xl shadow-luxury text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-purple-primary px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Project
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;