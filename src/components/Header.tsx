import React, { useState } from 'react';
import { Menu, Github, Linkedin, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-secondary">SI</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/SaidIbraahim/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sa-ibrahim" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/saeedibrahim.tech/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-4 py-4">
              <a href="https://github.com/SaidIbraahim/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sa-ibrahim" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/saeedibrahim.tech/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;