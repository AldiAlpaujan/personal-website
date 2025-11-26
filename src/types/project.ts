import { TechType } from './tech-type';

export interface Project {
  image: string;
  title: string;
  description: string;
  techUsed: TechType[];
  link?: string;
  hidden?: boolean;
}
