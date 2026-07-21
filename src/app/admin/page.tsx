import { Metadata } from 'next';
import AdminDashboard from '@/modules/Admin/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard | Admin',
};

export const dynamic = 'force-dynamic';

export default AdminDashboard;
