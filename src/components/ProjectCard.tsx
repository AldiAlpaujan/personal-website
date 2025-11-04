import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/shadcn/utils';
import { techIcons } from '@/lib/shadcn/variable';
import { Project } from '@/types/project';
import { ConditionalWrapper } from './ConditionalWrapper';

export default function ProjectCard({
  project,
  isLatestProject = false,
  className,
}: {
  project: Project;
  isLatestProject?: boolean;
  className?: string;
}) {
  return (
    <ConditionalWrapper
      condition={project.link !== undefined && project.link !== ''}
      wrapper={(children) => (
        <Link href={project.link!} target="_blank">
          {children}
        </Link>
      )}
    >
      <div
        className={cn(
          'group h-fit flex flex-col gap-4 bg-project-card border-[1.8px] rounded-lg overflow-clip dark:border-project-card cursor-pointer break-inside-avoid',
          isLatestProject && 'w-[264px]',
          className
        )}
      >
        <div
          className={cn(
            'w-full relative overflow-clip',
            isLatestProject && 'h-[163px] object-cover'
          )}
        >
          {project.link && (
            <div className="w-full h-full flex items-center justify-center gap-2 absolute z-10 bg-black/50 transition-all duration-500 opacity-0 group-hover:opacity-100">
              <p className="text-white/90 text-sm">View Project</p>
              <span className="icon-[formkit--arrowright] text-xs text-white/90" />
            </div>
          )}
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
            const techIcon = techIcons.find((icon) => icon.name === tech)!;
            return (
              <Image
                key={idx}
                src={techIcon.icon}
                alt={'tech icon'}
                width={25}
                height={25}
                className={cn(
                  'size-5 hover:rotate-[20deg] transition-all duration-500',
                  techIcon.themeCamo && 'dark:invert dark:brightness-0'
                )}
              />
            );
          })}
        </div>
      </div>
    </ConditionalWrapper>
  );
}
