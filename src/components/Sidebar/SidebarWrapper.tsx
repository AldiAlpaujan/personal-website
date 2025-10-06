'use client';

import { ReactNode } from 'react';
import { useSidebarContext } from '@/stores/SidebarContext';

export default function SidebarWrapper(props: { children: ReactNode }) {
  const { collapse } = useSidebarContext();
  return (
    <nav
      data-collapse={collapse}
      className="relative bg-background h-[90%] rounded-[10px] border p-5 pb-3 data-[collapse=true]:h-full transition-all duration-500"
    >
      {props.children}
    </nav>
  );
}
