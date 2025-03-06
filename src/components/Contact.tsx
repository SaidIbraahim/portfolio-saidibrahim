
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SocialLinks from '@/components/ui/SocialLinks';
import AnimatedText from '@/components/ui/AnimatedText';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with timeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Contact Me" 
            className="section-title"
            once={true}
          />
          <AnimatedText 
            text="Get in touch for collaborations and opportunities"
            className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
            once={true}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <AnimatedText 
              text="Let's Build Something Amazing Together"
              className="text-2xl font-bold"
              once={true}
            />
            <AnimatedText 
              text="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or via my contact information."
              className="text-muted-foreground"
              once={true}
            />
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>contact@saidibrahim.tech</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="mb-3 font-medium">Connect with me</p>
              <SocialLinks iconSize={24} />
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 rounded-lg bg-accent hover:bg-accent/90 text-white flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
