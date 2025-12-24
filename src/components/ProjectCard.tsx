import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  image: string;
  year: string;
  topics?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="project-card group"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary mb-4">
          <img
            src={project.image}
            alt={project.name}
            className="project-card-image w-full h-full object-cover"
            loading="lazy"
          />
          <div className="project-overlay" />
          
          {/* Arrow indicator on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <ArrowUpRight size={18} className="text-accent-foreground" />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300 mb-1">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </div>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
      </a>
    </motion.article>
  );
};

export default ProjectCard;
