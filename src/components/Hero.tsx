import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import GlobeComponent from './GlobeComponent';

const Hero = () => {
  const nameText = "Ritesh Swami";
  const repeatedName = Array(10).fill(`${nameText} — `).join('');

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

        {/* Image Placeholder Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-8 bg-secondary"
        >
          {/* Placeholder for user's image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground text-lg">Your Image Here</p>
          </div>
          
          {/* Globe positioned over image */}
          <div className="absolute bottom-6 left-6 z-10">
            <GlobeComponent />
          </div>
          
          {/* Role text positioned on right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="absolute bottom-6 right-6 text-right z-10"
          >
            <p className="text-lg md:text-xl text-foreground/60">Freelance</p>
            <p className="text-xl md:text-2xl text-foreground font-medium">Data Scientist & ML Engineer</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Rotating Name Marquee */}
      <div className="w-full overflow-hidden py-4">
        <motion.div
          animate={{ x: [0, -50 + '%'] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: 'linear',
            repeatType: 'loop'
          }}
          className="flex whitespace-nowrap"
        >
          <span className="hero-title text-foreground hero-title-faded">
            {repeatedName}
          </span>
          <span className="hero-title text-foreground hero-title-faded">
            {repeatedName}
          </span>
        </motion.div>
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
