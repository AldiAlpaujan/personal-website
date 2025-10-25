'use client';

import { MenuIcon, X } from 'lucide-react';
import { Button } from '@/lib/shadcn/ui/button';
import { useSidebarContext } from '@/stores/SidebarContext';

export default function SidebarToggle() {
  const { mobileOpen, toggleMobile } = useSidebarContext();

  return (
    <Button size={'icon'} onClick={toggleMobile}>
      {mobileOpen ? <X /> : <MenuIcon />}
    </Button>
  );
}
