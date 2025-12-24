import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="container mx-auto px-6 md:px-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mb-8"
        >
          <span className="section-label">Data Scientist & ML Engineer</span>
        </motion.div>

        {/* Main Title */}
        <div className="overflow-hidden mb-8 md:mb-12">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="hero-title text-foreground"
          >
            Ritesh Swami—
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-12 md:mb-20">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="hero-title hero-title-faded text-foreground"
          >
            Ritesh Swami—
          </motion.h1>
        </div>

        {/* Description Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Helping businesses unlock insights from data and build intelligent systems. 
              Together we will set the new status quo. No nonsense, always on the cutting edge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              The combination of my passion for{' '}
              <span className="text-foreground font-medium">data science</span>,{' '}
              <span className="text-foreground font-medium">machine learning</span> &{' '}
              <span className="text-foreground font-medium">analytics</span> positions me in a unique place in the AI world.
            </p>
            <a href="#about" className="link-arrow group inline-flex items-center gap-2">
              <span>About me</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
