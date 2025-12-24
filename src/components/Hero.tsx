import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import GlobeComponent from './GlobeComponent';

const Hero = () => {
  const nameText = "Ritesh Swami";
  const repeatedName = Array(12).fill(`${nameText} — `).join('');
  
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 400, damping: 90 });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-2, 0, 2]);
  const baseX = useTransform(scrollY, [0, 3000], [0, -1500]);
  
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Full-screen Image Section */}
      <div className="relative w-full h-screen bg-secondary">
        {/* Label - positioned top left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="absolute top-24 left-6 md:left-10 z-10"
        >
          <span className="section-label">3rd Year AI & Data Science Student (2023-27)</span>
        </motion.div>

        {/* Hindi welcome text - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-medium"
          >
            • स्वागत है
          </motion.p>
        </div>
        
        {/* Globe positioned bottom left */}
        <div className="absolute bottom-32 left-6 md:left-10 z-10">
          <GlobeComponent />
        </div>
        
        {/* Role text with arrow - joined together on right side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="absolute right-6 md:right-10 z-10"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {/* Arrow */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-foreground/60 mb-8"
          >
            <ArrowDown size={24} className="rotate-[-45deg]" />
          </motion.div>
          
          {/* Role text */}
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/60">Aspiring</p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium">Data Scientist & ML Engineer</p>
          </div>
        </motion.div>

        {/* Rotating Name Marquee - overlaying bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden py-6">
          <motion.div
            style={{ x: baseX }}
            className="flex whitespace-nowrap"
          >
            <motion.span 
              className="hero-title text-foreground/20"
              style={{ x: velocityFactor }}
            >
              {repeatedName}
            </motion.span>
            <motion.span 
              className="hero-title text-foreground/20"
              style={{ x: velocityFactor }}
            >
              {repeatedName}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
