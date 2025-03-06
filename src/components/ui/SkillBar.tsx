
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface SkillProps {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

const SkillBar = ({ name, level, icon }: SkillProps) => {
  const [shown, setShown] = useState(false);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            setTimeout(() => setWidth(level), 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`skill-${name.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [name, level]);
  
  // Determine the color based on the skill level
  const getColorClass = () => {
    if (level >= 80) return 'bg-cvs-blue';
    if (level >= 60) return 'bg-cvs-red';
    return 'bg-primary/70';
  };
  
  return (
    <div 
      id={`skill-${name.replace(/\s+/g, '-').toLowerCase()}`}
      className="glass-card p-4 rounded-xl relative flex flex-col h-full border border-cvs-red/20"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon && <span className="text-cvs-red">{icon}</span>}
          <h4 className="font-medium">{name}</h4>
        </div>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            getColorClass(),
            shown ? "" : "w-0"
          )}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
