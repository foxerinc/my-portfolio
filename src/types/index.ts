export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  codeUrl: string;
  filterTech: string;
}

export interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode; 
}

export interface Accomplishment {
  title: string;
  description: string;
}