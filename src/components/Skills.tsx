import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cpu, 
  Paintbrush, 
  Code, 
  Database, 
  Server, 
  Workflow,
  Bot,
  Github
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Updated skill categories with more concise content
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        'React',
        'Vite',
        'Tailwind CSS'
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        'Node.js & Express',
        'REST APIs Development',
        'MongoDB & SQL Databases',
        'AWS',
        'CI/CD'
      ]
    },
    {
      title: 'UX Design',
      icon: <Paintbrush className="w-6 h-6" />,
      skills: [
        'Figma',
        'Adobe XD',
        'Wireframing & Prototyping',
        'User Research',
        'UX/UI Design'
      ]
    }
  ];

  // Updated tools list
  const tools = [
    {
      category: 'Development Tools',
      icon: <Github className="w-5 h-5" />,
      items: [
        'Git', 'GitHub', 'Docker', 'Kubernetes'
      ]
    },
    {
      category: 'AI & Automation',
      icon: <Bot className="w-5 h-5" />,
      items: [
        'OpenAI API', 'Gemini AI', 'Automation Tools'
      ]
    },
    {
      category: 'Project Management',
      icon: <Workflow className="w-5 h-5" />,
      items: [
        'Agile', 'JIRA', 'Notion'
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-light"
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-accent/5 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-blue-primary/5 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="inline-block">
            <span className="bg-blue-primary/10 text-blue-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">SKILLS & EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-accent">Expertise</span>
          </h2>
          <p className="text-dark/80">
            My core competencies and technical toolkit
          </p>
        </motion.div>

        {/* Professional Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 border border-border/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-primary/10 text-blue-primary rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-dark">{category.title}</h3>
              </div>

              <ul className="space-y-2 pl-2">
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="flex items-center text-dark/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-primary mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 border border-border/40"
        >
          <h3 className="text-xl font-bold text-dark mb-6 text-center">Tools & Technologies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((toolCategory) => (
              <div key={toolCategory.category}>
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-primary/10 text-blue-primary rounded-md mr-3">
                    {toolCategory.icon}
                  </div>
                  <h4 className="font-semibold text-dark">{toolCategory.category}</h4>
                </div>
                
                <ul className="space-y-1.5 pl-2">
                  {toolCategory.items.map((item) => (
                    <li 
                      key={item}
                      className="flex items-center text-dark/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-primary/70 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;