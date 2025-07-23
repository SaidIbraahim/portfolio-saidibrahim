import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, BarChart2, Sparkles, ExternalLink, Heart } from 'lucide-react';
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
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
      icon: <MapPin className="h-5 w-5 text-purple-primary" />, 
      text: 'Garowe, Somalia',
      href: 'https://www.google.com/maps/@8.4044407,48.4707397,13.69z?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D',
    },
    { 
      icon: <Mail className="h-5 w-5 text-purple-primary" />, 
      text: 'saidibrahim61@outlook.com',
      href: 'mailto:saidibrahim61@outlook.com',
    },
    { 
      icon: <Phone className="h-5 w-5 text-purple-primary" />, 
      text: '+252 90 534 5879',
      href: 'tel:+252905345879',
    },
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-6 w-6" />, 
      href: 'https://github.com/SaidIbraahim/',
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-900'
    },
    { 
      icon: <Linkedin className="h-6 w-6" />, 
      href: 'https://www.linkedin.com/in/sa-ibrahim',
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700'
    },
    { 
      icon: <Instagram className="h-6 w-6" />, 
      href: 'https://www.instagram.com/saidibrahim.tech/',
      label: 'Instagram',
      gradient: 'from-pink-500 to-purple-600'
    },
    { 
      icon: <BarChart2 className="h-6 w-6" />, 
      href: 'https://www.tiktok.com/@saidibrahim.tech',
      label: 'TikTok',
      gradient: 'from-gray-800 to-black'
    },
  ];

  const services = [
    'Web Development',
    'UX/UI Design',
    'Mobile Development',
    'AI Integration',
    'E-commerce Solutions',
    'Digital Consulting'
  ];

  return (
    <footer className="bg-dark text-light pt-20 pb-8 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'linear-gradient(135deg, #5a59f2, #7178ff)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-5"
          style={{ background: 'linear-gradient(135deg, #7178ff, #5a59f2)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About Section */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <h3 className="text-3xl font-black flex items-center">
                <span className="gradient-text-premium">Said</span>
                <span className="text-accent ml-1">.</span>
                <Sparkles className="w-6 h-6 text-accent ml-2" />
            </h3>
            </div>
            
            <p className="text-light/80 max-w-lg leading-relaxed text-lg">
              I build smart web software and AI tools that solve real business problems.<br />
              From automation to custom platforms — everything is built to save time, cut manual work, and just work.<br />
             
            </p>

            {/* Services */}
            <div className="pt-4">
              <h4 className="text-lg font-bold mb-4 text-light">Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    className="flex items-center text-light/70 hover:text-purple-primary transition-colors duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-premium rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-bold mb-4 text-light">Follow My Journey</h4>
              <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                  <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="group relative p-3 rounded-2xl border border-light/20 hover:border-purple-primary/50 transition-all duration-300"
                  aria-label={social.label}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                    <div className="relative text-light/70 group-hover:text-white transition-colors duration-300">
                  {social.icon}
                    </div>
                  </motion.a>
              ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-light">Quick Links</h3>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="group flex items-center text-light/70 hover:text-purple-primary transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-2 h-2 bg-gradient-premium rounded-full mr-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-medium">{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
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
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-light">Get In Touch</h3>
            <ul className="space-y-6">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <motion.a 
                    href={info.href}
                    className="group flex items-start space-x-4 text-light/70 hover:text-purple-primary transition-all duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-2 bg-gradient-premium rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <span className="font-medium block">{info.text}</span>
                      <span className="text-xs text-light/50 group-hover:text-purple-primary/70 transition-colors">
                        Click to {info.href.includes('mailto') ? 'email' : info.href.includes('tel') ? 'call' : 'view location'}
                      </span>
                    </div>
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Availability Status */}
            <div className="mt-8 p-4 bg-gradient-premium-soft rounded-2xl border border-purple-primary/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-purple-primary">Available for Projects</span>
              </div>
              <p className="text-sm text-dark/70">
                Currently accepting new projects for Q1 2024
              </p>
            </div>
          </motion.div>
        </div>

        <Separator className="bg-light/10 my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 text-light/60 text-sm"
          >
            <span>© {currentYear} Said Ibrahim. Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>in Somalia</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-6 text-light/60 text-sm"
          >
            <a href="#" className="hover:text-purple-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-purple-primary transition-colors duration-300">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-purple-primary transition-colors duration-300">
              Cookies
            </a>
          </motion.div>
        </div>

        {/* WhatsApp Float - Footer Version */}
        <motion.div
          className="fixed bottom-8 right-8 z-40 md:hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        >
          <a
            href="https://wa.me/252905345879?text=Hi%20Said%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20talk%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-luxury hover:shadow-luxury-hover transition-all duration-300 hover:scale-110"
            aria-label="Contact on WhatsApp"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >
              <Send className="w-7 h-7 text-white" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;