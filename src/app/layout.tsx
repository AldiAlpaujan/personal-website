import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import CursorBackground from '@/components/CursorBackground';
import AppLayout from '@/components/layouts/AppLayout';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Toaster } from '@/lib/shadcn/ui/sonner';

const onestSans = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aldi | Personal Website',
  description: 'This is my personal website',
};

// Main Start
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${onestSans.variable} ${onestSans.className} relative h-fit w-full antialiased`}
      >
        <CursorBackground />
        <AppLayout sidebar={<Sidebar />}>{children}</AppLayout>
        <Toaster />
      </body>
    </html>
  );
}
