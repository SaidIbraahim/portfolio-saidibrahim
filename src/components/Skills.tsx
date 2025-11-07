import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cpu, 
  Code, 
  Server, 
  Workflow,
  Bot,
  Github,
  Cloud,
  Shield,
  Zap,
  Star,
  Award,
  Sparkles
} from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & LangChain Development',
    icon: <Bot className="w-8 h-8" />, 
    gradient: 'from-orange-primary to-purple-primary',
    tier: 'Innovator',
    highlights: [
      'LangChain Development',
      'RAG Systems',
      'GenAI Applications',
      'Foundation Models',
      'AI Agents',
      'LLM Integration',
      'Business Automation'
    ]
  },
  {
    title: 'Frontend Development',
    icon: <Code className="w-8 h-8" />, 
    gradient: 'from-purple-primary to-blue-primary',
    tier: 'Expert',
    highlights: [
      'React & Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite & Modern Tooling',
      'Responsive Design',
      'Component Architecture',
      'Animation & Micro-interactions'
    ]
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-8 h-8" />, 
    gradient: 'from-blue-primary to-purple-primary',
    tier: 'Advanced',
    highlights: [
      'Node.js & Express',
      'REST APIs & GraphQL',
      'MongoDB & PostgreSQL',
      'System Design',
      'AWS & Cloud Services',
      'Authentication & Security',
      'DevOps & CI/CD'
    ]
  }
];

const tools = [
  {
    category: 'Development Tools',
    icon: <Github className="w-6 h-6" />,
    gradient: 'from-gray-700 to-gray-900',
    items: ['Git & GitHub', 'Docker', 'Kubernetes', 'VS Code', 'Postman']
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    gradient: 'from-blue-500 to-cyan-500',
    items: ['AWS', 'Vercel', 'Netlify', 'Firebase', 'MongoDB Atlas']
  },
  {
    category: 'Security & Performance',
    icon: <Shield className="w-6 h-6" />,
    gradient: 'from-red-500 to-orange-500',
    items: ['JWT Authentication', 'API Security', 'Performance Optimization', 'SEO']
  },
  {
    category: 'Project Management',
    icon: <Workflow className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-500',
    items: ['Agile Methodologies', 'Scrum', 'JIRA', 'Notion', 'Team Leadership']
  }
];

const tierBadges: Record<string, JSX.Element> = {
  'Expert': <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-primary to-blue-primary text-white rounded-full text-xs font-bold shadow-luxury"><Star className="w-4 h-4 mr-1" />Expert</span>,
  'Advanced': <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-primary to-purple-primary text-white rounded-full text-xs font-bold shadow-luxury"><Award className="w-4 h-4 mr-1" />Advanced</span>,
  'Proven': <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs font-bold shadow-luxury"><Sparkles className="w-4 h-4 mr-1" />Proven</span>,
  'Innovator': <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs font-bold shadow-luxury"><Zap className="w-4 h-4 mr-1" />Innovator</span>
};

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

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 800px 600px at 0% 0%, rgba(113, 120, 255, 0.05), transparent),
          radial-gradient(ellipse 1000px 800px at 100% 100%, rgba(62, 143, 250, 0.04), transparent),
          linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #fafafa 100%)
        `
      }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
          className="absolute top-40 right-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(113, 120, 255, 0.08), rgba(62, 143, 250, 0.06))' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div 
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(62, 143, 250, 0.06), rgba(113, 120, 255, 0.04))' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
      />
      </div>

      {/* Header */}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-20"
        >
        <div className="inline-block mb-6">
          <span className="bg-gradient-premium-soft text-purple-primary text-sm font-semibold px-6 py-2 rounded-full border border-purple-primary/20">
            SKILLS & EXPERTISE
          </span>
          </div>
        <h2 className="text-5xl md:text-6xl font-black mb-8 text-dark leading-tight">
          Technical <span className="gradient-text-premium">Excellence</span>
          </h2>
        <p className="text-xl text-dark/80 leading-relaxed">
          Specializing in AI & LangChain development, GenAI applications, and RAG systems, 
          combined with modern development technologies for building intelligent, scalable solutions.
          </p>
        </motion.div>

      {/* Main Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-20"
        >
        {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
            className="group relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-luxury hover:shadow-luxury-hover p-10 border border-purple-primary/10 hover:border-purple-primary/30 transition-all duration-700 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className={`p-4 bg-gradient-to-br ${category.gradient} rounded-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                  {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark group-hover:text-purple-primary transition-colors duration-300 mb-2">
                    {category.title}
                  </h3>
                  {tierBadges[category.tier]}
                </div>
              </div>

              {/* Highlights */}
              <ul className="flex flex-wrap gap-3 mb-4">
                {category.highlights.map((highlight, i) => (
                  <li key={highlight} className="inline-flex items-center px-4 py-2 bg-gradient-premium-soft text-purple-primary font-semibold rounded-xl text-sm shadow-sm hover:shadow-luxury transition-all duration-300 hover-lift">
                    <Sparkles className="w-4 h-4 mr-2 text-blue-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            </motion.div>
          ))}
        </motion.div>

      {/* Tools & Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-dark mb-4">
            Tools & <span className="gradient-text-premium">Technologies</span>
          </h3>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            The comprehensive toolkit I use to bring ideas to life and deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((toolCategory, index) => (
        <motion.div
              key={toolCategory.category}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-luxury transition-all duration-500 border border-purple-primary/10 hover:border-purple-primary/30 hover-lift h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-br ${toolCategory.gradient} rounded-xl mr-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                    {toolCategory.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-dark group-hover:text-purple-primary transition-colors duration-300">
                    {toolCategory.category}
                  </h4>
                </div>
                
                {/* Tools List */}
                <div className="space-y-3">
                  {toolCategory.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      className="flex items-center text-dark/80 hover:text-purple-primary transition-colors duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.7 + (index * 0.1) + (itemIndex * 0.05) }}
                    >
                      <div className="w-2 h-2 bg-gradient-premium rounded-full mr-3 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </motion.div>
    </section>
  );
};

export default Skills;