'use client';

import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(6);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const newItemsPerSlide = window.innerWidth >= 1200 ? 6 : window.innerWidth >= 728 ? 4 : 2;
      setItemsPerSlide(newItemsPerSlide);
      const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.filterTech === filter);
      const newTotalSlides = Math.ceil(filteredProjects.length / newItemsPerSlide);
      setCurrentSlide((prev) => Math.min(prev, newTotalSlides - 1 >= 0 ? newTotalSlides - 1 : 0));
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, [filter]);

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.filterTech === filter);
  const totalSlides = Math.ceil(filteredProjects.length / itemsPerSlide);

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    setCurrentSlide(0);
  };

  const startIndex = currentSlide * itemsPerSlide;
  const slideProjects = filteredProjects.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 xs:px-6 sm:px-8 max-w-[1400px] mx-auto"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col ss:flex-row justify-between items-start ss:items-center mb-10 gap-4">
        <h2 className="text-4xl font-heading font-bold text-primary [text-shadow:0_0_8px_rgba(0,255,255,0.5)]">
          Projects
        </h2>
        <div className="flex flex-col ss:flex-row ss:items-center gap-2">
          <label htmlFor="tech-filter" className="text-lg xs:text-base text-white">Filter by Tech:</label>
          <select
            id="tech-filter"
            className="p-2 bg-[#1a1a1a] text-white border border-primary rounded-md text-base xs:text-sm focus:ring-2 focus:ring-primary"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="html">HTML</option>
            <option value="kotlin">Kotlin</option>
            <option value="python">Python</option>
            <option value="react">React</option>
          </select>
        </div>
      </div>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide + filter}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr min-h-0"
          >
            {slideProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
        {totalSlides > 1 && (
          <>
            <motion.button
              onClick={handlePrevious}
              disabled={currentSlide === 0}
              className={`absolute top-1/2 transform -translate-y-1/2 p-3 border-2 border-primary text-primary rounded-full text-lg xs:text-base left-0 xs:-left-4 sm:-left-8 lg:-left-10 ${
                currentSlide === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-primary hover:text-background hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:scale-105'
              } transition-all duration-300`}
              whileHover={{ scale: currentSlide === 0 ? 1 : 1.05 }}
              whileTap={{ scale: currentSlide === 0 ? 1 : 0.95 }}
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              onClick={handleNext}
              disabled={currentSlide === totalSlides - 1}
              className={`absolute top-1/2 transform -translate-y-1/2 p-3 border-2 border-primary text-primary rounded-full text-lg xs:text-base right-0 xs:-right-4 sm:-right-8 lg:-right-10 ${
                currentSlide === totalSlides - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-primary hover:text-background hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:scale-105'
              } transition-all duration-300`}
              whileHover={{ scale: currentSlide === totalSlides - 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentSlide === totalSlides - 1 ? 1 : 0.95 }}
              aria-label="Next slide"
            >
              <FaArrowRight />
            </motion.button>
          </>
        )}
      </div>
      {totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-primary' : 'bg-secondary/50'
              } hover:bg-primary/80 transition-colors duration-300`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default Projects;