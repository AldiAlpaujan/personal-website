import Link from 'next/link';
import { getCareers } from '@/lib/firebase/repositories/careers';
import { getEducations } from '@/lib/firebase/repositories/educations';
import { getProjects } from '@/lib/firebase/repositories/projects';
import { Card, CardDescription, CardTitle } from '@/lib/shadcn/ui/card';
import AdminShell from '../components/AdminShell';

export default async function AdminDashboard() {
  const [projects, careers, educations] = await Promise.all([
    getProjects(),
    getCareers(),
    getEducations(),
  ]);

  const tiles = [
    { href: '/admin/projects', label: 'Projects', count: projects.length },
    { href: '/admin/careers', label: 'Careers', count: careers.length },
    { href: '/admin/educations', label: 'Educations', count: educations.length },
  ];

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tiles.map((tile) => (
          <Link key={tile.href} href={tile.href}>
            <Card className="hover:border-foreground/40 transition-colors">
              <CardTitle className="text-3xl">{tile.count}</CardTitle>
              <CardDescription>{tile.label}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
