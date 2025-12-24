import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import GlobeComponent from './GlobeComponent';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="mb-6"
            >
              <span className="section-label">Aspiring Data Scientist</span>
            </motion.div>

            {/* Main Title */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="hero-title text-foreground"
              >
                Ritesh
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="hero-title text-foreground"
              >
                Swami—
              </motion.h1>
            </div>

            {/* Role text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">Aspiring</p>
              <p className="text-2xl md:text-3xl text-foreground font-medium">Data Scientist & ML Engineer</p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md"
            >
              Currently pursuing my degree while building intelligent systems and data-driven solutions. 
              Passionate about transforming complex data into actionable insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent-hover transition-colors duration-300 font-medium"
              >
                Hire Me
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                View Projects
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Globe Component */}
            <GlobeComponent />
          </div>

          {/* Right - Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Image placeholder - Replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background-secondary rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                      <span className="text-6xl font-medium text-foreground/30">R</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Add your photo here
                    </p>
                    <p className="text-muted-foreground/60 text-xs mt-1">
                      Replace this component with your image
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -right-4 top-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-4 bottom-1/4 w-32 h-32 bg-accent/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
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
