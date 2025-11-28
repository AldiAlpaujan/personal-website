import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
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
        <div className="fixed inset-0 -z-10 bg-background opacity-30 bg-[radial-gradient(#757575_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <AppLayout sidebar={<Sidebar />}>{children}</AppLayout>
        <Toaster />
      </body>
    </html>
  );
}
