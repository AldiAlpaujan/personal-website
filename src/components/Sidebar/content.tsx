import { ReactNode } from 'react';
import {
  Building2,
  FileSignature,
  Home,
  LucideIcon,
  MessageSquare,
  Phone,
  User,
} from 'lucide-react';

export interface SidebarMenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export const menu: SidebarMenuItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Projects',
    url: '/projects',
    icon: Building2,
  },
  {
    title: 'Blog',
    url: '/blog',
    icon: FileSignature,
  },
  {
    title: 'About',
    url: '/about',
    icon: User,
  },
  {
    title: 'Contact',
    url: '/contact',
    icon: Phone,
  },
  {
    title: 'Chatroom',
    url: '/chatroom',
    icon: MessageSquare,
  },
];

interface SocialMedia {
  title: string;
  url: string;
  icon: ReactNode;
}

export const socialMedia: SocialMedia[] = [
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/aldi-m-alpaujan',
    icon: <span className="icon-[meteor-icons--linkedin] size-4" />,
  },
  {
    title: 'Whatsapp',
    url: 'https://wa.me/6285156496541',
    icon: <span className="icon-[meteor-icons--whatsapp] size-4" />,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/aldialpaujan',
    icon: <span className="icon-[iconoir--instagram] size-5" />,
  },
  {
    title: 'Github',
    url: 'https://github.com/AldiAlpaujan',
    icon: <span className="icon-[mingcute--github-line] size-5" />,
  },
];
