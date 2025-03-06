
import { useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text?: string;
  className?: string;
  once?: boolean;
  children?: ReactNode;
}

const AnimatedText = ({ text, className, once = false, children }: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('animate-fade-in');
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
  }, [once]);
  
  return (
    <div
      ref={elementRef}
      className={cn("opacity-0", className)}
      style={{ willChange: 'opacity, transform' }}
    >
      {children || (text && <span className="text-balance font-medium">{text}</span>)}
    </div>
  );
};

export default AnimatedText;
