'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@/stores/ThemeContext';

export default function AppLayout({
  sidebar,
  children,
}: {
  sidebar: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider>
      <div className="h-full w-full bg-transparent">
        <div className="container m-auto h-full grid grid-cols-10 gap-6">
          <div className="hidden h-screen sticky top-0 w-full col-span-4 md:grid md:grid-cols-5 md:gap-2">
            <div className="h-full w-full pr-0 col-span-5 md:p-2 md:pr-0 lg:p-8 lg:pr-0 lg:col-start-2 lg:col-span-4 xl:col-start-3 xl:col-span-3 2xl:p-14 2xl:pr-0">
              {sidebar}
            </div>
          </div>

          <div className="h-full  w-full col-span-10 md:col-span-6 grid grid-cols-6 gap-6 ">
            <div className="h-full w-full col-span-6 xl:col-span-5 lg:pt-6 lg:pr-6 2xl:pt-14 xl:pr-14">
              <main className="flex flex-col gap-3.5">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
