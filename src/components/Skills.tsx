'use client';

import { motion } from 'framer-motion';
import { Skill } from '../types';
import SkillCard from './SkillCard';
import { SiKotlin, SiReact, SiHtml5, SiJavascript, SiPython } from 'react-icons/si';

const skills: Skill[] = [
  { name: 'Kotlin', level: 'Expert', icon: <SiKotlin className="text-4xl text-primary" /> },
  { name: 'React', level: 'Entry', icon: <SiReact className="text-4xl text-primary" /> },
  { name: 'HTML/CSS', level: 'Advanced', icon: <SiHtml5 className="text-4xl text-primary" /> },
  { name: 'Javascript', level: 'Entry', icon: <SiJavascript className='text-4xl text-primary'/>},
  {name: 'Python', level: 'Entry', icon: <SiPython className='text-4xl text-primary'/>}
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-[1400px] mx-auto">
      <h1 className="text-4xl font-heading mb-8 text-start font-bold text-primary [text-shadow:0_0_8px_rgba(0,255,255,0.5)]">
        Skills
      </h1>
      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 justify-content-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;