export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  filterTech: string;
  features: string[];
  role: string;
  challenges: string;
  solution: string;
  learnings: string;
  demoUrl: string;
  codeUrl: string;
};

export interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode; 
}

export interface Accomplishment {
  title: string;
  description: string;
}

export interface ProjectDetail {
  projectId: string,
  
}