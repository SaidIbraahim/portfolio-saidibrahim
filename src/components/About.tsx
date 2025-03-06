
import { Code, PenTool, Users, Lightbulb } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText 
            text="About Me" 
            className="section-title"
            once={true}
          />
          <AnimatedText 
            text="Delivering elegant solutions at the intersection of code and design"
            className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
            once={true}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedText 
              text="Who I Am"
              className="text-2xl font-bold"
              once={true}
            />
            <AnimatedText 
              text="I'm Said Ibrahim, a passionate Software Developer and UX Designer with a relentless drive to create meaningful digital experiences. With a background in both development and design, I bring a unique perspective to every project."
              className="text-muted-foreground"
              once={true}
            />
            <AnimatedText 
              text="My approach combines technical excellence with user-centered design principles. I believe the best digital products emerge when technology serves human needs seamlessly, without calling attention to itself."
              className="text-muted-foreground"
              once={true}
            />
            <AnimatedText 
              text="When I'm not coding or designing, you might find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community events."
              className="text-muted-foreground"
              once={true}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-muted-foreground">Building robust, scalable applications with modern technologies and best practices.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                <PenTool size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground">Creating intuitive, accessible interfaces that deliver exceptional user experiences.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">Working effectively with cross-functional teams to deliver cohesive solutions.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">Exploring new approaches and technologies to solve complex problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
