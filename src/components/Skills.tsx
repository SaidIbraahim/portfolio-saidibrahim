
import { 
  Code2, Database, PenTool, Figma, 
  Terminal, Globe, Laptop, Server, 
  Smartphone, Palette, LineChart, Blocks 
} from 'lucide-react';
import SkillBar, { SkillProps } from '@/components/ui/SkillBar';
import AnimatedText from '@/components/ui/AnimatedText';

const frontendSkills: SkillProps[] = [
  { name: 'React', level: 90, icon: <Code2 size={18} /> },
  { name: 'JavaScript', level: 95, icon: <Code2 size={18} /> },
  { name: 'TypeScript', level: 85, icon: <Code2 size={18} /> },
  { name: 'HTML/CSS', level: 90, icon: <Globe size={18} /> },
  { name: 'Vue.js', level: 80, icon: <Code2 size={18} /> },
  { name: 'Tailwind CSS', level: 95, icon: <Palette size={18} /> },
];

const backendSkills: SkillProps[] = [
  { name: 'Node.js', level: 85, icon: <Server size={18} /> },
  { name: 'Express', level: 80, icon: <Server size={18} /> },
  { name: 'MongoDB', level: 75, icon: <Database size={18} /> },
  { name: 'SQL', level: 70, icon: <Database size={18} /> },
  { name: 'GraphQL', level: 75, icon: <Blocks size={18} /> },
  { name: 'REST APIs', level: 90, icon: <Globe size={18} /> },
];

const designSkills: SkillProps[] = [
  { name: 'Figma', level: 95, icon: <Figma size={18} /> },
  { name: 'UI Design', level: 90, icon: <Palette size={18} /> },
  { name: 'UX Research', level: 85, icon: <LineChart size={18} /> },
  { name: 'Prototyping', level: 90, icon: <PenTool size={18} /> },
  { name: 'User Testing', level: 80, icon: <Laptop size={18} /> },
  { name: 'Responsive Design', level: 95, icon: <Smartphone size={18} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText 
            text="My Skills" 
            className="section-title"
            once={true}
          />
          <AnimatedText 
            text="A comprehensive overview of my technical expertise and proficiencies"
            className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
            once={true}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <AnimatedText 
              text=""
              className="text-center"
              once={true}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                  <Code2 size={32} />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
            </AnimatedText>
            
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <AnimatedText 
              text=""
              className="text-center"
              once={true}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                  <Server size={32} />
                </div>
                <h3 className="text-xl font-bold">Backend Development</h3>
              </div>
            </AnimatedText>
            
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <AnimatedText 
              text=""
              className="text-center"
              once={true}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                  <PenTool size={32} />
                </div>
                <h3 className="text-xl font-bold">Design</h3>
              </div>
            </AnimatedText>
            
            <div className="space-y-4">
              {designSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
