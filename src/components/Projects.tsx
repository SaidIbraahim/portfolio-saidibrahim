import { Button } from '@/components/ui/button';
import ProjectCard, { ProjectProps } from '@/components/ui/ProjectCard';
import AnimatedText from '@/components/ui/AnimatedText';

const projectsData: ProjectProps[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced product filtering, cart functionality, and secure checkout.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://projects.saidibrahim.tech/ecommerce",
    repoLink: "https://github.com/saidibrahim/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoLink: "https://projects.saidibrahim.tech/taskmanager",
    repoLink: "https://github.com/saidibrahim/task-manager"
  },
  {
    title: "Healthcare Dashboard",
    description: "A comprehensive dashboard for healthcare providers to monitor patient data, appointments, and medical history.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["React", "TypeScript", "D3.js", "Express"],
    demoLink: "https://projects.saidibrahim.tech/healthcare",
    repoLink: "https://github.com/saidibrahim/healthcare-dashboard"
  },
  {
    title: "Travel Companion",
    description: "A travel planning application with personalized recommendations, itinerary management, and location-based services.",
    image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    technologies: ["Next.js", "GraphQL", "Mapbox", "Auth0"],
    demoLink: "https://projects.saidibrahim.tech/travel",
    repoLink: "https://github.com/saidibrahim/travel-companion"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText 
            text="My Projects" 
            className="section-title"
            once={true}
          />
          <AnimatedText 
            text="A selection of my recent work and creative endeavors"
            className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
            once={true}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <AnimatedText 
              key={index}
              className="h-full"
              once={true}
            >
              <ProjectCard {...project} />
            </AnimatedText>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <AnimatedText 
            className=""
            once={true}
          >
            <a href="https://projects.saidibrahim.tech" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full px-6 py-6 bg-primary hover:bg-primary/90">
                View All Projects
              </Button>
            </a>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default Projects;
