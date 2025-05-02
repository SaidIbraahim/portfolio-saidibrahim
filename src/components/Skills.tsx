import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Globe, Paintbrush, Code, Database, LineChart, Layers, Star } from 'lucide-react';

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

  // Skill levels with descriptions
  const skillLevels = {
    expert: {
      label: "Expert",
      description: "Mastery level with deep understanding. Can architect complex solutions and mentor others.",
      color: "from-blue-primary to-accent",
      nodes: 5
    },
    advanced: {
      label: "Advanced",
      description: "Strong proficiency with comprehensive knowledge and significant experience.",
      color: "from-blue-primary to-blue-primary/60",
      nodes: 4
    },
    proficient: {
      label: "Proficient",
      description: "Competent with solid working knowledge and practical application experience.",
      color: "from-blue-primary/80 to-blue-primary/40",
      nodes: 3
    },
    intermediate: {
      label: "Intermediate",
      description: "Working knowledge with some practical application experience.",
      color: "from-blue-primary/60 to-blue-primary/20",
      nodes: 2
    }
  };

  // Enhanced skill categories with skill levels instead of percentages
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React / React Native', level: 'expert' },
        { name: 'TypeScript / JavaScript', level: 'expert' },
        { name: 'Next.js', level: 'advanced' },
        { name: 'Tailwind CSS / SCSS', level: 'expert' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Node.js / Express', level: 'advanced' },
        { name: 'Python / Django', level: 'proficient' },
        { name: 'RESTful APIs', level: 'expert' },
        { name: 'GraphQL', level: 'intermediate' }
      ]
    },
    {
      title: 'Design & UX',
      icon: <Paintbrush className="w-6 h-6" />,
      skills: [
        { name: 'Figma / Adobe XD', level: 'expert' },
        { name: 'UI/UX Design', level: 'expert' },
        { name: 'Design Systems', level: 'advanced' },
        { name: 'User Research', level: 'proficient' }
      ]
    },
    {
      title: 'AI & Emerging Tech',
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: 'AI Integration', level: 'advanced' },
        { name: 'ChatGPT / LLMs', level: 'advanced' },
        { name: 'Machine Learning Basics', level: 'intermediate' },
        { name: 'Voice Interfaces', level: 'intermediate' },
      ]
    }
  ];

  // Technology logos/icons
  const technologies = [
    'react', 'typescript', 'nodejs', 'python', 'figma', 
    'tailwind', 'nextjs', 'mongodb', 'firebase', 'aws'
  ];

  // Custom Skill Node component
  const SkillNode = ({ active, color }: { active: boolean; color: string }) => (
    <motion.div 
      className={`h-3 w-3 rounded-full ${active 
        ? `bg-gradient-to-r ${color} shadow-sm` 
        : 'bg-light border border-border/40'}`}
      initial={{ scale: 0 }}
      animate={{ scale: active ? 1 : 0.7 }}
      transition={{ duration: 0.3 }}
    />
  );

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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-accent">Proficiency</span>
          </h2>
          <p className="text-dark/80">
            A comprehensive look at my technical skillset and areas of expertise
          </p>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {Object.entries(skillLevels).map(([key, level], idx) => (
            <div 
              key={key}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-border/40 w-[160px]"
            >
              <div className="flex space-x-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SkillNode 
                    key={i} 
                    active={i < level.nodes} 
                    color={level.color} 
                  />
                ))}
              </div>
              <span className="font-semibold text-dark">{level.label}</span>
              <p className="text-xs text-dark/60 text-center mt-1">{level.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-8 border border-border/40 hover:border-blue-primary/30 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-primary/10 text-blue-primary rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => {
                  const level = skillLevels[skill.level as keyof typeof skillLevels];
                  
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-dark">{skill.name}</span>
                        <span className="text-sm font-medium text-blue-primary/90 bg-blue-primary/5 px-2 py-0.5 rounded-full">
                          {level.label}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="flex-1"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                          >
                            <div className={`h-1.5 rounded-full ${i < level.nodes 
                              ? `bg-gradient-to-r ${level.color}` 
                              : 'bg-light border border-border/40'}`} 
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-xl font-bold text-center mb-10 text-dark">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 p-3 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <div className="w-10 h-10 bg-blue-primary/10 rounded-lg"></div>
                </div>
                <span className="mt-2 text-sm font-medium text-dark/80 capitalize">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;