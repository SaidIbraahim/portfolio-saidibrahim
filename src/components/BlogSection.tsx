import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      description: 'Exploring how artificial intelligence is transforming the way we build and interact with web applications.',
      date: 'May 15, 2023',
      category: 'AI & Tech',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      url: '/blog/ai-in-web-development',
    },
    {
      id: 2,
      title: 'UX Design in the Age of AI Assistance',
      description: 'How AI is reshaping user experience design and what designers need to know to stay relevant in this new era.',
      date: 'June 10, 2023',
      category: 'UX & AI',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      url: '/blog/ux-design-ai-assistance',
    },
    {
      id: 3,
      title: 'Building Ethical AI Systems: A Developer\'s Guide',
      description: 'Practical approaches for developing AI-driven applications that are both powerful and ethically responsible.',
      date: 'July 22, 2023',
      category: 'AI Ethics',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      url: '/blog/ethical-ai-development',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="blog" className="py-24 bg-light" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary via-accent to-blue-primary">Insights</span> & Case Studies
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto">
            Dive into my latest thoughts on technology trends, AI advancements, and technical tutorials.
            I share insights from the cutting edge of tech to help you stay ahead in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden border border-border/40 hover:border-blue-primary/30 transition-all duration-300 group hover:shadow-md">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-primary px-2 py-1 bg-blue-primary/10 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-dark/60">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-dark group-hover:text-blue-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <CardDescription className="text-dark/80">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="ghost"
                    className="group pl-0 text-blue-primary hover:text-accent hover:bg-transparent"
                    asChild
                  >
                    <a href={post.url}>
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white"
            asChild
          >
            <a href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection; 