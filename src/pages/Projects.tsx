
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import projet1 from '../assets/carepro.png';

export const Projects = () => {
  const projects = [
    {
      title: "CarePro Health Insurance Management System",
      description: "A full-stack Health insuarance management system",
      image: projet1,
      tech: ["PHP", "HTML", "MySQL", "JavaScript"],
      link: projet1,
      github: "https://github.com/kiruluchamika/SLIIT-IWT-Project-2024"
    }
    
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my recent work, featuring web applications and design projects.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.link}
                      className="text-white hover:text-purple-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="text-white hover:text-purple-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};