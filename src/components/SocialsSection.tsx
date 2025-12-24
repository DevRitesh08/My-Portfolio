import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Github, Linkedin, Trophy } from 'lucide-react';

const socials = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/DevRitesh08',
    icon: Github,
    description: 'Check out my projects'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/ritesh-swami-61ab53309/',
    icon: Linkedin,
    description: 'Connect with me'
  },
  { 
    name: 'Kaggle', 
    href: 'https://www.kaggle.com/riteshswami08',
    icon: Trophy,
    description: 'View my notebooks'
  },
  { 
    name: 'LeetCode', 
    href: 'https://leetcode.com/u/DevRitesh08/',
    icon: Trophy,
    description: 'Contest Rating: 1513'
  },
];

const SocialsSection = () => {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Resume */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
          >
            <span className="section-label block mb-6 text-accent font-semibold">Resume</span>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Download my resume
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Get a detailed overview of my education, skills, projects, and experience in data science and machine learning.
            </p>
            <a
              href="/RITESH_SWAMI_Resume.pdf"
              download="Ritesh_Swami_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full hover:bg-accent-hover transition-all duration-300 font-medium group"
            >
              <FileText size={20} />
              Download Resume
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Right - Socials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
          >
            <span className="section-label block mb-6 text-accent font-semibold">Connect</span>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8">
              Find me online
            </h2>
            
            <div className="grid gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                  viewport={{ once: true }}
                  className="group flex items-center justify-between p-4 border border-border rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <social.icon size={18} className="text-foreground" />
                    </div>
                    <div>
                      <span className="block text-foreground font-medium">{social.name}</span>
                      <span className="text-sm text-muted-foreground">{social.description}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
