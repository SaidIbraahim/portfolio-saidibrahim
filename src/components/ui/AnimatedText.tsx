
import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text?: string;
  className?: string;
  once?: boolean;
  children?: ReactNode;
  delay?: number;
  animationDuration?: number;
}

const AnimatedText = ({ 
  text, 
  className, 
  once = false, 
  children, 
  delay = 0,
  animationDuration = 700 
}: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once, delay]);
  
  return (
    <div
      ref={elementRef}
      className={cn(
        "opacity-0 transition-all", 
        isVisible && "opacity-100", 
        className
      )}
      style={{ 
        willChange: 'opacity, transform',
        transitionDuration: `${animationDuration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children || (text && <span className="text-balance font-medium">{text}</span>)}
    </div>
  );
};

export default AnimatedText;
