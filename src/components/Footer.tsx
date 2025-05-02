import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Twitter, BarChart2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  const navigationLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { 
      icon: <MapPin className="h-5 w-5 text-blue-primary" />, 
      text: 'Garowe, Somalia',
      href: 'https://goo.gl/maps/garowe',
    },
    { 
      icon: <Mail className="h-5 w-5 text-blue-primary" />, 
      text: 'saidibrahim61@outlook.com',
      href: 'mailto:saidibrahim61@outlook.com',
    },
    { 
      icon: <Phone className="h-5 w-5 text-blue-primary" />, 
      text: '+252 90 534 5879',
      href: 'tel:+252905345879',
    },
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/SaidIbraahim/',
      label: 'GitHub',
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://www.linkedin.com/in/sa-ibrahim',
      label: 'LinkedIn',
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      href: 'https://www.instagram.com/saidibrahim.tech/',
      label: 'Instagram',
    },
    { 
      icon: <BarChart2 className="h-5 w-5" />, 
      href: 'https://www.tiktok.com/@saidibrahim.tech',
      label: 'TikTok',
    },
  ];

  return (
    <footer className="bg-dark text-light pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold flex items-center">
              Said<span className="text-blue-primary">.</span>
            </h3>
            <p className="text-light/80 max-w-md">
              Expert Software Developer and UX Designer, creating beautiful digital experiences 
              that merge technical excellence with intuitive design.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark/50 p-2.5 rounded-full hover:bg-blue-primary/90 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-light/80 hover:text-blue-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-primary rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a 
                    href={info.href}
                    className="flex items-start space-x-3 text-light/80 hover:text-blue-primary transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="mt-0.5">{info.icon}</span>
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-light/80">
              Subscribe to receive updates on my latest projects and blog posts.
            </p>
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-dark"
                required
              />
              <Button
                type="submit"
                className="rounded-l-none bg-blue-primary hover:bg-accent transition-colors duration-300"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        <Separator className="bg-light/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-light/60 text-sm">
            © {currentYear} Said Ibrahim. All rights reserved.
          </p>
          <p className="text-light/60 text-sm">
            <a href="#" className="hover:text-blue-primary transition-colors">Privacy Policy</a>
            {' | '}
            <a href="#" className="hover:text-blue-primary transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;