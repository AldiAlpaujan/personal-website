'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SidebarMenuItem } from '@/components/Sidebar/content';

// Fungsi bantu untuk membandingkan path secara presisi
const checkSimilarPath = (path: string, menuPath: string): boolean => {
  // 1. Cocokkan path persis
  if (menuPath === path) {
    return true;
  }

  // Hapus trailing slash jika ada, kecuali root '/'
  const sanitizedPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  const sanitizedMenuPath =
    menuPath.endsWith('/') && menuPath !== '/' ? menuPath.slice(0, -1) : menuPath;

  // 2. Cocokkan prefix dengan pemisah '/'
  return (
    sanitizedPath.startsWith(sanitizedMenuPath) && sanitizedPath[sanitizedMenuPath.length] === '/'
  );
};

interface SidebarMenuItemWithChildren extends SidebarMenuItem {
  children?: SidebarMenuItemWithChildren[];
}

const useActiveMenu = (items: SidebarMenuItemWithChildren[]) => {
  const path = usePathname()!;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    let bestMatchTitle: string | null = null;
    let bestMatchUrlLength = 0;

    const findMatch = (menuItems: SidebarMenuItemWithChildren[]) => {
      for (const item of menuItems) {
        if (checkSimilarPath(path, item.url)) {
          if (item.url.length > bestMatchUrlLength) {
            bestMatchTitle = item.title;
            bestMatchUrlLength = item.url.length;
          }
        }

        if (item.children && item.children.length > 0) {
          findMatch(item.children);
        }
      }
    };

    findMatch(items);
    setActiveMenu(bestMatchTitle);
  }, [path, items]);

  return activeMenu;
};

export default useActiveMenu;
