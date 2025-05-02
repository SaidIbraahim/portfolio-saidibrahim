import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cpu, 
  Paintbrush, 
  Code, 
  Database, 
  Server, 
  BookOpen, 
  Workflow,
  Bot
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

  // Enhanced skill categories with modern organization
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        'React & React Native',
        'Next.js',
        'TypeScript/JavaScript',
        'HTML5/CSS3',
        'Tailwind CSS & SCSS',
        'Redux & Context API',
        'Framer Motion'
      ]
    },
    {
      title: 'Backend & Infrastructure',
      icon: <Server className="w-6 h-6" />,
      skills: [
        'Node.js & Express',
        'Python & Django',
        'REST API Development',
        'GraphQL',
        'MongoDB & SQL Databases',
        'Firebase',
        'AWS Services'
      ]
    },
    {
      title: 'Design & UX',
      icon: <Paintbrush className="w-6 h-6" />,
      skills: [
        'Figma & Adobe XD',
        'UI/UX Design',
        'Wireframing & Prototyping',
        'Design Systems',
        'User Research',
        'Accessibility',
        'Responsive Design'
      ]
    },
    {
      title: 'AI & Emerging Tech',
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        'AI Integration',
        'ChatGPT & LLMs',
        'Voice Interfaces',
        'Machine Learning',
        'Automation'
      ]
    }
  ];

  // Tools & technologies with logos
  const tools = [
    {
      category: 'Development',
      icon: <Code className="w-5 h-5" />,
      items: [
        'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 
        'Django', 'Git', 'REST APIs', 'GraphQL'
      ]
    },
    {
      category: 'Design',
      icon: <Paintbrush className="w-5 h-5" />,
      items: [
        'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'
      ]
    },
    {
      category: 'Databases & Infrastructure',
      icon: <Database className="w-5 h-5" />,
      items: [
        'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Vercel', 'Netlify'
      ]
    },
    {
      category: 'Project Management',
      icon: <Workflow className="w-5 h-5" />,
      items: [
        'Agile', 'Scrum', 'JIRA', 'GitHub Projects', 'Notion'
      ]
    },
    {
      category: 'AI & Automation',
      icon: <Bot className="w-5 h-5" />,
      items: [
        'OpenAI API', 'HuggingFace', 'TensorFlow', 'Chatbots', 'Automation Tools'
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
            My professional competencies and technical toolkit
          </p>
        </motion.div>

        {/* Professional Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-8 border border-border/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-primary/10 text-blue-primary rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-block px-3 py-1.5 bg-light rounded-md text-dark/80 text-sm border border-border/30 hover:border-blue-primary/40 hover:bg-blue-primary/5 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-border/40"
        >
          <h3 className="text-2xl font-bold text-dark mb-8 text-center">Tools & Technologies</h3>
          
          <div className="space-y-8">
            {tools.map((toolCategory) => (
              <div key={toolCategory.category}>
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-primary/10 text-blue-primary rounded-md mr-3">
                    {toolCategory.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-dark">{toolCategory.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2 ml-2">
                  {toolCategory.items.map((item) => (
                    <motion.span 
                      key={item}
                      className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-primary/10 to-accent/5 rounded-full text-dark/90 text-sm border border-blue-primary/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;