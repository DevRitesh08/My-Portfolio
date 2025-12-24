import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const GlobeComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.19, 1, 0.22, 1] }}
      className="inline-flex items-center bg-foreground rounded-full overflow-hidden"
    >
      <div className="px-6 py-4">
        <p className="text-background text-base font-medium leading-tight">
          Located<br />in India
        </p>
      </div>
      <motion.div 
        className="relative w-20 h-20 rounded-full flex items-center justify-center mr-1.5 globe-gradient"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Globe className="w-10 h-10 text-foreground/80" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GlobeComponent;
