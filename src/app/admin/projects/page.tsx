import { Metadata } from 'next';
import AdminProjects from '@/modules/Admin/Projects';

export const metadata: Metadata = {
  title: 'Projects | Admin',
};

export const dynamic = 'force-dynamic';

export default AdminProjects;
