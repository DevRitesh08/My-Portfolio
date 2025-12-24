import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const skills = [
  'Python', 'Machine Learning', 'Deep Learning', 'NLP',
  'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas',
  'SQL', 'Data Visualization', 'Statistics', 'Power BI',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background-secondary">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="section-label block mb-6">About</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-8">
              I transform complex data into actionable insights that drive business growth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As a Data Scientist and ML Engineer based in India, I specialize in building 
              intelligent systems that solve real-world problems. From predictive models 
              to NLP applications, I bring data to life through innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my degree while actively working on open-source projects 
              and sharpening my skills through platforms like Kaggle and LeetCode. Always 
              eager to take on challenging projects that push the boundaries of what's possible with data.
            </p>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="section-label block mb-6">Skills & Technologies</span>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.05,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Experience/Education */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="section-label block mb-6">Experience</span>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    Data Science Enthusiast
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Self-learning & Open Source • 2023 - Present
                  </p>
                  <p className="text-muted-foreground">
                    Building ML models, contributing to open-source projects, and competing on Kaggle.
                  </p>
                </div>
                <div className="border-l-2 border-border pl-6">
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    Undergraduate Student
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Computer Science • 2022 - Present
                  </p>
                  <p className="text-muted-foreground">
                    Focusing on Data Science, Machine Learning, and Software Engineering fundamentals.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/DevRitesh08"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow group inline-flex items-center gap-2"
              >
                <span>GitHub</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
              <a
                href="https://www.kaggle.com/riteshswami08"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow group inline-flex items-center gap-2"
              >
                <span>Kaggle</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
              <a
                href="https://leetcode.com/u/DevRitesh08/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow group inline-flex items-center gap-2"
              >
                <span>LeetCode</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
