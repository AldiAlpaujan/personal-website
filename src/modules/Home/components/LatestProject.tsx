import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { Card, CardTitle } from '@/lib/shadcn/ui/card';
import { projects } from '@/lib/shadcn/variable';

export default function LatestProject() {
  return (
    <Card className="px-0 py-4">
      <div className="flex justify-between items-center px-4">
        <CardTitle className="text-foreground">Latest Projects</CardTitle>
        <Link href="/projects">
          <div className="group flex items-center text-xs gap-1 text-tertiary-foreground cursor-pointer">
            <p className="group-hover:pr-2 transition-all duration-500">View All Projects</p>
            <span className="icon-[formkit--arrowright]" />
          </div>
        </Link>
      </div>
      <div className="w-full overflow-auto scrollbar-hide">
        <div className="w-fit flex gap-4 px-4 ">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.title} project={project} isLatestProject={true} />
          ))}
        </div>
      </div>
    </Card>
  );
}
