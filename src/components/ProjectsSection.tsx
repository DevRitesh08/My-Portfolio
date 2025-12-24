import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

// Define specific projects with professional images
const specificProjects: Project[] = [
  {
    id: 'nlp-app',
    name: 'NLP Application',
    description: 'Natural Language Processing application for text analysis and sentiment detection',
    category: 'NLP & AI',
    url: 'https://github.com/DevRitesh08',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    year: '2024',
  },
  {
    id: 'startup-dashboard',
    name: 'Indian Startup Dashboard',
    description: 'Interactive dashboard analyzing the Indian startup ecosystem with data visualization',
    category: 'Data Analysis',
    url: 'https://github.com/DevRitesh08/Indian-Startup-Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    year: '2024',
  },
  {
    id: 'oop-project',
    name: 'OOP Complete Project',
    description: 'Comprehensive Object-Oriented Programming project demonstrating design patterns',
    category: 'Python & OOP',
    url: 'https://github.com/DevRitesh08/OOPs-Complete/blob/master/In%20Python/oop_project.ipynb',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    year: '2024',
  },
];

// Professional images for CSS projects
const cssProjectImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522542550221-31fd8575f4ec?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
];

const categories = ['All', 'NLP & AI', 'Data Analysis', 'Python & OOP', 'Web Development'];

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(specificProjects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCSSProjects = async () => {
      try {
        // Fetch CSS Projects from WebDev repo
        const response = await fetch('https://api.github.com/repos/DevRitesh08/WebDev/contents/CSS/Projects');
        const items = await response.json();

        if (Array.isArray(items)) {
          const cssProjects: Project[] = items
            .filter((item: any) => item.type === 'dir')
            .map((item: any, index: number) => ({
              id: `css-${item.name}`,
              name: item.name.replace(/-/g, ' ').replace(/_/g, ' '),
              description: 'Creative CSS project showcasing modern web design techniques',
              category: 'Web Development',
              url: `https://github.com/DevRitesh08/WebDev/tree/main/CSS/Projects/${item.name}`,
              image: cssProjectImages[index % cssProjectImages.length],
              year: '2024',
            }));

          setProjects([...specificProjects, ...cssProjects]);
        }
      } catch (error) {
        console.error('Error fetching CSS projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCSSProjects();
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = cat === 'All' 
      ? projects.length 
      : projects.filter(p => p.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="section-label block mb-4">Featured Projects</span>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground max-w-3xl leading-tight">
            Building intelligent systems & creative web experiences
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
              {categoryCounts[category] > 0 && (
                <span className="ml-2 text-xs opacity-60">({categoryCounts[category]})</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-secondary rounded-lg mb-4" />
                <div className="h-5 bg-secondary rounded w-2/3 mb-2" />
                <div className="h-4 bg-secondary rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/DevRitesh08?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 border border-border rounded-full text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <span>More projects on GitHub</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
