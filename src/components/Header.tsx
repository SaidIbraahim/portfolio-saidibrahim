import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '../components/ui/sheet';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-gradient-to-r from-purple-primary to-blue-primary shadow-luxury ${
        scrolled ? 'backdrop-blur-lg py-4' : 'py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 font-black text-3xl text-white group"
        >
          <div className="relative flex items-center">
            <span className="text-white">Said</span>
            <motion.div
              className="absolute -top-1 -right-6"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
          </div>
          <span className="text-white">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-white hover:text-orange-primary font-semibold transition-all duration-300 group px-2 py-1"
            >
              {item.name}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-orange-primary rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-2 border-purple-primary/30 text-purple-primary hover:bg-gradient-premium hover:text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 backdrop-blur-sm hover:border-transparent hover:shadow-lg"
            asChild
          >
            <a href="#projects">Portfolio</a>
          </Button>
          
          <Button
            size="sm"
            className="bg-gradient-premium hover:shadow-luxury-hover text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative text-dark hover:text-purple-primary hover:bg-gradient-premium-soft transition-all duration-300 rounded-xl"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "open" : "closed"}
                  initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[85%] max-w-[400px] bg-white/95 backdrop-blur-xl p-0 border-l border-purple-primary/20 shadow-luxury"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="py-8 px-8 border-b border-purple-primary/10 bg-gradient-premium-soft">
                <div className="flex items-center space-x-2 font-black text-2xl text-dark">
                  <span className="gradient-text-premium">Said</span>
                  <span className="text-blue-primary">.</span>
                  <Sparkles className="w-5 h-5 text-blue-primary ml-2" />
                </div>
                <p className="text-sm text-dark/70 mt-2">
                  AI & Software Solutions Developer
                </p>
              </div>
              
              {/* Navigation */}
              <nav className="flex flex-col py-8 px-8 space-y-6 flex-grow">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-xl font-semibold text-dark hover:text-purple-primary transition-all duration-300 group flex items-center justify-between py-2"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 8 }}
                  >
                    <span>{item.name}</span>
                    <motion.div
                      className="w-2 h-2 bg-gradient-premium rounded-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </nav>
              
              {/* Footer */}
              <div className="border-t border-purple-primary/10 py-8 px-8 bg-gradient-premium-soft">
                <div className="space-y-4">
                  <a 
                    href="#projects" 
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-3 px-6 border-2 border-purple-primary/30 text-purple-primary font-semibold rounded-xl text-center hover:bg-gradient-premium hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    View Portfolio
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-3 px-6 bg-gradient-premium text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all duration-300"
                  >
                    Start Project
                  </a>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-dark/60">
                    Available for new projects
                  </p>
                  <div className="flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
                    <span className="text-xs font-semibold text-green-600">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Header;