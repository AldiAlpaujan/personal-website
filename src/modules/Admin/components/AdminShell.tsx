'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Briefcase, FolderGit2, GraduationCap, LayoutDashboard, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/lib/shadcn/ui/button';
import { cn } from '@/lib/shadcn/utils';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/admin/careers', label: 'Careers', icon: Briefcase },
  { href: '/admin/educations', label: 'Educations', icon: GraduationCap },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch('/api/admin/session', { method: 'DELETE' });
    toast.success('Logged out');
    router.replace('/admin/login');
    router.refresh();
  }

  return (
    <div className="container m-auto min-h-screen flex flex-col md:flex-row gap-6 p-4 md:p-8">
      <aside className="w-full md:w-56 shrink-0 flex flex-row md:flex-col gap-2 md:sticky md:top-8 md:h-fit">
        <p className="hidden md:block px-3 pb-2 text-lg font-bold">Admin</p>
        <div className="flex flex-1 flex-row md:flex-col gap-2 overflow-x-auto">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap hover:bg-accent',
                pathname === href && 'bg-accent font-medium'
              )}
            >
              <Icon className="size-4" /> {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-row md:flex-col gap-2 md:mt-auto md:pt-4">
          <ThemeToggle />
          <Button variant="destructive" onClick={logout} className="justify-start">
            <LogOut className="size-4" /> Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
