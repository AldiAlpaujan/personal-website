import { Metadata } from 'next';
import AdminEducations from '@/modules/Admin/Educations';

export const metadata: Metadata = {
  title: 'Educations | Admin',
};

export const dynamic = 'force-dynamic';

export default AdminEducations;
