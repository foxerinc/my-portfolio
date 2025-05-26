import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
      <div className="bg-[#1a1a1a] border border-secondary rounded-xl overflow-hidden flex flex-col h-full min-h-[350px]">
      <Image src={project.image} alt={`${project.title} Image`} width={320} height={250} className="w-full h-[250px] object-cover rounded-t-xl" />
      <div className="p-6">
        <h3 className="text-2xl xs:text-xl font-heading mb-2 font-bold line-clamp-2">{project.title}</h3>

        <ul className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0,3).map((tech, index) => (
            <li key={index} className="bg-border border px-3 py-1 rounded-md text-base xs:text-sm">{tech}</li>
          ))}
        </ul>
            <p className="text-secondaryText text-lg xs:text-base mb-3 line-clamp-3">{project.description}</p>
            <div className="flex justify-end">
                <Link
                  href={`/detail/${project.id}`}
                  className="inline-flex items-center gap-5 p-2 font-semibold text-primary text-lg xs:text-base hover:text-tertiary transition-all duration-300"
                >
                  See Detail <FaArrowRight />
                </Link>
            </div>
      </div>
    </div>
  );
};

export default ProjectCard;