import { Project } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <section className="py-20 px-4 xs:px-6 sm:px-8 max-w-[1400px] mx-auto">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-primary text-lg xs:text-base hover:text-tertiary hover:scale-105 transition-all duration-300 mb-8"
      >
        <FaArrowLeft /> Back to Projects
      </Link>
      <div className="bg-background border border-secondary rounded-lg p-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={384}
            className="w-full h-96 object-cover rounded-md"
            priority={true}
          />
        </div>
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-4xl font-heading font-bold text-primary [text-shadow:0_0_8px_rgba(0,255,255,0.5)] mb-4">
            {project.title}
          </h1>
          <p className="text-secondaryText mb-6">{project.description}</p>
          <p className="text-tertiary mb-6">
            <span className="font-semibold">Tech Stack:</span> {project.tech.join(', ')}
          </p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Features</h2>
            <ul className="list-disc list-inside text-secondaryText">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Role</h2>
            <p className="text-secondaryText">{project.role}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Challenges</h2>
            <p className="text-secondaryText">{project.challenges}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Solution</h2>
            <p className="text-secondaryText">{project.solution}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Learnings</h2>
            <p className="text-secondaryText">{project.learnings}</p>
          </div>
          <div className="flex gap-4 mt-auto">
            <Link
              href={project.demoUrl}
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-md text-lg xs:text-base hover:bg-primary hover:text-background hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </Link>
            <Link
              href={project.codeUrl}
              className="inline-flex items-center px-6 py-3 border-2 border-tertiary text-tertiary rounded-md text-lg xs:text-base hover:bg-tertiary hover:text-background hover:shadow-[0_0_10px_rgba(57,255,20,0.5)] hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;