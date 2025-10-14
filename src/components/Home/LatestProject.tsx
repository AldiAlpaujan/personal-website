import Link from 'next/link';
import { Card, CardTitle } from '@/lib/shadcn/ui/card';
import { Project } from '@/types/project';
import ProjectCard from '../ProjectCard';

export default function LatestProject() {
  const projects: Project[] = [
    {
      image: '/projects/personal-website.png',
      title: 'Personal Website',
      description:
        'A modern personal website built with Next.js and React, showcasing my portfolio, projects, and skills. It features a clean and responsive design, smooth navigation, and reusable components styled with Tailwind CSS and Shadcn UI. The site is fully type-safe with TypeScript for better maintainability.',
      techUsed: ['nextjs', 'reactjs', 'typescript', 'tailwindcss', 'shadcn'],
      link: '',
    },
    {
      image: '/projects/my-kbihu.png',
      title: 'MyKBIHU',
      description:
        'MyKBIHU is a digital solution application / platform specifically designed to support KBIHU (Hajj & Umrah Guidance Groups) in managing their journeys more easily, in a structured, and modern way.',
      techUsed: ['reactjs', 'typescript', 'tailwindcss', 'shadcn', 'vite'],
      link: 'https://mykbihu.id',
    },
    {
      image: '/projects/kbihu.png',
      title: 'KBIHU',
      description:
        'KBIHU is a management app designed to let customers join training programs, and check their estimated departure year.',
      techUsed: ['flutter', 'dart', 'firebase'],
      link: 'https://play.google.com/store/apps/details?id=com.di.kbihu&pcampaignid=web_share',
    },
    {
      image: '/projects/balance-keeper.png',
      title: 'Balance Keeper',
      description:
        'Balance Keeper is a personal finance app designed to track your expenses and manage your assets with ease. Stay in control of your financial health effortlessly.',
      techUsed: ['flutter', 'dart', 'sqlite'],
      link: '',
    },
  ];
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
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} isLatestProject={true} />
          ))}
        </div>
      </div>
    </Card>
  );
}
