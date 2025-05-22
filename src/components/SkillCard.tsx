import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-border text-center">
      <span className="flex justify-center text-4xl mb-4 font-bold">{skill.icon}</span>
      <h3 className="text-xl font-heading mb-2 font-bold">{skill.name}</h3>
      <p className="text-secondaryText text-base">{skill.level}</p>
    </div>
  );
};

export default SkillCard;