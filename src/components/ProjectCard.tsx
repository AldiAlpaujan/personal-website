import Image from 'next/image';
import { cn } from '@/lib/shadcn/utils';
import { TechIcons } from '@/lib/shadcn/variable';
import { Project } from '@/types/project';

export default function ProjectCard({
  project,
  isLatestProject = false,
}: {
  project: Project;
  isLatestProject?: boolean;
}) {
  return (
    <div
      className={cn(
        'group h-fit flex flex-col gap-4 bg-project-card border-[1.8px] rounded-lg overflow-clip dark:border-project-card cursor-pointer',
        isLatestProject && 'w-[264px]'
      )}
    >
      <div className={cn('w-full overflow-clip', isLatestProject && 'h-[163px] object-cover')}>
        <Image
          src={project.image}
          alt={'project image'}
          width={805}
          height={685}
          className={cn('group-hover:scale-105 h-full object-cover transition-all duration-500')}
        />
      </div>
      <div className="px-2.5">
        <h4 className="text-foreground text-base font-bold mb-0.5">{project.title}</h4>
        <p className={cn('text-sm text-secondary-foreground', isLatestProject && 'line-clamp-2')}>
          {project.description}
        </p>
      </div>
      <div className="flex px-2.5 mb-2.5 gap-2">
        {project.techUsed.map((tech, idx) => {
          const techIcon = TechIcons.find((icon) => icon.name === tech)!;
          return (
            <Image
              key={idx}
              src={techIcon.icon}
              alt={'tech icon'}
              width={25}
              height={25}
              className={cn('size-5', techIcon.themeCamo && 'dark:invert dark:brightness-0')}
            />
          );
        })}
      </div>
    </div>
  );
}
