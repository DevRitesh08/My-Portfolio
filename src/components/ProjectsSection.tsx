import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

// Categorize repositories based on topics and names
const categorizeRepo = (name: string, topics: string[], description: string): string => {
  const lowerName = name.toLowerCase();
  const lowerDesc = (description || '').toLowerCase();
  const allTopics = topics.map(t => t.toLowerCase());
  
  // NLP / AI
  if (
    allTopics.some(t => ['nlp', 'natural-language-processing', 'chatbot', 'text-classification', 'sentiment-analysis', 'transformers', 'llm'].includes(t)) ||
    lowerName.includes('nlp') ||
    lowerName.includes('chat') ||
    lowerDesc.includes('nlp') ||
    lowerDesc.includes('natural language')
  ) {
    return 'NLP & AI';
  }
  
  // Machine Learning
  if (
    allTopics.some(t => ['machine-learning', 'ml', 'deep-learning', 'neural-network', 'tensorflow', 'pytorch', 'scikit-learn'].includes(t)) ||
    lowerName.includes('machine-learning') ||
    lowerName.includes('ml') ||
    lowerName.includes('deep') ||
    lowerDesc.includes('machine learning')
  ) {
    return 'Machine Learning';
  }
  
  // Data Analysis / Dashboard
  if (
    allTopics.some(t => ['data-analysis', 'data-science', 'pandas', 'numpy', 'visualization', 'dashboard', 'analytics', 'eda'].includes(t)) ||
    lowerName.includes('dashboard') ||
    lowerName.includes('analysis') ||
    lowerName.includes('analytics') ||
    lowerName.includes('startup') ||
    lowerDesc.includes('dashboard') ||
    lowerDesc.includes('analysis')
  ) {
    return 'Data Analysis';
  }
  
  // Web Development
  if (
    allTopics.some(t => ['web', 'react', 'javascript', 'typescript', 'html', 'css', 'frontend', 'backend', 'nodejs'].includes(t)) ||
    lowerName.includes('web') ||
    lowerName.includes('react') ||
    lowerName.includes('frontend') ||
    lowerDesc.includes('web')
  ) {
    return 'Web Development';
  }
  
  // Python
  if (
    allTopics.includes('python') ||
    lowerName.includes('python')
  ) {
    return 'Python';
  }
  
  // SQL / Database
  if (
    allTopics.includes('sql') ||
    lowerName.includes('sql') ||
    lowerDesc.includes('database')
  ) {
    return 'Database';
  }
  
  return 'Other';
};

// Get appropriate image for category
const getCategoryImage = (category: string, index: number): string => {
  const images: Record<string, string[]> = {
    'NLP & AI': [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop',
    ],
    'Machine Learning': [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&h=600&fit=crop',
    ],
    'Data Analysis': [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    'Web Development': [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    ],
    'Python': [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    ],
    'Database': [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
    ],
    'Other': [
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop',
    ],
  };
  
  const categoryImages = images[category] || images['Other'];
  return categoryImages[index % categoryImages.length];
};

const categories = ['All', 'Machine Learning', 'NLP & AI', 'Data Analysis', 'Web Development', 'Python'];

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [webDevProjects, setWebDevProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch main repos
        const mainResponse = await fetch('https://api.github.com/users/DevRitesh08/repos?per_page=50&sort=updated');
        const mainRepos = await mainResponse.json();
        
        // Fetch WebDev repos
        const webDevResponse = await fetch('https://api.github.com/repos/DevRitesh08/WebDev/contents');
        let webDevItems: any[] = [];
        try {
          webDevItems = await webDevResponse.json();
        } catch (e) {
          console.log('WebDev folder not accessible');
        }

        // Process main repos
        const mainProjects: Project[] = mainRepos
          .filter((repo: any) => !repo.fork && repo.name !== 'WebDev' && repo.name !== 'DevRitesh08')
          .map((repo: any, index: number) => {
            const category = categorizeRepo(repo.name, repo.topics || [], repo.description || '');
            return {
              id: repo.id.toString(),
              name: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
              description: repo.description || 'Data Science project',
              category,
              url: repo.html_url,
              image: getCategoryImage(category, index),
              year: new Date(repo.created_at).getFullYear().toString(),
              topics: repo.topics || [],
            };
          });

        // Process WebDev as individual projects if they're directories
        const webProjects: Project[] = Array.isArray(webDevItems) 
          ? webDevItems
              .filter((item: any) => item.type === 'dir')
              .map((item: any, index: number) => ({
                id: `webdev-${item.name}`,
                name: item.name.replace(/-/g, ' ').replace(/_/g, ' '),
                description: 'Web Development project',
                category: 'Web Development',
                url: `https://github.com/DevRitesh08/WebDev/tree/main/${item.name}`,
                image: getCategoryImage('Web Development', index),
                year: '2024',
              }))
          : [];

        setProjects(mainProjects);
        setWebDevProjects(webProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const allProjects = [...projects, ...webDevProjects];
  
  const filteredProjects = activeCategory === 'All' 
    ? allProjects.slice(0, 8)
    : allProjects.filter(p => p.category === activeCategory);

  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = cat === 'All' 
      ? allProjects.length 
      : allProjects.filter(p => p.category === cat).length;
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
          <span className="section-label block mb-4">Recent Projects</span>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground max-w-3xl leading-tight">
            Building intelligent systems & data-driven solutions
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
            <span>More projects</span>
            <span className="text-sm text-muted-foreground group-hover:text-background/70">
              {allProjects.length}+
            </span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
