import { Skill } from '../types';
import SkillCard from './SkillCard';
import { SiKotlin, SiReact, SiHtml5 } from 'react-icons/si';

const skills: Skill[] = [
  { name: 'Kotlin', level: 'Expert', icon: <SiKotlin className="text-4xl text-primary" /> },
  { name: 'React', level: 'Entry', icon: <SiReact className="text-4xl text-primary" /> },
  { name: 'HTML/CSS', level: 'Advanced', icon: <SiHtml5 className="text-4xl text-primary" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-[1400px] mx-auto">
      <h1 className="text-4xl font-heading mb-8 text-start font-bold">Skills</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 justify-content-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;