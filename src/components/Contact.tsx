import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, Send, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a beautifully formatted WhatsApp message
    let message =
      `📝 New Project Inquiry from Portfolio\n\n` +
      `👤 Name: ${formData.name}\n` +
      `✉️ Email: ${formData.email}\n` +
      (formData.company ? `🏢 Company: ${formData.company}\n` : '') +
      (formData.budget ? `💰 Budget: ${formData.budget}\n` : '') +
      (formData.timeline ? `⏳ Timeline: ${formData.timeline}\n` : '') +
      `\n📝 Project Description:\n${formData.message}`;
    const phone = '252905345879';
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const contactOptions = [
    {
      id: 'email',
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'saidibrahim61@outlook.com',
      href: 'mailto:saidibrahim61@outlook.com',
      description: 'Send me an email for detailed discussions',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'phone',
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+252 90 784 1579',
      href: 'tel:+252905345879',
      description: 'Call for immediate consultation',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+252 90 534 5879',
      href: 'https://wa.me/252905345879?text=Hi%20Said%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20talk%3F',
      description: 'Quick chat and project discussions',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      id: 'location',
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Garowe, Somalia',
      href: 'https://goo.gl/maps/garowe',
      description: 'Available for remote collaboration worldwide',
      gradient: 'from-purple-primary to-accent'
    },
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: 'https://github.com/SaidIbraahim/',
      label: 'GitHub',
      color: 'hover:text-gray-900',
      bg: 'hover:bg-gray-100'
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: 'https://www.linkedin.com/in/sa-ibrahim',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-50'
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: 'https://www.instagram.com/saidibrahim.tech/',
      label: 'Instagram',
      color: 'hover:text-pink-600',
      bg: 'hover:bg-pink-50'
    },
  ];

  const processSteps = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Initial Consultation",
      description: "We discuss your project requirements and goals"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Project Planning",
      description: "Detailed timeline and milestone planning"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Development & Design",
      description: "Iterative development with regular updates"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Delivery & Support",
      description: "Final delivery with ongoing support"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 800px 600px at 0% 50%, rgba(90, 89, 242, 0.04), transparent),
          radial-gradient(ellipse 1000px 800px at 100% 50%, rgba(113, 120, 255, 0.03), transparent),
          linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #fafafa 100%)
        `
      }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(90, 89, 242, 0.06), rgba(113, 120, 255, 0.04))' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(113, 120, 255, 0.04), rgba(90, 89, 242, 0.06))' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-block mb-6">
            <span className="bg-gradient-premium-soft text-purple-primary text-sm font-semibold px-6 py-2 rounded-full border border-purple-primary/20">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-dark leading-tight">
            Software & AI Solutions Engineer
          </h2>
          <p className="text-xl text-dark/80 leading-relaxed max-w-3xl mx-auto">
            I build smart web software and AI tools that solve real business problems.<br />
            From automation to custom platforms — everything is built to save time, cut manual work, and just work.<br />
            <span className="text-dark/60 text-base block mt-3">(I do a bit of UX/UI design here and there.)</span>
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-1 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-dark mb-6">
                    Contact <span className="gradient-text-premium">Information</span>
                  </h3>
                </motion.div>
                
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.id}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-primary/10 hover:border-purple-primary/30 hover:shadow-luxury transition-all duration-500">
                      <div className={`p-4 bg-gradient-to-br ${option.gradient} rounded-xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                      {option.icon}
                    </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-dark group-hover:text-purple-primary transition-colors duration-300 mb-1">
                          {option.label}
                        </h4>
                        <p className="text-dark/80 font-medium mb-2">{option.value}</p>
                        <p className="text-dark/60 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-6">
                <h4 className="text-lg font-bold mb-6 text-dark">Follow My Journey</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                      className={`p-4 bg-white/80 backdrop-blur-sm rounded-2xl text-dark ${social.color} ${social.bg} transition-all duration-300 hover:shadow-lg border border-purple-primary/10 hover:border-purple-primary/30`}
                      aria-label={social.label}
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div variants={itemVariants} className="pt-8">
                <h4 className="text-lg font-bold mb-6 text-dark">How We Work</h4>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      className="flex items-start p-4 bg-gradient-premium-soft rounded-xl border border-purple-primary/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      <div className="p-2 bg-gradient-premium rounded-lg mr-4 shadow-sm">
                        <div className="text-white">
                          {step.icon}
              </div>
            </div>
                      <div>
                        <h5 className="font-semibold text-dark mb-1">{step.title}</h5>
                        <p className="text-dark/70 text-sm">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-luxury border border-purple-primary/10">
                <h3 className="text-3xl font-bold mb-8 text-dark">
                  Start Your <span className="gradient-text-premium">Project</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-dark/80 mb-3">
                        Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-purple-primary/20 rounded-2xl focus:ring-2 focus:ring-purple-primary/30 focus:border-purple-primary bg-white/80 text-dark placeholder-dark/40 font-medium transition-all duration-300"
                        placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark/80 mb-3">
                        Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-purple-primary/20 rounded-2xl focus:ring-2 focus:ring-purple-primary/30 focus:border-purple-primary bg-white/80 text-dark placeholder-dark/40 font-medium transition-all duration-300"
                        placeholder="your.email@company.com"
                    required
                  />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-dark/80 mb-3">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-purple-primary/20 rounded-2xl focus:ring-2 focus:ring-purple-primary/30 focus:border-purple-primary bg-white/80 text-dark placeholder-dark/40 font-medium transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-dark/80 mb-3">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-purple-primary/20 rounded-2xl focus:ring-2 focus:ring-purple-primary/30 focus:border-purple-primary bg-white/80 text-dark font-medium transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="$100-$500">$100 - $500</option>
                        <option value="$500-$1,000">$500 - $1,000</option>
                        <option value="$1,000-$2,500">$1,000 - $2,500</option>
                        <option value="$2,500-$5,000">$2,500 - $5,000</option>
                        <option value="$5,000-$10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-dark/80 mb-3">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-purple-primary/20 rounded-2xl focus:ring-2 focus:ring-purple-primary/30 focus:border-purple-primary bg-white/80 text-dark font-medium transition-all duration-300"
                    >
                      <option value="">When do you need this completed?</option>
                      <option value="asap">ASAP (Rush project)</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark/80 mb-3">
                      Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-purple-primary/20 rounded-2xl focus:ring-2 focus:ring-purple-primary/30 focus:border-purple-primary bg-white/80 text-dark placeholder-dark/40 font-medium transition-all duration-300 resize-none"
                      placeholder="Tell me about your project goals, requirements, and any specific features you need..."
                    required
                  />
                </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                      className="flex-1 bg-gradient-premium hover:shadow-luxury-hover text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-500 hover:scale-105 shadow-luxury text-lg"
                >
                      <Send className="mr-3 h-5 w-5" />
                      Send Project Details
                </Button>
                
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 border-purple-primary/30 text-purple-primary hover:bg-gradient-premium hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-500 backdrop-blur-sm hover:border-transparent hover:shadow-luxury"
                      asChild
                    >
                      <a href="https://wa.me/252905345879?text=Hi%20Said%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20talk%3F">
                        <MessageCircle className="mr-3 h-5 w-5" />
                        Quick Chat
                      </a>
                    </Button>
                  </div>
                  
                  <p className="text-center text-sm text-dark/60 mt-6">
                    I typically respond within 24 hours. For urgent projects, 
                  <a 
                    href="https://wa.me/252905345879?text=Hi%20Said%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20talk%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                      className="text-purple-primary hover:text-accent font-semibold ml-1"
                  >
                      message me on WhatsApp
                  </a>
                </p>
              </form>
            </div>
            </motion.div>
          </div>
        </div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-premium p-8 rounded-3xl shadow-luxury text-white max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mr-3" />
              <h3 className="text-2xl font-bold">Currently Available for New Projects</h3>
            </div>
            <p className="text-white/90 text-lg">
              I'm accepting new projects starting in Q1 2025. Book your consultation today to secure your spot.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;