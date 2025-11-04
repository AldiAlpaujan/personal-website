import { Project } from '@/types/project';

export type TechIconType = { name: string; label: string; icon: string; themeCamo?: boolean };
export const techIcons: TechIconType[] = [
  { name: 'css', label: 'Css', icon: '/tech-icons/css.svg' },
  { name: 'dart', label: 'Dart', icon: '/tech-icons/dart.svg' },
  { name: 'express', label: 'Express', icon: '/tech-icons/express.svg', themeCamo: true },
  { name: 'firebase', label: 'Firebase', icon: '/tech-icons/firebase.svg' },
  { name: 'flutter', label: 'Flutter', icon: '/tech-icons/flutter.svg' },
  { name: 'git', label: 'Git', icon: '/tech-icons/git.svg' },
  { name: 'html', label: 'HTML', icon: '/tech-icons/html.svg' },
  { name: 'javascript', label: 'Javascript', icon: '/tech-icons/javascript.svg' },
  { name: 'mantine', label: 'Mantine', icon: '/tech-icons/mantine.svg' },
  { name: 'mui', label: 'Mui', icon: '/tech-icons/mui.svg' },
  { name: 'mysql', label: 'Mysql', icon: '/tech-icons/mysql.svg' },
  { name: 'nestjs', label: 'Nest.js', icon: '/tech-icons/nestjs.svg' },
  { name: 'nextjs', label: 'Next.js', icon: '/tech-icons/nextjs.svg', themeCamo: true },
  { name: 'nodejs', label: 'Node.js', icon: '/tech-icons/nodejs.svg' },
  { name: 'prisma', label: 'Prisma', icon: '/tech-icons/prisma.svg', themeCamo: true },
  { name: 'reactjs', label: 'React.js', icon: '/tech-icons/reactjs.svg' },
  { name: 'shadcn', label: 'Shadcn', icon: '/tech-icons/shadcn.svg', themeCamo: true },
  { name: 'sqlite', label: 'Sqlite', icon: '/tech-icons/sqlite.svg' },
  { name: 'tailwindcss', label: 'Tailwindcss', icon: '/tech-icons/tailwindcss.svg' },
  { name: 'typescript', label: 'Typescript', icon: '/tech-icons/typescript.svg' },
  { name: 'vite', label: 'Vite', icon: '/tech-icons/vite.svg' },
];

export const projects: Project[] = [
  {
    image: '/projects/personal website.png',
    title: 'Personal Website',
    description:
      'A modern personal website built with Next.js and React, showcasing my portfolio, projects, and skills. It features a clean and responsive design, smooth navigation, and reusable components styled with Tailwind CSS and Shadcn UI. The site is fully type-safe with TypeScript for better maintainability.',
    techUsed: ['nextjs', 'reactjs', 'typescript', 'tailwindcss', 'shadcn'],
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
    image: '/projects/portfolio.png',
    title: 'My Portfolio',
    description:
      'My first web portfolio is a website I created to showcase my skills, expertise, and past projects, aimed at attracting potential clients.',
    techUsed: ['reactjs', 'tailwindcss', 'typescript', 'vite'],
    link: 'https://aldi-portfolio.vercel.app/',
  },
  {
    image: '/projects/balance-keeper.png',
    title: 'Balance Keeper',
    description:
      'Balance Keeper is a personal finance app designed to track your expenses and manage your assets with ease. Stay in control of your financial health effortlessly.',
    techUsed: ['flutter', 'dart', 'sqlite', 'firebase'],
  },
  {
    image: '/projects/balance-keeper-cms.png',
    title: 'Balance Keeper CMS',
    description:
      'Balance Keeper CMS is an internal application designed to manage the Balance Keeper app and landing page content, as well as analyze data efficiently.',
    techUsed: ['flutter', 'typescript', 'mui', 'express', 'prisma', 'mysql', 'vite'],
  },
  {
    image: '/projects/ehya.png',
    title: 'Ehya Blog',
    description:
      "Ehya Blog is a personal blog website I created to enhance and sharpen my React.js skills. It's a space where practice meets creativity.",
    techUsed: ['reactjs', 'typescript', 'tailwindcss', 'vite'],
    link: 'https://clone-ehya-blog-react.vercel.app/',
  },
  {
    image: '/projects/minimarketku.png',
    title: 'Minimarketku',
    description:
      'Minimarketku is an e-commerce app project that offers the convenience of purchasing items from home without the need to visit the main store.',
    techUsed: ['flutter', 'dart', 'firebase'],
  },
  {
    image: '/projects/db-owner.png',
    title: 'DB Owner',
    description:
      'DB Owner is a powerful app designed to view and analyze data from internal desktop applications subscribed to company.',
    techUsed: ['flutter', 'dart'],
    link: 'https://play.google.com/store/apps/details?id=com.rzfsoftware.dashboard_owner&pcampaignid=web_share',
  },
  {
    image: '/projects/pdt-max.png',
    title: 'PDT Max',
    description:
      "PDT Max is a stock-taking and management app for retail stores, featuring seamless integration with the company's desktop application.",
    techUsed: ['flutter', 'dart', 'sqlite'],
    link: 'https://play.google.com/store/apps/details?id=com.rzfsoftware.pdt_mobile&pcampaignid=web_share',
  },
  {
    image: '/projects/rzf-canvasing.png',
    title: 'RZF Canvasing',
    description:
      "RZF Canvasing is a sales support app designed to assist salespeople and cashiers in making transactions outside the store, seamlessly connected to the company's desktop application.",
    techUsed: ['flutter', 'dart'],
  },
  {
    image: '/projects/rzf-resto.png',
    title: 'RZF Resto',
    description:
      'RZF Resto is a POS app specifically designed for restaurants and cafes, seamlessly connected to a web application for streamlined management.',
    techUsed: ['flutter', 'dart', 'firebase'],
  },
];
