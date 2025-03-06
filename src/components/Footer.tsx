
import { ChevronUp } from 'lucide-react';
import SocialLinks from '@/components/ui/SocialLinks';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-display font-bold">Said<span className="text-accent">.</span></a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Building elegant digital experiences at the intersection of code and design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <SocialLinks />
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Said Ibrahim. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
