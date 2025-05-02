import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BlogSection from './components/BlogSection';

function App() {
  return (
    <HelmetProvider>
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <BlogSection />
        <Contact />
      </MainLayout>
    </HelmetProvider>
  );
}

export default App;