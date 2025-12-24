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
      className="inline-flex items-center bg-foreground rounded-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-5 py-3">
        <p className="text-background text-sm font-medium leading-tight">
          Based<br />in India
        </p>
      </div>
      <motion.div 
        className="relative w-14 h-14 rounded-full flex items-center justify-center mr-1"
        animate={{ 
          backgroundColor: isHovered ? 'hsl(233, 79%, 59%)' : 'hsl(var(--background-secondary))'
        }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            animate={{ 
              color: isHovered ? 'hsl(0, 0%, 100%)' : 'hsl(var(--muted-foreground))'
            }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <Globe className="w-7 h-7" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GlobeComponent;
