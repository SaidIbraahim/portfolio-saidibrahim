
import { Code, PenTool, Users, Lightbulb } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText 
            className="section-title"
            once={true}
            delay={0}
          >
            About Me
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
            once={true}
            delay={200}
          >
            Delivering elegant solutions at the intersection of code and design
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedText 
              className="text-2xl font-bold"
              once={true}
              delay={300}
            >
              Who I Am
            </AnimatedText>
            <AnimatedText 
              className="text-muted-foreground"
              once={true}
              delay={400}
            >
              I'm Said Ibrahim, a passionate Software Developer and UX Designer with a relentless drive to create meaningful digital experiences. With a background in both development and design, I bring a unique perspective to every project.
            </AnimatedText>
            <AnimatedText 
              className="text-muted-foreground"
              once={true}
              delay={500}
            >
              My approach combines technical excellence with user-centered design principles. I believe the best digital products emerge when technology serves human needs seamlessly, without calling attention to itself.
            </AnimatedText>
            <AnimatedText 
              className="text-muted-foreground"
              once={true}
              delay={600}
            >
              When I'm not coding or designing, you might find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community events.
            </AnimatedText>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatedText delay={400} once={true}>
              <div className="glass-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-cvs-blue/10">
                <div className="w-12 h-12 bg-cvs-blue/10 rounded-xl flex items-center justify-center text-cvs-blue mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cvs-blue">Development</h3>
                <p className="text-muted-foreground">Building robust, scalable applications with modern technologies and best practices.</p>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={500} once={true}>
              <div className="glass-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-cvs-red/10">
                <div className="w-12 h-12 bg-cvs-red/10 rounded-xl flex items-center justify-center text-cvs-red mb-4">
                  <PenTool size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cvs-red">Design</h3>
                <p className="text-muted-foreground">Creating intuitive, accessible interfaces that deliver exceptional user experiences.</p>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={600} once={true}>
              <div className="glass-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-cvs-blue/10">
                <div className="w-12 h-12 bg-cvs-blue/10 rounded-xl flex items-center justify-center text-cvs-blue mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cvs-blue">Collaboration</h3>
                <p className="text-muted-foreground">Working effectively with cross-functional teams to deliver cohesive solutions.</p>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={700} once={true}>
              <div className="glass-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-cvs-red/10">
                <div className="w-12 h-12 bg-cvs-red/10 rounded-xl flex items-center justify-center text-cvs-red mb-4">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cvs-red">Innovation</h3>
                <p className="text-muted-foreground">Exploring new approaches and technologies to solve complex problems.</p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
