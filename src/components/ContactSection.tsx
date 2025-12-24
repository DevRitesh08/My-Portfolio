import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="section-label block mb-6">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-8">
              Looking for an <span className="text-accent">intern</span> or <span className="text-accent">collaborator</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              I'm actively seeking internship opportunities and exciting projects. 
              Let's connect and build something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="mailto:riteshswami08@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full hover:bg-accent-hover transition-colors duration-300 font-medium text-lg"
            >
              <Mail size={20} />
              <span>Hire Me</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-swami-61ab53309/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-300 font-medium text-lg"
            >
              <Send size={18} />
              <span>Connect on LinkedIn</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
