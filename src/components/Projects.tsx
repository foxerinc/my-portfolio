'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Lectio',
    description: 'A book tracker app to manage and track reading behaivior.',
    image: '/project4-lectio-thumbnail.png',
    tech: ['Kotlin', 'Room', 'Retrofit'],
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com/foxerinc/Lectio',
    filterTech: 'kotlin',
  },
  {
    id: '2',
    title: 'BearBull',
    description: 'A stock portfolio tracker app for Indonesian investors.',
    image: '/project6-bearbull-thumbnail.png',
    tech: ['Kotlin', 'Room', 'Retrofit'],
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com/foxerinc/BearBull-ShowCase',
    filterTech: 'kotlin',
  },
  {
    id: '3',
    title: 'Fingerprint Classification',
    description: 'A machine learning model to predict fingerprint to Male or Female using Ridge Density and LBP feature extraction with SVM model.',
    image: '/project2-thesis-thumbnail.png',
    tech: ['Machine Learning','Python'],
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com/foxerinc/fingerprint-gender-classification',
    filterTech: 'python',
  },
  {
    id: '4',
    title: 'Course Scheduler',
    description: 'An Android application designed to help users manage their daily class or course schedules more effectively.',
    image: '/project1-coursescheduler-thumbnail.png',
    tech: ['Kotlin', 'Room', 'Retrofit'],
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com/foxerinc/CourseScheduleApp',
    filterTech: 'kotlin',
  },
  {
    id: '5',
    title: 'Habit App',
    description: 'Habit Tracker App is a productivity-focused Android application inspired by the proven Pomodoro Technique.',
    image: '/project3-habitapp-thumbnail.png',
    tech: ['Kotlin', 'Room', 'Retrofit'],
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com/foxerinc/HabitApp',
    filterTech: 'kotlin',
  },
  {
    id: '6',
    title: 'To-Do List App',
    description: 'An Android application that allows users to manage their daily tasks with clarity, control, and simplicity',
    image: '/project5-todo-thumbnail.png',
    tech: ['Kotlin', 'Room', 'Retrofit'],
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com/foxerinc/To-DoListApp',
    filterTech: 'kotlin',
  },
    {
    id: '7',
    title: 'Movie App',
    description: 'a modular movie watchlist app built with Kotlin and Jetpack Compose, featuring a dedicated favorites module and a core library for reusable functionality',
    image: '/project7-movieapp-thumbnail.png',
    tech: ['Kotlin', 'Room', 'Retrofit'],
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com/foxerinc/movie-app',
    filterTech: 'kotlin',
  }
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.filterTech === filter);

  return (
    <section id="projects" className="py-20 px-4 max-w-[1400px] mx-auto">
      <div className="flex flex-col ss:flex-row justify-between items-center mb-10 gap-4">
        <h2 className=" text-4xl font-heading font-bold">Projects</h2>
        <div className="flex flex-col ss:flex-row items-center gap-2">
          <label htmlFor="tech-filter" className="text-lg xs:text-base">Filter by Tech:</label>
          <select
            id="tech-filter"
            className="p-2 bg-[#1a1a1a] text-white border border-primary rounded-md text-base xs:text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="html">HTML</option>
            <option value="kotlin">Kotlin</option>
            <option value="react">React</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;