'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { useMatchWidth } from '@/hooks/useMatchWidth';
import { Project } from '@/types/project';

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [sortedProjects, setSortedProjects] = useState<Project[]>(projects);
  const isMatch = useMatchWidth(640);

  useEffect(() => {
    if (!isMatch) {
      const sorted = [
        ...projects.filter((_, index) => index % 2 === 0),
        ...projects.filter((_, index) => index % 2 === 1),
      ];
      setSortedProjects(sorted);
    } else {
      setSortedProjects(projects);
    }
  }, [isMatch, projects]);

  return (
    <div className="columns-1 sm:columns-2 gap-3.5">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} className="mb-3.5" />
      ))}
    </div>
  );
}
