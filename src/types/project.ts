import { TechType } from './tech-type';

export interface ProjectInput {
  image: string;
  title: string;
  description: string;
  techUsed: TechType[];
  link?: string | null;
  hidden?: boolean;
  order?: number;
}

export interface Project extends ProjectInput {
  id: string;
  hidden: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
