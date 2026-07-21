import { Metadata } from 'next';
import AdminCareers from '@/modules/Admin/Careers';

export const metadata: Metadata = {
  title: 'Careers | Admin',
};

export const dynamic = 'force-dynamic';

export default AdminCareers;
