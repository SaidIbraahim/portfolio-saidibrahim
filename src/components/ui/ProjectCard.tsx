
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  repoLink?: string;
}

const ProjectCard = ({ title, description, image, technologies, demoLink, repoLink }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-2xl overflow-hidden group h-full glass-card transition-all duration-300 hover:shadow-lg border border-white/20 shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm bg-cvs-blue text-white px-3 py-1.5 rounded-full hover:bg-cvs-blue/90 transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm bg-background/50 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full hover:bg-background/70 transition-colors"
              >
                <Github size={14} />
                <span>Repository</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Image with a nice zoom effect */}
        <div className="w-full h-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "object-cover w-full h-full transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
        </div>
      </div>
      
      <div className="p-6 border-t border-white/10">
        <h3 className="text-xl font-bold mb-2 text-cvs-blue">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2.5 py-1 rounded-full bg-cvs-red/10 text-cvs-red font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
