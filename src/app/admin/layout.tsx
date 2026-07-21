import type { Metadata } from 'next';
import { ThemeProvider } from '@/stores/ThemeContext';

export const metadata: Metadata = {
  title: 'Admin | Personal Website',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
