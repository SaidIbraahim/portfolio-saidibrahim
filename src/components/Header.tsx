import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../components/ui/sheet';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-light/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-2xl text-dark"
        >
          Said<span className="text-blue-primary">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-dark hover:text-blue-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-primary after:transition-all hover:after:w-full"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-dark"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-light">
            <nav className="flex flex-col mt-10 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium text-dark hover:text-blue-primary transition-colors"
                  onClick={() => {
                    const element = document.querySelector('[data-radix-collection-item]');
                    if (element) {
                      const htmlElement = element as HTMLElement;
                      htmlElement.click();
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;