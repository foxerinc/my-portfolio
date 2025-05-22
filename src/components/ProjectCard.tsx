import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="bg-[#1a1a1a] rounded-xl border border-border overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,255,255,0.25)]">
      <Image src={project.image} alt={`${project.title} Image`} width={320} height={250} className="w-full h-[250px] object-cover rounded-t-xl" />
      <div className="p-6">
        <h3 className="text-2xl xs:text-xl font-heading mb-2 font-bold">{project.title}</h3>
        <p className="text-secondaryText text-lg xs:text-base mb-3">{project.description}</p>
        <ul className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tech, index) => (
            <li key={index} className="bg-border px-3 py-1 rounded-md text-base xs:text-sm">{tech}</li>
          ))}
        </ul>
            <div className="flex justify-start">
              <Link
                href={project.codeUrl}
                className="inline-block px-6 py-3 border-2 border-tertiary text-secondary rounded-md text-lg xs:text-base hover:bg-tertiary hover:text-secondary hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:scale-105 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Link>
            </div>
      </div>
    </article>
  );
};

export default ProjectCard;