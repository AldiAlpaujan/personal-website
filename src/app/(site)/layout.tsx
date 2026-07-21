import AppLayout from '@/components/layouts/AppLayout';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout sidebar={<Sidebar />}>{children}</AppLayout>;
}
