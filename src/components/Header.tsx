import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/DevRitesh08' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ritesh-swami-61ab53309/' },
  { name: 'Kaggle', href: 'https://www.kaggle.com/riteshswami08' },
  { name: 'LeetCode', href: 'https://leetcode.com/u/DevRitesh08/' },
];

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-start gap-2 text-foreground hover:text-accent transition-colors duration-300"
            >
              <span className="text-lg leading-none mt-0.5">©</span>
              <span className="flex flex-col text-[11px] uppercase tracking-wide leading-snug">
                <span>Code by</span>
                <span>Ritesh Swami</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground animated-underline hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="px-5 py-2.5 text-sm border border-border rounded-full text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="h-full flex flex-col justify-between px-6 pt-28 pb-10">
              <div className="flex flex-col gap-16">
                <div>
                  <span className="section-label block mb-6">Navigation</span>
                  <nav className="flex flex-col gap-3">
                    {navLinks.map((link, i) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.19, 1, 0.22, 1],
                          delay: 0.1 + i * 0.05
                        }}
                        className="text-5xl md:text-6xl font-normal text-foreground hover:text-accent transition-colors duration-300"
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </nav>
                </div>
                
                <div>
                  <span className="section-label block mb-4">Socials</span>
                  <div className="flex flex-col gap-3">
                    {socials.map((social, i) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.19, 1, 0.22, 1],
                          delay: 0.3 + i * 0.05
                        }}
                        className="text-base text-foreground hover:text-accent transition-colors duration-300"
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-muted-foreground"
              >
                Based in India
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
