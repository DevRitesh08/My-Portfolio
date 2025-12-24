import { motion, useScroll, useSpring, useTransform, useVelocity, useAnimationFrame } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import GlobeComponent from './GlobeComponent';
import { useRef } from 'react';

const Hero = () => {
  const nameText = "Ritesh Swami";
  const repeatedName = Array(12).fill(`${nameText} — `).join('');
  
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 400, damping: 90 });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [5, 1, -3]);
  
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useAnimationFrame((_, delta) => {
    const baseSpeed = -50; // pixels per second (negative = move left)
    const velocityMultiplier = velocityFactor.get();
    const moveBy = (baseSpeed * velocityMultiplier * delta) / 1000;
    
    baseX.current += moveBy;
    
    // Reset position for seamless loop
    if (baseX.current <= -2000) {
      baseX.current = 0;
    }
    if (baseX.current >= 0) {
      baseX.current = -2000;
    }
    
    if (marqueeRef.current) {
      marqueeRef.current.style.transform = `translateX(${baseX.current}px)`;
    }
  });
  
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
        
        {/* Globe positioned bottom left - above marquee */}
        <div className="absolute bottom-44 left-6 md:left-10 z-10">
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
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap will-change-transform"
          >
            <span className="hero-title text-foreground/20">
              {repeatedName}
            </span>
            <span className="hero-title text-foreground/20">
              {repeatedName}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
