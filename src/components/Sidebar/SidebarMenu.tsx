'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import useActiveMenu from '@/hooks/useActiveMenu';
import { Button } from '@/lib/shadcn/ui/button';
import { Separator } from '@/lib/shadcn/ui/separator';
import { useSidebarContext } from '@/stores/SidebarContext';
import ThemeToggle from '../ThemeToggle';
import { menu, socialMedia } from './content';

export default function SidebarMenu() {
  const { collapse } = useSidebarContext();
  const activeMenu = useActiveMenu(menu);

  return (
    <div
      data-collapse={collapse}
      className="h-full transition-all duration-500 pt-[140px] flex flex-col gap-3 data-[collapse=true]:pt-[160px]"
    >
      <Separator />
      <div className="flex flex-col gap-2">
        {menu.map((menu, idx) => {
          const isActive = activeMenu === menu.title;
          return (
            <Link key={idx} href={menu.url} className="w-full">
              <Button
                key={idx}
                data-active={isActive}
                variant={'sidebar'}
                size={'lg'}
                className="group gap-3 w-full"
              >
                <menu.icon className="size-5 group-hover:rotate-[-15deg] transition-all duration-500" />
                <p className="flex-1 text-start text-base">{menu.title}</p>
                {isActive && <ChevronRight />}
              </Button>
            </Link>
          );
        })}
      </div>
      <Separator />
      <div className="flex flex-col gap-1.5">
        <p className="text-start text-sm font-medium text-secondary-foreground">Social Media</p>
        <div className="flex gap-2.5">
          {socialMedia.map((menu, idx) => {
            return (
              <Link key={idx} href={menu.url}>
                <Button
                  size={'icon'}
                  className="text-sidebar-foreground bg-sidebar-menu hover:text-sidebar-foreground hover:bg-sidebar-menu"
                >
                  {menu.icon}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      <Separator />
      <ThemeToggle />
    </div>
  );
}
