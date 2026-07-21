import { Metadata } from 'next';
import About from '@/modules/Site/About';

export const metadata: Metadata = {
  title: 'About | Personal Website',
  description: 'This is my personal website',
};

export const dynamic = 'force-dynamic';

export default About;
