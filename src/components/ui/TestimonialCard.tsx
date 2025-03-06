
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image?: string;
  isActive?: boolean;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  image,
  isActive = true 
}: TestimonialProps) => {
  return (
    <div
      className={cn(
        "glass-card p-8 rounded-2xl transition-all duration-500 h-full flex flex-col",
        isActive 
          ? "opacity-100 transform-none" 
          : "opacity-40 scale-95 blur-[1px]"
      )}
    >
      <div className="mb-6 text-accent">
        <Quote size={32} />
      </div>
      
      <blockquote className="text-lg mb-6 flex-1 italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-accent/10 flex-shrink-0">
          {image ? (
            <img src={image} alt={author} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-bold text-accent">
              {author.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="ml-4">
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
