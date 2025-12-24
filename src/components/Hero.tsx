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

        {/* Placeholder for user's image - full screen background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground text-xl">Your Image Here</p>
        </div>
        
        {/* Globe positioned bottom left */}
        <div className="absolute bottom-32 left-6 md:left-10 z-10">
          <GlobeComponent />
        </div>
        
        {/* Scroll arrow - positioned center right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute top-1/2 right-6 md:right-10 -translate-y-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-foreground/60"
          >
            <ArrowDown size={24} className="rotate-[-45deg]" />
          </motion.div>
        </motion.div>
        
        {/* Role text positioned on right - joined as one unit */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="absolute bottom-32 right-6 md:right-10 z-10"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/60">Aspiring</p>
          <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium">Data Scientist & ML Engineer</p>
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
