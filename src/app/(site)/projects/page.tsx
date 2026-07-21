import { Metadata } from 'next';
import Projects from '@/modules/Site/Projects';

export const metadata: Metadata = {
  title: 'Projects | Personal Website',
  description: 'This is my personal website',
};

export const dynamic = 'force-dynamic';

export default Projects;
