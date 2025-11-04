'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { useMatchWidth } from '@/hooks/useMatchWidth';
import { projects } from '@/lib/shadcn/variable';
import { Project } from '@/types/project';

export default function ProjectList() {
  const [sortedProjects, setSortedProjects] = useState<Project[]>([]);
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
  }, [isMatch]);

  return (
    <div className="columns-1 sm:columns-2 gap-3.5">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.title} project={project} className="mb-3.5" />
      ))}
    </div>
  );
}
