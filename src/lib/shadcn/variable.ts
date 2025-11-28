import { Career } from '@/types/career';
import { Education } from '@/types/education';
import { Project } from '@/types/project';

export type TechIconType = { name: string; label: string; icon: string; themeCamo?: boolean };

export const techIcons: TechIconType[] = [
  { name: 'css', label: 'Css', icon: '/tech-icons/Css.svg' },
  { name: 'dart', label: 'Dart', icon: '/tech-icons/Dart.svg' },
  { name: 'express', label: 'Express', icon: '/tech-icons/Express.svg', themeCamo: true },
  { name: 'firebase', label: 'Firebase', icon: '/tech-icons/Firebase.svg' },
  { name: 'flutter', label: 'Flutter', icon: '/tech-icons/Flutter.svg' },
  { name: 'git', label: 'Git', icon: '/tech-icons/Git.svg' },
  { name: 'html', label: 'HTML', icon: '/tech-icons/Html.svg' },
  { name: 'javascript', label: 'Javascript', icon: '/tech-icons/Javascript.svg' },
  { name: 'mantine', label: 'Mantine', icon: '/tech-icons/Mantine.svg' },
  { name: 'mui', label: 'Mui', icon: '/tech-icons/Mui.svg' },
  { name: 'mysql', label: 'Mysql', icon: '/tech-icons/Mysql.svg' },
  { name: 'nestjs', label: 'Nest.js', icon: '/tech-icons/Nestjs.svg' },
  { name: 'nextjs', label: 'Next.js', icon: '/tech-icons/Nextjs.svg', themeCamo: true },
  { name: 'nodejs', label: 'Node.js', icon: '/tech-icons/Nodejs.svg' },
  { name: 'prisma', label: 'Prisma', icon: '/tech-icons/Prisma.svg', themeCamo: true },
  { name: 'reactjs', label: 'React.js', icon: '/tech-icons/Reactjs.svg' },
  { name: 'shadcn', label: 'Shadcn', icon: '/tech-icons/shadcn.svg', themeCamo: true },
  { name: 'sqlite', label: 'Sqlite', icon: '/tech-icons/Sqlite.svg' },
  { name: 'tailwindcss', label: 'Tailwindcss', icon: '/tech-icons/Tailwindcss.svg' },
  { name: 'typescript', label: 'Typescript', icon: '/tech-icons/Typescript.svg' },
  { name: 'vite', label: 'Vite', icon: '/tech-icons/Vite.svg' },
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
    image: '/projects/onepro.png',
    title: 'OnePro',
    description:
      'One Pro is a procurement management app designed to streamline purchasing processes, manage vendor data, and monitor order progress efficiently.',
    techUsed: ['reactjs', 'typescript', 'mantine', 'vite'],
    link: '',
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

export const careers: Career[] = [
  {
    image: '/careers/cerebrum.png',
    title: 'Mobile Engineer',
    linkTitle: 'Cerebrum.id',
    link: 'https://cerebrum.id',
    company: 'PT Cerebrum Edukanesia Nusantara ',
    location: 'Bandung, Indonesia',
    countryCode: 'ID',
    startDate: new Date('2024-10-01'),
    endDate: new Date('2025-09-1'),
    workingType: 'Full-time',
    workingSchema: 'Onsite',
    responsibilities: [
      'Developed 15+ educational mobile applications using Flutter that empower users to achieve their dream goals, such as entering top universities, becoming an ASN, working at BUMN, and more.',
      'Built applications focusing on high performance, scalability, and delivering a seamless user experience across Android and iOS platforms.',
      'Collaborated closely with UI/UX designers and backend developers to ensure consistent design implementation and robust API integrations.',
      'Developed Manakor, a mobile ERP (Enterprise Resource Planning) solution aimed at improving and streamlining the company’s operational and management processes.',
      'Actively engaged in feature development, performance optimization, bug fixing, and UI/UX improvements across multiple mobile applications within the Cerebrum ecosystem',
    ],
  },
  {
    image: '/careers/rzf-software.png',
    title: 'Mobile Developer',
    linkTitle: 'RzfSoftware',
    link: '',
    company: 'RZF Software',
    location: 'Kuningan, Indonesia',
    countryCode: 'ID',
    startDate: new Date('2022-07-01'),
    endDate: new Date('2024-10-01'),
    workingType: 'Intern & Full-time',
    workingSchema: 'Onsite',
    responsibilities: [
      'Develop mobile applications based on market needs.',
      'Develop mobile applications for specific client projects.',
      'Collaborate closely with clients to understand project requirements and expectations.',
      'Ensure the final product is not only functional but also intuitive and user-friendly.',
      'Ensure the highest standards in user experience, performance, and usability across all applications developed.',
    ],
  },
];
export const educations: Education[] = [
  {
    image: '/images/last-education.png',
    univ: 'SMK JAGARA',
    major: 'Computer and Network Engineering',
    link: 'Kuningan',
    location: 'Bandung, Indonesia',
    countryCode: 'ID',
    endDate: new Date('2023-06-1'),
  },
];
