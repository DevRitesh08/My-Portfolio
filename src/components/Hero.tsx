import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import GlobeComponent from './GlobeComponent';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mb-6"
        >
          <span className="section-label">3rd Year AI & Data Science Student (2023-27)</span>
        </motion.div>

        {/* Main Title */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="hero-title text-foreground"
          >
            Ritesh
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="hero-title text-foreground"
          >
            Swami
          </motion.h1>
        </div>

        {/* Role & Description Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          {/* Left - Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">Aspiring</p>
            <p className="text-2xl md:text-3xl text-foreground font-medium">Data Scientist & ML Engineer</p>
          </motion.div>

          {/* Right - Description + Globe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Currently pursuing B.Tech in AI & Data Science at Arya College, Jaipur. 
              Passionate about building intelligent systems and data-driven solutions.
            </p>
            <GlobeComponent />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
