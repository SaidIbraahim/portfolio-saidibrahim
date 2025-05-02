import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, Send } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactOptions = [
    {
      id: 'email',
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'saidibrahim61@outlook.com',
      href: 'mailto:saidibrahim61@outlook.com',
    },
    {
      id: 'phone',
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+252 90 534 5879',
      href: 'tel:+252905345879',
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      value: '+252 90 534 5879',
      href: 'https://wa.me/252905345879?text=Hi%20Said%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20talk%3F',
    },
    {
      id: 'location',
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Garowe, Somalia',
      href: 'https://goo.gl/maps/garowe',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">Get in Touch</h2>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Looking for expert web development, UX design, or tech consulting services? Let's turn your vision into reality. 
              I'd love to collaborate on your next project or discuss how my services can elevate your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-5 space-y-8">
              <div className="space-y-6">
                {contactOptions.map((option) => (
                  <motion.a
                    key={option.id}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 bg-white rounded-lg border border-border/40 hover:border-blue-primary/30 hover:shadow-md transition-all group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-3 bg-light rounded-full mr-4 text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-colors">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-dark">{option.label}</h3>
                      <p className="text-dark/70">{option.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-4 text-dark">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/SaidIbraahim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-light rounded-full text-dark hover:bg-blue-primary hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sa-ibrahim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-light rounded-full text-dark hover:bg-blue-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/saidibrahim.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-light rounded-full text-dark hover:bg-blue-primary hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7 bg-white p-8 rounded-xl shadow-sm border border-border/40">
              <h3 className="text-xl font-semibold mb-6 text-dark">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-primary focus:border-transparent bg-light text-dark"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-primary focus:border-transparent bg-light text-dark"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-primary focus:border-transparent bg-light text-dark"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-primary hover:bg-accent text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                
                <p className="text-center text-sm text-dark/60 mt-4">
                  Or message me directly on{" "}
                  <a 
                    href="https://wa.me/252905345879?text=Hi%20Said%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20talk%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-primary hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;