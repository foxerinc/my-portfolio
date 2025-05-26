import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import ProjectDetail from '../../../components/ProjectDetail';

interface DetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectDetail project={project} />
    </main>
  );
};

export default DetailPage;