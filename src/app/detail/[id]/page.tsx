import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project: { id: string }) => ({
    id: project.id,
  }));
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params; // Await params
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 sm:px-8 max-w-[1400px] mx-auto">
      <ProjectDetail project={project} />
    </main>
  );
}