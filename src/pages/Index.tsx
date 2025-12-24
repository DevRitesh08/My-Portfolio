import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialsSection from '@/components/SocialsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
    document.body.classList.remove('loading');
  };

  return (
    <>
      {/* SEO Meta */}
      <title>Ritesh Swami — Data Scientist & ML Engineer</title>
      <meta name="description" content="Data Scientist and Machine Learning Engineer specializing in building intelligent systems, NLP applications, and data-driven solutions. Based in India." />
      
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <SocialsSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
