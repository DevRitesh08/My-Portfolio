import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['C++', 'Python', 'SQL', 'JavaScript'],
  },
  {
    title: 'Core Concepts',
    skills: ['OOPs', 'DBMS', 'Statistics', 'Data Structures', 'DSA'],
  },
  {
    title: 'Machine Learning',
    skills: ['ML Algorithms', 'Scikit-learn', 'Deep Learning', 'NLP'],
  },
  {
    title: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Data Visualization', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Jupyter', 'VS Code', 'Power BI'],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background-secondary">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-20"
        >
          <span className="section-label block mb-6">About</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-8">
            Building the future with data, one model at a time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            I'm a passionate AI & Data Science student with a strong foundation in programming 
            and a deep interest in Data Science and Machine Learning. I love turning raw data 
            into meaningful insights and building intelligent systems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Currently focusing on mastering ML algorithms, exploring NLP, and building 
            real-world projects that solve actual problems. Always eager to learn and 
            take on challenging projects.
          </p>

          {/* Profiles */}
          <div className="flex flex-wrap gap-4">
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
          </div>
        </motion.div>

        {/* Skills & Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="mb-20 pt-12 border-t border-border"
        >
          <span className="section-label block mb-8">Skills & Technologies</span>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + catIndex * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="group"
              >
                <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.19, 1, 0.22, 1],
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="pt-12 border-t border-border"
        >
          <span className="section-label block mb-8">Education</span>
          <div className="grid md:grid-cols-3 gap-6">
            {/* B.Tech */}
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-lg font-medium text-foreground mb-1">
                B.Tech in AI & Data Science
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Arya College, Jaipur • 2023 - 2027
              </p>
              <p className="text-muted-foreground">
                CGPA: <span className="text-accent font-medium">8.0</span>
              </p>
            </div>

            {/* 12th */}
            <div className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
              <h3 className="text-lg font-medium text-foreground mb-1">
                Class 12th (CBSE)
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Rawat Public School
              </p>
              <p className="text-muted-foreground">
                Percentage: <span className="text-accent font-medium">88.4%</span>
              </p>
            </div>

            {/* 10th */}
            <div className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
              <h3 className="text-lg font-medium text-foreground mb-1">
                Class 10th (CBSE)
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Rawat Public School
              </p>
              <p className="text-muted-foreground">
                Percentage: <span className="text-accent font-medium">87.6%</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
