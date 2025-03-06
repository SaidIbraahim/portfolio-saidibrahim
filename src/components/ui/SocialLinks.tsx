
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className, iconSize = 20 }: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <a
        href="https://github.com/saidibrahim"
        target="_blank"
        rel="noopener noreferrer"
        className="bounce-link text-foreground hover:text-accent transition-colors"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href="https://linkedin.com/in/saidibrahim"
        target="_blank"
        rel="noopener noreferrer"
        className="bounce-link text-foreground hover:text-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href="https://twitter.com/saidibrahim"
        target="_blank"
        rel="noopener noreferrer"
        className="bounce-link text-foreground hover:text-accent transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={iconSize} />
      </a>
      <a
        href="mailto:contact@saidibrahim.tech"
        className="bounce-link text-foreground hover:text-accent transition-colors"
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
