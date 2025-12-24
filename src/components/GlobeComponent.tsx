import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const GlobeComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.19, 1, 0.22, 1] }}
      className="inline-flex items-center bg-foreground rounded-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-5">
        <p className="text-background text-xs sm:text-sm md:text-base font-medium leading-tight">
          Located<br />in India
        </p>
      </div>
      <div 
        className={`relative w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 rounded-full flex items-center justify-center -mr-1 transition-all duration-700 ${
          isHovered ? 'globe-gradient' : 'bg-background-secondary'
        }`}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Globe 
            className={`w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 transition-colors duration-500 ${
              isHovered ? 'text-white' : 'text-muted-foreground'
            }`} 
            strokeWidth={1.5} 
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GlobeComponent;
