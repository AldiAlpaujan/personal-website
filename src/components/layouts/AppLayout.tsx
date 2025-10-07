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
            <div className="h-full w-full col-span-5 py-10 pl-10 lg:py-12 lg:pl-12 2xl:py-14 2xl:pl-14 lg:col-start-2 lg:col-span-4 xl:col-start-3 xl:col-span-3 ">
              {sidebar}
            </div>
          </div>

          <div className="h-full  w-full col-span-10 md:col-span-6 grid grid-cols-6 gap-6 ">
            <div className="h-full w-full col-span-6 md:pt-10 xl:col-span-5 lg:pr-10 2xl:pt-14 xl:pr-14">
              <main className="flex flex-col gap-3.5 p-4 md:p-0">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
