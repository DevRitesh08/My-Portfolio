import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  '• Hello',
  '• नमस्ते',
  '• Bonjour',
  '• Hola',
  '• Ciao',
  '• こんにちは',
  '• स्वागत है',
];

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const wordDuration = 350;
    const totalDuration = greetings.length * wordDuration + 500;
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (totalDuration / 50));
      });
    }, 50);

    // Word cycling
    const wordInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= greetings.length - 1) {
          clearInterval(wordInterval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
          }, 300);
          return prev;
        }
        return prev + 1;
      });
    }, wordDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-loader-bg"
      initial={{ y: 0 }}
      animate={{ y: isExiting ? '-100%' : 0 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="text-center w-full max-w-lg px-10">
        {/* Greeting word */}
        <div className="relative h-24 md:h-32 flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="absolute text-5xl md:text-7xl font-medium text-loader-text"
            >
              {greetings[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="w-full h-0.5 bg-loader-text/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-loader-text rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
