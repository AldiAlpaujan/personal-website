import { getVisibleProjects } from '@/lib/firebase/repositories/projects';
import ProjectHeader from './component/ProjectHeader';
import ProjectList from './component/ProjectList';

export default async function Projects() {
  const projects = await getVisibleProjects();

  return (
    <>
      <ProjectHeader />
      <ProjectList projects={projects} />
    </>
  );
}
