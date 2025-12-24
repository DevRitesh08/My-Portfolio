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
      <div className="px-5 py-3">
        <p className="text-background text-sm font-medium leading-tight">
          Based<br />in India
        </p>
      </div>
      <div className="relative w-14 h-14 bg-background-secondary rounded-full flex items-center justify-center mr-1">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Globe className="w-7 h-7 text-muted-foreground" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GlobeComponent;
