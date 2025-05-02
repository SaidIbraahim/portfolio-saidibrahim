import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Said Ibrahim - Software Developer & UX Designer',
  description = 'Expert Software Developer and UX Designer in Somalia, creating beautiful digital experiences that merge technical excellence with intuitive design.',
}) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Footer />
        
        <a
          href="https://wa.me/252905345879?text=Hi%20Said%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20talk%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Contact on WhatsApp"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle size={28} className="text-white" />
          </motion.div>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark text-light text-sm py-2 px-4 rounded-lg whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};

export default MainLayout; 